

export default {
    gene_box_trace,
    gene_hist_trace,
    gene_pie_trace,
    gene_paired_trace,
    gene_stacked_bar_trace
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
    },
    "Fish Age": {
        rgb: "rgb(24, 5, 82)",
        rgba: "rgba(24, 5, 82,0.5)"
    },
    "Fish Lipid": {
        rgb: "rgb(163, 10, 158)",
        rgba: "rgba(163, 10, 158,0.5)"
    }
}

const plot_year = [2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015]
const y0 = new Array(12).fill(0);

function gene_box_trace(data, chemical) {
    var trace = []
    var trace_0 = []
    for (var i = 0; i < data.length; i++) {
        trace_0.push({
            x: plot_year,
            y: y0,
            type: 'box',
        })
        trace.push({
            x: data[i].x,
            y: data[i].y,
            name: chemical,
            marker: {
                color: color_theme[chemical].rgba,
                outliercolor: 'rgba(219, 64, 82, 0.6)',
                line: {
                    outliercolor: color_theme[chemical].rgb,
                    outlierwidth: 1
                }
            },
            type: 'box',
            boxpoints: 'Outliers'
        })
        plot_year.forEach(year => {
            if (!data[i].x.includes(year)) {
                trace[i].x.push(year)
                trace[i].y.push(-1)
            }
        })
    }
    return {
        trace: trace,
        trace_0: trace_0
    }
}

function gene_hist_trace(data, names) {
    var trace = []
    var trace_0 = []
    data.forEach((item, index) => {
        trace.push(
            {
                x: item,
                name: names[index],
                autobinx: true,
                histnorm: "probability",
                marker: {
                    color: color_theme[names[index]].rgba,
                    line: {
                        color: color_theme[names[index]].rgb,
                        width: 0.5
                    }
                },
                opacity: 0.7,
                type: "histogram",
            }
        )
        trace_0.push({
            x: new Array(item.length).fill(0),
            histnorm: "probability",
            type: "histogram",
        })
    })
    return {
        trace: trace,
        trace_0: trace_0
    }
}

function gene_pie_trace(data) {
    var trace = [{
        values: [],
        labels: [],
        type: 'pie',
        marker: {
            colors: [],
        },
    }];

    for (const [key, value] of Object.entries(data)) {
        trace[0].values.push(value)
        trace[0].labels.push(key)
        trace[0].marker.colors.push(color_theme[key].rgba)
    }

    return {
        trace: trace
    }
}

function gene_paired_trace(data_pair, chemical) {
    console.log(chemical)
    var color = ['rgba(235, 64, 52,0.5)', "rgba(29, 84, 204,0.5)"]
    var labels = ["Before 2010", "After 2010"]
    var trace = []
    data_pair.forEach((item, index) => {
        trace.push({
            x: item.x,
            y: item.y,
            type: 'scatter',
            mode: 'markers',
            name: labels[index],
            marker: {
                size: 5,
                color: color[index],
            },
        })
    })

    return {
        trace: trace
    }

}

function gene_stacked_bar_trace(data, type) {
    // console.log(data, type)
    var x
    if (type == "Year") {
        x = plot_year
    }
    else {
        x = data[0].x
    }
    var trace_0 = [], trace = []
    data.forEach(item => {
        trace_0.push({
            x: x,
            y: x.map(() => 0),
            type: "bar"
        })

        var y = []
        var error_y = []

        if (type == "Year") {
            y = plot_year.map(() => 0)
            error_y = plot_year.map(() => 0)
            for (var i = 0; i < item.y.length; i++) {
                var index = plot_year.indexOf(parseInt(item.x[i]))
                if (index >= 0) {
                    y[index] = item.y[i]
                    error_y[index] = item.error_y[i]
                }
                else {
                    y[index] = 0
                    error_y[index] = 0
                }
            }
        }
        else {
            y = item.y
            error_y = item.error_y
        }

        trace.push(
            {
                x: x,
                y: y,
                type: 'bar',
                marker: {
                    color: color_theme[item.chemical].rgba,
                    line: {
                        color: color_theme[item.chemical].rgb,
                        width: 0.7,
                    }
                },
                name: item.chemical,
                error_y: {
                    type: 'data',
                    array: error_y,
                    visible: true,
                    color: color_theme[item.chemical].rgb,
                    thickness: 0.5,
                    width: 3,
                },
            }
        )
    })
    return {
        trace: trace,
        trace_0: trace_0
    }


}