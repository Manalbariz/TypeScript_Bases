"use strict";
// Modules
Object.defineProperty(exports, "__esModule", { value: true });
exports.Point5 = void 0;
class Point5 {
    _x;
    _y;
    constructor(_x, _y) {
        this._x = _x;
        this._y = _y;
    } // parameters are declared and initialize
    draw() {
        console.log('X = ' + this._x + ' Y = ' + this._y);
    }
}
exports.Point5 = Point5;
///////
