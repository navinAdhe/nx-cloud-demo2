module.exports = {
  name: 'demo-app2',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/demo-app2',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js',
  ],
};
