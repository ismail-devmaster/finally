"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  AlertCircle,
  Calendar,
  Mail,
  Phone,
  User,
  Edit2,
  Bell,
  Shield,
} from "lucide-react";

export default function MyProfilePage() {
  const [userInfo, setUserInfo] = useState({
    firstName: "John",
    lastName: "Doe",
    email: "johndoe@example.com",
    phone: "+1 (555) 123-4567",
    dob: "1988-01-15",
    address: "123 Main St, Anytown, USA 12345",
    medicalHistory:
      "Allergies: Penicillin, Peanuts\nChronic Conditions: Hypertension (2015), Type 2 Diabetes (2018)\nPast Surgeries: Appendectomy (2010)",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = e.target;
    setUserInfo((prevInfo) => ({ ...prevInfo, [id]: value }));
  };

  const handleSaveChanges = () => {
    // Here you would typically send the updated info to a server
    console.log("Saving changes:", userInfo);
    // For now, we'll just update the state
  };

  return (
    <div className="w-full max-w-6xl mx-auto ">
      <h1 className="text-4xl font-extrabold text-gray-900 mb-8 text-center dark:text-white">
        My Health Profile
      </h1>

      <Tabs defaultValue="view" className="w-full">
        <TabsList className="grid w-full grid-cols-3 mb-12 bg-white rounded-full p-1 shadow-lg">
          <TabsTrigger
            value="view"
            className="rounded-full py-3 transition-all duration-300 ease-in-out"
          >
            <User className="w-5 h-5 mr-2" />
            View Profile
          </TabsTrigger>
          <TabsTrigger
            value="edit"
            className="rounded-full py-3 transition-all duration-300 ease-in-out"
          >
            <Edit2 className="w-5 h-5 mr-2" />
            Edit Profile
          </TabsTrigger>
          <TabsTrigger
            value="notifications"
            className="rounded-full py-3 transition-all duration-300 ease-in-out"
          >
            <Bell className="w-5 h-5 mr-2" />
            Notifications
          </TabsTrigger>
        </TabsList>

        <TabsContent value="view">
          <Card className="bg-white/50 backdrop-blur-lg border-none shadow-xl">
            <CardHeader>
              <CardTitle className="text-3xl font-bold text-gray-800">
                Personal Information
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-8">
              <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-8">
                <Avatar className="h-32 w-32 border-4 border-white shadow-lg">
                  <AvatarImage
                    src="/placeholder.svg?height=128&width=128"
                    alt="Profile Picture"
                  />
                  <AvatarFallback className="text-3xl">
                    {userInfo.firstName[0]}
                    {userInfo.lastName[0]}
                  </AvatarFallback>
                </Avatar>
                <div className="text-center md:text-left">
                  <h2 className="text-3xl font-bold text-gray-900">
                    {userInfo.firstName} {userInfo.lastName}
                  </h2>
                  <p className="text-gray-500 text-lg">Patient ID: 123456</p>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex items-center space-x-3 bg-white p-4 rounded-lg shadow-md transition-all duration-300 hover:shadow-xl">
                  <User className="h-6 w-6 text-blue-500" />
                  <span className="text-lg">
                    {new Date().getFullYear() -
                      new Date(userInfo.dob).getFullYear()}{" "}
                    years old
                  </span>
                </div>
                <div className="flex items-center space-x-3 bg-white p-4 rounded-lg shadow-md transition-all duration-300 hover:shadow-xl">
                  <Phone className="h-6 w-6 text-green-500" />
                  <span className="text-lg">{userInfo.phone}</span>
                </div>
                <div className="flex items-center space-x-3 bg-white p-4 rounded-lg shadow-md transition-all duration-300 hover:shadow-xl">
                  <Mail className="h-6 w-6 text-purple-500" />
                  <span className="text-lg">{userInfo.email}</span>
                </div>
                <div className="flex items-center space-x-3 bg-white p-4 rounded-lg shadow-md transition-all duration-300 hover:shadow-xl">
                  <Calendar className="h-6 w-6 text-red-500" />
                  <span className="text-lg">
                    Born on {new Date(userInfo.dob).toLocaleDateString()}
                  </span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="mt-8 bg-white/50 backdrop-blur-lg border-none shadow-xl">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-gray-800">
                Medical History Summary
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="medical-history">
                  <AccordionTrigger className="text-lg font-semibold">
                    Medical History
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="text-gray-700 whitespace-pre-line">
                      {userInfo.medicalHistory}
                    </p>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>

          <Card className="mt-8 bg-white/50 backdrop-blur-lg border-none shadow-xl">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-gray-800">
                Insurance Information
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center space-x-3 bg-white p-4 rounded-lg shadow-md">
                  <Shield className="h-6 w-6 text-indigo-500" />
                  <div>
                    <p className="font-semibold">Provider:</p>
                    <p className="text-gray-700">HealthGuard Insurance</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3 bg-white p-4 rounded-lg shadow-md">
                  <AlertCircle className="h-6 w-6 text-yellow-500" />
                  <div>
                    <p className="font-semibold">Policy Number:</p>
                    <p className="text-gray-700">HGI-987654321</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3 bg-white p-4 rounded-lg shadow-md">
                  <User className="h-6 w-6 text-teal-500" />
                  <div>
                    <p className="font-semibold">Group Number:</p>
                    <p className="text-gray-700">HG-GROUP-001</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3 bg-white p-4 rounded-lg shadow-md">
                  <Calendar className="h-6 w-6 text-pink-500" />
                  <div>
                    <p className="font-semibold">Coverage Period:</p>
                    <p className="text-gray-700">Jan 1, 2023 - Dec 31, 2023</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="edit">
          <Card className="bg-white/50 backdrop-blur-lg border-none shadow-xl">
            <CardHeader>
              <CardTitle className="text-3xl font-bold text-gray-800">
                Edit Personal Information
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="firstName" className="text-lg font-medium">
                      First Name
                    </Label>
                    <Input
                      id="firstName"
                      value={userInfo.firstName}
                      onChange={handleInputChange}
                      className="text-lg p-3"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName" className="text-lg font-medium">
                      Last Name
                    </Label>
                    <Input
                      id="lastName"
                      value={userInfo.lastName}
                      onChange={handleInputChange}
                      className="text-lg p-3"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-lg font-medium">
                      Email
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      value={userInfo.email}
                      onChange={handleInputChange}
                      className="text-lg p-3"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-lg font-medium">
                      Phone
                    </Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={userInfo.phone}
                      onChange={handleInputChange}
                      className="text-lg p-3"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="dob" className="text-lg font-medium">
                      Date of Birth
                    </Label>
                    <Input
                      id="dob"
                      type="date"
                      value={userInfo.dob}
                      onChange={handleInputChange}
                      className="text-lg p-3"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="address" className="text-lg font-medium">
                    Address
                  </Label>
                  <Textarea
                    id="address"
                    value={userInfo.address}
                    onChange={handleInputChange}
                    className="text-lg p-3"
                  />
                </div>

                <div className="space-y-2">
                  <Label
                    htmlFor="medicalHistory"
                    className="text-lg font-medium"
                  >
                    Medical History
                  </Label>
                  <Textarea
                    id="medicalHistory"
                    rows={6}
                    value={userInfo.medicalHistory}
                    onChange={handleInputChange}
                    className="text-lg p-3"
                  />
                </div>

                <div className="space-y-2">
                  <Label
                    htmlFor="current-password"
                    className="text-lg font-medium"
                  >
                    Current Password
                  </Label>
                  <Input
                    id="current-password"
                    type="password"
                    className="text-lg p-3"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="new-password" className="text-lg font-medium">
                    New Password
                  </Label>
                  <Input
                    id="new-password"
                    type="password"
                    className="text-lg p-3"
                  />
                </div>

                <div className="space-y-2">
                  <Label
                    htmlFor="confirm-password"
                    className="text-lg font-medium"
                  >
                    Confirm New Password
                  </Label>
                  <Input
                    id="confirm-password"
                    type="password"
                    className="text-lg p-3"
                  />
                </div>
              </form>
            </CardContent>
            <CardFooter>
              <Button
                onClick={handleSaveChanges}
                className="w-full text-lg py-6 bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600 transition-all duration-300"
              >
                Save Changes
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="notifications">
          <Card className="bg-white/50 backdrop-blur-lg border-none shadow-xl">
            <CardHeader>
              <CardTitle className="text-3xl font-bold text-gray-800">
                Notification Preferences
              </CardTitle>
              <CardDescription className="text-lg text-gray-600">
                Manage how you receive notifications
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-8">
              <div className="space-y-6">
                <h3 className="text-2xl font-semibold text-gray-800">
                  Appointment Reminders
                </h3>
                <div className="flex items-center justify-between bg-white p-4 rounded-lg shadow-md">
                  <Label htmlFor="email-reminders" className="text-lg">
                    Email Reminders
                  </Label>
                  <Switch id="email-reminders" />
                </div>
                <div className="flex items-center justify-between bg-white p-4 rounded-lg shadow-md">
                  <Label htmlFor="sms-reminders" className="text-lg">
                    SMS Reminders
                  </Label>
                  <Switch id="sms-reminders" />
                </div>
                <div className="flex items-center justify-between bg-white p-4 rounded-lg shadow-md">
                  <Label htmlFor="push-reminders" className="text-lg">
                    Push Notifications
                  </Label>
                  <Switch id="push-reminders" />
                </div>
              </div>

              <div className="space-y-6">
                <h3 className="text-2xl font-semibold text-gray-800">
                  Test Results Notifications
                </h3>
                <div className="space-y-2 bg-white p-4 rounded-lg  shadow-md">
                  <Label htmlFor="test-results-method" className="text-lg">
                    Preferred Notification Method
                  </Label>
                  <Select>
                    <SelectTrigger
                      id="test-results-method"
                      className="text-lg  p-3"
                    >
                      <SelectValue placeholder="Select method" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="email">Email</SelectItem>
                      <SelectItem value="sms">SMS</SelectItem>
                      <SelectItem value="push">Push Notification</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-6">
                <h3 className="text-2xl font-semibold text-gray-800">
                  General Announcements
                </h3>
                <div className="flex items-center justify-between bg-white p-4 rounded-lg shadow-md">
                  <Label htmlFor="general-announcements" className="text-lg">
                    Receive General Announcements
                  </Label>
                  <Switch id="general-announcements" />
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full text-lg py-6 bg-gradient-to-r from-green-500 to-teal-500 hover:from-green-600 hover:to-teal-600 transition-all duration-300">
                Save Notification Preferences
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
