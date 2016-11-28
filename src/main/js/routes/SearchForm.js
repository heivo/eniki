import React, {Component, PropTypes} from "react";

export default class SearchForm extends Component {

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
            <form onSubmit={this.handleSubmit} className="form-inline float-xs-right">
                <input
                    type="text"
                    defaultValue={searchText}
                    ref={input => this.searchInput = input}
                    className="form-control"
                    placeholder="Search Entries..." />
                <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
        )
    }
}