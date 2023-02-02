import chai from "chai";
import chaiHttp from "chai-http";
import app from "../app";

chai.should();
chai.use(chaiHttp);
let id = 1;
//create article test
describe("Create article", () => {
  it("should create a contact article", (done) => {
    chai
      .request(app)
      .post("/api/article/createArticle/")
      .send({
        _id: `${id}`,
        title: "testing",
        description: "testing articles",
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

describe("Get all articles", () => {
  it("It Should get all articles", (done) => {
    chai
      .request(app)
      .get("/api/article/getAllArticle/")
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

      .end((err, res) => {
        if (err) return done(err);
        res.should.have.status(200);
        done();
      });
  });
});


describe("Update single article by id", () => {
    it("It should delete a single article by id", (done) => {
      chai
        .request(app)
        .patch(`/api/article/UpdateArticle/${id}`)
  
        .end((err, res) => {
          if (err) return done(err);
          res.should.have.status(200);
          done();
        });
    });
  });