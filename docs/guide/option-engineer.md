---
title: Engineering Related
sidebarDepth: 1
lastUpdated: true
sitemap:
    priority: 0.6
---
# Options - Engineering Related

## scopes

- **description** : custom selection **module scope** command line display information
- **type** : `string[] | Array<{ name: string, value?: string }>`
- **default** : `[]`

::: tip
If you define a `scope-enum` using the [commitlint](https://github.com/conventional-changelog/commitlint) rule, it will be imported automatically.<br>
[⇒ can see the recipes](/guide/recipes.html#scopes)
:::

## scopeOverrides

- **description** : After customizing a specific **type**, **override module scope** command line display information
- **type** : <br>`{ [type: string]: string[] | Array<{ name: string, value?: string }> } | undefined`
- **default** : `undefined`
- **example** : `scopeOverrides: { "test": ["e2eTest", "unitTest"] }`
- **use** : Displays custom module scope selection when selecting module scope after selecting ==specific== commit **type** : `type`

:::tip
If you define `scopeOverrides` then define generic `scopes`
:::

## scopeFilters

- **description** : Filter select of prompt to select module scopes by the scope.value
- **type** : string[]
- **default** : `[".DS_Store"]`

## enableMultipleScopes

- **description** : Whether to enable the use of **multiple scopes mode**
- **type** : `boolean`
- **default** : `false`

:::tip
Try running `checkbox=1 cz` to **enable multiple scopes mode in the current session**    
Demo And Usage [⇒ see the recipes](/guide/recipes.html#support-for-multiple-scopes)
:::

## scopeEnumSeparator

- **description** : Separator between **scopes** in multiple scopes mode
- **type** : `string`
- **default** : `,`

## allowCustomScopes

- **description** : whether to display custom options when selecting **module scope** (custom)
- **type** : `boolean`
- **default** : `true`
- **use** : not using `commitlint` and want to turn off custom options in select.

:::tip
It will automatically detect whether the definition of the [commitlint](https://github.com/conventional-changelog/commitlint) rule `scope-enum` is strict, and it will not be displayed automatically.
:::

## allowEmptyScopes

- **description** : whether to display an empty option when selecting **module scope** (empty)
- **type** : `boolean`
- **default** : `true`

:::tip
It will automatically detect whether the definition of the [commitlint](https://github.com/conventional-changelog/commitlint) rule `scope-empty` is strict, and it will not be displayed automatically.
:::

## allowBreakingChanges

- **description** : a specific **type** that allows BREAKING CHANGES
- **type** : `string[]`
- **default** : `["feat", "fix"]`

## upperCaseSubject

- **description** : Whether to automatically capitalize the first character of the short description (subject)
- **type** : `boolean`
- **default** : `false`

## breaklineNumber

- **description** : body and BREAKING CHANGES the line wraps automatically according to the character exceeding this value
- **type** : `number`
- **default** : `100`
- **use** : When commitlint is not used and normalization is to be used

:::tip
Line breaks mainly based on **word completeness** <br>
If commitlint is used, it will automatically read `body-max-line-length` and set it.
:::

## breaklineChar

- **description** : newline characters in detailed descriptions (body) and breaking changes (BREAKING CHANGES)
- **type** : `string`
- **default** : `"|"`


## skipQuestions

- **description** : The question specified by the custom selection is not displayed
- **type** : `Array<"scope" | "body" | "breaking" | "footerPrefix" | "footer">`
- **default** : `[]`

## issuePrefixs

- **description** : custom select issue prefix
- **type** : `Array<{ value: string, name: string }>`
- **default** : `[{ value: "closed", name: "closed: ISSUES has been processed" }]`

## allowCustomIssuePrefixs

- **description** : whether to display custom options when selecting ISSUES prefixs (custom)
- **type** : `boolean`
- **default** : `true`

## allowEmptyIssuePrefixs

- **description** : whether to display an empty option when selecting ISSUES prefixs (skip)
- **type** : `boolean`
- **default** : `true`

## maxHeaderLength

- **description**: Define the length of the header in the commit message, giving the verification information on the command line
- **type**: `number`
- **default**: `Infinity`
- **use** : when commitlint is not used and normalization is to be used

:::tip
If you use commitlint, it will automatically read `header-max-length` and set it to give a prompt on the command line
:::

## maxSubjectLength

- **description**: Define the length of the subject in the commit message, giving the verification information on the command line
- **type**: `number`
- **default**: `Infinity`
- **use** : When commitlint is not used and normalization is to be used

:::tip
If using commitlint will automatically read `subject-max-length` and set it to give a prompt on the command line.
:::

## minSubjectLength

- **description**: Define the length of the subject in the commit message, giving the verification information on the command line
- **type**: `number`
- **default** : `0`
- **use** : When commitlint is not used and normalization is to be used

:::tip
If commitlint is used, it will automatically read `subject-min-length` and set it to give a prompt on the command line
:::
