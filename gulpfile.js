const { parallel, watch, series, src, dest, task } = require('gulp')
const rm = require('gulp-rm')
const run = require('gulp-run-command').default

const pathHtml = ['./client/public/index.html']
const pathJs = ['./client/src/*.js', './client/src/*/*.js']
const pathImg = ['./client/public/images/*']

const path = {
	HTML: pathHtml,
	ALL: ['./client/src/*.js', 'src/index.html'],
	JS: pathJs,
	Img: pathImg,
	All: pathHtml.concat(pathJs, pathImg),
	DEST: './dist'
};

const clean = _ => {
	return src('./dist/*')
		.pipe(rm())
}

const copyImg = _ => {
	return src('./client/public/images/*')
		.pipe(dest('./dist/images/'))
}

const watchImg = done => {
	watch(path.Img, series(copyImg))
	done()
}

task('parcel-watch', run('parcel watch ./client/public/index.html'));
task('parcel-build', run('parcel build ./client/public/index.html'));

exports.watch = parallel('parcel-watch', watchImg)
exports.build = series(clean, copyImg, 'parcel-build')