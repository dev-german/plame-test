import React, { useState } from 'react';
import { remark } from 'remark';
import html from 'remark-html';
import DOMPurify from 'dompurify';

const MyButton = ({ content }) => {
  const [response, setResponse] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  const invokeN8NFlow = async () => {
    try {
      console.log('content', content);
      const apiUrl = 'https://ioggranados.app.n8n.cloud/webhook-test/637411e5-0c51-4066-8a09-7386e1553a59';
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ content }), // Envía el contenido al flujo de n8n
      });

      const data = await response.json(); // Parsear la respuesta como JSON
      console.log('data', data);

      // Extraer el contenido Markdown de la clave "output"
      const markdownContent = data[0].output;

      console.log('markdownContent', markdownContent);

      // Convertir Markdown a HTML
      const processedContent = await remark().use(html).process(markdownContent);
      const contentHtml = DOMPurify.sanitize(processedContent.toString());

      console.log('contentHtml', contentHtml);
      setResponse(contentHtml);
      console.log('1');
      setIsOpen(true);
      console.log('2');
    } catch (error) {
      console.error('Error invoking n8n flow:', error);
      setResponse('<p>Error al procesar la respuesta. Por favor, inténtalo de nuevo.</p>');
      setIsOpen(true);
    }
  };

  return (
    <div>
      <button onClick={invokeN8NFlow}>Invoke n8n Flow</button>

      {isOpen && (
        <div
          style={{
            marginTop: '20px',
            padding: '20px',
            border: '1px solid #ccc',
            borderRadius: '8px',
            backgroundColor: '#f9f9f9',
          }}
        >
          <h3 style={{ marginBottom: '20px', color: '#333' }}>Response from n8n:</h3>
          <div
            style={{
              lineHeight: '1.6',
              color: '#555',
            }}
            dangerouslySetInnerHTML={{ __html: response }}
          />
          <button
            onClick={() => setIsOpen(false)}
            style={{
              marginTop: '20px',
              padding: '10px 20px',
              backgroundColor: '#007bff',
              color: '#fff',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
            }}
          >
            Close
          </button>
        </div>
      )}
    </div>
  );
};

export default MyButton;
