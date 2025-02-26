function makeLegend1(map, flag) {
    //1 GridType
    //2 ClassLabel
    //3 ThreeWays
    //4 FourWays
    //8 Walkability

    var legend = L.control({ position: 'bottomleft' });

    legend.onAdd = function(map) {
        var div = L.DomUtil.create('div', 'info legend');
        if (flag == 1) {
            div.innerHTML =
                '<div style="color:#FFFFFF;background-color:#000000">' + 'Rejected' + '</div>' +
                '<div style="color:#FFFFFF;background-color:#453781">' + 'Urban' + '</div>' +
                '<div style="background-color:#3CBB75">' + 'PeriUrban' + '</div>' +
                '<div style="background-color:#FFFFFF">' + 'Rural' + '</div>';
        } else if (flag == 2) {
            div.innerHTML =
                '<div style="color:#FFFFFF;background-color:#444444">' + 'Class Label 0' + '</div>' +
                '<div style="color:#FFFFFF;background-color:#481567">' + 'Class Label 1' + '</div>' +
                '<div style="color:#FFFFFF;background-color:#453781">' + 'Class Label 2' + '</div>' +
                '<div style="color:#FFFFFF;background-color:#39569C">' + 'Class Label 3' + '</div>' +
                '<div style="color:#FFFFFF;background-color:#2D708E">' + 'Class Label 4' + '</div>' +
                '<div style="color:#FFFFFF;background-color:#238A8D">' + 'Class Label 5' + '</div>';
        } else if (flag == 8) {
            div.innerHTML =
                '<div style="color:#FFFFFF;background-color:#444444">' + '0.0 - 0.3' + '</div>' +
                '<div style="color:#FFFFFF;background-color:#481567">' + '0.3 - 0.6' + '</div>' +
                '<div style="color:#FFFFFF;background-color:#453781">' + '0.6 - 0.9' + '</div>' +
                '<div style="color:#FFFFFF;background-color:#39569C">' + '0.9 - 1.2' + '</div>' +
                '<div style="color:#FFFFFF;background-color:#2D708E">' + '1.2 - 1.5' + '</div>' +
                '<div style="color:#FFFFFF;background-color:#238A8D">' + '1.5 - 1.8' + '</div>' +
                '<div style="background-color:#20A387">' + '1.8 - 2.1' + '</div>' +
                '<div style="background-color:#3CBB75">' + '2.1 - 2.4' + '</div>' +
                '<div style="background-color:#95D840">' + '2.4 - 2.7' + '</div>' +
                '<div style="background-color:#FDE725">' + '2.7 - 3.0' + '</div>' +
                '<div style="background-color:#FFFF99">' + '> 3.0' + '</div>';
        } else {
            var fac;
            if (flag == 3)
                fac = 50;
            else if (flag == 4)
                fac = 10;
            div.innerHTML =
                '<div style="color:#FFFFFF;background-color:#444444">' + '0 - ' + fac + '</div>' +
                '<div style="color:#FFFFFF;background-color:#481567">' + fac + ' - ' + fac * 2 + '</div>' +
                '<div style="color:#FFFFFF;background-color:#453781">' + fac * 2 + ' - ' + fac * 3 + '</div>' +
                '<div style="color:#FFFFFF;background-color:#39569C">' + fac * 3 + ' - ' + fac * 4 + '</div>' +
                '<div style="color:#FFFFFF;background-color:#2D708E">' + fac * 4 + ' - ' + fac * 5 + '</div>' +
                '<div style="color:#FFFFFF;background-color:#238A8D">' + fac * 5 + ' - ' + fac * 6 + '</div>' +
                '<div style="background-color:#20A387">' + fac * 6 + ' - ' + fac * 7 + '</div>' +
                '<div style="background-color:#3CBB75">' + fac * 7 + ' - ' + fac * 8 + '</div>' +
                '<div style="background-color:#95D840">' + fac * 8 + ' - ' + fac * 9 + '</div>' +
                '<div style="background-color:#FDE725">' + fac * 9 + ' - ' + fac * 10 + '</div>' +
                '<div style="background-color:#FFFF99">' + '> ' + fac * 10 + '</div>';
        }
        return div;
    };

    legend.addTo(map);
}

function makeLegend2(map, flag) {
    //Population

    var legend = L.control({ position: 'bottomleft' });

    legend.onAdd = function(map) {
        var div = L.DomUtil.create('div', 'info legend');
        var fac;
        if (flag == 1)
            fac = 9000;
        else if (flag == 2)
            fac = 7000;
        else if (flag == 3)
            fac = 7000;
        else if (flag == 4)
            fac = 6000;
        else if (flag == 5)
            fac = 5000;
        else if (flag == 6)
            fac = 5000;
        else if (flag == 7)
            fac = 1000
        div.innerHTML =
            '<div style="color:#FFFFFF;background-color:#444444">' + '0 - ' + fac + '</div>' +
            '<div style="color:#FFFFFF;background-color:#481567">' + fac + ' - ' + fac * 2 + '</div>' +
            '<div style="color:#FFFFFF;background-color:#453781">' + fac * 2 + ' - ' + fac * 3 + '</div>' +
            '<div style="color:#FFFFFF;background-color:#39569C">' + fac * 3 + ' - ' + fac * 4 + '</div>' +
            '<div style="color:#FFFFFF;background-color:#2D708E">' + fac * 4 + ' - ' + fac * 5 + '</div>' +
            '<div style="color:#FFFFFF;background-color:#238A8D">' + fac * 5 + ' - ' + fac * 6 + '</div>' +
            '<div style="background-color:#20A387">' + fac * 6 + ' - ' + fac * 7 + '</div>' +
            '<div style="background-color:#3CBB75">' + fac * 7 + ' - ' + fac * 8 + '</div>' +
            '<div style="background-color:#95D840">' + fac * 8 + ' - ' + fac * 9 + '</div>' +
            '<div style="background-color:#FDE725">' + fac * 9 + ' - ' + fac * 10 + '</div>' +
            '<div style="background-color:#FFFF99">' + '> ' + fac * 10 + '</div>'

        return div;
    };

    legend.addTo(map);
}

