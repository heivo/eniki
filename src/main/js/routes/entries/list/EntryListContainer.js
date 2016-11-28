import React, {Component, PropTypes} from 'react'
import {connect} from 'react-redux';
import EntryList from './EntryList';

const mapStateToProps = state => ({
    entries: state.entries.items,
    isFetching: state.entries.isFetching
});

const mapDispatchToProps = dispatch => ({
    handleSort: sortBy => console.log('sort entries by', sortBy),
});

@connect(mapStateToProps, mapDispatchToProps)
export default class EntryListContainer extends Component {
    render() {
        const {entries, isFetching, handleSort} = this.props;
        return (
            <EntryList
                entries={entries || []}
                isFetchingEntries={isFetching}
                onSortEntries={handleSort} />
        )
    }
}
