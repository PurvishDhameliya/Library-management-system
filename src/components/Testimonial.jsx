import { motion } from "framer-motion";
import PropTypes from "prop-types";

const Testimonial = ({ avatar, name, content }) => {
  const avatarVariants = {
    hovering: {
      scale: 1.1,
      transition: {
        yoyo: Infinity,
        duration: 1,
      },
    },
  };

  return (
    <div className="bg-white p-6 rounded-md shadow-md">
      <div className="flex items-center mb-4">
        <motion.img
          src={avatar}
          alt={`Avatar - ${name}`}
          className="rounded-full h-12 w-12 mr-4"
          variants={avatarVariants}
          whileHover="hovering"
        />
        <div>
          <h3 className="text-lg font-semibold">{name}</h3>
          {/* Add additional information like designation, etc. if needed */}
        </div>
      </div>
      <p className="text-gray-600">{content}</p>
    </div>
  );
};

Testimonial.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};
export default Testimonial;
