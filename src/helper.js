export function serialize(obj, prefix) {
    const str = [];
    let p;
    // eslint-disable-next-line no-restricted-syntax
    for (p in obj) {
      // eslint-disable-next-line no-prototype-builtins
      if (obj.hasOwnProperty(p)) {
        const k = prefix ? `${prefix}[${p}]` : p;
        const v = obj[p] || obj[p] === 0 ? obj[p] : '';
        if (v) {
          str.push(v !== null && typeof v === 'object' ? serialize(v, k) : `${encodeURIComponent(k)}=${encodeURIComponent(v)}`);
        } else if (v === 0 && p === 'status') {
          str.push(`${encodeURIComponent(k)}=${encodeURIComponent(v)}`);
        }
      }
    }
    return str.join('&');
  }