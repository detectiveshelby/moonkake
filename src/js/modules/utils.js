/* UTILS
-------------------------------------------------- */

var $utils = {
  work: function () {
    console.log('Ура, вы нашли то, что искали! Хотите крутой сайт - заходите на https://devbrains.ru');
  },

  getPageQuery: function (key) {
    var query = {};

    if (window.location.search) {
      var tmp;
      var q = window.location.search;
      q = q.slice(1);
      q = q.split('&');

      for (var i = 0; i < q.length; i++) {
        tmp = q[i].split('=');
        query[tmp[0]] = decodeURIComponent(tmp[1]);
      };

      if (key) {
        return query[key];
      } else {
        return query;
      };
    };
  },

  scrollTo: function ($element, offset) {
    offset = offset || 0;

    $('html, body').stop().animate({
      scrollTop: $element.offset().top - offset
    }, 500, function () {
      $(document).trigger('scrollToAfterScroll', {
        element: $element
      });
    });
  },

  getScreenIndex: function ($element, offset) {
    var index = 0;

    $element.each(function () {
      var $self = $(this);

      if ($(document).scrollTop() >= $self.offset().top - offset) {
        index = $self.index();
      }
    });

    return index;
  },

  numberFormat: function (number, decimals, dec_point, thousands_sep) {
    var i, j, kw, kd, km;

    if (isNaN(decimals = Math.abs(decimals))) {
      decimals = 2;
    }
    if (dec_point == undefined) {
      dec_point = ',';
    }
    if (thousands_sep == undefined) {
      thousands_sep = '.';
    }

    i = parseInt(number = (+number || 0).toFixed(decimals)) + '';

    if ((j = i.length) > 3) {
      j = j % 3;
    } else {
      j = 0;
    }

    km = j ?
      i.substr(0, j) + thousands_sep :
      '';
    kw = i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + thousands_sep);
    kd = (decimals ?
      dec_point + Math.abs(number - i).toFixed(decimals).replace(/-/, '0').slice(2) :
      '');

    return km + kw + kd;
  },
};

$(document).on('ready', function () {
  $utils.work();
});