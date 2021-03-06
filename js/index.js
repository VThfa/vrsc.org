function newImage(arg) {
  if (document.images) {
    rslt = new Image();
    rslt.src = arg;
    return rslt;
  }
}

function changeImages() {
  if (document.images && (preloadFlag == true)) {
    for (var i = 0; i < changeImages.arguments.length; i += 2) {
      document[changeImages.arguments[i]].src = changeImages.arguments[i + 1];
    }
  }
}

var preloadFlag = false;

function preloadImages() {
  if (document.images) {
    about_vrsc_over = newImage("images/template/about_vrsc-over.gif");
    meetings_events_over = newImage("images/template/meetings_events-over.gif");
    partners_over = newImage("images/template/partners-over.gif");
    rsc_list_over = newImage("images/template/rsc_list-over.gif");
    links_button_over = newImage("images/template/links_button-over.gif");
    contact_us_over = newImage("images/template/contact_us-over.gif");
    tools_resources_over = newImage("images/template/tools_resources-over.gif");
    preloadFlag = true;
  }
}

function MM_preloadImages() { //v3.0
  var d = document; if (d.images) {
    if (!d.MM_p) { d.MM_p = new Array(); }
    var i, j = d.MM_p.length, a = MM_preloadImages.arguments;
    for (i = 0; i < a.length; i++) {
      if (a[i].indexOf("#") != 0) { d.MM_p[j] = new Image; d.MM_p[j++].src = a[i]; }
    }
  }
}

function MM_swapImgRestore() { //v3.0
  var i, x, a = document.MM_sr; for (i = 0; a && i < a.length && (x = a[i]) && x.oSrc; i++) x.src = x.oSrc;
}

function MM_findObj(n, d) { //v4.01
  var p, i, x; if (!d) d = document; if ((p = n.indexOf("?")) > 0 && parent.frames.length) {
    d = parent.frames[n.substring(p + 1)].document; n = n.substring(0, p);
  }
  if (!(x = d[n]) && d.all) x = d.all[n]; for (i = 0; !x && i < d.forms.length; i++) x = d.forms[i][n];
  for (i = 0; !x && d.layers && i < d.layers.length; i++) x = MM_findObj(n, d.layers[i].document);
  if (!x && d.getElementById) x = d.getElementById(n); return x;
}

function MM_swapImage() { //v3.0
  var i, j = 0, x, a = MM_swapImage.arguments; document.MM_sr = new Array; for (i = 0; i < (a.length - 2); i += 3)
    if ((x = MM_findObj(a[i])) != null) { document.MM_sr[j++] = x; if (!x.oSrc) x.oSrc = x.src; x.src = a[i + 2]; }
}
