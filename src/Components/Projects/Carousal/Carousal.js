import React from "react";
import classes from "./Carousal.css";

const Carousal = props => {
  return (
    <div className="container">
      <div className="row">
      <div className={classes.Carousal}>
        {props.items.map(item => {
          return (
            <div className="col-md-6 col-lg-4">
              <div className={classes.Item}>
              <img src={item.background} alt="" />
              </div>
            </div>
          );
        })}
      </div>
      </div>
    </div>
  );
};

export default Carousal;
