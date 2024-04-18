const app = require('./app');
const connectDB = require('./db/config');

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

// Connect to database
connectDB();

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
 
// Default route
app.get("/", (req, res) => {
    res.send("Working");
});
