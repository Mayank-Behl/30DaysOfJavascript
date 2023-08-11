var TimeLimitedCache = function () {
  this.cache = new Map();
};

/**
 * @param {number} key
 * @param {number} value
 * @param {number} duration time until expiration in ms
 * @return {boolean} if un-expired key already existed
 */
TimeLimitedCache.prototype.set = function (key, value, duration) {
  let found = this.cache.has(key);
  if (found) clearTimeout(this.cache.get(key).ref);
  //clears the previous timeout
  /*In summary, the .ref property is used to keep track of the timeout associated with each cached item. It allows you to cancel the timeout if you need to update or remove the cached item before its time duration expires. This mechanism helps in managing the time-limited nature of the cache and ensures that items are removed from the cache after a specified duration has passed. */
  this.cache.set(key, {
    value,
    ref: setTimeout(() => this.cache.delete(key), duration),
  });
  return found;
};

/**
 * @param {number} key
 * @return {number} value associated with key
 */
TimeLimitedCache.prototype.get = function (key) {
  return this.cache.has(key) ? this.cache.get(key).value : -1;
};

/**
 * @return {number} count of non-expired keys
 */
TimeLimitedCache.prototype.count = function () {
  return this.cache.size;
};

/**
 * Your TimeLimitedCache object will be instantiated and called as such:
 * var obj = new TimeLimitedCache()
 * obj.set(1, 42, 1000); // false
 * obj.get(1) // 42
 * obj.count() // 1
 */
