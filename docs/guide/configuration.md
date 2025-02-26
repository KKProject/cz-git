---
title: Configure Template
sidebarDepth: 2
lastUpdated: true
sitemap:
    priority: 0.6
---

# Configure Template

## Javascript template

- `.commitlintrc.js`
- `.commitlintrc.cjs`
- `commitlint.config.js`
- `commitlint.config.cjs`

::: details Click to expand .commitlintrc.js complete default configuration template

```js
// commitlint.config.js | .commitlintrc.js
/** @type {import('cz-git').UserConfig} */
module.exports = {
  rules: {
    // @see: https://commitlint.js.org/#/reference-rules
  },
  prompt: {
    messages: {
      type: "Select the type of change that you're committing:",
      scope: "Denote the SCOPE of this change (optional):",
      customScope: "Denote the SCOPE of this change:",
      subject: "Write a SHORT, IMPERATIVE tense description of the change:\n",
      body: 'Provide a LONGER description of the change (optional). Use "|" to break new line:\n',
      breaking: 'List any BREAKING CHANGES (optional). Use "|" to break new line:\n',
      footerPrefixsSelect: "Select the ISSUES type of changeList by this change (optional):",
      customFooterPrefixs: "Input ISSUES prefix:",
      footer: "List any ISSUES by this change. E.g.: #31, #34:\n",
      confirmCommit: "Are you sure you want to proceed with the commit above?"
    },
    types: [
      { value: "feat", name: "feat:     A new feature", emoji: ":sparkles:" },
      { value: "fix", name: "fix:      A bug fix", emoji: ":bug:" },
      { value: "docs", name: "docs:     Documentation only changes", emoji: ":memo:" },
      { value: "style", name: "style:    Changes that do not affect the meaning of the code", emoji: ":lipstick:" },
      { value: "refactor", name: "refactor: A code change that neither fixes a bug nor adds a feature", emoji: ":recycle:" },
      { value: "perf", name: "perf:     A code change that improves performance", emoji: ":zap:" },
      { value: "test", name: "test:     Adding missing tests or correcting existing tests", emoji: ":white_check_mark:" },
      { value: "build", name: "build:    Changes that affect the build system or external dependencies", emoji: ":package:" },
      { value: "ci", name: "ci:       Changes to our CI configuration files and scripts", emoji: ":ferris_wheel:" },
      { value: "chore", name: "chore:    Other changes that don't modify src or test files", emoji: ":hammer:" },
      { value: "revert", name: "revert:   Reverts a previous commit", emoji: ":rewind:" }
    ],
    useEmoji: false,
    themeColorCode: "",
    scopes: [],
    allowCustomScopes: true,
    allowEmptyScopes: true,
    customScopesAlign: "bottom",
    customScopesAlias: "custom",
    emptyScopesAlias: "empty",
    upperCaseSubject: false,
    allowBreakingChanges: ['feat', 'fix'],
    breaklineNumber: 100,
    breaklineChar: "|",
    skipQuestions: [],
    issuePrefixs: [{ value: "closed", name: "closed:   ISSUES has been processed" }],
    customIssuePrefixsAlign: "top",
    emptyIssuePrefixsAlias: "skip",
    customIssuePrefixsAlias: "custom",
    allowCustomIssuePrefixs: true,
    allowEmptyIssuePrefixs: true,
    confirmColorize: true,
    maxHeaderLength: Infinity,
    maxSubjectLength: Infinity,
    minSubjectLength: 0,
    scopeOverrides: undefined,
    defaultBody: "",
    defaultIssues: "",
    defaultScope: "",
    defaultSubject: ""
  }
};
```

:::

<Badge type="tip" text="Tip" /> If your project does not use commitlint,and want to use other profiles. You can use the following configuration items

- `.cz.js`
- `cz.config.js`

:::details Click to expand cz.config.js complete default configuration template

