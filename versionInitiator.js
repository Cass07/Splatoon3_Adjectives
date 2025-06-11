(function(window) {

    function VersionInitiator() {
        let _ver = {};

        const $version = {
            "globalVersion": "930",
            "globalVersionText": "9.3.0",
        }

        _ver.getVersion = function() {
            return $version;
        }

        return _ver;
    }

    if(typeof window.VersionInitiator === 'undefined') {
        window.VersionInitiator = VersionInitiator();
    }

})(window);