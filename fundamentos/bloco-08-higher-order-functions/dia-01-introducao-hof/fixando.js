const wakeUp = () => 'Acordando!!';

const drinkCoffee = () => 'Bora tomar café!!';

const sleep = () => 'Partiu dormir!!';

const doingThings = (thing) => {
  console.log(thing());
};

doingThings(wakeUp);
doingThings(drinkCoffee);
doingThings(sleep);