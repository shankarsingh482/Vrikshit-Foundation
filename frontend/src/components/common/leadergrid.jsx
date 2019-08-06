import React from 'react';

const Leadergrid = leaderData => {
  const { image, position, quotes } = leaderData;
  return (
    <div className="col-md-4">
      <div className="fh5co-testimonial text-center animate-box">
        <figure>
          <img src={image} alt="user" />
        </figure>
        <blockquote>
          <p>&ldquo;{quotes}&rdquo;</p>
        </blockquote>
        <span>{position}</span>
      </div>
    </div>
  );
};

export default Leadergrid;
