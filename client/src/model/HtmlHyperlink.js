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
    root.CloudmersiveConvertApiClient.HtmlHyperlink = factory(root.CloudmersiveConvertApiClient.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The HtmlHyperlink model module.
   * @module model/HtmlHyperlink
   * @version 2.6.7
   */

  /**
   * Constructs a new <code>HtmlHyperlink</code>.
   * Individual hyperlink in an HTML File
   * @alias module:model/HtmlHyperlink
   * @class
   */
  var exports = function() {
    var _this = this;



  };

  /**
   * Constructs a <code>HtmlHyperlink</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/HtmlHyperlink} obj Optional instance to populate.
   * @return {module:model/HtmlHyperlink} The populated <code>HtmlHyperlink</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('Anchortext')) {
        obj['Anchortext'] = ApiClient.convertToType(data['Anchortext'], 'String');
      }
      if (data.hasOwnProperty('Url')) {
        obj['Url'] = ApiClient.convertToType(data['Url'], 'String');
      }
    }
    return obj;
  }

  /**
   * Anchor text of the hyperlink, e.g. Click Here
   * @member {String} Anchortext
   */
  exports.prototype['Anchortext'] = undefined;
  /**
   * URL of the hyperlink; fully-qualified if possible, otherwise relative
   * @member {String} Url
   */
  exports.prototype['Url'] = undefined;



  return exports;
}));


