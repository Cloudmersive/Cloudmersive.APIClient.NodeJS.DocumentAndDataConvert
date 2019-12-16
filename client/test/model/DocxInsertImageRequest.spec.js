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
    instance = new CloudmersiveConvertApiClient.DocxInsertImageRequest();
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

  describe('DocxInsertImageRequest', function() {
    it('should create an instance of DocxInsertImageRequest', function() {
      // uncomment below and update the code to test DocxInsertImageRequest
      //var instance = new CloudmersiveConvertApiClient.DocxInsertImageRequest();
      //expect(instance).to.be.a(CloudmersiveConvertApiClient.DocxInsertImageRequest);
    });

    it('should have the property inputDocumentFileBytes (base name: "InputDocumentFileBytes")', function() {
      // uncomment below and update the code to test the property inputDocumentFileBytes
      //var instance = new CloudmersiveConvertApiClient.DocxInsertImageRequest();
      //expect(instance).to.be();
    });

    it('should have the property inputDocumentFileUrl (base name: "InputDocumentFileUrl")', function() {
      // uncomment below and update the code to test the property inputDocumentFileUrl
      //var instance = new CloudmersiveConvertApiClient.DocxInsertImageRequest();
      //expect(instance).to.be();
    });

    it('should have the property inputImageFileBytes (base name: "InputImageFileBytes")', function() {
      // uncomment below and update the code to test the property inputImageFileBytes
      //var instance = new CloudmersiveConvertApiClient.DocxInsertImageRequest();
      //expect(instance).to.be();
    });

    it('should have the property inputImageFileUrl (base name: "InputImageFileUrl")', function() {
      // uncomment below and update the code to test the property inputImageFileUrl
      //var instance = new CloudmersiveConvertApiClient.DocxInsertImageRequest();
      //expect(instance).to.be();
    });

    it('should have the property imageToAdd (base name: "ImageToAdd")', function() {
      // uncomment below and update the code to test the property imageToAdd
      //var instance = new CloudmersiveConvertApiClient.DocxInsertImageRequest();
      //expect(instance).to.be();
    });

    it('should have the property insertPlacement (base name: "InsertPlacement")', function() {
      // uncomment below and update the code to test the property insertPlacement
      //var instance = new CloudmersiveConvertApiClient.DocxInsertImageRequest();
      //expect(instance).to.be();
    });

    it('should have the property insertPath (base name: "InsertPath")', function() {
      // uncomment below and update the code to test the property insertPath
      //var instance = new CloudmersiveConvertApiClient.DocxInsertImageRequest();
      //expect(instance).to.be();
    });

    it('should have the property widthInEMUs (base name: "WidthInEMUs")', function() {
      // uncomment below and update the code to test the property widthInEMUs
      //var instance = new CloudmersiveConvertApiClient.DocxInsertImageRequest();
      //expect(instance).to.be();
    });

    it('should have the property heightInEMUs (base name: "HeightInEMUs")', function() {
      // uncomment below and update the code to test the property heightInEMUs
      //var instance = new CloudmersiveConvertApiClient.DocxInsertImageRequest();
      //expect(instance).to.be();
    });

  });

}));
