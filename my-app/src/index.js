import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './materialize/css/materialize.min.css';

class Card extends React.Component {
    render() {
        return (
            <div class="row">
                <div class="col s4">
                    <div class="card blue-grey darken-1">
                        <div class="card-content white-text">
                            <span class="card-title">Card Title</span>
                            <p>I am a very simple card. I am good at containing small bits of information.
                        I am convenient because I require little markup to use effectively.</p>
                        </div>
                        <div class="card-action">
                            <a href="#">This is a link</a>
                            <a href="#">This is a link</a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

// ========================================

ReactDOM.render(<Card />, document.getElementById("materialize"));