---
title: Introduction
sidebarDepth: 0
lastUpdated: true
sitemap:
    priority: 0.8
---

<p align="center">
    <a target="_blank" href="https://github.com/Zhengqbbb/cz-git">
        <img src="https://user-images.githubusercontent.com/40693636/154064210-964aeaa0-d9dc-4cea-9e52-2ffc3789611b.png" alt="cz-git-logo" width="400" data-width="400" data-height="400">
    </a>
</p>

<h1 align="center">cz-git</h1>

<p align="center">
    <a target="_blank" href="https://github.com/commitizen/cz-cli#adapters">
      <img style="display:inline-block;margin:0.2em;" alt="Commitizen-Adapter" src="https://img.shields.io/badge/Commitizen-Adapter-red.svg?logo=git&style=flat">
    </a>
    <br/>
    <a target="_blank" href="http://commitizen.github.io/cz-cli/">
      <img style="display:inline-block;margin:0.2em;" alt="commitizen-friendly" src="https://img.shields.io/badge/commitizen-friendly-brightgreen.svg?logo=github">
    </a>
    <a target="_blank" href="https://github.com/Zhengqbbb/cz-git">
      <img style="display:inline-block;margin:0.2em;" alt="GitHub Repo stars" src="https://img.shields.io/github/stars/zhengqbbb/cz-git?style=social">
    </a>
    <a target="_blank" href="https://github.com/Zhengqbbb/cz-git/actions/workflows/nodejs.yml">
      <img style="display:inline-block;margin:0.2em;" alt="test-ci" src="https://github.com/Zhengqbbb/cz-git/workflows/Node.js%20CI/badge.svg">
    </a>
    <br>
    <a href="https://www.npmjs.com/package/cz-git">
        <img style="display:inline-block;margin:0.2em;" alt="npm" src="https://img.shields.io/npm/v/cz-git?style=flat-square&logo=npm">
        <img style="display:inline-block;margin:0.2em;" alt="npm-download" src="https://img.shields.io/npm/dt/cz-git.svg?style=flat-square&logo=npm">
    </a>
    <br/>
</p>

<p align="center">
    <a href="https://github.com/Zhengqbbb/cz-git">Github</a>
    &nbsp; | &nbsp;
    <a href="https://cz-git.qbenben.com/guide/getting-started.html">Installation</a>
    &nbsp; | &nbsp;
    <a href="https://cz-git.qbenben.com">Website</a>
    &nbsp; | &nbsp;
    <a href="https://cz-git.qbenben.com/zh/">简体中文文档</a>
</p>

## Introduction

A more engineered, lightweight, customizable, standard output format [commitizen](https://github.com/commitizen/cz-cli) adapter.

![demo-gif](https://user-images.githubusercontent.com/40693636/154906217-e0b1c5d0-9294-4072-8082-c0cdd9392023.gif)

> **What is commitizen**: A Node.js-based `git commit` command-line tool that assists in generating standardized and standardized commit messages. <br><br>
> **What is an adapter**: Replace the **interactive** plugin for the commitizen command line tool.

## Feature

- Just to be a **lazy man** !!! Friendly command line tool,  Supports **search and selection** on the command line, reducing spelling errors.
- **LightWeight**, **Highly Customizable**, but the output format follows the standard [Angular commit](https://github.com/angular/angular.js/blob/master/DEVELOPERS.md#commits) specification.
- [Better for monorepo engineering]((/guide/recipes.html#scopes)) and **commitlint** project to give relevant verification information to the command line.
- Better linking with [issue](/guide/recipes.html#default) **for issue** | ✅ Support **emoji** in commit.

```bash
$ npm i -D cz-git
+ cz-git          (1.8 MB)
added 1 package in 0.47s
```

[⇒ Why cz-git](/guide/why.html)

## LICENSE

MIT
Copyright (c) 2022-present Qiubin Zheng <zhengqbbb@gmail.com> [https://github.com/Zhengqbbb](https://github.com/Zhengqbbb)

> I just do my best to make thing well, Could you give a [star ⭐](https://github.com/Zhengqbbb/cz-git) to encourage me ?