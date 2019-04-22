import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './materialize/css/materialize.min.css';

class Board extends React.Component {
    render() {
        var deck = new Deck();
        var card = new Card();
        card.title = "Card Title";
        card.content = "This is a dummy content that has no specific meaning. Use this as the default content of the card.";
        var link1 = new Link();
        link1.content = "Here's the 1st link";
        var link2 = new Link();
        link2.content = "Here's the 2nd link";
        card.addAction(link1);
        card.addAction(link2);
        deck.insert(card);
        return deck.render();
    }
}

class Deck extends React.Component {
    constructor(props) {
        super(props);
        this.cards = new Array();
    }

    insert(card) {
        this.cards.push(card);
    }

    render() {
        return (
            <div class="row">
                {this.cards.map(card => {card.render()})}
            </div>
        );
    }
}

class Card extends React.Component {
    constructor(props) {
        super(props);
        this.actions = new Array();
        this.title = "Card Title";
        this.content = "This is a dummy content that has no specific meaning. Use this as the default content of the card.";
    }

    addAction(action) {
        this.actions.push(action);
    }

    render() {
        return (
            <div class="col s4 m4 l2">
                <div class="card blue-grey darken-1">
                    <div class="card-content white-text">
                        <span class="card-title">{this.props.title}</span>
                        <p>{this.props.content}</p>
                    </div>
                    <div class="card-action">
                        {this.actions.map(action => {action.render()})}
                    </div>
                </div>
            </div>
        );
    }
}

class Link extends React.Component {
    constructor(props) {
        super(props);
        this.href = "#";
        this.content = "This is a link";
    }

    render() {
        return (
            <a href={this.href}>{this.content}</a>
        );
    }
}

// ========================================

ReactDOM.render(<Board />, document.getElementById("materialize"));