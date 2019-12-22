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
    instance = new CloudmersiveConvertApiClient.ConvertWebApi();
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

  describe('ConvertWebApi', function() {
    describe('convertWebHtmlToDocx', function() {
      it('should call convertWebHtmlToDocx successfully', function(done) {
        //uncomment below and update the code to test convertWebHtmlToDocx
        //instance.convertWebHtmlToDocx(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('convertWebHtmlToPdf', function() {
      it('should call convertWebHtmlToPdf successfully', function(done) {
        //uncomment below and update the code to test convertWebHtmlToPdf
        //instance.convertWebHtmlToPdf(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('convertWebHtmlToPng', function() {
      it('should call convertWebHtmlToPng successfully', function(done) {
        //uncomment below and update the code to test convertWebHtmlToPng
        //instance.convertWebHtmlToPng(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('convertWebHtmlToTxt', function() {
      it('should call convertWebHtmlToTxt successfully', function(done) {
        //uncomment below and update the code to test convertWebHtmlToTxt
        //instance.convertWebHtmlToTxt(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('convertWebHtmlToTxt_0', function() {
      it('should call convertWebHtmlToTxt_0 successfully', function(done) {
        //uncomment below and update the code to test convertWebHtmlToTxt_0
        //instance.convertWebHtmlToTxt_0(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('convertWebMdToHtml', function() {
      it('should call convertWebMdToHtml successfully', function(done) {
        //uncomment below and update the code to test convertWebMdToHtml
        //instance.convertWebMdToHtml(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('convertWebUrlToPdf', function() {
      it('should call convertWebUrlToPdf successfully', function(done) {
        //uncomment below and update the code to test convertWebUrlToPdf
        //instance.convertWebUrlToPdf(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('convertWebUrlToScreenshot', function() {
      it('should call convertWebUrlToScreenshot successfully', function(done) {
        //uncomment below and update the code to test convertWebUrlToScreenshot
        //instance.convertWebUrlToScreenshot(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
