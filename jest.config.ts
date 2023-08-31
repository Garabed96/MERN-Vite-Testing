import type { Config } from '@jest/types'

// const baseDir = '<rootDir>/src/app/pass_checker'
// const baseTestDir = '<rootDir>/src/test/pass_checker'
const baseDirDouble = '<rootDir>/src/app/doubles'
const baseTestDirDouble = '<rootDir>/src/test/doubles'

const config: Config.InitialOptions = {
   preset: 'ts-jest',
   testEnvironment: 'node',
   verbose: true,
   collectCoverage: true,
   collectCoverageFrom: [`${baseDirDouble}/**/*.ts`],
   testMatch: [`${baseTestDirDouble}/**/*.ts`],
}

export default config
