angular.module("cyphy.default.templates", []).run(["$templateCache", function($templateCache) {$templateCache.put("/default/templates/WorkspaceDetails.html","<div>\r\n    <h1>Workspace details</h1>\r\n    <div class=\"components col-lg-4\">\r\n        <component-list data-connection-id=\"\'my-db-connection-id\'\" workspace-id=dataModel.workspaceId></component-list>\r\n    </div>\r\n    <div class=\"components col-lg-4\">\r\n        <component-list data-connection-id=\"\'my-db-connection-id\'\" workspace-id=dataModel.workspaceId></component-list>\r\n    </div>\r\n    <div class=\"components col-lg-4\">\r\n        <component-list data-connection-id=\"\'my-db-connection-id\'\" workspace-id=dataModel.workspaceId></component-list>\r\n    </div>\r\n</div>");
$templateCache.put("/default/templates/Workspaces.html","<div>\r\n    <h1>Workspaces</h1>\r\n\r\n    <workspace-list data-connection-id=\"\'my-db-connection-id\'\"></workspace-list>\r\n</div>");}]);