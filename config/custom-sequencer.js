const Sequencer = require('@jest/test-sequencer').default;

class CustomSequencer extends Sequencer {
  /**
   * Sort test cases based on a predefined order
   * @param {Array} tests - Array of test objects
   * @returns {Array} - Sorted test cases
   */
  sort(tests) {
    const testOrder = [
      "add-pet", // First test
      "find-pet-by-id", // Second test
      "find-pet-by-status", // Third test
      "update-pet", // Fourth test
      "delete-pet-by-id", // Last test
    ];

    const copyTests = Array.from(tests);

    return copyTests.sort((testA, testB) => {
      // Find the index of testA and testB in the defined order
      const indexA = testOrder.findIndex((order) => testA.path.includes(order));
      const indexB = testOrder.findIndex((order) => testB.path.includes(order));

      // If a test is not found in the testOrder, it will be run last
      const adjustedIndexA = indexA === -1 ? Infinity : indexA;
      const adjustedIndexB = indexB === -1 ? Infinity : indexB;

      // Sort tests based on the index in testOrder
      return adjustedIndexA - adjustedIndexB;
    });
  }
}

module.exports = CustomSequencer;
