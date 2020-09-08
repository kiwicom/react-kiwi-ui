// @noflow

module.exports = {
  displayName: "orbit-components",
  testEnvironment: "jsdom",
  setupFiles: ["raf/polyfill", "./config/enzymeConfig", "./config/registerContext"],
  setupFilesAfterEnv: ["./config/jestSetupFramework"],
  snapshotSerializers: ["enzyme-to-json/serializer"],
};
