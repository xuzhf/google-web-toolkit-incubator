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
package com.google.gwt.libideas.resources.rg;

import com.google.gwt.core.ext.BadPropertyValueException;
import com.google.gwt.core.ext.PropertyOracle;
import com.google.gwt.core.ext.TreeLogger;
import com.google.gwt.core.ext.UnableToCompleteException;
import com.google.gwt.core.ext.typeinfo.JMethod;
import com.google.gwt.libideas.resources.client.impl.SoundResourcePrototype;
import com.google.gwt.libideas.resources.rebind.ResourceContext;
import com.google.gwt.libideas.resources.rebind.ResourceGenerator;
import com.google.gwt.libideas.resources.rebind.ResourceGeneratorUtil;
import com.google.gwt.user.client.Element;
import com.google.gwt.user.rebind.SourceWriter;

import java.net.URL;

/**
 * Creates implementations of SoundResources.
 */
public class SoundResourceGenerator extends ResourceGenerator {
  private ResourceContext context;
  private SoundBundleBuilder builder;
  private boolean soundEnabled;

  @Override
  public void init(TreeLogger logger, ResourceContext context)
      throws UnableToCompleteException {
    this.context = context;
    builder = new SoundBundleBuilder();

    // Determine if sound is enabled in the build context
    PropertyOracle po = context.getGeneratorContext().getPropertyOracle();
    try {
      soundEnabled = Boolean.parseBoolean(po.getPropertyValue(logger,
          "ResourceBundle.enableSound"));
    } catch (BadPropertyValueException e) {
      logger.log(TreeLogger.ERROR, "Bad property", e);
      throw new UnableToCompleteException();
    }
  }

  /**
   * Get the resource attached to a method and assimilate it.
   */
  @Override
  public void prepare(TreeLogger logger, JMethod method)
      throws UnableToCompleteException {
    if (!soundEnabled) {
      return;
    }

    URL[] urls = ResourceGeneratorUtil.findResources(logger, context, method);
    if (urls.length != 1) {
      logger.log(TreeLogger.ERROR, "Exactly one resource must be specified",
          null);
      throw new UnableToCompleteException();
    }

    builder.assimilate(logger, method.getName(), urls[0]);
  }

  /**
   * Create instances of {@link SoundResourcePrototype}.
   */
  @Override
  public void writeAssignment(TreeLogger logger, JMethod method)
      throws UnableToCompleteException {
    SourceWriter sw = context.getSourceWriter();

    sw.print("new ");
    sw.print(SoundResourcePrototype.class.getName());
    sw.println("(");
    sw.indent();
    sw.print("FLASH_ELEMENT, \"");
    sw.print(method.getName());
    sw.print("\", ");
    sw.print(String.valueOf(builder.getIndex(method.getName())));
    sw.print(", ");
    sw.print(String.valueOf(builder.getDuration(method.getName())));
    sw.outdent();
    sw.println(")");
  }

  /**
   * Save the plugins's Element in a class field.
   */
  @Override
  public void writeFields(TreeLogger logger) throws UnableToCompleteException {

    String urlExpression;
    if (soundEnabled) {
      urlExpression = builder.writeBundle(logger, context);
    } else {
      urlExpression = "null";
    }

    SourceWriter sw = context.getSourceWriter();
    sw.print("private final ");
    sw.print(Element.class.getName());
    sw.print(" FLASH_ELEMENT = ");
    sw.print(SoundResourcePrototype.class.getName());
    sw.print(".attach(");
    sw.print(urlExpression);
    sw.println(");");
  }
}