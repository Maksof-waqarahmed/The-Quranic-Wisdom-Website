import React from 'react';
import './flipCard.css';

function FlipCard({ planName, description, price }) {
  return (
    <div className="flip-card">
      <div className="flip-card-inner">
        {/* Front side of card */}
        <div className="flip-card-front">
          <img src='https://media.istockphoto.com/id/1360536098/vector/payment-date-of-recurring-tax-money-scheduled-on-calendar-icon-success-bill-pay-day-salary.jpg?s=612x612&w=0&k=20&c=G9osXxvAeoIU4DbpMDSQIO6342T7Od3OuR7geqw3GFs=' alt={`${planName} image`} />
          <h2>{planName}</h2>
        </div>
        {/* Back side of card */}
        <div className="flip-card-back">
          <h3>{planName}</h3>
          <h1>{price}</h1>
          <ul>
            {description.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default FlipCard;
