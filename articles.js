import mysql from "mysql2/promise";

export default async function handler(req, res) {
  // الاتصال بقاعدة البيانات
  const connection = await mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
  });

  if (req.method === "GET") {
    // جلب المقالات
    const [rows] = await connection.execute("SELECT * FROM articles ORDER BY created_at DESC");
    res.status(200).json(rows);
  } 
  else if (req.method === "POST") {
    // إدخال مقال جديد
    const { title, image_url, content } = req.body;
    await connection.execute(
      "INSERT INTO articles (title, image_url, content, created_at) VALUES (?, ?, ?, NOW())",
      [title, image_url, content]
    );
    res.status(201).json({ message: "تم الحفظ بنجاح" });
  } 
  else {
    res.status(405).json({ error: "Method not allowed" });
  }

  await connection.end();
}
