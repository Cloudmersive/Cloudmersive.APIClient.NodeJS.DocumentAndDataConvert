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
    root.CloudmersiveConvertApiClient.DocxCellStyle = factory(root.CloudmersiveConvertApiClient.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The DocxCellStyle model module.
   * @module model/DocxCellStyle
   * @version 1.2.4
   */

  /**
   * Constructs a new <code>DocxCellStyle</code>.
   * Style in an Excel spreadsheet
   * @alias module:model/DocxCellStyle
   * @class
   */
  var exports = function() {
    var _this = this;





  };

  /**
   * Constructs a <code>DocxCellStyle</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/DocxCellStyle} obj Optional instance to populate.
   * @return {module:model/DocxCellStyle} The populated <code>DocxCellStyle</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('Path')) {
        obj['Path'] = ApiClient.convertToType(data['Path'], 'String');
      }
      if (data.hasOwnProperty('Name')) {
        obj['Name'] = ApiClient.convertToType(data['Name'], 'String');
      }
      if (data.hasOwnProperty('FormatID')) {
        obj['FormatID'] = ApiClient.convertToType(data['FormatID'], 'Number');
      }
      if (data.hasOwnProperty('BuiltInID')) {
        obj['BuiltInID'] = ApiClient.convertToType(data['BuiltInID'], 'Number');
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
   * Name of the style
   * @member {String} Name
   */
  exports.prototype['Name'] = undefined;
  /**
   * Format ID of the cell style
   * @member {Number} FormatID
   */
  exports.prototype['FormatID'] = undefined;
  /**
   * Built=in ID of the cell style
   * @member {Number} BuiltInID
   */
  exports.prototype['BuiltInID'] = undefined;



  return exports;
}));

