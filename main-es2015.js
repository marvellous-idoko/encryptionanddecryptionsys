(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * -->\n<!-- * * * * * * * * * * * The content below * * * * * * * * * * * -->\n<!-- * * * * * * * * * * is only a placeholder * * * * * * * * * * -->\n<!-- * * * * * * * * * * and can be replaced. * * * * * * * * * * * -->\n<!-- * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * -->\n<!-- * * * * * * * * * Delete the template below * * * * * * * * * * -->\n<!-- * * * * * * * to get started with your project! * * * * * * * * -->\n<!-- * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * -->\n\n<!-- <style>\n  :host {\n    font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\";\n    font-size: 14px;\n    color: #333;\n    box-sizing: border-box;\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n  }\n\n  h1,\n  h2,\n  h3,\n  h4,\n  h5,\n  h6 {\n    margin: 8px 0;\n  }\n\n  p {\n    margin: 0;\n  }\n\n  .spacer {\n    flex: 1;\n  }\n\n  .toolbar {\n    height: 60px;\n    margin: -8px;\n    display: flex;\n    align-items: center;\n    background-color: #1976d2;\n    color: white;\n    font-weight: 600;\n  }\n\n  .toolbar img {\n    margin: 0 16px;\n  }\n\n  .toolbar #twitter-logo {\n    height: 40px;\n    margin: 0 16px;\n  }\n\n  .toolbar #twitter-logo:hover {\n    opacity: 0.8;\n  }\n\n  .content {\n    display: flex;\n    margin: 32px auto;\n    padding: 0 16px;\n    max-width: 960px;\n    flex-direction: column;\n    align-items: center;\n  }\n\n  svg.material-icons {\n    height: 24px;\n    width: auto;\n  }\n\n  svg.material-icons:not(:last-child) {\n    margin-right: 8px;\n  }\n\n  .card svg.material-icons path {\n    fill: #888;\n  }\n\n  .card-container {\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: center;\n    margin-top: 16px;\n  }\n\n  .card {\n    border-radius: 4px;\n    border: 1px solid #eee;\n    background-color: #fafafa;\n    height: 40px;\n    width: 200px;\n    margin: 0 8px 16px;\n    padding: 16px;\n    display: flex;\n    flex-direction: row;\n    justify-content: center;\n    align-items: center;\n    transition: all 0.2s ease-in-out;\n    line-height: 24px;\n  }\n\n  .card-container .card:not(:last-child) {\n    margin-right: 0;\n  }\n\n  .card.card-small {\n    height: 16px;\n    width: 168px;\n  }\n\n  .card-container .card:not(.highlight-card) {\n    cursor: pointer;\n  }\n\n  .card-container .card:not(.highlight-card):hover {\n    transform: translateY(-3px);\n    box-shadow: 0 4px 17px rgba(black, 0.35);\n  }\n\n  .card-container .card:not(.highlight-card):hover .material-icons path {\n    fill: rgb(105, 103, 103);\n  }\n\n  .card.highlight-card {\n    background-color: #1976d2;\n    color: white;\n    font-weight: 600;\n    border: none;\n    width: auto;\n    min-width: 30%;\n    position: relative;\n  }\n\n  .card.card.highlight-card span {\n    margin-left: 60px;\n  }\n\n  svg#rocket {\n    width: 80px;\n    position: absolute;\n    left: -10px;\n    top: -24px;\n  }\n\n  svg#rocket-smoke {\n    height: 100vh;\n    position: absolute;\n    top: 10px;\n    right: 180px;\n    z-index: -10;\n  }\n\n  a,\n  a:visited,\n  a:hover {\n    color: #1976d2;\n    text-decoration: none;\n  }\n\n  a:hover {\n    color: #125699;\n  }\n\n  .terminal {\n    position: relative;\n    width: 80%;\n    max-width: 600px;\n    border-radius: 6px;\n    padding-top: 45px;\n    margin-top: 8px;\n    overflow: hidden;\n    background-color: rgb(15, 15, 16);\n  }\n\n  .terminal::before {\n    content: \"\\2022 \\2022 \\2022\";\n    position: absolute;\n    top: 0;\n    left: 0;\n    height: 4px;\n    background: rgb(58, 58, 58);\n    color: #c2c3c4;\n    width: 100%;\n    font-size: 2rem;\n    line-height: 0;\n    padding: 14px 0;\n    text-indent: 4px;\n  }\n\n  .terminal pre {\n    font-family: SFMono-Regular,Consolas,Liberation Mono,Menlo,monospace;\n    color: white;\n    padding: 0 1rem 1rem;\n    margin: 0;\n  }\n\n  .circle-link {\n    height: 40px;\n    width: 40px;\n    border-radius: 40px;\n    margin: 8px;\n    background-color: white;\n    border: 1px solid #eeeeee;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    cursor: pointer;\n    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);\n    transition: 1s ease-out;\n  }\n\n  .circle-link:hover {\n    transform: translateY(-0.25rem);\n    box-shadow: 0px 3px 15px rgba(0, 0, 0, 0.2);\n  }\n\n  footer {\n    margin-top: 8px;\n    display: flex;\n    align-items: center;\n    line-height: 20px;\n  }\n\n  footer a {\n    display: flex;\n    align-items: center;\n  }\n\n  .github-star-badge {\n    color: #24292e;\n    display: flex;\n    align-items: center;\n    font-size: 12px;\n    padding: 3px 10px;\n    border: 1px solid rgba(27,31,35,.2);\n    border-radius: 3px;\n    background-image: linear-gradient(-180deg,#fafbfc,#eff3f6 90%);\n    margin-left: 4px;\n    font-weight: 600;\n    font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol;\n  }\n\n  .github-star-badge:hover {\n    background-image: linear-gradient(-180deg,#f0f3f6,#e6ebf1 90%);\n    border-color: rgba(27,31,35,.35);\n    background-position: -.5em;\n  }\n\n  .github-star-badge .material-icons {\n    height: 16px;\n    width: 16px;\n    margin-right: 4px;\n  }\n\n  svg#clouds {\n    position: fixed;\n    bottom: -160px;\n    left: -230px;\n    z-index: -10;\n    width: 1920px;\n  }\n\n\n  /* Responsive Styles */\n  @media screen and (max-width: 767px) {\n\n    .card-container > *:not(.circle-link) ,\n    .terminal {\n      width: 100%;\n    }\n\n    .card:not(.highlight-card) {\n      height: 16px;\n      margin: 8px 0;\n    }\n\n    .card.highlight-card span {\n      margin-left: 72px;\n    }\n\n    svg#rocket-smoke {\n      right: 120px;\n      transform: rotate(-5deg);\n    }\n  }\n\n  @media screen and (max-width: 575px) {\n    svg#rocket-smoke {\n      display: none;\n      visibility: hidden;\n    }\n  }\n</style> -->\n\n<!-- Toolbar -->\n<!-- <div class=\"toolbar\" role=\"banner\">\n  <img\n    width=\"40\"\n    alt=\"Angular Logo\"\n    src=\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTAgMjUwIj4KICAgIDxwYXRoIGZpbGw9IiNERDAwMzEiIGQ9Ik0xMjUgMzBMMzEuOSA2My4ybDE0LjIgMTIzLjFMMTI1IDIzMGw3OC45LTQzLjcgMTQuMi0xMjMuMXoiIC8+CiAgICA8cGF0aCBmaWxsPSIjQzMwMDJGIiBkPSJNMTI1IDMwdjIyLjItLjFWMjMwbDc4LjktNDMuNyAxNC4yLTEyMy4xTDEyNSAzMHoiIC8+CiAgICA8cGF0aCAgZmlsbD0iI0ZGRkZGRiIgZD0iTTEyNSA1Mi4xTDY2LjggMTgyLjZoMjEuN2wxMS43LTI5LjJoNDkuNGwxMS43IDI5LjJIMTgzTDEyNSA1Mi4xem0xNyA4My4zaC0zNGwxNy00MC45IDE3IDQwLjl6IiAvPgogIDwvc3ZnPg==\"\n  />\n  <span>Welcome</span>\n    <div class=\"spacer\"></div>\n  <a aria-label=\"Angular on twitter\" target=\"_blank\" rel=\"noopener\" href=\"https://twitter.com/angular\" title=\"Twitter\">\n    \n    <svg id=\"twitter-logo\" height=\"24\" data-name=\"Logo — FIXED\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 400 400\">\n      <defs>\n        <style>\n          .cls-1 {\n            fill: none;\n          }\n\n          .cls-2 {\n            fill: #ffffff;\n          }\n        </style>\n      </defs>\n      <rect class=\"cls-1\" width=\"400\" height=\"400\" />\n      <path class=\"cls-2\" d=\"M153.62,301.59c94.34,0,145.94-78.16,145.94-145.94,0-2.22,0-4.43-.15-6.63A104.36,104.36,0,0,0,325,122.47a102.38,102.38,0,0,1-29.46,8.07,51.47,51.47,0,0,0,22.55-28.37,102.79,102.79,0,0,1-32.57,12.45,51.34,51.34,0,0,0-87.41,46.78A145.62,145.62,0,0,1,92.4,107.81a51.33,51.33,0,0,0,15.88,68.47A50.91,50.91,0,0,1,85,169.86c0,.21,0,.43,0,.65a51.31,51.31,0,0,0,41.15,50.28,51.21,51.21,0,0,1-23.16.88,51.35,51.35,0,0,0,47.92,35.62,102.92,102.92,0,0,1-63.7,22A104.41,104.41,0,0,1,75,278.55a145.21,145.21,0,0,0,78.62,23\"\n      />\n    </svg>\n    \n  </a>\n</div>\n\n<div class=\"content\" role=\"main\"> -->\n\n<!-- Highlight Card -->\n<!-- <div class=\"card highlight-card card-small\">\n\n    <svg id=\"rocket\" alt=\"Rocket Ship\" xmlns=\"http://www.w3.org/2000/svg\" width=\"101.678\" height=\"101.678\" viewBox=\"0 0 101.678 101.678\">\n      <g id=\"Group_83\" data-name=\"Group 83\" transform=\"translate(-141 -696)\">\n        <circle id=\"Ellipse_8\" data-name=\"Ellipse 8\" cx=\"50.839\" cy=\"50.839\" r=\"50.839\" transform=\"translate(141 696)\" fill=\"#dd0031\"/>\n        <g id=\"Group_47\" data-name=\"Group 47\" transform=\"translate(165.185 720.185)\">\n          <path id=\"Path_33\" data-name=\"Path 33\" d=\"M3.4,42.615a3.084,3.084,0,0,0,3.553,3.553,21.419,21.419,0,0,0,12.215-6.107L9.511,30.4A21.419,21.419,0,0,0,3.4,42.615Z\" transform=\"translate(0.371 3.363)\" fill=\"#fff\"/>\n          <path id=\"Path_34\" data-name=\"Path 34\" d=\"M53.3,3.221A3.09,3.09,0,0,0,50.081,0,48.227,48.227,0,0,0,18.322,13.437c-6-1.666-14.991-1.221-18.322,7.218A33.892,33.892,0,0,1,9.439,25.1l-.333.666a3.013,3.013,0,0,0,.555,3.553L23.985,43.641a2.9,2.9,0,0,0,3.553.555l.666-.333A33.892,33.892,0,0,1,32.647,53.3c8.55-3.664,8.884-12.326,7.218-18.322A48.227,48.227,0,0,0,53.3,3.221ZM34.424,9.772a6.439,6.439,0,1,1,9.106,9.106,6.368,6.368,0,0,1-9.106,0A6.467,6.467,0,0,1,34.424,9.772Z\" transform=\"translate(0 0.005)\" fill=\"#fff\"/>\n        </g>\n      </g>\n    </svg>\n\n    <span>{{ title }} app is running!</span>\n\n    <svg id=\"rocket-smoke\" alt=\"Rocket Ship Smoke\" xmlns=\"http://www.w3.org/2000/svg\" width=\"516.119\" height=\"1083.632\" viewBox=\"0 0 516.119 1083.632\">\n      <path id=\"Path_40\" data-name=\"Path 40\" d=\"M644.6,141S143.02,215.537,147.049,870.207s342.774,201.755,342.774,201.755S404.659,847.213,388.815,762.2c-27.116-145.51-11.551-384.124,271.9-609.1C671.15,139.365,644.6,141,644.6,141Z\" transform=\"translate(-147.025 -140.939)\" fill=\"#f5f5f5\"/>\n    </svg>\n\n  </div> -->\n\n<!-- Resources -->\n<!-- <h2>Resources</h2>\n  <p>Here are some links to help you get started:</p>\n\n  <div class=\"card-container\">\n    <a class=\"card\" target=\"_blank\" rel=\"noopener\" href=\"https://angular.io/tutorial\">\n      <svg class=\"material-icons\" xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82zM12 3L1 9l11 6 9-4.91V17h2V9L12 3z\"/></svg>\n\n      <span>Learn Angular</span>\n\n      <svg class=\"material-icons\" xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z\"/></svg>    </a>\n\n    <a class=\"card\" target=\"_blank\" rel=\"noopener\" href=\"https://angular.io/cli\">\n      <svg class=\"material-icons\" xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z\"/></svg>\n\n      <span>CLI Documentation</span>\n\n      <svg class=\"material-icons\" xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z\"/></svg>\n    </a>\n\n    <a class=\"card\" target=\"_blank\" rel=\"noopener\" href=\"https://blog.angular.io/\">\n      <svg class=\"material-icons\" xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M13.5.67s.74 2.65.74 4.8c0 2.06-1.35 3.73-3.41 3.73-2.07 0-3.63-1.67-3.63-3.73l.03-.36C5.21 7.51 4 10.62 4 14c0 4.42 3.58 8 8 8s8-3.58 8-8C20 8.61 17.41 3.8 13.5.67zM11.71 19c-1.78 0-3.22-1.4-3.22-3.14 0-1.62 1.05-2.76 2.81-3.12 1.77-.36 3.6-1.21 4.62-2.58.39 1.29.59 2.65.59 4.04 0 2.65-2.15 4.8-4.8 4.8z\"/></svg>\n\n      <span>Angular Blog</span>\n\n      <svg class=\"material-icons\" xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z\"/></svg>\n    </a>\n\n  </div> -->\n\n<!-- Next Steps -->\n<!-- <h2>Next Steps</h2>\n  <p>What do you want to do next with your app?</p>\n\n  <input type=\"hidden\" #selection>\n\n  <div class=\"card-container\">\n    <div class=\"card card-small\" (click)=\"selection.value = 'component'\" tabindex=\"0\">\n        <svg class=\"material-icons\" xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z\"/></svg>\n\n      <span>New Component</span>\n    </div>\n\n    <div class=\"card card-small\" (click)=\"selection.value = 'material'\" tabindex=\"0\">\n        <svg class=\"material-icons\" xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z\"/></svg>\n\n      <span>Angular Material</span>\n    </div>\n\n    <div class=\"card card-small\" (click)=\"selection.value = 'dependency'\" tabindex=\"0\">\n      <svg class=\"material-icons\" xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z\"/></svg>\n\n      <span>Add Dependency</span>\n    </div>\n\n    <div class=\"card card-small\" (click)=\"selection.value = 'test'\" tabindex=\"0\">\n      <svg class=\"material-icons\" xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z\"/></svg>\n\n      <span>Run and Watch Tests</span>\n    </div>\n\n    <div class=\"card card-small\" (click)=\"selection.value = 'build'\" tabindex=\"0\">\n      <svg class=\"material-icons\" xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z\"/></svg>\n\n      <span>Build for Production</span>\n    </div>\n  </div>\n -->\n<!-- Terminal -->\n<!-- <div class=\"terminal\" [ngSwitch]=\"selection.value\">\n      <pre *ngSwitchDefault>ng generate component xyz</pre>\n      <pre *ngSwitchCase=\"'material'\">ng add @angular/material</pre>\n      <pre *ngSwitchCase=\"'dependency'\">ng add _____</pre>\n      <pre *ngSwitchCase=\"'test'\">ng test</pre>\n      <pre *ngSwitchCase=\"'build'\">ng build --prod</pre>\n  </div> -->\n\n<!-- Links -->\n<!-- <div class=\"card-container\">\n    <a class=\"circle-link\" title=\"Animations\" href=\"https://angular.io/guide/animations\" target=\"_blank\" rel=\"noopener\">\n      <svg id=\"Group_20\" data-name=\"Group 20\" xmlns=\"http://www.w3.org/2000/svg\" width=\"21.813\" height=\"23.453\" viewBox=\"0 0 21.813 23.453\">\n        <path id=\"Path_15\" data-name=\"Path 15\" d=\"M4099.584,972.736h0l-10.882,3.9,1.637,14.4,9.245,5.153,9.245-5.153,1.686-14.4Z\" transform=\"translate(-4088.702 -972.736)\" fill=\"#ffa726\"/>\n        <path id=\"Path_16\" data-name=\"Path 16\" d=\"M4181.516,972.736v23.453l9.245-5.153,1.686-14.4Z\" transform=\"translate(-4170.633 -972.736)\" fill=\"#fb8c00\"/>\n        <path id=\"Path_17\" data-name=\"Path 17\" d=\"M4137.529,1076.127l-7.7-3.723,4.417-2.721,7.753,3.723Z\" transform=\"translate(-4125.003 -1058.315)\" fill=\"#ffe0b2\"/>\n        <path id=\"Path_18\" data-name=\"Path 18\" d=\"M4137.529,1051.705l-7.7-3.723,4.417-2.721,7.753,3.723Z\" transform=\"translate(-4125.003 -1036.757)\" fill=\"#fff3e0\"/>\n        <path id=\"Path_19\" data-name=\"Path 19\" d=\"M4137.529,1027.283l-7.7-3.723,4.417-2.721,7.753,3.723Z\" transform=\"translate(-4125.003 -1015.199)\" fill=\"#fff\"/>\n      </svg>\n    </a> -->\n\n<!-- <a class=\"circle-link\" title=\"CLI\" href=\"https://cli.angular.io/\" target=\"_blank\" rel=\"noopener\">\n      <svg alt=\"Angular CLI Logo\" xmlns=\"http://www.w3.org/2000/svg\" width=\"21.762\" height=\"23.447\" viewBox=\"0 0 21.762 23.447\">\n        <g id=\"Group_21\" data-name=\"Group 21\" transform=\"translate(0)\">\n          <path id=\"Path_20\" data-name=\"Path 20\" d=\"M2660.313,313.618h0l-10.833,3.9,1.637,14.4,9.2,5.152,9.244-5.152,1.685-14.4Z\" transform=\"translate(-2649.48 -313.618)\" fill=\"#37474f\"/>\n          <path id=\"Path_21\" data-name=\"Path 21\" d=\"M2741.883,313.618v23.447l9.244-5.152,1.685-14.4Z\" transform=\"translate(-2731.05 -313.618)\" fill=\"#263238\"/>\n          <path id=\"Path_22\" data-name=\"Path 22\" d=\"M2692.293,379.169h11.724V368.618h-11.724Zm11.159-.6h-10.608v-9.345h10.621v9.345Z\" transform=\"translate(-2687.274 -362.17)\" fill=\"#fff\"/>\n          <path id=\"Path_23\" data-name=\"Path 23\" d=\"M2709.331,393.688l.4.416,2.265-2.28-2.294-2.294-.4.4,1.893,1.893Z\" transform=\"translate(-2702.289 -380.631)\" fill=\"#fff\"/>\n          <rect id=\"Rectangle_12\" data-name=\"Rectangle 12\" width=\"3.517\" height=\"0.469\" transform=\"translate(9.709 13.744)\" fill=\"#fff\"/>\n        </g>\n      </svg>\n    </a> -->\n<!-- \n    <a class=\"circle-link\" title=\"Augury\" href=\"https://augury.rangle.io/\" target=\"_blank\" rel=\"noopener\">\n      <svg alt=\"Angular Augury Logo\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" width=\"21.81\" height=\"23.447\" viewBox=\"0 0 21.81 23.447\">\n        <defs>\n          <clipPath id=\"clip-path\">\n            <rect id=\"Rectangle_13\" data-name=\"Rectangle 13\" width=\"10.338\" height=\"10.27\" fill=\"none\"/>\n          </clipPath>\n        </defs>\n        <g id=\"Group_25\" data-name=\"Group 25\" transform=\"translate(0)\">\n          <path id=\"Path_24\" data-name=\"Path 24\" d=\"M3780.155,311.417h0l-10.881,3.9,1.637,14.4,9.244,5.152,9.244-5.152,1.685-14.4Z\" transform=\"translate(-3769.274 -311.417)\" fill=\"#4a3493\"/>\n          <path id=\"Path_25\" data-name=\"Path 25\" d=\"M3862.088,311.417v23.447l9.244-5.152,1.685-14.4Z\" transform=\"translate(-3851.207 -311.417)\" fill=\"#311b92\"/>\n          <g id=\"Group_24\" data-name=\"Group 24\" transform=\"translate(6.194 6.73)\" opacity=\"0.5\">\n            <g id=\"Group_23\" data-name=\"Group 23\" transform=\"translate(0 0)\">\n              <g id=\"Group_22\" data-name=\"Group 22\" clip-path=\"url(#clip-path)\">\n                <path id=\"Path_26\" data-name=\"Path 26\" d=\"M3832.4,373.252a5.168,5.168,0,1,1-5.828-4.383,5.216,5.216,0,0,1,2.574.3,3.017,3.017,0,1,0,3.252,4.086Z\" transform=\"translate(-3822.107 -368.821)\" fill=\"#fff\"/>\n              </g>\n            </g>\n          </g>\n          <path id=\"Path_27\" data-name=\"Path 27\" d=\"M3830.582,370.848a5.162,5.162,0,1,1-3.254-4.086,3.017,3.017,0,1,0,3.252,4.086Z\" transform=\"translate(-3814.311 -359.969)\" fill=\"#fff\"/>\n        </g>\n      </svg>\n    </a> -->\n\n<!-- <a class=\"circle-link\" title=\"Protractor\" href=\"https://www.protractortest.org/\" target=\"_blank\" rel=\"noopener\">\n      <svg alt=\"Angular Protractor Logo\" xmlns=\"http://www.w3.org/2000/svg\" width=\"21.81\" height=\"23.447\" viewBox=\"0 0 21.81 23.447\">\n        <g id=\"Group_26\" data-name=\"Group 26\" transform=\"translate(0)\">\n          <path id=\"Path_28\" data-name=\"Path 28\" d=\"M4620.155,311.417h0l-10.881,3.9,1.637,14.4,9.244,5.152,9.244-5.152,1.685-14.4Z\" transform=\"translate(-4609.274 -311.417)\" fill=\"#e13439\"/>\n          <path id=\"Path_29\" data-name=\"Path 29\" d=\"M4702.088,311.417v23.447l9.244-5.152,1.685-14.4Z\" transform=\"translate(-4691.207 -311.417)\" fill=\"#b52f32\"/>\n          <path id=\"Path_30\" data-name=\"Path 30\" d=\"M4651.044,369.58v-.421h1.483a7.6,7.6,0,0,0-2.106-5.052l-1.123,1.123-.3-.3,1.122-1.121a7.588,7.588,0,0,0-4.946-2.055v1.482h-.421v-1.485a7.589,7.589,0,0,0-5.051,2.058l1.122,1.121-.3.3-1.123-1.123a7.591,7.591,0,0,0-2.106,5.052h1.482v.421h-1.489v1.734h15.241V369.58Zm-10.966-.263a4.835,4.835,0,0,1,9.67,0Z\" transform=\"translate(-4634.008 -355.852)\" fill=\"#fff\"/>\n        </g>\n      </svg>\n    </a> -->\n\n<!-- <a class=\"circle-link\" title=\"Find a Local Meetup\" href=\"https://www.meetup.com/find/?keywords=angular\" target=\"_blank\" rel=\"noopener\">\n      <svg alt=\"Meetup Logo\" xmlns=\"http://www.w3.org/2000/svg\" width=\"24.607\" height=\"23.447\" viewBox=\"0 0 24.607 23.447\">\n        <path id=\"logo--mSwarm\" d=\"M21.221,14.95A4.393,4.393,0,0,1,17.6,19.281a4.452,4.452,0,0,1-.8.069c-.09,0-.125.035-.154.117a2.939,2.939,0,0,1-2.506,2.091,2.868,2.868,0,0,1-2.248-.624.168.168,0,0,0-.245-.005,3.926,3.926,0,0,1-2.589.741,4.015,4.015,0,0,1-3.7-3.347,2.7,2.7,0,0,1-.043-.38c0-.106-.042-.146-.143-.166a3.524,3.524,0,0,1-1.516-.69A3.623,3.623,0,0,1,2.23,14.557a3.66,3.66,0,0,1,1.077-3.085.138.138,0,0,0,.026-.2,3.348,3.348,0,0,1-.451-1.821,3.46,3.46,0,0,1,2.749-3.28.44.44,0,0,0,.355-.281,5.072,5.072,0,0,1,3.863-3,5.028,5.028,0,0,1,3.555.666.31.31,0,0,0,.271.03A4.5,4.5,0,0,1,18.3,4.7a4.4,4.4,0,0,1,1.334,2.751,3.658,3.658,0,0,1,.022.706.131.131,0,0,0,.1.157,2.432,2.432,0,0,1,1.574,1.645,2.464,2.464,0,0,1-.7,2.616c-.065.064-.051.1-.014.166A4.321,4.321,0,0,1,21.221,14.95ZM13.4,14.607a2.09,2.09,0,0,0,1.409,1.982,4.7,4.7,0,0,0,1.275.221,1.807,1.807,0,0,0,.9-.151.542.542,0,0,0,.321-.545.558.558,0,0,0-.359-.534,1.2,1.2,0,0,0-.254-.078c-.262-.047-.526-.086-.787-.138a.674.674,0,0,1-.617-.75,3.394,3.394,0,0,1,.218-1.109c.217-.658.509-1.286.79-1.918a15.609,15.609,0,0,0,.745-1.86,1.95,1.95,0,0,0,.06-1.073,1.286,1.286,0,0,0-1.051-1.033,1.977,1.977,0,0,0-1.521.2.339.339,0,0,1-.446-.042c-.1-.092-.2-.189-.307-.284a1.214,1.214,0,0,0-1.643-.061,7.563,7.563,0,0,1-.614.512A.588.588,0,0,1,10.883,8c-.215-.115-.437-.215-.659-.316a2.153,2.153,0,0,0-.695-.248A2.091,2.091,0,0,0,7.541,8.562a9.915,9.915,0,0,0-.405.986c-.559,1.545-1.015,3.123-1.487,4.7a1.528,1.528,0,0,0,.634,1.777,1.755,1.755,0,0,0,1.5.211,1.35,1.35,0,0,0,.824-.858c.543-1.281,1.032-2.584,1.55-3.875.142-.355.28-.712.432-1.064a.548.548,0,0,1,.851-.24.622.622,0,0,1,.185.539,2.161,2.161,0,0,1-.181.621c-.337.852-.68,1.7-1.018,2.552a2.564,2.564,0,0,0-.173.528.624.624,0,0,0,.333.71,1.073,1.073,0,0,0,.814.034,1.22,1.22,0,0,0,.657-.655q.758-1.488,1.511-2.978.35-.687.709-1.37a1.073,1.073,0,0,1,.357-.434.43.43,0,0,1,.463-.016.373.373,0,0,1,.153.387.7.7,0,0,1-.057.236c-.065.157-.127.316-.2.469-.42.883-.846,1.763-1.262,2.648A2.463,2.463,0,0,0,13.4,14.607Zm5.888,6.508a1.09,1.09,0,0,0-2.179.006,1.09,1.09,0,0,0,2.179-.006ZM1.028,12.139a1.038,1.038,0,1,0,.01-2.075,1.038,1.038,0,0,0-.01,2.075ZM13.782.528a1.027,1.027,0,1,0-.011,2.055A1.027,1.027,0,0,0,13.782.528ZM22.21,6.95a.882.882,0,0,0-1.763.011A.882.882,0,0,0,22.21,6.95ZM4.153,4.439a.785.785,0,1,0,.787-.78A.766.766,0,0,0,4.153,4.439Zm8.221,18.22a.676.676,0,1,0-.677.666A.671.671,0,0,0,12.374,22.658ZM22.872,12.2a.674.674,0,0,0-.665.665.656.656,0,0,0,.655.643.634.634,0,0,0,.655-.644A.654.654,0,0,0,22.872,12.2ZM7.171-.123A.546.546,0,0,0,6.613.43a.553.553,0,1,0,1.106,0A.539.539,0,0,0,7.171-.123ZM24.119,9.234a.507.507,0,0,0-.493.488.494.494,0,0,0,.494.494.48.48,0,0,0,.487-.483A.491.491,0,0,0,24.119,9.234Zm-19.454,9.7a.5.5,0,0,0-.488-.488.491.491,0,0,0-.487.5.483.483,0,0,0,.491.479A.49.49,0,0,0,4.665,18.936Z\" transform=\"translate(0 0.123)\" fill=\"#f64060\"/>\n      </svg>\n    </a>\n\n    <a class=\"circle-link\" title=\"Join the Conversation on Gitter\" href=\"https://gitter.im/angular/angular\" target=\"_blank\" rel=\"noopener\">\n      <svg alt=\"Gitter Logo\" xmlns=\"http://www.w3.org/2000/svg\" width=\"19.447\" height=\"19.447\" viewBox=\"0 0 19.447 19.447\">\n        <g id=\"Group_40\" data-name=\"Group 40\" transform=\"translate(-1612 -405)\">\n          <rect id=\"Rectangle_19\" data-name=\"Rectangle 19\" width=\"19.447\" height=\"19.447\" transform=\"translate(1612 405)\" fill=\"#e60257\"/>\n          <g id=\"gitter\" transform=\"translate(1617.795 408.636)\">\n            <g id=\"Group_33\" data-name=\"Group 33\" transform=\"translate(0 0)\">\n              <rect id=\"Rectangle_15\" data-name=\"Rectangle 15\" width=\"1.04\" height=\"9.601\" transform=\"translate(2.304 2.324)\" fill=\"#fff\"/>\n              <rect id=\"Rectangle_16\" data-name=\"Rectangle 16\" width=\"1.04\" height=\"9.601\" transform=\"translate(4.607 2.324)\" fill=\"#fff\"/>\n              <rect id=\"Rectangle_17\" data-name=\"Rectangle 17\" width=\"1.04\" height=\"4.648\" transform=\"translate(6.91 2.324)\" fill=\"#fff\"/>\n              <rect id=\"Rectangle_18\" data-name=\"Rectangle 18\" width=\"1.04\" height=\"6.971\" transform=\"translate(0 0)\" fill=\"#fff\"/>\n            </g>\n          </g>\n        </g>\n      </svg>\n    </a>\n  </div>\n -->\n<!-- Footer -->\n<!-- <footer>\n      Love Angular?&nbsp;\n      <a href=\"https://github.com/angular/angular\" target=\"_blank\" rel=\"noopener\"> Give our repo a star.\n        <div class=\"github-star-badge\">\n            <svg class=\"material-icons\" xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M0 0h24v24H0z\" fill=\"none\"/><path d=\"M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z\"/></svg>\n          Star\n        </div>\n      </a>\n      <a href=\"https://github.com/angular/angular\" target=\"_blank\" rel=\"noopener\">\n        <svg class=\"material-icons\" xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z\" fill=\"#1976d2\"/><path d=\"M0 0h24v24H0z\" fill=\"none\"/></svg>\n      </a>\n  </footer> -->\n\n<!-- <svg id=\"clouds\" alt=\"Gray Clouds Background\" xmlns=\"http://www.w3.org/2000/svg\" width=\"2611.084\" height=\"485.677\" viewBox=\"0 0 2611.084 485.677\">\n    <path id=\"Path_39\" data-name=\"Path 39\" d=\"M2379.709,863.793c10-93-77-171-168-149-52-114-225-105-264,15-75,3-140,59-152,133-30,2.83-66.725,9.829-93.5,26.25-26.771-16.421-63.5-23.42-93.5-26.25-12-74-77-130-152-133-39-120-212-129-264-15-54.084-13.075-106.753,9.173-138.488,48.9-31.734-39.726-84.4-61.974-138.487-48.9-52-114-225-105-264,15a162.027,162.027,0,0,0-103.147,43.044c-30.633-45.365-87.1-72.091-145.206-58.044-52-114-225-105-264,15-75,3-140,59-152,133-53,5-127,23-130,83-2,42,35,72,70,86,49,20,106,18,157,5a165.625,165.625,0,0,0,120,0c47,94,178,113,251,33,61.112,8.015,113.854-5.72,150.492-29.764a165.62,165.62,0,0,0,110.861-3.236c47,94,178,113,251,33,31.385,4.116,60.563,2.495,86.487-3.311,25.924,5.806,55.1,7.427,86.488,3.311,73,80,204,61,251-33a165.625,165.625,0,0,0,120,0c51,13,108,15,157-5a147.188,147.188,0,0,0,33.5-18.694,147.217,147.217,0,0,0,33.5,18.694c49,20,106,18,157,5a165.625,165.625,0,0,0,120,0c47,94,178,113,251,33C2446.709,1093.793,2554.709,922.793,2379.709,863.793Z\" transform=\"translate(142.69 -634.312)\" fill=\"#eee\"/>\n  </svg>\n\n</div> -->\n\n<!-- * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * -->\n<!-- * * * * * * * * * * * The content above * * * * * * * * * * * -->\n<!-- * * * * * * * * * * is only a placeholder * * * * * * * * * * -->\n<!-- * * * * * * * * * * and can be replaced. * * * * * * * * * * * -->\n<!-- * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * -->\n<!-- * * * * * * * * * * End of Placeholder * * * * * * * * * * * -->\n<!-- * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * -->\n\n<app-nav></app-nav>\n<router-outlet></router-outlet>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section id=\"lo\" style=\"display: flex;padding:15% 0\" *ngIf=\"this.show===false\">\n    \n        <h1 style=\"color: white;font-size:520%;text-align:center;width:100%\">\n            Decryption And Encryption System\n        </h1>\n\n    <section style=\"position:absolute;bottom: 10%;width: 100%;\">\n        <div style=\"display: flex;justify-content: center;max-width: fit-content;margin: auto;\">\n            <a (click)=\"gotoEnc('encrypt')\"><button mat-button>\n                    <h1>Encrypt</h1>\n                </button></a>\n            <a (click)=\"gotoDec()\"><button mat-button id=\"kl\">\n                    <h1>Decrypt</h1>\n                </button></a>\n        </div>\n    </section>\n</section>\n<section style=\"display: flex;height: 88% \" *ngIf=\"this.show===true\">\n    <nav id=\"sideNav\" style=\"display: flex;flex-direction: column;\">\n        <button (click)=\"gotoEnc()\" id=\"mk\" mat-button>\n            <h1>Encrypt</h1>\n        </button>\n        <button (click)=\"gotoDec()\" id=\"pk\" mat-button>\n            <h1>Decrypt</h1>\n        </button>\n    </nav>\n    <section id=\"main\">\n        <section class=\"sectors\" id=\"encrypt\">\n            <div>\n                <a id=\"lo\" style=\"visibility: hidden;\">\n                    <button mat-button-raised (click)=\"koo()\">\n                        <h3> Downlolad</h3>\n                    </button>\n                </a>\n                <mat-card style=\"max-width: fit-content;margin:auto;\">\n                    <input style=\"display:none;\" type=\"file\" class=\"mat-button\" (change)=\"selectFile($event)\"\n                        #fileInput>\n\n                    <button mat-stroked-button color=\"accent\" (click)=\"fileInput.click()\">\n                        <mat-icon>note_add</mat-icon>\n                        <h3>Select a File to Encrypt</h3>\n                    </button>\n                    <form [formGroup]=\"keye\" validate>\n                        <mat-form-field appearance=\"outline\">\n                            <mat-label>input encryption key</mat-label>\n                            <input id=\"key\" type=\"text\" formControlName=\"key\" matInput>\n                        </mat-form-field>\n                    </form>\n\n                </mat-card><br><br>\n                <div style=\"display:flex; justify-content: center; align-items:center;\">\n                    <button style=\"max-width: fit-content;margin:auto;\" color=\"primary\" mat-raised-button\n                        (click)=\"ko()\">\n                        <mat-icon>lock</mat-icon>\n                        <h6 style=\"margin: 0px;\"> Encrypt</h6>\n                    </button>\n                </div>\n\n                <a id=\"lo\" style=\"visibility: hidden;\">\n                    <button mat-button-raised (click)=\"koo()\">\n                        <h3> Downlolad</h3>\n                    </button>\n                </a>\n            </div>\n        </section>\n        <section class=\"sectors\" id=\"decrypt\">\n            <div>\n                <mat-card style=\"max-width: fit-content;margin:auto;\">\n\n                    <input style=\"display:none;\" type=\"file\" class=\"mat-button\" (change)=\"selectFiles($event)\"\n                        #fileInputD>\n\n                    <button mat-stroked-button (click)=\"fileInputD.click()\" color=\"accent\">\n                        <h3>Select a File to Decrypt</h3>\n                    </button>\n                    <form [formGroup]=\"key\" validate>\n                        <mat-form-field appearance=\"outline\" color=\"accent\">\n                            <mat-label>input encryption key</mat-label>\n                            <input id=\"key\" formControlName=\"key\" type=\"text\" matInput>\n                        </mat-form-field>\n                    </form>\n                    <i style=\"color: red;\" *ngIf=\"this.a === true\">wrong key</i>\n                </mat-card>\n                <br>\n                <br>\n\n                <div style=\"display:flex; justify-content: center; align-items:center;\">\n                    <button style=\"max-width: fit-content;margin:auto;\" color=\"primary\" mat-raised-button\n                        (click)=\"dko()\">\n                        <mat-icon>lock_open</mat-icon>\n                        <h6 style=\"margin: 0px;\"> Decrypt</h6>\n                    </button>\n                </div>\n\n                <a id=\"low\" style=\"visibility: hidden;\">\n                    <button mat-button-raised (click)=\"dkoo()\">\n                        <h3> Downlolad</h3>\n                    </button>\n                </a>\n\n            </div>\n        </section>\n    </section>\n</section>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section>\n    <!-- <dialog> -->\n\n    <mat-card>\n        <mat-card-header>\n            <mat-card-title>Log In</mat-card-title>\n        </mat-card-header>\n        <mat-card-content>\n            <form [formGroup]=\"addressForm\" validate>\n            <!-- <mat-error *ngIf=\"err\">\n                <strong>{{err}}</strong>\n            </mat-error> -->\n\n        <div class=\"row\">\n            <div class=\"col\">\n                <mat-form-field class=\"full-width\">\n                    <input type=\"text\" matInput placeholder=\"Your email Please . . .\"\n                     formControlName=\"email\" />\n                    <mat-error *ngIf=\"addressForm.controls['email'].hasError('required')\">\n                        <strong>email is required</strong>\n                    </mat-error>\n                </mat-form-field>\n            </div>\n        </div>\n        <div class=\"row\">\n            <div class=\"col\">\n                <mat-form-field class=\"full-width\">\n                    <input type=\"password\" matInput placeholder=\"Password\"\n                     formControlName=\"pwd\" />\n                    <mat-error *ngIf=\"addressForm.controls['pwd'].hasError('required')\">\n                        <strong>Password </strong>\n                    </mat-error>\n                </mat-form-field>\n            </div>\n        </div>\n\n\n        <div style=\"display: flex\">\n            <div style=\"margin: 0 42px 0 0;\">\n                <mat-card-actions>\n                    <button mat-raised-button type=\"submit\" id=\"ppp\" (click)=\"goto()\">Create Account</button>\n                </mat-card-actions>\n            </div>\n            <div >\n                <mat-card-actions>\n                    <button mat-raised-button  id =\"bk\" color=\"primary\" type=\"submit\" (click)=\"onSubmit()\">Login</button>\n                </mat-card-actions>\n            </div>\n\n            <!-- </div> -->\n        </div>\n        \n    </form>\n</mat-card-content>\n\n    </mat-card>\n    <!-- </dialog> -->\n</section>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/nav/nav.component.html":
/*!******************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/nav/nav.component.html ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- <mat-toolbar-row>\n    <span>Second Line</span>\n    <span class=\"example-spacer\"></span>\n    <mat-icon class=\"example-icon\" aria-hidden=\"false\" aria-label=\"Example user verified icon\">verified_user</mat-icon>\n  </mat-toolbar-row>\n<mat-card><mat-card-header><h1>ARERTRRR</h1></mat-card-header></mat-card> -->\n<mat-toolbar color='accent'>\n\n  <img src=\"../../favicon.ico\">\n  <div class=\"spacer\"></div>\n  <div id=\"mo\">\n      <a routerLink=\"/home\"  class=\"links\"routerLinkActive=\"active\">\n          <div>Home</div>\n      </a>\n      <a routerLink=\"/login\" routerLinkActive=\"active\"  class=\"links\">\n          <div>Login</div>\n      </a>\n      <a routerLink=\"/register\" routerLinkActive=\"active\" class=\"links\">\n          <div> Sign Up </div>\n      </a>\n  </div>\n</mat-toolbar>\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/register/register.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/register/register.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<form [formGroup]=\"addressForm\" validate>\n  <mat-card class=\"shipping-card\" style=\"max-width: 50%;\">\n    <mat-card-header>\n      <mat-card-title>Personal Information</mat-card-title>\n    </mat-card-header>\n    <mat-card-content>\n\n      \n      <div>\n        <div class=\"col\">\n          <mat-form-field class=\"full-width\">\n            <input matInput placeholder=\"First name\" formControlName=\"firstName\">\n            <mat-error *ngIf=\"addressForm.controls['firstName'].hasError('required')\">\n              First name is <strong>required</strong>\n            </mat-error>\n          </mat-form-field>\n        </div>\n        <div class=\"col\">\n          <mat-form-field class=\"full-width\">\n            <input matInput placeholder=\"Last name\" formControlName=\"lastName\">\n            <mat-error *ngIf=\"addressForm.controls['lastName'].hasError('required')\">\n              Last name is <strong>required</strong>\n            </mat-error>\n          </mat-form-field>\n        </div>\n      </div>\n      <div>\n        <div class=\"col\">\n          <mat-form-field class=\"full-width\">\n            <input matInput placeholder=\"email\" type=\"email\" formControlName=\"email\">\n            <mat-error *ngIf=\"addressForm.controls['email'].hasError('required')\">\n              email is <strong>required</strong>\n            </mat-error>\n          </mat-form-field>\n        </div>\n        \n      </div>\n     \n      <div>\n               \n      </div>\n      <div>\n        <div class=\"col\">\n          <mat-form-field class=\"full-width\">\n            <input type=\"password\" matInput placeholder=\"Password\" formControlName=\"pwd\" />\n            <mat-error *ngIf=\"addressForm.controls['pwd'].hasError('required')\">\n              <strong>Password </strong>\n            </mat-error>\n          </mat-form-field>\n        </div>\n        <div class=\"col\">\n          <mat-form-field class=\"full-width\">\n            <input type=\"password\" matInput placeholder=\"Confirm Password\" \n            formControlName=\"cpwd\" />\n            <mat-error *ngIf=\"addressForm.controls['pwd'].hasError('required')\">\n              <strong>Password </strong>\n            </mat-error>\n          </mat-form-field>\n        </div>\n      </div>\n      <i *ngIf=\"this.lk === true\">verify your password</i>\n\n    </mat-card-content>\n    <mat-card-actions>\n      <button mat-raised-button color=\"primary\" type=\"submit\" (click)=\"onSubmit()\">Register</button>\n    </mat-card-actions>\n  </mat-card>\n</form>");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./register/register.component */ "./src/app/register/register.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");






// import { PayPremiumComponent } from "./pay-premium/pay-premium.component";
// import { UpdateMetricsComponent } from "./update-metrics/update-metrics.component";
// import { PremiumHistoryComponent } from "./premium-history/premium-history.component";
// import { AgriMtericsComponent } from "./agri-mterics/agri-mterics.component";
// import { PayAgricPremComponent } from './pay-agric-prem/pay-agric-prem.component';
// import { MakeClaimHistoryComponent } from "./make-claim-history/make-claim-history.component";
// import { MakeClaimsComponent } from "./make-claims/make-claims.component";
const routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] },
    { path: 'register', component: _register_register_component__WEBPACK_IMPORTED_MODULE_4__["RegisterComponent"] },
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"] },
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".mat-drawer-container{\r\n    height: 100%!important;\r\n}\r\n#spacer {\r\n    flex: 1 1 auto;\r\n}\r\n#uiop{\r\n    height:50px;\r\n    width: -webkit-fill-available;\r\n    width: -moz-available;\r\n    width: stretch;\r\nbackground-color: tomato; border: yellowgreen 2px solid; color: white;}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxzQkFBc0I7QUFDMUI7QUFDQTtJQUNJLGNBQWM7QUFDbEI7QUFDQTtJQUNJLFdBQVc7SUFDWCw2QkFBYztJQUFkLHFCQUFjO0lBQWQsY0FBYztBQUNsQix3QkFBd0IsRUFBRSw2QkFBNkIsRUFBRSxZQUFZLENBQUMiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYXQtZHJhd2VyLWNvbnRhaW5lcntcclxuICAgIGhlaWdodDogMTAwJSFpbXBvcnRhbnQ7XHJcbn1cclxuI3NwYWNlciB7XHJcbiAgICBmbGV4OiAxIDEgYXV0bztcclxufVxyXG4jdWlvcHtcclxuICAgIGhlaWdodDo1MHB4O1xyXG4gICAgd2lkdGg6IHN0cmV0Y2g7XHJcbmJhY2tncm91bmQtY29sb3I6IHRvbWF0bzsgYm9yZGVyOiB5ZWxsb3dncmVlbiAycHggc29saWQ7IGNvbG9yOiB3aGl0ZTt9Il19 */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _reg_log_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./reg-log.service */ "./src/app/reg-log.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");





