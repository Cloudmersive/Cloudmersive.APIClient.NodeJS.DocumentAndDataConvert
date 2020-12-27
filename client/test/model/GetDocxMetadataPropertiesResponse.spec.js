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
    instance = new CloudmersiveConvertApiClient.GetDocxMetadataPropertiesResponse();
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

  describe('GetDocxMetadataPropertiesResponse', function() {
    it('should create an instance of GetDocxMetadataPropertiesResponse', function() {
      // uncomment below and update the code to test GetDocxMetadataPropertiesResponse
      //var instance = new CloudmersiveConvertApiClient.GetDocxMetadataPropertiesResponse();
      //expect(instance).to.be.a(CloudmersiveConvertApiClient.GetDocxMetadataPropertiesResponse);
    });

    it('should have the property company (base name: "Company")', function() {
      // uncomment below and update the code to test the property company
      //var instance = new CloudmersiveConvertApiClient.GetDocxMetadataPropertiesResponse();
      //expect(instance).to.be();
    });

    it('should have the property manager (base name: "Manager")', function() {
      // uncomment below and update the code to test the property manager
      //var instance = new CloudmersiveConvertApiClient.GetDocxMetadataPropertiesResponse();
      //expect(instance).to.be();
    });

    it('should have the property applicationVersion (base name: "ApplicationVersion")', function() {
      // uncomment below and update the code to test the property applicationVersion
      //var instance = new CloudmersiveConvertApiClient.GetDocxMetadataPropertiesResponse();
      //expect(instance).to.be();
    });

    it('should have the property wordCount (base name: "WordCount")', function() {
      // uncomment below and update the code to test the property wordCount
      //var instance = new CloudmersiveConvertApiClient.GetDocxMetadataPropertiesResponse();
      //expect(instance).to.be();
    });

    it('should have the property lineCount (base name: "LineCount")', function() {
      // uncomment below and update the code to test the property lineCount
      //var instance = new CloudmersiveConvertApiClient.GetDocxMetadataPropertiesResponse();
      //expect(instance).to.be();
    });

    it('should have the property paragraphCount (base name: "ParagraphCount")', function() {
      // uncomment below and update the code to test the property paragraphCount
      //var instance = new CloudmersiveConvertApiClient.GetDocxMetadataPropertiesResponse();
      //expect(instance).to.be();
    });

    it('should have the property pageCount (base name: "PageCount")', function() {
      // uncomment below and update the code to test the property pageCount
      //var instance = new CloudmersiveConvertApiClient.GetDocxMetadataPropertiesResponse();
      //expect(instance).to.be();
    });

    it('should have the property customProperties (base name: "CustomProperties")', function() {
      // uncomment below and update the code to test the property customProperties
      //var instance = new CloudmersiveConvertApiClient.GetDocxMetadataPropertiesResponse();
      //expect(instance).to.be();
    });

    it('should have the property successful (base name: "Successful")', function() {
      // uncomment below and update the code to test the property successful
      //var instance = new CloudmersiveConvertApiClient.GetDocxMetadataPropertiesResponse();
      //expect(instance).to.be();
    });

  });

}));
