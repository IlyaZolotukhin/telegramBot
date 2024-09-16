import { Telegraf, Markup } from 'telegraf'

const token = '7303511071:AAFOX4klhjJzXPjNH2vMnSKZiw799qrmFxo'

const webAppUrl ='https://angular-tg-app-67ea2.web.app'

const bot = new Telegraf(token)

bot.command('start', (ctx) => {
ctx.reply(
    'Добро пожаловать! Нажмите на кнопку ниже чтобы запустить приложение',
    Markup.keyboard([
        Markup.button.webApp(
            'Отправить сообщение',
            `${webAppUrl}/feedback`
        )
    ])
)
})

bot.launch()