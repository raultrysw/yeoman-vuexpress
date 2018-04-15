require('source-map-support/register')
module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var mongoose = __webpack_require__(2);

var schema = new mongoose.Schema({
  name: {},
  surname: {},
  email: {},
  password: {}
});

var ArticleClass = function ArticleClass() {
  _classCallCheck(this, ArticleClass);
};

schema.loadClass(ArticleClass);

var articlesModel = mongoose.model('Article', schema);

/* harmony default export */ __webpack_exports__["a"] = (articlesModel);

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("mongoose");

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = pipe;
var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

function pipe(theObject, execFN) {
  function through(conditionsWithFNS) {
    for (var i = 0; i < conditionsWithFNS.length; i++) {
      var _conditionsWithFNS$i = _slicedToArray(conditionsWithFNS[i], 2),
          condition = _conditionsWithFNS$i[0],
          fn = _conditionsWithFNS$i[1];

      if (condition) theObject = fn(theObject);
      if (condition && theObject === undefined) {
        throw new Error('No function can return undefined');
      }
    }
  }

  var retrieve = function retrieve() {
    return theObject;
  };
  var fns = { through: through, retrieve: retrieve };

  return execFN.bind(fns)();
}

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_express__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_nuxt__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_nuxt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_nuxt__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__api___ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__settings___ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__default_properties__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__middlewares__ = __webpack_require__(22);







var mongoose = __webpack_require__(2);

// Config database

mongoose.connect(__WEBPACK_IMPORTED_MODULE_3__settings___["a" /* DB */]);

// Config express

// eslint-disable-next-line
for (var functionName in __WEBPACK_IMPORTED_MODULE_4__default_properties__) {
  var fn = __WEBPACK_IMPORTED_MODULE_4__default_properties__[functionName];
  __WEBPACK_IMPORTED_MODULE_0_express___default.a.request.__proto__[functionName] = fn; //eslint-disable-line
}

var app = __WEBPACK_IMPORTED_MODULE_0_express___default()();

app.set('port', __WEBPACK_IMPORTED_MODULE_3__settings___["c" /* PORT */]);

app.use(__WEBPACK_IMPORTED_MODULE_5__middlewares__["a" /* default */]);

// Import API Routes
for (var route in __WEBPACK_IMPORTED_MODULE_2__api___["c" /* routes */]) {
  var router = __WEBPACK_IMPORTED_MODULE_2__api___["c" /* routes */][route];
  var finalRoute = '/api' + route;
  console.log('estableciendo ' + finalRoute);
  app.use(finalRoute, router);
}

// Import and Set Nuxt.js options
var config = __webpack_require__(23);
config.dev = !("development" === 'production');

// Init Nuxt.js
var nuxt = new __WEBPACK_IMPORTED_MODULE_1_nuxt__["Nuxt"](config);

// Build only in dev mode
if (config.dev) {
  var builder = new __WEBPACK_IMPORTED_MODULE_1_nuxt__["Builder"](nuxt);
  builder.build();
}

// Give nuxt middleware to express
app.use('/api/*', __WEBPACK_IMPORTED_MODULE_2__api___["b" /* responseJson */], __WEBPACK_IMPORTED_MODULE_2__api___["a" /* logError */]);
app.use(nuxt.render);

// Listen the server
app.listen(__WEBPACK_IMPORTED_MODULE_3__settings___["c" /* PORT */], __WEBPACK_IMPORTED_MODULE_3__settings___["b" /* HOST */]);
console.log('Server listening on ' + __WEBPACK_IMPORTED_MODULE_3__settings___["b" /* HOST */] + ':' + __WEBPACK_IMPORTED_MODULE_3__settings___["c" /* PORT */]); // eslint-disable-line no-console

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("nuxt");

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = responseJson;
/* harmony export (immutable) */ __webpack_exports__["a"] = logError;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__routes__ = __webpack_require__(7);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_0__routes__["a"]; });




function responseJson(req, res) {
  res.status(res.locals.status || 200).json(res.locals);
}

