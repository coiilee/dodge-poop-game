import React from "react";

//UI = user interface 로 게임 화면에 관련된 디자인을 작성하는 곳

const GameUI = ({
  gameAreaRef,
  playerRef,
  poops,
  playerPosition,
  score,
  gameActive,
  startGame,
  showModal,
  setShowModal,
}) => {
  return (
    <div className="container text-center">
      <h1 className="mt-4 fw-bold text-primary">똥 피하기!</h1>

        {/*//똥 랜덤 */}
      <div ref={gameAreaRef} className="game-area mx-auto">
        {poops.map((poop, index) => (
          <div
            key={index}
            className="poop"
            style={{ left: poop.x + "px", top: poop.y + "px" }}
          ></div>
        ))}
        <div
          ref={playerRef}
          className="player"
          style={{ left: playerPosition + "px" }}
        ></div>
      </div>

      <p className="score fs-4 mt-3 text-secondary">시간: {score} 초</p>

      {!gameActive && (
        <button className="btn btn-primary btn-lg" onClick={startGame}>
          게임 시작 (Enter)
        </button>
      )}

      {showModal && (
        <div
          className="alert alert-danger alert-dismissible fade show mt-3"
          role="alert"
        >
          <strong>게임 종료!</strong> 생존 시간: {score} 초
          <button
            type="button"
            className="btn-close"
            onClick={() => setShowModal(false)}
          ></button>
        </div>
      )}
    </div>
  );
};

export default GameUI;
