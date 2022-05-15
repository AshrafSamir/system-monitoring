angular
  .module('appModule')
  .controller('homeController', homePageController);

function homePageController(Employees, $scope, $state) {
  const homePageVm = this;
  homePageVm.employees = [];

  this.handleSearch = function (search) {
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
