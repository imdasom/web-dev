# 검토 배경

횡단 관심사가 같은 플랫폼을 위해 공통모듈을 개발하기로 하였습니다. 공통모듈을 어떻게 관리할 것인가에 대한 검토를 해보았습니다.  
이 검토는 npm 기반의 프론트엔드 프로젝트에서 시작되었습니다. 

# 모듈 관리 방법

`SubModule`, `SubTree`, `NPM` 세가지로 고민해보았고, `SubTree`가 가장 적합하다고 판단하였습니다.

`SubTree`는 상위모듈이 하위모듈의 코드를 직접 수정하고 원격에 푸시할 수 있다는 장점이 있어서 선택하게 되었습니다.

`SubModule`은 하위모듈에 직접 들어가서 수정작업을 해야 하는 등의 불편함이 있어서, 버그가 발견되거나 했을 때 번거로운 작업 컨텍스트가 발생할 것으로 판단하여 직접 하위모듈의 이력을 관리할 수 있는  `SubTree`를 사용하는 것이 더 좋을 것이라 판단하였습니다.

[SubModule, SubTree 참고 사이트](https://blog.rhostem.com/posts/2020-01-03-code-sharing-with-git-subtree)



# 버전 관리 방법

공통모듈은 여러 서비스에서 함께 사용하지만, 각 서비스의 생명주기는 동일하지 않습니다.

# SubTree 설정

부모프로젝트 : 공통모듈 프로젝트를 사용하려는 프로젝트

자식프로젝트 : 공통모듈 프로젝트

### 1. 부모프로젝트에서 자식프로젝트의 원격 저장소를 추가해줍니다.

```bash
# git remote add { Remote name } { Child repo }
> git remote add react-common-ui https://github.com/imdasom/react-common-ui.git
```

### 2. subtree 키워드를 이용해 자식프로젝트를 불러옵니다.

이렇게 불러온 자식프로젝트는 부모프로젝트 입장에서 단순한 폴더로 여겨집니다. 여타 파일과 같이 변경사항을 commit하고 push할 수 있습니다.

자식프로젝트를 관리할 폴더위치는 부모프로젝트별로 정의되어 있어야 합니다. 실습에서는 `src/component/common` 하위에서 프로젝트를 관리한다고 가정하겠습니다.

```bash
# git subtree add --prefix { Child path } { Remote name } { Child branch }
> git subtree add --prefix src/component/common react-common-ui { Child branch }
```

### 3. 공통모듈을 수정하는 방법은 2가지가 있습니다.

3-1. 자식프로젝트가 자신을 직접 수정하기

```
일반적인 수정방법과 같습니다 😊
```

3-2. 부모프로젝트에서 자식프로젝트 직접수정하기

`subtree push` 키워드를 이용해 자식프로젝트로 바로 push가 가능합니다! 👍🏻

```bash
# push
# git subtree push --prefix { Child path } { Remote name } { Child branch }
> git subtree push --prefix src/component/common react-common-ui { Child branch }

# pull
# git subtree pull --prefix { Child path } { Remote name } { Child branch }
> git subtree pull --prefix src/component/common react-common-ui { Child branch }
```

명령어가 길어서 불편합니다! alias를 설정해서 사용합시다

```bash
# <project-root>/.git/config

[alias]
	push-subtree = subtree push --prefix src/component/common react-common-ui
```

```bash
> git push-subtree { Child branch }
```

### 4. SubTree를 선택한 이유가 이것입니다!

부모프로젝트에서 자식프로젝트를 직접 수정하지 못하면 다음과 같은 많은 context 전환이 일어날 것입니다.

1. 부모프로젝트에서 자식프로젝트 문제 발견
2. 자식프로젝트로 이동하여 작업 후 push
3. 부모프로젝트에서 pull 받아서 테스트
4. 문제가 있다면 다시 자식프로젝트로 이동하여 작업 후 push 
5. 위의 과정 반복...

`SubModule`도 물론 부모가 자식프로젝트를 수정할 수 있지만 커밋단위로 관리되지 않기 때문에, 충돌발생시 merge가 안되고 둘 중 하나의 작업이력만 선택할 수 있다는 단점이 있습니다.

`SubTree`는 부모프로젝트에서 자식프로젝트의 이력을 함께 관리할 수 있으므로, 수정이 용이하고 충돌발생시에도 merge를 진행할 수 있습니다.
