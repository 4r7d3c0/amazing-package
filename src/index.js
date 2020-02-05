import { c } from 'erte'

/**
 * @type {_amazingPackage.amazingPackage}
 */
export default async function amazingPackage(config = {}) {
  const {
    shouldRun = true,
    text = '',
  } = config
  if (!shouldRun) return ''
  console.log('amazing-package called with %s', c(text, 'yellow'))
  return text
}

/**
 * @suppress {nonStandardJsDocs}
 * @typedef {import('../types').amazingPackage} _amazingPackage.amazingPackage
 */
