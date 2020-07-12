# web-dev
html, css, react, algorithm 등 웹관련 지식 히스토리

### 리눅스 파일명 일괄 변경
- 현재 디렉토리에서 bizcf* 패턴의 파일들을 대상으로 파일명중에 bizc라는 부분을 bizc-SOMETHING으로 수정하겠다는 의미.
- 로그파일명 규칙을 변경하는 과정에서 기존 로그파일의 이름도 일괄 변경해야 하는 필요가 생겼다. 이럴 때 사용할 수 있음.
```
> rename bizc bizc-SOMETHING bizcf*
```

# 객체지향 Chapter 10. 상속과 코드 재사용
## 상속의 문제를 알아보자
### 불필요한 인터페이스 상속문제

    자바 Stack 클래스
        - Vector를 상속
        - Vector의 퍼블릭 인터페이스를 사용가능
        - Stack의 LIFO 규칙을 위반할 수 있음
        - 예상하지 못한 side effect를 가져옴

### 메서드 오버라이딩의 오작용 문제
    - 상속받은 부모클래스에서 어떤 로직이 있는지 알 수 없음
    - 오버라이딩한 메서드 내부에서 어떤일이 일어나는지 알 수 없음
    - 중복되는 일을 하는 메서드가 어쩔수 없이 생길 수 있음
    - 부모 클래스가 자신의 메서드를 사용하는 방법에 > 자식클래스가 결합 될 수 있다
    - 예상하지 못한 결과 가져옴

### 내부 구현 문서화의 문제
    - 잘된 API 문서는 메서드가 '어떻게' 하는지를 설명하지 않는다
    - 상속 사용시 내부 구현의 상세 내역을 문서화해야 하므로 좋지 않은 방법

### 부모클래스와 자식클래스의 동시 수정 문제
    - 상속은 자식클래스-부모클래스 결합 강해진다 (수정이 동시에 이뤄져야 한다)
    - 결합도 = 다른 대상에 대해 알고 있는 지식의 양


## 개선/해결

### 추상화에 의존하다
    - 유사한 메서드는 차이를 메서드로 추출
    - 자식 클래스의 코드를 > 부모클래스에서 호출하도록 해라

### 차이에 의한 프로그래밍
    - 재사용가능한코드 = 심각한 버그가 존재하지 않는 코드
    - 상속 = 객체지향에서 중복코드 제거/재사용 하는 방법 중 하나
    - 상속 = 여러 클래스에서 재사용 가능한 코드를 하나의 클래스로 모을 수 있다
    - 상속 = 대부분의 경우에 우아한 해결방법은 아님. 더 좋은 방법이 있음
    - 합성 = 상속의 단점을 피하고 재사용하는 방법


# 객체지향 Chapter 11. 합성과 유연한 설계
```
- 상속관계 = is-a 관계
- 합성관계 = has-a 관계
- 상속하면 > 부모클래스의 변수/메서드의 로직을 사용하게 된다 > 내부 구현에 의존한다 > 내부 구현이 변경되면 자식클래스도 다 수정해야 한다 bad
- 합성하면 > 로직을 사용하는 것이 아니라 인터페이스만 사용한다 > 내부 구현에 의존하지 않는다 > 인터페이스가 변하지 않는 한 수정하지 않아도 된다 good
- [코드 재사용을 위해서는] 객체 합성이 클래스 상속보다 더 좋은 방법이다. (GOF94)
```
### 상속의 문제
```
1. 코드 재사용을 위해 불필요한 인터페이스를 상속받아야 할 때도 있다. (java.util.Properties, java.util.Stack)
2. 부모클래스와 자식클래스간에 메서드 오버라이딩이 원하는 대로 동작하지 않을 수 있다. (부모클래스의 로직을 완벽하게 이해하지 않으므로) (InstrumentedHashSet)
3. 부모클래스를 수정하면, 상속받는 자식클래스도 모두 수정해야 한다.
```
### 상속을 합성으로 어떻게 변경할 수 있을까?
상속하는 부모클래스를
```java
public class Stack<E> extends Vector<E> {
    ...
}
```
자식클래스가 변수로 선언해서 가지고 있도록 하는 방법으로 변경할 수 있다.
자식클래스는 자신에게 필요없는 인터페이스를 공개하지 않아도 된다.
```java
public class Stack<E> {
    private Vector<E> elements = new Vector<>();
    ....
}
```
InstrumentedHashSet는 HashSet의 메서드를 잘못 사용할 일이 없어졌다.
```java
// (참고) 인스턴스 변수의 메서드를 그대로 호출하는 것 : 포워딩메서드
public class InstrumentedHashSet<E> implements Set<E> {
    ....
    
    private Set<E> set;
    
    @Override
    public boolean remove(Object o) {
        return set.remove(o);
    }
    
    @Override
    public boolean isEmpty() {
        return set.isEmpty();
    }
}
``` 
### 구현이 아니라 인터페이스에 의존하면 변경에 용이해진다
위에서 알아본 예제 모두, 각각 Vector와 Set의 퍼블릭 인터페이스를 활용하고 있다.

