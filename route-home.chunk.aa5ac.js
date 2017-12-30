webpackJsonp([0],{

/***/ "ZAL5":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"home":"home__MseGd"};

/***/ }),

/***/ "kFqT":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"search_field":"search_field__2o5gZ"};

/***/ }),

/***/ "n9Ed":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: ../node_modules/preact/dist/preact.min.js
var preact_min = __webpack_require__("KM04");
var preact_min_default = /*#__PURE__*/__webpack_require__.n(preact_min);

// EXTERNAL MODULE: ./routes/home/style.css
var style = __webpack_require__("ZAL5");
var style_default = /*#__PURE__*/__webpack_require__.n(style);

// EXTERNAL MODULE: ./components/search-field/style.css
var search_field_style = __webpack_require__("kFqT");
var search_field_style_default = /*#__PURE__*/__webpack_require__.n(search_field_style);

// CONCATENATED MODULE: ./elements/github-user.js


let GithubUser = class GithubUser extends HTMLElement {

  set name(input) {
    this.setAttribute('name', input);
    this.searchUser(input);
  }

  constructor() {
    super();
    this.SD = this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    console.log('<github-user> added to the DOM');
  }

  searchUser(name) {
    fetch(`https://api.github.com/users/${name}`).then(resp => resp.json()).then(data => {
      console.log(data);
      const str = JSON.stringify(data, null, 2);

      this.SD.innerHTML = `
          <style>
            pre{ padding: 20px; border: 1px dashed gray }
          </style>
          <pre>${str}</pre>
        `;
    });
  }

  clear() {
    this.SD.innerHTML = null;
  }

};



customElements.define('github-user', GithubUser);
// CONCATENATED MODULE: ./components/search-field/index.js







let search_field_SearchField = class SearchField extends preact_min["Component"] {
  constructor(...args) {
    var _temp;

    return _temp = super(...args), this.state = {
      user: null
    }, _temp;
  }

  searching(evt) {
    if (evt.keyCode === 13) {
      this.setState({ user: evt.currentTarget.value });
      console.log(this.state);
    }
  }

  render() {
    return Object(preact_min["h"])(
      'div',
      { 'class': search_field_style_default.a.search_field },
      Object(preact_min["h"])('input', { type: 'text',
        placeholder: 'Search a GitHub user... and press enter',
        onKeyUp: this.searching.bind(this),
        value: this.state.user }),
      Object(preact_min["h"])('github-user', { name: this.state.user })
    );
  }
};

// CONCATENATED MODULE: ../node_modules/babel-loader/lib?{"babelrc":false,"presets":[["/Users/salvatorelaisa/Projects/try-preact/node_modules/babel-preset-env/lib/index.js",{"loose":true,"uglify":true,"modules":false,"targets":{"browsers":["last 2 Chrome versions","last 2 Firefox versions","last 2 Safari versions","last 2 Opera versions","last 1 Edge versions"]},"exclude":["transform-regenerator","transform-es2015-typeof-symbol"]}],"/Users/salvatorelaisa/Projects/try-preact/node_modules/babel-preset-stage-1/lib/index.js"],"plugins":["/Users/salvatorelaisa/Projects/try-preact/node_modules/babel-plugin-transform-object-assign/lib/index.js","/Users/salvatorelaisa/Projects/try-preact/node_modules/babel-plugin-transform-decorators-legacy/lib/index.js","/Users/salvatorelaisa/Projects/try-preact/node_modules/babel-plugin-transform-react-constant-elements/lib/index.js","/Users/salvatorelaisa/Projects/try-preact/node_modules/babel-plugin-transform-react-remove-prop-types/lib/index.js",["/Users/salvatorelaisa/Projects/try-preact/node_modules/babel-plugin-transform-react-jsx/lib/index.js",{"pragma":"h"}],["/Users/salvatorelaisa/Projects/try-preact/node_modules/babel-plugin-jsx-pragmatic/jsx-pragmatic.js",{"module":"preact","export":"h","import":"h"}]]}!./routes/home/index.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return home_Home; });







var _ref = Object(preact_min["h"])(
	'h1',
	null,
	'Integrating Preact & Web Components'
);

var _ref2 = Object(preact_min["h"])(search_field_SearchField, null);

let home_Home = class Home extends preact_min["Component"] {
	render() {
		return Object(preact_min["h"])(
			'div',
			{ 'class': style_default.a.home },
			_ref,
			_ref2
		);
	}
};


/***/ })

});
//# sourceMappingURL=route-home.chunk.aa5ac.js.map