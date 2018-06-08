var sampleGraphStructure = {
    1: {
      edgeList: ['2', '5', '6']
    },
    6: {
      edgeList: ['1']
    },
    5: {
      edgeList: ['1', '2', '4']
    },
    3: {
      edgeList: ['2', '4']
    },
    4: { edgeList: ['5', '3'] },
    2: { edgeList: ['1', '3', '5'] }
  }

function shortestPathBFS(graph, node) {
    let prop, running_Queue, vertex, edges, counter, parent
    running_Queue = []
    parent = {}
    counter = -1
    if (graph[node]) {
      running_Queue.push(node)
      parent[node] = -1
      ++counter
      while (true) {
        vertex = running_Queue[counter]
        processVertex(vertex)
        running_Queue = addEdgesToRunningQueue(
          graph,
          vertex,
          running_Queue,
          parent
        )
        if (counter === running_Queue.length - 1) {
          break
        } else {
          ++counter
        }
      }
    }
    return parent
  }

  function checkVertex(vertex, queue) {
    return queue.indexOf(vertex) == -1 ? true : false
  }
  
  function processVertex(vertex) {
    console.log(vertex)
  }
  function addEdgesToRunningQueue(graph, node, queue, parent) {
    let edgeList
    edgeList = graph[node].edgeList
    for (var i = 0; i < edgeList.length; i++) {
      vertex = edgeList[i]
      if (checkVertex(vertex, queue)) {
        queue.push(vertex)
        parent[vertex] = node
      }
    }
    return queue
  }

  function shortestPath(parent, node) {
    if (parent[node]) {
      while (node != -1) {
        console.log(node)
        node = parent[node]
      }
    }
  }

  let parentNode;
  parentNode = '3';
  var parent = shortestPathBFS(sampleGraphStructure, parentNode)
  console.log('---------ParentNode Hash-------')
  console.log(parent)
  console.log('---------Shortest Path To ParentNode from any Node-------')
  shortestPath(parent, '6')