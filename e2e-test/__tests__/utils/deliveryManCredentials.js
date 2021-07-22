const { doPost } = require("../service/requestService");

module.exports = {
  getAccessToken: async function (mutation, variablesObject) {
    try {
      let login = {
        query: mutation,
        variables: {
          email: variablesObject.email,
          password: variablesObject.password,
        },
      };
      const result = await doPost(
        login
      );
      return result.body.data.login.token;
    } catch (e) {
      console.log(e);
    }
  },
  createNewDeliveryMan: async function (mutation, variablesObject) {
    try {
      const createDeliveryMan = {
        query: mutation,
        variables: {
          input: {
            email: variablesObject.email,
            name: variablesObject.name,
            document: variablesObject.document,
            phone: variablesObject.phone,
            workCity: variablesObject.workCity,
            workState: variablesObject.workState,
            password: variablesObject.password,
          },
        },
      };
      const result = await doPost(
        createDeliveryMan
      );
      return [result.body, variablesObject.password];
    } catch (e) {
      console.log(e);
    }
  },
  sendPhoneVerificationCode: async function (mutation, variablesObject) {
    try {
      const sendPhoneVerificationCode = {
        query: mutation,
        variables: {
          input: {
            phone: variablesObject.phone
          },
        },
      };
      const result = await doPost(
        // process.env.ENDPOINT_LIGEIRO,
        // process.env.PATH_LIGEIRO,
        sendPhoneVerificationCode
      );
      return [result.body, variablesObject.password];
    } catch (e) {
      console.log(e);
    }
  },
  changePassword: async function (mutation, variablesObject) {
    try {
      const changePassword = {
        query: mutation,
        variables: {
          input: {
            currentPassword: variablesObject.password,
            newPassword: variablesObject.newPassword
          },
        },
      };
      const result = await doPost(
        changePassword
      );
      return [result.body, variablesObject.password, variablesObject.newPassword];
    } catch (e) {
      console.log(e);
    }
  },
};