```js
// cz.config.js
/** @type {import('cz-git').CommitizenGitOptions} */
module.exports = {
  messages: {
    type: "Select the type of change that you're committing:",
    scope: "Denote the SCOPE of this change (optional):",
    customScope: "Denote the SCOPE of this change:",
    subject: "Write a SHORT, IMPERATIVE tense description of the change:\n",
    body: 'Provide a LONGER description of the change (optional). Use "|" to break new line:\n',
    breaking: 'List any BREAKING CHANGES (optional). Use "|" to break new line:\n',
    footerPrefixsSelect: "Select the ISSUES type of changeList by this change (optional):",
    customFooterPrefixs: "Input ISSUES prefix:",
    footer: "List any ISSUES by this change. E.g.: #31, #34:\n",
    confirmCommit: "Are you sure you want to proceed with the commit above?"
  },
  types: [
    { value: "feat", name: "feat:     A new feature", emoji: ":sparkles:" },
    { value: "fix", name: "fix:      A bug fix", emoji: ":bug:" },
    { value: "docs", name: "docs:     Documentation only changes", emoji: ":memo:" },
    { value: "style", name: "style:    Changes that do not affect the meaning of the code", emoji: ":lipstick:" },
    { value: "refactor", name: "refactor: A code change that neither fixes a bug nor adds a feature", emoji: ":recycle:" },
    { value: "perf", name: "perf:     A code change that improves performance", emoji: ":zap:" },
    { value: "test", name: "test:     Adding missing tests or correcting existing tests", emoji: ":white_check_mark:" },
    { value: "build", name: "build:    Changes that affect the build system or external dependencies", emoji: ":package:" },
    { value: "ci", name: "ci:       Changes to our CI configuration files and scripts", emoji: ":ferris_wheel:" },
    { value: "chore", name: "chore:    Other changes that don't modify src or test files", emoji: ":hammer:" },
    { value: "revert", name: "revert:   Reverts a previous commit", emoji: ":rewind:" }
  ],
  useEmoji: false,
  themeColorCode: "",
  scopes: [],
  allowCustomScopes: true,
  allowEmptyScopes: true,
  customScopesAlign: "bottom",
  customScopesAlias: "custom",
  emptyScopesAlias: "empty",
  upperCaseSubject: false,
  allowBreakingChanges: ['feat', 'fix'],
  breaklineNumber: 100,
  breaklineChar: "|",
  skipQuestions: [],
  issuePrefixs: [{ value: "closed", name: "closed:   ISSUES has been processed" }],
  customIssuePrefixsAlign: "top",
  emptyIssuePrefixsAlias: "skip",
  customIssuePrefixsAlias: "custom",
  allowCustomIssuePrefixs: true,
  allowEmptyIssuePrefixs: true,
  confirmColorize: true,
  maxHeaderLength: Infinity,
  maxSubjectLength: Infinity,
  minSubjectLength: 0,
  scopeOverrides: undefined,
  defaultBody: "",
  defaultIssues: "",
  defaultScope: "",
  defaultSubject: ""
};
```

:::

<Badge type="tip" text="Tip" /> You can also optionally custom configuration file path in package.json

```json{8}
{
  "scripts": {
    "commit": "git cz"
  },
  "config": {
    "commitizen": {
      "path": "node_modules/cz-git",
      "czConfig": "./config/cz.config.js"
    }
  }
}
```

## Emoji template

::: details Click to expand .commitlintrc.js complete emoji template template

```js{21-31,33}
// .commitlintrc.js
/** @type {import('cz-git').UserConfig} */
module.exports = {
  rules: {
    // @see: https://commitlint.js.org/#/reference-rules
  },
  prompt: {
    messages: {
      type: "Select the type of change that you're committing:",
      scope: "Denote the SCOPE of this change (optional):",
      customScope: "Denote the SCOPE of this change:",
      subject: "Write a SHORT, IMPERATIVE tense description of the change:\n",
      body: 'Provide a LONGER description of the change (optional). Use "|" to break new line:\n',
      breaking: 'List any BREAKING CHANGES (optional). Use "|" to break new line:\n',
      footerPrefixsSelect: "Select the ISSUES type of changeList by this change (optional):",
      customFooterPrefixs: "Input ISSUES prefix:",
      footer: "List any ISSUES by this change. E.g.: #31, #34:\n",
      confirmCommit: "Are you sure you want to proceed with the commit above?"
    },
    types: [
      { value: "feat", name: "feat:     ✨  A new feature", emoji: ":sparkles:" },
      { value: "fix", name: "fix:      🐛  A bug fix", emoji: ":bug:" },
      { value: "docs", name: "docs:     📝  Documentation only changes", emoji: ":memo:" },
      { value: "style", name: "style:    💄  Changes that do not affect the meaning of the code", emoji: ":lipstick:" },
      { value: "refactor", name: "refactor: ♻️   A code change that neither fixes a bug nor adds a feature", emoji: ":recycle:" },
      { value: "perf", name: "perf:     ⚡️  A code change that improves performance", emoji: ":zap:" },
      { value: "test", name: "test:     ✅  Adding missing tests or correcting existing tests", emoji: ":white_check_mark:" },
      { value: "build", name: "build:    📦️   Changes that affect the build system or external dependencies", emoji: ":package:" },
      { value: "ci", name: "ci:       🎡  Changes to our CI configuration files and scripts", emoji: ":ferris_wheel:" },
      { value: "chore", name: "chore:    🔨  Other changes that don't modify src or test files", emoji: ":hammer:" },
      { value: "revert", name: "revert:   ⏪️  Reverts a previous commit", emoji: ":rewind:" }
    ],
    useEmoji: true,
    themeColorCode: "",
    scopes: [],
    allowCustomScopes: true,
    allowEmptyScopes: true,
    customScopesAlign: "bottom",
    customScopesAlias: "custom",
    emptyScopesAlias: "empty",
    upperCaseSubject: false,
    allowBreakingChanges: ['feat', 'fix'],
    breaklineNumber: 100,
    breaklineChar: "|",
    skipQuestions: [],
    issuePrefixs: [{ value: "closed", name: "closed:   ISSUES has been processed" }],
    customIssuePrefixsAlign: "top",
    emptyIssuePrefixsAlias: "skip",
    customIssuePrefixsAlias: "custom",
    allowCustomIssuePrefixs: true,
    allowEmptyIssuePrefixs: true,
    confirmColorize: true,
    maxHeaderLength: Infinity,
    maxSubjectLength: Infinity,
    minSubjectLength: 0,
    scopeOverrides: undefined,
    defaultBody: "",
    defaultIssues: "",
    defaultScope: "",
    defaultSubject: ""
  }
};
```

