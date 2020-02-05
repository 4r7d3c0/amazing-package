const { _amazingPackage } = require('./amazing-package')

/**
 * @methodType {_amazingPackage.amazingPackage}
 */
function amazingPackage(config) {
  return _amazingPackage(config)
}

module.exports = amazingPackage

/* typal types/index.xml namespace */
