## react, webpack code splitting
- webpack.config.js : output.chunkFilename : '[name].[chunkhash].js' 로 세팅
- 청크파일명 설정가능 : https://hackernoon.com/lessons-learned-code-splitting-with-webpack-and-react-f012a989113
- 각 화면에서 사용하는 모듈 구분이 명확해야 번들링이 효율적으로 할 수 있다.
- withSplitting 커스텀 컴포넌트 사용하여 lazy loading : https://velog.io/@velopert/react-code-splitting

## ESLint 사용시 path alias 세팅한 경우
- jsconfig로 path alias 세팅한 경우 eslint resolver설치하여 준다
```json
//jsconfig.js
{
  "paths": {
    "@/*": ["src/*"]
  }
}
```
```
npm install --save-dev babel-eslint eslint-import-resolver-webpack
```
```javascript
//.eslintrc.js
{
  "settings": {
    "parser": "babel-eslint"
    "import/resolver": "webpack"
  }
}
```

## ESLint 사용시 TemplateLiteral 에러 발생시
```javascript
//.eslintrc.js
{
  'indent': ['error', 2 {
    'ignoredNodes': ['TemplateLiteral'] //백틱을 무시하도록 설정해준다
  }]
}
```

## jest config
- path alias 사용하여 import 하는 경우 jest에서도 인식할 수 있도록 세팅해준다
```javascript
// OrderMenuContainer.test.js
import { OrderMenuContainer } from '@/pages/order';
import { OrderMenuStore } from '@/stores';
```
```json
// jest.config.js
module.exports = {
  moduleNameMapper: {
    "^@\/api(.*)$": "<rootDir>/src/api$1",
    "^@\/pages(.*)$": "<rootDir>/src/pages$1",
    ...
  }
} 
```

## DOM 이란
- 인터페이스이다.
- HTML태그를 구조화하여 프로그래밍적으로 접근제어할 수 있도록 해주는 인터페이스 모델이다.

## real DOM vs virtual DOM
- real DOM을 조작하는 것은 때로는 많은 비용이 발생한다.
- virtual DOM은 real DOM의 업데이트 비용을 줄이기 위해 등장하였고, 렌더링을 최적화해주는 역할을 한다. real DOM의 사본정도로 이해하면 될 것 같다.
- react에서는 2개의 가상돔을 비교하여 real DOM에 변경사항을 적용한다.
- 특히, DOM을 직접 조작하게 되면 레이아웃이나 속성의 변경에 따라 렌더링 양이 많아지는데, virtual DOM은 최종적으로 해당 프레임의 최종결과만을 real DOM에 반영하므로 렌더링 작업을 줄일 수 있다.

## react 특징은
- 단방향 데이터 흐름 : 렌더링의 이유는 단 하나이고 이는 데이터의 흐름을 추적하기 쉽게 해준다.
- virtual DOM : 가상돔을 사용하고 있으며 렌더링성능을 최적화해줍니다.
- UI 컴포넌트기반 : UI를 컴포넌트단위로 만들수 있고, 재사용성과 유지보수를 원활하게 해줌

## JSX란
- JavaScript XML의 약자
- 자바스크립트를 확장한 문법이고 HTML태그를 쉽게 작성하고 리액트 엘리먼트로 만들어준다.

## HOC(High-Order-Component)란
- 컴포넌트를 받아서, 컴포넌트를 반환하는 방식을 의미하며, 컴포넌트 로직을 재사용할때 사용한다

## state란, props란
- state : 컴포넌트의 라이프사이클 동안 변경되고 생성되고 사용되는 객체이다.
- props : 부모컴포넌트에서 자식컴포넌트로 데이터를 전달하기 위해 사용되는 객체이다.
- 둘다 자바스크립트 객체이며, state는 컴포넌트안에서 선언된 값, props는 다른 컴포넌트에서 선언되어 넘어온 값이다.

## FLUX
- 아키텍처 가이드라인이다
- 핵심 개념은 데이터의 흐름을 단방향으로 만드는 것
- 사용자의 액션이 발생하면 --> dispatcher가 받아서 특정 store에 알려줌 --> store에 전달해주면 store에서 원하는 부수적인 작업을 한 뒤 --> view에 렌더링 해주게 됨

## Redux
- Flux를 기반으로 하는 데이터관리 라이브러리
- action, reducer, store
- redux에서 다루는 값은 읽기전용이고 불변성을 지켜야 합니다. 데이터의 변경을 감지하고 불필요한 렌더링을 막아 성능을 낭비하지 않을 수 있음
- reducer의 함수는 순수함수이어야 한다. 이건 프로그래밍 전반에 걸쳐 사용될 수 있는 방법인데, 순수함수는 사이드이펙트가 없기 때문에 프로그래밍에 많은 도움을 준다.

## 상태가 있는 컴포넌트 vs 상태가 없는 컴포넌트
- stateless component : 주로 UI재활용을 위해 사용하게 된다. UI는 같지만 값과 행동이 조금씩 다를때, stateless component에 props와 callback을 넘겨주어 처리한다
- stateful component : UI보다 데이터를 어떻게 가져오고, 초기화하고, 렌더링할 것인지에 집중하는 경우이다. 주로 statful component는 컨테이너 역할을 하고 데이터를 가져와서 stateless component에 데이터를 넘겨주는 역할을 한다.

# react-testing-library
### input 타겟을 가져오기 어려운 경우
- input 타겟을 가져오기 어려운 경우 aria-label 속성으로 대체할 수 있다.
- https://testing-library.com/docs/example-input-event
- https://developer.mozilla.org/ko/docs/Web/Accessibility/ARIA/ARIA_Techniques/Using_the_aria-label_attribute
```html
<input aria-label="cost-input">
```
```javascript
getByLabelText('cost-input');
```
