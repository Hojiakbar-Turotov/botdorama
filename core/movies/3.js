const movies = {
    q_1: `BAACAgIAAxkBAAIC3maYkosAAddSWNdDzkwfcMU9CiB_qAACry0AAll0SUql0YpA2G2GFzUE`,
    q_2: `BAACAgIAAxkBAAIC32aYkouRcSuh3DVd7p64_ybu6Y-yAAJPIwACfWpxSnmdrt_AZVwzNQQ`,
    q_3: `BAACAgIAAxkBAAIC4GaYkoufqyXYQPtJRSP1WXdkQU1jAALoJQACgHeASp4UQ4olDWftNQQ`,
    q_4: `BAACAgIAAxkBAAIC4WaYkosmT3adEWXMpl4ITxbrl6eJAAKbJQACBxqgSpR3xpvb5QTxNQQ`,
    q_5: `BAACAgIAAxkBAAIC4maYkoteIE8U5G6qm8GseDp5sEx7AAI2KAACT-24Ss4HBRVJejSKNQQ`,
    q_6: `BAACAgQAAxkBAAIC42aYkoufsKBAorGW3xPhfkFiQshdAAL_EAACbtnoUlHwAAFcTob8jDUE`,
    q_7: `BAACAgIAAxkBAAIC5GaYkot-t4Pe7RRK4Vy0QIU88lhYAALtKgACTmwISGOFK44VRRr6NQQ`,
    q_8: `BAACAgIAAxkBAAIC5WaYkotKmDIJb18o6J-j7hXwV13JAAL8JgACnKBQSHnoNNDNY9UwNQQ`,
    q_9: `BAACAgIAAxkBAAIC5maYkouXN5zuirWqrAH9cDSGNl6HAAK8LAACoJ3ASbBPbKpOXlWuNQQ`,
    q_10: `BAACAgIAAxkBAAIC52aYkouKvr5gqdE7liHbfwcUdPjYAAI3LwAC75FASnxqd-NHUEoLNQQ`,
    q_11: `BAACAgIAAxkBAAIC6GaYkouI65OOxURNF6FJcNtoOaLlAALuLwACVzAwSTBJH550jOt8NQQ`,
    q_12: `BAACAgIAAxkBAAIC6WaYkounOBEn35rfAg-ATZN1cD_qAALwLwACVzAwSQvIMjybr7RbNQQ`,
}

const inlineKeyboard = [
    [
        { text: '1', callback_data: 'd3_q_1' },
        { text: '2', callback_data: 'd3_q_2' },
        { text: '3', callback_data: 'd3_q_3' },
        { text: '4', callback_data: 'd3_q_4' },
        { text: '5', callback_data: 'd3_q_5' },
        { text: '6', callback_data: 'd3_q_6' },
    ],
    [
        { text: '7', callback_data: 'd3_q_7' },
        { text: '8', callback_data: 'd3_q_8' },
        { text: '9', callback_data: 'd3_q_9' },
        { text: '10', callback_data: 'd3_q_10' },
        { text: '11', callback_data: 'd3_q_11' },
        { text: '12', callback_data: 'd3_q_12' },
    ]
];

function sendDorama(ctx) {
    ctx.replyWithVideo(movies.q_1, {
        caption: `Orol  \n 1-qism`,
        reply_markup: {
            inline_keyboard: inlineKeyboard
        }
    })
}

function swichDorama(ctx, data) {
    ctx.deleteMessage();
    switch (data) {
        case 'd3_q_1':
            ctx.replyWithVideo(movies.q_1, {
                caption: `Orol  \n 1-qism`,
                reply_markup: {
                    inline_keyboard: inlineKeyboard
                }
            })
            break;
        case 'd3_q_2':
            ctx.replyWithVideo(movies.q_2, {
                caption: `Orol \n 2-qism`,
                reply_markup: {
                    inline_keyboard: inlineKeyboard
                }
            })
            break;
        case 'd3_q_3':
            ctx.replyWithVideo(movies.q_3, {
                caption: `Orol \n 3-qism`,
                reply_markup: {
                    inline_keyboard: inlineKeyboard
                }
            })
            break;
        case 'd3_q_4':
            ctx.replyWithVideo(movies.q_4, {
                caption: `Orol \n 4-qism`,
                reply_markup: {
                    inline_keyboard: inlineKeyboard
                }
            })
            break;
        case 'd3_q_5':
            ctx.replyWithVideo(movies.q_5, {
                caption: `Orol \n 5-qism`,
                reply_markup: {
                    inline_keyboard: inlineKeyboard
                }
            })
            break;
        case 'd3_q_6':
            ctx.replyWithVideo(movies.q_6, {
                caption: `Orol \n 6-qism`,
                reply_markup: {
                    inline_keyboard: inlineKeyboard
                }
            })
            break;
        case 'd3_q_7':
            ctx.replyWithVideo(movies.q_7, {
                caption: `Orol \n 7-qism`,
                reply_markup: {
                    inline_keyboard: inlineKeyboard
                }
            })
            break;
        case 'd3_q_8':
            ctx.replyWithVideo(movies.q_8, {
                caption: `Orol \n 8-qism`,
                reply_markup: {
                    inline_keyboard: inlineKeyboard
                }
            })
            break;
        case 'd3_q_9':
            ctx.replyWithVideo(movies.q_9, {
                caption: `Orol \n 9-qism`,
                reply_markup: {
                    inline_keyboard: inlineKeyboard
                }
            })
            break;
        case 'd3_q_10':
            ctx.replyWithVideo(movies.q_10, {
                caption: `Orol \n 10-qism`,
                reply_markup: {
                    inline_keyboard: inlineKeyboard
                }
            })
            break;
        case 'd3_q_11':
            ctx.replyWithVideo(movies.q_11, {
                caption: `Orol \n 11-qism`,
                reply_markup: {
                    inline_keyboard: inlineKeyboard
                }
            })
            break;
        case 'd3_q_12':
            ctx.replyWithVideo(movies.q_12, {
                caption: `Orol \n 12-qism`,
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
