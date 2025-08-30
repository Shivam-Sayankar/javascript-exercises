const findTheOldest = function (people) {
    return people.reduce((oldest, currentPerson) => {
        function getAge(person) {
            if ("yearOfDeath" in person === false) {
                return (new Date().getFullYear()) - person.yearOfBirth;
            }
            return person.yearOfDeath - person.yearOfBirth;
        }

        return getAge(currentPerson) > getAge(oldest) ? currentPerson : oldest
    })
};

// Do not edit below this line
module.exports = findTheOldest;
