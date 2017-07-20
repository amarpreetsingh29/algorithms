var sampleGraphStructure={
    "a": {
        "edgeList": [
            "b",
            "c"
        ]
    },
    "b": {
        "edgeList": [
            "a",
            "c"
        ]
    },
    "c": {
        "edgeList": [
            "a",
            "b",
            "d"
        ]
    },
    "d": {
        "edgeList": []
    }
}
function findConnection(graph,from,to) {
    var temp = graph[from];
    var i;
    console.log(from);
    if( !temp || !to || temp['visited']  || !temp.edgeList.length){
        return false;
    }
    temp['visited'] = true;
    if(temp.edgeList.indexOf(to) !== -1) return true;
    for(i=0;i<temp.edgeList.length;i++){
        var status = findConnection(graph,temp.edgeList[i],to);
        if(status) return true;
    }
    return false;
}
function dfs(graph) {
    var vertex;
    var time =0;
    for(vertex in graph){
        if(!isVertexVisited(graph,vertex)) {
            time = processVertex(graph,vertex,time);
        }
    }
}
function processVertex(graph,s,time) {
    var time =time||0;
    var i,vertex = graph[s];
    vertex.visited = true;
    time = time +1;
    vertex.d=time;
    console.log(s);
    for(i=0;i<vertex.edgeList.length;i++){
        if(!isVertexVisited(graph,vertex.edgeList[i])){
            time = processVertex(graph,vertex.edgeList[i],time);
        }
    }
    vertex.processed=true;
    time =time+1;
    vertex.f = time;
    return time;
}
function isVertexVisited(graph,vertex){
    return graph[vertex].visited ? true : false;
}

console.log(dfs(sampleGraphStructure));
