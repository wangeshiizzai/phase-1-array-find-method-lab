function superbowlWin(record) {
  for (let game of record) {
    if (game.result === "W") {
      return game.year; 
    }
  }
  return undefined; 
}

