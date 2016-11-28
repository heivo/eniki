import React, {Component, PropTypes} from "react";
import {Link} from "react-router";
import SearchForm from "./SearchForm";

export default class NavBar extends Component {

    static propTypes = {
        searchText: PropTypes.string.isRequired,
        onSearch: PropTypes.func.isRequired
    };

    render() {
        const {searchText, onSearch} = this.props;
        return (
            <nav className="navbar navbar-dark bg-primary">
                <Link to="/" className="navbar-brand">Eniki</Link>
                <ul className="nav navbar-nav">
                    <li className="nav-item">
                        <Link to="/entries" className="nav-link" activeClassName="active">Entries</Link>
                    </li>
                </ul>
                <SearchForm searchText={searchText} onSearch={onSearch} />
            </nav>
        )
    }
};
