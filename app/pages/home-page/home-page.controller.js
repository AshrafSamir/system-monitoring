angular
  .module('appModule')
  .controller('homeController', homePageController);

function homePageController(Employees, $rootScope, $state) {
  const homePageVm = this;
  homePageVm.employees = [];

  this.handleSearch = function (search) {
    $state.go('app', { filter: search });
    $rootScope.$broadcast('inputSearch', search);
  };

  activate();

  function activate() {
    Employees.getEmployees()
      .then(({ data }) => {
        homePageVm.employees = homePageVm.employees.concat(data.employees);
      });
  }
}
