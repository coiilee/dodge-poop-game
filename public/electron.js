/*
*****개발 서버용 electron 버전*****
electron.js 를 사용하기 위해서는
npm run electron 을 실행하기 전에
npm run build 작업을 진행하고,
npm run electron 을 실행
 */
const { app, BrowserWindow } = require("electron");
const path = require("path");
const isDev = require("electron-is-dev");

let mainWindow;

app.whenReady().then(() => {
  mainWindow = new BrowserWindow({
    width: 1200,
    height: 800,
    webPreferences: {
      nodeIntegration: true,
    },
  });

  const startUrl = isDev
      ? "http://localhost:3000"
      : `file://${path.join(__dirname, "../build/index.html")}`;

  mainWindow.loadURL(startUrl);

  mainWindow.on("closed", () => (mainWindow = null));
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});


/* const { app, BrowserWindow } = require("electron");
const path = require("path");

let mainWindow;
//게임을 만들고 시작할 때 가로 세로 크기 지정
app.on("ready", () => {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {        //웹 설정에서
      nodeIntegration: true, //nodeJs를 이용해서 필요 추가 설정을 할 수 있게 허용
    },
  });
  //앱에서 실행할 때 메인으로 사용할 HTML 설정
  //index.html 이 아니라 app.html 을 메인으로 설정하길 원한다면 app.html 로 변경해주면 됨
  mainWindow.loadURL(`file://${path.join(__dirname, "../build/index.html")}`);

  mainWindow.on("closed", () => {
    mainWindow = null;
  });
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});
*/