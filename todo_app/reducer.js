const init = {
    todos: [
        {
            title: 'Learning JavaScript',
            completed: true
        },
        {
            title: 'Learning React',
            completed: false
        }
    ]
}

export default function reducer(state = init, action, args){
    switch(action){
        default:
            return state
    }
}