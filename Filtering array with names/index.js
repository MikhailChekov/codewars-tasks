function friend(friends) {
  return friends.filter((e) => isNaN(e) && e.length === 5);
}
