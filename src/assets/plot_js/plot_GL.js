
import Plotly from 'plotly.js'

// function covert_rgb(hex, alpha) {
//     if (hex.length === 3) {
//         hex = `${hex[0]}${hex[0]}${hex[1]}${hex[1]}${hex[2]}${hex[2]}`;
//     }

//     const r = parseInt(hex.substring(0, 2), 16);
//     const g = parseInt(hex.substring(2, 4), 16);
//     const b = parseInt(hex.substring(4, 6), 16);

//     return `rgba(${r},${g},${b},${alpha})`;
// }

// function getRandomInt(max) {
//     return Math.floor(Math.random() * Math.floor(max));
//   }


export default class Plotting {
    // fig_opt = {
    //     fig_size: { width: 1180, height: 600 },
    //     fig_margin: { r: 100, t: 50, b: 75, l: 125 },
    //     font: { size: 14 },
    //     showlegend: true,
    //     legend:{ font: { size: 12 }, xanchor: "auto", yanchor: "auto", x: 1, y: 0 }
    // }
    constructor(div_name, fig_opt) {
        this.div_name = div_name
        this.fig_size = fig_opt.fig_size
        this.fig_margin = fig_opt.fig_margin
        this.color_theme = [
            '1E88E5',
            '28965A',
            'E53E20',
            '7CB342',
            'd95282',
            'FBC02D',
            '00B8DC',
            '232322',
            'AAAAAA',
        ]
        this.year = [2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015]
        this.plotly_config = {
            displaylogo: false,
            responsive: true,
            displayModeBar: false,
            staticPlot: false,
            editable: false
        }
        this.layout_default = {
            margin: this.fig_margin,
            // width: this.fig_size.width,
            height: this.fig_size.height,
            font: fig_opt.font,
            showlegend: fig_opt.showlegend,
            legend: fig_opt.legend,
            autosize: true,
            xaxis: {
                autotick: true,
                dtick: 2
            },
            yaxis: {
                autotick: true,
                dtick: 50
            }
        }
    }
    clear() {
        Plotly.purge(this.div_name)
    }

    set_layout(layout_config) {
        return Object.assign(this.layout_default, layout_config)
    }

    plot_bar(data, layout_config = {}) {
        var x = this.year
        var y0 = this.year.map(() => 0)
        var y = this.year.map(() => 0)
        var error_y = this.year.map(() => 0)
        for (var i = 0; i < data.y.length; i++) {
            var index = this.year.indexOf(parseInt(data.x[i]))
            if (index >= 0) {
                y[index] = data.y[i]
                error_y[index] = data.error_y[i]
            }
            else {
                y[index] = 0
                error_y[index] = 0
            }
        }
        var trace_data_0 = [{
            x: x,
            y: y0,
            type: 'bar',
        }];

        var trace_data = [{
            x: x,
            y: y,
            type: 'bar',
            marker: {
                color: data.color.rgba,
                line: {
                    color: data.color.rgb,
                    width: 0.7,
                }
            },
            error_y: {
                type: 'data',
                array: error_y,
                visible: true,
                color: data.color.rgb,
                thickness: 0.5,
                width: 3,
            },
        }];

        var fig_layout_config = {
            yaxis: { range: [0, data.max_val + 100] }
        }

        Object.assign(fig_layout_config, layout_config)
        var layout = this.set_layout(fig_layout_config)
        Plotly.newPlot(this.div_name, trace_data_0, layout, this.plotly_config);
        Plotly.animate(this.div_name, {
            data: trace_data,
            traces: [0],
            layout: {
                yaxis: { range: [0, data.max_val + 100] }
            }
        }, {
            transition: {
                duration: 500,
                easing: 'cubic-in-out'
            },
        })
    }

    plot_scatter(x, y, layout_config = {}) {
        var trace_data = [{
            x: x,
            y: y,
            mode: 'markers',
            type: 'scatter',
            marker: {
                size: 4,
            }

        }];
        var fig_layout_config = {
        }
        console.log(trace_data)
        Object.assign(fig_layout_config, layout_config)
        // var layout = this.set_layout(fig_layout_config)
        Plotly.addTraces(this.div_name, trace_data);
        // Plotly.animate(this.div_name, {
        //     data: trace_data,
        //     traces: [1],
        //     layout: {}
        //   }, {
        //     transition: {
        //       duration: 500,
        //       easing: 'cubic-in-out'
        //     },
        //     frame: {
        //       duration: 500
        //     }
        //   })

    }

