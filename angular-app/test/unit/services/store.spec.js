describe('Store Service', () => {
  let Store;

  beforeEach(angular.mock.module('AngularApp.services'));

  beforeEach(angular.mock.inject((_Store_) => {
    Store = _Store_;
  }));

  it('should be true', () => {
    expect(Store).toBeDefined();
  });
});
