import './bootstrap';

import React from 'react';
import ReactDOM from 'react-dom';

export default function HelloReact() {
    return (
        <p>Hello React!</p>
    );
}

if (document.getElementById('react-app')) {
    ReactDOM.render(<HelloReact />, document.getElementById('react-app'));
}

