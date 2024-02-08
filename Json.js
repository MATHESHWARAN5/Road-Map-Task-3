function compareJSON(obj1, obj2) {
    const stringifyAndSort = (obj) => JSON.stringify(obj, Object.keys(obj).sort());

    return stringifyAndSort(obj1) === stringifyAndSort(obj2);
}

const obj1 = { name: 'Person 1', age: 51 };
const obj2 = { age: 51, name: 'Person 1' };

if (compareJSON(obj1, obj2)) {
    console.log('The two JSON objects are equal.');
} else {
    console.log('The two JSON objects are not equal.');
}
