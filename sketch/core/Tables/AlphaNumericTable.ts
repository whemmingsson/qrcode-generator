
class Row {
    character: string;
    value: number;
    constructor(character: string, value: number) {
        this.character = character;
        this.value = value;
    }
}

class AlphaNumericTable {
    private table: Row[] = [
        new Row("0", 0),
        new Row("1", 1),
        new Row("2", 2),
        new Row("3", 3),
        new Row("4", 4),
        new Row("5", 5),
        new Row("6", 6),
        new Row("7", 7),
        new Row("8", 8),
        new Row("9", 9),
        new Row("A", 10),
        new Row("B", 11),
        new Row("C", 12),
        new Row("D", 13),
        new Row("E", 14),
        new Row("F", 15),
        new Row("G", 16),
        new Row("H", 17),
        new Row("I", 18),
        new Row("J", 19),
        new Row("K", 20),
        new Row("L", 21),
        new Row("M", 22),
        new Row("N", 23),
        new Row("O", 24),
        new Row("P", 25),
        new Row("Q", 26),
        new Row("R", 27),
        new Row("S", 28),
        new Row("T", 29),
        new Row("U", 30),
        new Row("V", 31),
        new Row("W", 32),
        new Row("X", 33),
        new Row("Y", 34),
        new Row("Z", 35),
        new Row(" ", 36),
        new Row("$", 37),
        new Row("%", 38),
        new Row("*", 39),
        new Row("+", 40),
        new Row("-", 41),
        new Row(".", 42),
        new Row("/", 43),
        new Row(":", 44)
    ];

    get() {
        return this.table;
    }
}

export default new AlphaNumericTable();