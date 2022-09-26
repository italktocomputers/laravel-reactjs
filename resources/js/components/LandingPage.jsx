import React from 'react';

export default function LandingPage() {
    return (
        <div>
            <p>To subscribe to our weekly newsletter, please fill out the information below.</p>
            <form>
                <p>
                    <label>First name</label>&nbsp;
                    <input type="text" id="first_name" />
                </p>
                <p>
                    <label>Email address</label>&nbsp;
                    <input type="text" id="email_address" />
                </p>
                <p>
                    <input type="submit" value="Subscribe" />
                </p>
            </form>
        </div>
    );
}
