---
title: Show Related
sidebarDepth: 1
lastUpdated: true
sitemap:
    priority: 0.6
---

# Options - Show Related

## messages

- **description** : custom command line question information
- **example** : <br>`messages: { type: "Select the type of change that you're committing:" }`

## themeColorCode

- **description** : set prompt inquirer theme color
- **type** : `string`
- **default** : `""`  (⇒ cyan color)
- **rule**: `"38;5;${color_code}"`    
  ⇒ the `color_code` can get it by [https://github.com/sindresorhus/xterm-colors](https://github.com/sindresorhus/xterm-colors)
- **example**: `"38;5;043"`

:::tip
If you don't want to use the theme color of the configuration record, you can add a line to the profile file such as `~/.bashrc` or `~/.zshrc`, which will have a higher priority:

```bash
export ___X_CMD_THEME_COLOR_CODE="38;5;043"
```

:::

## types

- **description** : custom selection **type** prompt
- **type** : `Array<{ name: string; value: string; emoji?: string }>`
- **example** : <br>`types: [{value: 'feat', name: 'feat: A new feature', emoji: ':sparkles:'}]`

:::tip
If you want to use Emoji, you need ==enable== `userEmoji` configuration item. <br>
And need to add Emoji Code, you can find the corresponding characters in: [https://gitmoji.dev/](https://gitmoji.dev/) to supplement `emoji`.
:::

## typesAppend

- **description** : Add extra types to default types
- **type** : `Array<{ name: string; value: string; emoji?: string }>`
- **use** : Use when you don't want to add bloated defaults and don't want to adjust the default order in configuration. **Only want to add a small number of types**.
- **default** : `[]`
- **example** : <br>`typesAppend: [ { value: "workflow", name: "workflow:  Workflow changes"} ],`

## useEmoji

- **description** : Whether to enable commit messages with emoji characters.
- **type** : `boolean`
- **default** : `false`

:::tip
Try running `emoji=1 cz` to **enable output emoji mode in the current session**
:::

## customScopesAlign

- **description** : Set the **location** of empty option (empty) and custom option (custom) in **selection range**
- **type** : `"top" | "bottom" | "top-bottom" | "bottom-top"`
- **default** : `"bottom"`

## customScopesAlias

- **description** : Customize the **name** displayed on the command line for the custom option (custom) in the **selection range**
- **type** : `string`
- **default** : `custom`

## emptyScopesAlias

- **description** : Customize the **name** displayed on the command line if the empty option (empty) in the **selection range**
- **type** : `string`
- **default** : `empty`

## customIssuePrefixsAlign

- **description** : Set the **location** of skip option (skip) and custom option (custom) in **select issue prefix**
- **type** : `"top" | "bottom" | "top-bottom" | "bottom-top"`
- **default** : `"top"`

## customIssuePrefixsAlias

- **description** : custom **select the issue prefix** in the custom option (custom) to display the **name** on the command line
- **type** : `string`
- **default** : `custom`

## emptyIssuePrefixsAlias

- **description** : Customize the **name** displayed on the command line in the skip option (skip) in the **select issue prefix**
- **type** : `string`
- **default** : `skip`

## confirmColorize

- **description** : Determines whether the template commit message is colored in the commit
- **type** : `boolean`
- **default** : `true`

---

<br/>
<br/>
<br/>

:::tip
Using ==default value== can produce many ways to make the tool more suitable for you or your team's habits, [⇒ see the recipes](/guide/recipes.html#default)
:::

## defaultType

- **description** : pin type item the top of the types list (match item value)
- **type** : `string`
- **default** : `""`

## defaultScope

- **description** : Whether to use display default value in **custom scope**
- **type** : `string`
- **default** : `""`
- **use** : when you want the default value to appear on the command line just press the <kbd>Enter</kbd> key
<Badge type="tip" text="Tip" vertical="middle" /> pin scope item the top of the scope list (match item value)

## defaultSubject

- **description** : Whether to use the display default value in the **short description**
- **type** : `string`
- **default** : `""`
- **use** : when you want the default value to appear on the command line just press the <kbd>Enter</kbd> key

## defaultBody

- **description** : Whether to use the display default value in the **detailed description**
- **type** : `string`
- **default** : `""`
- **use** : when you want the default value to appear on the command line just press the <kbd>Enter</kbd> key

## defaultIssues

- **description** : Whether to use the display default value in the **input ISSUE and custom ISSUE prefix**
- **type** : `string`
- **default** : `""`
- **use** : when you want the default value to appear on the command line just press the <kbd>Enter</kbd> key
