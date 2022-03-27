console.log('test2');

const dataSource2 = "csv/australia-csv-retail.csv";

function loadData() {
    Plotly.d3.csv(dataSource2, function(data){ processData(data) } );
  };
  
  function processData(allRows) {
    console.log(allRows);
    let x = [], y = [];
    for (let i=0; i<allRows.length; i++) {
      let row = allRows[i];
      x.push( row['date'] );
      y.push( row['retail_and_recreation_percent_change_from_baseline'] );
    }
    makePlot( x, y );ß
  }
  
  function makePlot( x, y ){
    var traces = [{
      x: x, 
      y: y
    }];
    Plotly.newPlot('myPlot', traces, 
      {title: 'Australia Retail and Recreation Percentage Change from Baseline'});
  };
  
  loadData();