var geom = require('pex-geom');
var glu = require('pex-glu');
var materials = require('pex-materials');
var color = require('pex-color');

var Mesh = glu.Mesh;
var Geometry = geom.Geometry;
var Vec3 = geom.Vec3;
var ShowColors = materials.ShowColors;
var Color = color.Color;

function AxisHelper(size) {
  size = size || 2;
  var g = new Geometry({
    vertices: [
      new Vec3(0, 0, 0),
      new Vec3(1, 0, 0),
      new Vec3(0, 0, 0),
      new Vec3(0, 1, 0),
      new Vec3(0, 0, 0),
      new Vec3(0, 0, 1)
    ],
    colors: [
      Color.Red,
      Color.Red,
      Color.Green,
      Color.Green,
      Color.Blue,
      Color.Blue
    ],
    edges: [
      [0, 1],
      [2, 3],
      [4, 5]
    ]
  });

  Mesh.call(this, g, new ShowColors({ color: color, pointSize: 10 }), { lines: true });
}

AxisHelper.prototype = Object.create(Mesh.prototype);

module.exports = AxisHelper;