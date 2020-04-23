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
    root.CloudmersiveConvertApiClient.GetXlsxCellByIdentifierRequest = factory(root.CloudmersiveConvertApiClient.ApiClient, root.CloudmersiveConvertApiClient.XlsxWorksheet);
  }
}(this, function(ApiClient, XlsxWorksheet) {
  'use strict';




  /**
   * The GetXlsxCellByIdentifierRequest model module.
   * @module model/GetXlsxCellByIdentifierRequest
   * @version 2.4.6
   */

  /**
   * Constructs a new <code>GetXlsxCellByIdentifierRequest</code>.
   * Input to a Get Cell by cell identifier request
   * @alias module:model/GetXlsxCellByIdentifierRequest
   * @class
   */
  var exports = function() {
    var _this = this;





  };

  /**
   * Constructs a <code>GetXlsxCellByIdentifierRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GetXlsxCellByIdentifierRequest} obj Optional instance to populate.
   * @return {module:model/GetXlsxCellByIdentifierRequest} The populated <code>GetXlsxCellByIdentifierRequest</code> instance.
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
      if (data.hasOwnProperty('WorksheetToQuery')) {
        obj['WorksheetToQuery'] = XlsxWorksheet.constructFromObject(data['WorksheetToQuery']);
      }
      if (data.hasOwnProperty('CellIdentifier')) {
        obj['CellIdentifier'] = ApiClient.convertToType(data['CellIdentifier'], 'String');
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
   * Optional; Worksheet (tab) within the spreadsheet to get the rows and cells of; leave blank to default to the first worksheet
   * @member {module:model/XlsxWorksheet} WorksheetToQuery
   */
  exports.prototype['WorksheetToQuery'] = undefined;
  /**
   * Required; Excel cell identifier, e.g. A1, B22, C33, etc.
   * @member {String} CellIdentifier
   */
  exports.prototype['CellIdentifier'] = undefined;



  return exports;
}));


