import zlib from 'zlib';
import { visit } from 'unist-util-visit';
import axios from 'axios';

console.log('🚀 PlantUML Plugin is LOADED!');

function encodeForPlantUML(umlText) {
  const deflated = zlib.deflateRawSync(Buffer.from(umlText, 'utf-8'));
  return encode64(deflated);
}

function encode64(data) {
  const alphabet = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-_';
  let result = '';
  let current = 0;
  let bits = 0;

  for (let i = 0; i < data.length; i++) {
    current = (current << 8) | data[i];
    bits += 8;
    while (bits >= 6) {
      bits -= 6;
      result += alphabet[(current >> bits) & 0x3f];
    }
  }

  if (bits > 0) {
    result += alphabet[(current << (6 - bits)) & 0x3f];
  }

  return result;
}

const plugin = (options) => {
  const serverUrl = options?.server || 'http://localhost:8080';

  return async (tree) => {
    const promises = [];

    visit(tree, 'code', (node, index, parent) => {
      if (node.lang === 'plantuml') {
        console.log('📌 Found PlantUML Code:', node.value);

        const encodedDiagram = encodeForPlantUML(node.value);
        const url = `${serverUrl}/svg/${encodedDiagram}`;

        console.log('🔗 Generated PlantUML URL:', url);

        promises.push(
          (async () => {
            try {
              await axios.head(url);

              // ✅ Reemplazamos el nodo en el AST con una imagen en Markdown
              parent.children[index] = {
                type: 'paragraph',
                children: [
                  {
                    type: 'image',
                    url: url,
                    alt: 'PlantUML Diagram',
                  },
                ],
              };
            } catch (error) {
              console.error('❌ Error processing PlantUML:', error);
            }
          })()
        );
      }
    });

    await Promise.all(promises);
  };
};

export default plugin;
