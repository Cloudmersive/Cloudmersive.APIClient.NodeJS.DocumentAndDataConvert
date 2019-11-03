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
    root.CloudmersiveConvertApiClient.XlsxSpreadsheetRow = factory(root.CloudmersiveConvertApiClient.ApiClient, root.CloudmersiveConvertApiClient.XlsxSpreadsheetCell);
  }
}(this, function(ApiClient, XlsxSpreadsheetCell) {
  'use strict';




  /**
   * The XlsxSpreadsheetRow model module.
   * @module model/XlsxSpreadsheetRow
   * @version 2.1.5
   */

  /**
   * Constructs a new <code>XlsxSpreadsheetRow</code>.
   * Row in an Excel spreadsheet worksheet
   * @alias module:model/XlsxSpreadsheetRow
   * @class
   */
  var exports = function() {
    var _this = this;



  };

  /**
   * Constructs a <code>XlsxSpreadsheetRow</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/XlsxSpreadsheetRow} obj Optional instance to populate.
   * @return {module:model/XlsxSpreadsheetRow} The populated <code>XlsxSpreadsheetRow</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('Path')) {
        obj['Path'] = ApiClient.convertToType(data['Path'], 'String');
      }
      if (data.hasOwnProperty('Cells')) {
        obj['Cells'] = ApiClient.convertToType(data['Cells'], [XlsxSpreadsheetCell]);
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
   * Spreadsheet Cells in the spreadsheet row
   * @member {Array.<module:model/XlsxSpreadsheetCell>} Cells
   */
  exports.prototype['Cells'] = undefined;



  return exports;
}));


