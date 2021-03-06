/**
 * convertapi
 * Convert API lets you effortlessly convert file formats and types.
 *
 * OpenAPI spec version: v1
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.5
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.CloudmersiveConvertApiClient);
  }
}(this, function(expect, CloudmersiveConvertApiClient) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new CloudmersiveConvertApiClient.AutodetectGetInfoResult();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('AutodetectGetInfoResult', function() {
    it('should create an instance of AutodetectGetInfoResult', function() {
      // uncomment below and update the code to test AutodetectGetInfoResult
      //var instance = new CloudmersiveConvertApiClient.AutodetectGetInfoResult();
      //expect(instance).to.be.a(CloudmersiveConvertApiClient.AutodetectGetInfoResult);
    });

    it('should have the property successful (base name: "Successful")', function() {
      // uncomment below and update the code to test the property successful
      //var instance = new CloudmersiveConvertApiClient.AutodetectGetInfoResult();
      //expect(instance).to.be();
    });

    it('should have the property detectedFileExtension (base name: "DetectedFileExtension")', function() {
      // uncomment below and update the code to test the property detectedFileExtension
      //var instance = new CloudmersiveConvertApiClient.AutodetectGetInfoResult();
      //expect(instance).to.be();
    });

    it('should have the property detectedMimeType (base name: "DetectedMimeType")', function() {
      // uncomment below and update the code to test the property detectedMimeType
      //var instance = new CloudmersiveConvertApiClient.AutodetectGetInfoResult();
      //expect(instance).to.be();
    });

    it('should have the property pageCount (base name: "PageCount")', function() {
      // uncomment below and update the code to test the property pageCount
      //var instance = new CloudmersiveConvertApiClient.AutodetectGetInfoResult();
      //expect(instance).to.be();
    });

    it('should have the property author (base name: "Author")', function() {
      // uncomment below and update the code to test the property author
      //var instance = new CloudmersiveConvertApiClient.AutodetectGetInfoResult();
      //expect(instance).to.be();
    });

    it('should have the property dateModified (base name: "DateModified")', function() {
      // uncomment below and update the code to test the property dateModified
      //var instance = new CloudmersiveConvertApiClient.AutodetectGetInfoResult();
      //expect(instance).to.be();
    });

    it('should have the property alternateFileTypeCandidates (base name: "AlternateFileTypeCandidates")', function() {
      // uncomment below and update the code to test the property alternateFileTypeCandidates
      //var instance = new CloudmersiveConvertApiClient.AutodetectGetInfoResult();
      //expect(instance).to.be();
    });

  });

}));
