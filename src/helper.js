import React from "react";

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
/**
 *
 * @param percent
 * @returns jsx
 */
export const handlePercentChange = (percent) => {
  if (percent < 0) {
    return <span className="percent-fallen">{percent}% &darr;</span>
  } else if (percent > 0) {
    return <span className="percent-raised">{percent}% &uarr;</span>
  } else {
    return <span>{percent}%</span>
  };
}