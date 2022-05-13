angular
  .module('appModule')
  .filter('highlight', function ($sce) {
    return function (text, searchText) {
      if (searchText) text = text.replace(new RegExp('(' + searchText + ')', 'gi'), '<span class="highlighted">' + searchText + '</span>');
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

function EmployeesListComponent() {}
