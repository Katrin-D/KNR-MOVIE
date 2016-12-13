(function() {

    var moduleId = "bar_Regina";
    angular.module("knr_movie").controller(moduleId, [bar_Regina]);

    function bar_Regina() {

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
        vm.is_edit = false;
        vm.current_row = {};
        vm.filterByTask = "";
        vm.sort_field = "";
        vm.reverse = false;
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

            vm.table = [{
                number: 1,
                water: vm.dropdown_water[0],
                liter: vm.dropdown_liter[1],
                snack: vm.dropdown_snack[2]
            }, {
                number: 2,
                water: vm.dropdown_water[3],
                liter: vm.dropdown_liter[0],
                snack: vm.dropdown_snack[1]
            }];
        }


        function edit(row) {
            console.log('edit');
            vm.is_edit = true;
            vm.current_row = angular.copy(row);
        }

        function add() {
            console.log('add');
            vm.is_edit = true;
            vm.current_row = {
                number: vm.table.length + 1,
                water: '',
                liter: '',
                snack: ''
            }
        }

        function del(row) {
            console.log("delete");
            for (var i = 0; i < vm.table.length; i++) {
                if (row.number == vm.table[i].number) {
                    vm.table.splice(i, 1);
                }
            }
        }

        function save() {
            console.log("save");
            
            if (vm.current_row !== null) {
                if (!vm.is_edit) {
                    vm.table.push(vm.current_row);
                } else {
                    vm.table[vm.current_row.number - 1] = vm.current_row;
                }
            }
            vm.is_edit = false;
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