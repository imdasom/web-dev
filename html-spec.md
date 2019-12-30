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
