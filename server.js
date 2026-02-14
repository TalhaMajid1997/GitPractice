const express = require("express");
const app = express();

const noteRoutes = require("./routes/noteRoutes");

app.use(express.json());

// Routes
app.use("/api/notes", noteRoutes);

// Root route

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
