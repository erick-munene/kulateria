(function() {
  
  angular.module('recipeFinder', [])
    
    .controller('itemListCtrl', function($scope, $timeout) {
    $scope.items = [{
      id: '1',
      name: 'Gerko Burger',
      image: 'https://40.media.tumblr.com/tumblr_mbikokGRuo1r4tgazo1_500.png',
      ingredients: [
        'Sliced Mature Cheddar Cheese',
        'Gerkins',
        'Tomato Sauce',
        'Mayo',
        'Beef Burger'
      ]
    }, {
      id: '2',
      name: 'Chicky Chicken',
      image: 'https://31.media.tumblr.com/3388d45870d927ea72879d4680898b98/tumblr_inline_mzh3nzp1Oq1s6sqjb.png',
      ingredients: [
        'Breadcrumbs',
        'Chicken',
        'Mayo',
        'Bacon'
      ]
    }, {
      id: '3',
      name: 'Cheesy Pizza',
      image: 'http://www.palermospizza.com/Media/Default/Our%20Pizzas/Primo%20Thin/slice_PT_Margherita.png',
      ingredients: [
        'Blue Cheese',
        'Red Peppers',
        'Tomatoes',
        'Pizza Dough'
      ]
    }];

    $scope.index = 1;

    $scope.prev = function() {
      if ($scope.index == 1) {
        return false;
      } else {
        navigate();
        var indexChange = function() {
          $scope.index--;
        }
      }
      $timeout(indexChange, 500);
    }
    $scope.next = function() {
      if ($scope.index == $scope.items.length) {
        return false;
      } else {
        navigate();
        var indexChange = function() {
          $scope.index++;
        }
      }
      $timeout(indexChange, 500);
    }
  });

  function navigate() {
    setTimeout(function() {
      $(".menu_item__inner").find("img, h2").css({
        'transform': 'translateX(-500px)',
        'opacity': '0',
        'transition': 'all cubic-bezier(0.600, -0.280, 0.735, 0.045) .5s'
      })
    });
    setTimeout(function() {
      $(".menu_item__inner").find("img, h2").css({
        'transform': 'translateX(0)',
        'opacity': '1',
        'transition': 'all ease-in-out .5s'
      });
    }, 1000);
    $(".menu_recipe__list").find("h2, ul").css({
      'transform': 'translateY(-25px)',
      'opacity': '0',
      'transition': 'all ease-in-out .5s'
    })
    setTimeout(function() {
      $(".menu_recipe__list").find("h2, ul").css({
        'transform': 'translateY(0)',
        'opacity': '1',
        'transition': 'all ease-in-out .5s'
      })
    }, 1000);
  }

})();