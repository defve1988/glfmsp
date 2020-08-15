function gen_data(site, chemical, data) {
    // console.log(site)
    // console.log(chemical)
    // console.log(data.data[0].Site)

    let res = {
        chemical: chemical,
        trend: "",
        labels: [],
        value: [],
        color: "",
        max_val: 0,
        min_val: 99999,
    }

    var site_filter
    if (site == "All Less-industrial Sites") { site_filter = ["Keweenaw Point", "Sturgeon Bay", "Rockport", "Dunkirk", "Oswego"] }
    else if (site == "All Industrial Sites") { site_filter = ["Apostle Islands", "Saugatuck", "Port Austin", "Middle Bass Island", "North Hamlin"] }
    else { site_filter = [site] }

    var chem_filter
    if (chemical == "Mercury") { chem_filter = ["Hg"]; res.color = "rgba(32, 79, 171, 0.8)" }
    else if (chemical == "Total PCBs") { chem_filter = ["tot_PCBs"]; res.color = "rgba(31, 145, 61, 0.8)" }
    else if (chemical == "Total DDTs") { chem_filter = ["tot_DDTs"]; res.color = "rgba(60, 22, 199, 0.8)" }
    else if (chemical == "Major PBDEs") { chem_filter = ["BDE_047", "BDE_099", "BDE_100", "BDE_153", "BDE_154"]; res.color = "rgba(252, 186, 3, 1)" }
    else if (chemical == "Pesticides") { chem_filter = ["Chlordane", "Oxchlor", "Nonachlor", "Dieldrin", "Endrin", "Mirex", "HCB"]; res.color = "rgba(163, 64, 21, 0.8)" }

    let selected = data.data.filter(item => { return site_filter.includes(item.Site) })

    // find unique years
    res.labels = selected.reduce(function (prev, current) {
        if (!prev.includes(current.Year)) { prev.push(current.Year) }
        return prev
    }, [])

    console.log(chem_filter)

    let value = selected.reduce(function (prev, current) {
        let conc = 0
        // console.log(prev)
        for (let i = 0; i < chem_filter.length; i++) {
            if (current[chem_filter[i]] > 0) {
                // console.log(current[chem_filter[i]])
                conc += parseFloat(current[chem_filter[i]]);
            }
        }
        let index = res.labels.indexOf(current.Year)
        if (conc > 0) {
            // console.log(conc, index)
            prev.vals[index] += conc
            prev.counts[index] += 1
        }


        return prev
    }, { vals: new Array(res.labels.length).fill(0), counts: new Array(res.labels.length).fill(0) })

    var nans = []

    for (let i = 0; i < res.labels.length; i++) {
        res.value[i] = value.vals[i] / value.counts[i]
        // res.labels[i] = Math.round(res.value[i])
        if (isNaN(res.value[i])) { nans.push(i) }
        if (res.value[i] > res.max_val) { res.max_val = res.value[i] }
        if (res.value[i] < res.min_val) { res.min_val = res.value[i] }
    }

    for (let i = 0; i < nans.length; i++) {
        res.value.pop(i)
        res.labels.pop(i)
    }

    res.trend = Math.round((res.value[0] - res.value[res.value.length - 1]) / res.value[0] * 100)
    res.max_val = Math.round(res.max_val)
    res.min_val = Math.round(res.min_val)

    console.log(res)

    return res
}

export default { gen_data }