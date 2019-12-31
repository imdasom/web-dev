### jest config
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
