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

  beforeEach(function(){
    module('directings');

    inject(function($injector){
      posts = $injector.get('posts');
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
            expect(users.data.length).toBe(postsMock.length);
        });
    });
    xit("should call users.get", function(){

    });
    xit("should call posts.mapUsers", function(){

    });
  });

  describe("mapUsers", function(){
    xit("should add a userName to the posts", function(){

    });

  });



});
