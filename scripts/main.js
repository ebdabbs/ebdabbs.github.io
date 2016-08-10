/**
 * Created by elizabethdabbs
 */
jQuery(document).ready(function ($) {
    var pathname = window.location.pathname;
    if (pathname == '/') {
        $('.nav-home').addClass('active');
    }
    if (pathname == '/projects/') {
        $('.nav-projects').addClass('active');
    }
    if (pathname == '/art/') {
        $('.nav-artwork').addClass('active');
    }
    if (pathname == '/about/') {
        $('.nav-about').addClass('active');
    }
    if (pathname == '/contact/') {
        $('.nav-contact').addClass('active');
    }
});

