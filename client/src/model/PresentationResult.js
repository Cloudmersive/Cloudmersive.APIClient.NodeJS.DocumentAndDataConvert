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
    root.CloudmersiveConvertApiClient.PresentationResult = factory(root.CloudmersiveConvertApiClient.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The PresentationResult model module.
   * @module model/PresentationResult
   * @version 2.4.3
   */

  /**
   * Constructs a new <code>PresentationResult</code>.
   * A single Excel XLSX file corresponding to one worksheet (tab) in the original spreadsheet
   * @alias module:model/PresentationResult
   * @class
   */
  var exports = function() {
    var _this = this;




  };

  /**
   * Constructs a <code>PresentationResult</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PresentationResult} obj Optional instance to populate.
   * @return {module:model/PresentationResult} The populated <code>PresentationResult</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('SlideNumber')) {
        obj['SlideNumber'] = ApiClient.convertToType(data['SlideNumber'], 'Number');
      }
      if (data.hasOwnProperty('URL')) {
        obj['URL'] = ApiClient.convertToType(data['URL'], 'String');
      }
      if (data.hasOwnProperty('PresentationContents')) {
        obj['PresentationContents'] = ApiClient.convertToType(data['PresentationContents'], 'Blob');
      }
    }
    return obj;
  }

  /**
   * Worksheet number of the converted page, starting with 1 for the left-most worksheet
   * @member {Number} SlideNumber
   */
  exports.prototype['SlideNumber'] = undefined;
  /**
   * URL to the PPTX file of this slide; file is stored in an in-memory cache and will be deleted
   * @member {String} URL
   */
  exports.prototype['URL'] = undefined;
  /**
   * Contents of the presentation in bytes
   * @member {Blob} PresentationContents
   */
  exports.prototype['PresentationContents'] = undefined;



  return exports;
}));

