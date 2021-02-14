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
    define(['ApiClient', 'model/PdfMetadata'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./PdfMetadata'));
  } else {
    // Browser globals (root is window)
    if (!root.CloudmersiveConvertApiClient) {
      root.CloudmersiveConvertApiClient = {};
    }
    root.CloudmersiveConvertApiClient.SetPdfMetadataRequest = factory(root.CloudmersiveConvertApiClient.ApiClient, root.CloudmersiveConvertApiClient.PdfMetadata);
  }
}(this, function(ApiClient, PdfMetadata) {
  'use strict';




  /**
   * The SetPdfMetadataRequest model module.
   * @module model/SetPdfMetadataRequest
   * @version 2.6.3
   */

  /**
   * Constructs a new <code>SetPdfMetadataRequest</code>.
   * Request to set PDF metadata
   * @alias module:model/SetPdfMetadataRequest
   * @class
   */
  var exports = function() {
    var _this = this;



  };

  /**
   * Constructs a <code>SetPdfMetadataRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/SetPdfMetadataRequest} obj Optional instance to populate.
   * @return {module:model/SetPdfMetadataRequest} The populated <code>SetPdfMetadataRequest</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('InputFileBytes')) {
        obj['InputFileBytes'] = ApiClient.convertToType(data['InputFileBytes'], 'Blob');
      }
      if (data.hasOwnProperty('MetadataToSet')) {
        obj['MetadataToSet'] = PdfMetadata.constructFromObject(data['MetadataToSet']);
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
   * PDF metadata to set on the file
   * @member {module:model/PdfMetadata} MetadataToSet
   */
  exports.prototype['MetadataToSet'] = undefined;



  return exports;
}));


