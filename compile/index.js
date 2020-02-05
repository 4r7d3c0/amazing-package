const { _amazingPackage } = require('./amazing-package')

/**
 * Hello World
 * @param {!_amazingPackage.Config} config Options for the program.
 * @param {boolean} [config.shouldRun=true] A boolean option. Default `true`.
 * @param {string} [config.text] A text to return.
 * @return {Promise<string>}
 */
function amazingPackage(config) {
  return _amazingPackage(config)
}

module.exports = amazingPackage

/* typal types/index.xml namespace */
/**
 * @typedef {_amazingPackage.Config} Config `＠record` Options for the program.
 * @typedef {Object} _amazingPackage.Config `＠record` Options for the program.
 * @prop {boolean} [shouldRun=true] A boolean option. Default `true`.
 * @prop {string} [text] A text to return.
 */
