import update from 'immutability-helper'

/**
 * A helper function for chaining several updates from immutability-helper.
 * This is useful when we want to do calculate some intermediate values and
 * refer to them later on as we're updating.
 * So instead of doing this:
 *
 *     const obj1 = update(obj, { foo: { $set: 4 }})
 *     const obj2 = update(obj1, { foo: { $set: obj1.foo + 1}})
 *     const obj3 = update(obj2, { foo: { $set: obj2.foo * 3}})
 *
 * With chainUpdate we can do it like this:
 *
 *     chainUpdate(obj,
 *       obj => { foo: { $set: 4 }},
 *       obj => { foo: { $set: obj.foo + 1 }},
 *       obj => { foo: { $set: obj.foo * 3 }},
 *     )
 */
export const chainUpdate = (obj, ...funcs) => funcs.reduce((acc, f) => update(acc, f(acc)), obj)

export const getDecimalSeparator = () => {
  let n = 1.1
  return n.toLocaleString().substring(1, 2)
}

export const shuffleArray = (array, random) => {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(random * (i + 1))
    ;[array[i], array[j]] = [array[j], array[i]]
  }
}
