"use strict";

var _express = _interopRequireDefault(require("express"));

var _cors = _interopRequireDefault(require("cors"));

var _bodyParser = _interopRequireDefault(require("body-parser"));

var _morgan = _interopRequireDefault(require("morgan"));

var _mongoose = _interopRequireDefault(require("mongoose"));

var _detectPort = _interopRequireDefault(require("detect-port"));

var _chalk = _interopRequireDefault(require("chalk"));

var _auth = _interopRequireDefault(require("./api/auth.js"));

var _posts = _interopRequireDefault(require("./api/posts.js"));

var _apiDoc = _interopRequireDefault(require("./utils/api-doc.js"));

var _auth2 = require("./utils/auth.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// libs
// api
// utils
// mongo db
const db = _mongoose.default.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

_mongoose.default.connect('mongodb+srv://test:1234@cluster0-gnwq8.mongodb.net/test?retryWrites=true&w=majority', {
  useNewUrlParser: true
});

_mongoose.default.Promise = global.Promise; // server setup

let port;

async function configServer() {
  port = 3000 || (await (0, _detectPort.default)(3000));
}

configServer(); // express setup

const app = (0, _express.default)();
app.use((0, _cors.default)());
app.use(_bodyParser.default.urlencoded({
  extended: true
}));
app.use(_bodyParser.default.json());
app.use((0, _morgan.default)('dev')); // log request
// express routers

app.use('/', _auth.default);
app.use('/posts', _auth2.authenticateUser, _posts.default); // api docs

app.use('/api', _apiDoc.default); // start

app.listen(port, () => console.log(`${_chalk.default.white.bgHex('#41b883').bold(`VUE TIL SERVER IS RUNNING ON ${port}`)}`));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9hcHAuanMiXSwibmFtZXMiOlsiZGIiLCJtb25nb29zZSIsImNvbm5lY3Rpb24iLCJvbiIsImNvbnNvbGUiLCJlcnJvciIsImJpbmQiLCJjb25uZWN0IiwidXNlTmV3VXJsUGFyc2VyIiwiUHJvbWlzZSIsImdsb2JhbCIsInBvcnQiLCJjb25maWdTZXJ2ZXIiLCJhcHAiLCJ1c2UiLCJib2R5UGFyc2VyIiwidXJsZW5jb2RlZCIsImV4dGVuZGVkIiwianNvbiIsImF1dGgiLCJhdXRoZW50aWNhdGVVc2VyIiwicG9zdHMiLCJkb2NzIiwibGlzdGVuIiwibG9nIiwiY2hhbGsiLCJ3aGl0ZSIsImJnSGV4IiwiYm9sZCJdLCJtYXBwaW5ncyI6Ijs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFHQTs7QUFDQTs7QUFDQTs7QUFHQTs7OztBQWZBO0FBU0E7QUFLQTtBQUdBO0FBQ0EsTUFBTUEsRUFBRSxHQUFHQyxrQkFBU0MsVUFBcEI7QUFDQUYsRUFBRSxDQUFDRyxFQUFILENBQU0sT0FBTixFQUFlQyxPQUFPLENBQUNDLEtBQVIsQ0FBY0MsSUFBZCxDQUFtQkYsT0FBbkIsRUFBNEIsMkJBQTVCLENBQWY7O0FBQ0FILGtCQUFTTSxPQUFULENBQ0UscUZBREYsRUFFRTtBQUNFQyxFQUFBQSxlQUFlLEVBQUU7QUFEbkIsQ0FGRjs7QUFNQVAsa0JBQVNRLE9BQVQsR0FBbUJDLE1BQU0sQ0FBQ0QsT0FBMUIsQyxDQUVBOztBQUNBLElBQUlFLElBQUo7O0FBQ0EsZUFBZUMsWUFBZixHQUE4QjtBQUM1QkQsRUFBQUEsSUFBSSxHQUFHLFNBQVMsTUFBTSx5QkFBVyxJQUFYLENBQWYsQ0FBUDtBQUNEOztBQUNEQyxZQUFZLEcsQ0FFWjs7QUFDQSxNQUFNQyxHQUFHLEdBQUcsdUJBQVo7QUFDQUEsR0FBRyxDQUFDQyxHQUFKLENBQVEsb0JBQVI7QUFDQUQsR0FBRyxDQUFDQyxHQUFKLENBQVFDLG9CQUFXQyxVQUFYLENBQXNCO0FBQUVDLEVBQUFBLFFBQVEsRUFBRTtBQUFaLENBQXRCLENBQVI7QUFDQUosR0FBRyxDQUFDQyxHQUFKLENBQVFDLG9CQUFXRyxJQUFYLEVBQVI7QUFDQUwsR0FBRyxDQUFDQyxHQUFKLENBQVEscUJBQU8sS0FBUCxDQUFSLEUsQ0FBd0I7QUFFeEI7O0FBQ0FELEdBQUcsQ0FBQ0MsR0FBSixDQUFRLEdBQVIsRUFBYUssYUFBYjtBQUNBTixHQUFHLENBQUNDLEdBQUosQ0FBUSxRQUFSLEVBQWtCTSx1QkFBbEIsRUFBb0NDLGNBQXBDLEUsQ0FFQTs7QUFDQVIsR0FBRyxDQUFDQyxHQUFKLENBQVEsTUFBUixFQUFnQlEsZUFBaEIsRSxDQUVBOztBQUNBVCxHQUFHLENBQUNVLE1BQUosQ0FBV1osSUFBWCxFQUFpQixNQUNmUCxPQUFPLENBQUNvQixHQUFSLENBQ0csR0FBRUMsZUFBTUMsS0FBTixDQUNBQyxLQURBLENBQ00sU0FETixFQUVBQyxJQUZBLENBRU0sZ0NBQStCakIsSUFBSyxFQUYxQyxDQUU2QyxFQUhsRCxDQURGIiwic291cmNlc0NvbnRlbnQiOlsiLy8gbGlic1xuaW1wb3J0IGV4cHJlc3MgZnJvbSAnZXhwcmVzcyc7XG5pbXBvcnQgY29ycyBmcm9tICdjb3JzJztcbmltcG9ydCBib2R5UGFyc2VyIGZyb20gJ2JvZHktcGFyc2VyJztcbmltcG9ydCBtb3JnYW4gZnJvbSAnbW9yZ2FuJztcbmltcG9ydCBtb25nb29zZSBmcm9tICdtb25nb29zZSc7XG5pbXBvcnQgZGV0ZWN0UG9ydCBmcm9tICdkZXRlY3QtcG9ydCc7XG5pbXBvcnQgY2hhbGsgZnJvbSAnY2hhbGsnO1xuXG4vLyBhcGlcbmltcG9ydCBhdXRoIGZyb20gJy4vYXBpL2F1dGguanMnO1xuaW1wb3J0IHBvc3RzIGZyb20gJy4vYXBpL3Bvc3RzLmpzJztcbmltcG9ydCBkb2NzIGZyb20gJy4vdXRpbHMvYXBpLWRvYy5qcyc7XG5cbi8vIHV0aWxzXG5pbXBvcnQgeyBhdXRoZW50aWNhdGVVc2VyIH0gZnJvbSAnLi91dGlscy9hdXRoLmpzJztcblxuLy8gbW9uZ28gZGJcbmNvbnN0IGRiID0gbW9uZ29vc2UuY29ubmVjdGlvbjtcbmRiLm9uKCdlcnJvcicsIGNvbnNvbGUuZXJyb3IuYmluZChjb25zb2xlLCAnTW9uZ29EQiBjb25uZWN0aW9uIGVycm9yOicpKTtcbm1vbmdvb3NlLmNvbm5lY3QoXG4gICdtb25nb2RiK3NydjovL3Rlc3Q6MTIzNEBjbHVzdGVyMC1nbndxOC5tb25nb2RiLm5ldC90ZXN0P3JldHJ5V3JpdGVzPXRydWUmdz1tYWpvcml0eScsXG4gIHtcbiAgICB1c2VOZXdVcmxQYXJzZXI6IHRydWUsXG4gIH0sXG4pO1xubW9uZ29vc2UuUHJvbWlzZSA9IGdsb2JhbC5Qcm9taXNlO1xuXG4vLyBzZXJ2ZXIgc2V0dXBcbmxldCBwb3J0O1xuYXN5bmMgZnVuY3Rpb24gY29uZmlnU2VydmVyKCkge1xuICBwb3J0ID0gMzAwMCB8fCAoYXdhaXQgZGV0ZWN0UG9ydCgzMDAwKSk7XG59XG5jb25maWdTZXJ2ZXIoKTtcblxuLy8gZXhwcmVzcyBzZXR1cFxuY29uc3QgYXBwID0gZXhwcmVzcygpO1xuYXBwLnVzZShjb3JzKCkpO1xuYXBwLnVzZShib2R5UGFyc2VyLnVybGVuY29kZWQoeyBleHRlbmRlZDogdHJ1ZSB9KSk7XG5hcHAudXNlKGJvZHlQYXJzZXIuanNvbigpKTtcbmFwcC51c2UobW9yZ2FuKCdkZXYnKSk7IC8vIGxvZyByZXF1ZXN0XG5cbi8vIGV4cHJlc3Mgcm91dGVyc1xuYXBwLnVzZSgnLycsIGF1dGgpO1xuYXBwLnVzZSgnL3Bvc3RzJywgYXV0aGVudGljYXRlVXNlciwgcG9zdHMpO1xuXG4vLyBhcGkgZG9jc1xuYXBwLnVzZSgnL2FwaScsIGRvY3MpO1xuXG4vLyBzdGFydFxuYXBwLmxpc3Rlbihwb3J0LCAoKSA9PlxuICBjb25zb2xlLmxvZyhcbiAgICBgJHtjaGFsay53aGl0ZVxuICAgICAgLmJnSGV4KCcjNDFiODgzJylcbiAgICAgIC5ib2xkKGBWVUUgVElMIFNFUlZFUiBJUyBSVU5OSU5HIE9OICR7cG9ydH1gKX1gLFxuICApLFxuKTtcbiJdfQ==