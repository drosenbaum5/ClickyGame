import React from "react";
import images from "../../images.json";
import "./style.css";

function ImageContainer(props) {
  return (
    <div className="container">
      {images.map(image => {
        return (
          <div className="card">
            <div className="img-container" key={image.id}>
              <img
                onClick={() => props.updateScore(image.id)}
                src={image.image}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default ImageContainer;
