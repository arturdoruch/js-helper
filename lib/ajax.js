/*
 * (c) Artur Doruch <arturdoruch@interia.pl>
 */

import $ from 'jquery';
import ProcessNoticer from '@arturdoruch/process-noticer';

let _processNoticer;

export default {
    /**
     * @param {ProcessNoticer} [processNoticer] If not specified, the new instance of ProcessNoticer will be created.
     */
    setProcessNoticer(processNoticer) {
        _processNoticer = processNoticer instanceof ProcessNoticer ? processNoticer : new ProcessNoticer();
    },

    /**
     * Sends AJAX request.
     *
     * @param {object|string} options jQuery AJAX request options or request url.
     * @param {string} [options.method] The request method. If not specified and the "data" or "json" option is set,
     *                                  then "method" will be automatically set to "POST".
     * @param {object|string} [options.json] Specifies JSON data to send. If is specified then request "Content-Type" header
     *                                       is automatically set to "application/json; charset=UTF-8".
     *                                       If specified JSON is an object, then will be encoded into string.
     * @param {string} [noticeMessage]
     * @param {boolean} [displayNoticeLoader = false]
     *
     * @return {{}}
     */
    send(options, noticeMessage, displayNoticeLoader) {
        if (_processNoticer && (noticeMessage || displayNoticeLoader)) {
            var notice = _processNoticer.add(noticeMessage, displayNoticeLoader);
            _processNoticer.display();
        }

        if (typeof options !== 'string') {
            options = prepareOptions(options);
        }

        return $.ajax(options)
            .always(function() {
                if (notice) {
                    _processNoticer.remove(notice);
                }
            });
    },

    /*
     * @todo Test this function.
     *
     * Gets HTML template, fills with data and appends to the element.
     *
     * @param {HTMLElement|jQuery|string} containerElement The HTMLElement or jQuery, or CSS selector of the element,
     *                                                     to append the template content.
     * @param {string} url
     * @param {{}|string} [data] Data to pass to the template.
     *
     * @returns {{}}
     */
    /*function appendView(containerElement, url, data) {
        const options = prepareOptions({
            url: url,
            data: data
        });

        return $.ajax(options).done(function(html) {
            $(containerElement).show().html(html);
        });
    }*/
};

/**
 * @param {{}} options
 * @returns {{}}
 */
function prepareOptions(options) {
    if (!options.method && (options.data || options.json)) {
        options.method = 'POST';
    }

    if (options.json) {
        if (!options.contentType) {
            options.contentType = 'application/json; charset=UTF-8';
        }

        if (typeof options.json !== 'string') {
            options.data = JSON.stringify(options.json);
        }

        delete options.json;
    }

    return options;
}
