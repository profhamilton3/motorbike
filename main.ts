input.onButtonPressed(Button.A, function () {
    doPatternSwerve()
})
function doPatternSwerve () {
    music._playDefaultBackground(music.builtInPlayableMelody(Melodies.PowerUp), music.PlaybackMode.InBackground)
    for (let index = 0; index <= 4; index++) {
        wuKong.setServoAngle(wuKong.ServoTypeList._180, wuKong.ServoList.S0, 90 + index * 5)
        wuKong.setMotorSpeed(wuKong.MotorList.M1, -20 + index * -10)
        basic.pause(200)
    }
    basic.pause(1000)
    for (let index = 0; index <= 5; index++) {
        wuKong.setServoAngle(wuKong.ServoTypeList._180, wuKong.ServoList.S0, 105 - index * 5)
        wuKong.setMotorSpeed(wuKong.MotorList.M1, -20 + index * -10)
        basic.pause(200)
    }
    basic.pause(1000)
    wuKong.setServoAngle(wuKong.ServoTypeList._180, wuKong.ServoList.S0, 90)
    wuKong.setMotorSpeed(wuKong.MotorList.M1, -75)
    basic.pause(2000)
    for (let index = 0; index <= 5; index++) {
        wuKong.setMotorSpeed(wuKong.MotorList.M1, -75 - index * -10)
    }
    wuKong.stopAllMotor()
}
input.onButtonPressed(Button.B, function () {
    doPatternSwerve2()
})
function doPatternSwerve2 () {
    music._playDefaultBackground(music.builtInPlayableMelody(Melodies.PowerUp), music.PlaybackMode.InBackground)
    for (let index = 0; index <= 4; index++) {
        wuKong.setMotorSpeed(wuKong.MotorList.M1, -20 + index * -10)
        basic.pause(1000)
    }
    basic.pause(1000)
    for (let index = 0; index <= 3; index++) {
        wuKong.setServoAngle(wuKong.ServoTypeList._180, wuKong.ServoList.S0, 105 - index * 5)
        wuKong.setMotorSpeed(wuKong.MotorList.M1, -40 + index * -10)
        basic.pause(2000)
    }
    basic.pause(1000)
    wuKong.setServoAngle(wuKong.ServoTypeList._180, wuKong.ServoList.S0, 75)
    wuKong.setMotorSpeed(wuKong.MotorList.M1, -75)
    basic.pause(5000)
    wuKong.stopAllMotor()
}
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    music._playDefaultBackground(music.builtInPlayableMelody(Melodies.PowerDown), music.PlaybackMode.InBackground)
    wuKong.stopAllMotor()
})
wuKong.lightIntensity(75)
basic.showIcon(IconNames.Happy)
wuKong.setServoAngle(wuKong.ServoTypeList._180, wuKong.ServoList.S0, 90)
let sensor_pin = pins.digitalReadPin(DigitalPin.P8)
let distance = 0
