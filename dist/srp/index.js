"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.server = exports.client = void 0;
const client_1 = require("./client");
exports.client = client_1.default;
const server_1 = require("./server");
exports.server = server_1.default;
exports.default = { client: client_1.default, server: server_1.default };
//# sourceMappingURL=index.js.map