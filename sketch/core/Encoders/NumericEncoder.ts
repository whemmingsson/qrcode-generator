import BitString from "../BitString.js";

const enocodeNumeric = (value: string): BitString => {
    const groups = value.match(/.{1,3}/g);
    let result = new BitString();
    groups.forEach(group => {
        result = result.addBs(new BitString(parseInt(group)))
    })
    return result;
};

export default enocodeNumeric;