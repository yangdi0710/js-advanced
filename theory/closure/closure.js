function createCouter(){
    let counter = 0;

    function increase(){
        return ++counter;
    }

    return increase
}