let AppComponent = class AppComponent {
    constructor(document, r, s) {
        this.document = document;
        this.r = r;
        this.s = s;
        this.title = 'insureBata';
    }
    gotoreg() {
        this.r.navigateByUrl('/login');
    }
    ngOnInit() {
        this.chk();
    }
    chk() {
        if (this.s.u.fullName != null) {
            this.document.getElementById('v').innerHTML = 'Full name: ' + this.s.u.fullName;
            this.document.getElementById('b').style.display = 'none';
            this.document.getElementById('r').style.display = 'block';
            this.document.getElementById('u').innerHTML = 'Your ID: ' + this.s.u.id;
        }
    }
};
AppComponent.ctorParameters = () => [
    { type: Document, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"],] }] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _reg_log_service__WEBPACK_IMPORTED_MODULE_3__["RegLogService"] }
];
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"]))
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _nav_nav_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./nav/nav.component */ "./src/app/nav/nav.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/esm2015/toolbar.js");
/* harmony import */ var _angular_material_slider__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/slider */ "./node_modules/@angular/material/esm2015/slider.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm2015/button.js");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/sidenav */ "./node_modules/@angular/material/esm2015/sidenav.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm2015/icon.js");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/tabs */ "./node_modules/@angular/material/esm2015/tabs.js");
/* harmony import */ var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/button-toggle */ "./node_modules/@angular/material/esm2015/button-toggle.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/esm2015/core.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./register/register.component */ "./src/app/register/register.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");



