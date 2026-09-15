# Learned 2026-09-15

- Refill must clamp to capacity and use max(0, delta) to avoid clock-skew negatives.
- Deterministic nowMs param makes rate tests flaky-free vs Date.now mocking.
- Next: sliding-window + Redis Lua for distributed.
Time: 120 min.
