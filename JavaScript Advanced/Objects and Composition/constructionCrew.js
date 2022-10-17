function solve(object){

    if(object.dizziness === false){
        return object
    }
    else{
        let requiredAmountOfWater = 0.1 * object.weight * object.experience;
        object.levelOfHydrated += requiredAmountOfWater;
        object.dizziness = false;
        return object;
    }
}
console.log(solve({ weight: 80,
    experience: 1,
    levelOfHydrated: 0,
    dizziness: true }))