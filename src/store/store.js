import {createContext} from 'react';

/**
 * initial state のプロパティ名に set を付与した updator を定義する
 * @param {object} state - XXX_INITIAL_STATE
 * @return {object} createContext に与えるためのオブジェクト
 */
const createContextFromState = (state) => {
    const context = {};
    Object.entries(state).forEach(([key, value]) => {
        const updator = `${key.substring(0, 1).toUpperCase()}${key.substring(1)}`;
        context[key] = value;
        context[`set${updator}`] = () => {};
    });
    return context;
};

/**
 * App のメインステート
 * @type {object}
 */
export const APP_INITIAL_STATE = {
    /** TEMP: 色 */
    color: 'red',
};
/**
 * updator を付与した状態のコンテキスト・リソース
 * @type {object}
 */
const APP_CONTEXT = createContextFromState(APP_INITIAL_STATE);
/**
 * Consumer コンポーネントが参照するコンテキスト・オブジェクト
 * @type {object}
 */
export const AppContext = createContext(APP_CONTEXT);

