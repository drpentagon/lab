import GraphicsHandler from './graphics-handler.js'
import Ball from './enteties/ball.js'

const CONTAINER = document.querySelector('.graphics-wrapper')

class Application {
  constructor () {
    this.gh = new GraphicsHandler(CONTAINER)
    this.gh.lineWidth = 1

    this.initCircles()
  }

  initCircles () {
    const circles = []
    circles.push(new Ball(50, 100, 100, 0, 0))

    this.circles = circles
  }

  start () {
    this.render()
    this.loop()
  }

  loop () {
    requestAnimationFrame(() => this.loop())
  }

  render () {
    this.circles.forEach(c => c.render(this.gh))
  }
}

const game = new Application()
game.start()
