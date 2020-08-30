import { objectValues } from './core/objects'
import { GAME_OBJECTS } from './objects'
import { vec3New } from './math/vec3'

interface Animation {
  _value: float
  _speed: float
  _initial: float
  _max: float
  _running: int
  _onComplete?: Function
}

const ANIMATIONS = {
  _prisonDoor: {
    _value: 0,
    _speed: 1,
    _initial: 0,
    _max: 1,
    _running: 0
  },
  _antennaDoor: {
    _value: 0,
    _speed: 0.2,
    _initial: 0,
    _max: 1,
    _running: 0
  },
  _monumentDescend: {
    _value: 0,
    _speed: 0.2,
    _initial: 0,
    _max: 1,
    _running: 0,
    _onComplete() {
      //Set the key location so it can be picked up:
      GAME_OBJECTS._antennaKey._location = vec3New(46.4, 4.6, 29.4)
    }
  },
  _oilrigRamp: {
    _value: 0,
    _speed: 1,
    _initial: 0,
    _max: 20,
    _running: 0
  },
  _oilrigWheel: {
    _value: 0,
    _speed: 3,
    _initial: 0,
    _max: 10,
    _running: 0
  }
}

const ANIMATIONS_LIST: Animation[] = objectValues(ANIMATIONS)

function updateAnimations(dt: float) {
  for (const anim of ANIMATIONS_LIST) {
    if (anim._running === 0) {
      continue
    }
    anim._value += anim._speed * dt * anim._running
    if (anim._value >= anim._max || anim._value <= anim._initial) {
      anim._value = anim._running > 0 ? anim._max : anim._initial
      if (anim._onComplete) {
        anim._onComplete()
      }
      anim._running = 0
    }
  }
}

function runAnimation(anim: Animation, forwards = true) {
  anim._value = forwards ? anim._initial : anim._max
  anim._running = forwards ? 1 : -1
}

export { ANIMATIONS, runAnimation, updateAnimations }
