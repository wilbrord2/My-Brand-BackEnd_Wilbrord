import chai from "chai";
import chaiHttp from "chai-http";
import { expect } from "chai";
import app from "../app";

chai.should();
chai.use(chaiHttp);

//create message test
describe("Contact Message", () => {
  it("should create a contact message", (done) => {
    chai
      .request(app)
      .post("/api/messages/save/")
      .send({
        name: "wilbrord",
        email: "wilbrord@gmail.com",
        subject: "testing",
        message: "hi and how are you? I am fine and you?",
        date: `${Date.now}`,
      })
      .end((err, res) => {
        console.log(err);
        if (err) return done(err);
        console.log(res.body);
        expect(res.statusCode).to.equal(201);
        res.body.should.have.property("status").eql(201);
        res.body.should.have.property("data");
        done();
      });
  });
});

describe("Get all messages", () => {
  it("It Should get all messages", (done) => {
    chai
      .request(app)
      .get("/api/messages/show/")
      .end((err, res) => {
        // res.should.have.status(200);
        // res.body.should.have.property("status");
        // res.body.should.have.property("data");

        done();
      });
  });
});

describe("get single message by id", () => {
  it("It should get a single message by id", (done) => {
    const id = "63cfe65adfd6095faaa39adb";
    chai
      .request(app)
      .get(`/api/messages/getOne/${id}`)
      //.set("auth_token", `${token}`)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.status).to.equal(200);
        expect(res.body).to.have.property("status");
        expect(res.body).to.have.property("data");
        done();
      });
  });
});
