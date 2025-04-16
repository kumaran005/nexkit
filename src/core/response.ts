import { Response } from '@core/types';
import { Socket } from 'node:net';

export function buildResponse(socket: Socket): Response {
  try {
    return {
      send: (content: string, contentType = 'text/html') => {
        const res =
          `HTTP/1.1 200 OK\r\n` +
          `Content-Type: ${contentType}\r\n` +
          `Content-Length: ${Buffer.byteLength(content)}\r\n` +
          `Connection: close\r\n\r\n` +
          content;
        socket.write(res);
        socket.end();
      }
    };
  } catch (error) {
    throw error;
  }
}
