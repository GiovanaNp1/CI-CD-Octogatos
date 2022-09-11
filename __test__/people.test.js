var express = require("express");
var app = express();
const request = require("supertest");
const peopleController = require("../controller/peopleController");
const routes = require("../routes");
const mongoose = require('mongoose');
const { mockPostPeople, mockPostPeopleErro } = require("../mock/mock.people");

app.use(express.json());
app.use(routes)

describe("Get /people ", () => {
    beforeAll(async() => {
        const mongo = process.env.MONGO
        await mongoose.connect(mongo, {
            useNewUrlParser: true,
            useUnifiedTopology:  true
        });
    })
    test ("Get people List", async () => {
    return await request(app).get("/people", peopleController.show) 
        .then((res) => {
            expect(res.status).toBe(200);
            expect(res.body.length).toBeGreaterThan(0);
        });
    });
});

describe("POST /people ", () => {
    beforeAll(async() => {
        const mongo = 'mongodb+srv://TDD:bananinha@cluster0.ttli4.mongodb.net/?retryWrites=true&w=majority';
        await mongoose.connect(mongo, {
            useNewUrlParser: true,
            useUnifiedTopology:  true
        });
    })
    test ("POST people", async () => {
    return await request(app).post("/people", peopleController.create) 
    .send(mockPostPeople)
        .then((res) => {
            expect(res.status).toBe(200);
            expect(res.body).toBeDefined();
        });
    });
    test ("POST people - With Error", async () => {
        return await request(app).post("/people", peopleController.create) 
        .send(mockPostPeopleErro)
            .then((res) => {
                expect(res.status).toBe(500);
                expect(res.body.msg).toBe('Deu ruim')
            });
    });
});