// import { Angular4PaystackModule } from 'angular4-paystack';




// import { PortalComponent } from './portal/portal.component';














// import { PayPremiumComponent } from './pay-premium/pay-premium.component';
// import { PremiumHistoryComponent } from './premium-history/premium-history.component';
// import { MakeClaimsComponent } from './make-claims/make-claims.component';
// import { UpdateMetricsComponent } from './update-metrics/update-metrics.component';
// import { AgriMtericsComponent } from './agri-mterics/agri-mterics.component';
// import { PayAgricPremComponent } from './pay-agric-prem/pay-agric-prem.component';
// import { MakeClaimHistoryComponent } from './make-claim-history/make-claim-history.component';
let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
            _nav_nav_component__WEBPACK_IMPORTED_MODULE_5__["NavComponent"],
            _home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"],
            // PortalComponent,
            _register_register_component__WEBPACK_IMPORTED_MODULE_16__["RegisterComponent"],
            _login_login_component__WEBPACK_IMPORTED_MODULE_20__["LoginComponent"],
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_19__["HttpClientModule"],
            _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_10__["MatSidenavModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__["MatIconModule"],
            _angular_material_tabs__WEBPACK_IMPORTED_MODULE_12__["MatTabsModule"],
            // MatBadgeModule,
            // MatBottomSheetModule,
            _angular_material_button__WEBPACK_IMPORTED_MODULE_9__["MatButtonModule"],
            // MatButtonToggleModule,
            _angular_material__WEBPACK_IMPORTED_MODULE_17__["MatCardModule"],
            _angular_material_slider__WEBPACK_IMPORTED_MODULE_8__["MatSliderModule"],
            _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_13__["MatButtonToggleModule"],
            // MatCheckboxModule,
            // MatChipsModule,
            _angular_material__WEBPACK_IMPORTED_MODULE_17__["MatDatepickerModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_17__["MatNativeDateModule"],
            // MatInputModule,
            // MatListModule,
            // MatMenuModule,  
            // MatProgressBarModule,
            // MatProgressSpinnerModule,
            // MatRadioModule,
            _angular_material_core__WEBPACK_IMPORTED_MODULE_14__["MatRippleModule"],
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_7__["MatToolbarModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_15__["BrowserAnimationsModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_17__["MatInputModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_17__["MatSelectModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_17__["MatRadioModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_17__["MatCardModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_18__["ReactiveFormsModule"],
        ],
        // exports: [ MatButtonModule ],
        providers: [
            _angular_material__WEBPACK_IMPORTED_MODULE_17__["MatDatepickerModule"],
        ],
        // providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("section>button{\r\n    height: 200px;\r\n    width: 200px;\r\n    border: 3px solid;\r\n    box-sizing: border-box;\r\n    will-change: color, background;\r\n    transition: all .5s cubic-bezier(0.215, 0.610, 0.355, 1);\r\n    border-radius: 50%;\r\n    white-space: break-spaces;\r\n        /* border-radius: 20px; */\r\n    -webkit-animation: pep 10s infinite ;\r\n            animation: pep 10s infinite ;\r\n}\r\na>button:hover{\r\n    background: white;\r\n    color: blue;\r\n    border: blue 2px solid;\r\n}\r\na>button{\r\n    width: 200px;\r\n    background: blue;\r\n    color: white;\r\n    margin: 0 100px;\r\n    border-radius: 100px;\r\n    will-change: background,color;\r\n    transition: all .5s cubic-bezier(0.215, 0.610, 0.355, 1);\r\n    box-sizing: border-box;\r\n}\r\na>button#kl:hover{\r\n    background: blue;\r\n    color: white;\r\n}\r\na>button#kl{\r\n    background: white;\r\n    color: blue;\r\n    border: blue 2px solid;\r\n}\r\n@-webkit-keyframes pep{\r\n    from{\r\n        transform: translate(10px, 80px);\r\n    }\r\n    50%{\r\n        transform: translate(80px, 60px);\r\n        height: 170px;\r\n        width: 170px;\r\n    }\r\n    100%{\r\n        transform: translate(10px, 80px);\r\n    }\r\n}\r\n@keyframes pep{\r\n    from{\r\n        transform: translate(10px, 80px);\r\n    }\r\n    50%{\r\n        transform: translate(80px, 60px);\r\n        height: 170px;\r\n        width: 170px;\r\n    }\r\n    100%{\r\n        transform: translate(10px, 80px);\r\n    }\r\n}\r\n.col:hover{\r\n    background: white!important;\r\n    color: blue!important;\r\n}\r\n.colo:hover{\r\n    background: blue!important;\r\n    color: white!important;\r\n}\r\nnav#sideNav{\r\n    position: fixed;\r\n    height: 100%;\r\n    background: blue;\r\n}\r\nsection#main{\r\n    flex: 1;\r\n    padding-left: 6%;\r\n}\r\n.active{\r\n    background-color: #ccc;\r\n    color: blue;\r\n}\r\n.sectors{\r\n    display: block;\r\n    height: -webkit-fill-available;\r\n    height: -moz-available;\r\n    height: stretch;\r\n    background: #ccc;\r\n}\r\n#lo{\r\n    background-position: center;\r\n    background-size: cover!important;\r\n    background-repeat: no-repeat!important;\r\n    background: url(data:image/jpeg;base64,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);\r\n\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxhQUFhO0lBQ2IsWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixzQkFBc0I7SUFDdEIsOEJBQThCO0lBQzlCLHdEQUF3RDtJQUN4RCxrQkFBa0I7SUFDbEIseUJBQXlCO1FBQ3JCLHlCQUF5QjtJQUM3QixvQ0FBNEI7WUFBNUIsNEJBQTRCO0FBQ2hDO0FBQ0E7SUFDSSxpQkFBaUI7SUFDakIsV0FBVztJQUNYLHNCQUFzQjtBQUMxQjtBQUNBO0lBQ0ksWUFBWTtJQUNaLGdCQUFnQjtJQUNoQixZQUFZO0lBQ1osZUFBZTtJQUNmLG9CQUFvQjtJQUNwQiw2QkFBNkI7SUFDN0Isd0RBQXdEO0lBQ3hELHNCQUFzQjtBQUMxQjtBQUNBO0lBQ0ksZ0JBQWdCO0lBQ2hCLFlBQVk7QUFDaEI7QUFDQTtJQUNJLGlCQUFpQjtJQUNqQixXQUFXO0lBQ1gsc0JBQXNCO0FBQzFCO0FBQ0E7SUFDSTtRQUNJLGdDQUFnQztJQUNwQztJQUNBO1FBQ0ksZ0NBQWdDO1FBQ2hDLGFBQWE7UUFDYixZQUFZO0lBQ2hCO0lBQ0E7UUFDSSxnQ0FBZ0M7SUFDcEM7QUFDSjtBQVpBO0lBQ0k7UUFDSSxnQ0FBZ0M7SUFDcEM7SUFDQTtRQUNJLGdDQUFnQztRQUNoQyxhQUFhO1FBQ2IsWUFBWTtJQUNoQjtJQUNBO1FBQ0ksZ0NBQWdDO0lBQ3BDO0FBQ0o7QUFDQTtJQUNJLDJCQUEyQjtJQUMzQixxQkFBcUI7QUFDekI7QUFDQTtJQUNJLDBCQUEwQjtJQUMxQixzQkFBc0I7QUFDMUI7QUFDQTtJQUNJLGVBQWU7SUFDZixZQUFZO0lBQ1osZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSxPQUFPO0lBQ1AsZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSxzQkFBc0I7SUFDdEIsV0FBVztBQUNmO0FBQ0E7SUFDSSxjQUFjO0lBQ2QsOEJBQWU7SUFBZixzQkFBZTtJQUFmLGVBQWU7SUFDZixnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLDJCQUEyQjtJQUMzQixnQ0FBZ0M7SUFDaEMsc0NBQXNDO0lBQ3RDLGdsV0FBZ2xXOztBQUVwbFciLCJmaWxlIjoic3JjL2FwcC9ob21lL2hvbWUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbInNlY3Rpb24+YnV0dG9ue1xyXG4gICAgaGVpZ2h0OiAyMDBweDtcclxuICAgIHdpZHRoOiAyMDBweDtcclxuICAgIGJvcmRlcjogM3B4IHNvbGlkO1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIHdpbGwtY2hhbmdlOiBjb2xvciwgYmFja2dyb3VuZDtcclxuICAgIHRyYW5zaXRpb246IGFsbCAuNXMgY3ViaWMtYmV6aWVyKDAuMjE1LCAwLjYxMCwgMC4zNTUsIDEpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgd2hpdGUtc3BhY2U6IGJyZWFrLXNwYWNlcztcclxuICAgICAgICAvKiBib3JkZXItcmFkaXVzOiAyMHB4OyAqL1xyXG4gICAgYW5pbWF0aW9uOiBwZXAgMTBzIGluZmluaXRlIDtcclxufVxyXG5hPmJ1dHRvbjpob3ZlcntcclxuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gICAgY29sb3I6IGJsdWU7XHJcbiAgICBib3JkZXI6IGJsdWUgMnB4IHNvbGlkO1xyXG59XHJcbmE+YnV0dG9ue1xyXG4gICAgd2lkdGg6IDIwMHB4O1xyXG4gICAgYmFja2dyb3VuZDogYmx1ZTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIG1hcmdpbjogMCAxMDBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwMHB4O1xyXG4gICAgd2lsbC1jaGFuZ2U6IGJhY2tncm91bmQsY29sb3I7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgLjVzIGN1YmljLWJlemllcigwLjIxNSwgMC42MTAsIDAuMzU1LCAxKTtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbn1cclxuYT5idXR0b24ja2w6aG92ZXJ7XHJcbiAgICBiYWNrZ3JvdW5kOiBibHVlO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG59XHJcbmE+YnV0dG9uI2tse1xyXG4gICAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgICBjb2xvcjogYmx1ZTtcclxuICAgIGJvcmRlcjogYmx1ZSAycHggc29saWQ7XHJcbn1cclxuQGtleWZyYW1lcyBwZXB7XHJcbiAgICBmcm9te1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDEwcHgsIDgwcHgpO1xyXG4gICAgfVxyXG4gICAgNTAle1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDgwcHgsIDYwcHgpO1xyXG4gICAgICAgIGhlaWdodDogMTcwcHg7XHJcbiAgICAgICAgd2lkdGg6IDE3MHB4O1xyXG4gICAgfVxyXG4gICAgMTAwJXtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgxMHB4LCA4MHB4KTtcclxuICAgIH1cclxufVxyXG4uY29sOmhvdmVye1xyXG4gICAgYmFja2dyb3VuZDogd2hpdGUhaW1wb3J0YW50O1xyXG4gICAgY29sb3I6IGJsdWUhaW1wb3J0YW50O1xyXG59XHJcbi5jb2xvOmhvdmVye1xyXG4gICAgYmFja2dyb3VuZDogYmx1ZSFpbXBvcnRhbnQ7XHJcbiAgICBjb2xvcjogd2hpdGUhaW1wb3J0YW50O1xyXG59XHJcbm5hdiNzaWRlTmF2e1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgYmFja2dyb3VuZDogYmx1ZTtcclxufVxyXG5zZWN0aW9uI21haW57XHJcbiAgICBmbGV4OiAxO1xyXG4gICAgcGFkZGluZy1sZWZ0OiA2JTtcclxufVxyXG4uYWN0aXZle1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2NjYztcclxuICAgIGNvbG9yOiBibHVlO1xyXG59XHJcbi5zZWN0b3Jze1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBoZWlnaHQ6IHN0cmV0Y2g7XHJcbiAgICBiYWNrZ3JvdW5kOiAjY2NjO1xyXG59XHJcbiNsb3tcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXIhaW1wb3J0YW50O1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdCFpbXBvcnRhbnQ7XHJcbiAgICBiYWNrZ3JvdW5kOiB1cmwoZGF0YTppbWFnZS9qcGVnO2Jhc2U2NCwvOWovNEFBUVNrWkpSZ0FCQVFBQUFRQUJBQUQvMndDRUFBb0hDQlVXRlJnV0ZoVVpHQmdZSEJnWUdCd1pHUmdhR0JvY0dCb1pHaGtZR0JrY0lTNGxIQjRySHhrYUpqZ21LeTh4TlRVMUdpUTdRRHMwUHk0ME5URUJEQXdNRUE4UUh4SVNIelFySlNzeE5EWTJORFEwTkRRME5EUXhORFEwTVRRME5EUTBORFEwTkRRME5EUTBORFEwTkRRME5EUTBORFEwTkRRME5EUTBOUC9BQUJFSUFKTUJWd01CSWdBQ0VRRURFUUgveEFBY0FBQUJCUUVCQVFBQUFBQUFBQUFBQUFBRUFBSURCUVlCQndqL3hBQkFFQUFDQUFRRUF3VUdCQVVDQlFVQUFBQUJBZ0FEQkJFU0lURkJCVkZoQmhNaWNZRXlRbEtSb2JGaXdkSHdCeFJ5a3VHeXdoVWpNNEtpUTFPRDB2SC94QUFhQVFBREFRRUJBUUFBQUFBQUFBQUFBQUFBQVFJREJBVUcvOFFBS1JFQUFnSUNBd0FCQXdJSEFBQUFBQUFBQUFFQ0VSSWhBekZCVVNJeVlST1JCRE54Z2FIQjhmL2FBQXdEQVFBQ0VRTVJBRDhBeFdHSUppeFlQSllhcWZrWUVtckhyMGVXbUM0SWdjWndZUkVCVzVoVWFKbkpVdUowU0pVbDVROVVpS0N4b1cwRHpWdmZPd0daUElmbnl0dkJyS2NoYk0ydDF2cEZYWHpmZFUzQTMrSTgvTFlkUE13cUduYm9FcXA5OGhrbzBIWDRtNXQ5dG9qd1lzeHI3My8yL1dHV2pWOEZvbFZReWtNV0dadDgxQWlWQzJhVDVGeHhCT3pkQXJ0aGYzcldHeHo5cm5rZnVZOSs0VlJpWEtSRkZncWdmckhqQTRlS2QxbnVjcmhrWHI4SjUrWEtQVytCY2VTZkxWaGtMZkxvZW9qSGtUcWtUR1NieXZzdEdRRFV4NVIyMjRwSm16WHVyTUVzQmJUcmJNZkY5STNIRytOSi93Qk5NeTExUHl1STg2cmVDUGljV05pV3NUa0NEY2pNOHNaK1VaeGpYWnE1SjlGRFN6NmZ2RU9CeDRsMzVtM3hRWHhXbGt0T1VpWlkrREpobDdSM3krOE00ZHcxbG5JVGh5ZGNzYUhmbGVOVHgvczlJZHc1bWQyNEhoWEQ0WENrblhtVGxyRitOR2JhVWt6ejZwbzNYTWk2alFxY1F0OXdJc3VBdGN1VzFzQURsaXpPZjlReUVRMDFEUFJPOFFIQmlLbTJZdUFDYnJ5dHYwZyttcEZta0cyQjliajJUejhqKzg0ejYyelIxSk5KbktzMjEwNS9wOHhFU1V0MEQ3RytYVFl3emlXUEdKYml4SkNubG1ia2c5TG14SCtJdFpNcTFnUFowSHBzWUt2WkdUaFNLb1NGaExTcVNCRm5VMGxzd01vb3FtcUtONVJtZENkcXpRTFRLQmFHdEtpbVRqT1dzZFBHZ040S0FPcmxzcDZ4UXZSM2gwN2pHSXdrcnhEU0FHYWhpSnFJeFpyVktZZUpxbUFDbGFrTU1hblBLTDN3eEc2ckFVVVprbU9kM0YwWlFocHB4Q0FxTU1NWVJibWw2UkUxTEFCVllZNWhpeGFsaU0wOEZCWUdCRDFpWXlURGU3TUtnc1pDaHhsbUYzWmdHTmhBeDBwSExRQUtGSFZoUXFBK2huNFJmYUtmaVBBaVFjaDZ4c21yRml2cktwQ0RIZkdVamdrb25rM0Z1RU5MdVJwRlhUU3JuT05weDl3ZjN6akwwdHNYckhTcnhNYjhDMXBoYkxLQm1TTGF3QWl1bXJzTlNiRDFpVWlySUo4OFljOVd1QjVhTXdQdWs2Y3RkSXBLaVVmVDk2all3ZFdOaWJMUVpMNURUNTYrWk1jcGxKT0cxOHNobGZ5RjlmS0NpNHVsYksrVEl2R3A0TGFRdU45RDdLL1lqcVJIT0RjSGFhNUtvY0NtN1h5ejJVL3ZuQk5mUXpXWWtJU3E2VzJITzM3MGlHOTBOL1V0aFZRQk5CeEc0YlMyM0lpTGJzOVVFREF3dGJ3bXdzRGJRanpCSGxHYm9aaklEaUl3QWdYdjd6Ykx6M0o4dm5lMThwSmFKTlZydUNMV3o3eFd0ZFJiYmUvNnc1UnlWL0J6UmxoTEYrbWlOTWdiR1RhMjk3YWFHKzBVbkZ1Snl5K1RCdFZhMmVXeHY4NHpYRStOVHBsdzF3b3pWUnBZYTM1bmY1eFR6dUlBSEkzR1gxMlBVUmpOSjlIUnd4bEcyMzJYTTl3cjRnTFdJUDV4ZWNUNDJrMTBzcEZ0YjIzSUl0YU1mT3JITmlGSnhMWTN5MzE5VDlvalNyczZnL2c2KzZPVVpOYW8zcmFaWnlwN280Wkd0bmUyeDJ6QnkwalFKUGx1b2JBb2YzaU1nYjh4dGZQT01TYTRjNElXdHNnenpZbjVEVWZRZk9KYWZSU1N1L1N6NG1GY21YTTE5MXQxUDVpSDBMRlc3cC9hWGY0dXQ5K1hwRmNsZWpxY1JzUjdMZGZ6Ry9US0k2S3JEZ0lUNGg3RGY3VENxaE5aZG1xbm9NTVl2akZQY20wSFQrSmtpMTdIUStrQlRwdDk0bXRseDBpZ2VVUkVMSVl1V1ZUREJJRUZEeUtqQ1lRdkZzMUtJWTFLSVZEc3JnNWg2elRCUnBZdkU3T1Mvd0NWU2Naamg1aGNXd0RBdUJzTnM4Mk85d2JaMjJnZWlrbkowalBDcE1MK1pNRTFQRG1TMTh3ZEdHaC96MGdacWN3QTlhWTlhc3hNbFpBWmxHT1lEQUJaTFZDRWFrUlhXTU5ONFZCWlltY0lhSHViRE9BRVZpYkFYaTNvYUpnTG5Jd1VBNlRSRTZrRDd3VTlLb0dRam9CWGFHVGFqTFBLR0t3V2RJQWdWbEVLcHJSb00vdEFmZndnUVNVaGhsUkdzK0hDZkFNUmt3bzZKMEtBWjZmVWRxbk9peFhUKzBNMDZXSDFnSnBjUXpKY2UzaEg0UEd5WkRWMXp1ZkUzeTBqdE5MaGlTb05wMHRBME93cFUyZ2FwdytJZzJzTEMrbDJ5MThyL0tEUURyeUJQNmZsRlBXK3ovVXhQeXlIM2FNMGlyOEFubGthK2gyOURCbkNhSHZaaXJvTlQ1UUZLRFlnbzNJSFEzNWlOeHd1bFFPdmhBSnNMakxJZjRoU1doeW1vdEkyTk5USWtwVUF5STEzOHp6Z0t2dEtVaTJURUFrYTNPUVVkWW1TbzhldHd1MjkrVnZQN1JYOFhtZDhHdmNCZkNuOVIxWWpld0Ira2NpaTh0bXprc2JSbnVNVXlPdU9XVktvRGtQWlB4UC9BRkU3ZElvZ3hmd2x0QWNJT210N0RsQlZSS2RDVXVMTm1jTjh4Zks0NTVhL1V4Qzdxb3lqZFJiSTB2Q3VmSTM1YVpRWnd6Z1V5ZTZZUUpTT1NvZHI2Z0ZpQTlzc2djaDlZdHV6M0RGbWxwczA0SkVvWW5ZNzI5MFJjVkhGUlVnSW9DU2xQZ1FXR21qTnpQNitzWnkrRWF4ZEsyVmg3SjhQVC9xVk15YTIvZGpLL1ZzeDlZclU0UFFGNWdhYk5sZ01PNllvVzhPRmJsd3U0ZkZwYkswYnJnUFpkcDNpWTRVMHZhK0xtRkg1eGR6L0FPSDFLeTJEVEFlZUpUOU1NYzdrbHBzMVNrOXBIai9FK3lzMVVhYkttUzZxVW91em93eG9CcVczRnV0d0xSblp6azJzcElDNEFOd3h5QlljL3dERWIzdFoyUm5VZUp3eGFVNEtGMHV0dzJXQ1lvT1Y5TndmcEFQY3k2OVMwdEZsVmFLY1NKa2s5UU15ZzJlMnErc0hsbEovSmptVWl3dmtQcWR6KzlnSWRjMkZzaXU4RnJJenduTG5mYTJ0NEhtcEJRcnNkV3ppNkNZTmZaZityWStvZ0FUMklKenNOVHNMNlg1Uk5SdU1SUSt5NHdub2ZkUHorOFRVeVhWa1lXSzNCNTJ2bWVnek9ZSHVpN0FSQm9rQkxVR0pFcWpBNVFnMk9veU1jSWdBTi9uSWV0WEZlcXhNaVFCUVovTkNOdjJWcVVxcVpxTzRXZEtMekpQNDBiTjFINGxhNXR5Ym9ZOC9DUk5UNDBaWFJpcnFReXNwc1ZJMElNS2h4bFR0RjFWekhsTVVjWkE1cXd5K1VNZVRMbVp5eUFkMEozL0NUOWpHaXBxdVJ4RWQzT0FsMWR2Q3d5U2NSL3BmcG9kdVF5WEZ1RXphZHlHQkZqckNhYU5HMUxZMTVZQklJc1JxRGtSRVJRUTVlSUJ3Rm1nbTJRY2UyT25VZEQ5SWpla2ZWUEd2eExsNkZUbUQ4NERPam9RUWxrQXdIMzVHWExYbkNXcU1BelFVTktvRVdFdFFJek1qaW1HRFArUEMyUzNQV0dTWEZRVnNjdm5HYnIzdWRiL1lRcC9FWGZVMkhJUVBqRURZSkE1bHh3cEJCTU5oRkVGb1JpZkREU2tBRVFNS0pRa0tFRm03WXhETmFKWEE1eEcwdSs4ZlFVZUhrUnloQkNtR3k1ZG9VNTdSRWtVbUVtWjRXdHNBUDM4b2dsMGdjTmUvZ1JiVzVzUzMyTVJTbXVqbnFQemdsSjB4Y1FWTVFJUUUySnRoWExNYWF4bTFRNU4xb3JxS1dETlFjaVQ4cm1ObHc4ZU05Qi9qN1JrUktOd1JlOXhwNXdkUVZ6cXN3NGliTHZuc1R2RXQ2RzRPVFROQkxyaWh4RFUzT2ZVNVFaVDFvbVg4TnNQeXo1ZktNWC94aGg3U0ErUnRvSU00ZjJqbEtyQWh3eHVSa0NOTWhjSG5GS01ic3huSGt4YVNBZUsxNnRPY20rRzVBdzIwR1FJK1Y0cVpsUVdiQ3VkellldlNCcGt6S0xQc1hUaVpXeVZPWURZei93Qm5pL0tJbkxGSGR4dzZRYjJ0YzB4U2xTWTlpaVBQUWtGQk10bGgzR1ZpUi9TWXF1RHU4eVlrcFNRenVpQWkrUmRndC9yQS9IS3N6cW1kTVB2dXhIOUlPRlAvQUJBaXk3RlpWMUxmL3dCNlgvcXRHRzFHelpwTjBlNGRvZUxKdytreHF0OElXWEtVbjJtSThOenJhd0pQa1k4bGw5djY4dmlNL2UrRUtvVWZoQzIwODd4dVA0dklUSnB4dDNqRS93Qmh0K2NlU3pVc2J4bHhjYWNjbVBrbTA4VWUxZGsrMFV2aU1sNUU5Vjd3TGFZbzlsMGJMR28xRzF4c2JSNUJ4cWllaHEzbGhpSGxPQ2o2RXFiTWovMmtYMnZjUmJkZ0t3cHhDbnRrSFprYnFybzJYOTFqNkNMWCtNOU9GcXBMalY1UlUvOEFZNXNmay8waU1jWlV2UzA4bzJ6TThYVXpaWXJMcWNidWt4VVhDSmJqTlJhNXZpWHhYNnhtcWh5WTBuWlI4YlRhVnZacUVJWHBOUUYwSTVYc3c5UkZBVXRpQkdlZ3p0WWpYemdyd1MrUUVwRnFjM1I5blVGdFBhWEk2ZzJ6QXp0dkF2Y3dXaWY4cnFqZytqZjVFSnhLVWdLdGxXYnp6MXZub2M3bjduV0JDc1cvRXBXUWJNOHljVitndVNiK3o4VVYrQ0pvcXhpQzBTS1JEU3NjN3VDZ0RKUUVUaFJhSzRKRHNaNW1BQXRaVE02cWdZdVNBb1c1WXR0aHRuZVBXdUg4SW0xRk1FcmduZldzclhCY2kyWGVXeXgrUno4NHlQOEFEMUZscFVWajVsTFNaVjltY1luSTY0Y0kvd0M0d1VuYUZtREV0dmZxSWFhWFpjWXZzeFBhSGhEMDAxa1lFV0p0MUVkN08xb1NaaGJOWEZySFMrdzZBN3h2dUpTMTRqU093SWFvcGlNZHJZbVZnY0pQOXJEMGp5OTBJTmp0RWRPMFV6U2NVb3BiT084SlVQbWt4YkRFb3l3c0xXdXVueWlzZmhJSktEd09Nd0dZRkhHMkZ0cjdIVHlpMzRHd3FaYlV6bnhueFNtUHV1QmxjOGpvZlBwQXRNNnNEVHo3b3lraEhQdFMyQnpCL0RmSWlHNjdKOE01TWtzckZXQlZocURrUkRiUmZ6Z1MzY1ZJc3dzRWZWbHZvUWZlUS91eGlxNGhRUEpmQTRzYlhCR2FzcDBaVHVEQ29BUzhMRVk2RmhXZ0E2R01PRFEwQ080RENBZDNrTEhEV1NPQVFBT3hRb2JhRkFCdnZTSkZRY283TFNDVlRJeDc3UG4wd053QnpnS2UvVXdaVUdLNlpBYW9scEh5WUVHMXdjaGZuMWpTY0xyMGxZd3djNHNKeVhrb0hPTXlpWFZ2TlQvcWd5Vnc1NWhPQlFiS2hPWUdxam41R01wSXFTaTFzT2trSTV4WHNMakpXNWpwMGd1Ulh5eWt6b003cjBNWjZ2bUZadGprUmd2NTRWSmlXZ2U0bXIrSDhpSXlla1hncE95M3BPRWlweGQxTEQyeEU2TGtDQWRTSWhtVVVreVhMSU1lRnlwenhYQytIUDBFV0g4UHVKT0p6UzBSWExLNUdKOEkxUTY0VHk1Um5lS2NVZEdLWVY5bGIzSk9aVVloNk5jZWtHY3NtcVFMaWpTMnpPVEZCVW5FQVJzYjNQbEZ6MklwbmVvSWx6VEtjS3hWd3FzY2xhNjRXeXNZb1hTTk4vRDA0YTFMNk1HWCs1U0I5NG5rVHBuWEZwVVppV3Q0OUgvaGR3U1ZObnNaeUJ3cUZrRGFCc1NqRmJuWXhscWZneEV4a0k5aDJYKzFpUHlqMWJzQlJkMjV5MVFqNnFZeTVkUWRCRjVUUnBaL1pxbGNXYVVDQm1CaWV3UE1ERmxGZFVkZ2FCOVpKSDlNeVlQOTBhbU1GL0VhZTZsUUdaVndGbHdranhYTnpsdVBEODQ0NE9VblNadk5SU3RvS2tmdzZvMG1KTWx0T2x1aHhJeXVHc1JvYk9yQStzVWY4VU96akduL0FKbDZpWk1hUVZBVjFsQVlaam9oc1VSYzc0VG5mUXh0T3lkVzgyamt2TXVYWmN5ZFdzeENzZk1BSDFqejd0dHhhY3kxTWhxMm1aQXhIZEJYRTRCWERLZ09HeFlXRnpmT3hoeHljOXZvVXFVZEhuVkZkWFJ3ekxoWlRpVTJZWmk1VTdHMTRzK09jTEV1b21JTGtLeEFMRzVJMkpPNXR2QUNDNGpXZHExdFZPYmZCL29XTjVMWmtub3l2Y1doOG1WNFpnNXBmKzBneGVjSmtTSExkOHdYUEt6WWRqb1BPMFduR2VDVXNxYUZTWWJQTEp6ZFRxb0p6dEV2dWd1dG5uN3lzZ2JuVWo1V3Q5NDUzVVdYRUtkVU9GR3hLZkZlNE9adUxaZVFnS0JvcU1yUU8wcU9La1RFeHd0RTBWWkd5UTFKUllnQVhKSUFITW5JRDV3NW5ob2VDaG5wUGEybkZOSWtVYUN5b2daeVBmZHMzWTlTWXcxZWNLNFJxMnZSZVhyRWJjV25GUXBtTVZHZ1kzdDBCT2NNcFpUVFhSQWZFN3FnT3B1N0JRZnJFWTdzMmZLc2NVajBQc2ZVcFIwY2htVVdxbmRweDN3QmpMUStRQXhlcDV4bGUyM0FESm5zUVBDeHVwR2xqeWpXZHZKaXE2VTZBQkpLS2lnYUFEYjVXaVBoYzlLNm5lbWJPYlRyaVJ2alFXQkhtcElIa1JFOTZMYVNpclBOYU4yUnd5bXhCalFjWnBoVXIvTVN4NDdEdlVHcElGc2FqZkxYeXZ6aXJxcE9CeXB5c1lkU1ZUSTRaVEF2Z3pZMUtnTW9TY3BkUjdERDIwdjhKM0hRNVJvdUdjT1dvbGQwNUV4Ri93Q20ranBmM1hHb0I1aS9ycEFzMlNrMWNRQURIVzJoUFViR0krR1ZMU0hCRndRY3hzUjFqU0tNWlRLempIWjU2Y2trRXBwZmRiNllyYkhaaGtlaHlpbmVSSHRhdEtub3VLeFZ4NFRsdnFNL2tRWXhuYWZzYmdSNXNuTlY4VHB5WDQwNkRjZkxsRnVDOEJTc3c4dVhuQlNTQVlISkcwZEZTUnBHVE5EczZUYUlRc2RtVkpPc1IyTVF3SHRhRkVKRUtBbzlVazAyVU9uSllIeWc5VkFFVjlXOXpZUjdsMno1K3FSVDFCZ01wbkZpOGt4eEpQT0tzcUxJcEV2SnY2Yi9BQ0lpMTRGTXM5dmlUNnEzNlFJQUFlbHJIMUZvaHA2cFpiSzltYkF4QkdRdUhXM1g0WXpsc3FTeVZBdmFPWGFjVHpBUDFJK3dFYzRheDd6b3kvZXpmYUp1SjEzZWpHRUNZV3NmZU5tR1J1UitBd0hLbTJaV0owSXY1SEkvU00ydEc4RzBsWmJkbGFreWFobVVMalFFTGU5ckVGR3VMNTZpTFNxUlhLekNpaG1MaGlGR3VJdi9BTHhHZlp1N3FReHlWaG55enlQMUFNYlB0V3lMSWxUNUNEQk1RT0FNbHhDeE45OFdGaWYvQUl6R01uOVMvSnNxVWIrUDlubmRiU0VUSFVEM2lRUFBNZlF3WndkR2x6a2ExaWpLZnNZUm5zN1l6cmxwbGEwRjBVcnhDMmhqZVMwWlpiTmlhRXROTTBwZ0UzeHFMaHNqdmNiazUyNnhxK3o2MmNEOExSWGNKSGV5QWg5dVhjcnpJM1dET0V6Z3MxYmtBWmpQTFVHMzFqaG03aTBkTUZVa3pWbU1OL0ZHb3RJUk4yWm05RkdIL2Y4QVNOb1o2L0V2OXdpdjRqS3BKbHUrN2w3YVl5aHQ1WE1jOEhpMDJkRTFrcVEzc3hYQ2ZTeVptVnlnREFhQmw4TGdEYnhLWXlQYkxnTlNWcVp1S21NckM3MjdsZStDZ1hObnczeFpITzhhK2xxS1NTdUJIa291WndxeUtMblUydnZBSGFiakZNYVNvWCtZbEV0S21LQUppRWtzaEFBQU55U1NJY1cxTFNFL3QyZU1jTHBnN29oeXhPcTU2WnNCbkdqNCtNZFJNWUM0eGtYMnN1UStnaXU3TFNFdE5uekZCU1VoQURDNnM3akNpOWJYSlBwRGtyTUlWbE5zem1PZkkrZ0VkVFd6QlBSemgzQXpPSk9WZ1NMRzR2bGZVZVlpenJPeXlTWnBSR0pHRWtISzNpWFBMb1NSNlFIMmY0ay84d2lMNzdxaEczaVlDOXVmbGFOWHhLc1diVVRpRDdHSlA3V3cvbEVOdTZFK3JSNTFXY093Tmh2ZklIbHovU0JHcFkxOVNpaVl4T3lNbzgyUmdQOEFWRmEwanBGRGk5R2RhbE1SUFR4b1hrd0hPa3dxSFpRUExNUk1oaTJtU1l0ZXlIRDVVMnB3elJpVkVlWUUybU1nQkNIcGE1dHZoaVdhSjI2TW9GZ3FreEl5dXBLc3BES1JrUVFiZ2c4d1kxSEdPSlkzTjBUTElEQWxnQm9CbEVNdWlSeGNMZ090MTB6NXIrbG9sTkdyNG5IMHJxeXRuVGMzY3VkeWJYUG1SckUvWjdpYjBrOFRWUlh5S01Hdm1qRVlzT2VUV0dSaVdmUk1tb3kySTBQckVYY3c5R2JidlpjOXN1RnF4RStWbWt3QjFJM0I1OGp0YnBHT0VzaU50MmZxcm8xTSthdGRwZC9kZmRSMGI3anJGRnhTaEtNYmkwUzFzdTdSWFV0VVV2dURxUDA2d1V0U2orRjhqczM2eFhPTFJBN3hVWFJoS0ZzdmVIOFJlbGZDOTJsTm1iYmZpWHI5NDMzRGEwV1U0Z3lON0xiRUhZOUQ5REhsY2l2eUNPTVM5ZHZLTkR3T3E3ZzRHYkhUVE1yalZEc1l1TWtHTEtqdHZ3RTBzODRSL3dBbVpkNVoyRi9hVHpYN0VkWXpKTWUwVlZFdFhKZW1tbTdxQTB0OXlQY2RlWkdoRzRKNXg0L1gwYnlYYVc0c3lHeEczUWptQ013ZXNaVGpUTll1d2U4RUtNb0dNSU1ZektKSEZvVVJFd29BUFpaemdSWE8rZVVFVkJQS0JWVzVqMjB0SGdYYk9OTHpockpCZ1RLQnBwaEoyYWRBTlEwQkVYSkh4RDZqTWZhM3JCYzRRSE5hMlkxQnVJdWhwZzhocmtwOFlJSDlROFMvTWkzL0FIUUlzN2JuRjl3dW5sc3ozWHhaTXVlaW5rT1lPVjRxT0pVdUZ6bGtmRVBVNWdlUnVQSzBadnMyakpOdGZBYk9mdkpLdjd5ZUZ2c2Z5TWFmczN4Qlp0RE1wV041a3Q4ZE9vQlpueFhKUlFMazN1Nm5rSHZ0R1M0VzltS043TDVIei96ZjdRZHdXZTlIVUxOR2lNY1g0ME9US3ZNMjlBYkdNSlJ2WHh0R3lhOTZlbVYwZytJZ0EyenZmSWdBNnR5NnhmOEFESnRpQXVaTy93Q1NqODlmS0ZQcHhVem5uWU82bHU1Y0lEbTEvZko2NW4xTnVjU0t5OTZBZ3lXd2EybHhwaDY3UldlcVpFb2VvMlBEQVZJWlNRVnRlMlkvZTBXMDJsN3pFNmdkVUd1bWJmT005UjFpMkFCdGI5NnhZSnhFS2JvM2k1RGZ5djhBYU9TY1hkbzNnMVd3V3VjV08xb3lsY2NiSHJwMEVhN2lIRVpVMUd4b1E5amhLbTEydGxqQnkxdHo5SXI1L0FaUlc0cVVVbTF3NjJ0dVZ6SWlvdXV4U1Z2UmhxMlVOYmN2OEQ1Q0krR2NLbVZENEpTM09yRTVLZytKbTJFYXVwNFBUcTZGcHhtcVdPTVMxd2tEQ1NDR0pJellLTFpaR0ErTjhXWlpaazA4bnVaSjFzQ1dmcTdiK1gzalRPM1NFb05LMlZ2Rk9KTDNNdW5scVVSQmllNUJMekQ3YkVqSWpZZFBPS3Q2Z29BUVFiaTUvUWlJcGlIZS9QNTUzaTY3UDhFN3dNenJjTUNxZzh0MjZjZ1lxU1VZaWpiWkYyZXBGbm1hU3dSWmN0NW1ZdTJKYkZVUTczenkxeVBuRjFRU2lKWllFM1pnTDUzeXp6M0djT3JxUmFPaFdTaHhQVlRNYnNCbXFTajRFSkh2WXMvN29mVFZBUW9yRStBREVWdG1UbWZJNlJoZDdOR3FZZFVVaWhDK01QZkNCcUdEWDk1ZHNsWVJXT01vTzRyWEsxZ0NHSXZkd0FDd3NMQTlSNHIra1ZFMnBGb1NCbkhnT2FzZG1WUWdaNmlHQ0lKNGdJVlRvNnVqRlhRaGxZYWdqUXdWT21SV3ptemlTMGJuL2hxVnlpcGxlSEltY2c5eDFGMkE2TWRPaHk2VEdsN3BCaTFJdjVSa096M0YzcHB1TkRjSEowUHN1dnd0K1IyamU4VnFVcXBYZXlUa0I0MFB0b2NzbUh6ejBNUzBhcVRmWlRKVUFnZ2k0TzBEenFUZE14eTNINndPNUs1SEk3eHlYVjIzaU5vZW4yZFVFRzR5SXpCM0JHaGkyNG5MNzJVczYxc1Z3dy9FdVJJNlJYbWNyNjVIbVB6NXdkVTFxR1ZMbHFiQkZJYTQ5b3N6TVdGdHJuNlEyeHhqUmthcExFeFhPSXRPSTVHS3N0RU1RMHBCTkpXc21XcW5VSFF4Q1lqYUJPZ3F6ZGNDNG9wQ3JqdGhONWJuV1dUcWpjME1IOXIrQS96a3J2WmEycUpZelg0MTF3QTdqVXFmTWI1ZWJTS2xrYTQ5UnpqY2RuTzFJVWdNY3RBVHF2UTgxamFNbEpVek54Y1hhUE4yV0hTWkpkZ28xTWVqOXNleXduM3FxVVhjK0tiTFgzK2N4T1o1amZYWEk0WGhNd0pNVXRvRFk5UE9NT1JPS1pyQnBsN1E5bUVzRE1KWW5ZWkFRbzBrdGdRQ0RjR0ZHYWphdS84QUpWczBsWlNkSXA1c214ajBGMEJHa1VIRmFVWjVSN0VPVzlIejhvVnN6YnRsQUUyRFppbkZhSVdrR040b25JQmRZRWVYRnFhWXc1NlhLS2JvcEZOSkxKbXZ0SmUzVlQ3UTlEbjZtRGFqaHpNbHkySnI0ZzIyWUYxVWRRQmx6VWM0a05QNzN3NmphM1hwdEJkSk5BOEcycUhRNGR3T1Z2eWlKZmdxMm5aVGlrVlZ6QkpGaVJ1T1dNalR5R2RvSXFFTTVNWHZwa1IwNUFjdjh3ZlV5VllZMHpHYWtBVzh5dDlBUnEzNkc0aUlVY01veU9WdVk1ZnB6eU1adjVPaUw4TG5zeHhlUXpHVlVMWU9oUXpMMndXenYrRy94YkVEWW1KT0hVaUlXYm1TVkpYRDRjN095KzZTTnRnZXBpdW4weXF2ZUlBYm01R291RHkrRUhYbVJ5RVRUZUpGbEdHNFk1dCtuVzhZdU52WHByZXQrQmFBRmlVdGgyc1I5am1JSkFJVTNzT3BJOGhrTStaaXRrNFcwc3JjdEZQOVBMeU1UVEdLK0U1SFUvdnkrOEtVUlJrRVhYWTUySnZibHJoSFB6Z1dxeUdFNUUySUY5TjdzZmlNUjk3YlEydHkvZm5BZFJOTzUvWWhZbEtTTEdpbExoNjUvUVhnR3V6L0FIOVlpbVRKc29CN1dWdEwyTjhyN0hMS0JIcjNjMkNxRDB2OUxtTVAwcFpXZEs1bzQwSWNJZHdYVmJxdVE2aS91OHdJMmZaT2xiQ2U5V3l5OElkaG9RZlpBUFBZMjg5NGo3SHlITXR5Vk9FRWVMWUU1TXYyTnZPOFQ5b3ByT3EwOG53S292WlQ3VEVlSXNkOVQ5L0s1U2N2cE1VMHZxS25pOGhaajQxOW1WZkNQak8zcnA4b3l6VDJ4SG1UbmZMUHJHamtWU2hTbC9ZR3Z4RWErb2lqbVN3K04ySUJ1dGwzTjcvSUFEWG1Semk0cWlFM2RNWlZ6UUdZSVNWQklCK0lETEY2NitzQXpacGd4cFVRekpNREtRQTB3dzB1WUtNbU9HVEdiTFFHeE1EVEVpek1tSW5rd2lpdlRLRDZEaUx5bkRveFZobDBJM0REUWpvWWg3cUpVcFdPeGhEN05JbGJLcWhoc0pjNDdlNDUvQVRvZnduMHZGSFYwN294REFpMFFOVGthaUw2ZzRtcnFKVlRtTkVtYXN2Ui9pWHJxT3V5YVRLVEtMdnlJWTlVZWNXM0dlRHNtYStKVG1HR1lJNWdqV0tVeW9ob3NpbnppWUVKZ3g1Y0R2TGlRR2hvYXhoMkdPTUlUQWdhR0s1QnVNb2thSVdnS0wvZy9hbWJJSXpKSEsvMmkzcko5RlczWnY4QWt6anE2Z1dZL2pUUnZNV1BXTU1ZNmpXaWxOOVBaTGo2alROd3Fza1p5MkRvZEdsc0NEeXVyV0loUkR3emlqQVljY2NnL1Rnd3laOUZMUmtMdGVLTGlVczNJSzJqVWd3SFhTRmJNNnhweDhqVXRuSHk4TVhIUmlIcEJyYUlYcHI3UmYxTXNBMmdGeUk3NHpiUE9jYVpXR2tpQ2ZLdEZ5VmdTZkx2RlpXV2xSUVRaZS83TU1TbkI4SjBPZCtSL3dBNkgwNVJaVFpPOXZLSVFsc3R2ejV3MjlGSmJHMFVzcVNEcFlnZ2oveE9XbjU4NGhxWk5qNGJsVHZ2bnFML0FCSDZEbnVhQWROOXVURGwra1FOT0NZc1F1RGtSejF1T2g2eG51elcwaXZTcFpIdUNDQ0JrTkNOckE2UVUxTXJqR25xdjcwaTY0dFNKSnAxbEtvZHBoV2ROYndrcVA4QTAwVWpUbGNiQnVjVkMwTXhWV2NCWlhZcXB2Y3RoMUpYVWpYTzIwU3BKcTEvMGJ0T21SU1Z6c2N1ZlMyc1Rtb080QkhJN2VSMUVFeTVxT3ZqRmljZ3crWi9MNXh4NkE2b3dZZnYwZ2IrU3F0QURObWJaRGxyQTA4UWU5SzQxVS9LL3dCb2dtMDdmQ2ZrZHN2MGd0QlJwSi9aeDU5UFQ0UXE0d2h1eldIL0FFeTF6WUVqSUhhS0RnaTAwbWRORlFwZnVpVlJVTnc3SXhCTEg0Y2dSbUJya1lPNGc4OTZhWExzY0lDclkzMFVaYW5wRmZKNGNxRHhzQnpBMThveVNkTk4vc1hhYlRTL2NzNnZqYzZiTkdBQkVUQ0ZSTWx3QytIRnp5WTdiNVFhN0FDeW05OVc1ZVVVOHg3cU1Bd0xvVHZsL2o3UncxSkNCRnlBeVBNaStuUzF4Q3hYZ1N1UUZYNFM1d2Y0SjNJaHRXNnNSaEhnVVlWQkZqdVN4NnNTVDAwMmg4NlZZOU52MGlOMTJPdS82UlEvd0RNSWhtQ0NYRUR6SVRLUU9ZNWFFN1F3dkVNcERqREdXRmlocnZFc3BNN0psZ21EMVVDS29UYlp3U2xjcDFCSGxHVWs3Tm95VkJFd3dDNEY0Zk5xUnRmMWdSbmh4VFJNbW1IMHRjNkRDcHVwMVZzMVBwdDVpMFRsWlV6OERjajdCUFJ0dlg1eFVxOFNZb2JFblJKVlViSVNDTFFFOHVMR1RYbFJoWVkxNUhVZjB0dDVhUklaVXR4NEdzZmhiSStoME1TNGxKbEt5UkM2UlkxRk1WTmlJRWRZaGpBSmdnZDRObXJBYmlFVVJHRmVFUkhDSUFFSGpzTmhRRFByZUE2Z3h5RkdzZXpqbjlwUVZweml2WTV3b1VlaERvOHlmM0VnMmhremIwaFFvWnBIb0dtYi92ZUFXRWRoUTBNYWRQS0JhclJUenZmcmEwS0ZGSVRMMm9RTExhd3RnWHc5TkI2K3NQN1hlR1pKUmNrV1VtRURRWW56L3dCSStVS0ZITS92WDl3L2gvNWN2NmxEc3Y3M01LWTVHaEloUW8wWnNnaVZVdnorZ2lkcHpXMTU3RGxISVVZczFYUkhWMURkeVBFZHRNdHp5Z0dtSDJQMmhRb2ZoS0pHY2tEUGw5ekVaMDg4NFVLQXNjMmc2WndDK2tLRkFNaW1RTk1oUW9UR2dWNGlNS0ZFRkNoalFvVUpqSVhob2hRb1RBZERHaFFvUlNPTEVpd29VSVkxbzRZVUtBQndudGExemJybjk0NFd2LzhBZ2hRb2xsSWM4b2NvcTU2QUhTRkNpV1hFRGVHR0ZDaUFRMkZDaFFEUC85az0pO1xyXG5cclxufSJdfQ== */");

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var crypto_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! crypto-js */ "./node_modules/crypto-js/index.js");
/* harmony import */ var crypto_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(crypto_js__WEBPACK_IMPORTED_MODULE_5__);






// const crypto:any = require('crypto');
let HomeComponent = class HomeComponent {
    constructor(d, r, fb) {
        this.d = d;
        this.r = r;
        this.fb = fb;
        this.fr = new FileReader();
        this.fer = new FileReader();
        this.a = false;
        this.keye = this.fb.group({ key: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required] });
        this.key = this.fb.group({ key: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required] });
        this.show = false;
    }
    ngOnInit() { }
    selectFile(event) {
        this.selectedFiles = event.target.files;
    }
    selectFiles(event) {
        this.selectedFile = event.target.files;
        console.info(this.selectedFile);
        console.info(event.target.files);
    }
    koo(r) {
        // let blob = new Blob([r], { type: 'application/octet-stream,' });
        // console.info(blob)
        // let url = window.URL.createObjectURL(blob);
        var a = this.d.getElementById('lo');
        a.setAttribute('href', 'data:application/octet-stream,' + r);
        a.setAttribute('download', 'encrypted');
        a.click();
    }
    dkoo(r) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            var h = r.toString();
            const sd = atob(r.slice(r.search(',') + 1));
            const byteNumbers = new Array(sd.length);
            for (let i = 0; i < sd.length; i++) {
                byteNumbers[i] = sd.charCodeAt(i);
            }
            const byteArray = new Uint8Array(byteNumbers);
            let blob = new Blob([byteArray]);
            let f = new File([blob], "momo", { type: h.slice(5, h.search(';')) });
            console.info(blob);
            var a = this.d.getElementById('low');
            // a.setAttribute('href',  'data:'+h.slice(5,h.search(';'))+','+ r); 
            // a.setAttribute('download', 'encrypted');
            // a.click();
            let url = window.URL.createObjectURL(f);
            var a = this.d.getElementById('low');
            a.setAttribute('href', url);
            a.setAttribute('download', "decrypted");
            a.click();
        });
    }
    ko() {
        var f = this.selectedFiles;
        // console.info(f.item(0))
        this.fr.onloadend = (e) => {
            let password = 'disPasswordIsSoSec§ur#!';
            const key = crypto_js__WEBPACK_IMPORTED_MODULE_5__["enc"].Base64.parse('lol');
            const iv = crypto_js__WEBPACK_IMPORTED_MODULE_5__["enc"].Base64.parse("#base64IV#");
            // let encrypted = crypto.AES.encrypt(e.target.result, 
            //   this.keye.get('key').value.trim())
            this.poop = crypto_js__WEBPACK_IMPORTED_MODULE_5__["AES"].encrypt(this.fr.result, this.keye.get('key').value.trim()).toString();
            // console.info(e.target.result.slice(0, 30) + "  before encryption ")
            // console.info(this.poop  + "  after encryption ")
            var r = this.poop;
            this.koo(this.poop);
        };
        this.fr.readAsDataURL(f.item(0));
        //  console.info(f.item(0).name.slice(0,(f.item(0).name.length - 4)))
    }
    dko() {
        var f = this.selectedFile;
        const key = crypto_js__WEBPACK_IMPORTED_MODULE_5__["enc"].Base64.parse('lol');
        const iv = crypto_js__WEBPACK_IMPORTED_MODULE_5__["enc"].Base64.parse("#base64IV#");
        this.fer.onloadend = (e) => {
            // console.info(e.target.result + "before decrypt")
            //  var decrypted = crypto.AES.decrypt(this.fer.result, 'kol').toString(crypto.enc.Utf8);
            try {
                var decrypted = crypto_js__WEBPACK_IMPORTED_MODULE_5__["AES"].decrypt(this.fer.result, this.key.get('key').value.trim()).toString(crypto_js__WEBPACK_IMPORTED_MODULE_5__["enc"].Utf8);
                this.dkoo(decrypted);
            }
            catch (e) {
                this.a = true;
            }
            // console.info(decrypted)
            // this.dkoo(decrypted)
        };
        this.fer.readAsText(f.item(0));
    }
    gotoDec() {
        this.show = true;
        this.d.getElementById('pk').classList.add('active');
        this.d.getElementById('mk').classList.remove('active');
        this.d.getElementById('decrypt').style.display = 'block';
        this.d.getElementById('encrypt').style.display = 'none';
    }
    gotoEnc() {
        this.show = true;
        this.d.getElementById('mk').classList.add('active');
        this.d.getElementById('pk').classList.remove('active');
        this.d.getElementById('encrypt').style.display = 'block';
        this.d.getElementById('decrypt').style.display = 'none';
    }
};
HomeComponent.ctorParameters = () => [
    { type: Document, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"],] }] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] }
];
HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-home',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"])(_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"]))
], HomeComponent);



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("mat-card{\r\n    max-width: -webkit-fit-content;\r\n    max-width: -moz-fit-content;\r\n    max-width: fit-content;\r\n    margin: 20px auto;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLDhCQUFzQjtJQUF0QiwyQkFBc0I7SUFBdEIsc0JBQXNCO0lBQ3RCLGlCQUFpQjtBQUNyQiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJtYXQtY2FyZHtcclxuICAgIG1heC13aWR0aDogZml0LWNvbnRlbnQ7XHJcbiAgICBtYXJnaW46IDIwcHggYXV0bztcclxufSJdfQ== */");

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _reg_log_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../reg-log.service */ "./src/app/reg-log.service.ts");






