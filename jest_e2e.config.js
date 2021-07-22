module.exports = {
   // rootDir: "e2e-test/__tests__/test/",
   // setupFilesAfterEnv: ['jest-setup.js'],
    verbose: true,
    projects: [
      {
        displayName: 'E2E',
        rootDir: 'e2e-test/__tests__/test/',
        testTimeout: 20000,
      },
    ],
  };