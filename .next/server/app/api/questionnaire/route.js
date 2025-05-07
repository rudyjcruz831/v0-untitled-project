/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "app/api/questionnaire/route";
exports.ids = ["app/api/questionnaire/route"];
exports.modules = {

/***/ "(rsc)/./app/api/questionnaire/route.ts":
/*!****************************************!*\
  !*** ./app/api/questionnaire/route.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   POST: () => (/* binding */ POST)\n/* harmony export */ });\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/server */ \"(rsc)/./node_modules/.pnpm/next@15.2.4_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/api/server.js\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! fs */ \"fs\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nasync function POST(req) {\n    try {\n        const data = await req.json();\n        // Only validate the most essential fields\n        if (!data.budget.trim()) {\n            return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n                error: 'Please provide your budget range'\n            }, {\n                status: 400\n            });\n        }\n        // Prepare the answer to save\n        const answerToSave = {\n            ...data,\n            submittedAt: new Date().toISOString()\n        };\n        // Read existing answers\n        const filePath = path__WEBPACK_IMPORTED_MODULE_2___default().join(process.cwd(), 'data', 'quiz_answers.json');\n        let answers = [];\n        try {\n            const fileContent = await fs__WEBPACK_IMPORTED_MODULE_1__.promises.readFile(filePath, 'utf-8');\n            answers = JSON.parse(fileContent);\n        } catch (error) {\n            // If file doesn't exist or is empty, start with empty array\n            answers = [];\n        }\n        // Replace existing answers with new answer\n        answers = [\n            answerToSave\n        ];\n        // Save updated answers\n        await fs__WEBPACK_IMPORTED_MODULE_1__.promises.writeFile(filePath, JSON.stringify(answers, null, 2));\n        // Send data to personal recommendations API\n        try {\n            const recommendationsResponse = await fetch('http://localhost:8000/recommend_places', {\n                method: 'POST',\n                headers: {\n                    'Content-Type': 'application/json'\n                },\n                body: JSON.stringify(answerToSave)\n            });\n            if (!recommendationsResponse.ok) {\n                throw new Error('Failed to get recommendations');\n            }\n            const recommendations = await recommendationsResponse.json();\n            return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n                message: 'Questionnaire submitted successfully',\n                data: answerToSave,\n                recommendations: recommendations\n            }, {\n                status: 200\n            });\n        } catch (error) {\n            console.error('Error getting recommendations:', error);\n            return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n                message: 'Questionnaire submitted but failed to get recommendations',\n                data: answerToSave,\n                error: 'Failed to get recommendations'\n            }, {\n                status: 200\n            });\n        }\n    } catch (error) {\n        console.error('Error processing questionnaire:', error);\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            error: 'Internal server error'\n        }, {\n            status: 500\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hcHAvYXBpL3F1ZXN0aW9ubmFpcmUvcm91dGUudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQTJDO0FBQ1A7QUFDWjtBQWdCakIsZUFBZUksS0FBS0MsR0FBWTtJQUNyQyxJQUFJO1FBQ0YsTUFBTUMsT0FBMEIsTUFBTUQsSUFBSUUsSUFBSTtRQUU5QywwQ0FBMEM7UUFDMUMsSUFBSSxDQUFDRCxLQUFLRSxNQUFNLENBQUNDLElBQUksSUFBSTtZQUN2QixPQUFPVCxxREFBWUEsQ0FBQ08sSUFBSSxDQUN0QjtnQkFBRUcsT0FBTztZQUFtQyxHQUM1QztnQkFBRUMsUUFBUTtZQUFJO1FBRWxCO1FBRUEsNkJBQTZCO1FBQzdCLE1BQU1DLGVBQTRCO1lBQ2hDLEdBQUdOLElBQUk7WUFDUE8sYUFBYSxJQUFJQyxPQUFPQyxXQUFXO1FBQ3JDO1FBRUEsd0JBQXdCO1FBQ3hCLE1BQU1DLFdBQVdiLGdEQUFTLENBQUNlLFFBQVFDLEdBQUcsSUFBSSxRQUFRO1FBQ2xELElBQUlDLFVBQXlCLEVBQUU7UUFFL0IsSUFBSTtZQUNGLE1BQU1DLGNBQWMsTUFBTW5CLHdDQUFFQSxDQUFDb0IsUUFBUSxDQUFDTixVQUFVO1lBQ2hESSxVQUFVRyxLQUFLQyxLQUFLLENBQUNIO1FBQ3ZCLEVBQUUsT0FBT1gsT0FBTztZQUNkLDREQUE0RDtZQUM1RFUsVUFBVSxFQUFFO1FBQ2Q7UUFFQSwyQ0FBMkM7UUFDM0NBLFVBQVU7WUFBQ1I7U0FBYTtRQUV4Qix1QkFBdUI7UUFDdkIsTUFBTVYsd0NBQUVBLENBQUN1QixTQUFTLENBQUNULFVBQVVPLEtBQUtHLFNBQVMsQ0FBQ04sU0FBUyxNQUFNO1FBRTNELDRDQUE0QztRQUM1QyxJQUFJO1lBQ0YsTUFBTU8sMEJBQTBCLE1BQU1DLE1BQU0sMENBQTBDO2dCQUNwRkMsUUFBUTtnQkFDUkMsU0FBUztvQkFDUCxnQkFBZ0I7Z0JBQ2xCO2dCQUNBQyxNQUFNUixLQUFLRyxTQUFTLENBQUNkO1lBQ3ZCO1lBRUEsSUFBSSxDQUFDZSx3QkFBd0JLLEVBQUUsRUFBRTtnQkFDL0IsTUFBTSxJQUFJQyxNQUFNO1lBQ2xCO1lBRUEsTUFBTUMsa0JBQWtCLE1BQU1QLHdCQUF3QnBCLElBQUk7WUFFMUQsT0FBT1AscURBQVlBLENBQUNPLElBQUksQ0FDdEI7Z0JBQ0U0QixTQUFTO2dCQUNUN0IsTUFBTU07Z0JBQ05zQixpQkFBaUJBO1lBQ25CLEdBQ0E7Z0JBQUV2QixRQUFRO1lBQUk7UUFFbEIsRUFBRSxPQUFPRCxPQUFPO1lBQ2QwQixRQUFRMUIsS0FBSyxDQUFDLGtDQUFrQ0E7WUFDaEQsT0FBT1YscURBQVlBLENBQUNPLElBQUksQ0FDdEI7Z0JBQ0U0QixTQUFTO2dCQUNUN0IsTUFBTU07Z0JBQ05GLE9BQU87WUFDVCxHQUNBO2dCQUFFQyxRQUFRO1lBQUk7UUFFbEI7SUFDRixFQUFFLE9BQU9ELE9BQU87UUFDZDBCLFFBQVExQixLQUFLLENBQUMsbUNBQW1DQTtRQUNqRCxPQUFPVixxREFBWUEsQ0FBQ08sSUFBSSxDQUN0QjtZQUFFRyxPQUFPO1FBQXdCLEdBQ2pDO1lBQUVDLFFBQVE7UUFBSTtJQUVsQjtBQUNGIiwic291cmNlcyI6WyJDOlxcVXNlcnNcXHNhbmRoXFxEb2N1bWVudHNcXENvbGxlZ2Ugd29ya1xcQ01QRSAyNzIgQ29kaW5nXFx2MC11bnRpdGxlZC1wcm9qZWN0XFxhcHBcXGFwaVxccXVlc3Rpb25uYWlyZVxccm91dGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmV4dFJlc3BvbnNlIH0gZnJvbSAnbmV4dC9zZXJ2ZXInO1xyXG5pbXBvcnQgeyBwcm9taXNlcyBhcyBmcyB9IGZyb20gJ2ZzJztcclxuaW1wb3J0IHBhdGggZnJvbSAncGF0aCc7XHJcblxyXG5pbnRlcmZhY2UgUXVlc3Rpb25uYWlyZURhdGEge1xyXG4gIGJ1ZGdldDogc3RyaW5nO1xyXG4gIGxvY2F0aW9uOiBzdHJpbmc7XHJcbiAgbXVzdEhhdmVzOiBzdHJpbmc7XHJcbiAgYW55T3RoZXI6IHN0cmluZztcclxuICBpbnN0aXR1dGlvbjogc3RyaW5nO1xyXG4gIGhvYmJpZXM6IHN0cmluZztcclxuICB1c2VyVHlwZTogJ3N0dWRlbnQnIHwgJ3dvcmtlcicgfCAnJztcclxufVxyXG5cclxuaW50ZXJmYWNlIFNhdmVkQW5zd2VyIGV4dGVuZHMgUXVlc3Rpb25uYWlyZURhdGEge1xyXG4gIHN1Ym1pdHRlZEF0OiBzdHJpbmc7XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBQT1NUKHJlcTogUmVxdWVzdCkge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCBkYXRhOiBRdWVzdGlvbm5haXJlRGF0YSA9IGF3YWl0IHJlcS5qc29uKCk7XHJcbiAgICBcclxuICAgIC8vIE9ubHkgdmFsaWRhdGUgdGhlIG1vc3QgZXNzZW50aWFsIGZpZWxkc1xyXG4gICAgaWYgKCFkYXRhLmJ1ZGdldC50cmltKCkpIHtcclxuICAgICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKFxyXG4gICAgICAgIHsgZXJyb3I6ICdQbGVhc2UgcHJvdmlkZSB5b3VyIGJ1ZGdldCByYW5nZScgfSxcclxuICAgICAgICB7IHN0YXR1czogNDAwIH1cclxuICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBQcmVwYXJlIHRoZSBhbnN3ZXIgdG8gc2F2ZVxyXG4gICAgY29uc3QgYW5zd2VyVG9TYXZlOiBTYXZlZEFuc3dlciA9IHtcclxuICAgICAgLi4uZGF0YSxcclxuICAgICAgc3VibWl0dGVkQXQ6IG5ldyBEYXRlKCkudG9JU09TdHJpbmcoKVxyXG4gICAgfTtcclxuXHJcbiAgICAvLyBSZWFkIGV4aXN0aW5nIGFuc3dlcnNcclxuICAgIGNvbnN0IGZpbGVQYXRoID0gcGF0aC5qb2luKHByb2Nlc3MuY3dkKCksICdkYXRhJywgJ3F1aXpfYW5zd2Vycy5qc29uJyk7XHJcbiAgICBsZXQgYW5zd2VyczogU2F2ZWRBbnN3ZXJbXSA9IFtdO1xyXG4gICAgXHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCBmaWxlQ29udGVudCA9IGF3YWl0IGZzLnJlYWRGaWxlKGZpbGVQYXRoLCAndXRmLTgnKTtcclxuICAgICAgYW5zd2VycyA9IEpTT04ucGFyc2UoZmlsZUNvbnRlbnQpO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgLy8gSWYgZmlsZSBkb2Vzbid0IGV4aXN0IG9yIGlzIGVtcHR5LCBzdGFydCB3aXRoIGVtcHR5IGFycmF5XHJcbiAgICAgIGFuc3dlcnMgPSBbXTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBSZXBsYWNlIGV4aXN0aW5nIGFuc3dlcnMgd2l0aCBuZXcgYW5zd2VyXHJcbiAgICBhbnN3ZXJzID0gW2Fuc3dlclRvU2F2ZV07XHJcblxyXG4gICAgLy8gU2F2ZSB1cGRhdGVkIGFuc3dlcnNcclxuICAgIGF3YWl0IGZzLndyaXRlRmlsZShmaWxlUGF0aCwgSlNPTi5zdHJpbmdpZnkoYW5zd2VycywgbnVsbCwgMikpO1xyXG4gICAgXHJcbiAgICAvLyBTZW5kIGRhdGEgdG8gcGVyc29uYWwgcmVjb21tZW5kYXRpb25zIEFQSVxyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgcmVjb21tZW5kYXRpb25zUmVzcG9uc2UgPSBhd2FpdCBmZXRjaCgnaHR0cDovL2xvY2FsaG9zdDo4MDAwL3JlY29tbWVuZF9wbGFjZXMnLCB7XHJcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgICAgICB9LFxyXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGFuc3dlclRvU2F2ZSksXHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgaWYgKCFyZWNvbW1lbmRhdGlvbnNSZXNwb25zZS5vaykge1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcignRmFpbGVkIHRvIGdldCByZWNvbW1lbmRhdGlvbnMnKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgY29uc3QgcmVjb21tZW5kYXRpb25zID0gYXdhaXQgcmVjb21tZW5kYXRpb25zUmVzcG9uc2UuanNvbigpO1xyXG4gICAgICBcclxuICAgICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKFxyXG4gICAgICAgIHsgXHJcbiAgICAgICAgICBtZXNzYWdlOiAnUXVlc3Rpb25uYWlyZSBzdWJtaXR0ZWQgc3VjY2Vzc2Z1bGx5JyxcclxuICAgICAgICAgIGRhdGE6IGFuc3dlclRvU2F2ZSxcclxuICAgICAgICAgIHJlY29tbWVuZGF0aW9uczogcmVjb21tZW5kYXRpb25zXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7IHN0YXR1czogMjAwIH1cclxuICAgICAgKTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGdldHRpbmcgcmVjb21tZW5kYXRpb25zOicsIGVycm9yKTtcclxuICAgICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKFxyXG4gICAgICAgIHsgXHJcbiAgICAgICAgICBtZXNzYWdlOiAnUXVlc3Rpb25uYWlyZSBzdWJtaXR0ZWQgYnV0IGZhaWxlZCB0byBnZXQgcmVjb21tZW5kYXRpb25zJyxcclxuICAgICAgICAgIGRhdGE6IGFuc3dlclRvU2F2ZSxcclxuICAgICAgICAgIGVycm9yOiAnRmFpbGVkIHRvIGdldCByZWNvbW1lbmRhdGlvbnMnXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7IHN0YXR1czogMjAwIH1cclxuICAgICAgKTtcclxuICAgIH1cclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5lcnJvcignRXJyb3IgcHJvY2Vzc2luZyBxdWVzdGlvbm5haXJlOicsIGVycm9yKTtcclxuICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbihcclxuICAgICAgeyBlcnJvcjogJ0ludGVybmFsIHNlcnZlciBlcnJvcicgfSxcclxuICAgICAgeyBzdGF0dXM6IDUwMCB9XHJcbiAgICApO1xyXG4gIH1cclxufSAiXSwibmFtZXMiOlsiTmV4dFJlc3BvbnNlIiwicHJvbWlzZXMiLCJmcyIsInBhdGgiLCJQT1NUIiwicmVxIiwiZGF0YSIsImpzb24iLCJidWRnZXQiLCJ0cmltIiwiZXJyb3IiLCJzdGF0dXMiLCJhbnN3ZXJUb1NhdmUiLCJzdWJtaXR0ZWRBdCIsIkRhdGUiLCJ0b0lTT1N0cmluZyIsImZpbGVQYXRoIiwiam9pbiIsInByb2Nlc3MiLCJjd2QiLCJhbnN3ZXJzIiwiZmlsZUNvbnRlbnQiLCJyZWFkRmlsZSIsIkpTT04iLCJwYXJzZSIsIndyaXRlRmlsZSIsInN0cmluZ2lmeSIsInJlY29tbWVuZGF0aW9uc1Jlc3BvbnNlIiwiZmV0Y2giLCJtZXRob2QiLCJoZWFkZXJzIiwiYm9keSIsIm9rIiwiRXJyb3IiLCJyZWNvbW1lbmRhdGlvbnMiLCJtZXNzYWdlIiwiY29uc29sZSJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./app/api/questionnaire/route.ts\n");

