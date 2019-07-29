import React, {Component} from "react";
import classes from "./Carousal.css";
import { Link } from "react-router-dom";


class Carousal extends Component{


getIdHandler = (id) => sessionStorage.setItem('id', id);


render(){
  return (
    <div className="container">
      <div className="row">
        <div className={classes.Carousal}>

          {this.props.items.map(item => {
            return (
              <div key={item.id} className="col-md-6 col-lg-4">
                <Link to="/project">
                  <div onClick={() => this.getIdHandler(item.id)} className={classes.Item}>
                    <img src={item.img} alt="" />
                  </div>
                </Link>
              </div>
            );
          })}

        </div>
      </div>
    </div>

  );
        }
};

export default Carousal;