function logError(err, req, res, next) {
  console.log('Hubo un error', err);
  console.log(err.message);
  res.locals = {
    message: 'Hubo un error interno'
  };
  if (!res.locals.status) res.locals.status = 500;
  res.status(res.locals.status).json(res.locals);
}

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__concepts_members__ = __webpack_require__(8);


/* harmony default export */ __webpack_exports__["a"] = ({
  '/members': __WEBPACK_IMPORTED_MODULE_0__concepts_members__["a" /* default */]
});

/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__api__ = __webpack_require__(9);


/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0__api__["a" /* default */]);

/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_express__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__controllers__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__authorizations__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__tasks_pre__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__tasks_post__ = __webpack_require__(16);




// tasks




var bodyParser = __webpack_require__(17);

var router = new __WEBPACK_IMPORTED_MODULE_0_express__["Router"]();

router.get('/', __WEBPACK_IMPORTED_MODULE_2__authorizations__["d" /* retrieveAuth */], __WEBPACK_IMPORTED_MODULE_3__tasks_pre__["d" /* retrieve */], __WEBPACK_IMPORTED_MODULE_1__controllers__["d" /* retrieve */], __WEBPACK_IMPORTED_MODULE_4__tasks_post__["d" /* retrieve */]);
router.post('/', bodyParser.json(), __WEBPACK_IMPORTED_MODULE_2__authorizations__["a" /* createAuth */], __WEBPACK_IMPORTED_MODULE_3__tasks_pre__["a" /* create */], __WEBPACK_IMPORTED_MODULE_1__controllers__["a" /* create */], __WEBPACK_IMPORTED_MODULE_4__tasks_post__["a" /* create */]);
router.get('/:id', __WEBPACK_IMPORTED_MODULE_2__authorizations__["c" /* getAuth */], __WEBPACK_IMPORTED_MODULE_3__tasks_pre__["c" /* get */], __WEBPACK_IMPORTED_MODULE_1__controllers__["c" /* get */], __WEBPACK_IMPORTED_MODULE_4__tasks_post__["c" /* get */]);
router.put('/:id', bodyParser.json(), __WEBPACK_IMPORTED_MODULE_2__authorizations__["e" /* updateAuth */], __WEBPACK_IMPORTED_MODULE_3__tasks_pre__["e" /* update */], __WEBPACK_IMPORTED_MODULE_1__controllers__["e" /* update */], __WEBPACK_IMPORTED_MODULE_4__tasks_post__["e" /* update */]);
router.delete('/:id', __WEBPACK_IMPORTED_MODULE_2__authorizations__["b" /* destroyAuth */], __WEBPACK_IMPORTED_MODULE_3__tasks_pre__["b" /* destroy */], __WEBPACK_IMPORTED_MODULE_1__controllers__["b" /* destroy */], __WEBPACK_IMPORTED_MODULE_4__tasks_post__["b" /* destroy */]);

/* harmony default export */ __webpack_exports__["a"] = (router);

/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["d"] = retrieve;
/* harmony export (immutable) */ __webpack_exports__["a"] = create;
/* harmony export (immutable) */ __webpack_exports__["c"] = get;
/* harmony export (immutable) */ __webpack_exports__["e"] = update;
/* harmony export (immutable) */ __webpack_exports__["b"] = destroy;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__query_builder__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__model__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__http_codes__ = __webpack_require__(13);




// GET http://localhost:3000/api/members
function retrieve(req, res, next) {
  var createGoodResponse = req.createGoodResponse,
      createBadResponse = req.createBadResponse;

  var query = Object(__WEBPACK_IMPORTED_MODULE_0__query_builder__["a" /* filterFor */])(req);
  query.exec(function (err, members) {
    if (err) {
      res.locals = createBadResponse(__WEBPACK_IMPORTED_MODULE_2__http_codes__["a" /* default */].INTERNAL_ERROR, 'Hubo un error interno', {});
      return next(err);
    }
    res.locals = createGoodResponse(__WEBPACK_IMPORTED_MODULE_2__http_codes__["a" /* default */].OK, 'Todos los miembros fueron recuperados', { members: members });
    next();
  });
}

