describe('posts service', function(){

    var posts, $httpBackend;
    var postsMock = [
        {
            "userId": 1,
            "id": 1,
            "title": "title 1",
            "body": "post body 1"
        },
        {
            "userId": 2,
            "id": 2,
            "title": "title 2",
            "body": "post body 2"
        }
    ];
    var usersMock = [
        {id: 1, username: "Example"},
        {id: 2, username: "Another"},
        {id: 3, username: "Mr. Smith"}
    ];

  beforeEach(function(){
    module('directings');

      module(function($provide){
         $provide.service('users', function(){
             this.data = [];
             this.get = function(callback){
                 this.data = usersMock;
               if(callback){
                   callback();
               }
             };
         });
      });

    inject(function($injector){
      posts = $injector.get('posts');
      users = $injector.get('users');
      $httpBackend = $injector.get('$httpBackend');
    });

    $httpBackend
        .when('GET', 'http://jsonplaceholder.typicode.com/posts/')
        .respond(200, postsMock);

  });

  describe('get', function(){
    it("should get some posts", function() {
        expect(posts.data.length).toBe(0);

        posts.get(function(){
            expect(posts.data.length).toBe(postsMock.length);
        });
    });
    it("should call users.get", function(){
        spyOn(users, 'get');
        posts.get(function(){
            expect(users.get).toHaveBeenCalled();
        });
    });
    it("should call posts.mapUsers", function(){
        spyOn(posts, 'mapUsers');
        posts.get(function(){
            expect(users.mapUsers).toHaveBeenCalled();
        });
    });
  });

  describe("mapUsers", function(){
    it("should add a userName to the posts", function(){

    });

  });



});
