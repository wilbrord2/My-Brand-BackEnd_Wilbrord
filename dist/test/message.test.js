"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _chai = _interopRequireDefault(require("chai"));
var _chaiHttp = _interopRequireDefault(require("chai-http"));
var _app = _interopRequireDefault(require("../app"));
_chai.default.should();
_chai.default.use(_chaiHttp.default);
let id;
//create message test
describe("Create Message", () => {
  it("should create a contact message", done => {
    _chai.default.request(_app.default).post("/api/messages/save/").send({
      name: "wilbrord",
      email: "wilbrord@gmail.com",
      subject: "testing",
      message: "hi and how are you? I am fine and you?",
      date: `${Date.now}`
    }).end((err, res) => {
      console.log(err);
      if (err) return done(err);
      id = res.body._id;
      console.log(res.body);
      res.should.have.status(200);
      done();
    });
  });
});
describe("Get all messages", () => {
  it("It Should get all messages", done => {
    _chai.default.request(_app.default).get("/api/messages/show/").end((err, res) => {
      res.should.have.status(200);
      // res.should.be.a("array");
      done();
    });
  });
});
describe("get single message by id", () => {
  it("It should get a single message by id", done => {
    _chai.default.request(_app.default).get(`/api/messages/getOne/${id}`).end((err, res) => {
      if (err) return done(err);
      res.should.have.status(200);
      done();
    });
  });
});
describe("Delete single message by id", () => {
  it("It should delete a single message by id", done => {
    _chai.default.request(_app.default).delete(`/api/messages/deleteOne/${id}`).end((err, res) => {
      if (err) return done(err);
      // res.should.have.status(200);
      done();
    });
  });
});