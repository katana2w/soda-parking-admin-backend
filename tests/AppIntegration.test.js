const app = require('../app');
const request = require('supertest');

describe('App Test', () => {
    let server;

    beforeAll(async () => {
        server = app.listen(3001);
    });

    afterAll(async () => {
        server.close();
        // await mongoose.connection.close();
    });

    it("has a module", () => {
        expect(app).toBeDefined();
    });

    describe("user routes test", () => {
        it("API - can authenticate user - without data - POST /api/users/authenticate", async () => {
            const { body } = await request(server).post("/api/users/authenticate");
            expect(body).toBeDefined();
            expect(body.message).toBeDefined();
            expect(body.message).toBe('Email and password is required fields');
        });
    });

    describe("line routes test ", () => {
        it("API - get all lines - GET /api/all-lines", async () => {
            const { status } = await request(server).get("/api/all-lines");
            expect(status).toBeDefined();
            expect(status).toBe(200);
        });

        it("API - save line - POST /api/save-line", async () => {
            const {body} = await request(server).post("/api/save-line");
            expect(body).toBeDefined();
            expect(body.status).toBeDefined();
            expect(body.status).toBe('Error');
        });

        it("API - update line - PUT /api/update-line", async () => {
            const {body} = await request(server).put("/api/update-line");
            expect(body).toBeDefined();
            expect(body.status).toBeDefined();
            expect(body.status).toBe('Error');
        });

        it("API - remove line - POST /api/remove-line", async () => {
            const {body} = await request(server).post("/api/remove-line");
            expect(body).toBeDefined();
            expect(body.status).toBeDefined();
            expect(body.status).toBe('Error');
        });

        it("API - get all scanners - POST /api/all-scanners", async () => {
            const {body} = await request(server).get("/api/all-scanners");
            expect(body).toBeDefined();
            expect(body.status).toBeDefined();
            expect(body.status).toBe('Ok');
        });
    });

    describe("rule routes test ", () => {
        it("API - get all rules - GET /api/all-rules", async () => {
            const { status } = await request(server).get("/api/all-rules");
            expect(status).toBeDefined();
            expect(status).toBe(200);
        });

        it("API - save rule - POST /api/save-rule", async () => {
            const {body} = await request(server).post("/api/save-rule");
            expect(body).toBeDefined();
            expect(body.status).toBeDefined();
            expect(body.status).toBe('Error');
        });

        it("API - update rule - PUT /api/update-rule", async () => {
            const {body} = await request(server).put("/api/update-rule");
            expect(body).toBeDefined();
            expect(body.status).toBeDefined();
            expect(body.status).toBe('Error');
        });

        it("API - remove rule - POST /api/remove-rule", async () => {
            const {body} = await request(server).post("/api/remove-rule");
            expect(body).toBeDefined();
            expect(body.status).toBeDefined();
            expect(body.status).toBe('Error');
        });
    });
});
