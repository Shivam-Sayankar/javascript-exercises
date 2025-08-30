const findTheOldest = function (people) {
    return people.sort((a, b) => {
        function getAge(person) {
            if ("yearOfDeath" in person === false) {
                return (new Date().getFullYear()) - person.yearOfBirth;
            }
            return person.yearOfDeath - person.yearOfBirth;
        }

        return getAge(b) - getAge(a);
    })[0]
};

// Do not edit below this line
module.exports = findTheOldest;
