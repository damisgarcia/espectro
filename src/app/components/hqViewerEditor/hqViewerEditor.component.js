(function() {
  'use strict';

  angular
    .module('hqReader')
    .component('hqViewerEditor', {
      controller: hqViewerEditorCtrl,
      templateUrl: "app/components/hqViewerEditor/hqViewerEditor.html",
      bindings:{
        imgPlaceholder: "@"
      }
    });

  /** @ngInject */
  function hqViewerEditorCtrl($scope, $element, $log, hotkeys){
    var self = this;

    self.scenes = [];

    self.newScene = {
      translateX: 0,
      translateY: 0,
      translateZ: 0
    }

    self.position = undefined;

    self.onSelect = function(file){
      self.image = file
    }

    self.toScene = function(scene){
      if(angular.isDefined(scene)){
        $element.find('.inner').attr(
          'style', 'transform: translate3d('+ scene.translateX +'%, '+ scene.translateY +'%, '+ scene.translateZ +'px);'
        )
      } else {
        self.toOverview()
      }

      self.scene = scene

      return false;
    }

    self.nextScene = function(){
      if(angular.isDefined(self.position)){
        if( self.position < (self.scenes.length - 1)){
          self.position++;
        } else{
          self.toOverview();
        }
      } else{
        self.position = 0;
      }
      // Navigate to Scene
      self.toScene(self.scenes[self.position]);
    };

    self.backScene = function(){
      if(angular.isDefined(self.position)){
        if( self.position > 0){
          self.position--
        } else{
          return self.toOverview()
        }
      }
      // Navigate to Scene
      self.toScene( self.scenes[self.position] );
    };

    self.toOverview = function(){
      // reset variables
      self.position = undefined;
      self.scene = undefined;
      // Return to overview
      $element.find('.inner').attr(
        'style', 'transform: translate3d(0px,0px,0px);'
      );
    };

    self.updateCamera = function(){
      $element.find('.inner').attr(
        'style', 'transform: translate3d('+ self.newScene.translateX +'%, '+ self.newScene.translateY +'%, '+ self.newScene.translateZ +'px);'
      );
      return false
    }

    self.reset = function(){
      self.newScene = {
        translateX: 0,
        translateY: 0,
        translateZ: 0
      }

      $element.find('.inner').attr(
        'style', 'transform: translate3d(0px,0px,0px);'
      );
    }

    self.save = function(){
      self.scenes.push(angular.copy(self.newScene))
      self.reset()
    }

    // Events
    $element.find('.inner img').on("mousemove", function(event){
      var parentOffset = angular.element(this).parent().offset()
      var elementOffset = angular.element(this).offset()

      var relX = event.pageX - parentOffset.left;
      var relY = event.pageY - parentOffset.top;

      var centerX = elementOffset.left + angular.element(this).width() / 2;
      var centerY = elementOffset.top + angular.element(this).height() / 2;

      $log.log(centerX, centerY);

      self.pageX = parseInt(relX)
      self.pageY = parseInt(relY)

      $scope.$apply()
    });

    // Hotkeys

    hotkeys.bindTo($scope)
      .add({
        combo: 'right',
        description: 'To next scene',
        callback: function() {
          self.nextScene()
        }
      })
      .add({
        combo: 'left',
        description: 'To next scene',
        callback: function() {
          self.backScene()
        }
      });

    return self;
  }

})();
