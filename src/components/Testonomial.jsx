import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function Testimonial() {
  const testimonials = [
    {
      name: "Amit Sharma",
      feedback:
        "Homeasy transformed the way we work. Their team is responsive and always delivers top-notch quality.",
      role: "Product Manager, InnoTech",
    },
    {
      name: "Priya Verma",
      feedback:
        "Truly exceptional experience! From the first consultation to project delivery, everything was seamless.",
      role: "CEO, BuildSmart",
    },
    {
      name: "Rohan Mehta",
      feedback:
        "Highly recommend Homeasy for their professionalism and creativity. They brought our vision to life perfectly.",
      role: "Founder, Creativa Studio",
    },
    {
      name: "Ananya Gupta",
      feedback:
        "Efficient, responsive, and reliable. Couldn't be happier with the results.",
      role: "Design Lead, StudioX",
    },
    {
      name: "Kunal Roy",
      feedback:
        "They delivered exactly what we needed — on time and beautifully crafted.",
      role: "Marketing Manager, BrightCorp",
    },
  ];

  return (
    <section className="py-24 px-6 md:px-20 bg-gray-50 overflow-hidden">
      <Carousel className="w-full p-4">
        <div className="text-left relative mb-12">
          <h2 className="text-4xl md:text-6xl font-bold mb-4">
            What Our Clients Say
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl">
            Hear directly from our clients about their experiences working with
            us and the impact we made together.
          </p>
          <div className="flex gap-4 absolute right-10 bottom-0 mt-4">
            <CarouselPrevious className="border border-gray-400 rounded-none" />
            <CarouselNext className="border border-gray-400 rounded-none" />
          </div>
        </div>

        <CarouselContent className="gap-x-6">
          {testimonials.map((item, index) => (
            <CarouselItem
              key={index}
              className="p-4 basis-full sm:basis-1/2 lg:basis-1/2"
            >
              <div className="h-full flex flex-col justify-between border border-gray-200 bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition duration-300">
                <div className="text-indigo-500 text-4xl mb-2">&ldquo;</div>
                <blockquote className="text-lg md:text-xl font-medium text-gray-700 mb-6 leading-relaxed">
                  {item.feedback}
                </blockquote>
                <div className="mt-auto flex items-start gap-3">
                  <Avatar>
                    <AvatarImage
                      src="https://github.com/shadcn.png"
                      alt="@shadcn"
                    />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="text-xl font-semibold text-gray-900">
                      {item.name}
                    </p>
                    <p className="text-sm text-gray-500">{item.role}</p>
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </section>
  );
}
