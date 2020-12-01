// set and change apis for different pages
import json from '@/assets/json/data.json'
import plot_data from '@/assets/json/plot_data.json'

import app_df from "@/assets/js/app_dataframe";
import Trace from "@/assets/js/trace_gen";

const state = {
    map_type: "Simple Map",
    df: new app_df(json),
    trace: new Trace(),

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

    // if expand, switch main_card_index and currnet view_selected
    // if minimize, switch to last_expand

    // plots: [
    //     { index: 0, plots: true, name: "Chemical Ratios", },
    //     { index: 0, plots: false, name: "Chemical Histogram", },

    //     { index: 0, plots: true, name: "Fish Age", },
    //     { index: 0, plots: false, name: "Fish Age Histogram", },
    //     { index: 0, plots: false, name: "Fish Lipid", },
    //     { index: 0, plots: true, name: "Fish Lipid Histogram", },

    //     { index: 0, plots: true, name: "Age vs. Mercury", },
    //     { index: 0, plots: false, name: "Age vs. Total PCBs", },
    //     { index: 0, plots: false, name: "Age vs. Total DDTs", },
    //     { plots: false, name: "Age vs. Major PBDEs", },
    //     { plots: false, name: "Age vs. Pesticides", },

    //     { plots: false, name: "Mercury", },
    //     { plots: true, name: "Total PCBs", },
    //     { plots: false, name: "Total DDTs", },
    //     { plots: false, name: "Major PBDEs", },
    //     { plots: false, name: "Pesticides", },

    //     { plots: true, name: "Chemicals of Sites" },
    //     { plots: true, name: "Chemicals of Years" },
    // ],

    main_card_index: 18,
    // previous figure on main plot
    last_expand: -1,

    view_selected: [1, 6, 10, 11, 12, 17, 18],

    current_plot_order: [11, 6, 10, 12, 1, 17],

    plot_data: plot_data

};

const getters = {
    map_type: state => state.map_type,
};

const actions = {

};

const mutations = {
    CHANGE_MAP_TYPE: (state, map_type) => state.map_type = map_type,

    FILTER_DF(state, site_filter) {
        state.df.filter_site(site_filter)
    },

    CHANGE_PLOT_DATA(state, plot_index) {
        var item = state.plot_data[plot_index]
        // var t = new Date()
        var data = [],
            d = [],
            trace = [],
            layout = {},
            max_x = 0,
            max_y = 0;
        switch (item.plots.type) {
            // select plot type
            case "box":
                // iterate all the y traces
                item.plots.y.forEach(y => {
                    d = state.df.get_col_col(item.plots.x, y)
                    data = data.concat(d)

                    let my = state.df.get_col_stats(y, "max")
                    if (my > max_y) max_y = my
                })
                trace = state.trace.gen_box(data)
                break;
            case "hist":
                item.plots.y.forEach(y => {
                    d = state.df.get_col(y, item.plots.filter)
                    //!! concat not push
                    data = data.concat(d)

                    let my = state.df.get_col_stats(y, "max")
                    if (my > max_y) max_y = my
                })
                trace = state.trace.gen_hist(data, max_y)
                // console.log(trace)
                break;
            case "pie":
                data = state.df.get_ratios(item.plots.y)
                trace = state.trace.gen_pie(data)
                break;
            case "scatter":
                item.plots.y.forEach(y => {
                    d = state.df.get_col_col(item.plots.x, y, item.plots.filter)
                    data = data.concat(d)

                    let my = state.df.get_col_stats(y, "max") * 1.2
                    if (my > max_y) max_y = my
                })
                trace = state.trace.gen_scatter(data)
                break;
            case "bar_stacked":
                item.plots.y.forEach(y => {
                    d = state.df.group_col_col(item.plots.x, y)
                    data = data.concat(d)

                    let my = state.df.get_col_stats(y, "mean") + state.df.get_col_stats(y, "std") * 2
                    max_y += my
                })
                trace = state.trace.gen_bar(data)
                break;
        }
        // handle the x-axis range, some have no x range, some have no numbered x-axis
        if ('x' in item.plots) {
            if (!isNaN(parseFloat(state.df.df_filter[0][item.plots.x]))) {
                max_x = state.df.get_col_stats(item.plots.x, "max")
            }
            else {
                max_x = state.df.unique(item.plots.x)
            }

        }
        layout = state.trace.gen_plot_layout(item.plots, [max_x, max_y])
        // console.log(layout)
        // console.log(plot_index, max_x, max_y)
        state.plot_data[plot_index].trace = trace
        state.plot_data[plot_index].layout = layout
        // console.log(plot_index, new Date() - t)

    }

};

export default {
    state,
    getters,
    actions,
    mutations
};