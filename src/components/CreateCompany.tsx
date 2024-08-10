import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"

export default function Component() {
  return (
    <Card className="w-full max-w-md">
      <CardHeader>
        <CardTitle>Create a New Company</CardTitle>
        <CardDescription>Fill out the form below to add a new company to our platform.</CardDescription>
      </CardHeader>
      <CardContent className="grid gap-4">
        <div className="grid gap-2">
          <Label htmlFor="name">Company Name</Label>
          <Input id="name" placeholder="Enter company name" />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="city">City</Label>
          <Input id="city" placeholder="Enter city" />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="country">Country</Label>
          <Input id="country" placeholder="Enter country" />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="sector">Sector</Label>
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Select sector" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="0">Technology</SelectItem>
              <SelectItem value="1">Finance</SelectItem>
              <SelectItem value="2">Healthcare</SelectItem>
              <SelectItem value="3">Retail</SelectItem>
              <SelectItem value="4">Other</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="grid gap-2">
          <Label htmlFor="description">Description</Label>
          <Textarea id="description" placeholder="Provide a brief description of the company" />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="address">Address</Label>
          <Input id="address" placeholder="Enter address" />
        </div>
      </CardContent>
      <CardFooter>
        <Button
          
        >
          Create Company
        </Button>
      </CardFooter>
    </Card>
  )
}