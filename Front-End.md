### Typing Animation
- 타이핑 애니메이션 효과는 css, javascript로 구현할 수 있다
- ::after는 IE8 이상에서만 동작하므로, 크로스브라우징을 지원하지 못하는 단점이 있다  
```html
<!-- main.html -->
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width">
  <title>JS Bin</title>
</head>
<body>
  <h3>css를 사용한 방법</h3>
  <div class="typing-hi"></div>
  
  <h3>javascript를 사용한 방법</h3>
  <div class="typing-seeya"></div>
</body>
</html>
```
```css
/* style.css */
.typing-hi::after {
  content: '안녕하세요';
  animation: typing-hi 1.5s;  
  animation-timing-function: ease-in-out;
}

@keyframes typing-hi {
  0% { content: 'ㅇ' }
  10% { content: '아' }
  20% { content: '안' }
  30% { content: '안ㄴ' }
  40% { content: '안녀' }
  40% { content: '안녕' }
  50% { content: '안녕ㅎ' }
  60% { content: '안녕하' }
  70% { content: '안녕핫' }
  80% { content: '안녕하세' }
  90% { content: '안녕하셍' }
  100% { content: '안녕하세요' }
}
```
```javascript
// typingAnimation.js
function typingAnimation(wordList, intervalTime, typeCallback, clearCallback) {
  var i = 0;
  var typginInterval = setInterval(function() {
    typeCallback(wordList[i++]);
    if (i === wordList.length) {
      clearInterval(typginInterval);
      clearCallback();
    }
  }, intervalTime);
}

var typingSeeYa = document.getElementsByClassName('typing-seeya')[0];
typingAnimation(
  [
    'ㅂ', '바', '반', '반ㄱ', '반가', '반강', '반가우', 
    '반가웠', '반가웠ㅇ', '반가웠어', '반가웠어!', '반가웠어!', '반가웠어', '반가웠어', '반가웠어', '반가웠어',
    '반가웠어!', '반가웠어!', '반가웠어', '반가웠어', '반가웠어', '반가웠어!',
  ],
  120,
  function(word) { typingSeeYa.textContent = word; },
  function() { /* typing chaining... */ }
);
```

### CORS
- CORS란 통신방법책이다. Origin이 상이하여도 통신이 가능하도록 하는방법이다.
- CORS : Cross-Origin Resource Sharing
- 웹어플리케이션  보안 모델 중 하나가 Same-Origin Policy
- Same-Origin : 프로토콜,호스트, 포트가 같은 것을 의미
- Same-Origin Policy로 인해 REST API, 여러 도메인을 가지는 대규모 프로젝트가 불편함을 겪음
- 그래서 나온 것이 CORS.
- 즉, 서버에서 허용했다면 요청이 가능하도록 함
- 참고 <https://brunch.co.kr/@adrenalinee31/1>

### Promise
- 프로미스란 객체이다. 나중에  실행할 콜백을 처리하는 객체이다.
- 프로미스란 패턴이다. 콜백지옥을 극복하기 위한 하나의 패턴이다.
- 비동기콜백을 원하는 순서로 처리해야 할 때 콜백지옥을 피하기 위해 사용된다.

### Promise vs Callback
- Callback을 의도한 순서대로 여러개 사용해야 하는 경우 중첩이 깊어질수록 유지보수가 어렵다.
- Promise를 사용하면 높은 가독성으로 콜백지옥을 개선할 수 있고, 에러처리 또한 편리해진다.

### async-await
- ES8에 정의된 문법
- 비동기 코드를 간결하게 작성할 수 있도록 제공됨

### Prototype
- 프로토타입이란 부모객체이다. 
- 클래스기반의 상속과 다르게 부모객체에게 행위 및 속성을 위임한다. 
- 부모는 클래스가 아닌 객체(메모리에 올라와 있는 인스턴스)이다.

