export function createRateLimiter({ capacity, refillPerSec }) {
  let tokens = capacity;
  let lastMs = 0;
  function refill(nowMs) {
    const elapsedSec = Math.max(0, (nowMs - lastMs) / 1000);
    tokens = Math.min(capacity, tokens + elapsedSec * refillPerSec);
    lastMs = nowMs;
  }
  return {
    tryRemove(count = 1, nowMs = Date.now()) {
      refill(nowMs);
      if (tokens >= count) {
        tokens -= count;
        return true;
      }
      return false;
    },
    getTokens(nowMs = Date.now()) {
      refill(nowMs);
      return tokens;
    }
  };
}
