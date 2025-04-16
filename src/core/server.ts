import net from 'node:net';
import { IRouter, NKServer, listenerParam } from '@core/types';
import { parseRequest } from '@core/parser';
import { buildResponse } from '@core/response';
import { printBanner } from '@utils/logger';

export class NexKitServer implements NKServer {
  constructor(private router: IRouter) {}

  public listen({ port, callback }: listenerParam) {
    const server = net.createServer(nexKit => {
      nexKit.on('data', data => {
        const req = parseRequest(data);
        const res = buildResponse(nexKit);
        const route = this.router.findHandler(req.method, req.path);
        route ? route.handler(req, res) : res.send('<h1>404 Not Found</h1>');
      });
    });

    server.listen(port, () => {
      printBanner(port);
      callback?.();
    });
  }
}
