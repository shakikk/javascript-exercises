const getAge = function(person){
    if(!person.yearOfDeath){
        yearOfDeath = new Date().getFullYear();
        return yearOfDeath - person.yearOfBirth;
    }
    return person.yearOfDeath - person.yearOfBirth;
};

const findTheOldest = function (people) {
  const peopleOldestToYoungest = people.sort(
    (person, nextPerson) => getAge(nextPerson) - getAge(person),
  );

  return peopleOldestToYoungest[0];
};

// Do not edit below this line
module.exports = findTheOldest;
