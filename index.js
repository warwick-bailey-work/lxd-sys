const fs = require('fs');
const { mdToPdf } = require('md-to-pdf');

(async () => {
	const pdf = await mdToPdf({ path: 'temp/lxd-system.md' }).catch(console.error);

	if (pdf) {
		fs.writeFileSync('dist/lxd-system.pdf', pdf.content);
	}
})()