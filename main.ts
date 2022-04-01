input.onButtonPressed(Button.AB, function () {
    radio.sendString("S")
    basic.showString("S")
})
radio.onReceivedValue(function (name, value) {
    if (name == "hældning") {
        hældning = value
    }
    if (name == "rul") {
        rul = value
    }
})
let rws = 0
let lws = 0
let rul = 0
let hældning = 0
radio.setGroup(88)
basic.showIcon(IconNames.Yes)
basic.forever(function () {
    radio.sendValue("hældning", input.rotation(Rotation.Pitch))
    radio.sendValue("rul", input.rotation(Rotation.Roll))
})
basic.forever(function () {
    basic.showNumber(input.rotation(Rotation.Pitch))
    lws = Math.constrain(0 - input.rotation(Rotation.Pitch) + input.rotation(Rotation.Roll), -100, 100)
    rws = Math.constrain(0 - input.rotation(Rotation.Pitch) - input.rotation(Rotation.Roll), -100, 100)
    rws = 0
    lws = 0
    cuteBot.motors(lws, rws)
})
