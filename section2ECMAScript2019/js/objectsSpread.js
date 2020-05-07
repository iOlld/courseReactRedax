// Objects spread
(() => {
    const defaults = {
        'host': 'localhost',
        'dbName': 'blog',
        'user': 'admin',
    };

    const opts = {
        'user': 'John',
        'password': 'utopia'
    }

    const result = Object.assign({}, defaults, opts);
    console.log(result);

    const port = 8080;

    const res = { 
        ...defaults,
        ...opts,
        port,
        connect() {
            return true;
        }
    };
    console.log(res);
})();