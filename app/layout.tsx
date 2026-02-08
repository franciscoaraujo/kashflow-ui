import React from 'react';

const RootLayout: React.FC = ({ children }) => {
    return (
        <html>
            <head>
                <title>Kashflow UI</title>
            </head>
            <body>{children}</body>
        </html>
    );
};

export default RootLayout;