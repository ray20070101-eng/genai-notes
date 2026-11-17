// 講義清單：新增講義時在陣列最後加一筆（規則見 CLAUDE.md 第 4 節）
// 欄位：id（=檔名編號）、file、title、week、tag、summary（30 字內），可選 hidden: true
const LESSONS = [
  { id: "01", file: "01-perceptron.html", title: "感知器與 MNIST：神經網路的第一步", week: "第1-2週", tag: "基礎觀念", summary: "從一個神經元開始，看電腦怎麼學會認手寫數字。" },
  { id: "02", file: "02-prompt.html", title: "和 AI 一起設計好用的 Prompt", week: "第4週", tag: "Prompt", summary: "從一句直覺的指令，迭代成可以帶著走的 Prompt。" },
  { id: "03", file: "03-vibe-coding.html", title: "Vibe Coding：用說的把網頁做出來", week: "第5週", tag: "開發工具", summary: "描述需求、讓 AI 寫程式、自己驗收，部署到 GitHub Pages。" },
  { id: "04", file: "04-ai-suite-chatbot.html", title: "用 AI Suite 打造有人設的對話機器人", week: "第6週", tag: "對話機器人", summary: "System prompt 決定個性，Gradio 做出聊天介面。" },
  { id: "05", file: "05-rag.html", title: "RAG：讓 AI 讀你的資料再回答", week: "第7週", tag: "RAG", summary: "切段、向量化、檢索，再把找到的內容交給 LLM。" },
  { id: "06", file: "06-ai-agent.html", title: "AI Agent：Reflection、Tool Use、Planning", week: "第8週", tag: "Agent", summary: "讓 AI 會自我檢查、會用工具、會拆解任務。" },
  { id: "07", file: "07-agents-md.html", title: "AGENTS.md / CLAUDE.md：給 AI 的專案說明書", week: "第9週", tag: "開發工具", summary: "寫一份規則，讓 AI 每次都照同一套方式繼續做。" }
];

function visibleLessons() {
  return LESSONS.filter(l => !l.hidden);
}
