export function renderApostrophe(text) {
  const htmlText = text.replace(/&#8217;/g, "'");
  return htmlText;
}