### Scope
- 스코프는 규칙이다. 변수를 어디에 저장하고 어디에서 찾아올 지에 대한  규칙이다.
- 함수스코프, 블록스코프 등 정해진 스코프에 변수를 할당하거나 찾아올 수 있다.

### Closure
- 큰 개념상으로 클로져는 매커니즘이다. 함수가 선언될 때의 스코프를  기억하는 매커니즘이다.
- 작은 개념상으로 클로져는 참조값이다. 함수가 선언될 때의 스코프를 저장한 참조값이다.
- 함수가 선언된 스코프와, 함수를 실행하는 스코프가 다른 경우에 클로져가 사용된다.
- 기본적으로 함수가 종료되면 메모리도 함께 해제될 것 같지만, 클로져를 이용하면 함수 종료  이후에도 메모리를 유지하게 된다.
- 따라서 클로져를 가진 함수 실행시에는, 해당 스코프영역에 접근할 수 있다.

### Hoisting
- 호이스팅은 컴파일과정 중 하나이다. 선언부를 먼저 실행하는 과정이다.
- 자바스크립트도 실행 전 컴파일과정을 거친다.
- 스코프 안에서 변수의 선언과 할당을 나눈다.
- 변수의 선언 ==> 컴파일 시,  변수의 할당 ==> 실행 시
- 선언의 위치와 상관없이 스코프 안에 모든 선언부를 끌어올려 먼저 실행하는 작업이다.

### Event Loop
- 브라우저 혹은 노드 같은 환경에서 사용되는 비동기 지원 매커니즘
- 태스크 큐에 있는 콜백을 순차적으로 자바스크립트 콜스택에 전달
- setTimeout, addEventListener와 같은 비동기함수들이 이벤트루프를 이용한 것
- https://meetup.toast.com/posts/89

### V8 Engine
- V8은 자바스크립트 엔진이다.
- 오픈소스이며 크롬, Node.js에서 사용
- 코드최적화, 가비지컬렉팅 등의 작업을 함

### 이벤트버블링, 이벤트캡쳐링
- 엘리먼트에서 이벤트가 감지되었을 때, 부모 혹은 자식 노드로 이벤트가 전달되는 것
- 버블링 : 자식 --> 부모로 전달, 캡쳐링 : 부모 --> 자식으로 전달
- event.target : 이벤트 최초 발생 엘리먼트
- event.currentTarget : 이벤트를 전달 받은 엘리먼트

### When browser requests a Web page
<https://vanseodesign.com/web-design/browser-requests/>

### Browser Rendering Process
- DOM Tree 생성 : HTML로부터 DOM Tree를 만든다
- CSSOM Tree 생성 : StyleSheet를 참고하여 CSSOM Tree를 만든다
- Render Tree 생성 : 둘을 조합하여 Render Tree 생성
- Reflow : 레이아웃을 잡는다. 요소를 위치시킨다
- Repaint : 레이아웃과 관련 없는 스타일요소를 적용시킨다

