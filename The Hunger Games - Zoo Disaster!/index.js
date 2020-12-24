const whoEatsWho = function (zoo) {
    let animals = {
        antelope: ['grass'],
        bigfish: ['little-fish'],
        bug: ['leaves'],
        chicken: ['bug'],
        cow: ['grass'],
        fox: ['sheep', 'chicken'],
        giraffe: ['leaves'],
        lion: ['cow', 'antelope'],
        panda: ['leaves'],
        sheep: ['grass'],
        bear: ['big-fish', 'bug', 'chicken', 'cow', 'leaves', 'sheep']
    }

    function canEat(elem) {
        return animals[elem];
    }

    const res = [zoo];
    let zooCopy = zoo.split(',');
    res.push(eating(zooCopy));

    function eating(zoo) {
        let animalInArr = 0;
        if(zoo.length < 2) return zoo;
        zoo.forEach(e => {
            if(animals[e]){
                animalInArr++;
            }
        })
        if(animalInArr === 1) return zoo;

        let eated;

        for (let i = 0; i < zoo.length; i++) {
            let elem = zoo[i];

            if (canEat(elem)) {
                const list = animals[elem];
                let prev, next;
                if ((i - 1) >= 0) { prev = zoo[i - 1];}
                if ((i + 1) <= list.length) { next = zoo[i + 1];}
                if (prev) {
                    if (list[prev]) {
                        console.log(1);
                        eated = (i - 1);
                        res.push(`${elem} eats ${zoo[eated]}`);
                        break;
                    }
                }
                if (next) {
                    if (list[next]) {
                        eated = (i + 1);
                        res.push(`${elem} eats ${zoo[eated]}`);
                        break;
                    }
                }
            }
        }

        zoo = zoo.splice(eated, 1);

        eating(zoo);
    }

    return res;
}


var input = "fox,bug,chicken,grass,sheep";

whoEatsWho(input);

// var expected = 	[
//   "fox,bug,chicken,grass,sheep", 
//   "chicken eats bug", 
//   "fox eats chicken", 
//   "sheep eats grass", 
//   "fox eats sheep", 
//   "fox"
//   ];
