/* eslint-disable unicorn/prefer-module */
import {Command} from '@oclif/core'
import {copyFile} from 'fs-extra'
import {join} from 'node:path'
const appRoot = require('app-root-path')

const configFilePath = join(
  __dirname,
  '..',
  '..',
  '..',
  'config',
  'style-maker.config.js',
)

export default class Init extends Command {
  static description = 'Make config file. (style-maker.config.js)'

  async run(): Promise<void> {
    try {
      await copyFile(configFilePath, appRoot + '/style-maker.config.js')
      this.log('Success make config file')
    } catch (error) {
      this.error(`Failed make config file\n${error}`)
    }
  }
}
