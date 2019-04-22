import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './materialize/css/materialize.min.css';

class Board extends React.Component {
    render() {
        var cards = new Array();
        cards.push(<Card
            title="Card Title"
            content="This is a dummy content that has no specific meaning. Use this as the default content of the card."
            actions={[
                <Action content = "Here's the 1st link"/>,
                <Action content = "Here's the 2nd link"/>]} />);
        cards.push(<Card
            title="Card Title"
            content="This is a dummy content that has no specific meaning. Use this as the default content of the card."
            actions={[
                <Action content = "Here's the 1st link"/>,
                <Action content = "Here's the 2nd link"/>]} />);
        const deck = <Deck cards={cards} />;
        cards.push(<Card
            title="Card Title"
            content="This is a dummy content that has no specific meaning. Use this as the default content of the card."
            actions={[
                <Action content = "Here's the 1st link"/>,
                <Action content = "Here's the 2nd link"/>]} />);
        return <div class="container">{deck}</div>;
    }
}

class Deck extends React.Component {
    render() {
        return (
            <div class="row">
                {this.props.cards}
            </div>
        );
    }
}

class Card extends React.Component {
    render() {
        return (
            <div class="col s4 m4 l3">
                <div class="card blue-grey darken-1">
                    <div class="card-content white-text">
                        <span class="card-title">{this.props.title}</span>
                        <p>{this.props.content}</p>
                    </div>
                    <div class="card-action">
                        {this.props.actions}
                    </div>
                </div>
            </div>
        );
    }
}

class Action extends React.Component {
    render() {
        var href = "#";
        if (this.props.href) {
            href = this.props.href;
        }
        var content = "action";
        if (this.props.content) {
            content = this.props.content;
        }
        return (
            <a href={href}>{content}</a>
        );
    }
}

// ========================================

ReactDOM.render(<Board />, document.getElementById("materialize"));