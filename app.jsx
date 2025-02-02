import React, { useState } from 'react';
import Header from './components/Header';
import Question from './components/Question';
import Summary from './components/Summary';
import Footer from './components/Footer';


const questions = [
  {
    question: 'jalan-jalan kemana nih? 🌍',
    bgColor: 'from-purple-500 to-pink-500',
    gif: 'https://media1.tenor.com/m/rkjohpeNZnAAAAAd/mochi-poke-poke-cute-cat.gif',
    options: ['pantai 🏖️', 'aquarium', 'Movie 🎬', 'ke museum'],
  },
  {
    question: 'mau berangkat kapan? 🕒',
    bgColor: 'from-purple-600 to-blue-600',
    gif: 'https://media1.tenor.com/m/R74gdS_SrRYAAAAd/quby-quby-sticker.gif',
    options: ['pagi ☀️', 'siang 🌤️', 'malam 🌆', 'tengah malam 🌙'],
  },
  {
    question: 'apa yang harus aku bawa? 🌹🍫',
    bgColor: 'from-green-400 to-blue-400',
    gif: 'https://media1.tenor.com/m/naWX8j8QzYsAAAAC/milk-and-mocha-milk-and-mocha-bear.gif',
    options: ['Flowers 🌹', 'Chocolates 🍫', 'seblak 🥰', 'boneka 😋'],
  },
  {
    question: 'infokan kegiatan yang dilakukan? 🛋️',
    bgColor: 'from-teal-500 to-green-500',
    gif: 'https://media1.tenor.com/m/5KrBx7BrdgMAAAAC/milk-and-mocha-milk-and-mocha-bear.gif',
    options: ['ngalamun 💬', 'makan-makan 🎧', 'nonton film 🎥', 'jalan-jalan 🌿'],
  },
  {
    question: 'pas main mau pake baju warna? 🎨',
    bgColor: 'from-pink-500 to-purple-500',
    gif: 'https://media1.tenor.com/m/v9sZ1F-gmWMAAAAd/milk-and-mocha-milk-and-mocha-bear.gif',
    options: ['Red ❤️', 'Blue 💙', 'Black 🖤', 'Yellow 💛'],
  },
  {
    question: 'kalo nonton lebih suka genre apa? 🎥',
    bgColor: 'from-blue-500 to-green-500',
    gif: 'https://media1.tenor.com/m/s3geBz_c2ogAAAAC/scary.gif',
    options: ['Action 🦸‍♀️', 'Romantic 💕', 'Comedy 😂', 'Horror 👻'],
  },
  {
    question: 'genre musik yang kamu suka? 🎶',
    bgColor: 'from-orange-400 to-red-400',
    gif: 'https://media1.tenor.com/m/J8D7WFWX4pIAAAAd/listening-music-musical-notes.gif',
    options: ['Pop 🎤', 'Jazz 🎷', 'Classical 🎻', 'Rock 🎸'],
  },
  {
    question: 'mau minum apa? 🍕',
    bgColor: 'from-yellow-500 to-orange-500',
    gif: 'https://media1.tenor.com/m/qKvWT2UBPCIAAAAd/peach-and-goma-temper-tantrum.gif',
    options: ['thom thom', 'pop ice', 'starbuck', 'air selokan'],
  },
  {
    question: 'infokan makanan manis? ',
    bgColor: 'from-red-500 to-yellow-500',
    gif: 'https://media1.tenor.com/m/42qgq33RCmkAAAAC/milk-and-mocha-milk-and-mocha-bear.gif',
    options: ['Ice Cream 🍦', 'Cake 🍰', 'Donuts 🍩', 'All of the above! 😍'],
  },
  {
    question: 'Mau makan apa? 🍪',
    bgColor: 'from-pink-400 to-yellow-400',
    gif: 'https://media1.tenor.com/m/PIGeud5zZBMAAAAd/milk-and-mocha-milk-and-mocha-bear.gif',
    options: ['gacoan', 'ramen', 'batu', 'mie soobek'],
  },
  {
    question: 'How should we end the night? 🌌',
    bgColor: 'from-blue-800 to-purple-800',
    gif: 'https://media1.tenor.com/m/1gf_Jz8WYH0AAAAC/sami-en-dina-sami-dina.gif',
    options: ['mendengarkan lagu ✨', 'bermain Games 🎮', 'Deep Talks 🗨️', 'Dancing 💃'],
  },
  {
    question: 'What’s the perfect way to say goodbye? 💌',
    bgColor: 'from-red-400 to-pink-400',
    gif: 'https://media.tenor.com/zCpmxNoEU7IAAAAj/milk-and-mocha.gif',
    options: ['A Hug 🤗', 'A Kiss 😘', 'traktir makanan', 'janji biar ga asing 💕'],
  },
];



function App() {
  const [herName, setHerName] = useState('');
  const [isNameSubmitted, setIsNameSubmitted] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [isAnswered, setIsAnswered] = useState(false);

  const handleNameSubmit = (e) => {
    e.preventDefault();
    if (herName.trim()) {
      setIsNameSubmitted(true);
    }
  };

  const handleAnswer = (option) => {
    setAnswers((prevAnswers) => [...prevAnswers, option]);
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setIsAnswered(true);
    }
  };

  return (
    <div className={`min-h-screen flex flex-col text-white bg-gradient-to-br ${isNameSubmitted ? questions[currentQuestion].bgColor : 'from-gray-700 to-gray-900'}`}>
      <div className="flex-grow flex items-center justify-center">
        {!isNameSubmitted ? (
          <Header herName={herName} setHerName={setHerName} handleNameSubmit={handleNameSubmit} />
        ) : !isAnswered ? (
          <Question
            herName={herName}
            question={questions[currentQuestion]}
            handleAnswer={handleAnswer}
          />
        ) : (
          <Summary questions={questions} answers={answers} />
        )}
      </div>
      <Footer />
    </div>
  );
}

export default App;
