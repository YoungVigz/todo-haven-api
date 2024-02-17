import request from 'supertest'
import makeApp from '../src/app'

const app = makeApp()

describe("Tests that covers users endpoints", () => {
    describe("POST /user/register", () => {
        test("By passing valid login, email and password should return status 201", async () => {
            await request(await app)
            .post("/user/register")
            .then(data => expect(data.status).toBe(201))
            .catch(e => e)
        })
    })

    describe("POST /user/login", () => {
        
    })

    describe("PUT /user/update", () => {
        
    })
})