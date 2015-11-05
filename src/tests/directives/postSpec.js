describe('post directive', function(){

    var compile, scope, compiledDirective;

    beforeEach(function(){
        module('directings');

        inject(function($compile, $rootScope){
            compile = $compile;
            scope = $rootScope.$new();
        });

        scope.post = {
            title: "some title",
            userName: "Dominick Peluso"
        };

        var element = angular.element('<post title="post.title" userame="post.userName"></post>');
        compiledDirective = compile(element)(scope);
        scope.$digest(); // processes expressions like {{ title }}

    });

    it("should have put the title in bold", function(){
        var strong = compiledDirective.find('strong');
        expect(strong.text()).toBe(scope.post.title);
    });
    it("should have prefixed the username with a 'by '", function(){
        var tt = compiledDirective.find('tt');
        expect(tt.text().substring(0,3)).toBe('by ');
    });
});
