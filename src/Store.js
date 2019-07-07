import React from 'react'

const CTX = React.createContext();

const initState = {
    general: [
        {from: 'a', msg: 'hello'},
        {from: 'a', msg: 'hello'},
        {from: 'a', msg: 'hello'}
    ],
    topic2: [
        {from: 'a', msg: 'hello'},
        {from: 'a', msg: 'hello'},
        {from: 'a', msg: 'hello'}

    ]

}

function reducer(state, action) {
    const {from, msg, topic} = action.payload;

    switch(action.type){
        case 'RECEIVE_MESSAGE':
            return {
                ...state,
                [action,payload,topic]: [
                    ...state[action.payload.topic],
                ]
                {
                    from, msg

                }
            }
        default:
            return state
    }


}

export default function Store() {

    const reducerHook = React.useReducer(reducer, initialState)

    return (
        <CTX.Provider value={reducerHook}>
            {props.children}
        </CTX.Provider>
    )
}