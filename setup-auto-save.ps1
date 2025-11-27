# Git 자동 저장 설정 스크립트
# Windows 작업 스케줄러를 사용하여 자동 저장을 설정합니다.

param(
    [int]$IntervalMinutes = 30,
    [switch]$Remove  # 작업 스케줄러에서 제거
)

$taskName = "DONGJEDANG-AutoSave"
$scriptPath = Join-Path $PSScriptRoot "auto-save.ps1"

if ($Remove) {
    Write-Host "작업 스케줄러에서 자동 저장 작업 제거 중..." -ForegroundColor Yellow
    Unregister-ScheduledTask -TaskName $taskName -Confirm:$false -ErrorAction SilentlyContinue
    Write-Host "✓ 자동 저장 작업이 제거되었습니다." -ForegroundColor Green
    exit 0
}

Write-Host "=== Git 자동 저장 작업 스케줄러 설정 ===" -ForegroundColor Green
Write-Host "저장 간격: $IntervalMinutes 분" -ForegroundColor Cyan

# 작업 스케줄러 액션 생성
$action = New-ScheduledTaskAction -Execute "PowerShell.exe" `
    -Argument "-NoProfile -ExecutionPolicy Bypass -File `"$scriptPath`""

# 트리거 생성 (지정된 간격마다 반복)
$trigger = New-ScheduledTaskTrigger -Once -At (Get-Date) -RepetitionInterval (New-TimeSpan -Minutes $IntervalMinutes)

# 설정
$settings = New-ScheduledTaskSettingsSet -AllowStartIfOnBatteries -DontStopIfGoingOnBatteries -StartWhenAvailable

# 기존 작업이 있으면 제거
Unregister-ScheduledTask -TaskName $taskName -Confirm:$false -ErrorAction SilentlyContinue

# 작업 등록
Register-ScheduledTask -TaskName $taskName -Action $action -Trigger $trigger -Settings $settings -Description "DONGJEDANG 프로젝트 자동 Git 저장"

Write-Host "`n✓ 작업 스케줄러에 자동 저장 작업이 등록되었습니다!" -ForegroundColor Green
Write-Host "`n사용 가능한 명령:" -ForegroundColor Cyan
Write-Host "  - 작업 확인: Get-ScheduledTask -TaskName '$taskName'" -ForegroundColor White
Write-Host "  - 작업 제거: .\setup-auto-save.ps1 -Remove" -ForegroundColor White
Write-Host "  - 수동 실행: .\auto-save.ps1" -ForegroundColor White
