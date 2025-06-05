@echo off
cd /d C:\Users\82102\study-log

REM 변경 사항이 있을 때만 커밋
git add .
git diff --cached --quiet
IF ERRORLEVEL 1 (
    git commit -m "Auto commit on change"
    git push origin main
)