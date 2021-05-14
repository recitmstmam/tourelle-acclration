let angle_0 = 90
let angle1 = 90
servos.P0.setAngle(angle_0)
servos.P1.setAngle(angle1)
basic.forever(function () {
    if (input.acceleration(Dimension.Y) >= 150 && angle_0 < 175) {
        angle_0 += 2.5
        servos.P0.setAngle(angle_0)
    } else if (input.acceleration(Dimension.Y) <= -150 && angle_0 > 5) {
        angle_0 += -2.5
        servos.P0.setAngle(angle_0)
    } else {
        servos.P0.stop()
    }
})
basic.forever(function () {
    if (input.acceleration(Dimension.X) >= 150 && angle1 < 175) {
        angle1 += 2.5
        servos.P1.setAngle(angle1)
    } else if (input.acceleration(Dimension.X) <= -150 && angle1 > 5) {
        angle1 += -2.5
        servos.P1.setAngle(angle1)
    } else {
        servos.P1.stop()
    }
})
