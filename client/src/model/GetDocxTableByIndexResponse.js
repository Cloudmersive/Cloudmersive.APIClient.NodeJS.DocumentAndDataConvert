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
    define(['ApiClient', 'model/DocxTable'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./DocxTable'));
  } else {
    // Browser globals (root is window)
    if (!root.CloudmersiveConvertApiClient) {
      root.CloudmersiveConvertApiClient = {};
    }
    root.CloudmersiveConvertApiClient.GetDocxTableByIndexResponse = factory(root.CloudmersiveConvertApiClient.ApiClient, root.CloudmersiveConvertApiClient.DocxTable);
  }
}(this, function(ApiClient, DocxTable) {
  'use strict';




  /**
   * The GetDocxTableByIndexResponse model module.
   * @module model/GetDocxTableByIndexResponse
   * @version 2.6.7
   */

  /**
   * Constructs a new <code>GetDocxTableByIndexResponse</code>.
   * Result of running a Get-Tables by Index command
   * @alias module:model/GetDocxTableByIndexResponse
   * @class
   */
  var exports = function() {
    var _this = this;



  };

  /**
   * Constructs a <code>GetDocxTableByIndexResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GetDocxTableByIndexResponse} obj Optional instance to populate.
   * @return {module:model/GetDocxTableByIndexResponse} The populated <code>GetDocxTableByIndexResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('Successful')) {
        obj['Successful'] = ApiClient.convertToType(data['Successful'], 'Boolean');
      }
      if (data.hasOwnProperty('Table')) {
        obj['Table'] = DocxTable.constructFromObject(data['Table']);
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
   * Requested Table in the DOCX file
   * @member {module:model/DocxTable} Table
   */
  exports.prototype['Table'] = undefined;



  return exports;
}));


