const data = [
    {
        text: 'JavaScript 공부하기'
    },
    {
        text: 'JavaScript 복습하기'
    },
]

const data1 = [
    {
        text: '베이스 연습하기'
    },
    {
        text: '턱걸이 하기'
    },
    {
        text: '공부하기'
    }
]

const $app = document.querySelector('.app')

new App({
    $target: $app,
    initialState: data
})