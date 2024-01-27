const express = require("express");
const app = express();
const port = 3000; // You can change the port if needed

// Serve your static files from the 'public' directory
app.use(express.static("."));

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
