const fs = require('fs');

const rawText = require('./story.js').storyText;

const chapters = [];
const chunks = rawText.split(/\n(?=Chapter [IVX]+)/);

for (let i = 0; i < chunks.length; i++) {
  let chunk = chunks[i].trim();
  if (chunk === 'BOOK I') continue; // Skip the standalone BOOK I
  if (chunk.startsWith('BOOK I\n')) {
    chunk = chunk.substring('BOOK I\n'.length);
  }

  const blocks = chunk.split('\n\n').filter(b => b.trim() !== '');
  
  let title = '';
  let subtitle = '';
  let paragraphs = [];

  const firstBlockLines = blocks[0].split('\n');
  if (firstBlockLines[0].startsWith('Chapter')) {
    title = firstBlockLines[0].trim();
    if (firstBlockLines.length > 1) {
      if (firstBlockLines[1] === 'AVARENNE' || firstBlockLines[1].length < 40) {
        subtitle = firstBlockLines[1].trim();
        if (firstBlockLines.length > 2) {
          paragraphs.push({ type: 'text', text: firstBlockLines.slice(2).join(' ').replace(/\s+/g, ' ') });
        }
      } else {
        paragraphs.push({ type: 'text', text: firstBlockLines.slice(1).join(' ').replace(/\s+/g, ' ') });
      }
    }
  }

  for (let j = 1; j < blocks.length; j++) {
    const blockText = blocks[j].trim();
    if (blockText.length < 50 && !blockText.endsWith('.')) {
      paragraphs.push({ type: 'subtitle', text: blockText.replace(/\n/g, ' ').replace(/\s+/g, ' ') });
    } else {
      paragraphs.push({ type: 'text', text: blockText.replace(/\n/g, ' ').replace(/\s+/g, ' ') });
    }
  }

  chapters.push({
    id: i,
    title,
    subtitle,
    paragraphs
  });
}

const exportContent = `export const storyChapters = ${JSON.stringify(chapters, null, 2)};\n`;

fs.writeFileSync('./storyData.js', exportContent, 'utf-8');
console.log('Successfully generated storyData.js');
