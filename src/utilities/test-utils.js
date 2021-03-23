function recordError(action) {
  try { action(); }
  catch (e) { return e; }
  return undefined;
}

function expectError(action, assertions) {
  const e = recordError(action);
  assertions(e);
}

module.exports = {
  recordError,
  expectError,
};
  