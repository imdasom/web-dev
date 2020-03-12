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
