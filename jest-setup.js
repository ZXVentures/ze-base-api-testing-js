console.log("TIMEOUT EM 10 SEGUNDOS");
jest.setTimeout(10000); // in milliseconds

describe('puppeteer tests', () => {
    beforeEach(() => {
      jest.setTimeout(10000);
    });
});

global.beforeEach(() => {
    jest.setTimeout(10000);
  });
  
  global.afterEach(() => {
    
  });
