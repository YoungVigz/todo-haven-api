import supertest from 'supertest'
import app from '../src/app'
import { connectToDatabase, closeDatabaseConnection } from '../src/services/database.service'

const request = supertest(app)

beforeAll(() => {
    connectToDatabase()
});

afterAll(() => {
    closeDatabaseConnection()
})

describe("Tests that covers users endpoints", () => {
    describe("POST /user/register", () => {
        const data = {
            email: "test@test.com",
            login: "test",
            password: "test"
        }

        it('By passing valid data it should create new user in database and return 201 with JWT token', async () => {
            const res = await request.post("/user/register").send(data)

            expect(res.status).toBe(201)
            expect(res.body.token).toBeDefined()
        })

        it('By not passing email login or password it should return 400 without JWT token', async () => {
            const res = await request.post("/user/register")

            expect(res.status).toBe(400)
            expect(res.body.token).toBeUndefined()
        })

        it('Creating user using not unique creds should return 401 without JWT token', async () => {
            const res = await request.post("/user/register").send(data)

            expect(res.status).toBe(401)
            expect(res.body.token).toBeUndefined()
        })

    })

    describe("POST /user/login", () => {
        it("By providing valid email and password should return 201 with JWT token", async () => {
            const res = await request.post("/user/login").send({
                email: "test@test.com",
                password: "test"
            })

            expect(res.status).toBe(201)
            expect(res.body.token).toBeDefined()
        })

        it("By not providing any email or password should return 400 without JWT token", async () => {
            const res = await request.post("/user/login")

            expect(res.status).toBe(400)
            expect(res.body.token).toBeUndefined()
        })
    })

    describe("PUT /user/update", () => {
        
    })
})