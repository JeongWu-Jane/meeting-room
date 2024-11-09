### 회의실 예약 시스템

- prettier 적용
  ```
  {
  "printWidth": 80,
  "tabWidth": 2,
  "useTabs": false,
  "semi": true,
  "singleQuote": false,
  "trailingComma": "es5",
  "jsxBracketSameLine": false,
  "arrowParens": "always"
  }

      ```

- eslint 적용
  - eslint-plugin-react: React 관련 린트설정을 지원
  - eslint-plugin-react-hooks: React Hooks의 규칙을 강제해주는 플러그
  - eslint-config-prettier: prettier와 eslint의 충돌을 일으키는 ESLint 규칙들을 비활성화 시켜주는 config
  - eslint-plugin-prettier: prettier에서 인식하는 오류를 ESLint가 출력
  - eslint-plugin-import: ES2015+의 import/export 구문을 지원
  - eslint-config-airbnb: airbnb사의 코딩규칙을 사용
