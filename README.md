# Tool

A collection of helpers and wrappers.

## Install

```
yarn add @arturdoruch/helper
```

## Contents

 * Ajax
 * Local storage

### Ajax
  
jQuery AJAX request wrapper. Adds functionalities:

* Displaying notice message and loader while request is sending.
* Request options:
    * `json` - Adding option for specifying JSON data to send. If is specify request `Content-Type` header
      is automatically set to `application/json; charset=UTF-8`.
      If specified JSON is an object, then will be encoded into string.   
    * `method` - If not specified and the `data` or `json` option is set, then option `method`
      will be automatically set to `POST`.   

Usage
   
```js
import ajax from '@arturdoruch/tool/lib/ajax';
  
// Optionally set ProcessNoticer to display notice message and loader while sending request.
import ProcessNoticer from '@arturdoruch/process-noticer';
import '@arturdoruch/process-noticer/styles/process-notice.css';

const processNoticer = new ProcessNoticer();
ajax.setProcessNoticer(processNoticer);

// Send POST request with JSON data and header "Content-Type: application/json; charset=UTF-8".
ajax.send({
    url: "https://httpbin.org/post",
    json: {
        "attr": "value"
    }   
}, 'Request notice', true)
    .done(function (responseContent) {
        console.log(responseContent);
    });
```
      
### Local storage

A wrapper for localStorage.
Adds encoding object and array into string of the setting localStorage item.

Usage
```js
import _localStorage from '@arturdoruch/tool/lib/local-storage';

_localStorage.setItem('object', {"foo": "bar"});
_localStorage.setItem('array', ['foo', 'bar']);

console.log(_localStorage.getItem('object'));
console.log(_localStorage.getItem('array'));
```      