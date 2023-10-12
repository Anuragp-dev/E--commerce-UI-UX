import * as React from "react";
import "./Css/Mycard.css";


const CustomLeftArrow = ({ onClick }) => (
  <i onClick={() => onClick()} className="custom-left-arrow" />
  
  
);
const CustomRightArrow = ({ onClick }) => {
  return <i className="custom-right-arrow" onClick={() => onClick()} />;
};

const CustomButtonGroup = ({ next, previous }) => {
  
  return (
   
   
   <div className="custom-button-group">
    
      <button className="btn btn-primary mr-4 rounded-circle btn btn-outline-primary " onClick={() => previous()}><i class="fa-solid fa-less-than fa-lg"></i></button>
      <button className="btn btn-primary rounded-circle btn btn-outline-primary " onClick={() => next()}><i class="fa-solid fa-greater-than fa-lg"></i></button>
    
    </div>
   
   
  );
};
const CustomButtonGroupAsArrows = ({ next, previous }) => {
  return (
    <div
      // style={{
      //   textAlign: "center",
      // }}
    >
      <h4>These buttons can be positioned anywhere you want on the screen</h4>
      <button onClick={previous}>Prev</button>
      <button onClick={next}>Next</button>
    </div>
  );
};

export {
  CustomLeftArrow,
  CustomRightArrow,
  CustomButtonGroup,
  CustomButtonGroupAsArrows,
};