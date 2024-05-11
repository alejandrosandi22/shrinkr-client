export default function formatLabel(str: string, maxwidth: number): string[] {
  const sections: string[] = [];
  const words = capitalize(str).split(' ');
  let temp = '';

  words.forEach((item, index) => {
    if (temp.length > 0) {
      const concat = temp + ' ' + item;

      if (concat.length > maxwidth) {
        sections.push(temp);
        temp = '';
      } else {
        if (index === words.length - 1) {
          sections.push(concat);
          return;
        } else {
          temp = concat;
          return;
        }
      }
    }

    if (index === words.length - 1) {
      sections.push(item);
      return;
    }

    if (item.length < maxwidth) {
      temp = item;
    } else {
      sections.push(item);
    }
  });

  return sections;
}

function capitalize(text: string): string {
  const words = text.split(' ');

  const capitalizedWords = words.map((word) => {
    return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
  });

  const capitalizedText = capitalizedWords.join(' ');

  return capitalizedText;
}
