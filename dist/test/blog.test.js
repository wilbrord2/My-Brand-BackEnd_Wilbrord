"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _chai = _interopRequireDefault(require("chai"));
var _chaiHttp = _interopRequireDefault(require("chai-http"));
var _app = _interopRequireDefault(require("../app"));
_chai.default.should();
_chai.default.use(_chaiHttp.default);
let id;
//create article test
describe("Create article", () => {
  it("should create a contact article", done => {
    _chai.default.request(_app.default).post("/api/article/createArticle/").send({
      title: "testing",
      description: "testing articles",
      date: `${Date.now}`
    }).end((err, res) => {
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
  it("It Should get all articles", done => {
    _chai.default.request(_app.default).get("/api/article/getAllArticle/").end((err, res) => {
      res.should.have.status(200);
      // res.should.be.a("array");
      done();
    });
  });
});
describe("get single article by id", () => {
  it("It should get a single article by id", done => {
    _chai.default.request(_app.default).get(`/api/article/getSingleArticle/${id}`).end((err, res) => {
      if (err) return done(err);
      res.should.have.status(200);
      done();
    });
  });
});
describe("Delete single article by id", () => {
  it("It should delete a single article by id", done => {
    _chai.default.request(_app.default).delete(`/api/article/deleteArticle/${id}`).end((err, res) => {
      if (err) return done(err);
      res.should.have.status(200);
      done();
    });
  });
});
describe("Update single article by id", () => {
  it("It should delete a single article by id", done => {
    _chai.default.request(_app.default).patch(`/api/article/UpdateArticle/${id}`).end((err, res) => {
      if (err) return done(err);
      res.should.have.status(200);
      done();
    });
  });
});