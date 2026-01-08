function parse(req) {
  JSON.parse(req.body.payload);
  eval(req.query.data);
}
