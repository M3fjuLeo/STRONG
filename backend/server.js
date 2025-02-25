import express from "express";
import mysql from "mysql2";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const port = process.env.PORT || 5001;

// Middleware do obsługi CORS
app.use(cors());

// Połączenie z bazą danych MySQL
const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

// Nawiązanie połączenia z bazą danych
db.connect((err) => {
  if (err) {
    console.error("Błąd połączenia z bazą danych:", err);
  } else {
    console.log("Połączono z bazą danych MySQL");
  }
});

// Przykładowy endpoint API
app.get("/api/data", (req, res) => {
  const query = "SELECT * FROM muscles"; // przykładowe zapytanie SQL
  db.query(query, (err, results) => {
    if (err) {
      console.error("Błąd zapytania SQL:", err);
      return res.status(500).json({ error: err.message });
    }
    res.json(results);
  });
});

// Uruchom serwer
app.listen(port, () => {
  console.log(`Serwer działa na http://localhost:${port}`);
});
