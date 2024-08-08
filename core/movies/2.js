const movies = {
    q_1: `BAACAgQAAxkBAAIBxWaPTOrnZjZJJZ1tOakR4tKMCQTqAAJiFQACiimQUIY5HUjk1FqlNQQ`,
    q_2: `BAACAgQAAxkBAAIBxmaPTOrHmYnB-nalmZFVL0bSt9AiAAJjFQACiimQUKc8kGZfQSK3NQQ`,
    q_3: `BAACAgQAAxkBAAIBx2aPTOrRR89d-ZimzrpqYwHNgS1cAAJkFQACiimQUPI8gHNdwprZNQQ`,
    q_4: `BAACAgQAAxkBAAIByGaPTOq92KiEc7ZMSH6DhgABD8qIGwACZRUAAoopkFAzgd6LD0hGPTUE`,
    q_5: `BAACAgQAAxkBAAIByWaPTOqhf4S4T617tdblBs8PO0ZQAAJmFQACiimQUInsBi6MqO-NNQQ`,
    q_6: `BAACAgQAAxkBAAIBymaPTOqdEeb3WoHAr5sjKGTM-rctAAJnFQACiimQUMwVTCw2cnVlNQQ`,
    q_7: `BAACAgQAAxkBAAIBy2aPTOqrj00udhrwEtphQPDpUplfAAJoFQACiimQULHcszLIMqWeNQQ`,
    q_8: `BAACAgQAAxkBAAIBzGaPTOrWV9nRWE6WfqyGqBdd0X-zAAJpFQACiimQUK5QWkXWk0NXNQQ`,
    q_9: `BAACAgQAAxkBAAIBzWaPTOpmR36a8CrLaL2itBqsyap5AAJsFQACiimQUDuSNRMfTusJNQQ`,
    q_10: `BAACAgQAAxkBAAIBzmaPTOppGbAF2D5qRDdl3zFqOWu0AAJtFQACiimQUBfPivF6chIlNQQ`,
    q_11: `BAACAgQAAxkBAAIBz2aPTOpUrQrNoVwlNwrpNtPYSuAzAAJuFQACiimQUCYPkyzwWYqSNQQ`,
    q_12: `BAACAgQAAxkBAAIB0GaPTOoBy14GyidSVZWwyG8GOJS9AAJvFQACiimQUN2Ek1gYIRq3NQQ`,
    q_13: `BAACAgQAAxkBAAIB0WaPTOq9Tq78i7h_Dxo4D_M8qIMWAAJwFQACiimQUDKS4Z0xueV8NQQ`,
    q_14: `BAACAgQAAxkBAAIB0maPTOo-AQVXDbCvAlx18Ad833UmAAJxFQACiimQUAuXSn0pyC0XNQQ`,
    q_15: `BAACAgQAAxkBAAIB02aPTOqgObLneHXPZWuwuTqd9tFAAAJ0FQACiimQUBchOCgkBXMONQQ`,
    q_16: `BAACAgQAAxkBAAIB1GaPTOoQiwGiXs_WWrtPy_59jc8fAAJ2FQACiimQUC-6r5vljTIoNQQ`,
    q_17: `BAACAgQAAxkBAAIB1WaPTOpgxD73NtjcK81_wbGQEpONAAJ3FQACiimQUNsJ09uR5IuJNQQ`,
    q_18: `BAACAgQAAxkBAAIB1maPTOqQUnp6rDjc0p-KRdLTfPFCAAJ5FQACiimQUNVUjRlkKMCNNQQ`,
    q_19: `BAACAgQAAxkBAAIB12aPTOp4yDAxqoy0WE2asyeZ-1rUAAJ7FQACiimQUETq7lPbo2VYNQQ`,
    q_20: `BAACAgQAAxkBAAIB2GaPTOqOhcV0zmP0AXtythUpAiqJAAJ8FQACiimQUAT3KvNlFTGJNQQ`,
    q_21: `BAACAgQAAxkBAAIB2WaPTOqAWFsH-SwWZgL5EXGF9QZDAAJ-FQACiimQUMjpCkjgOhYSNQQ`,
    q_22: `BAACAgQAAxkBAAIB2maPTOoRkyhk3BZNUQXZsZPNhrMwAAJ_FQACiimQUD_wLYnSQys3NQQ`,
    q_23: `BAACAgQAAxkBAAIB22aPTOpkRLjNk9mywtxuXYgAAVluVQACgBUAAoopkFCsjdDD0-zRNzUE`,
    q_24: `BAACAgQAAxkBAAIB3GaPTOqPKZ5GTAgsIegubZRTEmHUAAKBFQACiimQUIc0Qhs4szBHNQQ`,
    q_25: `BAACAgQAAxkBAAIB3WaPTOr_SnoEl5UzDxPceL6qE6G9AAKCFQACiimQUO7xsgTsG3qXNQQ`,
}

