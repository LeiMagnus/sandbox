var player = {
  addNewPlayer: function(player_name){
    this[player_name] = document.createElement('div');
    this[player_name].className = 'player';
    this[player_name].id = player_name
    this[player_name].lifeTotal = 20;
    this[player_name].maximumHandSize = 7;
    exile = document.createElement('div');
    exile.className = player_name;
    exile.id = 'exile';
    graveyard = document.createElement('div');
    graveyard.className = player_name;
    graveyard.id = 'graveyard';
    library = document.createElement('div');
    library.className = player_name;
    library.id = 'library';
    this[player_name].appendChild(exile);
    this[player_name].appendChild(graveyard);
    this[player_name].appendChild(library);
    return this[player_name];
  }
}
