import React from "react";
import image from "@images/blog/blog-2-1.jpg";
import author from "@images/blog/author-1-1.png";
const BlogContent = () => {
  return (
    <>
      <div className="blog-details__main">
        <div className="blog-details__image">
          <img src={image} alt="" className="img-fluid" />
        </div>
        <div className="blog-details__content">
          <div className="blog-one__meta">
            <a href="#">
              <i className="far fa-calendar-alt"></i> 20 Feb
            </a>
            <a href="#">
              <i className="far fa-comments"></i> 2 comments
            </a>
          </div>
          <h3>Launch New Mobile App Marketing Pitfalls To Avoid</h3>
          <p>
            Minim sint sint magna labore sit do amet aute anim velit ex. Amet
            laboris proident veniam deserunt sit elit elit. Ipsum irure do
            commodo mollit nulla fugiat. Fugiat culpa quis est nisi non
            reprehenderit quis consequat.Minim nulla anim irure commodo fugiat
            dolor veniam veniam minim excepteur culpa aliquip incididunt.
            Consectetur amet proident proident esse incididunt proident tempor
            duis voluptate irure anim deserunt id nostrud. Nisi ex irure dolor
            ex qui cupidatat ad non pariatur est ullamco. Id ullamco adipisicing
            mollit deserunt deserunt aliqua commodo labore.
          </p>
          <p>
          Minim sint sint magna labore sit do amet aute anim velit ex. Amet
            laboris proident veniam deserunt sit elit elit. Ipsum irure do
            commodo mollit nulla fugiat. Fugiat culpa quis est nisi non
            reprehenderit quis consequat.Minim nulla anim irure commodo fugiat
            dolor veniam veniam minim excepteur culpa aliquip incididunt.
            Consectetur amet proident proident esse incididunt proident tempor
            duis voluptate irure anim deserunt id nostrud. Nisi ex irure dolor
            ex qui cupidatat ad non pariatur est ullamco. Id ullamco adipisicing
            mollit deserunt deserunt aliqua commodo labore.
          </p>
        </div>
        <div className="blog-details__meta">
          <div className="blog-details__tags">
            <span>Tags:</span>
            <a href="#">Business,</a>
            <a href="#">Agency,</a>
            <a href="#">Technology</a>
          </div>
          <div className="blog-details__share">
            <a href="#">
              <i className="fab fa-facebook-square"></i>
            </a>
            <a href="#" className="color-1">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="color-2">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#" className="color-3">
              <i className="fab fa-pinterest-p"></i>
            </a>
          </div>
        </div>
      </div>

      <div className="blog-author">
        <div className="blog-author__image">
          <img src={author} alt="" />
        </div>
        <div className="blog-author__content">
          <h3>Amr Mohamed</h3>
          <p>
            Lorem Ipsum is simply dummy text of the rinting and typesetting been
            the industry dummy text ever sincer condimentum purus.
          </p>
        </div>
      </div>
    </>
  );
};

export default BlogContent;
