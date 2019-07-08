import React from 'react'
import io from 'socket.io-client'
export const CTX = React.createContext();

const initState = {
    news: [
        {from: 'User1', msg: 'The news is very interesting. '},
        {from: 'User2', msg: 'I agree.'},
        {from: 'User3', msg: 'Me too'}
    ],
    sports: [
        {from: 'User1', msg: 'I can\'t believe they lost last night'},
        {from: 'User2', msg: 'Me neither'},
        {from: 'User3', msg: 'I knew they were going to lose'}

    ]

}

function reducer(state, action) {
    const {from, msg, topic} = action.payload;

    switch(action.type){
        case 'RECEIVE_MESSAGE':
            return {
                ...state,
                [topic]: [
                    ...state[topic],
                    {from, msg
                }
                ]
                
            }
            
        default:
            return state
        }
    }



let socket;

function sendChatAction(value) {
    socket.emit('chat message', value);
}

export default function Store(props) {


    const [allChats,dispatch] = React.useReducer(reducer, initState)

    if (!socket){
        socket = io(':3001')
        socket.on('chat message', function(msg){
            dispatch({type: 'RECEIVE_MESSAGE', payload: msg})
          });
    }


    const user = 'hello' + Math.random(100).toFixed(2)

    

    return (
        <CTX.Provider value={[allChats, sendChatAction, user]}>
            {props.children}
        </CTX.Provider>
    )
}