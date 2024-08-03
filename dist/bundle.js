/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./scripts.js":
/*!********************!*\
  !*** ./scripts.js ***!
  \********************/
/***/ (() => {

eval("document.getElementById('download-button').addEventListener('click', function() {\r\n    downloadPDF();\r\n    sendWebhookNotification();\r\n});\r\n\r\nfunction downloadPDF() {\r\n    const element = document.body;\r\n    const opt = {\r\n        margin:       0.5,\r\n        filename:     'document.pdf',\r\n        image:        { type: 'jpeg', quality: 0.98 },\r\n        html2canvas:  { scale: 2 },\r\n        jsPDF:        { unit: 'in', format: 'letter', orientation: 'portrait' }\r\n    };\r\n\r\n    html2pdf().from(element).set(opt).save();\r\n}\r\n\r\nfunction sendWebhookNotification() {\r\n    const webhookURL = \"https://h.albato.ru/wh/38/1lfhtdr/jO7rDX4EAQgEACl6t9uA_vJf1_Kk1teeEz_v5r5PrfQ/\";\r\n\r\n    fetch(webhookURL, {\r\n        method: 'POST',\r\n        headers: {\r\n            'Content-Type': 'application/json'\r\n        },\r\n        body: JSON.stringify({ event: 'button_pressed', data: { message: 'Button was pressed' } })\r\n    })\r\n    .then(response => response.json())\r\n    .then(data => {\r\n        console.log('Webhook sent:', data);\r\n    })\r\n    .catch(error => {\r\n        console.error('Error sending webhook:', error);\r\n    });\r\n}\r\n\n\n//# sourceURL=webpack:///./scripts.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./scripts.js"]();
/******/ 	
/******/ })()
;