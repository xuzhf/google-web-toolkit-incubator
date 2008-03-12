/*
 * Copyright 2007 Google Inc.
 * 
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not
 * use this file except in compliance with the License. You may obtain a copy of
 * the License at
 * 
 * http://www.apache.org/licenses/LICENSE-2.0
 * 
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the
 * License for the specific language governing permissions and limitations under
 * the License.
 */
package com.google.gwt.libideas.resources.client.impl;

import com.google.gwt.core.client.JavaScriptObject;
import com.google.gwt.http.client.Request;
import com.google.gwt.http.client.RequestBuilder;
import com.google.gwt.http.client.RequestCallback;
import com.google.gwt.http.client.RequestException;
import com.google.gwt.http.client.Response;
import com.google.gwt.libideas.resources.client.ExternalTextResource;
import com.google.gwt.libideas.resources.client.ResourceException;
import com.google.gwt.libideas.resources.client.TextResource;
import com.google.gwt.libideas.resources.client.TextResourceCallback;

/**
 * Implements external resource fetching of TextResources.
 */
public class ExternalTextResourcePrototype implements ExternalTextResource {

  /**
   * Maps the HTTP callback onto the ResourceCallback.
   */
  private class ETRCallback implements RequestCallback {
    final TextResourceCallback callback;

    public ETRCallback(TextResourceCallback callback) {
      this.callback = callback;
    }

    public void onError(Request request, Throwable exception) {
      callback.onError(new ResourceException(
          ExternalTextResourcePrototype.this,
          "Unable to retrieve external resource", exception));
    }

    public void onResponseReceived(Request request, final Response response) {
      // Get the contents of the JSON bundle
      String responseText = response.getText();

      // Call eval() on the object.
      JavaScriptObject jso = evalObject(responseText);
      if (jso == null) {
        callback.onError(new ResourceException(
            ExternalTextResourcePrototype.this, "eval() returned null"));
        return;
      }

      // Populate the TextResponse cache array
      for (int i = 0; i < cache.length; i++) {
        final String resourceText = extractString(jso, i);
        cache[i] = new TextResource() {

          public String getName() {
            return name;
          }

          public String getText() {
            return resourceText;
          }

        };
      }

      // Finish by invoking the callback
      callback.onSuccess(cache[index]);
    }
  }

  /**
   * Evaluate the JSON payload. The regular expression to validate the safety of
   * the payload is taken from RFC 4627 (D. Crockford).
   * 
   * @param data the raw JSON-encapsulated string bundle
   * @return the evaluated JSON object, or <code>null</code> if there is an
   *         error.
   */
  private static native JavaScriptObject evalObject(String data) /*-{
   var safe = !(/[^,:{}\[\]0-9.\-+Eaeflnr-u \n\r\t]/.test(
   data.replace(/"(\\.|[^"\\])*"/g, '')));
   
   if (!safe) {
   return null;
   }
   
   return eval('(' + data + ')') || null;
   }-*/;

  /**
   * Extract the specified String from a JavaScriptObject that is array-like.
   * 
   * @param jso the JavaScriptObject returned from {@link #evalObject(String)}
   * @param index the index of the string to extract
   * @return the requested string, or <code>null</code> if it does not exist.
   */
  private static native String extractString(JavaScriptObject jso, int index) /*-{
   if (!jso) {
   return null;
   }
   
   return (jso.length > index) && jso[index] || null;
   }-*/;

  private final String name;
  private final String url;

  private final int index;

  /**
   * This is a reference to an array nominally created in the IRB that contains
   * the ExternalTextResource. It is intended to be shared between all instances
   * of the ETR that have a common parent IRB.
   */
  private final TextResource[] cache;

  public ExternalTextResourcePrototype(String name, String url,
      TextResource[] cache, int index) {
    this.name = name;
    this.url = url;
    this.cache = cache;
    this.index = index;
  }

  public String getName() {
    return name;
  }

  /**
   * Possibly fire off an HTTPRequest for the text resource.
   */
  public void getText(TextResourceCallback callback) throws ResourceException {

    // If we've already parsed the JSON bundle, short-circuit.
    if (cache[index] != null) {
      callback.onSuccess(cache[index]);
      return;
    }

    // Otherwise, fire an HTTP request.
    RequestBuilder rb = new RequestBuilder(RequestBuilder.GET, url);
    try {
      rb.sendRequest("", new ETRCallback(callback));
    } catch (RequestException e) {
      throw new ResourceException(this,
          "Unable to initiate request for external resource", e);
    }
  }
}
