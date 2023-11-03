// Events.js
import { motion } from "framer-motion";
import { Link } from "react-router-dom"; // If you have a route for event details
import PropTypes from "prop-types";

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
        <h2 className="text-3xl font-semibold mb-6">
          Events and Announcements
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events?.map((event) => (
            <motion.div
              key={event.id}
              className="mb-8 bg-white p-6 rounded-md shadow-md"
              variants={itemVariants}
            >
              <h3 className="text-xl font-semibold mb-2">{event.title}</h3>
              <p className="text-gray-600 mb-2">{event.date}</p>
              <p>{truncateDescription(event.description, 50)}</p>
              <Link to={`/events/${event.id}`}>
                <motion.button
                  whileHover={{ scale: 1.1, backgroundColor: "#2D3A3A" }}
                  whileTap={{ scale: 0.9 }}
                  className="bg-yellow-500 text-white px-4 py-2 mt-4 rounded-md"
                >
                  View Details
                </motion.button>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

Events.propTypes = {
  events: PropTypes.string.isRequired,
};
export default Events;
