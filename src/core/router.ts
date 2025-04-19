import { Handler, IRouter } from "@core/types";

class Router implements IRouter {
  private routes: Record<string, { path: string; handler: Handler }[]> = {
    GET: [],
    POST: [],
    PUT: [],
    DELETE: [],
  };

  public addRoute(method: string, path: string, handler: Handler) {
    if (!this.routes[method]) {
      this.routes[method] = [];
    }
    this.routes[method].push({ path, handler });
  }

  public findHandler(method: string, path: string) {
    return this.routes[method]?.find((r) => r.path === path);
  }
}

export { Router };
