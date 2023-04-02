/**
 * saves a value to local storage.
 * @param {string} key sets the key value in local storage
 * @param {object} value value to store in local storage
 *
 * @example
 * ```
 * saveLocalStorage("product", array);
 * ```
 */
export function saveLocalStorage(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

/**
 * Gets the item from local storage holding the key value.
 * @param {string} key Key value to retrieve item
 * @example
 * ```
 * getLocalStorage("product");
 * returns product value from local storage
 * ```
 */
export function getLocalStorage(key) {
  const stored = localStorage.getItem(key);
  return stored ? JSON.parse(stored) : [];
}
