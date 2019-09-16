const storage_key = (key) => `netcloth_${key}`;

export default {
  setItem(key, data) {
    localStorage.setItem(storage_key(key), JSON.stringify(data));
  },
  getItem(key) {
    const data = localStorage.getItem(storage_key(key));
    return JSON.parse(data);
  },
  removeItem(key) {
    localStorage.removeItem(storage_key(key));
  }
}
