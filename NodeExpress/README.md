# Node Express

1.  Create a `package.json` file

    - `npm init -y`

2.  Install dependencies

    - `npm i express typescript @types/node @types/express ts-node`
      - Express.js - framework
      - typescript - typescript compiler
      - @types/<> - type defenitions
      - ts-node - execution environment

3.  Create a source directory and app.ts

    - `mkdir src`
    - `touch src/app.ts`

      `./src` is directory that will contain the source code

4.  Create TypeScript config

    - `npx tsc --init` or create manually

      ```
      {
        "compilerOptions": {
            "target": "es6", //ECMAScript target version
            "module": "commonjs", //Specifies the module system
            "outDir": "./dist", //Output directory for compiled TypeScript files
            "rootDir": "./src", //Root directory of TypeScript source files
            "strict": true
        }
      }
      ```

5.  Create the express app
    - write on ./src/app.ts
6.  Run and Compile

    - `npx tsc`
    - `node dist/app.js` - run the server

### Extras

- how to terminate a process that is using a specific port?

  - `kill -9 $(lsof -t -i:8080)`

- watch the changes in the source code

  - `"concurrently \"npx tsc -w\" \"nodemon dist/index.js\""`

  - to automatically rerun the server
  - `Nodemon` utility that monitor changes in file and automatically restarts the Node.js app.
  - `npx tsc -w`
    - -w flag, stands for watch mode
  - `concurrently` command line tool
    - run multiple commands concurrently
