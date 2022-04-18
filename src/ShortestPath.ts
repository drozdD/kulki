// -9 to sciana
// -5 to start
// -3 to meta

export default class ShortestPath {
    static findShortestPath(s: String, m: String, tab: number[][]) {
        var sX = parseInt(s[0]);
        var sY = parseInt(s[1]);
        var mX = parseInt(m[0]);
        var mY = parseInt(m[1]);
        var gameAr = JSON.parse(JSON.stringify(tab));
        var moveArr: String[][] = [];

        if (gameAr[mX][mY] != 0) {
            return 0
        }

        for (var i = 0; i < 9; i++) {
            moveArr[i] = [];
            for (var j = 0; j < 9; j++) {
                moveArr[i][j] = ""
                if (gameAr[i][j] != 0) {
                    gameAr[i][j] = -9
                }
            }
        }

        gameAr[sX][sY] = -5
        gameAr[mX][mY] = -3

        var done = false;
        var l = 0
        var fail;

        do {
            fail = true
            if (l == 0) {
                if (gameAr[sX - 1] != undefined) {
                    if (gameAr[sX - 1][sY] == 0) {
                        gameAr[sX - 1][sY] = 1
                        moveArr[sX - 1][sY] = sX.toString() + sY.toString()
                        fail = false
                    } else if (gameAr[sX - 1][sY] == -3) {
                        //znalazło mete 
                        moveArr[sX - 1][sY] = sX.toString() + sY.toString()
                        done = true
                        fail = false
                    }
                }
                if (gameAr[sX + 1] != undefined) {
                    if (gameAr[sX + 1][sY] == 0) {
                        gameAr[sX + 1][sY] = 1
                        moveArr[sX + 1][sY] = sX.toString() + sY.toString()
                        fail = false
                    } else if (gameAr[sX + 1][sY] == -3) {
                        //znalazło mete 
                        moveArr[sX + 1][sY] = sX.toString() + sY.toString()
                        done = true
                        fail = false
                    }
                }
                if (gameAr[sX][sY + 1] != undefined) {
                    if (gameAr[sX][sY + 1] == 0) {
                        gameAr[sX][sY + 1] = 1
                        moveArr[sX][sY + 1] = sX.toString() + sY.toString()
                        fail = false
                    } else if (gameAr[sX][sY + 1] == -3) {
                        //znalazło mete 
                        moveArr[sX][sY + 1] = sX.toString() + sY.toString()
                        done = true
                        fail = false
                    }
                }
                if (gameAr[sX][sY - 1] != undefined) {
                    if (gameAr[sX][sY - 1] == 0) {
                        gameAr[sX][sY - 1] = 1
                        moveArr[sX][sY - 1] = sX.toString() + sY.toString()
                        fail = false
                    } else if (gameAr[sX][sY - 1] == -3) {
                        //znalazło mete 
                        moveArr[sX][sY - 1] = sX.toString() + sY.toString()
                        done = true
                        fail = false
                    }
                }
            } else {
                for (var i = 0; i < 9; i++) {
                    for (var j = 0; j < 9; j++) {
                        if (gameAr[i][j] == l) {
                            if (gameAr[i - 1] != undefined) {
                                if (gameAr[i - 1][j] == 0) {
                                    gameAr[i - 1][j] = l + 1
                                    moveArr[i - 1][j] = moveArr[i][j] + "_" + i + j
                                    fail = false
                                } else if (gameAr[i - 1][j] == -3) {
                                    moveArr[i - 1][j] = moveArr[i][j] + "_" + i + j
                                    fail = false
                                    done = true
                                }
                            }
                            if (gameAr[i + 1] != undefined) {
                                if (gameAr[i + 1][j] == 0) {
                                    gameAr[i + 1][j] = l + 1
                                    moveArr[i + 1][j] = moveArr[i][j] + "_" + i + j
                                    fail = false
                                } else if (gameAr[i + 1][j] == -3) {
                                    moveArr[i + 1][j] = moveArr[i][j] + "_" + i + j
                                    done = true
                                    fail = false
                                }
                            }
                            if (gameAr[i][j + 1] != undefined) {
                                if (gameAr[i][j + 1] == 0) {
                                    gameAr[i][j + 1] = l + 1
                                    moveArr[i][j + 1] = moveArr[i][j] + "_" + i + j
                                    fail = false
                                } else if (gameAr[i][j + 1] == -3) {
                                    moveArr[i][j + 1] = moveArr[i][j] + "_" + i + j
                                    done = true
                                    fail = false
                                }
                            }
                            if (gameAr[i][j - 1] != undefined) {
                                if (gameAr[i][j - 1] == 0) {
                                    gameAr[i][j - 1] = l + 1
                                    moveArr[i][j - 1] = moveArr[i][j] + "_" + i + j
                                    fail = false
                                } else if (gameAr[i][j - 1] == -3) {
                                    moveArr[i][j - 1] = moveArr[i][j] + "_" + i + j
                                    done = true
                                    fail = false
                                }
                            }
                        }
                    }
                }
            }
            if (fail) {
                done = true
            }
            l++
        } while (done == false)

        // console.log("GAME AR")
        // console.log(gameAr)

        // console.log("MOVE ARR")
        // console.log(moveArr)
        console.log(moveArr[mX][mY])
        if (fail == true) {
            return "fail"
        } else {
            return moveArr[mX][mY]
        }

    }
}