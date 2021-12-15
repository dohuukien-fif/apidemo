const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json');
// const routers = require('./routes/auth');
const middlewares = jsonServer.defaults();
const queryString = require('query-string');

// const routers = jsonServer.router('authRoute');

// const db = mongoose.connection;
// Set default middlewares (logger, static, cors and no-cache)
server.use(middlewares);

// Add custom routes before JSON Server router
server.get('/echo', (req, res) => {
  res.jsonp(req.query);
});

router.render = (req, res) => {
  const headers = res.getHeaders();
  const totalCount = headers['x-total-count'];
  if (req.method === 'GET' && totalCount) {
    const queryParam = queryString.parse(req._parsedUrl.query);
    const result = {
      data: res.locals.data,
      pagination: {
        _page: Number.parseInt(queryParam._page) || 1,
        _limit: Number.parseInt(queryParam._limit) || 10,
        _totalRows: Number.parseInt(totalCount),
      },
    };
    return res.jsonp(result);
  }
  res.jsonp(res.locals.data);
};
// To handle POST, PUT and PATCH you need to use a body-parser
// You can use the one used by JSON Server
server.use(jsonServer.bodyParser);
server.use((req, res, next) => {
  if (req.method === 'POST') {
    req.body.createdAt = Date.now();
    req.body.updatedAt = Date.now();
  } else if (req.method === 'PATCH') {
    req.body.createdAt = Date.now();
  }

  // Continue to JSON Server router
  next();
});
//
// main().catch((err) => console.log(err));
// async function main() {
//   await mongoose.connect(process.env.MONGO_URL);
// }
// mongoose
//   .connect(process.env.MONGO_URL)
//   .then(() => console.log('DB Connection Successfull!'))
//   .catch((err) => {
//     console.log(err);
//   });

// mongoose
//   .connect(process.env.MONGO_URL)
//   .then(() => console.log('DB Connection Successfull'))
//   .catch((err) => {
//     console.error(err);
//   });
// await mongoose.connect(process.env.MONGO_URL);
// server.use(jsonServer);
server.use(router);

// server.use('/api/auth', authRoute);
// server.use('/api/users', userRoute);
const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log('JSON Server is running');
});
