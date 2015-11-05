angular.module('directings')
.directive('post', function(){
        return {
            scope: {
                //title: '=' // works too since they are the same
                title: '=title',
                username: '=username'
            },
            template: "<strong>{{ title }}</strong><br><tt>by {{ username }}</tt> Hello"
        }
});