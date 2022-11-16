import React, { Component } from "react";
import MenuItem from "../menu-item/menu-item.component";

import "./directory.styles.scss";

class Directory extends Component {
  constructor(props) {
    super();
    this.state = {
      sections: [
        {
          title: "hats",
          imageUrl: "https://run-gran.themerex.net/wp-content/uploads/2017/07/service-1-1170x658.jpg",
          id: 1,
          linkUrl: "shop/hats",
        },
        {
          title: "jackets",
          imageUrl: "https://run-gran.themerex.net/wp-content/uploads/2017/07/service-2-1170x658.jpg",
          id: 2,
          linkUrl: "shop/jackets",
        },
        {
          title: "sneakers",
          imageUrl: "https://run-gran.themerex.net/wp-content/uploads/2017/07/service-3-1170x658.jpg",
          id: 3,
          linkUrl: "shop/sneakers",
        },
        {
          title: "womens",
          imageUrl: "https://run-gran.themerex.net/wp-content/uploads/2017/07/service-2-1170x658.jpg",
          size: "large",
          id: 4,
          linkUrl: "shop/womens",
        },
        {
          title: "mens",
          imageUrl: "https://run-gran.themerex.net/wp-content/uploads/2017/07/service-3-1170x658.jpg",
          size: "large",
          id: 5,
          linkUrl: "shop/mens",
        },
      ],
    };
  }
  render() {
    return (
      <div className="directory-menu">
        {this.state.sections.map((section) => {
          return <MenuItem key={section.id} section={section} />;
        })}
      </div>
    );
  }
}

export default Directory;
