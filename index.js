function wakeDog(dogName, dogBreed) {
	let final = `Wake ${dogName} the ${dogBreed}`;
	console.log(final);
	return final;
}

function leashDog(dogName, dogBreed) {
	let final = `Leash ${dogName} the ${dogBreed}`;
	console.log(final);
	return final;
}

function walkToPark(dogName, dogBreed) {
	let final = `Walk to the park with ${dogName} the ${dogBreed}`;
	console.log(final);
	return final;
}

function throwFrisbee(dogName, dogBreed) {
	let final = `Throw the frisbee for ${dogName} the ${dogBreed}`;
	console.log(final);
	return final;
}

function walkHome(dogName, dogBreed) {
	let final = `Walk home with ${dogName} the ${dogBreed}`;
	console.log(final);
	return final;
}

function unleashDog(dogName, dogBreed) {
	let final = `Unleash ${dogName} the ${dogBreed}`;
	console.log(final);
	return final;
}

let routine = [
	wakeDog,
	leashDog,
	walkToPark,
	throwFrisbee,
	walkHome,
	unleashDog
]

function exerciseDog(name, breed) {
	let array = []
	for (let i=0; i < routine.length; i++) {
		array.push(routine[i](name, breed));
	}
	return array;
}
