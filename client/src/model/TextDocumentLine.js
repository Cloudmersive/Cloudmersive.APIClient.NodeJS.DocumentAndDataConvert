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
    root.CloudmersiveConvertApiClient.TextDocumentLine = factory(root.CloudmersiveConvertApiClient.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The TextDocumentLine model module.
   * @module model/TextDocumentLine
   * @version 2.3.7
   */

  /**
   * Constructs a new <code>TextDocumentLine</code>.
   * A single line of a Text document
   * @alias module:model/TextDocumentLine
   * @class
   */
  var exports = function() {
    var _this = this;



  };

  /**
   * Constructs a <code>TextDocumentLine</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/TextDocumentLine} obj Optional instance to populate.
   * @return {module:model/TextDocumentLine} The populated <code>TextDocumentLine</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('LineNumber')) {
        obj['LineNumber'] = ApiClient.convertToType(data['LineNumber'], 'Number');
      }
      if (data.hasOwnProperty('LineContents')) {
        obj['LineContents'] = ApiClient.convertToType(data['LineContents'], 'String');
      }
    }
    return obj;
  }

  /**
   * The 1-based line index of the line
   * @member {Number} LineNumber
   */
  exports.prototype['LineNumber'] = undefined;
  /**
   * The text contents of a single line of a text file
   * @member {String} LineContents
   */
  exports.prototype['LineContents'] = undefined;



  return exports;
}));


