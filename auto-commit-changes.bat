@echo off
cd /d C:\Users\82102\study-log

REM ���� ������ ���� ���� Ŀ��
git add .
git diff --cached --quiet
IF ERRORLEVEL 1 (
    git commit -m "Auto commit on change"
    git push origin main
)