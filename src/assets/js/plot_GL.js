
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
    constructor(div_name, data) {
        this.div_name = div_name
        this.config = {
            displaylogo: false,
            responsive: true,
            displayModeBar: false,
            staticPlot: true,
            editable: false
        }
        this.set_data(data)
    }

    set_data(data) {
        this.type = data.plots.type
        this.layout = data.layout
        this.trace = data.trace
    }

    set_layout(plot_size) {
        if (plot_size == "main_plot") {
            this.layout.height = 450;
            this.layout.margin = { r: 30, t: 25, b: 25, l: 75 };
            this.layout.font.size = 14;
            if (Object.keys(this.layout.xaxis).includes("title_temp")) {
                this.layout.xaxis.title = this.layout.xaxis.title_temp;
                this.layout.yaxis.title = this.layout.yaxis.title_temp;
            }
            try {
                this.layout.xaxis.title.font.size = 18;
                this.layout.yaxis.title.font.size = 18;

                this.layout.xaxis.showticklabels = true;
                this.layout.yaxis.showticklabels = true;

                this.layout.yaxis.showline = true;
                this.layout.xaxis.showline = true;

                this.layout.yaxis.showgrid = true;
                this.layout.xaxis.showgrid = true;

                this.layout.xaxis.zeroline = true;
                this.layout.yaxis.zeroline = true;

                this.config.responsive = true;
                this.config.staticPlot = false;
                // this.config.editable = true;


                if (this.type !== "pie") {
                    this.layout.showlegend = true;
                } else {
                    this.layout.showlegend = false;
                }
            } catch (err) {
                alert(err);
            }
        }
        else if (plot_size == "small_plot") {
            this.layout.height = 200;
            (this.layout.margin = { r: 20, t: 10, b: 25, l: 20 }),
                (this.layout.font.size = 8);
            this.layout.xaxis.title_temp = this.layout.xaxis.title;
            this.layout.xaxis.title = "";
            this.layout.yaxis.title_temp = this.layout.yaxis.title;
            this.layout.yaxis.title = "";

            this.layout.xaxis.showticklabels = false;
            this.layout.yaxis.showticklabels = false;

            // this.layout.yaxis.showline = false;
            // this.layout.xaxis.showline = false;

            // this.layout.yaxis.showgrid = false;
            // this.layout.xaxis.showgrid = false;

            this.layout.xaxis.zeroline = false;
            // this.layout.yaxis.zeroline = false;

            this.layout.showlegend = false;
            if (this.type == "pie") {
                this.trace.forEach((_, index) => {
                    this.trace[index].textinfo = "none"
                });
            }
            // this.config.responsive = false;
        }

    }

    draw(type) {
        var animated = ["bar", "scatter", "bar_stacked","box"]
        if (animated.includes(type)) {
            var start_trace = []
            this.trace.forEach(t => {
                var temp = {}
                for (const [key, value] of Object.entries(t)) {
                    temp[key] = value
                }
                if (type == "scatter") {
                    temp.x = temp.x.map(x => x == null ? null : 0)
                }
                temp.y = temp.y.map(x => x == null ? null : 0)
                start_trace.push(temp)
            })
            Plotly.newPlot(this.div_name, start_trace, this.layout, this.config);
            Plotly.animate(this.div_name,
                {
                    data: this.trace,
                    traces: Array.from(Array(this.trace.length).keys()),
                    //  layout: { yaxis:{range: [0, 20] }}
                }, {
                transition: {
                    duration: 1000,
                    easing: 'cubic-in-out'
                },
            })
        }
        else {
            Plotly.newPlot(this.div_name, this.trace, this.layout, this.config);
        }
    }

    clear() {
        Plotly.purge(this.div_name)
    }

    animate_with_frame() {
        // var frame_num = 30
        var div_name = this.div_name
        var frames = this.gene_frame(this.trace)
        var start_trace = []
        this.trace.forEach((t, index) => {
            var temp = {}
            for (const [key, value] of Object.entries(t)) {
                temp[key] = value
            }
            temp.y = frames[0].data[index].y
            start_trace.push(temp)
        })
        Plotly.newPlot(div_name, start_trace, this.layout, this.config
        ).then(function () {
            console.log(frames)
            Plotly.animate(div_name, frames, {
                transition: {
                    duration: 0
                },
                frame: {
                    duration: 10,
                    redraw: false
                }
            });
        });

    }

    gene_frame(data, frame_num = 30) {
        console.log(data)
        // var interval = Math.floor(data[0].x.length / frame_num)
        var frames = []
        for (var i = 0; i <= frame_num; i++) {
            var f_data = { data: [] }
            data.forEach(t => {
                var temp = { x: [], y: [] }
                temp.x = t.x.map(x => x)
                temp.y = t.y.map(y => parseFloat(y) / frame_num * i)
                f_data.data.push(temp)
            })
            frames.push(f_data)
        }
        return frames
    }

    plot_animation(data, layout_config = {}) {
        var fig_layout_config = {
            yaxis: { range: [0, data.max_y] },
        }
        Object.assign(fig_layout_config, layout_config)
        var layout = this.set_layout(fig_layout_config)
        Plotly.newPlot(this.div_name, data.trace_data.trace_0, layout, this.plotly_config);

        var traces = Array.from(Array(data.trace_data.trace.length).keys())
        Plotly.animate(this.div_name, {
            data: data.trace_data.trace,
            traces: traces,
            layout: { range: [0, data.max_y] }
        }, {
            transition: {
                duration: 1000,
                easing: 'cubic-in-out'
            },
        })

    }

}

