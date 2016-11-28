import React, {Component, PropTypes} from 'react'

export default class EntryList extends Component {

    static propTypes = {
        entries: PropTypes.array.isRequired,
        isFetchingEntries: PropTypes.bool.isRequired,
        onSelectEntry: PropTypes.func.isRequired,
        onSortEntries: PropTypes.func.isRequired,
    };

    render() {
        const {entries, onSelectEntry} = this.props;
        return (
            <div>
                <table className="table table-sm">
                    <thead className="thead-default">
                        <tr>
                            <th>Title</th>
                            <th>Username</th>
                            <th>URL</th>
                            <th>Notes</th>
                        </tr>
                    </thead>
                    <tbody>
                    {entries.map(entry => (
                        <tr key={entry.id} onClick={() => onSelectEntry(entry)}>
                            <td>{entry.title}</td>
                            <td>{entry.username}</td>
                            <td>{entry.url}</td>
                            <td>{entry.notes}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        )
    }
}