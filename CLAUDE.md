# CLAUDE.md — 叡的生成式 AI 講義站（genai-notes）

這份文件寫給 AI（Claude、Codex、Copilot 等）看。開始修改或新增任何內容前，請先完整讀完這份文件，並嚴格照著做。

## 1. 專案目的

- 把「TAICA 生成式AI：文字與圖像生成的原理與實務」這門課每一週學到的主題，整理成一頁一頁的**講義**。
- 讀者：同樣在修這門課、或想自學生成式 AI 的大學生（看得懂基本程式，但不一定懂 AI 名詞）。
- 目標：每一頁看完，讀者能說出「這週在學什麼、核心概念是什麼、作業怎麼做、要注意什麼」。
- 網站是純靜態網頁，部署在 GitHub Pages，不使用任何框架、不需要 build。

## 2. 檔案結構

```
genai-notes/
├── CLAUDE.md              ← 給 AI 的專案規則（就是這份）
├── AGENTS.md              ← 指向 CLAUDE.md，給其他 AI 工具讀
├── README.md              ← 給人看的專案介紹
├── index.html             ← 首頁：自動列出所有講義卡片
├── assets/
│   ├── style.css          ← 全站唯一的樣式檔
│   ├── lessons.js         ← 講義清單（首頁與上一篇/下一篇都讀這裡）
│   └── lesson.js          ← 講義頁共用的導覽列、上下篇按鈕
├── lessons/
│   ├── 01-perceptron.html
│   ├── 02-prompt.html
│   └── ...                ← 一個主題一個檔案
└── templates/
    └── lesson-template.html  ← 新增講義時一律從這裡複製
```

## 3. 命名與放置規則

- 講義檔放在 `lessons/`，檔名格式：`兩位數編號-英文小寫關鍵字.html`，例如 `08-diffusion.html`。
  - 編號 = 講義順序（不是課程週次），從現有最大編號 +1。
  - 關鍵字只用小寫英文與 `-`，不可有空白、中文或大寫。
- 圖片放在 `assets/img/`，檔名格式：`編號-描述.png`，例如 `08-unet.png`。
- 不要新增其他 CSS 檔或在 HTML 裡寫 `<style>`；所有樣式都寫在 `assets/style.css`。
- 不要引入外部 JS 框架或 CDN（字型除外）。

## 4. 新增一篇講義的固定步驟

1. 複製 `templates/lesson-template.html` 到 `lessons/NN-keyword.html`。
2. 把模板裡所有 `{{...}}` 佔位文字換成實際內容，**不能留下任何 `{{`**。
3. 在 `assets/lessons.js` 的 `LESSONS` 陣列**最後面**加一筆：
   ```js
   { id: "08", file: "08-diffusion.html", title: "Diffusion 圖像生成", week: "第12週", tag: "圖像生成", summary: "一句話說明這篇在講什麼（30 字內）" }
   ```
   - `id` 必須和檔名編號相同；`week` 寫課程週次；`tag` 從第 6 節的標籤清單挑一個。
4. 不需要改 `index.html`：首頁會自動讀 `lessons.js` 產生卡片，講義頁的上一篇/下一篇也會自動接好。

## 5. 每篇講義的固定格式

每篇講義的 `<main class="lesson">` 裡，**依序**一定要有以下區塊（模板已經寫好）：

| 區塊 | class | 內容要求 |
|---|---|---|
| 標頭 | `lesson-header` | 週次標籤、標籤、標題、一句話副標 |
| 本週重點 | `section.key-points` | 3～5 點條列，每點一句話 |
| 核心概念 | `section.concept` | 用自己的話解釋，至少一個生活化比喻；名詞第一次出現時用 `<dfn>` 標起來 |
| 實作流程 | `section.steps` | 用 `<ol>` 寫步驟；有程式碼時放在 `<pre><code>` |
| 我的作業 | `section.homework` | 這週作業做了什麼、選什麼主題 |
| 踩雷與提醒 | `section.pitfalls` | 至少 2 點，用 `<div class="callout warn">` |
| 延伸思考 | `section.next` | 1～2 個問題，連到之後的主題 |

## 6. 標籤清單（tag）

只能用以下標籤，要新增標籤時先改這份文件：

`基礎觀念`、`Prompt`、`開發工具`、`對話機器人`、`RAG`、`Agent`、`圖像生成`

每個標籤對應的顏色寫在 `assets/style.css` 的 `.tag[data-tag="..."]`，新增標籤也要一起加顏色。

## 7. 網頁風格

- 整體感覺：乾淨、像一本好讀的筆記本。米白背景、深色文字、一個主色（深藍綠 `--accent`）。
- 字型：Noto Sans TC（內文）、JetBrains Mono（程式碼）。
- 講義內文寬度最多 760px，置中；手機版要能正常閱讀（不能出現橫向捲軸）。
- 顏色只能用 `style.css` 裡 `:root` 定義的 CSS 變數，不要寫死色碼。
- 語氣：繁體中文、第一人稱（「我」）、輕鬆但每段都有重點；台灣用語（例如「程式」不是「程序」、「資料」不是「數據」）。

## 8. AI 修改內容時要遵守的規則

- **只改被要求的部分**，不要順手重排或改寫其他講義。
- 改樣式時先確認不會影響所有講義頁；如果會，先說明影響範圍。
- 不要刪除任何現有講義；要下架就在 `lessons.js` 裡把該筆加上 `hidden: true`。
- 內容要正確：不確定的技術細節要標註「（待確認）」，不要編造。
- 完成後自我檢查：
  - [ ] 新檔名符合 `NN-keyword.html`
  - [ ] `lessons.js` 有加一筆，且 `id` 與檔名一致
  - [ ] 頁面沒有殘留 `{{`
  - [ ] 七個固定區塊都在，順序正確
  - [ ] 手機寬度 375px 下沒有橫向捲軸

## 9. 部署

- `main` 分支根目錄直接由 GitHub Pages 發布，push 後約 1 分鐘生效。
- 網址：`https://ray20070101-eng.github.io/genai-notes/`
- 所有連結都用**相對路徑**（例如 `../assets/style.css`），不要寫死網域。
