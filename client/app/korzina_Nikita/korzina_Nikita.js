(function() {

    var moduleId = "BucketCtrl";
    angular.module('knr_movie').controller(moduleId, [BucketCtrl]);

    function BucketCtrl() {

        var vm = this;
        vm.bucks = [];

        vm.newBucket = null;
        vm.isViewEditing = false;
        vm.isEdit = false;

        vm.sortField = 'number';
        vm.reverse = false;

        vm.evaluateMeal = evaluateMeal;
        vm.add = add;
        vm.cancel = cancel;
        vm.edit = edit;
        vm.save = save;
        vm.sort = sort;



        activate();

        function activate() {
            vm.bucks = [
                { number: 1, name: 'Фильм "Прибытие" 10 ряд 5 место', amount: 1, cost: 90 },
                { number: 2, name: 'Напиток "Sprite" 0.5 л', amount: 1, cost: 15 },
                { number: 3, name: 'Поп-корн "Большой" 500 г', amount: 1, cost: 30 }
            ];
        }

        function add() {
            vm.newBucket = { number: vm.bucks.length + 1, name: 0, amount: 0, cost: 0 };
            vm.isViewEditing = true;
        }

        function cancel() {
            vm.isViewEditing = false;
            vm.isEdit = false;
            vm.newBucket = null;
        }

        

        function edit(bucket) {
            vm.newBucket = angular.copy(bucket);
            vm.isViewEditing = true;
            vm.isEdit = true;

        }

        function save() {
            if (vm.isEdit) {
                vm.bucks[vm.newBucket.number - 1] = vm.newBucket;
                vm.isEdit = false;
            } else {
                vm.bucks.push(vm.newBucket);
            }
            vm.cancel();
        }

        function evaluateMeal(ticket) {
            if (bucket.cost > 100) return "bad";
            if (bucket.cost > 50 && bucket.cost <= 100) return "normal";
            if (bucket.cost > 0 && bucket.cost <= 50) return "good";
        }

        function sort(fieldName) {
            if (vm.sortField === fieldName) {
                vm.reverse = !vm.reverse;
            } else {
                vm.sortField = fieldName;
                vm.reverse = false;
            }
        }
    }
})()
