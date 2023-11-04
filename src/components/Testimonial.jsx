// TestimonialsSlider.js
import { motion } from "framer-motion";
import PropTypes from "prop-types";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";

const Testimonial = ({ testimonials }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.5, delay: 0.2 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <motion.div
      className="py-12 mx-8 md:mx-16 lg:mx-32"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="container mx-auto">
        <h2 className="text-3xl font-semibold mb-6">Client Testimonials</h2>

        <Swiper
          slidesPerView={1}
          spaceBetween={8}
          allowTouchMove={true}
          loop={true} 
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          breakpoints={{
            "@0.00": {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            "@0.75": {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            "@1.00": {
              slidesPerView: 3,
              spaceBetween: 40,
            },
            "@1.50": {
              slidesPerView: 4,
              spaceBetween: 50,
            },
          }}
          className="mySwiper"
        >
          {testimonials?.map((testimonial) => (
            <SwiperSlide key={testimonial.id}>
              <motion.div
                className="mb-8 bg-white p-6 rounded-md shadow-md flex flex-col mt-4 "
                variants={itemVariants}
                style={{ width: "300px", height: "300px" }}
              >
                <div className="flex items-center mb-4">
                  <motion.img
                    src={testimonial.avatar}
                    alt={`Avatar - ${testimonial.name}`}
                    className="rounded-full h-12 w-12 mr-4"
                    variants={{
                      hovering: {
                        scale: 1.1,
                        transition: { yoyo: Infinity, duration: 1 },
                      },
                    }}
                    whileHover="hovering"
                  />
                  <div>
                    <h3 className="text-lg font-semibold">
                      {testimonial.name}
                    </h3>
                    {/* Add additional information like designation, etc. if needed */}
                  </div>
                </div>
                <p className="text-gray-600">{testimonial.content}</p>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </motion.div>
  );
};

Testimonial.propTypes = {
  testimonials: PropTypes.array.isRequired,
};

export default Testimonial;
