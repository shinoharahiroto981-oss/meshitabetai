import express from "express";
import cors from "cors";
import fs from "fs";
import path from "path";
import { parse } from "csv-parse/sync";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

app.use(cors());

const CSV_PATH = path.join(__dirname, "restaurant.csv");

function loadRestaurants() {
  const csv = fs.readFileSync(CSV_PATH, "utf-8");

  return parse(csv, {
    columns: true,
    skip_empty_lines: true,
  });
}

app.get("/api/search", (req, res) => {
  const q = req.query.q || "";
  const mode = req.query.mode || "match";

  const words = q
    .split(/\s+/)
    .map(word => word.trim())
    .filter(Boolean);

  const data = loadRestaurants();

  const result = data.filter(row => {
  const keywordText = Object.keys(row)
    .filter(key => key.startsWith("キーワード"))
    .map(key => row[key])
    .join(" ");

  if (mode === "match") {
    return words.every(word => keywordText.includes(word));
  }

  if (mode === "unmatch") {
    return words.every(word => !keywordText.includes(word));
  }

  return false;
});

const displayResult = result.map(row => {
  const nameKey = Object.keys(row).find(key => key.includes("店名"));

  return {
    店名: row[nameKey],
    住所: row["住所"],
    営業時間: row["営業時間"],
    定休日: row["定休日"]
  };
});

  res.json(displayResult);
});

app.listen(3000, () => {
  console.log("API server running on port 3000");
});