/***/ }),

/***/ "(rsc)/./node_modules/.pnpm/next@15.2.4_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fquestionnaire%2Froute&page=%2Fapi%2Fquestionnaire%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fquestionnaire%2Froute.ts&appDir=C%3A%5CUsers%5Csandh%5CDocuments%5CCollege%20work%5CCMPE%20272%20Coding%5Cv0-untitled-project%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5Csandh%5CDocuments%5CCollege%20work%5CCMPE%20272%20Coding%5Cv0-untitled-project&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/next@15.2.4_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fquestionnaire%2Froute&page=%2Fapi%2Fquestionnaire%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fquestionnaire%2Froute.ts&appDir=C%3A%5CUsers%5Csandh%5CDocuments%5CCollege%20work%5CCMPE%20272%20Coding%5Cv0-untitled-project%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5Csandh%5CDocuments%5CCollege%20work%5CCMPE%20272%20Coding%5Cv0-untitled-project&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   workAsyncStorage: () => (/* binding */ workAsyncStorage),\n/* harmony export */   workUnitAsyncStorage: () => (/* binding */ workUnitAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/.pnpm/next@15.2.4_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/server/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/route-kind */ \"(rsc)/./node_modules/.pnpm/next@15.2.4_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/server/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/.pnpm/next@15.2.4_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var C_Users_sandh_Documents_College_work_CMPE_272_Coding_v0_untitled_project_app_api_questionnaire_route_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/api/questionnaire/route.ts */ \"(rsc)/./app/api/questionnaire/route.ts\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/questionnaire/route\",\n        pathname: \"/api/questionnaire\",\n        filename: \"route\",\n        bundlePath: \"app/api/questionnaire/route\"\n    },\n    resolvedPagePath: \"C:\\\\Users\\\\sandh\\\\Documents\\\\College work\\\\CMPE 272 Coding\\\\v0-untitled-project\\\\app\\\\api\\\\questionnaire\\\\route.ts\",\n    nextConfigOutput,\n    userland: C_Users_sandh_Documents_College_work_CMPE_272_Coding_v0_untitled_project_app_api_questionnaire_route_ts__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { workAsyncStorage, workUnitAsyncStorage, serverHooks } = routeModule;\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        workAsyncStorage,\n        workUnitAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvLnBucG0vbmV4dEAxNS4yLjRfcmVhY3QtZG9tQDE5LjAuMF9yZWFjdEAxOS4wLjBfX3JlYWN0QDE5LjAuMC9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIvaW5kZXguanM/bmFtZT1hcHAlMkZhcGklMkZxdWVzdGlvbm5haXJlJTJGcm91dGUmcGFnZT0lMkZhcGklMkZxdWVzdGlvbm5haXJlJTJGcm91dGUmYXBwUGF0aHM9JnBhZ2VQYXRoPXByaXZhdGUtbmV4dC1hcHAtZGlyJTJGYXBpJTJGcXVlc3Rpb25uYWlyZSUyRnJvdXRlLnRzJmFwcERpcj1DJTNBJTVDVXNlcnMlNUNzYW5kaCU1Q0RvY3VtZW50cyU1Q0NvbGxlZ2UlMjB3b3JrJTVDQ01QRSUyMDI3MiUyMENvZGluZyU1Q3YwLXVudGl0bGVkLXByb2plY3QlNUNhcHAmcGFnZUV4dGVuc2lvbnM9dHN4JnBhZ2VFeHRlbnNpb25zPXRzJnBhZ2VFeHRlbnNpb25zPWpzeCZwYWdlRXh0ZW5zaW9ucz1qcyZyb290RGlyPUMlM0ElNUNVc2VycyU1Q3NhbmRoJTVDRG9jdW1lbnRzJTVDQ29sbGVnZSUyMHdvcmslNUNDTVBFJTIwMjcyJTIwQ29kaW5nJTVDdjAtdW50aXRsZWQtcHJvamVjdCZpc0Rldj10cnVlJnRzY29uZmlnUGF0aD10c2NvbmZpZy5qc29uJmJhc2VQYXRoPSZhc3NldFByZWZpeD0mbmV4dENvbmZpZ091dHB1dD0mcHJlZmVycmVkUmVnaW9uPSZtaWRkbGV3YXJlQ29uZmlnPWUzMCUzRCEiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBK0Y7QUFDdkM7QUFDcUI7QUFDa0U7QUFDL0k7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLHlHQUFtQjtBQUMzQztBQUNBLGNBQWMsa0VBQVM7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLFlBQVk7QUFDWixDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0EsUUFBUSxzREFBc0Q7QUFDOUQ7QUFDQSxXQUFXLDRFQUFXO0FBQ3RCO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDMEY7O0FBRTFGIiwic291cmNlcyI6WyIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQXBwUm91dGVSb3V0ZU1vZHVsZSB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL3JvdXRlLW1vZHVsZXMvYXBwLXJvdXRlL21vZHVsZS5jb21waWxlZFwiO1xuaW1wb3J0IHsgUm91dGVLaW5kIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvcm91dGUta2luZFwiO1xuaW1wb3J0IHsgcGF0Y2hGZXRjaCBhcyBfcGF0Y2hGZXRjaCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2xpYi9wYXRjaC1mZXRjaFwiO1xuaW1wb3J0ICogYXMgdXNlcmxhbmQgZnJvbSBcIkM6XFxcXFVzZXJzXFxcXHNhbmRoXFxcXERvY3VtZW50c1xcXFxDb2xsZWdlIHdvcmtcXFxcQ01QRSAyNzIgQ29kaW5nXFxcXHYwLXVudGl0bGVkLXByb2plY3RcXFxcYXBwXFxcXGFwaVxcXFxxdWVzdGlvbm5haXJlXFxcXHJvdXRlLnRzXCI7XG4vLyBXZSBpbmplY3QgdGhlIG5leHRDb25maWdPdXRwdXQgaGVyZSBzbyB0aGF0IHdlIGNhbiB1c2UgdGhlbSBpbiB0aGUgcm91dGVcbi8vIG1vZHVsZS5cbmNvbnN0IG5leHRDb25maWdPdXRwdXQgPSBcIlwiXG5jb25zdCByb3V0ZU1vZHVsZSA9IG5ldyBBcHBSb3V0ZVJvdXRlTW9kdWxlKHtcbiAgICBkZWZpbml0aW9uOiB7XG4gICAgICAgIGtpbmQ6IFJvdXRlS2luZC5BUFBfUk9VVEUsXG4gICAgICAgIHBhZ2U6IFwiL2FwaS9xdWVzdGlvbm5haXJlL3JvdXRlXCIsXG4gICAgICAgIHBhdGhuYW1lOiBcIi9hcGkvcXVlc3Rpb25uYWlyZVwiLFxuICAgICAgICBmaWxlbmFtZTogXCJyb3V0ZVwiLFxuICAgICAgICBidW5kbGVQYXRoOiBcImFwcC9hcGkvcXVlc3Rpb25uYWlyZS9yb3V0ZVwiXG4gICAgfSxcbiAgICByZXNvbHZlZFBhZ2VQYXRoOiBcIkM6XFxcXFVzZXJzXFxcXHNhbmRoXFxcXERvY3VtZW50c1xcXFxDb2xsZWdlIHdvcmtcXFxcQ01QRSAyNzIgQ29kaW5nXFxcXHYwLXVudGl0bGVkLXByb2plY3RcXFxcYXBwXFxcXGFwaVxcXFxxdWVzdGlvbm5haXJlXFxcXHJvdXRlLnRzXCIsXG4gICAgbmV4dENvbmZpZ091dHB1dCxcbiAgICB1c2VybGFuZFxufSk7XG4vLyBQdWxsIG91dCB0aGUgZXhwb3J0cyB0aGF0IHdlIG5lZWQgdG8gZXhwb3NlIGZyb20gdGhlIG1vZHVsZS4gVGhpcyBzaG91bGRcbi8vIGJlIGVsaW1pbmF0ZWQgd2hlbiB3ZSd2ZSBtb3ZlZCB0aGUgb3RoZXIgcm91dGVzIHRvIHRoZSBuZXcgZm9ybWF0LiBUaGVzZVxuLy8gYXJlIHVzZWQgdG8gaG9vayBpbnRvIHRoZSByb3V0ZS5cbmNvbnN0IHsgd29ya0FzeW5jU3RvcmFnZSwgd29ya1VuaXRBc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzIH0gPSByb3V0ZU1vZHVsZTtcbmZ1bmN0aW9uIHBhdGNoRmV0Y2goKSB7XG4gICAgcmV0dXJuIF9wYXRjaEZldGNoKHtcbiAgICAgICAgd29ya0FzeW5jU3RvcmFnZSxcbiAgICAgICAgd29ya1VuaXRBc3luY1N0b3JhZ2VcbiAgICB9KTtcbn1cbmV4cG9ydCB7IHJvdXRlTW9kdWxlLCB3b3JrQXN5bmNTdG9yYWdlLCB3b3JrVW5pdEFzeW5jU3RvcmFnZSwgc2VydmVySG9va3MsIHBhdGNoRmV0Y2gsICB9O1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1hcHAtcm91dGUuanMubWFwIl0sIm5hbWVzIjpbXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/.pnpm/next@15.2.4_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fquestionnaire%2Froute&page=%2Fapi%2Fquestionnaire%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fquestionnaire%2Froute.ts&appDir=C%3A%5CUsers%5Csandh%5CDocuments%5CCollege%20work%5CCMPE%20272%20Coding%5Cv0-untitled-project%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5Csandh%5CDocuments%5CCollege%20work%5CCMPE%20272%20Coding%5Cv0-untitled-project&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./node_modules/.pnpm/next@15.2.4_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true!":
/*!*********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/next@15.2.4_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true! ***!
  \*********************************************************************************************************************************************************************************/
