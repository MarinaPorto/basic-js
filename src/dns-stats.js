const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {

  let domainsParts = new Map();
  let domain = "";

  domains.forEach(el => {
    let part = el.split(".")
    for (let i = part.length - 1; i >= 0; i--) {
      domain += "." + part[i]
      if (domainsParts.has(domain)) {
        let value = domainsParts.get(domain)
        domainsParts.set(domain, value + 1)
      } else {
        domainsParts.set(domain, 1)
      }
    }
    domain = "";
  })
  const dns = Object.fromEntries(domainsParts);
  return dns
}

module.exports = {
  getDNSStats
};
