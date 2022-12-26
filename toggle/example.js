/*
const $button1 = document.createElement('button')
$button1.textContent = 'Button1'

const $button2 = document.createElement('button')
$button2.textContent = 'Button2'

const $button3 = document.createElement('button')
$button3.textContent = 'Button3'

const $main = document.querySelector('#app')

$main.appendChild($button1)
$main.appendChild($button2)
$main.appendChild($button3)

$button1.addEventListener('click', () => {
    if ($button1.style.textDecoration === 'line-through') {
        $button1.style.textDecoration = 'none'
    } else {
        $button1.style.textDecoration = 'line-through'
    }
})

const toggleButton = ($button) => {
    if ($button.style.textDecoration === 'line-through') {
        $button.style.textDecoration = 'none'
    } else {
        $button.style.textDecoration = 'line-through'
    }
}

document.querySelectorAll('button').forEach($button => {
    $button.addEventListener('click', (e) => {
        const {target} = e
        toggleButton(target)
    })
})
*/

function TimerButton({$target, text, timer = 3000}) {
    const $button = new ToggleButton({$target, text, onClick: () => {
        setTimeout(() => {
            $button.setState({
                ...$button.state,
                toggled: !$button.state.toggled
            })
        }, timer)
    }})
}

//추상화, 기능 추가, 확장이 쉬워짐
function ToggleButton({
    $target,
    text,
    onClick
}) {
    const $button = document.createElement('button')
    $target.appendChild($button)

    this.state = {
        clickCount: 0,
        toggled: false
    }

    this.setState = (nextState) => {
        this.state = nextState
        this.render()
    }

    this.render = () => {
        $button.textContent = text

        $button.style.textDecoration = this.state.toggled ? 'line-through' : 'none'
        $button.addEventListener('click', () => {
            this.setState({
                clickCount: this.state.clickCount + 1,
                toggled: !this.state.toggled
            })
            
            if(onClick) {
                onClick(this.state.clickCount)
            }
        })
    }
    
    this.render()
}

function ButtonGroup({
    $target,
    buttons,
}) {
    const $group = document.createElement('div')
    let isInit = false

    this.render = () => {
        if(!isInit) {
            buttons.forEach(({type, ...props}) => {
                console.log(type, props)
                if (type === 'toggle') {
                    new ToggleButton({$target: $group, ...props})
                } else if(type === 'timer') {
                    new TimerButton({$target: $group, ...props})
                }
            })
            $target.appendChild($group)
            isInit = true
        }
    }
    this.render()
}

const $app = document.querySelector('#app')

new ButtonGroup({
    $target: $app,
    buttons: [
        {
            type: 'toggle',
            text: '토글 버튼',
        },
        {
            type: 'toggle',
            text: '토글 버튼',
        },
        {
            type: 'timer',
            text: '타이머!',
            timer: 1000
        }
    ]
})