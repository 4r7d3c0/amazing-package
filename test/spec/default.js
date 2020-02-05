import { equal, ok } from '@zoroaster/assert'
import Context from '../context'
import amazingPackage from '../../src'

/** @type {TestSuite} */
const T = {
  context: Context,
  'is a function'() {
    equal(typeof amazingPackage, 'function')
  },
  async 'calls package without error'() {
    await amazingPackage()
  },
  async 'gets a link to the fixture'({ fixture }) {
    const text = fixture`text.txt`
    const res = await amazingPackage({
      text,
    })
    ok(res, text)
  },
}

/**
 * @typedef {import('../context').TestSuite} TestSuite
 */

export default T