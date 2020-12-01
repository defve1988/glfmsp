export default class Trace {
    color_theme = {
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
        "Age": {
            rgb: "rgb(24, 5, 82)",
            rgba: "rgba(24, 5, 82,0.5)"
        },
        "Lipid": {
            rgb: "rgb(163, 10, 158)",
            rgba: "rgba(163, 10, 158,0.5)"
        },
        "Lake Trout": {
            rgb: "rgb(52, 128, 235)",
            rgba: "rgba(52, 128, 235,0.5)"
        },
        "Walleye": {
            rgb: "rgb(230, 90, 39)",
            rgba: "rgba(230, 90, 39,0.5)"
        },
        "Before 2010": {
            rgb: "rgb(200, 30, 30)",
            rgba: "rgba(200, 30, 30, 0.5)"
        },
        "After 2010": {
            rgb: "rgb(30, 30, 200)",
            rgba: "rgba(30, 30, 200, 0.5)"
        }
    }
    // plot_year = [2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015]
    constructor(color_theme) {
        if (color_theme != null) this.color_theme = color_theme
    }

    gen_pie(data) {
        var trace = [{
            values: [],
            labels: [],
            type: 'pie',
            marker: {
                colors: [],
            },
            textinfo: "label+percent",
            textposition: "outside",
        }];
        for (const [key, value] of Object.entries(data)) {
            trace[0].values.push(Math.round(value * 100) / 100)
            trace[0].labels.push(key)
            trace[0].marker.colors.push(this.color_theme[key].rgba)
        }
        return trace
    }

    gen_box(data) {
        var trace = []
        data.forEach(item => {
            trace.push({
                x: item.x,
                y: item.y,
                name: item.y_name,
                marker: {
                    color: this.color_theme[item.y_name].rgba,
                    outliercolor: 'rgba(219, 64, 82, 0.6)',
                    line: {
                        outliercolor: this.color_theme[item.y_name].rgb,
                        outlierwidth: 1
                    }
                },
                type: 'box',
                boxpoints: 'Outliers'
            })
        })
        return trace
    }

    gen_hist(data, max_y) {
        var trace = []
        data.forEach(item => {
            // console.log(item.y_name, )
            // console.log(this.color_theme[item.y_name])
            trace.push(
                {
                    x: item.y,
                    name: item.y_name,
                    // autobinx: data.length == 1 ? true : false,
                    autobinx: true,
                    xbins: {
                        end: max_y,
                        size: max_y / 100,
                        start: 0
                    },
                    // histnorm: "probability",
                    histnorm: "counts",
                    marker: {
                        color: this.color_theme[item.y_name].rgba,
                        line: {
                            color: this.color_theme[item.y_name].rgb,
                            width: 0.5
                        }
                    },
                    opacity: 0.7,
                    type: "histogram",
                }
            )
        })
        return trace
    }

    gen_scatter(data) {
        var trace = []
        data.forEach(item => {
            trace.push({
                x: item.x,
                y: item.y,
                type: 'scatter',
                mode: 'markers',
                name: item.y_name,
                marker: {
                    size: 5,
                    color: this.color_theme[item.y_name].rgba,
                },
            })
        }
        )
        // console.log(trace)
        return trace
    }

    gen_bar(data) {
        var trace = []
        data.forEach(item => {
            trace.push(
                {
                    x: item.x,
                    y: item.y,
                    width:0.7,
                    type: 'bar',
                    marker: {
                        color: this.color_theme[item.y_name].rgba,
                        line: {
                            color: this.color_theme[item.y_name].rgb,
                            width: 0.7,
                        }
                    },
                    name: item.y_name,
                    error_y: {
                        type: 'data',
                        array: item.std_y,
                        visible: true,
                        color: this.color_theme[item.y_name].rgb,
                        thickness: 1,
                        width: 3,
                    },
                }
            )
        })
        return trace
    }


    gen_plot_layout(plot, axis_range) {
        var font_color = "#7f7f7f"
        var layout = {
            //margin: { r: 20, t: 10, b: 25, l: 20 },
            height: 200,
            autosize: true,
            font: { size: 12, color: font_color, },
            showlegend: false,
            xaxis: {
                // dtick: "auto",
                automargin: true,
                range: [0, axis_range[0] * 1.05],
                title: {
                    text: plot.x_title,
                    font: { size: 12, color: font_color },
                    //standoff: 40
                },
            },
            yaxis: {
                // dtick: "auto",
                automargin: true,
                range: [0, axis_range[1] * 1.05],
                title: {
                    text: plot.y_title,
                    font: { size: 12, color: font_color },
                    //standoff: 40
                },
            },
            legend: {
                font: { size: 12, color: font_color, },
                xanchor: "auto",
                yanchor: "auto",
                x: 1,
                y: 1,
            },

        };
        switch (plot.type) {
            case "box":
                break;
            case "hist":
                layout.bargap = 0.05
                layout.bargroupgap = 0.2
                layout.barmode = "overlay"
                layout.xaxis.range = null
                layout.yaxis.range = null
                break;
            case "pie":
                break;
            case "scatter":
                break;
            case "bar_stacked":
                layout.barmode = "stack"
                layout.bargap = 0.2
                break;
        }
        if (plot.x == "Year") {
            layout.xaxis.range = [2003.5, 2015.5]
            layout.xaxis.dtick = 2
        }
        return layout
    }
}