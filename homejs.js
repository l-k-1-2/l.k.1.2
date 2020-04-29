
 const url='https://api.covid19india.org/data.json';
async function  getdata(){

    const response= await fetch(url);
     const json =await response.json();
     const {statewise}=json;
    console.log(statewise)


    var col = [];
        for (var i = 0; i < statewise.length; i++) {
            delete statewise[i]._id
            delete statewise[i].deltaconfirmed
            delete statewise[i].deltadeaths
            delete statewise[i].deltarecovered
            delete statewise[i].lastupdatedtime
            delete statewise[i].statecode
            delete statewise[i].statenotes

            for (var key in statewise[i]) {
                if (col.indexOf(key) === -1) {
                    col.push(key);
                }
            }
        }

        var table = document.createElement("table");

        // CREATE HTML TABLE HEADER ROW USING THE EXTRACTED HEADERS ABOVE.

        var tr = table.insertRow(-1);                   // TABLE ROW.

        var th = document.createElement("th");      // TABLE HEADER.
        th.innerHTML = col[4];
        tr.appendChild(th);

        for (var i = 0; i <col.length-1 ; i++) {
            var th = document.createElement("th");      // TABLE HEADER.
            th.innerHTML = col[i];
            tr.appendChild(th);
        }

        // ADD JSON DATA TO THE TABLE AS ROWS.
        for (var i = 1; i < statewise.length; i++) {

            tr = table.insertRow(-1);
            var tabCell = tr.insertCell(-1);
            tabCell.innerHTML = statewise[i][col[4]];

            for (var j = 0; j < col.length-1; j++) {
                var tabCell = tr.insertCell(-1);
                tabCell.innerHTML = statewise[i][col[j]];
            }
        }
        
        tr = table.insertRow(-1);
        var tabCell = tr.insertCell(-1);
        tabCell.innerHTML = statewise[0][col[4]];
        for (var j = 0; j < col.length-1; j++){
        var tabCell = tr.insertCell(-1);
        tabCell.innerHTML = statewise[0][col[j]];
      }

        // FINALLY ADD THE NEWLY CREATED TABLE WITH JSON DATA TO A CONTAINER.
        var divContainer = document.getElementById("showData");
        divContainer.innerHTML = "";
        divContainer.appendChild(table);

}
getdata();
