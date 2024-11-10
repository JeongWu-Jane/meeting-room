### 회의실 예약 시스템

- prettier 적용

  ````
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

  ````

- eslint 적용

  - eslint-plugin-react: React 관련 린트설정을 지원
  - eslint-plugin-react-hooks: React Hooks의 규칙을 강제해주는 플러그
  - eslint-config-prettier: prettier와 eslint의 충돌을 일으키는 ESLint 규칙들을 비활성화 시켜주는 config
  - eslint-plugin-prettier: prettier에서 인식하는 오류를 ESLint가 출력
  - eslint-plugin-import: ES2015+의 import/export 구문을 지원
  - eslint-config-airbnb: airbnb사의 코딩규칙을 사용
  - `@babel/eslint-parser` ESLint가 JSX 구문을 제대로 파싱하지 못할 때 발생할때 해결

- library: material-ui, tui-calendar,
  - material-ui
    `npm install @mui/material @emotion/react @emotion/styled`
    `npm install @mui/x-data-grid `
    `npm install @mui/x-date-pickers `
    `npm install dayjs`
  - tui-calendar
    `npm install @toast-ui/react-calendar `
    `import "@toast-ui/calendar/dist/toastui-calendar.min.css";`
    - useFormPopup/useDetailPopup 사용하려면
    ```
    import 'tui-date-picker/dist/tui-date-picker.css';
    import 'tui-time-picker/dist/tui-time-picker.css';
    ```
  - material icons
    `npm install @mui/icons-material @mui/material @emotion/styled @emotion/react`
