(function() {
    
    var moduleId = "bileti_KateCtrl"; 
    angular.module("KNR MOVIE").controller(moduleId, [bileti_KateCtrl]);

    function bileti_KateCtrl() {
        var vm = this;
        vm.bileti_Kate = [];

        init();

        function init () {
            vm.bileti_Kate = [ 	{ date: '2016-27-09 10:30', w: 85.3 }, 
{ date: '2016-27-10 10:30', w: 85.1 } ];
        }
    }
})(); 
