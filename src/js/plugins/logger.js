import debug from 'debug'

global.log = window.log = debug('app:log')
process.env.NODE_ENV === 'development'
	? debug.enable('app:log')
	: debug.disable('app:log')

log(`Logging is enabled!, NODE_ENV: ${process.env.NODE_ENV}`)
