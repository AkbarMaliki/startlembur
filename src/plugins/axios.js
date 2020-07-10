export default function({ $axios, redirect }, con) {
	if (process.browser) {
		$axios.onRequest(config => {
			config.headers['Content-Type'] = 'application/json'
			config.headers['Access-Control-Allow-Origin'] = '*'
			config.headers['Authorization'] = localStorage.getItem(
				'auth._token.local'
			)
		})
	}
}
