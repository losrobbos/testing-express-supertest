import express from 'express';
import userRouter from './user/user.routes.js'
const app = express();


app.use(express.json()) // allow sending us body data

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.use("/users", userRouter)


export default app