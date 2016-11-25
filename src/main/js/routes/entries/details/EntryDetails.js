import React, {Component, PropTypes} from 'react'
import {Link} from 'react-router';

export default class EntryDetails extends Component {
    render() {
        return (
            <div>
                <h3>EntryDetails</h3>
                <Link to='/entries' onlyActiveOnIndex={false}>Back</Link>
            </div>
        )
    }
}