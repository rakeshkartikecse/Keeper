import React from "react";
//import ReactDOM from "react-dom";

var year = new Date();
var d=(year.getFullYear());
function Footer(){
    return(

        <footer>
            <p>
            Copyright @{d}.
        </p>
       
        </footer>
        
            
            
        
    )
}
export default Footer;