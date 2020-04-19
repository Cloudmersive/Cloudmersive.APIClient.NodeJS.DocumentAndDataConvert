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
    root.CloudmersiveConvertApiClient.MergeDocumentApi = factory(root.CloudmersiveConvertApiClient.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * MergeDocument service.
   * @module api/MergeDocumentApi
   * @version 2.4.4
   */

  /**
   * Constructs a new MergeDocumentApi. 
   * @alias module:api/MergeDocumentApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the mergeDocumentDocx operation.
     * @callback module:api/MergeDocumentApi~mergeDocumentDocxCallback
     * @param {String} error Error message, if any.
     * @param {'Blob'} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Merge Two Word DOCX Together
     * Combine two Office Word Documents (docx) into one single Office Word document
     * @param {File} inputFile1 First input file to perform the operation on.
     * @param {File} inputFile2 Second input file to perform the operation on (more than 2 can be supplied).
     * @param {module:api/MergeDocumentApi~mergeDocumentDocxCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link 'Blob'}
     */
    this.mergeDocumentDocx = function(inputFile1, inputFile2, callback) {
      var postBody = null;

      // verify the required parameter 'inputFile1' is set
      if (inputFile1 === undefined || inputFile1 === null) {
        throw new Error("Missing the required parameter 'inputFile1' when calling mergeDocumentDocx");
      }

      // verify the required parameter 'inputFile2' is set
      if (inputFile2 === undefined || inputFile2 === null) {
        throw new Error("Missing the required parameter 'inputFile2' when calling mergeDocumentDocx");
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
        'inputFile1': inputFile1,
        'inputFile2': inputFile2
      };

      var authNames = ['Apikey'];
      var contentTypes = ['multipart/form-data'];
      var accepts = ['application/octet-stream'];
      var returnType = 'Blob';

      return this.apiClient.callApi(
        '/convert/merge/docx', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the mergeDocumentDocxMulti operation.
     * @callback module:api/MergeDocumentApi~mergeDocumentDocxMultiCallback
     * @param {String} error Error message, if any.
     * @param {'Blob'} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Merge Multple Word DOCX Together
     * Combine multiple Office Word Documents (docx) into one single Office Word document
     * @param {File} inputFile1 First input file to perform the operation on.
     * @param {File} inputFile2 Second input file to perform the operation on.
     * @param {Object} opts Optional parameters
     * @param {File} opts.inputFile3 Third input file to perform the operation on.
     * @param {File} opts.inputFile4 Fourth input file to perform the operation on.
     * @param {File} opts.inputFile5 Fifth input file to perform the operation on.
     * @param {File} opts.inputFile6 Sixth input file to perform the operation on.
     * @param {File} opts.inputFile7 Seventh input file to perform the operation on.
     * @param {File} opts.inputFile8 Eighth input file to perform the operation on.
     * @param {File} opts.inputFile9 Ninth input file to perform the operation on.
     * @param {File} opts.inputFile10 Tenth input file to perform the operation on.
     * @param {module:api/MergeDocumentApi~mergeDocumentDocxMultiCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link 'Blob'}
     */
    this.mergeDocumentDocxMulti = function(inputFile1, inputFile2, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'inputFile1' is set
      if (inputFile1 === undefined || inputFile1 === null) {
        throw new Error("Missing the required parameter 'inputFile1' when calling mergeDocumentDocxMulti");
      }

      // verify the required parameter 'inputFile2' is set
      if (inputFile2 === undefined || inputFile2 === null) {
        throw new Error("Missing the required parameter 'inputFile2' when calling mergeDocumentDocxMulti");
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
        'inputFile1': inputFile1,
        'inputFile2': inputFile2,
        'inputFile3': opts['inputFile3'],
        'inputFile4': opts['inputFile4'],
        'inputFile5': opts['inputFile5'],
        'inputFile6': opts['inputFile6'],
        'inputFile7': opts['inputFile7'],
        'inputFile8': opts['inputFile8'],
        'inputFile9': opts['inputFile9'],
        'inputFile10': opts['inputFile10']
      };

      var authNames = ['Apikey'];
      var contentTypes = ['multipart/form-data'];
      var accepts = ['application/octet-stream'];
      var returnType = 'Blob';

      return this.apiClient.callApi(
        '/convert/merge/docx/multi', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the mergeDocumentPdf operation.
     * @callback module:api/MergeDocumentApi~mergeDocumentPdfCallback
     * @param {String} error Error message, if any.
     * @param {'Blob'} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Merge Two PDF Files Together
     * Combine two PDF files (pdf) into a single PDF document, preserving the order of the input documents in the combined document
     * @param {File} inputFile1 First input file to perform the operation on.
     * @param {File} inputFile2 Second input file to perform the operation on (more than 2 can be supplied).
     * @param {module:api/MergeDocumentApi~mergeDocumentPdfCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link 'Blob'}
     */
    this.mergeDocumentPdf = function(inputFile1, inputFile2, callback) {
      var postBody = null;

      // verify the required parameter 'inputFile1' is set
      if (inputFile1 === undefined || inputFile1 === null) {
        throw new Error("Missing the required parameter 'inputFile1' when calling mergeDocumentPdf");
      }

      // verify the required parameter 'inputFile2' is set
      if (inputFile2 === undefined || inputFile2 === null) {
        throw new Error("Missing the required parameter 'inputFile2' when calling mergeDocumentPdf");
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
        'inputFile1': inputFile1,
        'inputFile2': inputFile2
      };

      var authNames = ['Apikey'];
      var contentTypes = ['multipart/form-data'];
      var accepts = ['application/octet-stream'];
      var returnType = 'Blob';

      return this.apiClient.callApi(
        '/convert/merge/pdf', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the mergeDocumentPdfMulti operation.
     * @callback module:api/MergeDocumentApi~mergeDocumentPdfMultiCallback
     * @param {String} error Error message, if any.
     * @param {'Blob'} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Merge Multple PDF Files Together
     * Combine multiple PDF files (pdf) into a single PDF document, preserving the order of the input documents in the combined document
     * @param {File} inputFile1 First input file to perform the operation on.
     * @param {File} inputFile2 Second input file to perform the operation on.
     * @param {Object} opts Optional parameters
     * @param {File} opts.inputFile3 Third input file to perform the operation on.
     * @param {File} opts.inputFile4 Fourth input file to perform the operation on.
     * @param {File} opts.inputFile5 Fifth input file to perform the operation on.
     * @param {File} opts.inputFile6 Sixth input file to perform the operation on.
     * @param {File} opts.inputFile7 Seventh input file to perform the operation on.
     * @param {File} opts.inputFile8 Eighth input file to perform the operation on.
     * @param {File} opts.inputFile9 Ninth input file to perform the operation on.
     * @param {File} opts.inputFile10 Tenth input file to perform the operation on.
     * @param {module:api/MergeDocumentApi~mergeDocumentPdfMultiCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link 'Blob'}
     */
    this.mergeDocumentPdfMulti = function(inputFile1, inputFile2, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'inputFile1' is set
      if (inputFile1 === undefined || inputFile1 === null) {
        throw new Error("Missing the required parameter 'inputFile1' when calling mergeDocumentPdfMulti");
      }

      // verify the required parameter 'inputFile2' is set
      if (inputFile2 === undefined || inputFile2 === null) {
        throw new Error("Missing the required parameter 'inputFile2' when calling mergeDocumentPdfMulti");
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
        'inputFile1': inputFile1,
        'inputFile2': inputFile2,
        'inputFile3': opts['inputFile3'],
        'inputFile4': opts['inputFile4'],
        'inputFile5': opts['inputFile5'],
        'inputFile6': opts['inputFile6'],
        'inputFile7': opts['inputFile7'],
        'inputFile8': opts['inputFile8'],
        'inputFile9': opts['inputFile9'],
        'inputFile10': opts['inputFile10']
      };

      var authNames = ['Apikey'];
      var contentTypes = ['multipart/form-data'];
      var accepts = ['application/octet-stream'];
      var returnType = 'Blob';

      return this.apiClient.callApi(
        '/convert/merge/pdf/multi', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the mergeDocumentPng operation.
     * @callback module:api/MergeDocumentApi~mergeDocumentPngCallback
     * @param {String} error Error message, if any.
     * @param {'Blob'} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Merge Two PNG Files Together
     * Combine two PNG files into a single PNG document, preserving the order of the input documents in the combined document by stacking them vertically
     * @param {File} inputFile1 First input file to perform the operation on.
     * @param {File} inputFile2 Second input file to perform the operation on (more than 2 can be supplied).
     * @param {module:api/MergeDocumentApi~mergeDocumentPngCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link 'Blob'}
     */
    this.mergeDocumentPng = function(inputFile1, inputFile2, callback) {
      var postBody = null;

      // verify the required parameter 'inputFile1' is set
      if (inputFile1 === undefined || inputFile1 === null) {
        throw new Error("Missing the required parameter 'inputFile1' when calling mergeDocumentPng");
      }

      // verify the required parameter 'inputFile2' is set
      if (inputFile2 === undefined || inputFile2 === null) {
        throw new Error("Missing the required parameter 'inputFile2' when calling mergeDocumentPng");
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
        'inputFile1': inputFile1,
        'inputFile2': inputFile2
      };

      var authNames = ['Apikey'];
      var contentTypes = ['multipart/form-data'];
      var accepts = ['application/octet-stream'];
      var returnType = 'Blob';

      return this.apiClient.callApi(
        '/convert/merge/png/vertical', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the mergeDocumentPngMulti operation.
     * @callback module:api/MergeDocumentApi~mergeDocumentPngMultiCallback
     * @param {String} error Error message, if any.
     * @param {'Blob'} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Merge Multple PNG Files Together
     * Combine multiple PNG files into a single PNG document, preserving the order of the input documents in the combined document by stacking them vertically
     * @param {File} inputFile1 First input file to perform the operation on.
     * @param {File} inputFile2 Second input file to perform the operation on.
     * @param {Object} opts Optional parameters
     * @param {File} opts.inputFile3 Third input file to perform the operation on.
     * @param {File} opts.inputFile4 Fourth input file to perform the operation on.
     * @param {File} opts.inputFile5 Fifth input file to perform the operation on.
     * @param {File} opts.inputFile6 Sixth input file to perform the operation on.
     * @param {File} opts.inputFile7 Seventh input file to perform the operation on.
     * @param {File} opts.inputFile8 Eighth input file to perform the operation on.
     * @param {File} opts.inputFile9 Ninth input file to perform the operation on.
     * @param {File} opts.inputFile10 Tenth input file to perform the operation on.
     * @param {module:api/MergeDocumentApi~mergeDocumentPngMultiCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link 'Blob'}
     */
    this.mergeDocumentPngMulti = function(inputFile1, inputFile2, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'inputFile1' is set
      if (inputFile1 === undefined || inputFile1 === null) {
        throw new Error("Missing the required parameter 'inputFile1' when calling mergeDocumentPngMulti");
      }

      // verify the required parameter 'inputFile2' is set
      if (inputFile2 === undefined || inputFile2 === null) {
        throw new Error("Missing the required parameter 'inputFile2' when calling mergeDocumentPngMulti");
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
        'inputFile1': inputFile1,
        'inputFile2': inputFile2,
        'inputFile3': opts['inputFile3'],
        'inputFile4': opts['inputFile4'],
        'inputFile5': opts['inputFile5'],
        'inputFile6': opts['inputFile6'],
        'inputFile7': opts['inputFile7'],
        'inputFile8': opts['inputFile8'],
        'inputFile9': opts['inputFile9'],
        'inputFile10': opts['inputFile10']
      };

      var authNames = ['Apikey'];
      var contentTypes = ['multipart/form-data'];
      var accepts = ['application/octet-stream'];
      var returnType = 'Blob';

      return this.apiClient.callApi(
        '/convert/merge/png/vertical/multi', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the mergeDocumentPptx operation.
     * @callback module:api/MergeDocumentApi~mergeDocumentPptxCallback
     * @param {String} error Error message, if any.
     * @param {'Blob'} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Merge Two PowerPoint PPTX Together
     * Combine two Office PowerPoint presentations (pptx) into one single Office PowerPoint presentation
     * @param {File} inputFile1 First input file to perform the operation on.
     * @param {File} inputFile2 Second input file to perform the operation on (more than 2 can be supplied).
     * @param {module:api/MergeDocumentApi~mergeDocumentPptxCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link 'Blob'}
     */
    this.mergeDocumentPptx = function(inputFile1, inputFile2, callback) {
      var postBody = null;

      // verify the required parameter 'inputFile1' is set
      if (inputFile1 === undefined || inputFile1 === null) {
        throw new Error("Missing the required parameter 'inputFile1' when calling mergeDocumentPptx");
      }

      // verify the required parameter 'inputFile2' is set
      if (inputFile2 === undefined || inputFile2 === null) {
        throw new Error("Missing the required parameter 'inputFile2' when calling mergeDocumentPptx");
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
        'inputFile1': inputFile1,
        'inputFile2': inputFile2
      };

      var authNames = ['Apikey'];
      var contentTypes = ['multipart/form-data'];
      var accepts = ['application/octet-stream'];
      var returnType = 'Blob';

      return this.apiClient.callApi(
        '/convert/merge/pptx', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the mergeDocumentPptxMulti operation.
     * @callback module:api/MergeDocumentApi~mergeDocumentPptxMultiCallback
     * @param {String} error Error message, if any.
     * @param {'Blob'} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Merge Multple PowerPoint PPTX Together
     * Combine multiple Office PowerPoint presentations (pptx) into one single Office PowerPoint presentation
     * @param {File} inputFile1 First input file to perform the operation on.
     * @param {File} inputFile2 Second input file to perform the operation on.
     * @param {Object} opts Optional parameters
     * @param {File} opts.inputFile3 Third input file to perform the operation on.
     * @param {File} opts.inputFile4 Fourth input file to perform the operation on.
     * @param {File} opts.inputFile5 Fifth input file to perform the operation on.
     * @param {File} opts.inputFile6 Sixth input file to perform the operation on.
     * @param {File} opts.inputFile7 Seventh input file to perform the operation on.
     * @param {File} opts.inputFile8 Eighth input file to perform the operation on.
     * @param {File} opts.inputFile9 Ninth input file to perform the operation on.
     * @param {File} opts.inputFile10 Tenth input file to perform the operation on.
     * @param {module:api/MergeDocumentApi~mergeDocumentPptxMultiCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link 'Blob'}
     */
    this.mergeDocumentPptxMulti = function(inputFile1, inputFile2, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'inputFile1' is set
      if (inputFile1 === undefined || inputFile1 === null) {
        throw new Error("Missing the required parameter 'inputFile1' when calling mergeDocumentPptxMulti");
      }

      // verify the required parameter 'inputFile2' is set
      if (inputFile2 === undefined || inputFile2 === null) {
        throw new Error("Missing the required parameter 'inputFile2' when calling mergeDocumentPptxMulti");
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
        'inputFile1': inputFile1,
        'inputFile2': inputFile2,
        'inputFile3': opts['inputFile3'],
        'inputFile4': opts['inputFile4'],
        'inputFile5': opts['inputFile5'],
        'inputFile6': opts['inputFile6'],
        'inputFile7': opts['inputFile7'],
        'inputFile8': opts['inputFile8'],
        'inputFile9': opts['inputFile9'],
        'inputFile10': opts['inputFile10']
      };

      var authNames = ['Apikey'];
      var contentTypes = ['multipart/form-data'];
      var accepts = ['application/octet-stream'];
      var returnType = 'Blob';

      return this.apiClient.callApi(
        '/convert/merge/pptx/multi', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the mergeDocumentTxt operation.
     * @callback module:api/MergeDocumentApi~mergeDocumentTxtCallback
     * @param {String} error Error message, if any.
     * @param {Object} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Merge Two Text (TXT) Files Together
     * Combine two Text (.TXT) files into a single text document, preserving the order of the input documents in the combined document by stacking them vertically.
     * @param {File} inputFile1 First input file to perform the operation on.
     * @param {File} inputFile2 Second input file to perform the operation on (more than 2 can be supplied).
     * @param {module:api/MergeDocumentApi~mergeDocumentTxtCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Object}
     */
    this.mergeDocumentTxt = function(inputFile1, inputFile2, callback) {
      var postBody = null;

      // verify the required parameter 'inputFile1' is set
      if (inputFile1 === undefined || inputFile1 === null) {
        throw new Error("Missing the required parameter 'inputFile1' when calling mergeDocumentTxt");
      }

      // verify the required parameter 'inputFile2' is set
      if (inputFile2 === undefined || inputFile2 === null) {
        throw new Error("Missing the required parameter 'inputFile2' when calling mergeDocumentTxt");
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
        'inputFile1': inputFile1,
        'inputFile2': inputFile2
      };

      var authNames = ['Apikey'];
      var contentTypes = ['multipart/form-data'];
      var accepts = ['application/octet-stream'];
      var returnType = Object;

      return this.apiClient.callApi(
        '/convert/merge/txt', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the mergeDocumentTxtMulti operation.
     * @callback module:api/MergeDocumentApi~mergeDocumentTxtMultiCallback
     * @param {String} error Error message, if any.
     * @param {'Blob'} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Merge Multple Text (TXT) Files Together
     * Combine multiple Text (.TXT) files into a single text document, preserving the order of the input documents in the combined document by stacking them vertically.
     * @param {File} inputFile1 First input file to perform the operation on.
     * @param {File} inputFile2 Second input file to perform the operation on.
     * @param {Object} opts Optional parameters
     * @param {File} opts.inputFile3 Third input file to perform the operation on.
     * @param {File} opts.inputFile4 Fourth input file to perform the operation on.
     * @param {File} opts.inputFile5 Fifth input file to perform the operation on.
     * @param {File} opts.inputFile6 Sixth input file to perform the operation on.
     * @param {File} opts.inputFile7 Seventh input file to perform the operation on.
     * @param {File} opts.inputFile8 Eighth input file to perform the operation on.
     * @param {File} opts.inputFile9 Ninth input file to perform the operation on.
     * @param {File} opts.inputFile10 Tenth input file to perform the operation on.
     * @param {module:api/MergeDocumentApi~mergeDocumentTxtMultiCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link 'Blob'}
     */
    this.mergeDocumentTxtMulti = function(inputFile1, inputFile2, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'inputFile1' is set
      if (inputFile1 === undefined || inputFile1 === null) {
        throw new Error("Missing the required parameter 'inputFile1' when calling mergeDocumentTxtMulti");
      }

      // verify the required parameter 'inputFile2' is set
      if (inputFile2 === undefined || inputFile2 === null) {
        throw new Error("Missing the required parameter 'inputFile2' when calling mergeDocumentTxtMulti");
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
        'inputFile1': inputFile1,
        'inputFile2': inputFile2,
        'inputFile3': opts['inputFile3'],
        'inputFile4': opts['inputFile4'],
        'inputFile5': opts['inputFile5'],
        'inputFile6': opts['inputFile6'],
        'inputFile7': opts['inputFile7'],
        'inputFile8': opts['inputFile8'],
        'inputFile9': opts['inputFile9'],
        'inputFile10': opts['inputFile10']
      };

      var authNames = ['Apikey'];
      var contentTypes = ['multipart/form-data'];
      var accepts = ['application/octet-stream'];
      var returnType = 'Blob';

      return this.apiClient.callApi(
        '/convert/merge/txt/multi', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the mergeDocumentXlsx operation.
     * @callback module:api/MergeDocumentApi~mergeDocumentXlsxCallback
     * @param {String} error Error message, if any.
     * @param {'Blob'} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Merge Two Excel XLSX Together
     * Combine two Office Excel spreadsheets (xlsx) into a single Office Excel spreadsheet
     * @param {File} inputFile1 First input file to perform the operation on.
     * @param {File} inputFile2 Second input file to perform the operation on (more than 2 can be supplied).
     * @param {module:api/MergeDocumentApi~mergeDocumentXlsxCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link 'Blob'}
     */
    this.mergeDocumentXlsx = function(inputFile1, inputFile2, callback) {
      var postBody = null;

      // verify the required parameter 'inputFile1' is set
      if (inputFile1 === undefined || inputFile1 === null) {
        throw new Error("Missing the required parameter 'inputFile1' when calling mergeDocumentXlsx");
      }

      // verify the required parameter 'inputFile2' is set
      if (inputFile2 === undefined || inputFile2 === null) {
        throw new Error("Missing the required parameter 'inputFile2' when calling mergeDocumentXlsx");
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
        'inputFile1': inputFile1,
        'inputFile2': inputFile2
      };

      var authNames = ['Apikey'];
      var contentTypes = ['multipart/form-data'];
      var accepts = ['application/octet-stream'];
      var returnType = 'Blob';

      return this.apiClient.callApi(
        '/convert/merge/xlsx', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the mergeDocumentXlsxMulti operation.
     * @callback module:api/MergeDocumentApi~mergeDocumentXlsxMultiCallback
     * @param {String} error Error message, if any.
     * @param {'Blob'} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Merge Multple Excel XLSX Together
     * Combine multiple Office Excel spreadsheets (xlsx) into a single Office Excel spreadsheet
     * @param {File} inputFile1 First input file to perform the operation on.
     * @param {File} inputFile2 Second input file to perform the operation on.
     * @param {Object} opts Optional parameters
     * @param {File} opts.inputFile3 Third input file to perform the operation on.
     * @param {File} opts.inputFile4 Fourth input file to perform the operation on.
     * @param {File} opts.inputFile5 Fifth input file to perform the operation on.
     * @param {File} opts.inputFile6 Sixth input file to perform the operation on.
     * @param {File} opts.inputFile7 Seventh input file to perform the operation on.
     * @param {File} opts.inputFile8 Eighth input file to perform the operation on.
     * @param {File} opts.inputFile9 Ninth input file to perform the operation on.
     * @param {File} opts.inputFile10 Tenth input file to perform the operation on.
     * @param {module:api/MergeDocumentApi~mergeDocumentXlsxMultiCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link 'Blob'}
     */
    this.mergeDocumentXlsxMulti = function(inputFile1, inputFile2, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'inputFile1' is set
      if (inputFile1 === undefined || inputFile1 === null) {
        throw new Error("Missing the required parameter 'inputFile1' when calling mergeDocumentXlsxMulti");
      }

      // verify the required parameter 'inputFile2' is set
      if (inputFile2 === undefined || inputFile2 === null) {
        throw new Error("Missing the required parameter 'inputFile2' when calling mergeDocumentXlsxMulti");
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
        'inputFile1': inputFile1,
        'inputFile2': inputFile2,
        'inputFile3': opts['inputFile3'],
        'inputFile4': opts['inputFile4'],
        'inputFile5': opts['inputFile5'],
        'inputFile6': opts['inputFile6'],
        'inputFile7': opts['inputFile7'],
        'inputFile8': opts['inputFile8'],
        'inputFile9': opts['inputFile9'],
        'inputFile10': opts['inputFile10']
      };

      var authNames = ['Apikey'];
      var contentTypes = ['multipart/form-data'];
      var accepts = ['application/octet-stream'];
      var returnType = 'Blob';

      return this.apiClient.callApi(
        '/convert/merge/xlsx/multi', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
