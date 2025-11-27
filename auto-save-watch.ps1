# Git 자동 저장 감시 스크립트
# 지정된 시간마다 자동으로 변경사항을 커밋하고 푸시합니다.
# 사용법: .\auto-save-watch.ps1 -IntervalMinutes 10

param(
    [int]$IntervalMinutes = 30  # 기본값: 30분마다 자동 저장
)

Write-Host "=== Git 자동 저장 감시 시작 ===" -ForegroundColor Green
Write-Host "저장 간격: $IntervalMinutes 분" -ForegroundColor Cyan
Write-Host "중지하려면 Ctrl+C를 누르세요.`n" -ForegroundColor Yellow

$scriptPath = Join-Path $PSScriptRoot "auto-save.ps1"

# 무한 루프
while ($true) {
    $timestamp = Get-Date -Format "yyyy-MM-dd HH:mm:ss"
    Write-Host "[$timestamp] 자동 저장 실행..." -ForegroundColor Cyan
    
    # auto-save.ps1 스크립트 실행
    & $scriptPath -CommitMessage "Auto-save: $timestamp"
    
    Write-Host "`n다음 저장까지 $IntervalMinutes 분 대기 중...`n" -ForegroundColor Yellow
    Start-Sleep -Seconds ($IntervalMinutes * 60)
}
