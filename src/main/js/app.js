import React from 'react'
import ReactDOM from 'react-dom'
import axios from 'axios'

class App extends React.Component {
    render() {
        return (
            <div>Test 123!</div>
        )
    }
};

const mountPoint = document.createElement('div');
document.body.appendChild(mountPoint);

ReactDOM.render(<App />, mountPoint);

axios.get('/api/entries')
    .then(response => {
        console.log(response);
    }).catch(err => {
        console.error(err);
    });
