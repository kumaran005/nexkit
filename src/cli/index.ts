import { NetkitApp } from "@core/app";

const app = new NetkitApp();

app.get("/", (_, res) => {
  res.send("<h1>NetKit CLI Default Route</h1>");
});

app.listen(3000);