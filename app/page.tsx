import { ApartmentListing } from "@/components/apartment-listing"
import { FilterSidebar } from "@/components/filter-sidebar"
import { PriceRangeFilter } from "@/components/price-range-filter"
import { SortDropdown } from "@/components/sort-dropdown"

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50">
      <div className="container px-4 py-8 mx-auto">
        <h1 className="text-3xl font-bold tracking-tight md:text-4xl">Apartment Listings</h1>
        <p className="mt-2 text-gray-500">Find your perfect apartment in the area</p>

        <div className="flex flex-col gap-6 mt-8 lg:flex-row">
          <div className="hidden w-full max-w-xs lg:block">
            <FilterSidebar />
          </div>

          <div className="flex-1">
            <div className="flex flex-col items-start justify-between gap-4 mb-6 sm:flex-row sm:items-center">
              <PriceRangeFilter />
              <SortDropdown />
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <ApartmentListing
                id="1"
                title="Modern Downtown Loft"
                address="123 Main St, Downtown"
                price={1850}
                bedrooms={1}
                bathrooms={1}
                sqft={750}
                imageUrl="/placeholder.svg?height=300&width=400"
                amenities={["Gym", "Parking", "Laundry"]}
              />

              <ApartmentListing
                id="2"
                title="Spacious Family Apartment"
                address="456 Park Ave, Midtown"
                price={2400}
                bedrooms={2}
                bathrooms={2}
                sqft={1100}
                imageUrl="/placeholder.svg?height=300&width=400"
                amenities={["Pool", "Gym", "Parking", "Pets Allowed"]}
              />

              <ApartmentListing
                id="3"
                title="Luxury Highrise Apartment"
                address="789 Skyline Blvd, Uptown"
                price={3200}
                bedrooms={3}
                bathrooms={2}
                sqft={1500}
                imageUrl="/placeholder.svg?height=300&width=400"
                amenities={["Pool", "Gym", "Concierge", "Rooftop"]}
              />

              <ApartmentListing
                id="4"
                title="Cozy Studio Apartment"
                address="101 College St, University District"
                price={1200}
                bedrooms={0}
                bathrooms={1}
                sqft={500}
                imageUrl="/placeholder.svg?height=300&width=400"
                amenities={["Laundry", "Utilities Included"]}
              />

              <ApartmentListing
                id="5"
                title="Renovated Garden Apartment"
                address="202 Green St, Garden District"
                price={1650}
                bedrooms={1}
                bathrooms={1}
                sqft={800}
                imageUrl="/placeholder.svg?height=300&width=400"
                amenities={["Private Garden", "Parking", "Pets Allowed"]}
              />

              <ApartmentListing
                id="6"
                title="Penthouse with City Views"
                address="303 Skyview Dr, Downtown"
                price={4500}
                bedrooms={3}
                bathrooms={3}
                sqft={2000}
                imageUrl="/placeholder.svg?height=300&width=400"
                amenities={["Rooftop", "Concierge", "Gym", "Parking"]}
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
