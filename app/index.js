"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var moment_1 = require("moment");
var message_model_1 = require("./model/message.model");
var messages_html_1 = require("./messages.html");
require("./styles/modules/MessageBox.scss");
require("./styles/modules/MessagesArea.scss");
var especializa_logo_jpg_1 = require("./images/especializa_logo.jpg");
console.log('Index started');
console.dir(new message_model_1.default());
/* eslint no-undef: 0 */
document.getElementById('send').onclick = function () {
    var m = new message_model_1.default(document.getElementById('message').value);
    document.getElementById('messages').innerHTML += messages_html_1.default({
        m: m,
        relativeTime: moment_1.default(m.created).fromNow(),
    });
};
document.getElementById('logo').src = especializa_logo_jpg_1.default;
if (module && module.hot) {
    module.hot.accept();
}
