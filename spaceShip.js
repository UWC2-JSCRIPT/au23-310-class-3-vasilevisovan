// 1. Create a class function SpaceShip
// - should set two properties: name and topSpeed
// - should have a method accelerate that logs to the console 
//   `${name} moving to ${topSpeed}`
class SpaceShip {
    constructor(name, topSpeed) {
      this.name = name;
      this.topSpeed = topSpeed;
    }
  
    accelerate() {
      console.log(`${this.name} accelerating to ${this.topSpeed}`);
    }
  }
  
// 2. Call the constructor with a couple ships, 
// and call accelerate on both of them.
  const spaceship1 = new SpaceShip("Zmeu", "Viteza sunetului(speed of sound) ");/*The Zmeu is a fantastic creature of 
  Romanian folklore and Romanian mythology. Though referred by some sources as a dragon, 
  the zmeu is nevertheless distinct, because it usually has clear anthropomorphic  traits: it is humanoid and has legs, arms,
   the ability to create and use artifacts such as weapons, and to ride a horse, and has the desire 
  to marry young girls. There are commentators that class it as a giant (equivalent of an ogre), or a devil, 
  or even a vampire.*/
 
  const spaceship2 = new SpaceShip("Balaur", "Viteza luminii(speed of light)");/*A balaur in Romanian folklore is a type of 
  many-headed dragon or monstrous serpent, sometimes said to be equipped with wings. The number of heads is usually around three, 
  but they can also have seven heads or even twelve heads according to some legends.*/
  
  spaceship1.accelerate();
  spaceship2.accelerate();