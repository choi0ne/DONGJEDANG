@echo off
chcp 65001 >nul
echo ========================================
echo 동제당한의원 웹사이트 자동 백업
echo ========================================
echo.

cd /d "c:\dongjedang\dongjedang-next"

echo [1/4] Git 상태 확인 중...
git status

echo.
echo [2/4] 변경된 파일 추가 중...
git add .

echo.
echo [3/4] 백업 저장 중...
git commit -m "Auto backup: %date% %time%"

echo.
echo [4/4] GitHub에 업로드 중...
git push origin main

echo.
echo ========================================
echo ✅ 백업 완료!
echo ========================================
pause
