class Board extends React.Component {
    constructor (props) {
        super();
        this.state = {
            gameState: props.gameState,
            token: props.token
        };
    }
    render () {
        return <div></div>
    }
}
window.Board = Board;
