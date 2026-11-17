# AGENTS.md

本專案的完整規則寫在 [CLAUDE.md](./CLAUDE.md)，所有 AI 工具（Codex、Copilot、Cursor、Gemini 等）都請以那份為準。

最重要的三件事：

1. 新增講義：複製 `templates/lesson-template.html` → `lessons/NN-keyword.html`，填完所有 `{{...}}`。
2. 在 `assets/lessons.js` 的 `LESSONS` 陣列最後加一筆，首頁與上下篇會自動更新。
3. 只用 `assets/style.css` 的 CSS 變數與 class，不新增樣式檔、不引入框架。
