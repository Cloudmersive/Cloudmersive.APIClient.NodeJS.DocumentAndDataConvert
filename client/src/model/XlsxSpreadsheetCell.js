/**
 * convertapi
 * Convert API lets you effortlessly convert file formats and types.
 *
 * OpenAPI spec version: v1
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: unset
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
    root.CloudmersiveConvertApiClient.XlsxSpreadsheetCell = factory(root.CloudmersiveConvertApiClient.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The XlsxSpreadsheetCell model module.
   * @module model/XlsxSpreadsheetCell
   * @version 2.0.9
   */

  /**
   * Constructs a new <code>XlsxSpreadsheetCell</code>.
   * Cell in an Excel Spreadsheet worksheet
   * @alias module:model/XlsxSpreadsheetCell
   * @class
   */
  var exports = function() {
    var _this = this;






  };

  /**
   * Constructs a <code>XlsxSpreadsheetCell</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/XlsxSpreadsheetCell} obj Optional instance to populate.
   * @return {module:model/XlsxSpreadsheetCell} The populated <code>XlsxSpreadsheetCell</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('Path')) {
        obj['Path'] = ApiClient.convertToType(data['Path'], 'String');
      }
      if (data.hasOwnProperty('TextValue')) {
        obj['TextValue'] = ApiClient.convertToType(data['TextValue'], 'String');
      }
      if (data.hasOwnProperty('CellIdentifier')) {
        obj['CellIdentifier'] = ApiClient.convertToType(data['CellIdentifier'], 'String');
      }
      if (data.hasOwnProperty('StyleIndex')) {
        obj['StyleIndex'] = ApiClient.convertToType(data['StyleIndex'], 'Number');
      }
      if (data.hasOwnProperty('Formula')) {
        obj['Formula'] = ApiClient.convertToType(data['Formula'], 'String');
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
   * Text value of the cell
   * @member {String} TextValue
   */
  exports.prototype['TextValue'] = undefined;
  /**
   * Cell reference of the cell, e.g. A1, Z22, etc.
   * @member {String} CellIdentifier
   */
  exports.prototype['CellIdentifier'] = undefined;
  /**
   * Identifier for the style to apply to this style
   * @member {Number} StyleIndex
   */
  exports.prototype['StyleIndex'] = undefined;
  /**
   * @member {String} Formula
   */
  exports.prototype['Formula'] = undefined;



  return exports;
}));


