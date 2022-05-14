angular
  .module('appModule')
  .controller('homeController', homePageController);

function homePageController(Employees, $scope, $state) {
  const homePageVm = this;
  homePageVm.employees = [];
  homePageVm.input = '';

  this.handleSearch = function (search) {
    homePageVm.input = search;
    $state.go('app', { filter: search });
  };

  activate();

  function activate() {
    Employees.getEmployees()
      .then(({ data }) => {
        homePageVm.employees = homePageVm.employees.concat(data.employees);
      });
  }
}
