const { doPost, doPostWithAutorization } = require("../service/requestService");
const chai = require("chai");
const expect = chai.expect;
const mutations = require("../mutations/deliveryMan");
const mutationsVariables = require("../variables/mutationsVariables");
const queries = require("../queries/deliveryMan");
const utils = require("../utils/deliveryManCredentials");
require("dotenv").config();

describe("Me", function () {
  it("Should check if user is returned with me query correctly", async function () {
    token = await utils.getAccessToken(
      mutations.login,
      mutationsVariables.login
    );

    let me = {
      query: queries.me,
    };
    const result = await doPostWithAutorization(me, token);

    console.log(result.body);

    expect(result.body.data.me.deliveryman.email).to.equal(
      mutationsVariables.login.email
    );
    expect(result.body.data.me.deliveryman.id).to.be.a("string");
    expect(result.body.data.me.deliveryman.firstName).to.be.a("string");
    expect(result.body.data.me.deliveryman.lastName).to.be.a("string");
    expect(result.body.data.me.deliveryman.phoneNumber).to.be.a("string");
    expect(result.body.data.me.deliveryman.createdDate).to.be.a("string");
    // expect(result.body.data.me.deliveryman.acceptedTermsAt).to.be.a("string");
  });

  it("Should check if error is returned with /me query with invalid accessKey", async function () {
    let me = {
      query: queries.me,
    };
    const result = await doPostWithAutorization(
      me,
      "lasdjoaiaishfalhfoidhflakhdflidhsfliahdfliahflkadh"
    );

    expect(result.body.errors[0].target).to.be.equal("accessToken");
    expect(result.body.errors[0].key).to.be.equal("invalid_token");
    expect(result.body.errors[0].message).to.be.equal(
      "Token do usuário não é válido"
    );
  });
});
