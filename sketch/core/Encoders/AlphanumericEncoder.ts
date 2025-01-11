import BitString from "../BitString.js";
import getNumericValueFromChar from "../Lookup/AlphanumericLookup.js";

const enocodeAlphaNumeric = (value: string): BitString => {
    const groups = value.match(/.{1,2}/g);

    let result = new BitString();
    groups.forEach(group => {
        const [left, right] = group.split('');
        if (right && left) {
            const leftValue = getNumericValueFromChar(left);
            const rightValue = getNumericValueFromChar(right);
            const combined = leftValue * 45 + rightValue;
            const bs = new BitString(combined);
            bs.pad(11);
            console.log(`Encoded ${group} to ${bs}`);
        }
        else if (group.length === 1) {
            const leftValue = getNumericValueFromChar(group);
            const bs = new BitString(leftValue);
            bs.pad(6);
            console.log(`Encoded ${group} to ${bs}`);
        }

    })
    return result;
};

export default enocodeAlphaNumeric;