input.onButtonPressed(Button.A, function () {
    radio.sendString("Y")
})
radio.onReceivedString(function (receivedString) {
    basic.showString(receivedString)
})
input.onButtonPressed(Button.B, function () {
    radio.sendString("N")
})
basic.showIcon(IconNames.Happy)
radio.setGroup(1)
