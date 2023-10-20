export function formatName(inputString: string) {
  const words = inputString.split("-");

  const formattedWords = words.map((word) => {
    if (word.length > 0) {
      return word[0].toUpperCase() + word.slice(1);
    }
    return word;
  });

  const formattedString = formattedWords.join(" ");

  return formattedString;
}

export function getImageFromMarkdown(markdown: string) {
  const regex = /!\[.*\]\((.*)\)/;

  const match = regex.exec(markdown);

  if (match) {
    return match[1];
  }

  return "";
}
