import { useEffect, useState } from 'react';
import quizData from './data/quizData';
import './App.css';
import Quiz from './components/Quiz';
import Footer from './components/Footer';

function App() {

  return (
    <>
      <section className='quiz'>
        <h1>COUNTRY QUIZ</h1>
        <Quiz />
      </section>
      <Footer />
    </>
  );
}

export default App;
