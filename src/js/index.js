import React from "react";
import ReactDOM from "react-dom";
// include your styles into the webpack bundle
import "../styles/index.css";
//import your own components
//import Home from "./component/home.jsx";
import SimpleCounter from "./component/SimpleCounter.jsx";
let counter = 0
setInterval(() => {
            ReactDOM.render( < SimpleCounter number = {
                    counter
                }
                />, document.querySelector("#app"));
                counter++
            }, 1000);
        //render your react application
