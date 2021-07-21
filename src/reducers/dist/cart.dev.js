"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var types = _interopRequireWildcard(require("./../constants/ActionTypes"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

//take data from localStorage
var data = JSON.parse(localStorage.getItem("CART"));
var initialState = data ? data : []; // var initialState = [
//   {
//     product: {
//       id: 1,
//       name: "iPhone X",
//       image:
//         "data:image/jpeg;base64,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",
//       description: "San pham do apple sx",
//       price: 500,
//       inventory: 15,
//       rating: 3,
//     },
//     quantity: 5,
//   },
//   {
//     product: {
//       id: 3,
//       name: "Realme XS",
//       image:
//         "data:image/jpeg;base64,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",
//       description: "San pham do realme sx",
//       price: 500,
//       inventory: 44,
//       rating: 5,
//     },
//     quantity: 1,
//   },
// ];

var cart = function cart() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;
  var product = action.product,
      quantity = action.quantity;
  var index = -1;

  switch (action.type) {
    case types.ADD_TO_CART:
      //State la ds cac sp trong cart
      //Product la sp vua them
      index = findProductInCart(state, product);

      if (index !== -1) {
        state[index].quantity += quantity;
      } else {
        state.push({
          product: product,
          quantity: quantity
        });
      }

      localStorage.setItem("CART", JSON.stringify(state));
      return _toConsumableArray(state);

    case types.DELETE_PRODUCT_IN_CART:
      index = findProductInCart(state, product);

      if (index !== -1) {
        state.splice(index, 1);
      }

      localStorage.setItem("CART", JSON.stringify(state));
      return _toConsumableArray(state);

    default:
      return _toConsumableArray(state);
  }
};

var findProductInCart = function findProductInCart(cart, product) {
  var index = -1;

  if (cart.length > 0) {
    for (var i = 0; i < cart.length; i++) {
      if (cart[i].product.id === product.id) {
        index = i;
        break;
      }
    }
  }

  return index;
};

var _default = cart;
exports["default"] = _default;