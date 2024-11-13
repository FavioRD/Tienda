import React, { useState } from 'react';
import '../Reseñas/Reseña.css';
import { FaStar } from 'react-icons/fa';

const reviews = [
  {
    id: 1,
    name: 'Sebastian Vega',
    photo: 'https://via.placeholder.com/50',
    rating: 4,
    comment: 'pepe'
  },
  {
    id: 2,
    name: 'Jeremias Amador',
    photo: 'https://via.placeholder.com/50',
    rating: 4,
    comment: 'pepe'
  },
  {
    id: 3,
    name: 'Lionel Messi',
    photo: 'https://media.admagazine.com/photos/637d11a6e63c8afac40e7a01/1:1/w_2896,h_2896,c_limit/1442809583',
    rating: 5,
    comment: 'pepe'
  },
  {
    id: 4,
    name: 'Cristiano Ronaldo',
    photo: 'https://via.placeholder.com/50',
    rating: 5,
    comment: 'pepe'
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
      <button className="next-button" onClick={nextReview}>Siguiente</button>
    </section>
  );
}

export default ClientReviews;

