import React, {Component, PropTypes} from 'react'
import {connect} from 'react-redux';
import EntryDetails from './EntryDetails';

const mapStateToProps = state => ({
});

const mapDispatchToProps = dispatch => ({
});

@connect(mapStateToProps, mapDispatchToProps)
export default class EntryDetailsContainer extends Component {
    render() {
        return (
            <EntryDetails />
        )
    }
}