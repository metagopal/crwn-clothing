import React from "react";
import "./menu-item.styles.scss";
import { useNavigate, useLocation } from "react-router-dom";

import { withRouter } from "../../utils/utils";

const MenuItem = (props) => {
  const navigation = useNavigate();
  const location = useLocation();

  const { title, imageUrl, size, linkUrl } = props;

  //console.log(location.pathname + linkUrl)

  return (
    <div
      className={`${size ? "large menu-item" : "menu-item"}`}
      onClick={() => navigation(`${location.pathname}${linkUrl}`)}
    >
      <div
        className="background-image"
        style={{ backgroundImage: `url(${imageUrl})` }}
      ></div>
      <div className="content">
        <h1 className="title">{title}</h1>
        <span className="subtitle">Shop Now</span>
      </div>
    </div>
  );
};

export default withRouter(MenuItem);
