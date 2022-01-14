import app from './app.js'
import supertest from 'supertest'

const postman = supertest(app)

test("gettings users", async () => {

  const response = await postman.get("/users")

  expect(response.status).toBe(200)
  expect(response.body).toBeDefined()
  expect(Array.isArray( response.body) ).toBe(true)
  expect(response.body.length).toBeDefined()
  expect(response.body.length).toBeGreaterThanOrEqual(1)
})

test("creation of invalid user to get rejected", async () => {

  const userData = { usernam: "Rob" }

  const response = await postman.post("/users")
    .send(userData);

  expect(response.status).toBe(400)

})
