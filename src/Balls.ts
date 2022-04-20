import Playfield from "./Playfield";
export default class Balls {
    static drawThreeBalls() {
        var ball1 = [],
            ball2 = [],
            ball3 = [];
        do {
            ball1[0] = Math.floor(Math.random() * (9 - 0))
            ball1[1] = Math.floor(Math.random() * (9 - 0))
        } while (Playfield.gameArr[ball1[0]][ball1[1]] != 0)
        Playfield.gameArr[ball1[0]][ball1[1]] = Playfield.nextColors[0]
        do {
            ball2[0] = Math.floor(Math.random() * (9 - 0))
            ball2[1] = Math.floor(Math.random() * (9 - 0))
        } while (Playfield.gameArr[ball2[0]][ball2[1]] != 0)
        Playfield.gameArr[ball2[0]][ball2[1]] = Playfield.nextColors[1]
        do {
            ball3[0] = Math.floor(Math.random() * (9 - 0))
            ball3[1] = Math.floor(Math.random() * (9 - 0))
        } while (Playfield.gameArr[ball3[0]][ball3[1]] != 0)
        Playfield.gameArr[ball3[0]][ball3[1]] = Playfield.nextColors[2]

        Playfield.nextColors[0] = Math.floor(Math.random() * 7) + 1;
        Playfield.nextColors[1] = Math.floor(Math.random() * 7) + 1;
        Playfield.nextColors[2] = Math.floor(Math.random() * 7) + 1;

        var colorInfo = document.getElementById('colorInfo')
        colorInfo.innerHTML = `Następne:<br><svg xmlns="http://www.w3.org/2000/svg"><circle cx="20" cy="20" r="15" fill="${Playfield.colors[Playfield.nextColors[0]]}" /></svg><svg xmlns="http://www.w3.org/2000/svg"><circle cx="20" cy="20" r="15" fill="${Playfield.colors[Playfield.nextColors[1]]}" /></svg><svg xmlns="http://www.w3.org/2000/svg"><circle cx="20" cy="20" r="15" fill="${Playfield.colors[Playfield.nextColors[2]]}" /></svg>`

        console.log(ball1, ball2, ball3)
        console.log(Playfield.gameArr)
    }

    static resetAllBallsSize() {
        for (let i = 0; i < 9; i++) {
            for (let j = 0; j < 9; j++) {
                let id = i.toString() + j.toString()
                let div = document.getElementById(id)
                if (Playfield.gameArr[i][j] != 0) {
                    let num = Playfield.gameArr[i][j]
                    let color = Playfield.colors[num]
                    div.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg"><circle cx="25" cy="25" r="18" fill="${color}" /></svg>`
                }
                div.style.backgroundColor = 'white'
            }
        }
    }
}