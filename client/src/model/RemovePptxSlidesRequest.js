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
    root.CloudmersiveConvertApiClient.RemovePptxSlidesRequest = factory(root.CloudmersiveConvertApiClient.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The RemovePptxSlidesRequest model module.
   * @module model/RemovePptxSlidesRequest
   * @version 2.6.1
   */

  /**
   * Constructs a new <code>RemovePptxSlidesRequest</code>.
   * Input to a Remove PowerPoint PPTX Presentation Slides request
   * @alias module:model/RemovePptxSlidesRequest
   * @class
   */
  var exports = function() {
    var _this = this;





  };

  /**
   * Constructs a <code>RemovePptxSlidesRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/RemovePptxSlidesRequest} obj Optional instance to populate.
   * @return {module:model/RemovePptxSlidesRequest} The populated <code>RemovePptxSlidesRequest</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('InputFileBytes')) {
        obj['InputFileBytes'] = ApiClient.convertToType(data['InputFileBytes'], 'Blob');
      }
      if (data.hasOwnProperty('InputFileUrl')) {
        obj['InputFileUrl'] = ApiClient.convertToType(data['InputFileUrl'], 'String');
      }
      if (data.hasOwnProperty('StartDeleteSlideNumber')) {
        obj['StartDeleteSlideNumber'] = ApiClient.convertToType(data['StartDeleteSlideNumber'], 'Number');
      }
      if (data.hasOwnProperty('EndDeleteSlideNumber')) {
        obj['EndDeleteSlideNumber'] = ApiClient.convertToType(data['EndDeleteSlideNumber'], 'Number');
      }
    }
    return obj;
  }

  /**
   * Optional: Bytes of the input file to operate on
   * @member {Blob} InputFileBytes
   */
  exports.prototype['InputFileBytes'] = undefined;
  /**
   * Optional: URL of a file to operate on as input.  This can be a public URL, or you can also use the begin-editing API to upload a document and pass in the secure URL result from that operation as the URL here (this URL is not public).
   * @member {String} InputFileUrl
   */
  exports.prototype['InputFileUrl'] = undefined;
  /**
   * Slide number (1-based) to start deleting slides; inclusive
   * @member {Number} StartDeleteSlideNumber
   */
  exports.prototype['StartDeleteSlideNumber'] = undefined;
  /**
   * Slide number (1-based) to stop deleting slides; inclusive
   * @member {Number} EndDeleteSlideNumber
   */
  exports.prototype['EndDeleteSlideNumber'] = undefined;



  return exports;
}));


