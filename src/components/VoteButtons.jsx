const voteButtons = ({ setVote, setHasVoted, hasVoted }) => {
  function incVote() {
    setVote(1);
    setHasVoted(true);
  }
  function decVote() {
    setVote(-1);
    setHasVoted(true);
  }

  return (
    <>
      <button onClick={incVote} disabled={hasVoted}>
        Like
      </button>
      <button onClick={decVote} disabled={hasVoted}>
        dislike
      </button>
    </>
  );
};

export default voteButtons;
