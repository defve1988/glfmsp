// change UI state
const state = {
    people: [
        {
            name: "Thomas M. Holsen",
            title: "Project Director",
            img: require("@/assets/imgs/holsen.jpg"),
            link: "https://www.clarkson.edu/people/thomas-holsen",
        },
        {
            name: "Philip K. Hopke",
            title: "Project Director",
            img: require("@/assets/imgs/hopke.jpg"),
            link: "https://www.clarkson.edu/people/philip-hopke",
        },
        {
            name: "Chuanlong Zhou",
            title: "Site Creator",
            img: require("@/assets/imgs/chuanlong.png"),
            link: "",
        },
        {
            name: "other people",
            title: "xxxxx",
            img: "",
            link: "",
        },
    ],
    publications: [
        "Parvizian, B. A.; Zhou, C.; Fernando, S.; Crimmins, B. S.; Hopke, P. K.; Holsen, T. M. J. E. S.; Technology, Concentrations and Long-Term Temporal Trends of Hexabromocyclododecanes (HBCDD) in Lake Trout and Walleye from the Great Lakes. 2020, 54, (10), 6134-6141.",
        "Zhou, C.; Pagano, J.; McGoldrick, D. J.; Chen, D.; Crimmins, B. S.; Hopke, P. K.; Milligan, M. S.; Murphy, E. W.; Holsen, T. M., Legacy Polybrominated Diphenyl Ethers (PBDEs) Trends in Top Predator Fish of the Laurentian Great Lakes (GL) from 1979 to 2016: Will Concentrations Continue to Decrease? Environ Sci Technol 2019, 53, (12), 6650-6659.",
        "Zhou, C.; Cohen, M. D.; Crimmins, B. A.; Zhou, H.; Johnson, T. A.; Hopke, P. K.; Holsen, T. M., Mercury temporal trends in top predator fish of the Laurentian Great Lakes from 2004 to 2015: are concentrations still decreasing? Environmental science & technology 2017, 51, (13), 7386-7394.",
        "...",
    ],
    time_lines: [
        {
            date: "2020.12.1",
            title: "Update Dashboard",
            text:
                "Add more figures. Add figure enlarge and selection function. Add figure animations.",
        },
        {
            date: "2020.11.20",
            title: "Dashboard",
            text: "Add data visualization dashboard using D3.js and Plotly.js",
        },
        {
            date: "2020.10.15",
            title: "Update Great Lakes Maps",
            text:
                "Redesign the Great Lakes map and sites, add more complicated interactions.",
        },
        {
            date: "2020.9.20",
            title: "Simple Visualization",
            text:
                "Add simple visualization and interactions for Great Lakes. Add raw data table (password needed).",
        },
        {
            date: "2020.9.1",
            title: "Web Frame and UI",
            text:
                "Project started. Web Frame and UI were built with Vue.js and Vuetify.js.",
        },
    ],
};

const getters = {

};

const actions = {

};

const mutations = {

};

export default {
    state,
    getters,
    actions,
    mutations
};