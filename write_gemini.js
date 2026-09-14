const fs = require("fs");
const path = require("path");
const content = fs.readFileSync(path.join(__dirname, "gemini_content.txt"), "utf8");
fs.writeFileSync("d:/SIH - ArsAI/src/lib/gemini.ts", content, "utf8");
console.log("gemini.ts written OK - " + content.length + " bytes");
