function dfs(graph,vertex){
    var queue,ptr,currentVertex,size;
    queue=[];
    ptr=0;
    if(graph[vertex]){
        queue.push(vertex);
       
    }
    while(ptr>=0){
        currentVertex = queue[ptr]
        if(!isVertexProcessed(currentVertex,graph)){
            processVertex(currentVertex);
            graph = markVertexAsProcessed(currentVertex,graph)
            size= queue.length;
            queue = addEdgesToRunningQueue(graph,currentVertex,queue)
            if(queue.length>size){
                ptr = queue.length
            }
        }
        --ptr;
    }
}

function isVertexProcessed(vertex,graph){
    vertex = Number(vertex);
    return graph[vertex] && graph[vertex].processed ? true : false
}

function processVertex(vertex) {
    console.log(vertex)
}

function addEdgesToRunningQueue(graph, node, queue) {
    let edgeList,vertex
    edgeList = graph[node]
    for (var i = 0; i < edgeList.length; i++) {
      vertex = edgeList[i]
      if (checkVertex(vertex, queue)) {
        queue.push(vertex)
      }
    }
    return queue
}
function markVertexAsProcessed(vertex,graph){
    if(graph[vertex]){
        graph[vertex].processed = true
    }
    return graph;
}

function checkVertex(vertex, queue) {
    return queue.indexOf(vertex) == -1 ? true : false
  }
  

  var sampleGraphStructure = {
    1: ['2', '5', '6'],
    6: ['1'],
    5: ['1', '2', '4'],
    3: ['2', '4'],
    4: ['5', '3'] ,
    2: ['1', '3', '5'] 
  }

  dfs(sampleGraphStructure,'1');