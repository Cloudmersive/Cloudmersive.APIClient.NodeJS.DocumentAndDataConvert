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
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/PdfAnnotation'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./PdfAnnotation'));
  } else {
    // Browser globals (root is window)
    if (!root.CloudmersiveConvertApiClient) {
      root.CloudmersiveConvertApiClient = {};
    }
    root.CloudmersiveConvertApiClient.AddPdfAnnotationRequest = factory(root.CloudmersiveConvertApiClient.ApiClient, root.CloudmersiveConvertApiClient.PdfAnnotation);
  }
}(this, function(ApiClient, PdfAnnotation) {
  'use strict';




  /**
   * The AddPdfAnnotationRequest model module.
   * @module model/AddPdfAnnotationRequest
   * @version 2.3.7
   */

  /**
   * Constructs a new <code>AddPdfAnnotationRequest</code>.
   * Request to add annotations to a PDF
   * @alias module:model/AddPdfAnnotationRequest
   * @class
   */
  var exports = function() {
    var _this = this;



  };

  /**
   * Constructs a <code>AddPdfAnnotationRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/AddPdfAnnotationRequest} obj Optional instance to populate.
   * @return {module:model/AddPdfAnnotationRequest} The populated <code>AddPdfAnnotationRequest</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('InputFileBytes')) {
        obj['InputFileBytes'] = ApiClient.convertToType(data['InputFileBytes'], 'Blob');
      }
      if (data.hasOwnProperty('AnnotationsToAdd')) {
        obj['AnnotationsToAdd'] = ApiClient.convertToType(data['AnnotationsToAdd'], [PdfAnnotation]);
      }
    }
    return obj;
  }

  /**
   * Input file contents bytes for the file to modify
   * @member {Blob} InputFileBytes
   */
  exports.prototype['InputFileBytes'] = undefined;
  /**
   * Annotations to add to the PDF file
   * @member {Array.<module:model/PdfAnnotation>} AnnotationsToAdd
   */
  exports.prototype['AnnotationsToAdd'] = undefined;



  return exports;
}));


