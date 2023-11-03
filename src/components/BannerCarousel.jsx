import { Carousel } from "react-responsive-carousel";
import { motion } from "framer-motion";

import b1 from "../assets/b1.jpg";
import b2 from "../assets/b2.jpg";
import b3 from "../assets/b3.jpg";

const BannerCarousel = () => {
    const bannerImages = [b1, b2, b3];

  const bannerSettings = {
    showArrows: true,
    showThumbs: false,
    infiniteLoop: true,
  };

  const avatarVariants = {
    waving: {
      rotate: [0, -20, 20, -20, 0],
      transition: {
        duration: 1.5,
        repeat: Infinity,
      },
    },
  };
  return (
    <section>
          <Carousel {...bannerSettings} className="">
            {bannerImages.map((image, index) => (
              <div key={index} className="relative">
                <motion.img
                  src={image}
                  alt={`Banner ${index + 1}`}
                  style={{ height: "41em" }}
                  className="rounded-xl"
                />
                <motion.div
                  className="text-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white"
                  variants={avatarVariants}
                  initial="waving"
                  animate="waving"
                >
                  📚
                </motion.div>
              </div>
            ))}
          </Carousel>
        </section>
  )
}

export default BannerCarousel