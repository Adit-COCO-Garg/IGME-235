// const THEME = ["#f0f0f0","#090029", true, true,];
const API_PARAMS = {
    query: "&q=",
    query_limit: "&limit=100",
    offset: 0,
    rating: "g",
    lang: "en",
    random_id: "oof",
    search_url: "https://api.giphy.com/v1/gifs/search?" + "api_key=md8TKXmklb61Iwgx5ARcazARdFESrjUy",
    q_time: 0,
    colc: ""
};


window.onload = (e) => {
    // document.querySelector("#searchterm").addEventListener("keydown", searchButtonClicked);
    // document.querySelector("#darkmode-toggle").addEventListener("mouseover", toggleDarkMouseOver);
    // document.querySelector("#darkmode-toggle").addEventListener("mouseleave", toggleDarkMouseOver);
    // document.querySelector("#darkmode-toggle").addEventListener("click", toggleDarkclick);
    document.querySelector("#searchterm").addEventListener("keyup", event=>{
        if (event.key == "Enter"){
            searchButtonClicked();
        }
    });

};



// function toggleDarkMouseOver(){
//     this.style.backgroundColor = THEME[3] ? THEME[0] : THEME[1];
//     THEME[3] = !THEME[3];
// }


// function toggleDarkclick(){
//     this.style.backgroundColor = THEME[2] ? THEME[0] : THEME[1];
//     document.querySelector("body").style.backgroundColor =  THEME[2] ? THEME[0] : THEME[1];
//     THEME[2] = !THEME[2];
//     THEME[3] = !THEME[3];
// }


// /* The function checks if the prototype method trim exists or not
//  * https://medium.com/@ugwuraphael/javascript-properties-and-methods-string-prototype-trim-7806d765188
//  * Raphael Ugwu
//  * 
// */
// if (!string.prototype.trim) {
//     String.prototype.trim = function() {
//     return this.replace(/^[\s\uFEFF\xAO] + |[\s\uFEFF\xAO] + $ /g, ' ');
//     };
//     }

async function searchButtonClicked(e) {
        if (API_PARAMS.q_time != 0) {
            API_PARAMS.colc.destroy();
            document.querySelectorAll(".grid-col").forEach(e => {
                e.innerHTML = ""
            });
            await temp();
            API_PARAMS.q_time = 0;
            API_PARAMS.colc = new Colcade(document.querySelector(".grid"), {
                columns: '.grid-col',
                items: '.grid-item'
            });
        } else {
            await temp();
            API_PARAMS.colc = new Colcade(document.querySelector(".grid"), {
                columns: '.grid-col',
                items: '.grid-item'
            });
            API_PARAMS.q_time = 0;
        }
        // if (!(API_PARAMS.q_time==0)) {
        //     // variable is undefined or null
        //     API_PARAMS.q_time=0;
        // }
        API_PARAMS.q_time = 1;
    
}

async function temp() {
    temp_term = (encodeURIComponent(document.querySelector("#searchterm").value).trim());
    if (temp_term.length < 1) {
        console.log("No search provided");
    } else {
        API_PARAMS.query += temp_term
        API_PARAMS.search_url += API_PARAMS.query + API_PARAMS.query_limit;
        let response = await fetch(API_PARAMS.search_url);
        let json = await response.json();
        let grid = document.querySelector(".grid");
        grid.innerHTML = `<section class="grid-col grid-col--1"></section>
        <section class="grid-col grid-col--2"></section>
        <section class="grid-col grid-col--3"></section>
        <section class="grid-col grid-col--4"></section>`;
        if (!json.data || json.data.length == 0) {
            console.log("not found!");
        } else {
            const gifResults = json.data;
            await gifResults.forEach(obj => {
                let d = document.createElement("div")
                d.className = "grid-item";
                d.innerHTML = `<img src="${obj.images.fixed_height.url}" alt="${obj.source}" class="giphy">`;
                grid.appendChild(d);
            });
            API_PARAMS.query = "&q=",
                API_PARAMS.search_url = "https://api.giphy.com/v1/gifs/search?" + "api_key=md8TKXmklb61Iwgx5ARcazARdFESrjUy"


            // selector string as first argument
        }

    }
    
}