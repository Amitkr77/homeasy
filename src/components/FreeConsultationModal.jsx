import { Button } from "./ui/button";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "./ui/dialog";
import { MoveUpRight } from "lucide-react";
export default function FreeConsultationDialog({
  triggerText = "Free consultation",
  buttonClass = "",
}) {
  return (
    <Dialog>
      {/* Dialog Trigger */}
      <DialogTrigger asChild>
        <Button
          className={`group hidden md:block cursor-pointer ${buttonClass}`}
        >
          <span className="flex items-center gap-2 justify-center">
            {triggerText}
            <MoveUpRight
              size={18}
              className="group-hover:scale-120 transition-all duration-300"
            />
          </span>
        </Button>
      </DialogTrigger>

      {/* Dialog Content */}
      <DialogContent className="max-w-2xl w-full mx-auto p-6  bg-white rounded-xl shadow-xl ">
        <DialogHeader>
          <DialogTitle className="text-3xl font-bold text-gray-900">
            Book Your Free Consultation
          </DialogTitle>
          <DialogDescription className="text-gray-600 mt-2 text-sm">
            Fill out the form below and we’ll reach out to help bring your smart
            home ideas to life.
          </DialogDescription>
        </DialogHeader>

        {/* Form */}
        <form className="space-y-2" onSubmit={(e) => e.preventDefault()}>
          <div className="flex items-center justify-between">
            {/* Name Field */}
            <div>
              <label className="block text-sm text-gray-800 mb-2">Name</label>
              <input
                type="text"
                className="w-full px-5 py-3 border rounded bg-white/70"
                placeholder="Enter your full name"
                required
              />
            </div>

            {/* Email Field */}
            <div>
              <label className="block text-sm text-gray-800 mb-2">Email</label>
              <input
                type="email"
                className="w-full px-5 py-3 border rounded bg-white/70"
                placeholder="you@example.com"
                required
              />
            </div>
          </div>

          {/* Smart Home Device Usage Field */}
          <div>
            <label className="block text-sm text-gray-800 mb-2">
              Are you already using smart home devices?
            </label>
            <select
              className="w-full px-5 py-3 border rounded bg-white/70"
              required
            >
              <option value="">Select an option</option>
              <option value="yes">Yes</option>
              <option value="no">No</option>
              <option value="planning">Planning to</option>
            </select>
          </div>

          {/* Preferred Contact Method Field */}
          <div>
            <label className="block text-sm text-gray-800 mb-2">
              Preferred Contact Method
            </label>
            <select
              className="w-full px-5 py-3 border rounded bg-white/70"
              required
            >
              <option value="">Choose a method</option>
              <option value="email">Email</option>
              <option value="phone">Phone</option>
              <option value="whatsapp">WhatsApp</option>
            </select>
          </div>

          {/* Address Field */}
          <div>
            <label className="block text-sm text-gray-800 mb-2">Address</label>
            <input
              type="text"
              className="w-full px-5 py-3 border rounded bg-white/70"
              placeholder="City, State, Country"
            />
          </div>

          {/* Additional Message Field */}
          <div>
            <label className="block text-sm text-gray-800 mb-2">
              Additional Message
            </label>
            <textarea
              className="w-full px-5 py-3 border rounded bg-white/70"
              placeholder="Tell us more about your project..."
              rows="2"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-gray-900 text-white py-3 rounded font-semibold hover:bg-gray-800 transition"
          >
            Submit Request
          </button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
