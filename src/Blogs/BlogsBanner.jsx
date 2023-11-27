import React from "react";
import "./blogs.css";
import BlogContent from "./BlogContent";
import { useTranslation } from "react-i18next";

const BlogsBanner = () => {
  const { t } = useTranslation();
  return (
    <div>
      <div className="about_banner">
        <div className="about_backdrop">
          <div className="home_container">
            <div className="home_content">
              <div className="front_content">
                <p className="bold_heading_blog">{t("our_latest_blog")}</p>
                <h4 className="sub_heading_home">{t("lorem_temper")}</h4>
                <div className="blog_get_started_btn">
                  <button className="get_started_btn">
                    {t("get_started")}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <BlogContent />
      </div>
    </div>
  );
};

export default BlogsBanner;
