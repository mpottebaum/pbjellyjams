const termHanks = [
        '..........................................',
        '..........................................',
        '...........:=+*#@%%%#+=-:.................',
        '.........-%@@@@@@@@@@@@@@%+:..............',
        '.......:#@@@%@@@@@@@%%#%%%+...............',
        '......=@@@@%@@@@@@@#=-===+-...............',
        '......*@@@%@%@@@@@@%+-==+=+-..............',
        ' ....+@@@@@@@@@@@@@@#=====++:.............',
        '.....#@@@@@@@@@@@%%#+====+*#-.............',
        '.....*@@@@@@@@*++***====++*#-.............',
        '.....-%@@@@@@#==*=-=======**+=:...........',
        '.....:#@@@@@#+===---======++=+=...........',
        '......=@@%%%%#=-==========+*+=............',
        '.......++--------=+=======+*#=............',
        '....:+##+------==++++++++++*#-............',
        '...:#%%%%%%---==++++*######*+:............',
        '..-*%%%%%%%@#==++******+=-:...............',
        '=*#%#%%%%%@%%%*=+***=:....................',
        '%##%#%%%%%%@%%%#+*+:......................',
        '%#%%%%%%%%%@@@@%%*-.......................',
        '%%%%%%%%%%@@@@@@@%%*......................',
        '%%%%%%%%%%@@@@@@@@@%:.....................',
        '%#%%%#%%%%@@@@@@@@@@*.....................',
        '%%%#%%%%%%@@@@@@@@@@@-....................',
        '%%%%%%%%%@@@@@@@@@@@@%:...................',
        '###%%%%%%%%@@@@@@@@@@@*:..................',
        '@@@@@@@@@@@@@@@@@@@@@@@=..................',
        '%%%%%%@@@@@@@@@@@@@@@@@%:.................',
        '%%%%%%%%@@@@@@@@@@@@@@@@*.................',
        '%%%%%%%%%@@@@@@@@@@@@@@@@*................',
        '%%%%%@@@@@@@@@@@@@@@@@@@@@*...............',
        '%%%%%@@@@@@@@@@@@@@@@@@@@@@*..............',
        '%%@@@@@@@@@@@@@@@@@@@@@@@@@#..............',
        '@%%%@@@@@@@@@@@@@@@@@@@@@@@*..............',
        '@@%%%@@@@@@@@@@@@@@@@@@@@@@*..............',
        '%%%@@@@@@@@@@@@@@@@@@@@@@@@=..............',
        '%@@@@@%%@@@@@@@@@@@@@@@@@@%:..............',
        '@@@@@@@@@@@@@@@@@@@@@@@@@@+...............',
        '%%%%%%%%%%@@@@@@@@@@@@@@@%-...............',
        '@@@@@@@@@@@@@@@@@@@@@@@@@%-....... .......',
        '%%%%%%%%%%%%%@@%%%%%%@@@@%-...............',
        '%%%@@@@@@@@@@@@@@%%%%%%%%%-...............',
        '%%@%%%%%%%%%%%%@@@@%%%%@%%%+:.............',
        '@@@@@%%%%%%%%@@@@%@@@%@@@%@@%#-...........',
        '%@@@@%%%%@%%@@@%%%@%%%%@@@@@%%@%*:........',
        '@@@@@@@@%%%%%@%%%%%%%%%@@@@@@%%%@%-.......',
        '%%%%@@@@@@@%%@%%@@@@%%%@@@@@%%%%@%-.......',
        '%%%@@@@@%%@@@@@@@@@@%%%@@@@@@@%%@%=.......',
        '%%@@@@@%%@@@@@@@@@@%%%%@@@@@@@%@@@*.......',
        '%%@@@@@%@@@@@@@%@@%%%@@@@@%%@@@@%@%:......',
        '%%%@@%%%@@@@@@@%%%%%%@@@@%%%%@@@@@@-......',
        '%%%%%%@@@@@@@@@@@%%%%@@@%@%%%@@@@@@=......',
        '%%%%@@@@@@@@@@@@@@%%%@@@%%%%%@@@@@@#......',
        '%%%%@@@@@@@@@@@@@@@@@@@@%%@@%%@@@@@%=.. ..',
        '%%%@@@@@@%%@@@@@@@@@@@@@@%@%%%%@@%@@%-....',
        '%%@@@@@@%%%@@@@@@%@@@@@@@@@@%%@@@%@@@+....',
        '@@@@@@@%%%%@@@@@@@@@@@@@@@@@@@@@@@@@%-....',
        '@@@@@@@%%%@@@@@@@@@@@@@%@@@@@@@@@@@#:.....',
        '@@@@@@%%%%@@@@@@@@@@@@@@@@@@@@@@@#=.......',
        '@@@%%%%%%%@@@@@@@@@@@@@@@@%%%#*=:.........',
        '@%%%%@%%%%@@@@@@@#-:.::...................',
        '@%%%@@%%%%@@@@@@@@@@%%@%%##%%%*=:.........',
        '%%%@@%%%%%@@@@@@@@@@@@@@@@@@@@@@@+........',
        '%%@@%%%%%%%%@@@@@@@@@@@@@@@@@@@@@@+.......',
        '@@@%%%%%%%%%@@@@@@@@@@@@@@@@@@@@@@*.......',
        '@@@%%%%%%%%@@@@@@@@@@@@@@@@@@@@@@%-.......',
        '@@@%%%%%%%%%@@@@@@@@@@@@@@@@@@@@%%:.......',
        '@@%%%%%%%%%%@@@@@@@@@@@@@@@@@@@%@#:.......',
        '@@%%%%%%%%%@@@@@@@@@@@@@@@@@@@%@@#:.......',
        '@%%%%%%%%%%@@@@@@@@@@@@@@@@@@%%@@*........',
        '@%%%%%%%%%%%@@@@@@@@@@@@@@@@%%%@@*........',
        '%%%%%%%%%%%@@%@@@@@@@@@@@@@@%%@@@+........',
        '%%%%%%%%%%%%%%@@@@@@@@@@@@@@%%@@@+........',
        '%%%%%@%%%%%%%%@@@@@@@@@@%@@@%@@@@+........',
        '@@@@@@@@@@@@@@@@@@@@@@@%%@@@@@@@@+........',
        '@@@@@@@@@@@@@@@@@@@@@@@%@@@@%@%@%=........',
        '%%@@@@@@@@@@@@@@@@@@@@@@@@@@%@@@%-........',
        '@@@@@@@@@@@@@@@@@@@@%@@%%@@@%@@@%-........',
        '@@@@@@@@@@@@@@@@@@@@@@@@%@@@%@@@%:........',
        '@@@@@@@@@@@@@@@@@@@@@%@@@@@@%@@@#:........',
        '@@@@@@@@@@@@@@@@%%%@@%@@@@@@@@@@*:........',
        '@@@@@@@@@@@@@@@@%%@@@@%@@@@@@@%@*.........',
        '@@@@@@@@@@@@@@@@%@@@@@@@@@@@%@@@+.........',
        '@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@#:.........',
        '@@@@@@@@@@@@@@@%@@@@@@@@@@@@@@@%:.........',
        '@@@@@@@@@@@@@@@@@%@@@@@@%%%@%%%*..........',
        '@@@%%@@@@@@@@@@@@@@@@@@%%%%@%@%+..........',
        '@@@%%@@@@@@@@%%%@@@@@@@@@@@@@@@=..........',
        '@@%%%%@@@@@@*...........:...::............',
        '%%%%%%@@@@@%-.... ........................',
        '@%%@%%%@@@@*..............................',
        '%%%@@%%@@@@+..............................',
        '@@@@@%%@@@@#..............................',
        '@@@@@@@%@@@%:.............................',
        '@@@@@@@@@@@%:.............................',
        '@%%@@@@%@@@%:.............................',
        '@@@@@@@@@@@%=.............................',
        '@@@@@@@@@@@@@%-.:.::::::::::::::::::::::::',
        '@@@@@@@@@@@@@@%=::::::::::::::::::::::::::',
        '%@@@@@@@@@@@@@@%=:::::::::::::::::::::::::',
        '@@@@@@@@@@@@@@@@%=:-:-::::::::::::::::::::',
        '@@@@@@@@@@@@%@@@@%=::::::::::::::::::::...',
        '@%%%%%@@@@%@@%@@@@%%#*=-:::.:.............',
        '%%@@@%@@%%##%%##%%%%%%%%%%%#=.............',
        '%%%%%%%%%%%@%%%%%%%%%%%%%%@%%-............',
        '##%%%%%%%%##%%%%%%%%%%%%%##+-.............',
        '..........................................',
        '..........................................',
        '..........................................',
]

