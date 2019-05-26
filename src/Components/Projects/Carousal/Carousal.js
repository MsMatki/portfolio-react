import React, { Component } from "react";
import classes from "./Carousal.css";
import Coverflow from "react-coverflow";
import Media from "react-media";

import img1 from "../../../Assets/Images/img1.png";
import img2 from "../../../Assets/Images/img2.png";
import img3 from "../../../Assets/Images/img3.png";
import img4 from "../../../Assets/Images/img4.png";
import img5 from "../../../Assets/Images/img5.png";
import img6 from "../../../Assets/Images/img6.png";

class Carousal extends Component {
  render() {
    return (
      <div className={classes.Carousal}>
        <Media query="(max-width: 768px)">
          {matches =>
            matches ? (
              <Coverflow
                height="600"
                displayQuantityOfSide={1}
                enableHeading
                enableScroll
                media={{
                  "@media (max-width: 768px)": {
                    width: "100%",
                    height: "500px"
                  }
                }}
              >
                <img src={img1} alt="CoolMovies" />
                <img src={img2} alt="Neighbourhood Map" />
                <img src={img3} alt="MyReads" />
                <img src={img4} alt="Frogger" />
                <img src={img5} alt="Restaurant Reviews" />
                <img src={img6} alt="Memory" />
              </Coverflow>
            ) : (
              <Coverflow
                height="600"
                displayQuantityOfSide={3}
                enableScroll={false}
                enableHeading
                active={0}
              >
                <img src={img1} alt="CoolMovies" />
                <img src={img2} alt="Neighbourhood Map" />
                <img src={img3} alt="MyReads" />
                <img src={img4} alt="Frogger" />
                <img src={img5} alt="Restaurant Reviews" />
                <img src={img6} alt="Memory" />
              </Coverflow>
            )
          }
        </Media>
      </div>
    );
  }
}

export default Carousal;
