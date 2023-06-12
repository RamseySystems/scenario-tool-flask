/* on load open 
function on_load() {
    document.getElementById("leftTable").src = "./logs/AyraLog.html";
    document.getElementById("name").innerHTML = "Ayra";
    reset();
    story("Ayra");
    document.getElementById('rightData').src = "./data/Ayra/Full_Data/Person_Demographics.html";
    document.getElementById('views').style.display = 'inline-block';
    document.getElementById('fullData').style.display = 'inline-block';
    document.getElementById('json').style.display = 'inline-block';

    document.getElementById("fullData").style.backgroundColor = "rgb(69, 94, 110)";
    document.getElementById("fullData").style.color = "white";
    document.getElementById("views").style.backgroundColor = "whitesmoke";
    document.getElementById("views").style.color = "rgb(69, 94, 110)";
    document.getElementById("json").style.backgroundColor = "whitesmoke";
    document.getElementById("json").style.color = "rgb(69, 94, 110)";
}
*/


/* expand buttons */

document.getElementById("resizeEventLog").onclick = resize_event_log;
document.getElementById("resizeDataView").onclick = resize_data_view;

function resize_event_log() {
    if (document.getElementById("resizeEventLog").classList == "bi bi-arrow-up-right-square d-none d-lg-inline") {
        document.getElementById("left").className = "left col-12";
        document.getElementById("right").className = "right d-lg-none";
        document.getElementById("resizeEventLog").classList = "bi bi-arrow-down-left-square";
    } else {
        document.getElementById("left").className = "left col-12 col-lg-6 order-1 order-sm-1 order-lg-1";
        document.getElementById("right").className = "right col-12 col-lg-6 order-3 order-sm-3 order-lg-2";
        document.getElementById("resizeEventLog").classList = "bi bi-arrow-up-right-square d-none d-lg-inline";
    };
};

function resize_data_view() {
    if (document.getElementById("resizeDataView").classList == "bi bi-arrow-up-left-square d-none d-lg-inline") {
        document.getElementById("right").className = "right col-12";
        document.getElementById("left").className = "left d-lg-none";
        document.getElementById("resizeDataView").classList = "bi bi-arrow-down-right-square d-none d-lg-inline";
    } else {
        document.getElementById("left").className = "left col-12 col-lg-6 order-1 order-sm-1 order-lg-1";
        document.getElementById("right").className = "right col-12 col-lg-6 order-3 order-sm-3 order-lg-2";
        document.getElementById("resizeDataView").classList = "bi bi-arrow-up-left-square d-none d-lg-inline";
    };
};

function colour_abme_row() {
    window.addEventListener('load', () => {

    })
}


/* Drop down menu */

function reset() {
    document.getElementById("buttons").style.display = "block";
    document.getElementById("stories").style.display = "block";
    document.getElementById('leftTabs').style.display = 'inline-block';
    document.getElementById('rightData').src = './dataViewFiller.html';
    document.getElementById('fullData').style.display = 'none';
    document.getElementById('views').style.display = 'none';
    document.getElementById('json').style.display = 'none';

    document.getElementById('views').style.display = 'inline-block';
    document.getElementById('fullData').style.display = 'inline-block';
    document.getElementById('json').style.display = 'inline-block';

    document.getElementById("fullData").style.backgroundColor = "rgb(69, 94, 110)";
    document.getElementById("fullData").style.color = "white";
    document.getElementById("views").style.backgroundColor = "whitesmoke";
    document.getElementById("views").style.color = "rgb(69, 94, 110)";
    document.getElementById("json").style.backgroundColor = "whitesmoke";
    document.getElementById("json").style.color = "rgb(69, 94, 110)";
};

document.getElementById("Ayra").addEventListener("click", function() {
    document.getElementById("leftTable").src = "./logs/AyraLog.html";
    document.getElementById("name").innerHTML = "Ayra";
    reset();
    document.getElementById("rightData").src = "./data/Ayra/Full_Data/About_me.html"
    story("Ayra");
    colour_abme_row()
});

document.getElementById("Claire").addEventListener("click", function() {
    document.getElementById("leftTable").src = "./logs/ClaireLog.html";
    document.getElementById("name").innerHTML = "Claire";
    reset();
    document.getElementById("rightData").src = "./data/Claire/Full_Data/About_me.html"
    story("Claire");
});

document.getElementById("Keith").addEventListener("click", function() {
    document.getElementById("leftTable").src = "./logs/KeithLog.html";
    document.getElementById("name").innerHTML = "Keith";
    reset();
    document.getElementById("rightData").src = "./data/Keith/Full_Data/About_me.html"
    story("Keith");
});

document.getElementById("Michael").addEventListener("click", function() {
    document.getElementById("leftTable").src = "./logs/MichaelLog.html";
    document.getElementById("name").innerHTML = "Michael";
    reset();
    document.getElementById("rightData").src = "./data/Michael/Full_Data/About_me.html"
    story("Michael");
});

