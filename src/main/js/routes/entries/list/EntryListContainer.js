import React, {Component, PropTypes} from 'react'
import {connect} from 'react-redux';
import {push} from 'react-router-redux';
import EntryList from './EntryList';

const mapStateToProps = state => ({
    entries: state.entries.items,
    isFetching: state.entries.isFetching
});

const mapDispatchToProps = dispatch => ({
    handleSelect: entry => dispatch(push(`/entries/${entry.id}`)),
    handleSort: sortBy => console.log('sort entries by', sortBy),
});

@connect(mapStateToProps, mapDispatchToProps)
export default class EntryListContainer extends Component {
    render() {
        const {entries, isFetching, handleSelect, handleSort} = this.props;
        return (
            <EntryList
                entries={entries || []}
                isFetchingEntries={isFetching}
                onSelectEntry={handleSelect}
                onSortEntries={handleSort} />
        )
    }
}
