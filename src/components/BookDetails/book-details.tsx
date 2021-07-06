import React from "react";
import image1 from "../../assets/book01.png";
import closeIcon from "../../assets/close.svg";
import starFilled from "../../assets/star-filled.svg";
import starStroke from "../../assets/star-stroke.svg";

const BookDetails = () => {
  return (
    <section className="book-details-wrapper">
      <div className="overlay"></div>
      <div className="bookDetails">
        <div className="close">
          <img src={closeIcon} alt="" />
        </div>
        <div className="bookDetailsTop">
          <h2>Book Details</h2>
          <img src={image1} alt="" />
          <h3>Think and Grow Rich</h3>
          <p className="author">Napoleon Hill</p>
          <div className="stars">
            <img src={starFilled} alt="" />
            <img src={starFilled} alt="" />
            <img src={starFilled} alt="" />
            <img src={starFilled} alt="" />
            <img src={starStroke} alt="" />
          </div>
          <p className="desc">
            In Think and Grow Rich (1937), Napoleon Hill investigates the
            methods of the 500 most successful people of his time, including the
            world’s richest men, top politicians, famous inventors, writers and
            captains of industry. First published amidst the Great Depression,
            Think and Grow Rich has sold over 100 million copies.
          </p>
        </div>

        <div className="bookDetailsBottom">
          <button>Read the book</button>
        </div>
      </div>
    </section>
  );
};

export default BookDetails;
