const assert = require('assert');

function countBatteriesByHealth(presentCapacities) {
  const capacity = {
    healthy: 0,
    exchange: 0,
    failed: 0
  };

  for (const capacity_ of presentCapacities) {
    const soh = (capacity_ / 120) * 100;
    if (soh >= 80) {
      capacity.healthy += 1;
    } else if (soh < 80 && soh >= 65) {
      capacity.exchange += 1;
    } else {
      capacity.failed += 1;
    }
  }

  return capacity;
}

function testBucketingByHealth() {
  console.log('Counting batteries by SoH...');
  const presentCapacities = [115, 118, 80, 95, 91, 77];
  const counts = countBatteriesByHealth(presentCapacities);
  assert.strictEqual(counts["healthy"], 2);
  assert.strictEqual(counts["exchange"], 3);
  assert.strictEqual(counts["failed"], 1);
  console.log("Done counting :)");
}

testBucketingByHealth();
