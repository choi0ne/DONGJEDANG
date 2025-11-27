# Git 자동 저장 시스템 사용 가이드

이 시스템은 DONGJEDANG 프로젝트의 변경사항을 자동으로 GitHub에 저장합니다.

## 📋 제공되는 스크립트

### 1. `auto-save.ps1` - 수동 저장
변경사항을 즉시 커밋하고 GitHub에 푸시합니다.

**사용법:**
```powershell
# 기본 사용 (자동 생성된 메시지)
.\auto-save.ps1

# 커스텀 메시지
.\auto-save.ps1 "기능 추가: 새로운 컴포넌트"
```

### 2. `auto-save-watch.ps1` - 주기적 자동 저장
지정된 시간 간격마다 자동으로 저장합니다. (터미널을 열어둬야 함)

**사용법:**
```powershell
# 30분마다 자동 저장 (기본값)
.\auto-save-watch.ps1

# 10분마다 자동 저장
.\auto-save-watch.ps1 -IntervalMinutes 10

# 중지: Ctrl+C
```

### 3. `setup-auto-save.ps1` - Windows 작업 스케줄러 설정
백그라운드에서 자동으로 실행됩니다. (터미널을 닫아도 계속 실행)

**사용법:**
```powershell
# 30분마다 자동 저장 설정 (기본값)
.\setup-auto-save.ps1

# 15분마다 자동 저장 설정
.\setup-auto-save.ps1 -IntervalMinutes 15

# 작업 스케줄러에서 제거
.\setup-auto-save.ps1 -Remove

# 작업 상태 확인
Get-ScheduledTask -TaskName "DONGJEDANG-AutoSave"
```

## 🚀 빠른 시작

### 방법 1: 수동으로 저장하고 싶을 때
```powershell
.\auto-save.ps1
```

### 방법 2: 터미널을 열어두고 자동 저장 (추천: 개발 중)
```powershell
.\auto-save-watch.ps1 -IntervalMinutes 15
```

### 방법 3: 완전 자동화 (추천: 백그라운드 실행)
```powershell
# 관리자 권한으로 PowerShell 실행 후
.\setup-auto-save.ps1 -IntervalMinutes 30
```

## ⚙️ 권장 설정

- **개발 중**: 15-30분 간격 (`auto-save-watch.ps1` 사용)
- **일반 작업**: 30-60분 간격 (`setup-auto-save.ps1` 사용)
- **중요한 변경 후**: 즉시 저장 (`auto-save.ps1` 사용)

## 📝 참고사항

1. **변경사항이 없으면** 커밋하지 않습니다.
2. **자동 생성된 커밋 메시지**는 타임스탬프를 포함합니다.
3. **작업 스케줄러** 방식은 컴퓨터가 켜져 있을 때만 작동합니다.
4. **Git 인증**이 설정되어 있어야 푸시가 가능합니다.

## 🔧 문제 해결

### PowerShell 실행 정책 오류
```powershell
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
```

### Git 인증 오류
```powershell
# GitHub Personal Access Token 설정
git config credential.helper store
git push  # 한 번 수동으로 푸시하여 인증 정보 저장
```

### 작업 스케줄러가 실행되지 않음
- 관리자 권한으로 PowerShell을 실행했는지 확인
- `Get-ScheduledTask -TaskName "DONGJEDANG-AutoSave"` 로 작업 확인

## 🎯 추천 워크플로우

1. **개발 시작 시**: `auto-save-watch.ps1` 실행 (15분 간격)
2. **중요한 기능 완성 후**: `auto-save.ps1 "기능명: 설명"` 실행
3. **개발 종료 시**: Ctrl+C로 감시 스크립트 중지

또는

1. **한 번만 설정**: `setup-auto-save.ps1 -IntervalMinutes 30` (관리자 권한)
2. **이후 자동 실행**: 백그라운드에서 자동으로 저장됨
