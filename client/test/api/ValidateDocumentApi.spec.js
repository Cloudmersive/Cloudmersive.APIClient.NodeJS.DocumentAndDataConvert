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
    instance = new CloudmersiveConvertApiClient.ValidateDocumentApi();
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

  describe('ValidateDocumentApi', function() {
    describe('validateDocumentAutodetectValidation', function() {
      it('should call validateDocumentAutodetectValidation successfully', function(done) {
        //uncomment below and update the code to test validateDocumentAutodetectValidation
        //instance.validateDocumentAutodetectValidation(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('validateDocumentCsvValidation', function() {
      it('should call validateDocumentCsvValidation successfully', function(done) {
        //uncomment below and update the code to test validateDocumentCsvValidation
        //instance.validateDocumentCsvValidation(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('validateDocumentDocxValidation', function() {
      it('should call validateDocumentDocxValidation successfully', function(done) {
        //uncomment below and update the code to test validateDocumentDocxValidation
        //instance.validateDocumentDocxValidation(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('validateDocumentEmlValidation', function() {
      it('should call validateDocumentEmlValidation successfully', function(done) {
        //uncomment below and update the code to test validateDocumentEmlValidation
        //instance.validateDocumentEmlValidation(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('validateDocumentExecutableValidation', function() {
      it('should call validateDocumentExecutableValidation successfully', function(done) {
        //uncomment below and update the code to test validateDocumentExecutableValidation
        //instance.validateDocumentExecutableValidation(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('validateDocumentGZipValidation', function() {
      it('should call validateDocumentGZipValidation successfully', function(done) {
        //uncomment below and update the code to test validateDocumentGZipValidation
        //instance.validateDocumentGZipValidation(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('validateDocumentJsonValidation', function() {
      it('should call validateDocumentJsonValidation successfully', function(done) {
        //uncomment below and update the code to test validateDocumentJsonValidation
        //instance.validateDocumentJsonValidation(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('validateDocumentMsgValidation', function() {
      it('should call validateDocumentMsgValidation successfully', function(done) {
        //uncomment below and update the code to test validateDocumentMsgValidation
        //instance.validateDocumentMsgValidation(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('validateDocumentPdfValidation', function() {
      it('should call validateDocumentPdfValidation successfully', function(done) {
        //uncomment below and update the code to test validateDocumentPdfValidation
        //instance.validateDocumentPdfValidation(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('validateDocumentPptxValidation', function() {
      it('should call validateDocumentPptxValidation successfully', function(done) {
        //uncomment below and update the code to test validateDocumentPptxValidation
        //instance.validateDocumentPptxValidation(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('validateDocumentRarValidation', function() {
      it('should call validateDocumentRarValidation successfully', function(done) {
        //uncomment below and update the code to test validateDocumentRarValidation
        //instance.validateDocumentRarValidation(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('validateDocumentTarValidation', function() {
      it('should call validateDocumentTarValidation successfully', function(done) {
        //uncomment below and update the code to test validateDocumentTarValidation
        //instance.validateDocumentTarValidation(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('validateDocumentXlsxValidation', function() {
      it('should call validateDocumentXlsxValidation successfully', function(done) {
        //uncomment below and update the code to test validateDocumentXlsxValidation
        //instance.validateDocumentXlsxValidation(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('validateDocumentXmlValidation', function() {
      it('should call validateDocumentXmlValidation successfully', function(done) {
        //uncomment below and update the code to test validateDocumentXmlValidation
        //instance.validateDocumentXmlValidation(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('validateDocumentZipValidation', function() {
      it('should call validateDocumentZipValidation successfully', function(done) {
        //uncomment below and update the code to test validateDocumentZipValidation
        //instance.validateDocumentZipValidation(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
