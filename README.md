# Nano.css - 零类名 HTML5 CSS 框架

Nano.css 是一个基于 HTML5 语义标签的现代简约 CSS 框架，完全遵循"零类名"设计理念。只需使用标准的 HTML5 标签，无需添加任何自定义类名，即可获得美观、响应式的网页设计。

[Demo 地址](https://AlphaZx-CJY.github.io/NanoCSS/)

## 设计理念

Nano.css 的核心设计理念是：

- 语义化优先：充分利用 HTML5 语义标签，让内容决定样式
- 零类名设计：除卡片组件外，无需添加任何自定义类名
- 现代简约：简洁的排版、充足的留白、克制的色彩
- 响应式设计：完美适配从移动设备到桌面设备的所有屏幕尺寸
- 明暗模式：支持自动切换的明暗主题，暗色模式下使用清新的绿色主题

## 快速开始

将以下代码添加到 HTML 文件的<head>部分：

```html
<link rel="stylesheet" href="./dist/nano.min.css" />
```

## 功能特性

### 完整的 HTML5 标签支持

Nano.css 支持所有 HTML5 标签，包括：

- 文本内容：`<h1>-<h6>`, `<p>`, `<blockquote>`, `<pre>`, `<code>`
- 列表：`<ul>`, `<ol>`, `<li>`, `<dl>`, `<dt>`, `<dd>`
- 表格：`<table>`, `<thead>`, `<tbody>`, `<tfoot>`, `<tr>`, `<th>`, `<td>`
- 表单：`<form>`, `<input>`, `<textarea>`, `<select>`, `<button>`
- 媒体：`<img>`, `<video>`, `<audio>`, `<figure>`, `<figcaption>`
- 语义标签：`<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<aside>`, `<footer>`
- 高级元素：`<details>`, `<summary>`, `<progress>`, `<meter>`, `<dialog>`, `<template>`

### 明暗模式支持

框架自动检测系统主题设置，并提供一键切换按钮：

- 亮色模式：清爽的蓝色主题
- 暗色模式：清新的绿色主题（主色调 #15CE58）

### 响应式设计

所有元素都经过精心设计，完美适配各种屏幕尺寸：

- 移动设备优先的设计策略
- 在小屏幕上自动调整布局
- 导航菜单在小屏幕上自动换行

### 唯一的自定义类：卡片组件

整个框架只包含一个自定义类 .card，用于创建卡片式容器：

```html
<div class="card">
  <h3>卡片标题</h3>
  <p>卡片内容...</p>
</div>
```

## 使用示例

```html
<!DOCTYPE html>
<html lang="zh-CN">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>我的网站</title>
    <link rel="stylesheet" href="nano.min.css" />
  </head>
  <body>
    <nav>
      <ul>
        <li><a href="#">首页</a></li>
        <li><a href="#">关于</a></li>
        <li><a href="#">联系</a></li>
      </ul>
    </nav>
    <main>
      <article>
        <header>
          <h1>文章标题</h1>
          <p>发布日期：<time datetime="2023-11-22">2023 年 11 月 22 日</time></p>
        </header>
        <p>这是一篇使用 Nano.css 的文章示例...</p>
        <div class="card">
          <h3>卡片标题</h3>
          <p>卡片内容...</p>
        </div>
      </article>
    </main>
    <footer><p>© 2023 我的网站</p></footer>
  </body>
</html>
```

## 浏览器兼容性

Nano.css 支持所有现代浏览器，包括：

- Chrome (最新版)
- Firefox (最新版)
- Safari (最新版)
- Edge (最新版)

对于旧版浏览器（如 IE11），建议使用 polyfill 提供兼容支持。

## 贡献指南

我们欢迎任何形式的贡献！如果您想改进 Nano.css：

1. Fork 仓库
2. 创建您的功能分支 (git checkout -b feature/AmazingFeature)
3. 提交更改 (git commit -m 'Add some AmazingFeature')
4. 推送到分支 (git push origin feature/AmazingFeature)
5. 打开 Pull Request

## 许可证

Nano.css 基于 MIT 许可证 开源，您可以自由地在个人和商业项目中使用它。

## TODO

- [ ] 支持发布到 NPM 中心仓
