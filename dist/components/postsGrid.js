"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _post = _interopRequireDefault(require("./post"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-between;\n  margin: 2em auto;\n  > a {\n    flex-basis: 100%;\n    @media(min-width: 480px) {\n      flex-basis: 48%;\n    }\n    @media(min-width: 679px) {\n      flex-basis: 31%;\n    }\n    @media(min-width: 1024px) {\n      flex-basis: 22%;\n    }\n  }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  max-width: 900px;\n  margin: 0 auto;\n  padding: 0 1em;\n  @media(min-width: 480px) {\n    padding: 0 2em;\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  padding: 4em 0;\n  margin: 0;\n  background-color: #F4A261;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var PostsGrid = function PostsGrid(_ref) {
  var posts = _ref.posts;
  return /*#__PURE__*/React.createElement(Section, null, /*#__PURE__*/React.createElement(Inner, null, /*#__PURE__*/React.createElement(Grid, null, posts.map(function (post) {
    return /*#__PURE__*/React.createElement(_post["default"], {
      key: post.id,
      id: post.id,
      title: post.title.rendered,
      image: post._embedded['wp:featuredmedia'][0].source_url,
      text: post.excerpt.rendered
    });
  }))));
};

var _default = PostsGrid;
exports["default"] = _default;
PostsGrid.propType = {
  posts: _propTypes["default"].array.isRequired
};

var Section = _styledComponents["default"].section(_templateObject());

var Inner = _styledComponents["default"].div(_templateObject2());

var Grid = _styledComponents["default"].div(_templateObject3());

//# sourceMappingURL=postsGrid.js.map