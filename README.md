# 叡的生成式 AI 講義站

把「TAICA 生成式AI：文字與圖像生成的原理與實務」這門課每週的主題整理成講義的靜態網站。

- 網站：https://ray20070101-eng.github.io/genai-notes/
- 給 AI 的開發規則：[CLAUDE.md](./CLAUDE.md)（其他 AI 工具讀 [AGENTS.md](./AGENTS.md)）

## 怎麼新增一篇講義

1. 複製 `templates/lesson-template.html` 到 `lessons/`，命名為 `NN-keyword.html`
2. 填完內容
3. 在 `assets/lessons.js` 加一筆資料

或直接跟 AI 說：「依照 CLAUDE.md 新增一篇第 12 週 Diffusion 的講義」。

## 技術

純 HTML / CSS / JavaScript，無框架、無 build，GitHub Pages 部署。
