const a = 5;
const numbers: number[] = [1, 2, 3, 4]
const strings: string[] = ['1', '2', '3', '4']

function compare(x: number, y?: number): string | boolean {
  if (y === undefined) return false
  return x > y ? "X is greater than Y" : "Y is greater than X"
}

// ============================================================

// function userDetails(user: {name: string, age: number}): string {
interface User {
  name: string
  age: number
}

function userDetails(user: User): string {
  return `The user ${user.name} is ${user.age} yo!`
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
enum PolygonTypes { Square, Circle, Rectangle }
type Polygon = 
  {type: PolygonTypes.Square, x: number} |
  {type: PolygonTypes.Circle, radius: number} |
  {type: PolygonTypes.Rectangle, x: number, y: number}

function polygonArea(polygon: Polygon): number | boolean {
  switch (polygon.type) {
    case PolygonTypes.Square: return (polygon.x)**2;
    case PolygonTypes.Circle: return 3.14*(polygon.radius)**2;
    case PolygonTypes.Rectangle: return polygon.x * polygon.y;
    default:
      return false
  }
}