### 휴대폰 요금제 예제로 상속의 문제 알아보기
요금제와 부가정책 가능한 조합
|요금제|부가정책1|부가정책2|결국 클래스가 된다|
|------|---------|--------|------------------|
|일반|x|x|RegularPhone|
|일반|세금정책|x|TaxableRegularPhone|
|일반|세금정책|요금할인정책|TaxableAndRateDiscountableRegularPhone|
|일반|요금할인정책|x|RateDiscountableRegularPhone|
|일반|요금할인정책|세금정책|RateDiscountableAndTaxableRegularPhone|
|심야할인|x|x|NightlyDiscountPhone|
|심야할인|세금정책|x|TaxableNightlyDiscountPhone|
|심야할인|세금정책|요금할인정책|TaxableAndRateDiscountableNightlyDiscountPhone|
|심야할인|요금할인정책|x|RateDiscountableNightlyDiscountPhone|
|심야할인|요금할인정책|세금정책|RateDiscountableAndTaxableNightlyDiscountPhone|

만약 여기서 부가정책3을 추가한다면? 요금제를 추가한다면? `클래스 폭발(class explosion)` 혹은 `조합의 폭발(combinational explosion)`이 일어난다고 한다.

### 최선의 방법은 상속을 포기하는 것이다.

### 합성관계로 변경하기
```
- 상속을 사용하는 것 = 컴파일타임 의존성과 런타임 의존성을 동일하게 만들겠다고 선언하는 것
- 합성을 사용하면 > 퍼블릭 인터페이스에만 의존하여 런타임 시점에 객체의 관계를 변경할 수 있다.
- 상속 = 조합의 결과를 클래스마다 넣는 방법
- 합성 = 조합을 개별클래스로 구현한 후 실행 시점에 조립하는 것
```
1. 기본 정책 합성하기
각 정책을 별도의 클래스로 만든다. 
```
- BasicRatePolicy가 RatePolicy 인터페이스를 구현하는 점이 기존과 다르다
- Phone이 RatePolicy를 참조하고 있다 > 다양한 요금정책과 협력하기 위해
- RatePolicy는 외부에서 초기화된다 > 런타임 의존성으로 대체하기 위해
```
2. 부가 정책 적용하기
- 부가 정책은 기본 정책/다른 부가 정책을 참조할 수 있어야 한다 => 부가 정책은 어떤 종류의 정책과도 합성될 수 있어야 한다
- Phone의 입장에서는 기본정책과/부가정책은 동일한 '역할'로 보여야 한다 => 동인한 인터페이스를 구현해야 한다.
```
Phone phone = new Phone(
                  new TaxablePolicy(
                      new RateDiscountablePolicy(
                          new RegularPolicy(...)
                      )
                  )
              );
```
3. 새로운 정책 추가하기
- 고정요금제가 필요하다면 > 클래스 하나만 추가하고, 원하는 방식으로 조합해서 사용하면 된다.
- 새로운 부가정책이 필요하면 > 클래스 하나만 추가하고, 원하는 방식으로 조합해서 사용하면 된다.
### 믹스인
- java8 + mixins : http://hannesdorfmann.com/android/java-mixins
