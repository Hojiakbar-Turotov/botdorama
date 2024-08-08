
const nameDorama = `🎬 Maktab hamshirasi hayoti`;

const movies = {
    q_1: `BAACAgQAAxkBAAIE7Gaz5U2lewyk2vhiQgIjrFcsX0tfAALQEAACGXnBUbFpZNbTZZWwNQQ`,
    q_2: `BAACAgQAAxkBAAIE7Waz5U3dMgVFhrxuHxGmBpnkbOBtAAJLEQACGXnBUY6PDniIp5AbNQQ`,
    q_3: `BAACAgQAAxkBAAIE7maz5U1PCQyT6SJEeWOHmCHxB_VCAAIqDgACGH3BUYL0hTMgO__XNQQ`,
    q_4: `BAACAgQAAxkBAAIE72az5U0wX9-C9-I7C4C4KdOO1_QPAAIpDgACGH3BUfQd7TPYuUT3NQQ`,
    q_5: `BAACAgQAAxkBAAIE8Gaz5U0Gy7ixiApa7NJOOO1vum2oAALpEQAD-vlThvSmnjSLiY41BA`,
    q_6: `BAACAgQAAxkBAAIE8Waz5U0ugdoG81JkRhtSP6E4Sx9CAAINEgAD-vlTbS_gwXJPDIg1BA`,
}

const inlineKeyboard = [
    [
        { text: '1', callback_data: 'd7_q_1' },
        { text: '2', callback_data: 'd7_q_2' },
        { text: '3', callback_data: 'd7_q_3' },
        { text: '4', callback_data: 'd7_q_4' },
        { text: '5', callback_data: 'd7_q_5' },
        { text: '6', callback_data: 'd7_q_6' },
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
        case 'd7_q_1':
            ctx.replyWithVideo(movies.q_1, {
                caption: `${nameDorama} \n 1-qism`,
                reply_markup: {
                    inline_keyboard: inlineKeyboard
                }
            })
            break;
        case 'd7_q_2':
            ctx.replyWithVideo(movies.q_2, {
                caption: `${nameDorama}\n 2-qism`,
                reply_markup: {
                    inline_keyboard: inlineKeyboard
                }
            })
            break;
        case 'd7_q_3':
            ctx.replyWithVideo(movies.q_3, {
                caption: `${nameDorama}\n 3-qism`,
                reply_markup: {
                    inline_keyboard: inlineKeyboard
                }
            })
            break;
        case 'd7_q_4':
            ctx.replyWithVideo(movies.q_4, {
                caption: `${nameDorama}\n 4-qism`,
                reply_markup: {
                    inline_keyboard: inlineKeyboard
                }
            })
            break;
        case 'd7_q_5':
            ctx.replyWithVideo(movies.q_5, {
                caption: `${nameDorama}\n 5-qism`,
                reply_markup: {
                    inline_keyboard: inlineKeyboard
                }
            })
            break;
        case 'd7_q_6':
            ctx.replyWithVideo(movies.q_6, {
                caption: `${nameDorama}\n 6-qism`,
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
