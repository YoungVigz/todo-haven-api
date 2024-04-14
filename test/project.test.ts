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


describe("Tests that covers project endpoints", () => {

})