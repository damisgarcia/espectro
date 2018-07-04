(function () {
    'use strict';

    angular
        .module('hqReader')
        .component('hqNavigation', {
            controller: hqViewerCtrl,
            templateUrl: "app/components/hqNavigation/hqNavigation.html"
        });

    /** @ngInject */
    function hqViewerCtrl($mdSidenav, $state, $timeout) {
        var self = {
            navId: 'leftMenu'
        }

        self.to = function(state){
            $state.go(state)
            $timeout(angular.bind(this, self.closeMenu), 400)
        }

        self.openMenu = function () {
            $mdSidenav(self.navId).open()
        }

        self.closeMenu = function () {
            $mdSidenav(self.navId).close()
        }        

        return self;
    }

})();
