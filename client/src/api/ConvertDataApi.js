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
    define(['ApiClient', 'model/XmlAddAttributeWithXPathResult', 'model/XmlAddChildWithXPathResult', 'model/XmlFilterWithXPathResult', 'model/XmlQueryWithXQueryMultiResult', 'model/XmlQueryWithXQueryResult', 'model/XmlRemoveAllChildrenWithXPathResult', 'model/XmlRemoveWithXPathResult', 'model/XmlReplaceWithXPathResult', 'model/XmlSetValueWithXPathResult'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/XmlAddAttributeWithXPathResult'), require('../model/XmlAddChildWithXPathResult'), require('../model/XmlFilterWithXPathResult'), require('../model/XmlQueryWithXQueryMultiResult'), require('../model/XmlQueryWithXQueryResult'), require('../model/XmlRemoveAllChildrenWithXPathResult'), require('../model/XmlRemoveWithXPathResult'), require('../model/XmlReplaceWithXPathResult'), require('../model/XmlSetValueWithXPathResult'));
  } else {
    // Browser globals (root is window)
    if (!root.CloudmersiveConvertApiClient) {
      root.CloudmersiveConvertApiClient = {};
    }
    root.CloudmersiveConvertApiClient.ConvertDataApi = factory(root.CloudmersiveConvertApiClient.ApiClient, root.CloudmersiveConvertApiClient.XmlAddAttributeWithXPathResult, root.CloudmersiveConvertApiClient.XmlAddChildWithXPathResult, root.CloudmersiveConvertApiClient.XmlFilterWithXPathResult, root.CloudmersiveConvertApiClient.XmlQueryWithXQueryMultiResult, root.CloudmersiveConvertApiClient.XmlQueryWithXQueryResult, root.CloudmersiveConvertApiClient.XmlRemoveAllChildrenWithXPathResult, root.CloudmersiveConvertApiClient.XmlRemoveWithXPathResult, root.CloudmersiveConvertApiClient.XmlReplaceWithXPathResult, root.CloudmersiveConvertApiClient.XmlSetValueWithXPathResult);
  }
}(this, function(ApiClient, XmlAddAttributeWithXPathResult, XmlAddChildWithXPathResult, XmlFilterWithXPathResult, XmlQueryWithXQueryMultiResult, XmlQueryWithXQueryResult, XmlRemoveAllChildrenWithXPathResult, XmlRemoveWithXPathResult, XmlReplaceWithXPathResult, XmlSetValueWithXPathResult) {
  'use strict';

  /**
   * ConvertData service.
   * @module api/ConvertDataApi
   * @version 2.3.3
   */

  /**
   * Constructs a new ConvertDataApi. 
   * @alias module:api/ConvertDataApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the convertDataCsvToJson operation.
     * @callback module:api/ConvertDataApi~convertDataCsvToJsonCallback
     * @param {String} error Error message, if any.
     * @param {Object} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Convert CSV to JSON conversion
     * Convert a CSV file to a JSON object array
     * @param {File} inputFile Input file to perform the operation on.
     * @param {module:api/ConvertDataApi~convertDataCsvToJsonCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Object}
     */
    this.convertDataCsvToJson = function(inputFile, callback) {
      var postBody = null;

      // verify the required parameter 'inputFile' is set
      if (inputFile === undefined || inputFile === null) {
        throw new Error("Missing the required parameter 'inputFile' when calling convertDataCsvToJson");
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
      var accepts = ['application/json'];
      var returnType = Object;

      return this.apiClient.callApi(
        '/convert/csv/to/json', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the convertDataJsonToXml operation.
     * @callback module:api/ConvertDataApi~convertDataJsonToXmlCallback
     * @param {String} error Error message, if any.
     * @param {'Blob'} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Convert JSON to XML conversion
     * Convert a JSON object into XML
     * @param {Object} jsonObject 
     * @param {module:api/ConvertDataApi~convertDataJsonToXmlCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link 'Blob'}
     */
    this.convertDataJsonToXml = function(jsonObject, callback) {
      var postBody = jsonObject;

      // verify the required parameter 'jsonObject' is set
      if (jsonObject === undefined || jsonObject === null) {
        throw new Error("Missing the required parameter 'jsonObject' when calling convertDataJsonToXml");
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
      var accepts = ['application/xml'];
      var returnType = 'Blob';

      return this.apiClient.callApi(
        '/convert/json/to/xml', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the convertDataXlsToJson operation.
     * @callback module:api/ConvertDataApi~convertDataXlsToJsonCallback
     * @param {String} error Error message, if any.
     * @param {Object} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Convert Excel (97-2003) XLS to JSON conversion
     * Convert an Excel (97-2003) XLS file to a JSON object array
     * @param {File} inputFile Input file to perform the operation on.
     * @param {module:api/ConvertDataApi~convertDataXlsToJsonCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Object}
     */
    this.convertDataXlsToJson = function(inputFile, callback) {
      var postBody = null;

      // verify the required parameter 'inputFile' is set
      if (inputFile === undefined || inputFile === null) {
        throw new Error("Missing the required parameter 'inputFile' when calling convertDataXlsToJson");
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
      var accepts = ['application/json'];
      var returnType = Object;

      return this.apiClient.callApi(
        '/convert/xls/to/json', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the convertDataXlsxToJson operation.
     * @callback module:api/ConvertDataApi~convertDataXlsxToJsonCallback
     * @param {String} error Error message, if any.
     * @param {Object} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Convert Excel XLSX to JSON conversion
     * Convert an Excel XLSX file to a JSON object array
     * @param {File} inputFile Input file to perform the operation on.
     * @param {module:api/ConvertDataApi~convertDataXlsxToJsonCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Object}
     */
    this.convertDataXlsxToJson = function(inputFile, callback) {
      var postBody = null;

      // verify the required parameter 'inputFile' is set
      if (inputFile === undefined || inputFile === null) {
        throw new Error("Missing the required parameter 'inputFile' when calling convertDataXlsxToJson");
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
      var accepts = ['application/json'];
      var returnType = Object;

      return this.apiClient.callApi(
        '/convert/xlsx/to/json', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the convertDataXmlEditAddAttributeWithXPath operation.
     * @callback module:api/ConvertDataApi~convertDataXmlEditAddAttributeWithXPathCallback
     * @param {String} error Error message, if any.
     * @param {module:model/XmlAddAttributeWithXPathResult} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Adds an attribute to all XML nodes matching XPath expression
     * Return the reuslts of editing an XML document by adding an attribute to all of the nodes that match an input XPath expression.
     * @param {File} inputFile Input XML file to perform the operation on.
     * @param {String} xPathExpression Valid XML XPath query expression
     * @param {String} xmlAttributeName Name of the XML attribute to add
     * @param {String} xmlAttributeValue Value of the XML attribute to add
     * @param {module:api/ConvertDataApi~convertDataXmlEditAddAttributeWithXPathCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/XmlAddAttributeWithXPathResult}
     */
    this.convertDataXmlEditAddAttributeWithXPath = function(inputFile, xPathExpression, xmlAttributeName, xmlAttributeValue, callback) {
      var postBody = null;

      // verify the required parameter 'inputFile' is set
      if (inputFile === undefined || inputFile === null) {
        throw new Error("Missing the required parameter 'inputFile' when calling convertDataXmlEditAddAttributeWithXPath");
      }

      // verify the required parameter 'xPathExpression' is set
      if (xPathExpression === undefined || xPathExpression === null) {
        throw new Error("Missing the required parameter 'xPathExpression' when calling convertDataXmlEditAddAttributeWithXPath");
      }

      // verify the required parameter 'xmlAttributeName' is set
      if (xmlAttributeName === undefined || xmlAttributeName === null) {
        throw new Error("Missing the required parameter 'xmlAttributeName' when calling convertDataXmlEditAddAttributeWithXPath");
      }

      // verify the required parameter 'xmlAttributeValue' is set
      if (xmlAttributeValue === undefined || xmlAttributeValue === null) {
        throw new Error("Missing the required parameter 'xmlAttributeValue' when calling convertDataXmlEditAddAttributeWithXPath");
      }


      var pathParams = {
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
        'XPathExpression': xPathExpression,
        'XmlAttributeName': xmlAttributeName,
        'XmlAttributeValue': xmlAttributeValue
      };
      var formParams = {
        'inputFile': inputFile
      };

      var authNames = ['Apikey'];
      var contentTypes = [];
      var accepts = ['application/json', 'text/json', 'application/xml', 'text/xml'];
      var returnType = XmlAddAttributeWithXPathResult;

      return this.apiClient.callApi(
        '/convert/xml/edit/xpath/add-attribute', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the convertDataXmlEditAddChildWithXPath operation.
     * @callback module:api/ConvertDataApi~convertDataXmlEditAddChildWithXPathCallback
     * @param {String} error Error message, if any.
     * @param {module:model/XmlAddChildWithXPathResult} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Adds an XML node as a child to XML nodes matching XPath expression
     * Return the reuslts of editing an XML document by adding an XML node as a child to all of the nodes that match an input XPath expression.
     * @param {File} inputFile Input XML file to perform the operation on.
     * @param {String} xPathExpression Valid XML XPath query expression
     * @param {String} xmlNodeToAdd XML Node to add as a child
     * @param {module:api/ConvertDataApi~convertDataXmlEditAddChildWithXPathCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/XmlAddChildWithXPathResult}
     */
    this.convertDataXmlEditAddChildWithXPath = function(inputFile, xPathExpression, xmlNodeToAdd, callback) {
      var postBody = null;

      // verify the required parameter 'inputFile' is set
      if (inputFile === undefined || inputFile === null) {
        throw new Error("Missing the required parameter 'inputFile' when calling convertDataXmlEditAddChildWithXPath");
      }

      // verify the required parameter 'xPathExpression' is set
      if (xPathExpression === undefined || xPathExpression === null) {
        throw new Error("Missing the required parameter 'xPathExpression' when calling convertDataXmlEditAddChildWithXPath");
      }

      // verify the required parameter 'xmlNodeToAdd' is set
      if (xmlNodeToAdd === undefined || xmlNodeToAdd === null) {
        throw new Error("Missing the required parameter 'xmlNodeToAdd' when calling convertDataXmlEditAddChildWithXPath");
      }


      var pathParams = {
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
        'XPathExpression': xPathExpression,
        'XmlNodeToAdd': xmlNodeToAdd
      };
      var formParams = {
        'inputFile': inputFile
      };

      var authNames = ['Apikey'];
      var contentTypes = [];
      var accepts = ['application/json', 'text/json', 'application/xml', 'text/xml'];
      var returnType = XmlAddChildWithXPathResult;

      return this.apiClient.callApi(
        '/convert/xml/edit/xpath/add-child', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the convertDataXmlEditRemoveAllChildNodesWithXPath operation.
     * @callback module:api/ConvertDataApi~convertDataXmlEditRemoveAllChildNodesWithXPathCallback
     * @param {String} error Error message, if any.
     * @param {module:model/XmlRemoveAllChildrenWithXPathResult} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Removes, deletes all children of nodes matching XPath expression, but does not remove the nodes
     * Return the reuslts of editing an XML document by removing all child nodes of the nodes that match an input XPath expression.
     * @param {File} inputFile Input XML file to perform the operation on.
     * @param {String} xPathExpression Valid XML XPath query expression
     * @param {module:api/ConvertDataApi~convertDataXmlEditRemoveAllChildNodesWithXPathCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/XmlRemoveAllChildrenWithXPathResult}
     */
    this.convertDataXmlEditRemoveAllChildNodesWithXPath = function(inputFile, xPathExpression, callback) {
      var postBody = null;

      // verify the required parameter 'inputFile' is set
      if (inputFile === undefined || inputFile === null) {
        throw new Error("Missing the required parameter 'inputFile' when calling convertDataXmlEditRemoveAllChildNodesWithXPath");
      }

      // verify the required parameter 'xPathExpression' is set
      if (xPathExpression === undefined || xPathExpression === null) {
        throw new Error("Missing the required parameter 'xPathExpression' when calling convertDataXmlEditRemoveAllChildNodesWithXPath");
      }


      var pathParams = {
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
        'XPathExpression': xPathExpression
      };
      var formParams = {
        'inputFile': inputFile
      };

      var authNames = ['Apikey'];
      var contentTypes = [];
      var accepts = ['application/json', 'text/json', 'application/xml', 'text/xml'];
      var returnType = XmlRemoveAllChildrenWithXPathResult;

      return this.apiClient.callApi(
        '/convert/xml/edit/xpath/remove-all-children', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the convertDataXmlEditReplaceWithXPath operation.
     * @callback module:api/ConvertDataApi~convertDataXmlEditReplaceWithXPathCallback
     * @param {String} error Error message, if any.
     * @param {module:model/XmlReplaceWithXPathResult} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Replaces XML nodes matching XPath expression with new node
     * Return the reuslts of editing an XML document by replacing all of the nodes that match an input XPath expression with a new XML node expression.
     * @param {File} inputFile Input XML file to perform the operation on.
     * @param {String} xPathExpression Valid XML XPath query expression
     * @param {String} xmlNodeReplacement XML Node replacement content
     * @param {module:api/ConvertDataApi~convertDataXmlEditReplaceWithXPathCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/XmlReplaceWithXPathResult}
     */
    this.convertDataXmlEditReplaceWithXPath = function(inputFile, xPathExpression, xmlNodeReplacement, callback) {
      var postBody = null;

      // verify the required parameter 'inputFile' is set
      if (inputFile === undefined || inputFile === null) {
        throw new Error("Missing the required parameter 'inputFile' when calling convertDataXmlEditReplaceWithXPath");
      }

      // verify the required parameter 'xPathExpression' is set
      if (xPathExpression === undefined || xPathExpression === null) {
        throw new Error("Missing the required parameter 'xPathExpression' when calling convertDataXmlEditReplaceWithXPath");
      }

      // verify the required parameter 'xmlNodeReplacement' is set
      if (xmlNodeReplacement === undefined || xmlNodeReplacement === null) {
        throw new Error("Missing the required parameter 'xmlNodeReplacement' when calling convertDataXmlEditReplaceWithXPath");
      }


      var pathParams = {
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
        'XPathExpression': xPathExpression,
        'XmlNodeReplacement': xmlNodeReplacement
      };
      var formParams = {
        'inputFile': inputFile
      };

      var authNames = ['Apikey'];
      var contentTypes = [];
      var accepts = ['application/json', 'text/json', 'application/xml', 'text/xml'];
      var returnType = XmlReplaceWithXPathResult;

      return this.apiClient.callApi(
        '/convert/xml/edit/xpath/replace', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the convertDataXmlEditSetValueWithXPath operation.
     * @callback module:api/ConvertDataApi~convertDataXmlEditSetValueWithXPathCallback
     * @param {String} error Error message, if any.
     * @param {module:model/XmlSetValueWithXPathResult} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Sets the value contents of XML nodes matching XPath expression
     * Return the reuslts of editing an XML document by setting the contents of all of the nodes that match an input XPath expression.  Supports elements and attributes.
     * @param {File} inputFile Input XML file to perform the operation on.
     * @param {String} xPathExpression Valid XML XPath query expression
     * @param {String} xmlValue XML Value to set into the matching XML nodes
     * @param {module:api/ConvertDataApi~convertDataXmlEditSetValueWithXPathCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/XmlSetValueWithXPathResult}
     */
    this.convertDataXmlEditSetValueWithXPath = function(inputFile, xPathExpression, xmlValue, callback) {
      var postBody = null;

      // verify the required parameter 'inputFile' is set
      if (inputFile === undefined || inputFile === null) {
        throw new Error("Missing the required parameter 'inputFile' when calling convertDataXmlEditSetValueWithXPath");
      }

      // verify the required parameter 'xPathExpression' is set
      if (xPathExpression === undefined || xPathExpression === null) {
        throw new Error("Missing the required parameter 'xPathExpression' when calling convertDataXmlEditSetValueWithXPath");
      }

      // verify the required parameter 'xmlValue' is set
      if (xmlValue === undefined || xmlValue === null) {
        throw new Error("Missing the required parameter 'xmlValue' when calling convertDataXmlEditSetValueWithXPath");
      }


      var pathParams = {
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
        'XPathExpression': xPathExpression,
        'XmlValue': xmlValue
      };
      var formParams = {
        'inputFile': inputFile
      };

      var authNames = ['Apikey'];
      var contentTypes = [];
      var accepts = ['application/json', 'text/json', 'application/xml', 'text/xml'];
      var returnType = XmlSetValueWithXPathResult;

      return this.apiClient.callApi(
        '/convert/xml/edit/xpath/set-value', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the convertDataXmlFilterWithXPath operation.
     * @callback module:api/ConvertDataApi~convertDataXmlFilterWithXPathCallback
     * @param {String} error Error message, if any.
     * @param {module:model/XmlFilterWithXPathResult} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Filter, select XML nodes using XPath expression, get results
     * Return the reuslts of filtering, selecting an XML document with an XPath expression
     * @param {String} xPathExpression Valid XML XPath query expression
     * @param {File} inputFile Input file to perform the operation on.
     * @param {module:api/ConvertDataApi~convertDataXmlFilterWithXPathCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/XmlFilterWithXPathResult}
     */
    this.convertDataXmlFilterWithXPath = function(xPathExpression, inputFile, callback) {
      var postBody = null;

      // verify the required parameter 'xPathExpression' is set
      if (xPathExpression === undefined || xPathExpression === null) {
        throw new Error("Missing the required parameter 'xPathExpression' when calling convertDataXmlFilterWithXPath");
      }

      // verify the required parameter 'inputFile' is set
      if (inputFile === undefined || inputFile === null) {
        throw new Error("Missing the required parameter 'inputFile' when calling convertDataXmlFilterWithXPath");
      }


      var pathParams = {
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
        'XPathExpression': xPathExpression
      };
      var formParams = {
        'inputFile': inputFile
      };

      var authNames = ['Apikey'];
      var contentTypes = ['multipart/form-data'];
      var accepts = ['application/json', 'text/json', 'application/xml', 'text/xml'];
      var returnType = XmlFilterWithXPathResult;

      return this.apiClient.callApi(
        '/convert/xml/select/xpath', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the convertDataXmlQueryWithXQuery operation.
     * @callback module:api/ConvertDataApi~convertDataXmlQueryWithXQueryCallback
     * @param {String} error Error message, if any.
     * @param {module:model/XmlQueryWithXQueryResult} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Query an XML file using XQuery query, get results
     * Return the reuslts of querying a single XML document with an XQuery expression.  Supports XQuery 3.1 and earlier.  This API is optimized for a single XML document as input.  Provided XML document is automatically loaded as the default context; to access elements in the document, simply refer to them without a document reference, such as bookstore/book
     * @param {File} inputFile Input XML file to perform the operation on.
     * @param {String} xQuery Valid XML XQuery 3.1 or earlier query expression; multi-line expressions are supported
     * @param {module:api/ConvertDataApi~convertDataXmlQueryWithXQueryCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/XmlQueryWithXQueryResult}
     */
    this.convertDataXmlQueryWithXQuery = function(inputFile, xQuery, callback) {
      var postBody = null;

      // verify the required parameter 'inputFile' is set
      if (inputFile === undefined || inputFile === null) {
        throw new Error("Missing the required parameter 'inputFile' when calling convertDataXmlQueryWithXQuery");
      }

      // verify the required parameter 'xQuery' is set
      if (xQuery === undefined || xQuery === null) {
        throw new Error("Missing the required parameter 'xQuery' when calling convertDataXmlQueryWithXQuery");
      }


      var pathParams = {
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
        'XQuery': xQuery
      };
      var formParams = {
        'inputFile': inputFile
      };

      var authNames = ['Apikey'];
      var contentTypes = [];
      var accepts = ['application/json', 'text/json', 'application/xml', 'text/xml'];
      var returnType = XmlQueryWithXQueryResult;

      return this.apiClient.callApi(
        '/convert/xml/query/xquery', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the convertDataXmlQueryWithXQueryMulti operation.
     * @callback module:api/ConvertDataApi~convertDataXmlQueryWithXQueryMultiCallback
     * @param {String} error Error message, if any.
     * @param {module:model/XmlQueryWithXQueryMultiResult} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Query multiple XML files using XQuery query, get results
     * Return the reuslts of querying an XML document with an XQuery expression.  Supports XQuery 3.1 and earlier.  This API is optimized for multiple XML documents as input.  You can refer to the contents of a given document by name, for example doc(\&quot;books.xml\&quot;) or doc(\&quot;restaurants.xml\&quot;) if you included two input files named books.xml and restaurants.xml.  If input files contain no file name, they will default to file names input1.xml, input2.xml and so on.
     * @param {File} inputFile1 First input XML file to perform the operation on.
     * @param {String} xQuery Valid XML XQuery 3.1 or earlier query expression; multi-line expressions are supported
     * @param {Object} opts Optional parameters
     * @param {File} opts.inputFile2 Second input XML file to perform the operation on.
     * @param {File} opts.inputFile3 Third input XML file to perform the operation on.
     * @param {File} opts.inputFile4 Fourth input XML file to perform the operation on.
     * @param {File} opts.inputFile5 Fifth input XML file to perform the operation on.
     * @param {File} opts.inputFile6 Sixth input XML file to perform the operation on.
     * @param {File} opts.inputFile7 Seventh input XML file to perform the operation on.
     * @param {File} opts.inputFile8 Eighth input XML file to perform the operation on.
     * @param {File} opts.inputFile9 Ninth input XML file to perform the operation on.
     * @param {File} opts.inputFile10 Tenth input XML file to perform the operation on.
     * @param {module:api/ConvertDataApi~convertDataXmlQueryWithXQueryMultiCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/XmlQueryWithXQueryMultiResult}
     */
    this.convertDataXmlQueryWithXQueryMulti = function(inputFile1, xQuery, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'inputFile1' is set
      if (inputFile1 === undefined || inputFile1 === null) {
        throw new Error("Missing the required parameter 'inputFile1' when calling convertDataXmlQueryWithXQueryMulti");
      }

      // verify the required parameter 'xQuery' is set
      if (xQuery === undefined || xQuery === null) {
        throw new Error("Missing the required parameter 'xQuery' when calling convertDataXmlQueryWithXQueryMulti");
      }


      var pathParams = {
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
        'XQuery': xQuery
      };
      var formParams = {
        'inputFile1': inputFile1,
        'inputFile2': opts['inputFile2'],
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
      var contentTypes = [];
      var accepts = ['application/json', 'text/json', 'application/xml', 'text/xml'];
      var returnType = XmlQueryWithXQueryMultiResult;

      return this.apiClient.callApi(
        '/convert/xml/query/xquery/multi', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the convertDataXmlRemoveWithXPath operation.
     * @callback module:api/ConvertDataApi~convertDataXmlRemoveWithXPathCallback
     * @param {String} error Error message, if any.
     * @param {module:model/XmlRemoveWithXPathResult} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Remove, delete XML nodes and items matching XPath expression
     * Return the reuslts of editing an XML document by removing all of the nodes that match an input XPath expression
     * @param {String} xPathExpression Valid XML XPath query expression
     * @param {File} inputFile Input file to perform the operation on.
     * @param {module:api/ConvertDataApi~convertDataXmlRemoveWithXPathCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/XmlRemoveWithXPathResult}
     */
    this.convertDataXmlRemoveWithXPath = function(xPathExpression, inputFile, callback) {
      var postBody = null;

      // verify the required parameter 'xPathExpression' is set
      if (xPathExpression === undefined || xPathExpression === null) {
        throw new Error("Missing the required parameter 'xPathExpression' when calling convertDataXmlRemoveWithXPath");
      }

      // verify the required parameter 'inputFile' is set
      if (inputFile === undefined || inputFile === null) {
        throw new Error("Missing the required parameter 'inputFile' when calling convertDataXmlRemoveWithXPath");
      }


      var pathParams = {
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
        'XPathExpression': xPathExpression
      };
      var formParams = {
        'inputFile': inputFile
      };

      var authNames = ['Apikey'];
      var contentTypes = ['multipart/form-data'];
      var accepts = ['application/json', 'text/json', 'application/xml', 'text/xml'];
      var returnType = XmlRemoveWithXPathResult;

      return this.apiClient.callApi(
        '/convert/xml/edit/xpath/remove', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the convertDataXmlToJson operation.
     * @callback module:api/ConvertDataApi~convertDataXmlToJsonCallback
     * @param {String} error Error message, if any.
     * @param {Object} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Convert XML to JSON conversion
     * Convert an XML string or file into JSON
     * @param {File} inputFile Input file to perform the operation on.
     * @param {module:api/ConvertDataApi~convertDataXmlToJsonCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Object}
     */
    this.convertDataXmlToJson = function(inputFile, callback) {
      var postBody = null;

      // verify the required parameter 'inputFile' is set
      if (inputFile === undefined || inputFile === null) {
        throw new Error("Missing the required parameter 'inputFile' when calling convertDataXmlToJson");
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
      var accepts = ['application/json'];
      var returnType = Object;

      return this.apiClient.callApi(
        '/convert/xml/to/json', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the convertDataXmlTransformWithXsltToXml operation.
     * @callback module:api/ConvertDataApi~convertDataXmlTransformWithXsltToXmlCallback
     * @param {String} error Error message, if any.
     * @param {'Blob'} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Transform XML document file with XSLT into a new XML document
     * Convert an XML string or file into JSON
     * @param {File} inputFile Input XML file to perform the operation on.
     * @param {File} transformFile Input XSLT file to use to transform the input XML file.
     * @param {module:api/ConvertDataApi~convertDataXmlTransformWithXsltToXmlCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link 'Blob'}
     */
    this.convertDataXmlTransformWithXsltToXml = function(inputFile, transformFile, callback) {
      var postBody = null;

      // verify the required parameter 'inputFile' is set
      if (inputFile === undefined || inputFile === null) {
        throw new Error("Missing the required parameter 'inputFile' when calling convertDataXmlTransformWithXsltToXml");
      }

      // verify the required parameter 'transformFile' is set
      if (transformFile === undefined || transformFile === null) {
        throw new Error("Missing the required parameter 'transformFile' when calling convertDataXmlTransformWithXsltToXml");
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
        'inputFile': inputFile,
        'transformFile': transformFile
      };

      var authNames = ['Apikey'];
      var contentTypes = [];
      var accepts = ['application/xml'];
      var returnType = 'Blob';

      return this.apiClient.callApi(
        '/convert/xml/transform/xslt/to/xml', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
