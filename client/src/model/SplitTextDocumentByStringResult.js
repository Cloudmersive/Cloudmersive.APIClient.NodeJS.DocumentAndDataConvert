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
    define(['ApiClient', 'model/TextDocumentElement'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./TextDocumentElement'));
  } else {
    // Browser globals (root is window)
    if (!root.CloudmersiveConvertApiClient) {
      root.CloudmersiveConvertApiClient = {};
    }
    root.CloudmersiveConvertApiClient.SplitTextDocumentByStringResult = factory(root.CloudmersiveConvertApiClient.ApiClient, root.CloudmersiveConvertApiClient.TextDocumentElement);
  }
}(this, function(ApiClient, TextDocumentElement) {
  'use strict';




  /**
   * The SplitTextDocumentByStringResult model module.
   * @module model/SplitTextDocumentByStringResult
   * @version 2.4.5
   */

  /**
   * Constructs a new <code>SplitTextDocumentByStringResult</code>.
   * The result of splitting a Text document into separate elements
   * @alias module:model/SplitTextDocumentByStringResult
   * @class
   */
  var exports = function() {
    var _this = this;




  };

  /**
   * Constructs a <code>SplitTextDocumentByStringResult</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/SplitTextDocumentByStringResult} obj Optional instance to populate.
   * @return {module:model/SplitTextDocumentByStringResult} The populated <code>SplitTextDocumentByStringResult</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('ResultElements')) {
        obj['ResultElements'] = ApiClient.convertToType(data['ResultElements'], [TextDocumentElement]);
      }
      if (data.hasOwnProperty('Successful')) {
        obj['Successful'] = ApiClient.convertToType(data['Successful'], 'Boolean');
      }
      if (data.hasOwnProperty('ElementCount')) {
        obj['ElementCount'] = ApiClient.convertToType(data['ElementCount'], 'Number');
      }
    }
    return obj;
  }

  /**
   * @member {Array.<module:model/TextDocumentElement>} ResultElements
   */
  exports.prototype['ResultElements'] = undefined;
  /**
   * True if the operation was successful, false otherwise
   * @member {Boolean} Successful
   */
  exports.prototype['Successful'] = undefined;
  /**
   * The count of elements in the text file
   * @member {Number} ElementCount
   */
  exports.prototype['ElementCount'] = undefined;



  return exports;
}));


