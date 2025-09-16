# Youtube-yoon

<img width="710" height="399" alt="image" src="https://github.com/user-attachments/assets/53bb9b6f-be01-458d-b202-090a04090bac" />

### 유튜브(Youtube) 사이트를 클론코딩한 프로젝트.

> 프로젝트 기간 : 2025.05.23 ~ 2025.09.02 

> URL : https://youtube-yoon.netlify.app/


## 🎯 구현 목표

- **React**를 활용한 반응형 웹 제작
- **공공 API 활용 능력 향상**
    - YouTube Data API
    - Google 로그인 API
- **Tailwind CSS**를 이용한 UI 스타일링
- **무한 스크롤 기능 구현**

## ⚒️ Skill

![React](https://img.shields.io/badge/React-61DAFB?logo=react&logoColor=white&style=for-the-badge)
![Vite](https://img.shields.io/badge/Vite-646CFF?logo=vite&logoColor=white&style=for-the-badge)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black&style=for-the-badge)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-06B6D4?logo=tailwind-css&logoColor=white&style=for-the-badge)
<br/>
![Firebase](https://img.shields.io/badge/Firebase-FFCA28?logo=firebase&logoColor=black&style=for-the-badge)
![YouTube API](https://img.shields.io/badge/YouTube_API-FF0000?logo=youtube&logoColor=white&style=for-the-badge)
<br/>
![React Router](https://img.shields.io/badge/React_Router-CA4245?logo=react-router&logoColor=white&style=for-the-badge)
![react-intersection-observer](https://img.shields.io/badge/react--intersection--observer-61DAFB?logo=react&logoColor=white&style=for-the-badge)
![react-loading-skeleton](https://img.shields.io/badge/react--loading--skeleton-61DAFB?logo=react&logoColor=white&style=for-the-badge)

## 🗂️ 파일 구조

<img width="231" height="706" alt="image" src="https://github.com/user-attachments/assets/841e90b3-170d-4446-8fee-9ffdb42b8623" />

## 📋구현 기능 & 화면
| 🏠 홈 화면 | 🔍 검색 결과 화면 |
|------------|----------------|
| <img width="1000" alt="image" src="https://github.com/user-attachments/assets/1d240744-4133-42e2-b98f-91fb5372743f" /> | <img width="1000" alt="image" src="https://github.com/user-attachments/assets/11a22306-6bcb-4e10-9a78-9b36e3a8bff9" /> |
| - 인기 영상 목록 표시 **(YouTube Data API)** | - 키워드 검색 결과 표시 **(YouTube Data API)** |

| 💡 공통 기능 | 📺 동영상 상세 페이지 |
|--------------|----------------------|
| ![common-feature](https://github.com/user-attachments/assets/a1f22264-495c-4ba9-9862-a7c48f406c60) | ![video-detail](https://github.com/user-attachments/assets/89fa44e8-b54e-4739-8186-edf4c81e321e) |
| - 로딩 스켈레톤 UI<br>- 무한 스크롤<br>- 다크/라이트 모드<br>- 반응형 레이아웃 | - Video Player 재생<br>- 영상 데이터 표시<br>- 설명 더보기/접기<br>- 추천 영상 사이드바 |

| 👤 로그인 | 📂 마이페이지 |
|-----------|--------------|
| ![login](https://github.com/user-attachments/assets/471bb25d-97b8-4b16-a555-2712b54b4068) | ![mypage](https://github.com/user-attachments/assets/9f7a6df6-c867-4df9-9027-652e8a2c9974) |
| - 구글 로그인 / 로그아웃 **(Firebase)**<br>- 전역 상태 관리 **(Context API)** | - 로그인 버튼 (미로그인 시)<br>- 최근 본 영상 기록 **(localStorage)**<br>- 영상 클릭 시 상세 페이지 이동 |



## 🚀 향후 개선 사항
- 댓글 기능
- 영상 카테고리 분류
- 음성 검색


## 📌 실행 방법
> React + Vite 환경에서 실행
```bash
npm install
npm run dev
```
