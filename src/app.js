let classes = ['Bowerman','Swordsman','Magician','Undead','Zombie','Daemon'];

class Character {
  constructor (name, type) {
    if (!this.validate(name, type)) throw new Error ("Некорректные аргументы");
  }

  validate (name, type) {
    if (name.length > 10 || name.length < 2) return false;
    if (!classes.some(a => a === type)) return false;

    this.name = name;
    this.type = type;

    return true;
  }
}

class Bowerman extends Character {
  constructor (name, type = 'Bowerman') {
    super (name, type)
    SetSettings (this, 100, 1, 25, 25);
  }
}
class Swordsman extends Character {
  constructor (name, type = 'Swordsman') {
    super (name, type)
    SetSettings (this, 100, 1, 40, 10);
  }
}
class Magician extends Character {
  constructor (name, type = 'Magician') {
    super (name, type)
    SetSettings (this, 100, 1, 10, 40);
  }
}
class Undead extends Character {
  constructor (name, type = 'Undead') {
    super (name, type)
    SetSettings (this, 100, 1, 25, 25);
  }
}
class Zombie extends Character {
  constructor (name, type = 'Zombie') {
    super (name, type)
    SetSettings (this, 100, 1, 40, 10);
  }
}
class Daemon extends Character {
  constructor (name, type = 'Daemon') {
    super (name, type)
    SetSettings (this, 100, 1, 10, 40);
  }
}

function SetSettings (prop, health, level, attack, defence) {
  prop.health = health;
  prop.level = level;
  prop.attack = attack;
  prop.defence = defence;
}

let swordsman = new Swordsman('Маг');
console.log(swordsman);
