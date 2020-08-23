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
    define(['ApiClient', 'model/Base64DecodeRequest', 'model/Base64DecodeResponse', 'model/Base64DetectRequest', 'model/Base64DetectResponse', 'model/Base64EncodeRequest', 'model/Base64EncodeResponse', 'model/ChangeLineEndingResponse', 'model/DetectLineEndingsResponse', 'model/FindStringRegexRequest', 'model/FindStringRegexResponse', 'model/FindStringSimpleRequest', 'model/FindStringSimpleResponse', 'model/RemoveHtmlFromTextRequest', 'model/RemoveHtmlFromTextResponse', 'model/RemoveWhitespaceFromTextRequest', 'model/RemoveWhitespaceFromTextResponse', 'model/ReplaceStringRegexRequest', 'model/ReplaceStringRegexResponse', 'model/ReplaceStringSimpleRequest', 'model/ReplaceStringSimpleResponse', 'model/TextEncodingDetectResponse'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/Base64DecodeRequest'), require('../model/Base64DecodeResponse'), require('../model/Base64DetectRequest'), require('../model/Base64DetectResponse'), require('../model/Base64EncodeRequest'), require('../model/Base64EncodeResponse'), require('../model/ChangeLineEndingResponse'), require('../model/DetectLineEndingsResponse'), require('../model/FindStringRegexRequest'), require('../model/FindStringRegexResponse'), require('../model/FindStringSimpleRequest'), require('../model/FindStringSimpleResponse'), require('../model/RemoveHtmlFromTextRequest'), require('../model/RemoveHtmlFromTextResponse'), require('../model/RemoveWhitespaceFromTextRequest'), require('../model/RemoveWhitespaceFromTextResponse'), require('../model/ReplaceStringRegexRequest'), require('../model/ReplaceStringRegexResponse'), require('../model/ReplaceStringSimpleRequest'), require('../model/ReplaceStringSimpleResponse'), require('../model/TextEncodingDetectResponse'));
  } else {
    // Browser globals (root is window)
    if (!root.CloudmersiveConvertApiClient) {
      root.CloudmersiveConvertApiClient = {};
    }
    root.CloudmersiveConvertApiClient.EditTextApi = factory(root.CloudmersiveConvertApiClient.ApiClient, root.CloudmersiveConvertApiClient.Base64DecodeRequest, root.CloudmersiveConvertApiClient.Base64DecodeResponse, root.CloudmersiveConvertApiClient.Base64DetectRequest, root.CloudmersiveConvertApiClient.Base64DetectResponse, root.CloudmersiveConvertApiClient.Base64EncodeRequest, root.CloudmersiveConvertApiClient.Base64EncodeResponse, root.CloudmersiveConvertApiClient.ChangeLineEndingResponse, root.CloudmersiveConvertApiClient.DetectLineEndingsResponse, root.CloudmersiveConvertApiClient.FindStringRegexRequest, root.CloudmersiveConvertApiClient.FindStringRegexResponse, root.CloudmersiveConvertApiClient.FindStringSimpleRequest, root.CloudmersiveConvertApiClient.FindStringSimpleResponse, root.CloudmersiveConvertApiClient.RemoveHtmlFromTextRequest, root.CloudmersiveConvertApiClient.RemoveHtmlFromTextResponse, root.CloudmersiveConvertApiClient.RemoveWhitespaceFromTextRequest, root.CloudmersiveConvertApiClient.RemoveWhitespaceFromTextResponse, root.CloudmersiveConvertApiClient.ReplaceStringRegexRequest, root.CloudmersiveConvertApiClient.ReplaceStringRegexResponse, root.CloudmersiveConvertApiClient.ReplaceStringSimpleRequest, root.CloudmersiveConvertApiClient.ReplaceStringSimpleResponse, root.CloudmersiveConvertApiClient.TextEncodingDetectResponse);
  }
}(this, function(ApiClient, Base64DecodeRequest, Base64DecodeResponse, Base64DetectRequest, Base64DetectResponse, Base64EncodeRequest, Base64EncodeResponse, ChangeLineEndingResponse, DetectLineEndingsResponse, FindStringRegexRequest, FindStringRegexResponse, FindStringSimpleRequest, FindStringSimpleResponse, RemoveHtmlFromTextRequest, RemoveHtmlFromTextResponse, RemoveWhitespaceFromTextRequest, RemoveWhitespaceFromTextResponse, ReplaceStringRegexRequest, ReplaceStringRegexResponse, ReplaceStringSimpleRequest, ReplaceStringSimpleResponse, TextEncodingDetectResponse) {
  'use strict';

  /**
   * EditText service.
   * @module api/EditTextApi
   * @version 2.5.5
   */

  /**
   * Constructs a new EditTextApi. 
   * @alias module:api/EditTextApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the editTextBase64Decode operation.
     * @callback module:api/EditTextApi~editTextBase64DecodeCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Base64DecodeResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Base 64 decode, convert base 64 string to binary content
     * Decodes / converts base 64 UTF-8 text string to binary content
     * @param {module:model/Base64DecodeRequest} request Input request
     * @param {module:api/EditTextApi~editTextBase64DecodeCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Base64DecodeResponse}
     */
    this.editTextBase64Decode = function(request, callback) {
      var postBody = request;

      // verify the required parameter 'request' is set
      if (request === undefined || request === null) {
        throw new Error("Missing the required parameter 'request' when calling editTextBase64Decode");
      }


      var pathParams = {
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['Apikey'];
      var contentTypes = ['application/json', 'text/json', 'application/xml', 'text/xml', 'application/x-www-form-urlencoded'];
      var accepts = ['application/json', 'text/json', 'application/xml', 'text/xml'];
      var returnType = Base64DecodeResponse;

      return this.apiClient.callApi(
        '/convert/edit/text/encoding/base64/decode', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the editTextBase64Detect operation.
     * @callback module:api/EditTextApi~editTextBase64DetectCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Base64DetectResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Detect, check if text string is base 64 encoded
     * Checks, detects if input string is base 64 encoded
     * @param {module:model/Base64DetectRequest} request Input request
     * @param {module:api/EditTextApi~editTextBase64DetectCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Base64DetectResponse}
     */
    this.editTextBase64Detect = function(request, callback) {
      var postBody = request;

      // verify the required parameter 'request' is set
      if (request === undefined || request === null) {
        throw new Error("Missing the required parameter 'request' when calling editTextBase64Detect");
      }


      var pathParams = {
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['Apikey'];
      var contentTypes = ['application/json', 'text/json', 'application/xml', 'text/xml', 'application/x-www-form-urlencoded'];
      var accepts = ['application/json', 'text/json', 'application/xml', 'text/xml'];
      var returnType = Base64DetectResponse;

      return this.apiClient.callApi(
        '/convert/edit/text/encoding/base64/detect', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the editTextBase64Encode operation.
     * @callback module:api/EditTextApi~editTextBase64EncodeCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Base64EncodeResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Base 64 encode, convert binary or file data to a text string
     * Encodes / converts binary or file data to a text string
     * @param {module:model/Base64EncodeRequest} request Input request
     * @param {module:api/EditTextApi~editTextBase64EncodeCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Base64EncodeResponse}
     */
    this.editTextBase64Encode = function(request, callback) {
      var postBody = request;

      // verify the required parameter 'request' is set
      if (request === undefined || request === null) {
        throw new Error("Missing the required parameter 'request' when calling editTextBase64Encode");
      }


      var pathParams = {
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['Apikey'];
      var contentTypes = ['application/json', 'text/json', 'application/xml', 'text/xml', 'application/x-www-form-urlencoded'];
      var accepts = ['application/json', 'text/json', 'application/xml', 'text/xml'];
      var returnType = Base64EncodeResponse;

      return this.apiClient.callApi(
        '/convert/edit/text/encoding/base64/encode', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the editTextChangeLineEndings operation.
     * @callback module:api/EditTextApi~editTextChangeLineEndingsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ChangeLineEndingResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Set, change line endings of a text file
     * Sets the line ending type of a text file; set to Windows, Unix or Mac.
     * @param {String} lineEndingType Required; &#39;Windows&#39; will use carriage return and line feed, &#39;Unix&#39; will use newline, and &#39;Mac&#39; will use carriage return
     * @param {File} inputFile Input file to perform the operation on.
     * @param {module:api/EditTextApi~editTextChangeLineEndingsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ChangeLineEndingResponse}
     */
    this.editTextChangeLineEndings = function(lineEndingType, inputFile, callback) {
      var postBody = null;

      // verify the required parameter 'lineEndingType' is set
      if (lineEndingType === undefined || lineEndingType === null) {
        throw new Error("Missing the required parameter 'lineEndingType' when calling editTextChangeLineEndings");
      }

      // verify the required parameter 'inputFile' is set
      if (inputFile === undefined || inputFile === null) {
        throw new Error("Missing the required parameter 'inputFile' when calling editTextChangeLineEndings");
      }


      var pathParams = {
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
        'lineEndingType': lineEndingType
      };
      var formParams = {
        'inputFile': inputFile
      };

      var authNames = ['Apikey'];
      var contentTypes = ['multipart/form-data'];
      var accepts = ['application/json', 'text/json', 'application/xml', 'text/xml'];
      var returnType = ChangeLineEndingResponse;

      return this.apiClient.callApi(
        '/convert/edit/text/line-endings/change', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the editTextDetectLineEndings operation.
     * @callback module:api/EditTextApi~editTextDetectLineEndingsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/DetectLineEndingsResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Detect line endings of a text file
     * Detect line ending type (Windows, Unix or Mac) of an input file.
     * @param {File} inputFile Input file to perform the operation on.
     * @param {module:api/EditTextApi~editTextDetectLineEndingsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/DetectLineEndingsResponse}
     */
    this.editTextDetectLineEndings = function(inputFile, callback) {
      var postBody = null;

      // verify the required parameter 'inputFile' is set
      if (inputFile === undefined || inputFile === null) {
        throw new Error("Missing the required parameter 'inputFile' when calling editTextDetectLineEndings");
      }


      var pathParams = {
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
        'inputFile': inputFile
      };

      var authNames = ['Apikey'];
      var contentTypes = ['multipart/form-data'];
      var accepts = ['application/json', 'text/json', 'application/xml', 'text/xml'];
      var returnType = DetectLineEndingsResponse;

      return this.apiClient.callApi(
        '/convert/edit/text/line-endings/detect', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the editTextFindRegex operation.
     * @callback module:api/EditTextApi~editTextFindRegexCallback
     * @param {String} error Error message, if any.
     * @param {module:model/FindStringRegexResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Find a regular expression regex in text input
     * Find all occurrences of the input regular expression in the input content, and returns the matches
     * @param {module:model/FindStringRegexRequest} request Input request
     * @param {module:api/EditTextApi~editTextFindRegexCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/FindStringRegexResponse}
     */
    this.editTextFindRegex = function(request, callback) {
      var postBody = request;

      // verify the required parameter 'request' is set
      if (request === undefined || request === null) {
        throw new Error("Missing the required parameter 'request' when calling editTextFindRegex");
      }


      var pathParams = {
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['Apikey'];
      var contentTypes = ['application/json', 'text/json', 'application/xml', 'text/xml', 'application/x-www-form-urlencoded'];
      var accepts = ['application/json', 'text/json', 'application/xml', 'text/xml'];
      var returnType = FindStringRegexResponse;

      return this.apiClient.callApi(
        '/convert/edit/text/find/regex', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the editTextFindSimple operation.
     * @callback module:api/EditTextApi~editTextFindSimpleCallback
     * @param {String} error Error message, if any.
     * @param {module:model/FindStringSimpleResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Find a string in text input
     * Finds all occurrences of the input string in the input content, and returns the matches
     * @param {module:model/FindStringSimpleRequest} request Input request
     * @param {module:api/EditTextApi~editTextFindSimpleCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/FindStringSimpleResponse}
     */
    this.editTextFindSimple = function(request, callback) {
      var postBody = request;

      // verify the required parameter 'request' is set
      if (request === undefined || request === null) {
        throw new Error("Missing the required parameter 'request' when calling editTextFindSimple");
      }


      var pathParams = {
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['Apikey'];
      var contentTypes = ['application/json', 'text/json', 'application/xml', 'text/xml', 'application/x-www-form-urlencoded'];
      var accepts = ['application/json', 'text/json', 'application/xml', 'text/xml'];
      var returnType = FindStringSimpleResponse;

      return this.apiClient.callApi(
        '/convert/edit/text/find/string', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the editTextRemoveAllWhitespace operation.
     * @callback module:api/EditTextApi~editTextRemoveAllWhitespaceCallback
     * @param {String} error Error message, if any.
     * @param {module:model/RemoveWhitespaceFromTextResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Remove whitespace from text string
     * Removes all whitespace from text, leaving behind only non-whitespace characters.  Whitespace includes newlines, spaces and other whitespace characters.
     * @param {module:model/RemoveWhitespaceFromTextRequest} request Input request
     * @param {module:api/EditTextApi~editTextRemoveAllWhitespaceCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/RemoveWhitespaceFromTextResponse}
     */
    this.editTextRemoveAllWhitespace = function(request, callback) {
      var postBody = request;

      // verify the required parameter 'request' is set
      if (request === undefined || request === null) {
        throw new Error("Missing the required parameter 'request' when calling editTextRemoveAllWhitespace");
      }


      var pathParams = {
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['Apikey'];
      var contentTypes = ['application/json', 'text/json', 'application/xml', 'text/xml', 'application/x-www-form-urlencoded'];
      var accepts = ['application/json', 'text/json', 'application/xml', 'text/xml'];
      var returnType = RemoveWhitespaceFromTextResponse;

      return this.apiClient.callApi(
        '/convert/edit/text/remove/whitespace/all', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the editTextRemoveHtml operation.
     * @callback module:api/EditTextApi~editTextRemoveHtmlCallback
     * @param {String} error Error message, if any.
     * @param {module:model/RemoveHtmlFromTextResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Remove HTML from text string
     * Removes HTML from text, leaving behind only text.  Formatted text will become plain text.  Important for protecting against HTML and Cross-Site-Scripting attacks.
     * @param {module:model/RemoveHtmlFromTextRequest} request Input request
     * @param {module:api/EditTextApi~editTextRemoveHtmlCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/RemoveHtmlFromTextResponse}
     */
    this.editTextRemoveHtml = function(request, callback) {
      var postBody = request;

      // verify the required parameter 'request' is set
      if (request === undefined || request === null) {
        throw new Error("Missing the required parameter 'request' when calling editTextRemoveHtml");
      }


      var pathParams = {
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['Apikey'];
      var contentTypes = ['application/json', 'text/json', 'application/xml', 'text/xml', 'application/x-www-form-urlencoded'];
      var accepts = ['application/json', 'text/json', 'application/xml', 'text/xml'];
      var returnType = RemoveHtmlFromTextResponse;

      return this.apiClient.callApi(
        '/convert/edit/text/remove/html', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the editTextReplaceRegex operation.
     * @callback module:api/EditTextApi~editTextReplaceRegexCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ReplaceStringRegexResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Replace a string in text with a regex regular expression string
     * Replaces all occurrences of the input regular expression regex string in the input content, and returns the result
     * @param {module:model/ReplaceStringRegexRequest} request Input request
     * @param {module:api/EditTextApi~editTextReplaceRegexCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ReplaceStringRegexResponse}
     */
    this.editTextReplaceRegex = function(request, callback) {
      var postBody = request;

      // verify the required parameter 'request' is set
      if (request === undefined || request === null) {
        throw new Error("Missing the required parameter 'request' when calling editTextReplaceRegex");
      }


      var pathParams = {
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['Apikey'];
      var contentTypes = ['application/json', 'text/json', 'application/xml', 'text/xml', 'application/x-www-form-urlencoded'];
      var accepts = ['application/json', 'text/json', 'application/xml', 'text/xml'];
      var returnType = ReplaceStringRegexResponse;

      return this.apiClient.callApi(
        '/convert/edit/text/replace/regex', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the editTextReplaceSimple operation.
     * @callback module:api/EditTextApi~editTextReplaceSimpleCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ReplaceStringSimpleResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Replace a string in text with another string value
     * Replaces all occurrences of the input string in the input content, and returns the result
     * @param {module:model/ReplaceStringSimpleRequest} request Input request
     * @param {module:api/EditTextApi~editTextReplaceSimpleCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ReplaceStringSimpleResponse}
     */
    this.editTextReplaceSimple = function(request, callback) {
      var postBody = request;

      // verify the required parameter 'request' is set
      if (request === undefined || request === null) {
        throw new Error("Missing the required parameter 'request' when calling editTextReplaceSimple");
      }


      var pathParams = {
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['Apikey'];
      var contentTypes = ['application/json', 'text/json', 'application/xml', 'text/xml', 'application/x-www-form-urlencoded'];
      var accepts = ['application/json', 'text/json', 'application/xml', 'text/xml'];
      var returnType = ReplaceStringSimpleResponse;

      return this.apiClient.callApi(
        '/convert/edit/text/replace/string', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the editTextTextEncodingDetect operation.
     * @callback module:api/EditTextApi~editTextTextEncodingDetectCallback
     * @param {String} error Error message, if any.
     * @param {module:model/TextEncodingDetectResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Detect text encoding of file
     * Checks text encoding of file
     * @param {File} inputFile Input file to perform the operation on.
     * @param {module:api/EditTextApi~editTextTextEncodingDetectCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/TextEncodingDetectResponse}
     */
    this.editTextTextEncodingDetect = function(inputFile, callback) {
      var postBody = null;

      // verify the required parameter 'inputFile' is set
      if (inputFile === undefined || inputFile === null) {
        throw new Error("Missing the required parameter 'inputFile' when calling editTextTextEncodingDetect");
      }


      var pathParams = {
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
        'inputFile': inputFile
      };

      var authNames = ['Apikey'];
      var contentTypes = ['multipart/form-data'];
      var accepts = ['application/json', 'text/json', 'application/xml', 'text/xml'];
      var returnType = TextEncodingDetectResponse;

      return this.apiClient.callApi(
        '/convert/edit/text/encoding/detect', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the editTextTrimWhitespace operation.
     * @callback module:api/EditTextApi~editTextTrimWhitespaceCallback
     * @param {String} error Error message, if any.
     * @param {module:model/RemoveWhitespaceFromTextResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Trim leading and trailing whitespace from text string
     * Trim leading and trailing whitespace from text, leaving behind a trimmed string.  Whitespace includes newlines, spaces and other whitespace characters.
     * @param {module:model/RemoveWhitespaceFromTextRequest} request Input request
     * @param {module:api/EditTextApi~editTextTrimWhitespaceCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/RemoveWhitespaceFromTextResponse}
     */
    this.editTextTrimWhitespace = function(request, callback) {
      var postBody = request;

      // verify the required parameter 'request' is set
      if (request === undefined || request === null) {
        throw new Error("Missing the required parameter 'request' when calling editTextTrimWhitespace");
      }


      var pathParams = {
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['Apikey'];
      var contentTypes = ['application/json', 'text/json', 'application/xml', 'text/xml', 'application/x-www-form-urlencoded'];
      var accepts = ['application/json', 'text/json', 'application/xml', 'text/xml'];
      var returnType = RemoveWhitespaceFromTextResponse;

      return this.apiClient.callApi(
        '/convert/edit/text/remove/whitespace/trim', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
