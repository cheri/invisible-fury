var DIR = 'img/graph-faces/';

var nodes = null;
var edges = null;
var network = null;

// Called when the Visualization API is loaded.
function draw(nodes, edges) {
  // create a network
  var container = document.getElementById('mynetwork');
  var data = {
    nodes: nodes,
    edges: edges
  };
  var options = {
    nodes: {
      borderWidth:4,      
    color: {        
        border: '#0af', 
        background: '#000'
      },      
      fontColor: '#fff'
    },
    edges: {      
      color: '#777',
      
    }
  };
  network = new vis.Network(container, data, options);
}

