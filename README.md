# JavaScript Essentials: A4 Printable Cheatsheet

This sheet covers essential array and Math methods, ideal for quick reference. Designed with flexibility in mind, it supports three print sizes—large, medium, and small—so you can choose the best fit for your workspace, whether it’s up close or viewed from a distance. Perfect for JavaScript and TypeScript developers looking for a handy, on-the-wall resource.

## Quick Setup for Local Hosting on macOS
For optimal performance, it's recommended to serve this cheatsheet under an HTTP server like nginx. If you're on macOS, you can easily start a basic HTTP server using Python, which is pre-installed. Below are example aliases to add to your `.bashrc` or `.zshrc` for quickly starting and stopping a simple server to host the cheatsheet.

```shell
alias httpstart="nohup python3 -m http.server 8001 --directory /path/to/cheatsheet > /dev/null 2>&1 &"
alias httpstop="lsof -t -i:8001 | xargs kill -9"
```