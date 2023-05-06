function logOwnProerties(obj) {
    for (key in obj) {
        if (obj.hasOwnProperty(key)) {
            console.log(`obj[${key}]: ${obj[key]}`);
        }
    }
}