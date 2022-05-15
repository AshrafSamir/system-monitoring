// import Vue from 'vue';
angular
  .module('appModule')
  .filter('highlight', function ($sce) {
    return function (text, scope) {
      // Vue.set(scope, 'var', scope.input);
      if (scope.input) text = text.replace(new RegExp('(' + scope.input + ')', 'gi'), '<span class="highlighted">' + scope.input + '</span>');
      return $sce.trustAsHtml(text);
    };
  }).component('employeesList', {
    templateUrl: 'components/employees-list/employees-list.html',
    controller: EmployeesListComponent,
    controllerAs: 'EmployeesListComponentVm',
    bindings: {
      employeesList: '<',
    },
  });

function EmployeesListComponent($scope, $stateParams) {
  if ($stateParams.filter) {
    $scope.input = $stateParams.filter;
  }
}
