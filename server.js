const http = require("node:http");
const { readFile } = require("node:fs/promises");

async function server() {
  try {
    const server = http.createServer(async (req, res) => {
      if (req.url === "/index.html" || req.url === "/") {
        res.writeHead(200, { "Content-Type": "text/html" });
        const filePath = "./index.html";
        const contents = await readFile(filePath, { encoding: "utf8" });
        res.end(contents);
      } else if (req.url === "/style.css") {
        res.writeHead(200, { "Content-Type": "text/css" });
        const filePath = "./style.css";
        const contents = await readFile(filePath, { encoding: "utf8" });
        res.end(contents);
      } else if (req.url === "/keyboard.js") {
        res.writeHead(200, { "Content-Type": "application/javascript" });
        const filePath = "./keyboard.js";
        const contents = await readFile(filePath, { encoding: "utf8" });
        res.end(contents);
      } else if (req.url === "/exercises.js") {
        res.writeHead(200, { "Content-Type": "application/javascript" });
        const filePath = "./exercises.js";
        const contents = await readFile(filePath, { encoding: "utf8" });
        res.end(contents);
      } else if (req.url === "/i18n.js") {
        res.writeHead(200, { "Content-Type": "application/javascript" });
        const filePath = "./i18n.js";
        const contents = await readFile(filePath, { encoding: "utf8" });
        res.end(contents);
      } else if (req.url === "/ui.js") {
        res.writeHead(200, { "Content-Type": "application/javascript" });
        const filePath = "./ui.js";
        const contents = await readFile(filePath, { encoding: "utf8" });
        res.end(contents);
      } else if (req.url === "/statistics.js") {
        res.writeHead(200, { "Content-Type": "application/javascript" });
        const filePath = "./statistics.js";
        const contents = await readFile(filePath, { encoding: "utf8" });
        res.end(contents);
      } else if (req.url === "/canvas.js") {
        res.writeHead(200, { "Content-Type": "application/javascript" });
        const filePath = "./canvas.js";
        const contents = await readFile(filePath, { encoding: "utf8" });
        res.end(contents);
      } else if (req.url === "/helpers.js") {
        res.writeHead(200, { "Content-Type": "application/javascript" });
        const filePath = "./helpers.js";
        const contents = await readFile(filePath, { encoding: "utf8" });
        res.end(contents);
      } else if (req.url === "/main.js") {
        res.writeHead(200, { "Content-Type": "application/javascript" });
        const filePath = "./main.js";
        const contents = await readFile(filePath, { encoding: "utf8" });
        res.end(contents);
      } else if (req.url === "/test.js") {
        res.writeHead(200, { "Content-Type": "application/javascript" });
        const filePath = "./test.js";
        const contents = await readFile(filePath, { encoding: "utf8" });
        res.end(contents);
      } else if (req.url === "/favicon.ico") {
        res.writeHead(200, { "Content-Type": "image/x-icon" });
        const filePath = "./favicon.ico";
        const contents = await readFile(filePath);
        res.end(contents);
      } else {
        res.writeHead(200, { "Content-Type": "text/html" });
        const filePath = "./404.html";
        const contents = await readFile(filePath, { encoding: "utf8" });
        res.end(contents);
      }
    });
    server.listen(8000);
  } catch (err) {
    console.error(err.message);
  }
}
server();
