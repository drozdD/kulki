export default class Playfield {
    public static gameArr: number[][];
    private static colors: String[] = ["", 'red', 'green', 'blue', 'yellow', 'magenta', 'purple', 'cyan'];
    private static nextColors: number[] = [];

    static renderNewGameField() {
        var container = document.getElementById('container')
        Playfield.nextColors[0] = Math.floor(Math.random() * 7) + 1;
        Playfield.nextColors[1] = Math.floor(Math.random() * 7) + 1;
        Playfield.nextColors[2] = Math.floor(Math.random() * 7) + 1;
        Playfield.gameArr = []

        var pointsInfo = document.getElementById('pointsInfo')
        pointsInfo.innerHTML = pointsInfo.innerHTML + " 0"
        for (var i = 0; i < 9; i++) {
            Playfield.gameArr[i] = [];
            for (var j = 0; j < 9; j++) {
                let div = document.createElement('div')
                let id = i.toString() + j.toString();
                div.setAttribute('id', id)
                div.setAttribute('class', 'field')
                //div.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg"><circle cx="25" cy="25" r="20" fill="cyan" /></svg>'
                container.appendChild(div);
                Playfield.gameArr[i][j] = 0
            }
        }

        Playfield.drawThreeBalls()
        Playfield.renderGameField()
    }

    static renderGameField() {
        for (var i = 0; i < 9; i++) {
            for (var j = 0; j < 9; j++) {
                if (Playfield.gameArr[i][j] != 0) {
                    let id = i.toString() + j.toString()
                    let div = document.getElementById(id)
                    let num = Playfield.gameArr[i][j]
                    let color = Playfield.colors[num]
                    div.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg"><circle cx="25" cy="25" r="18" fill="${color}" /></svg>`
                    div.onmouseenter = function () {
                        div.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg"><circle cx="25" cy="25" r="23" fill="${color}" /></svg>`
                    }
                    div.onmouseleave = function () {
                        div.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg"><circle cx="25" cy="25" r="18" fill="${color}" /></svg>`
                    }
                    div.onclick = function () {
                        div.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg"><circle cx="25" cy="25" r="23" fill="${color}" /></svg>`
                        div.onmouseleave = null
                    }
                }
            }
        }
    }

    static drawThreeBalls() {
        var ball1 = [],
            ball2 = [],
            ball3 = [];
        ball1[0] = Math.floor(Math.random() * (9 - 0))
        ball1[1] = Math.floor(Math.random() * (9 - 0))
        do {
            ball2[0] = Math.floor(Math.random() * (9 - 0))
            ball2[1] = Math.floor(Math.random() * (9 - 0))
        } while (ball2[0] == ball1[0] && ball2[1] == ball1[1])

        do {
            ball3[0] = Math.floor(Math.random() * (9 - 0))
            ball3[1] = Math.floor(Math.random() * (9 - 0))
        } while ((ball3[0] == ball1[0] && ball3[1] == ball1[1]) || (ball3[0] == ball2[0] && ball3[1] == ball2[1]))

        Playfield.gameArr[ball1[0]][ball1[1]] = Playfield.nextColors[0]
        Playfield.gameArr[ball2[0]][ball2[1]] = Playfield.nextColors[1]
        Playfield.gameArr[ball3[0]][ball3[1]] = Playfield.nextColors[2]

        Playfield.nextColors[0] = Math.floor(Math.random() * 7) + 1;
        Playfield.nextColors[1] = Math.floor(Math.random() * 7) + 1;
        Playfield.nextColors[2] = Math.floor(Math.random() * 7) + 1;

        var colorInfo = document.getElementById('colorInfo')
        colorInfo.innerHTML = colorInfo.innerHTML + `<br><svg xmlns="http://www.w3.org/2000/svg"><circle cx="20" cy="20" r="15" fill="${Playfield.colors[Playfield.nextColors[0]]}" /></svg><svg xmlns="http://www.w3.org/2000/svg"><circle cx="20" cy="20" r="15" fill="${Playfield.colors[Playfield.nextColors[1]]}" /></svg><svg xmlns="http://www.w3.org/2000/svg"><circle cx="20" cy="20" r="15" fill="${Playfield.colors[Playfield.nextColors[2]]}" /></svg>`

        console.log(ball1, ball2, ball3)
        console.log(Playfield.gameArr)
    }
}