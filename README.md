ionic-electron

## Important


After 'npm install ' add this code to 'node_modules/@ionic/app-scripts/config/webpack.config.js' (in 'devConfig' and 'prodConfig' array's)

```
externals: [
    (function () {
        var IGNORES = ["fs","child_process","electron","path","assert","cluster","crypto","dns","domain","events","http","https","net","os","process","punycode","querystring","readline","repl","stream","string_decoder","tls","tty","dgram","url","util","v8","vm","zlib"];
        return function (context, request, callback) {
            if (IGNORES.indexOf(request) >= 0) {
                return callback(null, "require('" + request + "')");
            }
            return callback();
        };
    })()
  ],
```