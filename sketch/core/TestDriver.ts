import lookupMinimumVersion from "./Lookup/VersionLookup.js";
import ErrorCorrectionLevel from "./ErrorCorrectionLevel.js";
import ModeIndicators from "./ModeIndicators.js";
import getCharacterCountIndicator from "./CharacterCountIndicator.js";
import BitString from "./BitString.js";

class TestDriver {
    run() {
        let data = "HELLO WORLD";
        let mode = ModeIndicators.Alphanumeric;
        let errorLevel = ErrorCorrectionLevel.Q;
        let minVersion = lookupMinimumVersion(data, mode, errorLevel);
        console.log(`Data: ${data}, Mode: ${mode}, Error Level: ${errorLevel}, Version: ${minVersion}`);

        let indicator = getCharacterCountIndicator(data, minVersion, mode);
        console.log(`Indicator: ${indicator}`);

        let paddedMode = new BitString(mode);
        paddedMode.pad(4);

        console.log("Complete bit string:", paddedMode + " " + indicator);

        console.log("TestDriver run complete");
    }
}

export default TestDriver;