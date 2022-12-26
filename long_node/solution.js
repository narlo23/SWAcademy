//핵심 키워드는 "노드", "간선", "최단경로"
class Queue {
    constructor() {
        this.queue = [];
        this.front = 0;
        this.rear = 0;
    }

    enqueue(value) {
        this.queue[this.rear++] = value;
    }

    dequeue() {
        const value = this.queue[this.front];
        delete this.queue[this.front];
        this.front += 1;
        return value;
    }

    isEmpty() {
        return this.rear === this.front;
    }
}


function solution(n, edge) {
    const graph = Array.from(Array(n + 1), () => [])
    
    for (const [src, dest] of edge) {
        graph[src].push(dest);
        graph[dest].push(src);
    }

    const distance = Array(n+1).fill(0);
    distance[1] = 1;

    //BFS
    const queue = new Queue();
    queue.enqueue(1);
    while (!queue.isEmpty()) {
        const src = queue.dequeue();
        for (const dest of graph[src]) {
            if (distance[dest] === 0) {
                queue.enqueue(dest);
                distance[dest] = distance[src] + 1
            }
        }
    }

    const max = Math.max(...distance);
    return distance.filter(item => item === max).length;
}