import React, { useContext, useEffect } from "react";
import { AppContext } from "../cryptple";

function Letter({ letterPos, attemptVal }) {
  const { board, subKey, setDisabledLetters, currAttempt, correctWord } =
    useContext(AppContext);
  const letter = board[attemptVal][letterPos];
  const correct = correctWord.toUpperCase()[letterPos] === letter;
  const almost =
    !correct && letter !== "" && correctWord.toUpperCase().includes(letter);
  const letterState =
    currAttempt.attempt > attemptVal &&
    (correct ? "correct" : almost ? "almost" : "error");

  useEffect(() => {
    console.log("currAttempt")
    if (letter !== "" && !correct && !almost) {
      console.log(letter);
      setDisabledLetters((prev) => [...prev, letter]);
    }
  }, [currAttempt.attempt]);

  console.log(letter)
  console.log(subKey)
  return (
    <div className="letter" id={letterState}>
      {letter === "" ? "" : subKey[letter]}
    </div>
  );
}

export default Letter;
