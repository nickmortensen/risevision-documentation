---
---
/**
 * Created by rodrigopavezi on 11/6/14.
 */
"use strict";
angular.module("risevision.developer")
    .config(["$locationProvider", function($locationProvider) {
        $locationProvider.html5Mode({{site.html5mode}});
    }]);
