describe('Validator Service', () => {
  let Validator;

  beforeEach(angular.mock.module('AngularApp.services'));

  beforeEach(angular.mock.inject((_Validator_) => {
    Validator = _Validator_;
  }));

  it('should be true', () => {
    expect(Validator).toBeDefined();
  });
});
