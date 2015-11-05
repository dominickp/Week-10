describe('users service', function(){

    var users, $httpBackend;
    var usersMock = [
        {id: 1, username: "Example"},
        {id: 2, username: "Another"},
        {id: 3, username: "Mr. Smith"}
    ];

  beforeEach(function(){
    module('directings');

    inject(function($injector){
        users = $injector.get('users');
        $httpBackend = $injector.get('$httpBackend');
    });

      $httpBackend
          .when('GET', 'http://jsonplaceholder.typicode.com/users/')
          .respond(200, usersMock);

  });

  describe('get', function(){
    it("should get some users", function(){

        expect(users.data.length).toBe(0);

        users.get(function(){
            // Inside callback since .get is asynchronous
            expect(users.data.length).toBe(usersMock.length);
        });

    });
  });
});
