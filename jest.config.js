module.exports = {
    verbose: true,
    preset: 'ts-jest',
    testEnvironment: 'jsdom',
    globals: {
    },
    testMatch: ["**/__tests__/**/*.ts?(x)", "**/?(*.)+(spec|test).ts?(x)"],
    transform: {
      "^.+\\.(ts|tsx)$": "ts-jest",
    }
}