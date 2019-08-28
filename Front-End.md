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
​- 프로미스란 객체이다. 나중에  실행할 콜백을 처리하는 객체이다.
- 프로미스란 패턴이다. 콜백지옥을 극복하기 위한 하나의 패턴이다.
- 비동기콜백을 원하는 순서로 처리해야 할 때 콜백지옥을 피하기 위해 사용된다.

### Prototype
- 프로토타입이란 부모객체이다. 
- 클래스기반의 상속과 다르게 부모객체에게 행위 및 속성을 위임한다. 
- 부모는 클래스가 아닌 객체(메모리에 올라와 있는 인스턴스)이다.

### Scope
- 스코프는 규칙이다. 변수를 어디에 저장하고 어디에서 찾아올 지에 대한  규칙이다.
- 함수스코프, 블록스코프 등 정해진 스코프에 변수를 할당하거나 찾아올 수 있다.

### Closure
- 클로져는 매커니즘이다. 함수가 선언될 때의 스코프를  기억하는 매커니즘이다.
- 클로져는 참조값이다. 함수가 선언될 때의 스코프를 저장한 참조값이다.
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
- ?

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