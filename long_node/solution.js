//핵심 키워드는 "노드", "간선", "최단경로"

function solution(n, edge) {
    const graph = Array.from(Array(n + 1), () => [])
    
    for (const [src, dest] of edge) {
        graph[src].push(dest);
        graph[dest].push(src);
    }
}