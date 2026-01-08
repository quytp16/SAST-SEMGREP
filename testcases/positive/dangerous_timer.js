function delay(req) {
  setTimeout(req.body.code, 1000);
  setInterval(req.query.fn, 2000);
}
