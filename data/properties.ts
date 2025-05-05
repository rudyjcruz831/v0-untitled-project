import rentalListings from '../data/rental_listings.json'

export interface Property {
  id: string
  title: string
  description: string
  price: number
  bedrooms: number
  bathrooms: number
  squareFootage: number
  imageUrl: string
  location: string
  type: "apartment" | "house" | "condo"
  status: "available" | "pending" | "sold"
  features: string[]
  homeUrl: string
}

// Helper functions to extract numeric values from strings
function extractPrice(priceStr: string): number {
  // Remove currency symbols and convert to number
  const numericStr = priceStr.replace(/[^0-9]/g, '')
  return parseInt(numericStr) || 0
}

function extractNumber(str: string): number {
  // Extract first number from string
  const match = str.match(/\d+/)
  return match ? parseInt(match[0]) : 0
}

function extractSquareFootage(areaStr: string): number {
  // Extract first number from string
  const match = areaStr.match(/\d+/)
  return match ? parseInt(match[0]) : 0
}

// Transform the JSON data to match our Property interface
export const properties: Property[] = rentalListings.map((listing: any, index: number) => {
  // Extract numeric values from strings
  const price = extractPrice(listing.price)
  const bedrooms = extractNumber(listing.beds)
  const bathrooms = extractNumber(listing.baths)
  const squareFootage = extractSquareFootage(listing.area)

  // Extract city and state from address
  const addressParts = listing.address.split(',')
  const city = addressParts[1]?.trim() || ''
  const state = addressParts[2]?.trim() || ''
  const location = `${city}, ${state}`

  return {
    id: index.toString(),
    title: listing.address,
    description: `${bedrooms} bedroom, ${bathrooms} bathroom apartment in ${city}`,
    price: price,
    bedrooms: bedrooms,
    bathrooms: bathrooms,
    squareFootage: squareFootage,
    imageUrl: listing.image_url,
    location: location,
    type: "apartment",
    status: "available",
    features: [],
    homeUrl: listing.home_url
  }
}) 