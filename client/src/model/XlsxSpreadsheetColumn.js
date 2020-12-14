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
    define(['ApiClient', 'model/XlsxSpreadsheetCell'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./XlsxSpreadsheetCell'));
  } else {
    // Browser globals (root is window)
    if (!root.CloudmersiveConvertApiClient) {
      root.CloudmersiveConvertApiClient = {};
    }
    root.CloudmersiveConvertApiClient.XlsxSpreadsheetColumn = factory(root.CloudmersiveConvertApiClient.ApiClient, root.CloudmersiveConvertApiClient.XlsxSpreadsheetCell);
  }
}(this, function(ApiClient, XlsxSpreadsheetCell) {
  'use strict';




  /**
   * The XlsxSpreadsheetColumn model module.
   * @module model/XlsxSpreadsheetColumn
   * @version 2.5.9
   */

  /**
   * Constructs a new <code>XlsxSpreadsheetColumn</code>.
   * Column in an Excel spreadsheet worksheet
   * @alias module:model/XlsxSpreadsheetColumn
   * @class
   */
  var exports = function() {
    var _this = this;



  };

  /**
   * Constructs a <code>XlsxSpreadsheetColumn</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/XlsxSpreadsheetColumn} obj Optional instance to populate.
   * @return {module:model/XlsxSpreadsheetColumn} The populated <code>XlsxSpreadsheetColumn</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('Path')) {
        obj['Path'] = ApiClient.convertToType(data['Path'], 'String');
      }
      if (data.hasOwnProperty('HeadingCell')) {
        obj['HeadingCell'] = XlsxSpreadsheetCell.constructFromObject(data['HeadingCell']);
      }
    }
    return obj;
  }

  /**
   * The Path of the location of this object; leave blank for new rows
   * @member {String} Path
   */
  exports.prototype['Path'] = undefined;
  /**
   * Heading cell for this column
   * @member {module:model/XlsxSpreadsheetCell} HeadingCell
   */
  exports.prototype['HeadingCell'] = undefined;



  return exports;
}));