let LoginComponent = class LoginComponent {
    constructor(document, fb, s, r) {
        this.document = document;
        this.fb = fb;
        this.s = s;
        this.r = r;
        this.addressForm = this.fb.group({
            email: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            pwd: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
    }
    goto() {
        this.r.navigateByUrl('/register');
    }
    onSubmit() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.document.getElementById('bk').innerHTML = "Please Wait . . .";
            this.document.getElementById('bk').disabled = true;
            this.document.getElementById('ppp').disabled = true;
            const cred = {
                email: this.addressForm.get('email').value,
                password: this.addressForm.get('pwd').value
            };
            (yield this.s.addLogin(cred)).subscribe(c => {
                console.info(c);
                // alert(c.toString().slice(0,15));
                if (c == 'Unable to Login') {
                    console.log(c);
                    this.document.getElementById('bk').innerHTML = "login";
                    this.document.getElementById('bk').removeAttribute('disabled');
                    this.document.getElementById('ppp').removeAttribute('disabled');
                }
                else {
                    this.name = c['fullName'];
                    alert(c['fullName'] + ", You have successfully logged into the Encryption and Decrytion system");
                    this.r.navigateByUrl('/home');
                }
            });
        });
    }
    ngOnInit() { }
};
LoginComponent.ctorParameters = () => [
    { type: Document, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"],] }] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _reg_log_service__WEBPACK_IMPORTED_MODULE_5__["RegLogService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"]))
], LoginComponent);



