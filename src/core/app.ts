import { Router } from '@core/router';
import { NexKitServer } from '@core/server';
import { Handler, IRouter, NKServer, NKApp, listenerParam } from '@core/types';

class NexKit implements NKApp {
  private router: IRouter = new Router();
  private server: NKServer = new NexKitServer(this.router);

  public get(path: string, handler: Handler) {
    this.router.addRoute('GET', path, handler);
  }

  public post(path: string, handler: Handler) {
    this.router.addRoute('POST', path, handler);
  }

  public listen({ port, callback }: listenerParam) {
    this.server.listen({ port, callback });
  }
}

export { NexKit };
