# GitHub 자동 백업 설정 가이드

## 📋 설정 순서

### 1단계: GitHub 저장소 생성
1. https://github.com/new 접속
2. 저장소 이름: `dongjedang-website` (또는 원하는 이름)
3. **Private** 선택 (비공개 - 중요!)
4. "Create repository" 클릭

### 2단계: Git 원격 저장소 연결
저장소를 만든 후, 아래 명령어를 실행하세요:

```bash
cd c:\dongjedang\dongjedang-next

# 원격 저장소 연결 (본인의 GitHub 사용자명으로 변경)
git remote add origin https://github.com/사용자명/dongjedang-website.git

# 브랜치 이름을 main으로 변경
git branch -M main

# 첫 업로드
git push -u origin main
```

**주의**: `사용자명`을 본인의 GitHub 사용자명으로 바꾸세요!

### 3단계: 자동 백업 스케줄러 등록
관리자 권한으로 실행:
```
setup-auto-backup.bat
```

## ✅ 완료 후 확인사항

- [ ] GitHub에 저장소 생성됨
- [ ] 로컬 Git과 GitHub 연결됨
- [ ] 첫 업로드 완료
- [ ] 작업 스케줄러 등록됨 (매일 저녁 9시)

## 🔧 수동 백업 방법

언제든지 수동으로 백업하려면:
```
auto-backup.bat
```

## 📌 참고사항

### 백업 시간 변경
`setup-auto-backup.bat` 파일에서 `/ST 21:00` 부분을 수정
- 예: `/ST 18:00` (저녁 6시)
- 예: `/ST 23:00` (밤 11시)

### 백업 확인
GitHub 저장소에서 확인: https://github.com/사용자명/dongjedang-website

### 문제 해결
- GitHub 로그인 필요 시: Git Credential Manager가 자동으로 처리
- 첫 push 시 GitHub 로그인 창이 뜰 수 있음
