Object.defineProperty(exports,"__esModule",{value:true});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _react=require('react');var _react2=_interopRequireDefault(_react);
var _reactNative=require('react-native');function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}

var styles=_reactNative.StyleSheet.create({
box:{
height:20,
width:20,
borderWidth:2,
borderColor:'black'},

inner:{
flex:1,
margin:2,
backgroundColor:'rgba(0,0,0,0.8)'}});var



Checkbox=function(_Component){_inherits(Checkbox,_Component);function Checkbox(){_classCallCheck(this,Checkbox);return _possibleConstructorReturn(this,(Checkbox.__proto__||Object.getPrototypeOf(Checkbox)).apply(this,arguments));}_createClass(Checkbox,[{key:'render',value:function render()






{var _props=
this.props,onToggle=_props.onToggle,isChecked=_props.isChecked;

return(
_react2.default.createElement(_reactNative.TouchableOpacity,{onPress:onToggle},
_react2.default.createElement(_reactNative.View,{style:styles.box},
isChecked&&_react2.default.createElement(_reactNative.View,{style:styles.inner}))));



}}]);return Checkbox;}(_react.Component);Checkbox.propTypes={onToggle:_react.PropTypes.func,isChecked:_react.PropTypes.bool};exports.default=Checkbox;

//# sourceMappingURL=Checkbox-compiled.js.map