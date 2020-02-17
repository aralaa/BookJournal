# &#128217; BookJournal
BookJournal 앱은 읽은 책들을 체계적으로 관리하고 싶은 사람들을 위해 만들어졌다.  
책을 언제 읽었는지, 책을 읽고 어떤 생각을 했는지 적을 수 있으며 읽고 있는 중인 책과 읽은 책, 읽고싶은 책을 나눠서 리스트로 볼 수 있다.  
이미 시중에 이런 기능을 가진 독서 앱이 있지만 내가 원하는 기능만 사용하고 싶은데 기능이 너무 많아서 복잡하거나 기능이 적거나 해서 직접 앱을 만들게 되었다.  


#### 앱 기능 소개
* [세부 기능](https://github.com/aralaa/BookJournal/wiki/%EC%84%B8%EB%B6%80-%EA%B8%B0%EB%8A%A5)
* [프로토타이핑](https://ovenapp.io/project/bHQBH5rG1FxxhiJf0e1dgmXHL6mTrrgz#tpB9X)


## 프로젝트 목표  
* **JavaScript 공부**  
BookJournal은 ReactNative 기술을 배우고 싶어서 기획하게 되었다. ReactNative가 JavaScript를 사용하기 때문에 서버도 Node.js의 프레임워크인 Express로 만들기로 결정했다. 프론트엔드와 백엔드를 같은 언어로 개발해야 하는건 아니지만 Express로 사용하기로 결정한 이유는 이 전에 진행했던 프로젝트에서 서버 파트를 맡아 개발하면서 Express 프레임워크를 사용해봤었고 JavaScript를 내가 잘 사용할 수 있는 언어로 만들고 싶어서 선택했다. 

* **프로젝트 설계**  
과제 할 때나 팀 프로젝트를 했을때 지금까지는 시간에 쫓겨 설계를 자세히 하기 보다는 대충 하고 들어갔었는데 막상 코딩할 때 설계가 제대로 되지 않으니 수정하느라 진행이 더디게 되고 오래 걸렸던 경험이 많았다. BookJournal은 그런 점을 최소화하기 위해 설계 분석을 디테일하게 하고 들어갔다.
먼저 BookJournal 코딩을 들어가기 전에 USECASE를 분석하여 ClassDiagram과 SequenceDiagram을 만들었으며, 프로토타입을 만들어서 코딩하면서 처음 기획의도에서 벗어나지 않도록 하였다. 
설계가 완벽하진 않기 때문에 추후 코딩하면서 부족한 부분은 수정하거나 채워나갈 예정이다.

* **개발 과정의 큰 흐름 파악하기**  
팀 프로젝트를 진행할 때는 프론트엔드만 하거나 백엔드만 코딩하고 연결했었다. 그 때는 내가 맡은 분야에 대해서만 공부해서 다른데서 오류가 발생했을 때 내가 코딩한 부분만 확인했었다. 그래서 프론트엔드와 백엔드 어떤 한가지 분야만 공부하기 보다는 하나의 앱의 흐름을 이해하고 큰 그림을 볼 수 있는 사람이 되고싶어서 혼자 프로젝트를 진행하게 되었다. 설계한대로 구현하고 코딩하면서 리팩토링 하여 유지보수 단계가 되었을 때 힘들지 않게 코딩하는 것을 목표로 한다.


## Design
* [USE CASE 분석](https://github.com/aralaa/BookJournal/wiki/USE-CASE-%EB%B6%84%EC%84%9D)
* [데이터 정의](https://github.com/aralaa/BookJournal/wiki/%EB%8D%B0%EC%9D%B4%ED%84%B0-%EC%A0%95%EC%9D%98)
* [DB 및 서버 설계](https://github.com/aralaa/BookJournal/wiki/DB-%EB%B0%8F-%EC%84%9C%EB%B2%84-%EC%84%A4%EA%B3%84)


## Development Environment 
* [Development Environment](https://github.com/aralaa/BookJournal/wiki/Development-Environment)
