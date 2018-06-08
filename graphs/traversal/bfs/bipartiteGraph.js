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

  function bipartateGraph(graph,node) {
    let prop, running_Queue, vertex, edges, counter, result
    running_Queue = []
    counter = -1
    if (graph[node]) {
      running_Queue.push(node)
      graph[node].color = 'black'
      ++counter
      while (true) {
        vertex = running_Queue[counter]
        processVertex(vertex)
        result = addBipartiteEdgesToRunningQueue(graph, vertex, running_Queue)
        if (result.status) {
          running_Queue = result.queue
        } else return false
        if (counter === running_Queue.length - 1) {
          break
        } else {
          ++counter
        }
      }
    }
  }
  
  function addBipartiteEdgesToRunningQueue(graph, node, queue) {
    let edgeList
    edgeList = graph[node].edgeList
    for (var i = 0; i < edgeList.length; i++) {
      vertex = edgeList[i]
      if (!graph[vertex].color) {
        if (graph[node].color == 'black') {
          graph[vertex].color = 'white'
        } else if (graph[node].color == 'white') {
          graph[vertex].color = 'black'
        }
        queue.push(vertex)
        status = true
      } else if (graph[vertex].color) {
        if (graph[node].color == graph[vertex].color) {
          status = false
          return { status, queue }
        }
      }
    }
    return { status, queue }
  }
  
  function processVertex(vertex) {
    console.log(vertex)
  }
  var status = bipartateGraph(sampleGraphStructure,'2');