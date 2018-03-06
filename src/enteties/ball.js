//import {circle} from '../graphics/graphics-handler.js'

export default class Ball {
  constructor (r_, xPos_, yPos_, dx_, dy_) {
    this.r = r_
    this.xPos = xPos_
    this.yPos = yPos_
    this.dx = dx_
    this.dy = dy_
  }

  render (ctx_) {
    ctx_.fillStyle = 'rgba(218, 3, 221, 1.0)'
    ctx_.strokeStyle = 'rgba(214, 145, 199, 1.0)'

  //    strokedSquare(ctx_, this.x, this.y, CELL_SIZE);
  }
}
