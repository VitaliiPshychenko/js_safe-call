function safeCall(f) {
  try {
    f();
    return true;
  } catch(error) {
    return false;
  }
}

safeCall(() => console.log('Hello!'));
safeCall(() => JSON.parse('abc'));
safeCall(() => false);
safeCall(() => abc);
