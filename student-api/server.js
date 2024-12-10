import express, { json } from 'express';
import cors from 'cors';


const app = express();
const port = 5000;

app.use(cors());
app.use(json());

// Validator logic from A19-001 to A19-100 small students muna
const validStudentIDs = [];
for (let i = 1; i <= 100; i++) {
  validStudentIDs.push(`A19-${String(i).padStart(3, '0')}`);
}


app.get('/api/students', (req, res) => {
  res.json(validStudentIDs);
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