const inlineKeyboard = [
    [
        { text: '1', callback_data: 'd2_q_1' },
        { text: '2', callback_data: 'd2_q_2' },
        { text: '3', callback_data: 'd2_q_3' },
        { text: '4', callback_data: 'd2_q_4' },
        { text: '5', callback_data: 'd2_q_5' },
    ],
    [
        { text: '6', callback_data: 'd2_q_6' },
        { text: '7', callback_data: 'd2_q_7' },
        { text: '8', callback_data: 'd2_q_8' },
        { text: '9', callback_data: 'd2_q_9' },
        { text: '10', callback_data: 'd2_q_10' },
    ], [
        { text: '11', callback_data: 'd2_q_11' },
        { text: '12', callback_data: 'd2_q_12' },
        { text: '13', callback_data: 'd2_q_13' },
        { text: '14', callback_data: 'd2_q_14' },
        { text: '15', callback_data: 'd2_q_15' },
    ], [
        { text: '16', callback_data: 'd2_q_16' },
        { text: '17', callback_data: 'd2_q_17' },
        { text: '18', callback_data: 'd2_q_18' },
        { text: '19', callback_data: 'd2_q_19' },
        { text: '20', callback_data: 'd2_q_20' },
    ], [
        { text: '21', callback_data: 'd2_q_21' },
        { text: '22', callback_data: 'd2_q_22' },
        { text: '23', callback_data: 'd2_q_23' },
        { text: '24', callback_data: 'd2_q_24' },
        { text: '25', callback_data: 'd2_q_25' },
    ]
];

function sendDorama(ctx) {
    ctx.replyWithVideo(movies.q_1, {
        caption: `Guldan go'zal yigitlar ❤️‍🔥🌹  \n 1-qism`,
        reply_markup: {
            inline_keyboard: inlineKeyboard
        }
    })
}

