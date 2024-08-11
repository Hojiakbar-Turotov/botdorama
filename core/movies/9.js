
const nameDorama = `7 ta birinchi bo'sa`;

const movies = {
    q_1: `BAACAgIAAxkBAAIFeWa4Y0puot61NumOpsrZ7VDRjPCDAAKTGgACKSwwSxSlZGhgez2mNQQ`,
    q_2: `BAACAgIAAxkBAAIFema4Y0olcTHmisiozqumoFyaSXDmAAIsEwACUNApSgKbCXbn6a8MNQQ`,
    q_3: `BAACAgIAAxkBAAIFe2a4Y0oTxFyPTzlKONR3w-Hb_VhAAAL9HAAC8-BJSOawriZbAr1hNQQ`,
    q_4: `BAACAgIAAxkBAAIFfGa4Y0rk6d7M_c3ljhvNxSXP_3K-AALBEgAC6L9wSFuKJGR3rpQhNQQ`,
    q_5: `BAACAgIAAxkBAAIFfWa4Y0rCEZXycaQHzBafUV9lPHL0AAI5EQACDQVxSDWk7Z1UF5lyNQQ`,
    q_6: `BAACAgIAAxkBAAIFfma4Y0qsv1EP_cMSZP_o3v27myhVAAKpEwACkk5xSB98e6cOb5icNQQ`,
    q_7: `BAACAgIAAxkBAAIFf2a4Y0rR23yOCoEoIFerqf5vP0mdAAJGFAACElt5SOkDr05pHo8qNQQ`,
    q_8: `BAACAgIAAxkBAAIFgGa4Y0oFGw7oUV1Fqkpywkr1YeqdAAJtFAAC5CVwSPjRQJavxck5NQQ`,
}

const inlineKeyboard = [
    [
        { text: '1', callback_data: 'd9_q_1' },
        { text: '2', callback_data: 'd9_q_2' },
        { text: '3', callback_data: 'd9_q_3' },
        { text: '4', callback_data: 'd9_q_4' },
    ],
    [
        { text: '5', callback_data: 'd9_q_5' },
        { text: '6', callback_data: 'd9_q_6' },
        { text: '7', callback_data: 'd9_q_7' },
        { text: '8', callback_data: 'd9_q_8' },
    ]
];


function sendDorama(ctx){
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
        case 'd9_q_1':
            ctx.replyWithVideo(movies.q_1, {
                caption: `${nameDorama} \n 1-qism`,
                reply_markup: {
                    inline_keyboard: inlineKeyboard
                }
            })
            break;
        case 'd9_q_2':
            ctx.replyWithVideo(movies.q_2, {
                caption: `${nameDorama}\n 2-qism`,
                reply_markup: {
                    inline_keyboard: inlineKeyboard
                }
            })
            break;
        case 'd9_q_3':
            ctx.replyWithVideo(movies.q_3, {
                caption: `${nameDorama}\n 3-qism`,
                reply_markup: {
                    inline_keyboard: inlineKeyboard
                }
            })
            break;
        case 'd9_q_4':
            ctx.replyWithVideo(movies.q_4, {
                caption: `${nameDorama}\n 4-qism`,
                reply_markup: {
                    inline_keyboard: inlineKeyboard
                }
            })
            break;
        case 'd9_q_5':
            ctx.replyWithVideo(movies.q_5, {
                caption: `${nameDorama}\n 5-qism`,
                reply_markup: {
                    inline_keyboard: inlineKeyboard
                }
            })
            break;
        case 'd9_q_6':
            ctx.replyWithVideo(movies.q_6, {
                caption: `${nameDorama}\n 6-qism`,
                reply_markup: {
                    inline_keyboard: inlineKeyboard
                }
            })
            break;
        case 'd9_q_7':
            ctx.replyWithVideo(movies.q_7, {
                caption: `${nameDorama}\n 7-qism`,
                reply_markup: {
                    inline_keyboard: inlineKeyboard
                }
            })
            break;
        case 'd9_q_8':
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