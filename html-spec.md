### input type="number"
- 넘버타입의 input은 기본적으로 숫자만 유효한 값으로 인식한다.
- 숫자외의 문자열이 입력되면 input에 값이 입력되어 보이지만 내부 value는 null이 된다.
- 숫자외의 문자열이 입력되면 onChange 이벤트 호출되지 않으므로 주의.
- 참고 : https://jsfiddle.net/50bchL8v/70/
```html
<!--기본-->
<input type="number"/> 
<!--ISO의 경우 숫자키패드 노출하기 위해서는 pattern값을 넣어주어야 함-->
<input type="number" pattern="[0-9]*"/> 
```  
### 사파리 onChnage, onBlur, runder 이벤트 트리거링이 다른 문제
```
1. PC 브라우저
0입력시
	onChange
		this.numberInput.value = 0
		this.validNumber = null
		this.state.number = null
		
	onBlur
		this.numberInput.value = 0
		this.validNumber = null
		this.state.number = null
		
	개수제한없이 alert
	
	onChange setState (selectCount)
		this.numberInput.value = null
		this.validNumber = null
		this.state.number = null
		selectCount = 0
		
	onBlur
		this.numberInput.value = null
		this.validNumber = null
		this.state.number = null
		
	onBlur setState (validNumber)
		this.numberInput.value = null
		this.validNumber = null
		this.state.number = null
	
	render()
		this.numberInput.value = null
		this.validNumber = null
		this.state.number = 0
```
```
2. 안드로이드 브라우저
0입력시
	onChange
		this.numberInput.value = 0
		this.validNumber = null
		this.state.number = null
		
	개수제한없이 alert
	
	onChange setState
		this.numberInput.value = null
		this.validNumber = null
		this.state.number = null	
	
	render()
		this.numberInput.value = null
		this.validNumber = null
		this.state.number = 0
```
```
3. iphone
0입력시
	onChange
		this.numberInput.value = 0
		this.validNumber = null
		this.state.number = null
		
	개수제한없이 alert
	
	onChange setState (selectCount)
		this.numberInput.value = null
		this.validNumber = null
		this.state.number = null
		selectCount = 0
		
	render()
		this.numberInput.value = null
		this.validNumber = null
		this.state.number = 0
		
	onBlur
		this.numberInput.value = null
		this.validNumber = null
		this.state.number = 0
		
	onBlur setState (validNumber)
		this.numberInput.value = null
		this.validNumber = null
		this.state.number = 0
		
	render() --> 아까 onChange로 인한 setState가 세팅되는듯..
		this.numberInput.value = null
		this.validNumber = null
		this.state.number = null
```

### BFCache, Navigation Timing
- IPhone 파이어폭스, 사파리에서 swipe back/forward시 스크립트가 제대로 실행되지 않는 이슈가 있었음
- BFCache가 원인인 것 같음
- 대안1. pageshow, pagehide 이벤트를 사용하는 것을 대안으로 제시함
- 대안2. history back/forward가 되었다는 것은 window.performance.navigation.type으로 알 수 있으므로 처리 가능
- BFCache 설명 https://programmingsummaries.tistory.com/380
- BFCache https://developer.mozilla.org/en-US/docs/Archive/Misc_top_level/Working_with_BFCache
- Navigation Timing https://developer.mozilla.org/ko/docs/Navigation_timing
- Navigation Timing으로 해결 https://tnsgud.tistory.com/387
