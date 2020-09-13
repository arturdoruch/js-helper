# Helper

A collection of helpers and wrappers.

## Installation

```
yarn add @arturdoruch/helper
```

## Contents

### Ajax
  
jQuery AJAX request wrapper. Adds functionalities:

* Displaying notice message and loader while request is sending.
* Request options:
    * `json` - Adding option for specifying JSON data to send. If is specify request `Content-Type` header
      is automatically set to `application/json; charset=UTF-8`.
      If specified JSON is an object, then will be encoded into string.   
    * `method` - If not specified and the `data` or `json` option is set, then option `method`
      will be automatically set to `POST`.   

#### Usage
   
<a name="ajax-setting-process-noticer"></a>Set (optionally) ProcessNoticer to display notice message and loader while sending request.

```js
import '@arturdoruch/process-noticer/styles/process-notice.css';
import ProcessNoticer from '@arturdoruch/process-noticer';

// Set ProcessNoticer without options
ajax.setProcessNoticer(); 

// or set ProcessNoticer instance with specified options.
const options = {}; // See available options https://github.com/arturdoruch/js-process-noticer#instance-options.
ajax.setProcessNoticer(new ProcessNoticer(options)); 
```         
   
<a name="ajax-sending-request"></a>Sending request   
   
```js
import ajax from '@arturdoruch/tool/lib/ajax';

// Send POST request with JSON data and header "Content-Type: application/json; charset=UTF-8".
ajax.send({
    url: "https://httpbin.org/post",
    json: {}   
})
    .done(function (responseContent) {
        console.log(responseContent);
    });

// Send request and display notice message and loader.
ajax.send("https://httpbin.org/get", 'Request notice', true);
```   
      
### Local storage

A wrapper for localStorage.
Adds encoding object and array into string of the setting localStorage item.

#### Usage

```js
import _localStorage from '@arturdoruch/tool/lib/local-storage';

_localStorage.setItem('object', {"foo": "bar"});
_localStorage.setItem('array', ['foo', 'bar']);

console.log(_localStorage.getItem('object'));
console.log(_localStorage.getItem('array'));
```      