angular
  .module('appModule')
  .filter('highlight', function ($sce) {
    return function (text, input) {
      if (input) text = text.replace(new RegExp('(' + input + ')', 'gi'), '<span class="highlighted">' + input + '</span>');
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
  $scope.$root.$on('inputSearch', function (event, search) {
    $scope.inputValue = search;
  });
  if ($stateParams.filter) {
    $scope.inputValue = $stateParams.filter;
  }
}
