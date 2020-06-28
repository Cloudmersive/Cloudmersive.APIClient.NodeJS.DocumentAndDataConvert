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
    root.CloudmersiveConvertApiClient.TextDocumentElement = factory(root.CloudmersiveConvertApiClient.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The TextDocumentElement model module.
   * @module model/TextDocumentElement
   * @version 2.5.1
   */

  /**
   * Constructs a new <code>TextDocumentElement</code>.
   * A single element of a Text document
   * @alias module:model/TextDocumentElement
   * @class
   */
  var exports = function() {
    var _this = this;



  };

  /**
   * Constructs a <code>TextDocumentElement</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/TextDocumentElement} obj Optional instance to populate.
   * @return {module:model/TextDocumentElement} The populated <code>TextDocumentElement</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('ElementNumber')) {
        obj['ElementNumber'] = ApiClient.convertToType(data['ElementNumber'], 'Number');
      }
      if (data.hasOwnProperty('ElementContents')) {
        obj['ElementContents'] = ApiClient.convertToType(data['ElementContents'], 'String');
      }
    }
    return obj;
  }

  /**
   * The 1-based line index of the element
   * @member {Number} ElementNumber
   */
  exports.prototype['ElementNumber'] = undefined;
  /**
   * The text contents of a single element of a text file
   * @member {String} ElementContents
   */
  exports.prototype['ElementContents'] = undefined;



  return exports;
}));


