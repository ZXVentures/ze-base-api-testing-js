const { doPost, doPostWithAutorization } = require("../service/requestService");
const chai = require("chai");
const expect = chai.expect;
const mutations = require("../mutations/deliveryMan");
const mutationsVariables = require("../variables/mutationsVariables");
const queries = require("../queries/deliveryMan");
const utils = require("../utils/deliveryManCredentials");
require("dotenv").config();

describe("changePassword", function () {

  it("changePassword", async function () {
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

    token = loginConsts[0].data.createDeliverymanFullService.token;
    let changePassword = {
      query: mutations.changePassword,
      variables: {
        currentPassword: loginConsts[1],
        newPassword: mutationsVariables.changePassword.newPassword,
      },
    };
    
    const result2 = await doPostWithAutorization(changePassword, token);
    console.log(result2.body);
    expect(result2.status).to.be.equal(200);
    expect(result2.body.data.changePassword.ok).to.be.a.true;
  });
});
