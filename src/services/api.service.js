import axios from "axios";đsdf
const commonConfig = {
headers: {
	"Content-Type": "application/json",
	Accept: "application/json",
},
};

export default (baseURL) => {
	return axios.create({
		baseURL,
		...commonConfig,
	});
};