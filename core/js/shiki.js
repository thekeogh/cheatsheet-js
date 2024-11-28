import { codeToHtml } from "https://esm.sh/shiki@1.22.2"

document.addEventListener("DOMContentLoaded", async () => {
  document.querySelectorAll(".code").forEach(async (codeBlock) => {
    const code = codeBlock.textContent;
    const html = await codeToHtml(code, {
      lang: "ts",
      theme: "catppuccin-latte",
      colorReplacements: {
        "#eff1f5": "#d4d4d4"
      }
    });
    codeBlock.innerHTML = html;
  })
})