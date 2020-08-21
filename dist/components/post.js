"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _link = _interopRequireDefault(require("next/link"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  margin: 0;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  max-width: 100%;\n  border-radius: 50%;\n  transition: all 0.3s;\n  margin-bottom: 0.5em;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  margin-bottom: 1em;\n  text-decoration: none;\n  text-align: center;\n  text-decoration: none;\n  color: #111111;\n  &:hover {\n    color: #111111;\n    text-decoration: none;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Post = function Post(_ref) {
  var id = _ref.id,
      image = _ref.image,
      title = _ref.title,
      text = _ref.text;
  return /*#__PURE__*/React.createElement(_link["default"], {
    href: "/".concat(id)
  }, /*#__PURE__*/React.createElement(StyledPost, null, image && /*#__PURE__*/React.createElement(Image, {
    alt: "alt",
    src: image
  }), /*#__PURE__*/React.createElement(Title, null, title), /*#__PURE__*/React.createElement("div", {
    dangerouslySetInnerHTML: {
      __html: text
    }
  })));
};

var _default = Post;
exports["default"] = _default;
Post.propType = {
  id: _propTypes["default"].number.isRequired,
  image: _propTypes["default"].string.isRequired,
  title: _propTypes["default"].string.isRequired,
  excerpt: _propTypes["default"].string.isRequired
};

var StyledPost = _styledComponents["default"].a(_templateObject());

var Image = _styledComponents["default"].img(_templateObject2());

var Title = _styledComponents["default"].h3(_templateObject3());

//# sourceMappingURL=post.js.map