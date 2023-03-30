import React from 'react';

export type LogProps = {
    value: any,
    style?: any
}

const Log: React.FC<LogProps> = ({value, style}) => {
    return (
        <div style={{background: 'lightcyan', padding: 10, textAlign: 'left'}}>
        <pre style={style}>
            <code>
                {JSON.stringify(value, null, 2)}
            </code>
        </pre>
        </div>
    )
};

export default Log;
