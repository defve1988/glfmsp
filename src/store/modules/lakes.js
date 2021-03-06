// set and change apis for different pages

const state = {
    LS: "M3665 7103 c-132 -29 -202 -35 -350 -29 -82 3 -163 8 -180 12 -42 8" +
        " -105 -23 -105 -51 0 -14 -10 -26 -27 -34 -16 -7 -59 -33 -97 -59 -51 -35 -74" +
        " -59 -92 -94 -20 -39 -35 -53 -82 -77 -31 -16 -75 -48 -97 -70 -34 -36 -44 -41" +
        " -85 -41 -25 0 -62 -5 -83 -11 -22 -6 -41 -9 -43 -6 -5 4 54 138 87 200 11 21" +
        " 17 42 14 47 -3 5 -30 -2 -63 -16 -31 -14 -88 -37 -127 -51 -94 -32 -109 -51" +
        " -102 -128 4 -46 2 -65 -12 -85 -10 -14 -28 -53 -40 -87 -15 -40 -36 -73 -59" +
        " -95 -101 -91 -160 -134 -279 -201 -102 -59 -166 -86 -304 -132 l-174 -58 -172" +
        " -124 c-157 -114 -184 -138 -319 -288 -166 -184 -297 -304 -453 -416 -82 -58" +
        " -107 -81 -109 -101 -4 -36 47 -78 97 -78 50 0 253 69 510 175 197 80 215 86" +
        " 238 74 14 -8 28 -19 30 -26 3 -7 -18 -76 -47 -154 -28 -78 -50 -147 -48 -155" +
        " 2 -10 19 -5 65 18 l62 30 73 -30 c121 -49 128 -49 269 9 105 43 133 60 184" +
        " 108 89 85 95 87 240 101 123 11 133 14 185 47 30 20 70 53 88 75 30 34 38 38" +
        " 81 38 52 0 66 10 96 70 10 19 23 38 29 42 86 54 247 177 263 203 12 18 55 53" +
        " 95 78 l73 46 143 12 143 12 24 -23 c14 -13 25 -30 25 -37 0 -15 1 -15 -81 -37" +
        " -41 -12 -83 -36 -157 -93 -95 -73 -106 -86 -173 -193 -72 -116 -105 -203 -95" +
        " -247 4 -12 12 -23 19 -23 6 0 43 25 81 55 68 54 86 64 86 46 0 -6 42 -8 103" +
        " -5 102 4 102 4 177 -33 l74 -38 95 -156 95 -156 85 -6 c75 -6 89 -4 124 16" +
        " l39 22 40 -48 c22 -26 45 -47 50 -47 5 0 23 10 40 21 l29 21 41 -33 42 -33 65" +
        " 71 c53 57 86 82 163 123 71 37 102 49 113 42 11 -5 36 -4 68 5 36 10 101 13" +
        " 207 12 l155 -2 90 40 c69 31 108 43 167 48 43 4 82 4 88 0 7 -4 2 -18 -14 -40" +
        " -22 -29 -26 -44 -26 -105 0 -39 -5 -80 -11 -91 -15 -30 7 -52 44 -45 18 4 42" +
        " -1 69 -15 41 -21 42 -21 101 -3 64 19 61 21 93 -32 9 -16 14 -15 57 15 26 17" +
        " 47 35 47 38 0 4 -5 2 -12 -5 -7 -7 -29 -12 -49 -12 -36 0 -36 1 -47 53 -10 51" +
        " -10 53 24 94 19 23 43 44 53 48 26 8 22 80 -5 80 -12 0 -20 -8 -22 -22 -2 -12" +
        " -10 -27 -17 -33 -22 -18 -28 7 -18 76 7 53 11 58 38 65 21 6 34 4 46 -7 15" +
        " -13 18 -12 33 10 9 14 16 30 16 36 0 6 -25 23 -55 37 -59 26 -105 25 -105 -2" +
        " 0 -22 -6 -19 -65 27 -59 46 -61 54 -28 125 8 17 12 41 8 53 -5 15 6 40 39 90" +
        " 54 81 55 117 5 127 -23 4 -29 11 -29 32 0 35 -2 37 -111 118 -52 40 -101 78" +
        " -107 86 -9 11 -5 26 20 72 24 45 32 73 34 124 3 61 5 67 40 96 24 21 35 37 33" +
        " 50 -4 19 -14 20 -148 23 -115 2 -153 -1 -187 -14 -34 -13 -66 -16 -146 -12" +
        " -102 5 -104 5 -180 52 -69 42 -81 54 -122 124 -53 91 -133 273 -186 427 -89" +
        " 252 -102 268 -164 201 -34 -37 -42 -41 -64 -28 -10 7 -10 15 -2 37 18 48 -25" +
        " 59 -103 26 l-45 -19 -33 22 c-32 21 -37 22 -94 9z m-970 -640 c-62 -97 -67" +
        " -101 -159 -135 -72 -27 -95 -40 -120 -72 -64 -81 -93 -106 -123 -106 -36 0" +
        " -53 16 -53 51 0 36 32 68 121 120 123 72 313 168 333 169 18 0 18 -1 1 -27z",
    LM: "M4651 4411 c-47 -64 -62 -71 -156 -71 -42 0 -55 -4 -66 -21 l-14 -20" +
        " -47 21 c-92 40 -218 -1 -218 -72 0 -17 -20 -42 -69 -86 -38 -34 -74 -62 -80" +
        " -62 -5 0 -19 -20 -30 -45 -21 -47 -29 -53 -49 -33 -21 21 -13 57 25 113 20 31" +
        " 34 57 32 59 -2 3 -30 6 -62 8 l-57 3 -45 -52 c-46 -52 -53 -56 -148 -68 -44" +
        " -6 -50 -10 -89 -68 -23 -34 -54 -92 -69 -129 -15 -36 -65 -122 -110 -190 -92" +
        " -137 -108 -172 -109 -240 l0 -47 -49 -15 c-71 -21 -91 -36 -91 -70 0 -19 -17" +
        " -52 -50 -96 -27 -37 -50 -76 -50 -86 0 -11 -9 -43 -20 -71 -19 -52 -19 -53 -1" +
        " -63 32 -17 57 -11 72 16 7 15 34 36 58 48 39 18 51 32 90 106 40 73 50 85 78" +
        " 91 48 10 100 54 122 104 11 25 31 60 46 78 14 19 32 55 41 81 12 36 20 45 33" +
        " 41 11 -3 22 6 36 31 21 40 79 94 99 94 27 0 27 -43 0 -72 -18 -18 -28 -42 -31" +
        " -73 -4 -31 -12 -49 -24 -56 -26 -13 -59 -81 -59 -119 0 -39 -13 -64 -60 -116" +
        " -21 -22 -43 -58 -50 -80 -7 -21 -30 -73 -51 -115 -53 -108 -83 -241 -76 -341" +
        " l6 -77 -43 -38 c-39 -34 -47 -48 -71 -130 -24 -84 -26 -102 -20 -195 6 -97 5" +
        " -107 -19 -161 -14 -31 -29 -76 -32 -100 -4 -23 -17 -62 -29 -87 -31 -63 -38" +
        " -162 -19 -279 8 -53 19 -128 23 -167 6 -48 16 -81 30 -101 19 -25 21 -35 12" +
        " -74 -5 -24 -12 -78 -15 -119 -4 -41 -11 -115 -18 -165 -10 -87 -10 -93 16" +
        " -164 14 -40 39 -92 55 -115 20 -28 35 -71 50 -139 37 -179 110 -276 213 -284" +
        " 45 -4 69 2 153 37 117 48 156 72 247 153 61 55 70 69 106 157 22 54 58 123 81" +
        " 153 65 88 97 186 122 370 22 158 22 161 5 316 -17 151 -20 162 -86 331 -37 96" +
        " -77 209 -89 250 l-21 75 36 59 c36 56 37 61 31 131 -3 41 -15 94 -27 124 l-22" +
        " 51 40 53 c105 140 147 277 140 460 l-3 91 47 15 c52 16 63 33 59 88 -5 60 6" +
        " 72 102 117 l92 43 60 96 c56 89 76 110 89 89 3 -5 -8 -53 -25 -108 -26 -89" +
        " -29 -108 -23 -185 6 -87 6 -87 36 -93 44 -9 42 -10 67 34 49 88 64 149 70 292" +
        " 6 132 7 138 33 165 31 32 143 73 200 73 22 0 41 7 52 19 17 19 16 20 -33 45" +
        " -41 21 -52 32 -60 63 -20 70 -10 100 47 148 19 16 32 36 32 51 0 24 0 24 123" +
        " 55 46 11 47 12 47 51 0 23 -4 37 -10 33 -17 -10 -71 25 -144 94 -64 60 -81 71" +
        " -174 104 -64 23 -121 37 -151 37 -47 0 -48 -1 -90 -59z",
    LH: "M5510 4860 c-37 -10 -54 -18 -40 -19 22 -1 29 -13 69 -117 47 -122" +
        " 47 -117 -1 -144 -32 -19 -10 -40 41 -40 59 0 114 -38 92 -63 -11 -14 -9 -22" +
        " 14 -51 15 -20 39 -37 56 -41 22 -5 29 -12 29 -31 0 -28 14 -28 -200 1 -70 9" +
        " -110 10 -148 3 -51 -10 -53 -10 -99 26 -26 20 -54 35 -63 34 -15 -3 -31 -77" +
        " -45 -203 l-6 -50 93 -63 c87 -61 94 -63 135 -57 85 13 168 -43 188 -127 6 -22" +
        " 15 -28 53 -37 79 -17 207 -66 267 -102 92 -56 139 -106 178 -190 l35 -76 -34" +
        " -17 c-41 -19 -52 -45 -46 -104 3 -35 11 -48 42 -73 35 -28 39 -37 50 -107 10" +
        " -67 9 -95 -10 -217 -30 -203 -26 -191 -75 -219 -52 -31 -81 -74 -95 -144 -20" +
        " -92 -89 -163 -170 -176 -31 -5 -41 -12 -56 -43 -24 -50 -27 -201 -4 -228 21" +
        " -26 101 -75 121 -75 55 0 222 178 257 274 17 44 20 47 141 106 l124 61 47 -16" +
        " c26 -8 59 -28 73 -43 33 -34 107 -202 107 -243 0 -82 72 -541 98 -623 19 -61" +
        " 30 -83 34 -70 4 15 20 23 64 33 32 7 72 21 87 30 26 15 107 122 107 142 0 5 6" +
        " 6 14 3 39 -15 167 83 187 143 8 25 10 89 5 222 -4 102 -7 231 -8 286 -1 55 -5" +
        " 108 -10 118 -7 14 0 31 32 73 43 58 60 98 60 147 0 35 62 115 96 123 16 4 38" +
        " 33 73 97 l51 91 -6 80 c-7 78 -37 164 -64 181 -7 4 -7 12 0 25 18 33 10 54" +
        " -33 85 -23 17 -57 55 -75 85 -24 42 -43 60 -75 74 -48 22 -60 35 -45 53 7 9 4" +
        " 20 -11 39 -29 37 -14 52 18 16 33 -37 106 -55 203 -50 78 3 94 -8 62 -43 -19" +
        " -21 -17 -35 16 -129 21 -60 26 -65 68 -80 30 -10 44 -22 51 -42 13 -36 27 -36" +
        " 35 2 4 24 11 30 30 30 31 0 40 -14 21 -30 -8 -7 -15 -24 -15 -39 0 -19 -14" +
        " -41 -45 -71 -55 -54 -62 -87 -8 -40 31 28 42 31 76 27 58 -8 62 -19 37 -105" +
        " -7 -22 -10 -48 -6 -57 5 -14 16 -7 60 39 41 43 61 56 83 56 36 0 53 -16 53" +
        " -50 0 -34 38 -70 115 -108 82 -40 221 -85 243 -78 24 8 49 52 62 111 14 64 0" +
        " 100 -51 126 -58 29 -53 46 25 97 57 37 59 37 77 16 10 -13 10 -17 -1 -24 -23" +
        " -14 22 -64 71 -77 70 -19 93 15 40 60 -16 13 -56 60 -89 103 -33 44 -81 101" +
        " -106 127 -36 37 -45 53 -41 70 4 15 -3 34 -19 57 -47 65 -51 78 -31 100 10 11" +
        " 35 25 57 30 44 12 47 21 16 50 -28 26 -34 25 -74 -5 -56 -42 -81 -33 -148 55" +
        " -25 32 -57 82 -71 110 -14 28 -44 81 -66 117 -22 36 -49 89 -60 117 -33 89" +
        " -57 104 -190 120 -63 8 -153 24 -200 35 -46 12 -92 23 -101 25 -10 2 -37 -9" +
        " -60 -25 -42 -28 -108 -40 -108 -19 0 6 16 18 35 27 19 9 35 20 35 24 0 4 -20" +
        " 10 -44 13 -35 6 -54 2 -86 -14 -22 -11 -38 -25 -35 -29 2 -5 -5 -21 -17 -36" +
        " -17 -22 -19 -29 -7 -36 8 -5 18 -9 22 -9 5 0 6 -23 2 -50 -5 -34 -3 -55 5 -65" +
        " 18 -22 30 -18 30 8 0 22 52 121 69 131 5 3 14 -1 21 -9 10 -12 8 -22 -9 -50" +
        " -12 -20 -21 -39 -21 -42 0 -3 18 -3 40 1 22 3 40 4 40 1 0 -21 -68 -136 -115" +
        " -194 -47 -58 -63 -71 -79 -67 -12 3 -46 10 -76 17 -36 7 -79 27 -125 58 -145" +
        " 99 -206 124 -405 170 -47 11 -133 37 -192 58 -93 32 -108 40 -108 59 0 35 27" +
        " 49 85 46 50 -4 130 14 174 38 25 13 28 -3 10 -44 -10 -22 -8 -31 15 -66 29" +
        " -45 31 -45 66 -25 24 13 27 11 67 -27 l42 -41 12 26 c13 29 2 51 -31 62 -33" +
        " 10 32 65 108 91 72 24 83 24 75 -4 -3 -13 6 -22 32 -35 26 -12 37 -25 41 -47" +
        " 9 -41 20 -38 36 12 9 30 24 50 53 69 22 15 45 40 51 56 10 24 20 29 70 38 43" +
        " 8 60 15 62 28 3 15 -8 17 -103 17 -97 0 -113 3 -175 30 -63 28 -77 30 -167 28" +
        " -54 -2 -141 3 -193 10 -65 8 -111 9 -145 3 -38 -7 -58 -6 -84 5 -18 8 -45 14" +
        " -60 14 -14 0 -60 9 -101 21 -41 11 -140 34 -220 50 -83 17 -150 35 -156 43 -7" +
        " 11 -25 13 -72 9 -42 -4 -66 -2 -77 7 -19 16 -19 70 0 117 14 33 14 38 -1 55" +
        " -21 22 -39 22 -124 -2z m447 -396 c12 -3 25 -15 29 -26 3 -11 19 -34 35 -53" +
        " 26 -29 28 -36 18 -58 -14 -32 -48 -41 -71 -20 -12 11 -39 16 -87 17 -73 1 -98" +
        " 13 -87 41 4 13 13 15 36 10 20 -4 39 -1 60 11 31 19 41 54 15 54 -18 0 -20 16" +
        " -2 23 17 8 29 8 54 1z",
    LO: "M10707 2694 c-21 -7 -51 -11 -67 -8 -63 13 -172 -51 -184 -107 -4" +
        " -21 -24 -50 -56 -81 -73 -70 -66 -89 23 -69 74 18 45 -8 -58 -49 l-105 -42" +
        " -59 51 -59 51 -50 -11 c-46 -9 -54 -8 -80 11 -17 12 -35 33 -41 46 -9 21 -14" +
        " 22 -36 14 -15 -6 -37 -7 -49 -4 -13 3 -65 -6 -117 -19 -52 -14 -121 -26 -154" +
        " -27 -37 0 -93 -12 -146 -31 -48 -16 -107 -29 -133 -29 -26 0 -63 -7 -83 -15" +
        " -19 -8 -50 -15 -69 -15 -111 0 -204 -45 -325 -159 -75 -70 -86 -77 -107 -68" +
        " -20 9 -28 5 -64 -29 -22 -21 -47 -54 -55 -73 -8 -18 -39 -66 -69 -106 -55 -73" +
        " -55 -74 -39 -104 9 -19 23 -31 36 -31 11 0 41 -9 67 -19 26 -11 79 -22 119" +
        " -25 67 -4 76 -2 140 30 81 40 103 43 104 12 1 -22 1 -22 8 2 6 23 21 29 176" +
        " 69 l170 45 180 -2 c99 0 218 -6 264 -13 76 -11 89 -17 138 -57 l54 -44 64 16" +
        " c45 11 110 16 214 16 142 0 152 1 213 28 34 16 68 27 75 25 6 -2 24 13 40 33" +
        " 46 62 135 120 219 145 69 20 78 26 91 57 8 18 11 42 8 52 -3 10 -12 53 -19 96" +
        " -13 73 -12 82 4 114 10 19 27 40 39 47 16 10 19 19 14 50 -3 21 -14 48 -25 60" +
        " -17 18 -24 20 -50 11 -26 -9 -33 -7 -57 16 -15 14 -38 26 -52 26 -14 1 -32 11" +
        " -43 27 l-19 26 32 29 c40 36 30 51 -22 32z",
    LE: "M9050 1467 c-25 -11 -53 -26 -62 -35 -16 -14 -20 -13 -38 3 -18 16" +
        " -33 17 -152 11 -149 -8 -275 -24 -455 -58 -104 -20 -127 -28 -153 -53 -16 -16" +
        " -30 -36 -30 -46 0 -23 -24 -41 -45 -33 -17 7 -45 -17 -45 -37 0 -12 33 -16 66" +
        " -7 40 10 202 -45 166 -56 -13 -4 -51 -1 -85 8 -34 9 -108 17 -165 20 -66 2" +
        " -110 9 -125 18 -12 8 -48 25 -80 36 -49 19 -79 22 -200 22 l-143 0 -54 -35" +
        " c-30 -19 -60 -35 -67 -35 -14 0 -164 -120 -208 -167 -16 -18 -47 -52 -68 -76" +
        " -31 -37 -45 -45 -80 -49 -51 -6 -219 -104 -277 -162 -30 -30 -40 -47 -40 -72" +
        " 0 -37 -8 -64 -20 -64 -4 0 -17 20 -28 44 -17 36 -27 44 -54 49 -19 3 -45 -2" +
        " -63 -11 -16 -8 -52 -21 -79 -28 -46 -12 -51 -12 -80 10 -17 13 -40 26 -51 30" +
        " -39 11 -95 15 -95 6 0 -5 -43 -68 -96 -140 -60 -82 -93 -135 -87 -141 5 -5 55" +
        " -27 112 -49 65 -26 120 -54 150 -80 46 -39 50 -40 119 -40 104 0 97 -21 -14" +
        " -43 -48 -9 -89 -19 -92 -22 -15 -14 21 -20 131 -20 106 0 127 -3 163 -22 l42" +
        " -22 73 20 c41 11 118 36 172 55 l99 34 95 -11 94 -11 72 48 c39 27 99 75 133" +
        " 107 71 65 213 137 449 227 316 119 831 393 920 490 17 17 60 47 97 66 59 30" +
        " 71 41 100 92 24 45 46 68 90 97 32 20 60 41 63 45 3 4 -3 30 -13 57 l-17 50" +
        " -45 -20z",
    prev_filter: [],
    update: true,
    last_clicked: null,
    title_text: "Laurentian Great Lakes",
    // state 1: nothing hovered:
    // display selected data
    // initially all lake selected
    selected: {
        index: [],
        text: "Laurentian Great Lakes"
    },
    // state 2: something is hovered:
    hovered: {
        index: []
    },

    // seleceted_lake_text: 'Great Lakes',
    // site location adjustment (50, -100)
    // less industrial
    lakes_data: {
        // GL: { selected: false,lake: "GL", name: "Laurentian Great Lakes", d: "", x: "", y: "", less_industrial: "All Less-industrial Sites", industrial: "All Industrial Sites" },
        LS: { hovered: false, selected: false, lake: "LS", name: "Lake Superior", d: "LS", x: 280, y: 180, less_industrial: "Keweenaw Point", industrial: "Apostle Islands" },
        LM: { hovered: false, selected: false, lake: "LM", name: "Lake Michigan", d: "LM", x: 370, y: 420, less_industrial: "Sturgeon Bay", industrial: "Saugatuck" },
        LH: { hovered: false, selected: false, lake: "LH", name: "Lake Huron", d: "LH", x: 630, y: 500, less_industrial: "Rockport", industrial: "Port Austin" },
        LO: { hovered: false, selected: false, lake: "LO", name: "Lake Ontario", d: "LO", x: 940, y: 590, less_industrial: "Oswego", industrial: "North Hamlin" },
        LE: { hovered: false, selected: false, lake: "LE", name: "Lake Erie", d: "LE", x: 720, y: 720, less_industrial: "Dunkirk", industrial: "Middle Bass Island" },
    },

    site_data: {
        LS1: { hovered: false, selected: false, lake: "LS1", class: "less_industrial_site", x: (3304 + 50) * 0.1, y: -(5886 - 100) * 0.1 + 800, name: "Keweenaw Point" },
        LM1: { hovered: false, selected: false, lake: "LM1", class: "less_industrial_site", x: (3454 + 50) * 0.1, y: -(3596 - 100) * 0.1 + 800, name: "Sturgeon Bay" },
        LH1: { hovered: false, selected: false, lake: "LH1", class: "less_industrial_site", x: (6144 + 50) * 0.1, y: -(3596 - 100) * 0.1 + 800, name: "Rockport" },
        LE1: { hovered: false, selected: false, lake: "LE1", class: "less_industrial_site", x: (8734 + 50) * 0.1, y: -(1236 - 100) * 0.1 + 800, name: "Dunkirk" },
        LO1: { hovered: false, selected: false, lake: "LO1", class: "less_industrial_site", x: (10764 + 50) * 0.1, y: -(2176 - 100) * 0.1 + 800, name: "Oswego" },

        LS2: { hovered: false, selected: false, lake: "LS2", class: "more_industrial_site", x: (1254 + 50) * 0.1, y: -(5456 - 100) * 0.1 + 800, name: "Apostle Islands" },
        LM2: { hovered: false, selected: false, lake: "LM2", class: "more_industrial_site", x: (4104 + 50) * 0.1, y: -(1236 - 100) * 0.1 + 800, name: "Saugatuck" },
        LH2: { hovered: false, selected: false, lake: "LH2", class: "more_industrial_site", x: (6484 + 50) * 0.1, y: -(2656 - 100) * 0.1 + 800, name: "Port Austin" },
        LE2: { hovered: false, selected: false, lake: "LE2", class: "more_industrial_site", x: (6544 + 50) * 0.1, y: -(426 - 100) * 0.1 + 800, name: "Middle Bass Island" },
        LO2: { hovered: false, selected: false, lake: "LO2", class: "more_industrial_site", x: (9764 + 50) * 0.1, y: -(2026 - 100) * 0.1 + 800, name: "North Hamlin" },
    },
    // title_text_temp:"",
    // site_temp: {
    //     LS1: { hovered: false, selected: false },
    //     LM1: { hovered: false, selected: false },
    //     LH1: { hovered: false, selected: false },
    //     LE1: { hovered: false, selected: false },
    //     LO1: { hovered: false, selected: false },
    //     LS2: { hovered: false, selected: false },
    //     LM2: { hovered: false, selected: false },
    //     LH2: { hovered: false, selected: false },
    //     LE2: { hovered: false, selected: false },
    //     LO2: { hovered: false, selected: false },
    // }

};