const termHanksLine = document.getElementsByClassName("term-hanks-line")

const NUMB_COLS = termHanks[0].length
const NUMB_ROWS = termHanksLine.length

function renderTermasHankyPanky(startRow, endRow, timeout, res) {
        if (startRow >= 0) {
                if (timeout > 50) {
                        timeout -= 5
                }
                for (let i = startRow, j = 0; i < endRow; i++, j++) {
                        const htmlLine = termHanksLine[j]
                        const lineToRender = termHanks[i]
                        htmlLine.textContent = lineToRender
                }
                return setTimeout(() => {
                        renderTermasHankyPanky(startRow - 1, endRow - 1, timeout, res)
                }, timeout)
        }
        return res()
}
async function animateTermiasHankas() {
        const lastRow = termHanks.length - 1
        const rowsToRender = NUMB_ROWS
        const startTimeout = 200
        const startRow = lastRow - rowsToRender
        await new Promise(res => {
                renderTermasHankyPanky(startRow, lastRow, startTimeout, res)
        })
}
requestAnimationFrame(animateTermiasHankas)

const cursorHtml = '<span>&#9646;</span>'
const cursorBlinkHtml = '<span class="cursor">&#9646;</span>'

const introText = 'Hello, I\'m Term Hanks. I\'m stuck in this terminal due to geopolitical events beyond my control'

