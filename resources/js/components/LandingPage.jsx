import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export default function LandingPage() {
    const [name, updateName] = React.useState('');
    const [email, updateEmail] = React.useState('');

    const submit = e => {
        e.preventDefault();
        const params = {
            name,
            email,
        };
        fetch('api/subscribe', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(params),
        })
            .then(response => response.json())
            .then(data => console.log(data));
    };

    return (
        <div width="300px">
            <p>To subscribe to our weekly newsletter, please fill out the information below.</p>
            <Form>
                <fieldset>
                    <Form.Group className="mb-3">
                        <Form.Label>First name</Form.Label>&nbsp;
                        <Form.Control
                            type="text"
                            placeholder="Enter name"
                            onChange={e => updateName(e.target.value)}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Email address</Form.Label>&nbsp;
                        <Form.Control
                            type="email"
                            placeholder="Enter email address"
                            onChange={e => updateEmail(e.target.value)}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Button variant="primary" type="submit" onClick={submit}>
                            Subscribe to newsletter
                        </Button>
                    </Form.Group>
                </fieldset>
            </Form>
        </div>
    );
}
