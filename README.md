# 🏠 [Show My Portfolio - 포트폴리오 사이트 제작](https://dongwookim97.github.io/show_my_portfolio/)

<br>

## ☝ 1. 개요

<br>

- [보러가기](https://dongwookim97.github.io/show_my_portfolio/)
- 제작 시작 : 2022.11.30 (github.io및 github action 연동 완료)
- 나를 소개하는 포트폴리오를 웹 페이지로 제작하고 싶다는 생각.
- 이왕 제작하는거 기존에 사용해보지 않은 기술들을 적용해서 심미적으로, 기술적으로 완성도가 높은 포트폴리오를 제작 욕구 뿜뿜.

<br>

## ✌ 2. 구상

<br>

- [깃허브 홈페이지](https://github.com/) (로그인 정보 없을 때)와 같이 우주/지구 배경 혹은
- 깃허브 시작 페이지 같이 비슷하게 구현하고자 함.
- 홈페이지 리뉴얼 되기 전, 지구가 돌고있던 배경화면을 기억
  - `three.js`를 사용해서 지구 사진을 회전하는 식으로 해보고자 함.
- [프로토타입 레이아웃](https://ovenapp.io/project/o8J5l2yeXEAXJAzH8E8dJvKp2WeBttUo#PD4Kf)

<br>

## 🤟 3. 개발

<br>

- 일일히 배포하는 과정을 최소화하기 위해 `github actions`를 이용하여 CI/CD하기로함.

  - push / commit / PR 됐을 시 자동으로 유효성 검사 후 배포

- 개발 언어는 `React.js` 이용 / 라우터로 각각의 프로젝트들의 저장소(깃, 노션 등등)으로 리다이렉트하도록 요청!
- 3D 애니메이션을 사용해보고 싶기에 `three.js`를 가볍게 사용해보고자 함
