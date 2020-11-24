import { std } from 'mathjs'
export default {
    gen_data,
    gen_ratio,
    year_chemical_all,
    age_chemical_data,
    year_chemical_avg
}
var color_theme = {
    "Mercury": {
        rgb: "rgb(10, 121, 247)",
        rgba: "rgba(10, 121, 247,0.5)"
    },
    "Total PCBs": {
        rgb: "rgb(31, 145, 61)",
        rgba: "rgba(31, 145, 61,0.5)"
    },
    "Total DDTs": {
        rgb: "rgb(200, 22, 60)",
        rgba: "rgba(200, 22, 60,0.5)"
    },
    "Major PBDEs": {
        rgb: "rgb(230, 145, 30)",
        rgba: "rgba(230, 145, 30,0.5)"
    },
    "Pesticides": {
        rgb: "rgb(163, 64, 21)",
        rgba: "rgba(163, 64, 21,0.5)"
    },
    "Others": {
        rgb: "rgb(100, 100, 100)",
        rgba: "rgba(100, 100, 100,0.5)"
    }
}
var chem_filter_index = {
    "Mercury": ["Hg"],
    "Total PCBs": ["tot_PCBs"],
    "Total DDTs": ["tot_DDTs"],
    "Major PBDEs": ["BDE_047", "BDE_099", "BDE_100", "BDE_153", "BDE_154"],
    "Pesticides": ["Chlordane", "Oxchlor", "Nonachlor", "Dieldrin", "Endrin", "Mirex", "HCB"],
    "Others": ["tot_Others"],
    "Fish Age": ["Age"],
    "Fish Lipid": ["Lipid"]
}

var chem_filter_index_2 = {
    "Hg": "Mercury",
    "tot_PCBs": "Total PCBs",
    "tot_DDTs": "Total DDTs",
    "BDE_047": "Major PBDEs",
    "BDE_099": "Major PBDEs",
    "BDE_100": "Major PBDEs",
    "BDE_153": "Major PBDEs",
    "BDE_154": "Major PBDEs",
    "Chlordane": "Pesticides",
    "Oxchlor": "Pesticides",
    "Nonachlor": "Pesticides",
    "Dieldrin": "Pesticides",
    "Endrin": "Pesticides",
    "Mirex": "Pesticides",
    "HCB": "Pesticides",
    "tot_Others": "Others"
}

function gen_ratio(site_filter, data) {
    var x = ["Mercury", "Total PCBs", "Total DDTs", "Major PBDEs", "Pesticides", "Others"]
    var values =
    {
        "Mercury": { conc: 0, counts: 0 },
        "Total PCBs": { conc: 0, counts: 0 },
        "Total DDTs": { conc: 0, counts: 0 },
        "Major PBDEs": { conc: 0, counts: 0 },
        "Pesticides": { conc: 0, counts: 0 },
        "Others": { conc: 0, counts: 0 }
    }
    var color_fill = [], color_border = []
    for (var i = 0; i < x.length; i++) {
        for (const [key, value] of Object.entries(color_theme)) {
            if (key == x[i]) {
                color_fill.push(value.rgba)
                color_border.push(value.rgb)
            }
        }
    }

    let selected = data.data.filter(item => { return site_filter.includes(item.Site) })
    values = selected.reduce((prev, curr) => {
        var counted =
        {
            "Mercury": false,
            "Total PCBs": false,
            "Total DDTs": false,
            "Major PBDEs": false,
            "Pesticides": false,
            "Others": false
        }
        for (const [key, value] of Object.entries(chem_filter_index_2)) {
            if (!isNaN(parseFloat(curr[key]))) {
                prev[value].conc += parseFloat(curr[key])
                counted[value] = true
            }
        }
        for (const [key, value] of Object.entries(counted)) {
            if (value) {
                prev[key].counts += 1
            }
        }
        return prev
    }, values)

    var labels = [], ratios = []
    for (const [key, value] of Object.entries(values)) {
        labels.push(key)
        ratios.push(value.conc / value.counts)
    }
    // console.log(values)
    // console.log(labels)
    // console.log(ratios)
    return {
        labels: labels,
        values: ratios,
        color: color_fill,
    }

}

