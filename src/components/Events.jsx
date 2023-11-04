
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import { Pagination } from 'swiper/modules';


const Events = ({ events }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.5, delay: 0.2 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const truncateDescription = (description, maxLength) => {
    return description.length > maxLength
      ? `${description.substring(0, maxLength)}...`
      : description;
  };

  return (
    <motion.div
      className="py-12 mx-8 md:mx-16 lg:mx-32"
      variants={containerVariants}
      initial="hidden" 
      animate="visible" 
    >
      <div className="container mx-auto">
        <h2 className="text-3xl font-semibold mb-6">Events and Announcements</h2>

        <Swiper
          slidesPerView={1}
          spaceBetween={8}
          pagination={{
            clickable: true,
          }}
          allowTouchMove={true}
          breakpoints={{
            '@0.00': {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            '@0.75': {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            '@1.00': {
              slidesPerView: 3,
              spaceBetween: 40,
            },
            '@1.50': {
              slidesPerView: 4,
              spaceBetween: 50,
            },
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          {events?.map((event) => (
            <SwiperSlide key={event.id}>
              <motion.div
                className="mb-8 bg-white p-6 rounded-md shadow-md flex flex-col mt-4 "
                variants={itemVariants}
                style={{ width: '300px', height: '300px' }}
              >
                <h3 className="text-xl font-semibold mb-2">{event.title}</h3>
                <p className="text-gray-600 mb-2">{event.date}</p>
                <p>{truncateDescription(event.description, 50)}</p>
                <Link to={`/events/${event.id}`}>
                  <motion.button
                    whileHover={{ scale: 1.1, backgroundColor: '#2D3A3A' }}
                    whileTap={{ scale: 0.9 }}
                    className="bg-yellow-500 text-white px-4 py-2 mt-4 rounded-md"
                  >
                    View Details
                  </motion.button>
                </Link>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </motion.div>
  );
};

Events.propTypes = {
  events: PropTypes.array.isRequired,
};

export default Events;
