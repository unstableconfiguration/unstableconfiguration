define([], function(){

    let XHR = function() {
        let _xhr = this;

        _xhr.get = function(url, success, options){
            options = options || {};
            options.method = 'GET'
            return _xhr.call(url, success, options);
        }

        _xhr.call = function(url, success, options){
            options = options||{};
            let xhr = new XMLHttpRequest();
            xhr.open(
                options.method || 'GET',
                url,
                (options.hasOwnProperty('async') ? options.async : true)
            );
            xhr.responseType = options.responseType || 'text';
            xhr.onreadystatechange = () => {
                if(+xhr.readyState !== 4) 
                    return;
                if(+xhr.status === 200){
                    if(typeof(success)==='function')
                        success(xhr.response);
                }
                else {
                    if(options.failure)
                        options.failure(xhr.error);
                    else {
                        console.log(xhr, json_args, xhr.error);
                    }
                }
            }
            xhr.send();
            return xhr;
        }

        return _xhr;
    }

    return new XHR();
});



