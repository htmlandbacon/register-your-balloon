function makeError(text) {
return {
        errorMessage: {
            text
        }
    }
}

function checkBalloonMore(req) {
    const errors = {general: []}; 
    let item = 0;
    req.body.person.forEach(person => {
        if (person['first_name'] === '') {
            if (errors['first_name'] === undefined) {
                errors['first_name'] = [];
            }
                errors['first_name'][item] = makeError('Enter your first name');
                errors.general.push(
                    {
                        text: 'Enter your first name',
                        href: "#person[" + item + "][first_name]"
                    }
                )
            }
            if (person['last_name'] === '') {
                if (errors['last_name'] === undefined) {
                    errors['last_name'] = [];
                }
                    errors['last_name'][item] = makeError('Enter your last name');
                    errors.general.push(
                        {
                            text: 'Enter your last name',
                            href: "#person[" + item + "][last_name]"
                        }
                    )
                }
            item ++;
        });
    return errors;
}

function checkForBalloon(req) {
    const errors = {general: []};
    if (req.body['balloon-reference'] === '') {
        errors['balloon-reference'] = makeError('Enter your balloon reference number');
        errors.general.push(
            {
                text: 'Enter your balloon reference number',
                href: "#balloon-reference"
            }
        )
    } else if (req.body['balloon-reference'].length > 14) {
        errors['balloon-reference'] = makeError('Your balloon reference has too many charcaters');
        errors.general.push(
            {
                text: 'Your balloon reference has too many charcaters',
                href: "#balloon-reference"
            }
        )
    }  else if (req.body['balloon-reference'].indexOf(' ') !== -1) {
        errors['balloon-reference'] = makeError('Your balloon reference number can\'t contain spaces');
        errors.general.push(
            {
                text: 'Your balloon refference number can\'t contain spaces',
                href: "#balloon-reference"
            }
        )
    }  else if (!req.body['balloon-reference'].startsWith('95')) {
        errors['balloon-reference'] = makeError('Your balloon reference number must start with 95');
        errors.general.push(
            {
                text: 'Your balloon reference number must start with 95',
                href: "#balloon-reference"
            }
        )
    }   
    return errors;
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
    if (req.body['changed-name'] !== 'yes' && req.body['changed-name'] !== 'no') {
        errors['changed-name'] = makeError('Select an answer');
        errors.general.push(
            {
                text: 'Select an answer',
                href: "#changed-name"
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
    checkForBalloon,
    checkBalloonMore,
}