const { doPost, doPostWithAutorization } = require("../service/requestService");
const chai = require("chai");
const expect = chai.expect;
const mutations = require("../mutations/deliveryMan");
const mutationsVariables = require("../variables/mutationsVariables");
const queries = require("../queries/deliveryMan");
const utils = require("../utils/deliveryManCredentials");
require("dotenv").config();

describe("Login", function () {
  it("Should login with delivery man", async function () {
    newUserData = await mutationsVariables.getNewUserDate();

    loginConsts = await utils.createNewDeliveryMan(
      mutations.createDeliveryMan,
      newUserData
    );
    const login = {
      query: mutations.login,
      variables: {
        email:
          loginConsts[0].data.createDeliverymanFullService.deliveryman.email,
        password: loginConsts[1],
      },
    };

    const result = await doPost(
      login
    );

    expect(result.status).to.be.equal(200);
    console.log(result.body);
    expect(result.body.data.login.token).to.be.a("string");
    expect(result.body.data.login.refreshToken).to.be.a("string");
    expect(result.body.data.login.user).to.be.an("object");
    expect(result.body.data.login.messages).to.be.an("array");
  });

  it("Should check if error is returned after login with invalid password", async function () {
    let login = {
      query: mutations.login,
      variables: {
        email: mutationsVariables.login.email,
        password: "erro123",
      },
    };

    const result = await doPost(
      login
    );
    expect(result.status).to.be.equal(200);
    expect(result.body.data.login.token).to.be.null;
    expect(result.body.data.login.refreshToken).to.be.null;
    expect(result.body.data.login.user).to.be.null;
    expect(result.body.data.login.messages).to.be.an("array");
    expect(result.body.data.login.messages[0].message).to.be.equal(
      "Opa, o e-mail/cpf ou senha estão incorretos"
    );
  });

});
