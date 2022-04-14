import "./App.css";
import Board from "./components/Board";
import Keyboard from "./components/Keyboard";
import { boardDefault, generateWordSet } from "./Words";
import React, { useState, createContext, useEffect } from "react";
import GameOver from "./components/GameOver";


export const AppContext = createContext();

function Cryptle(props) {
  const [board, setBoard] = useState(boardDefault);
  const [currAttempt, setCurrAttempt] = useState({ attempt: 0, letter: 0 });
  const [wordSet, setWordSet] = useState(new Set());
  const [correctWord, setCorrectWord] = useState("");
  const [disabledLetters, setDisabledLetters] = useState([]);
  const [gameOver, setGameOver] = useState({
    gameOver: false,
    guessedWord: false,
  });
  
  var alph = ""
  for(var i = 0; i < 26; i++){
    var chr = String.fromCharCode(65 + i)
    alph = alph + chr
  }
  
  let newalpha = {};
  
  var n = Math.floor(Math.random() * 26);

  if(n == 0){
    n = 1 
  }

  for (let i = 0; i < alph.length; i++){
    let offset = (i + n) % alph.length;
    newalpha[String.fromCharCode(65 + i)] = alph[offset];
  }
  
  const [subKey, keyGen] = useState(newalpha);

  const [shift, setShift] = useState(n);

  useEffect(() => {
    generateWordSet().then((words) => {
      setWordSet(words.wordSet);
      if(props.preset){
        var word = window.prompt("Please enter a five letter word:","CODES")
        if (word == null || word.length != 5){
          word = "codes"
        }
      }else{
        var word = words.todaysWord
      }
      setCorrectWord(word.toLowerCase());
    });
  }, []);

  const onEnter = () => {
    if (currAttempt.letter !== 5) return;

    let currWord = "";
    for (let i = 0; i < 5; i++) {
      currWord += board[currAttempt.attempt][i];
    }
    if (!wordSet.has(currWord.toLowerCase()) && !props.preset) {
      alert("Word not found");
      return;
    }
    
    setCurrAttempt({ attempt: currAttempt.attempt + 1, letter: 0 });
   
    if (currWord.toLowerCase() === correctWord) {
      setGameOver({ gameOver: true, guessedWord: true });
      return;
    }

    console.log(currAttempt);
    if (currAttempt.attempt === 5) {
      setGameOver({ gameOver: true, guessedWord: false });
      return;
    }
  };

  const onDelete = () => {
    if (currAttempt.letter === 0) return;
    const newBoard = [...board];
    newBoard[currAttempt.attempt][currAttempt.letter - 1] = "";
    setBoard(newBoard);
    setCurrAttempt({ ...currAttempt, letter: currAttempt.letter - 1 });
  };

  const onSelectLetter = (key) => {
    if (currAttempt.letter > 4) return;
    const newBoard = [...board];
    newBoard[currAttempt.attempt][currAttempt.letter] = key;
    setBoard(newBoard);
    setCurrAttempt({
      attempt: currAttempt.attempt,
      letter: currAttempt.letter + 1,
    });
  };

  return (
    <div className="App">
      <nav>
        <h1>Cryptle</h1>
      </nav>
      <AppContext.Provider
        value={{
          board,
          setBoard,
          currAttempt,
          setCurrAttempt,
          correctWord,
          onSelectLetter,
          onDelete,
          onEnter,
          setDisabledLetters,
          disabledLetters,
          gameOver,
          subKey,
          shift
        }}
      >
        <div className="game">
          <Board />
          {gameOver.gameOver ? <GameOver /> : <Keyboard />}
        </div>
      </AppContext.Provider>
    </div>
  );
}

export default Cryptle;
