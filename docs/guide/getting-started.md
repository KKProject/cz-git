---
title: Getting Started
sidebarDepth: 1
lastUpdated: true
sitemap:
    priority: 0.8
---

# Usage

## As a dev dependency use

> Just three simple steps:

::: tip
[global installation](#as-global-use) `commitizen`, that you can quickly use the `cz` or `git cz` command to start.

```bash
npm install -g commitizen
```

:::

#### step 1: Install dependencies

:::: code-group
::: code-group-item NPM

```bash
npm install -D cz-git
```

:::
::: code-group-item YARN

```bash
yarn add -D cz-git
```

:::
::: code-group-item PNPM

```bash
pnpm install -D cz-git
```

:::
::::

#### step 2: Modify `package.json` to add `config` Specify the adapter used

```json{5-9}
{
  "scripts": {

  },
  "config": {
    "commitizen": {
      "path": "node_modules/cz-git"
    }
  }
}
```

#### step 3: Add custom configuration (optional, use default)

> There are ==two== configuration methods

**Method 1: (recommended) cz-git is linked with [commitlint](https://github.com/conventional-changelog/commitlint) to provide verification information**, so it can be written in [commitlint](https://github.com/conventional-changelog/commitlint#config) configuration file. <br> E.g: ([⇒ Configuration Template](/guide/configuration.html))

```js{2,7,8,9,10}
// .commitlintrc.js
/** @type {import('cz-git').UserConfig} */
module.exports = {
  rule: {
    ...
  },
  prompt: {
    useEmoji: true
    //option...
  }
}
```

**Method 2:** Add custom configuration under config.commitizen under **package.json**, **but** excessive configuration items will lead to bloated package.json, which is suitable for simple customization. E.g:

```json{8}
{
  "scripts": {
    "commit": "git cz"
  },
  "config": {
    "commitizen": {
      "path": "node_modules/cz-git",
      "useEmoji": true
    }
  }
}
```

## As global use
> The advantage of global installation is that you can use `cz` or `git cz` command to start command line tools under any project to generate standardized commit messages

Just three simple steps:

#### step 1: Install global dependencies

```bash
npm install -g cz-git commitizen
```

#### step 2: Global configuration adapter type

```bash
echo '{ "path": "cz-git" }' > ~/.czrc
```

#### step 3: Add custom configuration (optional, use default configuration)
>  There are ==two== configuration methods
<br>

**Method 1:** Edit the `~/.czrc` file to add configuration in the form of **json**, for example:
```json{3}
{
  "path": "cz-git",
  "useEmoji": true
}
```

**Method 2: Cooperate with [commitlint](https://github.com/conventional-changelog/commitlint)** to create a configuration file under the path of `$HOME` <br>([↓ Configuration Template](/guide/configuration.html))
