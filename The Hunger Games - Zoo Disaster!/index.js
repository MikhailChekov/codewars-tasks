const whoEatsWho = function (zoo) {
    let result = [zoo];
    let eatList = {
        antelope: ['grass'],
        'big-fish': ['little-fish'],
        bug: ['leaves'],
        chicken: ['bug'],
        cow: ['grass'],
        fox: ['sheep', 'chicken'],
        giraffe: ['leaves'],
        lion: ['cow', 'antelope'],
        panda: ['leaves'],
        sheep: ['grass'],
        bear: ['big-fish', 'bug', 'chicken','cow', 'leaves', 'sheep']
    }

    recursion(zoo.split(','));

    function canEatSiblings(zoo) {
        for(let i = 0; i < zoo.length; i++){
            let prev = zoo[i - 1]; let next = zoo[i + 1];
            let animal = zoo[i];

            if(next && eatList[animal] || prev && eatList[animal]){
                if(eatList[animal].includes(next) || eatList[animal].includes(prev)) {
                    return true;
                };
            }
        }
        return false;
    }

    function recursion (list){
        if(list.length === 1 || !canEatSiblings(list)){
            result = result.concat(list.join(','));
            return;
        }
        let isAteInd = '';

        for(let i = 0; i < list.length; i++){
            let animal = list[i]; let prev = list[i - 1]; let next = list[i + 1];
            
            if(prev && eatList[animal]){
                if(eatList[animal].includes(prev)) {
                    isAteInd = i - 1;
                    result.push(`${animal} eats ${list[isAteInd]}`);
                    break;
                }
            }
            if(next && eatList[animal]){
                if(eatList[animal].includes(next)) {
                    isAteInd = i + 1;
                    result.push(`${animal} eats ${list[isAteInd]}`);
                    break;
                }
            }
        }

        list.splice(isAteInd, 1);
        recursion(list);
    }
    return result;
}

console.log(whoEatsWho('bear,grass,grass,grass,grass,sheep,bug,chicken,little-fish,little-fish,little-fish,little-fish,big-fish,big-fish,big-fish'));