const startText = 'Will you help me get home?'

function formatText(text, rowWidth) {
        const words = text.split(" ")
        const lines = []
        for (let i = 0, line = ""; i < words.length; i++) {
                const word = words[i]
                const spaceWord = " " + word
                if ((spaceWord + line).length > rowWidth) {
                        lines.push(line)
                        line = word
                } else {
                        line += spaceWord
                }
                if (i === words.length - 1) {
                        lines.push(line)
                }
        }
        return lines
}

async function typeTextLine(text, el, isEndOfTextBlock) {
        const timeout = 80
        for (let i = 1; i < text.length + 1; i++) {
                await new Promise(res => setTimeout(() => res(), timeout))
                const letters = text.slice(0, i);
                el.innerHTML = letters + cursorHtml;
        }
        if (!isEndOfTextBlock) {
                await new Promise(res => setTimeout(() => res(), timeout))
                el.innerHTML = text
                return
        }
        el.innerHTML = text + cursorBlinkHtml
}

async function typeText(lines, startLineIndex) {
        const endIndie = lines.length - 1
        for (let i = 0, x = startLineIndex; i < lines.length; i++, x++) {
                const line = lines[i]
                const el = termHanksLine[x]
                await typeTextLine(line, el, i === endIndie)
        }
        return startLineIndex + endIndie
}

async function getNext(panelName) {
        const resie = await fetch(`/termias-hankas/${panelName}`);
        const next = await resie.json()
        return next
}

function renderChoice(choiceLines, next, startIndie) {
        const buttons = choiceLines.map(() => document.createElement('button'))
        for (let i = 0; i < choiceLines.length; i++) {
                const line = choiceLines[i]
                const button = buttons[i]
                button.innerText = line
                button.className = 'term-butt'
                button.onclick = () => {
                        getNext(next)
                                .then(nextPanel => {
                                        renderTextPanel(nextPanel)
                                })
                }
                const el = termHanksLine[startIndie + i]
                el.replaceChildren(button)
        }
}

function clearTerm() {
        let breaker = ''
        for (let i = 0; i < NUMB_COLS; i++) {
                breaker += '&nbsp;'
        }
        for (let i = 0; i < termHanksLine.length; i++) {
                const line = termHanksLine[i]
                line.innerHTML = breaker
        }
}

const startTextPanelIndie = termHanksLine.length - 12
const startTextIndie = startTextPanelIndie + 2

function clearTextPanel(startIndie) {
        for (let i = startIndie; i < termHanksLine.length; i++) {
                const htmlLine = termHanksLine[i]
                if (i === startIndie) {
                        htmlLine.innerText = '------------------------------------------'
                } else {
                        htmlLine.innerHTML = '&nbsp;'
                }
        }
}

async function renderTextPanel(panel) {
        const textLines = formatText(panel.text, NUMB_COLS - 2)
        const choicesLines = panel.choices.map(choice => formatText(choice.text, NUMB_COLS - 6))
        const numChoicesLines = choicesLines.reduce((sum, choiceLines) => sum + choiceLines.length, 0) + panel.choices.length
        const numTotalLines = textLines.length + numChoicesLines
        const startIndie = termHanksLine.length - numTotalLines - 2
        const realStartIndie = startIndie > startTextPanelIndie ? startTextPanelIndie : startIndie
        if (panel.fart) {
                renderFart(panel.fart, realStartIndie)
        }
        clearTextPanel(realStartIndie)
        const ender = await typeText(textLines, realStartIndie + 2)
        await new Promise(res => setTimeout(() => res(), 200))
        for (let i = 0; i < panel.choices.length; i++) {
                const choice = panel.choices[i]
                const lines = choicesLines[i]
                renderChoice(lines, choice.next, ender + ((i + 1) * 2))
        }
}

function renderFart(fart, startIndie) {
        for (let i = 0; i < startIndie; i++) {
                const htmlLine = termHanksLine[i]
                const fartLine = fart[i]
                if (fartLine) {
                        htmlLine.innerHTML = fartLine
                }
        }
}

animateTermiasHankas().then(async () => {
        clearTextPanel(startTextPanelIndie)
        const introTextLines = formatText(introText, NUMB_COLS - 1)
        await typeText(introTextLines, startTextIndie)
        await new Promise(res => setTimeout(() => res(), 3000))
        const startPanel = await getNext('start')
        renderTextPanel(startPanel)
})
