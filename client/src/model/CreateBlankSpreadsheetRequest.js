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
    root.CloudmersiveConvertApiClient.CreateBlankSpreadsheetRequest = factory(root.CloudmersiveConvertApiClient.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The CreateBlankSpreadsheetRequest model module.
   * @module model/CreateBlankSpreadsheetRequest
   * @version 2.6.1
   */

  /**
   * Constructs a new <code>CreateBlankSpreadsheetRequest</code>.
   * Input to a Create Blank Spreadsheet request
   * @alias module:model/CreateBlankSpreadsheetRequest
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>CreateBlankSpreadsheetRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CreateBlankSpreadsheetRequest} obj Optional instance to populate.
   * @return {module:model/CreateBlankSpreadsheetRequest} The populated <code>CreateBlankSpreadsheetRequest</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('WorksheetName')) {
        obj['WorksheetName'] = ApiClient.convertToType(data['WorksheetName'], 'String');
      }
    }
    return obj;
  }

  /**
   * The blank Spreadsheet will have a default Worksheet in it; supply a name, or if left empty, will default to Worksheet1
   * @member {String} WorksheetName
   */
  exports.prototype['WorksheetName'] = undefined;



  return exports;
}));


