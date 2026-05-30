const dotenv = require("dotenv")
dotenv.config();

const app = require("./src/app");
const connectDB = require("./src/config/db");
const jwt = require("jsonwebtoken");

const token = jwt.sign(
  {
    id: "12345",
    email: "test@gmail.com",
  },
  process.env.JWT_SECRET,
  {
    expiresIn: "1d",
  }
);

console.log(token);

connectDB();

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is connected on port http://localhost:${PORT}`);
})