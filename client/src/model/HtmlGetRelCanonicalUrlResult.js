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
    root.CloudmersiveConvertApiClient.HtmlGetRelCanonicalUrlResult = factory(root.CloudmersiveConvertApiClient.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The HtmlGetRelCanonicalUrlResult model module.
   * @module model/HtmlGetRelCanonicalUrlResult
   * @version 2.6.6
   */

  /**
   * Constructs a new <code>HtmlGetRelCanonicalUrlResult</code>.
   * Result of getting the canonical URL of the input HTML document
   * @alias module:model/HtmlGetRelCanonicalUrlResult
   * @class
   */
  var exports = function() {
    var _this = this;



  };

  /**
   * Constructs a <code>HtmlGetRelCanonicalUrlResult</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/HtmlGetRelCanonicalUrlResult} obj Optional instance to populate.
   * @return {module:model/HtmlGetRelCanonicalUrlResult} The populated <code>HtmlGetRelCanonicalUrlResult</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('Successful')) {
        obj['Successful'] = ApiClient.convertToType(data['Successful'], 'Boolean');
      }
      if (data.hasOwnProperty('CanonicalUrl')) {
        obj['CanonicalUrl'] = ApiClient.convertToType(data['CanonicalUrl'], 'String');
      }
    }
    return obj;
  }

  /**
   * True if the operation was successful, false otherwise
   * @member {Boolean} Successful
   */
  exports.prototype['Successful'] = undefined;
  /**
   * HTML canonical URL if present
   * @member {String} CanonicalUrl
   */
  exports.prototype['CanonicalUrl'] = undefined;



  return exports;
}));


