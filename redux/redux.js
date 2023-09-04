import { createStore } from 'https://cdn.skypack.dev/redux';
////////////////////////////////////////////////////////////////

// Redux, React, Redux-react

// My app
// function createStore(reducer){
//     let state = reducer(undefined, {})
//     const subscribers = []
//     return {
//         getState(){
//             return state
//         },
//         dispatch(action){
//             state = reducer(state, action)

//             subscribers.forEach(subscriber => subscriber())
//         },
//         subscribe(subscriber){
//             subscribers.push(subscriber)
//         }
//     }
// }

const initState = 0

//Reducer
function bankReducer(state = initState, action) {
    switch (action.type){
        case 'DEPOSIT':
            return state + action.payload
        case 'WITHDRAW':
            return state - action.payload
        default:
            return state
    }
}

// Store
const store = window.store = createStore(bankReducer)

// Action
function actionDeposit(payload){
    return {
        type: 'DEPOSIT',
        payload
    }
}

function actionWithdraw(payload){
    return {
        type: 'WITHDRAW',
        payload
    }
}

// DOM events
const depositBtn = document.querySelector('#deposit')
const withdrawBtn = document.querySelector('#withdraw')

// Event handler
depositBtn.onclick = function(){
    store.dispatch(actionDeposit(10))
}

withdrawBtn.onclick = function(){
    store.dispatch(actionWithdraw(10))
}

// Listener
store.subscribe(() => {
    render()
})

// Render
function render(){
    const output = document.querySelector('#output')
    output.innerText = store.getState()
}

render()