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
    define(['ApiClient', 'model/XlsxSpreadsheetColumn'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./XlsxSpreadsheetColumn'));
  } else {
    // Browser globals (root is window)
    if (!root.CloudmersiveConvertApiClient) {
      root.CloudmersiveConvertApiClient = {};
    }
    root.CloudmersiveConvertApiClient.GetXlsxColumnsResponse = factory(root.CloudmersiveConvertApiClient.ApiClient, root.CloudmersiveConvertApiClient.XlsxSpreadsheetColumn);
  }
}(this, function(ApiClient, XlsxSpreadsheetColumn) {
  'use strict';




  /**
   * The GetXlsxColumnsResponse model module.
   * @module model/GetXlsxColumnsResponse
   * @version 2.3.3
   */

  /**
   * Constructs a new <code>GetXlsxColumnsResponse</code>.
   * Result of running a Get-Columns command
   * @alias module:model/GetXlsxColumnsResponse
   * @class
   */
  var exports = function() {
    var _this = this;



  };

  /**
   * Constructs a <code>GetXlsxColumnsResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GetXlsxColumnsResponse} obj Optional instance to populate.
   * @return {module:model/GetXlsxColumnsResponse} The populated <code>GetXlsxColumnsResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('Successful')) {
        obj['Successful'] = ApiClient.convertToType(data['Successful'], 'Boolean');
      }
      if (data.hasOwnProperty('Columns')) {
        obj['Columns'] = ApiClient.convertToType(data['Columns'], [XlsxSpreadsheetColumn]);
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
   * Spreadsheet Columns in the XLSX document
   * @member {Array.<module:model/XlsxSpreadsheetColumn>} Columns
   */
  exports.prototype['Columns'] = undefined;



  return exports;
}));


