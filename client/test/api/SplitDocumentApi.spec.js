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
    instance = new CloudmersiveConvertApiClient.SplitDocumentApi();
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

  describe('SplitDocumentApi', function() {
    describe('splitDocumentDocx', function() {
      it('should call splitDocumentDocx successfully', function(done) {
        //uncomment below and update the code to test splitDocumentDocx
        //instance.splitDocumentDocx(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('splitDocumentPdfByPage', function() {
      it('should call splitDocumentPdfByPage successfully', function(done) {
        //uncomment below and update the code to test splitDocumentPdfByPage
        //instance.splitDocumentPdfByPage(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('splitDocumentPptx', function() {
      it('should call splitDocumentPptx successfully', function(done) {
        //uncomment below and update the code to test splitDocumentPptx
        //instance.splitDocumentPptx(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('splitDocumentXlsx', function() {
      it('should call splitDocumentXlsx successfully', function(done) {
        //uncomment below and update the code to test splitDocumentXlsx
        //instance.splitDocumentXlsx(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
