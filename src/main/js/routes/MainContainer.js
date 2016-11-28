import React, {Component, PropTypes} from "react";
import {connect} from "react-redux";
import {push} from "react-router-redux";
import NavBar from "./NavBar";
import {fetchEntries} from "../modules/entries";

const mapStateToProps = state => ({
    searchText: state.entries.searchText,
});

const mapDispatchToProps = dispatch => ({
    handleSearch: searchText => dispatch(fetchEntries(searchText)).then(dispatch(push('/entries')))
});

@connect(mapStateToProps, mapDispatchToProps)
export default class MainContainer extends Component {

    static propTypes = {
        searchText: PropTypes.string.isRequired,
        handleSearch: PropTypes.func.isRequired
    };

    render() {
        const {searchText, handleSearch} = this.props;
        return (
            <div>
                <NavBar searchText={searchText} onSearch={handleSearch} />
                {this.props.children}
            </div>
        )
    }
};
