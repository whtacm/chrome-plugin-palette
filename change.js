var style = 'background-color: #3f3f3f!important;' +
    'color: #c8c8c8!important;';// +
    // 'font-family: Kai,Kaiti SC,KaiTi,BiauKai,\\6977\4F53,\\6977\4F53_GB2312,Songti SC,serif !important;' +
    // '';

var linkstyle = 'text-decoration: underline!important;' +
		'color: #039BE5!important;';

document.querySelector('body').setAttribute('style', style);
var elements = document.querySelectorAll('*');
console.log(elements);
for (var i = 0; i < elements.length; i++) {
    try {
        elements[i].setAttribute('style', style);
    } catch (err) {
        console.log(err)
    }
}

var links = document.querySelectorAll('body a');
console.log(links);
for (var i = 0; i < links.length; i++) {
    try {
        links[i].setAttribute('style', linkstyle);
    } catch (err) {
        console.log(err)
    }
}
