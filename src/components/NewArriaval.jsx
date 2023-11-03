import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import { Pagination } from 'swiper/modules';
import { newArrivals } from "../constants/apidata";
import { Link } from "react-router-dom";
import BookCard from "./BookCard";


const NewArriaval = () => {
  return (
    <section className="py-12 mx-8 md:mx-16 lg:mx-32">
          <div className="container mx-auto">
            <h2 className="text-3xl font-semibold mb-6">New Arrivals</h2>
            <Swiper
              slidesPerView={1}
              spaceBetween={8}
              pagination={{
                clickable: true,
              }}
              allowTouchMove={true}
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
              modules={[Pagination]}
              className="mySwiper"
            >
              {newArrivals.map((book) => (
                <SwiperSlide key={book.id}>
                  <div className="w-[300px] ">
                    <Link to={`/books/${book.id}`}>
                      <BookCard
                        title={book.title}
                        author={book.author}
                        imageUrl={book.imageUrl}
                        price={book.price}
                      />
                    </Link>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </section>
  )
}

export default NewArriaval