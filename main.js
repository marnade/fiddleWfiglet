import figlet from "figlet";

figlet("Damn son,\nwhere'd'th\nyou find this?", function (err, data) {
	if (err) {
		console.log("Something went wrong...");
		console.dir(err);
		return;
	}
	console.log(data);
});
