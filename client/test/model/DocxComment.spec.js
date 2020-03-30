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
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.CloudmersiveConvertApiClient);
  }
}(this, function(expect, CloudmersiveConvertApiClient) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new CloudmersiveConvertApiClient.DocxComment();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('DocxComment', function() {
    it('should create an instance of DocxComment', function() {
      // uncomment below and update the code to test DocxComment
      //var instance = new CloudmersiveConvertApiClient.DocxComment();
      //expect(instance).to.be.a(CloudmersiveConvertApiClient.DocxComment);
    });

    it('should have the property path (base name: "Path")', function() {
      // uncomment below and update the code to test the property path
      //var instance = new CloudmersiveConvertApiClient.DocxComment();
      //expect(instance).to.be();
    });

    it('should have the property author (base name: "Author")', function() {
      // uncomment below and update the code to test the property author
      //var instance = new CloudmersiveConvertApiClient.DocxComment();
      //expect(instance).to.be();
    });

    it('should have the property authorInitials (base name: "AuthorInitials")', function() {
      // uncomment below and update the code to test the property authorInitials
      //var instance = new CloudmersiveConvertApiClient.DocxComment();
      //expect(instance).to.be();
    });

    it('should have the property commentText (base name: "CommentText")', function() {
      // uncomment below and update the code to test the property commentText
      //var instance = new CloudmersiveConvertApiClient.DocxComment();
      //expect(instance).to.be();
    });

    it('should have the property commentDate (base name: "CommentDate")', function() {
      // uncomment below and update the code to test the property commentDate
      //var instance = new CloudmersiveConvertApiClient.DocxComment();
      //expect(instance).to.be();
    });

    it('should have the property isTopLevel (base name: "IsTopLevel")', function() {
      // uncomment below and update the code to test the property isTopLevel
      //var instance = new CloudmersiveConvertApiClient.DocxComment();
      //expect(instance).to.be();
    });

    it('should have the property isReply (base name: "IsReply")', function() {
      // uncomment below and update the code to test the property isReply
      //var instance = new CloudmersiveConvertApiClient.DocxComment();
      //expect(instance).to.be();
    });

    it('should have the property parentCommentPath (base name: "ParentCommentPath")', function() {
      // uncomment below and update the code to test the property parentCommentPath
      //var instance = new CloudmersiveConvertApiClient.DocxComment();
      //expect(instance).to.be();
    });

    it('should have the property done (base name: "Done")', function() {
      // uncomment below and update the code to test the property done
      //var instance = new CloudmersiveConvertApiClient.DocxComment();
      //expect(instance).to.be();
    });

  });

}));