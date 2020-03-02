module.exports = function repeater(str,{ repeatTimes = 1,separator = '+',addition = '',additionRepeatTimes = 1,additionSeparator = '|' }) {
    let tempString = `${addition}^${additionSeparator}`
        .repeat(additionRepeatTimes)
        .split('^')
        .slice(0,-1)
        .join('')
    let outputString =
        `${str}${tempString}^${separator}`
            .repeat(repeatTimes)
            .split('^')
            .slice(0,-1)
            .join('')
    return outputString

};
