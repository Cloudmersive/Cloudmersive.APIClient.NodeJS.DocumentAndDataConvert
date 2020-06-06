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
    define(['ApiClient', 'model/XlsxSpreadsheetRow'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./XlsxSpreadsheetRow'));
  } else {
    // Browser globals (root is window)
    if (!root.CloudmersiveConvertApiClient) {
      root.CloudmersiveConvertApiClient = {};
    }
    root.CloudmersiveConvertApiClient.GetXlsxSpecificRowResponse = factory(root.CloudmersiveConvertApiClient.ApiClient, root.CloudmersiveConvertApiClient.XlsxSpreadsheetRow);
  }
}(this, function(ApiClient, XlsxSpreadsheetRow) {
  'use strict';




  /**
   * The GetXlsxSpecificRowResponse model module.
   * @module model/GetXlsxSpecificRowResponse
   * @version 2.4.9
   */

  /**
   * Constructs a new <code>GetXlsxSpecificRowResponse</code>.
   * Result of running a Get-Specific-Row command
   * @alias module:model/GetXlsxSpecificRowResponse
   * @class
   */
  var exports = function() {
    var _this = this;



  };

  /**
   * Constructs a <code>GetXlsxSpecificRowResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GetXlsxSpecificRowResponse} obj Optional instance to populate.
   * @return {module:model/GetXlsxSpecificRowResponse} The populated <code>GetXlsxSpecificRowResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('Successful')) {
        obj['Successful'] = ApiClient.convertToType(data['Successful'], 'Boolean');
      }
      if (data.hasOwnProperty('Row')) {
        obj['Row'] = XlsxSpreadsheetRow.constructFromObject(data['Row']);
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
   * Spreadsheet Row from the Excel XLSX document
   * @member {module:model/XlsxSpreadsheetRow} Row
   */
  exports.prototype['Row'] = undefined;



  return exports;
}));


