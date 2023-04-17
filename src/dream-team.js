const { NotImplementedError } = require("../extensions/index.js");

/**
 * Create name of dream team based on the names of its members
 *
 * @param {Array} members names of the members
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 *
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  if (Array.isArray(members) === false) {
    return false;
  }

  let teamName = "";

  for (let i = 0; i < members.length; i++) {
    if (typeof members[i] === "string") {
      cleanString = members[i].replace(/\s+/g, "");

      teamName += cleanString[0].toUpperCase();
    }
  }

  return teamName.split("").sort().join("");
}

module.exports = {
  createDreamTeam,
};

console.log(createDreamTeam(["Matt", "Ann", "Dmitry", "Max"]));
console.log(
  createDreamTeam([
    ["David Abram"],
    ["Robin Attfield"],
    "Thomas Berry",
    ["Paul R.Ehrlich"],
    "donna Haraway",
    " BrIaN_gOodWiN  ",
    {
      0: "Serenella Iovino",
    },
    "Erazim Kohak",
    "  val_plumwood",
  ])
);
