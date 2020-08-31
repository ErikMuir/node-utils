"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.recordError = recordError;
exports.expectError = expectError;

function recordError(action) {
  try {
    action();
  } catch (e) {
    return e;
  }

  return undefined;
}

function expectError(action, assertions) {
  const e = recordError(action);
  assertions(e);
}
//# sourceMappingURL=test-utils.js.map