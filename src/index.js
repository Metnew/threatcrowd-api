const got = require("got");
const TC_API_PREFIX = "https://www.threatcrowd.org/searchApi/v2/";
const API = {
	getAntivirus(item) {
		return TC_API_PREFIX + "antivirus/report/?antivirus=``" + item;
	},
	getFile(item) {
		return TC_API_PREFIX + "file/report/?resource=" + item;
	},
	getIP(item) {
		return TC_API_PREFIX + "ip/report/?ip=" + item;
	},
	getEmail(item) {
		return TC_API_PREFIX + "email/report/?email=" + item;
	},
	getDomain(item) {
		return TC_API_PREFIX + "domain/report/?domain=" + item;
	}
};

module.exports = Object.keys(API)
	.map(a => {
		return {
			[a]: async item => got(API[a](item))
		};
	})
	.reduce((a, b) => {
		return { ...a, ...b };
	});
