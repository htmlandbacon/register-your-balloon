function makeError(text) {
return {
        errorMessage: {
            text
        }
    }
}

function checkForNames(req) {
    const errors = {general: []};
    if (req.body.firstName === '') {
        errors.firstName = makeError('Please enter your first name');
        errors.general.push(
            {
                text: 'Please enter your first name',
                href: "#firstName"
            }
        )
    }
    if (req.body.secondName === '') {
        errors.secondName = makeError('Please complete this field');
        errors.general.push(
            {
                text: 'Please complete this field',
                href: "#firstName"
            }
        )
    }
    return errors;
}


module.exports = {
    checkForNames,
}