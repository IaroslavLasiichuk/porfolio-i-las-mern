const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors());

// Port
const PORT = process.env.PORT || 3005;

app.get('/api/customers',
    (req, res) => {
    const customers = [
        { id: 1, firstName: "Iarosav", lastName: "Lasiichuk" },
        { id: 2, firstName: "Theodore", lastName: "Lasiichuk" },
        { id: 3, firstName: "Olena", lastName: "Murchenko" },
    ];
    res.json(customers);
});
app.listen(PORT, () =>
    console.log(`Server is running at http://localhost:${PORT}`));