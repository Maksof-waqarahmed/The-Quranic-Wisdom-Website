import React from 'react';
import './index.css'; 
import  norani from '../../Assesst/nurani.jpeg'
import hadess from '../../Assesst/hadees.jpeg'
import kalma from '../../Assesst/six kalma.jpeg'

const books = [
  {
    id: 1,
    title: 'Noorani Kids Qaida',
    author: 'The Quranic Wisdom Team',
    description: 'provided by The Quranic Wisdom, offers an engaging introduction to the Arabic alphabet and Quranic reading for young learners. With interactive exercises, vibrant illustrations, and easy-to-follow guidance, it simplifies letter recognition, pronunciation, and basic Tajweed, making the learning process enjoyable and effective for childrens.',
    image:  norani
  },
  {
    id: 2,
    title: 'Hadith for Kids',
    author: 'The Quranic Wisdom Team',
    description: 'provided by The Quranic Wisdom, is an engaging guide that introduces children to the teachings of Prophet Muhammad (PBUH). Featuring simple language, vibrant illustrations, and relatable stories, it presents key Hadiths that teach values like kindness, honesty, and respect. This resource helps young learners connect with the wisdom of Hadith and apply these timeless lessons in their daily lives.',
    image: hadess
  },
  {
    id: 3,
    title: '6 Kalmas for Kids',
    author: 'The Quranic Wisdom Team',
    description: 'provided by The Quranic Wisdom, is an easy-to-understand guide that introduces children to the six essential declarations of faith in Islam. With clear explanations, colorful illustrations, and engaging activities, this resource helps young learners memorize and understand the meanings of each Kalma, fostering a deeper connection to their faith and building a strong spiritual foundation.',
    image: kalma
  },
];

const Books = () => {
  return (
    <div className="books-container">
      <h2>Available Books</h2>
      <div className="books-grid">
        {books.map((book) => (
          <div key={book.id} className="book-card">
            <img src={book.image} alt={book.title} className="book-image" />
            <div className="book-content">
              <h3>{book.title}</h3>
              <p><strong>Author:</strong> {book.author}</p>
              <p className="book-description">{book.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Books;
