export default class GameState {
    constructor () {
        this.players = [];
        this.moves = [];
        this.whoseTurn = null;
        this.winner = null;
    }

    addPlayer (player) {
      if (!player.name) {
          throw new Error('Invalid player: no name');
      }
      if (!player.symbol) {
          throw new Error('Invalid player: no symbol');
      }
      if (('' + player.symbol).length !== 1) {
          throw new Error('Invalid player: symbol should be a single character');
      }
      if (this.players.length < 2) {
          this.players.push(player);
      }
    }

    addMove (turn) {
        let { move } = turn;
        if (this.moves.length < 9) {
            this.moves.push(move);
        }
    }
}
