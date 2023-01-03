const dotenv = require("dotenv");
dotenv.config();
const express = require("express");
const cors = require("cors");
const app = express();
const port = 8080;
require("./DB")
app.use(express.json({ extened: true }));
app.use(express.urlencoded({ extended: true }));
app.use(cors());

const usersRouter=require("./routes/usersRoute")
const departmentsRouter=require("./routes/departmentsRoute")
const reviewsRouter=require("./routes/reviewsRoute")
const ordersRouter=require("./routes/ordersRoute")
const lawyersRouter=require("./routes/lawyersRoute")

app.use("/users",usersRouter)
app.use("/departments",departmentsRouter)
app.use("/reviews",reviewsRouter)
app.use("/orders",ordersRouter)
app.use("/lawyers",lawyersRouter)


app.get("/", (req, res) => {
    res.send({ message: "ayo whatsup" });
})

app.listen(port, () => {
    console.log(`server is up at port : ${port}`);
})