// POST http://localhost:3000/api/members
function create(req, res, next) {
  console.log('en create');
  var createGoodResponse = req.createGoodResponse,
      createBadResponse = req.createBadResponse;

  var member = new __WEBPACK_IMPORTED_MODULE_1__model__["a" /* default */](req.body);
  member.save(function (err, memberCreated) {
    if (err) {
      res.locals = createBadResponse(__WEBPACK_IMPORTED_MODULE_2__http_codes__["a" /* default */].INTERNAL_ERROR, 'Hubo un error interno', {});
      return next(err);
    }
    res.locals = createGoodResponse(__WEBPACK_IMPORTED_MODULE_2__http_codes__["a" /* default */].CREATED, 'El miembro fue creado correctamente', { memberCreated: memberCreated });
    next();
  });
}

function get(req, res, next) {
  var createGoodResponse = req.createGoodResponse,
      createBadResponse = req.createBadResponse;

  __WEBPACK_IMPORTED_MODULE_1__model__["a" /* default */].findById(req.params.id, function (err, member) {
    if (err) {
      res.locals = createBadResponse(__WEBPACK_IMPORTED_MODULE_2__http_codes__["a" /* default */].INTERNAL_ERROR, 'Hubo un error interno', {});
      return next(err);
    }
    res.locals = createGoodResponse(__WEBPACK_IMPORTED_MODULE_2__http_codes__["a" /* default */].OK, 'El miembro fue recuperado correctamente', { member: member });
    next();
  });
}

function update(req, res, next) {
  var createGoodResponse = req.createGoodResponse,
      createBadResponse = req.createBadResponse;

  var $set = req.body;
  __WEBPACK_IMPORTED_MODULE_1__model__["a" /* default */].findByIdAndUpdate(req.params.id, { $set: $set }, function (err, member) {
    if (err) {
      res.locals = createBadResponse(__WEBPACK_IMPORTED_MODULE_2__http_codes__["a" /* default */].INTERNAL_ERROR, 'Hubo un error interno', {});
      return next(err);
    }
    res.locals = createGoodResponse(__WEBPACK_IMPORTED_MODULE_2__http_codes__["a" /* default */].OK, 'El miembro fue actualizado correctamente', { member: member });
    next();
  });
}

function destroy(req, res, next) {
  var createGoodResponse = req.createGoodResponse,
      createBadResponse = req.createBadResponse;

  __WEBPACK_IMPORTED_MODULE_1__model__["a" /* default */].findByIdAndRemove(req.params.id, function (err, member) {
    if (err) {
      res.locals = createBadResponse(__WEBPACK_IMPORTED_MODULE_2__http_codes__["a" /* default */].INTERNAL_ERROR, 'Hubo un error interno', {});
      return next(err);
    }
    res.locals = createGoodResponse(__WEBPACK_IMPORTED_MODULE_2__http_codes__["a" /* default */].OK, 'El miembro fue eliminado correctamente', { member: member });
    next();
  });
}

/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = filterFor;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__model__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_pipe_objects__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__filters__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__filters___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__filters__);




function buildQuery(_ref) {
  var isJustVocal = _ref.isJustVocal,
      isAdmin = _ref.isAdmin,
      notPutEvents = _ref.notPutEvents,
      user = _ref.user,
      requestAll = _ref.requestAll;

  var query = __WEBPACK_IMPORTED_MODULE_0__model__["a" /* default */].aggregate();
  query.match({});

  var filters = [];

  return Object(__WEBPACK_IMPORTED_MODULE_1__utils_pipe_objects__["a" /* pipe */])(query, function () {
    this.through(filters);
    return this.retrieve();
  });
}

function filterFor(_ref2) {
  var query = _ref2.query,
      params = _ref2.params,
      user = _ref2.user,
      loginLvl = _ref2.loginLvl;

  var state = {};

  return buildQuery(state);
}

