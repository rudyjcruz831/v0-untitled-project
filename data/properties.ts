import rentalListings from './rental_listings.json'

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

// Helper function to extract numbers from strings
const extractNumber = (str: string): number => {
  if (!str || str === "-" || str === "None") return 0
  const numbers = str.match(/\d+/g)
  return numbers ? Number(numbers[0]) : 0
}

// Helper function to extract price from various formats
const extractPrice = (priceStr: string): number => {
  if (!priceStr) return 0
  // Handle formats like "$3,284+/mo", "1 bd: $2,889", "Studio: $2,492"
  const priceMatch = priceStr.match(/\$([\d,]+)/)
  return priceMatch ? Number(priceMatch[1].replace(/,/g, '')) : 0
}

// Helper function to extract square footage from various formats
const extractSquareFootage = (areaStr: string): number => {
  if (!areaStr || areaStr === "None None") return 0
  // Handle formats like "534-546 sq ft", "800 sq ft"
  const numbers = areaStr.match(/\d+/g)
  return numbers ? Number(numbers[0]) : 0
}

// Transform the JSON data to match our Property interface
export const properties: Property[] = rentalListings.map((listing: any, index: number) => {
  // Extract numeric values from strings
  const price = extractPrice(listing.price)
  const bedrooms = extractNumber(listing.beds)
  const bathrooms = extractNumber(listing.baths)
  const squareFootage = extractSquareFootage(listing.area)

  return {
    id: index.toString(),
    title: listing.address,
    description: `${bedrooms} bedroom, ${bathrooms} bathroom apartment in Cupertino`,
    price: price,
    bedrooms: bedrooms,
    bathrooms: bathrooms,
    squareFootage: squareFootage,
    imageUrl: listing.image_url,
    location: "Cupertino, CA",
    type: "apartment",
    status: "available",
    features: [],
    homeUrl: listing.home_url
  }
}) 