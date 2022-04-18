import ShortestPath from "./ShortestPath";
import Balls from "./Balls";
export default class Playfield {
    public static gameArr: number[][];
    public static colors: String[] = ["", 'black', 'green', 'blue', 'yellow', 'magenta', 'purple', 'cyan'];
    public static nextColors: number[] = [];

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

        Balls.drawThreeBalls()
        Playfield.renderGameField()
    }

    static renderGameField() {
        for (let i = 0; i < 9; i++) {
            for (let j = 0; j < 9; j++) {
                if (Playfield.gameArr[i][j] != 0) {
                    let idS = i.toString() + j.toString()
                    let div = document.getElementById(idS)
                    let num = Playfield.gameArr[i][j]
                    let color = Playfield.colors[num]
                    div.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg"><circle cx="25" cy="25" r="18" fill="${color}" /></svg>`
                    div.onclick = function () {
                        Balls.resetAllBallsSize()
                        div.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg"><circle cx="25" cy="25" r="23" fill="${color}" /></svg>`
                        for (let k = 0; k < 9; k++) {
                            for (let l = 0; l < 9; l++) {
                                var el = document.getElementById(k.toString() + l.toString())
                                if (Playfield.gameArr[k][l] == 0) {
                                    var m: string;
                                    el.onmouseenter = function () {
                                        for (var p = 0; p < 9; p++) {
                                            for (var o = 0; o < 9; o++) {
                                                var id = p.toString() + o.toString()
                                                document.getElementById(id).style.backgroundColor = "white"
                                            }
                                        }
                                        var s = i.toString() + j.toString();
                                        m = k.toString() + l.toString();
                                        var xd = ShortestPath.findShortestPath(s, m, Playfield.gameArr) as String
                                        var path: Array<string> = xd.split("_")
                                        for (var z = 0; z < path.length; z++) {
                                            document.getElementById(path[z]).style.backgroundColor = "red"
                                        }
                                        document.getElementById(m).style.backgroundColor = "red"
                                    }

                                    el.onclick = function () {
                                        for (var p = 0; p < 9; p++) {
                                            for (var o = 0; o < 9; o++) {
                                                var id = p.toString() + o.toString()
                                                document.getElementById(id).onmouseenter = null
                                                if (document.getElementById(id).style.backgroundColor == "red") {
                                                    document.getElementById(id).style.backgroundColor = "grey"
                                                }
                                            }
                                        }

                                        window.setTimeout(function () {
                                            div.innerHTML = ""
                                            // document.getElementById(m).innerHTML = `<svg xmlns="http://www.w3.org/2000/svg"><circle cx="25" cy="25" r="18" fill="${color}" /></svg>`
                                            Playfield.gameArr[parseInt(m[0])][parseInt(m[1])] = Playfield.gameArr[parseInt(idS[0])][parseInt(idS[1])]
                                            Playfield.gameArr[parseInt(idS[0])][parseInt(idS[1])] = 0
                                            Balls.drawThreeBalls()
                                            Playfield.renderGameField()
                                            for (var p = 0; p < 9; p++) {
                                                for (var o = 0; o < 9; o++) {
                                                    id = p.toString() + o.toString()
                                                    if (document.getElementById(id).style.backgroundColor == "grey") {
                                                        document.getElementById(id).style.backgroundColor = "white"
                                                    }
                                                }
                                            }
                                        }, 500)
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }

}