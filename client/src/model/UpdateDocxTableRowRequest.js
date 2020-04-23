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
    define(['ApiClient', 'model/DocxTableRow'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./DocxTableRow'));
  } else {
    // Browser globals (root is window)
    if (!root.CloudmersiveConvertApiClient) {
      root.CloudmersiveConvertApiClient = {};
    }
    root.CloudmersiveConvertApiClient.UpdateDocxTableRowRequest = factory(root.CloudmersiveConvertApiClient.ApiClient, root.CloudmersiveConvertApiClient.DocxTableRow);
  }
}(this, function(ApiClient, DocxTableRow) {
  'use strict';




  /**
   * The UpdateDocxTableRowRequest model module.
   * @module model/UpdateDocxTableRowRequest
   * @version 2.4.6
   */

  /**
   * Constructs a new <code>UpdateDocxTableRowRequest</code>.
   * Input to a Update Table Row request
   * @alias module:model/UpdateDocxTableRowRequest
   * @class
   */
  var exports = function() {
    var _this = this;






  };

  /**
   * Constructs a <code>UpdateDocxTableRowRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/UpdateDocxTableRowRequest} obj Optional instance to populate.
   * @return {module:model/UpdateDocxTableRowRequest} The populated <code>UpdateDocxTableRowRequest</code> instance.
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
      if (data.hasOwnProperty('RowToUpdate')) {
        obj['RowToUpdate'] = DocxTableRow.constructFromObject(data['RowToUpdate']);
      }
      if (data.hasOwnProperty('TableRowIndex')) {
        obj['TableRowIndex'] = ApiClient.convertToType(data['TableRowIndex'], 'Number');
      }
      if (data.hasOwnProperty('ExistingTablePath')) {
        obj['ExistingTablePath'] = ApiClient.convertToType(data['ExistingTablePath'], 'String');
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
   * Table row contents you would like to update the row with
   * @member {module:model/DocxTableRow} RowToUpdate
   */
  exports.prototype['RowToUpdate'] = undefined;
  /**
   * 0-based index of the Table Row to update
   * @member {Number} TableRowIndex
   */
  exports.prototype['TableRowIndex'] = undefined;
  /**
   * Required; the path to the existing table to modify
   * @member {String} ExistingTablePath
   */
  exports.prototype['ExistingTablePath'] = undefined;



  return exports;
}));


