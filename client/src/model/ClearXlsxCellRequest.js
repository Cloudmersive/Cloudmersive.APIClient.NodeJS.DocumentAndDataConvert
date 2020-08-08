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
    define(['ApiClient', 'model/XlsxWorksheet'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./XlsxWorksheet'));
  } else {
    // Browser globals (root is window)
    if (!root.CloudmersiveConvertApiClient) {
      root.CloudmersiveConvertApiClient = {};
    }
    root.CloudmersiveConvertApiClient.ClearXlsxCellRequest = factory(root.CloudmersiveConvertApiClient.ApiClient, root.CloudmersiveConvertApiClient.XlsxWorksheet);
  }
}(this, function(ApiClient, XlsxWorksheet) {
  'use strict';




  /**
   * The ClearXlsxCellRequest model module.
   * @module model/ClearXlsxCellRequest
   * @version 2.5.4
   */

  /**
   * Constructs a new <code>ClearXlsxCellRequest</code>.
   * Input to a Clear Cell in XLSX Worksheet request
   * @alias module:model/ClearXlsxCellRequest
   * @class
   */
  var exports = function() {
    var _this = this;






  };

  /**
   * Constructs a <code>ClearXlsxCellRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ClearXlsxCellRequest} obj Optional instance to populate.
   * @return {module:model/ClearXlsxCellRequest} The populated <code>ClearXlsxCellRequest</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('InputFileBytes')) {
        obj['InputFileBytes'] = ApiClient.convertToType(data['InputFileBytes'], 'Blob');
      }
      if (data.hasOwnProperty('InputFileUrl')) {
        obj['InputFileUrl'] = ApiClient.convertToType(data['InputFileUrl'], 'String');
      }
      if (data.hasOwnProperty('WorksheetToUpdate')) {
        obj['WorksheetToUpdate'] = XlsxWorksheet.constructFromObject(data['WorksheetToUpdate']);
      }
      if (data.hasOwnProperty('RowIndex')) {
        obj['RowIndex'] = ApiClient.convertToType(data['RowIndex'], 'Number');
      }
      if (data.hasOwnProperty('CellIndex')) {
        obj['CellIndex'] = ApiClient.convertToType(data['CellIndex'], 'Number');
      }
    }
    return obj;
  }

  /**
   * Optional: Bytes of the input file to operate on
   * @member {Blob} InputFileBytes
   */
  exports.prototype['InputFileBytes'] = undefined;
  /**
   * Optional: URL of a file to operate on as input.  This can be a public URL, or you can also use the begin-editing API to upload a document and pass in the secure URL result from that operation as the URL here (this URL is not public).
   * @member {String} InputFileUrl
   */
  exports.prototype['InputFileUrl'] = undefined;
  /**
   * Optional; Worksheet (tab) within the spreadsheet to update; leave blank to default to the first worksheet
   * @member {module:model/XlsxWorksheet} WorksheetToUpdate
   */
  exports.prototype['WorksheetToUpdate'] = undefined;
  /**
   * 0-based index of the row, 0, 1, 2, ... to clear
   * @member {Number} RowIndex
   */
  exports.prototype['RowIndex'] = undefined;
  /**
   * 0-based index of the cell, 0, 1, 2, ... in the row to clear
   * @member {Number} CellIndex
   */
  exports.prototype['CellIndex'] = undefined;



  return exports;
}));


