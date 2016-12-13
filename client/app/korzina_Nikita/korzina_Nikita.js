(function() {

<<<<<<< HEAD
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
=======
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

>>>>>>> 7957cfdb398415ab354683f539a7e4ccfd63ce7d
        }

        function cancel() {
            vm.isViewEditing = false;
<<<<<<< HEAD
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
=======
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
>>>>>>> 7957cfdb398415ab354683f539a7e4ccfd63ce7d
                vm.reverse = !vm.reverse;
            } else {
                vm.sortField = fieldName;
                vm.reverse = false;
            }
        }
    }
<<<<<<< HEAD
})()
=======

})();
>>>>>>> 7957cfdb398415ab354683f539a7e4ccfd63ce7d
