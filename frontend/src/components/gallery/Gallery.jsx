import React from "react";
import "./gallery.css";
import { galleryImgs } from "../../data";
const Gallery = () => {
  return (
    <section className="gallerySection">
      <h2>
        Our Gallery{" "}
        <span
          style={{
            fontWeight: "lighter",
            color: "lightgray",
            fontSize: "20px",
          }}
        >
          &#9473;&#9473;&#9473;&#9473;
        </span>{" "}
      </h2>
      <div className="gallery">
        {galleryImgs.map((item, index) => {
          return (
            <>
              <div className="galleryItem" key={index}>
                <img src={item.link} alt="gallery-image" loading="lazy" />
              </div>
            </>
          );
        })}
      </div>
    </section>
  );
};

export default Gallery;
