import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";

const images = [
  "https://www.apple.com/uk/tv-pr/shows-and-films/s/see/images/season-03/show-home-graphic-header/key-art-01/4x1/Apple_TV_See_key_art_graphic_header_4_1_show_home.jpg.og.jpg?1730877086966",
  "https://preview.redd.it/all-the-new-posters-and-banners-form-the-apple-tv-site-v0-7ioclgvyu5wa1.jpg?width=640&crop=smart&auto=webp&s=5dd81c313590c71221573489b68af49e0d38dc91",
  "https://www.apple.com/tv-pr/articles/2024/02/apple-tv-unveils-a-sneak-peek-at-star-studded-lineup-of-new-and-returning-original-series-set-to-debut-in-2024/images/big-image/big-image-01/020524_Apple_Sneak_Peak_Original_Series_Big_Image_01_big_image_post.jpg.large.jpg",
  "https://www.apple.com/tv-pr/shows-and-films/n/now-and-then/images/season-01/show-home-graphic-header/key-art-01/4x1/Apple_TV_Now_And_Then_key_art_graphic_header_4_1_show_home.jpg.og.jpg?1730773712316",
  "https://www.apple.com/newsroom/images/product/apple-tv-plus/lifestyle-/Apple_tv_plus-the-morning-show-cover-art-09102019_big.jpg.large.jpg",
  "https://www.apple.com/tv-pr/shows-and-films/f/foundation/images/season-03/show-home-graphic-header/key-art-02/4x1/Apple_TV_Foundation_key_art_graphic_header_4_1_show_home.jpg.large.jpg",
];

const CarouselWithOverlay = () => (
  <div className="w-full max-w-8xl mx-auto">
    <Swiper
      modules={[Autoplay, Navigation]}
      autoplay={{ delay: 3000, disableOnInteraction: false }}
      loop
      className="relative"
    >
      {images.map((src, idx) => (
        <SwiperSlide key={idx}>
          <div className="relative w-full" style={{ aspectRatio: "16 / 9" }}>
            <img src={src} alt={`Slide ${idx + 1}`} className="w-full h-full object-cover" />
            <div className="absolute bottom-0 left-0 w-full bg-black/5 flex items-center justify-center space-x-4 p-4">
              <img
                src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMQEhESEBAQFRUVFxUXGRgVFRgVFxcXFhgWFxgSFxUYHSggGBolGxkVITEhJSkrLi4uFx8zODMsNygtLysBCgoKDQ0NGBAQGzceHx0uOCstLTcrLTctLSstKy02LDctKzc3OC0rNSstKys3NTAtMis1LS01NS01MS03MzctK//AABEIAMIBAwMBIgACEQEDEQH/xAAcAAABBAMBAAAAAAAAAAAAAAAAAQMEBQIGBwj/xABLEAABAgMCCwUDBwkHBQEAAAABAAIDBBEhMQUHEhMUMkFRcYGRBiJSYbFic6EjgpKUwdHSFiU1QkNVcrK0M1Rjg5PC8BVEU+HxJP/EABYBAQEBAAAAAAAAAAAAAAAAAAACAf/EABwRAQEBAAIDAQAAAAAAAAAAAAABAhMxERJRA//aAAwDAQACEQMRAD8A7DPa3JYSusFKlWhzauAJrttWUdgDSQADvAogfVbOa55egWGed4ndVNl2BzQSATbaRXagjSWtyKsVGmWhratAB3ixQ887xO6oFmNZ3Ep2Q1jw+5SYMMFoJAJI2hNzYyQC2y3ZYglKpiXniUued4ndVYNhNoO6OiBjB/63L7VMKhzndpk2X3WKMIzvEeqDBTpC48U/mW+FvQKLNnJIybOFiCVF1XcCqpOw4hJAJN42qwzLfC3oEDUjq8/uWczquUWbdkmjTQU2WLGA8lwBJI3EoGFZSeoOfqVnmW+FvQKFMvLXEAkDcLEEmd1Dy9VXKRLOLnAOJI3G1Tcy3wt6BAkvqt4Jqf1Rx+wqNGiEOIBIHkU5KHKJDrRTbbuQRVbQ7hwCTMt8LegVfEiuBIDjedqCRhC5vNQlLk+9XKt42qVmW+FvQIM1Cwhe3mo+ed4ndVKlBlA5VvG1BEh3jiFbJp8JoBo0XblX553id1QWZQq4RXeI9ShBIZEzfdNu2xDo4f3QDamp7W5LCV1ggd0I7ws2xhD7pBNN3naparZzXPL0CB90URO6LOKw0I7wsJLW5FWKCI2ZDe6QbLEPfnbBZS21RpjWdxK0Tt/29MjWXlSDMOHecaEQWm0GlzohFwNgvNbAQ2DtT2llcHD5eLWIRVsKGMqIdxpc0X2uIFi0DCmOGafZLQIEJt1X1iv8jXutHCh4rnEeO6I5z3uc57jVznEuc4naSbSVhVBs812/wlE1p1/BrIbKfRYCoT+1U8b52a5RXN9CqWqKoLY9pZ0/9/PfWYw9HrE9oZzbPzx4zMY/71V1RVBZ/lDOf36d+sxvxpfyjnf3hP8A1qP+NVdUVQWh7Qzm2fnjxmYx/wB6QdoZz+/Tv1mN+NVlUVQWn5Rzv7wn/rUf8aPyhnP79O85mMfV6q6oqguIfaidbdPTf+tEPqVLhdusJNuno/PJf/M0rXKoqg3STxmz7D8o+DG35yGGk84eTTot47LY0ZaK4NmWmXebAScqET7yzJu/WAFt64nVFUHq4TzTaAfgsDKE21FtvVcE7DduYki5sKMXPljZS90L24e9u9nMW2H0HKRmvYx7HBzXNa5rmmoIIBDgdoIQMMGatNtdyy00bikwhc3moSCVoR3hZMOasNtdymKFhC9vNBmZsGyhts6pvQjvCjw7xxCtkELRDvCFLKEDMjq8ys5nVKYMTNd2ldqBMZfdpSqCJVWMpqDn6lNaCPEeiQx833aVp9tqB2c1TyVfVSxFzndpT/0l0EeI9EFR2w7RNwdIvmDQvoGQ2n9aI7VHmBa4+TSvNcxMOiOc+I5z3vJc5zr3OJqXHiV0jHjhMujy0qCcmEwxDuLnksaT5gMd9NcyQLVFUiEC1RVIhAtUVSIQLVFUiEC1RVIhAtUVSIQLVFUiEC1RVIhAtV0/FB2lNTIxXGlHPg12UtfCHxeOD/JcvUrBWEDLRoMcE/JPa+y8hpq5vNtRzQepJC93JTVCBEMAg5QcjTvZ+KCLVTJC4o0IeI9EhOasFteSCVEuPAqqqpWl1spfZ1WWgjxHogigoUrRPa+CEDc2Kusts2WrCXaQ4EghSpHV5lZzWq5BnnBvHVQJppLiQCRZdwTCspPUHP1KCLKAh1SKcbFOzg3jqmp3VPJVyDhGNiYy8KzQ2MzTBwzTHeritRWw4xHVwlOn22jpDYPsWuoFQkQgVCRCBUIY0khoBJJoABUk7gBaSnJmViQnZMWHEhuoDkxGOY6huOS4A0KBtCRCBUJEIFQkQgVCRCBUJEIFQQkQg"
                alt="Overlay"
                className="w-16 h-16"
              />
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  </div>
);

export default CarouselWithOverlay;
