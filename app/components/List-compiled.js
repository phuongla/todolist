Object.defineProperty(exports,"__esModule",{value:true});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _react=require('react');var _react2=_interopRequireDefault(_react);
var _reactNative=require('react-native');

var _Checkbox=require('./Checkbox');var _Checkbox2=_interopRequireDefault(_Checkbox);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}

var styles=_reactNative.StyleSheet.create({
container:{
flex:1},

row:{
flexDirection:'row',
justifyContent:'space-between',
alignItems:'center',
backgroundColor:'#E5F2FF',
height:30,
borderBottomWidth:1,
borderBottomColor:'white'},

rightSelection:{
flexDirection:'row',
alignItems:'center',
paddingRight:20},

textRow:{
paddingLeft:10},

remove:{
paddingLeft:10,
marginBottom:10,
color:'#CD5C5C',
fontSize:26}});var



List=function(_Component){_inherits(List,_Component);

function List(props){_classCallCheck(this,List);return _possibleConstructorReturn(this,(List.__proto__||Object.getPrototypeOf(List)).call(this,
props));
}_createClass(List,[{key:'renderRow',value:function renderRow(

item,i){
return(
_react2.default.createElement(_reactNative.View,{style:styles.row},
_react2.default.createElement(_reactNative.Text,{style:styles.textRow},
item),

_react2.default.createElement(_reactNative.View,{style:styles.rightSelection},
_react2.default.createElement(_Checkbox2.default,null),
_react2.default.createElement(_reactNative.TouchableOpacity,{onPress:function onPress(){return onRemoveItem(i);}},
_react2.default.createElement(_reactNative.Text,{style:styles.remove},' \xD7 ')))));




}},{key:'render',value:function render()

{
var ds=new _reactNative.ListView.DataSource({rowHasChanged:function rowHasChanged(r1,r2){return r1!==r2;}});var
items=this.props.items;
var dataSource=ds.cloneWithRows(items);

return(
_react2.default.createElement(_reactNative.ListView,{style:styles.container,dataSource:dataSource,
renderRow:this.renderRow,
enableEmptySections:true}));



}}]);return List;}(_react.Component);exports.default=List;

//# sourceMappingURL=List-compiled.js.map