function gen_data(site_filter, chemical, data) {
    // console.log(site_filter)
    // console.log(chemical)
    // console.log(data.data[0].Site)
    let res = {
        chemical: chemical,
        trend: "",
        x: [],
        y: [],
        all_x: [],
        all_y: [],
        color: "",
        error_y: [],
        max_val: 0,
        min_val: 99999,
    }
    // set color
    res.color = color_theme[chemical]

    // select chemical 
    var chem_filter
    chem_filter = chem_filter_index[chemical]
    let selected = data.data.filter(item => { return site_filter.includes(item.Site) })

    // select all data points
    var all = selected.reduce(function (prev, current) {
        let conc = 0
        for (let i = 0; i < chem_filter.length; i++) {
            if (current[chem_filter[i]] > 0) {
                // console.log(current[chem_filter[i]])
                conc += parseFloat(current[chem_filter[i]]);
            }
        }
        if (conc > 0) {
            prev.push(
                {
                    all_x: parseFloat(current.Year),
                    all_y: conc
                })
        }
        return prev
    }, [])
    res.all_x = all.map(x => x.all_x)
    res.all_y = all.map(x => x.all_y)

    // find x
    res.x = selected.reduce(function (prev, current) {
        if (!prev.includes(current.Year)) { prev.push(current.Year) }
        return prev
    }, [])

    // calculate y
    let value = selected.reduce(function (prev, current) {
        let conc = 0
        // console.log(prev)
        for (let i = 0; i < chem_filter.length; i++) {
            if (current[chem_filter[i]] > 0) {
                // console.log(current[chem_filter[i]])
                conc += parseFloat(current[chem_filter[i]]);
            }
        }
        let index = res.x.indexOf(current.Year)
        if (conc > 0) {
            // console.log(conc, index)
            prev.vals[index] += conc
            prev.counts[index] += 1
        }
        return prev
    }, { vals: new Array(res.x.length).fill(0), counts: new Array(res.x.length).fill(0) })

    // calculate error
    res.error_y = res.x.map(x => {
        var year_data = all.filter(d => { return d.all_x == x })
        var value_y = year_data.map(x => x.all_y)
        var s
        if (value_y.length > 0) {
            s = std(value_y)
        }
        else {
            s = null
        }
        return s
    })
    // console.log(res.error_bar)

    // delete NAN values and calcualte min, max
    var nans = []
    for (let i = 0; i < res.x.length; i++) {
        res.y[i] = value.vals[i] / value.counts[i]
        // res.labels[i] = Math.round(res.value[i])
        if (isNaN(res.y[i])) { nans.push(i) }
        if (res.y[i] + res.error_y[i] > res.max_val) { res.max_val = res.y[i] + res.error_y[i] }
        if (res.y[i] - res.error_y[i] < res.min_val) { res.min_val = res.y[i] - res.error_y[i] }
    }
    for (let i = 0; i < nans.length; i++) {
        res.y.pop(i)
        res.x.pop(i)
        res.error_y.pop(i)
    }

    res.trend = Math.round((res.y[0] - res.y[res.y.length - 1]) / res.y[0] * 100)
    res.max_val = Math.round(res.max_val)
    res.min_val = Math.round(res.min_val)

    // console.log(res)

    return res
}


function year_chemical_all(site_filter, chemical, data) {
    var res = {
        x: [],
        y: [],
        max_y: -999999,
        sum: 0,
    }
    var chem_filter
    chem_filter = chem_filter_index[chemical]

    let selected = data.filter(item => { return site_filter.includes(item.Site) })

    selected.forEach(item => {
        // this is for group with mutiple chemicals
        let conc = 0
        for (let i = 0; i < chem_filter.length; i++) {
            if (item[chem_filter[i]] > 0) {
                conc += parseFloat(item[chem_filter[i]]);
            }
        }
        if (conc > 0) {
            res.x.push(parseFloat(item.Year))
            res.y.push(conc)
            if (conc > res.max_y) res.max_y = conc
            res.sum += conc
        }

    });
    return [res]
}

