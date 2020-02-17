# 미팅 기록

## 프로젝트 계획 리뷰

- [https://github.com/aralaa/BookJournal](https://github.com/aralaa/BookJournal)
- javascript 공부
  - 1주일에 몇 시간을 할지를 정하고 뭘 할지 정한 계획대로 실천
  - 시간을 정하고 그 시간만큼 실천
- 프로젝트 설계
  - 구현하다가 설계의 변경사항이 발견되면 빛의 속도로 설계 문서를 수정한다.
- 개발 과정의 큰 흐름 파악하기
  - 설계한 대로 구현하기
  - 구현 하면서 리팩토링 하기
  - 유지보수 단계에 들어갔을 때 힘들지 않게 만들어 둬야 함

## node.js

- 공부하면서 확실히 알아둘 것
- blocking vs non blocknig
- sync vs async

## REST API

- 문서 작성 가이드: 기존에 잘 만들어진 REST API 문서를 따라서 만들어 보기,예제 2개
  - [https://developers.kakao.com/docs/restapi/local#%ED%82%A4%EC%9B%8C%EB%93%9C-%EA%B2%80%EC%83%89](https://developers.kakao.com/docs/restapi/local#%ED%82%A4%EC%9B%8C%EB%93%9C-%EA%B2%80%EC%83%89)
  - [https://openvidu.io/docs/reference-docs/REST-API/#post-apisessions](https://openvidu.io/docs/reference-docs/REST-API/#post-apisessions)
- 클라이언트 기준?
  - 서버에서 전체 목록을 가져오고 클라이언트에서 filter 처리
- 서버 기준
  - 전체 목록을 줄 수도 있고, 필요한 쿼리를 받아서 처리할 수도 있음

## 진행 방식

- 2주에 한번 미팅
- 코드 리뷰 진행
  - branch를 만들고 pull request로 코드 리뷰
- project에 계획 수립하고 진행상황 수시로 업데이트
  - issue와 연계도 가능