import GameUI from "./GameUI";
import React, { useState, useEffect, useRef } from "react";
import "./Game.css";

// 게임 움직임과 같은 기능 설정 컴포넌트
const Game = () => {
  const gameWidth = 400;   //게임 가로사이즈
  const gameHeight = 600;  //게임 세로사이즈
  const playerWidth = 40;  //게임 캐릭터 패딩 크기
  const poopSize = 35;     //똥이 주변에 영향을 미치는 크기 사이즈
  const moveStep = 20;     //게임 캐릭터 움직임으로 숫자가 클수록 한 번 키보드를 눌렀을 때 움직이는 거리가 커짐

  const [playerPosition, setPlayerPosition] = useState(180);
  const [poops, setPoops] = useState([]);
  const [gameActive, setGameActive] = useState(false);
  const [score, setScore] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const gameAreaRef = useRef(null);
  const playerRef = useRef(null);

  useEffect(() => {
    let interval;

    if (gameActive) {
      setScore(0);
      setPoops(
        Array.from({ length: 5 }).map(() => ({
          x: Math.floor(Math.random() * (gameWidth - poopSize)),
          y: 0,
        }))
      );

      interval = setInterval(() => {
        setPoops((prevPoops) =>
          prevPoops.map((poop) => {
            let newY = poop.y + 10;
            if (newY > gameHeight) {
              return { x: Math.random() * (gameWidth - poopSize), y: 0 };
            }
            return { ...poop, y: newY };
          })
        );
        setScore((prev) => prev + 1);
      }, 100);
    }

    return () => clearInterval(interval);
  }, [gameActive]);

  //게임 키보드 작동 기능
  useEffect(() => {
    //handlekeydown = 키보드가 눌리면
    const handleKeyDown = (event) => {
      if (!gameActive) {
        //key 키보드에서 엔터나 스페이스바 눌림동작이 감지되면
        if (event.key === "Enter" || event.key === " ") {
          startGame(); //게임 시작
        }
        return;
      }

      //키보드에서 왼쪽 화살표 눌림 동작이 감지되면 왼쪽으로 이동
      if (event.key === "ArrowLeft" && playerPosition > 0) {
        setPlayerPosition((prev) => Math.max(0, prev - moveStep));
      } else if (
      //키보드에서 오른쪽 화살표 눌림 동작이 감지되면 오른쪽으로 이동
        event.key === "ArrowRight" &&
        playerPosition < gameWidth - playerWidth
      ) {
        setPlayerPosition((prev) =>
          Math.min(gameWidth - playerWidth, prev + moveStep)
        );
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [gameActive, playerPosition]);

  useEffect(() => {
    if (!gameActive || !playerRef.current || !gameAreaRef.current) return;

    const gameAreaRect = gameAreaRef.current.getBoundingClientRect();
    const playerRect = playerRef.current.getBoundingClientRect();

    for (const poop of poops) {
      const poopRect = {
        left: gameAreaRect.left + poop.x,
        right: gameAreaRect.left + poop.x + poopSize,
        top: gameAreaRect.top + poop.y,
        bottom: gameAreaRect.top + poop.y + poopSize,
      };

      if (
        playerRect.left < poopRect.right &&
        playerRect.right > poopRect.left &&
        playerRect.top < poopRect.bottom &&
        playerRect.bottom > poopRect.top
      ) {
        endGame();
        return;
      }
    }
  }, [poops]);

  const startGame = () => {
    setGameActive(true);
    setShowModal(false);
  };

  const endGame = () => {
    setGameActive(false);
    setShowModal(true);
  };

  return (
    <GameUI
      gameAreaRef={gameAreaRef}
      playerRef={playerRef}
      poops={poops}
      playerPosition={playerPosition}
      score={score}
      gameActive={gameActive}
      startGame={startGame}
      showModal={showModal}
      setShowModal={setShowModal}
    />
  );
};

export default Game;
