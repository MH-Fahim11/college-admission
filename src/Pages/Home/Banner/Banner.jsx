// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
// import required modules
import { Link } from "react-router-dom";
import { Autoplay } from "swiper/modules";

const Banner = () => {
  return (
    <div>
      <Swiper
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
      >
        <SwiperSlide>
          <div>
            <img
              src="https://images.unsplash.com/photo-1571260899304-425eee4c7efc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
              className="w-full max-h-screen"
            />
            <div className="absolute flex items-center pt-14 lg:pt-0 pl-8 h-full  bottom-0 bg-gradient-to-r from-[#21223a] to-[rgba(45, 21, 21, 0)]">
              <div className="text-white space-y-2 lg:space-y-7 w-full lg:w-2/3">
                <h2 className="text-xl lg:text-6xl font-bold uppercase">
                  World Best Colleges Are Here
                </h2>
                <p>There are lots of student who come here to learn.</p>
                <div>
                  <Link
                    to="/classes"
                    className="btn btn-primary btn-sm lg:btn-lg border-0 lg:mr-4 bg-[#ff7350]"
                  >
                    Explore Classes
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <img
              src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
              className="w-full max-h-screen "
            />
            <div className="absolute flex items-center pt-14 lg:pt-0 pl-8 h-full  bottom-0 bg-gradient-to-r from-[#21223a] to-[rgba(45, 21, 21, 0)]">
              <div className="text-white space-y-2 lg:space-y-7 w-full lg:w-2/3">
                <h2 className="text-xl lg:text-6xl font-bold uppercase">
                  World Best Colleges Are Here
                </h2>
                <p>There are lots of student who come here to learn.</p>
                <div>
                  <Link
                    to="/classes"
                    className="btn btn-primary btn-sm lg:btn-lg border-0 lg:mr-4 bg-[#ff7350]"
                  >
                    Explore Classes
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
