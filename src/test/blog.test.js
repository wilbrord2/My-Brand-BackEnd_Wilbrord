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

//create article test
describe("Create article", () => {
  it("should create a contact article", (done) => {
    chai
      .request(app)
      .post("/api/article/createArticle/")
      .set("authtoken", `${token.data}`)
      .send({
        title: "testing",
        description: "testing articles",
        date: `${Date.now}`,
      })
      .end((err, res) => {
        console.log(err);
        if (err) return done(err);

        console.log(res.body);
        id = res.body._id;
        res.should.have.status(200);
        done();
      });
  });
});

describe("Get all articles", () => {
  it("It Should get all articles", (done) => {
    chai
      .request(app)
      .get("/api/article/getAllArticle/")
      .set("authtoken", `${token.data}`)
      .end((err, res) => {
        res.should.have.status(200);
        // res.should.be.a("array");
        done();
      });
  });
});

describe("get single article by id", () => {
  it("It should get a single article by id", (done) => {
    chai
      .request(app)
      .get(`/api/article/getSingleArticle/${id}`)
      .set("authtoken", `${token.data}`)
      .end((err, res) => {
        if (err) return done(err);
        res.should.have.status(200);
        done();
      });
  });
});

describe("Delete single article by id", () => {
  it("It should delete a single article by id", (done) => {
    chai
      .request(app)
      .delete(`/api/article/deleteArticle/${id}`)
      .set("authtoken", `${token.data}`)
      .end((err, res) => {
        if (err) return done(err);
        res.should.have.status(200);
        done();
      });
  });
});

describe("Update single article by id", () => {
  it("It should update a single article by id", (done) => {
    chai
      .request(app)
      .patch(`/api/article/UpdateArticle/${id}`)
      .set("authtoken", `${token.data}`)
      .send({
        title: "updated successfull",
        description: "newupdate",
      })
      .end((err, res) => {
        if (err) return done(err);
        res.should.have.status(200);
        done();
      });
  });
});
