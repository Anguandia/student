// Import the dependencies for testing
var chai = require('chai');
var chaiHttp = require('chai-http');
var app = require('../server');
// Configure chai
chai.use(chaiHttp);
chai.should();
describe("Students", () => {
    describe("GET /", () => {
        // Test to get all students record
        it("should get all students record", (done) => {
             chai.request(app)
                 .get('/')
                 .end((err, res) => {
                     res.should.have.status(200);
                     res.body.should.be.a('object');
                     res.body.should.have.property('message').that.includes(' the students');
                     res.body.students.length.should.eql(3);
                     done();
                  });
         });
        // Test to get single student record
        it("should get a single student record", (done) => {
             const id = 1;
             chai.request(app)
                 .get(`/${id}`)
                 .end((err, res) => {
                     res.should.have.status(200);
                     res.body.should.be.a('object');
                     res.body.student.name.should.eql('Sean Grey');
                     done();
                  });
         });

        // Test to get single student record
        it("should not get a single student record", (done) => {
             const id = 5;
             chai.request(app)
                 .get(`/${id}`)
                 .end((err, res) => {
                     res.should.have.status(404);
                     done();
                  });
         });
    });
    describe('Post /students', function(){
        describe('create student', function(){
            it('should create and return the created student object', function(done){
                var student = {id: 7, name: 'Mike Anguandis', age: 88};
                chai.request(app)
                .post('/students')
                .send(student)
                .end(function(err, res){
                    res.should.have.status(201);
                    res.body.should.have.property('data').with.property('id').equals(7);
                    done();
                });
            });
        });
    });
});