function swichDorama(ctx, data){
    ctx.deleteMessage();
    switch (data) {
        case 'd2_q_1':
            ctx.replyWithVideo(movies.q_1, {
                caption: `Guldan go'zal yigitlar ❤️‍🔥🌹  \n 1-qism`,
                reply_markup: {
                    inline_keyboard: inlineKeyboard
                }
            })
            break;
        case 'd2_q_2':
            ctx.replyWithVideo(movies.q_2, {
                caption: `Guldan go'zal yigitlar ❤️‍🔥🌹 \n 2-qism`,
                reply_markup: {
                    inline_keyboard: inlineKeyboard
                }
            })
            break;
        case 'd2_q_3':
            ctx.replyWithVideo(movies.q_3, {
                caption: `Guldan go'zal yigitlar ❤️‍🔥🌹 \n 3-qism`,
                reply_markup: {
                    inline_keyboard: inlineKeyboard
                }
            })
            break;
        case 'd2_q_4':
            ctx.replyWithVideo(movies.q_4, {
                caption: `Guldan go'zal yigitlar ❤️‍🔥🌹 \n 4-qism`,
                reply_markup: {
                    inline_keyboard: inlineKeyboard
                }
            })
            break;
        case 'd2_q_5':
            ctx.replyWithVideo(movies.q_5, {
                caption: `Guldan go'zal yigitlar ❤️‍🔥🌹 \n 5-qism`,
                reply_markup: {
                    inline_keyboard: inlineKeyboard
                }
            })
            break;
        case 'd2_q_6':
            ctx.replyWithVideo(movies.q_6, {
                caption: `Guldan go'zal yigitlar ❤️‍🔥🌹 \n 6-qism`,
                reply_markup: {
                    inline_keyboard: inlineKeyboard
                }
            })
            break;
        case 'd2_q_7':
            ctx.replyWithVideo(movies.q_7, {
                caption: `Guldan go'zal yigitlar ❤️‍🔥🌹 \n 7-qism`,
                reply_markup: {
                    inline_keyboard: inlineKeyboard
                }
            })
            break;
        case 'd2_q_8':
            ctx.replyWithVideo(movies.q_8, {
                caption: `Guldan go'zal yigitlar ❤️‍🔥🌹 \n 8-qism`,
                reply_markup: {
                    inline_keyboard: inlineKeyboard
                }
            })
            break;
        case 'd2_q_9':
            ctx.replyWithVideo(movies.q_9, {
                caption: `Guldan go'zal yigitlar ❤️‍🔥🌹 \n 9-qism`,
                reply_markup: {
                    inline_keyboard: inlineKeyboard
                }
            })
            break;
        case 'd2_q_10':
            ctx.replyWithVideo(movies.q_10, {
                caption: `Guldan go'zal yigitlar ❤️‍🔥🌹 \n 10-qism`,
                reply_markup: {
                    inline_keyboard: inlineKeyboard
                }
            })
            break;
        case 'd2_q_11':
            ctx.replyWithVideo(movies.q_11, {
                caption: `Guldan go'zal yigitlar ❤️‍🔥🌹 \n 11-qism`,
                reply_markup: {
                    inline_keyboard: inlineKeyboard
                }
            })
            break;
        case 'd2_q_12':
            ctx.replyWithVideo(movies.q_12, {
                caption: `Guldan go'zal yigitlar ❤️‍🔥🌹 \n 12-qism`,
                reply_markup: {
                    inline_keyboard: inlineKeyboard
                }
            })
            break;
        case 'd2_q_13':
            ctx.replyWithVideo(movies.q_13, {
                caption: `Guldan go'zal yigitlar ❤️‍🔥🌹 \n 13-qism`,
                reply_markup: {
                    inline_keyboard: inlineKeyboard
                }
            })
            break;
        case 'd2_q_14':
            ctx.replyWithVideo(movies.q_14, {
                caption: `Guldan go'zal yigitlar ❤️‍🔥🌹 \n 14-qism`,
                reply_markup: {
                    inline_keyboard: inlineKeyboard
                }
            })
            break;
        case 'd2_q_15':
            ctx.replyWithVideo(movies.q_15, {
                caption: `Guldan go'zal yigitlar ❤️‍🔥🌹 \n 15-qism`,
                reply_markup: {
                    inline_keyboard: inlineKeyboard
                }
            })
            break;
        case 'd2_q_16':
            ctx.replyWithVideo(movies.q_16, {
                caption: `Guldan go'zal yigitlar ❤️‍🔥🌹 \n 16-qism`,
                reply_markup: {
                    inline_keyboard: inlineKeyboard
                }
            })
            break;
        case 'd2_q_17':
            ctx.replyWithVideo(movies.q_17, {
                caption: `Guldan go'zal yigitlar ❤️‍🔥🌹  \n 17-qism`,
                reply_markup: {
                    inline_keyboard: inlineKeyboard
                }
            })
            break;
        case 'd2_q_18':
            ctx.replyWithVideo(movies.q_18, {
                caption: `Guldan go'zal yigitlar ❤️‍🔥🌹  \n 18-qism`,
                reply_markup: {
                    inline_keyboard: inlineKeyboard
                }
            })
            break;
        case 'd2_q_19':
            ctx.replyWithVideo(movies.q_19, {
                caption: `Guldan go'zal yigitlar ❤️‍🔥🌹  \n 19-qism`,
                reply_markup: {
                    inline_keyboard: inlineKeyboard
                }
            })
            break;
        case 'd2_q_20':
            ctx.replyWithVideo(movies.q_20, {
                caption: `Guldan go'zal yigitlar ❤️‍🔥🌹 \n 20-qism`,
                reply_markup: {
                    inline_keyboard: inlineKeyboard
                }
            })
            break;
        case 'd2_q_21':
            ctx.replyWithVideo(movies.q_21, {
                caption: `Guldan go'zal yigitlar ❤️‍🔥🌹 \n 21-qism`,
                reply_markup: {
                    inline_keyboard: inlineKeyboard
                }
            })
            break;
        case 'd2_q_22':
            ctx.replyWithVideo(movies.q_22, {
                caption: `Guldan go'zal yigitlar ❤️‍🔥🌹 \n 22-qism`,
                reply_markup: {
                    inline_keyboard: inlineKeyboard
                }
            })
            break;
        case 'd2_q_23':
            ctx.replyWithVideo(movies.q_23, {
                caption: `Guldan go'zal yigitlar ❤️‍🔥🌹 \n 23-qism`,
                reply_markup: {
                    inline_keyboard: inlineKeyboard
                }
            })
            break;
        case 'd2_q_24':
            ctx.replyWithVideo(movies.q_24, {
                caption: `Guldan go'zal yigitlar ❤️‍🔥🌹 \n 24-qism`,
                reply_markup: {
                    inline_keyboard: inlineKeyboard
                }
            })
            break;
        case 'd2_q_25':
            ctx.replyWithVideo(movies.q_25, {
                caption: `Guldan go'zal yigitlar ❤️‍🔥🌹 \n 25-qism`,
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