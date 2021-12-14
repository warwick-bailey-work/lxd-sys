module.exports = function (grunt) {

	grunt.initConfig({

		clean: {
			contents: ['dist/*', 'temp/**/*']
		},
		copy: {
			images: {
				files: [{ 
					expand: true,
					cwd: 'md/images',
					src: '**/*',
					dest: 'temp/images/',
					filter: 'isFile'
				},]
			},

		},
		concat: {
			md: {
				src: ['md/*.md'],
				dest: 'temp/lxd-system.md'
			},
		},
		run: {
			options: {
			},
			md2pdf: {
				cmd: 'node',
				args: ['index.js']
			}
		},
	});

	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-run');

	grunt.registerTask('default', ['clean','copy:images', 'concat:md', 'run:md2pdf']);
}
