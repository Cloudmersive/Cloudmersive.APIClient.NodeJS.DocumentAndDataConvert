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
    define(['ApiClient', 'model/DocxFooter', 'model/DocxHeader'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./DocxFooter'), require('./DocxHeader'));
  } else {
    // Browser globals (root is window)
    if (!root.CloudmersiveConvertApiClient) {
      root.CloudmersiveConvertApiClient = {};
    }
    root.CloudmersiveConvertApiClient.GetDocxHeadersAndFootersResponse = factory(root.CloudmersiveConvertApiClient.ApiClient, root.CloudmersiveConvertApiClient.DocxFooter, root.CloudmersiveConvertApiClient.DocxHeader);
  }
}(this, function(ApiClient, DocxFooter, DocxHeader) {
  'use strict';




  /**
   * The GetDocxHeadersAndFootersResponse model module.
   * @module model/GetDocxHeadersAndFootersResponse
   * @version 2.4.1
   */

  /**
   * Constructs a new <code>GetDocxHeadersAndFootersResponse</code>.
   * Result of running a Get-Tables command
   * @alias module:model/GetDocxHeadersAndFootersResponse
   * @class
   */
  var exports = function() {
    var _this = this;




  };

  /**
   * Constructs a <code>GetDocxHeadersAndFootersResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GetDocxHeadersAndFootersResponse} obj Optional instance to populate.
   * @return {module:model/GetDocxHeadersAndFootersResponse} The populated <code>GetDocxHeadersAndFootersResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('Successful')) {
        obj['Successful'] = ApiClient.convertToType(data['Successful'], 'Boolean');
      }
      if (data.hasOwnProperty('Headers')) {
        obj['Headers'] = ApiClient.convertToType(data['Headers'], [DocxHeader]);
      }
      if (data.hasOwnProperty('Footers')) {
        obj['Footers'] = ApiClient.convertToType(data['Footers'], [DocxFooter]);
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
   * @member {Array.<module:model/DocxHeader>} Headers
   */
  exports.prototype['Headers'] = undefined;
  /**
   * @member {Array.<module:model/DocxFooter>} Footers
   */
  exports.prototype['Footers'] = undefined;



  return exports;
}));


