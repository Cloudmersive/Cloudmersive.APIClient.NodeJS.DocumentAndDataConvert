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
    root.CloudmersiveConvertApiClient.CreateSpreadsheetFromDataRequest = factory(root.CloudmersiveConvertApiClient.ApiClient, root.CloudmersiveConvertApiClient.XlsxSpreadsheetRow);
  }
}(this, function(ApiClient, XlsxSpreadsheetRow) {
  'use strict';




  /**
   * The CreateSpreadsheetFromDataRequest model module.
   * @module model/CreateSpreadsheetFromDataRequest
   * @version 2.4.6
   */

  /**
   * Constructs a new <code>CreateSpreadsheetFromDataRequest</code>.
   * Input to Create a new Spreadsheet request
   * @alias module:model/CreateSpreadsheetFromDataRequest
   * @class
   */
  var exports = function() {
    var _this = this;



  };

  /**
   * Constructs a <code>CreateSpreadsheetFromDataRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CreateSpreadsheetFromDataRequest} obj Optional instance to populate.
   * @return {module:model/CreateSpreadsheetFromDataRequest} The populated <code>CreateSpreadsheetFromDataRequest</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('WorksheetName')) {
        obj['WorksheetName'] = ApiClient.convertToType(data['WorksheetName'], 'String');
      }
      if (data.hasOwnProperty('Rows')) {
        obj['Rows'] = ApiClient.convertToType(data['Rows'], [XlsxSpreadsheetRow]);
      }
    }
    return obj;
  }

  /**
   * Optional; The new Spreadsheet will have a default Worksheet in it; supply a name, or if left empty, will default to Worksheet1
   * @member {String} WorksheetName
   */
  exports.prototype['WorksheetName'] = undefined;
  /**
   * Required; Rows and cells to populate the spreadsheet with
   * @member {Array.<module:model/XlsxSpreadsheetRow>} Rows
   */
  exports.prototype['Rows'] = undefined;



  return exports;
}));


