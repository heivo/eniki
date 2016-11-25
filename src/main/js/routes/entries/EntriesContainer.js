import React, {Component, PropTypes} from 'react'
import {connect} from 'react-redux';
import {push} from 'react-router-redux';
import SearchBar from './SearchBar';
import {fetchEntries} from '../../modules/entries';

const mapStateToProps = state => ({
    searchText: state.entries.searchText,
});

const mapDispatchToProps = dispatch => ({
    handleSearch: searchText => dispatch(fetchEntries(searchText)).then(dispatch(push('/entries')))
});

@connect(mapStateToProps, mapDispatchToProps)
export default class EntriesPage extends Component {
    render() {
        const {searchText, handleSearch} = this.props;
        return (
            <div>
                <SearchBar searchText={searchText} onSearch={handleSearch} />
                {this.props.children}
            </div>
        )
    }
}