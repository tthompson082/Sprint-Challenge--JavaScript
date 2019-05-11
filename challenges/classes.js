// 1. Copy and paste your prototype in here and refactor into class syntax.

class CuboidMakers {
    constructor(attributes) {
        this.length = attributes.length;
        this.width = attributes.width;
        this.height = attributes.height;
    }
    volume() {
        return this.length * this.width * this.height;
    }
    surfaceArea() {
        return 2 * (this.length * this.width + this.length * this.height + this.width * this.height);
    }
}

class CubeMaker extends CuboidMakers {
    constructor(attributes) {
        super(attributes);
    }
    cubeVolume() {
        return Math.pow(this.length, 3)
    }
    cubeSurfaceArea() {
        return 6 * (Math.pow(this.length, 2))
    }
}

let cuboid2 = new CuboidMakers({
    'length': 4,
    'width': 5,
    'height': 5
})

let cube = new CubeMaker({
    'length': 4,
    'width': 5,
    'height': 5
})

// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log(cuboid2.volume()); // 100
console.log(cuboid2.surfaceArea()); // 130
console.log(cube.cubeVolume());
console.log(cube.cubeSurfaceArea());

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.