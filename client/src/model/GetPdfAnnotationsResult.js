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
    root.CloudmersiveConvertApiClient.GetPdfAnnotationsResult = factory(root.CloudmersiveConvertApiClient.ApiClient, root.CloudmersiveConvertApiClient.PdfAnnotation);
  }
}(this, function(ApiClient, PdfAnnotation) {
  'use strict';




  /**
   * The GetPdfAnnotationsResult model module.
   * @module model/GetPdfAnnotationsResult
   * @version 2.6.1
   */

  /**
   * Constructs a new <code>GetPdfAnnotationsResult</code>.
   * Result of retrieving annotations from a PDF document
   * @alias module:model/GetPdfAnnotationsResult
   * @class
   */
  var exports = function() {
    var _this = this;



  };

  /**
   * Constructs a <code>GetPdfAnnotationsResult</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GetPdfAnnotationsResult} obj Optional instance to populate.
   * @return {module:model/GetPdfAnnotationsResult} The populated <code>GetPdfAnnotationsResult</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('Successful')) {
        obj['Successful'] = ApiClient.convertToType(data['Successful'], 'Boolean');
      }
      if (data.hasOwnProperty('Annotations')) {
        obj['Annotations'] = ApiClient.convertToType(data['Annotations'], [PdfAnnotation]);
      }
    }
    return obj;
  }

  /**
   * True if successful, false otherwise
   * @member {Boolean} Successful
   */
  exports.prototype['Successful'] = undefined;
  /**
   * Annotations in the PDF file, ordered by placement from start to finish in the document
   * @member {Array.<module:model/PdfAnnotation>} Annotations
   */
  exports.prototype['Annotations'] = undefined;



  return exports;
}));


