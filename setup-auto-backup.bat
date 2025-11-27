@echo off
chcp 65001 >nul
echo ========================================
echo GitHub 자동 백업 스케줄러 등록
echo ========================================
echo.
echo 매일 저녁 9시에 자동으로 GitHub에 백업합니다.
echo.

REM 기존 작업이 있으면 삭제
schtasks /Delete /TN "DongjedangAutoBackup" /F 2>nul

REM 새 작업 등록
schtasks /Create /TN "DongjedangAutoBackup" /TR "c:\dongjedang\dongjedang-next\auto-backup.bat" /SC DAILY /ST 21:00 /F

echo.
echo ========================================
echo ✅ 스케줄러 등록 완료!
echo 매일 저녁 9시에 자동 백업됩니다.
echo ========================================
echo.
echo 등록된 작업 확인:
schtasks /Query /TN "DongjedangAutoBackup" /FO LIST /V
echo.
pause
