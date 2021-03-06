/* -*- Mode: js; js-indent-level: 2; indent-tabs-mode: nil; tab-width: 2 -*- */
/* vim: set shiftwidth=2 tabstop=2 autoindent cindent expandtab: */
/*
 * Copyright 2013 Mozilla Foundation
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * Random collection of Hacks to get demos work, this file should be empty.
 */

/**
 * This sets the static string fields of the |cls| to be equal to cls.name + "." + field.name.
 */
VM_METHOD_OVERRIDES[
  Multiname.getQualifiedName(Multiname.fromSimpleName("com.google.youtube.model.registerMessages"))
] = function (cls) {
  var className = cls.classInfo.instanceInfo.name.name;
  cls.classInfo.traits.forEach(function (trait) {
    if (trait.isSlot() && trait.typeName.name === "String") {
      cls[Multiname.getQualifiedName(trait.name)] = className + "." + trait.name.name;
    }
  });
  warning("HACK: registerMessages(" + className + ")");
};
VM_METHOD_OVERRIDES[
  Multiname.getQualifiedName(Multiname.fromSimpleName("com.google.youtube.event.registerEvents"))
] = function (cls) {
  var className = cls.classInfo.instanceInfo.name.name;
  cls.classInfo.traits.forEach(function (trait) {
    if (trait.isSlot() && trait.typeName.name === "String") {
      cls[Multiname.getQualifiedName(trait.name)] = className + "." + trait.name.name;
    }
  });
  warning("HACK: registerEvents(" + className + ")");
};
