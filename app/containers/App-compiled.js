Object.defineProperty(exports,"__esModule",{value:true});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _react=require('react');var _react2=_interopRequireDefault(_react);
var _reactNative=require('react-native');
var _reactRedux=require('react-redux');
var _reactNativeRouterFlux=require('react-native-router-flux');

var _todoRedux=require('../redux/todoRedux');

var _Title=require('../components/Title');var _Title2=_interopRequireDefault(_Title);
var _Input=require('../components/Input');var _Input2=_interopRequireDefault(_Input);
var _Footer=require('../components/Footer');var _Footer2=_interopRequireDefault(_Footer);
var _List=require('../components/List');var _List2=_interopRequireDefault(_List);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}

var styles=_reactNative.StyleSheet.create({
container:{
flex:1},

header:{
flex:0.18},

body:{
flex:0.77,
justifyContent:'center'},

footer:{
flex:0.05,
justifyContent:'center',
alignItems:'center',
paddingBottom:10}});



var mapStateToProps=function mapStateToProps(state){return{
items:state.items};};var


App=function(_Component){_inherits(App,_Component);






function App(props){_classCallCheck(this,App);var _this=_possibleConstructorReturn(this,(App.__proto__||Object.getPrototypeOf(App)).call(this,
props));_this.


onAddItem=function(text){
console.log(_this.props);var
dispatch=_this.props.dispatch;
dispatch(_todoRedux.actionCreators.add(text));
};_this.

onRemoveItem=function(index){var
dispatch=_this.props.dispatch;
dispatch(_todoRedux.actionCreators.remove(index));
};return _this;}_createClass(App,[{key:'render',value:function render()

{var
items=this.props.items;

return(
_react2.default.createElement(_reactNative.View,{style:styles.container},
_react2.default.createElement(_reactNative.View,{style:styles.header},
_react2.default.createElement(_Title2.default,null),
_react2.default.createElement(_Input2.default,{onAddedItem:this.onAddItem})),

_react2.default.createElement(_reactNative.View,{style:styles.body},
_react2.default.createElement(_List2.default,{items:items})),

_react2.default.createElement(_reactNative.View,{style:styles.footer},
_react2.default.createElement(_Footer2.default,{onRemoveCompletedItems:function onRemoveCompletedItems(){return alert('Remove all completed');}}))));



}}]);return App;}(_react.Component);App.propTypes={items:_react.PropTypes.array.isRequired,dispatch:_react.PropTypes.func.isRequired};exports.default=


(0,_reactRedux.connect)(mapStateToProps)(App);

//# sourceMappingURL=App-compiled.js.map