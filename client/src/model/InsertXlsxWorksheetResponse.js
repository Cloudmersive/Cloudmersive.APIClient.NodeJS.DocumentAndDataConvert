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
    root.CloudmersiveConvertApiClient.InsertXlsxWorksheetResponse = factory(root.CloudmersiveConvertApiClient.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The InsertXlsxWorksheetResponse model module.
   * @module model/InsertXlsxWorksheetResponse
   * @version 2.1.8
   */

  /**
   * Constructs a new <code>InsertXlsxWorksheetResponse</code>.
   * Result of running a Get-Worksheets command
   * @alias module:model/InsertXlsxWorksheetResponse
   * @class
   */
  var exports = function() {
    var _this = this;



  };

  /**
   * Constructs a <code>InsertXlsxWorksheetResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/InsertXlsxWorksheetResponse} obj Optional instance to populate.
   * @return {module:model/InsertXlsxWorksheetResponse} The populated <code>InsertXlsxWorksheetResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('Successful')) {
        obj['Successful'] = ApiClient.convertToType(data['Successful'], 'Boolean');
      }
      if (data.hasOwnProperty('EditedDocumentURL')) {
        obj['EditedDocumentURL'] = ApiClient.convertToType(data['EditedDocumentURL'], 'String');
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
   * URL to the edited XLSX file; file is stored in an in-memory cache and will be deleted.  Call Finish-Editing to get the result document contents.
   * @member {String} EditedDocumentURL
   */
  exports.prototype['EditedDocumentURL'] = undefined;



  return exports;
}));


