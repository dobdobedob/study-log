# Study Log

📘 나만의 스터디 기록 웹앱입니다.  
React로 만든 정적인 웹사이트를 Windows 서버에 배포하고,  
PM2와 작업 스케줄러를 이용해 자동으로 GitHub에 커밋이 반영되도록 구성했습니다.

## 🛠️ 사용 스택
- React
- Serve
- PM2
- Windows 작업 스케줄러
- GitHub

## 💾 서버 자동화
1. PM2로 React 빌드 파일을 serve 명령으로 실행
2. 스케줄러가 부팅 시 `start-pm2.bat` 실행
3. 하루에 1회 자동 커밋 스크립트 실행 (선택 가능)
