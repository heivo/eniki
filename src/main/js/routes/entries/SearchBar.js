import React, {Component, PropTypes} from "react";

export default class SearchBar extends Component {

    static propTypes = {
        searchText: PropTypes.string.isRequired,
        onSearch: PropTypes.func.isRequired
    };

    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.onSearch(this.searchInput.value);
    }

    componentDidMount() {
        this.searchInput.focus();
    }

    render() {
        const {searchText} = this.props;
        return (
            <div style={{border: '1px solid gray'}}>
                <form onSubmit={this.handleSubmit}>
                    <h4>SearchBar</h4>
                    <label>Search</label>
                    <input type="text" defaultValue={searchText} ref={input => this.searchInput = input} />
                </form>
            </div>
        )
    }
}