class BitString {
    originalData: number;
    data: string;
    constructor(data: number) {
        this.originalData = data;
        this.data = data.toString(2);
    }

    pad(length: number) {
        const diff = length - this.data.length;
        if (diff < 0) {
            throw new Error('Data too long');
        }
        this.data = '0'.repeat(diff) + this.data;
    }

    add(bitString: BitString) {
        return this.data += bitString.data;
    }

    length() {
        return this.data.length;
    }

    toString() {
        return this.data;
    }
}

export default BitString;