import React from 'react';
import placeholderImage from '../imgs/placeholders/placeholder.webp'
import placeholderImage2 from '../imgs/placeholders/placeholder2.webp'
import placeholderImage3 from '../imgs/placeholders/placeholder3.webp'

const FullwidthCarousel = () => {
    return (
        <div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={placeholderImage} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={placeholderImage2} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={placeholderImage3} className="d-block w-100" alt="..." />
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    );
}

export default FullwidthCarousel;
