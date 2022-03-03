# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

## [1.1.2](https://github.com/Zhengqbbb/cz-git/compare/v1.1.1...v1.1.2) (2022-03-03)


### Features

* **cz-git:** init monorepo project ([ef6f30d](https://github.com/Zhengqbbb/cz-git/commit/ef6f30d6670c3817163c5b0f7c1fe0bb4d65c9e5)), closes [#2](https://github.com/Zhengqbbb/cz-git/issues/2)
* **cz-git:** reduce commitizen dev number and lock commitilint load ([2b207be](https://github.com/Zhengqbbb/cz-git/commit/2b207be37ef4594aaede5b51496377a8ed4ca172)), closes [#2](https://github.com/Zhengqbbb/cz-git/issues/2)
* **cz-git:** reduce commitlint type dev ([8427b2b](https://github.com/Zhengqbbb/cz-git/commit/8427b2b21c6a07069aca1c12331542bb27d89217))
* **cz-git:** reduce editor dev ([d709130](https://github.com/Zhengqbbb/cz-git/commit/d7091300a74734b87270c9a782ead7d730737b02))
* **cz-git:** reduce word-wrap and temp dev number ([e94f05a](https://github.com/Zhengqbbb/cz-git/commit/e94f05a6712e6513f263344c10dd77cec9828359)), closes [#2](https://github.com/Zhengqbbb/cz-git/issues/2)





### [1.1.1](https://github.com/Zhengqbbb/cz-git/compare/v1.1.0...v1.1.1) (2022-02-28)

### Bug Fixes

* **cz-git:** fix footerPrefix custom ([fc8dc78](https://github.com/Zhengqbbb/cz-git/commit/fc8dc7869a8db022771cd1ff9bcbdb99917aeb58))

## [1.1.0](https://github.com/Zhengqbbb/cz-git/compare/v1.0.9...v1.1.0) (2022-02-28)


### Features

* **cz-git:** done document README.Marks the official version release ([31e8b4d](https://github.com/Zhengqbbb/cz-git/commit/31e8b4d3ec4fa51d376b70202e7d9d7ce510e0d6)), closes [#1](https://github.com/Zhengqbbb/cz-git/issues/1)

### [1.0.9](https://github.com/Zhengqbbb/cz-git/compare/v1.0.7...v1.0.9) (2022-02-27)


### ⚠ BREAKING CHANGES

* **cz-git:** - `customScopesAlign` and `customIssuePrefixsAlign`:
can change align in selet
- `emptyScopesAlias`, `customScopesAlias`, `emptyIssuePrefixsAlias`, `customIssuePrefixsAlias`:
can change name of the prompt show

### Features

* **cz-git:** add align and alias option for selector ([5be93a5](https://github.com/Zhengqbbb/cz-git/commit/5be93a5ee07f969c32d74536d4c9dc8fed7737e7)), closes [#1](https://github.com/Zhengqbbb/cz-git/issues/1)
* **cz-git:** add allowEmptyScopes, allowCustomScopes to control disable ([e0becb6](https://github.com/Zhengqbbb/cz-git/commit/e0becb6fce5d6adae266f51aae58aac1a625c718)), closes [#1](https://github.com/Zhengqbbb/cz-git/issues/1)


### Bug Fixes

* **cz-git:** fixed use both maxHeaderLength and maxSubjectLengt ([659b8eb](https://github.com/Zhengqbbb/cz-git/commit/659b8eb9f9787698b766185fb62043fb98d8a511)), closes [#1](https://github.com/Zhengqbbb/cz-git/issues/1)

### [1.0.8](https://github.com/Zhengqbbb/cz-git/compare/v1.0.7...v1.0.8) (2022-02-24)


### ⚠ BREAKING CHANGES
- feat: allowCustomScopes and allowCustomScopes control disable
- feat: scopes can auto load value
from `commitlint`
* **cz-git:** - `customScopesAlign` and `customIssuePrefixsAlign`:
can change align in selet
- `emptyScopesAlias`, `customScopesAlias`, `emptyIssuePrefixsAlias`, `customIssuePrefixsAlias`:
can change name of the prompt show

### Features

* **cz-git:** add align and alias option for selector ([5be93a5](https://github.com/Zhengqbbb/cz-git/commit/5be93a5ee07f969c32d74536d4c9dc8fed7737e7)), closes [#1](https://github.com/Zhengqbbb/cz-git/issues/1)
* **cz-git:** add allowEmptyScopes, allowCustomScopes to control disable ([e0becb6](https://github.com/Zhengqbbb/cz-git/commit/e0becb6fce5d6adae266f51aae58aac1a625c718)), closes [#1](https://github.com/Zhengqbbb/cz-git/issues/1)

### [1.0.7](https://github.com/Zhengqbbb/cz-git/compare/v1.0.6...v1.0.7) (2022-02-22)


### ⚠ BREAKING CHANGES

* **cz-git:** `confirmColorize` option: Prompt final determination whether to display the color

### Features

* **cz-git:** add confirmColorize option to handle confirm colorize ([68b2629](https://github.com/Zhengqbbb/cz-git/commit/68b26296cb00ca0d33fcebbec6ba8ed36ca53e96)), closes [#1](https://github.com/Zhengqbbb/cz-git/issues/1)

### [1.0.6](https://github.com/Zhengqbbb/cz-git/compare/v1.0.5...v1.0.6) (2022-02-21)


### ⚠ BREAKING CHANGES

* **cz-git:** add option `breaklineChar`

### Features

* **cz-git:** add breaklineChar option to make new line for body and BreakingChanges ([6691c26](https://github.com/Zhengqbbb/cz-git/commit/6691c2624925551b4ad4175e0e9d953ebfe47baf)), closes [#1](https://github.com/Zhengqbbb/cz-git/issues/1)

### [1.0.5](https://github.com/Zhengqbbb/cz-git/compare/v1.0.4...v1.0.5) (2022-02-21)


### Features

* **cz-git:** support both head and subject max rules ([2444724](https://github.com/Zhengqbbb/cz-git/commit/24447247fec13d3f9c4ba323d74da5904f63133f)), closes [#1](https://github.com/Zhengqbbb/cz-git/issues/1)

### [1.0.4](https://github.com/Zhengqbbb/cz-git/compare/v1.0.3...v1.0.4) (2022-02-19)


### ⚠ BREAKING CHANGES

* **cz-git:** Need open option `useEmoji`

### Features

* **cz-git:** :sparkles: support commit add emoji ([dd7d9e0](https://github.com/Zhengqbbb/cz-git/commit/dd7d9e05e6aed48fd3962663fa5f00940d177070)), closes [#1](https://github.com/Zhengqbbb/cz-git/issues/1)

### [1.0.3](https://github.com/Zhengqbbb/cz-git/compare/v1.0.2...v1.0.3) (2022-02-19)


### ⚠ BREAKING CHANGES

* **cz-git:** e.g: { value: "cz-git", name: "cz-git:   core control" }

### Features

* **cz-git:** scopes config support value to add descrition for selector ([980f163](https://github.com/Zhengqbbb/cz-git/commit/980f1631d00a68a9a328319c0f8d3523c5e3e0e2)), closes [#1](https://github.com/Zhengqbbb/cz-git/issues/1)

### [1.0.2](https://github.com/Zhengqbbb/cz-git/compare/v1.0.1...v1.0.2) (2022-02-18)


### ⚠ BREAKING CHANGES

* **cz-git:** if you want to use just set option:
1. defaultScope
2. defaultSubject
3. defaultBody
4. defaultIssues
more introduction see types:
https://github.com/Zhengqbbb/cz-git/blob/main/src/share.ts#L176
### Features

* **cz-git:** add default option to provide default value ([9910b75](https://github.com/Zhengqbbb/cz-git/commit/9910b7542d303a5b7830dbdf05785928d32b8292)), link [#1](https://github.com/Zhengqbbb/cz-git/issues/1)

### [1.0.1](https://github.com/Zhengqbbb/cz-git/compare/v1.0.0...v1.0.1) (2022-02-18)


### Features

* **config:** add standard-version to generate CHANGELOG ([08f5b77](https://github.com/Zhengqbbb/cz-git/commit/08f5b77428cf2042f154b5f39524b8c28adcb6a1))


### Bug Fixes

* **cz-git:** fix package main enter file path ([a1ec4e0](https://github.com/Zhengqbbb/cz-git/commit/a1ec4e0aac8a2fe439c0fc3e384b754322c96347))

## 1.0.0 (2022-02-18)


### Features

* **cz-git:** done commit prompt overall process ([bfb969c](https://github.com/Zhengqbbb/cz-git/commit/bfb969cd03711a2733fcfe59ff93170d353da6e4)), link [#1](https://github.com/Zhengqbbb/cz-git/issues/1)
