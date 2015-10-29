(function () {
    'use strict';

    angular.module('GrowlSample', ['ot-growl'])
        .config(['growlProvider', function(growlProvider) {
          growlProvider.globalProjectId(483444);
          growlProvider.globalAccessToken('ETjVsxduvBsaU1mGwqfZ');
        }])
        .config(['$httpProvider', function($httpProvider) {
            $httpProvider.defaults.useXDomain = true;
            delete $httpProvider.defaults.headers.common['X-Requested-With'];
          }
        ]);
    angular.module('GrowlSample').controller('SampleController', GrowlSampleController);


    //// Sample controller here.
    GrowlSampleController.$inject = ['growl'];
    function GrowlSampleController (growl) {
        growl.success('Teste', {ttl: -1}, {detail: '<h1>Teste</h1>'});
        growl.info('Teste', {ttl: -1}, {detail: '<h1>Teste</h1>'});
        growl.error('Teste', {ttl: -1}, {detail: '<h1>Teste</h1>'});
        growl.warning('Teste', {ttl: -1}, {detail: '<h1>Teste</h1>'});
        var vm = this;
        vm.message = {type: 'success', ttl: -1};
        vm.showMessage = showMessage;


        //////// Functions
        function showMessage () {
            var config = angular.copy(vm.message);
            delete config.title;
            delete config.type;
            growl.general(vm.message.title, config, vm.message.type);
        }
    }

})();
