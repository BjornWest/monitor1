function plot (x: number, y: number) {
    led.plot(x, y)
}
function position (x: number, y: number) {
    led.unplot(xPosition, yPosition)
    xPosition = x
    yPosition = y
}
radio.onReceivedString(function (receivedString) {
    if (receivedString == "snake") {
        mode = 1
    }
})
radio.onReceivedValue(function (name, value) {
    if (name == "xPos") {
        position(value, yPosition)
    } else if (name == "yPos") {
        position(xPosition, value)
    } else if (name == "xPlot") {
        xPlot = value
    } else if (name == "yPlot") {
        plot(xPlot, value)
    } else if (name == "xUnPlot") {
        xUnPlot = value
    } else if (name == "yUnPlot") {
        unplot(xUnPlot, value)
    } else if (false) {
    	
    }
})
function unplot (x: number, y: number) {
    led.unplot(x, y)
}
let xUnPlot = 0
let xPlot = 0
let mode = 0
let yPosition = 0
let xPosition = 0
radio.setGroup(1)
xPosition = 0
yPosition = 0
mode = 0
basic.forever(function () {
    if (mode == 0) {
        led.plot(xPosition, yPosition)
    }
})
