"use client"

import { useState, useEffect } from "react"
import { Slider } from "@/components/ui/slider"
import { Input } from "@/components/ui/input"
import { Card } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { SearchBar } from "@/components/ui/search-bar"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { properties, Property } from "@/data/properties"

export default function ListingsPage() {
  const [priceRange, setPriceRange] = useState([0, 10000])
  const [bathrooms, setBathrooms] = useState(0)
  const [squareFootage, setSquareFootage] = useState([0, 2000])
  const [bedrooms, setBedrooms] = useState(0)
  const [filteredProperties, setFilteredProperties] = useState<Property[]>([])
  const [currentPage, setCurrentPage] = useState(1)
  const [searchQuery, setSearchQuery] = useState("")

  const itemsPerPage = 9

  useEffect(() => {
    // Apply filters
    const filtered = properties.filter(property => {
      const matchesPrice = property.price >= priceRange[0] && property.price <= priceRange[1]
      const matchesBathrooms = bathrooms === 0 || property.bathrooms >= bathrooms
      const matchesSquareFootage = property.squareFootage >= squareFootage[0] && property.squareFootage <= squareFootage[1]
      const matchesBedrooms = bedrooms === 0 || property.bedrooms >= bedrooms
      const matchesSearch = searchQuery === "" || 
        property.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        property.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        property.location.toLowerCase().includes(searchQuery.toLowerCase())

      return matchesPrice && matchesBathrooms && matchesSquareFootage && matchesBedrooms && matchesSearch
    })

    setFilteredProperties(filtered)
    setCurrentPage(1) // Reset to first page when filters change
  }, [priceRange, bathrooms, squareFootage, bedrooms, searchQuery])

  const totalPages = Math.ceil(filteredProperties.length / itemsPerPage)
  const startIndex = (currentPage - 1) * itemsPerPage
  const endIndex = startIndex + itemsPerPage
  const currentProperties = filteredProperties.slice(startIndex, endIndex)

  const handleSearch = (query: string) => {
    setSearchQuery(query)
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-4">Property Listings</h1>
        <SearchBar onSearch={handleSearch} />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {/* Filters Section */}
        <div className="md:col-span-1 space-y-6">
          <Card className="p-4">
            <h2 className="text-lg font-semibold mb-4">Filters</h2>
            
            {/* Price Range Filter */}
            <div className="space-y-2">
              <Label>Price Range</Label>
              <Slider
                min={0}
                max={10000}
                step={100}
                value={priceRange}
                onValueChange={setPriceRange}
                className="w-full"
              />
              <div className="flex justify-between text-sm text-gray-500">
                <span>${priceRange[0].toLocaleString()}</span>
                <span>${priceRange[1].toLocaleString()}</span>
              </div>
            </div>

            {/* Bathrooms Filter */}
            <div className="space-y-2 mt-4">
              <Label>Bathrooms</Label>
              <Input
                type="number"
                min={0}
                value={bathrooms}
                onChange={(e) => setBathrooms(Number(e.target.value))}
                placeholder="Any"
              />
            </div>

            {/* Square Footage Filter */}
            <div className="space-y-2 mt-4">
              <Label>Square Footage</Label>
              <Slider
                min={0}
                max={2000}
                step={100}
                value={squareFootage}
                onValueChange={setSquareFootage}
                className="w-full"
              />
              <div className="flex justify-between text-sm text-gray-500">
                <span>{squareFootage[0]} sqft</span>
                <span>{squareFootage[1]} sqft</span>
              </div>
            </div>

            {/* Bedrooms Filter */}
            <div className="space-y-2 mt-4">
              <Label>Bedrooms</Label>
              <Input
                type="number"
                min={0}
                value={bedrooms}
                onChange={(e) => setBedrooms(Number(e.target.value))}
                placeholder="Any"
              />
            </div>
          </Card>
        </div>

        {/* Results Section */}
        <div className="md:col-span-3">
          <div className="mb-4">
            <p className="text-sm text-gray-500">
              Showing {filteredProperties.length} properties
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {currentProperties.map((property) => (
              <Card key={property.id} className="p-4">
                <div className="aspect-video bg-gray-200 rounded-md mb-4">
                  <img
                    src={property.imageUrl}
                    alt={property.title}
                    className="w-full h-full object-cover rounded-md"
                  />
                </div>
                <h3 className="font-semibold">{property.title}</h3>
                <p className="text-gray-600">${property.price.toLocaleString()}/mo</p>
                <div className="flex gap-2 mt-2 text-sm text-gray-500">
                  <span>{property.bedrooms} beds</span>
                  <span>•</span>
                  <span>{property.bathrooms} baths</span>
                  <span>•</span>
                  <span>{property.squareFootage} sqft</span>
                </div>
                <p className="text-sm text-gray-500 mt-2">{property.location}</p>
                <a 
                  href={property.homeUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="mt-4 inline-block text-sm text-blue-600 hover:text-blue-800"
                >
                  View Source →
                </a>
              </Card>
            ))}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex justify-center items-center gap-2 mt-8">
              <Button
                variant="outline"
                size="icon"
                onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                disabled={currentPage === 1}
              >
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <span className="text-sm">
                Page {currentPage} of {totalPages}
              </span>
              <Button
                variant="outline"
                size="icon"
                onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                disabled={currentPage === totalPages}
              >
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}