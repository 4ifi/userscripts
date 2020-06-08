// ==UserScript==
// @name          Hidden Scrollbars
// @author        4ifi
// @description	  Hide scrollbars in Chrome/Firefox/Edge/IE
// @run-at        document-start
// @version       1.0
// ==/UserScript==
(function() {
    var css = [
        "body { -ms-overflow-style: none; }",
        "body { overflow: -moz-scrollbars-none; }",
        "body ::-webkit-scrollbar { width: 0 !important }",
        "body::-webkit-scrollbar {",
        "display: none !important;",
        "}"
    ].join("\n");
    if (typeof GM_addStyle != "undefined") {
        GM_addStyle(css);
    } else if (typeof PRO_addStyle != "undefined") {
        PRO_addStyle(css);
    } else if (typeof addStyle != "undefined") {
        addStyle(css);
    } else {
        var node = document.createElement("style");
        node.type = "text/css";
        node.appendChild(document.createTextNode(css));
        var heads = document.getElementsByTagName("head");
        if (heads.length > 0) {
            heads[0].appendChild(node);
        } else {
            // no head yet, stick it whereever
            document.documentElement.appendChild(node);
        }
    }
})();
