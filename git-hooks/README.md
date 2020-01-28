### git hooks pre-commit, checkstyle

- 로컬 환경에서 commit할 때 코딩스타일에 맞지 않으면 커밋하지 못하도록 하는 방법!
- pre-commit-init.sh에서 필요한 설정정보를 세팅해준다.
- 다음과 같이 구성하면 바로 커밋시에 반영된다.
- diff-checkstyle.jar : 스테이징에 올라간 변경사항만 체크해주는 라이브러리 (https://github.com/yangziwen/diff-checkstyle)
```
${project.root}/.git/hooks
  + pre-commit
  + pre-commit-config
    + diff-checkstyle.jar
    + google_checks.portal.xml
    + pre-commit-init.sh
```
