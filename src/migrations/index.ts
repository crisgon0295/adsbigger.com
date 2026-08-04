import * as migration_20260804_045308_initial from './20260804_045308_initial';

export const migrations = [
  {
    up: migration_20260804_045308_initial.up,
    down: migration_20260804_045308_initial.down,
    name: '20260804_045308_initial'
  },
];