/***/ }),

/***/ "./src/app/nav/nav.component.css":
/*!***************************************!*\
  !*** ./src/app/nav/nav.component.css ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".links{\r\n    color: white;\r\n    padding: 8px 15px;\r\n    margin: 12px;\r\n    border-bottom-left-radius: 25px;\r\n    border-bottom-right-radius: 25px;\r\n    border-top-right-radius: 25px;\r\n    will-change: all;\r\n    border-top-left-radius: 25px;\r\n    transition: all 0.35s ease-in;\r\n}\r\n.active{\r\n    color: #1976d2;\r\n    border-bottom-left-radius: 25px;\r\n    border-bottom-right-radius: 25px;\r\n    border-top-right-radius: 25px;\r\n    border-top-left-radius: 25px;\r\n    background-color: whitesmoke;\r\n}\r\n.links:hover{\r\n    color: #1976d2;\r\n    border-bottom-left-radius: 25px;\r\n    border-bottom-right-radius: 25px;\r\n    border-top-right-radius: 25px;\r\n    border-top-left-radius: 25px;\r\n    background-color: whitesmoke;\r\n}\r\na{\r\n    text-decoration: none;\r\n}\r\n#mo{\r\n    display: flex;\r\n}\r\n.spacer{\r\n    flex: 1;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmF2L25hdi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixZQUFZO0lBQ1osK0JBQStCO0lBQy9CLGdDQUFnQztJQUNoQyw2QkFBNkI7SUFDN0IsZ0JBQWdCO0lBQ2hCLDRCQUE0QjtJQUM1Qiw2QkFBNkI7QUFDakM7QUFDQTtJQUNJLGNBQWM7SUFDZCwrQkFBK0I7SUFDL0IsZ0NBQWdDO0lBQ2hDLDZCQUE2QjtJQUM3Qiw0QkFBNEI7SUFDNUIsNEJBQTRCO0FBQ2hDO0FBQ0E7SUFDSSxjQUFjO0lBQ2QsK0JBQStCO0lBQy9CLGdDQUFnQztJQUNoQyw2QkFBNkI7SUFDN0IsNEJBQTRCO0lBQzVCLDRCQUE0QjtBQUNoQztBQUNBO0lBQ0kscUJBQXFCO0FBQ3pCO0FBQ0E7SUFDSSxhQUFhO0FBQ2pCO0FBQ0E7SUFDSSxPQUFPO0FBQ1giLCJmaWxlIjoic3JjL2FwcC9uYXYvbmF2LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubGlua3N7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBwYWRkaW5nOiA4cHggMTVweDtcclxuICAgIG1hcmdpbjogMTJweDtcclxuICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDI1cHg7XHJcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMjVweDtcclxuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAyNXB4O1xyXG4gICAgd2lsbC1jaGFuZ2U6IGFsbDtcclxuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDI1cHg7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zNXMgZWFzZS1pbjtcclxufVxyXG4uYWN0aXZle1xyXG4gICAgY29sb3I6ICMxOTc2ZDI7XHJcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAyNXB4O1xyXG4gICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDI1cHg7XHJcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMjVweDtcclxuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDI1cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZXNtb2tlO1xyXG59XHJcbi5saW5rczpob3ZlcntcclxuICAgIGNvbG9yOiAjMTk3NmQyO1xyXG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMjVweDtcclxuICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAyNXB4O1xyXG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDI1cHg7XHJcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAyNXB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGVzbW9rZTtcclxufVxyXG5he1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG59XHJcbiNtb3tcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbn1cclxuLnNwYWNlcntcclxuICAgIGZsZXg6IDE7XHJcbn0iXX0= */");

