function Fallright () {
    if (unlocked == 1) {
        unlocked += 1
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . # # . .
            . . . . .
            `)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . # # .
            . . . . .
            `)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . # #
            . . . . .
            `)
        basic.clearScreen()
        boxx = 4
        boxy = 3
        led.plot(boxx, boxy)
        unlocked += 1
    }
    radio.sendValue("xTarget", 4)
    radio.sendValue("yTarget", 3)
}
function position (x: number, y: number) {
    led.unplot(xPosition, yPosition)
    xPosition = x
    yPosition = y
}
input.onGesture(Gesture.Shake, function () {
    Falldown()
})
input.onGesture(Gesture.TiltRight, function () {
    Fallright()
})
function Falldown () {
    if (unlocked == 0) {
        basic.showLeds(`
            . # . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
        basic.showLeds(`
            . # . . .
            . # . . .
            . . . . .
            . . . . .
            . . . . .
            `)
        basic.showLeds(`
            . . . . .
            . # . . .
            . # . . .
            . . . . .
            . . . . .
            `)
        basic.showLeds(`
            . . . . .
            . . . . .
            . # . . .
            . # . . .
            . . . . .
            `)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . # . . .
            . . . . .
            `)
        unlocked += 1
    }
}
radio.onReceivedValue(function (name, value) {
    if (name == "xPos") {
        position(value, yPosition)
    } else if (name == "yPos") {
        position(xPosition, value)
    } else if (false) {
    	
    }
    if (name == "interact" && value == 1) {
        basic.showNumber(3)
        unlocked += 1
        radio.sendValue("xTarget", -1)
        radio.sendValue("yTarget", -1)
    }
})
let boxy = 0
let boxx = 0
let unlocked = 0
let yPosition = 0
let xPosition = 0
radio.setGroup(10)
xPosition = 0
yPosition = 0
unlocked = 0
basic.forever(function () {
    led.plot(xPosition, yPosition)
    if (unlocked == 1) {
        led.plot(1, 3)
    }
    if (unlocked == 3) {
        led.plot(4, 3)
    }
    if (unlocked == 4 && (xPosition > 4 || yPosition > 4)) {
        basic.showNumber(3)
    }
})
