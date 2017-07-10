import axios from 'axios';
import env from '../config/env';

let util = {

};
util.title = function(title) {
    title = title ? title + ' - Home' : 'iView project';
    window.document.title = title;
};

const ajaxUrl = 'http://localhost:8888';
// const ajaxUrl = 'http://rapapi.org/mockjsdata/21170';

/*const ajaxUrl = env === 'development' ?
    'http://127.0.0.1:8888' :
    env === 'production' ?
    'https://www.url.com' :
    'https://debug.url.com';*/

util.ajax = axios.create({
    baseURL: ajaxUrl,
    timeout: 30000
});

export default util;