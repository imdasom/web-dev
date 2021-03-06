# React integration
https://mobx.js.org/react-integration.html

## You might not need locally observable state
In general, we recommend to not resort to MobX observables for local component state too quickly, as this can theoretically lock you out of some features of React's Suspense mechanism. As a rule of thumb, use MobX observables when the state captures domain data that is shared among components (including children). Such as todo items, users, bookings, etc.  

State that only captures UI state, like loading state, selections, etc, might be better served by the useState hook, since this will allow you to leverage React suspense features in the future.  

Using observables inside React components adds value as soon as they are either 1) deep, 2) have computed values or 3) are shared with other `observer` components.

리액트 컴포넌트의 state를 observable하게 사용하지 말것을 권한다. 아직 리액트에는 미결상태의 매커니즘이 많이 존재하기 때문에 섣불리 리액트 state와 observable을 연관짓지 않는 것을 권장한다.  

단순히 UI와 관련된 상태값이라면 `useState` hook사용을 하는 것이 좋다.  

리액트 컴포넌트에서 observable을 사용하는 것은, 컴포넌트 계층이 깊거나 computed value가 있거나 컴포넌트간에 공유되는 값이 있을 때 그 가치가 더해진다.

## Always read observables inside observer components
You might be wondering, when do I apply `observer`? The rule of thumb is: apply `observer` to all components that read observable data.

`observer` only enhances the component you are decorating, not the components called by it. So usually all your components should be wrapped by `observer`. Don't worry, this is not inefficient. On the contrary, more `observer` components make rendering more efficient as updates become more fine-grained.

observer를 언제 적용해야하는지 궁금할텐데, observable 데이터를 읽어들이는 모든 컴포넌트에 적용하는 것이 좋다.

`observer`는 데코레이팅해준 컴포넌트에만 영향을 준다. 그래서 대부분의 경우에는 모든 컴포넌트에 `observer`로 감싸는게 좋다. 비효율적일까 걱정하지 않아도 된다. 오히려 `observer`컴포넌트가 많을수록 렌더링 매커니즘은 더 효과적으로 동작할 것이다.
