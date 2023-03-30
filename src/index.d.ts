import React from 'react';

export declare const getDeepDataObject: (object: object | any) => object;
export declare const capitalize: (text: string) => string;
export declare const uid: () => string;

declare type LogProps = {
    value: any;
    style?: any;
};

export declare const Log: React.FC<LogProps>;


