import ModeIndicators from "./ModeIndicators.js";
import BitString from "./BitString.js";

const VersionLookup = [
    {
        [ModeIndicators.Numeric]: 10,
        [ModeIndicators.Alphanumeric]: 9,
        [ModeIndicators.Byte]: 8,
        [ModeIndicators.Kanji]: 8
    },
    {
        [ModeIndicators.Numeric]: 12,
        [ModeIndicators.Alphanumeric]: 11,
        [ModeIndicators.Byte]: 16,
        [ModeIndicators.Kanji]: 10
    },
    {
        [ModeIndicators.Numeric]: 14,
        [ModeIndicators.Alphanumeric]: 13,
        [ModeIndicators.Byte]: 16,
        [ModeIndicators.Kanji]: 12
    }
]

const getCharacterCountIndicator = (data: string, version: number, mode: ModeIndicators): BitString => {
    if (version < 1 || version > 40) {
        throw new Error('Invalid version');
    }

    let minimumBitsLength;
    if (version >= 1 && version <= 9) {
        minimumBitsLength = VersionLookup[0][mode];
    } else if (version >= 10 && version <= 26) {
        minimumBitsLength = VersionLookup[1][mode];
    } else if (version >= 27 && version <= 40) {
        minimumBitsLength = VersionLookup[2][mode];
    }

    const dataLength = new BitString(data.length);

    if (dataLength.length() > minimumBitsLength) {
        throw new Error('Data too long');
    }

    dataLength.pad(minimumBitsLength);

    return dataLength;
}

export default getCharacterCountIndicator;