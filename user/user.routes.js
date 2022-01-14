import express from 'express'

const userRouter = express.Router()

const users = [
  { _id: "u1", name: "Nikolas" },
  { _id: "u2", name: "Paula" },
  { _id: "u3", name: "René" },
  { _id: "u4", name: "Peter" },
  { _id: "u5", name: "Rob" }
]

userRouter.get("/", (req, res) => {
  res.json( users )
})

userRouter.post("/", (req, res) => {

  if(!req.body.name) {
    return res.status(400).json({ error: "Please provide name"})
  }

  const userNew = { ...req.body, _id: Date.now().toString() }
  users.push( userNew )
  res.json( userNew )
})


export default userRouter