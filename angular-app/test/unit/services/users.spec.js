describe('Users Service', () => {
  let Users;

  beforeEach(angular.mock.module('AngularApp.services'));

  beforeEach(angular.mock.inject((_Users_) => {
    Users = _Users_;
  }));

  it('should be true', () => {
    expect(Users).toBeDefined();
  });
});
