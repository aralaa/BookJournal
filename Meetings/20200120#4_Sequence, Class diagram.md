# 미팅 기록

## Class diagram

- class diagram: 1:n의 관계가 성립하는지 생각해 보기
- User - (1) -  BookShelf - (n) - Book
- "database relation"

## Sequence diagram

- class의 객체 생성과 소멸 시점을 명시
- 데이터의 흐름과 처리 시간의 순서가 필요할 때 사용
- API 호출의 경우는 API 전담 class 가 별도로 있으면 그리기가 쉽게 됩니다.
  - singleton class 의 경우 이런 식으로 만드는 좋은 예제

## Design pattern

- 배워서 적용할만한건 쓰면 좋지만, 꼭 알아야 할 필요는 없다.

## Use case

- 하려고 하는 action은 간단하게 작성
  - 복잡도를 높이게 되면 class, sequence diagram으로
- 한 Action의 단위가 어려 객체와, 여러 메소드들을 포함할 수 있으므로 sequence diagram을 action 별로 분리하는 것도 방법

## 데이터 정의

- 타입도 string이나 int로 적어보자
- book 데이터에 id가 필요할 거 같은데 ISBN 번호가 좋을 거 같네요.