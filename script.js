function parseCode(encodedString) {
  // Split the string using one or more zeros as the separator
  const parts = encodedString.split(/0+/);

  // Destructure the result to get firstName, lastName, and id
  const [firstName, lastName, id] = parts;

  // Return the object with appropriate keys
  return { firstName, lastName, id };
}
