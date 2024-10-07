import React from "react";

function VoteButton({ option, votes, onVote }) {
  return (
    <div>
      <h2>{option}</h2>
      <p>Votes: {votes}</p>
      <button onClick={onVote}>Vote for {option}</button>
    </div>
  );
}

export default VoteButton;
