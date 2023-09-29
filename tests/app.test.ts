import supertest from "supertest";
import { app } from "../src";
import { randomFruit, randomFruitWithId, randomFruits, randomFruitsWithId, randomFruitsWithIdA} from "./factories/fruits.factory";

const server = supertest(app);

describe("GET all /fruits tests", () => {
    it("deve dar 200", async () => {
        const {status} = await server.get("/fruits");
        expect(status).toBe(200);
    })
    it("deve dar 200", async () => {
        const {status} = await server.get("/fruits/1");
        expect(status).toBe(200);
    })
    it("deve dar 404", async () => {
        const fruit = await randomFruitsWithId();
        const {status} = await server.get(`/fruits/99999}`);
        expect(status).toBe(404);
    })
    it("deve dar 409", async () => {
        const fruit = await randomFruitsWithId();
        const {status} = await server.get(`/fruits/sapo`);
        expect(status).toBe(400);
    })
})



describe("create /fruits tests", () => {
    it("deve criar fruit", async () => {
        const fruit = await randomFruit();
        const { status, body } = await server.post(`/fruits`).send(fruit);
        expect(status).toBe(201);

    })
    it("deve criar fruit igual", async () => {
        const fruit = await randomFruit();
        const { status, body } = await server.post(`/fruits`).send(fruit);
        expect(status).toBe(409);

    })
    it("deve criar fruit invalida", async () => {
        const fruit = await randomFruitWithId();
        const { status, body } = await server.post(`/fruits`).send(fruit);
        expect(status).toBe(422);

    })
})