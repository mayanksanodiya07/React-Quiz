function Options({ question, dispatch, answer }) {
  const hasAnaswered = answer !== null;
  console.log(hasAnaswered);
  return (
    <div className="options">
      {question.options.map((option, index) => (
        <button
          className={`btn btn-option ${index === answer ? "answer" : ""} ${
            hasAnaswered
              ? index === question.correctOption
                ? "correct"
                : "wrong"
              : ""
          }`}
          disabled={hasAnaswered}
          onClick={() => dispatch({ type: "newAnswer", payload: index })}
          key={option}
        >
          {option}{" "}
        </button>
      ))}
    </div>
  );
}

export default Options;