:::

## JSON template

- `.czrc`
- `.commitlintrc`
- `.commitlintrc.json`
- `commitlint` field in `package.json`
- `config.commitizen` field in `package.json`

::: tip
It is recommended to use JavaScript for configuration files in the project. You can combine `fs` and `path` to select [scopes](/guide/recipes.html#scopes) for generating dynamic modules.
:::

::: details Click to expand JSON default configuration template

```json
// .czrc | package.json | .commitlintrc(need "prompt" key)
{
  "messages": {
    "type": "Select the type of change that you're committing:",
    "scope": "Denote the SCOPE of this change (optional):",
    "customScope": "Denote the SCOPE of this change:",
    "subject": "Write a SHORT, IMPERATIVE tense description of the change:\n",
    "body": "Provide a LONGER description of the change (optional). Use \"|\" to break new line:\n",
    "breaking": "List any BREAKING CHANGES (optional). Use \"|\" to break new line:\n",
    "footerPrefixsSelect": "Select the ISSUES type of changeList by this change (optional):",
    "customFooterPrefixs": "Input ISSUES prefix:",
    "footer": "List any ISSUES by this change. E.g.: #31, #34:\n",
    "confirmCommit": "Are you sure you want to proceed with the commit above?"
  },
  "types": [
    { "value": "feat", "name": "feat:     A new feature", "emoji": ":sparkles:" },
    { "value": "fix", "name": "fix:      A bug fix", "emoji": ":bug:" },
    { "value": "docs", "name": "docs:     Documentation only changes", "emoji": ":memo:" },
    { "value": "style", "name": "style:    Changes that do not affect the meaning of the code", "emoji": ":lipstick:" },
    { "value": "refactor", "name": "refactor: A code change that neither fixes a bug nor adds a feature", "emoji": ":recycle:" },
    { "value": "perf", "name": "perf:     A code change that improves performance", "emoji": ":zap:" },
    { "value": "test", "name": "test:     Adding missing tests or correcting existing tests", "emoji": ":white_check_mark:" },
    { "value": "build", "name": "build:    Changes that affect the build system or external dependencies", "emoji": ":package:" },
    { "value": "ci", "name": "ci:       Changes to our CI configuration files and scripts", "emoji": ":ferris_wheel:" },
    { "value": "chore", "name": "chore:    Other changes that don't modify src or test files", "emoji": ":hammer:" },
    { "value": "revert", "name": "revert:   Reverts a previous commit", "emoji": ":rewind:" }
  ],
  "useEmoji": false,
  "themeColorCode": "",
  "scopes": [],
  "allowCustomScopes": true,
  "allowEmptyScopes": true,
  "customScopesAlign": "bottom",
  "customScopesAlias": "custom",
  "emptyScopesAlias": "empty",
  "upperCaseSubject": false,
  "allowBreakingChanges": ["feat", "fix"],
  "breaklineNumber": 100,
  "breaklineChar": "|",
  "skipQuestions": [],
  "issuePrefixs": [{ "value": "closed", "name": "closed:   ISSUES has been processed" }],
  "customIssuePrefixsAlign": "top",
  "emptyIssuePrefixsAlias": "skip",
  "customIssuePrefixsAlias": "custom",
  "allowCustomIssuePrefixs": true,
  "allowEmptyIssuePrefixs": true,
  "confirmColorize": true,
  "minSubjectLength": 0,
  "defaultBody": "",
  "defaultIssues": "",
  "defaultScope": "",
  "defaultSubject": ""
}
```
:::

## TypeScript template

:::danger
**Since v1.3.0. The typescript configuration file will no longer be loaded**. e.g(commitlint.config.ts)

- Using the TypeScript configuration file will **affects command line tool startup speed**.
- Increase the package size.
:::

:::tip
Using the js configuration file to add the `@type` annotation can be a good way to provide code hints at configuration time.
:::
