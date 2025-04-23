import { redirect } from "next/navigation"
import { Plus } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { RecentListingsTable } from "@/components/recent-listings-table"
import { getSession } from "@/lib/auth"

export default async function ListingsPage() {
  const session = await getSession()

  if (!session) {
    redirect("/auth/signin")
  }

  return (
    <div className="container py-8">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-bold">Apartment Listings</h1>
        <Button>
          <Plus className="w-4 h-4 mr-2" />
          Add New Listing
        </Button>
      </div>

      <Tabs defaultValue="all" className="mb-8">
        <TabsList>
          <TabsTrigger value="all">All Listings</TabsTrigger>
          <TabsTrigger value="active">Active</TabsTrigger>
          <TabsTrigger value="pending">Pending</TabsTrigger>
          <TabsTrigger value="inactive">Inactive</TabsTrigger>
        </TabsList>
        <TabsContent value="all">
          <Card>
            <CardHeader>
              <CardTitle>All Listings</CardTitle>
              <CardDescription>Manage all your apartment listings</CardDescription>
            </CardHeader>
            <CardContent>
              <RecentListingsTable />
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="active">
          <Card>
            <CardHeader>
              <CardTitle>Active Listings</CardTitle>
              <CardDescription>Currently active and visible listings</CardDescription>
            </CardHeader>
            <CardContent>
              <RecentListingsTable />
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="pending">
          <Card>
            <CardHeader>
              <CardTitle>Pending Listings</CardTitle>
              <CardDescription>Listings awaiting approval or verification</CardDescription>
            </CardHeader>
            <CardContent>
              <RecentListingsTable />
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="inactive">
          <Card>
            <CardHeader>
              <CardTitle>Inactive Listings</CardTitle>
              <CardDescription>Hidden or deactivated listings</CardDescription>
            </CardHeader>
            <CardContent>
              <RecentListingsTable />
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