/***/ }),

/***/ "./src/app/nav/nav.component.ts":
/*!**************************************!*\
  !*** ./src/app/nav/nav.component.ts ***!
  \**************************************/
/*! exports provided: NavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavComponent", function() { return NavComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let NavComponent = class NavComponent {
    constructor() { }
    ngOnInit() {
        this.name = 'user';
    }
    setter() {
    }
};
NavComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-nav',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./nav.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/nav/nav.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./nav.component.css */ "./src/app/nav/nav.component.css")).default]
    })
], NavComponent);



/***/ }),

/***/ "./src/app/reg-log.service.ts":
/*!************************************!*\
  !*** ./src/app/reg-log.service.ts ***!
  \************************************/
/*! exports provided: RegLogService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegLogService", function() { return RegLogService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let RegLogService = class RegLogService {
    constructor(Http, r) {
        this.Http = Http;
        this.r = r;
        // public uq;
        this.server = 'https://insurebeta.herokuapp.com/';
        // svr = 'eta.herokuapp.com/';
        this.svr = 'https://api-sansti-kudi.herokuapp.com/';
    }
    createHP(userr) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        headers.append('Content-Type', 'applicatiion/json');
        return this.Http.post(this.server + 'registerHP', userr, { headers: headers });
    }
    createClient(userr) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        headers.append('Content-Type', 'applicatiion/json');
        return this.Http.post(this.server + 'registerClient', userr, { headers: headers });
    }
    createAgent(userr) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        headers.append('Content-Type', 'applicatiion/json');
        return this.Http.post(this.server + 'registerAgent', userr, { headers: headers });
    }
    login(cred) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
            headers.append('Content-Type', 'applicatiion/json');
            return this.Http.post(this.server + 'reg', cred, { headers: headers });
        });
    }
    maker(s) {
        this.u = s;
        console.log(this.u);
        console.log(s);
    }
    addReg(r) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        headers.append('Content-Type', 'applicatiion/json');
        return this.Http.post(this.svr + 'addReg', r, { headers: headers });
    }
    addLogin(d) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        headers.append('Content-Type', 'applicatiion/json');
        return this.Http.post(this.svr + 'addLogin', d, { headers: headers });
    }
};
RegLogService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
RegLogService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], RegLogService);



/***/ }),

