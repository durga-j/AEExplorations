import React, { useState } from "react";
import VoteButton from "./Vote";

function VotingApp() {
  // State for vote counts
  const [votesA, setVotesA] = useState(0);
  const [votesB, setVotesB] = useState(0);

  // Handle voting for Option A
  const handleVoteA = () => {
    setVotesA(votesA + 1);
  };

  // Handle voting for Option B
  const handleVoteB = () => {
    setVotesB(votesB + 1);
  };

  return (
    <div>
      <h1>Vote</h1>
      <div>
        {/* Pass state and handlers as props */}
        <VoteButton
          option="Option A"
          votes={votesA}
          onVote={handleVoteA}
        />
        <VoteButton
          option="Option B"
          votes={votesB}
          onVote={handleVoteB}
        />
      </div>
      <h2>Total Votes: {votesA + votesB}</h2>
    </div>
  );
}

export default VotingApp;
