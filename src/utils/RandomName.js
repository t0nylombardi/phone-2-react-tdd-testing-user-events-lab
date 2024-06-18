const batmanCharacters = {
  "Bruce Wayne": "Batman",
  "Alfred Pennyworth": "Alfred Pennyworth",
  "Dick Grayson": "Nightwing",
  "Jason Todd": "Red Hood",
  "Tim Drake": "Red Robin",
  "Damian Wayne": "Robin",
  "Barbara Gordon": "Batgirl/Oracle",
  "Selina Kyle": "Catwoman",
  "Jim Gordon": "Jim Gordon",
  "Lucius Fox": "Lucius Fox",
  "Harvey Dent": "Two-Face",
  "Oswald Cobblepot": "Penguin",
  "Edward Nygma": "Riddler",
  "Pamela Isley": "Poison Ivy",
  "Harleen Quinzel": "Harley Quinn",
  "Jonathan Crane": "Scarecrow",
  "Jervis Tetch": "Mad Hatter",
  "Victor Fries": "Mr. Freeze",
  "Ra's al Ghul": "Ra's al Ghul",
  "Talia al Ghul": "Talia al Ghul",
  "Eduardo Dorrance": "Bane",
  "Killer Croc": "Killer Croc",
  "Hugo Strange": "Hugo Strange",
  "Thomas Elliot": "Hush",
  "Professor Pyg": "Professor Pyg",
  "Garfield Lynns": "Firefly",
  "Victor Zsasz": "Zsasz",
  "Lady Shiva": "Lady Shiva",
  "Kate Kane": "Batwoman",
  "Jean-Paul Valley": "Azrael",
};

export const RandomCharacter = () => {
  const keys = Object.keys(batmanCharacters);
  const randomKey = keys[Math.floor(Math.random() * keys.length)];
  const alias = batmanCharacters[randomKey];
  if (alias === randomKey) {
    return randomKey;
  }
  return alias ? `${randomKey} aka ${alias}` : randomKey;
};
