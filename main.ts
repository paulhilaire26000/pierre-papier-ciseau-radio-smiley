radio.onReceivedNumber(function (receivedNumber) {
    adv = receivedNumber
})
input.onButtonPressed(Button.A, function () {
    choix += 1
})
input.onButtonPressed(Button.B, function () {
    moi = choix
    radio.sendNumber(moi)
    choix = 0
    while (adv == -1) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . # . . .
            . . . . .
            . . . . .
            `)
        basic.pause(100)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . # . .
            . . . . .
            . . . . .
            `)
        basic.pause(100)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . # .
            . . . . .
            . . . . .
            `)
        basic.pause(100)
    }
})
let choix = 0
let adv = 0
let moi = 0
moi = -1
radio.setGroup(1)
adv = -1
choix = 1
basic.forever(function () {
    if (choix > 3) {
        choix = 1
    }
    if (choix == 1) {
        basic.showLeds(`
            # # # # #
            # . . . #
            # . . . #
            # . . . #
            # # # # #
            `)
    } else if (choix == 2) {
        basic.showLeds(`
            . . . . .
            . # # # .
            . # # # .
            . # # # .
            . . . . .
            `)
    } else {
        if (choix == 3) {
            basic.showLeds(`
                # # . . #
                # # . # .
                . . # . .
                # # . # .
                # # . . #
                `)
        }
    }
    if (adv != -1 && moi != -1) {
        if (adv == moi) {
            basic.showLeds(`
                . . . . .
                . # # # .
                . . . . .
                . # # # .
                . . . . .
                `)
        }
        if (adv == 1) {
            if (moi == 2) {
                basic.showIcon(IconNames.Sad)
                basic.pause(5000)
            } else {
                if (moi == 3) {
                    basic.showIcon(IconNames.Happy)
                    basic.pause(5000)
                }
            }
        }
        if (adv == 2) {
            if (moi == 1) {
                basic.showIcon(IconNames.Happy)
                basic.pause(5000)
            } else {
                if (moi == 3) {
                    basic.showIcon(IconNames.Sad)
                    basic.pause(5000)
                }
            }
        }
        if (adv == 3) {
            if (moi == 1) {
                basic.showIcon(IconNames.Sad)
                basic.pause(5000)
            } else {
                if (moi == 2) {
                    basic.showIcon(IconNames.Happy)
                    basic.pause(5000)
                }
            }
        }
        basic.pause(1000)
    }
    basic.pause(1000)
})
