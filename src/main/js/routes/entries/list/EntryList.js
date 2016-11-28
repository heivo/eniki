import React, {Component, PropTypes} from 'react'
import {Link} from 'react-router';
import CopyToClipboardButton from './CopyToClipboardButton';
export default class EntryList extends Component {

    static propTypes = {
        entries: PropTypes.array.isRequired,
        isFetchingEntries: PropTypes.bool.isRequired,
        onSortEntries: PropTypes.func.isRequired,
    };

    render() {
        const {entries} = this.props;
        return (
            <div>
                <table className="table table-sm">
                    <thead className="thead-default">
                        <tr>
                            <th>Title</th>
                            <th>Username</th>
                            <th>URL</th>
                            <th>Notes</th>
                            <th>&nbsp;</th>
                        </tr>
                    </thead>
                    <tbody>
                    {entries.map(entry => (
                        <tr key={entry.id}>
                            <td><Link to={`/entries/${entry.id}`}>{entry.title}</Link></td>
                            <td>{entry.username}</td>
                            <td>{entry.url}</td>
                            <td>{entry.notes}</td>
                            <td><CopyToClipboardButton value={entry.title} /></td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        )
    }
}