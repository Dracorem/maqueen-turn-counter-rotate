function CT_Turn180_R (degrees: number) {
    maqueen.motorStop(maqueen.Motors.All)
    maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 180)
    maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CCW, 180)
    basic.pause(degrees / 180 * 650)
    maqueen.motorStop(maqueen.Motors.All)
    basic.pause(500)
}
function CT_Turn180_L (degrees: number) {
    maqueen.motorStop(maqueen.Motors.All)
    maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 180)
    maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CCW, 180)
    basic.pause(degrees / 180 * 600)
    maqueen.motorStop(maqueen.Motors.All)
    basic.pause(500)
}
input.onButtonPressed(Button.A, function () {
    CT_Turn180_R(90)
    CT_Turn180_L(90)
    for (let index = 0; index < 3; index++) {
        CT_Turn180_L(30)
    }
})
