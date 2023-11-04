import "react-responsive-carousel/lib/styles/carousel.min.css";

import { eventsAndAnnouncements } from "../constants/apidata";
import Layout from "./layout/Layout";

import Testimonial from "./Testimonial";
import Events from "./Events";
import Contact from "./Contact";
import NewArriaval from "./NewArriaval";
import FeaturedBooks from "./FeaturedBooks";
import BannerCarousel from "./BannerCarousel";
import avatar1 from "../assets/author1.jpg";
import avatar2 from "../assets/author2.jpg";
import avatar3 from "../assets/author3.jpg";

const testimonialsData = [
  {
    id: 1,
    avatar: avatar1,
    name: "John Doe",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse potenti.",
  },
  {
    id: 2,
    avatar: avatar2,
    name: "Jane Doe",
    content:
      "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
  },
  {
    id: 3,
    avatar: avatar3,
    name: "Alice Smith",
    content:
      "Curabitur consectetur, erat vel facilisis venenatis, turpis ligula vehicula justo, in eleifend mi est vel ante.",
  },
  {
    id: 4,
    avatar: avatar3,
    name: "Alice Smith",
    content:
      "Curabitur consectetur, erat vel facilisis venenatis, turpis ligula vehicula justo, in eleifend mi est vel ante.",
  },
  {
    id: 5,
    avatar: avatar3,
    name: "Alice Smith",
    content:
      "Curabitur consectetur, erat vel facilisis venenatis, turpis ligula vehicula justo, in eleifend mi est vel ante.",
  },
  {
    id: 6,
    avatar: avatar3,
    name: "Alice Smith",
    content: "Curabitur consectetur, erat vel facilisis venenatis, turpis ligula vehicula justo, in eleifend mi est vel ante.",
  },
];

const Home = () => {
  return (
    <Layout>
      <div className="min-h-screen">
        {/* Carousel section */}
        <BannerCarousel />

        {/* Featured book section */}
        <FeaturedBooks />

        {/* New arrival section */}
        <NewArriaval />

        {/* Event section */}
        <Events events={eventsAndAnnouncements} />

        {/* Contact section */}
        <Contact />

        <Testimonial testimonials={testimonialsData} />
      </div>
    </Layout>
  );
};

export default Home;
