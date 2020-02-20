module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  testRunner: "@undefinedlabs/scope-agent/jest/testRunner",
  runner: "@undefinedlabs/scope-agent/jest/runner",
  setupFilesAfterEnv: ["@undefinedlabs/scope-agent/jest/setupTests"]
};
