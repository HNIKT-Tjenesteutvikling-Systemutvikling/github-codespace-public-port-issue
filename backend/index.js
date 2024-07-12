import express from "express";
import cors from "cors";

const app = express();
const port = 3000;

app.use(express.json()); // Middleware to parse JSON bodies
app.use(cors()); // Middleware to enable CORS

let items = [
    {
        id: 1,
        name: "item1",
    },
    {
        id: 2,
        name: "item2",
    },
];

// Route to get all items
app.get('/items', (req, res) => {
    res.json(items);
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
