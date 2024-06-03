"use client"

import { AvatarImage, AvatarFallback, Avatar } from "./ui/avatar"
import Link from "next/link"
import { Card } from "./ui/card"
import { CarouselItem, CarouselContent, CarouselPrevious, CarouselNext, CarouselUI } from "./ui/carousel"
import { Carousel } from "flowbite-react";
import { useRef } from "react";
import Image from "next/image"
import NewsCarousel from "./carsor"

export default function News() {
  const newsRef = useRef(null);
  const images1 = [
    '/food.jpg',
    '/sample.png',
    '/food.jpg',
    '/sample.jpeg',
  ];
  const images2 = [
    '/gelato.jpg',
    '/sample.png',
    '/smoothie.jpg',
    '/sample.jpeg',
  ];
  return (
    <section ref={newsRef} id="news" className="w-full py-7 md:py-7 lg:py-12 bg-gray-100 dark:bg-gray-800 border-b">
      <div className="px-4 pb-7 md:px-6 space-y-10 xl:space-y-16">
        <div className="flex justify-start max-w-[1600px] mx-auto gap-4 px-4 sm:px-6 md:px-10 md:grid-cols-2 md:gap-16">
          <h1 className="lg:leading-tighter text-3xl font-bold tracking-tighter sm:text-5xl">
            News
          </h1>
          <div className="pt-2 text-sm tracking-tighter sm:text-lg dark:bg-gray-800">
            instagramのアカウントは
            <a href="https://www.instagram.com/ten.ten.tea" className="font-medium text-blue-500 hover:text-blue-600">
              こちら
            </a>
          </div>
        </div>
      </div>
      <div className="container items-center object-center mx-auto px-6 md:px-10">
        <div className="grid md:grid-cols-2 gap-12 overflow-hidden">
          <div className="px-5 grid place-items-center overflow-hidden">
            <h2 className="border-b-4 border-[#7d6f49] text-2xl font-bold text-gray-800 dark:text-white mb-4">Latest Posts</h2>
            <div className="w-full lg:w-2/3 relative">
              <div className="w-full h-[300px]">
                <NewsCarousel images={images1} imageHeight={600} imageWidth={400}/>
              </div>
            </div>
          </div>
          <div className="grid place-items-center px-5">
            <h2 className="border-b-4 border-[#7d6f49] text-2xl font-bold text-gray-800 dark:text-white mb-4">In our Cafe</h2>
            <div className="w-full lg:w-2/3 relative">
              <div className="w-full h-[300px]">
                <NewsCarousel images={images2} imageHeight={600} imageWidth={400}/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

{/* <CarouselUI className="w-full lg:w-2/3 relative flex justify-center">
  <CarouselPrevious className="absolute left-0 z-10">
    <img src="/left-arrow.svg" alt="Previous" className="cursor-pointer"/>
  </CarouselPrevious>
  <CarouselContent>
    <CarouselItem>
      <Image
        alt="Instagram Post 1"
        className="object-cover w-full h-[300px]"
        height={600}
        src="/food.jpg"
        style={{
          aspectRatio: "500/500",
          objectFit: "cover",
        }}
        width={400}
      />
    </CarouselItem>
    <CarouselItem>
      <Image
        alt="Instagram Post 2"
        className="object-cover w-full h-[300px]"
        height={600}
        src="/sample.jpeg"
        style={{
          aspectRatio: "500/500",
          objectFit: "cover",
        }}
        width={400}
      />
    </CarouselItem>
    <CarouselItem>
      <Image
        alt="Instagram Post 3"
        className="object-cover w-full h-[300px]"
        height={600}
        src="/sample.jpeg"
        style={{
          aspectRatio: "500/500",
          objectFit: "cover",
        }}
        width={400}
      />
    </CarouselItem>
  </CarouselContent>
  <CarouselNext className="absolute right-0 z-10">
    <img src="/right-arrow.svg" alt="Next" className="cursor-pointer"/>
  </CarouselNext>
</CarouselUI> */}