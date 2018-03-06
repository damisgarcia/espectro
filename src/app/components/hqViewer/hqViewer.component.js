(function() {
  'use strict';

  angular
    .module('hqReader')
    .component('hqViewer', {
      controller: hqViewerCtrl,
      templateUrl: "app/components/hqViewer/hqViewer.html",
      bindings: {
        imageUrl: "@"
      }
    });

  /** @ngInject */
  function hqViewerCtrl($scope, $element, hotkeys){
    var self = {
      slideIndex: 0
    };

    self.magazineImages = [
      {
        url: 'assets/images/magazine/01.png',
        scenes: [
          {
            translateX: '0%',
            translateY: '30%',
            translateZ: '600px'
          },
          {
            translateX: '0px',
            translateY: '10%',
            translateZ: '650px'
          },
          {
            translateX: '0%',
            translateY: '-25%',
            translateZ: '600px'
          },
          {
            translateX: '20%',
            translateY: '-25%',
            translateZ: '650px'
          },
          {
            translateX: '0%',
            translateY: '-25%',
            translateZ: '650px'
          },
          {
            translateX: '-20%',
            translateY: '-25%',
            translateZ: '650px'
          }
        ]
      },
      {
        url: 'assets/images/magazine/02.png',
        scenes: [
          {
            translateX: '0%',
            translateY: '30%',
            translateZ: '600px'
          },
          {
            translateX: '0px',
            translateY: '10%',
            translateZ: '650px'
          },
          {
            translateX: '0%',
            translateY: '-25%',
            translateZ: '600px'
          },
          {
            translateX: '20%',
            translateY: '-25%',
            translateZ: '650px'
          },
          {
            translateX: '0%',
            translateY: '-25%',
            translateZ: '650px'
          },
          {
            translateX: '-20%',
            translateY: '-25%',
            translateZ: '650px'
          }
        ]
      },
      {
        url: 'assets/images/magazine/03.png',
        scenes: [
          {
            translateX: '0%',
            translateY: '30%',
            translateZ: '600px'
          },
          {
            translateX: '0px',
            translateY: '10%',
            translateZ: '650px'
          },
          {
            translateX: '0%',
            translateY: '-25%',
            translateZ: '600px'
          },
          {
            translateX: '20%',
            translateY: '-25%',
            translateZ: '650px'
          },
          {
            translateX: '0%',
            translateY: '-25%',
            translateZ: '650px'
          },
          {
            translateX: '-20%',
            translateY: '-25%',
            translateZ: '650px'
          }
        ]
      },
      {
        url: 'assets/images/magazine/04.png',
        scenes: [
          {
            translateX: '0%',
            translateY: '30%',
            translateZ: '600px'
          },
          {
            translateX: '0px',
            translateY: '10%',
            translateZ: '650px'
          },
          {
            translateX: '0%',
            translateY: '-25%',
            translateZ: '600px'
          },
          {
            translateX: '20%',
            translateY: '-25%',
            translateZ: '650px'
          },
          {
            translateX: '0%',
            translateY: '-25%',
            translateZ: '650px'
          },
          {
            translateX: '-20%',
            translateY: '-25%',
            translateZ: '650px'
          }
        ]
      },
      {
        url: 'assets/images/magazine/05.png',
        scenes: [
          {
            translateX: '0%',
            translateY: '30%',
            translateZ: '600px'
          },
          {
            translateX: '0px',
            translateY: '10%',
            translateZ: '650px'
          },
          {
            translateX: '0%',
            translateY: '-25%',
            translateZ: '600px'
          },
          {
            translateX: '20%',
            translateY: '-25%',
            translateZ: '650px'
          },
          {
            translateX: '0%',
            translateY: '-25%',
            translateZ: '650px'
          },
          {
            translateX: '-20%',
            translateY: '-25%',
            translateZ: '650px'
          }
        ]
      },
      {
        url: 'assets/images/magazine/06.png',
        scenes: [
          {
            translateX: '0%',
            translateY: '30%',
            translateZ: '600px'
          },
          {
            translateX: '0px',
            translateY: '10%',
            translateZ: '650px'
          },
          {
            translateX: '0%',
            translateY: '-25%',
            translateZ: '600px'
          },
          {
            translateX: '20%',
            translateY: '-25%',
            translateZ: '650px'
          },
          {
            translateX: '0%',
            translateY: '-25%',
            translateZ: '650px'
          },
          {
            translateX: '-20%',
            translateY: '-25%',
            translateZ: '650px'
          }
        ]
      },
      {
        url: 'assets/images/magazine/07.png',
        scenes: [
          {
            translateX: '0%',
            translateY: '30%',
            translateZ: '600px'
          },
          {
            translateX: '0px',
            translateY: '10%',
            translateZ: '650px'
          },
          {
            translateX: '0%',
            translateY: '-25%',
            translateZ: '600px'
          },
          {
            translateX: '20%',
            translateY: '-25%',
            translateZ: '650px'
          },
          {
            translateX: '0%',
            translateY: '-25%',
            translateZ: '650px'
          },
          {
            translateX: '-20%',
            translateY: '-25%',
            translateZ: '650px'
          }
        ]
      }      
    ];

    self.position = undefined

    self.toScene = function(scene){
      if(angular.isDefined(scene)){
        $element.find('#slide-'+self.slideIndex).attr(
          'style', 'transform: translate3d('+ scene.translateX +', '+ scene.translateY +', '+ scene.translateZ +');'
        )
      } else {
        self.toOverview()
      }

      self.scene = scene

      return false;
    }

    self.nextScene = function(){
      if(angular.isDefined(self.position)){
        if( self.position < (self.magazineImages[self.slideIndex].scenes.length - 1)){
          self.position++;
        } else{
          return self.slideIndex < self.magazineImages.length ? self.slideIndex++ : self.toOverview();
        }
      } else{
        self.position = 0;
      };
      // Navigate to Scene
      self.toScene(self.magazineImages[self.slideIndex].scenes[self.position]);
    };

    self.backScene = function(){
      console.log(self.position)
      if(angular.isDefined(self.position)){
        if( self.position > 0){
          self.position--
        } else{
          return self.toOverview()
        }
      } else{
        self.slideIndex > 0 ? self.slideIndex-- : false
        return self.toOverview()
      };
      // Navigate to Scene
      self.toScene( self.magazineImages[self.slideIndex].scenes[self.position] );
    };

    self.toOverview = function(){
      // reset variables
      self.position = undefined;
      self.scene = undefined;
      // Return to overview
      $element.find('#slide-'+ self.slideIndex).attr(
        'style', 'transform: translate3d(0px,0px,0px);'
      );
    };

    // Observers

    // Every time slide change
    $scope.$watch("$ctrl.slideIndex", function(newIndex, oldIndex){
      console.log("Slide Change")
      self.position = undefined
    })

    // Events
    $element.find('.inner img').on("mousemove", function(event){
      var parentOffset = angular.element(this).parent().offset();
      var elementOffset = angular.element(this).offset();
      //or angular.element(this).offset(); if you really just want the current element's offset
      var relX = event.pageX - parentOffset.left;
      var relY = event.pageY - parentOffset.top;

      var centerX = elementOffset.left + angular.element(this).width() / 2;
      var centerY = elementOffset.top + angular.element(this).height() / 2;

      self.pageX = parseInt(relX)
      self.pageY = parseInt(relY)

      $scope.$apply()
    })

    // Hotkeys

    hotkeys.bindTo($scope)
      .add({
        combo: 'right',
        description: 'To next scene',
        callback: function() {
          self.nextScene(self.slideIndex)
        }
      })
      .add({
        combo: 'left',
        description: 'To next scene',
        callback: function() {
          self.backScene(self.slideIndex)
        }
      });

    return self;
  };

})();
