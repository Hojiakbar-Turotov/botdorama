const nameDorama = `«Qotillar do'koni»`;

const movies = {
    q_1: `BAACAgIAAxkBAAIEZmaz4B4mSuWdskBTkSrcfIvBavhAAALFOgAC1otoSUWSIKa0uSM_NQQ`,
    q_2: `BAACAgIAAxkBAAIEZ2az4B5VGwABHVTCIP-bSt_cHlZ71QACDUEAAqsrYEl9p8hrvFLVtDUE`,
    q_3: `BAACAgQAAxkBAAIEaGaz4B6ghDWWzEwY_ecZFPvXGYj3AALLEAACYUupUeiZ0k2HtwvmNQQ`,
    q_4: `BAACAgIAAxkBAAIEaWaz4B4ytX0N88xFUHgGlkmkf1GgAAJQPQACOPuoSUDWJ9lf9uOYNQQ`,
    q_5: `BAACAgQAAxkBAAIEamaz4B7rXBljL2205kdV-fb0VEwmAAJMFQACvM_xUWhv8R3-LKuPNQQ`,
    q_6: `BAACAgQAAxkBAAIEa2az4B4vKIpZ9FdjF7Wa2I_Jv7naAAKgEwACEWkwUiwCIlKwThRvNQQ`,
    q_7: `BAACAgQAAxkBAAIEbGaz4B67bxrOkZ53fYuZwZMhqAqSAAKgEwAC7zxYUgP70FOp8rLiNQQ`,
    q_8: `BAACAgQAAxkBAAIEbWaz4B46frco8y90l7MuKMcGe0JjAAIwEQACKu-ZUu69NsipB1ReNQQ`,
}

const inlineKeyboard = [
    [
        { text: '1', callback_data: 'd5_q_1' },
        { text: '2', callback_data: 'd5_q_2' },
        { text: '3', callback_data: 'd5_q_3' },
        { text: '4', callback_data: 'd5_q_4' },
    ],
    [
        { text: '5', callback_data: 'd5_q_5' },
        { text: '6', callback_data: 'd5_q_6' },
        { text: '7', callback_data: 'd5_q_7' },
        { text: '8', callback_data: 'd5_q_8' },
    ]
];


function sendDorama(ctx) {
    ctx.replyWithVideo(movies.q_1, {
        caption: `${nameDorama}  \n 1-qism`,
        reply_markup: {
            inline_keyboard: inlineKeyboard
        }
    })
}

function swichDorama(ctx, data) {
    ctx.deleteMessage();
    switch (data) {
        case 'd5_q_1':
            ctx.replyWithVideo(movies.q_1, {
                caption: `${nameDorama} \n 1-qism`,
                reply_markup: {
                    inline_keyboard: inlineKeyboard
                }
            })
            break;
        case 'd5_q_2':
            ctx.replyWithVideo(movies.q_2, {
                caption: `${nameDorama}\n 2-qism`,
                reply_markup: {
                    inline_keyboard: inlineKeyboard
                }
            })
            break;
        case 'd5_q_3':
            ctx.replyWithVideo(movies.q_3, {
                caption: `${nameDorama}\n 3-qism`,
                reply_markup: {
                    inline_keyboard: inlineKeyboard
                }
            })
            break;
        case 'd5_q_4':
            ctx.replyWithVideo(movies.q_4, {
                caption: `${nameDorama}\n 4-qism`,
                reply_markup: {
                    inline_keyboard: inlineKeyboard
                }
            })
            break;
        case 'd5_q_5':
            ctx.replyWithVideo(movies.q_5, {
                caption: `${nameDorama}\n 5-qism`,
                reply_markup: {
                    inline_keyboard: inlineKeyboard
                }
            })
            break;
        case 'd5_q_6':
            ctx.replyWithVideo(movies.q_6, {
                caption: `${nameDorama}\n 6-qism`,
                reply_markup: {
                    inline_keyboard: inlineKeyboard
                }
            })
            break;
        case 'd5_q_7':
            ctx.replyWithVideo(movies.q_7, {
                caption: `${nameDorama}\n 7-qism`,
                reply_markup: {
                    inline_keyboard: inlineKeyboard
                }
            })
            break;
        case 'd5_q_8':
            ctx.replyWithVideo(movies.q_8, {
                caption: `${nameDorama}\n 8-qism`,
                reply_markup: {
                    inline_keyboard: inlineKeyboard
                }
            })
            break;

        default: {
            ctx.reply('Hatolik')
        }
    }
}

module.exports = { sendDorama, swichDorama };

