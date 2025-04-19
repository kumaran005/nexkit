import { Router } from "@core/router";
import { NexKitServer } from "@core/server";
import {
  Handler,
  IRouter,
  NKServer,
  NKApp,
  listenerParam,
  Middleware,
} from "@core/types";

class NexKit implements NKApp {
  private router: IRouter = new Router();
  private middlewares: Middleware[] = [];
  private server: NKServer = new NexKitServer(this.router, this.middlewares);

  public get(path: string, handler: Handler) {
    this.router.addRoute("GET", path, handler);
  }

  public post(path: string, handler: Handler) {
    this.router.addRoute("POST", path, handler);
  }

  public put(path: string, handler: Handler) {
    this.router.addRoute("PUT", path, handler);
  }

  public delete(path: string, handler: Handler) {
    this.router.addRoute("DELETE", path, handler);
  }

  public listen({ port, callback }: listenerParam) {
    this.server.listen({ port, callback });
  }

  public use(middleware: Middleware) {
    this.middlewares.push(middleware);
  }
}

export { NexKit };
