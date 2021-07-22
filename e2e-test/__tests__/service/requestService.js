let chai = require("chai"),
  chaiHttp = require("chai-http");
chai.use(chaiHttp);

module.exports = {
  doPost: async function (body) {
    return await chai
      .request("https://dev.zx-courier.com/deliveryman/")
      .post("/graphql")
      .set("Content-Type", "application/json")
      .send(body);
  },

  doPostWithAutorization: async function (body, key) {
    return await chai
      .request("https://dev.zx-courier.com/deliveryman/")
      .post("/graphql")
      .set("Authorization", key)
      .set("Content-Type", "application/json")
      .send(body);
  },
};
