const GOLEM1 = 'golem1';
const GOLEM2 = 'golem2';
const GOLEM3 = 'golem3';
const MINOTAUR1 = 'minotaur1';
const MINOTAUR2 = 'minotaur2';
const MINOTAUR3 = 'minotaur3';
const SATYR1 = 'satyr1';
const SATYR2 = 'satyr2';
const SATYR3 = 'satyr3';
const WRAITH1 = 'wraith1';
const WRAITH2 = 'wraith2';
const WRAITH3 = 'wraith3';
export const names = {
  GOLEM1,
  GOLEM2,
  GOLEM3,
  MINOTAUR1,
  MINOTAUR2,
  MINOTAUR3,
  SATYR1,
  SATYR2,
  SATYR3,
  WRAITH1,
  WRAITH2,
  WRAITH3,
};

const IDLE = 0;
const ATTACK = 1;
const HURT = 2;
const DIE = 3;
export const status = { IDLE, ATTACK, HURT, DIE };

export const classes = {
  [IDLE]: {
    [GOLEM1]: 'hero-idle hero-idle--golem1',
    [GOLEM2]: 'hero-idle hero-idle--golem2',
    [GOLEM3]: 'hero-idle hero-idle--golem3',
    [MINOTAUR1]: 'hero-idle hero-idle--minotaur1',
    [MINOTAUR2]: 'hero-idle hero-idle--minotaur2',
    [MINOTAUR3]: 'hero-idle hero-idle--minotaur3',
    [SATYR1]: 'hero-idle hero-idle--satyr1',
    [SATYR2]: 'hero-idle hero-idle--satyr2',
    [SATYR3]: 'hero-idle hero-idle--satyr3',
    [WRAITH1]: 'hero-idle hero-idle--wraith1',
    [WRAITH2]: 'hero-idle hero-idle--wraith2',
    [WRAITH3]: 'hero-idle hero-idle--wraith3',
  },
  [ATTACK]: {
    [GOLEM1]: 'hero-attack hero-attack--golem1',
    [GOLEM2]: 'hero-attack hero-attack--golem2',
    [GOLEM3]: 'hero-attack hero-attack--golem3',
    [MINOTAUR1]: 'hero-attack hero-attack--minotaur1',
    [MINOTAUR2]: 'hero-attack hero-attack--minotaur2',
    [MINOTAUR3]: 'hero-attack hero-attack--minotaur3',
    [SATYR1]: 'hero-attack hero-attack--satyr1',
    [SATYR2]: 'hero-attack hero-attack--satyr2',
    [SATYR3]: 'hero-attack hero-attack--satyr3',
    [WRAITH1]: 'hero-attack hero-attack--wraith1',
    [WRAITH2]: 'hero-attack hero-attack--wraith2',
    [WRAITH3]: 'hero-attack hero-attack--wraith3',
  },
  [HURT]: {
    [GOLEM1]: 'hero-hurt hero-hurt--golem1',
    [GOLEM2]: 'hero-hurt hero-hurt--golem2',
    [GOLEM3]: 'hero-hurt hero-hurt--golem3',
    [MINOTAUR1]: 'hero-hurt hero-hurt--minotaur1',
    [MINOTAUR2]: 'hero-hurt hero-hurt--minotaur2',
    [MINOTAUR3]: 'hero-hurt hero-hurt--minotaur3',
    [SATYR1]: 'hero-hurt hero-hurt--satyr1',
    [SATYR2]: 'hero-hurt hero-hurt--satyr2',
    [SATYR3]: 'hero-hurt hero-hurt--satyr3',
    [WRAITH1]: 'hero-hurt hero-hurt--wraith1',
    [WRAITH2]: 'hero-hurt hero-hurt--wraith2',
    [WRAITH3]: 'hero-hurt hero-hurt--wraith3',
  },
  [DIE]: {
    [GOLEM1]: 'hero-die hero-die--golem1',
    [GOLEM2]: 'hero-die hero-die--golem2',
    [GOLEM3]: 'hero-die hero-die--golem3',
    [MINOTAUR1]: 'hero-die hero-die--minotaur1',
    [MINOTAUR2]: 'hero-die hero-die--minotaur2',
    [MINOTAUR3]: 'hero-die hero-die--minotaur3',
    [SATYR1]: 'hero-die hero-die--satyr1',
    [SATYR2]: 'hero-die hero-die--satyr2',
    [SATYR3]: 'hero-die hero-die--satyr3',
    [WRAITH1]: 'hero-die hero-die--wraith1',
    [WRAITH2]: 'hero-die hero-die--wraith2',
    [WRAITH3]: 'hero-die hero-die--wraith3',
  },
};
