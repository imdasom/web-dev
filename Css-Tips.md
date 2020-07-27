### vw, vh overflow
- 세로스크롤이 존재하는 경우 `width: 100vw`을 사용하면, 세로스크롤의 너비로 인해 가로스크롤이 생긴다. 
- 다음과 같이 우회하여 보정가능. 제일 깔끔한 방법인 것 같다.
```css
.box {
  width: 100vw;
  max-width: 100%;
}
```

### flex 속성을 사용한 정렬
- https://jsbin.com/qaquzurepo/edit?html,js,output
- https://heropy.blog/2018/11/24/css-flexible-box/
```
.cover {
  display: flex;
  justify-content: center;
}
```
### Selector
#### X[foo~="bar"]
커스텀 속성 방식을 사용. 띄어쓰기로 구분한 목록을 찾을 수 있음

    CSS
    a[data-info~="external"] {
       color: red;
    }
     
    a[data-info~="image"] {
       border: 1px solid black;
    }
    
    HTML
    <a href="path/to/image.jpg" data-info="external image"> Click Me, Fool </a>
    
#### X:not(선택자)
선택자에 해당하지 않는 요소를 찾음

    div:not(#foo) {
       color: blue;
    }
    
#### X:only-child
자식이 하나만 있는 요소를 찾을 수 있음
    
    CSS
    div p:only-child {
       color: red;
    }
    
    HTML
    <div><p> My paragraph here. </p></div> ==> 이 요소에만 적용됨
    <div>
       <p> Two paragraphs total. </p>
       <p> Two paragraphs total. </p>
    </div>
    
#### X:only-of-type
형제가 없는 요소를 찾을 수 있음

    CSS
    li:only-of-type {
       font-weight: bold;
    }
    
    HTML
    <ul>
        <li> List Item <li> ==> 형제 li가 없으므로 적용됨
    </ul>
    <ul>
        <li> List Item <li> ==> li가 두개이므로 적용되지 않음
        <li> List Item <li>
    </ul>
    
#### X:first-of-type
X에 해당하는 요소 중 첫번째를 선택함

    CSS
    ul:first-of-type > li:nth-child(2) {
       font-weight: bold;
    }
    
    HTML
    <div>
       <p> My paragraph here. </p>
       <ul>
          <li> List Item 1 </li>
          <li> List Item 2 </li> ==> 이게 선택됨
       </ul>
     
       <ul>
          <li> List Item 3 </li>
          <li> List Item 4 </li>
       </ul>   
    </div>
    
#### X + Y
바로 뒤에 있는 형제요소 중 첫번째 Y만 선택. 바로 뒤에 있지 않으면 선택되지 않음.

    ul + p {
       color: red;
    }

#### X ~ Y
X뒤에 있는 형제요소 중 모든 Y 선택

    ul ~ p {
       color: red;
    }
