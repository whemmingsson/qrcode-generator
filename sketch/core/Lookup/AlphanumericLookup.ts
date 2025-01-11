import AlphaNumericTable from "../Tables/AlphaNumericTable.js"

const getNumericValueFromChar = (char: string): number => {
    let table = AlphaNumericTable.get();
    const idx = table.findIndex((value) => value.character === char);
    if (idx === -1) {
        throw new Error('Invalid character');
    }
    return table[idx].value;
}

export default getNumericValueFromChar;