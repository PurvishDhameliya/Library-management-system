import Layout from "./layout/Layout";
import { featuredBooks, newArrivals } from "../constants/apidata";
import BookCard from "./BookCard";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Home = () => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const renderBookSlider = (books) => (
    <Slider {...sliderSettings}>
      {books.map((book, index) => (
        <div key={index}>
          <BookCard
            title={book.title}
            author={book.author}
            imageUrl={book.imageUrl}
          />
        </div>
      ))}
    </Slider>
  );

  return (
    <Layout>
      <div className="min-h-screen bg-gray-100 mx-8 md:mx-16 lg:mx-32">
        <section className="py-12 bg-white">
          <div className="container mx-auto">
            <h2 className="text-3xl font-semibold mb-6">Featured Books</h2>
            {renderBookSlider(featuredBooks)}
          </div>
        </section>

        <section className="py-12 bg-gray-100">
          <div className="container mx-auto">
            <h2 className="text-3xl font-semibold mb-6">New Arrivals</h2>
            {renderBookSlider(newArrivals)}
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Home;
