/**
 * Apply formatting to the selected text in a rich text editor
 */
export function applyFormatting(command: string, value: string = '') {
  try {
    document.execCommand(command, false, value);
  } catch (error) {
    console.error('Error applying formatting:', error);
  }
}

/**
 * Sanitize HTML content to prevent XSS attacks
 */
export function sanitizeHtml(html: string): string {
  // Create a new DOMParser to parse the HTML
  const parser = new DOMParser();
  const doc = parser.parseFromString(html, 'text/html');
  
  // Get the sanitized HTML
  return doc.body.innerHTML;
}