/***/ "./src/app/register/register.component.css":
/*!*************************************************!*\
  !*** ./src/app/register/register.component.css ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".full-width {\n  width: 100%;\n}\n\n.shipping-card {\n  min-width: 120px;\n  margin: 20px auto;\n}\n\n.mat-radio-button {\n  display: block;\n  margin: 5px 0;\n}\n\n.row {\n  display: flex;\n  flex-direction: row;\n}\n\n.col {\n  flex: 1;\n  margin-right: 20px;\n}\n\n.col:last-child {\n  margin-right: 0;\n}\n\nform{\n  padding: 12px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVnaXN0ZXIvcmVnaXN0ZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsYUFBYTtBQUNmOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLE9BQU87RUFDUCxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUNBO0VBQ0UsYUFBYTtBQUNmIiwiZmlsZSI6InNyYy9hcHAvcmVnaXN0ZXIvcmVnaXN0ZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mdWxsLXdpZHRoIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5zaGlwcGluZy1jYXJkIHtcbiAgbWluLXdpZHRoOiAxMjBweDtcbiAgbWFyZ2luOiAyMHB4IGF1dG87XG59XG5cbi5tYXQtcmFkaW8tYnV0dG9uIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbjogNXB4IDA7XG59XG5cbi5yb3cge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xufVxuXG4uY29sIHtcbiAgZmxleDogMTtcbiAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xufVxuXG4uY29sOmxhc3QtY2hpbGQge1xuICBtYXJnaW4tcmlnaHQ6IDA7XG59XG5mb3Jte1xuICBwYWRkaW5nOiAxMnB4O1xufVxuIl19 */");

