/*global angular, console, define*/

/**
 * @author pmeijer / https://github.com/pmeijer
 * @author lattmann / https://github.com/lattmann
 */

define(['text!./views/DesertConfigurationsView.html'], function (DesertConfigurationsView) {
    'use strict';

    angular.module('cyphy.ui.desertConfigurations', [])
        .controller('DesertConfigurationController', function ($scope, DesertConfigurationServices, Chance) {
            var i,
                context = {
                    db: 'my-db-connection-id',
                    projectId: 'ADMEditor',
                    branchId: 'master',
                    regionId: (new Date()).toISOString() + 'DesertConfigurationController'
                };

            $scope.configurations = [];
            if (Chance === null) {
                $scope.$on('$destroy', function () {
                    // Clean up spawned regions
                    DesertConfigurationServices.cleanUp(context);
                });
                DesertConfigurationServices.addCfgsWatcher(context, $scope.setId, function () {})
                    .then(function (cfgSetData) {
                        var key;
                        for (key in cfgSetData.cfgs) {
                            if (cfgSetData.cfgs.hasOwnProperty(key)) {
                                $scope.configurations.push({
                                    name: cfgSetData.cfgs[key].name,
                                    id: cfgSetData.cfgs[key].id
                                });
                            }
                        }
                    });
            } else {
                for (i = 0; i < Math.floor(Math.random() * 10); i += 1) {
                    $scope.configurations.push({
                        name: $scope.setId + ' ' + i
                    });
                }
            }
            $scope.notify = function (cfg) {
                // TODO: call callback functions defined on config object
                console.log(cfg, 'changed');
            };
        })
        .directive('desertConfigurations', function () {
            return {
                scope: {
                    setId: '=',
                    config: '='
                },
                restrict: 'E',
                replace: true,
                template: DesertConfigurationsView,
                controller: 'DesertConfigurationController'
            };
        });

});