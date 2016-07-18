function setText(id) {
        var text = prompt("Enter text");
        var x =document.getElementById(id);
        x.innerHTML = text;
}

function saveInfo() {
    var array = [4];
    var table = document.getElementById("table");
    if (table != null) {
        for (var i = 0; i < table.rows.length; i++) {
            array[i] = [];
            for (var j = 0; j < table.rows[i].cells.length; j++){
                var cell = table.rows[i].cells[j];
                var text = tableText(cell);
                array[i][j] = text;
            }

        }
    }

    function tableText(tableCell) {
       return tableCell.innerHTML;
    }

    console.log(array);
    return array;
}

