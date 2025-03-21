```markdown
# Dodge Poop Game (Electron + React)
> A simple reaction-based dodging game built with React and Electron.

## 프로젝트 소개
Dodge Poop Game은 React를 기반으로 개발된 게임이며, Electron을 활용하여 Windows 실행 파일(EXE)로 패키징할 수 있습니다.

## 기술 스택
- React 19
- Electron 35
- Electron Builder 25
- Concurrently 9.1

---

## 설치 방법

### 1️⃣ 프로젝트 클론 및 의존성 설치
```sh
git clone https://github.com/사용자명/dodge-poop-game.git
cd dodge-poop-game
npm install
```

---

## 실행 방법

### 2️⃣ React 앱 빌드 및 Electron 실행
```sh
npm run build
npm run electron
```
Electron 창에서 React 앱이 실행됩니다!<br/>
실행이 무사히 된다면  명령 프롬포트 창에서 `ctrl + c 로` 게임을 종료합니다.

---

## EXE 파일 생성 방법

### 3️⃣ Electron Builder를 이용해 EXE 빌드
반드시 `관리자 권한`으로 실행한 `명령 프롬포트` 창에서 실행합니다.
```sh
npm run electron-pack
```
`dist/` 폴더에 EXE 파일이 생성됩니다.

📁 **출력 경로:**
- `dist` 내 만들어진 `exe` 파일명칭은 아래 파일명칭과 다를 수 있습니다.
- `dist/dodge-poop-game-Setup.exe`

📁 **앱 아이콘 설정:**
- 실행 파일 아이콘을 변경하려면 `public/icon.ico` 파일을 추가하세요.

---

## 프로젝트 구조
```
dodge-poop-game/
├── public/
│   ├── electron.js // 추가 작성 파일
│   ├── favicon.ico
│   ├── index.html
│   ├── logo.png
│   ├── logo192.png
│   ├── logo512.png
│   ├── manifest.json
│   ├── robots.txt
├── src/
│   ├── character.png
│   ├── Game.css
│   ├── Game.jsx
│   ├── GameUI.jsx
│   ├── index.css
│   ├── index.js
│   ├── logo.svg
│   ├── poop.png
├── .gitignore
├── package.json
├── README.md

```

---

## 사용 라이선스
이 프로젝트는 MIT 라이선스를 따릅니다.  
자유롭게 수정 및 배포가 가능하지만, 원저작자의 정보를 유지해야 합니다.

---

## 문의 및 기여
문제가 있다면 이슈를 등록해주세요.
