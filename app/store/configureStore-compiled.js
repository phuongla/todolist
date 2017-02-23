Object.defineProperty(exports,"__esModule",{value:true});var _redux=require('redux');
var _reduxPersist=require('redux-persist');



var _reduxThunk=require('redux-thunk');var _reduxThunk2=_interopRequireDefault(_reduxThunk);



var _reduxLogger=require('redux-logger');var _reduxLogger2=_interopRequireDefault(_reduxLogger);
var _todoRedux=require('../redux/todoRedux');function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}


var middleware=[_reduxThunk2.default];




if(process.env.NODE_ENV==='development'){
middleware.push((0,_reduxLogger2.default)());

require('../config/ReactotronConfig');
}exports.default=


function(initialState){

var store=(0,_redux.createStore)(_todoRedux.reducer,

initialState,
_redux.applyMiddleware.apply(undefined,middleware));

return store;
};

//# sourceMappingURL=configureStore-compiled.js.map