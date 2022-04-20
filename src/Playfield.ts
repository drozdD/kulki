import ShortestPath from "./ShortestPath";
import Balls from "./Balls";
export default class Playfield {
    public static gameArr: number[][];
    public static colors: String[] = ["", 'black', 'green', 'blue', 'yellow', 'magenta', 'purple', 'cyan'];
    public static nextColors: number[] = [];
    private static fail: Boolean = false;


    static renderNewGameField() {
        var container = document.getElementById('container')
        Playfield.nextColors[0] = Math.floor(Math.random() * 7) + 1;
        Playfield.nextColors[1] = Math.floor(Math.random() * 7) + 1;
        Playfield.nextColors[2] = Math.floor(Math.random() * 7) + 1;
        Playfield.gameArr = []

        var pointsInfo = document.getElementById('pointsInfo')
        // pointsInfo.innerHTML = pointsInfo.innerHTML + " 0"
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

    static checkWin() {
        var toSpike = []
        //w poziomie
        for (var i = 0; i < 9; i++) {
            //rzędy
            var spikeBall = -1
            var spike: string[] = []
            for (var j = 0; j < 9; j++) {
                if (spikeBall == Playfield.gameArr[i][j] && spikeBall != 0) {
                    spike.push(i.toString() + j.toString())
                    if (spike.length >= 5) {
                        for (var x = 0; x < spike.length; x++) {
                            toSpike.push(spike[x])
                        }
                    }
                } else {
                    spikeBall = Playfield.gameArr[i][j]
                    spike = [i.toString() + j.toString()]
                }
            }
        }

        for (var i = 0; i < 9; i++) {
            //kolumny
            var spikeBall = -1
            var spike: string[] = []
            for (var j = 0; j < 9; j++) {
                if (spikeBall == Playfield.gameArr[j][i] && spikeBall != 0) {
                    spike.push(j.toString() + i.toString())
                    if (spike.length >= 5) {
                        for (var x = 0; x < spike.length; x++) {
                            toSpike.push(spike[x])
                        }
                    }
                } else {
                    spikeBall = Playfield.gameArr[j][i]
                    spike = [j.toString() + i.toString()]
                }
            }
        }

        //ukos
        var spike: string[] = []
        for (var i = 0; i < 9; i++) {
            for (var j = 0; j < 9; j++) {
                if (Playfield.gameArr[i][j] != 0) {
                    spikeBall = Playfield.gameArr[i][j]
                    spike = [i.toString() + j.toString()]
                    var k = i
                    var l = j

                    try {
                        while (Playfield.gameArr[k + 1][l + 1] == spikeBall) {
                            k++
                            l++
                            spike.push(k.toString() + l.toString())
                        }
                    } catch (e) { }


                    if (spike.length >= 5) {
                        for (var x = 0; x < spike.length; x++) {
                            toSpike.push(spike[x])
                        }
                    }

                    spike = [i.toString() + j.toString()]
                    var k = i
                    var l = j

                    try {
                        while (Playfield.gameArr[k + 1][l - 1] == spikeBall) {
                            k++
                            l--
                            spike.push(k.toString() + l.toString())
                        }
                    } catch (e) { }

                    if (spike.length >= 5) {
                        for (var x = 0; x < spike.length; x++) {
                            toSpike.push(spike[x])
                        }
                    }
                }
            }
        }

        for (var x = 0; x < toSpike.length; x++) {
            var z = parseInt(toSpike[x][0])
            var y = parseInt(toSpike[x][1])
            Playfield.gameArr[z][y] = -10
            document.getElementById(toSpike[x]).innerHTML = ""
        }

        var points = 0
        for (var i = 0; i < 9; i++) {
            for (var j = 0; j < 9; j++) {
                if (Playfield.gameArr[i][j] == -10) {
                    points++
                    Playfield.gameArr[i][j] = 0
                }
            }
        }

        var nowPoints = parseInt(document.getElementById("points").innerHTML)
        points = points + nowPoints
        document.getElementById("points").innerHTML = points.toString()

        console.log("====================checkwin=======================")
        console.log(toSpike)
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
                                        if (xd != 'fail') {
                                            Playfield.fail = false
                                            var path: Array<string> = xd.split("_")
                                            for (var z = 0; z < path.length; z++) {
                                                document.getElementById(path[z]).style.backgroundColor = "red"
                                            }
                                            document.getElementById(m).style.backgroundColor = "red"
                                        } else { Playfield.fail = true }
                                    }

                                    el.onclick = function () {
                                        if (Playfield.fail == false) {
                                            div.innerHTML = ""
                                            document.getElementById(m).innerHTML = `<svg xmlns="http://www.w3.org/2000/svg"><circle cx="25" cy="25" r="18" fill="${color}" /></svg>`
                                            for (var p = 0; p < 9; p++) {
                                                for (var o = 0; o < 9; o++) {
                                                    var id = p.toString() + o.toString()
                                                    document.getElementById(id).onmouseenter = null
                                                    document.getElementById(id).onclick = null
                                                    if (document.getElementById(id).style.backgroundColor == "red") {
                                                        document.getElementById(id).style.backgroundColor = "grey"
                                                    }
                                                }
                                            }

                                            window.setTimeout(function () {
                                                Playfield.gameArr[parseInt(m[0])][parseInt(m[1])] = Playfield.gameArr[parseInt(idS[0])][parseInt(idS[1])]
                                                Playfield.gameArr[parseInt(idS[0])][parseInt(idS[1])] = 0
                                                Playfield.checkWin()
                                                for (var p = 0; p < 9; p++) {
                                                    for (var o = 0; o < 9; o++) {
                                                        id = p.toString() + o.toString()
                                                        if (document.getElementById(id).style.backgroundColor == "grey") {
                                                            document.getElementById(id).style.backgroundColor = "white"
                                                        }
                                                    }
                                                }
                                                Balls.drawThreeBalls()
                                                Playfield.renderGameField()
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

}