"use strict";
(() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
    mod
  ));
  var __decorateClass = (decorators, target, key, kind) => {
    var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc(target, key) : target;
    for (var i = decorators.length - 1, decorator; i >= 0; i--)
      if (decorator = decorators[i])
        result = (kind ? decorator(target, key, result) : decorator(result)) || result;
    if (kind && result)
      __defProp(target, key, result);
    return result;
  };

  // node_modules/reflect-metadata/Reflect.js
  var require_Reflect = __commonJS({
    "node_modules/reflect-metadata/Reflect.js"() {
      var Reflect2;
      (function(Reflect3) {
        (function(factory) {
          var root = typeof global === "object" ? global : typeof self === "object" ? self : typeof this === "object" ? this : Function("return this;")();
          var exporter = makeExporter(Reflect3);
          if (typeof root.Reflect === "undefined") {
            root.Reflect = Reflect3;
          } else {
            exporter = makeExporter(root.Reflect, exporter);
          }
          factory(exporter);
          function makeExporter(target, previous) {
            return function(key, value) {
              if (typeof target[key] !== "function") {
                Object.defineProperty(target, key, { configurable: true, writable: true, value });
              }
              if (previous)
                previous(key, value);
            };
          }
        })(function(exporter) {
          var hasOwn = Object.prototype.hasOwnProperty;
          var supportsSymbol = typeof Symbol === "function";
          var toPrimitiveSymbol = supportsSymbol && typeof Symbol.toPrimitive !== "undefined" ? Symbol.toPrimitive : "@@toPrimitive";
          var iteratorSymbol = supportsSymbol && typeof Symbol.iterator !== "undefined" ? Symbol.iterator : "@@iterator";
          var supportsCreate = typeof Object.create === "function";
          var supportsProto = { __proto__: [] } instanceof Array;
          var downLevel = !supportsCreate && !supportsProto;
          var HashMap = {
            create: supportsCreate ? function() {
              return MakeDictionary(/* @__PURE__ */ Object.create(null));
            } : supportsProto ? function() {
              return MakeDictionary({ __proto__: null });
            } : function() {
              return MakeDictionary({});
            },
            has: downLevel ? function(map, key) {
              return hasOwn.call(map, key);
            } : function(map, key) {
              return key in map;
            },
            get: downLevel ? function(map, key) {
              return hasOwn.call(map, key) ? map[key] : void 0;
            } : function(map, key) {
              return map[key];
            }
          };
          var functionPrototype = Object.getPrototypeOf(Function);
          var usePolyfill = typeof process === "object" && process["env"] && process["env"]["REFLECT_METADATA_USE_MAP_POLYFILL"] === "true";
          var _Map = !usePolyfill && typeof Map === "function" && typeof Map.prototype.entries === "function" ? Map : CreateMapPolyfill();
          var _Set = !usePolyfill && typeof Set === "function" && typeof Set.prototype.entries === "function" ? Set : CreateSetPolyfill();
          var _WeakMap = !usePolyfill && typeof WeakMap === "function" ? WeakMap : CreateWeakMapPolyfill();
          var Metadata = new _WeakMap();
          function decorate(decorators, target, propertyKey, attributes) {
            if (!IsUndefined(propertyKey)) {
              if (!IsArray(decorators))
                throw new TypeError();
              if (!IsObject(target))
                throw new TypeError();
              if (!IsObject(attributes) && !IsUndefined(attributes) && !IsNull(attributes))
                throw new TypeError();
              if (IsNull(attributes))
                attributes = void 0;
              propertyKey = ToPropertyKey(propertyKey);
              return DecorateProperty(decorators, target, propertyKey, attributes);
            } else {
              if (!IsArray(decorators))
                throw new TypeError();
              if (!IsConstructor(target))
                throw new TypeError();
              return DecorateConstructor(decorators, target);
            }
          }
          exporter("decorate", decorate);
          function metadata(metadataKey, metadataValue) {
            function decorator(target, propertyKey) {
              if (!IsObject(target))
                throw new TypeError();
              if (!IsUndefined(propertyKey) && !IsPropertyKey(propertyKey))
                throw new TypeError();
              OrdinaryDefineOwnMetadata(metadataKey, metadataValue, target, propertyKey);
            }
            return decorator;
          }
          exporter("metadata", metadata);
          function defineMetadata(metadataKey, metadataValue, target, propertyKey) {
            if (!IsObject(target))
              throw new TypeError();
            if (!IsUndefined(propertyKey))
              propertyKey = ToPropertyKey(propertyKey);
            return OrdinaryDefineOwnMetadata(metadataKey, metadataValue, target, propertyKey);
          }
          exporter("defineMetadata", defineMetadata);
          function hasMetadata(metadataKey, target, propertyKey) {
            if (!IsObject(target))
              throw new TypeError();
            if (!IsUndefined(propertyKey))
              propertyKey = ToPropertyKey(propertyKey);
            return OrdinaryHasMetadata(metadataKey, target, propertyKey);
          }
          exporter("hasMetadata", hasMetadata);
          function hasOwnMetadata(metadataKey, target, propertyKey) {
            if (!IsObject(target))
              throw new TypeError();
            if (!IsUndefined(propertyKey))
              propertyKey = ToPropertyKey(propertyKey);
            return OrdinaryHasOwnMetadata(metadataKey, target, propertyKey);
          }
          exporter("hasOwnMetadata", hasOwnMetadata);
          function getMetadata(metadataKey, target, propertyKey) {
            if (!IsObject(target))
              throw new TypeError();
            if (!IsUndefined(propertyKey))
              propertyKey = ToPropertyKey(propertyKey);
            return OrdinaryGetMetadata(metadataKey, target, propertyKey);
          }
          exporter("getMetadata", getMetadata);
          function getOwnMetadata(metadataKey, target, propertyKey) {
            if (!IsObject(target))
              throw new TypeError();
            if (!IsUndefined(propertyKey))
              propertyKey = ToPropertyKey(propertyKey);
            return OrdinaryGetOwnMetadata(metadataKey, target, propertyKey);
          }
          exporter("getOwnMetadata", getOwnMetadata);
          function getMetadataKeys(target, propertyKey) {
            if (!IsObject(target))
              throw new TypeError();
            if (!IsUndefined(propertyKey))
              propertyKey = ToPropertyKey(propertyKey);
            return OrdinaryMetadataKeys(target, propertyKey);
          }
          exporter("getMetadataKeys", getMetadataKeys);
          function getOwnMetadataKeys(target, propertyKey) {
            if (!IsObject(target))
              throw new TypeError();
            if (!IsUndefined(propertyKey))
              propertyKey = ToPropertyKey(propertyKey);
            return OrdinaryOwnMetadataKeys(target, propertyKey);
          }
          exporter("getOwnMetadataKeys", getOwnMetadataKeys);
          function deleteMetadata(metadataKey, target, propertyKey) {
            if (!IsObject(target))
              throw new TypeError();
            if (!IsUndefined(propertyKey))
              propertyKey = ToPropertyKey(propertyKey);
            var metadataMap = GetOrCreateMetadataMap(target, propertyKey, false);
            if (IsUndefined(metadataMap))
              return false;
            if (!metadataMap.delete(metadataKey))
              return false;
            if (metadataMap.size > 0)
              return true;
            var targetMetadata = Metadata.get(target);
            targetMetadata.delete(propertyKey);
            if (targetMetadata.size > 0)
              return true;
            Metadata.delete(target);
            return true;
          }
          exporter("deleteMetadata", deleteMetadata);
          function DecorateConstructor(decorators, target) {
            for (var i = decorators.length - 1; i >= 0; --i) {
              var decorator = decorators[i];
              var decorated = decorator(target);
              if (!IsUndefined(decorated) && !IsNull(decorated)) {
                if (!IsConstructor(decorated))
                  throw new TypeError();
                target = decorated;
              }
            }
            return target;
          }
          function DecorateProperty(decorators, target, propertyKey, descriptor) {
            for (var i = decorators.length - 1; i >= 0; --i) {
              var decorator = decorators[i];
              var decorated = decorator(target, propertyKey, descriptor);
              if (!IsUndefined(decorated) && !IsNull(decorated)) {
                if (!IsObject(decorated))
                  throw new TypeError();
                descriptor = decorated;
              }
            }
            return descriptor;
          }
          function GetOrCreateMetadataMap(O, P, Create) {
            var targetMetadata = Metadata.get(O);
            if (IsUndefined(targetMetadata)) {
              if (!Create)
                return void 0;
              targetMetadata = new _Map();
              Metadata.set(O, targetMetadata);
            }
            var metadataMap = targetMetadata.get(P);
            if (IsUndefined(metadataMap)) {
              if (!Create)
                return void 0;
              metadataMap = new _Map();
              targetMetadata.set(P, metadataMap);
            }
            return metadataMap;
          }
          function OrdinaryHasMetadata(MetadataKey, O, P) {
            var hasOwn2 = OrdinaryHasOwnMetadata(MetadataKey, O, P);
            if (hasOwn2)
              return true;
            var parent = OrdinaryGetPrototypeOf(O);
            if (!IsNull(parent))
              return OrdinaryHasMetadata(MetadataKey, parent, P);
            return false;
          }
          function OrdinaryHasOwnMetadata(MetadataKey, O, P) {
            var metadataMap = GetOrCreateMetadataMap(O, P, false);
            if (IsUndefined(metadataMap))
              return false;
            return ToBoolean(metadataMap.has(MetadataKey));
          }
          function OrdinaryGetMetadata(MetadataKey, O, P) {
            var hasOwn2 = OrdinaryHasOwnMetadata(MetadataKey, O, P);
            if (hasOwn2)
              return OrdinaryGetOwnMetadata(MetadataKey, O, P);
            var parent = OrdinaryGetPrototypeOf(O);
            if (!IsNull(parent))
              return OrdinaryGetMetadata(MetadataKey, parent, P);
            return void 0;
          }
          function OrdinaryGetOwnMetadata(MetadataKey, O, P) {
            var metadataMap = GetOrCreateMetadataMap(O, P, false);
            if (IsUndefined(metadataMap))
              return void 0;
            return metadataMap.get(MetadataKey);
          }
          function OrdinaryDefineOwnMetadata(MetadataKey, MetadataValue, O, P) {
            var metadataMap = GetOrCreateMetadataMap(O, P, true);
            metadataMap.set(MetadataKey, MetadataValue);
          }
          function OrdinaryMetadataKeys(O, P) {
            var ownKeys = OrdinaryOwnMetadataKeys(O, P);
            var parent = OrdinaryGetPrototypeOf(O);
            if (parent === null)
              return ownKeys;
            var parentKeys = OrdinaryMetadataKeys(parent, P);
            if (parentKeys.length <= 0)
              return ownKeys;
            if (ownKeys.length <= 0)
              return parentKeys;
            var set = new _Set();
            var keys = [];
            for (var _i = 0, ownKeys_1 = ownKeys; _i < ownKeys_1.length; _i++) {
              var key = ownKeys_1[_i];
              var hasKey = set.has(key);
              if (!hasKey) {
                set.add(key);
                keys.push(key);
              }
            }
            for (var _a = 0, parentKeys_1 = parentKeys; _a < parentKeys_1.length; _a++) {
              var key = parentKeys_1[_a];
              var hasKey = set.has(key);
              if (!hasKey) {
                set.add(key);
                keys.push(key);
              }
            }
            return keys;
          }
          function OrdinaryOwnMetadataKeys(O, P) {
            var keys = [];
            var metadataMap = GetOrCreateMetadataMap(O, P, false);
            if (IsUndefined(metadataMap))
              return keys;
            var keysObj = metadataMap.keys();
            var iterator = GetIterator(keysObj);
            var k = 0;
            while (true) {
              var next = IteratorStep(iterator);
              if (!next) {
                keys.length = k;
                return keys;
              }
              var nextValue = IteratorValue(next);
              try {
                keys[k] = nextValue;
              } catch (e) {
                try {
                  IteratorClose(iterator);
                } finally {
                  throw e;
                }
              }
              k++;
            }
          }
          function Type(x) {
            if (x === null)
              return 1;
            switch (typeof x) {
              case "undefined":
                return 0;
              case "boolean":
                return 2;
              case "string":
                return 3;
              case "symbol":
                return 4;
              case "number":
                return 5;
              case "object":
                return x === null ? 1 : 6;
              default:
                return 6;
            }
          }
          function IsUndefined(x) {
            return x === void 0;
          }
          function IsNull(x) {
            return x === null;
          }
          function IsSymbol(x) {
            return typeof x === "symbol";
          }
          function IsObject(x) {
            return typeof x === "object" ? x !== null : typeof x === "function";
          }
          function ToPrimitive(input, PreferredType) {
            switch (Type(input)) {
              case 0:
                return input;
              case 1:
                return input;
              case 2:
                return input;
              case 3:
                return input;
              case 4:
                return input;
              case 5:
                return input;
            }
            var hint = PreferredType === 3 ? "string" : PreferredType === 5 ? "number" : "default";
            var exoticToPrim = GetMethod(input, toPrimitiveSymbol);
            if (exoticToPrim !== void 0) {
              var result = exoticToPrim.call(input, hint);
              if (IsObject(result))
                throw new TypeError();
              return result;
            }
            return OrdinaryToPrimitive(input, hint === "default" ? "number" : hint);
          }
          function OrdinaryToPrimitive(O, hint) {
            if (hint === "string") {
              var toString_1 = O.toString;
              if (IsCallable(toString_1)) {
                var result = toString_1.call(O);
                if (!IsObject(result))
                  return result;
              }
              var valueOf = O.valueOf;
              if (IsCallable(valueOf)) {
                var result = valueOf.call(O);
                if (!IsObject(result))
                  return result;
              }
            } else {
              var valueOf = O.valueOf;
              if (IsCallable(valueOf)) {
                var result = valueOf.call(O);
                if (!IsObject(result))
                  return result;
              }
              var toString_2 = O.toString;
              if (IsCallable(toString_2)) {
                var result = toString_2.call(O);
                if (!IsObject(result))
                  return result;
              }
            }
            throw new TypeError();
          }
          function ToBoolean(argument) {
            return !!argument;
          }
          function ToString(argument) {
            return "" + argument;
          }
          function ToPropertyKey(argument) {
            var key = ToPrimitive(argument, 3);
            if (IsSymbol(key))
              return key;
            return ToString(key);
          }
          function IsArray(argument) {
            return Array.isArray ? Array.isArray(argument) : argument instanceof Object ? argument instanceof Array : Object.prototype.toString.call(argument) === "[object Array]";
          }
          function IsCallable(argument) {
            return typeof argument === "function";
          }
          function IsConstructor(argument) {
            return typeof argument === "function";
          }
          function IsPropertyKey(argument) {
            switch (Type(argument)) {
              case 3:
                return true;
              case 4:
                return true;
              default:
                return false;
            }
          }
          function GetMethod(V, P) {
            var func = V[P];
            if (func === void 0 || func === null)
              return void 0;
            if (!IsCallable(func))
              throw new TypeError();
            return func;
          }
          function GetIterator(obj) {
            var method = GetMethod(obj, iteratorSymbol);
            if (!IsCallable(method))
              throw new TypeError();
            var iterator = method.call(obj);
            if (!IsObject(iterator))
              throw new TypeError();
            return iterator;
          }
          function IteratorValue(iterResult) {
            return iterResult.value;
          }
          function IteratorStep(iterator) {
            var result = iterator.next();
            return result.done ? false : result;
          }
          function IteratorClose(iterator) {
            var f = iterator["return"];
            if (f)
              f.call(iterator);
          }
          function OrdinaryGetPrototypeOf(O) {
            var proto = Object.getPrototypeOf(O);
            if (typeof O !== "function" || O === functionPrototype)
              return proto;
            if (proto !== functionPrototype)
              return proto;
            var prototype = O.prototype;
            var prototypeProto = prototype && Object.getPrototypeOf(prototype);
            if (prototypeProto == null || prototypeProto === Object.prototype)
              return proto;
            var constructor = prototypeProto.constructor;
            if (typeof constructor !== "function")
              return proto;
            if (constructor === O)
              return proto;
            return constructor;
          }
          function CreateMapPolyfill() {
            var cacheSentinel = {};
            var arraySentinel = [];
            var MapIterator = function() {
              function MapIterator2(keys, values, selector) {
                this._index = 0;
                this._keys = keys;
                this._values = values;
                this._selector = selector;
              }
              MapIterator2.prototype["@@iterator"] = function() {
                return this;
              };
              MapIterator2.prototype[iteratorSymbol] = function() {
                return this;
              };
              MapIterator2.prototype.next = function() {
                var index = this._index;
                if (index >= 0 && index < this._keys.length) {
                  var result = this._selector(this._keys[index], this._values[index]);
                  if (index + 1 >= this._keys.length) {
                    this._index = -1;
                    this._keys = arraySentinel;
                    this._values = arraySentinel;
                  } else {
                    this._index++;
                  }
                  return { value: result, done: false };
                }
                return { value: void 0, done: true };
              };
              MapIterator2.prototype.throw = function(error) {
                if (this._index >= 0) {
                  this._index = -1;
                  this._keys = arraySentinel;
                  this._values = arraySentinel;
                }
                throw error;
              };
              MapIterator2.prototype.return = function(value) {
                if (this._index >= 0) {
                  this._index = -1;
                  this._keys = arraySentinel;
                  this._values = arraySentinel;
                }
                return { value, done: true };
              };
              return MapIterator2;
            }();
            return function() {
              function Map2() {
                this._keys = [];
                this._values = [];
                this._cacheKey = cacheSentinel;
                this._cacheIndex = -2;
              }
              Object.defineProperty(Map2.prototype, "size", {
                get: function() {
                  return this._keys.length;
                },
                enumerable: true,
                configurable: true
              });
              Map2.prototype.has = function(key) {
                return this._find(key, false) >= 0;
              };
              Map2.prototype.get = function(key) {
                var index = this._find(key, false);
                return index >= 0 ? this._values[index] : void 0;
              };
              Map2.prototype.set = function(key, value) {
                var index = this._find(key, true);
                this._values[index] = value;
                return this;
              };
              Map2.prototype.delete = function(key) {
                var index = this._find(key, false);
                if (index >= 0) {
                  var size = this._keys.length;
                  for (var i = index + 1; i < size; i++) {
                    this._keys[i - 1] = this._keys[i];
                    this._values[i - 1] = this._values[i];
                  }
                  this._keys.length--;
                  this._values.length--;
                  if (key === this._cacheKey) {
                    this._cacheKey = cacheSentinel;
                    this._cacheIndex = -2;
                  }
                  return true;
                }
                return false;
              };
              Map2.prototype.clear = function() {
                this._keys.length = 0;
                this._values.length = 0;
                this._cacheKey = cacheSentinel;
                this._cacheIndex = -2;
              };
              Map2.prototype.keys = function() {
                return new MapIterator(this._keys, this._values, getKey);
              };
              Map2.prototype.values = function() {
                return new MapIterator(this._keys, this._values, getValue);
              };
              Map2.prototype.entries = function() {
                return new MapIterator(this._keys, this._values, getEntry);
              };
              Map2.prototype["@@iterator"] = function() {
                return this.entries();
              };
              Map2.prototype[iteratorSymbol] = function() {
                return this.entries();
              };
              Map2.prototype._find = function(key, insert) {
                if (this._cacheKey !== key) {
                  this._cacheIndex = this._keys.indexOf(this._cacheKey = key);
                }
                if (this._cacheIndex < 0 && insert) {
                  this._cacheIndex = this._keys.length;
                  this._keys.push(key);
                  this._values.push(void 0);
                }
                return this._cacheIndex;
              };
              return Map2;
            }();
            function getKey(key, _) {
              return key;
            }
            function getValue(_, value) {
              return value;
            }
            function getEntry(key, value) {
              return [key, value];
            }
          }
          function CreateSetPolyfill() {
            return function() {
              function Set2() {
                this._map = new _Map();
              }
              Object.defineProperty(Set2.prototype, "size", {
                get: function() {
                  return this._map.size;
                },
                enumerable: true,
                configurable: true
              });
              Set2.prototype.has = function(value) {
                return this._map.has(value);
              };
              Set2.prototype.add = function(value) {
                return this._map.set(value, value), this;
              };
              Set2.prototype.delete = function(value) {
                return this._map.delete(value);
              };
              Set2.prototype.clear = function() {
                this._map.clear();
              };
              Set2.prototype.keys = function() {
                return this._map.keys();
              };
              Set2.prototype.values = function() {
                return this._map.values();
              };
              Set2.prototype.entries = function() {
                return this._map.entries();
              };
              Set2.prototype["@@iterator"] = function() {
                return this.keys();
              };
              Set2.prototype[iteratorSymbol] = function() {
                return this.keys();
              };
              return Set2;
            }();
          }
          function CreateWeakMapPolyfill() {
            var UUID_SIZE = 16;
            var keys = HashMap.create();
            var rootKey = CreateUniqueKey();
            return function() {
              function WeakMap2() {
                this._key = CreateUniqueKey();
              }
              WeakMap2.prototype.has = function(target) {
                var table = GetOrCreateWeakMapTable(target, false);
                return table !== void 0 ? HashMap.has(table, this._key) : false;
              };
              WeakMap2.prototype.get = function(target) {
                var table = GetOrCreateWeakMapTable(target, false);
                return table !== void 0 ? HashMap.get(table, this._key) : void 0;
              };
              WeakMap2.prototype.set = function(target, value) {
                var table = GetOrCreateWeakMapTable(target, true);
                table[this._key] = value;
                return this;
              };
              WeakMap2.prototype.delete = function(target) {
                var table = GetOrCreateWeakMapTable(target, false);
                return table !== void 0 ? delete table[this._key] : false;
              };
              WeakMap2.prototype.clear = function() {
                this._key = CreateUniqueKey();
              };
              return WeakMap2;
            }();
            function CreateUniqueKey() {
              var key;
              do
                key = "@@WeakMap@@" + CreateUUID();
              while (HashMap.has(keys, key));
              keys[key] = true;
              return key;
            }
            function GetOrCreateWeakMapTable(target, create) {
              if (!hasOwn.call(target, rootKey)) {
                if (!create)
                  return void 0;
                Object.defineProperty(target, rootKey, { value: HashMap.create() });
              }
              return target[rootKey];
            }
            function FillRandomBytes(buffer, size) {
              for (var i = 0; i < size; ++i)
                buffer[i] = Math.random() * 255 | 0;
              return buffer;
            }
            function GenRandomBytes(size) {
              if (typeof Uint8Array === "function") {
                if (typeof crypto !== "undefined")
                  return crypto.getRandomValues(new Uint8Array(size));
                if (typeof msCrypto !== "undefined")
                  return msCrypto.getRandomValues(new Uint8Array(size));
                return FillRandomBytes(new Uint8Array(size), size);
              }
              return FillRandomBytes(new Array(size), size);
            }
            function CreateUUID() {
              var data = GenRandomBytes(UUID_SIZE);
              data[6] = data[6] & 79 | 64;
              data[8] = data[8] & 191 | 128;
              var result = "";
              for (var offset = 0; offset < UUID_SIZE; ++offset) {
                var byte = data[offset];
                if (offset === 4 || offset === 6 || offset === 8)
                  result += "-";
                if (byte < 16)
                  result += "0";
                result += byte.toString(16).toLowerCase();
              }
              return result;
            }
          }
          function MakeDictionary(obj) {
            obj.__ = void 0;
            delete obj.__;
            return obj;
          }
        });
      })(Reflect2 || (Reflect2 = {}));
    }
  });

  // node_modules/starboy-framework/dist/mocks/index.js
  var require_mocks = __commonJS({
    "node_modules/starboy-framework/dist/mocks/index.js"() {
      global.GetCurrentResourceName || (global.GetCurrentResourceName = () => "current_resource_name");
      global.onNet || (global.onNet = (...args) => {
        console.log("ON NET MOCK", args);
      });
      global.emitNet || (global.emitNet = (...args) => {
        console.log("EMIT NET MOCK", args);
      });
      global.RegisterCommand || (global.RegisterCommand = (...args) => {
        console.log("REGISTER COMMAND MOCK", args);
      });
      global.emit || (global.emit = (...args) => {
        console.log("EMIT MOCK", args);
      });
      global.on || (global.on = (...args) => {
        console.log("ON MOCK", args);
      });
      global.exports || (global.exports = (...args) => {
        console.log("EXPORTS MOCK", args);
      });
      global.setTick || (global.setTick = (...args) => {
        console.log("SET TICK MOCK", args);
      });
    }
  });

  // node_modules/starboy-framework/dist/packages/core/const/metadata-keys.constant.js
  var require_metadata_keys_constant = __commonJS({
    "node_modules/starboy-framework/dist/packages/core/const/metadata-keys.constant.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.ONREADY = exports.CONTAINER = exports.EXPORT_CALLBACK = exports.LAZYINJECT = exports.TICK = exports.PARAMETER = exports.GUARD = exports.LOCAL_EVENT = exports.CHAT_COMMAND = exports.EXPORT = exports.NET_CALLBACK = exports.NET_EVENT = exports.NUI = exports.EVENT = exports.CONTROLLER = exports.PROXY = exports.TUNNEL = void 0;
      exports.TUNNEL = "orp:metadata:tunnel";
      exports.PROXY = "orp:metadata:proxy";
      exports.CONTROLLER = "orp:metadata:controller";
      exports.EVENT = "orp:metadata:event";
      exports.NUI = "orp:metadata:nui";
      exports.NET_EVENT = "orp:metadata:net-event";
      exports.NET_CALLBACK = "orp:metadata:net-callback";
      exports.EXPORT = "orp:metadata:export";
      exports.CHAT_COMMAND = "orp:metadata:chat-command";
      exports.LOCAL_EVENT = "orp:metadata:local-event";
      exports.GUARD = "orp:metadata:guard";
      exports.PARAMETER = "orp:metadata:parameter";
      exports.TICK = "orp:metadata:tick";
      exports.LAZYINJECT = "orp:metadata:lazyinject";
      exports.EXPORT_CALLBACK = "orp:export-callbacks";
      exports.CONTAINER = "orp:metadata:container";
      exports.ONREADY = "orp:metadata:onready";
    }
  });

  // node_modules/starboy-framework/dist/packages/core/const/platform.constant.js
  var require_platform_constant = __commonJS({
    "node_modules/starboy-framework/dist/packages/core/const/platform.constant.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.RESOURCE_NAME = void 0;
      exports.RESOURCE_NAME = GetCurrentResourceName();
    }
  });

  // node_modules/starboy-framework/dist/packages/core/const/index.js
  var require_const = __commonJS({
    "node_modules/starboy-framework/dist/packages/core/const/index.js"(exports) {
      "use strict";
      var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
        if (k2 === void 0)
          k2 = k;
        var desc = Object.getOwnPropertyDescriptor(m, k);
        if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
          desc = { enumerable: true, get: function() {
            return m[k];
          } };
        }
        Object.defineProperty(o, k2, desc);
      } : function(o, m, k, k2) {
        if (k2 === void 0)
          k2 = k;
        o[k2] = m[k];
      });
      var __exportStar = exports && exports.__exportStar || function(m, exports2) {
        for (var p in m)
          if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p))
            __createBinding(exports2, m, p);
      };
      Object.defineProperty(exports, "__esModule", { value: true });
      __exportStar(require_metadata_keys_constant(), exports);
      __exportStar(require_platform_constant(), exports);
    }
  });

  // node_modules/inversify/lib/constants/metadata_keys.js
  var require_metadata_keys = __commonJS({
    "node_modules/inversify/lib/constants/metadata_keys.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.NON_CUSTOM_TAG_KEYS = exports.PRE_DESTROY = exports.POST_CONSTRUCT = exports.DESIGN_PARAM_TYPES = exports.PARAM_TYPES = exports.TAGGED_PROP = exports.TAGGED = exports.MULTI_INJECT_TAG = exports.INJECT_TAG = exports.OPTIONAL_TAG = exports.UNMANAGED_TAG = exports.NAME_TAG = exports.NAMED_TAG = void 0;
      exports.NAMED_TAG = "named";
      exports.NAME_TAG = "name";
      exports.UNMANAGED_TAG = "unmanaged";
      exports.OPTIONAL_TAG = "optional";
      exports.INJECT_TAG = "inject";
      exports.MULTI_INJECT_TAG = "multi_inject";
      exports.TAGGED = "inversify:tagged";
      exports.TAGGED_PROP = "inversify:tagged_props";
      exports.PARAM_TYPES = "inversify:paramtypes";
      exports.DESIGN_PARAM_TYPES = "design:paramtypes";
      exports.POST_CONSTRUCT = "post_construct";
      exports.PRE_DESTROY = "pre_destroy";
      function getNonCustomTagKeys() {
        return [
          exports.INJECT_TAG,
          exports.MULTI_INJECT_TAG,
          exports.NAME_TAG,
          exports.UNMANAGED_TAG,
          exports.NAMED_TAG,
          exports.OPTIONAL_TAG
        ];
      }
      exports.NON_CUSTOM_TAG_KEYS = getNonCustomTagKeys();
    }
  });

  // node_modules/inversify/lib/constants/literal_types.js
  var require_literal_types = __commonJS({
    "node_modules/inversify/lib/constants/literal_types.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.TargetTypeEnum = exports.BindingTypeEnum = exports.BindingScopeEnum = void 0;
      var BindingScopeEnum = {
        Request: "Request",
        Singleton: "Singleton",
        Transient: "Transient"
      };
      exports.BindingScopeEnum = BindingScopeEnum;
      var BindingTypeEnum = {
        ConstantValue: "ConstantValue",
        Constructor: "Constructor",
        DynamicValue: "DynamicValue",
        Factory: "Factory",
        Function: "Function",
        Instance: "Instance",
        Invalid: "Invalid",
        Provider: "Provider"
      };
      exports.BindingTypeEnum = BindingTypeEnum;
      var TargetTypeEnum = {
        ClassProperty: "ClassProperty",
        ConstructorArgument: "ConstructorArgument",
        Variable: "Variable"
      };
      exports.TargetTypeEnum = TargetTypeEnum;
    }
  });

  // node_modules/inversify/lib/utils/id.js
  var require_id = __commonJS({
    "node_modules/inversify/lib/utils/id.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.id = void 0;
      var idCounter = 0;
      function id() {
        return idCounter++;
      }
      exports.id = id;
    }
  });

  // node_modules/inversify/lib/bindings/binding.js
  var require_binding = __commonJS({
    "node_modules/inversify/lib/bindings/binding.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.Binding = void 0;
      var literal_types_1 = require_literal_types();
      var id_1 = require_id();
      var Binding = function() {
        function Binding2(serviceIdentifier, scope) {
          this.id = (0, id_1.id)();
          this.activated = false;
          this.serviceIdentifier = serviceIdentifier;
          this.scope = scope;
          this.type = literal_types_1.BindingTypeEnum.Invalid;
          this.constraint = function(request) {
            return true;
          };
          this.implementationType = null;
          this.cache = null;
          this.factory = null;
          this.provider = null;
          this.onActivation = null;
          this.onDeactivation = null;
          this.dynamicValue = null;
        }
        Binding2.prototype.clone = function() {
          var clone = new Binding2(this.serviceIdentifier, this.scope);
          clone.activated = clone.scope === literal_types_1.BindingScopeEnum.Singleton ? this.activated : false;
          clone.implementationType = this.implementationType;
          clone.dynamicValue = this.dynamicValue;
          clone.scope = this.scope;
          clone.type = this.type;
          clone.factory = this.factory;
          clone.provider = this.provider;
          clone.constraint = this.constraint;
          clone.onActivation = this.onActivation;
          clone.onDeactivation = this.onDeactivation;
          clone.cache = this.cache;
          return clone;
        };
        return Binding2;
      }();
      exports.Binding = Binding;
    }
  });

  // node_modules/inversify/lib/constants/error_msgs.js
  var require_error_msgs = __commonJS({
    "node_modules/inversify/lib/constants/error_msgs.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.STACK_OVERFLOW = exports.CIRCULAR_DEPENDENCY_IN_FACTORY = exports.ON_DEACTIVATION_ERROR = exports.PRE_DESTROY_ERROR = exports.POST_CONSTRUCT_ERROR = exports.ASYNC_UNBIND_REQUIRED = exports.MULTIPLE_POST_CONSTRUCT_METHODS = exports.MULTIPLE_PRE_DESTROY_METHODS = exports.CONTAINER_OPTIONS_INVALID_SKIP_BASE_CHECK = exports.CONTAINER_OPTIONS_INVALID_AUTO_BIND_INJECTABLE = exports.CONTAINER_OPTIONS_INVALID_DEFAULT_SCOPE = exports.CONTAINER_OPTIONS_MUST_BE_AN_OBJECT = exports.ARGUMENTS_LENGTH_MISMATCH = exports.INVALID_DECORATOR_OPERATION = exports.INVALID_TO_SELF_VALUE = exports.LAZY_IN_SYNC = exports.INVALID_FUNCTION_BINDING = exports.INVALID_MIDDLEWARE_RETURN = exports.NO_MORE_SNAPSHOTS_AVAILABLE = exports.INVALID_BINDING_TYPE = exports.NOT_IMPLEMENTED = exports.CIRCULAR_DEPENDENCY = exports.UNDEFINED_INJECT_ANNOTATION = exports.MISSING_INJECT_ANNOTATION = exports.MISSING_INJECTABLE_ANNOTATION = exports.NOT_REGISTERED = exports.CANNOT_UNBIND = exports.AMBIGUOUS_MATCH = exports.KEY_NOT_FOUND = exports.NULL_ARGUMENT = exports.DUPLICATED_METADATA = exports.DUPLICATED_INJECTABLE_DECORATOR = void 0;
      exports.DUPLICATED_INJECTABLE_DECORATOR = "Cannot apply @injectable decorator multiple times.";
      exports.DUPLICATED_METADATA = "Metadata key was used more than once in a parameter:";
      exports.NULL_ARGUMENT = "NULL argument";
      exports.KEY_NOT_FOUND = "Key Not Found";
      exports.AMBIGUOUS_MATCH = "Ambiguous match found for serviceIdentifier:";
      exports.CANNOT_UNBIND = "Could not unbind serviceIdentifier:";
      exports.NOT_REGISTERED = "No matching bindings found for serviceIdentifier:";
      exports.MISSING_INJECTABLE_ANNOTATION = "Missing required @injectable annotation in:";
      exports.MISSING_INJECT_ANNOTATION = "Missing required @inject or @multiInject annotation in:";
      var UNDEFINED_INJECT_ANNOTATION = function(name) {
        return "@inject called with undefined this could mean that the class " + name + " has a circular dependency problem. You can use a LazyServiceIdentifier to  overcome this limitation.";
      };
      exports.UNDEFINED_INJECT_ANNOTATION = UNDEFINED_INJECT_ANNOTATION;
      exports.CIRCULAR_DEPENDENCY = "Circular dependency found:";
      exports.NOT_IMPLEMENTED = "Sorry, this feature is not fully implemented yet.";
      exports.INVALID_BINDING_TYPE = "Invalid binding type:";
      exports.NO_MORE_SNAPSHOTS_AVAILABLE = "No snapshot available to restore.";
      exports.INVALID_MIDDLEWARE_RETURN = "Invalid return type in middleware. Middleware must return!";
      exports.INVALID_FUNCTION_BINDING = "Value provided to function binding must be a function!";
      var LAZY_IN_SYNC = function(key) {
        return "You are attempting to construct '" + key + "' in a synchronous way\n but it has asynchronous dependencies.";
      };
      exports.LAZY_IN_SYNC = LAZY_IN_SYNC;
      exports.INVALID_TO_SELF_VALUE = "The toSelf function can only be applied when a constructor is used as service identifier";
      exports.INVALID_DECORATOR_OPERATION = "The @inject @multiInject @tagged and @named decorators must be applied to the parameters of a class constructor or a class property.";
      var ARGUMENTS_LENGTH_MISMATCH = function() {
        var values = [];
        for (var _i = 0; _i < arguments.length; _i++) {
          values[_i] = arguments[_i];
        }
        return "The number of constructor arguments in the derived class " + (values[0] + " must be >= than the number of constructor arguments of its base class.");
      };
      exports.ARGUMENTS_LENGTH_MISMATCH = ARGUMENTS_LENGTH_MISMATCH;
      exports.CONTAINER_OPTIONS_MUST_BE_AN_OBJECT = "Invalid Container constructor argument. Container options must be an object.";
      exports.CONTAINER_OPTIONS_INVALID_DEFAULT_SCOPE = 'Invalid Container option. Default scope must be a string ("singleton" or "transient").';
      exports.CONTAINER_OPTIONS_INVALID_AUTO_BIND_INJECTABLE = "Invalid Container option. Auto bind injectable must be a boolean";
      exports.CONTAINER_OPTIONS_INVALID_SKIP_BASE_CHECK = "Invalid Container option. Skip base check must be a boolean";
      exports.MULTIPLE_PRE_DESTROY_METHODS = "Cannot apply @preDestroy decorator multiple times in the same class";
      exports.MULTIPLE_POST_CONSTRUCT_METHODS = "Cannot apply @postConstruct decorator multiple times in the same class";
      exports.ASYNC_UNBIND_REQUIRED = "Attempting to unbind dependency with asynchronous destruction (@preDestroy or onDeactivation)";
      var POST_CONSTRUCT_ERROR = function(clazz, errorMessage) {
        return "@postConstruct error in class " + clazz + ": " + errorMessage;
      };
      exports.POST_CONSTRUCT_ERROR = POST_CONSTRUCT_ERROR;
      var PRE_DESTROY_ERROR = function(clazz, errorMessage) {
        return "@preDestroy error in class " + clazz + ": " + errorMessage;
      };
      exports.PRE_DESTROY_ERROR = PRE_DESTROY_ERROR;
      var ON_DEACTIVATION_ERROR = function(clazz, errorMessage) {
        return "onDeactivation() error in class " + clazz + ": " + errorMessage;
      };
      exports.ON_DEACTIVATION_ERROR = ON_DEACTIVATION_ERROR;
      var CIRCULAR_DEPENDENCY_IN_FACTORY = function(factoryType, serviceIdentifier) {
        return "It looks like there is a circular dependency in one of the '" + factoryType + "' bindings. Please investigate bindings with " + ("service identifier '" + serviceIdentifier + "'.");
      };
      exports.CIRCULAR_DEPENDENCY_IN_FACTORY = CIRCULAR_DEPENDENCY_IN_FACTORY;
      exports.STACK_OVERFLOW = "Maximum call stack size exceeded";
    }
  });

  // node_modules/inversify/lib/planning/metadata_reader.js
  var require_metadata_reader = __commonJS({
    "node_modules/inversify/lib/planning/metadata_reader.js"(exports) {
      "use strict";
      var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
        if (k2 === void 0)
          k2 = k;
        Object.defineProperty(o, k2, { enumerable: true, get: function() {
          return m[k];
        } });
      } : function(o, m, k, k2) {
        if (k2 === void 0)
          k2 = k;
        o[k2] = m[k];
      });
      var __setModuleDefault = exports && exports.__setModuleDefault || (Object.create ? function(o, v) {
        Object.defineProperty(o, "default", { enumerable: true, value: v });
      } : function(o, v) {
        o["default"] = v;
      });
      var __importStar = exports && exports.__importStar || function(mod) {
        if (mod && mod.__esModule)
          return mod;
        var result = {};
        if (mod != null) {
          for (var k in mod)
            if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
              __createBinding(result, mod, k);
        }
        __setModuleDefault(result, mod);
        return result;
      };
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.MetadataReader = void 0;
      var METADATA_KEY = __importStar(require_metadata_keys());
      var MetadataReader = function() {
        function MetadataReader2() {
        }
        MetadataReader2.prototype.getConstructorMetadata = function(constructorFunc) {
          var compilerGeneratedMetadata = Reflect.getMetadata(METADATA_KEY.PARAM_TYPES, constructorFunc);
          var userGeneratedMetadata = Reflect.getMetadata(METADATA_KEY.TAGGED, constructorFunc);
          return {
            compilerGeneratedMetadata,
            userGeneratedMetadata: userGeneratedMetadata || {}
          };
        };
        MetadataReader2.prototype.getPropertiesMetadata = function(constructorFunc) {
          var userGeneratedMetadata = Reflect.getMetadata(METADATA_KEY.TAGGED_PROP, constructorFunc) || [];
          return userGeneratedMetadata;
        };
        return MetadataReader2;
      }();
      exports.MetadataReader = MetadataReader;
    }
  });

  // node_modules/inversify/lib/bindings/binding_count.js
  var require_binding_count = __commonJS({
    "node_modules/inversify/lib/bindings/binding_count.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.BindingCount = void 0;
      exports.BindingCount = {
        MultipleBindingsAvailable: 2,
        NoBindingsAvailable: 0,
        OnlyOneBindingAvailable: 1
      };
    }
  });

  // node_modules/inversify/lib/utils/exceptions.js
  var require_exceptions = __commonJS({
    "node_modules/inversify/lib/utils/exceptions.js"(exports) {
      "use strict";
      var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
        if (k2 === void 0)
          k2 = k;
        Object.defineProperty(o, k2, { enumerable: true, get: function() {
          return m[k];
        } });
      } : function(o, m, k, k2) {
        if (k2 === void 0)
          k2 = k;
        o[k2] = m[k];
      });
      var __setModuleDefault = exports && exports.__setModuleDefault || (Object.create ? function(o, v) {
        Object.defineProperty(o, "default", { enumerable: true, value: v });
      } : function(o, v) {
        o["default"] = v;
      });
      var __importStar = exports && exports.__importStar || function(mod) {
        if (mod && mod.__esModule)
          return mod;
        var result = {};
        if (mod != null) {
          for (var k in mod)
            if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
              __createBinding(result, mod, k);
        }
        __setModuleDefault(result, mod);
        return result;
      };
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.tryAndThrowErrorIfStackOverflow = exports.isStackOverflowExeption = void 0;
      var ERROR_MSGS = __importStar(require_error_msgs());
      function isStackOverflowExeption(error) {
        return error instanceof RangeError || error.message === ERROR_MSGS.STACK_OVERFLOW;
      }
      exports.isStackOverflowExeption = isStackOverflowExeption;
      var tryAndThrowErrorIfStackOverflow = function(fn, errorCallback) {
        try {
          return fn();
        } catch (error) {
          if (isStackOverflowExeption(error)) {
            error = errorCallback();
          }
          throw error;
        }
      };
      exports.tryAndThrowErrorIfStackOverflow = tryAndThrowErrorIfStackOverflow;
    }
  });

  // node_modules/inversify/lib/utils/serialization.js
  var require_serialization = __commonJS({
    "node_modules/inversify/lib/utils/serialization.js"(exports) {
      "use strict";
      var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
        if (k2 === void 0)
          k2 = k;
        Object.defineProperty(o, k2, { enumerable: true, get: function() {
          return m[k];
        } });
      } : function(o, m, k, k2) {
        if (k2 === void 0)
          k2 = k;
        o[k2] = m[k];
      });
      var __setModuleDefault = exports && exports.__setModuleDefault || (Object.create ? function(o, v) {
        Object.defineProperty(o, "default", { enumerable: true, value: v });
      } : function(o, v) {
        o["default"] = v;
      });
      var __importStar = exports && exports.__importStar || function(mod) {
        if (mod && mod.__esModule)
          return mod;
        var result = {};
        if (mod != null) {
          for (var k in mod)
            if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
              __createBinding(result, mod, k);
        }
        __setModuleDefault(result, mod);
        return result;
      };
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.getSymbolDescription = exports.circularDependencyToException = exports.listMetadataForTarget = exports.listRegisteredBindingsForServiceIdentifier = exports.getServiceIdentifierAsString = exports.getFunctionName = void 0;
      var ERROR_MSGS = __importStar(require_error_msgs());
      function getServiceIdentifierAsString(serviceIdentifier) {
        if (typeof serviceIdentifier === "function") {
          var _serviceIdentifier = serviceIdentifier;
          return _serviceIdentifier.name;
        } else if (typeof serviceIdentifier === "symbol") {
          return serviceIdentifier.toString();
        } else {
          var _serviceIdentifier = serviceIdentifier;
          return _serviceIdentifier;
        }
      }
      exports.getServiceIdentifierAsString = getServiceIdentifierAsString;
      function listRegisteredBindingsForServiceIdentifier(container, serviceIdentifier, getBindings) {
        var registeredBindingsList = "";
        var registeredBindings = getBindings(container, serviceIdentifier);
        if (registeredBindings.length !== 0) {
          registeredBindingsList = "\nRegistered bindings:";
          registeredBindings.forEach(function(binding) {
            var name = "Object";
            if (binding.implementationType !== null) {
              name = getFunctionName(binding.implementationType);
            }
            registeredBindingsList = registeredBindingsList + "\n " + name;
            if (binding.constraint.metaData) {
              registeredBindingsList = registeredBindingsList + " - " + binding.constraint.metaData;
            }
          });
        }
        return registeredBindingsList;
      }
      exports.listRegisteredBindingsForServiceIdentifier = listRegisteredBindingsForServiceIdentifier;
      function alreadyDependencyChain(request, serviceIdentifier) {
        if (request.parentRequest === null) {
          return false;
        } else if (request.parentRequest.serviceIdentifier === serviceIdentifier) {
          return true;
        } else {
          return alreadyDependencyChain(request.parentRequest, serviceIdentifier);
        }
      }
      function dependencyChainToString(request) {
        function _createStringArr(req, result) {
          if (result === void 0) {
            result = [];
          }
          var serviceIdentifier = getServiceIdentifierAsString(req.serviceIdentifier);
          result.push(serviceIdentifier);
          if (req.parentRequest !== null) {
            return _createStringArr(req.parentRequest, result);
          }
          return result;
        }
        var stringArr = _createStringArr(request);
        return stringArr.reverse().join(" --> ");
      }
      function circularDependencyToException(request) {
        request.childRequests.forEach(function(childRequest) {
          if (alreadyDependencyChain(childRequest, childRequest.serviceIdentifier)) {
            var services = dependencyChainToString(childRequest);
            throw new Error(ERROR_MSGS.CIRCULAR_DEPENDENCY + " " + services);
          } else {
            circularDependencyToException(childRequest);
          }
        });
      }
      exports.circularDependencyToException = circularDependencyToException;
      function listMetadataForTarget(serviceIdentifierString, target) {
        if (target.isTagged() || target.isNamed()) {
          var m_1 = "";
          var namedTag = target.getNamedTag();
          var otherTags = target.getCustomTags();
          if (namedTag !== null) {
            m_1 += namedTag.toString() + "\n";
          }
          if (otherTags !== null) {
            otherTags.forEach(function(tag) {
              m_1 += tag.toString() + "\n";
            });
          }
          return " " + serviceIdentifierString + "\n " + serviceIdentifierString + " - " + m_1;
        } else {
          return " " + serviceIdentifierString;
        }
      }
      exports.listMetadataForTarget = listMetadataForTarget;
      function getFunctionName(func) {
        if (func.name) {
          return func.name;
        } else {
          var name_1 = func.toString();
          var match = name_1.match(/^function\s*([^\s(]+)/);
          return match ? match[1] : "Anonymous function: " + name_1;
        }
      }
      exports.getFunctionName = getFunctionName;
      function getSymbolDescription(symbol) {
        return symbol.toString().slice(7, -1);
      }
      exports.getSymbolDescription = getSymbolDescription;
    }
  });

  // node_modules/inversify/lib/planning/context.js
  var require_context = __commonJS({
    "node_modules/inversify/lib/planning/context.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.Context = void 0;
      var id_1 = require_id();
      var Context = function() {
        function Context2(container) {
          this.id = (0, id_1.id)();
          this.container = container;
        }
        Context2.prototype.addPlan = function(plan) {
          this.plan = plan;
        };
        Context2.prototype.setCurrentRequest = function(currentRequest) {
          this.currentRequest = currentRequest;
        };
        return Context2;
      }();
      exports.Context = Context;
    }
  });

  // node_modules/inversify/lib/planning/metadata.js
  var require_metadata = __commonJS({
    "node_modules/inversify/lib/planning/metadata.js"(exports) {
      "use strict";
      var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
        if (k2 === void 0)
          k2 = k;
        Object.defineProperty(o, k2, { enumerable: true, get: function() {
          return m[k];
        } });
      } : function(o, m, k, k2) {
        if (k2 === void 0)
          k2 = k;
        o[k2] = m[k];
      });
      var __setModuleDefault = exports && exports.__setModuleDefault || (Object.create ? function(o, v) {
        Object.defineProperty(o, "default", { enumerable: true, value: v });
      } : function(o, v) {
        o["default"] = v;
      });
      var __importStar = exports && exports.__importStar || function(mod) {
        if (mod && mod.__esModule)
          return mod;
        var result = {};
        if (mod != null) {
          for (var k in mod)
            if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
              __createBinding(result, mod, k);
        }
        __setModuleDefault(result, mod);
        return result;
      };
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.Metadata = void 0;
      var METADATA_KEY = __importStar(require_metadata_keys());
      var Metadata = function() {
        function Metadata2(key, value) {
          this.key = key;
          this.value = value;
        }
        Metadata2.prototype.toString = function() {
          if (this.key === METADATA_KEY.NAMED_TAG) {
            return "named: " + String(this.value).toString() + " ";
          } else {
            return "tagged: { key:" + this.key.toString() + ", value: " + String(this.value) + " }";
          }
        };
        return Metadata2;
      }();
      exports.Metadata = Metadata;
    }
  });

  // node_modules/inversify/lib/planning/plan.js
  var require_plan = __commonJS({
    "node_modules/inversify/lib/planning/plan.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.Plan = void 0;
      var Plan = function() {
        function Plan2(parentContext, rootRequest) {
          this.parentContext = parentContext;
          this.rootRequest = rootRequest;
        }
        return Plan2;
      }();
      exports.Plan = Plan;
    }
  });

  // node_modules/inversify/lib/annotation/lazy_service_identifier.js
  var require_lazy_service_identifier = __commonJS({
    "node_modules/inversify/lib/annotation/lazy_service_identifier.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.LazyServiceIdentifier = void 0;
      var LazyServiceIdentifier = function() {
        function LazyServiceIdentifier2(cb) {
          this._cb = cb;
        }
        LazyServiceIdentifier2.prototype.unwrap = function() {
          return this._cb();
        };
        return LazyServiceIdentifier2;
      }();
      exports.LazyServiceIdentifier = LazyServiceIdentifier;
    }
  });

  // node_modules/inversify/lib/planning/queryable_string.js
  var require_queryable_string = __commonJS({
    "node_modules/inversify/lib/planning/queryable_string.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.QueryableString = void 0;
      var QueryableString = function() {
        function QueryableString2(str) {
          this.str = str;
        }
        QueryableString2.prototype.startsWith = function(searchString) {
          return this.str.indexOf(searchString) === 0;
        };
        QueryableString2.prototype.endsWith = function(searchString) {
          var reverseString = "";
          var reverseSearchString = searchString.split("").reverse().join("");
          reverseString = this.str.split("").reverse().join("");
          return this.startsWith.call({ str: reverseString }, reverseSearchString);
        };
        QueryableString2.prototype.contains = function(searchString) {
          return this.str.indexOf(searchString) !== -1;
        };
        QueryableString2.prototype.equals = function(compareString) {
          return this.str === compareString;
        };
        QueryableString2.prototype.value = function() {
          return this.str;
        };
        return QueryableString2;
      }();
      exports.QueryableString = QueryableString;
    }
  });

  // node_modules/inversify/lib/planning/target.js
  var require_target = __commonJS({
    "node_modules/inversify/lib/planning/target.js"(exports) {
      "use strict";
      var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
        if (k2 === void 0)
          k2 = k;
        Object.defineProperty(o, k2, { enumerable: true, get: function() {
          return m[k];
        } });
      } : function(o, m, k, k2) {
        if (k2 === void 0)
          k2 = k;
        o[k2] = m[k];
      });
      var __setModuleDefault = exports && exports.__setModuleDefault || (Object.create ? function(o, v) {
        Object.defineProperty(o, "default", { enumerable: true, value: v });
      } : function(o, v) {
        o["default"] = v;
      });
      var __importStar = exports && exports.__importStar || function(mod) {
        if (mod && mod.__esModule)
          return mod;
        var result = {};
        if (mod != null) {
          for (var k in mod)
            if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
              __createBinding(result, mod, k);
        }
        __setModuleDefault(result, mod);
        return result;
      };
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.Target = void 0;
      var METADATA_KEY = __importStar(require_metadata_keys());
      var id_1 = require_id();
      var serialization_1 = require_serialization();
      var metadata_1 = require_metadata();
      var queryable_string_1 = require_queryable_string();
      var Target = function() {
        function Target2(type, identifier, serviceIdentifier, namedOrTagged) {
          this.id = (0, id_1.id)();
          this.type = type;
          this.serviceIdentifier = serviceIdentifier;
          var queryableName = typeof identifier === "symbol" ? (0, serialization_1.getSymbolDescription)(identifier) : identifier;
          this.name = new queryable_string_1.QueryableString(queryableName || "");
          this.identifier = identifier;
          this.metadata = new Array();
          var metadataItem = null;
          if (typeof namedOrTagged === "string") {
            metadataItem = new metadata_1.Metadata(METADATA_KEY.NAMED_TAG, namedOrTagged);
          } else if (namedOrTagged instanceof metadata_1.Metadata) {
            metadataItem = namedOrTagged;
          }
          if (metadataItem !== null) {
            this.metadata.push(metadataItem);
          }
        }
        Target2.prototype.hasTag = function(key) {
          for (var _i = 0, _a = this.metadata; _i < _a.length; _i++) {
            var m = _a[_i];
            if (m.key === key) {
              return true;
            }
          }
          return false;
        };
        Target2.prototype.isArray = function() {
          return this.hasTag(METADATA_KEY.MULTI_INJECT_TAG);
        };
        Target2.prototype.matchesArray = function(name) {
          return this.matchesTag(METADATA_KEY.MULTI_INJECT_TAG)(name);
        };
        Target2.prototype.isNamed = function() {
          return this.hasTag(METADATA_KEY.NAMED_TAG);
        };
        Target2.prototype.isTagged = function() {
          return this.metadata.some(function(metadata) {
            return METADATA_KEY.NON_CUSTOM_TAG_KEYS.every(function(key) {
              return metadata.key !== key;
            });
          });
        };
        Target2.prototype.isOptional = function() {
          return this.matchesTag(METADATA_KEY.OPTIONAL_TAG)(true);
        };
        Target2.prototype.getNamedTag = function() {
          if (this.isNamed()) {
            return this.metadata.filter(function(m) {
              return m.key === METADATA_KEY.NAMED_TAG;
            })[0];
          }
          return null;
        };
        Target2.prototype.getCustomTags = function() {
          if (this.isTagged()) {
            return this.metadata.filter(function(metadata) {
              return METADATA_KEY.NON_CUSTOM_TAG_KEYS.every(function(key) {
                return metadata.key !== key;
              });
            });
          } else {
            return null;
          }
        };
        Target2.prototype.matchesNamedTag = function(name) {
          return this.matchesTag(METADATA_KEY.NAMED_TAG)(name);
        };
        Target2.prototype.matchesTag = function(key) {
          var _this = this;
          return function(value) {
            for (var _i = 0, _a = _this.metadata; _i < _a.length; _i++) {
              var m = _a[_i];
              if (m.key === key && m.value === value) {
                return true;
              }
            }
            return false;
          };
        };
        return Target2;
      }();
      exports.Target = Target;
    }
  });

  // node_modules/inversify/lib/planning/reflection_utils.js
  var require_reflection_utils = __commonJS({
    "node_modules/inversify/lib/planning/reflection_utils.js"(exports) {
      "use strict";
      var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
        if (k2 === void 0)
          k2 = k;
        Object.defineProperty(o, k2, { enumerable: true, get: function() {
          return m[k];
        } });
      } : function(o, m, k, k2) {
        if (k2 === void 0)
          k2 = k;
        o[k2] = m[k];
      });
      var __setModuleDefault = exports && exports.__setModuleDefault || (Object.create ? function(o, v) {
        Object.defineProperty(o, "default", { enumerable: true, value: v });
      } : function(o, v) {
        o["default"] = v;
      });
      var __importStar = exports && exports.__importStar || function(mod) {
        if (mod && mod.__esModule)
          return mod;
        var result = {};
        if (mod != null) {
          for (var k in mod)
            if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
              __createBinding(result, mod, k);
        }
        __setModuleDefault(result, mod);
        return result;
      };
      var __spreadArray = exports && exports.__spreadArray || function(to, from, pack) {
        if (pack || arguments.length === 2)
          for (var i = 0, l = from.length, ar; i < l; i++) {
            if (ar || !(i in from)) {
              if (!ar)
                ar = Array.prototype.slice.call(from, 0, i);
              ar[i] = from[i];
            }
          }
        return to.concat(ar || Array.prototype.slice.call(from));
      };
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.getFunctionName = exports.getBaseClassDependencyCount = exports.getDependencies = void 0;
      var lazy_service_identifier_1 = require_lazy_service_identifier();
      var ERROR_MSGS = __importStar(require_error_msgs());
      var literal_types_1 = require_literal_types();
      var METADATA_KEY = __importStar(require_metadata_keys());
      var serialization_1 = require_serialization();
      Object.defineProperty(exports, "getFunctionName", { enumerable: true, get: function() {
        return serialization_1.getFunctionName;
      } });
      var target_1 = require_target();
      function getDependencies(metadataReader, func) {
        var constructorName = (0, serialization_1.getFunctionName)(func);
        return getTargets(metadataReader, constructorName, func, false);
      }
      exports.getDependencies = getDependencies;
      function getTargets(metadataReader, constructorName, func, isBaseClass) {
        var metadata = metadataReader.getConstructorMetadata(func);
        var serviceIdentifiers = metadata.compilerGeneratedMetadata;
        if (serviceIdentifiers === void 0) {
          var msg = ERROR_MSGS.MISSING_INJECTABLE_ANNOTATION + " " + constructorName + ".";
          throw new Error(msg);
        }
        var constructorArgsMetadata = metadata.userGeneratedMetadata;
        var keys = Object.keys(constructorArgsMetadata);
        var hasUserDeclaredUnknownInjections = func.length === 0 && keys.length > 0;
        var hasOptionalParameters = keys.length > func.length;
        var iterations = hasUserDeclaredUnknownInjections || hasOptionalParameters ? keys.length : func.length;
        var constructorTargets = getConstructorArgsAsTargets(isBaseClass, constructorName, serviceIdentifiers, constructorArgsMetadata, iterations);
        var propertyTargets = getClassPropsAsTargets(metadataReader, func, constructorName);
        var targets = __spreadArray(__spreadArray([], constructorTargets, true), propertyTargets, true);
        return targets;
      }
      function getConstructorArgsAsTarget(index, isBaseClass, constructorName, serviceIdentifiers, constructorArgsMetadata) {
        var targetMetadata = constructorArgsMetadata[index.toString()] || [];
        var metadata = formatTargetMetadata(targetMetadata);
        var isManaged = metadata.unmanaged !== true;
        var serviceIdentifier = serviceIdentifiers[index];
        var injectIdentifier = metadata.inject || metadata.multiInject;
        serviceIdentifier = injectIdentifier ? injectIdentifier : serviceIdentifier;
        if (serviceIdentifier instanceof lazy_service_identifier_1.LazyServiceIdentifier) {
          serviceIdentifier = serviceIdentifier.unwrap();
        }
        if (isManaged) {
          var isObject = serviceIdentifier === Object;
          var isFunction = serviceIdentifier === Function;
          var isUndefined = serviceIdentifier === void 0;
          var isUnknownType = isObject || isFunction || isUndefined;
          if (!isBaseClass && isUnknownType) {
            var msg = ERROR_MSGS.MISSING_INJECT_ANNOTATION + " argument " + index + " in class " + constructorName + ".";
            throw new Error(msg);
          }
          var target = new target_1.Target(literal_types_1.TargetTypeEnum.ConstructorArgument, metadata.targetName, serviceIdentifier);
          target.metadata = targetMetadata;
          return target;
        }
        return null;
      }
      function getConstructorArgsAsTargets(isBaseClass, constructorName, serviceIdentifiers, constructorArgsMetadata, iterations) {
        var targets = [];
        for (var i = 0; i < iterations; i++) {
          var index = i;
          var target = getConstructorArgsAsTarget(index, isBaseClass, constructorName, serviceIdentifiers, constructorArgsMetadata);
          if (target !== null) {
            targets.push(target);
          }
        }
        return targets;
      }
      function _getServiceIdentifierForProperty(inject, multiInject, propertyName, className) {
        var serviceIdentifier = inject || multiInject;
        if (serviceIdentifier === void 0) {
          var msg = ERROR_MSGS.MISSING_INJECTABLE_ANNOTATION + " for property " + String(propertyName) + " in class " + className + ".";
          throw new Error(msg);
        }
        return serviceIdentifier;
      }
      function getClassPropsAsTargets(metadataReader, constructorFunc, constructorName) {
        var classPropsMetadata = metadataReader.getPropertiesMetadata(constructorFunc);
        var targets = [];
        var symbolKeys = Object.getOwnPropertySymbols(classPropsMetadata);
        var stringKeys = Object.keys(classPropsMetadata);
        var keys = stringKeys.concat(symbolKeys);
        for (var _i = 0, keys_1 = keys; _i < keys_1.length; _i++) {
          var key = keys_1[_i];
          var targetMetadata = classPropsMetadata[key];
          var metadata = formatTargetMetadata(targetMetadata);
          var identifier = metadata.targetName || key;
          var serviceIdentifier = _getServiceIdentifierForProperty(metadata.inject, metadata.multiInject, key, constructorName);
          var target = new target_1.Target(literal_types_1.TargetTypeEnum.ClassProperty, identifier, serviceIdentifier);
          target.metadata = targetMetadata;
          targets.push(target);
        }
        var baseConstructor = Object.getPrototypeOf(constructorFunc.prototype).constructor;
        if (baseConstructor !== Object) {
          var baseTargets = getClassPropsAsTargets(metadataReader, baseConstructor, constructorName);
          targets = __spreadArray(__spreadArray([], targets, true), baseTargets, true);
        }
        return targets;
      }
      function getBaseClassDependencyCount(metadataReader, func) {
        var baseConstructor = Object.getPrototypeOf(func.prototype).constructor;
        if (baseConstructor !== Object) {
          var baseConstructorName = (0, serialization_1.getFunctionName)(baseConstructor);
          var targets = getTargets(metadataReader, baseConstructorName, baseConstructor, true);
          var metadata = targets.map(function(t) {
            return t.metadata.filter(function(m) {
              return m.key === METADATA_KEY.UNMANAGED_TAG;
            });
          });
          var unmanagedCount = [].concat.apply([], metadata).length;
          var dependencyCount = targets.length - unmanagedCount;
          if (dependencyCount > 0) {
            return dependencyCount;
          } else {
            return getBaseClassDependencyCount(metadataReader, baseConstructor);
          }
        } else {
          return 0;
        }
      }
      exports.getBaseClassDependencyCount = getBaseClassDependencyCount;
      function formatTargetMetadata(targetMetadata) {
        var targetMetadataMap = {};
        targetMetadata.forEach(function(m) {
          targetMetadataMap[m.key.toString()] = m.value;
        });
        return {
          inject: targetMetadataMap[METADATA_KEY.INJECT_TAG],
          multiInject: targetMetadataMap[METADATA_KEY.MULTI_INJECT_TAG],
          targetName: targetMetadataMap[METADATA_KEY.NAME_TAG],
          unmanaged: targetMetadataMap[METADATA_KEY.UNMANAGED_TAG]
        };
      }
    }
  });

  // node_modules/inversify/lib/planning/request.js
  var require_request = __commonJS({
    "node_modules/inversify/lib/planning/request.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.Request = void 0;
      var id_1 = require_id();
      var Request = function() {
        function Request2(serviceIdentifier, parentContext, parentRequest, bindings, target) {
          this.id = (0, id_1.id)();
          this.serviceIdentifier = serviceIdentifier;
          this.parentContext = parentContext;
          this.parentRequest = parentRequest;
          this.target = target;
          this.childRequests = [];
          this.bindings = Array.isArray(bindings) ? bindings : [bindings];
          this.requestScope = parentRequest === null ? /* @__PURE__ */ new Map() : null;
        }
        Request2.prototype.addChildRequest = function(serviceIdentifier, bindings, target) {
          var child = new Request2(serviceIdentifier, this.parentContext, this, bindings, target);
          this.childRequests.push(child);
          return child;
        };
        return Request2;
      }();
      exports.Request = Request;
    }
  });

  // node_modules/inversify/lib/planning/planner.js
  var require_planner = __commonJS({
    "node_modules/inversify/lib/planning/planner.js"(exports) {
      "use strict";
      var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
        if (k2 === void 0)
          k2 = k;
        Object.defineProperty(o, k2, { enumerable: true, get: function() {
          return m[k];
        } });
      } : function(o, m, k, k2) {
        if (k2 === void 0)
          k2 = k;
        o[k2] = m[k];
      });
      var __setModuleDefault = exports && exports.__setModuleDefault || (Object.create ? function(o, v) {
        Object.defineProperty(o, "default", { enumerable: true, value: v });
      } : function(o, v) {
        o["default"] = v;
      });
      var __importStar = exports && exports.__importStar || function(mod) {
        if (mod && mod.__esModule)
          return mod;
        var result = {};
        if (mod != null) {
          for (var k in mod)
            if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
              __createBinding(result, mod, k);
        }
        __setModuleDefault(result, mod);
        return result;
      };
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.getBindingDictionary = exports.createMockRequest = exports.plan = void 0;
      var binding_count_1 = require_binding_count();
      var ERROR_MSGS = __importStar(require_error_msgs());
      var literal_types_1 = require_literal_types();
      var METADATA_KEY = __importStar(require_metadata_keys());
      var exceptions_1 = require_exceptions();
      var serialization_1 = require_serialization();
      var context_1 = require_context();
      var metadata_1 = require_metadata();
      var plan_1 = require_plan();
      var reflection_utils_1 = require_reflection_utils();
      var request_1 = require_request();
      var target_1 = require_target();
      function getBindingDictionary(cntnr) {
        return cntnr._bindingDictionary;
      }
      exports.getBindingDictionary = getBindingDictionary;
      function _createTarget(isMultiInject, targetType, serviceIdentifier, name, key, value) {
        var metadataKey = isMultiInject ? METADATA_KEY.MULTI_INJECT_TAG : METADATA_KEY.INJECT_TAG;
        var injectMetadata = new metadata_1.Metadata(metadataKey, serviceIdentifier);
        var target = new target_1.Target(targetType, name, serviceIdentifier, injectMetadata);
        if (key !== void 0) {
          var tagMetadata = new metadata_1.Metadata(key, value);
          target.metadata.push(tagMetadata);
        }
        return target;
      }
      function _getActiveBindings(metadataReader, avoidConstraints, context, parentRequest, target) {
        var bindings = getBindings(context.container, target.serviceIdentifier);
        var activeBindings = [];
        if (bindings.length === binding_count_1.BindingCount.NoBindingsAvailable && context.container.options.autoBindInjectable && typeof target.serviceIdentifier === "function" && metadataReader.getConstructorMetadata(target.serviceIdentifier).compilerGeneratedMetadata) {
          context.container.bind(target.serviceIdentifier).toSelf();
          bindings = getBindings(context.container, target.serviceIdentifier);
        }
        if (!avoidConstraints) {
          activeBindings = bindings.filter(function(binding) {
            var request = new request_1.Request(binding.serviceIdentifier, context, parentRequest, binding, target);
            return binding.constraint(request);
          });
        } else {
          activeBindings = bindings;
        }
        _validateActiveBindingCount(target.serviceIdentifier, activeBindings, target, context.container);
        return activeBindings;
      }
      function _validateActiveBindingCount(serviceIdentifier, bindings, target, container) {
        switch (bindings.length) {
          case binding_count_1.BindingCount.NoBindingsAvailable:
            if (target.isOptional()) {
              return bindings;
            } else {
              var serviceIdentifierString = (0, serialization_1.getServiceIdentifierAsString)(serviceIdentifier);
              var msg = ERROR_MSGS.NOT_REGISTERED;
              msg += (0, serialization_1.listMetadataForTarget)(serviceIdentifierString, target);
              msg += (0, serialization_1.listRegisteredBindingsForServiceIdentifier)(container, serviceIdentifierString, getBindings);
              throw new Error(msg);
            }
          case binding_count_1.BindingCount.OnlyOneBindingAvailable:
            return bindings;
          case binding_count_1.BindingCount.MultipleBindingsAvailable:
          default:
            if (!target.isArray()) {
              var serviceIdentifierString = (0, serialization_1.getServiceIdentifierAsString)(serviceIdentifier);
              var msg = ERROR_MSGS.AMBIGUOUS_MATCH + " " + serviceIdentifierString;
              msg += (0, serialization_1.listRegisteredBindingsForServiceIdentifier)(container, serviceIdentifierString, getBindings);
              throw new Error(msg);
            } else {
              return bindings;
            }
        }
      }
      function _createSubRequests(metadataReader, avoidConstraints, serviceIdentifier, context, parentRequest, target) {
        var activeBindings;
        var childRequest;
        if (parentRequest === null) {
          activeBindings = _getActiveBindings(metadataReader, avoidConstraints, context, null, target);
          childRequest = new request_1.Request(serviceIdentifier, context, null, activeBindings, target);
          var thePlan = new plan_1.Plan(context, childRequest);
          context.addPlan(thePlan);
        } else {
          activeBindings = _getActiveBindings(metadataReader, avoidConstraints, context, parentRequest, target);
          childRequest = parentRequest.addChildRequest(target.serviceIdentifier, activeBindings, target);
        }
        activeBindings.forEach(function(binding) {
          var subChildRequest = null;
          if (target.isArray()) {
            subChildRequest = childRequest.addChildRequest(binding.serviceIdentifier, binding, target);
          } else {
            if (binding.cache) {
              return;
            }
            subChildRequest = childRequest;
          }
          if (binding.type === literal_types_1.BindingTypeEnum.Instance && binding.implementationType !== null) {
            var dependencies = (0, reflection_utils_1.getDependencies)(metadataReader, binding.implementationType);
            if (!context.container.options.skipBaseClassChecks) {
              var baseClassDependencyCount = (0, reflection_utils_1.getBaseClassDependencyCount)(metadataReader, binding.implementationType);
              if (dependencies.length < baseClassDependencyCount) {
                var error = ERROR_MSGS.ARGUMENTS_LENGTH_MISMATCH((0, reflection_utils_1.getFunctionName)(binding.implementationType));
                throw new Error(error);
              }
            }
            dependencies.forEach(function(dependency) {
              _createSubRequests(metadataReader, false, dependency.serviceIdentifier, context, subChildRequest, dependency);
            });
          }
        });
      }
      function getBindings(container, serviceIdentifier) {
        var bindings = [];
        var bindingDictionary = getBindingDictionary(container);
        if (bindingDictionary.hasKey(serviceIdentifier)) {
          bindings = bindingDictionary.get(serviceIdentifier);
        } else if (container.parent !== null) {
          bindings = getBindings(container.parent, serviceIdentifier);
        }
        return bindings;
      }
      function plan(metadataReader, container, isMultiInject, targetType, serviceIdentifier, key, value, avoidConstraints) {
        if (avoidConstraints === void 0) {
          avoidConstraints = false;
        }
        var context = new context_1.Context(container);
        var target = _createTarget(isMultiInject, targetType, serviceIdentifier, "", key, value);
        try {
          _createSubRequests(metadataReader, avoidConstraints, serviceIdentifier, context, null, target);
          return context;
        } catch (error) {
          if ((0, exceptions_1.isStackOverflowExeption)(error)) {
            (0, serialization_1.circularDependencyToException)(context.plan.rootRequest);
          }
          throw error;
        }
      }
      exports.plan = plan;
      function createMockRequest(container, serviceIdentifier, key, value) {
        var target = new target_1.Target(literal_types_1.TargetTypeEnum.Variable, "", serviceIdentifier, new metadata_1.Metadata(key, value));
        var context = new context_1.Context(container);
        var request = new request_1.Request(serviceIdentifier, context, null, [], target);
        return request;
      }
      exports.createMockRequest = createMockRequest;
    }
  });

  // node_modules/inversify/lib/utils/async.js
  var require_async = __commonJS({
    "node_modules/inversify/lib/utils/async.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.isPromiseOrContainsPromise = exports.isPromise = void 0;
      function isPromise(object) {
        var isObjectOrFunction = typeof object === "object" && object !== null || typeof object === "function";
        return isObjectOrFunction && typeof object.then === "function";
      }
      exports.isPromise = isPromise;
      function isPromiseOrContainsPromise(object) {
        if (isPromise(object)) {
          return true;
        }
        return Array.isArray(object) && object.some(isPromise);
      }
      exports.isPromiseOrContainsPromise = isPromiseOrContainsPromise;
    }
  });

  // node_modules/inversify/lib/scope/scope.js
  var require_scope = __commonJS({
    "node_modules/inversify/lib/scope/scope.js"(exports) {
      "use strict";
      var __awaiter = exports && exports.__awaiter || function(thisArg, _arguments, P, generator) {
        function adopt(value) {
          return value instanceof P ? value : new P(function(resolve) {
            resolve(value);
          });
        }
        return new (P || (P = Promise))(function(resolve, reject) {
          function fulfilled(value) {
            try {
              step(generator.next(value));
            } catch (e) {
              reject(e);
            }
          }
          function rejected(value) {
            try {
              step(generator["throw"](value));
            } catch (e) {
              reject(e);
            }
          }
          function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
          }
          step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
      };
      var __generator = exports && exports.__generator || function(thisArg, body) {
        var _ = { label: 0, sent: function() {
          if (t[0] & 1)
            throw t[1];
          return t[1];
        }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
          return this;
        }), g;
        function verb(n) {
          return function(v) {
            return step([n, v]);
          };
        }
        function step(op) {
          if (f)
            throw new TypeError("Generator is already executing.");
          while (_)
            try {
              if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
                return t;
              if (y = 0, t)
                op = [op[0] & 2, t.value];
              switch (op[0]) {
                case 0:
                case 1:
                  t = op;
                  break;
                case 4:
                  _.label++;
                  return { value: op[1], done: false };
                case 5:
                  _.label++;
                  y = op[1];
                  op = [0];
                  continue;
                case 7:
                  op = _.ops.pop();
                  _.trys.pop();
                  continue;
                default:
                  if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                    _ = 0;
                    continue;
                  }
                  if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                    _.label = op[1];
                    break;
                  }
                  if (op[0] === 6 && _.label < t[1]) {
                    _.label = t[1];
                    t = op;
                    break;
                  }
                  if (t && _.label < t[2]) {
                    _.label = t[2];
                    _.ops.push(op);
                    break;
                  }
                  if (t[2])
                    _.ops.pop();
                  _.trys.pop();
                  continue;
              }
              op = body.call(thisArg, _);
            } catch (e) {
              op = [6, e];
              y = 0;
            } finally {
              f = t = 0;
            }
          if (op[0] & 5)
            throw op[1];
          return { value: op[0] ? op[1] : void 0, done: true };
        }
      };
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.saveToScope = exports.tryGetFromScope = void 0;
      var literal_types_1 = require_literal_types();
      var async_1 = require_async();
      var tryGetFromScope = function(requestScope, binding) {
        if (binding.scope === literal_types_1.BindingScopeEnum.Singleton && binding.activated) {
          return binding.cache;
        }
        if (binding.scope === literal_types_1.BindingScopeEnum.Request && requestScope.has(binding.id)) {
          return requestScope.get(binding.id);
        }
        return null;
      };
      exports.tryGetFromScope = tryGetFromScope;
      var saveToScope = function(requestScope, binding, result) {
        if (binding.scope === literal_types_1.BindingScopeEnum.Singleton) {
          _saveToSingletonScope(binding, result);
        }
        if (binding.scope === literal_types_1.BindingScopeEnum.Request) {
          _saveToRequestScope(requestScope, binding, result);
        }
      };
      exports.saveToScope = saveToScope;
      var _saveToRequestScope = function(requestScope, binding, result) {
        if (!requestScope.has(binding.id)) {
          requestScope.set(binding.id, result);
        }
      };
      var _saveToSingletonScope = function(binding, result) {
        binding.cache = result;
        binding.activated = true;
        if ((0, async_1.isPromise)(result)) {
          void _saveAsyncResultToSingletonScope(binding, result);
        }
      };
      var _saveAsyncResultToSingletonScope = function(binding, asyncResult) {
        return __awaiter(void 0, void 0, void 0, function() {
          var result, ex_1;
          return __generator(this, function(_a) {
            switch (_a.label) {
              case 0:
                _a.trys.push([0, 2, , 3]);
                return [4, asyncResult];
              case 1:
                result = _a.sent();
                binding.cache = result;
                return [3, 3];
              case 2:
                ex_1 = _a.sent();
                binding.cache = null;
                binding.activated = false;
                throw ex_1;
              case 3:
                return [2];
            }
          });
        });
      };
    }
  });

  // node_modules/inversify/lib/utils/factory_type.js
  var require_factory_type = __commonJS({
    "node_modules/inversify/lib/utils/factory_type.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.FactoryType = void 0;
      var FactoryType;
      (function(FactoryType2) {
        FactoryType2["DynamicValue"] = "toDynamicValue";
        FactoryType2["Factory"] = "toFactory";
        FactoryType2["Provider"] = "toProvider";
      })(FactoryType = exports.FactoryType || (exports.FactoryType = {}));
    }
  });

  // node_modules/inversify/lib/utils/binding_utils.js
  var require_binding_utils = __commonJS({
    "node_modules/inversify/lib/utils/binding_utils.js"(exports) {
      "use strict";
      var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
        if (k2 === void 0)
          k2 = k;
        Object.defineProperty(o, k2, { enumerable: true, get: function() {
          return m[k];
        } });
      } : function(o, m, k, k2) {
        if (k2 === void 0)
          k2 = k;
        o[k2] = m[k];
      });
      var __setModuleDefault = exports && exports.__setModuleDefault || (Object.create ? function(o, v) {
        Object.defineProperty(o, "default", { enumerable: true, value: v });
      } : function(o, v) {
        o["default"] = v;
      });
      var __importStar = exports && exports.__importStar || function(mod) {
        if (mod && mod.__esModule)
          return mod;
        var result = {};
        if (mod != null) {
          for (var k in mod)
            if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
              __createBinding(result, mod, k);
        }
        __setModuleDefault(result, mod);
        return result;
      };
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.getFactoryDetails = exports.ensureFullyBound = exports.multiBindToService = void 0;
      var serialization_1 = require_serialization();
      var ERROR_MSGS = __importStar(require_error_msgs());
      var literal_types_1 = require_literal_types();
      var factory_type_1 = require_factory_type();
      var multiBindToService = function(container) {
        return function(service) {
          return function() {
            var types = [];
            for (var _i = 0; _i < arguments.length; _i++) {
              types[_i] = arguments[_i];
            }
            return types.forEach(function(t) {
              return container.bind(t).toService(service);
            });
          };
        };
      };
      exports.multiBindToService = multiBindToService;
      var ensureFullyBound = function(binding) {
        var boundValue = null;
        switch (binding.type) {
          case literal_types_1.BindingTypeEnum.ConstantValue:
          case literal_types_1.BindingTypeEnum.Function:
            boundValue = binding.cache;
            break;
          case literal_types_1.BindingTypeEnum.Constructor:
          case literal_types_1.BindingTypeEnum.Instance:
            boundValue = binding.implementationType;
            break;
          case literal_types_1.BindingTypeEnum.DynamicValue:
            boundValue = binding.dynamicValue;
            break;
          case literal_types_1.BindingTypeEnum.Provider:
            boundValue = binding.provider;
            break;
          case literal_types_1.BindingTypeEnum.Factory:
            boundValue = binding.factory;
            break;
        }
        if (boundValue === null) {
          var serviceIdentifierAsString = (0, serialization_1.getServiceIdentifierAsString)(binding.serviceIdentifier);
          throw new Error(ERROR_MSGS.INVALID_BINDING_TYPE + " " + serviceIdentifierAsString);
        }
      };
      exports.ensureFullyBound = ensureFullyBound;
      var getFactoryDetails = function(binding) {
        switch (binding.type) {
          case literal_types_1.BindingTypeEnum.Factory:
            return { factory: binding.factory, factoryType: factory_type_1.FactoryType.Factory };
          case literal_types_1.BindingTypeEnum.Provider:
            return { factory: binding.provider, factoryType: factory_type_1.FactoryType.Provider };
          case literal_types_1.BindingTypeEnum.DynamicValue:
            return { factory: binding.dynamicValue, factoryType: factory_type_1.FactoryType.DynamicValue };
          default:
            throw new Error("Unexpected factory type " + binding.type);
        }
      };
      exports.getFactoryDetails = getFactoryDetails;
    }
  });

  // node_modules/inversify/lib/resolution/instantiation.js
  var require_instantiation = __commonJS({
    "node_modules/inversify/lib/resolution/instantiation.js"(exports) {
      "use strict";
      var __assign = exports && exports.__assign || function() {
        __assign = Object.assign || function(t) {
          for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s)
              if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
          }
          return t;
        };
        return __assign.apply(this, arguments);
      };
      var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
        if (k2 === void 0)
          k2 = k;
        Object.defineProperty(o, k2, { enumerable: true, get: function() {
          return m[k];
        } });
      } : function(o, m, k, k2) {
        if (k2 === void 0)
          k2 = k;
        o[k2] = m[k];
      });
      var __setModuleDefault = exports && exports.__setModuleDefault || (Object.create ? function(o, v) {
        Object.defineProperty(o, "default", { enumerable: true, value: v });
      } : function(o, v) {
        o["default"] = v;
      });
      var __importStar = exports && exports.__importStar || function(mod) {
        if (mod && mod.__esModule)
          return mod;
        var result = {};
        if (mod != null) {
          for (var k in mod)
            if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
              __createBinding(result, mod, k);
        }
        __setModuleDefault(result, mod);
        return result;
      };
      var __awaiter = exports && exports.__awaiter || function(thisArg, _arguments, P, generator) {
        function adopt(value) {
          return value instanceof P ? value : new P(function(resolve) {
            resolve(value);
          });
        }
        return new (P || (P = Promise))(function(resolve, reject) {
          function fulfilled(value) {
            try {
              step(generator.next(value));
            } catch (e) {
              reject(e);
            }
          }
          function rejected(value) {
            try {
              step(generator["throw"](value));
            } catch (e) {
              reject(e);
            }
          }
          function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
          }
          step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
      };
      var __generator = exports && exports.__generator || function(thisArg, body) {
        var _ = { label: 0, sent: function() {
          if (t[0] & 1)
            throw t[1];
          return t[1];
        }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
          return this;
        }), g;
        function verb(n) {
          return function(v) {
            return step([n, v]);
          };
        }
        function step(op) {
          if (f)
            throw new TypeError("Generator is already executing.");
          while (_)
            try {
              if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
                return t;
              if (y = 0, t)
                op = [op[0] & 2, t.value];
              switch (op[0]) {
                case 0:
                case 1:
                  t = op;
                  break;
                case 4:
                  _.label++;
                  return { value: op[1], done: false };
                case 5:
                  _.label++;
                  y = op[1];
                  op = [0];
                  continue;
                case 7:
                  op = _.ops.pop();
                  _.trys.pop();
                  continue;
                default:
                  if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                    _ = 0;
                    continue;
                  }
                  if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                    _.label = op[1];
                    break;
                  }
                  if (op[0] === 6 && _.label < t[1]) {
                    _.label = t[1];
                    t = op;
                    break;
                  }
                  if (t && _.label < t[2]) {
                    _.label = t[2];
                    _.ops.push(op);
                    break;
                  }
                  if (t[2])
                    _.ops.pop();
                  _.trys.pop();
                  continue;
              }
              op = body.call(thisArg, _);
            } catch (e) {
              op = [6, e];
              y = 0;
            } finally {
              f = t = 0;
            }
          if (op[0] & 5)
            throw op[1];
          return { value: op[0] ? op[1] : void 0, done: true };
        }
      };
      var __spreadArray = exports && exports.__spreadArray || function(to, from, pack) {
        if (pack || arguments.length === 2)
          for (var i = 0, l = from.length, ar; i < l; i++) {
            if (ar || !(i in from)) {
              if (!ar)
                ar = Array.prototype.slice.call(from, 0, i);
              ar[i] = from[i];
            }
          }
        return to.concat(ar || Array.prototype.slice.call(from));
      };
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.resolveInstance = void 0;
      var error_msgs_1 = require_error_msgs();
      var literal_types_1 = require_literal_types();
      var METADATA_KEY = __importStar(require_metadata_keys());
      var async_1 = require_async();
      function _resolveRequests(childRequests, resolveRequest) {
        return childRequests.reduce(function(resolvedRequests, childRequest) {
          var injection = resolveRequest(childRequest);
          var targetType = childRequest.target.type;
          if (targetType === literal_types_1.TargetTypeEnum.ConstructorArgument) {
            resolvedRequests.constructorInjections.push(injection);
          } else {
            resolvedRequests.propertyRequests.push(childRequest);
            resolvedRequests.propertyInjections.push(injection);
          }
          if (!resolvedRequests.isAsync) {
            resolvedRequests.isAsync = (0, async_1.isPromiseOrContainsPromise)(injection);
          }
          return resolvedRequests;
        }, { constructorInjections: [], propertyInjections: [], propertyRequests: [], isAsync: false });
      }
      function _createInstance(constr, childRequests, resolveRequest) {
        var result;
        if (childRequests.length > 0) {
          var resolved = _resolveRequests(childRequests, resolveRequest);
          var createInstanceWithInjectionsArg = __assign(__assign({}, resolved), { constr });
          if (resolved.isAsync) {
            result = createInstanceWithInjectionsAsync(createInstanceWithInjectionsArg);
          } else {
            result = createInstanceWithInjections(createInstanceWithInjectionsArg);
          }
        } else {
          result = new constr();
        }
        return result;
      }
      function createInstanceWithInjections(args) {
        var _a;
        var instance = new ((_a = args.constr).bind.apply(_a, __spreadArray([void 0], args.constructorInjections, false)))();
        args.propertyRequests.forEach(function(r, index) {
          var property = r.target.identifier;
          var injection = args.propertyInjections[index];
          if (!r.target.isOptional() || injection !== void 0) {
            instance[property] = injection;
          }
        });
        return instance;
      }
      function createInstanceWithInjectionsAsync(args) {
        return __awaiter(this, void 0, void 0, function() {
          var constructorInjections, propertyInjections;
          return __generator(this, function(_a) {
            switch (_a.label) {
              case 0:
                return [4, possiblyWaitInjections(args.constructorInjections)];
              case 1:
                constructorInjections = _a.sent();
                return [4, possiblyWaitInjections(args.propertyInjections)];
              case 2:
                propertyInjections = _a.sent();
                return [2, createInstanceWithInjections(__assign(__assign({}, args), { constructorInjections, propertyInjections }))];
            }
          });
        });
      }
      function possiblyWaitInjections(possiblePromiseinjections) {
        return __awaiter(this, void 0, void 0, function() {
          var injections, _i, possiblePromiseinjections_1, injection;
          return __generator(this, function(_a) {
            injections = [];
            for (_i = 0, possiblePromiseinjections_1 = possiblePromiseinjections; _i < possiblePromiseinjections_1.length; _i++) {
              injection = possiblePromiseinjections_1[_i];
              if (Array.isArray(injection)) {
                injections.push(Promise.all(injection));
              } else {
                injections.push(injection);
              }
            }
            return [2, Promise.all(injections)];
          });
        });
      }
      function _getInstanceAfterPostConstruct(constr, result) {
        var postConstructResult = _postConstruct(constr, result);
        if ((0, async_1.isPromise)(postConstructResult)) {
          return postConstructResult.then(function() {
            return result;
          });
        } else {
          return result;
        }
      }
      function _postConstruct(constr, instance) {
        var _a, _b;
        if (Reflect.hasMetadata(METADATA_KEY.POST_CONSTRUCT, constr)) {
          var data = Reflect.getMetadata(METADATA_KEY.POST_CONSTRUCT, constr);
          try {
            return (_b = (_a = instance)[data.value]) === null || _b === void 0 ? void 0 : _b.call(_a);
          } catch (e) {
            if (e instanceof Error) {
              throw new Error((0, error_msgs_1.POST_CONSTRUCT_ERROR)(constr.name, e.message));
            }
          }
        }
      }
      function _validateInstanceResolution(binding, constr) {
        if (binding.scope !== literal_types_1.BindingScopeEnum.Singleton) {
          _throwIfHandlingDeactivation(binding, constr);
        }
      }
      function _throwIfHandlingDeactivation(binding, constr) {
        var scopeErrorMessage = "Class cannot be instantiated in " + (binding.scope === literal_types_1.BindingScopeEnum.Request ? "request" : "transient") + " scope.";
        if (typeof binding.onDeactivation === "function") {
          throw new Error((0, error_msgs_1.ON_DEACTIVATION_ERROR)(constr.name, scopeErrorMessage));
        }
        if (Reflect.hasMetadata(METADATA_KEY.PRE_DESTROY, constr)) {
          throw new Error((0, error_msgs_1.PRE_DESTROY_ERROR)(constr.name, scopeErrorMessage));
        }
      }
      function resolveInstance(binding, constr, childRequests, resolveRequest) {
        _validateInstanceResolution(binding, constr);
        var result = _createInstance(constr, childRequests, resolveRequest);
        if ((0, async_1.isPromise)(result)) {
          return result.then(function(resolvedResult) {
            return _getInstanceAfterPostConstruct(constr, resolvedResult);
          });
        } else {
          return _getInstanceAfterPostConstruct(constr, result);
        }
      }
      exports.resolveInstance = resolveInstance;
    }
  });

  // node_modules/inversify/lib/resolution/resolver.js
  var require_resolver = __commonJS({
    "node_modules/inversify/lib/resolution/resolver.js"(exports) {
      "use strict";
      var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
        if (k2 === void 0)
          k2 = k;
        Object.defineProperty(o, k2, { enumerable: true, get: function() {
          return m[k];
        } });
      } : function(o, m, k, k2) {
        if (k2 === void 0)
          k2 = k;
        o[k2] = m[k];
      });
      var __setModuleDefault = exports && exports.__setModuleDefault || (Object.create ? function(o, v) {
        Object.defineProperty(o, "default", { enumerable: true, value: v });
      } : function(o, v) {
        o["default"] = v;
      });
      var __importStar = exports && exports.__importStar || function(mod) {
        if (mod && mod.__esModule)
          return mod;
        var result = {};
        if (mod != null) {
          for (var k in mod)
            if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
              __createBinding(result, mod, k);
        }
        __setModuleDefault(result, mod);
        return result;
      };
      var __awaiter = exports && exports.__awaiter || function(thisArg, _arguments, P, generator) {
        function adopt(value) {
          return value instanceof P ? value : new P(function(resolve2) {
            resolve2(value);
          });
        }
        return new (P || (P = Promise))(function(resolve2, reject) {
          function fulfilled(value) {
            try {
              step(generator.next(value));
            } catch (e) {
              reject(e);
            }
          }
          function rejected(value) {
            try {
              step(generator["throw"](value));
            } catch (e) {
              reject(e);
            }
          }
          function step(result) {
            result.done ? resolve2(result.value) : adopt(result.value).then(fulfilled, rejected);
          }
          step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
      };
      var __generator = exports && exports.__generator || function(thisArg, body) {
        var _ = { label: 0, sent: function() {
          if (t[0] & 1)
            throw t[1];
          return t[1];
        }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
          return this;
        }), g;
        function verb(n) {
          return function(v) {
            return step([n, v]);
          };
        }
        function step(op) {
          if (f)
            throw new TypeError("Generator is already executing.");
          while (_)
            try {
              if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
                return t;
              if (y = 0, t)
                op = [op[0] & 2, t.value];
              switch (op[0]) {
                case 0:
                case 1:
                  t = op;
                  break;
                case 4:
                  _.label++;
                  return { value: op[1], done: false };
                case 5:
                  _.label++;
                  y = op[1];
                  op = [0];
                  continue;
                case 7:
                  op = _.ops.pop();
                  _.trys.pop();
                  continue;
                default:
                  if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                    _ = 0;
                    continue;
                  }
                  if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                    _.label = op[1];
                    break;
                  }
                  if (op[0] === 6 && _.label < t[1]) {
                    _.label = t[1];
                    t = op;
                    break;
                  }
                  if (t && _.label < t[2]) {
                    _.label = t[2];
                    _.ops.push(op);
                    break;
                  }
                  if (t[2])
                    _.ops.pop();
                  _.trys.pop();
                  continue;
              }
              op = body.call(thisArg, _);
            } catch (e) {
              op = [6, e];
              y = 0;
            } finally {
              f = t = 0;
            }
          if (op[0] & 5)
            throw op[1];
          return { value: op[0] ? op[1] : void 0, done: true };
        }
      };
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.resolve = void 0;
      var ERROR_MSGS = __importStar(require_error_msgs());
      var literal_types_1 = require_literal_types();
      var planner_1 = require_planner();
      var scope_1 = require_scope();
      var async_1 = require_async();
      var binding_utils_1 = require_binding_utils();
      var exceptions_1 = require_exceptions();
      var instantiation_1 = require_instantiation();
      var _resolveRequest = function(requestScope) {
        return function(request) {
          request.parentContext.setCurrentRequest(request);
          var bindings = request.bindings;
          var childRequests = request.childRequests;
          var targetIsAnArray = request.target && request.target.isArray();
          var targetParentIsNotAnArray = !request.parentRequest || !request.parentRequest.target || !request.target || !request.parentRequest.target.matchesArray(request.target.serviceIdentifier);
          if (targetIsAnArray && targetParentIsNotAnArray) {
            return childRequests.map(function(childRequest) {
              var _f = _resolveRequest(requestScope);
              return _f(childRequest);
            });
          } else {
            if (request.target.isOptional() && bindings.length === 0) {
              return void 0;
            }
            var binding = bindings[0];
            return _resolveBinding(requestScope, request, binding);
          }
        };
      };
      var _resolveFactoryFromBinding = function(binding, context) {
        var factoryDetails = (0, binding_utils_1.getFactoryDetails)(binding);
        return (0, exceptions_1.tryAndThrowErrorIfStackOverflow)(function() {
          return factoryDetails.factory.bind(binding)(context);
        }, function() {
          return new Error(ERROR_MSGS.CIRCULAR_DEPENDENCY_IN_FACTORY(factoryDetails.factoryType, context.currentRequest.serviceIdentifier.toString()));
        });
      };
      var _getResolvedFromBinding = function(requestScope, request, binding) {
        var result;
        var childRequests = request.childRequests;
        (0, binding_utils_1.ensureFullyBound)(binding);
        switch (binding.type) {
          case literal_types_1.BindingTypeEnum.ConstantValue:
          case literal_types_1.BindingTypeEnum.Function:
            result = binding.cache;
            break;
          case literal_types_1.BindingTypeEnum.Constructor:
            result = binding.implementationType;
            break;
          case literal_types_1.BindingTypeEnum.Instance:
            result = (0, instantiation_1.resolveInstance)(binding, binding.implementationType, childRequests, _resolveRequest(requestScope));
            break;
          default:
            result = _resolveFactoryFromBinding(binding, request.parentContext);
        }
        return result;
      };
      var _resolveInScope = function(requestScope, binding, resolveFromBinding) {
        var result = (0, scope_1.tryGetFromScope)(requestScope, binding);
        if (result !== null) {
          return result;
        }
        result = resolveFromBinding();
        (0, scope_1.saveToScope)(requestScope, binding, result);
        return result;
      };
      var _resolveBinding = function(requestScope, request, binding) {
        return _resolveInScope(requestScope, binding, function() {
          var result = _getResolvedFromBinding(requestScope, request, binding);
          if ((0, async_1.isPromise)(result)) {
            result = result.then(function(resolved) {
              return _onActivation(request, binding, resolved);
            });
          } else {
            result = _onActivation(request, binding, result);
          }
          return result;
        });
      };
      function _onActivation(request, binding, resolved) {
        var result = _bindingActivation(request.parentContext, binding, resolved);
        var containersIterator = _getContainersIterator(request.parentContext.container);
        var container;
        var containersIteratorResult = containersIterator.next();
        do {
          container = containersIteratorResult.value;
          var context_1 = request.parentContext;
          var serviceIdentifier = request.serviceIdentifier;
          var activationsIterator = _getContainerActivationsForService(container, serviceIdentifier);
          if ((0, async_1.isPromise)(result)) {
            result = _activateContainerAsync(activationsIterator, context_1, result);
          } else {
            result = _activateContainer(activationsIterator, context_1, result);
          }
          containersIteratorResult = containersIterator.next();
        } while (containersIteratorResult.done !== true && !(0, planner_1.getBindingDictionary)(container).hasKey(request.serviceIdentifier));
        return result;
      }
      var _bindingActivation = function(context, binding, previousResult) {
        var result;
        if (typeof binding.onActivation === "function") {
          result = binding.onActivation(context, previousResult);
        } else {
          result = previousResult;
        }
        return result;
      };
      var _activateContainer = function(activationsIterator, context, result) {
        var activation = activationsIterator.next();
        while (!activation.done) {
          result = activation.value(context, result);
          if ((0, async_1.isPromise)(result)) {
            return _activateContainerAsync(activationsIterator, context, result);
          }
          activation = activationsIterator.next();
        }
        return result;
      };
      var _activateContainerAsync = function(activationsIterator, context, resultPromise) {
        return __awaiter(void 0, void 0, void 0, function() {
          var result, activation;
          return __generator(this, function(_a) {
            switch (_a.label) {
              case 0:
                return [4, resultPromise];
              case 1:
                result = _a.sent();
                activation = activationsIterator.next();
                _a.label = 2;
              case 2:
                if (!!activation.done)
                  return [3, 4];
                return [4, activation.value(context, result)];
              case 3:
                result = _a.sent();
                activation = activationsIterator.next();
                return [3, 2];
              case 4:
                return [2, result];
            }
          });
        });
      };
      var _getContainerActivationsForService = function(container, serviceIdentifier) {
        var activations = container._activations;
        return activations.hasKey(serviceIdentifier) ? activations.get(serviceIdentifier).values() : [].values();
      };
      var _getContainersIterator = function(container) {
        var containersStack = [container];
        var parent = container.parent;
        while (parent !== null) {
          containersStack.push(parent);
          parent = parent.parent;
        }
        var getNextContainer = function() {
          var nextContainer = containersStack.pop();
          if (nextContainer !== void 0) {
            return { done: false, value: nextContainer };
          } else {
            return { done: true, value: void 0 };
          }
        };
        var containersIterator = {
          next: getNextContainer
        };
        return containersIterator;
      };
      function resolve(context) {
        var _f = _resolveRequest(context.plan.rootRequest.requestScope);
        return _f(context.plan.rootRequest);
      }
      exports.resolve = resolve;
    }
  });

  // node_modules/inversify/lib/syntax/constraint_helpers.js
  var require_constraint_helpers = __commonJS({
    "node_modules/inversify/lib/syntax/constraint_helpers.js"(exports) {
      "use strict";
      var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
        if (k2 === void 0)
          k2 = k;
        Object.defineProperty(o, k2, { enumerable: true, get: function() {
          return m[k];
        } });
      } : function(o, m, k, k2) {
        if (k2 === void 0)
          k2 = k;
        o[k2] = m[k];
      });
      var __setModuleDefault = exports && exports.__setModuleDefault || (Object.create ? function(o, v) {
        Object.defineProperty(o, "default", { enumerable: true, value: v });
      } : function(o, v) {
        o["default"] = v;
      });
      var __importStar = exports && exports.__importStar || function(mod) {
        if (mod && mod.__esModule)
          return mod;
        var result = {};
        if (mod != null) {
          for (var k in mod)
            if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
              __createBinding(result, mod, k);
        }
        __setModuleDefault(result, mod);
        return result;
      };
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.typeConstraint = exports.namedConstraint = exports.taggedConstraint = exports.traverseAncerstors = void 0;
      var METADATA_KEY = __importStar(require_metadata_keys());
      var metadata_1 = require_metadata();
      var traverseAncerstors = function(request, constraint) {
        var parent = request.parentRequest;
        if (parent !== null) {
          return constraint(parent) ? true : traverseAncerstors(parent, constraint);
        } else {
          return false;
        }
      };
      exports.traverseAncerstors = traverseAncerstors;
      var taggedConstraint = function(key) {
        return function(value) {
          var constraint = function(request) {
            return request !== null && request.target !== null && request.target.matchesTag(key)(value);
          };
          constraint.metaData = new metadata_1.Metadata(key, value);
          return constraint;
        };
      };
      exports.taggedConstraint = taggedConstraint;
      var namedConstraint = taggedConstraint(METADATA_KEY.NAMED_TAG);
      exports.namedConstraint = namedConstraint;
      var typeConstraint = function(type) {
        return function(request) {
          var binding = null;
          if (request !== null) {
            binding = request.bindings[0];
            if (typeof type === "string") {
              var serviceIdentifier = binding.serviceIdentifier;
              return serviceIdentifier === type;
            } else {
              var constructor = request.bindings[0].implementationType;
              return type === constructor;
            }
          }
          return false;
        };
      };
      exports.typeConstraint = typeConstraint;
    }
  });

  // node_modules/inversify/lib/syntax/binding_when_syntax.js
  var require_binding_when_syntax = __commonJS({
    "node_modules/inversify/lib/syntax/binding_when_syntax.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.BindingWhenSyntax = void 0;
      var binding_on_syntax_1 = require_binding_on_syntax();
      var constraint_helpers_1 = require_constraint_helpers();
      var BindingWhenSyntax = function() {
        function BindingWhenSyntax2(binding) {
          this._binding = binding;
        }
        BindingWhenSyntax2.prototype.when = function(constraint) {
          this._binding.constraint = constraint;
          return new binding_on_syntax_1.BindingOnSyntax(this._binding);
        };
        BindingWhenSyntax2.prototype.whenTargetNamed = function(name) {
          this._binding.constraint = (0, constraint_helpers_1.namedConstraint)(name);
          return new binding_on_syntax_1.BindingOnSyntax(this._binding);
        };
        BindingWhenSyntax2.prototype.whenTargetIsDefault = function() {
          this._binding.constraint = function(request) {
            if (request === null) {
              return false;
            }
            var targetIsDefault = request.target !== null && !request.target.isNamed() && !request.target.isTagged();
            return targetIsDefault;
          };
          return new binding_on_syntax_1.BindingOnSyntax(this._binding);
        };
        BindingWhenSyntax2.prototype.whenTargetTagged = function(tag, value) {
          this._binding.constraint = (0, constraint_helpers_1.taggedConstraint)(tag)(value);
          return new binding_on_syntax_1.BindingOnSyntax(this._binding);
        };
        BindingWhenSyntax2.prototype.whenInjectedInto = function(parent) {
          this._binding.constraint = function(request) {
            return request !== null && (0, constraint_helpers_1.typeConstraint)(parent)(request.parentRequest);
          };
          return new binding_on_syntax_1.BindingOnSyntax(this._binding);
        };
        BindingWhenSyntax2.prototype.whenParentNamed = function(name) {
          this._binding.constraint = function(request) {
            return request !== null && (0, constraint_helpers_1.namedConstraint)(name)(request.parentRequest);
          };
          return new binding_on_syntax_1.BindingOnSyntax(this._binding);
        };
        BindingWhenSyntax2.prototype.whenParentTagged = function(tag, value) {
          this._binding.constraint = function(request) {
            return request !== null && (0, constraint_helpers_1.taggedConstraint)(tag)(value)(request.parentRequest);
          };
          return new binding_on_syntax_1.BindingOnSyntax(this._binding);
        };
        BindingWhenSyntax2.prototype.whenAnyAncestorIs = function(ancestor) {
          this._binding.constraint = function(request) {
            return request !== null && (0, constraint_helpers_1.traverseAncerstors)(request, (0, constraint_helpers_1.typeConstraint)(ancestor));
          };
          return new binding_on_syntax_1.BindingOnSyntax(this._binding);
        };
        BindingWhenSyntax2.prototype.whenNoAncestorIs = function(ancestor) {
          this._binding.constraint = function(request) {
            return request !== null && !(0, constraint_helpers_1.traverseAncerstors)(request, (0, constraint_helpers_1.typeConstraint)(ancestor));
          };
          return new binding_on_syntax_1.BindingOnSyntax(this._binding);
        };
        BindingWhenSyntax2.prototype.whenAnyAncestorNamed = function(name) {
          this._binding.constraint = function(request) {
            return request !== null && (0, constraint_helpers_1.traverseAncerstors)(request, (0, constraint_helpers_1.namedConstraint)(name));
          };
          return new binding_on_syntax_1.BindingOnSyntax(this._binding);
        };
        BindingWhenSyntax2.prototype.whenNoAncestorNamed = function(name) {
          this._binding.constraint = function(request) {
            return request !== null && !(0, constraint_helpers_1.traverseAncerstors)(request, (0, constraint_helpers_1.namedConstraint)(name));
          };
          return new binding_on_syntax_1.BindingOnSyntax(this._binding);
        };
        BindingWhenSyntax2.prototype.whenAnyAncestorTagged = function(tag, value) {
          this._binding.constraint = function(request) {
            return request !== null && (0, constraint_helpers_1.traverseAncerstors)(request, (0, constraint_helpers_1.taggedConstraint)(tag)(value));
          };
          return new binding_on_syntax_1.BindingOnSyntax(this._binding);
        };
        BindingWhenSyntax2.prototype.whenNoAncestorTagged = function(tag, value) {
          this._binding.constraint = function(request) {
            return request !== null && !(0, constraint_helpers_1.traverseAncerstors)(request, (0, constraint_helpers_1.taggedConstraint)(tag)(value));
          };
          return new binding_on_syntax_1.BindingOnSyntax(this._binding);
        };
        BindingWhenSyntax2.prototype.whenAnyAncestorMatches = function(constraint) {
          this._binding.constraint = function(request) {
            return request !== null && (0, constraint_helpers_1.traverseAncerstors)(request, constraint);
          };
          return new binding_on_syntax_1.BindingOnSyntax(this._binding);
        };
        BindingWhenSyntax2.prototype.whenNoAncestorMatches = function(constraint) {
          this._binding.constraint = function(request) {
            return request !== null && !(0, constraint_helpers_1.traverseAncerstors)(request, constraint);
          };
          return new binding_on_syntax_1.BindingOnSyntax(this._binding);
        };
        return BindingWhenSyntax2;
      }();
      exports.BindingWhenSyntax = BindingWhenSyntax;
    }
  });

  // node_modules/inversify/lib/syntax/binding_on_syntax.js
  var require_binding_on_syntax = __commonJS({
    "node_modules/inversify/lib/syntax/binding_on_syntax.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.BindingOnSyntax = void 0;
      var binding_when_syntax_1 = require_binding_when_syntax();
      var BindingOnSyntax = function() {
        function BindingOnSyntax2(binding) {
          this._binding = binding;
        }
        BindingOnSyntax2.prototype.onActivation = function(handler) {
          this._binding.onActivation = handler;
          return new binding_when_syntax_1.BindingWhenSyntax(this._binding);
        };
        BindingOnSyntax2.prototype.onDeactivation = function(handler) {
          this._binding.onDeactivation = handler;
          return new binding_when_syntax_1.BindingWhenSyntax(this._binding);
        };
        return BindingOnSyntax2;
      }();
      exports.BindingOnSyntax = BindingOnSyntax;
    }
  });

  // node_modules/inversify/lib/syntax/binding_when_on_syntax.js
  var require_binding_when_on_syntax = __commonJS({
    "node_modules/inversify/lib/syntax/binding_when_on_syntax.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.BindingWhenOnSyntax = void 0;
      var binding_on_syntax_1 = require_binding_on_syntax();
      var binding_when_syntax_1 = require_binding_when_syntax();
      var BindingWhenOnSyntax = function() {
        function BindingWhenOnSyntax2(binding) {
          this._binding = binding;
          this._bindingWhenSyntax = new binding_when_syntax_1.BindingWhenSyntax(this._binding);
          this._bindingOnSyntax = new binding_on_syntax_1.BindingOnSyntax(this._binding);
        }
        BindingWhenOnSyntax2.prototype.when = function(constraint) {
          return this._bindingWhenSyntax.when(constraint);
        };
        BindingWhenOnSyntax2.prototype.whenTargetNamed = function(name) {
          return this._bindingWhenSyntax.whenTargetNamed(name);
        };
        BindingWhenOnSyntax2.prototype.whenTargetIsDefault = function() {
          return this._bindingWhenSyntax.whenTargetIsDefault();
        };
        BindingWhenOnSyntax2.prototype.whenTargetTagged = function(tag, value) {
          return this._bindingWhenSyntax.whenTargetTagged(tag, value);
        };
        BindingWhenOnSyntax2.prototype.whenInjectedInto = function(parent) {
          return this._bindingWhenSyntax.whenInjectedInto(parent);
        };
        BindingWhenOnSyntax2.prototype.whenParentNamed = function(name) {
          return this._bindingWhenSyntax.whenParentNamed(name);
        };
        BindingWhenOnSyntax2.prototype.whenParentTagged = function(tag, value) {
          return this._bindingWhenSyntax.whenParentTagged(tag, value);
        };
        BindingWhenOnSyntax2.prototype.whenAnyAncestorIs = function(ancestor) {
          return this._bindingWhenSyntax.whenAnyAncestorIs(ancestor);
        };
        BindingWhenOnSyntax2.prototype.whenNoAncestorIs = function(ancestor) {
          return this._bindingWhenSyntax.whenNoAncestorIs(ancestor);
        };
        BindingWhenOnSyntax2.prototype.whenAnyAncestorNamed = function(name) {
          return this._bindingWhenSyntax.whenAnyAncestorNamed(name);
        };
        BindingWhenOnSyntax2.prototype.whenAnyAncestorTagged = function(tag, value) {
          return this._bindingWhenSyntax.whenAnyAncestorTagged(tag, value);
        };
        BindingWhenOnSyntax2.prototype.whenNoAncestorNamed = function(name) {
          return this._bindingWhenSyntax.whenNoAncestorNamed(name);
        };
        BindingWhenOnSyntax2.prototype.whenNoAncestorTagged = function(tag, value) {
          return this._bindingWhenSyntax.whenNoAncestorTagged(tag, value);
        };
        BindingWhenOnSyntax2.prototype.whenAnyAncestorMatches = function(constraint) {
          return this._bindingWhenSyntax.whenAnyAncestorMatches(constraint);
        };
        BindingWhenOnSyntax2.prototype.whenNoAncestorMatches = function(constraint) {
          return this._bindingWhenSyntax.whenNoAncestorMatches(constraint);
        };
        BindingWhenOnSyntax2.prototype.onActivation = function(handler) {
          return this._bindingOnSyntax.onActivation(handler);
        };
        BindingWhenOnSyntax2.prototype.onDeactivation = function(handler) {
          return this._bindingOnSyntax.onDeactivation(handler);
        };
        return BindingWhenOnSyntax2;
      }();
      exports.BindingWhenOnSyntax = BindingWhenOnSyntax;
    }
  });

  // node_modules/inversify/lib/syntax/binding_in_syntax.js
  var require_binding_in_syntax = __commonJS({
    "node_modules/inversify/lib/syntax/binding_in_syntax.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.BindingInSyntax = void 0;
      var literal_types_1 = require_literal_types();
      var binding_when_on_syntax_1 = require_binding_when_on_syntax();
      var BindingInSyntax = function() {
        function BindingInSyntax2(binding) {
          this._binding = binding;
        }
        BindingInSyntax2.prototype.inRequestScope = function() {
          this._binding.scope = literal_types_1.BindingScopeEnum.Request;
          return new binding_when_on_syntax_1.BindingWhenOnSyntax(this._binding);
        };
        BindingInSyntax2.prototype.inSingletonScope = function() {
          this._binding.scope = literal_types_1.BindingScopeEnum.Singleton;
          return new binding_when_on_syntax_1.BindingWhenOnSyntax(this._binding);
        };
        BindingInSyntax2.prototype.inTransientScope = function() {
          this._binding.scope = literal_types_1.BindingScopeEnum.Transient;
          return new binding_when_on_syntax_1.BindingWhenOnSyntax(this._binding);
        };
        return BindingInSyntax2;
      }();
      exports.BindingInSyntax = BindingInSyntax;
    }
  });

  // node_modules/inversify/lib/syntax/binding_in_when_on_syntax.js
  var require_binding_in_when_on_syntax = __commonJS({
    "node_modules/inversify/lib/syntax/binding_in_when_on_syntax.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.BindingInWhenOnSyntax = void 0;
      var binding_in_syntax_1 = require_binding_in_syntax();
      var binding_on_syntax_1 = require_binding_on_syntax();
      var binding_when_syntax_1 = require_binding_when_syntax();
      var BindingInWhenOnSyntax = function() {
        function BindingInWhenOnSyntax2(binding) {
          this._binding = binding;
          this._bindingWhenSyntax = new binding_when_syntax_1.BindingWhenSyntax(this._binding);
          this._bindingOnSyntax = new binding_on_syntax_1.BindingOnSyntax(this._binding);
          this._bindingInSyntax = new binding_in_syntax_1.BindingInSyntax(binding);
        }
        BindingInWhenOnSyntax2.prototype.inRequestScope = function() {
          return this._bindingInSyntax.inRequestScope();
        };
        BindingInWhenOnSyntax2.prototype.inSingletonScope = function() {
          return this._bindingInSyntax.inSingletonScope();
        };
        BindingInWhenOnSyntax2.prototype.inTransientScope = function() {
          return this._bindingInSyntax.inTransientScope();
        };
        BindingInWhenOnSyntax2.prototype.when = function(constraint) {
          return this._bindingWhenSyntax.when(constraint);
        };
        BindingInWhenOnSyntax2.prototype.whenTargetNamed = function(name) {
          return this._bindingWhenSyntax.whenTargetNamed(name);
        };
        BindingInWhenOnSyntax2.prototype.whenTargetIsDefault = function() {
          return this._bindingWhenSyntax.whenTargetIsDefault();
        };
        BindingInWhenOnSyntax2.prototype.whenTargetTagged = function(tag, value) {
          return this._bindingWhenSyntax.whenTargetTagged(tag, value);
        };
        BindingInWhenOnSyntax2.prototype.whenInjectedInto = function(parent) {
          return this._bindingWhenSyntax.whenInjectedInto(parent);
        };
        BindingInWhenOnSyntax2.prototype.whenParentNamed = function(name) {
          return this._bindingWhenSyntax.whenParentNamed(name);
        };
        BindingInWhenOnSyntax2.prototype.whenParentTagged = function(tag, value) {
          return this._bindingWhenSyntax.whenParentTagged(tag, value);
        };
        BindingInWhenOnSyntax2.prototype.whenAnyAncestorIs = function(ancestor) {
          return this._bindingWhenSyntax.whenAnyAncestorIs(ancestor);
        };
        BindingInWhenOnSyntax2.prototype.whenNoAncestorIs = function(ancestor) {
          return this._bindingWhenSyntax.whenNoAncestorIs(ancestor);
        };
        BindingInWhenOnSyntax2.prototype.whenAnyAncestorNamed = function(name) {
          return this._bindingWhenSyntax.whenAnyAncestorNamed(name);
        };
        BindingInWhenOnSyntax2.prototype.whenAnyAncestorTagged = function(tag, value) {
          return this._bindingWhenSyntax.whenAnyAncestorTagged(tag, value);
        };
        BindingInWhenOnSyntax2.prototype.whenNoAncestorNamed = function(name) {
          return this._bindingWhenSyntax.whenNoAncestorNamed(name);
        };
        BindingInWhenOnSyntax2.prototype.whenNoAncestorTagged = function(tag, value) {
          return this._bindingWhenSyntax.whenNoAncestorTagged(tag, value);
        };
        BindingInWhenOnSyntax2.prototype.whenAnyAncestorMatches = function(constraint) {
          return this._bindingWhenSyntax.whenAnyAncestorMatches(constraint);
        };
        BindingInWhenOnSyntax2.prototype.whenNoAncestorMatches = function(constraint) {
          return this._bindingWhenSyntax.whenNoAncestorMatches(constraint);
        };
        BindingInWhenOnSyntax2.prototype.onActivation = function(handler) {
          return this._bindingOnSyntax.onActivation(handler);
        };
        BindingInWhenOnSyntax2.prototype.onDeactivation = function(handler) {
          return this._bindingOnSyntax.onDeactivation(handler);
        };
        return BindingInWhenOnSyntax2;
      }();
      exports.BindingInWhenOnSyntax = BindingInWhenOnSyntax;
    }
  });

  // node_modules/inversify/lib/syntax/binding_to_syntax.js
  var require_binding_to_syntax = __commonJS({
    "node_modules/inversify/lib/syntax/binding_to_syntax.js"(exports) {
      "use strict";
      var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
        if (k2 === void 0)
          k2 = k;
        Object.defineProperty(o, k2, { enumerable: true, get: function() {
          return m[k];
        } });
      } : function(o, m, k, k2) {
        if (k2 === void 0)
          k2 = k;
        o[k2] = m[k];
      });
      var __setModuleDefault = exports && exports.__setModuleDefault || (Object.create ? function(o, v) {
        Object.defineProperty(o, "default", { enumerable: true, value: v });
      } : function(o, v) {
        o["default"] = v;
      });
      var __importStar = exports && exports.__importStar || function(mod) {
        if (mod && mod.__esModule)
          return mod;
        var result = {};
        if (mod != null) {
          for (var k in mod)
            if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
              __createBinding(result, mod, k);
        }
        __setModuleDefault(result, mod);
        return result;
      };
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.BindingToSyntax = void 0;
      var ERROR_MSGS = __importStar(require_error_msgs());
      var literal_types_1 = require_literal_types();
      var binding_in_when_on_syntax_1 = require_binding_in_when_on_syntax();
      var binding_when_on_syntax_1 = require_binding_when_on_syntax();
      var BindingToSyntax = function() {
        function BindingToSyntax2(binding) {
          this._binding = binding;
        }
        BindingToSyntax2.prototype.to = function(constructor) {
          this._binding.type = literal_types_1.BindingTypeEnum.Instance;
          this._binding.implementationType = constructor;
          return new binding_in_when_on_syntax_1.BindingInWhenOnSyntax(this._binding);
        };
        BindingToSyntax2.prototype.toSelf = function() {
          if (typeof this._binding.serviceIdentifier !== "function") {
            throw new Error("" + ERROR_MSGS.INVALID_TO_SELF_VALUE);
          }
          var self2 = this._binding.serviceIdentifier;
          return this.to(self2);
        };
        BindingToSyntax2.prototype.toConstantValue = function(value) {
          this._binding.type = literal_types_1.BindingTypeEnum.ConstantValue;
          this._binding.cache = value;
          this._binding.dynamicValue = null;
          this._binding.implementationType = null;
          this._binding.scope = literal_types_1.BindingScopeEnum.Singleton;
          return new binding_when_on_syntax_1.BindingWhenOnSyntax(this._binding);
        };
        BindingToSyntax2.prototype.toDynamicValue = function(func) {
          this._binding.type = literal_types_1.BindingTypeEnum.DynamicValue;
          this._binding.cache = null;
          this._binding.dynamicValue = func;
          this._binding.implementationType = null;
          return new binding_in_when_on_syntax_1.BindingInWhenOnSyntax(this._binding);
        };
        BindingToSyntax2.prototype.toConstructor = function(constructor) {
          this._binding.type = literal_types_1.BindingTypeEnum.Constructor;
          this._binding.implementationType = constructor;
          this._binding.scope = literal_types_1.BindingScopeEnum.Singleton;
          return new binding_when_on_syntax_1.BindingWhenOnSyntax(this._binding);
        };
        BindingToSyntax2.prototype.toFactory = function(factory) {
          this._binding.type = literal_types_1.BindingTypeEnum.Factory;
          this._binding.factory = factory;
          this._binding.scope = literal_types_1.BindingScopeEnum.Singleton;
          return new binding_when_on_syntax_1.BindingWhenOnSyntax(this._binding);
        };
        BindingToSyntax2.prototype.toFunction = function(func) {
          if (typeof func !== "function") {
            throw new Error(ERROR_MSGS.INVALID_FUNCTION_BINDING);
          }
          var bindingWhenOnSyntax = this.toConstantValue(func);
          this._binding.type = literal_types_1.BindingTypeEnum.Function;
          this._binding.scope = literal_types_1.BindingScopeEnum.Singleton;
          return bindingWhenOnSyntax;
        };
        BindingToSyntax2.prototype.toAutoFactory = function(serviceIdentifier) {
          this._binding.type = literal_types_1.BindingTypeEnum.Factory;
          this._binding.factory = function(context) {
            var autofactory = function() {
              return context.container.get(serviceIdentifier);
            };
            return autofactory;
          };
          this._binding.scope = literal_types_1.BindingScopeEnum.Singleton;
          return new binding_when_on_syntax_1.BindingWhenOnSyntax(this._binding);
        };
        BindingToSyntax2.prototype.toAutoNamedFactory = function(serviceIdentifier) {
          this._binding.type = literal_types_1.BindingTypeEnum.Factory;
          this._binding.factory = function(context) {
            return function(named) {
              return context.container.getNamed(serviceIdentifier, named);
            };
          };
          return new binding_when_on_syntax_1.BindingWhenOnSyntax(this._binding);
        };
        BindingToSyntax2.prototype.toProvider = function(provider) {
          this._binding.type = literal_types_1.BindingTypeEnum.Provider;
          this._binding.provider = provider;
          this._binding.scope = literal_types_1.BindingScopeEnum.Singleton;
          return new binding_when_on_syntax_1.BindingWhenOnSyntax(this._binding);
        };
        BindingToSyntax2.prototype.toService = function(service) {
          this.toDynamicValue(function(context) {
            return context.container.get(service);
          });
        };
        return BindingToSyntax2;
      }();
      exports.BindingToSyntax = BindingToSyntax;
    }
  });

  // node_modules/inversify/lib/container/container_snapshot.js
  var require_container_snapshot = __commonJS({
    "node_modules/inversify/lib/container/container_snapshot.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.ContainerSnapshot = void 0;
      var ContainerSnapshot = function() {
        function ContainerSnapshot2() {
        }
        ContainerSnapshot2.of = function(bindings, middleware, activations, deactivations, moduleActivationStore) {
          var snapshot = new ContainerSnapshot2();
          snapshot.bindings = bindings;
          snapshot.middleware = middleware;
          snapshot.deactivations = deactivations;
          snapshot.activations = activations;
          snapshot.moduleActivationStore = moduleActivationStore;
          return snapshot;
        };
        return ContainerSnapshot2;
      }();
      exports.ContainerSnapshot = ContainerSnapshot;
    }
  });

  // node_modules/inversify/lib/utils/clonable.js
  var require_clonable = __commonJS({
    "node_modules/inversify/lib/utils/clonable.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.isClonable = void 0;
      function isClonable(obj) {
        return typeof obj === "object" && obj !== null && "clone" in obj && typeof obj.clone === "function";
      }
      exports.isClonable = isClonable;
    }
  });

  // node_modules/inversify/lib/container/lookup.js
  var require_lookup = __commonJS({
    "node_modules/inversify/lib/container/lookup.js"(exports) {
      "use strict";
      var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
        if (k2 === void 0)
          k2 = k;
        Object.defineProperty(o, k2, { enumerable: true, get: function() {
          return m[k];
        } });
      } : function(o, m, k, k2) {
        if (k2 === void 0)
          k2 = k;
        o[k2] = m[k];
      });
      var __setModuleDefault = exports && exports.__setModuleDefault || (Object.create ? function(o, v) {
        Object.defineProperty(o, "default", { enumerable: true, value: v });
      } : function(o, v) {
        o["default"] = v;
      });
      var __importStar = exports && exports.__importStar || function(mod) {
        if (mod && mod.__esModule)
          return mod;
        var result = {};
        if (mod != null) {
          for (var k in mod)
            if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
              __createBinding(result, mod, k);
        }
        __setModuleDefault(result, mod);
        return result;
      };
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.Lookup = void 0;
      var ERROR_MSGS = __importStar(require_error_msgs());
      var clonable_1 = require_clonable();
      var Lookup = function() {
        function Lookup2() {
          this._map = /* @__PURE__ */ new Map();
        }
        Lookup2.prototype.getMap = function() {
          return this._map;
        };
        Lookup2.prototype.add = function(serviceIdentifier, value) {
          if (serviceIdentifier === null || serviceIdentifier === void 0) {
            throw new Error(ERROR_MSGS.NULL_ARGUMENT);
          }
          if (value === null || value === void 0) {
            throw new Error(ERROR_MSGS.NULL_ARGUMENT);
          }
          var entry = this._map.get(serviceIdentifier);
          if (entry !== void 0) {
            entry.push(value);
          } else {
            this._map.set(serviceIdentifier, [value]);
          }
        };
        Lookup2.prototype.get = function(serviceIdentifier) {
          if (serviceIdentifier === null || serviceIdentifier === void 0) {
            throw new Error(ERROR_MSGS.NULL_ARGUMENT);
          }
          var entry = this._map.get(serviceIdentifier);
          if (entry !== void 0) {
            return entry;
          } else {
            throw new Error(ERROR_MSGS.KEY_NOT_FOUND);
          }
        };
        Lookup2.prototype.remove = function(serviceIdentifier) {
          if (serviceIdentifier === null || serviceIdentifier === void 0) {
            throw new Error(ERROR_MSGS.NULL_ARGUMENT);
          }
          if (!this._map.delete(serviceIdentifier)) {
            throw new Error(ERROR_MSGS.KEY_NOT_FOUND);
          }
        };
        Lookup2.prototype.removeIntersection = function(lookup) {
          var _this = this;
          this.traverse(function(serviceIdentifier, value) {
            var lookupActivations = lookup.hasKey(serviceIdentifier) ? lookup.get(serviceIdentifier) : void 0;
            if (lookupActivations !== void 0) {
              var filteredValues = value.filter(function(lookupValue) {
                return !lookupActivations.some(function(moduleActivation) {
                  return lookupValue === moduleActivation;
                });
              });
              _this._setValue(serviceIdentifier, filteredValues);
            }
          });
        };
        Lookup2.prototype.removeByCondition = function(condition) {
          var _this = this;
          var removals = [];
          this._map.forEach(function(entries, key) {
            var updatedEntries = [];
            for (var _i = 0, entries_1 = entries; _i < entries_1.length; _i++) {
              var entry = entries_1[_i];
              var remove = condition(entry);
              if (remove) {
                removals.push(entry);
              } else {
                updatedEntries.push(entry);
              }
            }
            _this._setValue(key, updatedEntries);
          });
          return removals;
        };
        Lookup2.prototype.hasKey = function(serviceIdentifier) {
          if (serviceIdentifier === null || serviceIdentifier === void 0) {
            throw new Error(ERROR_MSGS.NULL_ARGUMENT);
          }
          return this._map.has(serviceIdentifier);
        };
        Lookup2.prototype.clone = function() {
          var copy = new Lookup2();
          this._map.forEach(function(value, key) {
            value.forEach(function(b) {
              return copy.add(key, (0, clonable_1.isClonable)(b) ? b.clone() : b);
            });
          });
          return copy;
        };
        Lookup2.prototype.traverse = function(func) {
          this._map.forEach(function(value, key) {
            func(key, value);
          });
        };
        Lookup2.prototype._setValue = function(serviceIdentifier, value) {
          if (value.length > 0) {
            this._map.set(serviceIdentifier, value);
          } else {
            this._map.delete(serviceIdentifier);
          }
        };
        return Lookup2;
      }();
      exports.Lookup = Lookup;
    }
  });

  // node_modules/inversify/lib/container/module_activation_store.js
  var require_module_activation_store = __commonJS({
    "node_modules/inversify/lib/container/module_activation_store.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.ModuleActivationStore = void 0;
      var lookup_1 = require_lookup();
      var ModuleActivationStore = function() {
        function ModuleActivationStore2() {
          this._map = /* @__PURE__ */ new Map();
        }
        ModuleActivationStore2.prototype.remove = function(moduleId) {
          if (this._map.has(moduleId)) {
            var handlers = this._map.get(moduleId);
            this._map.delete(moduleId);
            return handlers;
          }
          return this._getEmptyHandlersStore();
        };
        ModuleActivationStore2.prototype.addDeactivation = function(moduleId, serviceIdentifier, onDeactivation) {
          this._getModuleActivationHandlers(moduleId).onDeactivations.add(serviceIdentifier, onDeactivation);
        };
        ModuleActivationStore2.prototype.addActivation = function(moduleId, serviceIdentifier, onActivation) {
          this._getModuleActivationHandlers(moduleId).onActivations.add(serviceIdentifier, onActivation);
        };
        ModuleActivationStore2.prototype.clone = function() {
          var clone = new ModuleActivationStore2();
          this._map.forEach(function(handlersStore, moduleId) {
            clone._map.set(moduleId, {
              onActivations: handlersStore.onActivations.clone(),
              onDeactivations: handlersStore.onDeactivations.clone()
            });
          });
          return clone;
        };
        ModuleActivationStore2.prototype._getModuleActivationHandlers = function(moduleId) {
          var moduleActivationHandlers = this._map.get(moduleId);
          if (moduleActivationHandlers === void 0) {
            moduleActivationHandlers = this._getEmptyHandlersStore();
            this._map.set(moduleId, moduleActivationHandlers);
          }
          return moduleActivationHandlers;
        };
        ModuleActivationStore2.prototype._getEmptyHandlersStore = function() {
          var handlersStore = {
            onActivations: new lookup_1.Lookup(),
            onDeactivations: new lookup_1.Lookup()
          };
          return handlersStore;
        };
        return ModuleActivationStore2;
      }();
      exports.ModuleActivationStore = ModuleActivationStore;
    }
  });

  // node_modules/inversify/lib/container/container.js
  var require_container = __commonJS({
    "node_modules/inversify/lib/container/container.js"(exports) {
      "use strict";
      var __assign = exports && exports.__assign || function() {
        __assign = Object.assign || function(t) {
          for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s)
              if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
          }
          return t;
        };
        return __assign.apply(this, arguments);
      };
      var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
        if (k2 === void 0)
          k2 = k;
        Object.defineProperty(o, k2, { enumerable: true, get: function() {
          return m[k];
        } });
      } : function(o, m, k, k2) {
        if (k2 === void 0)
          k2 = k;
        o[k2] = m[k];
      });
      var __setModuleDefault = exports && exports.__setModuleDefault || (Object.create ? function(o, v) {
        Object.defineProperty(o, "default", { enumerable: true, value: v });
      } : function(o, v) {
        o["default"] = v;
      });
      var __importStar = exports && exports.__importStar || function(mod) {
        if (mod && mod.__esModule)
          return mod;
        var result = {};
        if (mod != null) {
          for (var k in mod)
            if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
              __createBinding(result, mod, k);
        }
        __setModuleDefault(result, mod);
        return result;
      };
      var __awaiter = exports && exports.__awaiter || function(thisArg, _arguments, P, generator) {
        function adopt(value) {
          return value instanceof P ? value : new P(function(resolve) {
            resolve(value);
          });
        }
        return new (P || (P = Promise))(function(resolve, reject) {
          function fulfilled(value) {
            try {
              step(generator.next(value));
            } catch (e) {
              reject(e);
            }
          }
          function rejected(value) {
            try {
              step(generator["throw"](value));
            } catch (e) {
              reject(e);
            }
          }
          function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
          }
          step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
      };
      var __generator = exports && exports.__generator || function(thisArg, body) {
        var _ = { label: 0, sent: function() {
          if (t[0] & 1)
            throw t[1];
          return t[1];
        }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
          return this;
        }), g;
        function verb(n) {
          return function(v) {
            return step([n, v]);
          };
        }
        function step(op) {
          if (f)
            throw new TypeError("Generator is already executing.");
          while (_)
            try {
              if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
                return t;
              if (y = 0, t)
                op = [op[0] & 2, t.value];
              switch (op[0]) {
                case 0:
                case 1:
                  t = op;
                  break;
                case 4:
                  _.label++;
                  return { value: op[1], done: false };
                case 5:
                  _.label++;
                  y = op[1];
                  op = [0];
                  continue;
                case 7:
                  op = _.ops.pop();
                  _.trys.pop();
                  continue;
                default:
                  if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                    _ = 0;
                    continue;
                  }
                  if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                    _.label = op[1];
                    break;
                  }
                  if (op[0] === 6 && _.label < t[1]) {
                    _.label = t[1];
                    t = op;
                    break;
                  }
                  if (t && _.label < t[2]) {
                    _.label = t[2];
                    _.ops.push(op);
                    break;
                  }
                  if (t[2])
                    _.ops.pop();
                  _.trys.pop();
                  continue;
              }
              op = body.call(thisArg, _);
            } catch (e) {
              op = [6, e];
              y = 0;
            } finally {
              f = t = 0;
            }
          if (op[0] & 5)
            throw op[1];
          return { value: op[0] ? op[1] : void 0, done: true };
        }
      };
      var __spreadArray = exports && exports.__spreadArray || function(to, from, pack) {
        if (pack || arguments.length === 2)
          for (var i = 0, l = from.length, ar; i < l; i++) {
            if (ar || !(i in from)) {
              if (!ar)
                ar = Array.prototype.slice.call(from, 0, i);
              ar[i] = from[i];
            }
          }
        return to.concat(ar || Array.prototype.slice.call(from));
      };
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.Container = void 0;
      var binding_1 = require_binding();
      var ERROR_MSGS = __importStar(require_error_msgs());
      var literal_types_1 = require_literal_types();
      var METADATA_KEY = __importStar(require_metadata_keys());
      var metadata_reader_1 = require_metadata_reader();
      var planner_1 = require_planner();
      var resolver_1 = require_resolver();
      var binding_to_syntax_1 = require_binding_to_syntax();
      var async_1 = require_async();
      var id_1 = require_id();
      var serialization_1 = require_serialization();
      var container_snapshot_1 = require_container_snapshot();
      var lookup_1 = require_lookup();
      var module_activation_store_1 = require_module_activation_store();
      var Container = function() {
        function Container2(containerOptions) {
          var options = containerOptions || {};
          if (typeof options !== "object") {
            throw new Error("" + ERROR_MSGS.CONTAINER_OPTIONS_MUST_BE_AN_OBJECT);
          }
          if (options.defaultScope === void 0) {
            options.defaultScope = literal_types_1.BindingScopeEnum.Transient;
          } else if (options.defaultScope !== literal_types_1.BindingScopeEnum.Singleton && options.defaultScope !== literal_types_1.BindingScopeEnum.Transient && options.defaultScope !== literal_types_1.BindingScopeEnum.Request) {
            throw new Error("" + ERROR_MSGS.CONTAINER_OPTIONS_INVALID_DEFAULT_SCOPE);
          }
          if (options.autoBindInjectable === void 0) {
            options.autoBindInjectable = false;
          } else if (typeof options.autoBindInjectable !== "boolean") {
            throw new Error("" + ERROR_MSGS.CONTAINER_OPTIONS_INVALID_AUTO_BIND_INJECTABLE);
          }
          if (options.skipBaseClassChecks === void 0) {
            options.skipBaseClassChecks = false;
          } else if (typeof options.skipBaseClassChecks !== "boolean") {
            throw new Error("" + ERROR_MSGS.CONTAINER_OPTIONS_INVALID_SKIP_BASE_CHECK);
          }
          this.options = {
            autoBindInjectable: options.autoBindInjectable,
            defaultScope: options.defaultScope,
            skipBaseClassChecks: options.skipBaseClassChecks
          };
          this.id = (0, id_1.id)();
          this._bindingDictionary = new lookup_1.Lookup();
          this._snapshots = [];
          this._middleware = null;
          this._activations = new lookup_1.Lookup();
          this._deactivations = new lookup_1.Lookup();
          this.parent = null;
          this._metadataReader = new metadata_reader_1.MetadataReader();
          this._moduleActivationStore = new module_activation_store_1.ModuleActivationStore();
        }
        Container2.merge = function(container1, container2) {
          var containers = [];
          for (var _i = 2; _i < arguments.length; _i++) {
            containers[_i - 2] = arguments[_i];
          }
          var container = new Container2();
          var targetContainers = __spreadArray([container1, container2], containers, true).map(function(targetContainer) {
            return (0, planner_1.getBindingDictionary)(targetContainer);
          });
          var bindingDictionary = (0, planner_1.getBindingDictionary)(container);
          function copyDictionary(origin, destination) {
            origin.traverse(function(_key, value) {
              value.forEach(function(binding) {
                destination.add(binding.serviceIdentifier, binding.clone());
              });
            });
          }
          targetContainers.forEach(function(targetBindingDictionary) {
            copyDictionary(targetBindingDictionary, bindingDictionary);
          });
          return container;
        };
        Container2.prototype.load = function() {
          var modules = [];
          for (var _i = 0; _i < arguments.length; _i++) {
            modules[_i] = arguments[_i];
          }
          var getHelpers = this._getContainerModuleHelpersFactory();
          for (var _a = 0, modules_1 = modules; _a < modules_1.length; _a++) {
            var currentModule = modules_1[_a];
            var containerModuleHelpers = getHelpers(currentModule.id);
            currentModule.registry(containerModuleHelpers.bindFunction, containerModuleHelpers.unbindFunction, containerModuleHelpers.isboundFunction, containerModuleHelpers.rebindFunction, containerModuleHelpers.unbindAsyncFunction, containerModuleHelpers.onActivationFunction, containerModuleHelpers.onDeactivationFunction);
          }
        };
        Container2.prototype.loadAsync = function() {
          var modules = [];
          for (var _i = 0; _i < arguments.length; _i++) {
            modules[_i] = arguments[_i];
          }
          return __awaiter(this, void 0, void 0, function() {
            var getHelpers, _a, modules_2, currentModule, containerModuleHelpers;
            return __generator(this, function(_b) {
              switch (_b.label) {
                case 0:
                  getHelpers = this._getContainerModuleHelpersFactory();
                  _a = 0, modules_2 = modules;
                  _b.label = 1;
                case 1:
                  if (!(_a < modules_2.length))
                    return [3, 4];
                  currentModule = modules_2[_a];
                  containerModuleHelpers = getHelpers(currentModule.id);
                  return [4, currentModule.registry(containerModuleHelpers.bindFunction, containerModuleHelpers.unbindFunction, containerModuleHelpers.isboundFunction, containerModuleHelpers.rebindFunction, containerModuleHelpers.unbindAsyncFunction, containerModuleHelpers.onActivationFunction, containerModuleHelpers.onDeactivationFunction)];
                case 2:
                  _b.sent();
                  _b.label = 3;
                case 3:
                  _a++;
                  return [3, 1];
                case 4:
                  return [2];
              }
            });
          });
        };
        Container2.prototype.unload = function() {
          var _this = this;
          var modules = [];
          for (var _i = 0; _i < arguments.length; _i++) {
            modules[_i] = arguments[_i];
          }
          modules.forEach(function(module2) {
            var deactivations = _this._removeModuleBindings(module2.id);
            _this._deactivateSingletons(deactivations);
            _this._removeModuleHandlers(module2.id);
          });
        };
        Container2.prototype.unloadAsync = function() {
          var modules = [];
          for (var _i = 0; _i < arguments.length; _i++) {
            modules[_i] = arguments[_i];
          }
          return __awaiter(this, void 0, void 0, function() {
            var _a, modules_3, module_1, deactivations;
            return __generator(this, function(_b) {
              switch (_b.label) {
                case 0:
                  _a = 0, modules_3 = modules;
                  _b.label = 1;
                case 1:
                  if (!(_a < modules_3.length))
                    return [3, 4];
                  module_1 = modules_3[_a];
                  deactivations = this._removeModuleBindings(module_1.id);
                  return [4, this._deactivateSingletonsAsync(deactivations)];
                case 2:
                  _b.sent();
                  this._removeModuleHandlers(module_1.id);
                  _b.label = 3;
                case 3:
                  _a++;
                  return [3, 1];
                case 4:
                  return [2];
              }
            });
          });
        };
        Container2.prototype.bind = function(serviceIdentifier) {
          var scope = this.options.defaultScope || literal_types_1.BindingScopeEnum.Transient;
          var binding = new binding_1.Binding(serviceIdentifier, scope);
          this._bindingDictionary.add(serviceIdentifier, binding);
          return new binding_to_syntax_1.BindingToSyntax(binding);
        };
        Container2.prototype.rebind = function(serviceIdentifier) {
          this.unbind(serviceIdentifier);
          return this.bind(serviceIdentifier);
        };
        Container2.prototype.rebindAsync = function(serviceIdentifier) {
          return __awaiter(this, void 0, void 0, function() {
            return __generator(this, function(_a) {
              switch (_a.label) {
                case 0:
                  return [4, this.unbindAsync(serviceIdentifier)];
                case 1:
                  _a.sent();
                  return [2, this.bind(serviceIdentifier)];
              }
            });
          });
        };
        Container2.prototype.unbind = function(serviceIdentifier) {
          if (this._bindingDictionary.hasKey(serviceIdentifier)) {
            var bindings = this._bindingDictionary.get(serviceIdentifier);
            this._deactivateSingletons(bindings);
          }
          this._removeServiceFromDictionary(serviceIdentifier);
        };
        Container2.prototype.unbindAsync = function(serviceIdentifier) {
          return __awaiter(this, void 0, void 0, function() {
            var bindings;
            return __generator(this, function(_a) {
              switch (_a.label) {
                case 0:
                  if (!this._bindingDictionary.hasKey(serviceIdentifier))
                    return [3, 2];
                  bindings = this._bindingDictionary.get(serviceIdentifier);
                  return [4, this._deactivateSingletonsAsync(bindings)];
                case 1:
                  _a.sent();
                  _a.label = 2;
                case 2:
                  this._removeServiceFromDictionary(serviceIdentifier);
                  return [2];
              }
            });
          });
        };
        Container2.prototype.unbindAll = function() {
          var _this = this;
          this._bindingDictionary.traverse(function(_key, value) {
            _this._deactivateSingletons(value);
          });
          this._bindingDictionary = new lookup_1.Lookup();
        };
        Container2.prototype.unbindAllAsync = function() {
          return __awaiter(this, void 0, void 0, function() {
            var promises;
            var _this = this;
            return __generator(this, function(_a) {
              switch (_a.label) {
                case 0:
                  promises = [];
                  this._bindingDictionary.traverse(function(_key, value) {
                    promises.push(_this._deactivateSingletonsAsync(value));
                  });
                  return [4, Promise.all(promises)];
                case 1:
                  _a.sent();
                  this._bindingDictionary = new lookup_1.Lookup();
                  return [2];
              }
            });
          });
        };
        Container2.prototype.onActivation = function(serviceIdentifier, onActivation) {
          this._activations.add(serviceIdentifier, onActivation);
        };
        Container2.prototype.onDeactivation = function(serviceIdentifier, onDeactivation) {
          this._deactivations.add(serviceIdentifier, onDeactivation);
        };
        Container2.prototype.isBound = function(serviceIdentifier) {
          var bound = this._bindingDictionary.hasKey(serviceIdentifier);
          if (!bound && this.parent) {
            bound = this.parent.isBound(serviceIdentifier);
          }
          return bound;
        };
        Container2.prototype.isCurrentBound = function(serviceIdentifier) {
          return this._bindingDictionary.hasKey(serviceIdentifier);
        };
        Container2.prototype.isBoundNamed = function(serviceIdentifier, named) {
          return this.isBoundTagged(serviceIdentifier, METADATA_KEY.NAMED_TAG, named);
        };
        Container2.prototype.isBoundTagged = function(serviceIdentifier, key, value) {
          var bound = false;
          if (this._bindingDictionary.hasKey(serviceIdentifier)) {
            var bindings = this._bindingDictionary.get(serviceIdentifier);
            var request_1 = (0, planner_1.createMockRequest)(this, serviceIdentifier, key, value);
            bound = bindings.some(function(b) {
              return b.constraint(request_1);
            });
          }
          if (!bound && this.parent) {
            bound = this.parent.isBoundTagged(serviceIdentifier, key, value);
          }
          return bound;
        };
        Container2.prototype.snapshot = function() {
          this._snapshots.push(container_snapshot_1.ContainerSnapshot.of(this._bindingDictionary.clone(), this._middleware, this._activations.clone(), this._deactivations.clone(), this._moduleActivationStore.clone()));
        };
        Container2.prototype.restore = function() {
          var snapshot = this._snapshots.pop();
          if (snapshot === void 0) {
            throw new Error(ERROR_MSGS.NO_MORE_SNAPSHOTS_AVAILABLE);
          }
          this._bindingDictionary = snapshot.bindings;
          this._activations = snapshot.activations;
          this._deactivations = snapshot.deactivations;
          this._middleware = snapshot.middleware;
          this._moduleActivationStore = snapshot.moduleActivationStore;
        };
        Container2.prototype.createChild = function(containerOptions) {
          var child = new Container2(containerOptions || this.options);
          child.parent = this;
          return child;
        };
        Container2.prototype.applyMiddleware = function() {
          var middlewares = [];
          for (var _i = 0; _i < arguments.length; _i++) {
            middlewares[_i] = arguments[_i];
          }
          var initial = this._middleware ? this._middleware : this._planAndResolve();
          this._middleware = middlewares.reduce(function(prev, curr) {
            return curr(prev);
          }, initial);
        };
        Container2.prototype.applyCustomMetadataReader = function(metadataReader) {
          this._metadataReader = metadataReader;
        };
        Container2.prototype.get = function(serviceIdentifier) {
          var getArgs = this._getNotAllArgs(serviceIdentifier, false);
          return this._getButThrowIfAsync(getArgs);
        };
        Container2.prototype.getAsync = function(serviceIdentifier) {
          return __awaiter(this, void 0, void 0, function() {
            var getArgs;
            return __generator(this, function(_a) {
              getArgs = this._getNotAllArgs(serviceIdentifier, false);
              return [2, this._get(getArgs)];
            });
          });
        };
        Container2.prototype.getTagged = function(serviceIdentifier, key, value) {
          var getArgs = this._getNotAllArgs(serviceIdentifier, false, key, value);
          return this._getButThrowIfAsync(getArgs);
        };
        Container2.prototype.getTaggedAsync = function(serviceIdentifier, key, value) {
          return __awaiter(this, void 0, void 0, function() {
            var getArgs;
            return __generator(this, function(_a) {
              getArgs = this._getNotAllArgs(serviceIdentifier, false, key, value);
              return [2, this._get(getArgs)];
            });
          });
        };
        Container2.prototype.getNamed = function(serviceIdentifier, named) {
          return this.getTagged(serviceIdentifier, METADATA_KEY.NAMED_TAG, named);
        };
        Container2.prototype.getNamedAsync = function(serviceIdentifier, named) {
          return this.getTaggedAsync(serviceIdentifier, METADATA_KEY.NAMED_TAG, named);
        };
        Container2.prototype.getAll = function(serviceIdentifier) {
          var getArgs = this._getAllArgs(serviceIdentifier);
          return this._getButThrowIfAsync(getArgs);
        };
        Container2.prototype.getAllAsync = function(serviceIdentifier) {
          var getArgs = this._getAllArgs(serviceIdentifier);
          return this._getAll(getArgs);
        };
        Container2.prototype.getAllTagged = function(serviceIdentifier, key, value) {
          var getArgs = this._getNotAllArgs(serviceIdentifier, true, key, value);
          return this._getButThrowIfAsync(getArgs);
        };
        Container2.prototype.getAllTaggedAsync = function(serviceIdentifier, key, value) {
          var getArgs = this._getNotAllArgs(serviceIdentifier, true, key, value);
          return this._getAll(getArgs);
        };
        Container2.prototype.getAllNamed = function(serviceIdentifier, named) {
          return this.getAllTagged(serviceIdentifier, METADATA_KEY.NAMED_TAG, named);
        };
        Container2.prototype.getAllNamedAsync = function(serviceIdentifier, named) {
          return this.getAllTaggedAsync(serviceIdentifier, METADATA_KEY.NAMED_TAG, named);
        };
        Container2.prototype.resolve = function(constructorFunction) {
          var isBound = this.isBound(constructorFunction);
          if (!isBound) {
            this.bind(constructorFunction).toSelf();
          }
          var resolved = this.get(constructorFunction);
          if (!isBound) {
            this.unbind(constructorFunction);
          }
          return resolved;
        };
        Container2.prototype._preDestroy = function(constructor, instance) {
          var _a, _b;
          if (Reflect.hasMetadata(METADATA_KEY.PRE_DESTROY, constructor)) {
            var data = Reflect.getMetadata(METADATA_KEY.PRE_DESTROY, constructor);
            return (_b = (_a = instance)[data.value]) === null || _b === void 0 ? void 0 : _b.call(_a);
          }
        };
        Container2.prototype._removeModuleHandlers = function(moduleId) {
          var moduleActivationsHandlers = this._moduleActivationStore.remove(moduleId);
          this._activations.removeIntersection(moduleActivationsHandlers.onActivations);
          this._deactivations.removeIntersection(moduleActivationsHandlers.onDeactivations);
        };
        Container2.prototype._removeModuleBindings = function(moduleId) {
          return this._bindingDictionary.removeByCondition(function(binding) {
            return binding.moduleId === moduleId;
          });
        };
        Container2.prototype._deactivate = function(binding, instance) {
          var _this = this;
          var constructor = Object.getPrototypeOf(instance).constructor;
          try {
            if (this._deactivations.hasKey(binding.serviceIdentifier)) {
              var result = this._deactivateContainer(instance, this._deactivations.get(binding.serviceIdentifier).values());
              if ((0, async_1.isPromise)(result)) {
                return this._handleDeactivationError(result.then(function() {
                  return _this._propagateContainerDeactivationThenBindingAndPreDestroyAsync(binding, instance, constructor);
                }), constructor);
              }
            }
            var propagateDeactivationResult = this._propagateContainerDeactivationThenBindingAndPreDestroy(binding, instance, constructor);
            if ((0, async_1.isPromise)(propagateDeactivationResult)) {
              return this._handleDeactivationError(propagateDeactivationResult, constructor);
            }
          } catch (ex) {
            if (ex instanceof Error) {
              throw new Error(ERROR_MSGS.ON_DEACTIVATION_ERROR(constructor.name, ex.message));
            }
          }
        };
        Container2.prototype._handleDeactivationError = function(asyncResult, constructor) {
          return __awaiter(this, void 0, void 0, function() {
            var ex_1;
            return __generator(this, function(_a) {
              switch (_a.label) {
                case 0:
                  _a.trys.push([0, 2, , 3]);
                  return [4, asyncResult];
                case 1:
                  _a.sent();
                  return [3, 3];
                case 2:
                  ex_1 = _a.sent();
                  if (ex_1 instanceof Error) {
                    throw new Error(ERROR_MSGS.ON_DEACTIVATION_ERROR(constructor.name, ex_1.message));
                  }
                  return [3, 3];
                case 3:
                  return [2];
              }
            });
          });
        };
        Container2.prototype._deactivateContainer = function(instance, deactivationsIterator) {
          var _this = this;
          var deactivation = deactivationsIterator.next();
          while (deactivation.value) {
            var result = deactivation.value(instance);
            if ((0, async_1.isPromise)(result)) {
              return result.then(function() {
                return _this._deactivateContainerAsync(instance, deactivationsIterator);
              });
            }
            deactivation = deactivationsIterator.next();
          }
        };
        Container2.prototype._deactivateContainerAsync = function(instance, deactivationsIterator) {
          return __awaiter(this, void 0, void 0, function() {
            var deactivation;
            return __generator(this, function(_a) {
              switch (_a.label) {
                case 0:
                  deactivation = deactivationsIterator.next();
                  _a.label = 1;
                case 1:
                  if (!deactivation.value)
                    return [3, 3];
                  return [4, deactivation.value(instance)];
                case 2:
                  _a.sent();
                  deactivation = deactivationsIterator.next();
                  return [3, 1];
                case 3:
                  return [2];
              }
            });
          });
        };
        Container2.prototype._getContainerModuleHelpersFactory = function() {
          var _this = this;
          var setModuleId = function(bindingToSyntax, moduleId) {
            bindingToSyntax._binding.moduleId = moduleId;
          };
          var getBindFunction = function(moduleId) {
            return function(serviceIdentifier) {
              var bindingToSyntax = _this.bind(serviceIdentifier);
              setModuleId(bindingToSyntax, moduleId);
              return bindingToSyntax;
            };
          };
          var getUnbindFunction = function() {
            return function(serviceIdentifier) {
              return _this.unbind(serviceIdentifier);
            };
          };
          var getUnbindAsyncFunction = function() {
            return function(serviceIdentifier) {
              return _this.unbindAsync(serviceIdentifier);
            };
          };
          var getIsboundFunction = function() {
            return function(serviceIdentifier) {
              return _this.isBound(serviceIdentifier);
            };
          };
          var getRebindFunction = function(moduleId) {
            return function(serviceIdentifier) {
              var bindingToSyntax = _this.rebind(serviceIdentifier);
              setModuleId(bindingToSyntax, moduleId);
              return bindingToSyntax;
            };
          };
          var getOnActivationFunction = function(moduleId) {
            return function(serviceIdentifier, onActivation) {
              _this._moduleActivationStore.addActivation(moduleId, serviceIdentifier, onActivation);
              _this.onActivation(serviceIdentifier, onActivation);
            };
          };
          var getOnDeactivationFunction = function(moduleId) {
            return function(serviceIdentifier, onDeactivation) {
              _this._moduleActivationStore.addDeactivation(moduleId, serviceIdentifier, onDeactivation);
              _this.onDeactivation(serviceIdentifier, onDeactivation);
            };
          };
          return function(mId) {
            return {
              bindFunction: getBindFunction(mId),
              isboundFunction: getIsboundFunction(),
              onActivationFunction: getOnActivationFunction(mId),
              onDeactivationFunction: getOnDeactivationFunction(mId),
              rebindFunction: getRebindFunction(mId),
              unbindFunction: getUnbindFunction(),
              unbindAsyncFunction: getUnbindAsyncFunction()
            };
          };
        };
        Container2.prototype._getAll = function(getArgs) {
          return Promise.all(this._get(getArgs));
        };
        Container2.prototype._get = function(getArgs) {
          var planAndResolveArgs = __assign(__assign({}, getArgs), { contextInterceptor: function(context) {
            return context;
          }, targetType: literal_types_1.TargetTypeEnum.Variable });
          if (this._middleware) {
            var middlewareResult = this._middleware(planAndResolveArgs);
            if (middlewareResult === void 0 || middlewareResult === null) {
              throw new Error(ERROR_MSGS.INVALID_MIDDLEWARE_RETURN);
            }
            return middlewareResult;
          }
          return this._planAndResolve()(planAndResolveArgs);
        };
        Container2.prototype._getButThrowIfAsync = function(getArgs) {
          var result = this._get(getArgs);
          if ((0, async_1.isPromiseOrContainsPromise)(result)) {
            throw new Error(ERROR_MSGS.LAZY_IN_SYNC(getArgs.serviceIdentifier));
          }
          return result;
        };
        Container2.prototype._getAllArgs = function(serviceIdentifier) {
          var getAllArgs = {
            avoidConstraints: true,
            isMultiInject: true,
            serviceIdentifier
          };
          return getAllArgs;
        };
        Container2.prototype._getNotAllArgs = function(serviceIdentifier, isMultiInject, key, value) {
          var getNotAllArgs = {
            avoidConstraints: false,
            isMultiInject,
            serviceIdentifier,
            key,
            value
          };
          return getNotAllArgs;
        };
        Container2.prototype._planAndResolve = function() {
          var _this = this;
          return function(args) {
            var context = (0, planner_1.plan)(_this._metadataReader, _this, args.isMultiInject, args.targetType, args.serviceIdentifier, args.key, args.value, args.avoidConstraints);
            context = args.contextInterceptor(context);
            var result = (0, resolver_1.resolve)(context);
            return result;
          };
        };
        Container2.prototype._deactivateIfSingleton = function(binding) {
          var _this = this;
          if (!binding.activated) {
            return;
          }
          if ((0, async_1.isPromise)(binding.cache)) {
            return binding.cache.then(function(resolved) {
              return _this._deactivate(binding, resolved);
            });
          }
          return this._deactivate(binding, binding.cache);
        };
        Container2.prototype._deactivateSingletons = function(bindings) {
          for (var _i = 0, bindings_1 = bindings; _i < bindings_1.length; _i++) {
            var binding = bindings_1[_i];
            var result = this._deactivateIfSingleton(binding);
            if ((0, async_1.isPromise)(result)) {
              throw new Error(ERROR_MSGS.ASYNC_UNBIND_REQUIRED);
            }
          }
        };
        Container2.prototype._deactivateSingletonsAsync = function(bindings) {
          return __awaiter(this, void 0, void 0, function() {
            var _this = this;
            return __generator(this, function(_a) {
              switch (_a.label) {
                case 0:
                  return [4, Promise.all(bindings.map(function(b) {
                    return _this._deactivateIfSingleton(b);
                  }))];
                case 1:
                  _a.sent();
                  return [2];
              }
            });
          });
        };
        Container2.prototype._propagateContainerDeactivationThenBindingAndPreDestroy = function(binding, instance, constructor) {
          if (this.parent) {
            return this._deactivate.bind(this.parent)(binding, instance);
          } else {
            return this._bindingDeactivationAndPreDestroy(binding, instance, constructor);
          }
        };
        Container2.prototype._propagateContainerDeactivationThenBindingAndPreDestroyAsync = function(binding, instance, constructor) {
          return __awaiter(this, void 0, void 0, function() {
            return __generator(this, function(_a) {
              switch (_a.label) {
                case 0:
                  if (!this.parent)
                    return [3, 2];
                  return [4, this._deactivate.bind(this.parent)(binding, instance)];
                case 1:
                  _a.sent();
                  return [3, 4];
                case 2:
                  return [4, this._bindingDeactivationAndPreDestroyAsync(binding, instance, constructor)];
                case 3:
                  _a.sent();
                  _a.label = 4;
                case 4:
                  return [2];
              }
            });
          });
        };
        Container2.prototype._removeServiceFromDictionary = function(serviceIdentifier) {
          try {
            this._bindingDictionary.remove(serviceIdentifier);
          } catch (e) {
            throw new Error(ERROR_MSGS.CANNOT_UNBIND + " " + (0, serialization_1.getServiceIdentifierAsString)(serviceIdentifier));
          }
        };
        Container2.prototype._bindingDeactivationAndPreDestroy = function(binding, instance, constructor) {
          var _this = this;
          if (typeof binding.onDeactivation === "function") {
            var result = binding.onDeactivation(instance);
            if ((0, async_1.isPromise)(result)) {
              return result.then(function() {
                return _this._preDestroy(constructor, instance);
              });
            }
          }
          return this._preDestroy(constructor, instance);
        };
        Container2.prototype._bindingDeactivationAndPreDestroyAsync = function(binding, instance, constructor) {
          return __awaiter(this, void 0, void 0, function() {
            return __generator(this, function(_a) {
              switch (_a.label) {
                case 0:
                  if (!(typeof binding.onDeactivation === "function"))
                    return [3, 2];
                  return [4, binding.onDeactivation(instance)];
                case 1:
                  _a.sent();
                  _a.label = 2;
                case 2:
                  return [4, this._preDestroy(constructor, instance)];
                case 3:
                  _a.sent();
                  return [2];
              }
            });
          });
        };
        return Container2;
      }();
      exports.Container = Container;
    }
  });

  // node_modules/inversify/lib/container/container_module.js
  var require_container_module = __commonJS({
    "node_modules/inversify/lib/container/container_module.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.AsyncContainerModule = exports.ContainerModule = void 0;
      var id_1 = require_id();
      var ContainerModule = function() {
        function ContainerModule2(registry) {
          this.id = (0, id_1.id)();
          this.registry = registry;
        }
        return ContainerModule2;
      }();
      exports.ContainerModule = ContainerModule;
      var AsyncContainerModule = function() {
        function AsyncContainerModule2(registry) {
          this.id = (0, id_1.id)();
          this.registry = registry;
        }
        return AsyncContainerModule2;
      }();
      exports.AsyncContainerModule = AsyncContainerModule;
    }
  });

  // node_modules/inversify/lib/utils/js.js
  var require_js = __commonJS({
    "node_modules/inversify/lib/utils/js.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.getFirstArrayDuplicate = void 0;
      function getFirstArrayDuplicate(array) {
        var seenValues = /* @__PURE__ */ new Set();
        for (var _i = 0, array_1 = array; _i < array_1.length; _i++) {
          var entry = array_1[_i];
          if (seenValues.has(entry)) {
            return entry;
          } else {
            seenValues.add(entry);
          }
        }
        return void 0;
      }
      exports.getFirstArrayDuplicate = getFirstArrayDuplicate;
    }
  });

  // node_modules/inversify/lib/annotation/decorator_utils.js
  var require_decorator_utils = __commonJS({
    "node_modules/inversify/lib/annotation/decorator_utils.js"(exports) {
      "use strict";
      var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
        if (k2 === void 0)
          k2 = k;
        Object.defineProperty(o, k2, { enumerable: true, get: function() {
          return m[k];
        } });
      } : function(o, m, k, k2) {
        if (k2 === void 0)
          k2 = k;
        o[k2] = m[k];
      });
      var __setModuleDefault = exports && exports.__setModuleDefault || (Object.create ? function(o, v) {
        Object.defineProperty(o, "default", { enumerable: true, value: v });
      } : function(o, v) {
        o["default"] = v;
      });
      var __importStar = exports && exports.__importStar || function(mod) {
        if (mod && mod.__esModule)
          return mod;
        var result = {};
        if (mod != null) {
          for (var k in mod)
            if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
              __createBinding(result, mod, k);
        }
        __setModuleDefault(result, mod);
        return result;
      };
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.createTaggedDecorator = exports.tagProperty = exports.tagParameter = exports.decorate = void 0;
      var ERROR_MSGS = __importStar(require_error_msgs());
      var METADATA_KEY = __importStar(require_metadata_keys());
      var js_1 = require_js();
      function targetIsConstructorFunction(target) {
        return target.prototype !== void 0;
      }
      function _throwIfMethodParameter(parameterName) {
        if (parameterName !== void 0) {
          throw new Error(ERROR_MSGS.INVALID_DECORATOR_OPERATION);
        }
      }
      function tagParameter(annotationTarget, parameterName, parameterIndex, metadata) {
        _throwIfMethodParameter(parameterName);
        _tagParameterOrProperty(METADATA_KEY.TAGGED, annotationTarget, parameterIndex.toString(), metadata);
      }
      exports.tagParameter = tagParameter;
      function tagProperty(annotationTarget, propertyName, metadata) {
        if (targetIsConstructorFunction(annotationTarget)) {
          throw new Error(ERROR_MSGS.INVALID_DECORATOR_OPERATION);
        }
        _tagParameterOrProperty(METADATA_KEY.TAGGED_PROP, annotationTarget.constructor, propertyName, metadata);
      }
      exports.tagProperty = tagProperty;
      function _ensureNoMetadataKeyDuplicates(metadata) {
        var metadatas = [];
        if (Array.isArray(metadata)) {
          metadatas = metadata;
          var duplicate = (0, js_1.getFirstArrayDuplicate)(metadatas.map(function(md) {
            return md.key;
          }));
          if (duplicate !== void 0) {
            throw new Error(ERROR_MSGS.DUPLICATED_METADATA + " " + duplicate.toString());
          }
        } else {
          metadatas = [metadata];
        }
        return metadatas;
      }
      function _tagParameterOrProperty(metadataKey, annotationTarget, key, metadata) {
        var metadatas = _ensureNoMetadataKeyDuplicates(metadata);
        var paramsOrPropertiesMetadata = {};
        if (Reflect.hasOwnMetadata(metadataKey, annotationTarget)) {
          paramsOrPropertiesMetadata = Reflect.getMetadata(metadataKey, annotationTarget);
        }
        var paramOrPropertyMetadata = paramsOrPropertiesMetadata[key];
        if (paramOrPropertyMetadata === void 0) {
          paramOrPropertyMetadata = [];
        } else {
          var _loop_1 = function(m2) {
            if (metadatas.some(function(md) {
              return md.key === m2.key;
            })) {
              throw new Error(ERROR_MSGS.DUPLICATED_METADATA + " " + m2.key.toString());
            }
          };
          for (var _i = 0, paramOrPropertyMetadata_1 = paramOrPropertyMetadata; _i < paramOrPropertyMetadata_1.length; _i++) {
            var m = paramOrPropertyMetadata_1[_i];
            _loop_1(m);
          }
        }
        paramOrPropertyMetadata.push.apply(paramOrPropertyMetadata, metadatas);
        paramsOrPropertiesMetadata[key] = paramOrPropertyMetadata;
        Reflect.defineMetadata(metadataKey, paramsOrPropertiesMetadata, annotationTarget);
      }
      function createTaggedDecorator(metadata) {
        return function(target, targetKey, indexOrPropertyDescriptor) {
          if (typeof indexOrPropertyDescriptor === "number") {
            tagParameter(target, targetKey, indexOrPropertyDescriptor, metadata);
          } else {
            tagProperty(target, targetKey, metadata);
          }
        };
      }
      exports.createTaggedDecorator = createTaggedDecorator;
      function _decorate(decorators, target) {
        Reflect.decorate(decorators, target);
      }
      function _param(paramIndex, decorator) {
        return function(target, key) {
          decorator(target, key, paramIndex);
        };
      }
      function decorate(decorator, target, parameterIndexOrProperty) {
        if (typeof parameterIndexOrProperty === "number") {
          _decorate([_param(parameterIndexOrProperty, decorator)], target);
        } else if (typeof parameterIndexOrProperty === "string") {
          Reflect.decorate([decorator], target, parameterIndexOrProperty);
        } else {
          _decorate([decorator], target);
        }
      }
      exports.decorate = decorate;
    }
  });

  // node_modules/inversify/lib/annotation/injectable.js
  var require_injectable = __commonJS({
    "node_modules/inversify/lib/annotation/injectable.js"(exports) {
      "use strict";
      var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
        if (k2 === void 0)
          k2 = k;
        Object.defineProperty(o, k2, { enumerable: true, get: function() {
          return m[k];
        } });
      } : function(o, m, k, k2) {
        if (k2 === void 0)
          k2 = k;
        o[k2] = m[k];
      });
      var __setModuleDefault = exports && exports.__setModuleDefault || (Object.create ? function(o, v) {
        Object.defineProperty(o, "default", { enumerable: true, value: v });
      } : function(o, v) {
        o["default"] = v;
      });
      var __importStar = exports && exports.__importStar || function(mod) {
        if (mod && mod.__esModule)
          return mod;
        var result = {};
        if (mod != null) {
          for (var k in mod)
            if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
              __createBinding(result, mod, k);
        }
        __setModuleDefault(result, mod);
        return result;
      };
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.injectable = void 0;
      var ERRORS_MSGS = __importStar(require_error_msgs());
      var METADATA_KEY = __importStar(require_metadata_keys());
      function injectable() {
        return function(target) {
          if (Reflect.hasOwnMetadata(METADATA_KEY.PARAM_TYPES, target)) {
            throw new Error(ERRORS_MSGS.DUPLICATED_INJECTABLE_DECORATOR);
          }
          var types = Reflect.getMetadata(METADATA_KEY.DESIGN_PARAM_TYPES, target) || [];
          Reflect.defineMetadata(METADATA_KEY.PARAM_TYPES, types, target);
          return target;
        };
      }
      exports.injectable = injectable;
    }
  });

  // node_modules/inversify/lib/annotation/tagged.js
  var require_tagged = __commonJS({
    "node_modules/inversify/lib/annotation/tagged.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.tagged = void 0;
      var metadata_1 = require_metadata();
      var decorator_utils_1 = require_decorator_utils();
      function tagged(metadataKey, metadataValue) {
        return (0, decorator_utils_1.createTaggedDecorator)(new metadata_1.Metadata(metadataKey, metadataValue));
      }
      exports.tagged = tagged;
    }
  });

  // node_modules/inversify/lib/annotation/named.js
  var require_named = __commonJS({
    "node_modules/inversify/lib/annotation/named.js"(exports) {
      "use strict";
      var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
        if (k2 === void 0)
          k2 = k;
        Object.defineProperty(o, k2, { enumerable: true, get: function() {
          return m[k];
        } });
      } : function(o, m, k, k2) {
        if (k2 === void 0)
          k2 = k;
        o[k2] = m[k];
      });
      var __setModuleDefault = exports && exports.__setModuleDefault || (Object.create ? function(o, v) {
        Object.defineProperty(o, "default", { enumerable: true, value: v });
      } : function(o, v) {
        o["default"] = v;
      });
      var __importStar = exports && exports.__importStar || function(mod) {
        if (mod && mod.__esModule)
          return mod;
        var result = {};
        if (mod != null) {
          for (var k in mod)
            if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
              __createBinding(result, mod, k);
        }
        __setModuleDefault(result, mod);
        return result;
      };
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.named = void 0;
      var METADATA_KEY = __importStar(require_metadata_keys());
      var metadata_1 = require_metadata();
      var decorator_utils_1 = require_decorator_utils();
      function named(name) {
        return (0, decorator_utils_1.createTaggedDecorator)(new metadata_1.Metadata(METADATA_KEY.NAMED_TAG, name));
      }
      exports.named = named;
    }
  });

  // node_modules/inversify/lib/annotation/inject_base.js
  var require_inject_base = __commonJS({
    "node_modules/inversify/lib/annotation/inject_base.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.injectBase = void 0;
      var error_msgs_1 = require_error_msgs();
      var metadata_1 = require_metadata();
      var decorator_utils_1 = require_decorator_utils();
      function injectBase(metadataKey) {
        return function(serviceIdentifier) {
          return function(target, targetKey, indexOrPropertyDescriptor) {
            if (serviceIdentifier === void 0) {
              var className = typeof target === "function" ? target.name : target.constructor.name;
              throw new Error((0, error_msgs_1.UNDEFINED_INJECT_ANNOTATION)(className));
            }
            return (0, decorator_utils_1.createTaggedDecorator)(new metadata_1.Metadata(metadataKey, serviceIdentifier))(target, targetKey, indexOrPropertyDescriptor);
          };
        };
      }
      exports.injectBase = injectBase;
    }
  });

  // node_modules/inversify/lib/annotation/inject.js
  var require_inject = __commonJS({
    "node_modules/inversify/lib/annotation/inject.js"(exports) {
      "use strict";
      var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
        if (k2 === void 0)
          k2 = k;
        Object.defineProperty(o, k2, { enumerable: true, get: function() {
          return m[k];
        } });
      } : function(o, m, k, k2) {
        if (k2 === void 0)
          k2 = k;
        o[k2] = m[k];
      });
      var __setModuleDefault = exports && exports.__setModuleDefault || (Object.create ? function(o, v) {
        Object.defineProperty(o, "default", { enumerable: true, value: v });
      } : function(o, v) {
        o["default"] = v;
      });
      var __importStar = exports && exports.__importStar || function(mod) {
        if (mod && mod.__esModule)
          return mod;
        var result = {};
        if (mod != null) {
          for (var k in mod)
            if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
              __createBinding(result, mod, k);
        }
        __setModuleDefault(result, mod);
        return result;
      };
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.inject = void 0;
      var METADATA_KEY = __importStar(require_metadata_keys());
      var inject_base_1 = require_inject_base();
      var inject = (0, inject_base_1.injectBase)(METADATA_KEY.INJECT_TAG);
      exports.inject = inject;
    }
  });

  // node_modules/inversify/lib/annotation/optional.js
  var require_optional = __commonJS({
    "node_modules/inversify/lib/annotation/optional.js"(exports) {
      "use strict";
      var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
        if (k2 === void 0)
          k2 = k;
        Object.defineProperty(o, k2, { enumerable: true, get: function() {
          return m[k];
        } });
      } : function(o, m, k, k2) {
        if (k2 === void 0)
          k2 = k;
        o[k2] = m[k];
      });
      var __setModuleDefault = exports && exports.__setModuleDefault || (Object.create ? function(o, v) {
        Object.defineProperty(o, "default", { enumerable: true, value: v });
      } : function(o, v) {
        o["default"] = v;
      });
      var __importStar = exports && exports.__importStar || function(mod) {
        if (mod && mod.__esModule)
          return mod;
        var result = {};
        if (mod != null) {
          for (var k in mod)
            if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
              __createBinding(result, mod, k);
        }
        __setModuleDefault(result, mod);
        return result;
      };
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.optional = void 0;
      var METADATA_KEY = __importStar(require_metadata_keys());
      var metadata_1 = require_metadata();
      var decorator_utils_1 = require_decorator_utils();
      function optional() {
        return (0, decorator_utils_1.createTaggedDecorator)(new metadata_1.Metadata(METADATA_KEY.OPTIONAL_TAG, true));
      }
      exports.optional = optional;
    }
  });

  // node_modules/inversify/lib/annotation/unmanaged.js
  var require_unmanaged = __commonJS({
    "node_modules/inversify/lib/annotation/unmanaged.js"(exports) {
      "use strict";
      var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
        if (k2 === void 0)
          k2 = k;
        Object.defineProperty(o, k2, { enumerable: true, get: function() {
          return m[k];
        } });
      } : function(o, m, k, k2) {
        if (k2 === void 0)
          k2 = k;
        o[k2] = m[k];
      });
      var __setModuleDefault = exports && exports.__setModuleDefault || (Object.create ? function(o, v) {
        Object.defineProperty(o, "default", { enumerable: true, value: v });
      } : function(o, v) {
        o["default"] = v;
      });
      var __importStar = exports && exports.__importStar || function(mod) {
        if (mod && mod.__esModule)
          return mod;
        var result = {};
        if (mod != null) {
          for (var k in mod)
            if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
              __createBinding(result, mod, k);
        }
        __setModuleDefault(result, mod);
        return result;
      };
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.unmanaged = void 0;
      var METADATA_KEY = __importStar(require_metadata_keys());
      var metadata_1 = require_metadata();
      var decorator_utils_1 = require_decorator_utils();
      function unmanaged() {
        return function(target, targetKey, index) {
          var metadata = new metadata_1.Metadata(METADATA_KEY.UNMANAGED_TAG, true);
          (0, decorator_utils_1.tagParameter)(target, targetKey, index, metadata);
        };
      }
      exports.unmanaged = unmanaged;
    }
  });

  // node_modules/inversify/lib/annotation/multi_inject.js
  var require_multi_inject = __commonJS({
    "node_modules/inversify/lib/annotation/multi_inject.js"(exports) {
      "use strict";
      var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
        if (k2 === void 0)
          k2 = k;
        Object.defineProperty(o, k2, { enumerable: true, get: function() {
          return m[k];
        } });
      } : function(o, m, k, k2) {
        if (k2 === void 0)
          k2 = k;
        o[k2] = m[k];
      });
      var __setModuleDefault = exports && exports.__setModuleDefault || (Object.create ? function(o, v) {
        Object.defineProperty(o, "default", { enumerable: true, value: v });
      } : function(o, v) {
        o["default"] = v;
      });
      var __importStar = exports && exports.__importStar || function(mod) {
        if (mod && mod.__esModule)
          return mod;
        var result = {};
        if (mod != null) {
          for (var k in mod)
            if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
              __createBinding(result, mod, k);
        }
        __setModuleDefault(result, mod);
        return result;
      };
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.multiInject = void 0;
      var METADATA_KEY = __importStar(require_metadata_keys());
      var inject_base_1 = require_inject_base();
      var multiInject = (0, inject_base_1.injectBase)(METADATA_KEY.MULTI_INJECT_TAG);
      exports.multiInject = multiInject;
    }
  });

  // node_modules/inversify/lib/annotation/target_name.js
  var require_target_name = __commonJS({
    "node_modules/inversify/lib/annotation/target_name.js"(exports) {
      "use strict";
      var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
        if (k2 === void 0)
          k2 = k;
        Object.defineProperty(o, k2, { enumerable: true, get: function() {
          return m[k];
        } });
      } : function(o, m, k, k2) {
        if (k2 === void 0)
          k2 = k;
        o[k2] = m[k];
      });
      var __setModuleDefault = exports && exports.__setModuleDefault || (Object.create ? function(o, v) {
        Object.defineProperty(o, "default", { enumerable: true, value: v });
      } : function(o, v) {
        o["default"] = v;
      });
      var __importStar = exports && exports.__importStar || function(mod) {
        if (mod && mod.__esModule)
          return mod;
        var result = {};
        if (mod != null) {
          for (var k in mod)
            if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
              __createBinding(result, mod, k);
        }
        __setModuleDefault(result, mod);
        return result;
      };
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.targetName = void 0;
      var METADATA_KEY = __importStar(require_metadata_keys());
      var metadata_1 = require_metadata();
      var decorator_utils_1 = require_decorator_utils();
      function targetName(name) {
        return function(target, targetKey, index) {
          var metadata = new metadata_1.Metadata(METADATA_KEY.NAME_TAG, name);
          (0, decorator_utils_1.tagParameter)(target, targetKey, index, metadata);
        };
      }
      exports.targetName = targetName;
    }
  });

  // node_modules/inversify/lib/annotation/property_event_decorator.js
  var require_property_event_decorator = __commonJS({
    "node_modules/inversify/lib/annotation/property_event_decorator.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.propertyEventDecorator = void 0;
      var metadata_1 = require_metadata();
      function propertyEventDecorator(eventKey, errorMessage) {
        return function() {
          return function(target, propertyKey) {
            var metadata = new metadata_1.Metadata(eventKey, propertyKey);
            if (Reflect.hasOwnMetadata(eventKey, target.constructor)) {
              throw new Error(errorMessage);
            }
            Reflect.defineMetadata(eventKey, metadata, target.constructor);
          };
        };
      }
      exports.propertyEventDecorator = propertyEventDecorator;
    }
  });

  // node_modules/inversify/lib/annotation/post_construct.js
  var require_post_construct = __commonJS({
    "node_modules/inversify/lib/annotation/post_construct.js"(exports) {
      "use strict";
      var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
        if (k2 === void 0)
          k2 = k;
        Object.defineProperty(o, k2, { enumerable: true, get: function() {
          return m[k];
        } });
      } : function(o, m, k, k2) {
        if (k2 === void 0)
          k2 = k;
        o[k2] = m[k];
      });
      var __setModuleDefault = exports && exports.__setModuleDefault || (Object.create ? function(o, v) {
        Object.defineProperty(o, "default", { enumerable: true, value: v });
      } : function(o, v) {
        o["default"] = v;
      });
      var __importStar = exports && exports.__importStar || function(mod) {
        if (mod && mod.__esModule)
          return mod;
        var result = {};
        if (mod != null) {
          for (var k in mod)
            if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
              __createBinding(result, mod, k);
        }
        __setModuleDefault(result, mod);
        return result;
      };
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.postConstruct = void 0;
      var ERRORS_MSGS = __importStar(require_error_msgs());
      var METADATA_KEY = __importStar(require_metadata_keys());
      var property_event_decorator_1 = require_property_event_decorator();
      var postConstruct = (0, property_event_decorator_1.propertyEventDecorator)(METADATA_KEY.POST_CONSTRUCT, ERRORS_MSGS.MULTIPLE_POST_CONSTRUCT_METHODS);
      exports.postConstruct = postConstruct;
    }
  });

  // node_modules/inversify/lib/annotation/pre_destroy.js
  var require_pre_destroy = __commonJS({
    "node_modules/inversify/lib/annotation/pre_destroy.js"(exports) {
      "use strict";
      var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
        if (k2 === void 0)
          k2 = k;
        Object.defineProperty(o, k2, { enumerable: true, get: function() {
          return m[k];
        } });
      } : function(o, m, k, k2) {
        if (k2 === void 0)
          k2 = k;
        o[k2] = m[k];
      });
      var __setModuleDefault = exports && exports.__setModuleDefault || (Object.create ? function(o, v) {
        Object.defineProperty(o, "default", { enumerable: true, value: v });
      } : function(o, v) {
        o["default"] = v;
      });
      var __importStar = exports && exports.__importStar || function(mod) {
        if (mod && mod.__esModule)
          return mod;
        var result = {};
        if (mod != null) {
          for (var k in mod)
            if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
              __createBinding(result, mod, k);
        }
        __setModuleDefault(result, mod);
        return result;
      };
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.preDestroy = void 0;
      var ERRORS_MSGS = __importStar(require_error_msgs());
      var METADATA_KEY = __importStar(require_metadata_keys());
      var property_event_decorator_1 = require_property_event_decorator();
      var preDestroy = (0, property_event_decorator_1.propertyEventDecorator)(METADATA_KEY.PRE_DESTROY, ERRORS_MSGS.MULTIPLE_PRE_DESTROY_METHODS);
      exports.preDestroy = preDestroy;
    }
  });

  // node_modules/inversify/lib/interfaces/interfaces.js
  var require_interfaces = __commonJS({
    "node_modules/inversify/lib/interfaces/interfaces.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.interfaces = void 0;
      var interfaces;
      (function(interfaces2) {
        ;
      })(interfaces || (interfaces = {}));
      exports.interfaces = interfaces;
    }
  });

  // node_modules/inversify/lib/inversify.js
  var require_inversify = __commonJS({
    "node_modules/inversify/lib/inversify.js"(exports) {
      "use strict";
      var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
        if (k2 === void 0)
          k2 = k;
        Object.defineProperty(o, k2, { enumerable: true, get: function() {
          return m[k];
        } });
      } : function(o, m, k, k2) {
        if (k2 === void 0)
          k2 = k;
        o[k2] = m[k];
      });
      var __setModuleDefault = exports && exports.__setModuleDefault || (Object.create ? function(o, v) {
        Object.defineProperty(o, "default", { enumerable: true, value: v });
      } : function(o, v) {
        o["default"] = v;
      });
      var __importStar = exports && exports.__importStar || function(mod) {
        if (mod && mod.__esModule)
          return mod;
        var result = {};
        if (mod != null) {
          for (var k in mod)
            if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
              __createBinding(result, mod, k);
        }
        __setModuleDefault(result, mod);
        return result;
      };
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.multiBindToService = exports.getServiceIdentifierAsString = exports.typeConstraint = exports.namedConstraint = exports.taggedConstraint = exports.traverseAncerstors = exports.decorate = exports.interfaces = exports.id = exports.MetadataReader = exports.preDestroy = exports.postConstruct = exports.targetName = exports.multiInject = exports.unmanaged = exports.optional = exports.LazyServiceIdentifer = exports.LazyServiceIdentifier = exports.inject = exports.named = exports.tagged = exports.injectable = exports.createTaggedDecorator = exports.ContainerModule = exports.AsyncContainerModule = exports.TargetTypeEnum = exports.BindingTypeEnum = exports.BindingScopeEnum = exports.Container = exports.METADATA_KEY = void 0;
      var keys = __importStar(require_metadata_keys());
      exports.METADATA_KEY = keys;
      var container_1 = require_container();
      Object.defineProperty(exports, "Container", { enumerable: true, get: function() {
        return container_1.Container;
      } });
      var literal_types_1 = require_literal_types();
      Object.defineProperty(exports, "BindingScopeEnum", { enumerable: true, get: function() {
        return literal_types_1.BindingScopeEnum;
      } });
      Object.defineProperty(exports, "BindingTypeEnum", { enumerable: true, get: function() {
        return literal_types_1.BindingTypeEnum;
      } });
      Object.defineProperty(exports, "TargetTypeEnum", { enumerable: true, get: function() {
        return literal_types_1.TargetTypeEnum;
      } });
      var container_module_1 = require_container_module();
      Object.defineProperty(exports, "AsyncContainerModule", { enumerable: true, get: function() {
        return container_module_1.AsyncContainerModule;
      } });
      Object.defineProperty(exports, "ContainerModule", { enumerable: true, get: function() {
        return container_module_1.ContainerModule;
      } });
      var decorator_utils_1 = require_decorator_utils();
      Object.defineProperty(exports, "createTaggedDecorator", { enumerable: true, get: function() {
        return decorator_utils_1.createTaggedDecorator;
      } });
      var injectable_1 = require_injectable();
      Object.defineProperty(exports, "injectable", { enumerable: true, get: function() {
        return injectable_1.injectable;
      } });
      var tagged_1 = require_tagged();
      Object.defineProperty(exports, "tagged", { enumerable: true, get: function() {
        return tagged_1.tagged;
      } });
      var named_1 = require_named();
      Object.defineProperty(exports, "named", { enumerable: true, get: function() {
        return named_1.named;
      } });
      var inject_1 = require_inject();
      Object.defineProperty(exports, "inject", { enumerable: true, get: function() {
        return inject_1.inject;
      } });
      var lazy_service_identifier_1 = require_lazy_service_identifier();
      Object.defineProperty(exports, "LazyServiceIdentifier", { enumerable: true, get: function() {
        return lazy_service_identifier_1.LazyServiceIdentifier;
      } });
      var lazy_service_identifier_2 = require_lazy_service_identifier();
      Object.defineProperty(exports, "LazyServiceIdentifer", { enumerable: true, get: function() {
        return lazy_service_identifier_2.LazyServiceIdentifier;
      } });
      var optional_1 = require_optional();
      Object.defineProperty(exports, "optional", { enumerable: true, get: function() {
        return optional_1.optional;
      } });
      var unmanaged_1 = require_unmanaged();
      Object.defineProperty(exports, "unmanaged", { enumerable: true, get: function() {
        return unmanaged_1.unmanaged;
      } });
      var multi_inject_1 = require_multi_inject();
      Object.defineProperty(exports, "multiInject", { enumerable: true, get: function() {
        return multi_inject_1.multiInject;
      } });
      var target_name_1 = require_target_name();
      Object.defineProperty(exports, "targetName", { enumerable: true, get: function() {
        return target_name_1.targetName;
      } });
      var post_construct_1 = require_post_construct();
      Object.defineProperty(exports, "postConstruct", { enumerable: true, get: function() {
        return post_construct_1.postConstruct;
      } });
      var pre_destroy_1 = require_pre_destroy();
      Object.defineProperty(exports, "preDestroy", { enumerable: true, get: function() {
        return pre_destroy_1.preDestroy;
      } });
      var metadata_reader_1 = require_metadata_reader();
      Object.defineProperty(exports, "MetadataReader", { enumerable: true, get: function() {
        return metadata_reader_1.MetadataReader;
      } });
      var id_1 = require_id();
      Object.defineProperty(exports, "id", { enumerable: true, get: function() {
        return id_1.id;
      } });
      var interfaces_1 = require_interfaces();
      Object.defineProperty(exports, "interfaces", { enumerable: true, get: function() {
        return interfaces_1.interfaces;
      } });
      var decorator_utils_2 = require_decorator_utils();
      Object.defineProperty(exports, "decorate", { enumerable: true, get: function() {
        return decorator_utils_2.decorate;
      } });
      var constraint_helpers_1 = require_constraint_helpers();
      Object.defineProperty(exports, "traverseAncerstors", { enumerable: true, get: function() {
        return constraint_helpers_1.traverseAncerstors;
      } });
      Object.defineProperty(exports, "taggedConstraint", { enumerable: true, get: function() {
        return constraint_helpers_1.taggedConstraint;
      } });
      Object.defineProperty(exports, "namedConstraint", { enumerable: true, get: function() {
        return constraint_helpers_1.namedConstraint;
      } });
      Object.defineProperty(exports, "typeConstraint", { enumerable: true, get: function() {
        return constraint_helpers_1.typeConstraint;
      } });
      var serialization_1 = require_serialization();
      Object.defineProperty(exports, "getServiceIdentifierAsString", { enumerable: true, get: function() {
        return serialization_1.getServiceIdentifierAsString;
      } });
      var binding_utils_1 = require_binding_utils();
      Object.defineProperty(exports, "multiBindToService", { enumerable: true, get: function() {
        return binding_utils_1.multiBindToService;
      } });
    }
  });

  // node_modules/starboy-framework/dist/packages/core/container/index.js
  var require_container2 = __commonJS({
    "node_modules/starboy-framework/dist/packages/core/container/index.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      var const_1 = require_const();
      var inversify_1 = require_inversify();
      var getContainer = () => {
        const c = Reflect.getMetadata(const_1.CONTAINER, global);
        return c ? c : createContainer();
      };
      var createContainer = () => {
        const c = new inversify_1.Container({
          skipBaseClassChecks: true,
          autoBindInjectable: true,
          defaultScope: "Singleton"
        });
        Reflect.defineMetadata(const_1.CONTAINER, c, global);
        return c;
      };
      var container = getContainer();
      exports.default = container;
    }
  });

  // node_modules/starboy-framework/dist/packages/core/decorators/helpers/create-net-event-parameter.js
  var require_create_net_event_parameter = __commonJS({
    "node_modules/starboy-framework/dist/packages/core/decorators/helpers/create-net-event-parameter.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.createNetEventParameter = void 0;
      var const_1 = require_const();
      var createNetEventParameter = (fn) => (target, propertyKey, parameterIndex) => {
        const metadata = Reflect.getMetadata(const_1.PARAMETER, target, propertyKey) || [];
        metadata[parameterIndex] = fn;
        Reflect.defineMetadata(const_1.PARAMETER, metadata, target, propertyKey);
      };
      exports.createNetEventParameter = createNetEventParameter;
    }
  });

  // node_modules/starboy-framework/dist/packages/core/decorators/helpers/extend-array-metadata.js
  var require_extend_array_metadata = __commonJS({
    "node_modules/starboy-framework/dist/packages/core/decorators/helpers/extend-array-metadata.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.extendArrayMetadata = void 0;
      var extendArrayMetadata = (key, target, value, propertyKey) => {
        const metadata = Reflect.getMetadata(key, target, propertyKey) || [];
        metadata.push(value);
        Reflect.defineMetadata(key, metadata, target, propertyKey);
      };
      exports.extendArrayMetadata = extendArrayMetadata;
    }
  });

  // node_modules/starboy-framework/dist/packages/core/decorators/helpers/extract-metadata.js
  var require_extract_metadata = __commonJS({
    "node_modules/starboy-framework/dist/packages/core/decorators/helpers/extract-metadata.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.extractMetadata = void 0;
      var extractMetadata = (key, target) => {
        const metadata = Reflect.getMetadata(key, target);
        Reflect.deleteMetadata(key, target);
        return metadata;
      };
      exports.extractMetadata = extractMetadata;
    }
  });

  // node_modules/starboy-framework/dist/packages/core/decorators/helpers/index.js
  var require_helpers = __commonJS({
    "node_modules/starboy-framework/dist/packages/core/decorators/helpers/index.js"(exports) {
      "use strict";
      var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
        if (k2 === void 0)
          k2 = k;
        var desc = Object.getOwnPropertyDescriptor(m, k);
        if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
          desc = { enumerable: true, get: function() {
            return m[k];
          } };
        }
        Object.defineProperty(o, k2, desc);
      } : function(o, m, k, k2) {
        if (k2 === void 0)
          k2 = k;
        o[k2] = m[k];
      });
      var __exportStar = exports && exports.__exportStar || function(m, exports2) {
        for (var p in m)
          if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p))
            __createBinding(exports2, m, p);
      };
      Object.defineProperty(exports, "__esModule", { value: true });
      __exportStar(require_create_net_event_parameter(), exports);
      __exportStar(require_extend_array_metadata(), exports);
      __exportStar(require_extract_metadata(), exports);
    }
  });

  // node_modules/eventemitter2/lib/eventemitter2.js
  var require_eventemitter2 = __commonJS({
    "node_modules/eventemitter2/lib/eventemitter2.js"(exports, module) {
      !function(undefined2) {
        var hasOwnProperty = Object.hasOwnProperty;
        var isArray = Array.isArray ? Array.isArray : function _isArray(obj) {
          return Object.prototype.toString.call(obj) === "[object Array]";
        };
        var defaultMaxListeners = 10;
        var nextTickSupported = typeof process == "object" && typeof process.nextTick == "function";
        var symbolsSupported = typeof Symbol === "function";
        var reflectSupported = typeof Reflect === "object";
        var setImmediateSupported = typeof setImmediate === "function";
        var _setImmediate = setImmediateSupported ? setImmediate : setTimeout;
        var ownKeys = symbolsSupported ? reflectSupported && typeof Reflect.ownKeys === "function" ? Reflect.ownKeys : function(obj) {
          var arr = Object.getOwnPropertyNames(obj);
          arr.push.apply(arr, Object.getOwnPropertySymbols(obj));
          return arr;
        } : Object.keys;
        function init() {
          this._events = {};
          if (this._conf) {
            configure.call(this, this._conf);
          }
        }
        function configure(conf) {
          if (conf) {
            this._conf = conf;
            conf.delimiter && (this.delimiter = conf.delimiter);
            if (conf.maxListeners !== undefined2) {
              this._maxListeners = conf.maxListeners;
            }
            conf.wildcard && (this.wildcard = conf.wildcard);
            conf.newListener && (this._newListener = conf.newListener);
            conf.removeListener && (this._removeListener = conf.removeListener);
            conf.verboseMemoryLeak && (this.verboseMemoryLeak = conf.verboseMemoryLeak);
            conf.ignoreErrors && (this.ignoreErrors = conf.ignoreErrors);
            if (this.wildcard) {
              this.listenerTree = {};
            }
          }
        }
        function logPossibleMemoryLeak(count, eventName) {
          var errorMsg = "(node) warning: possible EventEmitter memory leak detected. " + count + " listeners added. Use emitter.setMaxListeners() to increase limit.";
          if (this.verboseMemoryLeak) {
            errorMsg += " Event name: " + eventName + ".";
          }
          if (typeof process !== "undefined" && process.emitWarning) {
            var e = new Error(errorMsg);
            e.name = "MaxListenersExceededWarning";
            e.emitter = this;
            e.count = count;
            process.emitWarning(e);
          } else {
            console.error(errorMsg);
            if (console.trace) {
              console.trace();
            }
          }
        }
        var toArray = function(a, b, c) {
          var n = arguments.length;
          switch (n) {
            case 0:
              return [];
            case 1:
              return [a];
            case 2:
              return [a, b];
            case 3:
              return [a, b, c];
            default:
              var arr = new Array(n);
              while (n--) {
                arr[n] = arguments[n];
              }
              return arr;
          }
        };
        function toObject(keys, values) {
          var obj = {};
          var key;
          var len = keys.length;
          var valuesCount = values ? values.length : 0;
          for (var i = 0; i < len; i++) {
            key = keys[i];
            obj[key] = i < valuesCount ? values[i] : undefined2;
          }
          return obj;
        }
        function TargetObserver(emitter, target, options) {
          this._emitter = emitter;
          this._target = target;
          this._listeners = {};
          this._listenersCount = 0;
          var on2, off;
          if (options.on || options.off) {
            on2 = options.on;
            off = options.off;
          }
          if (target.addEventListener) {
            on2 = target.addEventListener;
            off = target.removeEventListener;
          } else if (target.addListener) {
            on2 = target.addListener;
            off = target.removeListener;
          } else if (target.on) {
            on2 = target.on;
            off = target.off;
          }
          if (!on2 && !off) {
            throw Error("target does not implement any known event API");
          }
          if (typeof on2 !== "function") {
            throw TypeError("on method must be a function");
          }
          if (typeof off !== "function") {
            throw TypeError("off method must be a function");
          }
          this._on = on2;
          this._off = off;
          var _observers = emitter._observers;
          if (_observers) {
            _observers.push(this);
          } else {
            emitter._observers = [this];
          }
        }
        Object.assign(TargetObserver.prototype, {
          subscribe: function(event, localEvent, reducer) {
            var observer = this;
            var target = this._target;
            var emitter = this._emitter;
            var listeners = this._listeners;
            var handler = function() {
              var args = toArray.apply(null, arguments);
              var eventObj = {
                data: args,
                name: localEvent,
                original: event
              };
              if (reducer) {
                var result = reducer.call(target, eventObj);
                if (result !== false) {
                  emitter.emit.apply(emitter, [eventObj.name].concat(args));
                }
                return;
              }
              emitter.emit.apply(emitter, [localEvent].concat(args));
            };
            if (listeners[event]) {
              throw Error("Event '" + event + "' is already listening");
            }
            this._listenersCount++;
            if (emitter._newListener && emitter._removeListener && !observer._onNewListener) {
              this._onNewListener = function(_event) {
                if (_event === localEvent && listeners[event] === null) {
                  listeners[event] = handler;
                  observer._on.call(target, event, handler);
                }
              };
              emitter.on("newListener", this._onNewListener);
              this._onRemoveListener = function(_event) {
                if (_event === localEvent && !emitter.hasListeners(_event) && listeners[event]) {
                  listeners[event] = null;
                  observer._off.call(target, event, handler);
                }
              };
              listeners[event] = null;
              emitter.on("removeListener", this._onRemoveListener);
            } else {
              listeners[event] = handler;
              observer._on.call(target, event, handler);
            }
          },
          unsubscribe: function(event) {
            var observer = this;
            var listeners = this._listeners;
            var emitter = this._emitter;
            var handler;
            var events;
            var off = this._off;
            var target = this._target;
            var i;
            if (event && typeof event !== "string") {
              throw TypeError("event must be a string");
            }
            function clearRefs() {
              if (observer._onNewListener) {
                emitter.off("newListener", observer._onNewListener);
                emitter.off("removeListener", observer._onRemoveListener);
                observer._onNewListener = null;
                observer._onRemoveListener = null;
              }
              var index = findTargetIndex.call(emitter, observer);
              emitter._observers.splice(index, 1);
            }
            if (event) {
              handler = listeners[event];
              if (!handler)
                return;
              off.call(target, event, handler);
              delete listeners[event];
              if (!--this._listenersCount) {
                clearRefs();
              }
            } else {
              events = ownKeys(listeners);
              i = events.length;
              while (i-- > 0) {
                event = events[i];
                off.call(target, event, listeners[event]);
              }
              this._listeners = {};
              this._listenersCount = 0;
              clearRefs();
            }
          }
        });
        function resolveOptions(options, schema, reducers, allowUnknown) {
          var computedOptions = Object.assign({}, schema);
          if (!options)
            return computedOptions;
          if (typeof options !== "object") {
            throw TypeError("options must be an object");
          }
          var keys = Object.keys(options);
          var length = keys.length;
          var option, value;
          var reducer;
          function reject(reason) {
            throw Error('Invalid "' + option + '" option value' + (reason ? ". Reason: " + reason : ""));
          }
          for (var i = 0; i < length; i++) {
            option = keys[i];
            if (!allowUnknown && !hasOwnProperty.call(schema, option)) {
              throw Error('Unknown "' + option + '" option');
            }
            value = options[option];
            if (value !== undefined2) {
              reducer = reducers[option];
              computedOptions[option] = reducer ? reducer(value, reject) : value;
            }
          }
          return computedOptions;
        }
        function constructorReducer(value, reject) {
          if (typeof value !== "function" || !value.hasOwnProperty("prototype")) {
            reject("value must be a constructor");
          }
          return value;
        }
        function makeTypeReducer(types) {
          var message = "value must be type of " + types.join("|");
          var len = types.length;
          var firstType = types[0];
          var secondType = types[1];
          if (len === 1) {
            return function(v, reject) {
              if (typeof v === firstType) {
                return v;
              }
              reject(message);
            };
          }
          if (len === 2) {
            return function(v, reject) {
              var kind = typeof v;
              if (kind === firstType || kind === secondType)
                return v;
              reject(message);
            };
          }
          return function(v, reject) {
            var kind = typeof v;
            var i = len;
            while (i-- > 0) {
              if (kind === types[i])
                return v;
            }
            reject(message);
          };
        }
        var functionReducer = makeTypeReducer(["function"]);
        var objectFunctionReducer = makeTypeReducer(["object", "function"]);
        function makeCancelablePromise(Promise2, executor, options) {
          var isCancelable;
          var callbacks;
          var timer = 0;
          var subscriptionClosed;
          var promise = new Promise2(function(resolve, reject, onCancel) {
            options = resolveOptions(options, {
              timeout: 0,
              overload: false
            }, {
              timeout: function(value, reject2) {
                value *= 1;
                if (typeof value !== "number" || value < 0 || !Number.isFinite(value)) {
                  reject2("timeout must be a positive number");
                }
                return value;
              }
            });
            isCancelable = !options.overload && typeof Promise2.prototype.cancel === "function" && typeof onCancel === "function";
            function cleanup() {
              if (callbacks) {
                callbacks = null;
              }
              if (timer) {
                clearTimeout(timer);
                timer = 0;
              }
            }
            var _resolve = function(value) {
              cleanup();
              resolve(value);
            };
            var _reject = function(err) {
              cleanup();
              reject(err);
            };
            if (isCancelable) {
              executor(_resolve, _reject, onCancel);
            } else {
              callbacks = [function(reason) {
                _reject(reason || Error("canceled"));
              }];
              executor(_resolve, _reject, function(cb) {
                if (subscriptionClosed) {
                  throw Error("Unable to subscribe on cancel event asynchronously");
                }
                if (typeof cb !== "function") {
                  throw TypeError("onCancel callback must be a function");
                }
                callbacks.push(cb);
              });
              subscriptionClosed = true;
            }
            if (options.timeout > 0) {
              timer = setTimeout(function() {
                var reason = Error("timeout");
                reason.code = "ETIMEDOUT";
                timer = 0;
                promise.cancel(reason);
                reject(reason);
              }, options.timeout);
            }
          });
          if (!isCancelable) {
            promise.cancel = function(reason) {
              if (!callbacks) {
                return;
              }
              var length = callbacks.length;
              for (var i = 1; i < length; i++) {
                callbacks[i](reason);
              }
              callbacks[0](reason);
              callbacks = null;
            };
          }
          return promise;
        }
        function findTargetIndex(observer) {
          var observers = this._observers;
          if (!observers) {
            return -1;
          }
          var len = observers.length;
          for (var i = 0; i < len; i++) {
            if (observers[i]._target === observer)
              return i;
          }
          return -1;
        }
        function searchListenerTree(handlers, type, tree, i, typeLength) {
          if (!tree) {
            return null;
          }
          if (i === 0) {
            var kind = typeof type;
            if (kind === "string") {
              var ns, n, l = 0, j = 0, delimiter = this.delimiter, dl = delimiter.length;
              if ((n = type.indexOf(delimiter)) !== -1) {
                ns = new Array(5);
                do {
                  ns[l++] = type.slice(j, n);
                  j = n + dl;
                } while ((n = type.indexOf(delimiter, j)) !== -1);
                ns[l++] = type.slice(j);
                type = ns;
                typeLength = l;
              } else {
                type = [type];
                typeLength = 1;
              }
            } else if (kind === "object") {
              typeLength = type.length;
            } else {
              type = [type];
              typeLength = 1;
            }
          }
          var listeners = null, branch, xTree, xxTree, isolatedBranch, endReached, currentType = type[i], nextType = type[i + 1], branches, _listeners;
          if (i === typeLength) {
            if (tree._listeners) {
              if (typeof tree._listeners === "function") {
                handlers && handlers.push(tree._listeners);
                listeners = [tree];
              } else {
                handlers && handlers.push.apply(handlers, tree._listeners);
                listeners = [tree];
              }
            }
          } else {
            if (currentType === "*") {
              branches = ownKeys(tree);
              n = branches.length;
              while (n-- > 0) {
                branch = branches[n];
                if (branch !== "_listeners") {
                  _listeners = searchListenerTree(handlers, type, tree[branch], i + 1, typeLength);
                  if (_listeners) {
                    if (listeners) {
                      listeners.push.apply(listeners, _listeners);
                    } else {
                      listeners = _listeners;
                    }
                  }
                }
              }
              return listeners;
            } else if (currentType === "**") {
              endReached = i + 1 === typeLength || i + 2 === typeLength && nextType === "*";
              if (endReached && tree._listeners) {
                listeners = searchListenerTree(handlers, type, tree, typeLength, typeLength);
              }
              branches = ownKeys(tree);
              n = branches.length;
              while (n-- > 0) {
                branch = branches[n];
                if (branch !== "_listeners") {
                  if (branch === "*" || branch === "**") {
                    if (tree[branch]._listeners && !endReached) {
                      _listeners = searchListenerTree(handlers, type, tree[branch], typeLength, typeLength);
                      if (_listeners) {
                        if (listeners) {
                          listeners.push.apply(listeners, _listeners);
                        } else {
                          listeners = _listeners;
                        }
                      }
                    }
                    _listeners = searchListenerTree(handlers, type, tree[branch], i, typeLength);
                  } else if (branch === nextType) {
                    _listeners = searchListenerTree(handlers, type, tree[branch], i + 2, typeLength);
                  } else {
                    _listeners = searchListenerTree(handlers, type, tree[branch], i, typeLength);
                  }
                  if (_listeners) {
                    if (listeners) {
                      listeners.push.apply(listeners, _listeners);
                    } else {
                      listeners = _listeners;
                    }
                  }
                }
              }
              return listeners;
            } else if (tree[currentType]) {
              listeners = searchListenerTree(handlers, type, tree[currentType], i + 1, typeLength);
            }
          }
          xTree = tree["*"];
          if (xTree) {
            searchListenerTree(handlers, type, xTree, i + 1, typeLength);
          }
          xxTree = tree["**"];
          if (xxTree) {
            if (i < typeLength) {
              if (xxTree._listeners) {
                searchListenerTree(handlers, type, xxTree, typeLength, typeLength);
              }
              branches = ownKeys(xxTree);
              n = branches.length;
              while (n-- > 0) {
                branch = branches[n];
                if (branch !== "_listeners") {
                  if (branch === nextType) {
                    searchListenerTree(handlers, type, xxTree[branch], i + 2, typeLength);
                  } else if (branch === currentType) {
                    searchListenerTree(handlers, type, xxTree[branch], i + 1, typeLength);
                  } else {
                    isolatedBranch = {};
                    isolatedBranch[branch] = xxTree[branch];
                    searchListenerTree(handlers, type, { "**": isolatedBranch }, i + 1, typeLength);
                  }
                }
              }
            } else if (xxTree._listeners) {
              searchListenerTree(handlers, type, xxTree, typeLength, typeLength);
            } else if (xxTree["*"] && xxTree["*"]._listeners) {
              searchListenerTree(handlers, type, xxTree["*"], typeLength, typeLength);
            }
          }
          return listeners;
        }
        function growListenerTree(type, listener, prepend) {
          var len = 0, j = 0, i, delimiter = this.delimiter, dl = delimiter.length, ns;
          if (typeof type === "string") {
            if ((i = type.indexOf(delimiter)) !== -1) {
              ns = new Array(5);
              do {
                ns[len++] = type.slice(j, i);
                j = i + dl;
              } while ((i = type.indexOf(delimiter, j)) !== -1);
              ns[len++] = type.slice(j);
            } else {
              ns = [type];
              len = 1;
            }
          } else {
            ns = type;
            len = type.length;
          }
          if (len > 1) {
            for (i = 0; i + 1 < len; i++) {
              if (ns[i] === "**" && ns[i + 1] === "**") {
                return;
              }
            }
          }
          var tree = this.listenerTree, name;
          for (i = 0; i < len; i++) {
            name = ns[i];
            tree = tree[name] || (tree[name] = {});
            if (i === len - 1) {
              if (!tree._listeners) {
                tree._listeners = listener;
              } else {
                if (typeof tree._listeners === "function") {
                  tree._listeners = [tree._listeners];
                }
                if (prepend) {
                  tree._listeners.unshift(listener);
                } else {
                  tree._listeners.push(listener);
                }
                if (!tree._listeners.warned && this._maxListeners > 0 && tree._listeners.length > this._maxListeners) {
                  tree._listeners.warned = true;
                  logPossibleMemoryLeak.call(this, tree._listeners.length, name);
                }
              }
              return true;
            }
          }
          return true;
        }
        function collectTreeEvents(tree, events, root, asArray) {
          var branches = ownKeys(tree);
          var i = branches.length;
          var branch, branchName, path;
          var hasListeners = tree["_listeners"];
          var isArrayPath;
          while (i-- > 0) {
            branchName = branches[i];
            branch = tree[branchName];
            if (branchName === "_listeners") {
              path = root;
            } else {
              path = root ? root.concat(branchName) : [branchName];
            }
            isArrayPath = asArray || typeof branchName === "symbol";
            hasListeners && events.push(isArrayPath ? path : path.join(this.delimiter));
            if (typeof branch === "object") {
              collectTreeEvents.call(this, branch, events, path, isArrayPath);
            }
          }
          return events;
        }
        function recursivelyGarbageCollect(root) {
          var keys = ownKeys(root);
          var i = keys.length;
          var obj, key, flag;
          while (i-- > 0) {
            key = keys[i];
            obj = root[key];
            if (obj) {
              flag = true;
              if (key !== "_listeners" && !recursivelyGarbageCollect(obj)) {
                delete root[key];
              }
            }
          }
          return flag;
        }
        function Listener(emitter, event, listener) {
          this.emitter = emitter;
          this.event = event;
          this.listener = listener;
        }
        Listener.prototype.off = function() {
          this.emitter.off(this.event, this.listener);
          return this;
        };
        function setupListener(event, listener, options) {
          if (options === true) {
            promisify = true;
          } else if (options === false) {
            async = true;
          } else {
            if (!options || typeof options !== "object") {
              throw TypeError("options should be an object or true");
            }
            var async = options.async;
            var promisify = options.promisify;
            var nextTick = options.nextTick;
            var objectify = options.objectify;
          }
          if (async || nextTick || promisify) {
            var _listener = listener;
            var _origin = listener._origin || listener;
            if (nextTick && !nextTickSupported) {
              throw Error("process.nextTick is not supported");
            }
            if (promisify === undefined2) {
              promisify = listener.constructor.name === "AsyncFunction";
            }
            listener = function() {
              var args = arguments;
              var context = this;
              var event2 = this.event;
              return promisify ? nextTick ? Promise.resolve() : new Promise(function(resolve) {
                _setImmediate(resolve);
              }).then(function() {
                context.event = event2;
                return _listener.apply(context, args);
              }) : (nextTick ? process.nextTick : _setImmediate)(function() {
                context.event = event2;
                _listener.apply(context, args);
              });
            };
            listener._async = true;
            listener._origin = _origin;
          }
          return [listener, objectify ? new Listener(this, event, listener) : this];
        }
        function EventEmitter(conf) {
          this._events = {};
          this._newListener = false;
          this._removeListener = false;
          this.verboseMemoryLeak = false;
          configure.call(this, conf);
        }
        EventEmitter.EventEmitter2 = EventEmitter;
        EventEmitter.prototype.listenTo = function(target, events, options) {
          if (typeof target !== "object") {
            throw TypeError("target musts be an object");
          }
          var emitter = this;
          options = resolveOptions(options, {
            on: undefined2,
            off: undefined2,
            reducers: undefined2
          }, {
            on: functionReducer,
            off: functionReducer,
            reducers: objectFunctionReducer
          });
          function listen(events2) {
            if (typeof events2 !== "object") {
              throw TypeError("events must be an object");
            }
            var reducers = options.reducers;
            var index = findTargetIndex.call(emitter, target);
            var observer;
            if (index === -1) {
              observer = new TargetObserver(emitter, target, options);
            } else {
              observer = emitter._observers[index];
            }
            var keys = ownKeys(events2);
            var len = keys.length;
            var event;
            var isSingleReducer = typeof reducers === "function";
            for (var i = 0; i < len; i++) {
              event = keys[i];
              observer.subscribe(
                event,
                events2[event] || event,
                isSingleReducer ? reducers : reducers && reducers[event]
              );
            }
          }
          isArray(events) ? listen(toObject(events)) : typeof events === "string" ? listen(toObject(events.split(/\s+/))) : listen(events);
          return this;
        };
        EventEmitter.prototype.stopListeningTo = function(target, event) {
          var observers = this._observers;
          if (!observers) {
            return false;
          }
          var i = observers.length;
          var observer;
          var matched = false;
          if (target && typeof target !== "object") {
            throw TypeError("target should be an object");
          }
          while (i-- > 0) {
            observer = observers[i];
            if (!target || observer._target === target) {
              observer.unsubscribe(event);
              matched = true;
            }
          }
          return matched;
        };
        EventEmitter.prototype.delimiter = ".";
        EventEmitter.prototype.setMaxListeners = function(n) {
          if (n !== undefined2) {
            this._maxListeners = n;
            if (!this._conf)
              this._conf = {};
            this._conf.maxListeners = n;
          }
        };
        EventEmitter.prototype.getMaxListeners = function() {
          return this._maxListeners;
        };
        EventEmitter.prototype.event = "";
        EventEmitter.prototype.once = function(event, fn, options) {
          return this._once(event, fn, false, options);
        };
        EventEmitter.prototype.prependOnceListener = function(event, fn, options) {
          return this._once(event, fn, true, options);
        };
        EventEmitter.prototype._once = function(event, fn, prepend, options) {
          return this._many(event, 1, fn, prepend, options);
        };
        EventEmitter.prototype.many = function(event, ttl, fn, options) {
          return this._many(event, ttl, fn, false, options);
        };
        EventEmitter.prototype.prependMany = function(event, ttl, fn, options) {
          return this._many(event, ttl, fn, true, options);
        };
        EventEmitter.prototype._many = function(event, ttl, fn, prepend, options) {
          var self2 = this;
          if (typeof fn !== "function") {
            throw new Error("many only accepts instances of Function");
          }
          function listener() {
            if (--ttl === 0) {
              self2.off(event, listener);
            }
            return fn.apply(this, arguments);
          }
          listener._origin = fn;
          return this._on(event, listener, prepend, options);
        };
        EventEmitter.prototype.emit = function() {
          if (!this._events && !this._all) {
            return false;
          }
          this._events || init.call(this);
          var type = arguments[0], ns, wildcard = this.wildcard;
          var args, l, i, j, containsSymbol;
          if (type === "newListener" && !this._newListener) {
            if (!this._events.newListener) {
              return false;
            }
          }
          if (wildcard) {
            ns = type;
            if (type !== "newListener" && type !== "removeListener") {
              if (typeof type === "object") {
                l = type.length;
                if (symbolsSupported) {
                  for (i = 0; i < l; i++) {
                    if (typeof type[i] === "symbol") {
                      containsSymbol = true;
                      break;
                    }
                  }
                }
                if (!containsSymbol) {
                  type = type.join(this.delimiter);
                }
              }
            }
          }
          var al = arguments.length;
          var handler;
          if (this._all && this._all.length) {
            handler = this._all.slice();
            for (i = 0, l = handler.length; i < l; i++) {
              this.event = type;
              switch (al) {
                case 1:
                  handler[i].call(this, type);
                  break;
                case 2:
                  handler[i].call(this, type, arguments[1]);
                  break;
                case 3:
                  handler[i].call(this, type, arguments[1], arguments[2]);
                  break;
                default:
                  handler[i].apply(this, arguments);
              }
            }
          }
          if (wildcard) {
            handler = [];
            searchListenerTree.call(this, handler, ns, this.listenerTree, 0, l);
          } else {
            handler = this._events[type];
            if (typeof handler === "function") {
              this.event = type;
              switch (al) {
                case 1:
                  handler.call(this);
                  break;
                case 2:
                  handler.call(this, arguments[1]);
                  break;
                case 3:
                  handler.call(this, arguments[1], arguments[2]);
                  break;
                default:
                  args = new Array(al - 1);
                  for (j = 1; j < al; j++)
                    args[j - 1] = arguments[j];
                  handler.apply(this, args);
              }
              return true;
            } else if (handler) {
              handler = handler.slice();
            }
          }
          if (handler && handler.length) {
            if (al > 3) {
              args = new Array(al - 1);
              for (j = 1; j < al; j++)
                args[j - 1] = arguments[j];
            }
            for (i = 0, l = handler.length; i < l; i++) {
              this.event = type;
              switch (al) {
                case 1:
                  handler[i].call(this);
                  break;
                case 2:
                  handler[i].call(this, arguments[1]);
                  break;
                case 3:
                  handler[i].call(this, arguments[1], arguments[2]);
                  break;
                default:
                  handler[i].apply(this, args);
              }
            }
            return true;
          } else if (!this.ignoreErrors && !this._all && type === "error") {
            if (arguments[1] instanceof Error) {
              throw arguments[1];
            } else {
              throw new Error("Uncaught, unspecified 'error' event.");
            }
          }
          return !!this._all;
        };
        EventEmitter.prototype.emitAsync = function() {
          if (!this._events && !this._all) {
            return false;
          }
          this._events || init.call(this);
          var type = arguments[0], wildcard = this.wildcard, ns, containsSymbol;
          var args, l, i, j;
          if (type === "newListener" && !this._newListener) {
            if (!this._events.newListener) {
              return Promise.resolve([false]);
            }
          }
          if (wildcard) {
            ns = type;
            if (type !== "newListener" && type !== "removeListener") {
              if (typeof type === "object") {
                l = type.length;
                if (symbolsSupported) {
                  for (i = 0; i < l; i++) {
                    if (typeof type[i] === "symbol") {
                      containsSymbol = true;
                      break;
                    }
                  }
                }
                if (!containsSymbol) {
                  type = type.join(this.delimiter);
                }
              }
            }
          }
          var promises = [];
          var al = arguments.length;
          var handler;
          if (this._all) {
            for (i = 0, l = this._all.length; i < l; i++) {
              this.event = type;
              switch (al) {
                case 1:
                  promises.push(this._all[i].call(this, type));
                  break;
                case 2:
                  promises.push(this._all[i].call(this, type, arguments[1]));
                  break;
                case 3:
                  promises.push(this._all[i].call(this, type, arguments[1], arguments[2]));
                  break;
                default:
                  promises.push(this._all[i].apply(this, arguments));
              }
            }
          }
          if (wildcard) {
            handler = [];
            searchListenerTree.call(this, handler, ns, this.listenerTree, 0);
          } else {
            handler = this._events[type];
          }
          if (typeof handler === "function") {
            this.event = type;
            switch (al) {
              case 1:
                promises.push(handler.call(this));
                break;
              case 2:
                promises.push(handler.call(this, arguments[1]));
                break;
              case 3:
                promises.push(handler.call(this, arguments[1], arguments[2]));
                break;
              default:
                args = new Array(al - 1);
                for (j = 1; j < al; j++)
                  args[j - 1] = arguments[j];
                promises.push(handler.apply(this, args));
            }
          } else if (handler && handler.length) {
            handler = handler.slice();
            if (al > 3) {
              args = new Array(al - 1);
              for (j = 1; j < al; j++)
                args[j - 1] = arguments[j];
            }
            for (i = 0, l = handler.length; i < l; i++) {
              this.event = type;
              switch (al) {
                case 1:
                  promises.push(handler[i].call(this));
                  break;
                case 2:
                  promises.push(handler[i].call(this, arguments[1]));
                  break;
                case 3:
                  promises.push(handler[i].call(this, arguments[1], arguments[2]));
                  break;
                default:
                  promises.push(handler[i].apply(this, args));
              }
            }
          } else if (!this.ignoreErrors && !this._all && type === "error") {
            if (arguments[1] instanceof Error) {
              return Promise.reject(arguments[1]);
            } else {
              return Promise.reject("Uncaught, unspecified 'error' event.");
            }
          }
          return Promise.all(promises);
        };
        EventEmitter.prototype.on = function(type, listener, options) {
          return this._on(type, listener, false, options);
        };
        EventEmitter.prototype.prependListener = function(type, listener, options) {
          return this._on(type, listener, true, options);
        };
        EventEmitter.prototype.onAny = function(fn) {
          return this._onAny(fn, false);
        };
        EventEmitter.prototype.prependAny = function(fn) {
          return this._onAny(fn, true);
        };
        EventEmitter.prototype.addListener = EventEmitter.prototype.on;
        EventEmitter.prototype._onAny = function(fn, prepend) {
          if (typeof fn !== "function") {
            throw new Error("onAny only accepts instances of Function");
          }
          if (!this._all) {
            this._all = [];
          }
          if (prepend) {
            this._all.unshift(fn);
          } else {
            this._all.push(fn);
          }
          return this;
        };
        EventEmitter.prototype._on = function(type, listener, prepend, options) {
          if (typeof type === "function") {
            this._onAny(type, listener);
            return this;
          }
          if (typeof listener !== "function") {
            throw new Error("on only accepts instances of Function");
          }
          this._events || init.call(this);
          var returnValue = this, temp;
          if (options !== undefined2) {
            temp = setupListener.call(this, type, listener, options);
            listener = temp[0];
            returnValue = temp[1];
          }
          if (this._newListener) {
            this.emit("newListener", type, listener);
          }
          if (this.wildcard) {
            growListenerTree.call(this, type, listener, prepend);
            return returnValue;
          }
          if (!this._events[type]) {
            this._events[type] = listener;
          } else {
            if (typeof this._events[type] === "function") {
              this._events[type] = [this._events[type]];
            }
            if (prepend) {
              this._events[type].unshift(listener);
            } else {
              this._events[type].push(listener);
            }
            if (!this._events[type].warned && this._maxListeners > 0 && this._events[type].length > this._maxListeners) {
              this._events[type].warned = true;
              logPossibleMemoryLeak.call(this, this._events[type].length, type);
            }
          }
          return returnValue;
        };
        EventEmitter.prototype.off = function(type, listener) {
          if (typeof listener !== "function") {
            throw new Error("removeListener only takes instances of Function");
          }
          var handlers, leafs = [];
          if (this.wildcard) {
            var ns = typeof type === "string" ? type.split(this.delimiter) : type.slice();
            leafs = searchListenerTree.call(this, null, ns, this.listenerTree, 0);
            if (!leafs)
              return this;
          } else {
            if (!this._events[type])
              return this;
            handlers = this._events[type];
            leafs.push({ _listeners: handlers });
          }
          for (var iLeaf = 0; iLeaf < leafs.length; iLeaf++) {
            var leaf = leafs[iLeaf];
            handlers = leaf._listeners;
            if (isArray(handlers)) {
              var position = -1;
              for (var i = 0, length = handlers.length; i < length; i++) {
                if (handlers[i] === listener || handlers[i].listener && handlers[i].listener === listener || handlers[i]._origin && handlers[i]._origin === listener) {
                  position = i;
                  break;
                }
              }
              if (position < 0) {
                continue;
              }
              if (this.wildcard) {
                leaf._listeners.splice(position, 1);
              } else {
                this._events[type].splice(position, 1);
              }
              if (handlers.length === 0) {
                if (this.wildcard) {
                  delete leaf._listeners;
                } else {
                  delete this._events[type];
                }
              }
              if (this._removeListener)
                this.emit("removeListener", type, listener);
              return this;
            } else if (handlers === listener || handlers.listener && handlers.listener === listener || handlers._origin && handlers._origin === listener) {
              if (this.wildcard) {
                delete leaf._listeners;
              } else {
                delete this._events[type];
              }
              if (this._removeListener)
                this.emit("removeListener", type, listener);
            }
          }
          this.listenerTree && recursivelyGarbageCollect(this.listenerTree);
          return this;
        };
        EventEmitter.prototype.offAny = function(fn) {
          var i = 0, l = 0, fns;
          if (fn && this._all && this._all.length > 0) {
            fns = this._all;
            for (i = 0, l = fns.length; i < l; i++) {
              if (fn === fns[i]) {
                fns.splice(i, 1);
                if (this._removeListener)
                  this.emit("removeListenerAny", fn);
                return this;
              }
            }
          } else {
            fns = this._all;
            if (this._removeListener) {
              for (i = 0, l = fns.length; i < l; i++)
                this.emit("removeListenerAny", fns[i]);
            }
            this._all = [];
          }
          return this;
        };
        EventEmitter.prototype.removeListener = EventEmitter.prototype.off;
        EventEmitter.prototype.removeAllListeners = function(type) {
          if (type === undefined2) {
            !this._events || init.call(this);
            return this;
          }
          if (this.wildcard) {
            var leafs = searchListenerTree.call(this, null, type, this.listenerTree, 0), leaf, i;
            if (!leafs)
              return this;
            for (i = 0; i < leafs.length; i++) {
              leaf = leafs[i];
              leaf._listeners = null;
            }
            this.listenerTree && recursivelyGarbageCollect(this.listenerTree);
          } else if (this._events) {
            this._events[type] = null;
          }
          return this;
        };
        EventEmitter.prototype.listeners = function(type) {
          var _events = this._events;
          var keys, listeners, allListeners;
          var i;
          var listenerTree;
          if (type === undefined2) {
            if (this.wildcard) {
              throw Error("event name required for wildcard emitter");
            }
            if (!_events) {
              return [];
            }
            keys = ownKeys(_events);
            i = keys.length;
            allListeners = [];
            while (i-- > 0) {
              listeners = _events[keys[i]];
              if (typeof listeners === "function") {
                allListeners.push(listeners);
              } else {
                allListeners.push.apply(allListeners, listeners);
              }
            }
            return allListeners;
          } else {
            if (this.wildcard) {
              listenerTree = this.listenerTree;
              if (!listenerTree)
                return [];
              var handlers = [];
              var ns = typeof type === "string" ? type.split(this.delimiter) : type.slice();
              searchListenerTree.call(this, handlers, ns, listenerTree, 0);
              return handlers;
            }
            if (!_events) {
              return [];
            }
            listeners = _events[type];
            if (!listeners) {
              return [];
            }
            return typeof listeners === "function" ? [listeners] : listeners;
          }
        };
        EventEmitter.prototype.eventNames = function(nsAsArray) {
          var _events = this._events;
          return this.wildcard ? collectTreeEvents.call(this, this.listenerTree, [], null, nsAsArray) : _events ? ownKeys(_events) : [];
        };
        EventEmitter.prototype.listenerCount = function(type) {
          return this.listeners(type).length;
        };
        EventEmitter.prototype.hasListeners = function(type) {
          if (this.wildcard) {
            var handlers = [];
            var ns = typeof type === "string" ? type.split(this.delimiter) : type.slice();
            searchListenerTree.call(this, handlers, ns, this.listenerTree, 0);
            return handlers.length > 0;
          }
          var _events = this._events;
          var _all = this._all;
          return !!(_all && _all.length || _events && (type === undefined2 ? ownKeys(_events).length : _events[type]));
        };
        EventEmitter.prototype.listenersAny = function() {
          if (this._all) {
            return this._all;
          } else {
            return [];
          }
        };
        EventEmitter.prototype.waitFor = function(event, options) {
          var self2 = this;
          var type = typeof options;
          if (type === "number") {
            options = { timeout: options };
          } else if (type === "function") {
            options = { filter: options };
          }
          options = resolveOptions(options, {
            timeout: 0,
            filter: undefined2,
            handleError: false,
            Promise,
            overload: false
          }, {
            filter: functionReducer,
            Promise: constructorReducer
          });
          return makeCancelablePromise(options.Promise, function(resolve, reject, onCancel) {
            function listener() {
              var filter = options.filter;
              if (filter && !filter.apply(self2, arguments)) {
                return;
              }
              self2.off(event, listener);
              if (options.handleError) {
                var err = arguments[0];
                err ? reject(err) : resolve(toArray.apply(null, arguments).slice(1));
              } else {
                resolve(toArray.apply(null, arguments));
              }
            }
            onCancel(function() {
              self2.off(event, listener);
            });
            self2._on(event, listener, false);
          }, {
            timeout: options.timeout,
            overload: options.overload
          });
        };
        function once(emitter, name, options) {
          options = resolveOptions(options, {
            Promise,
            timeout: 0,
            overload: false
          }, {
            Promise: constructorReducer
          });
          var _Promise = options.Promise;
          return makeCancelablePromise(_Promise, function(resolve, reject, onCancel) {
            var handler;
            if (typeof emitter.addEventListener === "function") {
              handler = function() {
                resolve(toArray.apply(null, arguments));
              };
              onCancel(function() {
                emitter.removeEventListener(name, handler);
              });
              emitter.addEventListener(
                name,
                handler,
                { once: true }
              );
              return;
            }
            var eventListener = function() {
              errorListener && emitter.removeListener("error", errorListener);
              resolve(toArray.apply(null, arguments));
            };
            var errorListener;
            if (name !== "error") {
              errorListener = function(err) {
                emitter.removeListener(name, eventListener);
                reject(err);
              };
              emitter.once("error", errorListener);
            }
            onCancel(function() {
              errorListener && emitter.removeListener("error", errorListener);
              emitter.removeListener(name, eventListener);
            });
            emitter.once(name, eventListener);
          }, {
            timeout: options.timeout,
            overload: options.overload
          });
        }
        var prototype = EventEmitter.prototype;
        Object.defineProperties(EventEmitter, {
          defaultMaxListeners: {
            get: function() {
              return prototype._maxListeners;
            },
            set: function(n) {
              if (typeof n !== "number" || n < 0 || Number.isNaN(n)) {
                throw TypeError("n must be a non-negative number");
              }
              prototype._maxListeners = n;
            },
            enumerable: true
          },
          once: {
            value: once,
            writable: true,
            configurable: true
          }
        });
        Object.defineProperties(prototype, {
          _maxListeners: {
            value: defaultMaxListeners,
            writable: true,
            configurable: true
          },
          _observers: { value: null, writable: true, configurable: true }
        });
        if (typeof define === "function" && define.amd) {
          define(function() {
            return EventEmitter;
          });
        } else if (typeof exports === "object") {
          module.exports = EventEmitter;
        } else {
          var _global = new Function("", "return this")();
          _global.EventEmitter2 = EventEmitter;
        }
      }();
    }
  });

  // node_modules/starboy-framework/dist/packages/core/utils/event-emitter.js
  var require_event_emitter = __commonJS({
    "node_modules/starboy-framework/dist/packages/core/utils/event-emitter.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.eventEmitter = void 0;
      var eventemitter2_1 = require_eventemitter2();
      var container_1 = require_container2();
      exports.eventEmitter = new eventemitter2_1.EventEmitter2();
      container_1.default.bind(eventemitter2_1.EventEmitter2).toDynamicValue(() => exports.eventEmitter);
    }
  });

  // node_modules/starboy-framework/dist/packages/core/utils/index.js
  var require_utils = __commonJS({
    "node_modules/starboy-framework/dist/packages/core/utils/index.js"(exports) {
      "use strict";
      var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
        if (k2 === void 0)
          k2 = k;
        var desc = Object.getOwnPropertyDescriptor(m, k);
        if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
          desc = { enumerable: true, get: function() {
            return m[k];
          } };
        }
        Object.defineProperty(o, k2, desc);
      } : function(o, m, k, k2) {
        if (k2 === void 0)
          k2 = k;
        o[k2] = m[k];
      });
      var __exportStar = exports && exports.__exportStar || function(m, exports2) {
        for (var p in m)
          if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p))
            __createBinding(exports2, m, p);
      };
      Object.defineProperty(exports, "__esModule", { value: true });
      __exportStar(require_event_emitter(), exports);
    }
  });

  // node_modules/starboy-framework/dist/packages/core/enums/console-color.enum.js
  var require_console_color_enum = __commonJS({
    "node_modules/starboy-framework/dist/packages/core/enums/console-color.enum.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.ConsoleColor = void 0;
      var ConsoleColor;
      (function(ConsoleColor2) {
        ConsoleColor2["White"] = "^0";
        ConsoleColor2["Red"] = "^1";
        ConsoleColor2["Green"] = "^2";
        ConsoleColor2["Yellow"] = "^3";
        ConsoleColor2["Blue"] = "^4";
        ConsoleColor2["LightBlue"] = "^5";
        ConsoleColor2["Purple"] = "^6";
        ConsoleColor2["White2"] = "^7";
        ConsoleColor2["Orange"] = "^8";
        ConsoleColor2["Grey"] = "^9";
      })(ConsoleColor = exports.ConsoleColor || (exports.ConsoleColor = {}));
    }
  });

  // node_modules/starboy-framework/dist/packages/core/enums/index.js
  var require_enums = __commonJS({
    "node_modules/starboy-framework/dist/packages/core/enums/index.js"(exports) {
      "use strict";
      var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
        if (k2 === void 0)
          k2 = k;
        var desc = Object.getOwnPropertyDescriptor(m, k);
        if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
          desc = { enumerable: true, get: function() {
            return m[k];
          } };
        }
        Object.defineProperty(o, k2, desc);
      } : function(o, m, k, k2) {
        if (k2 === void 0)
          k2 = k;
        o[k2] = m[k];
      });
      var __exportStar = exports && exports.__exportStar || function(m, exports2) {
        for (var p in m)
          if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p))
            __createBinding(exports2, m, p);
      };
      Object.defineProperty(exports, "__esModule", { value: true });
      __exportStar(require_console_color_enum(), exports);
    }
  });

  // node_modules/starboy-framework/dist/packages/core/application/app.js
  var require_app = __commonJS({
    "node_modules/starboy-framework/dist/packages/core/application/app.js"(exports) {
      "use strict";
      var __awaiter = exports && exports.__awaiter || function(thisArg, _arguments, P, generator) {
        function adopt(value) {
          return value instanceof P ? value : new P(function(resolve) {
            resolve(value);
          });
        }
        return new (P || (P = Promise))(function(resolve, reject) {
          function fulfilled(value) {
            try {
              step(generator.next(value));
            } catch (e) {
              reject(e);
            }
          }
          function rejected(value) {
            try {
              step(generator["throw"](value));
            } catch (e) {
              reject(e);
            }
          }
          function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
          }
          step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
      };
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.App = void 0;
      var container_1 = require_container2();
      var const_1 = require_const();
      var helpers_1 = require_helpers();
      var utils_1 = require_utils();
      var enums_1 = require_enums();
      var App2 = class {
        constructor() {
          this.controllers = /* @__PURE__ */ new Set();
          this.devMode = GetConvar("env", "production") !== "production";
          this.processGuard = (g) => {
            var _a;
            if (typeof g === "function") {
              if ((_a = g === null || g === void 0 ? void 0 : g.prototype) === null || _a === void 0 ? void 0 : _a.canAccess) {
                return this.container.get(g);
              } else {
                return { canAccess: g };
              }
            }
          };
          this.getControllerName = (c) => {
            const name = Reflect.getMetadata(const_1.CONTROLLER, c);
            if (!name)
              throw new Error(`${c.constructor} is not decorated as Controller`);
            return name;
          };
        }
        static create(arg) {
          var _a;
          const app = new App2();
          (_a = arg.controllers) === null || _a === void 0 ? void 0 : _a.forEach((controller) => {
            return app.controllers.add(controller);
          });
          app.options = arg.options || null;
          return app;
        }
        start() {
          return __awaiter(this, void 0, void 0, function* () {
            this.container = container_1.default;
            if (!this.container)
              throw new Error("[ORP] Container is not set");
            for (const controllerKey of this.controllers.keys()) {
              const controller = this.container.get(controllerKey);
              this.initEvents(controller);
              this.initNuis(controller);
              this.initExports(controller);
              this.initLocalEvents(controller);
              this.initNetEvents(controller);
              this.initNetCallbackEvents(controller);
              this.initTicks(controller);
              this.initExportCallbacks(controller);
              this.initOnReady(controller);
              this.initChatCommands(controller);
              this.initTunnelEvents(controller);
            }
            RegisterCommand("devmode", (source2, args, rawCommand) => {
              if (source2 === 0) {
                this.devMode = !this.devMode;
              }
              if (this.devMode) {
                console.log(`${enums_1.ConsoleColor.Yellow}[DEV MODE]${enums_1.ConsoleColor.White}:${enums_1.ConsoleColor.Green}True${enums_1.ConsoleColor.White}`);
              } else {
                console.log(`${enums_1.ConsoleColor.Yellow}[DEV MODE]${enums_1.ConsoleColor.White}:${enums_1.ConsoleColor.Red}False${enums_1.ConsoleColor.White}`);
              }
            }, true);
            console.log("[ORP][Core]APP Started");
          });
        }
        initEvents(controller) {
          const metadata = (0, helpers_1.extractMetadata)(const_1.EVENT, controller) || [];
          metadata.forEach(({ name, propertyKey }) => {
            console.log(`Events: ${name}`);
            on(name, (...args) => {
              if (this.devMode)
                console.log(`Event:${enums_1.ConsoleColor.Green}${name}${enums_1.ConsoleColor.White}`, `Args: ${enums_1.ConsoleColor.Yellow}`, ...args, `${enums_1.ConsoleColor.White}`);
              return controller[propertyKey](...args);
            });
          });
        }
        initExports(controller) {
          const metadata = (0, helpers_1.extractMetadata)(const_1.EXPORT, controller) || [];
          metadata.forEach(({ name, propertyKey }) => {
            let _name = "";
            if (name) {
              _name = name;
            } else {
              _name = `${this.getControllerName(controller)}_${String(propertyKey)}`;
            }
            console.log(`Exports: ${_name}`);
            global.exports(_name, (...args) => controller[propertyKey](...args));
          });
        }
        initLocalEvents(controller) {
          const metadata = (0, helpers_1.extractMetadata)(const_1.LOCAL_EVENT, controller) || [];
          metadata.forEach(({ name, propertyKey }) => {
            console.log(`LocalEvents: ${name}`);
            utils_1.eventEmitter.on(name, (...args) => controller[propertyKey](...args));
          });
        }
        initNetEvents(controller) {
          const metadata = (0, helpers_1.extractMetadata)(const_1.NET_EVENT, controller) || [];
          metadata.forEach(({ name, propertyKey }) => {
            console.log(`NetEvents: ${name}`);
            onNet(name, (...args) => {
              if (this.devMode)
                console.log(`NetEvents:${enums_1.ConsoleColor.Green}${name}${enums_1.ConsoleColor.White}`, `Source: ${enums_1.ConsoleColor.Red}${source}${enums_1.ConsoleColor.White}`, `Args: ${enums_1.ConsoleColor.Yellow}`, ...args, `${enums_1.ConsoleColor.White}`);
              controller[propertyKey](...args);
            });
          });
        }
        initNuis(controller) {
          const metadata = (0, helpers_1.extractMetadata)(const_1.NUI, controller) || [];
          metadata.forEach(({ name, propertyKey }) => {
            console.log(`NuiEvents: ${name}`);
            RegisterNuiCallback(name, (...args) => controller[propertyKey](...args));
          });
        }
        initNetCallbackEvents(controller) {
          const metadata = (0, helpers_1.extractMetadata)(const_1.NET_CALLBACK, controller) || [];
          metadata.forEach(({ name, propertyKey }) => {
            console.log(`CallbackEvents: ${name}`);
            onNet(`_server_callback:${name}`, (...args) => __awaiter(this, void 0, void 0, function* () {
              if (this.devMode)
                console.log(`CallbackEvents:${enums_1.ConsoleColor.Green}${name}${enums_1.ConsoleColor.White}`, `Source: ${enums_1.ConsoleColor.Red}${source}${enums_1.ConsoleColor.White}`, `Args: ${enums_1.ConsoleColor.Yellow}`, ...args, `${enums_1.ConsoleColor.White}`);
              const _source = String(source);
              try {
                const response = yield controller[propertyKey](...args);
                emitNet(`_server_response:${name}:${_source}`, _source, response);
              } catch (error) {
                console.error(error);
                emitNet(`_server_response:${name}:${_source}`, _source, void 0);
              }
            }));
          });
        }
        initTicks(controller) {
          const metadata = (0, helpers_1.extractMetadata)(const_1.TICK, controller) || [];
          metadata.forEach(({ interval, propertyKey }) => {
            const method = controller[propertyKey].bind(controller);
            if (interval === 0) {
              setTick(method);
            } else {
              setTick(() => __awaiter(this, void 0, void 0, function* () {
                yield new Promise((resolve) => setTimeout(resolve, interval));
                yield method();
              }));
            }
          });
        }
        initOnReady(controller) {
          const metadata = (0, helpers_1.extractMetadata)(const_1.ONREADY, controller) || [];
          metadata.forEach(({ delay, propertyKey }) => {
            const method = controller[propertyKey].bind(controller);
            if (delay === 0) {
              method();
            } else {
              setTimeout(method, delay);
            }
          });
        }
        initTunnelEvents(controller) {
          const controllerName = this.getControllerName(controller);
          const tunnels = (0, helpers_1.extractMetadata)(const_1.TUNNEL, controller) || [];
          const tunnel = {};
          const Context = (args) => {
            var _a;
            return {
              args,
              session: {},
              type: const_1.TUNNEL,
              source: (_a = args[0]) === null || _a === void 0 ? void 0 : _a.toString()
            };
          };
          tunnels.forEach(({ propertyKey }) => {
            var _a;
            const guards = (_a = Reflect.getMetadata(const_1.GUARD, controller, propertyKey)) === null || _a === void 0 ? void 0 : _a.map(this.processGuard);
            const parameters = Reflect.getMetadata(const_1.PARAMETER, controller, propertyKey);
            tunnel[propertyKey] = (context) => __awaiter(this, void 0, void 0, function* () {
              if (guards) {
                yield guards.forEach((guard) => __awaiter(this, void 0, void 0, function* () {
                  if (!(yield guard.canAccess(context))) {
                    return;
                  }
                }));
              }
              if (parameters) {
                for (let i = 0; i < parameters.length; i++) {
                  const result = yield parameters[i](context);
                  if (!result) {
                    return;
                  }
                  context.args.splice(i, 0, result);
                }
              }
              yield controller[propertyKey](...context.args);
            });
          });
          this.createTunnel(controllerName, Context, tunnel);
        }
        initExportCallbacks(controller) {
          const metadata = (0, helpers_1.extractMetadata)(const_1.EXPORT_CALLBACK, controller) || [];
          metadata.forEach(({ resource, method, args, propertyKey }) => {
            global.exports[resource][method]((...params) => {
              controller[propertyKey](...params);
            }, ...args);
          });
        }
        createTunnel(controllerName, Context, tunnel) {
          onNet(`${const_1.RESOURCE_NAME}:${controllerName}:tunnel-request`, (method, id, ...args) => __awaiter(this, void 0, void 0, function* () {
            const context = Context(args);
            context.session.method = method;
            const cb = tunnel[method];
            const res = cb ? yield cb(context) : null;
            emitNet("tunnel-response", context.source, id, res);
          }));
          onNet(`${const_1.RESOURCE_NAME}:${controllerName}:tunnel`, (method, ...args) => __awaiter(this, void 0, void 0, function* () {
            const context = Context(args);
            context.session.method = method;
            const cb = tunnel[method];
            cb && (yield cb(context));
          }));
        }
        initChatCommands(controller) {
          const commands = (0, helpers_1.extractMetadata)(const_1.CHAT_COMMAND, controller) || [];
          commands.forEach((chatCommand) => {
            var _a;
            const { command, propertyKey, description, params } = chatCommand;
            const guards = (_a = Reflect.getMetadata(const_1.GUARD, controller, propertyKey)) === null || _a === void 0 ? void 0 : _a.map(this.processGuard);
            const parameters = Reflect.getMetadata(const_1.PARAMETER, controller, propertyKey);
            const Context = (args) => {
              var _a2;
              return {
                args,
                session: {},
                type: const_1.CHAT_COMMAND,
                source: (_a2 = args[0]) === null || _a2 === void 0 ? void 0 : _a2.toString()
              };
            };
            RegisterCommand(command, (...args) => __awaiter(this, void 0, void 0, function* () {
              const context = Context(args);
              context.session.command = command;
              if (guards) {
                for (const guard of guards) {
                  if (!(yield guard.canAccess(context))) {
                    return;
                  }
                }
              }
              if (parameters) {
                for (let i = 0; i < parameters.length; i++) {
                  const res = yield parameters[i](context);
                  if (!res) {
                    return;
                  }
                  context.args.splice(i, 0, res);
                }
              }
              yield controller[propertyKey](...context.args);
            }), false);
            setTimeout(() => {
              emit("chat:addSuggestion", `/${command}`, description, params);
            }, 1e3);
            if (IsDuplicityVersion()) {
              emitNet("chat:addSuggestion", -1, `/${command}`, description, params);
            }
          });
        }
      };
      exports.App = App2;
    }
  });

  // node_modules/starboy-framework/dist/packages/core/application/index.js
  var require_application = __commonJS({
    "node_modules/starboy-framework/dist/packages/core/application/index.js"(exports) {
      "use strict";
      var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
        if (k2 === void 0)
          k2 = k;
        var desc = Object.getOwnPropertyDescriptor(m, k);
        if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
          desc = { enumerable: true, get: function() {
            return m[k];
          } };
        }
        Object.defineProperty(o, k2, desc);
      } : function(o, m, k, k2) {
        if (k2 === void 0)
          k2 = k;
        o[k2] = m[k];
      });
      var __exportStar = exports && exports.__exportStar || function(m, exports2) {
        for (var p in m)
          if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p))
            __createBinding(exports2, m, p);
      };
      Object.defineProperty(exports, "__esModule", { value: true });
      __exportStar(require_app(), exports);
    }
  });

  // node_modules/starboy-framework/dist/packages/core/decorators/di/injectable.decorator.js
  var require_injectable_decorator = __commonJS({
    "node_modules/starboy-framework/dist/packages/core/decorators/di/injectable.decorator.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.Injectable = void 0;
      var inversify_1 = require_inversify();
      var container_1 = require_container2();
      var Injectable = (token) => (target) => {
        (0, inversify_1.decorate)((0, inversify_1.injectable)(), target);
        container_1.default.bind(token || target).to(target).inSingletonScope();
        container_1.default.bind(`${target.name}Factory`).toFactory((context) => {
          return () => {
            return context.container.get(target);
          };
        });
      };
      exports.Injectable = Injectable;
    }
  });

  // node_modules/starboy-framework/dist/packages/core/decorators/classes/controller.decorator.js
  var require_controller_decorator = __commonJS({
    "node_modules/starboy-framework/dist/packages/core/decorators/classes/controller.decorator.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.Controller = void 0;
      var const_1 = require_const();
      var injectable_decorator_1 = require_injectable_decorator();
      var Controller2 = (name) => (target) => {
        name || (name = target.name);
        Reflect.defineMetadata(const_1.CONTROLLER, name, target.prototype);
        Reflect.decorate([(0, injectable_decorator_1.Injectable)()], target);
      };
      exports.Controller = Controller2;
    }
  });

  // node_modules/starboy-framework/dist/packages/core/decorators/classes/index.js
  var require_classes = __commonJS({
    "node_modules/starboy-framework/dist/packages/core/decorators/classes/index.js"(exports) {
      "use strict";
      var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
        if (k2 === void 0)
          k2 = k;
        var desc = Object.getOwnPropertyDescriptor(m, k);
        if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
          desc = { enumerable: true, get: function() {
            return m[k];
          } };
        }
        Object.defineProperty(o, k2, desc);
      } : function(o, m, k, k2) {
        if (k2 === void 0)
          k2 = k;
        o[k2] = m[k];
      });
      var __exportStar = exports && exports.__exportStar || function(m, exports2) {
        for (var p in m)
          if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p))
            __createBinding(exports2, m, p);
      };
      Object.defineProperty(exports, "__esModule", { value: true });
      __exportStar(require_controller_decorator(), exports);
    }
  });

  // node_modules/starboy-framework/dist/packages/core/decorators/di/inject.decorator.js
  var require_inject_decorator = __commonJS({
    "node_modules/starboy-framework/dist/packages/core/decorators/di/inject.decorator.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.Inject = void 0;
      var inversify_1 = require_inversify();
      exports.Inject = inversify_1.inject;
    }
  });

  // node_modules/inversify-inject-decorators/lib/decorators.js
  var require_decorators = __commonJS({
    "node_modules/inversify-inject-decorators/lib/decorators.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      var INJECTION = Symbol.for("INJECTION");
      function _proxyGetter(proto, key, resolve, doCache) {
        function getter() {
          if (doCache && !Reflect.hasMetadata(INJECTION, this, key)) {
            Reflect.defineMetadata(INJECTION, resolve(), this, key);
          }
          if (Reflect.hasMetadata(INJECTION, this, key)) {
            return Reflect.getMetadata(INJECTION, this, key);
          } else {
            return resolve();
          }
        }
        function setter(newVal) {
          Reflect.defineMetadata(INJECTION, newVal, this, key);
        }
        Object.defineProperty(proto, key, {
          configurable: true,
          enumerable: true,
          get: getter,
          set: setter
        });
      }
      function makePropertyInjectDecorator(container, doCache) {
        return function(serviceIdentifier) {
          return function(proto, key) {
            var resolve = function() {
              return container.get(serviceIdentifier);
            };
            _proxyGetter(proto, key, resolve, doCache);
          };
        };
      }
      exports.makePropertyInjectDecorator = makePropertyInjectDecorator;
      function makePropertyInjectNamedDecorator(container, doCache) {
        return function(serviceIdentifier, named) {
          return function(proto, key) {
            var resolve = function() {
              return container.getNamed(serviceIdentifier, named);
            };
            _proxyGetter(proto, key, resolve, doCache);
          };
        };
      }
      exports.makePropertyInjectNamedDecorator = makePropertyInjectNamedDecorator;
      function makePropertyInjectTaggedDecorator(container, doCache) {
        return function(serviceIdentifier, key, value) {
          return function(proto, propertyName) {
            var resolve = function() {
              return container.getTagged(serviceIdentifier, key, value);
            };
            _proxyGetter(proto, propertyName, resolve, doCache);
          };
        };
      }
      exports.makePropertyInjectTaggedDecorator = makePropertyInjectTaggedDecorator;
      function makePropertyMultiInjectDecorator(container, doCache) {
        return function(serviceIdentifier) {
          return function(proto, key) {
            var resolve = function() {
              return container.getAll(serviceIdentifier);
            };
            _proxyGetter(proto, key, resolve, doCache);
          };
        };
      }
      exports.makePropertyMultiInjectDecorator = makePropertyMultiInjectDecorator;
    }
  });

  // node_modules/inversify-inject-decorators/lib/index.js
  var require_lib = __commonJS({
    "node_modules/inversify-inject-decorators/lib/index.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      var decorators_1 = require_decorators();
      function getDecorators(container, doCache) {
        if (doCache === void 0) {
          doCache = true;
        }
        var lazyInject = decorators_1.makePropertyInjectDecorator(container, doCache);
        var lazyInjectNamed = decorators_1.makePropertyInjectNamedDecorator(container, doCache);
        var lazyInjectTagged = decorators_1.makePropertyInjectTaggedDecorator(container, doCache);
        var lazyMultiInject = decorators_1.makePropertyMultiInjectDecorator(container, doCache);
        return {
          lazyInject,
          lazyInjectNamed,
          lazyInjectTagged,
          lazyMultiInject
        };
      }
      exports.default = getDecorators;
    }
  });

  // node_modules/starboy-framework/dist/packages/core/decorators/di/lazyInject.decorator.js
  var require_lazyInject_decorator = __commonJS({
    "node_modules/starboy-framework/dist/packages/core/decorators/di/lazyInject.decorator.js"(exports) {
      "use strict";
      var _a;
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.lazyServiceIdentifer = exports.lazyMultiInject = exports.lazyInjectTagged = exports.lazyInjectNamed = exports.lazyInject = void 0;
      var container_1 = require_container2();
      var inversify_inject_decorators_1 = require_lib();
      var inversify_1 = require_inversify();
      _a = (0, inversify_inject_decorators_1.default)(container_1.default), exports.lazyInject = _a.lazyInject, exports.lazyInjectNamed = _a.lazyInjectNamed, exports.lazyInjectTagged = _a.lazyInjectTagged, exports.lazyMultiInject = _a.lazyMultiInject;
      exports.lazyServiceIdentifer = inversify_1.LazyServiceIdentifer;
    }
  });

  // node_modules/starboy-framework/dist/packages/core/decorators/di/index.js
  var require_di = __commonJS({
    "node_modules/starboy-framework/dist/packages/core/decorators/di/index.js"(exports) {
      "use strict";
      var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
        if (k2 === void 0)
          k2 = k;
        var desc = Object.getOwnPropertyDescriptor(m, k);
        if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
          desc = { enumerable: true, get: function() {
            return m[k];
          } };
        }
        Object.defineProperty(o, k2, desc);
      } : function(o, m, k, k2) {
        if (k2 === void 0)
          k2 = k;
        o[k2] = m[k];
      });
      var __exportStar = exports && exports.__exportStar || function(m, exports2) {
        for (var p in m)
          if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p))
            __createBinding(exports2, m, p);
      };
      Object.defineProperty(exports, "__esModule", { value: true });
      __exportStar(require_injectable_decorator(), exports);
      __exportStar(require_inject_decorator(), exports);
      __exportStar(require_lazyInject_decorator(), exports);
    }
  });

  // node_modules/starboy-framework/dist/packages/core/decorators/events/chat-command.decorator.js
  var require_chat_command_decorator = __commonJS({
    "node_modules/starboy-framework/dist/packages/core/decorators/events/chat-command.decorator.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.ChatCommand = void 0;
      var helpers_1 = require_helpers();
      var metadata_keys_constant_1 = require_metadata_keys_constant();
      var ChatCommand = (command, description, params) => (target, propertyKey) => {
        (0, helpers_1.extendArrayMetadata)(metadata_keys_constant_1.CHAT_COMMAND, target, {
          command,
          propertyKey,
          description,
          params
        });
      };
      exports.ChatCommand = ChatCommand;
    }
  });

  // node_modules/starboy-framework/dist/packages/core/decorators/events/event.decorator.js
  var require_event_decorator = __commonJS({
    "node_modules/starboy-framework/dist/packages/core/decorators/events/event.decorator.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.Event = void 0;
      var helpers_1 = require_helpers();
      var const_1 = require_const();
      var Event = (name) => (target, propertyKey) => {
        (0, helpers_1.extendArrayMetadata)(const_1.EVENT, target, { name, propertyKey });
      };
      exports.Event = Event;
    }
  });

  // node_modules/starboy-framework/dist/packages/core/decorators/events/export-callback.decorator.js
  var require_export_callback_decorator = __commonJS({
    "node_modules/starboy-framework/dist/packages/core/decorators/events/export-callback.decorator.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.ExportCallback = void 0;
      var helpers_1 = require_helpers();
      var const_1 = require_const();
      var ExportCallback = (resource, method, ...args) => (target, propertyKey) => {
        (0, helpers_1.extendArrayMetadata)(const_1.EXPORT_CALLBACK, target, {
          resource,
          method,
          args,
          propertyKey
        });
      };
      exports.ExportCallback = ExportCallback;
    }
  });

  // node_modules/starboy-framework/dist/packages/core/decorators/events/export.decorator.js
  var require_export_decorator = __commonJS({
    "node_modules/starboy-framework/dist/packages/core/decorators/events/export.decorator.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.Export = void 0;
      var helpers_1 = require_helpers();
      var const_1 = require_const();
      var Export = (name) => (target, propertyKey) => {
        (0, helpers_1.extendArrayMetadata)(const_1.EXPORT, target, { name, propertyKey });
      };
      exports.Export = Export;
    }
  });

  // node_modules/starboy-framework/dist/packages/core/decorators/events/local-event.decorator.js
  var require_local_event_decorator = __commonJS({
    "node_modules/starboy-framework/dist/packages/core/decorators/events/local-event.decorator.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.LocalEvent = void 0;
      var helpers_1 = require_helpers();
      var const_1 = require_const();
      var LocalEvent = (name) => (target, propertyKey) => {
        (0, helpers_1.extendArrayMetadata)(const_1.LOCAL_EVENT, target, { name, propertyKey });
      };
      exports.LocalEvent = LocalEvent;
    }
  });

  // node_modules/starboy-framework/dist/packages/core/decorators/events/net-event.decorator.js
  var require_net_event_decorator = __commonJS({
    "node_modules/starboy-framework/dist/packages/core/decorators/events/net-event.decorator.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.NetEvent = void 0;
      var helpers_1 = require_helpers();
      var const_1 = require_const();
      var NetEvent = (name) => (target, propertyKey) => {
        (0, helpers_1.extendArrayMetadata)(const_1.NET_EVENT, target, { name, propertyKey });
      };
      exports.NetEvent = NetEvent;
    }
  });

  // node_modules/starboy-framework/dist/packages/core/decorators/events/net-callback.decorator.js
  var require_net_callback_decorator = __commonJS({
    "node_modules/starboy-framework/dist/packages/core/decorators/events/net-callback.decorator.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.NetCallback = void 0;
      var helpers_1 = require_helpers();
      var const_1 = require_const();
      var NetCallback = (name) => (target, propertyKey) => {
        (0, helpers_1.extendArrayMetadata)(const_1.NET_CALLBACK, target, { name, propertyKey });
      };
      exports.NetCallback = NetCallback;
    }
  });

  // node_modules/starboy-framework/dist/packages/core/decorators/events/tick.decorator.js
  var require_tick_decorator = __commonJS({
    "node_modules/starboy-framework/dist/packages/core/decorators/events/tick.decorator.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.Tick = void 0;
      var helpers_1 = require_helpers();
      var const_1 = require_const();
      var Tick = (interval = 0) => (target, propertyKey) => {
        if (interval < 0) {
          throw new Error(`[ORP] ${propertyKey} - Tick interval must be positive value`);
        }
        (0, helpers_1.extendArrayMetadata)(const_1.TICK, target, { interval, propertyKey });
      };
      exports.Tick = Tick;
    }
  });

  // node_modules/starboy-framework/dist/packages/core/decorators/events/lazyInject.decorator.js
  var require_lazyInject_decorator2 = __commonJS({
    "node_modules/starboy-framework/dist/packages/core/decorators/events/lazyInject.decorator.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.LazyInject = void 0;
      var helpers_1 = require_helpers();
      var const_1 = require_const();
      var LazyInject = (c) => (target, propertyKey) => {
        (0, helpers_1.extendArrayMetadata)(const_1.LAZYINJECT, target, { c, propertyKey });
      };
      exports.LazyInject = LazyInject;
    }
  });

  // node_modules/starboy-framework/dist/packages/core/decorators/events/tunnel.decorator.js
  var require_tunnel_decorator = __commonJS({
    "node_modules/starboy-framework/dist/packages/core/decorators/events/tunnel.decorator.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.Tunnel = void 0;
      var const_1 = require_const();
      var helpers_1 = require_helpers();
      var Tunnel = () => (target, propertyKey) => {
        (0, helpers_1.extendArrayMetadata)(const_1.TUNNEL, target, { propertyKey });
      };
      exports.Tunnel = Tunnel;
    }
  });

  // node_modules/starboy-framework/dist/packages/core/decorators/events/onready.decorator.js
  var require_onready_decorator = __commonJS({
    "node_modules/starboy-framework/dist/packages/core/decorators/events/onready.decorator.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.OnReady = void 0;
      var helpers_1 = require_helpers();
      var const_1 = require_const();
      var OnReady = (delay = 0) => (target, propertyKey) => {
        if (delay < 0) {
          throw new Error(`[ORP] ${propertyKey} - Delay must be positive value`);
        }
        (0, helpers_1.extendArrayMetadata)(const_1.ONREADY, target, { delay, propertyKey });
      };
      exports.OnReady = OnReady;
    }
  });

  // node_modules/starboy-framework/dist/packages/core/decorators/events/nui.decorator.js
  var require_nui_decorator = __commonJS({
    "node_modules/starboy-framework/dist/packages/core/decorators/events/nui.decorator.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.NuiHandler = void 0;
      var helpers_1 = require_helpers();
      var const_1 = require_const();
      var NuiHandler = (name) => (target, propertyKey) => {
        (0, helpers_1.extendArrayMetadata)(const_1.NUI, target, { name, propertyKey });
      };
      exports.NuiHandler = NuiHandler;
    }
  });

  // node_modules/starboy-framework/dist/packages/core/decorators/events/index.js
  var require_events = __commonJS({
    "node_modules/starboy-framework/dist/packages/core/decorators/events/index.js"(exports) {
      "use strict";
      var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
        if (k2 === void 0)
          k2 = k;
        var desc = Object.getOwnPropertyDescriptor(m, k);
        if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
          desc = { enumerable: true, get: function() {
            return m[k];
          } };
        }
        Object.defineProperty(o, k2, desc);
      } : function(o, m, k, k2) {
        if (k2 === void 0)
          k2 = k;
        o[k2] = m[k];
      });
      var __exportStar = exports && exports.__exportStar || function(m, exports2) {
        for (var p in m)
          if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p))
            __createBinding(exports2, m, p);
      };
      Object.defineProperty(exports, "__esModule", { value: true });
      __exportStar(require_chat_command_decorator(), exports);
      __exportStar(require_event_decorator(), exports);
      __exportStar(require_export_callback_decorator(), exports);
      __exportStar(require_export_decorator(), exports);
      __exportStar(require_local_event_decorator(), exports);
      __exportStar(require_net_event_decorator(), exports);
      __exportStar(require_net_callback_decorator(), exports);
      __exportStar(require_tick_decorator(), exports);
      __exportStar(require_lazyInject_decorator2(), exports);
      __exportStar(require_tunnel_decorator(), exports);
      __exportStar(require_onready_decorator(), exports);
      __exportStar(require_nui_decorator(), exports);
    }
  });

  // node_modules/starboy-framework/dist/packages/core/decorators/guards/use-guard.decorator.js
  var require_use_guard_decorator = __commonJS({
    "node_modules/starboy-framework/dist/packages/core/decorators/guards/use-guard.decorator.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.UseGuard = void 0;
      var helpers_1 = require_helpers();
      var const_1 = require_const();
      var UseGuard = (guard) => (target, propertyKey) => {
        (0, helpers_1.extendArrayMetadata)(const_1.GUARD, target, guard, propertyKey);
      };
      exports.UseGuard = UseGuard;
    }
  });

  // node_modules/starboy-framework/dist/packages/core/decorators/guards/index.js
  var require_guards = __commonJS({
    "node_modules/starboy-framework/dist/packages/core/decorators/guards/index.js"(exports) {
      "use strict";
      var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
        if (k2 === void 0)
          k2 = k;
        var desc = Object.getOwnPropertyDescriptor(m, k);
        if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
          desc = { enumerable: true, get: function() {
            return m[k];
          } };
        }
        Object.defineProperty(o, k2, desc);
      } : function(o, m, k, k2) {
        if (k2 === void 0)
          k2 = k;
        o[k2] = m[k];
      });
      var __exportStar = exports && exports.__exportStar || function(m, exports2) {
        for (var p in m)
          if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p))
            __createBinding(exports2, m, p);
      };
      Object.defineProperty(exports, "__esModule", { value: true });
      __exportStar(require_use_guard_decorator(), exports);
    }
  });

  // node_modules/starboy-framework/dist/packages/core/decorators/index.js
  var require_decorators2 = __commonJS({
    "node_modules/starboy-framework/dist/packages/core/decorators/index.js"(exports) {
      "use strict";
      var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
        if (k2 === void 0)
          k2 = k;
        var desc = Object.getOwnPropertyDescriptor(m, k);
        if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
          desc = { enumerable: true, get: function() {
            return m[k];
          } };
        }
        Object.defineProperty(o, k2, desc);
      } : function(o, m, k, k2) {
        if (k2 === void 0)
          k2 = k;
        o[k2] = m[k];
      });
      var __exportStar = exports && exports.__exportStar || function(m, exports2) {
        for (var p in m)
          if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p))
            __createBinding(exports2, m, p);
      };
      Object.defineProperty(exports, "__esModule", { value: true });
      __exportStar(require_classes(), exports);
      __exportStar(require_di(), exports);
      __exportStar(require_events(), exports);
      __exportStar(require_helpers(), exports);
      __exportStar(require_guards(), exports);
    }
  });

  // node_modules/starboy-framework/dist/packages/core/interfaces/guard.interface.js
  var require_guard_interface = __commonJS({
    "node_modules/starboy-framework/dist/packages/core/interfaces/guard.interface.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
    }
  });

  // node_modules/starboy-framework/dist/packages/core/interfaces/index.js
  var require_interfaces2 = __commonJS({
    "node_modules/starboy-framework/dist/packages/core/interfaces/index.js"(exports) {
      "use strict";
      var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
        if (k2 === void 0)
          k2 = k;
        var desc = Object.getOwnPropertyDescriptor(m, k);
        if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
          desc = { enumerable: true, get: function() {
            return m[k];
          } };
        }
        Object.defineProperty(o, k2, desc);
      } : function(o, m, k, k2) {
        if (k2 === void 0)
          k2 = k;
        o[k2] = m[k];
      });
      var __exportStar = exports && exports.__exportStar || function(m, exports2) {
        for (var p in m)
          if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p))
            __createBinding(exports2, m, p);
      };
      Object.defineProperty(exports, "__esModule", { value: true });
      __exportStar(require_guard_interface(), exports);
    }
  });

  // node_modules/starboy-framework/dist/packages/core/types/app-create.type.js
  var require_app_create_type = __commonJS({
    "node_modules/starboy-framework/dist/packages/core/types/app-create.type.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
    }
  });

  // node_modules/starboy-framework/dist/packages/core/types/app-option.type.js
  var require_app_option_type = __commonJS({
    "node_modules/starboy-framework/dist/packages/core/types/app-option.type.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
    }
  });

  // node_modules/starboy-framework/dist/packages/core/types/chat-command.type.js
  var require_chat_command_type = __commonJS({
    "node_modules/starboy-framework/dist/packages/core/types/chat-command.type.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
    }
  });

  // node_modules/starboy-framework/dist/packages/core/types/controller.type.js
  var require_controller_type = __commonJS({
    "node_modules/starboy-framework/dist/packages/core/types/controller.type.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
    }
  });

  // node_modules/starboy-framework/dist/packages/core/types/events.type.js
  var require_events_type = __commonJS({
    "node_modules/starboy-framework/dist/packages/core/types/events.type.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
    }
  });

  // node_modules/starboy-framework/dist/packages/core/types/exec-context.type.js
  var require_exec_context_type = __commonJS({
    "node_modules/starboy-framework/dist/packages/core/types/exec-context.type.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
    }
  });

  // node_modules/starboy-framework/dist/packages/core/types/exports.type.js
  var require_exports_type = __commonJS({
    "node_modules/starboy-framework/dist/packages/core/types/exports.type.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
    }
  });

  // node_modules/starboy-framework/dist/packages/core/types/ticks.type.js
  var require_ticks_type = __commonJS({
    "node_modules/starboy-framework/dist/packages/core/types/ticks.type.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
    }
  });

  // node_modules/starboy-framework/dist/packages/core/types/tunnel-events.type.js
  var require_tunnel_events_type = __commonJS({
    "node_modules/starboy-framework/dist/packages/core/types/tunnel-events.type.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
    }
  });

  // node_modules/starboy-framework/dist/packages/core/types/index.js
  var require_types = __commonJS({
    "node_modules/starboy-framework/dist/packages/core/types/index.js"(exports) {
      "use strict";
      var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
        if (k2 === void 0)
          k2 = k;
        var desc = Object.getOwnPropertyDescriptor(m, k);
        if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
          desc = { enumerable: true, get: function() {
            return m[k];
          } };
        }
        Object.defineProperty(o, k2, desc);
      } : function(o, m, k, k2) {
        if (k2 === void 0)
          k2 = k;
        o[k2] = m[k];
      });
      var __exportStar = exports && exports.__exportStar || function(m, exports2) {
        for (var p in m)
          if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p))
            __createBinding(exports2, m, p);
      };
      Object.defineProperty(exports, "__esModule", { value: true });
      __exportStar(require_app_create_type(), exports);
      __exportStar(require_app_option_type(), exports);
      __exportStar(require_chat_command_type(), exports);
      __exportStar(require_controller_type(), exports);
      __exportStar(require_events_type(), exports);
      __exportStar(require_exec_context_type(), exports);
      __exportStar(require_exports_type(), exports);
      __exportStar(require_ticks_type(), exports);
      __exportStar(require_tunnel_events_type(), exports);
    }
  });

  // node_modules/starboy-framework/dist/packages/core/index.js
  var require_core = __commonJS({
    "node_modules/starboy-framework/dist/packages/core/index.js"(exports) {
      "use strict";
      var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
        if (k2 === void 0)
          k2 = k;
        var desc = Object.getOwnPropertyDescriptor(m, k);
        if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
          desc = { enumerable: true, get: function() {
            return m[k];
          } };
        }
        Object.defineProperty(o, k2, desc);
      } : function(o, m, k, k2) {
        if (k2 === void 0)
          k2 = k;
        o[k2] = m[k];
      });
      var __exportStar = exports && exports.__exportStar || function(m, exports2) {
        for (var p in m)
          if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p))
            __createBinding(exports2, m, p);
      };
      Object.defineProperty(exports, "__esModule", { value: true });
      __exportStar(require_application(), exports);
      __exportStar(require_const(), exports);
      __exportStar(require_container2(), exports);
      __exportStar(require_decorators2(), exports);
      __exportStar(require_interfaces2(), exports);
      __exportStar(require_types(), exports);
      __exportStar(require_utils(), exports);
    }
  });

  // node_modules/starboy-framework/dist/packages/index.js
  var require_packages = __commonJS({
    "node_modules/starboy-framework/dist/packages/index.js"(exports) {
      "use strict";
      var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
        if (k2 === void 0)
          k2 = k;
        var desc = Object.getOwnPropertyDescriptor(m, k);
        if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
          desc = { enumerable: true, get: function() {
            return m[k];
          } };
        }
        Object.defineProperty(o, k2, desc);
      } : function(o, m, k, k2) {
        if (k2 === void 0)
          k2 = k;
        o[k2] = m[k];
      });
      var __exportStar = exports && exports.__exportStar || function(m, exports2) {
        for (var p in m)
          if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p))
            __createBinding(exports2, m, p);
      };
      Object.defineProperty(exports, "__esModule", { value: true });
      __exportStar(require_core(), exports);
    }
  });

  // node_modules/starboy-framework/dist/index.js
  var require_dist = __commonJS({
    "node_modules/starboy-framework/dist/index.js"(exports) {
      "use strict";
      var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
        if (k2 === void 0)
          k2 = k;
        var desc = Object.getOwnPropertyDescriptor(m, k);
        if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
          desc = { enumerable: true, get: function() {
            return m[k];
          } };
        }
        Object.defineProperty(o, k2, desc);
      } : function(o, m, k, k2) {
        if (k2 === void 0)
          k2 = k;
        o[k2] = m[k];
      });
      var __exportStar = exports && exports.__exportStar || function(m, exports2) {
        for (var p in m)
          if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p))
            __createBinding(exports2, m, p);
      };
      Object.defineProperty(exports, "__esModule", { value: true });
      require_Reflect();
      require_mocks();
      __exportStar(require_packages(), exports);
    }
  });

  // src/client/controllers/test.controller.ts
  var import_starboy_framework = __toESM(require_dist());

  // ../../ProjectStarboy/node_modules/zod/lib/index.mjs
  var util;
  (function(util2) {
    util2.assertEqual = (val) => val;
    function assertIs(_arg) {
    }
    util2.assertIs = assertIs;
    function assertNever(_x) {
      throw new Error();
    }
    util2.assertNever = assertNever;
    util2.arrayToEnum = (items) => {
      const obj = {};
      for (const item of items) {
        obj[item] = item;
      }
      return obj;
    };
    util2.getValidEnumValues = (obj) => {
      const validKeys = util2.objectKeys(obj).filter((k) => typeof obj[obj[k]] !== "number");
      const filtered = {};
      for (const k of validKeys) {
        filtered[k] = obj[k];
      }
      return util2.objectValues(filtered);
    };
    util2.objectValues = (obj) => {
      return util2.objectKeys(obj).map(function(e) {
        return obj[e];
      });
    };
    util2.objectKeys = typeof Object.keys === "function" ? (obj) => Object.keys(obj) : (object) => {
      const keys = [];
      for (const key in object) {
        if (Object.prototype.hasOwnProperty.call(object, key)) {
          keys.push(key);
        }
      }
      return keys;
    };
    util2.find = (arr, checker) => {
      for (const item of arr) {
        if (checker(item))
          return item;
      }
      return void 0;
    };
    util2.isInteger = typeof Number.isInteger === "function" ? (val) => Number.isInteger(val) : (val) => typeof val === "number" && isFinite(val) && Math.floor(val) === val;
    function joinValues(array, separator = " | ") {
      return array.map((val) => typeof val === "string" ? `'${val}'` : val).join(separator);
    }
    util2.joinValues = joinValues;
    util2.jsonStringifyReplacer = (_, value) => {
      if (typeof value === "bigint") {
        return value.toString();
      }
      return value;
    };
  })(util || (util = {}));
  var objectUtil;
  (function(objectUtil2) {
    objectUtil2.mergeShapes = (first, second) => {
      return {
        ...first,
        ...second
      };
    };
  })(objectUtil || (objectUtil = {}));
  var ZodParsedType = util.arrayToEnum([
    "string",
    "nan",
    "number",
    "integer",
    "float",
    "boolean",
    "date",
    "bigint",
    "symbol",
    "function",
    "undefined",
    "null",
    "array",
    "object",
    "unknown",
    "promise",
    "void",
    "never",
    "map",
    "set"
  ]);
  var getParsedType = (data) => {
    const t = typeof data;
    switch (t) {
      case "undefined":
        return ZodParsedType.undefined;
      case "string":
        return ZodParsedType.string;
      case "number":
        return isNaN(data) ? ZodParsedType.nan : ZodParsedType.number;
      case "boolean":
        return ZodParsedType.boolean;
      case "function":
        return ZodParsedType.function;
      case "bigint":
        return ZodParsedType.bigint;
      case "symbol":
        return ZodParsedType.symbol;
      case "object":
        if (Array.isArray(data)) {
          return ZodParsedType.array;
        }
        if (data === null) {
          return ZodParsedType.null;
        }
        if (data.then && typeof data.then === "function" && data.catch && typeof data.catch === "function") {
          return ZodParsedType.promise;
        }
        if (typeof Map !== "undefined" && data instanceof Map) {
          return ZodParsedType.map;
        }
        if (typeof Set !== "undefined" && data instanceof Set) {
          return ZodParsedType.set;
        }
        if (typeof Date !== "undefined" && data instanceof Date) {
          return ZodParsedType.date;
        }
        return ZodParsedType.object;
      default:
        return ZodParsedType.unknown;
    }
  };
  var ZodIssueCode = util.arrayToEnum([
    "invalid_type",
    "invalid_literal",
    "custom",
    "invalid_union",
    "invalid_union_discriminator",
    "invalid_enum_value",
    "unrecognized_keys",
    "invalid_arguments",
    "invalid_return_type",
    "invalid_date",
    "invalid_string",
    "too_small",
    "too_big",
    "invalid_intersection_types",
    "not_multiple_of",
    "not_finite"
  ]);
  var quotelessJson = (obj) => {
    const json = JSON.stringify(obj, null, 2);
    return json.replace(/"([^"]+)":/g, "$1:");
  };
  var ZodError = class extends Error {
    constructor(issues) {
      super();
      this.issues = [];
      this.addIssue = (sub) => {
        this.issues = [...this.issues, sub];
      };
      this.addIssues = (subs = []) => {
        this.issues = [...this.issues, ...subs];
      };
      const actualProto = new.target.prototype;
      if (Object.setPrototypeOf) {
        Object.setPrototypeOf(this, actualProto);
      } else {
        this.__proto__ = actualProto;
      }
      this.name = "ZodError";
      this.issues = issues;
    }
    get errors() {
      return this.issues;
    }
    format(_mapper) {
      const mapper = _mapper || function(issue) {
        return issue.message;
      };
      const fieldErrors = { _errors: [] };
      const processError = (error) => {
        for (const issue of error.issues) {
          if (issue.code === "invalid_union") {
            issue.unionErrors.map(processError);
          } else if (issue.code === "invalid_return_type") {
            processError(issue.returnTypeError);
          } else if (issue.code === "invalid_arguments") {
            processError(issue.argumentsError);
          } else if (issue.path.length === 0) {
            fieldErrors._errors.push(mapper(issue));
          } else {
            let curr = fieldErrors;
            let i = 0;
            while (i < issue.path.length) {
              const el = issue.path[i];
              const terminal = i === issue.path.length - 1;
              if (!terminal) {
                curr[el] = curr[el] || { _errors: [] };
              } else {
                curr[el] = curr[el] || { _errors: [] };
                curr[el]._errors.push(mapper(issue));
              }
              curr = curr[el];
              i++;
            }
          }
        }
      };
      processError(this);
      return fieldErrors;
    }
    toString() {
      return this.message;
    }
    get message() {
      return JSON.stringify(this.issues, util.jsonStringifyReplacer, 2);
    }
    get isEmpty() {
      return this.issues.length === 0;
    }
    flatten(mapper = (issue) => issue.message) {
      const fieldErrors = {};
      const formErrors = [];
      for (const sub of this.issues) {
        if (sub.path.length > 0) {
          fieldErrors[sub.path[0]] = fieldErrors[sub.path[0]] || [];
          fieldErrors[sub.path[0]].push(mapper(sub));
        } else {
          formErrors.push(mapper(sub));
        }
      }
      return { formErrors, fieldErrors };
    }
    get formErrors() {
      return this.flatten();
    }
  };
  ZodError.create = (issues) => {
    const error = new ZodError(issues);
    return error;
  };
  var errorMap = (issue, _ctx) => {
    let message;
    switch (issue.code) {
      case ZodIssueCode.invalid_type:
        if (issue.received === ZodParsedType.undefined) {
          message = "Required";
        } else {
          message = `Expected ${issue.expected}, received ${issue.received}`;
        }
        break;
      case ZodIssueCode.invalid_literal:
        message = `Invalid literal value, expected ${JSON.stringify(issue.expected, util.jsonStringifyReplacer)}`;
        break;
      case ZodIssueCode.unrecognized_keys:
        message = `Unrecognized key(s) in object: ${util.joinValues(issue.keys, ", ")}`;
        break;
      case ZodIssueCode.invalid_union:
        message = `Invalid input`;
        break;
      case ZodIssueCode.invalid_union_discriminator:
        message = `Invalid discriminator value. Expected ${util.joinValues(issue.options)}`;
        break;
      case ZodIssueCode.invalid_enum_value:
        message = `Invalid enum value. Expected ${util.joinValues(issue.options)}, received '${issue.received}'`;
        break;
      case ZodIssueCode.invalid_arguments:
        message = `Invalid function arguments`;
        break;
      case ZodIssueCode.invalid_return_type:
        message = `Invalid function return type`;
        break;
      case ZodIssueCode.invalid_date:
        message = `Invalid date`;
        break;
      case ZodIssueCode.invalid_string:
        if (typeof issue.validation === "object") {
          if ("includes" in issue.validation) {
            message = `Invalid input: must include "${issue.validation.includes}"`;
            if (typeof issue.validation.position === "number") {
              message = `${message} at one or more positions greater than or equal to ${issue.validation.position}`;
            }
          } else if ("startsWith" in issue.validation) {
            message = `Invalid input: must start with "${issue.validation.startsWith}"`;
          } else if ("endsWith" in issue.validation) {
            message = `Invalid input: must end with "${issue.validation.endsWith}"`;
          } else {
            util.assertNever(issue.validation);
          }
        } else if (issue.validation !== "regex") {
          message = `Invalid ${issue.validation}`;
        } else {
          message = "Invalid";
        }
        break;
      case ZodIssueCode.too_small:
        if (issue.type === "array")
          message = `Array must contain ${issue.exact ? "exactly" : issue.inclusive ? `at least` : `more than`} ${issue.minimum} element(s)`;
        else if (issue.type === "string")
          message = `String must contain ${issue.exact ? "exactly" : issue.inclusive ? `at least` : `over`} ${issue.minimum} character(s)`;
        else if (issue.type === "number")
          message = `Number must be ${issue.exact ? `exactly equal to ` : issue.inclusive ? `greater than or equal to ` : `greater than `}${issue.minimum}`;
        else if (issue.type === "date")
          message = `Date must be ${issue.exact ? `exactly equal to ` : issue.inclusive ? `greater than or equal to ` : `greater than `}${new Date(Number(issue.minimum))}`;
        else
          message = "Invalid input";
        break;
      case ZodIssueCode.too_big:
        if (issue.type === "array")
          message = `Array must contain ${issue.exact ? `exactly` : issue.inclusive ? `at most` : `less than`} ${issue.maximum} element(s)`;
        else if (issue.type === "string")
          message = `String must contain ${issue.exact ? `exactly` : issue.inclusive ? `at most` : `under`} ${issue.maximum} character(s)`;
        else if (issue.type === "number")
          message = `Number must be ${issue.exact ? `exactly` : issue.inclusive ? `less than or equal to` : `less than`} ${issue.maximum}`;
        else if (issue.type === "bigint")
          message = `BigInt must be ${issue.exact ? `exactly` : issue.inclusive ? `less than or equal to` : `less than`} ${issue.maximum}`;
        else if (issue.type === "date")
          message = `Date must be ${issue.exact ? `exactly` : issue.inclusive ? `smaller than or equal to` : `smaller than`} ${new Date(Number(issue.maximum))}`;
        else
          message = "Invalid input";
        break;
      case ZodIssueCode.custom:
        message = `Invalid input`;
        break;
      case ZodIssueCode.invalid_intersection_types:
        message = `Intersection results could not be merged`;
        break;
      case ZodIssueCode.not_multiple_of:
        message = `Number must be a multiple of ${issue.multipleOf}`;
        break;
      case ZodIssueCode.not_finite:
        message = "Number must be finite";
        break;
      default:
        message = _ctx.defaultError;
        util.assertNever(issue);
    }
    return { message };
  };
  var overrideErrorMap = errorMap;
  function setErrorMap(map) {
    overrideErrorMap = map;
  }
  function getErrorMap() {
    return overrideErrorMap;
  }
  var makeIssue = (params) => {
    const { data, path, errorMaps, issueData } = params;
    const fullPath = [...path, ...issueData.path || []];
    const fullIssue = {
      ...issueData,
      path: fullPath
    };
    let errorMessage = "";
    const maps = errorMaps.filter((m) => !!m).slice().reverse();
    for (const map of maps) {
      errorMessage = map(fullIssue, { data, defaultError: errorMessage }).message;
    }
    return {
      ...issueData,
      path: fullPath,
      message: issueData.message || errorMessage
    };
  };
  var EMPTY_PATH = [];
  function addIssueToContext(ctx, issueData) {
    const issue = makeIssue({
      issueData,
      data: ctx.data,
      path: ctx.path,
      errorMaps: [
        ctx.common.contextualErrorMap,
        ctx.schemaErrorMap,
        getErrorMap(),
        errorMap
      ].filter((x) => !!x)
    });
    ctx.common.issues.push(issue);
  }
  var ParseStatus = class {
    constructor() {
      this.value = "valid";
    }
    dirty() {
      if (this.value === "valid")
        this.value = "dirty";
    }
    abort() {
      if (this.value !== "aborted")
        this.value = "aborted";
    }
    static mergeArray(status, results) {
      const arrayValue = [];
      for (const s of results) {
        if (s.status === "aborted")
          return INVALID;
        if (s.status === "dirty")
          status.dirty();
        arrayValue.push(s.value);
      }
      return { status: status.value, value: arrayValue };
    }
    static async mergeObjectAsync(status, pairs) {
      const syncPairs = [];
      for (const pair of pairs) {
        syncPairs.push({
          key: await pair.key,
          value: await pair.value
        });
      }
      return ParseStatus.mergeObjectSync(status, syncPairs);
    }
    static mergeObjectSync(status, pairs) {
      const finalObject = {};
      for (const pair of pairs) {
        const { key, value } = pair;
        if (key.status === "aborted")
          return INVALID;
        if (value.status === "aborted")
          return INVALID;
        if (key.status === "dirty")
          status.dirty();
        if (value.status === "dirty")
          status.dirty();
        if (typeof value.value !== "undefined" || pair.alwaysSet) {
          finalObject[key.value] = value.value;
        }
      }
      return { status: status.value, value: finalObject };
    }
  };
  var INVALID = Object.freeze({
    status: "aborted"
  });
  var DIRTY = (value) => ({ status: "dirty", value });
  var OK = (value) => ({ status: "valid", value });
  var isAborted = (x) => x.status === "aborted";
  var isDirty = (x) => x.status === "dirty";
  var isValid = (x) => x.status === "valid";
  var isAsync = (x) => typeof Promise !== "undefined" && x instanceof Promise;
  var errorUtil;
  (function(errorUtil2) {
    errorUtil2.errToObj = (message) => typeof message === "string" ? { message } : message || {};
    errorUtil2.toString = (message) => typeof message === "string" ? message : message === null || message === void 0 ? void 0 : message.message;
  })(errorUtil || (errorUtil = {}));
  var ParseInputLazyPath = class {
    constructor(parent, value, path, key) {
      this._cachedPath = [];
      this.parent = parent;
      this.data = value;
      this._path = path;
      this._key = key;
    }
    get path() {
      if (!this._cachedPath.length) {
        if (this._key instanceof Array) {
          this._cachedPath.push(...this._path, ...this._key);
        } else {
          this._cachedPath.push(...this._path, this._key);
        }
      }
      return this._cachedPath;
    }
  };
  var handleResult = (ctx, result) => {
    if (isValid(result)) {
      return { success: true, data: result.value };
    } else {
      if (!ctx.common.issues.length) {
        throw new Error("Validation failed but no issues detected.");
      }
      return {
        success: false,
        get error() {
          if (this._error)
            return this._error;
          const error = new ZodError(ctx.common.issues);
          this._error = error;
          return this._error;
        }
      };
    }
  };
  function processCreateParams(params) {
    if (!params)
      return {};
    const { errorMap: errorMap2, invalid_type_error, required_error, description } = params;
    if (errorMap2 && (invalid_type_error || required_error)) {
      throw new Error(`Can't use "invalid_type_error" or "required_error" in conjunction with custom error map.`);
    }
    if (errorMap2)
      return { errorMap: errorMap2, description };
    const customMap = (iss, ctx) => {
      if (iss.code !== "invalid_type")
        return { message: ctx.defaultError };
      if (typeof ctx.data === "undefined") {
        return { message: required_error !== null && required_error !== void 0 ? required_error : ctx.defaultError };
      }
      return { message: invalid_type_error !== null && invalid_type_error !== void 0 ? invalid_type_error : ctx.defaultError };
    };
    return { errorMap: customMap, description };
  }
  var ZodType = class {
    constructor(def) {
      this.spa = this.safeParseAsync;
      this._def = def;
      this.parse = this.parse.bind(this);
      this.safeParse = this.safeParse.bind(this);
      this.parseAsync = this.parseAsync.bind(this);
      this.safeParseAsync = this.safeParseAsync.bind(this);
      this.spa = this.spa.bind(this);
      this.refine = this.refine.bind(this);
      this.refinement = this.refinement.bind(this);
      this.superRefine = this.superRefine.bind(this);
      this.optional = this.optional.bind(this);
      this.nullable = this.nullable.bind(this);
      this.nullish = this.nullish.bind(this);
      this.array = this.array.bind(this);
      this.promise = this.promise.bind(this);
      this.or = this.or.bind(this);
      this.and = this.and.bind(this);
      this.transform = this.transform.bind(this);
      this.brand = this.brand.bind(this);
      this.default = this.default.bind(this);
      this.catch = this.catch.bind(this);
      this.describe = this.describe.bind(this);
      this.pipe = this.pipe.bind(this);
      this.isNullable = this.isNullable.bind(this);
      this.isOptional = this.isOptional.bind(this);
    }
    get description() {
      return this._def.description;
    }
    _getType(input) {
      return getParsedType(input.data);
    }
    _getOrReturnCtx(input, ctx) {
      return ctx || {
        common: input.parent.common,
        data: input.data,
        parsedType: getParsedType(input.data),
        schemaErrorMap: this._def.errorMap,
        path: input.path,
        parent: input.parent
      };
    }
    _processInputParams(input) {
      return {
        status: new ParseStatus(),
        ctx: {
          common: input.parent.common,
          data: input.data,
          parsedType: getParsedType(input.data),
          schemaErrorMap: this._def.errorMap,
          path: input.path,
          parent: input.parent
        }
      };
    }
    _parseSync(input) {
      const result = this._parse(input);
      if (isAsync(result)) {
        throw new Error("Synchronous parse encountered promise.");
      }
      return result;
    }
    _parseAsync(input) {
      const result = this._parse(input);
      return Promise.resolve(result);
    }
    parse(data, params) {
      const result = this.safeParse(data, params);
      if (result.success)
        return result.data;
      throw result.error;
    }
    safeParse(data, params) {
      var _a;
      const ctx = {
        common: {
          issues: [],
          async: (_a = params === null || params === void 0 ? void 0 : params.async) !== null && _a !== void 0 ? _a : false,
          contextualErrorMap: params === null || params === void 0 ? void 0 : params.errorMap
        },
        path: (params === null || params === void 0 ? void 0 : params.path) || [],
        schemaErrorMap: this._def.errorMap,
        parent: null,
        data,
        parsedType: getParsedType(data)
      };
      const result = this._parseSync({ data, path: ctx.path, parent: ctx });
      return handleResult(ctx, result);
    }
    async parseAsync(data, params) {
      const result = await this.safeParseAsync(data, params);
      if (result.success)
        return result.data;
      throw result.error;
    }
    async safeParseAsync(data, params) {
      const ctx = {
        common: {
          issues: [],
          contextualErrorMap: params === null || params === void 0 ? void 0 : params.errorMap,
          async: true
        },
        path: (params === null || params === void 0 ? void 0 : params.path) || [],
        schemaErrorMap: this._def.errorMap,
        parent: null,
        data,
        parsedType: getParsedType(data)
      };
      const maybeAsyncResult = this._parse({ data, path: ctx.path, parent: ctx });
      const result = await (isAsync(maybeAsyncResult) ? maybeAsyncResult : Promise.resolve(maybeAsyncResult));
      return handleResult(ctx, result);
    }
    refine(check, message) {
      const getIssueProperties = (val) => {
        if (typeof message === "string" || typeof message === "undefined") {
          return { message };
        } else if (typeof message === "function") {
          return message(val);
        } else {
          return message;
        }
      };
      return this._refinement((val, ctx) => {
        const result = check(val);
        const setError = () => ctx.addIssue({
          code: ZodIssueCode.custom,
          ...getIssueProperties(val)
        });
        if (typeof Promise !== "undefined" && result instanceof Promise) {
          return result.then((data) => {
            if (!data) {
              setError();
              return false;
            } else {
              return true;
            }
          });
        }
        if (!result) {
          setError();
          return false;
        } else {
          return true;
        }
      });
    }
    refinement(check, refinementData) {
      return this._refinement((val, ctx) => {
        if (!check(val)) {
          ctx.addIssue(typeof refinementData === "function" ? refinementData(val, ctx) : refinementData);
          return false;
        } else {
          return true;
        }
      });
    }
    _refinement(refinement) {
      return new ZodEffects({
        schema: this,
        typeName: ZodFirstPartyTypeKind.ZodEffects,
        effect: { type: "refinement", refinement }
      });
    }
    superRefine(refinement) {
      return this._refinement(refinement);
    }
    optional() {
      return ZodOptional.create(this, this._def);
    }
    nullable() {
      return ZodNullable.create(this, this._def);
    }
    nullish() {
      return this.nullable().optional();
    }
    array() {
      return ZodArray.create(this, this._def);
    }
    promise() {
      return ZodPromise.create(this, this._def);
    }
    or(option) {
      return ZodUnion.create([this, option], this._def);
    }
    and(incoming) {
      return ZodIntersection.create(this, incoming, this._def);
    }
    transform(transform) {
      return new ZodEffects({
        ...processCreateParams(this._def),
        schema: this,
        typeName: ZodFirstPartyTypeKind.ZodEffects,
        effect: { type: "transform", transform }
      });
    }
    default(def) {
      const defaultValueFunc = typeof def === "function" ? def : () => def;
      return new ZodDefault({
        ...processCreateParams(this._def),
        innerType: this,
        defaultValue: defaultValueFunc,
        typeName: ZodFirstPartyTypeKind.ZodDefault
      });
    }
    brand() {
      return new ZodBranded({
        typeName: ZodFirstPartyTypeKind.ZodBranded,
        type: this,
        ...processCreateParams(this._def)
      });
    }
    catch(def) {
      const catchValueFunc = typeof def === "function" ? def : () => def;
      return new ZodCatch({
        ...processCreateParams(this._def),
        innerType: this,
        catchValue: catchValueFunc,
        typeName: ZodFirstPartyTypeKind.ZodCatch
      });
    }
    describe(description) {
      const This = this.constructor;
      return new This({
        ...this._def,
        description
      });
    }
    pipe(target) {
      return ZodPipeline.create(this, target);
    }
    isOptional() {
      return this.safeParse(void 0).success;
    }
    isNullable() {
      return this.safeParse(null).success;
    }
  };
  var cuidRegex = /^c[^\s-]{8,}$/i;
  var cuid2Regex = /^[a-z][a-z0-9]*$/;
  var ulidRegex = /[0-9A-HJKMNP-TV-Z]{26}/;
  var uuidRegex = /^([a-f0-9]{8}-[a-f0-9]{4}-[1-5][a-f0-9]{3}-[a-f0-9]{4}-[a-f0-9]{12}|00000000-0000-0000-0000-000000000000)$/i;
  var emailRegex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\])|(\[IPv6:(([a-f0-9]{1,4}:){7}|::([a-f0-9]{1,4}:){0,6}|([a-f0-9]{1,4}:){1}:([a-f0-9]{1,4}:){0,5}|([a-f0-9]{1,4}:){2}:([a-f0-9]{1,4}:){0,4}|([a-f0-9]{1,4}:){3}:([a-f0-9]{1,4}:){0,3}|([a-f0-9]{1,4}:){4}:([a-f0-9]{1,4}:){0,2}|([a-f0-9]{1,4}:){5}:([a-f0-9]{1,4}:){0,1})([a-f0-9]{1,4}|(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2})))\])|([A-Za-z0-9]([A-Za-z0-9-]*[A-Za-z0-9])*(\.[A-Za-z]{2,})+))$/;
  var emojiRegex = /^(\p{Extended_Pictographic}|\p{Emoji_Component})+$/u;
  var ipv4Regex = /^(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))$/;
  var ipv6Regex = /^(([a-f0-9]{1,4}:){7}|::([a-f0-9]{1,4}:){0,6}|([a-f0-9]{1,4}:){1}:([a-f0-9]{1,4}:){0,5}|([a-f0-9]{1,4}:){2}:([a-f0-9]{1,4}:){0,4}|([a-f0-9]{1,4}:){3}:([a-f0-9]{1,4}:){0,3}|([a-f0-9]{1,4}:){4}:([a-f0-9]{1,4}:){0,2}|([a-f0-9]{1,4}:){5}:([a-f0-9]{1,4}:){0,1})([a-f0-9]{1,4}|(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2})))$/;
  var datetimeRegex = (args) => {
    if (args.precision) {
      if (args.offset) {
        return new RegExp(`^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{${args.precision}}(([+-]\\d{2}(:?\\d{2})?)|Z)$`);
      } else {
        return new RegExp(`^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{${args.precision}}Z$`);
      }
    } else if (args.precision === 0) {
      if (args.offset) {
        return new RegExp(`^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(([+-]\\d{2}(:?\\d{2})?)|Z)$`);
      } else {
        return new RegExp(`^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}Z$`);
      }
    } else {
      if (args.offset) {
        return new RegExp(`^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?(([+-]\\d{2}(:?\\d{2})?)|Z)$`);
      } else {
        return new RegExp(`^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?Z$`);
      }
    }
  };
  function isValidIP(ip, version) {
    if ((version === "v4" || !version) && ipv4Regex.test(ip)) {
      return true;
    }
    if ((version === "v6" || !version) && ipv6Regex.test(ip)) {
      return true;
    }
    return false;
  }
  var ZodString = class extends ZodType {
    constructor() {
      super(...arguments);
      this._regex = (regex, validation, message) => this.refinement((data) => regex.test(data), {
        validation,
        code: ZodIssueCode.invalid_string,
        ...errorUtil.errToObj(message)
      });
      this.nonempty = (message) => this.min(1, errorUtil.errToObj(message));
      this.trim = () => new ZodString({
        ...this._def,
        checks: [...this._def.checks, { kind: "trim" }]
      });
      this.toLowerCase = () => new ZodString({
        ...this._def,
        checks: [...this._def.checks, { kind: "toLowerCase" }]
      });
      this.toUpperCase = () => new ZodString({
        ...this._def,
        checks: [...this._def.checks, { kind: "toUpperCase" }]
      });
    }
    _parse(input) {
      if (this._def.coerce) {
        input.data = String(input.data);
      }
      const parsedType = this._getType(input);
      if (parsedType !== ZodParsedType.string) {
        const ctx2 = this._getOrReturnCtx(input);
        addIssueToContext(
          ctx2,
          {
            code: ZodIssueCode.invalid_type,
            expected: ZodParsedType.string,
            received: ctx2.parsedType
          }
        );
        return INVALID;
      }
      const status = new ParseStatus();
      let ctx = void 0;
      for (const check of this._def.checks) {
        if (check.kind === "min") {
          if (input.data.length < check.value) {
            ctx = this._getOrReturnCtx(input, ctx);
            addIssueToContext(ctx, {
              code: ZodIssueCode.too_small,
              minimum: check.value,
              type: "string",
              inclusive: true,
              exact: false,
              message: check.message
            });
            status.dirty();
          }
        } else if (check.kind === "max") {
          if (input.data.length > check.value) {
            ctx = this._getOrReturnCtx(input, ctx);
            addIssueToContext(ctx, {
              code: ZodIssueCode.too_big,
              maximum: check.value,
              type: "string",
              inclusive: true,
              exact: false,
              message: check.message
            });
            status.dirty();
          }
        } else if (check.kind === "length") {
          const tooBig = input.data.length > check.value;
          const tooSmall = input.data.length < check.value;
          if (tooBig || tooSmall) {
            ctx = this._getOrReturnCtx(input, ctx);
            if (tooBig) {
              addIssueToContext(ctx, {
                code: ZodIssueCode.too_big,
                maximum: check.value,
                type: "string",
                inclusive: true,
                exact: true,
                message: check.message
              });
            } else if (tooSmall) {
              addIssueToContext(ctx, {
                code: ZodIssueCode.too_small,
                minimum: check.value,
                type: "string",
                inclusive: true,
                exact: true,
                message: check.message
              });
            }
            status.dirty();
          }
        } else if (check.kind === "email") {
          if (!emailRegex.test(input.data)) {
            ctx = this._getOrReturnCtx(input, ctx);
            addIssueToContext(ctx, {
              validation: "email",
              code: ZodIssueCode.invalid_string,
              message: check.message
            });
            status.dirty();
          }
        } else if (check.kind === "emoji") {
          if (!emojiRegex.test(input.data)) {
            ctx = this._getOrReturnCtx(input, ctx);
            addIssueToContext(ctx, {
              validation: "emoji",
              code: ZodIssueCode.invalid_string,
              message: check.message
            });
            status.dirty();
          }
        } else if (check.kind === "uuid") {
          if (!uuidRegex.test(input.data)) {
            ctx = this._getOrReturnCtx(input, ctx);
            addIssueToContext(ctx, {
              validation: "uuid",
              code: ZodIssueCode.invalid_string,
              message: check.message
            });
            status.dirty();
          }
        } else if (check.kind === "cuid") {
          if (!cuidRegex.test(input.data)) {
            ctx = this._getOrReturnCtx(input, ctx);
            addIssueToContext(ctx, {
              validation: "cuid",
              code: ZodIssueCode.invalid_string,
              message: check.message
            });
            status.dirty();
          }
        } else if (check.kind === "cuid2") {
          if (!cuid2Regex.test(input.data)) {
            ctx = this._getOrReturnCtx(input, ctx);
            addIssueToContext(ctx, {
              validation: "cuid2",
              code: ZodIssueCode.invalid_string,
              message: check.message
            });
            status.dirty();
          }
        } else if (check.kind === "ulid") {
          if (!ulidRegex.test(input.data)) {
            ctx = this._getOrReturnCtx(input, ctx);
            addIssueToContext(ctx, {
              validation: "ulid",
              code: ZodIssueCode.invalid_string,
              message: check.message
            });
            status.dirty();
          }
        } else if (check.kind === "url") {
          try {
            new URL(input.data);
          } catch (_a) {
            ctx = this._getOrReturnCtx(input, ctx);
            addIssueToContext(ctx, {
              validation: "url",
              code: ZodIssueCode.invalid_string,
              message: check.message
            });
            status.dirty();
          }
        } else if (check.kind === "regex") {
          check.regex.lastIndex = 0;
          const testResult = check.regex.test(input.data);
          if (!testResult) {
            ctx = this._getOrReturnCtx(input, ctx);
            addIssueToContext(ctx, {
              validation: "regex",
              code: ZodIssueCode.invalid_string,
              message: check.message
            });
            status.dirty();
          }
        } else if (check.kind === "trim") {
          input.data = input.data.trim();
        } else if (check.kind === "includes") {
          if (!input.data.includes(check.value, check.position)) {
            ctx = this._getOrReturnCtx(input, ctx);
            addIssueToContext(ctx, {
              code: ZodIssueCode.invalid_string,
              validation: { includes: check.value, position: check.position },
              message: check.message
            });
            status.dirty();
          }
        } else if (check.kind === "toLowerCase") {
          input.data = input.data.toLowerCase();
        } else if (check.kind === "toUpperCase") {
          input.data = input.data.toUpperCase();
        } else if (check.kind === "startsWith") {
          if (!input.data.startsWith(check.value)) {
            ctx = this._getOrReturnCtx(input, ctx);
            addIssueToContext(ctx, {
              code: ZodIssueCode.invalid_string,
              validation: { startsWith: check.value },
              message: check.message
            });
            status.dirty();
          }
        } else if (check.kind === "endsWith") {
          if (!input.data.endsWith(check.value)) {
            ctx = this._getOrReturnCtx(input, ctx);
            addIssueToContext(ctx, {
              code: ZodIssueCode.invalid_string,
              validation: { endsWith: check.value },
              message: check.message
            });
            status.dirty();
          }
        } else if (check.kind === "datetime") {
          const regex = datetimeRegex(check);
          if (!regex.test(input.data)) {
            ctx = this._getOrReturnCtx(input, ctx);
            addIssueToContext(ctx, {
              code: ZodIssueCode.invalid_string,
              validation: "datetime",
              message: check.message
            });
            status.dirty();
          }
        } else if (check.kind === "ip") {
          if (!isValidIP(input.data, check.version)) {
            ctx = this._getOrReturnCtx(input, ctx);
            addIssueToContext(ctx, {
              validation: "ip",
              code: ZodIssueCode.invalid_string,
              message: check.message
            });
            status.dirty();
          }
        } else {
          util.assertNever(check);
        }
      }
      return { status: status.value, value: input.data };
    }
    _addCheck(check) {
      return new ZodString({
        ...this._def,
        checks: [...this._def.checks, check]
      });
    }
    email(message) {
      return this._addCheck({ kind: "email", ...errorUtil.errToObj(message) });
    }
    url(message) {
      return this._addCheck({ kind: "url", ...errorUtil.errToObj(message) });
    }
    emoji(message) {
      return this._addCheck({ kind: "emoji", ...errorUtil.errToObj(message) });
    }
    uuid(message) {
      return this._addCheck({ kind: "uuid", ...errorUtil.errToObj(message) });
    }
    cuid(message) {
      return this._addCheck({ kind: "cuid", ...errorUtil.errToObj(message) });
    }
    cuid2(message) {
      return this._addCheck({ kind: "cuid2", ...errorUtil.errToObj(message) });
    }
    ulid(message) {
      return this._addCheck({ kind: "ulid", ...errorUtil.errToObj(message) });
    }
    ip(options) {
      return this._addCheck({ kind: "ip", ...errorUtil.errToObj(options) });
    }
    datetime(options) {
      var _a;
      if (typeof options === "string") {
        return this._addCheck({
          kind: "datetime",
          precision: null,
          offset: false,
          message: options
        });
      }
      return this._addCheck({
        kind: "datetime",
        precision: typeof (options === null || options === void 0 ? void 0 : options.precision) === "undefined" ? null : options === null || options === void 0 ? void 0 : options.precision,
        offset: (_a = options === null || options === void 0 ? void 0 : options.offset) !== null && _a !== void 0 ? _a : false,
        ...errorUtil.errToObj(options === null || options === void 0 ? void 0 : options.message)
      });
    }
    regex(regex, message) {
      return this._addCheck({
        kind: "regex",
        regex,
        ...errorUtil.errToObj(message)
      });
    }
    includes(value, options) {
      return this._addCheck({
        kind: "includes",
        value,
        position: options === null || options === void 0 ? void 0 : options.position,
        ...errorUtil.errToObj(options === null || options === void 0 ? void 0 : options.message)
      });
    }
    startsWith(value, message) {
      return this._addCheck({
        kind: "startsWith",
        value,
        ...errorUtil.errToObj(message)
      });
    }
    endsWith(value, message) {
      return this._addCheck({
        kind: "endsWith",
        value,
        ...errorUtil.errToObj(message)
      });
    }
    min(minLength, message) {
      return this._addCheck({
        kind: "min",
        value: minLength,
        ...errorUtil.errToObj(message)
      });
    }
    max(maxLength, message) {
      return this._addCheck({
        kind: "max",
        value: maxLength,
        ...errorUtil.errToObj(message)
      });
    }
    length(len, message) {
      return this._addCheck({
        kind: "length",
        value: len,
        ...errorUtil.errToObj(message)
      });
    }
    get isDatetime() {
      return !!this._def.checks.find((ch) => ch.kind === "datetime");
    }
    get isEmail() {
      return !!this._def.checks.find((ch) => ch.kind === "email");
    }
    get isURL() {
      return !!this._def.checks.find((ch) => ch.kind === "url");
    }
    get isEmoji() {
      return !!this._def.checks.find((ch) => ch.kind === "emoji");
    }
    get isUUID() {
      return !!this._def.checks.find((ch) => ch.kind === "uuid");
    }
    get isCUID() {
      return !!this._def.checks.find((ch) => ch.kind === "cuid");
    }
    get isCUID2() {
      return !!this._def.checks.find((ch) => ch.kind === "cuid2");
    }
    get isULID() {
      return !!this._def.checks.find((ch) => ch.kind === "ulid");
    }
    get isIP() {
      return !!this._def.checks.find((ch) => ch.kind === "ip");
    }
    get minLength() {
      let min = null;
      for (const ch of this._def.checks) {
        if (ch.kind === "min") {
          if (min === null || ch.value > min)
            min = ch.value;
        }
      }
      return min;
    }
    get maxLength() {
      let max = null;
      for (const ch of this._def.checks) {
        if (ch.kind === "max") {
          if (max === null || ch.value < max)
            max = ch.value;
        }
      }
      return max;
    }
  };
  ZodString.create = (params) => {
    var _a;
    return new ZodString({
      checks: [],
      typeName: ZodFirstPartyTypeKind.ZodString,
      coerce: (_a = params === null || params === void 0 ? void 0 : params.coerce) !== null && _a !== void 0 ? _a : false,
      ...processCreateParams(params)
    });
  };
  function floatSafeRemainder(val, step) {
    const valDecCount = (val.toString().split(".")[1] || "").length;
    const stepDecCount = (step.toString().split(".")[1] || "").length;
    const decCount = valDecCount > stepDecCount ? valDecCount : stepDecCount;
    const valInt = parseInt(val.toFixed(decCount).replace(".", ""));
    const stepInt = parseInt(step.toFixed(decCount).replace(".", ""));
    return valInt % stepInt / Math.pow(10, decCount);
  }
  var ZodNumber = class extends ZodType {
    constructor() {
      super(...arguments);
      this.min = this.gte;
      this.max = this.lte;
      this.step = this.multipleOf;
    }
    _parse(input) {
      if (this._def.coerce) {
        input.data = Number(input.data);
      }
      const parsedType = this._getType(input);
      if (parsedType !== ZodParsedType.number) {
        const ctx2 = this._getOrReturnCtx(input);
        addIssueToContext(ctx2, {
          code: ZodIssueCode.invalid_type,
          expected: ZodParsedType.number,
          received: ctx2.parsedType
        });
        return INVALID;
      }
      let ctx = void 0;
      const status = new ParseStatus();
      for (const check of this._def.checks) {
        if (check.kind === "int") {
          if (!util.isInteger(input.data)) {
            ctx = this._getOrReturnCtx(input, ctx);
            addIssueToContext(ctx, {
              code: ZodIssueCode.invalid_type,
              expected: "integer",
              received: "float",
              message: check.message
            });
            status.dirty();
          }
        } else if (check.kind === "min") {
          const tooSmall = check.inclusive ? input.data < check.value : input.data <= check.value;
          if (tooSmall) {
            ctx = this._getOrReturnCtx(input, ctx);
            addIssueToContext(ctx, {
              code: ZodIssueCode.too_small,
              minimum: check.value,
              type: "number",
              inclusive: check.inclusive,
              exact: false,
              message: check.message
            });
            status.dirty();
          }
        } else if (check.kind === "max") {
          const tooBig = check.inclusive ? input.data > check.value : input.data >= check.value;
          if (tooBig) {
            ctx = this._getOrReturnCtx(input, ctx);
            addIssueToContext(ctx, {
              code: ZodIssueCode.too_big,
              maximum: check.value,
              type: "number",
              inclusive: check.inclusive,
              exact: false,
              message: check.message
            });
            status.dirty();
          }
        } else if (check.kind === "multipleOf") {
          if (floatSafeRemainder(input.data, check.value) !== 0) {
            ctx = this._getOrReturnCtx(input, ctx);
            addIssueToContext(ctx, {
              code: ZodIssueCode.not_multiple_of,
              multipleOf: check.value,
              message: check.message
            });
            status.dirty();
          }
        } else if (check.kind === "finite") {
          if (!Number.isFinite(input.data)) {
            ctx = this._getOrReturnCtx(input, ctx);
            addIssueToContext(ctx, {
              code: ZodIssueCode.not_finite,
              message: check.message
            });
            status.dirty();
          }
        } else {
          util.assertNever(check);
        }
      }
      return { status: status.value, value: input.data };
    }
    gte(value, message) {
      return this.setLimit("min", value, true, errorUtil.toString(message));
    }
    gt(value, message) {
      return this.setLimit("min", value, false, errorUtil.toString(message));
    }
    lte(value, message) {
      return this.setLimit("max", value, true, errorUtil.toString(message));
    }
    lt(value, message) {
      return this.setLimit("max", value, false, errorUtil.toString(message));
    }
    setLimit(kind, value, inclusive, message) {
      return new ZodNumber({
        ...this._def,
        checks: [
          ...this._def.checks,
          {
            kind,
            value,
            inclusive,
            message: errorUtil.toString(message)
          }
        ]
      });
    }
    _addCheck(check) {
      return new ZodNumber({
        ...this._def,
        checks: [...this._def.checks, check]
      });
    }
    int(message) {
      return this._addCheck({
        kind: "int",
        message: errorUtil.toString(message)
      });
    }
    positive(message) {
      return this._addCheck({
        kind: "min",
        value: 0,
        inclusive: false,
        message: errorUtil.toString(message)
      });
    }
    negative(message) {
      return this._addCheck({
        kind: "max",
        value: 0,
        inclusive: false,
        message: errorUtil.toString(message)
      });
    }
    nonpositive(message) {
      return this._addCheck({
        kind: "max",
        value: 0,
        inclusive: true,
        message: errorUtil.toString(message)
      });
    }
    nonnegative(message) {
      return this._addCheck({
        kind: "min",
        value: 0,
        inclusive: true,
        message: errorUtil.toString(message)
      });
    }
    multipleOf(value, message) {
      return this._addCheck({
        kind: "multipleOf",
        value,
        message: errorUtil.toString(message)
      });
    }
    finite(message) {
      return this._addCheck({
        kind: "finite",
        message: errorUtil.toString(message)
      });
    }
    safe(message) {
      return this._addCheck({
        kind: "min",
        inclusive: true,
        value: Number.MIN_SAFE_INTEGER,
        message: errorUtil.toString(message)
      })._addCheck({
        kind: "max",
        inclusive: true,
        value: Number.MAX_SAFE_INTEGER,
        message: errorUtil.toString(message)
      });
    }
    get minValue() {
      let min = null;
      for (const ch of this._def.checks) {
        if (ch.kind === "min") {
          if (min === null || ch.value > min)
            min = ch.value;
        }
      }
      return min;
    }
    get maxValue() {
      let max = null;
      for (const ch of this._def.checks) {
        if (ch.kind === "max") {
          if (max === null || ch.value < max)
            max = ch.value;
        }
      }
      return max;
    }
    get isInt() {
      return !!this._def.checks.find((ch) => ch.kind === "int" || ch.kind === "multipleOf" && util.isInteger(ch.value));
    }
    get isFinite() {
      let max = null, min = null;
      for (const ch of this._def.checks) {
        if (ch.kind === "finite" || ch.kind === "int" || ch.kind === "multipleOf") {
          return true;
        } else if (ch.kind === "min") {
          if (min === null || ch.value > min)
            min = ch.value;
        } else if (ch.kind === "max") {
          if (max === null || ch.value < max)
            max = ch.value;
        }
      }
      return Number.isFinite(min) && Number.isFinite(max);
    }
  };
  ZodNumber.create = (params) => {
    return new ZodNumber({
      checks: [],
      typeName: ZodFirstPartyTypeKind.ZodNumber,
      coerce: (params === null || params === void 0 ? void 0 : params.coerce) || false,
      ...processCreateParams(params)
    });
  };
  var ZodBigInt = class extends ZodType {
    constructor() {
      super(...arguments);
      this.min = this.gte;
      this.max = this.lte;
    }
    _parse(input) {
      if (this._def.coerce) {
        input.data = BigInt(input.data);
      }
      const parsedType = this._getType(input);
      if (parsedType !== ZodParsedType.bigint) {
        const ctx2 = this._getOrReturnCtx(input);
        addIssueToContext(ctx2, {
          code: ZodIssueCode.invalid_type,
          expected: ZodParsedType.bigint,
          received: ctx2.parsedType
        });
        return INVALID;
      }
      let ctx = void 0;
      const status = new ParseStatus();
      for (const check of this._def.checks) {
        if (check.kind === "min") {
          const tooSmall = check.inclusive ? input.data < check.value : input.data <= check.value;
          if (tooSmall) {
            ctx = this._getOrReturnCtx(input, ctx);
            addIssueToContext(ctx, {
              code: ZodIssueCode.too_small,
              type: "bigint",
              minimum: check.value,
              inclusive: check.inclusive,
              message: check.message
            });
            status.dirty();
          }
        } else if (check.kind === "max") {
          const tooBig = check.inclusive ? input.data > check.value : input.data >= check.value;
          if (tooBig) {
            ctx = this._getOrReturnCtx(input, ctx);
            addIssueToContext(ctx, {
              code: ZodIssueCode.too_big,
              type: "bigint",
              maximum: check.value,
              inclusive: check.inclusive,
              message: check.message
            });
            status.dirty();
          }
        } else if (check.kind === "multipleOf") {
          if (input.data % check.value !== BigInt(0)) {
            ctx = this._getOrReturnCtx(input, ctx);
            addIssueToContext(ctx, {
              code: ZodIssueCode.not_multiple_of,
              multipleOf: check.value,
              message: check.message
            });
            status.dirty();
          }
        } else {
          util.assertNever(check);
        }
      }
      return { status: status.value, value: input.data };
    }
    gte(value, message) {
      return this.setLimit("min", value, true, errorUtil.toString(message));
    }
    gt(value, message) {
      return this.setLimit("min", value, false, errorUtil.toString(message));
    }
    lte(value, message) {
      return this.setLimit("max", value, true, errorUtil.toString(message));
    }
    lt(value, message) {
      return this.setLimit("max", value, false, errorUtil.toString(message));
    }
    setLimit(kind, value, inclusive, message) {
      return new ZodBigInt({
        ...this._def,
        checks: [
          ...this._def.checks,
          {
            kind,
            value,
            inclusive,
            message: errorUtil.toString(message)
          }
        ]
      });
    }
    _addCheck(check) {
      return new ZodBigInt({
        ...this._def,
        checks: [...this._def.checks, check]
      });
    }
    positive(message) {
      return this._addCheck({
        kind: "min",
        value: BigInt(0),
        inclusive: false,
        message: errorUtil.toString(message)
      });
    }
    negative(message) {
      return this._addCheck({
        kind: "max",
        value: BigInt(0),
        inclusive: false,
        message: errorUtil.toString(message)
      });
    }
    nonpositive(message) {
      return this._addCheck({
        kind: "max",
        value: BigInt(0),
        inclusive: true,
        message: errorUtil.toString(message)
      });
    }
    nonnegative(message) {
      return this._addCheck({
        kind: "min",
        value: BigInt(0),
        inclusive: true,
        message: errorUtil.toString(message)
      });
    }
    multipleOf(value, message) {
      return this._addCheck({
        kind: "multipleOf",
        value,
        message: errorUtil.toString(message)
      });
    }
    get minValue() {
      let min = null;
      for (const ch of this._def.checks) {
        if (ch.kind === "min") {
          if (min === null || ch.value > min)
            min = ch.value;
        }
      }
      return min;
    }
    get maxValue() {
      let max = null;
      for (const ch of this._def.checks) {
        if (ch.kind === "max") {
          if (max === null || ch.value < max)
            max = ch.value;
        }
      }
      return max;
    }
  };
  ZodBigInt.create = (params) => {
    var _a;
    return new ZodBigInt({
      checks: [],
      typeName: ZodFirstPartyTypeKind.ZodBigInt,
      coerce: (_a = params === null || params === void 0 ? void 0 : params.coerce) !== null && _a !== void 0 ? _a : false,
      ...processCreateParams(params)
    });
  };
  var ZodBoolean = class extends ZodType {
    _parse(input) {
      if (this._def.coerce) {
        input.data = Boolean(input.data);
      }
      const parsedType = this._getType(input);
      if (parsedType !== ZodParsedType.boolean) {
        const ctx = this._getOrReturnCtx(input);
        addIssueToContext(ctx, {
          code: ZodIssueCode.invalid_type,
          expected: ZodParsedType.boolean,
          received: ctx.parsedType
        });
        return INVALID;
      }
      return OK(input.data);
    }
  };
  ZodBoolean.create = (params) => {
    return new ZodBoolean({
      typeName: ZodFirstPartyTypeKind.ZodBoolean,
      coerce: (params === null || params === void 0 ? void 0 : params.coerce) || false,
      ...processCreateParams(params)
    });
  };
  var ZodDate = class extends ZodType {
    _parse(input) {
      if (this._def.coerce) {
        input.data = new Date(input.data);
      }
      const parsedType = this._getType(input);
      if (parsedType !== ZodParsedType.date) {
        const ctx2 = this._getOrReturnCtx(input);
        addIssueToContext(ctx2, {
          code: ZodIssueCode.invalid_type,
          expected: ZodParsedType.date,
          received: ctx2.parsedType
        });
        return INVALID;
      }
      if (isNaN(input.data.getTime())) {
        const ctx2 = this._getOrReturnCtx(input);
        addIssueToContext(ctx2, {
          code: ZodIssueCode.invalid_date
        });
        return INVALID;
      }
      const status = new ParseStatus();
      let ctx = void 0;
      for (const check of this._def.checks) {
        if (check.kind === "min") {
          if (input.data.getTime() < check.value) {
            ctx = this._getOrReturnCtx(input, ctx);
            addIssueToContext(ctx, {
              code: ZodIssueCode.too_small,
              message: check.message,
              inclusive: true,
              exact: false,
              minimum: check.value,
              type: "date"
            });
            status.dirty();
          }
        } else if (check.kind === "max") {
          if (input.data.getTime() > check.value) {
            ctx = this._getOrReturnCtx(input, ctx);
            addIssueToContext(ctx, {
              code: ZodIssueCode.too_big,
              message: check.message,
              inclusive: true,
              exact: false,
              maximum: check.value,
              type: "date"
            });
            status.dirty();
          }
        } else {
          util.assertNever(check);
        }
      }
      return {
        status: status.value,
        value: new Date(input.data.getTime())
      };
    }
    _addCheck(check) {
      return new ZodDate({
        ...this._def,
        checks: [...this._def.checks, check]
      });
    }
    min(minDate, message) {
      return this._addCheck({
        kind: "min",
        value: minDate.getTime(),
        message: errorUtil.toString(message)
      });
    }
    max(maxDate, message) {
      return this._addCheck({
        kind: "max",
        value: maxDate.getTime(),
        message: errorUtil.toString(message)
      });
    }
    get minDate() {
      let min = null;
      for (const ch of this._def.checks) {
        if (ch.kind === "min") {
          if (min === null || ch.value > min)
            min = ch.value;
        }
      }
      return min != null ? new Date(min) : null;
    }
    get maxDate() {
      let max = null;
      for (const ch of this._def.checks) {
        if (ch.kind === "max") {
          if (max === null || ch.value < max)
            max = ch.value;
        }
      }
      return max != null ? new Date(max) : null;
    }
  };
  ZodDate.create = (params) => {
    return new ZodDate({
      checks: [],
      coerce: (params === null || params === void 0 ? void 0 : params.coerce) || false,
      typeName: ZodFirstPartyTypeKind.ZodDate,
      ...processCreateParams(params)
    });
  };
  var ZodSymbol = class extends ZodType {
    _parse(input) {
      const parsedType = this._getType(input);
      if (parsedType !== ZodParsedType.symbol) {
        const ctx = this._getOrReturnCtx(input);
        addIssueToContext(ctx, {
          code: ZodIssueCode.invalid_type,
          expected: ZodParsedType.symbol,
          received: ctx.parsedType
        });
        return INVALID;
      }
      return OK(input.data);
    }
  };
  ZodSymbol.create = (params) => {
    return new ZodSymbol({
      typeName: ZodFirstPartyTypeKind.ZodSymbol,
      ...processCreateParams(params)
    });
  };
  var ZodUndefined = class extends ZodType {
    _parse(input) {
      const parsedType = this._getType(input);
      if (parsedType !== ZodParsedType.undefined) {
        const ctx = this._getOrReturnCtx(input);
        addIssueToContext(ctx, {
          code: ZodIssueCode.invalid_type,
          expected: ZodParsedType.undefined,
          received: ctx.parsedType
        });
        return INVALID;
      }
      return OK(input.data);
    }
  };
  ZodUndefined.create = (params) => {
    return new ZodUndefined({
      typeName: ZodFirstPartyTypeKind.ZodUndefined,
      ...processCreateParams(params)
    });
  };
  var ZodNull = class extends ZodType {
    _parse(input) {
      const parsedType = this._getType(input);
      if (parsedType !== ZodParsedType.null) {
        const ctx = this._getOrReturnCtx(input);
        addIssueToContext(ctx, {
          code: ZodIssueCode.invalid_type,
          expected: ZodParsedType.null,
          received: ctx.parsedType
        });
        return INVALID;
      }
      return OK(input.data);
    }
  };
  ZodNull.create = (params) => {
    return new ZodNull({
      typeName: ZodFirstPartyTypeKind.ZodNull,
      ...processCreateParams(params)
    });
  };
  var ZodAny = class extends ZodType {
    constructor() {
      super(...arguments);
      this._any = true;
    }
    _parse(input) {
      return OK(input.data);
    }
  };
  ZodAny.create = (params) => {
    return new ZodAny({
      typeName: ZodFirstPartyTypeKind.ZodAny,
      ...processCreateParams(params)
    });
  };
  var ZodUnknown = class extends ZodType {
    constructor() {
      super(...arguments);
      this._unknown = true;
    }
    _parse(input) {
      return OK(input.data);
    }
  };
  ZodUnknown.create = (params) => {
    return new ZodUnknown({
      typeName: ZodFirstPartyTypeKind.ZodUnknown,
      ...processCreateParams(params)
    });
  };
  var ZodNever = class extends ZodType {
    _parse(input) {
      const ctx = this._getOrReturnCtx(input);
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.never,
        received: ctx.parsedType
      });
      return INVALID;
    }
  };
  ZodNever.create = (params) => {
    return new ZodNever({
      typeName: ZodFirstPartyTypeKind.ZodNever,
      ...processCreateParams(params)
    });
  };
  var ZodVoid = class extends ZodType {
    _parse(input) {
      const parsedType = this._getType(input);
      if (parsedType !== ZodParsedType.undefined) {
        const ctx = this._getOrReturnCtx(input);
        addIssueToContext(ctx, {
          code: ZodIssueCode.invalid_type,
          expected: ZodParsedType.void,
          received: ctx.parsedType
        });
        return INVALID;
      }
      return OK(input.data);
    }
  };
  ZodVoid.create = (params) => {
    return new ZodVoid({
      typeName: ZodFirstPartyTypeKind.ZodVoid,
      ...processCreateParams(params)
    });
  };
  var ZodArray = class extends ZodType {
    _parse(input) {
      const { ctx, status } = this._processInputParams(input);
      const def = this._def;
      if (ctx.parsedType !== ZodParsedType.array) {
        addIssueToContext(ctx, {
          code: ZodIssueCode.invalid_type,
          expected: ZodParsedType.array,
          received: ctx.parsedType
        });
        return INVALID;
      }
      if (def.exactLength !== null) {
        const tooBig = ctx.data.length > def.exactLength.value;
        const tooSmall = ctx.data.length < def.exactLength.value;
        if (tooBig || tooSmall) {
          addIssueToContext(ctx, {
            code: tooBig ? ZodIssueCode.too_big : ZodIssueCode.too_small,
            minimum: tooSmall ? def.exactLength.value : void 0,
            maximum: tooBig ? def.exactLength.value : void 0,
            type: "array",
            inclusive: true,
            exact: true,
            message: def.exactLength.message
          });
          status.dirty();
        }
      }
      if (def.minLength !== null) {
        if (ctx.data.length < def.minLength.value) {
          addIssueToContext(ctx, {
            code: ZodIssueCode.too_small,
            minimum: def.minLength.value,
            type: "array",
            inclusive: true,
            exact: false,
            message: def.minLength.message
          });
          status.dirty();
        }
      }
      if (def.maxLength !== null) {
        if (ctx.data.length > def.maxLength.value) {
          addIssueToContext(ctx, {
            code: ZodIssueCode.too_big,
            maximum: def.maxLength.value,
            type: "array",
            inclusive: true,
            exact: false,
            message: def.maxLength.message
          });
          status.dirty();
        }
      }
      if (ctx.common.async) {
        return Promise.all([...ctx.data].map((item, i) => {
          return def.type._parseAsync(new ParseInputLazyPath(ctx, item, ctx.path, i));
        })).then((result2) => {
          return ParseStatus.mergeArray(status, result2);
        });
      }
      const result = [...ctx.data].map((item, i) => {
        return def.type._parseSync(new ParseInputLazyPath(ctx, item, ctx.path, i));
      });
      return ParseStatus.mergeArray(status, result);
    }
    get element() {
      return this._def.type;
    }
    min(minLength, message) {
      return new ZodArray({
        ...this._def,
        minLength: { value: minLength, message: errorUtil.toString(message) }
      });
    }
    max(maxLength, message) {
      return new ZodArray({
        ...this._def,
        maxLength: { value: maxLength, message: errorUtil.toString(message) }
      });
    }
    length(len, message) {
      return new ZodArray({
        ...this._def,
        exactLength: { value: len, message: errorUtil.toString(message) }
      });
    }
    nonempty(message) {
      return this.min(1, message);
    }
  };
  ZodArray.create = (schema, params) => {
    return new ZodArray({
      type: schema,
      minLength: null,
      maxLength: null,
      exactLength: null,
      typeName: ZodFirstPartyTypeKind.ZodArray,
      ...processCreateParams(params)
    });
  };
  function deepPartialify(schema) {
    if (schema instanceof ZodObject) {
      const newShape = {};
      for (const key in schema.shape) {
        const fieldSchema = schema.shape[key];
        newShape[key] = ZodOptional.create(deepPartialify(fieldSchema));
      }
      return new ZodObject({
        ...schema._def,
        shape: () => newShape
      });
    } else if (schema instanceof ZodArray) {
      return new ZodArray({
        ...schema._def,
        type: deepPartialify(schema.element)
      });
    } else if (schema instanceof ZodOptional) {
      return ZodOptional.create(deepPartialify(schema.unwrap()));
    } else if (schema instanceof ZodNullable) {
      return ZodNullable.create(deepPartialify(schema.unwrap()));
    } else if (schema instanceof ZodTuple) {
      return ZodTuple.create(schema.items.map((item) => deepPartialify(item)));
    } else {
      return schema;
    }
  }
  var ZodObject = class extends ZodType {
    constructor() {
      super(...arguments);
      this._cached = null;
      this.nonstrict = this.passthrough;
      this.augment = this.extend;
    }
    _getCached() {
      if (this._cached !== null)
        return this._cached;
      const shape = this._def.shape();
      const keys = util.objectKeys(shape);
      return this._cached = { shape, keys };
    }
    _parse(input) {
      const parsedType = this._getType(input);
      if (parsedType !== ZodParsedType.object) {
        const ctx2 = this._getOrReturnCtx(input);
        addIssueToContext(ctx2, {
          code: ZodIssueCode.invalid_type,
          expected: ZodParsedType.object,
          received: ctx2.parsedType
        });
        return INVALID;
      }
      const { status, ctx } = this._processInputParams(input);
      const { shape, keys: shapeKeys } = this._getCached();
      const extraKeys = [];
      if (!(this._def.catchall instanceof ZodNever && this._def.unknownKeys === "strip")) {
        for (const key in ctx.data) {
          if (!shapeKeys.includes(key)) {
            extraKeys.push(key);
          }
        }
      }
      const pairs = [];
      for (const key of shapeKeys) {
        const keyValidator = shape[key];
        const value = ctx.data[key];
        pairs.push({
          key: { status: "valid", value: key },
          value: keyValidator._parse(new ParseInputLazyPath(ctx, value, ctx.path, key)),
          alwaysSet: key in ctx.data
        });
      }
      if (this._def.catchall instanceof ZodNever) {
        const unknownKeys = this._def.unknownKeys;
        if (unknownKeys === "passthrough") {
          for (const key of extraKeys) {
            pairs.push({
              key: { status: "valid", value: key },
              value: { status: "valid", value: ctx.data[key] }
            });
          }
        } else if (unknownKeys === "strict") {
          if (extraKeys.length > 0) {
            addIssueToContext(ctx, {
              code: ZodIssueCode.unrecognized_keys,
              keys: extraKeys
            });
            status.dirty();
          }
        } else if (unknownKeys === "strip")
          ;
        else {
          throw new Error(`Internal ZodObject error: invalid unknownKeys value.`);
        }
      } else {
        const catchall = this._def.catchall;
        for (const key of extraKeys) {
          const value = ctx.data[key];
          pairs.push({
            key: { status: "valid", value: key },
            value: catchall._parse(
              new ParseInputLazyPath(ctx, value, ctx.path, key)
            ),
            alwaysSet: key in ctx.data
          });
        }
      }
      if (ctx.common.async) {
        return Promise.resolve().then(async () => {
          const syncPairs = [];
          for (const pair of pairs) {
            const key = await pair.key;
            syncPairs.push({
              key,
              value: await pair.value,
              alwaysSet: pair.alwaysSet
            });
          }
          return syncPairs;
        }).then((syncPairs) => {
          return ParseStatus.mergeObjectSync(status, syncPairs);
        });
      } else {
        return ParseStatus.mergeObjectSync(status, pairs);
      }
    }
    get shape() {
      return this._def.shape();
    }
    strict(message) {
      errorUtil.errToObj;
      return new ZodObject({
        ...this._def,
        unknownKeys: "strict",
        ...message !== void 0 ? {
          errorMap: (issue, ctx) => {
            var _a, _b, _c, _d;
            const defaultError = (_c = (_b = (_a = this._def).errorMap) === null || _b === void 0 ? void 0 : _b.call(_a, issue, ctx).message) !== null && _c !== void 0 ? _c : ctx.defaultError;
            if (issue.code === "unrecognized_keys")
              return {
                message: (_d = errorUtil.errToObj(message).message) !== null && _d !== void 0 ? _d : defaultError
              };
            return {
              message: defaultError
            };
          }
        } : {}
      });
    }
    strip() {
      return new ZodObject({
        ...this._def,
        unknownKeys: "strip"
      });
    }
    passthrough() {
      return new ZodObject({
        ...this._def,
        unknownKeys: "passthrough"
      });
    }
    extend(augmentation) {
      return new ZodObject({
        ...this._def,
        shape: () => ({
          ...this._def.shape(),
          ...augmentation
        })
      });
    }
    merge(merging) {
      const merged = new ZodObject({
        unknownKeys: merging._def.unknownKeys,
        catchall: merging._def.catchall,
        shape: () => ({
          ...this._def.shape(),
          ...merging._def.shape()
        }),
        typeName: ZodFirstPartyTypeKind.ZodObject
      });
      return merged;
    }
    setKey(key, schema) {
      return this.augment({ [key]: schema });
    }
    catchall(index) {
      return new ZodObject({
        ...this._def,
        catchall: index
      });
    }
    pick(mask) {
      const shape = {};
      util.objectKeys(mask).forEach((key) => {
        if (mask[key] && this.shape[key]) {
          shape[key] = this.shape[key];
        }
      });
      return new ZodObject({
        ...this._def,
        shape: () => shape
      });
    }
    omit(mask) {
      const shape = {};
      util.objectKeys(this.shape).forEach((key) => {
        if (!mask[key]) {
          shape[key] = this.shape[key];
        }
      });
      return new ZodObject({
        ...this._def,
        shape: () => shape
      });
    }
    deepPartial() {
      return deepPartialify(this);
    }
    partial(mask) {
      const newShape = {};
      util.objectKeys(this.shape).forEach((key) => {
        const fieldSchema = this.shape[key];
        if (mask && !mask[key]) {
          newShape[key] = fieldSchema;
        } else {
          newShape[key] = fieldSchema.optional();
        }
      });
      return new ZodObject({
        ...this._def,
        shape: () => newShape
      });
    }
    required(mask) {
      const newShape = {};
      util.objectKeys(this.shape).forEach((key) => {
        if (mask && !mask[key]) {
          newShape[key] = this.shape[key];
        } else {
          const fieldSchema = this.shape[key];
          let newField = fieldSchema;
          while (newField instanceof ZodOptional) {
            newField = newField._def.innerType;
          }
          newShape[key] = newField;
        }
      });
      return new ZodObject({
        ...this._def,
        shape: () => newShape
      });
    }
    keyof() {
      return createZodEnum(util.objectKeys(this.shape));
    }
  };
  ZodObject.create = (shape, params) => {
    return new ZodObject({
      shape: () => shape,
      unknownKeys: "strip",
      catchall: ZodNever.create(),
      typeName: ZodFirstPartyTypeKind.ZodObject,
      ...processCreateParams(params)
    });
  };
  ZodObject.strictCreate = (shape, params) => {
    return new ZodObject({
      shape: () => shape,
      unknownKeys: "strict",
      catchall: ZodNever.create(),
      typeName: ZodFirstPartyTypeKind.ZodObject,
      ...processCreateParams(params)
    });
  };
  ZodObject.lazycreate = (shape, params) => {
    return new ZodObject({
      shape,
      unknownKeys: "strip",
      catchall: ZodNever.create(),
      typeName: ZodFirstPartyTypeKind.ZodObject,
      ...processCreateParams(params)
    });
  };
  var ZodUnion = class extends ZodType {
    _parse(input) {
      const { ctx } = this._processInputParams(input);
      const options = this._def.options;
      function handleResults(results) {
        for (const result of results) {
          if (result.result.status === "valid") {
            return result.result;
          }
        }
        for (const result of results) {
          if (result.result.status === "dirty") {
            ctx.common.issues.push(...result.ctx.common.issues);
            return result.result;
          }
        }
        const unionErrors = results.map((result) => new ZodError(result.ctx.common.issues));
        addIssueToContext(ctx, {
          code: ZodIssueCode.invalid_union,
          unionErrors
        });
        return INVALID;
      }
      if (ctx.common.async) {
        return Promise.all(options.map(async (option) => {
          const childCtx = {
            ...ctx,
            common: {
              ...ctx.common,
              issues: []
            },
            parent: null
          };
          return {
            result: await option._parseAsync({
              data: ctx.data,
              path: ctx.path,
              parent: childCtx
            }),
            ctx: childCtx
          };
        })).then(handleResults);
      } else {
        let dirty = void 0;
        const issues = [];
        for (const option of options) {
          const childCtx = {
            ...ctx,
            common: {
              ...ctx.common,
              issues: []
            },
            parent: null
          };
          const result = option._parseSync({
            data: ctx.data,
            path: ctx.path,
            parent: childCtx
          });
          if (result.status === "valid") {
            return result;
          } else if (result.status === "dirty" && !dirty) {
            dirty = { result, ctx: childCtx };
          }
          if (childCtx.common.issues.length) {
            issues.push(childCtx.common.issues);
          }
        }
        if (dirty) {
          ctx.common.issues.push(...dirty.ctx.common.issues);
          return dirty.result;
        }
        const unionErrors = issues.map((issues2) => new ZodError(issues2));
        addIssueToContext(ctx, {
          code: ZodIssueCode.invalid_union,
          unionErrors
        });
        return INVALID;
      }
    }
    get options() {
      return this._def.options;
    }
  };
  ZodUnion.create = (types, params) => {
    return new ZodUnion({
      options: types,
      typeName: ZodFirstPartyTypeKind.ZodUnion,
      ...processCreateParams(params)
    });
  };
  var getDiscriminator = (type) => {
    if (type instanceof ZodLazy) {
      return getDiscriminator(type.schema);
    } else if (type instanceof ZodEffects) {
      return getDiscriminator(type.innerType());
    } else if (type instanceof ZodLiteral) {
      return [type.value];
    } else if (type instanceof ZodEnum) {
      return type.options;
    } else if (type instanceof ZodNativeEnum) {
      return Object.keys(type.enum);
    } else if (type instanceof ZodDefault) {
      return getDiscriminator(type._def.innerType);
    } else if (type instanceof ZodUndefined) {
      return [void 0];
    } else if (type instanceof ZodNull) {
      return [null];
    } else {
      return null;
    }
  };
  var ZodDiscriminatedUnion = class extends ZodType {
    _parse(input) {
      const { ctx } = this._processInputParams(input);
      if (ctx.parsedType !== ZodParsedType.object) {
        addIssueToContext(ctx, {
          code: ZodIssueCode.invalid_type,
          expected: ZodParsedType.object,
          received: ctx.parsedType
        });
        return INVALID;
      }
      const discriminator = this.discriminator;
      const discriminatorValue = ctx.data[discriminator];
      const option = this.optionsMap.get(discriminatorValue);
      if (!option) {
        addIssueToContext(ctx, {
          code: ZodIssueCode.invalid_union_discriminator,
          options: Array.from(this.optionsMap.keys()),
          path: [discriminator]
        });
        return INVALID;
      }
      if (ctx.common.async) {
        return option._parseAsync({
          data: ctx.data,
          path: ctx.path,
          parent: ctx
        });
      } else {
        return option._parseSync({
          data: ctx.data,
          path: ctx.path,
          parent: ctx
        });
      }
    }
    get discriminator() {
      return this._def.discriminator;
    }
    get options() {
      return this._def.options;
    }
    get optionsMap() {
      return this._def.optionsMap;
    }
    static create(discriminator, options, params) {
      const optionsMap = /* @__PURE__ */ new Map();
      for (const type of options) {
        const discriminatorValues = getDiscriminator(type.shape[discriminator]);
        if (!discriminatorValues) {
          throw new Error(`A discriminator value for key \`${discriminator}\` could not be extracted from all schema options`);
        }
        for (const value of discriminatorValues) {
          if (optionsMap.has(value)) {
            throw new Error(`Discriminator property ${String(discriminator)} has duplicate value ${String(value)}`);
          }
          optionsMap.set(value, type);
        }
      }
      return new ZodDiscriminatedUnion({
        typeName: ZodFirstPartyTypeKind.ZodDiscriminatedUnion,
        discriminator,
        options,
        optionsMap,
        ...processCreateParams(params)
      });
    }
  };
  function mergeValues(a, b) {
    const aType = getParsedType(a);
    const bType = getParsedType(b);
    if (a === b) {
      return { valid: true, data: a };
    } else if (aType === ZodParsedType.object && bType === ZodParsedType.object) {
      const bKeys = util.objectKeys(b);
      const sharedKeys = util.objectKeys(a).filter((key) => bKeys.indexOf(key) !== -1);
      const newObj = { ...a, ...b };
      for (const key of sharedKeys) {
        const sharedValue = mergeValues(a[key], b[key]);
        if (!sharedValue.valid) {
          return { valid: false };
        }
        newObj[key] = sharedValue.data;
      }
      return { valid: true, data: newObj };
    } else if (aType === ZodParsedType.array && bType === ZodParsedType.array) {
      if (a.length !== b.length) {
        return { valid: false };
      }
      const newArray = [];
      for (let index = 0; index < a.length; index++) {
        const itemA = a[index];
        const itemB = b[index];
        const sharedValue = mergeValues(itemA, itemB);
        if (!sharedValue.valid) {
          return { valid: false };
        }
        newArray.push(sharedValue.data);
      }
      return { valid: true, data: newArray };
    } else if (aType === ZodParsedType.date && bType === ZodParsedType.date && +a === +b) {
      return { valid: true, data: a };
    } else {
      return { valid: false };
    }
  }
  var ZodIntersection = class extends ZodType {
    _parse(input) {
      const { status, ctx } = this._processInputParams(input);
      const handleParsed = (parsedLeft, parsedRight) => {
        if (isAborted(parsedLeft) || isAborted(parsedRight)) {
          return INVALID;
        }
        const merged = mergeValues(parsedLeft.value, parsedRight.value);
        if (!merged.valid) {
          addIssueToContext(ctx, {
            code: ZodIssueCode.invalid_intersection_types
          });
          return INVALID;
        }
        if (isDirty(parsedLeft) || isDirty(parsedRight)) {
          status.dirty();
        }
        return { status: status.value, value: merged.data };
      };
      if (ctx.common.async) {
        return Promise.all([
          this._def.left._parseAsync({
            data: ctx.data,
            path: ctx.path,
            parent: ctx
          }),
          this._def.right._parseAsync({
            data: ctx.data,
            path: ctx.path,
            parent: ctx
          })
        ]).then(([left, right]) => handleParsed(left, right));
      } else {
        return handleParsed(this._def.left._parseSync({
          data: ctx.data,
          path: ctx.path,
          parent: ctx
        }), this._def.right._parseSync({
          data: ctx.data,
          path: ctx.path,
          parent: ctx
        }));
      }
    }
  };
  ZodIntersection.create = (left, right, params) => {
    return new ZodIntersection({
      left,
      right,
      typeName: ZodFirstPartyTypeKind.ZodIntersection,
      ...processCreateParams(params)
    });
  };
  var ZodTuple = class extends ZodType {
    _parse(input) {
      const { status, ctx } = this._processInputParams(input);
      if (ctx.parsedType !== ZodParsedType.array) {
        addIssueToContext(ctx, {
          code: ZodIssueCode.invalid_type,
          expected: ZodParsedType.array,
          received: ctx.parsedType
        });
        return INVALID;
      }
      if (ctx.data.length < this._def.items.length) {
        addIssueToContext(ctx, {
          code: ZodIssueCode.too_small,
          minimum: this._def.items.length,
          inclusive: true,
          exact: false,
          type: "array"
        });
        return INVALID;
      }
      const rest = this._def.rest;
      if (!rest && ctx.data.length > this._def.items.length) {
        addIssueToContext(ctx, {
          code: ZodIssueCode.too_big,
          maximum: this._def.items.length,
          inclusive: true,
          exact: false,
          type: "array"
        });
        status.dirty();
      }
      const items = [...ctx.data].map((item, itemIndex) => {
        const schema = this._def.items[itemIndex] || this._def.rest;
        if (!schema)
          return null;
        return schema._parse(new ParseInputLazyPath(ctx, item, ctx.path, itemIndex));
      }).filter((x) => !!x);
      if (ctx.common.async) {
        return Promise.all(items).then((results) => {
          return ParseStatus.mergeArray(status, results);
        });
      } else {
        return ParseStatus.mergeArray(status, items);
      }
    }
    get items() {
      return this._def.items;
    }
    rest(rest) {
      return new ZodTuple({
        ...this._def,
        rest
      });
    }
  };
  ZodTuple.create = (schemas, params) => {
    if (!Array.isArray(schemas)) {
      throw new Error("You must pass an array of schemas to z.tuple([ ... ])");
    }
    return new ZodTuple({
      items: schemas,
      typeName: ZodFirstPartyTypeKind.ZodTuple,
      rest: null,
      ...processCreateParams(params)
    });
  };
  var ZodRecord = class extends ZodType {
    get keySchema() {
      return this._def.keyType;
    }
    get valueSchema() {
      return this._def.valueType;
    }
    _parse(input) {
      const { status, ctx } = this._processInputParams(input);
      if (ctx.parsedType !== ZodParsedType.object) {
        addIssueToContext(ctx, {
          code: ZodIssueCode.invalid_type,
          expected: ZodParsedType.object,
          received: ctx.parsedType
        });
        return INVALID;
      }
      const pairs = [];
      const keyType = this._def.keyType;
      const valueType = this._def.valueType;
      for (const key in ctx.data) {
        pairs.push({
          key: keyType._parse(new ParseInputLazyPath(ctx, key, ctx.path, key)),
          value: valueType._parse(new ParseInputLazyPath(ctx, ctx.data[key], ctx.path, key))
        });
      }
      if (ctx.common.async) {
        return ParseStatus.mergeObjectAsync(status, pairs);
      } else {
        return ParseStatus.mergeObjectSync(status, pairs);
      }
    }
    get element() {
      return this._def.valueType;
    }
    static create(first, second, third) {
      if (second instanceof ZodType) {
        return new ZodRecord({
          keyType: first,
          valueType: second,
          typeName: ZodFirstPartyTypeKind.ZodRecord,
          ...processCreateParams(third)
        });
      }
      return new ZodRecord({
        keyType: ZodString.create(),
        valueType: first,
        typeName: ZodFirstPartyTypeKind.ZodRecord,
        ...processCreateParams(second)
      });
    }
  };
  var ZodMap = class extends ZodType {
    _parse(input) {
      const { status, ctx } = this._processInputParams(input);
      if (ctx.parsedType !== ZodParsedType.map) {
        addIssueToContext(ctx, {
          code: ZodIssueCode.invalid_type,
          expected: ZodParsedType.map,
          received: ctx.parsedType
        });
        return INVALID;
      }
      const keyType = this._def.keyType;
      const valueType = this._def.valueType;
      const pairs = [...ctx.data.entries()].map(([key, value], index) => {
        return {
          key: keyType._parse(new ParseInputLazyPath(ctx, key, ctx.path, [index, "key"])),
          value: valueType._parse(new ParseInputLazyPath(ctx, value, ctx.path, [index, "value"]))
        };
      });
      if (ctx.common.async) {
        const finalMap = /* @__PURE__ */ new Map();
        return Promise.resolve().then(async () => {
          for (const pair of pairs) {
            const key = await pair.key;
            const value = await pair.value;
            if (key.status === "aborted" || value.status === "aborted") {
              return INVALID;
            }
            if (key.status === "dirty" || value.status === "dirty") {
              status.dirty();
            }
            finalMap.set(key.value, value.value);
          }
          return { status: status.value, value: finalMap };
        });
      } else {
        const finalMap = /* @__PURE__ */ new Map();
        for (const pair of pairs) {
          const key = pair.key;
          const value = pair.value;
          if (key.status === "aborted" || value.status === "aborted") {
            return INVALID;
          }
          if (key.status === "dirty" || value.status === "dirty") {
            status.dirty();
          }
          finalMap.set(key.value, value.value);
        }
        return { status: status.value, value: finalMap };
      }
    }
  };
  ZodMap.create = (keyType, valueType, params) => {
    return new ZodMap({
      valueType,
      keyType,
      typeName: ZodFirstPartyTypeKind.ZodMap,
      ...processCreateParams(params)
    });
  };
  var ZodSet = class extends ZodType {
    _parse(input) {
      const { status, ctx } = this._processInputParams(input);
      if (ctx.parsedType !== ZodParsedType.set) {
        addIssueToContext(ctx, {
          code: ZodIssueCode.invalid_type,
          expected: ZodParsedType.set,
          received: ctx.parsedType
        });
        return INVALID;
      }
      const def = this._def;
      if (def.minSize !== null) {
        if (ctx.data.size < def.minSize.value) {
          addIssueToContext(ctx, {
            code: ZodIssueCode.too_small,
            minimum: def.minSize.value,
            type: "set",
            inclusive: true,
            exact: false,
            message: def.minSize.message
          });
          status.dirty();
        }
      }
      if (def.maxSize !== null) {
        if (ctx.data.size > def.maxSize.value) {
          addIssueToContext(ctx, {
            code: ZodIssueCode.too_big,
            maximum: def.maxSize.value,
            type: "set",
            inclusive: true,
            exact: false,
            message: def.maxSize.message
          });
          status.dirty();
        }
      }
      const valueType = this._def.valueType;
      function finalizeSet(elements2) {
        const parsedSet = /* @__PURE__ */ new Set();
        for (const element of elements2) {
          if (element.status === "aborted")
            return INVALID;
          if (element.status === "dirty")
            status.dirty();
          parsedSet.add(element.value);
        }
        return { status: status.value, value: parsedSet };
      }
      const elements = [...ctx.data.values()].map((item, i) => valueType._parse(new ParseInputLazyPath(ctx, item, ctx.path, i)));
      if (ctx.common.async) {
        return Promise.all(elements).then((elements2) => finalizeSet(elements2));
      } else {
        return finalizeSet(elements);
      }
    }
    min(minSize, message) {
      return new ZodSet({
        ...this._def,
        minSize: { value: minSize, message: errorUtil.toString(message) }
      });
    }
    max(maxSize, message) {
      return new ZodSet({
        ...this._def,
        maxSize: { value: maxSize, message: errorUtil.toString(message) }
      });
    }
    size(size, message) {
      return this.min(size, message).max(size, message);
    }
    nonempty(message) {
      return this.min(1, message);
    }
  };
  ZodSet.create = (valueType, params) => {
    return new ZodSet({
      valueType,
      minSize: null,
      maxSize: null,
      typeName: ZodFirstPartyTypeKind.ZodSet,
      ...processCreateParams(params)
    });
  };
  var ZodFunction = class extends ZodType {
    constructor() {
      super(...arguments);
      this.validate = this.implement;
    }
    _parse(input) {
      const { ctx } = this._processInputParams(input);
      if (ctx.parsedType !== ZodParsedType.function) {
        addIssueToContext(ctx, {
          code: ZodIssueCode.invalid_type,
          expected: ZodParsedType.function,
          received: ctx.parsedType
        });
        return INVALID;
      }
      function makeArgsIssue(args, error) {
        return makeIssue({
          data: args,
          path: ctx.path,
          errorMaps: [
            ctx.common.contextualErrorMap,
            ctx.schemaErrorMap,
            getErrorMap(),
            errorMap
          ].filter((x) => !!x),
          issueData: {
            code: ZodIssueCode.invalid_arguments,
            argumentsError: error
          }
        });
      }
      function makeReturnsIssue(returns, error) {
        return makeIssue({
          data: returns,
          path: ctx.path,
          errorMaps: [
            ctx.common.contextualErrorMap,
            ctx.schemaErrorMap,
            getErrorMap(),
            errorMap
          ].filter((x) => !!x),
          issueData: {
            code: ZodIssueCode.invalid_return_type,
            returnTypeError: error
          }
        });
      }
      const params = { errorMap: ctx.common.contextualErrorMap };
      const fn = ctx.data;
      if (this._def.returns instanceof ZodPromise) {
        return OK(async (...args) => {
          const error = new ZodError([]);
          const parsedArgs = await this._def.args.parseAsync(args, params).catch((e) => {
            error.addIssue(makeArgsIssue(args, e));
            throw error;
          });
          const result = await fn(...parsedArgs);
          const parsedReturns = await this._def.returns._def.type.parseAsync(result, params).catch((e) => {
            error.addIssue(makeReturnsIssue(result, e));
            throw error;
          });
          return parsedReturns;
        });
      } else {
        return OK((...args) => {
          const parsedArgs = this._def.args.safeParse(args, params);
          if (!parsedArgs.success) {
            throw new ZodError([makeArgsIssue(args, parsedArgs.error)]);
          }
          const result = fn(...parsedArgs.data);
          const parsedReturns = this._def.returns.safeParse(result, params);
          if (!parsedReturns.success) {
            throw new ZodError([makeReturnsIssue(result, parsedReturns.error)]);
          }
          return parsedReturns.data;
        });
      }
    }
    parameters() {
      return this._def.args;
    }
    returnType() {
      return this._def.returns;
    }
    args(...items) {
      return new ZodFunction({
        ...this._def,
        args: ZodTuple.create(items).rest(ZodUnknown.create())
      });
    }
    returns(returnType) {
      return new ZodFunction({
        ...this._def,
        returns: returnType
      });
    }
    implement(func) {
      const validatedFunc = this.parse(func);
      return validatedFunc;
    }
    strictImplement(func) {
      const validatedFunc = this.parse(func);
      return validatedFunc;
    }
    static create(args, returns, params) {
      return new ZodFunction({
        args: args ? args : ZodTuple.create([]).rest(ZodUnknown.create()),
        returns: returns || ZodUnknown.create(),
        typeName: ZodFirstPartyTypeKind.ZodFunction,
        ...processCreateParams(params)
      });
    }
  };
  var ZodLazy = class extends ZodType {
    get schema() {
      return this._def.getter();
    }
    _parse(input) {
      const { ctx } = this._processInputParams(input);
      const lazySchema = this._def.getter();
      return lazySchema._parse({ data: ctx.data, path: ctx.path, parent: ctx });
    }
  };
  ZodLazy.create = (getter, params) => {
    return new ZodLazy({
      getter,
      typeName: ZodFirstPartyTypeKind.ZodLazy,
      ...processCreateParams(params)
    });
  };
  var ZodLiteral = class extends ZodType {
    _parse(input) {
      if (input.data !== this._def.value) {
        const ctx = this._getOrReturnCtx(input);
        addIssueToContext(ctx, {
          received: ctx.data,
          code: ZodIssueCode.invalid_literal,
          expected: this._def.value
        });
        return INVALID;
      }
      return { status: "valid", value: input.data };
    }
    get value() {
      return this._def.value;
    }
  };
  ZodLiteral.create = (value, params) => {
    return new ZodLiteral({
      value,
      typeName: ZodFirstPartyTypeKind.ZodLiteral,
      ...processCreateParams(params)
    });
  };
  function createZodEnum(values, params) {
    return new ZodEnum({
      values,
      typeName: ZodFirstPartyTypeKind.ZodEnum,
      ...processCreateParams(params)
    });
  }
  var ZodEnum = class extends ZodType {
    _parse(input) {
      if (typeof input.data !== "string") {
        const ctx = this._getOrReturnCtx(input);
        const expectedValues = this._def.values;
        addIssueToContext(ctx, {
          expected: util.joinValues(expectedValues),
          received: ctx.parsedType,
          code: ZodIssueCode.invalid_type
        });
        return INVALID;
      }
      if (this._def.values.indexOf(input.data) === -1) {
        const ctx = this._getOrReturnCtx(input);
        const expectedValues = this._def.values;
        addIssueToContext(ctx, {
          received: ctx.data,
          code: ZodIssueCode.invalid_enum_value,
          options: expectedValues
        });
        return INVALID;
      }
      return OK(input.data);
    }
    get options() {
      return this._def.values;
    }
    get enum() {
      const enumValues = {};
      for (const val of this._def.values) {
        enumValues[val] = val;
      }
      return enumValues;
    }
    get Values() {
      const enumValues = {};
      for (const val of this._def.values) {
        enumValues[val] = val;
      }
      return enumValues;
    }
    get Enum() {
      const enumValues = {};
      for (const val of this._def.values) {
        enumValues[val] = val;
      }
      return enumValues;
    }
    extract(values) {
      return ZodEnum.create(values);
    }
    exclude(values) {
      return ZodEnum.create(this.options.filter((opt) => !values.includes(opt)));
    }
  };
  ZodEnum.create = createZodEnum;
  var ZodNativeEnum = class extends ZodType {
    _parse(input) {
      const nativeEnumValues = util.getValidEnumValues(this._def.values);
      const ctx = this._getOrReturnCtx(input);
      if (ctx.parsedType !== ZodParsedType.string && ctx.parsedType !== ZodParsedType.number) {
        const expectedValues = util.objectValues(nativeEnumValues);
        addIssueToContext(ctx, {
          expected: util.joinValues(expectedValues),
          received: ctx.parsedType,
          code: ZodIssueCode.invalid_type
        });
        return INVALID;
      }
      if (nativeEnumValues.indexOf(input.data) === -1) {
        const expectedValues = util.objectValues(nativeEnumValues);
        addIssueToContext(ctx, {
          received: ctx.data,
          code: ZodIssueCode.invalid_enum_value,
          options: expectedValues
        });
        return INVALID;
      }
      return OK(input.data);
    }
    get enum() {
      return this._def.values;
    }
  };
  ZodNativeEnum.create = (values, params) => {
    return new ZodNativeEnum({
      values,
      typeName: ZodFirstPartyTypeKind.ZodNativeEnum,
      ...processCreateParams(params)
    });
  };
  var ZodPromise = class extends ZodType {
    unwrap() {
      return this._def.type;
    }
    _parse(input) {
      const { ctx } = this._processInputParams(input);
      if (ctx.parsedType !== ZodParsedType.promise && ctx.common.async === false) {
        addIssueToContext(ctx, {
          code: ZodIssueCode.invalid_type,
          expected: ZodParsedType.promise,
          received: ctx.parsedType
        });
        return INVALID;
      }
      const promisified = ctx.parsedType === ZodParsedType.promise ? ctx.data : Promise.resolve(ctx.data);
      return OK(promisified.then((data) => {
        return this._def.type.parseAsync(data, {
          path: ctx.path,
          errorMap: ctx.common.contextualErrorMap
        });
      }));
    }
  };
  ZodPromise.create = (schema, params) => {
    return new ZodPromise({
      type: schema,
      typeName: ZodFirstPartyTypeKind.ZodPromise,
      ...processCreateParams(params)
    });
  };
  var ZodEffects = class extends ZodType {
    innerType() {
      return this._def.schema;
    }
    sourceType() {
      return this._def.schema._def.typeName === ZodFirstPartyTypeKind.ZodEffects ? this._def.schema.sourceType() : this._def.schema;
    }
    _parse(input) {
      const { status, ctx } = this._processInputParams(input);
      const effect = this._def.effect || null;
      if (effect.type === "preprocess") {
        const processed = effect.transform(ctx.data);
        if (ctx.common.async) {
          return Promise.resolve(processed).then((processed2) => {
            return this._def.schema._parseAsync({
              data: processed2,
              path: ctx.path,
              parent: ctx
            });
          });
        } else {
          return this._def.schema._parseSync({
            data: processed,
            path: ctx.path,
            parent: ctx
          });
        }
      }
      const checkCtx = {
        addIssue: (arg) => {
          addIssueToContext(ctx, arg);
          if (arg.fatal) {
            status.abort();
          } else {
            status.dirty();
          }
        },
        get path() {
          return ctx.path;
        }
      };
      checkCtx.addIssue = checkCtx.addIssue.bind(checkCtx);
      if (effect.type === "refinement") {
        const executeRefinement = (acc) => {
          const result = effect.refinement(acc, checkCtx);
          if (ctx.common.async) {
            return Promise.resolve(result);
          }
          if (result instanceof Promise) {
            throw new Error("Async refinement encountered during synchronous parse operation. Use .parseAsync instead.");
          }
          return acc;
        };
        if (ctx.common.async === false) {
          const inner = this._def.schema._parseSync({
            data: ctx.data,
            path: ctx.path,
            parent: ctx
          });
          if (inner.status === "aborted")
            return INVALID;
          if (inner.status === "dirty")
            status.dirty();
          executeRefinement(inner.value);
          return { status: status.value, value: inner.value };
        } else {
          return this._def.schema._parseAsync({ data: ctx.data, path: ctx.path, parent: ctx }).then((inner) => {
            if (inner.status === "aborted")
              return INVALID;
            if (inner.status === "dirty")
              status.dirty();
            return executeRefinement(inner.value).then(() => {
              return { status: status.value, value: inner.value };
            });
          });
        }
      }
      if (effect.type === "transform") {
        if (ctx.common.async === false) {
          const base = this._def.schema._parseSync({
            data: ctx.data,
            path: ctx.path,
            parent: ctx
          });
          if (!isValid(base))
            return base;
          const result = effect.transform(base.value, checkCtx);
          if (result instanceof Promise) {
            throw new Error(`Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.`);
          }
          return { status: status.value, value: result };
        } else {
          return this._def.schema._parseAsync({ data: ctx.data, path: ctx.path, parent: ctx }).then((base) => {
            if (!isValid(base))
              return base;
            return Promise.resolve(effect.transform(base.value, checkCtx)).then((result) => ({ status: status.value, value: result }));
          });
        }
      }
      util.assertNever(effect);
    }
  };
  ZodEffects.create = (schema, effect, params) => {
    return new ZodEffects({
      schema,
      typeName: ZodFirstPartyTypeKind.ZodEffects,
      effect,
      ...processCreateParams(params)
    });
  };
  ZodEffects.createWithPreprocess = (preprocess, schema, params) => {
    return new ZodEffects({
      schema,
      effect: { type: "preprocess", transform: preprocess },
      typeName: ZodFirstPartyTypeKind.ZodEffects,
      ...processCreateParams(params)
    });
  };
  var ZodOptional = class extends ZodType {
    _parse(input) {
      const parsedType = this._getType(input);
      if (parsedType === ZodParsedType.undefined) {
        return OK(void 0);
      }
      return this._def.innerType._parse(input);
    }
    unwrap() {
      return this._def.innerType;
    }
  };
  ZodOptional.create = (type, params) => {
    return new ZodOptional({
      innerType: type,
      typeName: ZodFirstPartyTypeKind.ZodOptional,
      ...processCreateParams(params)
    });
  };
  var ZodNullable = class extends ZodType {
    _parse(input) {
      const parsedType = this._getType(input);
      if (parsedType === ZodParsedType.null) {
        return OK(null);
      }
      return this._def.innerType._parse(input);
    }
    unwrap() {
      return this._def.innerType;
    }
  };
  ZodNullable.create = (type, params) => {
    return new ZodNullable({
      innerType: type,
      typeName: ZodFirstPartyTypeKind.ZodNullable,
      ...processCreateParams(params)
    });
  };
  var ZodDefault = class extends ZodType {
    _parse(input) {
      const { ctx } = this._processInputParams(input);
      let data = ctx.data;
      if (ctx.parsedType === ZodParsedType.undefined) {
        data = this._def.defaultValue();
      }
      return this._def.innerType._parse({
        data,
        path: ctx.path,
        parent: ctx
      });
    }
    removeDefault() {
      return this._def.innerType;
    }
  };
  ZodDefault.create = (type, params) => {
    return new ZodDefault({
      innerType: type,
      typeName: ZodFirstPartyTypeKind.ZodDefault,
      defaultValue: typeof params.default === "function" ? params.default : () => params.default,
      ...processCreateParams(params)
    });
  };
  var ZodCatch = class extends ZodType {
    _parse(input) {
      const { ctx } = this._processInputParams(input);
      const newCtx = {
        ...ctx,
        common: {
          ...ctx.common,
          issues: []
        }
      };
      const result = this._def.innerType._parse({
        data: newCtx.data,
        path: newCtx.path,
        parent: {
          ...newCtx
        }
      });
      if (isAsync(result)) {
        return result.then((result2) => {
          return {
            status: "valid",
            value: result2.status === "valid" ? result2.value : this._def.catchValue({
              get error() {
                return new ZodError(newCtx.common.issues);
              },
              input: newCtx.data
            })
          };
        });
      } else {
        return {
          status: "valid",
          value: result.status === "valid" ? result.value : this._def.catchValue({
            get error() {
              return new ZodError(newCtx.common.issues);
            },
            input: newCtx.data
          })
        };
      }
    }
    removeCatch() {
      return this._def.innerType;
    }
  };
  ZodCatch.create = (type, params) => {
    return new ZodCatch({
      innerType: type,
      typeName: ZodFirstPartyTypeKind.ZodCatch,
      catchValue: typeof params.catch === "function" ? params.catch : () => params.catch,
      ...processCreateParams(params)
    });
  };
  var ZodNaN = class extends ZodType {
    _parse(input) {
      const parsedType = this._getType(input);
      if (parsedType !== ZodParsedType.nan) {
        const ctx = this._getOrReturnCtx(input);
        addIssueToContext(ctx, {
          code: ZodIssueCode.invalid_type,
          expected: ZodParsedType.nan,
          received: ctx.parsedType
        });
        return INVALID;
      }
      return { status: "valid", value: input.data };
    }
  };
  ZodNaN.create = (params) => {
    return new ZodNaN({
      typeName: ZodFirstPartyTypeKind.ZodNaN,
      ...processCreateParams(params)
    });
  };
  var BRAND = Symbol("zod_brand");
  var ZodBranded = class extends ZodType {
    _parse(input) {
      const { ctx } = this._processInputParams(input);
      const data = ctx.data;
      return this._def.type._parse({
        data,
        path: ctx.path,
        parent: ctx
      });
    }
    unwrap() {
      return this._def.type;
    }
  };
  var ZodPipeline = class extends ZodType {
    _parse(input) {
      const { status, ctx } = this._processInputParams(input);
      if (ctx.common.async) {
        const handleAsync = async () => {
          const inResult = await this._def.in._parseAsync({
            data: ctx.data,
            path: ctx.path,
            parent: ctx
          });
          if (inResult.status === "aborted")
            return INVALID;
          if (inResult.status === "dirty") {
            status.dirty();
            return DIRTY(inResult.value);
          } else {
            return this._def.out._parseAsync({
              data: inResult.value,
              path: ctx.path,
              parent: ctx
            });
          }
        };
        return handleAsync();
      } else {
        const inResult = this._def.in._parseSync({
          data: ctx.data,
          path: ctx.path,
          parent: ctx
        });
        if (inResult.status === "aborted")
          return INVALID;
        if (inResult.status === "dirty") {
          status.dirty();
          return {
            status: "dirty",
            value: inResult.value
          };
        } else {
          return this._def.out._parseSync({
            data: inResult.value,
            path: ctx.path,
            parent: ctx
          });
        }
      }
    }
    static create(a, b) {
      return new ZodPipeline({
        in: a,
        out: b,
        typeName: ZodFirstPartyTypeKind.ZodPipeline
      });
    }
  };
  var custom = (check, params = {}, fatal) => {
    if (check)
      return ZodAny.create().superRefine((data, ctx) => {
        var _a, _b;
        if (!check(data)) {
          const p = typeof params === "function" ? params(data) : typeof params === "string" ? { message: params } : params;
          const _fatal = (_b = (_a = p.fatal) !== null && _a !== void 0 ? _a : fatal) !== null && _b !== void 0 ? _b : true;
          const p2 = typeof p === "string" ? { message: p } : p;
          ctx.addIssue({ code: "custom", ...p2, fatal: _fatal });
        }
      });
    return ZodAny.create();
  };
  var late = {
    object: ZodObject.lazycreate
  };
  var ZodFirstPartyTypeKind;
  (function(ZodFirstPartyTypeKind2) {
    ZodFirstPartyTypeKind2["ZodString"] = "ZodString";
    ZodFirstPartyTypeKind2["ZodNumber"] = "ZodNumber";
    ZodFirstPartyTypeKind2["ZodNaN"] = "ZodNaN";
    ZodFirstPartyTypeKind2["ZodBigInt"] = "ZodBigInt";
    ZodFirstPartyTypeKind2["ZodBoolean"] = "ZodBoolean";
    ZodFirstPartyTypeKind2["ZodDate"] = "ZodDate";
    ZodFirstPartyTypeKind2["ZodSymbol"] = "ZodSymbol";
    ZodFirstPartyTypeKind2["ZodUndefined"] = "ZodUndefined";
    ZodFirstPartyTypeKind2["ZodNull"] = "ZodNull";
    ZodFirstPartyTypeKind2["ZodAny"] = "ZodAny";
    ZodFirstPartyTypeKind2["ZodUnknown"] = "ZodUnknown";
    ZodFirstPartyTypeKind2["ZodNever"] = "ZodNever";
    ZodFirstPartyTypeKind2["ZodVoid"] = "ZodVoid";
    ZodFirstPartyTypeKind2["ZodArray"] = "ZodArray";
    ZodFirstPartyTypeKind2["ZodObject"] = "ZodObject";
    ZodFirstPartyTypeKind2["ZodUnion"] = "ZodUnion";
    ZodFirstPartyTypeKind2["ZodDiscriminatedUnion"] = "ZodDiscriminatedUnion";
    ZodFirstPartyTypeKind2["ZodIntersection"] = "ZodIntersection";
    ZodFirstPartyTypeKind2["ZodTuple"] = "ZodTuple";
    ZodFirstPartyTypeKind2["ZodRecord"] = "ZodRecord";
    ZodFirstPartyTypeKind2["ZodMap"] = "ZodMap";
    ZodFirstPartyTypeKind2["ZodSet"] = "ZodSet";
    ZodFirstPartyTypeKind2["ZodFunction"] = "ZodFunction";
    ZodFirstPartyTypeKind2["ZodLazy"] = "ZodLazy";
    ZodFirstPartyTypeKind2["ZodLiteral"] = "ZodLiteral";
    ZodFirstPartyTypeKind2["ZodEnum"] = "ZodEnum";
    ZodFirstPartyTypeKind2["ZodEffects"] = "ZodEffects";
    ZodFirstPartyTypeKind2["ZodNativeEnum"] = "ZodNativeEnum";
    ZodFirstPartyTypeKind2["ZodOptional"] = "ZodOptional";
    ZodFirstPartyTypeKind2["ZodNullable"] = "ZodNullable";
    ZodFirstPartyTypeKind2["ZodDefault"] = "ZodDefault";
    ZodFirstPartyTypeKind2["ZodCatch"] = "ZodCatch";
    ZodFirstPartyTypeKind2["ZodPromise"] = "ZodPromise";
    ZodFirstPartyTypeKind2["ZodBranded"] = "ZodBranded";
    ZodFirstPartyTypeKind2["ZodPipeline"] = "ZodPipeline";
  })(ZodFirstPartyTypeKind || (ZodFirstPartyTypeKind = {}));
  var instanceOfType = (cls, params = {
    message: `Input not instance of ${cls.name}`
  }) => custom((data) => data instanceof cls, params);
  var stringType = ZodString.create;
  var numberType = ZodNumber.create;
  var nanType = ZodNaN.create;
  var bigIntType = ZodBigInt.create;
  var booleanType = ZodBoolean.create;
  var dateType = ZodDate.create;
  var symbolType = ZodSymbol.create;
  var undefinedType = ZodUndefined.create;
  var nullType = ZodNull.create;
  var anyType = ZodAny.create;
  var unknownType = ZodUnknown.create;
  var neverType = ZodNever.create;
  var voidType = ZodVoid.create;
  var arrayType = ZodArray.create;
  var objectType = ZodObject.create;
  var strictObjectType = ZodObject.strictCreate;
  var unionType = ZodUnion.create;
  var discriminatedUnionType = ZodDiscriminatedUnion.create;
  var intersectionType = ZodIntersection.create;
  var tupleType = ZodTuple.create;
  var recordType = ZodRecord.create;
  var mapType = ZodMap.create;
  var setType = ZodSet.create;
  var functionType = ZodFunction.create;
  var lazyType = ZodLazy.create;
  var literalType = ZodLiteral.create;
  var enumType = ZodEnum.create;
  var nativeEnumType = ZodNativeEnum.create;
  var promiseType = ZodPromise.create;
  var effectsType = ZodEffects.create;
  var optionalType = ZodOptional.create;
  var nullableType = ZodNullable.create;
  var preprocessType = ZodEffects.createWithPreprocess;
  var pipelineType = ZodPipeline.create;
  var ostring = () => stringType().optional();
  var onumber = () => numberType().optional();
  var oboolean = () => booleanType().optional();
  var coerce = {
    string: (arg) => ZodString.create({ ...arg, coerce: true }),
    number: (arg) => ZodNumber.create({ ...arg, coerce: true }),
    boolean: (arg) => ZodBoolean.create({
      ...arg,
      coerce: true
    }),
    bigint: (arg) => ZodBigInt.create({ ...arg, coerce: true }),
    date: (arg) => ZodDate.create({ ...arg, coerce: true })
  };
  var NEVER = INVALID;
  var z = /* @__PURE__ */ Object.freeze({
    __proto__: null,
    defaultErrorMap: errorMap,
    setErrorMap,
    getErrorMap,
    makeIssue,
    EMPTY_PATH,
    addIssueToContext,
    ParseStatus,
    INVALID,
    DIRTY,
    OK,
    isAborted,
    isDirty,
    isValid,
    isAsync,
    get util() {
      return util;
    },
    get objectUtil() {
      return objectUtil;
    },
    ZodParsedType,
    getParsedType,
    ZodType,
    ZodString,
    ZodNumber,
    ZodBigInt,
    ZodBoolean,
    ZodDate,
    ZodSymbol,
    ZodUndefined,
    ZodNull,
    ZodAny,
    ZodUnknown,
    ZodNever,
    ZodVoid,
    ZodArray,
    ZodObject,
    ZodUnion,
    ZodDiscriminatedUnion,
    ZodIntersection,
    ZodTuple,
    ZodRecord,
    ZodMap,
    ZodSet,
    ZodFunction,
    ZodLazy,
    ZodLiteral,
    ZodEnum,
    ZodNativeEnum,
    ZodPromise,
    ZodEffects,
    ZodTransformer: ZodEffects,
    ZodOptional,
    ZodNullable,
    ZodDefault,
    ZodCatch,
    ZodNaN,
    BRAND,
    ZodBranded,
    ZodPipeline,
    custom,
    Schema: ZodType,
    ZodSchema: ZodType,
    late,
    get ZodFirstPartyTypeKind() {
      return ZodFirstPartyTypeKind;
    },
    coerce,
    any: anyType,
    array: arrayType,
    bigint: bigIntType,
    boolean: booleanType,
    date: dateType,
    discriminatedUnion: discriminatedUnionType,
    effect: effectsType,
    "enum": enumType,
    "function": functionType,
    "instanceof": instanceOfType,
    intersection: intersectionType,
    lazy: lazyType,
    literal: literalType,
    map: mapType,
    nan: nanType,
    nativeEnum: nativeEnumType,
    never: neverType,
    "null": nullType,
    nullable: nullableType,
    number: numberType,
    object: objectType,
    oboolean,
    onumber,
    optional: optionalType,
    ostring,
    pipeline: pipelineType,
    preprocess: preprocessType,
    promise: promiseType,
    record: recordType,
    set: setType,
    strictObject: strictObjectType,
    string: stringType,
    symbol: symbolType,
    transformer: effectsType,
    tuple: tupleType,
    "undefined": undefinedType,
    union: unionType,
    unknown: unknownType,
    "void": voidType,
    NEVER,
    ZodIssueCode,
    quotelessJson,
    ZodError
  });

  // ../../ProjectStarboy/src/shared/interfaces/bill.interface.ts
  var Zbill = z.object({
    type: z.union([z.literal("bill"), z.literal("fine")]),
    from: z.string(),
    by: z.string(),
    reason: z.string(),
    amount: z.number(),
    owner: z.string(),
    status: z.boolean()
  });
  var ZBillPayload = z.object({
    amount: z.number(),
    target: z.number(),
    faction: z.string(),
    reason: z.string()
  });

  // ../../ProjectStarboy/src/shared/interfaces/class.ts
  var AppController = class {
    constructor(controllerName) {
      this.controllerName = "AppController";
      this.classType = "controller";
      this.controllerName = controllerName;
    }
    log(...args) {
      console.log(`^6[${this.controllerName}]`, ...args);
    }
    logInfo(...args) {
      console.log(`[^5INFO^0]`, `[^6${this.controllerName}^0]`, ...args);
    }
    logSuccess(...args) {
      console.log(`[^2SUCCESS^0]`, `[^6${this.controllerName}^0]`, ...args);
    }
    logError(...args) {
      console.log(`[^1ERROR^0]`, `[^6${this.controllerName}^0]`, ...args);
    }
    logWarning(...args) {
      console.log(`[^3WARNING^0]`, `[^6${this.controllerName}^0]`, ...args);
    }
  };

  // ../../ProjectStarboy/src/shared/interfaces/inventory.interface.ts
  var NormalSlot = [
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "11",
    "12",
    "13",
    "14",
    "15",
    "16",
    "17",
    "18",
    "19",
    "20",
    "21",
    "22",
    "23",
    "24",
    "25",
    "26",
    "27",
    "28",
    "29",
    "30",
    "31",
    "32",
    "33",
    "34",
    "35",
    "36",
    "37",
    "38",
    "39",
    "40",
    "41",
    "42",
    "43",
    "44",
    "45",
    "46",
    "47",
    "48",
    "49"
  ];
  var ClotherSlot = ["HAT", "GLASS", "EAR", "WATCH", "BRACELET", "MASK", "TORSOR", "LEG", "BAG", "SHOES", "ACCESSORY", "UNDERSHIRT", "KEVLAR", "DECAL", "TOP"];
  var InventorySlot = [...NormalSlot, ...ClotherSlot];
  var ZInventoryType = z.union([z.literal("player"), z.literal("trunk"), z.literal("stash"), z.literal("faction"), z.literal("drop")]);

  // ../../ProjectStarboy/src/shared/interfaces/nui.interface.ts
  var RarityColor = {
    [0 /* COMMON */]: "",
    [1 /* UNCOMMON */]: "#ffffff",
    [2 /* RARE */]: "#00b4d8",
    [3 /* EPIC */]: "#f72585",
    [4 /* LEGENDARY */]: "#fb8500"
  };

  // ../../ProjectStarboy/src/shared/interfaces/phone.interface.ts
  var ZPhoneBankTransferPayload = z.object({
    id: z.number().min(1),
    amount: z.number().min(1)
  });

  // ../../ProjectStarboy/src/shared/interfaces/safe.interface.ts
  var ZSafeType = z.union([z.literal("player"), z.literal("faction")]);

  // ../../ProjectStarboy/src/shared/interfaces/wanted.interface.ts
  var ZWantedPayload = z.object({
    reason: z.string(),
    level: z.number().min(1).max(6),
    officer: z.string(),
    time: z.number().min(1).max(1e5)
  });

  // src/client/controllers/test.controller.ts
  var TestController = class extends AppController {
    constructor() {
      super("TestController");
    }
  };
  TestController = __decorateClass([
    (0, import_starboy_framework.Controller)()
  ], TestController);

  // src/client/client.ts
  var import_starboy_framework2 = __toESM(require_dist());
  var client = import_starboy_framework2.App.create({
    controllers: [TestController]
  });
  client.start();
})();
/*!
 * EventEmitter2
 * https://github.com/hij1nx/EventEmitter2
 *
 * Copyright (c) 2013 hij1nx
 * Licensed under the MIT license.
 */
/*! *****************************************************************************
Copyright (C) Microsoft. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
