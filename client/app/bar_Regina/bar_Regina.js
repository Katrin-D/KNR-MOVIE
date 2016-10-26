(function() {

    var moduleId = "bar_Regina";
    angular.module("knr_movie").controller(moduleId, [bar_Regina]);

    function bar_Regina() {

        var vm = this;

        //vm.food = [];
        vm.select_water = [];

        vm.select_liters = [];
        init();

        function init() {

            vm.select_water = [
            'Кока-кола',
            'Фанта',
            'Спрайт',
            'Вода',
            'Сок',
            'Попкорн'
        ];

        vm.select_liters = [
            '0.5',
            '1'
        ];
        }
    }

})();
