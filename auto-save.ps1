# Git 자동 저장 스크립트
# 사용법: .\auto-save.ps1 또는 .\auto-save.ps1 "커밋 메시지"

param(
    [string]$CommitMessage = "Auto-save: $(Get-Date -Format 'yyyy-MM-dd HH:mm:ss')"
)

Write-Host "=== Git 자동 저장 시작 ===" -ForegroundColor Green

# 현재 디렉토리 확인
$currentDir = Get-Location
Write-Host "작업 디렉토리: $currentDir" -ForegroundColor Cyan

# Git 상태 확인
Write-Host "`n변경사항 확인 중..." -ForegroundColor Yellow
git status --short

# 변경사항이 있는지 확인
$changes = git status --porcelain
if ([string]::IsNullOrWhiteSpace($changes)) {
    Write-Host "`n변경사항이 없습니다. 저장할 내용이 없습니다." -ForegroundColor Yellow
    exit 0
}

# 모든 변경사항 추가
Write-Host "`n변경사항 추가 중..." -ForegroundColor Yellow
git add -A

# 커밋
Write-Host "`n커밋 생성 중: $CommitMessage" -ForegroundColor Yellow
git commit -m $CommitMessage

# GitHub에 푸시
Write-Host "`nGitHub에 푸시 중..." -ForegroundColor Yellow
git push origin main

if ($LASTEXITCODE -eq 0) {
    Write-Host "`n✓ 성공적으로 GitHub에 저장되었습니다!" -ForegroundColor Green
} else {
    Write-Host "`n✗ 푸시 중 오류가 발생했습니다." -ForegroundColor Red
    exit 1
}

Write-Host "`n=== Git 자동 저장 완료 ===" -ForegroundColor Green
