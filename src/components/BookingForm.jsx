"use client";
import { useState } from "react";
import { Button } from "./ui/button";
import { Dialog, DialogContent, DialogTrigger } from "./ui/dialog";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Checkbox } from "./ui/checkbox";
import { Switch } from "./ui/switch";
import { DialogHeader, DialogTitle, DialogDescription } from "./ui/dialog";
import {
  MoveUpRight,
  User,
  Mail,
  Phone,
  Globe,
  MapPin,
  Calendar,
  Smartphone,
} from "lucide-react";

const communicationOptions = ["Email", "Phone", "SMS"];
const platformOptions = ["Web", "Mobile", "Desktop"];
const services = [
  "Home Automation",
  "Smart Security",
  "Voice Control",
  "IoT Integration",
  "Other",
];
const devices = ["Smart Lock", "Sensor", "Smart Hub", "Camera"];
export default function BookingForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    country: "",
    city: "",
    service: "",
    date: "",
    devicesOwned: [],
    platforms: [],
    betaTester: false,
    contactPreference: [],
    comments: "",
    consent: false,
  });

  const [errors, setErrors] = useState({});
  const validate = () => {
    const newErrors = {};
    if (!formData.fullName || formData.fullName.length < 2) {
      newErrors.fullName = "Full name must be at least 2 characters.";
    }
    if (!formData.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Invalid email address.";
    }
    if (!formData.phone || !/^\+?[0-9\s\-()]{7,20}$/.test(formData.phone)) {
      newErrors.phone = "Invalid phone number.";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    setErrors((prev) => ({ ...prev, [field]: undefined }));
  };

  const toggleArrayItem = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: prev[field].includes(value)
        ? prev[field].filter((item) => item !== value)
        : [...prev[field], value],
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    const res = await fetch("/api/prebook", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });
    const result = await res.json();
    alert(result.message || result.error);
  };
  return (
    <div>
      <Dialog>
        <DialogTrigger className="group hidden md:block cursor-pointer bg-black text-white p-2 px-4 rounded-md text-base">
          <span className="flex items-center gap-2 justify-center">
            Book Now
            <MoveUpRight
              size={18}
              className="group-hover:scale-120 transition-all duration-300"
            />
          </span>
        </DialogTrigger>
        <DialogContent className=" md:p-6 p-10 bg-white rounded-xl shadow-xl max-h-screen overflow-y-auto ">
          <DialogHeader>
            <DialogTitle className="text-xl sm:text-3xl font-bold text-gray-900">
              Pre-Book Your Smart Home{" "}
            </DialogTitle>
            <DialogDescription className="text-gray-600 mt-2 text-sm sm:text-base">
              Join the future of home automation with homeasy.
            </DialogDescription>
          </DialogHeader>

          <form
            onSubmit={handleSubmit}
            className="w-full max-w-3xl mx-auto p-6 bg-white dark:bg-zinc-900  space-y-6 rounded-lg shadow-lg"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="fullName" className="flex items-center gap-2">
                  <User size={18} /> Full Name
                </Label>
                <Input
                  id="fullName"
                  value={formData.fullName}
                  onChange={(e) => handleChange("fullName", e.target.value)}
                  required
                />
                {errors.fullName && (
                  <p className="text-sm text-red-500 mt-1">{errors.fullName}</p>
                )}
              </div>

              <div>
                <Label htmlFor="email" className="flex items-center gap-2">
                  <Mail size={18} /> Email
                </Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleChange("email", e.target.value)}
                  required
                />
                {errors.email && (
                  <p className="text-sm text-red-500 mt-1">{errors.email}</p>
                )}
              </div>

              <div>
                <Label htmlFor="phone" className="flex items-center gap-2">
                  <Phone size={18} /> Phone
                </Label>
                <Input
                  id="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => handleChange("phone", e.target.value)}
                  required
                />
                {errors.phone && (
                  <p className="text-sm text-red-500 mt-1">{errors.phone}</p>
                )}
              </div>

              <div>
                <Label htmlFor="date">
                  <Calendar size={18} className="inline-block mr-1" /> Preferred
                  Date
                </Label>
                <Input
                  id="date"
                  type="date"
                  value={formData.date}
                  onChange={(e) => handleChange("date", e.target.value)}
                />
              </div>

              <div>
                <Label htmlFor="country" className="flex items-center gap-2">
                  <Globe size={18} /> Country
                </Label>
                <Input
                  id="country"
                  value={formData.country}
                  onChange={(e) => handleChange("country", e.target.value)}
                />
              </div>

              <div>
                <Label htmlFor="city" className="flex items-center gap-2">
                  <MapPin size={18} /> City
                </Label>
                <Input
                  id="city"
                  value={formData.city}
                  onChange={(e) => handleChange("city", e.target.value)}
                />
              </div>
            </div>

            <div>
              <Label>Interested Service</Label>
              <select
                className="w-full mt-1 px-3 py-2 border rounded-md dark:bg-zinc-800"
                value={formData.service}
                onChange={(e) => handleChange("service", e.target.value)}
              >
                <option value="">Select a service</option>
                {services.map((s) => (
                  <option key={s} value={s}>
                    {s}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <Label className="flex items-center gap-2">
                <Smartphone size={18} /> Which smart devices do you use?
              </Label>
              <div className="flex flex-wrap gap-4 mt-2">
                {devices.map((d) => (
                  <div key={d} className="flex items-center space-x-2">
                    <Checkbox
                      id={d}
                      checked={formData.devicesOwned.includes(d)}
                      onCheckedChange={() => toggleArrayItem("devicesOwned", d)}
                    />
                    <Label htmlFor={d}>{d}</Label>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <Label>Platform Preference</Label>
              <div className="flex flex-wrap gap-4 mt-2">
                {platformOptions.map((p) => (
                  <div key={p} className="flex items-center space-x-2">
                    <Checkbox
                      id={p}
                      checked={formData.platforms.includes(p)}
                      onCheckedChange={() => toggleArrayItem("platforms", p)}
                    />
                    <Label htmlFor={p}>{p}</Label>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <Label>Contact Preference</Label>
              <div className="flex flex-wrap gap-4 mt-2">
                {communicationOptions.map((c) => (
                  <div key={c} className="flex items-center space-x-2">
                    <Checkbox
                      id={c}
                      checked={formData.contactPreference.includes(c)}
                      onCheckedChange={() =>
                        toggleArrayItem("contactPreference", c)
                      }
                    />
                    <Label htmlFor={c}>{c}</Label>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <Label htmlFor="comments">Comments</Label>
              <Textarea
                id="comments"
                value={formData.comments}
                onChange={(e) => handleChange("comments", e.target.value)}
              />
            </div>

            <div className="flex items-center space-x-4">
              <Switch
                id="betaTester"
                checked={formData.betaTester}
                onCheckedChange={(val) => handleChange("betaTester", val)}
              />
              <Label htmlFor="betaTester">Interested in Beta Testing?</Label>
            </div>

            <div className="flex items-center space-x-4">
              <Switch
                id="consent"
                checked={formData.consent}
                onCheckedChange={(val) => handleChange("consent", val)}
              />
              <Label htmlFor="consent">I consent to being contacted</Label>
            </div>

            <Button type="submit" className="w-full">
              Submit
            </Button>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
}
