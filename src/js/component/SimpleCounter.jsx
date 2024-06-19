import React from "react";

import propTypes from "prop-types";
const SimpleCounter = (props) => {
    return (
     <div>
             <h1>Simple Counter</h1>
        <div className="divCounter">
            <div><i class="far fa-clock"></i></div>
            <div>{Math.floor(props.number / 100000 % 10)}</div>
            <div>{Math.floor(props.number / 10000 % 10)}</div>
            <div>{Math.floor(props.number / 1000 % 10)}</div>
            <div>{Math.floor(props.number / 100 % 10)}</div>
            <div>{Math.floor(props.number / 10 % 10)}</div>
            <div>{props.number % 10}</div>
         </div>

         
        
     </div>
    )
};

SimpleCounter.propTypes = {
    number: propTypes.number
}
SimpleCounter.defaultProps = {
    number: 0
}
export default SimpleCounter;