function age_chemical_data(site_filter, chemical, data) {
    var res = [{
        x: [],
        y: [],
    }, {
        x: [],
        y: [],
    }]
    var chem_filter
    chem_filter = chem_filter_index[chemical]
    let selected = data.filter(item => { return site_filter.includes(item.Site) })

    selected.forEach(item => {
        // this is for group with mutiple chemicals
        let conc = 0
        for (let i = 0; i < chem_filter.length; i++) {
            if (item[chem_filter[i]] > 0) {
                conc += parseFloat(item[chem_filter[i]]);
            }
        }
        if (conc > 0) {
            if (item.Year > 2010) {
                res[1].x.push(parseFloat(item.Age))
                res[1].y.push(conc)
            }
            else {
                res[0].x.push(parseFloat(item.Age))
                res[0].y.push(conc)
            }
        }

    });
    return res
}

function year_chemical_avg(site_filter, chemical, data, type) {
    let res = {
        x: [],
        y: [],
        error_y: [],
        chemical: chemical,
        max_y: -999999,
    }

    // select chemical 
    var chem_filter
    chem_filter = chem_filter_index[chemical]
    let selected = data.filter(item => { return site_filter.includes(item.Site) })

    var all = selected.reduce(function (prev, current) {
        let conc = 0
        for (let i = 0; i < chem_filter.length; i++) {
            if (current[chem_filter[i]] > 0) {
                // console.log(current[chem_filter[i]])
                conc += parseFloat(current[chem_filter[i]]);
            }
        }
        if (conc > 0) {
            var xx
            if (type == "Year") {
                xx = parseFloat(current.Year)
            }
            else if (type == "Site") {
                xx = parseFloat(current.Site)
            }
            prev.push(
                {
                    all_x: xx,
                    all_y: conc
                })
        }
        return prev
    }, [])

    // console.log(all)

    // find x
    res.x = selected.reduce(function (prev, current) {
        if (type == "Year") {
            if (!prev.includes(current.Year)) { prev.push(current.Year) }
        }
        else if (type == "Site") {
            if (!prev.includes(current.Site)) { prev.push(current.Site) }
        }
        return prev
    }, [])

    // calculate y
    var index
    let value = selected.reduce(function (prev, current) {
        let conc = 0
        for (let i = 0; i < chem_filter.length; i++) {
            if (current[chem_filter[i]] > 0) {
                conc += parseFloat(current[chem_filter[i]]);
            }
        }
        if (type == "Year") {
            index = res.x.indexOf(current.Year)
        }
        else if (type == "Site") {
            index = res.x.indexOf(current.Site)
        }

        if (conc > 0) {
            prev.vals[index] += conc
            prev.counts[index] += 1
        }
        return prev
    }, { vals: new Array(res.x.length).fill(0), counts: new Array(res.x.length).fill(0) })

    // calculate error
    res.error_y = res.x.map(x => {
        var year_data = all.filter(d => { return d.all_x == x })
        var value_y = year_data.map(x => x.all_y)
        var s
        if (value_y.length > 0) {
            s = std(value_y)
        }
        else {
            s = null
        }
        return s
    })
    // console.log(res.error_bar)

    // delete NAN values and calcualte min, max
    var nans = []
    for (let i = 0; i < res.x.length; i++) {
        res.y[i] = value.vals[i] / value.counts[i]
        // res.labels[i] = Math.round(res.value[i])
        if (isNaN(res.y[i])) { nans.push(i) }
        if (res.y[i] + res.error_y[i] > res.max_y) { res.max_y = res.y[i] + res.error_y[i] }
    }
    for (let i = 0; i < nans.length; i++) {
        res.y.pop(i)
        res.x.pop(i)
        res.error_y.pop(i)
    }
    return res
}
