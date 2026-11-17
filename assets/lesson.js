// 講義頁共用：依目前檔名自動產生「上一篇 / 下一篇」
(function () {
  const pager = document.querySelector(".pager");
  if (!pager || typeof LESSONS === "undefined") return;
  const current = location.pathname.split("/").pop();
  const list = visibleLessons();
  const i = list.findIndex(l => l.file === current);
  if (i === -1) return;
  const prev = list[i - 1];
  const next = list[i + 1];
  if (prev) {
    pager.insertAdjacentHTML("beforeend",
      `<a class="prev" href="${prev.file}"><small>← 上一篇</small>${prev.title}</a>`);
  }
  if (next) {
    pager.insertAdjacentHTML("beforeend",
      `<a class="next" href="${next.file}"><small>下一篇 →</small>${next.title}</a>`);
  }
})();
