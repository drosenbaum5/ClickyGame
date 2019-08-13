import React from "react";
import images from "../../images.json"
import "./style.css";


function ImageContainer (props) {
 return(
 <div className = "container">
     {
       images.map(image => {
           return (
            <div className="card small" key = {image.id}>
             <img onClick = {props.updateScore} src = {image.image}></img>   
            </div>

           )
       })  
     }
  
 

 </div>


 )


}


export default ImageContainer;