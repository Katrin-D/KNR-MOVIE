(function() {

    var moduleId = "TicketCtrl";
    angular.module('knr_movie').controller(moduleId, [TicketCtrl]);

    function TicketCtrl() {

        var vm = this;
        vm.tickets = [];
        //origin;

        vm.newTicket = null;
        vm.isViewEditing = false;
        vm.isEdit = false;

        vm.sortField ='number';
        vm.reverse = false;
        vm.filterByName = "";
        
        vm.selection = selection;
        vm.add = add;
        vm.cancel = cancel;
        vm.edit = edit;
        vm.save = save;
        vm.sort = sort;
        vm.remove = remove;



        activate();

        function activate() {
            vm.tickets = [
                { number: 1, name: 'Ангелы Чарли', amount: 3, cost: 90 },
                { number: 2, name: 'У озера', amount: 2, cost: 30 },
                { number: 3, name: 'В небо', amount: 2, cost: 120 }
            ];
        }

        function add() {
            console.log("Button add clicked");
            vm.newTicket = { number: vm.tickets.length+1, name: 0, amount: 0, cost: 0 };
            vm.isViewEditing = true;
        }
        
        function cancel() {
            console.log("Button Cancel clicked");
            vm.isViewEditing = false;
            vm.isEdit = false;
            vm.newTicket = null;
        }

        function edit(ticket) {
            console.log("Row was clicked");
            vm.newTicket = angular.copy(ticket);
            vm.isViewEditing = true;
            vm.isEdit = true;
            
        }

        function remove(index) {
       vm.tickets.splice(index, 1);
        }

        function save() {
            console.log("Button Save clicked");
            if(vm.isEdit) {
                console.log("Button S");
                vm.tickets[vm.newTicket.number-1] = vm.newTicket;
                vm.isEdit = false;
            }else {
                vm.tickets.push(vm.newTicket);
            }
            vm.cancel();
        }

        function selection(ticket) {
            if (ticket.cost > 100) return "bad";
            if (ticket.cost > 50 && ticket.cost <= 100) return "normal";
            if (ticket.cost > 0 && ticket.cost <= 50) return "good";
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
