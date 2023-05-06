function createObjWithoutPrototype() {
    return Object.create(null);
}

obj = new createObjWithoutPrototype();

console.log(obj);