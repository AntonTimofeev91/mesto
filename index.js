(()=>{"use strict";function t(e){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t(e)}function e(e,n){for(var r=0;r<n.length;r++){var o=n[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,(void 0,i=function(e,n){if("object"!==t(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var o=r.call(e,"string");if("object"!==t(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(o.key),"symbol"===t(i)?i:String(i)),o)}var i}var n=function(){function t(e,n,r,o){var i=e.cardData,a=e.handleDeleteIconClick,u=e.handleCardClick,c=e.handleLikeClickApi;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._cardData=i,this._handleDeleteIconClick=a,this._templateSelector=n,this._handleCardClick=u,this._handleLikeClickApi=c,this._cardSettings=o,this._isOwner=this._cardData.owner._id===r,this._id=this._cardData._id,this._like=i.likes.some((function(t){return t._id===r}))}var n,r;return n=t,(r=[{key:"_getTemplate",value:function(){return document.querySelector(this._templateSelector).content.querySelector(".element").cloneNode(!0)}},{key:"_handleLikeClick",value:function(){this._heartDomElement.classList.toggle(this._cardSettings.cardActiv)}},{key:"handleRemoveCardClick",value:function(){this._element.remove()}},{key:"getCardId",value:function(){return this._id}},{key:"getLikeState",value:function(){return this._like}},{key:"_setEventListeners",value:function(){var t=this;this._imageDomElement=this._element.querySelector(this._cardSettings.cardImage),this._likeCountDomElement=this._element.querySelector(this._cardSettings.cardLikeCount),this._imageDomElement.addEventListener("click",(function(){t._handleCardClick({name:t._cardData.name,link:t._cardData.link})})),this._cardDeleteDomElement=this._element.querySelector(this._cardSettings.cardDelete),this._cardDeleteDomElement.addEventListener("click",(function(){t._handleDeleteIconClick()})),this._heartDomElement=this._element.querySelector(this._cardSettings.cardLike),this._heartDomElement.addEventListener("click",(function(){t._handleLikeClickApi(t)}))}},{key:"editLike",value:function(){this._handleLikeClick(),this._like=!this._like}},{key:"setLikeCount",value:function(t){this._likeCountDomElement.textContent=t}},{key:"createCard",value:function(){return this._element=this._getTemplate(this._cardSettings.card),this._setEventListeners(),this._titleDomElement=this._element.querySelector(this._cardSettings.cardTitle),this._titleDomElement.textContent=this._cardData.name,this._imageDomElement.src=this._cardData.link,this._imageDomElement.alt=this._cardData.name,this.setLikeCount(this._cardData.likes.length),this._like&&this._heartDomElement.classList.add(this._cardSettings.cardActiv),this._isOwner||this._cardDeleteDomElement.classList.add(this._cardSettings.cardDeleteInactiv),this._element}}])&&e(n.prototype,r),Object.defineProperty(n,"prototype",{writable:!1}),t}();function r(t){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},r(t)}function o(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,a(r.key),r)}}function i(t,e,n){return(e=a(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function a(t){var e=function(t,e){if("object"!==r(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var o=n.call(t,"string");if("object"!==r(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"===r(e)?e:String(e)}var u=function(){function t(e,n){var r=this;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),i(this,"_showInputError",(function(t){var e=r._form.querySelector(".".concat(t.id,"-error"));t.classList.add(r._settings.inputErrorClass),e.textContent=t.validationMessage,e.classList.add(r._settings.errorClass)})),i(this,"_hideInputError",(function(t){var e=r._form.querySelector(".".concat(t.id,"-error"));t.classList.remove(r._settings.inputErrorClass),e.classList.remove(r._settings.errorClass),e.textContent=""})),i(this,"_toggleInputErrorState",(function(t){t.validity.valid?r._hideInputError(t):r._showInputError(t)})),i(this,"_hasInvalidInput",(function(){return r._inputList.some((function(t){return!t.validity.valid}))})),i(this,"_toggleButtonState",(function(){r._hasInvalidInput()?r.disableSubmiButton():(r._buttonElement.classList.remove(r._settings.inactiveButtonClass),r._buttonElement.removeAttribute("disabled",!1))})),i(this,"_setEventListeners",(function(){r._toggleButtonState(),r._inputList.forEach((function(t){t.addEventListener("input",(function(){r._toggleInputErrorState(t),r._toggleButtonState()}))}))})),i(this,"enableValidation",(function(){r._setEventListeners()})),this._settings=e,this._form=n,this._inputList=Array.from(this._form.querySelectorAll(this._settings.inputSelector)),this._buttonElement=this._form.querySelector(this._settings.submitButtonSelector)}var e,n;return e=t,(n=[{key:"resetErrors",value:function(){var t=this;this._inputList.forEach((function(e){t._hideInputError(e)}))}},{key:"disableSubmiButton",value:function(){this._buttonElement.setAttribute("disabled",!0),this._buttonElement.classList.add(this._settings.inactiveButtonClass)}}])&&o(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function c(t){return c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},c(t)}function l(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==c(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==c(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===c(o)?o:String(o)),r)}var o}var s=function(){function t(e,n){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._basePath=e,this._token=n}var e,n;return e=t,(n=[{key:"_getHeaders",value:function(){return{authorization:this._token,"Content-Type":"application/json"}}},{key:"_getJson",value:function(t){return t.ok?t.json():Promise.reject("Ошибка: ".concat(t.status))}},{key:"_request",value:function(t,e){return fetch(t,e).then(this._getJson)}},{key:"getCards",value:function(){return this._request("".concat(this._basePath,"/cards"),{headers:this._getHeaders()})}},{key:"deleteCard",value:function(t){return this._request("".concat(this._basePath,"/cards/").concat(t),{method:"DELETE",headers:this._getHeaders()})}},{key:"getUserInfo",value:function(){return this._request("".concat(this._basePath,"/users/me"),{headers:this._getHeaders()})}},{key:"getAllCardWhithUser",value:function(){return Promise.all([this.getCards(),this.getUserInfo()])}},{key:"editUserInfo",value:function(t){var e=t.item;return this._request("".concat(this._basePath,"/users/me"),{method:"PATCH",headers:this._getHeaders(),body:JSON.stringify({name:e.name,about:e.about})})}},{key:"addNewCard",value:function(t){var e=t.item;return this._request("".concat(this._basePath,"/cards"),{method:"POST",headers:this._getHeaders(),body:JSON.stringify({link:e.link,name:e.name})})}},{key:"likeCard",value:function(t){return this._request("".concat(this._basePath,"/cards/").concat(t,"/likes"),{method:"PUT",headers:this._getHeaders()})}},{key:"deleteLike",value:function(t){return this._request("".concat(this._basePath,"/cards/").concat(t,"/likes"),{method:"DELETE",headers:this._getHeaders()})}},{key:"editAvatar",value:function(t){var e=t.item;return this._request("".concat(this._basePath,"/users/me/avatar"),{method:"PATCH",headers:this._getHeaders(),body:JSON.stringify({avatar:e.link})})}}])&&l(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}(),f={inputSelector:".popup__input",submitButtonSelector:".popup__button",inactiveButtonClass:"popup__button_disabled",errorInput:".popup__error",inputErrorClass:"popup__input_type_error",errorClass:"popup__error_visible"},p={card:".element",cardActiv:"element__like_active",cardLike:".element__like",cardLikeCount:".like-count",cardTitle:".element__name",cardImage:".element__image",cardDelete:".element__remove-button",cardDeleteInactiv:"element__remove-button_deactive"},y={formSelector:".popup__form",formEditUser:"editUser",formAddCard:"addCard",formEditAvatar:"editAvatar"},d=document.querySelector(".profile"),h=d.querySelector(".profile__edit-button"),m=d.querySelector(".profile__avatar-overlay"),v=d.querySelector(".profile__add-button");function b(t){return b="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},b(t)}function _(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==b(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==b(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===b(o)?o:String(o)),r)}var o}var g=function(){function t(e,n){var r=e.renderer;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._container=document.querySelector(n),this._renderer=r}var e,n;return e=t,(n=[{key:"renderItems",value:function(t){var e=this;t.forEach((function(t){e._renderer(t)}))}},{key:"addItem",value:function(t){this._container.append(t)}},{key:"addItemStart",value:function(t){this._container.prepend(t)}}])&&_(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function S(t){return S="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},S(t)}function k(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==S(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==S(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===S(o)?o:String(o)),r)}var o}var E=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._popup=document.querySelector(e),this._handleEscClose=this._handleEscClose.bind(this)}var e,n;return e=t,(n=[{key:"open",value:function(){this._popup.classList.add("popup_opened"),document.addEventListener("keydown",this._handleEscClose)}},{key:"close",value:function(){document.removeEventListener("keydown",this._handleEscClose),this._popup.classList.remove("popup_opened")}},{key:"_handleEscClose",value:function(t){"Escape"===t.key&&this.close()}},{key:"setEventListeners",value:function(){var t=this;this._popup.addEventListener("mousedown",(function(e){e.target.closest(".popup__container")||t.close()})),this._popup.addEventListener("click",(function(e){e.target.classList.contains("popup__close-icon")&&t.close()}))}}])&&k(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function w(t){return w="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},w(t)}function P(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==w(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==w(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===w(o)?o:String(o)),r)}var o}function C(){return C="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,n){var r=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=j(t)););return t}(t,e);if(r){var o=Object.getOwnPropertyDescriptor(r,e);return o.get?o.get.call(arguments.length<3?t:n):o.value}},C.apply(this,arguments)}function O(t,e){return O=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},O(t,e)}function j(t){return j=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},j(t)}var L=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&O(t,e)}(a,t);var e,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=j(r);if(o){var n=j(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===w(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(this,t)});function a(t){var e;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,a),(e=i.call(this,t))._image=e._popup.querySelector(".popup-image__picture"),e._title=e._popup.querySelector(".popup-image__name"),e}return e=a,(n=[{key:"open",value:function(t){var e=t.data;this._image.alt=e.name,this._title.textContent=e.name,this._image.src=e.link,C(j(a.prototype),"open",this).call(this)}}])&&P(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),a}(E);function I(t){return I="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},I(t)}function D(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==I(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==I(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===I(o)?o:String(o)),r)}var o}function T(){return T="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,n){var r=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=A(t)););return t}(t,e);if(r){var o=Object.getOwnPropertyDescriptor(r,e);return o.get?o.get.call(arguments.length<3?t:n):o.value}},T.apply(this,arguments)}function q(t,e){return q=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},q(t,e)}function A(t){return A=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},A(t)}var R=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&q(t,e)}(a,t);var e,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=A(r);if(o){var n=A(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===I(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(this,t)});function a(t,e){var n;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,a),(n=i.call(this,e))._callbakSubmit=t,n._form=n._popup.querySelector(".popup__form"),n._button=n._form.querySelector(".popup__button"),n._inputList=Array.from(n._form.querySelectorAll(".popup__input")),n._buttonText=n._button.textContent,n}return e=a,n=[{key:"setValueInputs",value:function(t){var e=t.data;this._inputList.forEach((function(t){t.value=e[t.name]}))}},{key:"_getInputValues",value:function(){var t=this;return this._formValues={},this._inputList.forEach((function(e){t._formValues[e.name]=e.value})),this._formValues}},{key:"setEventListeners",value:function(){var t=this;this._form.addEventListener("submit",(function(e){e.preventDefault(),t._callbakSubmit(t._getInputValues())})),T(A(a.prototype),"setEventListeners",this).call(this)}},{key:"renderLoading",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"Сохранение...";this._button.textContent=t?e:this._buttonText}},{key:"close",value:function(){this._form.reset(),T(A(a.prototype),"close",this).call(this)}}],n&&D(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),a}(E);function x(t){return x="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},x(t)}function U(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==x(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==x(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===x(o)?o:String(o)),r)}var o}function B(){return B="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,n){var r=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=V(t)););return t}(t,e);if(r){var o=Object.getOwnPropertyDescriptor(r,e);return o.get?o.get.call(arguments.length<3?t:n):o.value}},B.apply(this,arguments)}function H(t,e){return H=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},H(t,e)}function V(t){return V=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},V(t)}var N=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&H(t,e)}(a,t);var e,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=V(r);if(o){var n=V(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===x(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(this,t)});function a(t,e){var n;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,a),(n=i.call(this,e))._button=n._popup.querySelector(".popup__button"),n._callbakSubmit=t,n._buttonText=n._button.textContent,n}return e=a,n=[{key:"setParams",value:function(t){this._card=t}},{key:"getParams",value:function(){return this._card}},{key:"setEventListeners",value:function(){var t=this;this._button.addEventListener("click",(function(e){e.preventDefault(),t._callbakSubmit()})),B(V(a.prototype),"setEventListeners",this).call(this)}},{key:"renderLoading",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"Удаление...";this._button.textContent=t?e:this._buttonText}}],n&&U(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),a}(E);function J(t){return J="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},J(t)}function M(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==J(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==J(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===J(o)?o:String(o)),r)}var o}var W=function(){function t(e){var n=e.nameSelector,r=e.aboutSelector,o=e.avatarSelector;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t);var i=document.querySelector(".profile");this._nameProfile=i.querySelector(n),this._aboutProfile=i.querySelector(r),this._imageProfile=i.querySelector(o)}var e,n;return e=t,(n=[{key:"_setUserInfoInProfile",value:function(){this._nameProfile.textContent=this._name,this._aboutProfile.textContent=this._about,this._imageProfile.src=this._image}},{key:"getUserInfo",value:function(){return{name:this._name,about:this._about,image:this._image,_id:this._id,cohort:this._cohort}}},{key:"setUserInfo",value:function(t){var e=t.data;this._name=e.name,this._about=e.about,this._image=e.avatar,this._id=e._id,this._cohort=e.cohort,this._setUserInfoInProfile()}}])&&M(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function z(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}var $=new g({renderer:function(t){$.addItem(K({data:t}))}},".elements"),F=new W({nameSelector:".profile__name",aboutSelector:".profile__job",avatarSelector:".profile__avatar-image"}),G=new s("https://mesto.nomoreparties.co/v1/cohort-61","b87cc32b-7ed7-43b0-9fc7-cc201d52831c");function K(t){var e=t.data,r=new n({cardData:e,handleDeleteIconClick:function(){et.setParams(r),et.open()},handleCardClick:function(t){Y.open({data:t})},handleLikeClickApi:function(t){t.getLikeState()?G.deleteLike(t.getCardId()).then((function(e){t.setLikeCount(e.likes.length),t.editLike()})).catch((function(t){console.log(t)})):G.likeCard(t.getCardId()).then((function(e){t.setLikeCount(e.likes.length),t.editLike()})).catch((function(t){console.log(t)}))}},".element-template",F.getUserInfo()._id,p);return r.createCard()}G.getAllCardWhithUser().then((function(t){var e,n,r=(n=2,function(t){if(Array.isArray(t))return t}(e=t)||function(t,e){var n=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=n){var r,o,i,a,u=[],c=!0,l=!1;try{if(i=(n=n.call(t)).next,0===e){if(Object(n)!==n)return;c=!1}else for(;!(c=(r=i.call(n)).done)&&(u.push(r.value),u.length!==e);c=!0);}catch(t){l=!0,o=t}finally{try{if(!c&&null!=n.return&&(a=n.return(),Object(a)!==a))return}finally{if(l)throw o}}return u}}(e,n)||function(t,e){if(t){if("string"==typeof t)return z(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?z(t,e):void 0}}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),o=r[0],i=r[1];F.setUserInfo({data:i}),$.renderItems(o)})).catch((function(t){console.log(t)}));var Q,X={};Q=y,Array.from(document.querySelectorAll(Q.formSelector)).forEach((function(t){var e=new u(f,t),n=t.getAttribute("name");X[n]=e,e.enableValidation()}));var Y=new L(".popup-image");Y.setEventListeners();var Z=new R((function(t){Z.renderLoading(!0),G.editUserInfo({item:t}).then((function(t){F.setUserInfo({data:t}),Z.close()})).catch((function(t){console.log(t)})).finally((function(){Z.renderLoading(!1)}))}),".popup-profile");Z.setEventListeners();var tt=new R((function(t){tt.renderLoading(!0),G.addNewCard({item:t}).then((function(t){$.addItemStart(K({data:t})),tt.close()})).catch((function(t){console.log(t)})).finally((function(){tt.renderLoading(!1)}))}),".popup-element");tt.setEventListeners();var et=new N((function(){et.renderLoading(!0);var t=et.getParams();G.deleteCard(t.getCardId()).then((function(e){t.handleRemoveCardClick(),et.close()})).catch((function(t){return console.log(t)})).finally((function(){et.renderLoading(!1)}))}),".popup-delete");et.setEventListeners();var nt=new R((function(t){nt.renderLoading(!0),G.editAvatar({item:t}).then((function(t){F.setUserInfo({data:t}),nt.close()})).catch((function(t){return console.log(t)})).finally((function(){nt.renderLoading(!1)}))}),".popup-avatar");nt.setEventListeners(),m.addEventListener("click",(function(){nt.open(),X[y.formEditAvatar].resetErrors(),X[y.formEditAvatar].disableSubmiButton()})),h.addEventListener("click",(function(){Z.open(),Z.setValueInputs({data:F.getUserInfo()}),X[y.formEditUser].resetErrors(),X[y.formEditUser].disableSubmiButton()})),v.addEventListener("click",(function(){tt.open(),X[y.formAddCard].resetErrors(),X[y.formAddCard].disableSubmiButton()}))})();