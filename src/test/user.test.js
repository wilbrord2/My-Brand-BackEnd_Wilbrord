import chai from "chai";
import chaiHttp from "chai-http";
import app from "../app";
import { jwt } from "jsonwebtoken";
chai.should();
chai.use(chaiHttp);
let id;

let token;

describe("Login", () => {
  it("should login and return a token", (done) => {
    chai
      .request(app)
      .post("/api/user/login/")
      .send({
        email: "bwilbrord@gmail.com",
        password: "123456",
      })
      .end((err, res) => {
        if (err) return done(err);

        res.should.have.status(200);
        res.body.should.be.an("object");
        token = res.body;
        done();
      });
  });
});

//create User test
describe("Create User", () => {
  it("should create User", (done) => {
    chai
      .request(app)
      .post("/api/user/createUser/")
      .send({
        name: "nameTest",
        email: "emailTest@gmail.com",
        password: "mypassword123",
        repassword: "mypassword123",
        date: `${Date.now}`,
      })
      .end((err, res) => {
        console.log(err);
        if (err) return done(err);
        console.log(res.body);
        id = res.body._id;
        //  res.should.have.statusCode(200);
        done();
      });
  });
});

describe("Get all Users", () => {
  it("It Should get all Users", (done) => {
    chai
      .request(app)
      .get("/api/user/getAllUsers/")
      .set("authtoken", `${token.data}`)
      .end((err, res) => {
        res.should.have.status(200);
        res.should.be.an("object");

        done();
      });
  });
});

describe("get single User by id", () => {
  it("It should get a single User by id", (done) => {
    chai
      .request(app)
      .get(`/api/user/getSingleUser/${id}`)
      .set("authtoken", `${token.data}`)
      .end((err, res) => {
        if (err) return done(err);
        console.log(`single user ${res.body}`);
        res.should.have.status(200);
        res.should.be.an("object");
        done();
      });
  });
});

describe("Delete single User by id", () => {
  it("It should delete a single User by id", (done) => {
    chai
      .request(app)
      .delete(`/api/user/deleteUser/${id}`)
      .set("authtoken", `${token.data}`)
      .end((err, res) => {
        if (err) return done(err);
        res.should.have.status(200);
        res.should.be.an("object");
        done();
      });
  });
});
