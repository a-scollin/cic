import React, { useContext } from "react";
import { AppContext } from "../cryptple";

function GameOver() {
  const {
    board,
    setBoard,
    currAttempt,
    gameOver,
    onSelectLetter,
    correctWord,
    onDelete,
    subKey,
    shift
  } = useContext(AppContext);

  var cipher = ""
  for(var char in correctWord){

    cipher += subKey[correctWord[char].toUpperCase()]
  }

  return (
    <div className="gameOver">
      <h3>
        {gameOver.guessedWord
          ? "You correctly guessed the Cryptle!"
          : "You failed to guess the Cryptle!"}
      </h3>
      <h1>Cipher: {cipher}</h1>
      <h1>Shift: +{shift.toString()}</h1>
      <h1>Word: {correctWord.toUpperCase()}</h1>
      {gameOver.guessedWord && (
        <h3>You guessed in {currAttempt.attempt} attempts</h3>
        )}
      <button onClick={() => window.location.reload(false)}>Play again!</button>
    </div>
  );
}

export default GameOver;
