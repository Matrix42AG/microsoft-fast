const { resolve } = require("path");
const fs = require("fs");

const version = process.argv[2];
const secret = process.argv[3];

const content = `registry=https://pkgs.dev.azure.com/matrix42/Aurora/_packaging/AURORA_NPM/npm/registry/ 
                        
always-auth=true

; begin auth token
//pkgs.dev.azure.com/matrix42/Aurora/_packaging/AURORA_NPM/npm/registry/:username=matrix42
//pkgs.dev.azure.com/matrix42/Aurora/_packaging/AURORA_NPM/npm/registry/:_password=${secret}
//pkgs.dev.azure.com/matrix42/Aurora/_packaging/AURORA_NPM/npm/registry/:email=npm requires email to be set but doesn't use the value
//pkgs.dev.azure.com/matrix42/Aurora/_packaging/AURORA_NPM/npm/:username=matrix42
//pkgs.dev.azure.com/matrix42/Aurora/_packaging/AURORA_NPM/npm/:_password=${secret}
//pkgs.dev.azure.com/matrix42/Aurora/_packaging/AURORA_NPM/npm/:email=npm requires email to be set but doesn't use the value
; end auth token
`;

fs.writeFileSync(resolve(__dirname, "..", "..", ".npmrc"), content);

const packages = ["fast-foundation"];

for (const pkg of packages) {
    const pkgJson = require(`../../packages/${pkg}/package.json`);
    pkgJson.version = version;
    fs.writeFileSync(
        resolve(__dirname, "..", "..", "packages", pkg, "package.json"),
        JSON.stringify(pkgJson, null, 2)
    );
}
