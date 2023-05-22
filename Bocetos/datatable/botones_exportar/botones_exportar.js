
var temp=null;
$(document).ready(function () {
    function format(d) {
        var html = '<table cellpadding="5" cellspacing="0" border="0" style="padding-left:50px;">' +
            '<thead>' +
            '<tr>' +
            '<th> </th>' +
            '<th>Result</th>' +
            '<th>Notes</th>' +
            '</tr>' +
            '</thead>';
        for (i = 0; i < d.results.length; i++) {
            result = d.results[i];

            html += '<tr>' +
                '<td></td>' +
                '<td class="text-left">' + result.result + '</td>' +
                '<td class="text-left">' + result.note + '</td>' +
                '</tr>';

        }



        return html;
    }

    var data = [
        {
            name: 'Test 1',
            date: '06/15/2018',
            description: 'This is test 1',
            results: [
                {
                    result: 'passed',
                    note: 'note 1'
                }
            ]
        },
        {
            name: 'Test 2',
            date: '10/31/2018',
            description: 'This is test 2',
            results: [
                {
                    result: 'failed 1',
                    note: 'note 2a'
                },
                {
                    result: 'failed 2',
                    note: 'note 2b'
                }
            ]
        },
        {
            name: 'Test 3',
            date: '03/05/2018',
            description: 'This is test 3',
            results: [
                {
                    result: 'passed with exception',
                    note: 'note 3'
                }
            ]
        },
    ];

    var table = $('#example').DataTable({
        data: data,
        columns: [
            {
                data: 'name'
            },
            {
                data: 'date'
            },
            {
                data: 'description'
            },
            {
                data: null,
                visible: false,
                render: function (data, type, row, meta) {
                    return meta.row;
                }
            }
        ],
        dom: 'Bfrtip',
        buttons: [{
            extend: 'excelHtml5',
            customize: function (xlsx) {

                console.log("xlsx ", xlsx);

                var table = $('#example').DataTable();

                // Get number of columns to remove last hidden index column.
                var numColumns = table.columns().header().count();

                console.log("numColumns ", numColumns); 

                // Get sheet.
                var sheet = xlsx.xl.worksheets['sheet1.xml'];

                console.log("sheet", sheet);

                var col = $('col', sheet);
                // Set the column width.
                $(col[1]).attr('width', 20);

                // Get a clone of the sheet data.        
                var sheetData = $('sheetData', sheet).clone(); // 

                console.log("sheetData", sheetData);

                temp = sheetData;

                // Clear the current sheet data for appending rows.
                $('sheetData', sheet).empty();

                // Row count in Excel sheet.
                var rowCount = 1;

                // Itereate each row in the sheet data.
                // la data del la tabla de la hoja seleccionada
                $(sheetData).children().each(function (index) {


                    console.log(index);
                    // Used for DT row() API to get child data.
                    var rowIndex = index - 1;

                    // Don't process row if its the header row.
                    if (index > 0) {

                        // Get row
                        var row = $(this.outerHTML);

                        console.log("row", row);

                        // Set the Excel row attr to the current Excel row count.
                        row.attr('r', rowCount);

                        var colCount = 1;

                        // Iterate each cell in the row to change the rwo number.
                        row.children().each(function (index) {
                            var cell = $(this);

                            // Set each cell's row value.
                            var rc = cell.attr('r');
                            rc = rc.replace(/\d+$/, "") + rowCount;
                            cell.attr('r', rc);

                            if (colCount === numColumns) {
                                cell.html('');
                            }

                            colCount++;
                        });

                        // Get the row HTML and append to sheetData.
                        row = row[0].outerHTML;
                        $('sheetData', sheet).append(row);
                        rowCount++;

                        // Get the child data - could be any data attached to the row.
                        var childData = table.row(':eq(' + rowIndex + ')').data().results;

                        if (childData.length > 0) {
                            // Prepare Excel formated row
                            headerRow = '<row r="' + rowCount +
                                '" s="2"><c t="inlineStr" r="A' + rowCount +
                                '"><is><t>' +
                                '</t></is></c><c t="inlineStr" r="B' + rowCount +
                                '" s="2"><is><t>Result' +
                                '</t></is></c><c t="inlineStr" r="C' + rowCount +
                                '" s="2"><is><t>Notes' +
                                '</t></is></c></row>';

                            // Append header row to sheetData.
                            $('sheetData', sheet).append(headerRow);
                            rowCount++; // Inc excelt row counter.

                        }

                        // The child data is an array of rows
                        for (c = 0; c < childData.length; c++) {

                            // Get row data.
                            child = childData[c];

                            // Prepare Excel formated row
                            childRow = '<row r="' + rowCount +
                                '"><c t="inlineStr" r="A' + rowCount +
                                '"><is><t>' +
                                '</t></is></c><c t="inlineStr" r="B' + rowCount +
                                '"><is><t>' + child.result +
                                '</t></is></c><c t="inlineStr" r="C' + rowCount +
                                '"><is><t>' + child.note +
                                '</t></is></c></row>';

                            // Append row to sheetData.
                            $('sheetData', sheet).append(childRow);
                            rowCount++; // Inc excelt row counter.

                        }
                        // Just append the header row and increment the excel row counter.
                    } else {
                        var row = $(this.outerHTML);

                        var colCount = 1;

                        // Remove the last header cell.
                        row.children().each(function (index) {
                            var cell = $(this);

                            if (colCount === numColumns) {
                                cell.html('');
                            }

                            colCount++;
                        });
                        row = row[0].outerHTML;
                        $('sheetData', sheet).append(row);
                        rowCount++;
                    }
                });
            },
        }]
    });

    $('#example').on('click', 'tbody td', function () {

        var tr = $(this).closest('tr');
        var row = table.row(tr);

        if (row.child.isShown()) {
            // This row is already open - close it
            row.child.hide();
            tr.removeClass('shown');
        }
        else {
            // Open this row
            var data = row.data();

            row.child(format(data)).show();
            tr.addClass('shown');
        }
    });


});