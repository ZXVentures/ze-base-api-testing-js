const { doPost, doPostWithAutorization } = require("../service/requestService");
const chai = require("chai");
const expect = chai.expect;
const mutations = require("../mutations/deliveryMan");
const mutationsVariables = require("../variables/mutationsVariables");
const queries = require("../queries/deliveryMan");
const utils = require("../utils/deliveryManCredentials");
require("dotenv").config();

describe("Onboarding", function () {
  //this.timeout(10000);

  it("Should create new delivery man", async function () {
    newUserData = await mutationsVariables.getNewUserDate();
    const createDeliveryMan = {
      query: mutations.createDeliveryMan,
      variables: {
        input: {
          email: newUserData.email,
          name: newUserData.name,
          document: newUserData.document,
          phone: newUserData.phone,
          workCity: newUserData.workCity,
          workState: newUserData.workState,
          password: newUserData.password,
        },
      },
    };
    const result = await doPost(createDeliveryMan);
    console.log(result.body);
    expect(result.status).to.be.equal(200);
    expect(result.body.data.createDeliverymanFullService.deliveryman).to.be.an(
      "object"
    );
    expect(result.body.data.createDeliverymanFullService.messages).to.be.an(
      "array"
    );
  });
});
