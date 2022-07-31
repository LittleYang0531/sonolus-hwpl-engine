import {
    And,
    Code,
    GreaterOr,
    LessOr,
    LevelMemory,
    TouchX,
    TouchY,
} from 'sonolus.js'

export const isTouchOccupied = LevelMemory.to<boolean>(1)

export function checkTouchXInHitbox(left: Code<number>, right: Code<number>) {
    return And(GreaterOr(TouchX, left), LessOr(TouchX, right))
}

export function checkTouchYInHitbox() {
    return LessOr(TouchY, 0)
}
