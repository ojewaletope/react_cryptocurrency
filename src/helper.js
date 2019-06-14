/**
 *
 * @param res
 * @returns {Promise<T | never>}
 */
export const responseHandler = (res) => {
  return res.json().then(json => {
    return res.ok ? json: Promise.reject(json)
  })
};