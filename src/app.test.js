import * as ch from './app.js';

console.log(ch);
let bowerman = new ch.Bowerman('Bowerman');
let swordsman = new ch.Swordsman('Swordsman');
let magician = new ch.Magician('Magician');
let undead = new ch.Undead('Undead');
let zombie = new ch.Zombie('Zombie');
let daemon = new ch.Daemon('Daemon');

test('Character Class Error (No type) ', () => {
  expect(new ch.Character('Daemon', 'Test')).toEqual(new Error ("Некорректные аргументы"));
});
test('Character Class Error (Invalid Name)', () => {
  expect(new ch.Character('DaemonTestSword', 'Swordsman')).toEqual(new Error ("Некорректные аргументы"));
});
