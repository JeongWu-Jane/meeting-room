import pluginJs from "@eslint/js";
import eslintConfigPrettier from "eslint-config-prettier";
import eslintPluginPrettierRecommended from "eslint-plugin-prettier/recommended";
import reactPlugin from "eslint-plugin-react";
import reactHooksPlugin from "eslint-plugin-react-hooks";
import eslintPluginImport from "eslint-plugin-import"; // 추가
import globals from "globals";

export default [
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  eslintConfigPrettier,
  eslintPluginPrettierRecommended,
  reactPlugin.configs.recommended,
  reactHooksPlugin.configs.recommended,
  eslintPluginImport.configs.recommended, // 추가
  {
    rules: {
      "no-var": "error",
      "prefer-const": "error",
      eqeqeq: "warn",
      "no-unused-vars": "warn",
      "consistent-return": "warn",
      "no-redeclare": "error",
      // eslint-plugin-import에서 제공하는 규칙 예시
      "import/no-unresolved": "error", // import 오류를 처리하는 규칙
      "import/named": "error", // 명명된 import 오류 처리
      "import/default": "error", // 기본 export 오류 처리
      "import/namespace": "error", // 네임스페이스 import 오류 처리
    },
  },
];
