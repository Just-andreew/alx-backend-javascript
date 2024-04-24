export default function guardrail(mathFunction) {
  const queue = [];

  try {
    // Execute the provided mathFunction
    const result = mathFunction();
    queue.push(result); // Append the result
  } catch (error) {
    queue.push(`Error: ${error.message}`); // Append the error message
  } finally {
    queue.push('Guardrail was processed'); // Always append the guardrail message
  }

  return queue;
}