/***/ (() => {



/***/ }),

/***/ "(ssr)/./node_modules/.pnpm/next@15.2.4_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true!":
/*!*********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/next@15.2.4_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true! ***!
  \*********************************************************************************************************************************************************************************/
/***/ (() => {



/***/ }),

/***/ "../app-render/after-task-async-storage.external":
/*!***********************************************************************************!*\
  !*** external "next/dist/server/app-render/after-task-async-storage.external.js" ***!
  \***********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/after-task-async-storage.external.js");

/***/ }),

/***/ "../app-render/work-async-storage.external":
/*!*****************************************************************************!*\
  !*** external "next/dist/server/app-render/work-async-storage.external.js" ***!
  \*****************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/work-async-storage.external.js");

/***/ }),

/***/ "./work-unit-async-storage.external":
/*!**********************************************************************************!*\
  !*** external "next/dist/server/app-render/work-unit-async-storage.external.js" ***!
  \**********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/work-unit-async-storage.external.js");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

"use strict";
module.exports = require("fs");

/***/ }),

/***/ "next/dist/compiled/next-server/app-page.runtime.dev.js":
/*!*************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-page.runtime.dev.js" ***!
  \*************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/app-page.runtime.dev.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("path");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next@15.2.4_react-dom@19.0.0_react@19.0.0__react@19.0.0"], () => (__webpack_exec__("(rsc)/./node_modules/.pnpm/next@15.2.4_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fquestionnaire%2Froute&page=%2Fapi%2Fquestionnaire%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fquestionnaire%2Froute.ts&appDir=C%3A%5CUsers%5Csandh%5CDocuments%5CCollege%20work%5CCMPE%20272%20Coding%5Cv0-untitled-project%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5Csandh%5CDocuments%5CCollege%20work%5CCMPE%20272%20Coding%5Cv0-untitled-project&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();