
const nameDorama = `Lazzatli qon`;

const movies = {
    q_1: `BAACAgIAAxkBAAIFAmaz5f_LUUg4sqfywYlMivLTkX7UAAIXNQAC_AHISvtk3Prksxh3NQQ`,
    q_2: `BAACAgIAAxkBAAIFA2az5f-MQsTbmEFMqlJ4nXP3rpHJAAI5NgAC8j3QSsipAe96hmWYNQQ`,
    q_3: `BAACAgIAAxkBAAIFBGaz5f9q2D8AAak6JZYrAAHDK0qBncsAAkQ5AALyPdBKMwPd28xmP0U1BA`,
    q_4: `BAACAgIAAxkBAAIFBWaz5f9Gcq0oBO4YWEk6PYUONX8LAAJdMgAC2gzZSrUAAYm-zOY2qzUE`,
    q_5: `BAACAgIAAxkBAAIFBmaz5f-Q7OPnzmJTKrteKrFC4W_-AAKaLQAClnHwSpTlMOFGt9lDNQQ`,
    q_6: `BAACAgIAAxkBAAIFB2az5f8IFNEt1u0GgnDVai-PuF7KAAJpMgAC2PIAAUtR2eD10rVSvjUE`,
    q_7: `BAACAgIAAxkBAAIFCGaz5f8e3pK3zfXYxCdjGZQEbs0jAAJtFwACyBgAAUiet3j6P4BR-TUE`,
    q_8: `BAACAgIAAxkBAAIFCWaz5f-sk6UCbT9uAdb-dLGimjN_AALUHwACWbR4SupQwdqWK3YyNQQ`,
    q_9: `BAACAgIAAxkBAAIFCmaz5f-TqAjqabfYBKPFuEqop8E7AAJQNwAC268oS5f0DCsQx0N1NQQ`,
    q_10: `BAACAgIAAxkBAAIFC2az5f9mqkk5rsToLXjdEoYC_9nrAAJ_MAAC268wS0EoXLouDkahNQQ`,
    q_11: `BAACAgIAAxkBAAIFDGaz5f-v9N0vOfn-pKRbsrlA8AfiAAICMwAC268wS5ayXBRMibkwNQQ`,
    q_12: `BAACAgIAAxkBAAIFDWaz5f9-gQ-Jtm2zlPpVd0UtAAG0OAACZTQAAocPOUtePYdAcE7ZCTUE`,
    q_13: `BAACAgIAAxkBAAIFDmaz5f8J407b8j-agT6qjQw95KzKAALVNQAChw85S_PL7gyuKO_XNQQ`,
    q_14: `BAACAgIAAxkBAAIFD2az5f9fsNBUE3SPX2xt26EfYKgWAAKcLgAC1LxAS-0swS8u-MRINQQ`,
    q_15: `BAACAgIAAxkBAAIFEGaz5f-7Smu_uOrETZVsuPZELIWNAAK0MAAC1LxIS-sBYlRTrC0PNQQ`,
}

const inlineKeyboard = [
    [
        { text: '1', callback_data: 'd8_q_1' },
        { text: '2', callback_data: 'd8_q_2' },
        { text: '3', callback_data: 'd8_q_3' },
        { text: '4', callback_data: 'd8_q_4' },
        { text: '5', callback_data: 'd8_q_5' },
    ],
    [
        { text: '6', callback_data: 'd8_q_6' },
        { text: '7', callback_data: 'd8_q_7' },
        { text: '8', callback_data: 'd8_q_8' },
        { text: '9', callback_data: 'd8_q_9' },
        { text: '10', callback_data: 'd8_q_10' },
    ],
    [
        { text: '11', callback_data: 'd8_q_11' },
        { text: '12', callback_data: 'd8_q_12' },
        { text: '13', callback_data: 'd8_q_13' },
        { text: '14', callback_data: 'd8_q_14' },
        { text: '15', callback_data: 'd8_q_15' },
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
        case 'd8_q_1':
            ctx.replyWithVideo(movies.q_1, {
                caption: `${nameDorama} \n 1-qism`,
                reply_markup: {
                    inline_keyboard: inlineKeyboard
                }
            })
            break;
        case 'd8_q_2':
            ctx.replyWithVideo(movies.q_2, {
                caption: `${nameDorama}\n 2-qism`,
                reply_markup: {
                    inline_keyboard: inlineKeyboard
                }
            })
            break;
        case 'd8_q_3':
            ctx.replyWithVideo(movies.q_3, {
                caption: `${nameDorama}\n 3-qism`,
                reply_markup: {
                    inline_keyboard: inlineKeyboard
                }
            })
            break;
        case 'd8_q_4':
            ctx.replyWithVideo(movies.q_4, {
                caption: `${nameDorama}\n 4-qism`,
                reply_markup: {
                    inline_keyboard: inlineKeyboard
                }
            })
            break;
        case 'd8_q_5':
            ctx.replyWithVideo(movies.q_5, {
                caption: `${nameDorama}\n 5-qism`,
                reply_markup: {
                    inline_keyboard: inlineKeyboard
                }
            })
            break;
        case 'd8_q_6':
            ctx.replyWithVideo(movies.q_6, {
                caption: `${nameDorama}\n 6-qism`,
                reply_markup: {
                    inline_keyboard: inlineKeyboard
                }
            })
            break;
        case 'd8_q_7':
            ctx.replyWithVideo(movies.q_7, {
                caption: `${nameDorama}\n 7-qism`,
                reply_markup: {
                    inline_keyboard: inlineKeyboard
                }
            })
            break;
        case 'd8_q_8':
            ctx.replyWithVideo(movies.q_8, {
                caption: `${nameDorama}\n 8-qism`,
                reply_markup: {
                    inline_keyboard: inlineKeyboard
                }
            })
            break;
        case 'd8_q_9':
            ctx.replyWithVideo(movies.q_9, {
                caption: `${nameDorama}\n 9-qism`,
                reply_markup: {
                    inline_keyboard: inlineKeyboard
                }
            })
            break;
        case 'd8_q_10':
            ctx.replyWithVideo(movies.q_10, {
                caption: `${nameDorama}\n 10-qism`,
                reply_markup: {
                    inline_keyboard: inlineKeyboard
                }
            })
            break;
        case 'd8_q_11':
            ctx.replyWithVideo(movies.q_11, {
                caption: `${nameDorama}\n 11-qism`,
                reply_markup: {
                    inline_keyboard: inlineKeyboard
                }
            })
            break;
        case 'd8_q_12':
            ctx.replyWithVideo(movies.q_12, {
                caption: `${nameDorama}\n 12-qism`,
                reply_markup: {
                    inline_keyboard: inlineKeyboard
                }
            })
            break;
        case 'd8_q_13':
            ctx.replyWithVideo(movies.q_13, {
                caption: `${nameDorama}\n 13-qism`,
                reply_markup: {
                    inline_keyboard: inlineKeyboard
                }
            })
            break;
        case 'd8_q_14':
            ctx.replyWithVideo(movies.q_14, {
                caption: `${nameDorama}\n 14-qism`,
                reply_markup: {
                    inline_keyboard: inlineKeyboard
                }
            })
            break;
        case 'd8_q_15':
            ctx.replyWithVideo(movies.q_15, {
                caption: `${nameDorama}\n 15-qism`,
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