const getters = {

};

const actions = {

};

const mutations = {
    CHANGE_LAKE_SELECT: (state, index) => {
        // state.lake_selected[index] = !state.lake_selected[index];
        state.lake_selected = index;
    },
    CHANGE_SELECTED_TEXT: (state) => {
        var title = "Laurentian Great Lakes"
        var index = []
        for (const [key, value] of Object.entries(state.site_data)) {
            if (value.selected) index.push(key)
        }
        var LS = ["LS1", "LS2"]
        var LM = ["LM1", "LM2"]
        var LH = ["LH1", "LH2"]
        var LO = ["LO1", "LO2"]
        var LE = ["LE1", "LE2"]
        var lower_industrial = ["LO2", "LE2"]
        var lower_non_industrial = ["LO1", "LE1"]

        var upper_industrial = ["LS2", "LM2", "LH2"]
        var upper_non_industrial = ["LS1", "LM1", "LH1"]

        var lower_lakes = ["LO1", "LO2", "LE1", "LE2"]

        var all_industrial = ["LS2", "LM2", "LH2", "LO2", "LE2"]
        var all_non_industrial = ["LS1", "LM1", "LH1", "LO1", "LE1"]

        var upper_lakes = ["LS1", "LS2", "LM1", "LM2", "LH1", "LH2"]

        state.lakes_data["LS"].selected = false
        state.lakes_data["LH"].selected = false
        state.lakes_data["LM"].selected = false
        state.lakes_data["LE"].selected = false
        state.lakes_data["LO"].selected = false
        if (LS.every((val) => index.includes(val))) state.lakes_data["LS"].selected = true
        if (LM.every((val) => index.includes(val))) state.lakes_data["LM"].selected = true
        if (LH.every((val) => index.includes(val))) state.lakes_data["LH"].selected = true
        if (LO.every((val) => index.includes(val))) state.lakes_data["LO"].selected = true
        if (LE.every((val) => index.includes(val))) state.lakes_data["LE"].selected = true
        // console.log(state.site_data)
        if (index.length == 1) {
            title = state.site_data[index[0]].name
        }
        else if (index.length == 2) {
            if (LS.every((val) => index.includes(val))) {
                title = "Lake Superior"
            }
            if (LM.every((val) => index.includes(val))) {
                title = "Lake Michigan"
            }
            if (LH.every((val) => index.includes(val))) {
                title = "Lake Huron"
            }
            if (LO.every((val) => index.includes(val))) {
                title = "Lake Ontario"
            }
            if (LE.every((val) => index.includes(val))) {
                title = "Lake Erie"
                state.lakes_data["LE"].selected = true
            }
            if (lower_industrial.every((val) => index.includes(val))) {
                title = "Lower Lakes (more industrial)"
            }
            if (lower_non_industrial.every((val) => index.includes(val))) {
                title = "Lower Lakes (less industrial)"
            }
        }
        else if (index.length == 3) {
            if (upper_industrial.every((val) => index.includes(val))) title = "Upper Lakes (more industrial)"
            if (upper_non_industrial.every((val) => index.includes(val))) title = "Upper Lakes (less industrial)"
        }
        else if (index.length == 4) {
            if (lower_lakes.every((val) => index.includes(val))) {
                title = "Lower Lakes"
            }
        }
        else if (index.length == 5) {
            if (all_industrial.every((val) => index.includes(val))) title = "All Industrial Sites"
            if (all_non_industrial.every((val) => index.includes(val))) title = "All None-industrial Sites"
        }
        else if (index.length == 6) {
            if (upper_lakes.every((val) => index.includes(val))) {
                title = "Upper Lakes"
            }
        }

        state.selected.text = title
        state.selected.index = index
    },
    CHANGE_FILTER(state) {
        var site_filter_selected = [];
        for (const [, value] of Object.entries(state.site_data)) {
            if (value.selected) site_filter_selected.push(value.name);
        }
        if (site_filter_selected.length == 0) {
            site_filter_selected = [
                "Keweenaw Point",
                "Sturgeon Bay",
                "Rockport",
                "Dunkirk",
                "Oswego",
                "Apostle Islands",
                "Saugatuck",
                "Port Austin",
                "Middle Bass Island",
                "North Hamlin",
            ];
        }
        state.prev_filter = site_filter_selected;
    }
};

export default {
    state,
    getters,
    actions,
    mutations
};