import test from 'node:test';
import assert from 'node:assert/strict';
import { createRateLimiter } from '../src/rateLimiter.js';

test('allows burst up to capacity then refills', () => {
  const rl = createRateLimiter({ capacity: 3, refillPerSec: 1 });
  assert.equal(rl.tryRemove(3, 0), true);
  assert.equal(rl.tryRemove(1, 0), false);
  assert.equal(rl.getTokens(2000), 2);
  assert.equal(rl.tryRemove(2, 2000), true);
});
