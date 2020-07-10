/*
 * (c) Artur Doruch <arturdoruch@interia.pl>
 */

/**
 * A wrapper for localStorage.
 * Adds encoding object and array into string of setting localStorage item.
 */
export default {
    /**
     * Saves data into localStorage.
     *
     * @param {string} key
     * @param {*} value The value of any type, except function and class.
     */
    setItem(key, value) {
        localStorage.setItem(key, JSON.stringify(value));
    },

    /**
     * Gets data from localStorage.
     *
     * @param {string} key
     * @returns {*}
     */
    getItem(key) {
        return JSON.parse(localStorage.getItem(key));
    },

    /**
     * @param {string} key
     */
    removeKey(key) {
        localStorage.removeItem(key);
    },

    count() {
        return localStorage.length
    }
}
