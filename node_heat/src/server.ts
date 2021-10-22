import { serverHttp } from "./app";

serverHttp.listen(4000, () =>
  console.log("O app está Listening na porta 4000")
);
