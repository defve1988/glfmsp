import { std, min, max, mean } from 'mathjs'

export default class AppData {
    site_filter = [
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
    ]
    chem_group = ["Mercury", "Total PCBs", "Total DDTs", "Major PBDEs", "Pesticides", "Others"]
    chem_filter = {
        "Mercury": ["Hg"],
        "Total PCBs": ["tot_PCBs"],
        "Total DDTs": ["tot_DDTs"],
        "Major PBDEs": [
            "BDE_047",
            "BDE_099",
            "BDE_100",
            "BDE_153",
            "BDE_154",
            "BDE_209"],
        "Pesticides": [
            "Chlordane",
            "Oxchlor",
            "Nonachlor",
            "Dieldrin",
            "Endrin",
            "Mirex"],
        "Others": [
            "OCs",
            "HCB",
            "BDE_007",
            "BDE_015",
            "BDE_017",
            "BDE_028",
            "BDE_049",
            "BDE_066",
            "BDE_071",
            "BDE_077",
            "BDE_085",
            "BDE_119",
            "BDE_126",
            "BDE_138",
            "BDE_156",
            "BDE_183",
            "BDE_184",
            "BDE_191",
            "BDE_196",
            "BDE_197",
            "BDE_206",
            "BDE_207",
            "BDE_209"]
    }
    constructor(json) {
        this.df = json
        this.df = json.map(x => { x.Year = parseInt(x.Year); return x })
        this.cal_chemical_group()
        this.filter_site()
    }

    filter_site(site_filter = this.site_filter) {
        this.df_filter = this.df.filter(item => { return site_filter.includes(item.Site) })
    }

    cal_chemical_group() {
        this.df = this.df.map(x => {
            for (const [key, value] of Object.entries(this.chem_filter)) {
                x[key] = value.reduce((prev, curr) => {
                    let val = parseFloat(x[curr])
                    if (!isNaN(val)) prev += val
                    return prev
                }, null)
            }
            return x
        })
    }

    unique(col, df = this.df_filter) {
        var res = df.reduce((prev, curr) => {
            if (curr[col] != "" && !prev.includes(curr[col])) {
                prev.push(curr[col])
            }
            return prev
        }, [])
        return res
    }

    get_col_stats(col, func, df = this.df_filter) {
        var res
        var y = df.filter(x => x[col] != null).map(x => x[col])
        if (y.length == 0) return null
        switch (func) {
            case "min":
                res = min(y)
                break;
            case "max":
                res = max(y)
                break;
            case "mean":
                res = mean(y)
                break;
            case "std":
                res = std(y)
                break;
        }
        return Math.round(res*100)/100
    }

    get_ratios(groups = this.chem_group) {
        // get the ratios of each chemcial groups for the selected sites
        var res = {}
        groups.forEach(x => {
            res[x] = this.get_col_stats(x, "mean")
        })
        // console.log(res)
        return res
    }

    get_col(col, filter = []) {
        var df = this.df_filter.filter(x => !isNaN(x[col]))
        var res = [],
            temp;
        if (filter.length > 0) {
            filter.forEach(f => {
                eval("temp = df.filter(x=>x['" + f.col + "']" + f.eval + ")")
                // if the dataframe is not empty
                if (temp.length > 0) {
                    res.push({
                        y_name: f.name,
                        y: temp.map(x => x[col]),
                    })
                }
            });
        }
        else {
            res.push({
                y_name: col,
                y: df.map(x => x[col]),
            })
        }
        // console.log(filter)
        return res
    }

    get_col_col(col1, col2, filter = []) {
        var df = this.df_filter.filter(x => !isNaN(x[col2]))
        var res = [],
            temp;
        if (filter.length > 0) {
            filter.forEach(f => {
                eval("temp = df.filter(x=>x['" + f.col + "']" + f.eval + ")")
                if (temp.length > 0) {
                    res.push({
                        x_name: col1,
                        y_name: f.name,
                        x: temp.map(x => x[col1]),
                        y: temp.map(x => x[col2]),
                    })
                }
            })
        }
        else {
            res.push({
                x_name: col1,
                y_name: col2,
                x: df.map(x => x[col1]),
                y: df.map(x => x[col2]),

            })
        }
        // console.log(col1, res, df)
        return res
    }

    group_col_col(col1, col2) {
        var df = this.df_filter.filter(x => !isNaN(x[col2]))
        var group = this.unique(col1, df)
        var y = [], std_y = [], res = []
        group.forEach(g => {
            var temp = df.filter(x => x[col1] == g)
            if (temp.length > 0) {
                y.push(this.get_col_stats(col2, "mean", temp))
                std_y.push(this.get_col_stats(col2, "std", temp)/2)
            }
            else {
                y.push(null)
                std_y.push(null)
            }
        })
        res.push({
            x_name: col1,
            y_name: col2,
            x: group,
            y: y,
            std_y: std_y,
        })
        // console.log(res)
        return res
    }

}