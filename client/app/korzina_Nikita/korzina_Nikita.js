(function() {

    var moduleId = "bucCtrl";
    angular.module("comeApp").controller(moduleId, [bucCtrl]);

    function bucCtrl() {

        var vm = this;
        origin;

        vm.editedBuc = null;
        vm.inViewEditing = false;


        vm.sortField = "nomer";
        vm.reverse = false;
        vm.meals = [];

        vm.add = add;
        vm.cancel = cancel;
        vm.edit = edit;
        vm.remove = remove;
        vm.save = save;
        vm.toggleSortField = toggleSortField;

        init();

        function init() {

            vm.meals = [{
                nomer: '1',
                name: 'Нефть',
                count: 2,
                price: 60,
            }, {
                nomer: '2',
                name: 'Братья',
                count: 1,
                price: 70,
            }, {
                nomer: '3',
                name: 'Орешки',
                count: 1,
                price: 12,
            }];


        }

        function add() {
            vm.isViewEditing = true;

        }

        function cancel() {
            vm.isViewEditing = false;
            vm.editedBuc = null;
        }

        function edit(buc) {
            vm.isViewEditing = true;
            origin = buc;
            vm.editedBuc = {};  
            angular.copy(buc, vm.editedBuc)
        }

        function remove(buc) {
            console.log('разработка remove');
        }

        function save() {
            if (vm.sortField === fieldName) {
                vm.reverse = !vm.reverse;
            } else {  
                angular.copy(vm.editedBuc, origin);            }
        }


        function toggleSortField(fieldName) {
            if (vm.sortField == fieldName) {
                vm.reverse = !vm.reverse;
            } else {
                vm.sortField = fieldName;
                vm.reverse = false;
            }
        }
    }

})();
