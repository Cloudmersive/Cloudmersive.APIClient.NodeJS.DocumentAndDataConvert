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
    define(['ApiClient', 'model/DocxTableCell'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./DocxTableCell'));
  } else {
    // Browser globals (root is window)
    if (!root.CloudmersiveConvertApiClient) {
      root.CloudmersiveConvertApiClient = {};
    }
    root.CloudmersiveConvertApiClient.UpdateDocxTableCellRequest = factory(root.CloudmersiveConvertApiClient.ApiClient, root.CloudmersiveConvertApiClient.DocxTableCell);
  }
}(this, function(ApiClient, DocxTableCell) {
  'use strict';




  /**
   * The UpdateDocxTableCellRequest model module.
   * @module model/UpdateDocxTableCellRequest
   * @version 2.6.0
   */

  /**
   * Constructs a new <code>UpdateDocxTableCellRequest</code>.
   * Input to a Update Table Cell request
   * @alias module:model/UpdateDocxTableCellRequest
   * @class
   */
  var exports = function() {
    var _this = this;







  };

  /**
   * Constructs a <code>UpdateDocxTableCellRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/UpdateDocxTableCellRequest} obj Optional instance to populate.
   * @return {module:model/UpdateDocxTableCellRequest} The populated <code>UpdateDocxTableCellRequest</code> instance.
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
      if (data.hasOwnProperty('CellToUpdate')) {
        obj['CellToUpdate'] = DocxTableCell.constructFromObject(data['CellToUpdate']);
      }
      if (data.hasOwnProperty('TableRowIndex')) {
        obj['TableRowIndex'] = ApiClient.convertToType(data['TableRowIndex'], 'Number');
      }
      if (data.hasOwnProperty('TableCellIndex')) {
        obj['TableCellIndex'] = ApiClient.convertToType(data['TableCellIndex'], 'Number');
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
   * Table cell contents you would like to update the cell with
   * @member {module:model/DocxTableCell} CellToUpdate
   */
  exports.prototype['CellToUpdate'] = undefined;
  /**
   * 0-based index of the Table Row to update
   * @member {Number} TableRowIndex
   */
  exports.prototype['TableRowIndex'] = undefined;
  /**
   * 0-based index of the Table Cell (within the row) to update
   * @member {Number} TableCellIndex
   */
  exports.prototype['TableCellIndex'] = undefined;
  /**
   * Required; the path to the existing table to modify
   * @member {String} ExistingTablePath
   */
  exports.prototype['ExistingTablePath'] = undefined;



  return exports;
}));


