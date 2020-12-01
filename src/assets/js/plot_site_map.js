
// import * as d3 from 'd3'
import Plotly from 'plotly.js'

const sites = [
    { 'name': 'Middle Bass Island', 'site_type': 'industrial', 'lat': '41.6939', 'lon': '-82.8090' },
    { 'name': 'Dunkirk', 'site_type': 'non-industrial', 'lat': '42.4990', 'lon': '-79.3724' },
    { 'name': 'Rockport', 'site_type': 'non-industrial', 'lat': '45.2163', 'lon': '-83.3479' },
    { 'name': 'Port Austin', 'site_type': 'industrial', 'lat': '44.0778', 'lon': '-82.9946' },
    { 'name': 'Saugatuck', 'site_type': 'industrial', 'lat': '42.6593', 'lon': '-86.2321' },
    { 'name': 'Sturgeon Bay', 'site_type': 'non-industrial', 'lat': '44.9074', 'lon': '-87.4415' },
    { 'name': 'Oswego', 'site_type': 'non-industrial', 'lat': '43.4951', 'lon': '-76.5198' },
    { 'name': 'North Hamlin', 'site_type': 'industrial', 'lat': '43.3712', 'lon': '-77.8752' },
    { 'name': 'Apostle Islands', 'site_type': 'industrial', 'lat': '46.9461', 'lon': '-90.6433' },
    { 'name': 'Keweenaw Point', 'site_type': 'non-industrial', 'lat': '47.4136', 'lon': '-87.6938' },
]

const config = {
    mapboxAccessToken: "pk.eyJ1IjoiZGVmdmUxOTg4IiwiYSI6ImNrNzNzZmN3dzBmMnMzZ3FvMzJ0MDRpa2QifQ.xLG4lim5AonGbkDtgP9-5A",
    displaylogo: false,
    responsive: true,
    displayModeBar: false
};

function unpack(rows, key, val) {
    if (val === "all") {
        return rows.map(function (row) { return row[key]; });
    }
    else {
        let res = rows.filter(function (row) { return row["site_type"] === val; });
        return res.map(function (row) { return row[key]; });
    }
}

function plot_map(div_name, map_config) {

    var data = [
        {
            type: "scattermapbox",
            text: unpack(sites, "name", "industrial"),
            lon: unpack(sites, "lon", "industrial"),
            lat: unpack(sites, "lat", "industrial"),
            marker: {color: "darkblue", size: 14},
            name: 'Industrial Areas',
            textposition: 'bottom',
            mode: 'markers+text',
            textfont: { size: 12, color: 'black' },
            showlegend: true,
        },
        {
            type: "scattermapbox",
            text: unpack(sites, "name", "non-industrial"),
            lon: unpack(sites, "lon", "non-industrial"),
            lat: unpack(sites, "lat", "non-industrial"),
            marker: { color: "green", size: 14 },
            name: 'Less-industrial Areas',
            textposition: 'bottom',
            mode: 'markers+text',
            textfont: { size: 12, color: 'black'},
            showlegend: true,
        },
    ];

    var layout = {
        dragmode: "zoom",
        mapbox: map_config,
        margin: { r: 0, t: 0, b: 0, l: 0 },
        autosize: true,
        legend: {
            x: 1,
            xanchor: 'right',
            font: {
                family: 'sans-serif',
                size: 14,
                color: '#000'
            },
        }
    };

    Plotly.newPlot(div_name, data, layout, config);
}


export default { plot_map }