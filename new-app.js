#!/usr/bin/env node

const { execSync } = require("child_process");
const fs = require("fs");
const path = require("path");

const appName = process.argv[2];

if (!appName) {
  console.error(
    "Please provide a project name: `node new-app.js <project-name>`"
  );
  process.exit(1);
}

// Step 1: Create Vite React App
console.log("Creating Vite React app...");
execSync(`npm create vite@latest ${appName} -- --template react`, {
  stdio: "inherit",
});

// Step 2: Navigate to the project directory
const projectPath = path.join(process.cwd(), appName);
process.chdir(projectPath);

// Step 3: Install dependencies
console.log("Installing dependencies...");
execSync("npm install", { stdio: "inherit" });

// Step 4: Remove unwanted files
console.log("Cleaning up default files...");
const filesToRemove = ["src/App.css"];
filesToRemove.forEach((file) => {
  const filePath = path.join(projectPath, file);
  if (fs.existsSync(filePath)) {
    fs.unlinkSync(filePath);
    console.log(`Deleted: ${file}`);
  }
});

// Step 5: Clear default content in App.jsx
const appJsxPath = path.join(projectPath, "src/App.jsx");
fs.writeFileSync(
  appJsxPath,
  `export default function App() {\n  return <div>Start building your app!</div>;\n}\n`
);
console.log("Updated: src/App.jsx");

// Step 6: Clear default content in "src/index.css"
const indexCSS = path.join(projectPath, "src/index.css");
fs.writeFileSync(
  indexCSS,
  `@import url('https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&family=Montserrat:ital,wght@0,100..900;1,100..900&family=Nunito:ital,wght@0,200..1000;1,200..1000&family=Poppins&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap'); *{margin: 0; padding: 0; box-sizing: border-box;} html{  font-family: "Lato", serif;
  font-weight: 400;
  font-style: normal;}`
);
console.log("Updated: src/index.css");

// Step 7: Open the project in VS Code
console.log("Opening project in VS Code...");
execSync("code .", { stdio: "inherit" });

console.log("All done! 🚀 Happy coding!");
