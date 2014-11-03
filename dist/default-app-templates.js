angular.module("cyphy.default.templates", []).run(["$templateCache", function($templateCache) {$templateCache.put("/default/templates/DesignSpace.html","<div>\r\n    <h1>Design Space</h1>\r\n    <div class=\"design-tree col-lg-4\">\r\n        <design-tree data-connection-id=\"\'my-db-connection-id\'\" design-id=dataModel.designId></design-tree>\r\n    </div>\r\n</div>");
$templateCache.put("/default/templates/WorkspaceDetails.html","<div>\r\n    <h1>Workspace details</h1>\r\n    <div class=\"components col-lg-4\">\r\n        <h3><span class=\"fa fa-puzzle-piece\"></span>Components</h3>\r\n        <component-list data-connection-id=\"\'my-db-connection-id\'\" workspace-id=dataModel.workspaceId></component-list>\r\n    </div>\r\n    <div class=\"design-spaces col-lg-4\">\r\n        <h3><span class=\"fa fa-cubes\"></span>Design Spaces</h3>\r\n        <design-list data-connection-id=\"\'my-db-connection-id\'\" workspace-id=dataModel.workspaceId></design-list>\r\n    </div>\r\n    <div class=\"test-benches col-lg-4\">\r\n        <h3><span class=\"glyphicon glyphicon-saved\"></span>Test Benches</h3>\r\n        <test-bench-list data-connection-id=\"\'my-db-connection-id\'\" workspace-id=dataModel.workspaceId></test-bench-list>\r\n    </div>\r\n</div>");
$templateCache.put("/default/templates/Workspaces.html","<div>\r\n    <h1>Workspaces</h1>\r\n\r\n    <workspace-list data-connection-id=\"\'my-db-connection-id\'\"></workspace-list>\r\n</div>");}]);