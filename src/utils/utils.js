const personExistsInList = (person, personList) => {
    return personList.filter(p => person.id === p.id).length > 0
}

module.exports = personExistsInList
