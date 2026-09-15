# Day01 rate limiter

Run: `node --test tests/rateLimiter.test.js`
API: `createRateLimiter({capacity, refillPerSec})` → `tryRemove(n, nowMs)`, `getTokens(nowMs)`
Demo: capacity 3, refill 1/s → burst 3 ok, 4th blocked, after 2s 2 tokens back.
