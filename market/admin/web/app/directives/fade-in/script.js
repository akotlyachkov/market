angular.module('router').directive('fadeIn', function () {
    //todo Надо переименовать fadeIn с префиксом
    return {
        restrict: 'A',
        link: function ($scope, $element, attrs) {

            $element.addClass("ng-hide-remove");
            $element.on('load', function () {

                $element.addClass("ng-hide-add");
            });
        }

    }
});