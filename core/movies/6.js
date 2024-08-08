
const nameDorama = `O'zganing qasosi🔥`;

const movies = {
    q_1: `BAACAgIAAxkBAAIEhmaz4cZ4ctBKDr0AAXUY1sXHRyhDWwAC-CQAAtP8GEv9nhD_o3aYZTUE`,
    q_2: `BAACAgQAAxkBAAIEh2az4cb8eklBjBm20Kqml_ovhL_GAAIBDgACWjgxU4HdRvK3YlnQNQQ`,
    q_3: `BAACAgUAAxkBAAIEiGaz4cYJ_pQOrNI4XSB-jd4ppVHZAAIWCQACV7M4V-xAwUTmwCzVNQQ`,
    q_4: `BAACAgEAAxkBAAIEiWaz4cagT0iEtgjIfV-z8R6htMJ3AAJzAgACH7lZRxSzu5pprdgXNQQ`,
    q_5: `BAACAgIAAxkBAAIEimaz4cYAAXLb1_TuRs9rY4klRY730wACfCMAAqm6kUvAlu8EFNJMoDUE`,
    q_6: `BAACAgIAAxkBAAIEi2az4cZaY-0RAhJBIjCPrm7jQDywAAJwJgACH-jZSz6Iy8cSINzlNQQ`,
    q_7: `BAACAgIAAxkBAAIEjGaz4cbTaBP4sp_vihCJQ5ZjrI82AAJlIgACvX8QSICh2K7mQzNWNQQ`,
    q_8: `BAACAgIAAxkBAAIEjWaz4cYSK5UlsKmyQ2nJBuHENbc3AAKQJgACPQK4SEogyFFsZwUENQQ`,
    q_9: `BAACAgIAAxkBAAIEjmaz4cZ3QtGXVN7C6AZl9DxgIdOxAAKVJgACPQK4SGnmYD_VaqwcNQQ`,
    q_10: `BAACAgIAAxkBAAIEj2az4cbjCsMMlgdhCE4ommDumfvPAAKPLQACPQLASMAXQIZkWlwNNQQ`,
    q_11: `BAACAgQAAxkBAAIEkGaz4cY4r3ISyLDzJ_KBMrFKmaKiAAIZDgACgX4ZUv3-P_gOrdvENQQ`,
    q_12: `BAACAgIAAxkBAAIEkWaz4cYL4NKLeq0kbkHEZ_uZ5YYVAAL0KAACr1coScsGD3PHmI1UNQQ`,
}

const inlineKeyboard = [
    [
        { text: '1', callback_data: 'd6_q_1' },
        { text: '2', callback_data: 'd6_q_2' },
        { text: '3', callback_data: 'd6_q_3' },
        { text: '4', callback_data: 'd6_q_4' },
        { text: '5', callback_data: 'd6_q_5' },
        { text: '6', callback_data: 'd6_q_6' },
    ],
    [
        { text: '7', callback_data: 'd6_q_7' },
        { text: '8', callback_data: 'd6_q_8' },
        { text: '9', callback_data: 'd6_q_9' },
        { text: '10', callback_data: 'd6_q_10' },
        { text: '11', callback_data: 'd6_q_11' },
        { text: '12', callback_data: 'd6_q_12' },
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
        case 'd6_q_1':
            ctx.replyWithVideo(movies.q_1, {
                caption: `${nameDorama} \n 1-qism`,
                reply_markup: {
                    inline_keyboard: inlineKeyboard
                }
            })
            break;
        case 'd6_q_2':
            ctx.replyWithVideo(movies.q_2, {
                caption: `${nameDorama}\n 2-qism`,
                reply_markup: {
                    inline_keyboard: inlineKeyboard
                }
            })
            break;
        case 'd6_q_3':
            ctx.replyWithVideo(movies.q_3, {
                caption: `${nameDorama}\n 3-qism`,
                reply_markup: {
                    inline_keyboard: inlineKeyboard
                }
            })
            break;
        case 'd6_q_4':
            ctx.replyWithVideo(movies.q_4, {
                caption: `${nameDorama}\n 4-qism`,
                reply_markup: {
                    inline_keyboard: inlineKeyboard
                }
            })
            break;
        case 'd6_q_5':
            ctx.replyWithVideo(movies.q_5, {
                caption: `${nameDorama}\n 5-qism`,
                reply_markup: {
                    inline_keyboard: inlineKeyboard
                }
            })
            break;
        case 'd6_q_6':
            ctx.replyWithVideo(movies.q_6, {
                caption: `${nameDorama}\n 6-qism`,
                reply_markup: {
                    inline_keyboard: inlineKeyboard
                }
            })
            break;
        case 'd6_q_7':
            ctx.replyWithVideo(movies.q_7, {
                caption: `${nameDorama}\n 7-qism`,
                reply_markup: {
                    inline_keyboard: inlineKeyboard
                }
            })
            break;
        case 'd6_q_8':
            ctx.replyWithVideo(movies.q_8, {
                caption: `${nameDorama}\n 8-qism`,
                reply_markup: {
                    inline_keyboard: inlineKeyboard
                }
            })
            break;
        case 'd6_q_9':
            ctx.replyWithVideo(movies.q_8, {
                caption: `${nameDorama}\n 8-qism`,
                reply_markup: {
                    inline_keyboard: inlineKeyboard
                }
            })
            break;
        case 'd6_q_10':
            ctx.replyWithVideo(movies.q_8, {
                caption: `${nameDorama}\n 8-qism`,
                reply_markup: {
                    inline_keyboard: inlineKeyboard
                }
            })
            break;
        case 'd6_q_11':
            ctx.replyWithVideo(movies.q_8, {
                caption: `${nameDorama}\n 8-qism`,
                reply_markup: {
                    inline_keyboard: inlineKeyboard
                }
            })
            break;
        case 'd6_q_12':
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
