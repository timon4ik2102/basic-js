module.exports = function calculateHanoi(disksNumber,turnsSpeed) {
    let object = {};
    const hour = 3600
    object.turns = 2 ** disksNumber - 1
    object.seconds = object.turns / (turnsSpeed / hour)
    return object
}