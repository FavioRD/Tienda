import React, { useState } from 'react';
import '../Reseñas/Reseña.css';
import { FaStar } from 'react-icons/fa';

const reviews = [
  {
    id: 1,
    name: 'Jane Doe',
    photo: 'https://via.placeholder.com/50',
    rating: 5,
    comment: 'Great product! Highly recommended.'
  },
  {
    id: 2,
    name: 'John Smith',
    photo: 'https://via.placeholder.com/50',
    rating: 4,
    comment: 'Very satisfied with the quality.'
  },
  {
    id: 3,
    name: 'Emily Clark',
    photo: 'https://via.placeholder.com/50',
    rating: 3,
    comment: 'It’s okay, but could be improved.'
  },
  {
    id: 4,
    name: 'Michael Brown',
    photo: 'https://via.placeholder.com/50',
    rating: 5,
    comment: 'Amazing experience, would buy again!'
  },
];

function ClientReviews() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextReview = () => {
    setCurrentIndex((currentIndex + 1) % reviews.length);
  };

  return (
    <section className="client-reviews">
      <h2>Reseñas de Nuestros Clientes</h2>
      <div className="review-card">
        <img src={reviews[currentIndex].photo} alt={reviews[currentIndex].name} className="client-photo" />
        <h3>{reviews[currentIndex].name}</h3>
        <div className="star-rating">
          {[...Array(5)].map((_, index) => (
            <FaStar key={index} color={index < reviews[currentIndex].rating ? '#ffc107' : '#e4e5e9'} />
          ))}
        </div>
        <p className="client-comment">{reviews[currentIndex].comment}</p>
      </div>
      <button className="next-button" onClick={nextReview}>Next</button>
    </section>
  );
}

export default ClientReviews;

