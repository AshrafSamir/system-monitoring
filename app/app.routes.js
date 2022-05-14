angular.module('appModule')
  .config(($locationProvider) => {
    $locationProvider.html5Mode({
      enabled: true,
    });
  })
  .config(($stateProvider, $urlRouterProvider) => {
    $stateProvider
      .state({
        name: 'app',
        url: '/?filter',
        templateUrl: './pages/home-page/home-page.html',
        controller: 'homeController',
        controllerAs: 'homePageVm',
      })
      .state({
        name: 'team-performance',
        url: '/team-performance',
        template: '<v-performance-page></v-performance-page>',
      })
      .state('otherwise', {
        name: '404',
        template: '<v-page-not-found></v-page-not-found>',
      });

    $urlRouterProvider.otherwise(function ($injector, $location) {
      var state = $injector.get('$state');
      state.go('404');
      return $location.path();
    });
  });
