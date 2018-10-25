// alert('xxxx');
//
// var style = $('body').getAttribute('style');
// console.log(style)


chrome.tabs.executeScript(null,
    {code:"document.body.style.backgroundColor='grey'"});
