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
    root.CloudmersiveConvertApiClient.DocxTableRow = factory(root.CloudmersiveConvertApiClient.ApiClient, root.CloudmersiveConvertApiClient.DocxTableCell);
  }
}(this, function(ApiClient, DocxTableCell) {
  'use strict';




  /**
   * The DocxTableRow model module.
   * @module model/DocxTableRow
   * @version 2.2.6
   */

  /**
   * Constructs a new <code>DocxTableRow</code>.
   * A row in a Word Document (DOCX) file
   * @alias module:model/DocxTableRow
   * @class
   */
  var exports = function() {
    var _this = this;




  };

  /**
   * Constructs a <code>DocxTableRow</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/DocxTableRow} obj Optional instance to populate.
   * @return {module:model/DocxTableRow} The populated <code>DocxTableRow</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('RowIndex')) {
        obj['RowIndex'] = ApiClient.convertToType(data['RowIndex'], 'Number');
      }
      if (data.hasOwnProperty('Path')) {
        obj['Path'] = ApiClient.convertToType(data['Path'], 'String');
      }
      if (data.hasOwnProperty('RowCells')) {
        obj['RowCells'] = ApiClient.convertToType(data['RowCells'], [DocxTableCell]);
      }
    }
    return obj;
  }

  /**
   * Index of the row, 0-based
   * @member {Number} RowIndex
   */
  exports.prototype['RowIndex'] = undefined;
  /**
   * The Path of the location of this object; leave blank for new tables
   * @member {String} Path
   */
  exports.prototype['Path'] = undefined;
  /**
   * Cells in the row; this is where the contents of the row is stored
   * @member {Array.<module:model/DocxTableCell>} RowCells
   */
  exports.prototype['RowCells'] = undefined;



  return exports;
}));


