'use strict';

/* @ts-self-types="./pitch_detection_wasm.d.ts" */
class AutocorrelationDetector {
  static __wrap(ptr) {
    ptr = ptr >>> 0;
    const obj = Object.create(AutocorrelationDetector.prototype);
    obj.__wbg_ptr = ptr;
    AutocorrelationDetectorFinalization.register(obj, obj.__wbg_ptr, obj);
    return obj;
  }
  __destroy_into_raw() {
    const ptr = this.__wbg_ptr;
    this.__wbg_ptr = 0;
    AutocorrelationDetectorFinalization.unregister(this);
    return ptr;
  }
  free() {
    const ptr = this.__destroy_into_raw();
    wasm.__wbg_autocorrelationdetector_free(ptr, 0);
  }
  /**
   * @param {Float32Array} signal
   * @param {number} sample_rate
   * @param {number} power_threshold
   * @param {number} clarity_threshold
   * @param {Float32Array} pitch
   */
  get_pitch(signal, sample_rate, power_threshold, clarity_threshold, pitch) {
    const ptr0 = passArrayF32ToWasm0(signal, wasm.__wbindgen_malloc);
    const len0 = WASM_VECTOR_LEN;
    var ptr1 = passArrayF32ToWasm0(pitch, wasm.__wbindgen_malloc);
    var len1 = WASM_VECTOR_LEN;
    wasm.autocorrelationdetector_get_pitch(this.__wbg_ptr, ptr0, len0, sample_rate, power_threshold, clarity_threshold, ptr1, len1, pitch);
  }
  /**
   * @param {number} size
   * @param {number} padding
   * @returns {AutocorrelationDetector}
   */
  static new(size, padding) {
    const ret = wasm.autocorrelationdetector_new(size, padding);
    return AutocorrelationDetector.__wrap(ret);
  }
}
if (Symbol.dispose) AutocorrelationDetector.prototype[Symbol.dispose] = AutocorrelationDetector.prototype.free;
class McLeodDetector {
  static __wrap(ptr) {
    ptr = ptr >>> 0;
    const obj = Object.create(McLeodDetector.prototype);
    obj.__wbg_ptr = ptr;
    McLeodDetectorFinalization.register(obj, obj.__wbg_ptr, obj);
    return obj;
  }
  __destroy_into_raw() {
    const ptr = this.__wbg_ptr;
    this.__wbg_ptr = 0;
    McLeodDetectorFinalization.unregister(this);
    return ptr;
  }
  free() {
    const ptr = this.__destroy_into_raw();
    wasm.__wbg_mcleoddetector_free(ptr, 0);
  }
  /**
   * @param {Float32Array} signal
   * @param {number} sample_rate
   * @param {number} power_threshold
   * @param {number} clarity_threshold
   * @param {Float32Array} pitch
   */
  get_pitch(signal, sample_rate, power_threshold, clarity_threshold, pitch) {
    const ptr0 = passArrayF32ToWasm0(signal, wasm.__wbindgen_malloc);
    const len0 = WASM_VECTOR_LEN;
    var ptr1 = passArrayF32ToWasm0(pitch, wasm.__wbindgen_malloc);
    var len1 = WASM_VECTOR_LEN;
    wasm.mcleoddetector_get_pitch(this.__wbg_ptr, ptr0, len0, sample_rate, power_threshold, clarity_threshold, ptr1, len1, pitch);
  }
  /**
   * @param {number} size
   * @param {number} padding
   * @returns {McLeodDetector}
   */
  static new(size, padding) {
    const ret = wasm.mcleoddetector_new(size, padding);
    return McLeodDetector.__wrap(ret);
  }
}
if (Symbol.dispose) McLeodDetector.prototype[Symbol.dispose] = McLeodDetector.prototype.free;
function __wbg_get_imports() {
  const import0 = {
    __proto__: null,
    __wbg___wbindgen_copy_to_typed_array_fc0809a4dec43528: function (arg0, arg1, arg2) {
      new Uint8Array(arg2.buffer, arg2.byteOffset, arg2.byteLength).set(getArrayU8FromWasm0(arg0, arg1));
    },
    __wbg___wbindgen_throw_be289d5034ed271b: function (arg0, arg1) {
      throw new Error(getStringFromWasm0(arg0, arg1));
    },
    __wbindgen_init_externref_table: function () {
      const table = wasm.__wbindgen_externrefs;
      const offset = table.grow(4);
      table.set(0, undefined);
      table.set(offset + 0, undefined);
      table.set(offset + 1, null);
      table.set(offset + 2, true);
      table.set(offset + 3, false);
    }
  };
  return {
    __proto__: null,
    "./pitch_detection_wasm_bg.js": import0
  };
}
const AutocorrelationDetectorFinalization = typeof FinalizationRegistry === 'undefined' ? {
  register: () => {},
  unregister: () => {}
} : new FinalizationRegistry(ptr => wasm.__wbg_autocorrelationdetector_free(ptr >>> 0, 1));
const McLeodDetectorFinalization = typeof FinalizationRegistry === 'undefined' ? {
  register: () => {},
  unregister: () => {}
} : new FinalizationRegistry(ptr => wasm.__wbg_mcleoddetector_free(ptr >>> 0, 1));
function getArrayU8FromWasm0(ptr, len) {
  ptr = ptr >>> 0;
  return getUint8ArrayMemory0().subarray(ptr / 1, ptr / 1 + len);
}
let cachedFloat32ArrayMemory0 = null;
function getFloat32ArrayMemory0() {
  if (cachedFloat32ArrayMemory0 === null || cachedFloat32ArrayMemory0.byteLength === 0) {
    cachedFloat32ArrayMemory0 = new Float32Array(wasm.memory.buffer);
  }
  return cachedFloat32ArrayMemory0;
}
function getStringFromWasm0(ptr, len) {
  ptr = ptr >>> 0;
  return decodeText(ptr, len);
}
let cachedUint8ArrayMemory0 = null;
function getUint8ArrayMemory0() {
  if (cachedUint8ArrayMemory0 === null || cachedUint8ArrayMemory0.byteLength === 0) {
    cachedUint8ArrayMemory0 = new Uint8Array(wasm.memory.buffer);
  }
  return cachedUint8ArrayMemory0;
}
function passArrayF32ToWasm0(arg, malloc) {
  const ptr = malloc(arg.length * 4, 4) >>> 0;
  getFloat32ArrayMemory0().set(arg, ptr / 4);
  WASM_VECTOR_LEN = arg.length;
  return ptr;
}
let cachedTextDecoder = new TextDecoder('utf-8', {
  ignoreBOM: true,
  fatal: true
});
cachedTextDecoder.decode();
const MAX_SAFARI_DECODE_BYTES = 2146435072;
let numBytesDecoded = 0;
function decodeText(ptr, len) {
  numBytesDecoded += len;
  if (numBytesDecoded >= MAX_SAFARI_DECODE_BYTES) {
    cachedTextDecoder = new TextDecoder('utf-8', {
      ignoreBOM: true,
      fatal: true
    });
    cachedTextDecoder.decode();
    numBytesDecoded = len;
  }
  return cachedTextDecoder.decode(getUint8ArrayMemory0().subarray(ptr, ptr + len));
}
let WASM_VECTOR_LEN = 0;
let wasm;
function __wbg_finalize_init(instance, module) {
  wasm = instance.exports;
  cachedFloat32ArrayMemory0 = null;
  cachedUint8ArrayMemory0 = null;
  wasm.__wbindgen_start();
  return wasm;
}
async function __wbg_load(module, imports) {
  if (typeof Response === 'function' && module instanceof Response) {
    if (typeof WebAssembly.instantiateStreaming === 'function') {
      try {
        return await WebAssembly.instantiateStreaming(module, imports);
      } catch (e) {
        const validResponse = module.ok && expectedResponseType(module.type);
        if (validResponse && module.headers.get('Content-Type') !== 'application/wasm') {
          console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve Wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n", e);
        } else {
          throw e;
        }
      }
    }
    const bytes = await module.arrayBuffer();
    return await WebAssembly.instantiate(bytes, imports);
  } else {
    const instance = await WebAssembly.instantiate(module, imports);
    if (instance instanceof WebAssembly.Instance) {
      return {
        instance,
        module
      };
    } else {
      return instance;
    }
  }
  function expectedResponseType(type) {
    switch (type) {
      case 'basic':
      case 'cors':
      case 'default':
        return true;
    }
    return false;
  }
}
async function __wbg_init(module_or_path) {
  if (wasm !== undefined) return wasm;
  if (module_or_path !== undefined) {
    if (Object.getPrototypeOf(module_or_path) === Object.prototype) {
      ({
        module_or_path
      } = module_or_path);
    } else {
      console.warn('using deprecated parameters for the initialization function; pass a single object instead');
    }
  }
  if (module_or_path === undefined) {
    module_or_path = new URL('pitch_detection_wasm_bg.wasm', typeof document === 'undefined' ? new (require('u' + 'rl').URL)('file:' + __filename).href : document.currentScript && document.currentScript.tagName.toUpperCase() === 'SCRIPT' && document.currentScript.src || new URL('worker.js', document.baseURI).href);
  }
  const imports = __wbg_get_imports();
  if (typeof module_or_path === 'string' || typeof Request === 'function' && module_or_path instanceof Request || typeof URL === 'function' && module_or_path instanceof URL) {
    module_or_path = fetch(module_or_path);
  }
  const {
    instance,
    module
  } = await __wbg_load(await module_or_path, imports);
  return __wbg_finalize_init(instance);
}
const MARKER = '@post-me';
function createUniqueIdFn() {
  let __id = 0;
  return function () {
    const id = __id;
    __id += 1;
    return id;
  };
}
class Emitter {
  constructor() {
    this._listeners = {};
  }
  addEventListener(eventName, listener) {
    let listeners = this._listeners[eventName];
    if (!listeners) {
      listeners = new Set();
      this._listeners[eventName] = listeners;
    }
    listeners.add(listener);
  }
  removeEventListener(eventName, listener) {
    let listeners = this._listeners[eventName];
    if (!listeners) {
      return;
    }
    listeners.delete(listener);
  }
  once(eventName) {
    return new Promise(resolve => {
      const listener = data => {
        this.removeEventListener(eventName, listener);
        resolve(data);
      };
      this.addEventListener(eventName, listener);
    });
  }
  emit(eventName, data) {
    let listeners = this._listeners[eventName];
    if (!listeners) {
      return;
    }
    listeners.forEach(listener => {
      listener(data);
    });
  }
  removeAllListeners() {
    Object.values(this._listeners).forEach(listeners => {
      if (listeners) {
        listeners.clear();
      }
    });
  }
}
var MessageType;
(function (MessageType) {
  MessageType["HandshakeRequest"] = "handshake-request";
  MessageType["HandshakeResponse"] = "handshake-response";
  MessageType["Call"] = "call";
  MessageType["Response"] = "response";
  MessageType["Error"] = "error";
  MessageType["Event"] = "event";
  MessageType["Callback"] = "callback";
})(MessageType || (MessageType = {}));
function createHandshakeResponseMessage(sessionId) {
  return {
    type: MARKER,
    action: MessageType.HandshakeResponse,
    sessionId
  };
}
function createCallMessage(sessionId, requestId, methodName, args) {
  return {
    type: MARKER,
    action: MessageType.Call,
    sessionId,
    requestId,
    methodName,
    args
  };
}
function createResponsMessage(sessionId, requestId, result, error) {
  const message = {
    type: MARKER,
    action: MessageType.Response,
    sessionId,
    requestId
  };
  if (result !== undefined) {
    message.result = result;
  }
  if (error !== undefined) {
    message.error = error;
  }
  return message;
}
function createCallbackMessage(sessionId, requestId, callbackId, args) {
  return {
    type: MARKER,
    action: MessageType.Callback,
    sessionId,
    requestId,
    callbackId,
    args
  };
}
function createEventMessage(sessionId, eventName, payload) {
  return {
    type: MARKER,
    action: MessageType.Event,
    sessionId,
    eventName,
    payload
  };
}
// Type Guards
function isMessage(m) {
  return m.type === MARKER;
}
function isHandshakeRequestMessage(m) {
  return isMessage(m) && m.action === MessageType.HandshakeRequest;
}
function isCallMessage(m) {
  return isMessage(m) && m.action === MessageType.Call;
}
function isResponseMessage(m) {
  return isMessage(m) && m.action === MessageType.Response;
}
function isCallbackMessage(m) {
  return isMessage(m) && m.action === MessageType.Callback;
}
function isEventMessage(m) {
  return isMessage(m) && m.action === MessageType.Event;
}
function makeCallbackEvent(requestId) {
  return "callback_".concat(requestId);
}
function makeResponseEvent(requestId) {
  return "response_".concat(requestId);
}
class Dispatcher extends Emitter {
  constructor(messenger, sessionId) {
    super();
    this.uniqueId = createUniqueIdFn();
    this.messenger = messenger;
    this.sessionId = sessionId;
    this.removeMessengerListener = this.messenger.addMessageListener(this.messengerListener.bind(this));
  }
  messengerListener(event) {
    const {
      data
    } = event;
    if (!isMessage(data)) {
      return;
    }
    if (this.sessionId !== data.sessionId) {
      return;
    }
    if (isCallMessage(data)) {
      this.emit(MessageType.Call, data);
    } else if (isResponseMessage(data)) {
      this.emit(makeResponseEvent(data.requestId), data);
    } else if (isEventMessage(data)) {
      this.emit(MessageType.Event, data);
    } else if (isCallbackMessage(data)) {
      this.emit(makeCallbackEvent(data.requestId), data);
    }
  }
  callOnRemote(methodName, args) {
    const requestId = this.uniqueId();
    const callbackEvent = makeCallbackEvent(requestId);
    const responseEvent = makeResponseEvent(requestId);
    const message = createCallMessage(this.sessionId, requestId, methodName, args);
    this.messenger.postMessage(message);
    return {
      callbackEvent,
      responseEvent
    };
  }
  respondToRemote(requestId, value, error) {
    const message = createResponsMessage(this.sessionId, requestId, value, error);
    this.messenger.postMessage(message);
  }
  callbackToRemote(requestId, callbackId, args) {
    const message = createCallbackMessage(this.sessionId, requestId, callbackId, args);
    this.messenger.postMessage(message);
  }
  emitToRemote(eventName, payload) {
    const message = createEventMessage(this.sessionId, eventName, payload);
    this.messenger.postMessage(message);
  }
  close() {
    this.removeMessengerListener();
    this.removeAllListeners();
  }
}
class ChildHandshakeDispatcher extends Emitter {
  constructor(messenger) {
    super();
    this.messenger = messenger;
    this.removeMessengerListener = this.messenger.addMessageListener(this.messengerListener.bind(this));
  }
  messengerListener(event) {
    const {
      data
    } = event;
    if (isHandshakeRequestMessage(data)) {
      this.emit(MessageType.HandshakeRequest, data);
    }
  }
  acceptHandshake(sessionId) {
    const message = createHandshakeResponseMessage(sessionId);
    this.messenger.postMessage(message);
  }
  close() {
    this.removeMessengerListener();
    this.removeAllListeners();
  }
}
var ProxyType;
(function (ProxyType) {
  ProxyType["Callback"] = "callback";
})(ProxyType || (ProxyType = {}));
function createCallbackProxy(callbackId) {
  return {
    type: MARKER,
    proxy: ProxyType.Callback,
    callbackId
  };
}
function isCallbackProxy(p) {
  return p.type === MARKER && p.proxy === ProxyType.Callback;
}
class ConcreteRemoteHandle extends Emitter {
  constructor(dispatcher) {
    super();
    this._dispatcher = dispatcher;
    this._dispatcher.addEventListener(MessageType.Event, this._handleEvent.bind(this));
  }
  close() {
    this.removeAllListeners();
  }
  call(methodName) {
    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }
    return new Promise((resolve, reject) => {
      const sanitizedArgs = [];
      const callbacks = [];
      let callbackId = 0;
      args.forEach(arg => {
        if (typeof arg === 'function') {
          callbacks.push(arg);
          sanitizedArgs.push(createCallbackProxy(callbackId));
          callbackId += 1;
        } else {
          sanitizedArgs.push(arg);
        }
      });
      const hasCallbacks = callbacks.length > 0;
      let callbackListener = undefined;
      if (hasCallbacks) {
        callbackListener = data => {
          const {
            callbackId,
            args
          } = data;
          callbacks[callbackId](...args);
        };
      }
      const {
        callbackEvent,
        responseEvent
      } = this._dispatcher.callOnRemote(methodName, sanitizedArgs);
      if (hasCallbacks) {
        this._dispatcher.addEventListener(callbackEvent, callbackListener);
      }
      this._dispatcher.once(responseEvent).then(response => {
        if (callbackListener) {
          this._dispatcher.removeEventListener(callbackEvent, callbackListener);
        }
        const {
          result,
          error
        } = response;
        if (error !== undefined) {
          reject(error);
        } else {
          resolve(result);
        }
      });
    });
  }
  _handleEvent(data) {
    const {
      eventName,
      payload
    } = data;
    this.emit(eventName, payload);
  }
}
class ConcreteLocalHandle {
  constructor(dispatcher, localMethods) {
    this._dispatcher = dispatcher;
    this._methods = localMethods;
    this._dispatcher.addEventListener(MessageType.Call, this._handleCall.bind(this));
  }
  emit(eventName, payload) {
    this._dispatcher.emitToRemote(eventName, payload);
  }
  _handleCall(data) {
    var _this = this;
    const {
      requestId,
      methodName,
      args
    } = data;
    const callMethod = new Promise((resolve, reject) => {
      const method = this._methods[methodName];
      if (typeof method !== 'function') {
        reject(new Error("The method \"".concat(methodName, "\" has not been implemented.")));
        return;
      }
      const desanitizedArgs = args.map(arg => {
        if (isCallbackProxy(arg)) {
          const {
            callbackId
          } = arg;
          return function () {
            for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
              args[_key2] = arguments[_key2];
            }
            _this._dispatcher.callbackToRemote(requestId, callbackId, args);
          };
        } else {
          return arg;
        }
      });
      Promise.resolve(method(...desanitizedArgs)).then(resolve).catch(reject);
    });
    callMethod.then(value => {
      this._dispatcher.respondToRemote(requestId, value);
    }).catch(error => {
      this._dispatcher.respondToRemote(requestId, undefined, error);
    });
  }
}
class ConcreteConnection {
  constructor(dispatcher, localMethods) {
    this._dispatcher = dispatcher;
    this._localHandle = new ConcreteLocalHandle(dispatcher, localMethods);
    this._remoteHandle = new ConcreteRemoteHandle(dispatcher);
  }
  close() {
    this._dispatcher.close();
    this.remoteHandle().close();
  }
  localHandle() {
    return this._localHandle;
  }
  remoteHandle() {
    return this._remoteHandle;
  }
}
function ChildHandshake(messenger) {
  let localMethods = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  return new Promise((resolve, reject) => {
    const handshakeDispatcher = new ChildHandshakeDispatcher(messenger);
    handshakeDispatcher.once(MessageType.HandshakeRequest).then(response => {
      const {
        sessionId
      } = response;
      handshakeDispatcher.acceptHandshake(sessionId);
      handshakeDispatcher.close();
      const dispatcher = new Dispatcher(messenger, sessionId);
      const connection = new ConcreteConnection(dispatcher, localMethods);
      resolve(connection);
    });
  });
}
class WorkerMessenger {
  constructor(_ref) {
    let {
      worker
    } = _ref;
    this.postMessage = message => {
      worker.postMessage(message);
    };
    this.addMessageListener = listener => {
      const outerListener = event => {
        listener(event);
      };
      worker.addEventListener('message', outerListener);
      const removeListener = () => {
        worker.removeEventListener('message', outerListener);
      };
      return removeListener;
    };
  }
}

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var runtime = function (exports) {
  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var defineProperty = Object.defineProperty || function (obj, key, desc) {
    obj[key] = desc.value;
  };
  var undefined$1; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";
  function define(obj, key, value) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
    return obj[key];
  }
  try {
    // IE 8 has a broken Object.defineProperty that only works on DOM objects.
    define({}, "");
  } catch (err) {
    define = function (obj, key, value) {
      return obj[key] = value;
    };
  }
  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    defineProperty(generator, "_invoke", {
      value: makeInvokeMethod(innerFn, self, context)
    });
    return generator;
  }
  exports.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return {
        type: "normal",
        arg: fn.call(obj, arg)
      };
    } catch (err) {
      return {
        type: "throw",
        arg: err
      };
    }
  }
  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  define(IteratorPrototype, iteratorSymbol, function () {
    return this;
  });
  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }
  var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = GeneratorFunctionPrototype;
  defineProperty(Gp, "constructor", {
    value: GeneratorFunctionPrototype,
    configurable: true
  });
  defineProperty(GeneratorFunctionPrototype, "constructor", {
    value: GeneratorFunction,
    configurable: true
  });
  GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction");

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function (method) {
      define(prototype, method, function (arg) {
        return this._invoke(method, arg);
      });
    });
  }
  exports.isGeneratorFunction = function (genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor ? ctor === GeneratorFunction ||
    // For the native GeneratorFunction constructor, the best we can
    // do is to check its .name property.
    (ctor.displayName || ctor.name) === "GeneratorFunction" : false;
  };
  exports.mark = function (genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      define(genFun, toStringTagSymbol, "GeneratorFunction");
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  exports.awrap = function (arg) {
    return {
      __await: arg
    };
  };
  function AsyncIterator(generator, PromiseImpl) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value && typeof value === "object" && hasOwn.call(value, "__await")) {
          return PromiseImpl.resolve(value.__await).then(function (value) {
            invoke("next", value, resolve, reject);
          }, function (err) {
            invoke("throw", err, resolve, reject);
          });
        }
        return PromiseImpl.resolve(value).then(function (unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function (error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }
    var previousPromise;
    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new PromiseImpl(function (resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }
      return previousPromise =
      // If enqueue has been called before, then we want to wait until
      // all previous Promises have been resolved before calling invoke,
      // so that results are always delivered in the correct order. If
      // enqueue has not been called before, then it is important to
      // call invoke immediately, without waiting on a callback to fire,
      // so that the async generator function has the opportunity to do
      // any necessary setup in a predictable way. This predictability
      // is why the Promise constructor synchronously invokes its
      // executor callback, and why async functions synchronously
      // execute code before the first await. Since we implement simple
      // async functions in terms of async generators, it is especially
      // important to get this right, even though it requires care.
      previousPromise ? previousPromise.then(callInvokeWithMethodAndArg,
      // Avoid propagating failures to Promises returned by later
      // invocations of the iterator.
      callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    defineProperty(this, "_invoke", {
      value: enqueue
    });
  }
  defineIteratorMethods(AsyncIterator.prototype);
  define(AsyncIterator.prototype, asyncIteratorSymbol, function () {
    return this;
  });
  exports.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) {
    if (PromiseImpl === void 0) PromiseImpl = Promise;
    var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl);
    return exports.isGeneratorFunction(outerFn) ? iter // If outerFn is a generator, return the full iterator.
    : iter.next().then(function (result) {
      return result.done ? result.value : iter.next();
    });
  };
  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;
    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }
      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }
      context.method = method;
      context.arg = arg;
      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }
        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;
        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }
          context.dispatchException(context.arg);
        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }
        state = GenStateExecuting;
        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done ? GenStateCompleted : GenStateSuspendedYield;
          if (record.arg === ContinueSentinel) {
            continue;
          }
          return {
            value: record.arg,
            done: context.done
          };
        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var methodName = context.method;
    var method = delegate.iterator[methodName];
    if (method === undefined$1) {
      // A .throw or .return when the delegate iterator has no .throw
      // method, or a missing .next mehtod, always terminate the
      // yield* loop.
      context.delegate = null;

      // Note: ["return"] must be used for ES3 parsing compatibility.
      if (methodName === "throw" && delegate.iterator["return"]) {
        // If the delegate iterator has a return method, give it a
        // chance to clean up.
        context.method = "return";
        context.arg = undefined$1;
        maybeInvokeDelegate(delegate, context);
        if (context.method === "throw") {
          // If maybeInvokeDelegate(context) changed context.method from
          // "return" to "throw", let that override the TypeError below.
          return ContinueSentinel;
        }
      }
      if (methodName !== "return") {
        context.method = "throw";
        context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method");
      }
      return ContinueSentinel;
    }
    var record = tryCatch(method, delegate.iterator, context.arg);
    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }
    var info = record.arg;
    if (!info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }
    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined$1;
      }
    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);
  define(Gp, toStringTagSymbol, "Generator");

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  define(Gp, iteratorSymbol, function () {
    return this;
  });
  define(Gp, "toString", function () {
    return "[object Generator]";
  });
  function pushTryEntry(locs) {
    var entry = {
      tryLoc: locs[0]
    };
    if (1 in locs) {
      entry.catchLoc = locs[1];
    }
    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }
    this.tryEntries.push(entry);
  }
  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }
  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{
      tryLoc: "root"
    }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }
  exports.keys = function (val) {
    var object = Object(val);
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };
  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }
      if (typeof iterable.next === "function") {
        return iterable;
      }
      if (!isNaN(iterable.length)) {
        var i = -1,
          next = function next() {
            while (++i < iterable.length) {
              if (hasOwn.call(iterable, i)) {
                next.value = iterable[i];
                next.done = false;
                return next;
              }
            }
            next.value = undefined$1;
            next.done = true;
            return next;
          };
        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return {
      next: doneResult
    };
  }
  exports.values = values;
  function doneResult() {
    return {
      value: undefined$1,
      done: true
    };
  }
  Context.prototype = {
    constructor: Context,
    reset: function (skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined$1;
      this.done = false;
      this.delegate = null;
      this.method = "next";
      this.arg = undefined$1;
      this.tryEntries.forEach(resetTryEntry);
      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" && hasOwn.call(this, name) && !isNaN(+name.slice(1))) {
            this[name] = undefined$1;
          }
        }
      }
    },
    stop: function () {
      this.done = true;
      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }
      return this.rval;
    },
    dispatchException: function (exception) {
      if (this.done) {
        throw exception;
      }
      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;
        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined$1;
        }
        return !!caught;
      }
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;
        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }
        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");
          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }
          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }
          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }
          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },
    abrupt: function (type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }
      if (finallyEntry && (type === "break" || type === "continue") && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }
      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;
      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }
      return this.complete(record);
    },
    complete: function (record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }
      if (record.type === "break" || record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }
      return ContinueSentinel;
    },
    finish: function (finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },
    "catch": function (tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },
    delegateYield: function (iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };
      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined$1;
      }
      return ContinueSentinel;
    }
  };

  // Regardless of whether this script is executing as a CommonJS module
  // or not, return the runtime object so that we can declare the variable
  // regeneratorRuntime in the outer scope, which allows this module to be
  // injected easily by `bin/regenerator --include-runtime script.js`.
  return exports;
}(
// If this script is executing as a CommonJS module, use module.exports
// as the regeneratorRuntime namespace. Otherwise create a new empty
// object. Either way, the resulting object will be used to initialize
// the regeneratorRuntime variable at the top of this file.
typeof module === "object" ? module.exports : {});
try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  // This module should not be running in strict mode, so the above
  // assignment should always work unless something is misconfigured. Just
  // in case runtime.js accidentally runs in strict mode, in modern engines
  // we can explicitly access globalThis. In older engines we can escape
  // strict mode using a global Function call. This could conceivably fail
  // if a Content Security Policy forbids using Function, but in that case
  // the proper solution is to fix the accidental strict mode problem. If
  // you've misconfigured your bundler to force strict mode and applied a
  // CSP to forbid Function, and you're not willing to fix either of those
  // problems, please detail your unique predicament in a GitHub issue.
  if (typeof globalThis === "object") {
    globalThis.regeneratorRuntime = runtime;
  } else {
    Function("r", "regeneratorRuntime = r")(runtime);
  }
}
__wbg_init('./pitch_detection_wasm_bg.wasm').then(function () {
  var messenger = new WorkerMessenger({
    worker: self
  });
  var detector = undefined;
  var methods = {
    createDetector: function (name, size, padding) {
      if (detector) {
        detector.free();
        detector = undefined;
      }
      switch (name) {
        case 'autocorrelation':
          {
            detector = AutocorrelationDetector.new(size, padding);
            break;
          }
        case 'mcleod':
          {
            detector = McLeodDetector.new(size, padding);
            break;
          }
        default:
          {
            throw new Error("Detector type not recognized: " + name);
          }
      }
    },
    getPitch: function (signal, sampleRate, powerThreshold, clarityThreshold) {
      if (!detector) {
        throw new Error("Detector not initialized");
      }
      var result = new Float32Array(2);
      detector.get_pitch(signal, sampleRate, powerThreshold, clarityThreshold, result);
      return result;
    }
  };
  ChildHandshake(messenger, methods);
});
