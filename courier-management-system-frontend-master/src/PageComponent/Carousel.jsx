// Import the images
import carousel1 from "../images/image4.png";
import carousel2 from "../images/image3.png";
import carousel3 from "../images/Document.png";
import carousel4 from "../images/furniture.png";
import carousel5 from "../images/image5.png"; 
import carousel6 from "../images/image6.png";


const Carousel = () => {
  return (
    <div
      id="carouselExampleCaptions"
      className="carousel slide"
      data-bs-ride="carousel"
    >
      <div className="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="0"
          className="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="3"
          aria-label="Slide 4"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="4"
          aria-label="Slide 5"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="5"
          aria-label="Slide 6"
        ></button>
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src={carousel1} className="d-block w-100" alt="Slide 1" />
        </div>
        <div className="carousel-item">
          <img src={carousel2} className="d-block w-100" alt="Slide 2" />
        </div>
        <div className="carousel-item">
          <img src={carousel3} className="d-block w-100" alt="Slide 3" />
        </div>
        <div className="carousel-item">
          <img src={carousel4} className="d-block w-100" alt="Slide 4" />
        </div>
        <div className="carousel-item">
          <img src={carousel5} className="d-block w-100" alt="Slide 5" />
        </div>
        <div className="carousel-item">
          <img src={carousel6} className="d-block w-100" alt="Slide 6" />
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default Carousel;
