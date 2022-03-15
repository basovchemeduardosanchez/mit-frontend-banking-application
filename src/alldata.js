import React from 'react';

import { useContext } from 'react';
import { UserContext } from './context';

export function AllData(){
    const ctx = useContext(UserContext);
    return (
        <>
            <h5>All Data in Store</h5>
            {JSON.stringify(ctx)}<br/>
        </>
    );
}
