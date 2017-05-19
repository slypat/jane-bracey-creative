import React from 'react';
import './CopyRight.css';

const CopyRight = ({ year, holder }) => (
    <div className="CopyRight">
        <p className="lead text-center">&copy; {`${year} ${holder}`}</p>
    </div>
);

export default CopyRight;