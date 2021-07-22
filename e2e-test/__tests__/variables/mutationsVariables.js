const CPF = require("cpf");
const faker = require("faker");

module.exports = {
  getNewUserDate: async function () {
    newUserData = {
      email: (faker.name.firstName() + "@testapi.com").toLocaleLowerCase(),
      name: faker.name.findName(),
      document: CPF.generate(false),
      phone:
        "+55819" +
        faker.datatype.number({
          min: 10000000,
          max: 99999999,
        }),
      workCity: "São Paulo",
      workState: "SP",
      password: "Password123",
    };
    return newUserData;
  },
  login: {
    email: "tuy.novo8@yahoo.com",
    password: "Teste123",
  },
  sendPhoneVerificationCode: {
    phone: "+5572974945581",
  },
  changePassword:{
    password: "Password123",
    newPassword: "Teste123",
    email: ""
  }
};
