const fs = require("fs");
const path = require("path");

const doSanityChecks = require("./validate");
const buildPackage = require("./package");

// مسیر betterdiscord در کنار app.asar و modules قرار دارد
const bdPath = path.resolve(__dirname, "..", "..", "resources", "betterdiscord");
const release = "Parscord";

// مسیر core که به صورت unpack شده در Parscord هست
const discordPath = path.resolve(__dirname, "..", "..", "resources", "modules", "discord_desktop_core");

doSanityChecks(bdPath);
buildPackage(bdPath);
console.log("");

console.log(`Injecting into ${release}`);
if (!fs.existsSync(discordPath)) throw new Error(`Cannot find directory for ${release}`);
console.log(`    ✅ Found ${release} in ${discordPath}`);

// ما index.js رو دستی در نسخه unpack شده مدیریت کردیم
console.log("    ✅ Skipped modifying index.js (already handled in unpacked version)");
console.log("");
console.log(`Injection successful, please restart ${release}.`);
