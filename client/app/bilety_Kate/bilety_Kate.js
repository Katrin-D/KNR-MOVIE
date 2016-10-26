(function() {

    var moduleId = "TicketCtrl";
    angular.module('knr_movie').controller(moduleId, [TicketCtrl]);

    function TicketCtrl() {

        var vm = this;
        vm.tickets=[];

        activate();

        function activate() {
            vm.tickets=[
                {number: 1, name: 'Ангелі чарли', amount: 3, cost: 90},
                {number: 2, name: 'У озера', amount: 2, cost: 30},
                {number: 3, name: 'В небо', amount: 2, cost: 100},
            ];
        }
    }
})()
