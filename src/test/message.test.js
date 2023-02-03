import chai from "chai";
import chaiHttp from "chai-http";
import app from "../app";

chai.should();
chai.use(chaiHttp);
let id = 1;
//create message test
describe("Create Message", () => {
  it("should create a contact message", (done) => {
    chai
      .request(app)
      .post("/api/messages/save/")
      .send({
        _id: `${id}`,
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
        res.should.have.status(200);
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
        res.should.have.status(200);
        // res.should.be.a("array");
        done();
      });
  });
});

describe("get single message by id", () => {
  it("It should get a single message by id", (done) => {
    chai
      .request(app)
      .get(`/api/messages/getOne/${id}`)

      .end((err, res) => {
        if (err) return done(err);
        res.should.have.status(200);
        done();
      });
  });
});

describe("Delete single message by id", () => {
  it("It should delete a single message by id", (done) => {
    chai
      .request(app)
      .delete(`/api/messages/deleteOne/${id}`)

      .end((err, res) => {
        if (err) return done(err);
        // res.should.have.status(200);
        done();
      });
  });
});
