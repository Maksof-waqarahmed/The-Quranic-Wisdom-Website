import React, { useState } from 'react';
import './index.css';

const faqs = [
  {
    question: "What courses does The Quranic Wisdom offer?",
    answer: "We offer courses in Quran recitation, Quran memorization (Hifz), Tajweed (proper pronunciation), and Islamic studies. All classes are designed to cater to both beginners and advanced learners."
  },
  {
    question: "Who are your instructors?",
    answer: "Our instructors are qualified Quran teachers with years of experience in teaching Quran recitation, Hifz, and Tajweed. They are fluent in English, making it easier for students from English-speaking countries to learn."
  },
  {
    question: "Are the classes conducted live or pre-recorded?",
    answer: "All our classes are conducted live, allowing students to interact with their teacher in real-time, ask questions, and receive personalized guidance."
  },
  {
    question: "What age group can enroll in the courses?",
    answer: "We welcome students of all ages, from young children to adults. Our courses are customized to suit the needs of different age groups and learning levels."
  },
  {
    question: "How does the online class system work?",
    answer: "Classes are conducted through Zoom or other online platforms. Once enrolled, students will receive a schedule and a link to join their classes. A stable internet connection, a computer or mobile device, and headphones are required for the best experience."
  },
  {
    question: "Do you offer free trial classes?",
    answer: "Yes, we offer a free trial class so students can experience the teaching method and environment before enrolling in a full course."
  },
  {
    question: "What are the class timings?",
    answer: "We offer flexible class timings to accommodate students from different time zones, particularly in the USA, Canada, and the UK. You can choose a time slot that fits your schedule."
  },
  {
    question: "How much do the courses cost?",
    answer: "The cost of the courses varies depending on the duration and type of course. Please contact us for detailed pricing information and package options."
  },
  {
    question: "How can I enroll in a course?",
    answer: "You can easily enroll by filling out the enrollment form on our website, or you can contact us directly through WhatsApp or email to get started."
  },
  {
    question: "What if I miss a class?",
    answer: "If you miss a class, you can arrange a makeup class with your teacher based on availability. We encourage regular attendance for steady progress."
  },
  {
    question: "Do you offer certificates upon course completion?",
    answer: "Yes, students who complete a course successfully will receive a certificate of completion, recognizing their effort and learning."
  }
];

const Faqs = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAnswer = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="faqs">
      <h2>Frequently Asked Questions</h2>
      <div className="faqs-list">
        {faqs.map((faq, index) => (
          <div key={index} className="faq-item">
            <button 
              className="faq-question"
              onClick={() => toggleAnswer(index)}
            >
              {faq.question}
            </button>
            {activeIndex === index && (
              <div className="faq-answer">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faqs;
