const dotenv = require('dotenv');
dotenv.config();


function isVideo(ctx) {
    const videoFileId = ctx.message.video;
    if (videoFileId) {
        ctx.telegram.sendMessage(process.env.adminId, `Yuborilgan video nomi: ${ctx.message.caption}, \n file_id: \n <code>\`${ctx.message.video.file_id}\`</code>`,
            { parse_mode: 'HTML' })
    }
}


module.exports = { isVideo };