// set and change apis for different pages
import json from '@/assets/data.json'
import data_func from "@/assets/plot_js/data_func";
import trace_func from "@/assets/plot_js/trace_func";

const state = {
    map_type: "Simple Map",
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

    plots: [
        { plots: true, name: "Chemical Ratios", },
        { plots: false, name: "Chemical Histogram", },

        { plots: true, name: "Fish Age", },
        { plots: false, name: "Fish Age Histogram", },
        { plots: false, name: "Fish Lipid", },
        { plots: true, name: "Fish Lipid Histogram", },

        { plots: true, name: "Age vs. Mercury", },
        { plots: false, name: "Age vs. Total PCBs", },
        { plots: false, name: "Age vs. Total DDTs", },
        { plots: false, name: "Age vs. Major PBDEs", },
        { plots: false, name: "Age vs. Pesticides", },

        { plots: false, name: "Mercury", },
        { plots: true, name: "Total PCBs", },
        { plots: false, name: "Total DDTs", },
        { plots: false, name: "Major PBDEs", },
        { plots: false, name: "Pesticides", },

        { plots: true, name: "Chemicals of Sites" },
    ],

    // view_selected:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14],
    view_selected: [0, 2, 5, 6, 12, 17],

    // will add to plot_data max_y:0
    plot_data: [
        // 0
        { name: "Mercury", type: "box", trace_data: [] },
        { name: "Total PCBs", type: "box", trace_data: [] },
        { name: "Total DDTs", type: "box", trace_data: [] },
        { name: "Major PBDEs", type: "box", trace_data: [] },
        { name: "Pesticides", type: "box", trace_data: [] },
        { name: "Others", type: "box", trace_data: [] },
        // 6
        { name: "Fish Age", type: "box", trace_data: [] },
        { name: "Fish Lipid", type: "box", trace_data: [] },
        // 8
        { name: "Chemical Histogram", type: "hist", trace_data: [] },
        { name: "Fish Age Histogram", type: "hist", trace_data: [] },
        { name: "Fish Lipid Histogram", type: "hist", trace_data: [] },
        // 11
        { name: "Chemical Ratios", type: "pie", trace_data: [] },
        // 12
        { name: "Age vs. Mercury", type: "scatter", trace_data: [] },
        { name: "Age vs. Total PCBs", type: "scatter", trace_data: [] },
        { name: "Age vs. Total DDTs", type: "scatter", trace_data: [] },
        { name: "Age vs. Major PBDEs", type: "scatter", trace_data: [] },
        { name: "Age vs. Pesticides", type: "scatter", trace_data: [] },
        // 17
        { name: "Chemicals of Sites", type: "bar_stacked", trace_data: [] },
        { name: "Chemicals of Years", type: "bar_stacked", trace_data: [] },
    ],

};

const getters = {
    map_type: state => state.map_type,
};

const actions = {

};

const mutations = {
    CHANGE_MAP_TYPE: (state, map_type) => state.map_type = map_type,

    CHANGE_PLOT_DATA(state, site_filter) {
        var chem_hist = []
        var chem_sum = {}
        var age_hist = []
        var lipid_hist = []
        var name
        // box plots 
        for (let i = 0; i <= 7; i++) {
            name = state.plot_data[i].name
            var data_all = data_func.year_chemical_all(site_filter, name, state.data)
            if (i <= 4) {
                chem_hist.push(data_all[0].y)
                chem_sum[name] = data_all[0].sum
            }
            if (i == 6) age_hist.push(data_all[0].y)
            if (i == 7) lipid_hist.push(data_all[0].y)
            state.plot_data[i].max_y = data_all[0].max_y
            state.plot_data[i].trace_data = trace_func.gene_box_trace(data_all, name)
        }
        // hist
        state.plot_data[8].trace_data = trace_func.gene_hist_trace(chem_hist,
            ["Mercury", "Total PCBs", "Total DDTs", "Major PBDEs", "Pesticides"])
        state.plot_data[9].trace_data = trace_func.gene_hist_trace(age_hist, ["Fish Age"])
        state.plot_data[10].trace_data = trace_func.gene_hist_trace(lipid_hist, ["Fish Lipid"])
        // pie
        state.plot_data[11].trace_data = trace_func.gene_pie_trace(chem_sum)
        // scatter
        for (let i = 12; i <= 16; i++) {
            name = state.plot_data[i - 12].name
            var age_conc = data_func.age_chemical_data(site_filter, name, state.data)
            // state.plot_data[i].max_y = age_conc[0].max_y
            // console.log(age_conc)
            state.plot_data[i].trace_data = trace_func.gene_paired_trace(age_conc, name)
        }

        // stacked bar
        var max_year =0
        var max_site =0
        var year_stack = []
        var site_stack = []
        for (let i = 0; i < 6; i++) {
            name = state.plot_data[i].name
            let year_chem = data_func.year_chemical_avg(site_filter, name, state.data, "Year")
            year_stack.push(year_chem)
            max_year += year_chem.max_y

            let site_chem = data_func.year_chemical_avg(site_filter, name, state.data, "Site")
            site_stack.push(site_chem)
            max_site += site_chem.max_y
        }
        // console.log(1, year_stack)
        state.plot_data[17].trace_data = trace_func.gene_stacked_bar_trace(site_stack, "Site")
        state.plot_data[17].max_y = max_site

        state.plot_data[18].trace_data = trace_func.gene_stacked_bar_trace(year_stack, "Year")
        state.plot_data[18].max_y = max_year

    }

};

export default {
    state,
    getters,
    actions,
    mutations
};