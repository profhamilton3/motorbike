input.onButtonPressed(Button.A, function () {
    doPatternSwerve()
})
function cm_sonarbit () {
    pins.digitalWritePin(sensor_pin, 0)
    control.waitMicros(2)
    pins.digitalWritePin(sensor_pin, 1)
    control.waitMicros(10)
    pins.digitalWritePin(sensor_pin, 0)
    let d = pins.pulseIn(sensor_pin, PulseValue.High, 25000)
distance = d / 58
    if (distance > 400) {
        distance = 0
    }
    return Math.floor(distance)
}
function doPatternSwerve () {
    music._playDefaultBackground(music.builtInPlayableMelody(Melodies.PowerUp), music.PlaybackMode.InBackground)
    for (let index = 0; index <= 4; index++) {
        wuKong.setServoAngle(wuKong.ServoTypeList._180, wuKong.ServoList.S0, 90 + index * 5)
        wuKong.setMotorSpeed(wuKong.MotorList.M1, -20 + index * -10)
        basic.pause(200)
    }
    basic.pause(1000)
    for (let index2 = 0; index2 <= 5; index2++) {
        wuKong.setServoAngle(wuKong.ServoTypeList._180, wuKong.ServoList.S0, 105 - index2 * 5)
        wuKong.setMotorSpeed(wuKong.MotorList.M1, -20 + index2 * -10)
        basic.pause(200)
    }
    basic.pause(1000)
    wuKong.setServoAngle(wuKong.ServoTypeList._180, wuKong.ServoList.S0, 90)
    wuKong.setMotorSpeed(wuKong.MotorList.M1, -75)
    basic.pause(2000)
    for (let index3 = 0; index3 <= 5; index3++) {
        wuKong.setMotorSpeed(wuKong.MotorList.M1, -75 - index3 * -10)
    }
    wuKong.stopAllMotor()
}
input.onButtonPressed(Button.B, function () {
    doPatternSwerve2()
})
function doPatternSwerve2 () {
    music._playDefaultBackground(music.builtInPlayableMelody(Melodies.PowerUp), music.PlaybackMode.InBackground)
    for (let index4 = 0; index4 <= 4; index4++) {
        wuKong.setMotorSpeed(wuKong.MotorList.M1, -20 + index4 * -10)
        basic.pause(1000)
    }
    basic.pause(1000)
    for (let index5 = 0; index5 <= 3; index5++) {
        wuKong.setServoAngle(wuKong.ServoTypeList._180, wuKong.ServoList.S0, 105 - index5 * 5)
        wuKong.setMotorSpeed(wuKong.MotorList.M1, -40 + index5 * -10)
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
let distance = 0
let sensor_pin = 0
wuKong.lightIntensity(75)
basic.showIcon(IconNames.Happy)
wuKong.setServoAngle(wuKong.ServoTypeList._180, wuKong.ServoList.S0, 90)
sensor_pin = pins.digitalReadPin(DigitalPin.P8)
pins.setPull(sensor_pin, PinPullMode.PullNone)
basic.forever(function () {
    if (cm_sonarbit() < 5) {
        doPatternSwerve2()
        doPatternSwerve()
    }
    wuKong.stopAllMotor()
    wuKong.setServoAngle(wuKong.ServoTypeList._180, wuKong.ServoList.S0, 90)
})
