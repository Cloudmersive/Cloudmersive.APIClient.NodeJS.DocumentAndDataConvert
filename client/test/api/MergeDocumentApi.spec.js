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
    instance = new CloudmersiveConvertApiClient.MergeDocumentApi();
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

  describe('MergeDocumentApi', function() {
    describe('mergeDocumentDocx', function() {
      it('should call mergeDocumentDocx successfully', function(done) {
        //uncomment below and update the code to test mergeDocumentDocx
        //instance.mergeDocumentDocx(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('mergeDocumentDocxMulti', function() {
      it('should call mergeDocumentDocxMulti successfully', function(done) {
        //uncomment below and update the code to test mergeDocumentDocxMulti
        //instance.mergeDocumentDocxMulti(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('mergeDocumentHtml', function() {
      it('should call mergeDocumentHtml successfully', function(done) {
        //uncomment below and update the code to test mergeDocumentHtml
        //instance.mergeDocumentHtml(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('mergeDocumentHtmlMulti', function() {
      it('should call mergeDocumentHtmlMulti successfully', function(done) {
        //uncomment below and update the code to test mergeDocumentHtmlMulti
        //instance.mergeDocumentHtmlMulti(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('mergeDocumentPdf', function() {
      it('should call mergeDocumentPdf successfully', function(done) {
        //uncomment below and update the code to test mergeDocumentPdf
        //instance.mergeDocumentPdf(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('mergeDocumentPdfMulti', function() {
      it('should call mergeDocumentPdfMulti successfully', function(done) {
        //uncomment below and update the code to test mergeDocumentPdfMulti
        //instance.mergeDocumentPdfMulti(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('mergeDocumentPng', function() {
      it('should call mergeDocumentPng successfully', function(done) {
        //uncomment below and update the code to test mergeDocumentPng
        //instance.mergeDocumentPng(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('mergeDocumentPngMulti', function() {
      it('should call mergeDocumentPngMulti successfully', function(done) {
        //uncomment below and update the code to test mergeDocumentPngMulti
        //instance.mergeDocumentPngMulti(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('mergeDocumentPptx', function() {
      it('should call mergeDocumentPptx successfully', function(done) {
        //uncomment below and update the code to test mergeDocumentPptx
        //instance.mergeDocumentPptx(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('mergeDocumentPptxMulti', function() {
      it('should call mergeDocumentPptxMulti successfully', function(done) {
        //uncomment below and update the code to test mergeDocumentPptxMulti
        //instance.mergeDocumentPptxMulti(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('mergeDocumentTxt', function() {
      it('should call mergeDocumentTxt successfully', function(done) {
        //uncomment below and update the code to test mergeDocumentTxt
        //instance.mergeDocumentTxt(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('mergeDocumentTxtMulti', function() {
      it('should call mergeDocumentTxtMulti successfully', function(done) {
        //uncomment below and update the code to test mergeDocumentTxtMulti
        //instance.mergeDocumentTxtMulti(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('mergeDocumentXlsx', function() {
      it('should call mergeDocumentXlsx successfully', function(done) {
        //uncomment below and update the code to test mergeDocumentXlsx
        //instance.mergeDocumentXlsx(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('mergeDocumentXlsxMulti', function() {
      it('should call mergeDocumentXlsxMulti successfully', function(done) {
        //uncomment below and update the code to test mergeDocumentXlsxMulti
        //instance.mergeDocumentXlsxMulti(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
