/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable array-callback-return */
/* eslint-disable unicorn/prefer-module */
import {Command} from '@oclif/core'
import {writeFile} from 'fs-extra'
import {stringify} from 'javascript-stringify'
import {ESLint} from 'eslint'
const appRoot = require('app-root-path')
const reqlib = appRoot.require

type Style = {
  name: string
  options: Option[]
}

type Option = {
  target: string
  alias?: string
  aliases?: object
  values?: object
  sizes?: Number[]
}

const getKeysValues = (object: object) => {
  return {k: Object.keys(object), v: Object.values(object)}
}

const makeStyle = (data: object[], index: number, style = {}): object => {
  const chk = data[index] && Object.keys(data[index]).length > 0

  let _style = {}

  if (chk) {
    const {k, v} = getKeysValues(data[index])
    k.map((key, keyIndex) => {
      if (index === 0) {
        const style = {
          [key]: v[keyIndex],
        }
        _style = {..._style, ...style}
      } else {
        const tmpStyle = getKeysValues(style)
        tmpStyle.k.map((tmpKey, tmpKeyIndex) => {
          const style = {
            [tmpKey + key]: {...v[keyIndex], ...tmpStyle.v[tmpKeyIndex]},
          }
          _style = {..._style, ...style}
        })
      }
    })
  }

  if (index < data.length - 1) {
    return makeStyle(data, index + 1, _style)
  }

  return _style
}

export default class Create extends Command {
  static description = 'Create style file'

  async run(): Promise<void> {
    try {
      const configFile = reqlib('style-maker.config.js')

      const {path, styles} = configFile

      let text = ''

      styles.map(({name, options}: Style) => {
        const list: object[] = []

        options.map(({target, alias, aliases, values, sizes}: Option) => {
          let o = {}

          const baseKey = alias ?? ''

          const valuesChk = values && Object.keys(values).length > 0
          const sizesChk = sizes && Object.keys(sizes).length > 0

          if (valuesChk) {
            const {k, v} = getKeysValues(values)
            k.map((value, valueIndex) => {
              const style = {[`${baseKey}${value}`]: {[target]: v[valueIndex]}}
              o = {...o, ...style}
            })
          } else if (sizesChk) {
            const {k} = getKeysValues(sizes)
            const aliasesChk = aliases && Object.keys(aliases).length > 0
            k.map(size => {
              if (aliasesChk) {
                const _aliases = getKeysValues(aliases)
                _aliases.k.map((alias, aliasKey) => {
                  const style = {
                    [`${baseKey}${alias}${size}`]: {
                      [target + _aliases.v[aliasKey]]: Number(size),
                    },
                  }
                  o = {...o, ...style}
                })
              } else {
                const style = {
                  [`${baseKey}${size}`]: {
                    [target]: Number(size),
                  },
                }
                o = {...o, ...style}
              }
            })
          }

          list.push(o)
        })

        const style = makeStyle(list, 0)

        text += `export const ${name} = ` + stringify(style) + '\n\n'
      })

      const eslint = new ESLint({fix: true})

      const results = await eslint.lintText(text, {filePath: appRoot + path})
      await ESLint.outputFixes(results)

      this.log('Success create style file')
    } catch (error) {
      this.error(`Failed create style file\n${error}`)
    }
  }
}
