const nameDorama = `Ojiz Qahramon`;

const movies = {
    q_1: `BAACAgQAAxkBAAIDCGaYlAl1HgqYumWFpp92qFwVP-_UAALlDwACg1AYUMAZpzmYVU0WNQQ`,
    q_2: `BAACAgQAAxkBAAIDCWaYlAkhfXN_ebl6lrHlh4e_qeKJAAJXDwACyWZBUCqq0pcdKnnVNQQ`,
    q_3: `BAACAgQAAxkBAAIDCmaYlAmIOCg7vIRhCHkne8T5xLMgAAJuEQACooRZUFAlcEs6ZFTeNQQ`,
    q_4: `BAACAgQAAxkBAAIDC2aYlAn2qAg58mUeXffbbEncFXwjAAKnDwAC1aGoUN4qUDuED5JdNQQ`,
    q_5: `BAACAgEAAxkBAAIDDGaYlAl5cDxxOIbqLrcuTwjDnvV9AAI8AwACdSOpRHSgxYiRdoRJNQQ`,
    q_6: `BAACAgIAAxkBAAIDDWaYlAn7vkz_EHdeI952DA6Y791nAAJVKQACzL6pSKOWHWqGNzfvNQQ`,
    q_7: `BAACAgIAAxkBAAIDDmaYlAlo2qogP83EuaBl-INdATjmAALuJQACyDvJSGb1D9cmlDVcNQQ`,
    q_8: `BAACAgQAAxkBAAIDD2aYlAnQ8tbl9BKKPFwJXoCV_de3AAIvDgACLSLQUIqoMVXdFJY9NQQ`,
}

const inlineKeyboard = [
    [
        { text: '1', callback_data: 'd4_q_1' },
        { text: '2', callback_data: 'd4_q_2' },
        { text: '3', callback_data: 'd4_q_3' },
        { text: '4', callback_data: 'd4_q_4' },
    ],
    [
        { text: '5', callback_data: 'd4_q_5' },
        { text: '6', callback_data: 'd4_q_6' },
        { text: '7', callback_data: 'd4_q_7' },
        { text: '8', callback_data: 'd4_q_8' },
    ]
];

function sendDorama(ctx) {
    ctx.replyWithVideo(movies.q_1, {
        caption: `${nameDorama} \n 1-qism`,
        reply_markup: {
            inline_keyboard: inlineKeyboard
        }
    })
}

function swichDorama(ctx, data) {
    ctx.deleteMessage();
    switch (data) {
        case 'd4_q_1':
            ctx.replyWithVideo(movies.q_1, {
                caption: `${nameDorama} \n 1-qism`,
                reply_markup: {
                    inline_keyboard: inlineKeyboard
                }
            })
            break;
        case 'd4_q_2':
            ctx.replyWithVideo(movies.q_2, {
                caption: `${nameDorama}\n 2-qism`,
                reply_markup: {
                    inline_keyboard: inlineKeyboard
                }
            })
            break;
        case 'd4_q_3':
            ctx.replyWithVideo(movies.q_3, {
                caption: `${nameDorama}\n 3-qism`,
                reply_markup: {
                    inline_keyboard: inlineKeyboard
                }
            })
            break;
        case 'd4_q_4':
            ctx.replyWithVideo(movies.q_4, {
                caption: `${nameDorama}\n 4-qism`,
                reply_markup: {
                    inline_keyboard: inlineKeyboard
                }
            })
            break;
        case 'd4_q_5':
            ctx.replyWithVideo(movies.q_5, {
                caption: `${nameDorama}\n 5-qism`,
                reply_markup: {
                    inline_keyboard: inlineKeyboard
                }
            })
            break;
        case 'd4_q_6':
            ctx.replyWithVideo(movies.q_6, {
                caption: `${nameDorama}\n 6-qism`,
                reply_markup: {
                    inline_keyboard: inlineKeyboard
                }
            })
            break;
        case 'd4_q_7':
            ctx.replyWithVideo(movies.q_7, {
                caption: `${nameDorama}\n 7-qism`,
                reply_markup: {
                    inline_keyboard: inlineKeyboard
                }
            })
            break;
        case 'd4_q_8':
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
