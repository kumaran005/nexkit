import net from "node:net";
import { IRouter, Middleware, NKServer, listenerParam } from "@core/types";
import { parseRequest } from "@core/parser";
import { buildResponse } from "@core/response";
import { printBanner } from "@utils/logger";

export class NexKitServer implements NKServer {
  constructor(
    private router: IRouter,
    private middlewares: Middleware[] = []
  ) {}

  public listen({ port, callback }: listenerParam) {
    const server = net.createServer((nexKit) => {
      nexKit.on("data", (data) => {
        const req = parseRequest(data);
        const res = buildResponse(nexKit);
        const route = this.router.findHandler(req.method, req.path);
        // route ? route.handler(req, res) : res.send("<h1>404 Not Found</h1>");

        const stack = [...this.middlewares];
        if (route) stack.push(route.handler);

        const next = () => {
          const middleware = stack.shift();
          if (middleware) middleware(req, res, next);
        };
  
        next();
      });
    });

    server.listen(port, () => {
      printBanner(port);
      callback?.();
    });
  }
}