function makeLegend3(map, flag) {
    //Nearest Amenity - 1, 3, 5, 7, 9

    var legend = L.control({ position: 'bottomleft' });

    legend.onAdd = function(map) {
        var div = L.DomUtil.create('div', 'info legend');
        var fac;
        if (flag == 1)
            fac = 20;
        else if (flag == 3)
            fac = 150;
        else if (flag == 5)
            fac = 150;
        else if (flag == 7)
            fac = 200;
        else if (flag == 9)
            fac = 50
        div.innerHTML =
            '<div style="color:#FFFFFF;background-color:#444444">' + '0 - ' + fac + '</div>' +
            '<div style="color:#FFFFFF;background-color:#481567">' + fac + ' - ' + fac * 2 + '</div>' +
            '<div style="color:#FFFFFF;background-color:#453781">' + fac * 2 + ' - ' + fac * 3 + '</div>' +
            '<div style="color:#FFFFFF;background-color:#39569C">' + fac * 3 + ' - ' + fac * 4 + '</div>' +
            '<div style="color:#FFFFFF;background-color:#2D708E">' + fac * 4 + ' - ' + fac * 5 + '</div>' +
            '<div style="color:#FFFFFF;background-color:#238A8D">' + fac * 5 + ' - ' + fac * 6 + '</div>' +
            '<div style="background-color:#20A387">' + fac * 6 + ' - ' + fac * 7 + '</div>' +
            '<div style="background-color:#3CBB75">' + fac * 7 + ' - ' + fac * 8 + '</div>' +
            '<div style="background-color:#95D840">' + fac * 8 + ' - ' + fac * 9 + '</div>' +
            '<div style="background-color:#FDE725">' + fac * 9 + ' - ' + fac * 10 + '</div>' +
            '<div style="background-color:#FFFF99">' + '> ' + fac * 10 + '</div>'

        return div;
    };

    legend.addTo(map);
}

function makeLegend4(map, flag) {
    //Num Amenties

    var legend = L.control({ position: 'bottomleft' });

    legend.onAdd = function(map) {
        var div = L.DomUtil.create('div', 'info legend');
        var fac = 1
        div.innerHTML =
            '<div style="background-color:#FFFF99">' + '0 - ' + fac + '</div>' +
            '<div style="background-color:#FDE725">' + fac + ' - ' + fac * 2 + '</div>' +
            '<div style="background-color:#95D840">' + fac * 2 + ' - ' + fac * 3 + '</div>' +
            '<div style="background-color:#3CBB75">' + fac * 3 + ' - ' + fac * 4 + '</div>' +
            '<div style="background-color:#20A387">' + fac * 4 + ' - ' + fac * 5 + '</div>' +
            '<div style="color:#FFFFFF;background-color:#238A8D">' + fac * 5 + ' - ' + fac * 6 + '</div>' +
            '<div style="color:#FFFFFF;background-color:#2D708E">' + fac * 6 + ' - ' + fac * 7 + '</div>' +
            '<div style="color:#FFFFFF;background-color:#39569C">' + fac * 7 + ' - ' + fac * 8 + '</div>' +
            '<div style="color:#FFFFFF;background-color:#453781">' + fac * 8 + ' - ' + fac * 9 + '</div>' +
            '<div style="color:#FFFFFF;background-color:#481567">' + fac * 9 + ' - ' + fac * 10 + '</div>' +
            '<div style="color:#FFFFFF;background-color:#444444">' + '> ' + fac * 10 + '</div>'

        return div;
    };

    legend.addTo(map);
}

function makeLegend5(map, flag) {
    //Population Load

    var legend = L.control({ position: 'bottomleft' });

    legend.onAdd = function(map) {
        var div = L.DomUtil.create('div', 'info legend');
        var fac;
        if (flag == 3)
            fac = 2500;
        else
            fac = 2000
        div.innerHTML =
            '<div style="background-color:#FFFF99">' + '0 - ' + fac + '</div>' +
            '<div style="background-color:#FDE725">' + fac + ' - ' + fac * 2 + '</div>' +
            '<div style="background-color:#95D840">' + fac * 2 + ' - ' + fac * 3 + '</div>' +
            '<div style="background-color:#3CBB75">' + fac * 3 + ' - ' + fac * 4 + '</div>' +
            '<div style="background-color:#20A387">' + fac * 4 + ' - ' + fac * 5 + '</div>' +
            '<div style="color:#FFFFFF;background-color:#238A8D">' + fac * 5 + ' - ' + fac * 6 + '</div>' +
            '<div style="color:#FFFFFF;background-color:#2D708E">' + fac * 6 + ' - ' + fac * 7 + '</div>' +
            '<div style="color:#FFFFFF;background-color:#39569C">' + fac * 7 + ' - ' + fac * 8 + '</div>' +
            '<div style="color:#FFFFFF;background-color:#453781">' + fac * 8 + ' - ' + fac * 9 + '</div>' +
            '<div style="color:#FFFFFF;background-color:#481567">' + fac * 9 + ' - ' + fac * 10 + '</div>' +
            '<div style="color:#FFFFFF;background-color:#444444">' + '> ' + fac * 10 + '</div>'
        return div;
    };

    legend.addTo(map);
}