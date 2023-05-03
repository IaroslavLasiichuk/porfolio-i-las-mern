const express = require('express');
const app = express();

const PORT = process.env.PORT || 3005;

app.get('/', (req, res) =>
res.json('Hello from server'))

app.listen(PORT, () =>
    console.log(`Server is running at http://localhost:${PORT}`));