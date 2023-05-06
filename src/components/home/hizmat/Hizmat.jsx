import React from "react";
import "./Hizmat.css";
const Hizmat = () => {
  return (
    <div className="Hizmat">
      <h1> Bizning Hizmatlar</h1>
      <a className="card1" href="#">
        <h3>This is option 1</h3>
        <p className="small">
          Card description with lots of great facts and interesting details.
        </p>
        <div className="go-corner" href="#">
          <div className="go-arrow">→</div>
        </div>
      </a>
    </div>
  );
};

export default Hizmat;