![https://medium.com/@gneutzling/the-rendering-process-of-a-web-page-78e05a6749dc] (/img/assets_-LUttLRnSK-L7i6PU3nP_-LiOl5gT5z1EyWN9FLgN_-LiOmUY0kEsmFPkzExrl_image.png)

### Module Import & Export
```javascript
const moment = require('moment');    // CommonJs
import moment from 'moment';        // ES6
```
ES6 모듈 시스템의 장점 : 비동기로 동작하며 필요한 모듈만 불러와 성능 및 메모리 최적화에 유리하다.

### null vs undefined
- null : 빈값을 의미하는 객체
- undefined : 자료형조차 결정되지 않은 상태를 의미

### Cookie & LocalStorage & SessionStorage
- 쿠키 = 로컬스토리지 = 세션스토리지 = 캐싱기법
- 보안에 취약. 중요한 정보는 저장하면 안됨

### Cookie
- 서버단에서 사용하기 위해 사용되는 캐싱기법 (서버전달Y)
- 저장용량 : 저장할 수 있는 용량이 작다 4kb
- 저장방식 : 클라이언트에 파일로 저장됨
- 라이프사이클 : 서버에서 생성되어짐.
    - 만료날짜(쿠키에 포함되어 있음)가 되면 만료됨
    
### Session
- 클라이언트와 통신을 위해 사용되는 캐싱기법
- 저장용량 : 서버에 따라 다름
- 저장방식 : 서버에 저장됨
- 라이프사이클 : 클라이언트에서 요청 시 생성
    - 브라우저가 닫히면 세션 만료

### LocalStorage
- 클라이언트단에서 사용하기 위해 사용되는 캐싱기법 (서버전달N)
- 저장용량 : 5mb
- 저장방식 : 클라이언트에 파일로 저장됨
- 라이프사이클 : 자바스크립트로 세팅
    - 만료날짜 없음
    
### SessionStorage
- 클라이언트단에서 사용하기 위해 사용되는 캐싱기법 (서버전달N)
- 라이프사이클 : 자바스크립트로 세팅
    - 브라우저가 닫히면 데이터 만료
    
### git branch multi delete
- git branch -r | awk -F/ '/\feature-2019-phase10.0/ {print ":refs/heades/" $2 "/" $3}' | xargs -I {} git push origin {}

### 객체지향 vs 함수형 프로그래밍
- 상태를 어떻게 관리하느냐의 차이
- 객체지향은 각 인스턴스가 자신만의 상태를 보유하고 있으며 함수를 통해 상태가 변경시키도록 한다.
- 이에 반해, 함수형 프로그래밍은 상태를 최대한 보유하지 않고 일관된 출력을 가지는 코드의 조각으로 설계된다.

### 함수형 프로그래밍이란
- 프로그래밍 방법이다. 외부에 영향을 주지 않도록 함수를 설계하는 방법이다
- 순수한 함수 : 함수이 실행이 외부의 상태에 영향을 미치지 않는 함수.
- input에 대해 항상 같은 output을 나오도록 한다.
- 항상 예측 가능한 같은 결과가 나오므로 side effect가 적다

### 객체지향 프로그래밍이란
- 프로그래밍 패러다임이다. 프로그램을 단순히 코드의 나열로 바라보는 것이 아니라 객체의 모음으로 바라보고 설계하는 것이다.
- 특징으로는 클래스와 객체, 상속, 캡슐화 등이 있다.
- 비슷한 특징을 가진 코드조각을 모아서 추상화를 할 수 있다. 곧 유지보수가 용이하게 된다.

### Ajax란
- Asyncronous javascript and XML
- 자바스크립트 라이브러리 중 하나
- 브라우저의 XMLHttpRequest를 이용하여 비동기 통신을 하는 기법이다.
- 비동기적으로 페이지 일부를 동적 수정할 수 있다.

### 자바스크립트:실행컨텍스트
- 스크립트가 실행되기 위해서는 this가 누구인지, 전역변수는 어떤것이 있는지, 지역변수와 매개변수는 어떤 것이 있는지, 스코프 등의 정보를 알고 있는 누군가가 있어야 한다.
- 이런 실행에 필요한 정보를 추상화한 개념이 실행컨텍스트이다.
- 함수가 함수를 실행하면 컨텍스트 스택에 컨텍스트가 쌓이고, 함수가 끝날때마다 사라지게 된다.
- 스코프체인도 배열로 저장되고 규칙에 의해 순서대로 참조된다.

### REST API
- 자원(Resource)를 URI로 표현하고, 행위는 Method로 표현하여 결과를 얻을 수 있도록 설계된 API를 의미한다.
- HTTP 규격을 사용할 수 있는 어떤 플랫폼에서도 사용이 가능하다
- URI만 보고도 어떤 동작을 하는지 쉽게 이해할 수 있어야 한다
