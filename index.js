<<<<<<< HEAD
const findMatching = (drivers, string) => {
  return drivers.filter(x => x.toLowerCase() === string.toLowerCase())
}

const fuzzyMatch = (drivers, string) => {
  return drivers.filter(n => n.slice(0, string.length) === string)
}

const matchName = (drivers, string) => {
  return drivers.filter(c => c.name === string)
=======
function findMatching(drivers, string) => {
  return drivers.filter(x => x.toLowerCase() === string.toLowerCase())
>>>>>>> 7fea74b970991e437137774ffc681dad95748137
}