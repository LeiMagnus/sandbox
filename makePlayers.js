var player = {
  addNewPlayer: function(player_name){
    this[player_name] = document.createElement('div');
    this[player_name].className = 'player';
    this[player_name].id = player_name
    this[player_name].lifeTotal = 20;
    this[player_name].maximumHandSize = 7;
    handLibraryGraveyard = document.createElement('div');
    handLibraryGraveyard.className = 'handLibraryGraveyard';
    this[player_name].appendChild(handLibraryGraveyard);
    return this[player_name];
  }
}
