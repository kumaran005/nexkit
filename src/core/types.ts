type Handler = (req: Request, res: Response) => void;
type RecordType = Record<string, string | string[] | undefined>;
type listenerParam = { port: number; callback?: () => void };

interface Request {
  method: string;
  path: string;
  query: RecordType;
  headers: RecordType;
  body: string;
}

interface Response {
  send: (body: string, contentType?: string) => void;
}

interface IRouter {
  addRoute(method: string, path: string, handler: Handler): void;
  findHandler(
    method: string,
    path: string
  ): { path: string; handler: Handler } | undefined;
}

interface NKServer {
  listen({ port, callback }: listenerParam): void;
}

interface NKApp {
  get(path: string, handler: Handler): void;
  post(path: string, handler: Handler): void;
  put(path: string, handler: Handler): void;
  delete(path: string, handler: Handler): void;
  use(middleware: Middleware): void;
  listen({ port, callback }: listenerParam): void;
}

type Middleware = (req: Request, res: Response, next: () => void) => void;

export {
  Handler,
  Request,
  Response,
  IRouter,
  RecordType,
  NKServer,
  NKApp,
  listenerParam,
  Middleware,
};
