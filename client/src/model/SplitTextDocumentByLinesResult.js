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
    define(['ApiClient', 'model/TextDocumentLine'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./TextDocumentLine'));
  } else {
    // Browser globals (root is window)
    if (!root.CloudmersiveConvertApiClient) {
      root.CloudmersiveConvertApiClient = {};
    }
    root.CloudmersiveConvertApiClient.SplitTextDocumentByLinesResult = factory(root.CloudmersiveConvertApiClient.ApiClient, root.CloudmersiveConvertApiClient.TextDocumentLine);
  }
}(this, function(ApiClient, TextDocumentLine) {
  'use strict';




  /**
   * The SplitTextDocumentByLinesResult model module.
   * @module model/SplitTextDocumentByLinesResult
   * @version 2.5.7
   */

  /**
   * Constructs a new <code>SplitTextDocumentByLinesResult</code>.
   * The result of splitting a Text document into separate lines
   * @alias module:model/SplitTextDocumentByLinesResult
   * @class
   */
  var exports = function() {
    var _this = this;




  };

  /**
   * Constructs a <code>SplitTextDocumentByLinesResult</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/SplitTextDocumentByLinesResult} obj Optional instance to populate.
   * @return {module:model/SplitTextDocumentByLinesResult} The populated <code>SplitTextDocumentByLinesResult</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('ResultLines')) {
        obj['ResultLines'] = ApiClient.convertToType(data['ResultLines'], [TextDocumentLine]);
      }
      if (data.hasOwnProperty('Successful')) {
        obj['Successful'] = ApiClient.convertToType(data['Successful'], 'Boolean');
      }
      if (data.hasOwnProperty('LineCount')) {
        obj['LineCount'] = ApiClient.convertToType(data['LineCount'], 'Number');
      }
    }
    return obj;
  }

  /**
   * @member {Array.<module:model/TextDocumentLine>} ResultLines
   */
  exports.prototype['ResultLines'] = undefined;
  /**
   * True if the operation was successful, false otherwise
   * @member {Boolean} Successful
   */
  exports.prototype['Successful'] = undefined;
  /**
   * The count of lines in the text file
   * @member {Number} LineCount
   */
  exports.prototype['LineCount'] = undefined;



  return exports;
}));


