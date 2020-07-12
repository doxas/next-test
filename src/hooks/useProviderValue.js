import {useCallback} from 'react';
import EventEmitter3 from 'eventemitter3';

export const emitter = new EventEmitter3();
console.log('👾')

export const useProviderValue = (eventName, [state, updator]) => {
    const hook = useCallback((result) => {
        if(state !== result){
            emitter.emit(eventName, result);
        }
        updator(result);
    }, [emitter, state, updator]);
    return [state, hook];
};