    plot_pie(data, layout_config = {}) {

        var trace_data_0 = [{
            values: data.values.map(() => 0),
            labels: data.labels,
            type: 'pie',
        }];

        var trace_data = [{
            values: data.values,
            labels: data.labels,
            type: 'pie',
            marker: {
                colors: data.color,
            },
        }];

        var fig_layout_config = {
            yaxis: { range: [0, data.max_val + 100] }
        }

        Object.assign(fig_layout_config, layout_config)
        var layout = this.set_layout(fig_layout_config)
        Plotly.newPlot(this.div_name, trace_data_0, layout, this.plotly_config);
        Plotly.animate(this.div_name, {
            data: trace_data,
            traces: [0],
        }, {
            transition: {
                duration: 500,
                easing: "quadratic-in-out"
            },
        })
    }

    plot_general(data, layout_config = {}) {
        var layout = this.set_layout(layout_config)
        Plotly.newPlot(this.div_name, data.trace, layout, this.plotly_config);
    }


    plot_stacked_bar(all_data, layout_config = {}) {
        var x = this.year
        var y0 = this.year.map(() => 0)
        var trace_data_0 = [
            { x: x, y: y0, type: 'bar' },
            { x: x, y: y0, type: 'bar' },
            { x: x, y: y0, type: 'bar' },
            { x: x, y: y0, type: 'bar' },
            { x: x, y: y0, type: 'bar' },
            { x: x, y: y0, type: 'bar' },];

        var trace_data = []

        for (const [key, value] of Object.entries(all_data)) {
            // console.log(value)
            var y = this.year.map(() => 0)
            var error_y = this.year.map(() => 0)

            for (var i = 0; i < value.y.length; i++) {
                var index = this.year.indexOf(parseInt(value.x[i]))
                if (index >= 0) {
                    y[index] = value.y[i]
                    error_y[index] = value.error_y[i]
                }
                else {
                    y[index] = 0
                    error_y[index] = 0
                }
            }

            var temp_data = {
                x: x,
                y: y,
                type: 'bar',
                marker: {
                    color: value.color.rgba,
                    line: {
                        color: value.color.rgb,
                        width: 0.7,
                    }
                },
                name: key,
                error_y: {
                    type: 'data',
                    array: error_y,
                    visible: true,
                    color: value.color.rgb,
                    thickness: 0.5,
                    width: 3,
                },
            };

            trace_data.push(temp_data)
        }

        var fig_layout_config = {
            yaxis: { range: [0, 2000] },
            barmode: 'stack'
        }


        Object.assign(fig_layout_config, layout_config)
        var layout = this.set_layout(fig_layout_config)
        Plotly.newPlot(this.div_name, trace_data_0, layout, this.plotly_config);
        Plotly.animate(this.div_name, {
            data: trace_data,
            traces: [0, 1, 2, 3, 4, 5],
            layout: {
                yaxis: { range: [0, 2000] }
            }
        }, {
            transition: {
                duration: 500,
                easing: 'cubic-in-out'
            },
        })
    }

    plot_animation(data, layout_config = {}){
        console.log(data)
        var fig_layout_config = {
            yaxis: { range: [0, data.max_y] },
            barmode: 'stack'
        }
        Object.assign(fig_layout_config, layout_config)
        var layout = this.set_layout(fig_layout_config)
        Plotly.newPlot(this.div_name, data.trace_data.trace_0,layout, this.plotly_config);

        var traces = Array.from(Array(data.trace_data.trace.length).keys())
        Plotly.animate(this.div_name, {
            data: data.trace_data.trace,
            traces: traces,
            layout:{ range: [0, data.max_y] }
        }, {
            transition: {
                duration: 500,
                easing: 'cubic-in-out'
            },
        })


    }
}

