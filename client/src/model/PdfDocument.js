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
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.CloudmersiveConvertApiClient) {
      root.CloudmersiveConvertApiClient = {};
    }
    root.CloudmersiveConvertApiClient.PdfDocument = factory(root.CloudmersiveConvertApiClient.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The PdfDocument model module.
   * @module model/PdfDocument
   * @version 2.6.2
   */

  /**
   * Constructs a new <code>PdfDocument</code>.
   * A single PDF file corresponding to one page in the original document
   * @alias module:model/PdfDocument
   * @class
   */
  var exports = function() {
    var _this = this;




  };

  /**
   * Constructs a <code>PdfDocument</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PdfDocument} obj Optional instance to populate.
   * @return {module:model/PdfDocument} The populated <code>PdfDocument</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('PageNumber')) {
        obj['PageNumber'] = ApiClient.convertToType(data['PageNumber'], 'Number');
      }
      if (data.hasOwnProperty('URL')) {
        obj['URL'] = ApiClient.convertToType(data['URL'], 'String');
      }
      if (data.hasOwnProperty('DocumentContents')) {
        obj['DocumentContents'] = ApiClient.convertToType(data['DocumentContents'], 'Blob');
      }
    }
    return obj;
  }

  /**
   * Page number of the converted page, starting with 1 for the first page
   * @member {Number} PageNumber
   */
  exports.prototype['PageNumber'] = undefined;
  /**
   * URL to the PDF file of this worksheet; file is stored in an in-memory cache and will be deleted
   * @member {String} URL
   */
  exports.prototype['URL'] = undefined;
  /**
   * If returnDocumentContents is set to true, will contain the contents of the document; otherwise will be set to null and the document contents will be available via the URL parameter
   * @member {Blob} DocumentContents
   */
  exports.prototype['DocumentContents'] = undefined;



  return exports;
}));


