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
    root.CloudmersiveConvertApiClient.WorksheetResult = factory(root.CloudmersiveConvertApiClient.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The WorksheetResult model module.
   * @module model/WorksheetResult
   * @version 2.5.8
   */

  /**
   * Constructs a new <code>WorksheetResult</code>.
   * A single Excel XLSX file corresponding to one worksheet (tab) in the original spreadsheet
   * @alias module:model/WorksheetResult
   * @class
   */
  var exports = function() {
    var _this = this;





  };

  /**
   * Constructs a <code>WorksheetResult</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/WorksheetResult} obj Optional instance to populate.
   * @return {module:model/WorksheetResult} The populated <code>WorksheetResult</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('WorksheetNumber')) {
        obj['WorksheetNumber'] = ApiClient.convertToType(data['WorksheetNumber'], 'Number');
      }
      if (data.hasOwnProperty('WorksheetName')) {
        obj['WorksheetName'] = ApiClient.convertToType(data['WorksheetName'], 'String');
      }
      if (data.hasOwnProperty('URL')) {
        obj['URL'] = ApiClient.convertToType(data['URL'], 'String');
      }
      if (data.hasOwnProperty('WorksheetContents')) {
        obj['WorksheetContents'] = ApiClient.convertToType(data['WorksheetContents'], 'Blob');
      }
    }
    return obj;
  }

  /**
   * Worksheet number of the converted page, starting with 1 for the left-most worksheet
   * @member {Number} WorksheetNumber
   */
  exports.prototype['WorksheetNumber'] = undefined;
  /**
   * The name of the worksheet
   * @member {String} WorksheetName
   */
  exports.prototype['WorksheetName'] = undefined;
  /**
   * URL to the XLSX file of this worksheet; file is stored in an in-memory cache and will be deleted
   * @member {String} URL
   */
  exports.prototype['URL'] = undefined;
  /**
   * Contents of the worksheet in bytes
   * @member {Blob} WorksheetContents
   */
  exports.prototype['WorksheetContents'] = undefined;



  return exports;
}));


