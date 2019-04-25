import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import M from 'materialize-css';
import 'materialize-css/dist/css/materialize.min.css';

class Board extends React.Component {
    constructor(props) {
        super(props);
        this.cards = new Array();
    }

    insertCard(card) {
        this.cards.push(card);
    }

    render() {
        const deck = <Deck cards={this.cards} />;
        const card = <Card
        title="Card Title"
        content="This is a dummy content that has no specific meaning. Use this as the default content of the card."
        actions={[
            <Action content="Here's the 1st link" />,
            <Action content="Here's the 2nd link" />]} />;
        return (
            <div class="container">
                {deck}
                <ModalTrigger href="#modal1" content="Modal" />
                <Modal id="modal1" content={card} footerContent="Agree" />
            </div>
        );
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
        var width = this.props.width ? this.props.width : "col s12 m6 l4";
        var backColor = this.props.backColor ? this.props.backColor : "blue-grey darken-1";
        var contentColor = this.props.contentColor ? this.props.contentColor : "white-text";
        return (
            <div class={width}>
                <div class={"card " + backColor}>
                    <div class={"card-content " + contentColor}>
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
        var href = this.props.href ? this.props.href : "#";
        var content = this.props.content ? this.props.content : "action";
        return (
            <a href={href}>{content}</a>
        );
    }
}

class ModalTrigger extends React.Component {
    render() {
        return (
            <a class="waves-effect waves-light btn modal-trigger" href={this.props.href}>{this.props.content}</a>
        );
    }
}

class Modal extends React.Component {
    render() {
        return (
            <div id={this.props.id} class="modal">
                <div class="modal-content">
                    {this.props.content}
                </div>
                <div class="modal-footer">
                    <a href="#!" class="modal-close waves-effect waves-green btn-flat">{this.props.footerContent}</a>
                </div>
            </div>
        );
    }
}
// ========================================
var board = ReactDOM.render(<Board />, document.getElementById("materialize"));
board.insertCard(<Card
    title="Card Title"
    content="This is a dummy content that has no specific meaning. Use this as the default content of the card."
    actions={[
        <Action content="Here's the 1st link" />,
        <Action content="Here's the 2nd link" />]} />);
ReactDOM.render(board.render(), document.getElementById("materialize"));
document.addEventListener('DOMContentLoaded', function () {
    var elems = document.querySelectorAll('.modal');
    var options = {};
    var instances = M.Modal.init(elems, options);
});