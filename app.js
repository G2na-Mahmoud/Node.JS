const express = require('express');  // استدعاء مكتبة express
const app = express();               // إنشاء تطبيق express
const port = 7356;                   // رقم البورت

// تعريف مسار رئيسي
app.get('/', (req, res) => {
  res.sendFile("views/Home.html", { root: __dirname });
});

// تشغيل السيرفر
app.listen(port, () => {
  console.log(`http://localhost:${port}/`);
});