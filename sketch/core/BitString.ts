class BitString {
    originalData: number;
    data: string;
    constructor(data?: number | string) {
        if (data !== undefined && typeof data === 'number') {
            this.originalData = data;
            this.data = data.toString(2);
        }
        else if (data !== undefined && typeof data === 'string') {
            this.data = data;
        }
        else {
            this.data = '';
        }
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

    addBs(bitString: BitString) {
        return new BitString(this.data += bitString.data);
    }

    length() {
        return this.data.length;
    }

    toString() {
        return this.data;
    }
}

export default BitString;