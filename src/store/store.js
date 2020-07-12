import {createContext} from 'react';

const createContextFromState = (state) => {
    const context = {};
    Object.entries(state).forEach(([key, value]) => {
        const updator = `${key.substring(0, 1).toUpperCase()}${key.substring(1)}`;
        context[key] = value;
        context[`set${updator}`] = () => {};
    });
    return context;
};

export const APP_INITIAL_STATE = {
    color: 'red',
};
const APP_CONTEXT = createContextFromState(APP_INITIAL_STATE);
export const AppContext = createContext(APP_CONTEXT);


