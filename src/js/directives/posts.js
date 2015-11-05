angular.module('directings')
.directive('postDisplay', function(){
        return {
            scope: {
                //title: '=' // works too since they are the same
                //title: '=title',
                //username: '=username'
                post:'=',
                body:'='
            },
            templateUrl: 'templates/post.html'
        }
});