module.exports = function createDreamTeam(members) {
  if (!Array.isArray(members)) return false
  let newArr = members.filter(item => typeof item === 'string').map((item) => item = item.trim().slice(0,1).toUpperCase()).sort().join('')
  return newArr
};