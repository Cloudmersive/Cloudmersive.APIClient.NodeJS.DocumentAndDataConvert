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
    define(['ApiClient', 'model/WorksheetResult'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./WorksheetResult'));
  } else {
    // Browser globals (root is window)
    if (!root.CloudmersiveConvertApiClient) {
      root.CloudmersiveConvertApiClient = {};
    }
    root.CloudmersiveConvertApiClient.SplitXlsxWorksheetResult = factory(root.CloudmersiveConvertApiClient.ApiClient, root.CloudmersiveConvertApiClient.WorksheetResult);
  }
}(this, function(ApiClient, WorksheetResult) {
  'use strict';




  /**
   * The SplitXlsxWorksheetResult model module.
   * @module model/SplitXlsxWorksheetResult
   * @version 2.4.3
   */

  /**
   * Constructs a new <code>SplitXlsxWorksheetResult</code>.
   * The result of splitting a spreadsheet into individual Excel XLSX worksheets
   * @alias module:model/SplitXlsxWorksheetResult
   * @class
   */
  var exports = function() {
    var _this = this;



  };

  /**
   * Constructs a <code>SplitXlsxWorksheetResult</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/SplitXlsxWorksheetResult} obj Optional instance to populate.
   * @return {module:model/SplitXlsxWorksheetResult} The populated <code>SplitXlsxWorksheetResult</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('ResultWorksheets')) {
        obj['ResultWorksheets'] = ApiClient.convertToType(data['ResultWorksheets'], [WorksheetResult]);
      }
      if (data.hasOwnProperty('Successful')) {
        obj['Successful'] = ApiClient.convertToType(data['Successful'], 'Boolean');
      }
    }
    return obj;
  }

  /**
   * @member {Array.<module:model/WorksheetResult>} ResultWorksheets
   */
  exports.prototype['ResultWorksheets'] = undefined;
  /**
   * True if the operation was successful, false otherwise
   * @member {Boolean} Successful
   */
  exports.prototype['Successful'] = undefined;



  return exports;
}));


