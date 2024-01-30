const { resolve } = require("path");
const fs = require("fs");

const secret = process.argv[2];

const content = `; begin auth token
//pkgs.dev.azure.com/matrix42/Aurora/_packaging/AURORA_NPM/npm/registry/:username=matrix42
//pkgs.dev.azure.com/matrix42/Aurora/_packaging/AURORA_NPM/npm/registry/:_password=${secret}
//pkgs.dev.azure.com/matrix42/Aurora/_packaging/AURORA_NPM/npm/registry/:email=npm requires email to be set but doesn't use the value
//pkgs.dev.azure.com/matrix42/Aurora/_packaging/AURORA_NPM/npm/:username=matrix42
//pkgs.dev.azure.com/matrix42/Aurora/_packaging/AURORA_NPM/npm/:_password=${secret}
//pkgs.dev.azure.com/matrix42/Aurora/_packaging/AURORA_NPM/npm/:email=npm requires email to be set but doesn't use the value
; end auth token
`;

fs.writeFileSync(resolve(__dirname, "..", "..", ".npmrc"), content);
