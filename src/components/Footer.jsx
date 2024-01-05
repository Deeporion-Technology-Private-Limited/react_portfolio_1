import React from "react";
import "./style.css";
import logo from "../images/LOGO.png";
import { RiFacebookFill, RiTwitterFill, RiDribbbleFill } from "react-icons/ri";
import { AiOutlineGithub } from "react-icons/ai";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <div className="footer_wrapper">
      <div className="footer_container">
        <div>
          <img src={logo} alt="" />
          <div>
            <p className="footer_text">{t("lorem_ipsum_dolor_sit_amet")}</p>
          </div>
          <div className="social_links">
            <RiFacebookFill className="footer_tags" />
            <RiTwitterFill className="footer_tags" />
            <AiOutlineGithub className="footer_tags" />
            <RiDribbbleFill className="footer_tags" />
          </div>
        </div>
        <div>
          <ul>
            <li className="footer_heading">{t("company")}</li>
            <li className="footer_links">{t("about")}</li>
            <li className="footer_links">{t("premium")}</li>
            <li className="footer_links">{t("blogs")}</li>
            <li className="footer_links">{t("affilate")}</li>
            <li className="footer_links">{t("get_coupon")}</li>
          </ul>
        </div>
        <div>
          <ul>
            <li className="footer_heading">{t("help")}</li>
            <li className="footer_links">{t("contact")}</li>
            <li className="footer_links">{t("knowledge")}</li>
            <li className="footer_links">{t("premium_support")}</li>
            <li className="footer_links"> {t("sponsership")}</li>
          </ul>
        </div>
        <div>
          <ul>
            <li className="footer_heading">{t("resources")}</li>
            <li className="footer_links">{t("third_party")}</li>
            <li className="footer_links">{t("illustrationsr")}</li>
            <li className="footer_links">{t("themesberg")}</li>
            <li className="footer_links"> {t("bluehost")}</li>
            <li className="footer_links"> {t("stock")}</li>
          </ul>
        </div>
        <div>
          <ul>
            <li className="footer_heading">{t("legal")}</li>
            <li className="footer_links">{t("privacy_policy")}</li>
            <li className="footer_links">{t("terms")}</li>
            <li className="footer_links">{t("eula")}</li>
          </ul>
        </div>
      </div>
      <div className="footer_copyright">
        <p>{t("copyright")}</p>
      </div>
    </div>
  );
};

export default Footer;
