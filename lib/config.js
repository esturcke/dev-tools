const chalk = require("chalk")
const get = require("lodash/get")

const config = (() => {
  try {
    return require("../det.json")
  } catch (e) {
    console.log(
      chalk`{red No config file. Create 'det.json' in the project root.}`
    )
    return {}
  }
})()

module.exports = key => get(config, key)
