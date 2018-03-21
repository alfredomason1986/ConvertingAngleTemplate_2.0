// (function() {
//   'use strict';

//   angular
//     .module('app.core', [
//       'ngAnimate', 'ngSanitize',
//       'blocks.exception', 'blocks.logger', 'blocks.router',
//       'ui.router', 'ngplus'
//     ]);
// })();

(function() {
  'use strict';

  angular
      .module('app.core', [
          'ngRoute',
          'ngAnimate',
          'ngStorage',
          'ngCookies',
          'pascalprecht.translate',
          'ui.bootstrap',
          'ui.router',
          'oc.lazyLoad',
          'cfp.loadingBar',
          'ngSanitize',
          'ngResource',
          'tmh.dynamicLocale',
          'ui.utils',
        //   'blocks.exception', 'blocks.logger', 'blocks.router',
          'ngplus'
      ]);
})();