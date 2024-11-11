import { codeToHtml } from "https://esm.sh/shiki@1.22.2"

document.addEventListener("DOMContentLoaded", async () => {
  document.querySelectorAll(".code").forEach(async (codeBlock) => {
    const code = codeBlock.textContent;
    const html = await codeToHtml(code, {
      lang: "ts",
      theme: "catppuccin-latte",
      colorReplacements: {
        "#eff1f5": "#f1eff3"
      }
    });
    codeBlock.innerHTML = html;
  })
})