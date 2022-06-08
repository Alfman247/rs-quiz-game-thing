input.onButtonPressed(Button.A, function () {
    if (Mode_0__setup_1__question == 0) {
        Question_number += 1
    } else {
        if (Question_number == 1) {
            Incorrect()
        } else if (Question_number == 2) {
            Correct()
        } else if (Question_number == 3) {
            Incorrect()
        } else if (Question_number == 4) {
            Incorrect()
        } else if (Question_number == 5) {
            Correct()
        }
        setup_mode()
    }
})
function setup_mode () {
    Mode_0__setup_1__question = 0
    Question_number = 0
    basic.showLeds(`
        . # # # .
        . . . # .
        . . # # .
        . . . . .
        . . # . .
        `)
}
input.onButtonPressed(Button.B, function () {
    if (Mode_0__setup_1__question == 0) {
        question_mode()
        Cool_animation()
    } else {
        if (Question_number == 1) {
            Correct()
        } else if (Question_number == 2) {
            Incorrect()
        } else if (Question_number == 3) {
            Correct()
        } else if (Question_number == 4) {
            Correct()
        } else if (Question_number == 5) {
            Incorrect()
        }
        setup_mode()
    }
})
function question_mode () {
    Mode_0__setup_1__question = 1
}
function Cool_animation () {
    basic.showIcon(IconNames.Square)
    basic.pause(100)
    basic.showIcon(IconNames.SmallSquare)
    basic.pause(100)
    basic.showIcon(IconNames.SmallDiamond)
    basic.pause(100)
    basic.clearScreen()
}
function Incorrect () {
    basic.showIcon(IconNames.No)
    music.playMelody("C5 B A G F E D C ", 120)
    basic.pause(100)
    Cool_animation()
}
function Correct () {
    basic.showIcon(IconNames.Yes)
    music.playMelody("C D E F G A B C5 ", 120)
    basic.pause(100)
    Cool_animation()
}
let Question_number = 0
let Mode_0__setup_1__question = 0
setup_mode()
basic.forever(function () {
    if (Question_number != 0 && Mode_0__setup_1__question == 0) {
        basic.showNumber(Question_number)
    }
})
