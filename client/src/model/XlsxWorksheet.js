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
    root.CloudmersiveConvertApiClient.XlsxWorksheet = factory(root.CloudmersiveConvertApiClient.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The XlsxWorksheet model module.
   * @module model/XlsxWorksheet
   * @version 2.1.7
   */

  /**
   * Constructs a new <code>XlsxWorksheet</code>.
   * A worksheet (tab) in an Excel (XLSX) spreadsheet
   * @alias module:model/XlsxWorksheet
   * @class
   */
  var exports = function() {
    var _this = this;



  };

  /**
   * Constructs a <code>XlsxWorksheet</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/XlsxWorksheet} obj Optional instance to populate.
   * @return {module:model/XlsxWorksheet} The populated <code>XlsxWorksheet</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('Path')) {
        obj['Path'] = ApiClient.convertToType(data['Path'], 'String');
      }
      if (data.hasOwnProperty('WorksheetName')) {
        obj['WorksheetName'] = ApiClient.convertToType(data['WorksheetName'], 'String');
      }
    }
    return obj;
  }

  /**
   * The Path of the location of this object; leave blank for new worksheets
   * @member {String} Path
   */
  exports.prototype['Path'] = undefined;
  /**
   * User-facing name of the worksheet tab
   * @member {String} WorksheetName
   */
  exports.prototype['WorksheetName'] = undefined;



  return exports;
}));


