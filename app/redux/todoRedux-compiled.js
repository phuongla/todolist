Object.defineProperty(exports,"__esModule",{value:true});var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};function _toConsumableArray(arr){if(Array.isArray(arr)){for(var i=0,arr2=Array(arr.length);i<arr.length;i++){arr2[i]=arr[i];}return arr2;}else{return Array.from(arr);}}var types={
ADD:'ADD',
REMOVE:'REMOVE'};


var actionCreators=exports.actionCreators={
add:function add(item){
return{type:types.ADD,payload:item};
},
remove:function remove(index){
return{type:types.REMOVE,payload:index};
}};


var initialState={
items:[]};


var reducer=exports.reducer=function reducer(){var state=arguments.length>0&&arguments[0]!==undefined?arguments[0]:initialState;var action=arguments[1];var
type=action.type,payload=action.payload;var
items=state.items;

switch(type){
case types.ADD:
return _extends({},state,{items:[payload].concat(_toConsumableArray(items))});
case types.REMOVE:
return _extends({},state,{items:items.filter(function(todo,i){return i!==payload;})});
default:{
return state;
}}

};

//# sourceMappingURL=todoRedux-compiled.js.map