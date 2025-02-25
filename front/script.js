// ENVIRONMENT INITIALIZATION //////////////////////////////////////////////////

import { CANVAS_WIDTH, CANVAS_HEIGHT } from './js/settings.js'


const canvas = document.getElementById('canvas')
const ctx = canvas.getContext('2d') 


canvas.width = CANVAS_WIDTH
canvas.height = CANVAS_HEIGHT

////////////////////////////////////////////////////////////////////////////////


// GAME INITIALIZATION /////////////////////////////////////////////////////////

import { Control } from './js/control.js'
import { Player } from './js/player.js'


const player = new Player(ctx)
const control = new Control(player)

////////////////////////////////////////////////////////////////////////////////


// GAME LOOP ///////////////////////////////////////////////////////////////////

let beginFrameTime = + new Date()

function loop(endFrameTime) {

    const delta = (endFrameTime - beginFrameTime) / 1000
    beginFrameTime = endFrameTime

    control.update(delta)

    ctx.reset()
    player.draw()

    requestAnimationFrame(loop)

}


loop()

////////////////////////////////////////////////////////////////////////////////