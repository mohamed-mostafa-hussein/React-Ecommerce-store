// import React from "react";

function ProductImages({product}) {
  return (
    <div className="imgs_item">
      <div className="big_img">
        <img id="big_img" src={product.images[0]} alt={product.title} />
      </div>
      <div className="sml_img">
        {product.images.map((img, index) => (
          <div key={index} className="img_sml_div">
            <img
              src={img}
              alt={product.title}
              onClick={() => (document.getElementById("big_img").src = img)}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductImages;
