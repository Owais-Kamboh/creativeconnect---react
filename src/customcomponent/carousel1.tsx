
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

const images = [
  'https://itginnovators.com/CreativePrints/BackendStyle/img/Sliders/1677362384_office-stationaries-banner-desktop-1-scaled.jpg',
  'https://itginnovators.com/CreativePrints/BackendStyle/img/Sliders/1685188752_giveaways-Banner-Desktop-1-scaled.jpg',
  'https://itginnovators.com/CreativePrints/BackendStyle/img/Sliders/1104796055_business-cards-banner-desktop-3-scaled.jpg',
];

export function Carousel1() {
  return (
    <Carousel className="w-[100%] ">
      <CarouselContent>
        {images.map((image, index) => (
          <CarouselItem key={index}>
            <img src={image} alt={`Image ${index + 1}`} className="w-full h-full object-cover" />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white/30 hover:bg-white/50 focus:ring-4 focus:ring-white rounded-full p-2 text-black shadow-lg" />
      <CarouselNext className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white/30 hover:bg-white/50 focus:ring-4 focus:ring-white rounded-full p-2 text-black shadow-lg" />
    </Carousel>
  )
}