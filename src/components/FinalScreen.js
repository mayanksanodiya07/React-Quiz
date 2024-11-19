function FinalScreen({ points, maxPossiblePoints, highscore, dispatch }) {
  return (
    <>
    <p className="result">
      You have scored <strong>{points}</strong> out of{" "}
      <strong>{maxPossiblePoints}</strong>
    </p>

    <p className="highscore">
        (highscore : {highscore} points)
    </p>
    <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "restart" })}
      >
        Restart Quiz
      </button>
    </>
  );
}

export default FinalScreen;
