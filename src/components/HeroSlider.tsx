
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { motion } from "framer-motion";

const sliderItems = [
  {
    image: "/project-1.jpg",
    title: "Desenvolvimento Web"
  },
  {
    image: "/project-2.jpg",
    title: "Aplicações Mobile"
  },
  {
    image: "/project-3.jpg",
    title: "Design UI/UX"
  },
  {
    image: "/project-4.jpg",
    title: "Sistemas Empresariais"
  }
];

export const HeroSlider = () => {
  return (
    <div className="w-full h-[500px] relative overflow-hidden rounded-2xl">
      <motion.div 
        className="absolute -top-10 -left-10 w-full h-full bg-gradient-to-br from-indigo-500/30 to-purple-600/30 rounded-2xl blur-2xl z-0"
        animate={{ 
          opacity: [0.6, 0.8, 0.6],
          scale: [1, 1.05, 1],
          rotate: [0, 5, 0]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          repeatType: "reverse"
        }}
      />
      <Carousel className="w-full h-full rounded-2xl relative z-10" opts={{ loop: true, duration: 20 }}>
        <CarouselContent>
          {sliderItems.map((item, index) => (
            <CarouselItem key={index} className="relative">
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10" />
              <motion.img
                src={item.image}
                alt={item.title}
                className="w-full h-[500px] object-cover"
                initial={{ scale: 1 }}
                animate={{ scale: 1.1 }}
                transition={{ duration: 20, repeat: Infinity, repeatType: "reverse" }}
              />
              <motion.div 
                className="absolute bottom-8 left-8 z-20"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                <h3 className="text-3xl font-bold text-white mb-2">{item.title}</h3>
                <div className="h-1 w-24 bg-gradient-to-r from-indigo-500 to-purple-600" />
              </motion.div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
};