document.getElementById("Alicia-HighTech").addEventListener("click", function() {
    document.getElementById("leftTable").src = "./logs/Alicia-HighTechLog.html";
    document.getElementById("name").innerHTML = "Alicia";
    reset();
    document.getElementById("rightData").src = "./data/Alicia-HighTech/Full_Data/About_me.html"
    story("Alicia");
});

document.getElementById("Alicia-LowTech").addEventListener("click", function() {
    document.getElementById("leftTable").src = "./logs/Alicia-LowTechLog.html";
    document.getElementById("name").innerHTML = "Alicia";
    reset();
    document.getElementById("rightData").src = "./data/Alicia-LowTech/Full_Data/About_me.html"
    story("Alicia");
});



/* stories pop up */

function story(name) {
    document.getElementById("storyBox").style.display = "block";
    let path = './Stories/' + name + 'Story.html';
    document.getElementById("storyViewer").src = path;
};


document.getElementById('stories').addEventListener("click", function() {
    if (document.getElementById("storyBox").style.display == "none") {
        //Show pop up box
        document.getElementById("storyBox").style.display = "block";
        //Add text
        var name = document.getElementById("name").innerHTML;
        let path = './Stories/' + name + 'Story.html';
        document.getElementById("storyViewer").src = path;
    } else {
        //Hide story box
        document.getElementById("storyBox").style.display = "none";
    };
});

//Closing story pop up
document.getElementById("storyBox").addEventListener("click", function() {
    document.getElementById("storyBox").style.display = "none"
    var iFrame = document.getElementById("leftTable")
    var log = iFrame.contentDocument || iFrame.contentWindow.document;
    var abme_row = log.getElementById("About_Me.html")
    if (log.getElementById("hidden").innerHTML == "true") {
        abme_row.style.backgroundColor = "#ADB3B3"
    }
});



/* Tabs */

//Functions
function changeTabColors(mainTab) {
    if (mainTab == 'fullData') {
        document.getElementById("fullData").style.backgroundColor = "rgb(69, 94, 110)";
        document.getElementById("fullData").style.color = "white";
        document.getElementById("views").style.backgroundColor = "whitesmoke";
        document.getElementById("views").style.color = "rgb(69, 94, 110)";
        document.getElementById("json").style.backgroundColor = "whitesmoke";
        document.getElementById("json").style.color = "rgb(69, 94, 110)";
    } else if (mainTab == 'views') {
        document.getElementById("views").style.backgroundColor = "rgb(69, 94, 110)";
        document.getElementById("views").style.color = "whitesmoke";
        document.getElementById("fullData").style.backgroundColor = "whitesmoke";
        document.getElementById("fullData").style.color = "rgb(69, 94, 110)";
        document.getElementById("json").style.backgroundColor = "whitesmoke";
        document.getElementById("json").style.color = "rgb(69, 94, 110)";
    } else {
        document.getElementById("json").style.backgroundColor = "rgb(69, 94, 110)";
        document.getElementById("json").style.color = "whitesmoke";
        document.getElementById("fullData").style.backgroundColor = "whitesmoke";
        document.getElementById("fullData").style.color = "rgb(69, 94, 110)";
        document.getElementById("views").style.backgroundColor = "whitesmoke";
        document.getElementById("views").style.color = "rgb(69, 94, 110)";
    };
};

function changeSource(source) {
    //Get old source and split it at / into an array
    var oldSource = document.getElementById('rightData').src
    var split = oldSource.split('/')

    var split_length = split.length

    var split1 = split[split_length - 4]
    var split2 = split[split_length - 3]

    /* When running locally, use non prsb line */
    // var fullStart = `http://127.0.0.1:5503/${split1}/${split2}`
    // var fullStart = `https://theprsb.org/diabetessimulation/${split1}/${split2}`
    // https://theprsb.org/diabetessimulation/data/Claire/Full_Data/About_Me.html
    // split - https, '', theprsb.org, diabetessimulation,  data, Claire, Full_Data, About_Me.html

    var fullStart = `${split.slice(0, -4).join("/")}/${split1}/${split2}`

    //End split
    console.log(fullStart)
    var end = split.slice(-1)
    console.log(end)

    //Determine folder
    if (source == 'Full_Data') {
        let convertedEnd = end[0].slice(0, -4) + 'html'
        var new_source = fullStart + '/Full_Data/' + convertedEnd
    } else if (source == 'JSON') {
        let convertedEnd = end[0].slice(0, -4) + 'json'
        var new_source = fullStart + '/JSON/' + convertedEnd
    } else if (source == 'Views') {
        let convertedEnd = end[0].slice(0, -4) + 'html'
        var new_source = fullStart + '/Views/' + convertedEnd
    };

    document.getElementById("rightData").src = new_source
};


document.getElementById("fullData").addEventListener('click', function() {
    //change tab colors
    changeTabColors("fullData");
    //Change iframe src
    changeSource("Full_Data");
});

document.getElementById("views").addEventListener('click', function() {
    //change tab colors
    changeTabColors("views");
    //Change iframe src
    changeSource("Views");
});

document.getElementById("json").addEventListener('click', function() {
    //change tab colors
    changeTabColors("json");
    //Change iframe src
    changeSource("JSON");
});