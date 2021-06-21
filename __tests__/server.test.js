const request = require("supertest");
const server = require("../core/server");
const express = require('express')

describe("Server base function", () => {
    let app, mockRequest;

    beforeEach(async () => {
        app = express()
        await server.initServer(app)

        mockRequest = request(app)
    })

    test("initServer() is a function", () => {
        expect(server.initServer)
        expect(typeof server.initServer).toBe("function")
    })

    test("It should response the GET method", async () => {
        const response = await mockRequest.get("/")
        
        expect(response.statusCode).toBe(200)
        expect(response.body.message).toBe("Hello world! Welcome to Delium backend!")
    })
});