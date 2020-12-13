function getVillainName(birthday) {
  birthday = birthday.toString();
  const day = ["Mustache", "Pickle", "Hood Ornament", "Raisin", "Recycling Bin", "Potato", "Tomato", "House Cat", "Teaspoon", "Laundry Basket"];
  const month = {
    Jan: "The Evil",
    Feb: "The Vile",
    Mar: "The Cruel",
    Apr: "The Trashy",
    May: "The Despicable",
    Jun: "The Embarrassing",
    Jul: "The Disreputable",
    Aug: "The Atrocious",
    Sep: "The Twirling",
    Oct: "The Orange",
    Nov: "The Terrifying",
    Dec: "The Awkward"
  }
    let first = birthday.split(' ')[1],
     second = birthday.split(' ')[2][birthday.split(' ')[2].length -1];

    return `${month[first]} ${day[second]}`
}