/***/ }),
/* 12 */
/***/ (function(module, exports) {



/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var errorCodes = {
  OK: 200,
  CREATED: 201,
  INTERNAL_ERROR: 500,
  UPDATED: 260
};

/* harmony default export */ __webpack_exports__["a"] = (errorCodes);

/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return retrieveAuth; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return getAuth; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return createAuth; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return destroyAuth; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return updateAuth; });
var retrieveAuth = function retrieveAuth(req, res, next) {
  return next(undefined);
};
var getAuth = function getAuth(req, res, next) {
  return next(undefined);
};
var createAuth = function createAuth(req, res, next) {
  return next(undefined);
};
var destroyAuth = function destroyAuth(req, res, next) {
  return next(undefined);
};
var updateAuth = function updateAuth(req, res, next) {
  return next(undefined);
};

/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return get; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return create; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return update; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return retrieve; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return destroy; });
function preTask1(req, res, next) {
  next();
}

function preTask2(req, res, next) {
  next();
}

var get = [];
var create = [];
var update = [];
var retrieve = [preTask1, preTask2];
var destroy = [];



/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return get; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return create; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return update; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return retrieve; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return destroy; });
function postTask1(req, res, next) {
  next();
}

function postTask2(req, res, next) {
  next();
}

var get = [];
var create = [];
var update = [];
var retrieve = [postTask1, postTask2];
var destroy = [];



/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports = require("body-parser");

/***/ }),
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return PORT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return HOST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DB; });
var developing = "development" !== 'production';

var dbs = {
  test: 'mongodb://localhost/mysillydbtest',
  prod: 'mongodb://localhost/mysillydb'
};

var PORT = process.env.PORT || 3000;
var HOST = process.env.HOST || 'localhost';
var DB = developing ? dbs.test : dbs.prod;



/***/ }),
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_pipe_objects__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_response_maker__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_controller_utils__ = __webpack_require__(21);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "pipeObjects", function() { return __WEBPACK_IMPORTED_MODULE_0__utils_pipe_objects__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "createBadResponse", function() { return __WEBPACK_IMPORTED_MODULE_1__utils_response_maker__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "createGoodResponse", function() { return __WEBPACK_IMPORTED_MODULE_1__utils_response_maker__["b"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "getMongoDocumentErrors", function() { return __WEBPACK_IMPORTED_MODULE_2__utils_controller_utils__["a"]; });






/***/ }),
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = createBadResponse;
/* harmony export (immutable) */ __webpack_exports__["b"] = createGoodResponse;
function createBadResponse(status, message, items) {
  return { status: status, message: message, items: items };
}
function createGoodResponse(status, message, items) {
  return { status: status, message: message, items: items };
}

/***/ }),
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = getMongoDocumentErrors;
function getMongoDocumentErrors(error) {
  var errors = error.errors;
  var errorsFormatted = [];
  for (var i in errors) {
    var _error = errors[i].message;
    errorsFormatted.push(_error);
  }
  return errorsFormatted;
}

/***/ }),
/* 22 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// const cors = require('cors')

function middleware1(req, res, next) {
  next();
}

function middleware2(req, res, next) {
  next();
}

/* harmony default export */ __webpack_exports__["a"] = ([middleware1, middleware2]);

/***/ }),
/* 23 */
/***/ (function(module, exports) {

module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'starter',
    meta: [{ charset: 'utf-8' }, { name: 'viewport', content: 'width=device-width, initial-scale=1' }, { hid: 'description', name: 'description', content: 'Nuxt.js project' }],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },
  plugins: ['~/plugins/setup-vue'],
  /*
  ** Add axios globally
  */
  build: {
    vendor: ['axios'],
    /*
    ** Run ESLINT on save
    */
    extend: function extend(config, ctx) {
      if (ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        });
      }
    }
  }
};

/***/ })
/******/ ]);
//# sourceMappingURL=main.map