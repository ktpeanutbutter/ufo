namespace SpriteKind {
    export const enemy2 = SpriteKind.create()
    export const enemy3 = SpriteKind.create()
    export const enemy4 = SpriteKind.create()
    export const animal1 = SpriteKind.create()
    export const animal2 = SpriteKind.create()
    export const animal3 = SpriteKind.create()
}
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runMovementAnimation(
    mySprite,
    animation.animationPresets(animation.bounceLeft),
    2000,
    false
    )
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runMovementAnimation(
    mySprite,
    animation.animationPresets(animation.bounceRight),
    2000,
    false
    )
})
sprites.onOverlap(SpriteKind.enemy3, SpriteKind.Player, function (sprite, otherSprite) {
    mySprite4.setPosition(320, -10)
    info.changeScoreBy(1)
})
sprites.onOverlap(SpriteKind.animal3, SpriteKind.Player, function (sprite, otherSprite) {
    pig.setPosition(randint(0, 220), randint(0, 220))
    animation.runMovementAnimation(
    mySprite,
    animation.animationPresets(animation.flyToCenter),
    500,
    false
    )
    info.changeScoreBy(1)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, function (sprite, otherSprite) {
    info.changeLifeBy(-2)
})
sprites.onOverlap(SpriteKind.animal2, SpriteKind.Player, function (sprite, otherSprite) {
    chicken.setPosition(randint(10, 220), randint(10, 220))
    info.changeScoreBy(1)
})
sprites.onOverlap(SpriteKind.enemy2, SpriteKind.Player, function (sprite, otherSprite) {
    mySprite3.setPosition(320, 280)
    info.changeScoreBy(1)
})
sprites.onOverlap(SpriteKind.animal1, SpriteKind.Player, function (sprite, otherSprite) {
    cow.setPosition(randint(10, 220), randint(10, 240))
    info.changeLifeBy(1)
    info.changeScoreBy(1)
})
sprites.onOverlap(SpriteKind.enemy4, SpriteKind.Player, function (sprite, otherSprite) {
    mySprite5.setPosition(-10, 280)
    info.changeScoreBy(1)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    mySprite2.setPosition(-10, -10)
    info.changeScoreBy(1)
})
let projectile3: Sprite = null
let projectile4: Sprite = null
let projectile2: Sprite = null
let projectile: Sprite = null
let mySprite5: Sprite = null
let mySprite4: Sprite = null
let mySprite3: Sprite = null
let mySprite2: Sprite = null
let mySprite: Sprite = null
let cow: Sprite = null
let chicken: Sprite = null
let pig: Sprite = null
pig = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . 3 3 3 . . . . . . . . . 
    . . . . f 3 f . . . . . . . . . 
    . . . . 3 3 3 3 3 3 . . . . . . 
    . . . . . . 3 3 3 3 . . . . . . 
    . . . . . . 3 . . 3 . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.animal3)
tiles.setTilemap(tilemap`level1`)
chicken = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . f 1 f . . . . . . 
    . . . . . . . 1 4 1 . . . . . . 
    . . . 1 d d d 1 2 1 . . . . . . 
    . . . 1 d d d 1 1 1 . . . . . . 
    . . . 1 1 1 1 1 . . . . . . . . 
    . . . . 4 . 4 . . . . . . . . . 
    . . . . 4 . 4 . . . . . . . . . 
    . . . . 4 . 4 . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.animal2)
cow = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . e e e . . . . . . 
    . . . . . . . f e f . . . . . . 
    . . . . 1 e e e e e . . . . . . 
    . . . . e e 1 e . . . . . . . . 
    . . . . d . . d . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.animal1)
scene.setBackgroundColor(7)
mySprite = sprites.create(img`
    ................
    ................
    ................
    ......1111......
    .....1....1.....
    ....1.f77f.1....
    ....1.7ff7.1....
    ....1..77..1....
    ..bbbbbbbbbbbb..
    .bbbbbbbbbbbbbb.
    .b1b1b1bb1b1b1b.
    .bbbbbbbbbbbbbb.
    ..bbbbbbbbbbbb..
    .......99.......
    .......99.......
    ......9669......
    ......9669......
    .....966669.....
    .....966669.....
    ....96666669....
    ....96666669....
    ...9666666669...
    ...9666666669...
    ..966666666669..
    ..966666666669..
    .96666666666669.
    .96666666666669.
    ..996666666699..
    ....99666699....
    ......9999......
    `, SpriteKind.Player)
mySprite2 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . 8 8 8 . . . . . . . 
    . . . . . 8 8 5 8 8 . . . . . . 
    . . . . . e f e f e . . . . . . 
    . . . . . e e f e e . . . . . . 
    . . . . . . e e e . . . . . . . 
    . . . . . 8 8 8 8 8 . . . . . . 
    . . . . . . 8 8 5 . . . . . . . 
    . . . . . . 8 8 8 . . . . . . . 
    . . . . . . f f f . . . . . . . 
    . . . . . . 8 . 8 . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Enemy)
mySprite3 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . 8 8 8 . . . . . . . 
    . . . . . 8 8 5 8 8 . . . . . . 
    . . . . . e f e f e . . . . . . 
    . . . . . e e f e e . . . . . . 
    . . . . . . e e e . . . . . . . 
    . . . . . 8 8 8 8 8 . . . . . . 
    . . . . . . 8 8 5 . . . . . . . 
    . . . . . . 8 8 8 . . . . . . . 
    . . . . . . f f f . . . . . . . 
    . . . . . . 8 . 8 . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.enemy2)
mySprite4 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . 8 8 8 . . . . . . . 
    . . . . . 8 8 5 8 8 . . . . . . 
    . . . . . e f e f e . . . . . . 
    . . . . . e e f e e . . . . . . 
    . . . . . . e e e . . . . . . . 
    . . . . . 8 8 8 8 8 . . . . . . 
    . . . . . . 8 8 5 . . . . . . . 
    . . . . . . 8 8 8 . . . . . . . 
    . . . . . . f f f . . . . . . . 
    . . . . . . 8 . 8 . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.enemy3)
mySprite5 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . 8 8 8 . . . . . . . 
    . . . . . 8 8 5 8 8 . . . . . . 
    . . . . . e f e f e . . . . . . 
    . . . . . e e f e e . . . . . . 
    . . . . . . e e e . . . . . . . 
    . . . . . 8 8 8 8 8 . . . . . . 
    . . . . . . 8 8 5 . . . . . . . 
    . . . . . . 8 8 8 . . . . . . . 
    . . . . . . f f f . . . . . . . 
    . . . . . . 8 . 8 . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.enemy4)
controller.moveSprite(mySprite)
scene.cameraFollowSprite(mySprite)
mySprite2.follow(mySprite, 50)
mySprite3.follow(mySprite, 39)
mySprite4.follow(mySprite, 28)
mySprite5.follow(mySprite, 17)
info.setLife(299)
pause(100)
info.setScore(0)
forever(function () {
    pause(2000)
    projectile = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . f . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, mySprite2, 50, 50)
    projectile2 = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . f . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, mySprite3, -50, -50)
    projectile4 = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . f . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, mySprite4, -50, 50)
    projectile3 = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . f . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, mySprite5, 50, -50)
})
