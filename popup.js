// Copyright (c) 2012 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.


function click(e) {
    // chrome.tabs.executeScript(null,
    //     {code:"document.body.style.backgroundColor='grey'"});
    chrome.tabs.executeScript(null,
        {file:"change.js"});
    window.close();
}

document.addEventListener('DOMContentLoaded', function () {
    var buttons = document.querySelectorAll('button');
    for (var i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', click);
    }
});

chrome.tabs.onCreated.addListener(function(tab) {
    console.log(tab);
});