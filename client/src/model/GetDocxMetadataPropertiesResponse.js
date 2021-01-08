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
    define(['ApiClient', 'model/DocxMetadataCustomProperty'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./DocxMetadataCustomProperty'));
  } else {
    // Browser globals (root is window)
    if (!root.CloudmersiveConvertApiClient) {
      root.CloudmersiveConvertApiClient = {};
    }
    root.CloudmersiveConvertApiClient.GetDocxMetadataPropertiesResponse = factory(root.CloudmersiveConvertApiClient.ApiClient, root.CloudmersiveConvertApiClient.DocxMetadataCustomProperty);
  }
}(this, function(ApiClient, DocxMetadataCustomProperty) {
  'use strict';




  /**
   * The GetDocxMetadataPropertiesResponse model module.
   * @module model/GetDocxMetadataPropertiesResponse
   * @version 2.6.1
   */

  /**
   * Constructs a new <code>GetDocxMetadataPropertiesResponse</code>.
   * Result of running a DocxGetMetadataProperties command
   * @alias module:model/GetDocxMetadataPropertiesResponse
   * @class
   */
  var exports = function() {
    var _this = this;










  };

  /**
   * Constructs a <code>GetDocxMetadataPropertiesResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GetDocxMetadataPropertiesResponse} obj Optional instance to populate.
   * @return {module:model/GetDocxMetadataPropertiesResponse} The populated <code>GetDocxMetadataPropertiesResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('Company')) {
        obj['Company'] = ApiClient.convertToType(data['Company'], 'String');
      }
      if (data.hasOwnProperty('Manager')) {
        obj['Manager'] = ApiClient.convertToType(data['Manager'], 'String');
      }
      if (data.hasOwnProperty('ApplicationVersion')) {
        obj['ApplicationVersion'] = ApiClient.convertToType(data['ApplicationVersion'], 'String');
      }
      if (data.hasOwnProperty('WordCount')) {
        obj['WordCount'] = ApiClient.convertToType(data['WordCount'], 'Number');
      }
      if (data.hasOwnProperty('LineCount')) {
        obj['LineCount'] = ApiClient.convertToType(data['LineCount'], 'Number');
      }
      if (data.hasOwnProperty('ParagraphCount')) {
        obj['ParagraphCount'] = ApiClient.convertToType(data['ParagraphCount'], 'Number');
      }
      if (data.hasOwnProperty('PageCount')) {
        obj['PageCount'] = ApiClient.convertToType(data['PageCount'], 'Number');
      }
      if (data.hasOwnProperty('CustomProperties')) {
        obj['CustomProperties'] = ApiClient.convertToType(data['CustomProperties'], [DocxMetadataCustomProperty]);
      }
      if (data.hasOwnProperty('Successful')) {
        obj['Successful'] = ApiClient.convertToType(data['Successful'], 'Boolean');
      }
    }
    return obj;
  }

  /**
   * Name of the Company that authored the document, if available
   * @member {String} Company
   */
  exports.prototype['Company'] = undefined;
  /**
   * Name of the Manager that authored the document, if available
   * @member {String} Manager
   */
  exports.prototype['Manager'] = undefined;
  /**
   * Application version that authored the document, if available
   * @member {String} ApplicationVersion
   */
  exports.prototype['ApplicationVersion'] = undefined;
  /**
   * Word count of the document
   * @member {Number} WordCount
   */
  exports.prototype['WordCount'] = undefined;
  /**
   * Line count of the document
   * @member {Number} LineCount
   */
  exports.prototype['LineCount'] = undefined;
  /**
   * Paragraph count of the document
   * @member {Number} ParagraphCount
   */
  exports.prototype['ParagraphCount'] = undefined;
  /**
   * Page count of the document
   * @member {Number} PageCount
   */
  exports.prototype['PageCount'] = undefined;
  /**
   * Custom properties applied to the document
   * @member {Array.<module:model/DocxMetadataCustomProperty>} CustomProperties
   */
  exports.prototype['CustomProperties'] = undefined;
  /**
   * True if successful, false otherwise
   * @member {Boolean} Successful
   */
  exports.prototype['Successful'] = undefined;



  return exports;
}));


