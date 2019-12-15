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
    instance = new CloudmersiveConvertApiClient.UpdateDocxTableRowRequest();
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

  describe('UpdateDocxTableRowRequest', function() {
    it('should create an instance of UpdateDocxTableRowRequest', function() {
      // uncomment below and update the code to test UpdateDocxTableRowRequest
      //var instance = new CloudmersiveConvertApiClient.UpdateDocxTableRowRequest();
      //expect(instance).to.be.a(CloudmersiveConvertApiClient.UpdateDocxTableRowRequest);
    });

    it('should have the property inputFileBytes (base name: "InputFileBytes")', function() {
      // uncomment below and update the code to test the property inputFileBytes
      //var instance = new CloudmersiveConvertApiClient.UpdateDocxTableRowRequest();
      //expect(instance).to.be();
    });

    it('should have the property inputFileUrl (base name: "InputFileUrl")', function() {
      // uncomment below and update the code to test the property inputFileUrl
      //var instance = new CloudmersiveConvertApiClient.UpdateDocxTableRowRequest();
      //expect(instance).to.be();
    });

    it('should have the property rowToUpdate (base name: "RowToUpdate")', function() {
      // uncomment below and update the code to test the property rowToUpdate
      //var instance = new CloudmersiveConvertApiClient.UpdateDocxTableRowRequest();
      //expect(instance).to.be();
    });

    it('should have the property tableRowIndex (base name: "TableRowIndex")', function() {
      // uncomment below and update the code to test the property tableRowIndex
      //var instance = new CloudmersiveConvertApiClient.UpdateDocxTableRowRequest();
      //expect(instance).to.be();
    });

    it('should have the property existingTablePath (base name: "ExistingTablePath")', function() {
      // uncomment below and update the code to test the property existingTablePath
      //var instance = new CloudmersiveConvertApiClient.UpdateDocxTableRowRequest();
      //expect(instance).to.be();
    });

  });

}));
