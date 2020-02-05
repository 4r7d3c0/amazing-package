/**
 * @fileoverview
 * @externs
 */

/* typal types/index.xml externs */
/** @const */
var _amazingPackage = {}
/**
 * Options for the program.
 * @record
 */
_amazingPackage.Config
/**
 * A boolean option. Default `true`.
 * @type {boolean|undefined}
 */
_amazingPackage.Config.prototype.shouldRun
/**
 * A text to return.
 * @type {string|undefined}
 */
_amazingPackage.Config.prototype.text

/* typal types/api.xml externs */
/**
 * Hello World
 * @typedef {function(!_amazingPackage.Config): !Promise<string>}
 */
_amazingPackage.amazingPackage
