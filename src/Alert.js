import React from "react";
const Alert = (props) => {
  //add the condition inside this function
  if (props.show === false) {
    return null;
  } else if (props.show === true)
    return (
      <div className="alert alert-danger" role="alert">
        This is a primary alert-check it out!
      </div>
    );
};
export default Alert;
