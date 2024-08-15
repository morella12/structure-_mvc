import express from 'express';

const app = express();
const PORT = process.env.PORT || 3000;

app.post('/login', (req, res) => {
  
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
