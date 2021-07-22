const { doPostWithAutorization } = require("../service/requestService");
const chai = require("chai");
const expect = chai.expect;
const mutations = require("../mutations/deliveryMan");
const mutationsVariables = require("../variables/mutationsVariables");
const utils = require("../utils/deliveryManCredentials");
require("dotenv").config();

describe("sendPhoneVerificationCode", function () {
  
    it("sendPhoneVerificationCode", async function () {
      token = await utils.getAccessToken(
        mutations.login,
        mutationsVariables.login
      );

      let sendPhoneVerificationCode = {
        query: mutations.sendPhoneVerificationCode,
        variables: {
          email: mutationsVariables.sendPhoneVerificationCode.phone,
        },
      };
      const result = await doPostWithAutorization(
        sendPhoneVerificationCode,
        token
      );
      console.log(result.body);
      expect(result.status).to.be.equal(200);
      expect(result.body.data.sendPhoneVerificationCode.message);
      
    });

    it("Should validation sms code with token invalid --> 401", async function () {

      let sendPhoneVerificationCode = {
        query: mutations.sendPhoneVerificationCode,
        variables: {
          email: mutationsVariables.sendPhoneVerificationCode.phone,
        },
      };
      const result = await doPostWithAutorization(
        sendPhoneVerificationCode,
        "UHFAHUAFSHAFSJAISFJJFSA53435434354"
      );
      console.log(result.body);
      expect(result.status).to.be.equal(401);
      expect(result.body.errors[0].message).to.be.contains("Token do usuário não é válido");
      
    });

});