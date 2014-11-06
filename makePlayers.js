var player = {
  addNewPlayer: function(player_name){
    this[player_name] = {
      lifeTotal: 20,
      maximumHandSize: 7
    }
  }
}
