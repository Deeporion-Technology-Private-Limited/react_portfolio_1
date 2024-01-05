import React from "react";
import { HiDocumentReport } from "react-icons/hi";
import "./home.css";
import { useTranslation } from "react-i18next";
import { IoIosArrowRoundForward } from "react-icons/io";

const PenetrationBenefits = () => {
  const { t } = useTranslation();
  const data = [
    {
      id: 1,
      icon: <HiDocumentReport />,
      heading: t("infrastructure"),
      desp: t("endpoints"),
    },
    {
      id: 2,
      icon: <HiDocumentReport />,
      heading: t("partnership"),
      desp: t("security_breach"),
    },
    {
      id: 3,
      icon: <HiDocumentReport />,
      heading: t("damage"),
      desp: t("single_breach"),
    },
    {
      id: 4,
      icon: <HiDocumentReport />,
      heading: t("reputation"),
      desp: t("build"),
    },
    {
      id: 5,
      icon: <HiDocumentReport />,
      heading: t("compliance"),
      desp: t("penalties"),
    },
  ];

  const handleScroll = () => {
    document.querySelector(".benefit_text").style.top =
      window.scrollY > 3000
        ? `${0.35 * window.scrollY}px`
        : window.scrollY > 2200
        ? `${0.25 * window.scrollY}px`
        : window.scrollY > 1650
        ? `${0.1 * window.scrollY}px`
        : 0;
  };
  const handleLeave = () => {
    if (window.scrollY <= 1650) {
      document.querySelector(".benefit_text").style.top = 0;
    }
  };

  return (
    <div
      onMouseMove={handleScroll}
      onMouseLeave={handleLeave}
      className="benefits"
    >
      <div className="penetration_desp_info">
        <div className="benefits_penetration_desp_container">
          <div className="benefits_penetration_container">
            <div className="benefit_text">
              <h1> {t("benefits_of_Penetration_testing")} </h1>
              <div className="benefit_supportive_text_container">
                <p className="benefit_supportive_text">{t("lorem_ipsum")}</p>
              </div>
            </div>
          </div>
          <div className="penetration_flex">
            {data.map((obj) => (
              <div className="benefit_penetration_desp_box" key={obj.id}>
                <div></div>
                <div className="benefit_penetration_desp_content">
                  <div className="benefit_desp_icon">
                    <div className="penetration_icon">{obj.icon}</div>
                    <h2>{obj.heading}</h2>
                  </div>
                  <p>{obj.desp}</p>
                  <div className="benefit_detail">
                    <span>
                      <IoIosArrowRoundForward />
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PenetrationBenefits;
