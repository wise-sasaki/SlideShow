module.exports = {
    verbose: true,
    preset: 'ts-jest',
    testEnvironment: 'jsdom',
    rootDir: ".",
    testMatch: ["**/__test__/**/*.ts?(x)", "**/?(*.)+(spec|test).ts?(x)"],
    transform: {
      "^.+\\.(ts|tsx)$": "ts-jest",
    },
    collectCoverage: false,
    coverageDirectory: "<rootDir>/__test__/coverage",
    // これっていらないかも？
    moduleDirectories: ["<rootDir>/node_modules/"],
    transformIgnorePatterns:["<rootDir>/node_modules/"],
    // テスト用にjqueryを使うための設定を読み込む
    setupFiles: ["<rootDir>/__test__/test-env.js"]
}