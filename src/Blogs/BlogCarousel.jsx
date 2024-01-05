import React, { useEffect, useRef, useState } from "react";
import img1 from "../images/Rectangle40.png";
import img2 from "../images/Rectangle44.png";
import img3 from "../images/Rectangle45.png";
import "./blogs.css";
import { useTranslation } from "react-i18next";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
const BlogCarousel = () => {
  const { t } = useTranslation();
  const triggerRef = useRef();
  const [isTriggered, setIsTriggered] = useState(false);
  const handleScroll = () => {
    if (triggerRef.current) {
      const elementTop = triggerRef.current.getBoundingClientRect().top;
      const viewportHeight = window.innerHeight;

      if (elementTop < viewportHeight) {
        setIsTriggered(true);
      }
    }
  };

  useEffect(() => {
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2,
    },
    mobile: {
      breakpoint: { max: 500, min: 0 },
      items: 2,
      slidesToSlide: 1,
    },
  };

  const images = [
    {
      id: 1,
      url: img1,
      content: t("4_cyber"),
    },
    {
      id: 2,
      url: img2,
      content: t("4_cyber"),
    },
    {
      id: 3,
      url: img3,
      content: t("4_cyber"),
    },
    {
      id: 4,
      url: img1,
      content: t("4_cyber"),
    },
    {
      id: 5,
      url: img2,
      content: t("4_cyber"),
    },
  ];

  return (
    <div
      className={` scroll-trigger ${isTriggered ? "animate" : ""}`}
      ref={triggerRef}
    >
      <h1 className="carousel_h1">{t("latest_post")}</h1>

      <Carousel
        additionalTransfrom={0}
        arrows
        autoPlay
        autoPlaySpeed={2000}
        centerMode={false}
        className=""
        containerClass="container-with-dots"
        dotListClass=""
        draggable
        focusOnSelect={false}
        infinite
        itemClass=""
        keyBoardControl
        minimumTouchDrag={80}
        pauseOnHover
        renderArrowsWhenDisabled={false}
        renderButtonGroupOutside={false}
        renderDotsOutside={false}
        responsive={responsive}
      >
        {images.map((image) => {
          return (
            <div className="latest_container_desp">
              <img
                className="image"
                alt="sliderImage"
                key={image?.id}
                src={image?.url}
              />
              <div>
                <div className="text_desp">{image.content}</div>
              </div>
            </div>
          );
        })}
      </Carousel>
    </div>
  );
};

export default BlogCarousel;
