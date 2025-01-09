// //Version, Error Correction Level, Numeric Mode, Alphanumeric Mode ,Byte Mode ,Kanji Mode
class Row {
    version: number;
    errorCorrectionLevel: string;
    numeric: number;
    alphanumeric: number;
    byte: number;
    kanji: number;
    constructor(version: number, errorCorrectionLevel: string, numeric: number, alphanumeric: number, byte: number, kanji: number) {
        this.version = version;
        this.errorCorrectionLevel = errorCorrectionLevel;
        this.numeric = numeric;
        this.alphanumeric = alphanumeric;
        this.byte = byte;
        this.kanji = kanji;
    }

    get(mode: number) {
        switch (mode) {
            case 0b0001:
                return this.numeric;
            case 0b0010:
                return this.alphanumeric;
            case 0b0100:
                return this.byte;
            case 0b1000:
                return this.kanji;
            default:
                throw new Error('Invalid mode');
        }
    }
}

class CapacityTable {
    private table: Row[] = [
        new Row(1, 'L', 41, 25, 17, 10),
        new Row(1, 'M', 34, 20, 14, 8),
        new Row(1, 'Q', 27, 16, 11, 7),
        new Row(1, 'H', 17, 10, 7, 4),
        new Row(2, 'L', 77, 47, 32, 20),
        new Row(2, 'M', 63, 38, 26, 16),
        new Row(2, 'Q', 48, 29, 20, 12),
        new Row(2, 'H', 34, 20, 14, 8),
        new Row(3, 'L', 127, 77, 53, 32),
        new Row(3, 'M', 101, 61, 42, 26),
        new Row(3, 'Q', 77, 47, 32, 20),
        new Row(3, 'H', 58, 35, 24, 15),
        new Row(4, 'L', 187, 114, 78, 48),
        new Row(4, 'M', 149, 90, 62, 38),
        new Row(4, 'Q', 111, 67, 46, 28),
        new Row(4, 'H', 82, 50, 34, 21),
        new Row(5, 'L', 255, 154, 106, 65),
        new Row(5, 'M', 202, 122, 84, 52),
        new Row(5, 'Q', 144, 87, 60, 37),
        new Row(5, 'H', 106, 64, 44, 27),
        new Row(6, 'L', 322, 195, 134, 82),
        new Row(6, 'M', 255, 154, 106, 65),
        new Row(6, 'Q', 178, 108, 74, 45),
        new Row(6, 'H', 139, 84, 58, 36),
        new Row(7, 'L', 370, 224, 154, 95),
        new Row(7, 'M', 293, 178, 122, 75),
        new Row(7, 'Q', 207, 125, 86, 53),
        new Row(7, 'H', 154, 93, 64, 39),
        new Row(8, 'L', 461, 279, 192, 118),
        new Row(8, 'M', 365, 221, 152, 93),
        new Row(8, 'Q', 259, 157, 108, 66),
        new Row(8, 'H', 202, 122, 84, 52),
        new Row(9, 'L', 552, 335, 230, 141),
        new Row(9, 'M', 432, 262, 180, 111),
        new Row(9, 'Q', 312, 189, 130, 80),
        new Row(9, 'H', 235, 143, 98, 60),
        new Row(10, 'L', 652, 395, 271, 167),
        new Row(10, 'M', 513, 311, 213, 131),
        new Row(10, 'Q', 364, 221, 151, 93),
        new Row(10, 'H', 288, 174, 119, 74),
        new Row(11, 'L', 772, 468, 321, 198),
        new Row(11, 'M', 604, 366, 251, 155),
        new Row(11, 'Q', 427, 259, 177, 109),
        new Row(11, 'H', 331, 200, 137, 85),
        new Row(12, 'L', 883, 535, 367, 226),
        new Row(12, 'M', 691, 419, 287, 177),
        new Row(12, 'Q', 489, 296, 203, 125),
        new Row(12, 'H', 374, 227, 155, 96),
        new Row(13, 'L', 1022, 619, 425, 262),
        new Row(13, 'M', 796, 483, 331, 204),
        new Row(13, 'Q', 580, 352, 241, 149),
        new Row(13, 'H', 427, 259, 177, 109),
        new Row(14, 'L', 1101, 667, 458, 282),
        new Row(14, 'M', 871, 528, 362, 223),
        new Row(14, 'Q', 621, 376, 258, 159),
        new Row(14, 'H', 468, 283, 194, 120),
        new Row(15, 'L', 1250, 758, 520, 320),
        new Row(15, 'M', 991, 600, 412, 254),
        new Row(15, 'Q', 703, 426, 292, 180),
        new Row(15, 'H', 530, 321, 220, 136),
        new Row(16, 'L', 1408, 854, 586, 361),
        new Row(16, 'M', 1082, 656, 450, 277),
        new Row(16, 'Q', 775, 470, 322, 198),
        new Row(16, 'H', 602, 365, 250, 154),
        new Row(17, 'L', 1548, 938, 644, 397),
        new Row(17, 'M', 1212, 734, 504, 310),
        new Row(17, 'Q', 876, 531, 364, 224),
        new Row(17, 'H', 674, 408, 280, 173),
        new Row(18, 'L', 1725, 1046, 718, 442),
        new Row(18, 'M', 1346, 816, 560, 345),
        new Row(18, 'Q', 948, 574, 394, 243),
        new Row(18, 'H', 746, 452, 310, 191),
        new Row(19, 'L', 1903, 1153, 792, 488),
        new Row(19, 'M', 1500, 909, 624, 384),
        new Row(19, 'Q', 1063, 644, 442, 272),
        new Row(19, 'H', 813, 493, 338, 208),
        new Row(20, 'L', 2061, 1249, 858, 528),
        new Row(20, 'M', 1600, 970, 666, 410),
        new Row(20, 'Q', 1159, 702, 482, 297),
        new Row(20, 'H', 919, 557, 382, 235),
        new Row(21, 'L', 2232, 1352, 929, 572),
        new Row(21, 'M', 1708, 1035, 711, 438),
        new Row(21, 'Q', 1224, 742, 509, 314),
        new Row(21, 'H', 969, 587, 403, 248),
        new Row(22, 'L', 2409, 1460, 1003, 618),
        new Row(22, 'M', 1872, 1134, 779, 480),
        new Row(22, 'Q', 1358, 823, 565, 348),
        new Row(22, 'H', 1056, 640, 439, 270),
        new Row(23, 'L', 2620, 1588, 1091, 672),
        new Row(23, 'M', 2059, 1248, 857, 528),
        new Row(23, 'Q', 1468, 890, 611, 376),
        new Row(23, 'H', 1108, 672, 461, 284),
        new Row(24, 'L', 2812, 1704, 1171, 721),
        new Row(24, 'M', 2188, 1326, 911, 561),
        new Row(24, 'Q', 1588, 963, 661, 407),
        new Row(24, 'H', 1228, 744, 511, 315),
        new Row(25, 'L', 3057, 1853, 1273, 784),
        new Row(25, 'M', 2395, 1451, 997, 614),
        new Row(25, 'Q', 1718, 1041, 715, 440),
        new Row(25, 'H', 1286, 779, 535, 330),
        new Row(26, 'L', 3283, 1990, 1367, 842),
        new Row(26, 'M', 2544, 1542, 1059, 652),
        new Row(26, 'Q', 1804, 1094, 751, 462),
        new Row(26, 'H', 1425, 864, 593, 365),
        new Row(27, 'L', 3517, 2132, 1465, 902),
        new Row(27, 'M', 2701, 1637, 1125, 692),
        new Row(27, 'Q', 1933, 1172, 805, 496),
        new Row(27, 'H', 1501, 910, 625, 385),
        new Row(28, 'L', 3669, 2223, 1528, 940),
        new Row(28, 'M', 2857, 1732, 1190, 732),
        new Row(28, 'Q', 2085, 1263, 868, 534),
        new Row(28, 'H', 1581, 958, 658, 405),
        new Row(29, 'L', 3909, 2369, 1628, 1002),
        new Row(29, 'M', 3035, 1839, 1264, 778),
        new Row(29, 'Q', 2181, 1322, 908, 559),
        new Row(29, 'H', 1677, 1016, 698, 430),
        new Row(30, 'L', 4158, 2520, 1732, 1066),
        new Row(30, 'M', 3289, 1994, 1370, 843),
        new Row(30, 'Q', 2358, 1429, 982, 604),
        new Row(30, 'H', 1782, 1080, 742, 457),
        new Row(31, 'L', 4417, 2677, 1840, 1132),
        new Row(31, 'M', 3486, 2113, 1452, 894),
        new Row(31, 'Q', 2473, 1499, 1030, 634),
        new Row(31, 'H', 1897, 1150, 790, 486),
        new Row(32, 'L', 4686, 2840, 1952, 1201),
        new Row(32, 'M', 3693, 2238, 1538, 947),
        new Row(32, 'Q', 2670, 1618, 1112, 684),
        new Row(32, 'H', 2022, 1226, 842, 518),
        new Row(33, 'L', 4965, 3009, 2068, 1273),
        new Row(33, 'M', 3909, 2369, 1628, 1002),
        new Row(33, 'Q', 2805, 1700, 1168, 719),
        new Row(33, 'H', 2157, 1307, 898, 553),
        new Row(34, 'L', 5253, 3183, 2188, 1347),
        new Row(34, 'M', 4134, 2506, 1722, 1060),
        new Row(34, 'Q', 2949, 1787, 1228, 756),
        new Row(34, 'H', 2301, 1394, 958, 590),
        new Row(35, 'L', 5529, 3351, 2303, 1417),
        new Row(35, 'M', 4343, 2632, 1809, 1113),
        new Row(35, 'Q', 3081, 1867, 1283, 790),
        new Row(35, 'H', 2361, 1431, 983, 605),
        new Row(36, 'L', 5836, 3537, 2431, 1496),
        new Row(36, 'M', 4588, 2780, 1911, 1176),
        new Row(36, 'Q', 3244, 1966, 1351, 832),
        new Row(36, 'H', 2524, 1530, 1051, 647),
        new Row(37, 'L', 6153, 3729, 2563, 1577),
        new Row(37, 'M', 4775, 2894, 1989, 1224),
        new Row(37, 'Q', 3417, 2071, 1423, 876),
        new Row(37, 'H', 2625, 1591, 1093, 673),
        new Row(38, 'L', 6479, 3927, 2699, 1661),
        new Row(38, 'M', 5039, 3054, 2099, 1292),
        new Row(38, 'Q', 3599, 2181, 1499, 923),
        new Row(38, 'H', 2735, 1658, 1139, 701),
        new Row(39, 'L', 6743, 4087, 2809, 1729),
        new Row(39, 'M', 5313, 3220, 2213, 1362),
        new Row(39, 'Q', 3791, 2298, 1579, 972),
        new Row(39, 'H', 2927, 1774, 1219, 750),
        new Row(40, 'L', 7089, 4296, 2953, 1817),
        new Row(40, 'M', 5596, 3391, 2331, 1435),
        new Row(40, 'Q', 3993, 2420, 1663, 1024),
        new Row(40, 'H', 3057, 1852, 1273, 784),
    ];

    get() {
        return this.table;
    }
}

export default new CapacityTable();
