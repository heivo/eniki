import React, {Component, PropTypes} from 'react'

export default class CopyToClipboardButton extends Component {

    static propTypes = {
        value: PropTypes.string.isRequired
    };

    constructor(props) {
        super(props);
        this.copyToClipboard = this.copyToClipboard.bind(this);
    }

    copyToClipboard() {
        this.input.select();
        document.execCommand('copy', false);
    }

    render() {
        return (
            <span>
                <input
                    type="text"
                    defaultValue={this.props.value}
                    ref={input => this.input = input}
                    style={{border: 'none', padding: 0, width: 1}} />
                <button type="button" onClick={this.copyToClipboard}>Copy To Clipboard</button>
            </span>
        )
    }
}