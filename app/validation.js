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

function checkForAddess(req) {
    const errors = {general: []};
    if (req.body['address-line-1'] === '') {
        errors['address-line-1'] = makeError('Enter the building and street');
        errors.general.push(
            {
                text: 'Enter the building and street',
                href: "#address-line1"
            }
        )
    }
    if (req.body['address-town'] === '') {
        errors['address-town'] = makeError('Enter the town or city');
        errors.general.push(
            {
                text: 'Enter the town or city',
                href: "#address-county"
            }
        )
    }
    if (req.body['address-county'] === '') {
        errors['address-county'] = makeError('Enter the county');
        errors.general.push(
            {
                text: 'Enter the county',
                href: "#address-county"
            }
        )
    }
    if (req.body['address-postcode'] === '') {
        errors['address-postcode'] = makeError('Enter the postcode');
        errors.general.push(
            {
                text: 'Enter the postcode',
                href: "#address-postcode"
            }
        )
    }
    if (req.body['letters-address'] !== 'yes' && req.body['letters-address'] !== 'no') {
        errors['letters-address'] = makeError('Select yes if you want letters sent to a different address');
        errors.general.push(
            {
                text: 'Select yes if you want letters sent to a different address',
                href: "#letters-address"
            }
        )
    }
    return errors;
}


module.exports = {
    checkForNames,
    checkForAddess,
}