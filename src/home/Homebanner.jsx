import React, { useEffect, useRef, useState } from "react";
import "./home.css";
import image from "../images/image.png";
import { FaCirclePlay } from "react-icons/fa6";
import { TbBulbFilled } from "react-icons/tb";
import { HiPresentationChartBar } from "react-icons/hi";
import { AiFillEye } from "react-icons/ai";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import PenetrationTesting from "./PenetrationTesting";
import WhyPenetration from "./WhyPenetration";
import LatestBlogs from "./LatestBlogs";
import PenetrationBenefits from "./PenetrationBenefits";
import { useTranslation } from "react-i18next";

const Homebanner = () => {
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
  const ideas_data = [
    {
      id: 1,
      icon: <TbBulbFilled />,
      heading: t("ideas_and_concepts"),
      description: t("desp1"),
      btn: t("read_more"),
    },
    {
      id: 2,
      icon: <HiPresentationChartBar />,
      heading: t("event_marketing"),
      description: t("desp2"),
      btn: t("read_more"),
    },
    {
      id: 3,
      icon: <AiFillEye />,
      heading: t("onsite"),
      description: t("desp3"),
      btn: t("read_more"),
    },
  ];

  return (
    <div>
      <div className="home_banner">
        <div className="backdrop">
          <div className="home_container">
            <div className="home_content">
              <div
                className={`front_content heading scroll-trigger ${
                  isTriggered ? "animate" : ""
                }`}
                ref={triggerRef}
              >
                <p className="bold_heading">{t("secure_privacy")}</p>
                <h4 className="sub_heading_home">
                  {t("friendly_&_professional_service")}
                </h4>
                <div className="homebanner_btn">
                  <div>
                    <button className="get_started_btn">
                      {t("get_started")}
                    </button>
                  </div>
                  <div>
                    <button className="work_btn">
                      {t("see_how_it_works")} <FaCirclePlay />
                    </button>
                  </div>
                </div>
              </div>
              <div>
                <img className="home_banner_img" src={image} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="home_ideas_container">
        <div className="home_ideas">
          {ideas_data.map((data) => (
            <div className="idea_body">
              <div className="ideas_icon">{data.icon}</div>
              <div>
                <p className="ideas_heading">{data.heading}</p>
              </div>
              <div className="ideas_description">{data.description}</div>
              <div>
                <button className="read_more_btn">
                  {data.btn}
                  <BsFillArrowRightCircleFill className="read_more_icon" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div>
        <PenetrationTesting />
      </div>
      <div>
        <PenetrationBenefits />
      </div>
      <div>
        <WhyPenetration />
      </div>
      <LatestBlogs />
    </div>
  );
};

export default Homebanner;
