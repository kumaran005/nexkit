import querystring from 'node:querystring';
import { Request, RecordType } from '@core/types.js';

export function parseRequest(data: Buffer): Request {
  try {
    const raw = data.toString();
    const [head, body] = raw.split('\r\n\r\n');
    const lines = head.split('\r\n');
    const [method, fullPath] = lines[0].split(' ');
    const [path, queryStr] = fullPath.split('?');
    const query = querystring.parse(queryStr ?? '');

    const headers: RecordType = {};
    for (let i = 1; i < lines.length; i++) {
      const [key, value] = lines[i].split(': ');
      headers[key.toLowerCase()] = value;
    }

    return { method, path, query, headers, body };
  } catch (error) {
    throw error;
  }
}
