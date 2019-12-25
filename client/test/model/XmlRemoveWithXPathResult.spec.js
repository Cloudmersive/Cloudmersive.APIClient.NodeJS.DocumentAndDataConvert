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
    instance = new CloudmersiveConvertApiClient.XmlRemoveWithXPathResult();
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

  describe('XmlRemoveWithXPathResult', function() {
    it('should create an instance of XmlRemoveWithXPathResult', function() {
      // uncomment below and update the code to test XmlRemoveWithXPathResult
      //var instance = new CloudmersiveConvertApiClient.XmlRemoveWithXPathResult();
      //expect(instance).to.be.a(CloudmersiveConvertApiClient.XmlRemoveWithXPathResult);
    });

    it('should have the property successful (base name: "Successful")', function() {
      // uncomment below and update the code to test the property successful
      //var instance = new CloudmersiveConvertApiClient.XmlRemoveWithXPathResult();
      //expect(instance).to.be();
    });

    it('should have the property resultingXmlDocument (base name: "ResultingXmlDocument")', function() {
      // uncomment below and update the code to test the property resultingXmlDocument
      //var instance = new CloudmersiveConvertApiClient.XmlRemoveWithXPathResult();
      //expect(instance).to.be();
    });

    it('should have the property xmlNodesRemoved (base name: "XmlNodesRemoved")', function() {
      // uncomment below and update the code to test the property xmlNodesRemoved
      //var instance = new CloudmersiveConvertApiClient.XmlRemoveWithXPathResult();
      //expect(instance).to.be();
    });

    it('should have the property nodesRemovedCount (base name: "NodesRemovedCount")', function() {
      // uncomment below and update the code to test the property nodesRemovedCount
      //var instance = new CloudmersiveConvertApiClient.XmlRemoveWithXPathResult();
      //expect(instance).to.be();
    });

  });

}));
