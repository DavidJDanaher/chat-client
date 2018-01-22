var CLIENT_CLASS = 'client-text';
var BOT_CLASS = 'bot-text';
var BOT_URL = 'https://ava-bot.cf-bdc-z2-dev.discover.com/question';
var CLIENT_TOKEN = '';
var ID_TYPE = {
    session: 'SESSION_ID',
    token: 'TOKEN_ID',
    user: 'USER_ID'
};
var SELECTED_ID_TYPE = ID_TYPE.session;

$(document).ready(function() {
    $('.session-button').on('click', function() {
        var radioId = $('.active [type=radio]')[0].id;

        CLIENT_TOKEN = $('.session-text').val();
        SELECTED_ID_TYPE = ID_TYPE[radioId] ? ID_TYPE[radioId] : ID_TYPE.session;
        $('.chat-window').empty();
    });

    $('.send-button').on('click', function(event) {
        var text = $('#textarea').val();
        var chatWindow = $('.chat-window');

        chatWindow.append(getHtmlString(CLIENT_CLASS, text));
        chatWindow.scrollTop(chatWindow.height());
        $('#textarea').val('');

        // var settings = {
        //     async: true,
        //     crossDomain: true,
        //         url: "https://ava-bot.cf-bdc-z2-dev.discover.com/question",
        //         method: "POST",
        //         headers: {
        //             requestId: "",
        //             contentType: "application/json",
        //             cacheControl: "no-cache",
        //         },
        //         processData: false,
        //         data: {
        //             incomingMessage: text,
        //             user: {
        //                 id: CLIENT_TOKEN,
        //                 idType: SELECTED_ID_TYPE
        //             }
        //         }
        // }

        // console.log(settings);
        //
        // $.ajax(settings)
        //     .done(function (response) {
        //         $('.chat-window:last-child').append(getHtmlString(BOT_CLASS, response.message));
        //     });
    });
});

function getHtmlString(classString, text) {
    return '<div class="row">' +
        '<div class="dialogue ' +
        classString +
        '">'+
        text +
        '</span></div></div>';
}



// Postman json
// var settings = {
//     "async": true,
//     "crossDomain": true,
//         "url": "https://ava-bot.cf-bdc-z2-dev.discover.com/question",
//         "method": "POST",
//         "headers": {
//             "REQUEST-ID": "123415131231231",
//             "Content-Type": "application/json",
//             "Cache-Control": "no-cache",
//             "Postman-Token": "ca586b54-29f4-aec3-6517-73682502233f"
//         },
//         "processData": false,
//         "data": "{\n  \"incomingMessage\": \"What is my account balance?\",\n  \"user\": {\n    \"id\": \"QlZGQTA5YmxMVFBIU3I0RzhVdW5YZ1padDFvPQ\",\n    \"idType\": \"USER_ID\"\n  }\n}"
// }


// var BASE_URL = 'https://swapi.co/api/people/';
// Star Wars test code
//
// var name = '';
// var planetUrl = '';
// getCharacter()
//     .then(function(data) {
//         name = data.name;
//         planetUrl = data.homeWorld;
//
//         getCharacter()
//             .then(function(response) {
//                 $('.chat-window:last-child').append(getHtmlString(BOT_CLASS, name + ' was from ' + response.name));
//             });
//         });

// function getCharacter() {
//     var rand = Math.floor(Math.random() * 87);
//     return $.get(BASE_URL + rand);
// }
//
// function getPlanet(url) {
//     return $.get(url);
// }
