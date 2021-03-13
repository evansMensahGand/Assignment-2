import "./Header.css";
import car from "../../img/car.svg";
const header = () => {
    return (
        
<header id="hero">
      <div className="container hero-inner">
       
        <div className="heading animated fadeIn">
          <h1>Start driving your credit.</h1>
          <p className="lead py-1">
            No Appointments, no obligation and free to apply. Are you looking
            for a new car?
          </p>
          <a href="#" className="btn-apply-light">Get a car now</a>
        </div>

  
        <div className="car animated fadeIn">
          <img src={car} alt="car" />
        </div>
      </div>
    </header>


    );

};

export default header;