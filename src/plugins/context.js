// import lodash from 'lodash';
// import moment from 'moment';
// moment.locale('id');
export default ({ app }, inject) => {
	inject('fungsiku', string => console.log('That was easy!', string))
	// inject('lodash', (string) => lodash)
	// inject('moment', (string) => moment);
	inject('urltofile', (url, filename, mimeType) => {
		return fetch(url)
			.then(function(res) {
				return res.arrayBuffer()
			})
			.then(function(buf) {
				return new File([buf], filename, {
					type: mimeType
				})
			})
	})
}

//   Now the function can be used from context, via this in Vue instances and via this in store actions/mutations.

//   export default {
// mounted(){
//   this.$myInjectedFunction('works in mounted')
// },
// asyncData(context){
//   context.app.$myInjectedFunction('works with context')
// }
//   }
