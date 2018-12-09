const got = require("got");
const TC_API_PREFIX = "https://www.threatcrowd.org/searchApi/v2/";
const API = {
	getAntivirusURL(item) {
		return TC_API_PREFIX + "antivirus/report/?antivirus=``" + item;
	},
	getFileURL(item) {
		return TC_API_PREFIX + "file/report/?resource=" + item;
	},
	getIPURL(item) {
		return TC_API_PREFIX + "ip/report/?ip=" + item;
	},
	getEmailURL(item) {
		return TC_API_PREFIX + "email/report/?email=" + item;
	},
	getDomainURL(item) {
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
