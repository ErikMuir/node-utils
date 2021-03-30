async function recordError(action) {
  try { await action(); }
  catch (e) { return e; }
  return undefined;
}

async function expectError(action, assertions) {
  const e = await recordError(action);
  assertions(e);
}

module.exports = {
  recordError,
  expectError,
};
  