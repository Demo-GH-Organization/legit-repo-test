console.log('test');

const dataSource1 = "https://raw.githack.com/plotly/datasets/master/2014_apple_stock.csv";

function loadData() {
  Plotly.d3.csv(dataSource1, function(data){ processData(data) } );
};

function processData(allRows) {
  console.log(allRows);
  let x = [], y = [];
  for (let i=0; i<allRows.length; i++) {
    let row = allRows[i];
    x.push( row['AAPL_x'] );
    y.push( row['AAPL_y'] );
  }
  makePlot( x, y );
}

function makePlot( x, y ){
  var traces = [{
    x: x, 
    y: y
  }];
  Plotly.newPlot('myPlot', traces, 
    {title: 'Plotting CSV data from AJAX call'});
};

loadData();


/*var plotDiv = document.getElementById('myPlot');

var plotData = {
    x: [1, 2, 3, 4, 5],
    y: [1, 2, 4, 8, 16]
}

Plotly.newPlot(plotDiv, [plotData]);*/