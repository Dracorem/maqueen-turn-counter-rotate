input.onButtonPressed(Button.A, function () {
    CT_Turn_R(180)
})
function CT_Turn_R (degrees: number) {
    maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 180)
    maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CCW, 180)
    basic.pause(degrees / 360 * 1250)
    maqueen.motorStop(maqueen.Motors.All)
    basic.pause(100)
}
