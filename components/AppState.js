import React from 'react';
import AppContext from  './AppContext'
import { useProducts } from '../hooks/useProducts';

const AppState = (props) => {
    const appContext = useProducts();
    return (<AppContext.Provider value={appContext}>
        {props.children}
    </AppContext.Provider>)
}

export default AppState;