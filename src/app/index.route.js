(function() {
  'use strict';

  angular
    .module('hqReader')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('macromediat1', {
        url: '/macromedia-topico-1',
        templateUrl: 'app/macromedia/topico-1.html',
        controller: 'MacromediaController',
        controllerAs: 'macromedia'
      })
      .state('macromediat2', {
        url: '/macromedia-topico-2',
        templateUrl: 'app/macromedia/topico-2.html',
        controller: 'MacromediaController',
        controllerAs: 'macromedia'
      })
      .state('macromediat3', {
        url: '/macromedia-topico-3',
        templateUrl: 'app/macromedia/topico-3.html',
        controller: 'MacromediaController',
        controllerAs: 'macromedia'
      })
      .state('editor', {
        url: '/editor',
        templateUrl: 'app/editor/editor.html',
        controller: 'EditorController',
        controllerAs: 'editor'
      });

    $urlRouterProvider.otherwise('/macromedia-topico-1');
  }

})();
