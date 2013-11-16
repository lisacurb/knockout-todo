var Consumer = (function() {
    function customError(message) {
        $('#errorMessage')
            .text(message);
        setTimeout(function() {
            $('#errorMessage').empty();
        }, 2000);
    } 
    function onLoadApp() {
        $('#startContainer').hide();
        var params = {
            attachPoint: '#attachMyAppHere'
        };
        if ($('#customErrorCB').prop('checked')) {
            params['validationErrorHandler'] = customError;
        }
        MyApp.init(params);
    };
    return {
        onLoadApp: onLoadApp
    };
})();
