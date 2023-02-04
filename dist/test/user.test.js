"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _chai = _interopRequireDefault(require("chai"));
var _chaiHttp = _interopRequireDefault(require("chai-http"));
var _app = _interopRequireDefault(require("../app"));
_chai.default.should();
_chai.default.use(_chaiHttp.default);
let id;
//create User test
describe("Create User", () => {
  it("should create User", done => {
    _chai.default.request(_app.default).post("/api/user/createUser/").send({
      name: "nameTest",
      email: "emailTest@gmail.com",
      password: "mypassword123",
      repassword: "mypassword123",
      date: `${Date.now}`
    }).end((err, res) => {
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
  it("It Should get all Users", done => {
    _chai.default.request(_app.default).get("/api/user/getAllUsers/").end((err, res) => {
      res.should.have.status(200);
      // res.should.be.a("array");
      done();
    });
  });
});
describe("get single User by id", () => {
  it("It should get a single User by id", done => {
    _chai.default.request(_app.default).get(`/api/user/getSingleUser/${id}`).end((err, res) => {
      if (err) return done(err);
      console.log(`single user ${res.body}`);
      res.should.have.status(200);
      done();
    });
  });
});
describe("Delete single User by id", () => {
  it("It should delete a single User by id", done => {
    _chai.default.request(_app.default).delete(`/api/user/deleteUser/${id}`).end((err, res) => {
      if (err) return done(err);
      res.should.have.status(200);
      done();
    });
  });
});