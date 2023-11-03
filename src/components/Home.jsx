import "react-responsive-carousel/lib/styles/carousel.min.css";

import { eventsAndAnnouncements } from "../constants/apidata";
import Layout from "./layout/Layout";

import avatar1 from "../assets/author1.jpg";
import avatar2 from "../assets/author2.jpg";
import avatar3 from "../assets/author3.jpg";
import Testimonial from "./Testimonial";
import Events from "./Events";
import Contact from "./Contact";
import NewArriaval from "./NewArriaval";
import FeaturedBooks from "./FeaturedBooks";
import BannerCarousel from "./BannerCarousel";

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

        {/* Testimonial section */}
        <section className="py-12 mx-8 md:mx-16 lg:mx-32">
          <div className="container mx-auto">
            <h2 className="text-3xl font-semibold mb-6">Testimonials</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Testimonial
                avatar={avatar1}
                name="John Doe"
                content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse potenti."
              />
              <Testimonial
                avatar={avatar2}
                name="Jane Doe"
                content="Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas."
              />
              <Testimonial
                avatar={avatar3}
                name="Alice Smith"
                content="Curabitur consectetur, erat vel facilisis venenatis, turpis ligula vehicula justo, in eleifend mi est vel ante."
              />
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Home;
