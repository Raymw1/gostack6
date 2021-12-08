"use strict";
const a = 5;
const numbers = [1, 2, 3, 4];
const strings = ['1', '2', '3', '4'];
function compare(x, y) {
    if (y === undefined)
        return false;
    return x > y ? "X is greater than Y" : "Y is greater than X";
}
function userDetails(user) {
    return `The user ${user.name} is ${user.age} yo!`;
}
// ============================================================
// interface Polygon {}
// interface Square extends Polygon {
//   type: 'square'
//   x: number
// }
// interface Circle extends Polygon {
//   type: 'circle'
//   radius: number
// }
var PolygonTypes;
(function (PolygonTypes) {
    PolygonTypes[PolygonTypes["Square"] = 0] = "Square";
    PolygonTypes[PolygonTypes["Circle"] = 1] = "Circle";
    PolygonTypes[PolygonTypes["Rectangle"] = 2] = "Rectangle";
})(PolygonTypes || (PolygonTypes = {}));
function polygonArea(polygon) {
    switch (polygon.type) {
        case PolygonTypes.Square: return (polygon.x) ** 2;
        case PolygonTypes.Circle: return 3.14 * (polygon.radius) ** 2;
        case PolygonTypes.Rectangle: return polygon.x * polygon.y;
        default:
            return false;
    }
}
