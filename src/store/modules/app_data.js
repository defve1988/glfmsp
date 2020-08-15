// set and change apis for different pages
import json from '@/assets/data.json'
const state = {
    publications: [
        "Parvizian, B. A.; Zhou, C.; Fernando, S.; Crimmins, B. S.; Hopke, P. K.; Holsen, T. M. J. E. S.; Technology, Concentrations and Long-Term Temporal Trends of Hexabromocyclododecanes (HBCDD) in Lake Trout and Walleye from the Great Lakes. 2020, 54, (10), 6134-6141.",
        "Zhou, C.; Pagano, J.; McGoldrick, D. J.; Chen, D.; Crimmins, B. S.; Hopke, P. K.; Milligan, M. S.; Murphy, E. W.; Holsen, T. M., Legacy Polybrominated Diphenyl Ethers (PBDEs) Trends in Top Predator Fish of the Laurentian Great Lakes (GL) from 1979 to 2016: Will Concentrations Continue to Decrease? Environ Sci Technol 2019, 53, (12), 6650-6659.",
        "Zhou, C.; Cohen, M. D.; Crimmins, B. A.; Zhou, H.; Johnson, T. A.; Hopke, P. K.; Holsen, T. M., Mercury temporal trends in top predator fish of the Laurentian Great Lakes from 2004 to 2015: are concentrations still decreasing? Environmental science & technology 2017, 51, (13), 7386-7394.",
        "...",
    ],
    data: json,
    
    header_sample: [
        { text: "Sample ID", value: "sample_ID", },
        { text: "Year", value: "Year", },
        { text: "Lake", value: "Lake", },
        { text: "Site", value: "Site", },
        { text: "Site Type", value: "site_type", },
        { text: "Fish", value: "Fish", },
        { text: "Age", value: "Age", },
        { text: "Lipid (%)", value: "Lipid", },
    ],
    header_summary: [
        { text: "Sample ID", value: "sample_ID", },
        { text: "Year", value: "Year", },
        { text: "Site", value: "Site", },
        { text: "Fish", value: "Fish", },
        { text: "Age", value: "Age", },
        { text: "Hg (ng/g)", value: "Hg", },
        { text: "tot_PCBs (ng/g)", value: "tot_PCBs", },
        { text: "tot_DDTs (ng/g)", value: "tot_DDTs", },
        { text: "tot_PBDEs ", value: "tot_PBDEs", },
        { text: "tot_Others (ng/g)", value: "tot_Others", },
    ],
    header_pesticide: [
        { text: "Sample ID", value: "sample_ID", },
        { text: "Year", value: "Year", },
        { text: "Site", value: "Site", },
        { text: "tot_DDTs", value: "tot_DDTs", },
        { text: "Chlordane", value: "Chlordane", },
        { text: "Oxchlor", value: "Oxchlor", },
        { text: "Nonachlor", value: "Nonachlor", },
        { text: "Dieldrin", value: "Dieldrin", },
        { text: "Endrin", value: "Endrin", },
        { text: "Mirex", value: "Mirex", },
        { text: "HCB", value: "HCB", },
        { text: "OCs", value: "OCs", },
    ],
    header_flame_retardant: [
        { text: "Sample ID", value: "sample_ID", },
        { text: "Year", value: "Year", },
        { text: "Site", value: "Site", },
        { text: "BDE_047", value: "BDE_047", },
        { text: "BDE_099", value: "BDE_099", },
        { text: "BDE_100", value: "BDE_100", },
        { text: "BDE_153", value: "BDE_153", },
        { text: "BDE_154", value: "BDE_154", },
        { text: "BDE_007", value: "BDE_007", },
        { text: "BDE_015", value: "BDE_015", },
        { text: "BDE_017", value: "BDE_017", },
        { text: "BDE_028", value: "BDE_028", },
        { text: "BDE_049", value: "BDE_049", },
        { text: "BDE_066", value: "BDE_066", },
        { text: "BDE_071", value: "BDE_071", },
        { text: "BDE_077", value: "BDE_077", },
        { text: "BDE_085", value: "BDE_085", },
        { text: "BDE_119", value: "BDE_119", },
        { text: "BDE_126", value: "BDE_126", },
        { text: "BDE_138", value: "BDE_138", },
        { text: "BDE_156", value: "BDE_156", },
        { text: "BDE_183", value: "BDE_183", },
        { text: "BDE_184", value: "BDE_184", },
        { text: "BDE_191", value: "BDE_191", },
        { text: "BDE_196", value: "BDE_196", },
        { text: "BDE_197", value: "BDE_197", },
        { text: "BDE_206", value: "BDE_206", },
        { text: "BDE_207", value: "BDE_207", },
        { text: "BDE_209", value: "BDE_209", },
    ],

};


const getters = {

};

const actions = {

};

const mutations = {

};

export default {
    state,
    getters,
    actions,
    mutations
};