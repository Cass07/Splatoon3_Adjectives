(function(window) {

    function VersionInitiator() {
        let _ver = {};

        const VERSION = {
            "globalVersion": "1000",
            "globalVersionText": "10.0.0",
        }

        _ver.getVersion = function() {
            return VERSION;
        }

        return _ver;
    }

    if(typeof window.VersionInitiator === 'undefined') {
        window.VersionInitiator = VersionInitiator();
    }

})(window);