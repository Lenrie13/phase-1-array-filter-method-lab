// Code your solution here
// Matching list of drivers
const findMatching = (drivers, name) => {
    return drivers.filter(driver => driver.toLowerCase() === name.toLowerCase());
}
// Finding drivers whose names start with the given letters
const fuzzyMatch = (drivers, letters) => {
    return drivers.filter(driver => driver.startsWith(letters));
}
// Matching driver objects by name property
const matchName = (drivers, name) => {
    return drivers.filter(driver => driver.name === name);
}