/***/ }),

/***/ "./src/app/register/register.component.ts":
/*!************************************************!*\
  !*** ./src/app/register/register.component.ts ***!
  \************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _reg_log_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../reg-log.service */ "./src/app/reg-log.service.ts");





let RegisterComponent = class RegisterComponent {
    constructor(fb, s, r) {
        this.fb = fb;
        this.s = s;
        this.r = r;
        this.addressForm = this.fb.group({
            firstName: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            lastName: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            email: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            pwd: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(5), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(15)],
            cpwd: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
        });
        this.lk = false;
    }
    onSubmit() {
        var e = this.addressForm.get('pwd').value;
        var y = this.addressForm.get('cpwd').value;
        if (e != y) {
            this.lk = true;
        }
        else {
            var form = {
                fullName: this.addressForm.get('firstName').value + " " + this.addressForm.get('lastName').value,
                email: this.addressForm.get('email').value,
                password: this.addressForm.get('pwd').value,
            };
            this.s.addReg(form).
                subscribe(r => {
                console.info(r);
                alert(r);
                this.r.navigateByUrl('login');
            });
        }
        // console.log(this.addressForm.value)
    }
};
RegisterComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _reg_log_service__WEBPACK_IMPORTED_MODULE_4__["RegLogService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
RegisterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-register',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./register.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/register/register.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./register.component.css */ "./src/app/register/register.component.css")).default]
    })
], RegisterComponent);

// alert('Thanks!');


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\angular\Decrypt_Encrypt\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);