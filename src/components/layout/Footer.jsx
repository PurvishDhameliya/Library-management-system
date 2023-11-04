import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className=" text-gray-700  flex justify-between px-32 p-20 bg-slate-200 items-center">
      {/* Social Icons */}
      <div className="flex items-center justify-center">
        <a href="#" className="mx-2">
          <FaFacebook size={24} color="#3b5998" />
        </a>
        <a href="#" className="mx-2">
          <FaTwitter size={24} color="#1da1f2" />
        </a>
        <a href="#" className="mx-2">
          <FaInstagram size={24} color="#e4405f" />
        </a>
      </div>

      {/* About */}
      <div className="flex gap-3 flex-col items-center">
        <p>&copy; 2023 Library Management System. All rights reserved.</p>
      </div>

      {/* Contact Us */}
      <div>
        <p>Contact Us</p>
        <p>Phone: +123456789</p>
        <p>Address: 123 Main St, City</p>
      </div>
    </footer>
  );
};

export default Footer;
