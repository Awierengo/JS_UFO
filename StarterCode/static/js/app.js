// from data.js
var tableData = data;

//handle for table
var tbody = d3.select('tbody');
//function to append data to table
function populate(myData) {
    myData.forEach((x) => {
        tbody.append("tr");
        Object.entries(x).forEach(([key, value]) => {
            tbody.append("td").text(value);
        });
    });
};
//function to clear current table
function ClearAll() {
    tbody.html("")
};
//initialize data into table
populate(tableData);
//handle for 'filter table' button
var enter = d3.select('#filter-btn');
//on submission clears current table and populates new filtered table
enter.on('click', function() {
    d3.event.preventDefault();
    //filtering
    var userValue = d3.select("#datetime").property("value");
    var filtered = data.filter(row => row.datetime === userValue);
    //clearing & repopulating
    ClearAll();
    populate(filtered);
});