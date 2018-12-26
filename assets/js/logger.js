const isDebug = true;

export default
{

    err: function (...msg) {
        // TODO
        console.log(...msg);
    },

    debug: function (...msg) {
        if (isDebug) {
            console.log(...msg);
        }
    }

}