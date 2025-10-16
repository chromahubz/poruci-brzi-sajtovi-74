import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface BannerSlide {
  title: string;
  subtitle: string;
  description: string;
  backgroundImage: string;
  fontFamily: string;
}

const PromoBanner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides: BannerSlide[] = [
    {
      title: "Profesionalni Web Sajtovi",
      subtitle: "Izrada modernih i responzivnih sajtova",
      description: "Vaš biznis zaslužuje najbolje - brzo, kvalitetno, pristupačno",
      backgroundImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=50&auto=format&fit=crop",
      fontFamily: "'Playfair Display', serif"
    },
    {
      title: "E-Commerce Rešenja",
      subtitle: "Online prodavnice koje prodaju",
      description: "Kompletna rešenja za online prodaju - od ideje do realizacije",
      backgroundImage: "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&q=50&auto=format&fit=crop",
      fontFamily: "'Bebas Neue', sans-serif"
    },
    {
      title: "Brza Isporuka - 48h",
      subtitle: "Vaš sajt spreman za vikend",
      description: "Ne čekajte nedeljama - počnite odmah da zarađujete online",
      backgroundImage: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&q=50&auto=format&fit=crop",
      fontFamily: "'Oswald', sans-serif"
    },
    {
      title: "SEO Optimizacija",
      subtitle: "Budite prvi na Google-u",
      description: "Optimizujemo vaš sajt za najbolje rezultate u pretraživačima",
      backgroundImage: "https://images.unsplash.com/photo-1555421689-d68471e189f2?w=800&q=50&auto=format&fit=crop",
      fontFamily: "'Roboto Condensed', sans-serif"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden shadow-elegant bg-gray-900">
      {/* Background Images - crossfade between them */}
      <div className="absolute inset-0">
        {slides.map((slide, index) => (
          <motion.div
            key={index}
            initial={false}
            animate={{
              opacity: currentSlide === index ? 1 : 0,
            }}
            transition={{ duration: 1 }}
            className="absolute inset-0"
          >
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: `url(${slide.backgroundImage})`,
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/80 to-black/70" />
            </div>
          </motion.div>
        ))}
      </div>

      {/* Content */}
      <div className="relative h-full flex flex-col justify-center px-8 md:px-16 text-white z-10 select-none">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4"
              style={{ fontFamily: slides[currentSlide].fontFamily }}
            >
              {slides[currentSlide].title}
            </motion.h2>

            <motion.h3
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-2xl md:text-3xl font-semibold mb-4 text-cyan-300"
              style={{ fontFamily: slides[currentSlide].fontFamily }}
            >
              {slides[currentSlide].subtitle}
            </motion.h3>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="text-lg md:text-xl max-w-2xl text-gray-200"
              style={{ fontFamily: slides[currentSlide].fontFamily }}
            >
              {slides[currentSlide].description}
            </motion.p>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex gap-2 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? 'bg-white w-8'
                : 'bg-white/40 hover:bg-white/60'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default PromoBanner;
