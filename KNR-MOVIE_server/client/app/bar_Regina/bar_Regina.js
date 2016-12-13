(function() {

    var moduleId = "bar_Regina";
    angular.module("knr_movie").controller(moduleId, ['$http', bar_Regina]);

    function bar_Regina($http) {

        var vm = this;
        vm.add = add;
        vm.edit = edit;
        vm.delete = del;
        vm.save = save;
        vm.cancel = cancel;
        vm.sort = sort;
        vm.table = [];
        vm.dropdown_water = [];
        vm.dropdown_liter = [];
        vm.dropdown_snack = [];
        vm.current_row = {};
        vm.filterByTask = "";
        vm.sort_field = "";
        vm.reverse = false;
        vm.is_edit = false;
        vm.filter_water = "";
        vm.filter_liter = "";
        vm.filter_snack = "";

        init();

        function init() {

            vm.dropdown_water = [
                'Кока-кола',
                'Фанта',
                'Спрайт',
                'Вода',
                'Сок',
                'Попкорн'
            ];

            vm.dropdown_liter = [
                '0.5',
                '1'
            ];

            vm.dropdown_snack = [
                'укроп',
                'петрушка',
                'перчик'
            ];

            $http({
                method: 'GET',
                url: '/api/Bar'
            }).then(function successCallback(response) {
                vm.table = response.data;
            }, function errorCallback(response) {
                // called asynchronously if an error occurs
                // or server returns response with an error status.
                console.log(response);
                vm.table = [];
            });
        }


        function edit(row) {
            console.log('edit');
            vm.is_edit = true;
            vm.current_row = angular.copy(row);
        }

        function add() {
            console.log('add');
            vm.is_edit = true;
            vm.current_row = { number: vm.table.length+1 };
        }

        function del(row) {
            console.log("delete");
            $http({
                method: 'DELETE',
                url: '/api/Bar/' + row.number
            }).then(function successCallback(response) {
                vm.table = response.data;
                console.log(response.data);
            }, function errorCallback(response) {
                console.log("error delete " + responce);
            });
        }

        function save() {
            console.log("save");
            vm.is_edit = false;
            var parameter = JSON.stringify(vm.current_row);
            $http.post('/api/Bar', parameter).then(function successCallback(response) {
                vm.table = response.data;
            }, function errorCallback(response) {
                console.log(response.statusText);
            });
        }

        function cancel() {
            console.log('canсel');
            vm.is_edit = false;
            vm.current_row = null;
        }

        function sort(field_name) {
            console.log('sort');
            vm.reverse = !vm.reverse;
            vm.sort_field = field_name;
        }
    }
})();