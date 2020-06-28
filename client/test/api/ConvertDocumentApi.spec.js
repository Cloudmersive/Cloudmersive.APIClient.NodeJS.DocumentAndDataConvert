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
    instance = new CloudmersiveConvertApiClient.ConvertDocumentApi();
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

  describe('ConvertDocumentApi', function() {
    describe('convertDocumentAutodetectGetInfo', function() {
      it('should call convertDocumentAutodetectGetInfo successfully', function(done) {
        //uncomment below and update the code to test convertDocumentAutodetectGetInfo
        //instance.convertDocumentAutodetectGetInfo(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('convertDocumentAutodetectToJpg', function() {
      it('should call convertDocumentAutodetectToJpg successfully', function(done) {
        //uncomment below and update the code to test convertDocumentAutodetectToJpg
        //instance.convertDocumentAutodetectToJpg(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('convertDocumentAutodetectToPdf', function() {
      it('should call convertDocumentAutodetectToPdf successfully', function(done) {
        //uncomment below and update the code to test convertDocumentAutodetectToPdf
        //instance.convertDocumentAutodetectToPdf(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('convertDocumentAutodetectToPngArray', function() {
      it('should call convertDocumentAutodetectToPngArray successfully', function(done) {
        //uncomment below and update the code to test convertDocumentAutodetectToPngArray
        //instance.convertDocumentAutodetectToPngArray(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('convertDocumentAutodetectToThumbnail', function() {
      it('should call convertDocumentAutodetectToThumbnail successfully', function(done) {
        //uncomment below and update the code to test convertDocumentAutodetectToThumbnail
        //instance.convertDocumentAutodetectToThumbnail(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('convertDocumentAutodetectToThumbnailsAdvanced', function() {
      it('should call convertDocumentAutodetectToThumbnailsAdvanced successfully', function(done) {
        //uncomment below and update the code to test convertDocumentAutodetectToThumbnailsAdvanced
        //instance.convertDocumentAutodetectToThumbnailsAdvanced(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('convertDocumentAutodetectToTxt', function() {
      it('should call convertDocumentAutodetectToTxt successfully', function(done) {
        //uncomment below and update the code to test convertDocumentAutodetectToTxt
        //instance.convertDocumentAutodetectToTxt(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('convertDocumentCsvToXlsx', function() {
      it('should call convertDocumentCsvToXlsx successfully', function(done) {
        //uncomment below and update the code to test convertDocumentCsvToXlsx
        //instance.convertDocumentCsvToXlsx(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('convertDocumentDocToDocx', function() {
      it('should call convertDocumentDocToDocx successfully', function(done) {
        //uncomment below and update the code to test convertDocumentDocToDocx
        //instance.convertDocumentDocToDocx(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('convertDocumentDocToPdf', function() {
      it('should call convertDocumentDocToPdf successfully', function(done) {
        //uncomment below and update the code to test convertDocumentDocToPdf
        //instance.convertDocumentDocToPdf(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('convertDocumentDocToTxt', function() {
      it('should call convertDocumentDocToTxt successfully', function(done) {
        //uncomment below and update the code to test convertDocumentDocToTxt
        //instance.convertDocumentDocToTxt(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('convertDocumentDocxToHtml', function() {
      it('should call convertDocumentDocxToHtml successfully', function(done) {
        //uncomment below and update the code to test convertDocumentDocxToHtml
        //instance.convertDocumentDocxToHtml(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('convertDocumentDocxToJpg', function() {
      it('should call convertDocumentDocxToJpg successfully', function(done) {
        //uncomment below and update the code to test convertDocumentDocxToJpg
        //instance.convertDocumentDocxToJpg(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('convertDocumentDocxToPdf', function() {
      it('should call convertDocumentDocxToPdf successfully', function(done) {
        //uncomment below and update the code to test convertDocumentDocxToPdf
        //instance.convertDocumentDocxToPdf(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('convertDocumentDocxToPng', function() {
      it('should call convertDocumentDocxToPng successfully', function(done) {
        //uncomment below and update the code to test convertDocumentDocxToPng
        //instance.convertDocumentDocxToPng(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('convertDocumentDocxToRtf', function() {
      it('should call convertDocumentDocxToRtf successfully', function(done) {
        //uncomment below and update the code to test convertDocumentDocxToRtf
        //instance.convertDocumentDocxToRtf(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('convertDocumentDocxToTxt', function() {
      it('should call convertDocumentDocxToTxt successfully', function(done) {
        //uncomment below and update the code to test convertDocumentDocxToTxt
        //instance.convertDocumentDocxToTxt(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('convertDocumentEmlToHtml', function() {
      it('should call convertDocumentEmlToHtml successfully', function(done) {
        //uncomment below and update the code to test convertDocumentEmlToHtml
        //instance.convertDocumentEmlToHtml(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('convertDocumentEmlToJpg', function() {
      it('should call convertDocumentEmlToJpg successfully', function(done) {
        //uncomment below and update the code to test convertDocumentEmlToJpg
        //instance.convertDocumentEmlToJpg(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('convertDocumentEmlToPdf', function() {
      it('should call convertDocumentEmlToPdf successfully', function(done) {
        //uncomment below and update the code to test convertDocumentEmlToPdf
        //instance.convertDocumentEmlToPdf(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('convertDocumentEmlToPng', function() {
      it('should call convertDocumentEmlToPng successfully', function(done) {
        //uncomment below and update the code to test convertDocumentEmlToPng
        //instance.convertDocumentEmlToPng(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('convertDocumentGetFileTypeIcon', function() {
      it('should call convertDocumentGetFileTypeIcon successfully', function(done) {
        //uncomment below and update the code to test convertDocumentGetFileTypeIcon
        //instance.convertDocumentGetFileTypeIcon(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('convertDocumentGetFileTypeIconAdvanced', function() {
      it('should call convertDocumentGetFileTypeIconAdvanced successfully', function(done) {
        //uncomment below and update the code to test convertDocumentGetFileTypeIconAdvanced
        //instance.convertDocumentGetFileTypeIconAdvanced(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('convertDocumentHtmlToPdf', function() {
      it('should call convertDocumentHtmlToPdf successfully', function(done) {
        //uncomment below and update the code to test convertDocumentHtmlToPdf
        //instance.convertDocumentHtmlToPdf(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('convertDocumentHtmlToPng', function() {
      it('should call convertDocumentHtmlToPng successfully', function(done) {
        //uncomment below and update the code to test convertDocumentHtmlToPng
        //instance.convertDocumentHtmlToPng(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('convertDocumentHtmlToTxt', function() {
      it('should call convertDocumentHtmlToTxt successfully', function(done) {
        //uncomment below and update the code to test convertDocumentHtmlToTxt
        //instance.convertDocumentHtmlToTxt(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('convertDocumentKeynoteToJpg', function() {
      it('should call convertDocumentKeynoteToJpg successfully', function(done) {
        //uncomment below and update the code to test convertDocumentKeynoteToJpg
        //instance.convertDocumentKeynoteToJpg(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('convertDocumentKeynoteToPdf', function() {
      it('should call convertDocumentKeynoteToPdf successfully', function(done) {
        //uncomment below and update the code to test convertDocumentKeynoteToPdf
        //instance.convertDocumentKeynoteToPdf(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('convertDocumentKeynoteToPng', function() {
      it('should call convertDocumentKeynoteToPng successfully', function(done) {
        //uncomment below and update the code to test convertDocumentKeynoteToPng
        //instance.convertDocumentKeynoteToPng(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('convertDocumentKeynoteToPptx', function() {
      it('should call convertDocumentKeynoteToPptx successfully', function(done) {
        //uncomment below and update the code to test convertDocumentKeynoteToPptx
        //instance.convertDocumentKeynoteToPptx(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('convertDocumentMsgToHtml', function() {
      it('should call convertDocumentMsgToHtml successfully', function(done) {
        //uncomment below and update the code to test convertDocumentMsgToHtml
        //instance.convertDocumentMsgToHtml(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('convertDocumentMsgToJpg', function() {
      it('should call convertDocumentMsgToJpg successfully', function(done) {
        //uncomment below and update the code to test convertDocumentMsgToJpg
        //instance.convertDocumentMsgToJpg(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('convertDocumentMsgToPdf', function() {
      it('should call convertDocumentMsgToPdf successfully', function(done) {
        //uncomment below and update the code to test convertDocumentMsgToPdf
        //instance.convertDocumentMsgToPdf(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('convertDocumentMsgToPng', function() {
      it('should call convertDocumentMsgToPng successfully', function(done) {
        //uncomment below and update the code to test convertDocumentMsgToPng
        //instance.convertDocumentMsgToPng(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('convertDocumentOdpToJpg', function() {
      it('should call convertDocumentOdpToJpg successfully', function(done) {
        //uncomment below and update the code to test convertDocumentOdpToJpg
        //instance.convertDocumentOdpToJpg(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('convertDocumentOdpToPdf', function() {
      it('should call convertDocumentOdpToPdf successfully', function(done) {
        //uncomment below and update the code to test convertDocumentOdpToPdf
        //instance.convertDocumentOdpToPdf(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('convertDocumentOdpToPng', function() {
      it('should call convertDocumentOdpToPng successfully', function(done) {
        //uncomment below and update the code to test convertDocumentOdpToPng
        //instance.convertDocumentOdpToPng(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('convertDocumentOdpToPptx', function() {
      it('should call convertDocumentOdpToPptx successfully', function(done) {
        //uncomment below and update the code to test convertDocumentOdpToPptx
        //instance.convertDocumentOdpToPptx(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('convertDocumentOdsToJpg', function() {
      it('should call convertDocumentOdsToJpg successfully', function(done) {
        //uncomment below and update the code to test convertDocumentOdsToJpg
        //instance.convertDocumentOdsToJpg(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('convertDocumentOdsToPdf', function() {
      it('should call convertDocumentOdsToPdf successfully', function(done) {
        //uncomment below and update the code to test convertDocumentOdsToPdf
        //instance.convertDocumentOdsToPdf(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('convertDocumentOdsToPng', function() {
      it('should call convertDocumentOdsToPng successfully', function(done) {
        //uncomment below and update the code to test convertDocumentOdsToPng
        //instance.convertDocumentOdsToPng(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('convertDocumentOdsToXlsx', function() {
      it('should call convertDocumentOdsToXlsx successfully', function(done) {
        //uncomment below and update the code to test convertDocumentOdsToXlsx
        //instance.convertDocumentOdsToXlsx(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('convertDocumentOdtToDocx', function() {
      it('should call convertDocumentOdtToDocx successfully', function(done) {
        //uncomment below and update the code to test convertDocumentOdtToDocx
        //instance.convertDocumentOdtToDocx(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('convertDocumentOdtToJpg', function() {
      it('should call convertDocumentOdtToJpg successfully', function(done) {
        //uncomment below and update the code to test convertDocumentOdtToJpg
        //instance.convertDocumentOdtToJpg(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('convertDocumentOdtToPdf', function() {
      it('should call convertDocumentOdtToPdf successfully', function(done) {
        //uncomment below and update the code to test convertDocumentOdtToPdf
        //instance.convertDocumentOdtToPdf(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('convertDocumentOdtToPng', function() {
      it('should call convertDocumentOdtToPng successfully', function(done) {
        //uncomment below and update the code to test convertDocumentOdtToPng
        //instance.convertDocumentOdtToPng(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('convertDocumentPdfToDocx', function() {
      it('should call convertDocumentPdfToDocx successfully', function(done) {
        //uncomment below and update the code to test convertDocumentPdfToDocx
        //instance.convertDocumentPdfToDocx(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('convertDocumentPdfToDocxRasterize', function() {
      it('should call convertDocumentPdfToDocxRasterize successfully', function(done) {
        //uncomment below and update the code to test convertDocumentPdfToDocxRasterize
        //instance.convertDocumentPdfToDocxRasterize(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('convertDocumentPdfToPngArray', function() {
      it('should call convertDocumentPdfToPngArray successfully', function(done) {
        //uncomment below and update the code to test convertDocumentPdfToPngArray
        //instance.convertDocumentPdfToPngArray(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('convertDocumentPdfToPngSingle', function() {
      it('should call convertDocumentPdfToPngSingle successfully', function(done) {
        //uncomment below and update the code to test convertDocumentPdfToPngSingle
        //instance.convertDocumentPdfToPngSingle(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('convertDocumentPdfToPptx', function() {
      it('should call convertDocumentPdfToPptx successfully', function(done) {
        //uncomment below and update the code to test convertDocumentPdfToPptx
        //instance.convertDocumentPdfToPptx(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('convertDocumentPdfToTxt', function() {
      it('should call convertDocumentPdfToTxt successfully', function(done) {
        //uncomment below and update the code to test convertDocumentPdfToTxt
        //instance.convertDocumentPdfToTxt(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('convertDocumentPngArrayToPdf', function() {
      it('should call convertDocumentPngArrayToPdf successfully', function(done) {
        //uncomment below and update the code to test convertDocumentPngArrayToPdf
        //instance.convertDocumentPngArrayToPdf(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('convertDocumentPptToPdf', function() {
      it('should call convertDocumentPptToPdf successfully', function(done) {
        //uncomment below and update the code to test convertDocumentPptToPdf
        //instance.convertDocumentPptToPdf(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('convertDocumentPptToPptx', function() {
      it('should call convertDocumentPptToPptx successfully', function(done) {
        //uncomment below and update the code to test convertDocumentPptToPptx
        //instance.convertDocumentPptToPptx(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('convertDocumentPptxToPdf', function() {
      it('should call convertDocumentPptxToPdf successfully', function(done) {
        //uncomment below and update the code to test convertDocumentPptxToPdf
        //instance.convertDocumentPptxToPdf(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('convertDocumentPptxToPng', function() {
      it('should call convertDocumentPptxToPng successfully', function(done) {
        //uncomment below and update the code to test convertDocumentPptxToPng
        //instance.convertDocumentPptxToPng(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('convertDocumentPptxToTxt', function() {
      it('should call convertDocumentPptxToTxt successfully', function(done) {
        //uncomment below and update the code to test convertDocumentPptxToTxt
        //instance.convertDocumentPptxToTxt(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('convertDocumentRtfToDocx', function() {
      it('should call convertDocumentRtfToDocx successfully', function(done) {
        //uncomment below and update the code to test convertDocumentRtfToDocx
        //instance.convertDocumentRtfToDocx(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('convertDocumentRtfToHtml', function() {
      it('should call convertDocumentRtfToHtml successfully', function(done) {
        //uncomment below and update the code to test convertDocumentRtfToHtml
        //instance.convertDocumentRtfToHtml(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('convertDocumentRtfToJpg', function() {
      it('should call convertDocumentRtfToJpg successfully', function(done) {
        //uncomment below and update the code to test convertDocumentRtfToJpg
        //instance.convertDocumentRtfToJpg(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('convertDocumentRtfToPdf', function() {
      it('should call convertDocumentRtfToPdf successfully', function(done) {
        //uncomment below and update the code to test convertDocumentRtfToPdf
        //instance.convertDocumentRtfToPdf(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('convertDocumentRtfToPng', function() {
      it('should call convertDocumentRtfToPng successfully', function(done) {
        //uncomment below and update the code to test convertDocumentRtfToPng
        //instance.convertDocumentRtfToPng(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('convertDocumentXlsToCsv', function() {
      it('should call convertDocumentXlsToCsv successfully', function(done) {
        //uncomment below and update the code to test convertDocumentXlsToCsv
        //instance.convertDocumentXlsToCsv(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('convertDocumentXlsToPdf', function() {
      it('should call convertDocumentXlsToPdf successfully', function(done) {
        //uncomment below and update the code to test convertDocumentXlsToPdf
        //instance.convertDocumentXlsToPdf(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('convertDocumentXlsToXlsx', function() {
      it('should call convertDocumentXlsToXlsx successfully', function(done) {
        //uncomment below and update the code to test convertDocumentXlsToXlsx
        //instance.convertDocumentXlsToXlsx(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('convertDocumentXlsxToCsv', function() {
      it('should call convertDocumentXlsxToCsv successfully', function(done) {
        //uncomment below and update the code to test convertDocumentXlsxToCsv
        //instance.convertDocumentXlsxToCsv(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('convertDocumentXlsxToCsvMulti', function() {
      it('should call convertDocumentXlsxToCsvMulti successfully', function(done) {
        //uncomment below and update the code to test convertDocumentXlsxToCsvMulti
        //instance.convertDocumentXlsxToCsvMulti(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('convertDocumentXlsxToPdf', function() {
      it('should call convertDocumentXlsxToPdf successfully', function(done) {
        //uncomment below and update the code to test convertDocumentXlsxToPdf
        //instance.convertDocumentXlsxToPdf(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('convertDocumentXlsxToPng', function() {
      it('should call convertDocumentXlsxToPng successfully', function(done) {
        //uncomment below and update the code to test convertDocumentXlsxToPng
        //instance.convertDocumentXlsxToPng(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('convertDocumentXlsxToTxt', function() {
      it('should call convertDocumentXlsxToTxt successfully', function(done) {
        //uncomment below and update the code to test convertDocumentXlsxToTxt
        //instance.convertDocumentXlsxToTxt(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
