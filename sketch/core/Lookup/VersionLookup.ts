import ErrorCorrectionLevel from "../ErrorCorrectionLevel.js";
import ModeIndicators from "../ModeIndicators.js";
import table from "../Tables/CapacityTable.js";

const translateErrorCorrectionLevel = (errorCorrectionLevelStr: string) => {
    switch (errorCorrectionLevelStr) {
        case 'L':
            return ErrorCorrectionLevel.L;
        case 'M':
            return ErrorCorrectionLevel.M;
        case 'Q':
            return ErrorCorrectionLevel.Q;
        case 'H':
            return ErrorCorrectionLevel.H;
        default:
            throw new Error('Invalid error correction level');
    }
}

const lookupMinimumVersion = (data: string,
    mode: ModeIndicators = ModeIndicators.Numeric,
    errorLevel: ErrorCorrectionLevel = ErrorCorrectionLevel.L) => {
    const rows = table.get().filter(r => (translateErrorCorrectionLevel(r.errorCorrectionLevel) === errorLevel));
    for (let i = 0; i < rows.length; i++) {
        const row = rows[i];
        if (row.get(mode) >= data.length) {
            return row.version;
        }
    }

    throw new Error('Data too long');
}

export default lookupMinimumVersion;