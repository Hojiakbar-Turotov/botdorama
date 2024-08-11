const { sendMovies, swichMovies } = require('./movies/index');
const { isVideo } = require('./events/isVideo.js');


function answerMessage(ctx) {
    isVideo(ctx);
    const message = ctx.message.text;
    if (message == '/start') {
        ctx.reply(`Assalomu aleykum botdan foydalanishingiz mumkin. Dorama kodlarini @Dr_eam_dub kanalidan olishingiz mumkin.`);
    } else {
        if (message >= 0 && message <= sendMovies.length) {
            let sendDorama = sendMovies[message - 1];
            sendDorama(ctx);
        } else {
            ctx.reply('Bunday kodli dorama topilmadi. Dorama kodlarini @Dr_eam_dub kanalidan olishingiz mumkin.');
        }
    }
}

const switchMoviesMap = {
    'd1_': 0,
    'd2_': 1,
    'd3_': 2,
    'd4_': 3,
    'd5_': 4,
    'd6_': 5,
    'd7_': 6,
    'd8_': 7,
    'd9_': 8,
    'd10': 9,
    'd11': 10,
    'd12': 11,
    'd13': 12,
    'd14': 13,
    'd15': 14,
    'd16': 15,
    'd17': 16,
    'd18': 17,
    'd19': 18,
    'd20': 19,
    'd21': 20,
    'd22': 21,
    'd23': 22,
    'd24': 23,
    'd25': 24,
    'd26': 25,
    'd27': 26,
    'd28': 27,
    'd29': 28,
    'd30': 29,
    'd31': 30,
    'd32': 31,
    'd33': 32,
    'd34': 33,
    'd35': 34,
    'd36': 35,
    'd37': 36,
    'd38': 37,
    'd39': 38,
    'd40': 39,
    'd41': 40,
    'd42': 41,
    'd43': 42,
    'd44': 43,
    'd45': 44,
    'd46': 45,
    'd47': 46,
    'd48': 47,
    'd49': 48,
    'd50': 49,
    'd51': 50,
    'd52': 51,
    'd53': 52,
    'd54': 53,
    'd55': 54,
    'd56': 55,
    'd57': 56,
    'd58': 57,
    'd59': 58,
    'd60': 59,
    'd61': 60,
    'd62': 61,
    'd63': 62,
    'd64': 63,
    'd65': 64,
    'd66': 65,
    'd67': 66,
    'd68': 67,
    'd69': 68,
    'd70': 69,
    'd71': 70,
    'd72': 71,
    'd73': 72,
    'd74': 73,
    'd75': 74,
    'd76': 75,
    'd77': 76,
    'd78': 77,
    'd79': 78,
    'd80': 79,
    'd81': 80,
    'd82': 81,
    'd83': 82,
    'd84': 83,
    'd85': 84,
    'd86': 85,
    'd87': 86,
    'd88': 87,
    'd89': 88,
    'd90': 89,
    'd91': 90,
    'd92': 91,
    'd93': 92,
    'd94': 93,
    'd95': 94,
    'd96': 95,
    'd97': 96,
    'd98': 97,
    'd99': 98,
};

function answerCallback(ctx, data) {
    let numberDorama = data.substring(0, 3); // Boshidagi ikkita harfni oladi
    const index = switchMoviesMap[numberDorama];
    if (index !== undefined) {
        swichMovies[index](ctx, data);
    } else {
        ctx.reply('Xatolik yuz berdi.');
    }

    // switch(numberDorama){
    //         case 'd1_':
    //             swichMovies[0](ctx, data)
    //         break;
    //         case 'd2_':
    //             swichMovies[1](ctx, data)
    //         break;
    //         case 'd3_':
    //             swichMovies[2](ctx, data)
    //         break;
    //         case 'd4_':
    //             swichMovies[3](ctx, data)
    //         break;
    //         case 'd5_':
    //             swichMovies[4](ctx, data)
    //         break;
    //         case 'd6_':
    //             swichMovies[5](ctx, data)
    //         break;
    //         case 'd7_':
    //             swichMovies[6](ctx, data)
    //         break;
    //         case 'd8_':
    //             swichMovies[7](ctx, data)
    //         break;
    //         default:
    //             ctx.reply('Xatolik yuz berdi.')
    //             break;
    //     }


}

module.exports = { answerMessage, answerCallback };

