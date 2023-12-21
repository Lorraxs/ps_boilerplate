var __create = Object.create;
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
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
var __decorateParam = (index, decorator) => (target, key) => decorator(target, key, index);
var __accessCheck = (obj, member, msg) => {
  if (!member.has(obj))
    throw TypeError("Cannot " + msg);
};
var __privateGet = (obj, member, getter) => {
  __accessCheck(obj, member, "read from private field");
  return getter ? getter.call(obj) : member.get(obj);
};
var __privateAdd = (obj, member, value) => {
  if (member.has(obj))
    throw TypeError("Cannot add the same private member more than once");
  member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
};
var __privateSet = (obj, member, value, setter) => {
  __accessCheck(obj, member, "write to private field");
  setter ? setter.call(obj, value) : member.set(obj, value);
  return value;
};

// src/server/server.ts
var import_server2 = require("@citizenfx/server");
var import_starboy_framework39 = require("starboy-framework");

// src/server/controllers/test.controller.ts
var import_starboy_framework38 = require("starboy-framework");

// ../../ProjectStarboy/src/shared/interfaces/bill.interface.ts
var import_zod = __toESM(require("zod"));
var Zbill = import_zod.default.object({
  type: import_zod.default.union([import_zod.default.literal("bill"), import_zod.default.literal("fine")]),
  from: import_zod.default.string(),
  by: import_zod.default.string(),
  reason: import_zod.default.string(),
  amount: import_zod.default.number(),
  owner: import_zod.default.string(),
  status: import_zod.default.boolean()
});
var ZBillPayload = import_zod.default.object({
  amount: import_zod.default.number(),
  target: import_zod.default.number(),
  faction: import_zod.default.string(),
  reason: import_zod.default.string()
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
var AppClass = class {
  constructor(className) {
    this.className = "AppClass";
    this.classType = "class";
    this.className = className;
  }
  log(...args) {
    console.log(`^6[${this.className}]`, ...args);
  }
  logInfo(...args) {
    console.log(`[^5INFO^0]`, `[^6${this.className}^0]`, ...args);
  }
  logSuccess(...args) {
    console.log(`[^2SUCCESS^0]`, `[^6${this.className}^0]`, ...args);
  }
  logError(...args) {
    console.log(`[^1ERROR^0]`, `[^6${this.className}^0]`, ...args);
  }
  logWarning(...args) {
    console.log(`[^3WARNING^0]`, `[^6${this.className}^0]`, ...args);
  }
};

// ../../ProjectStarboy/src/shared/interfaces/gta.interface.ts
var eAmmoType = /* @__PURE__ */ ((eAmmoType2) => {
  eAmmoType2[eAmmoType2["AMMO_PISTOL"] = 1950175060] = "AMMO_PISTOL";
  eAmmoType2[eAmmoType2["AMMO_SMG"] = 1820140472] = "AMMO_SMG";
  eAmmoType2[eAmmoType2["AMMO_RIFLE"] = 218444191] = "AMMO_RIFLE";
  eAmmoType2[eAmmoType2["AMMO_MG"] = 1788949567] = "AMMO_MG";
  eAmmoType2[eAmmoType2["AMMO_SHOTGUN"] = 2416459067] = "AMMO_SHOTGUN";
  eAmmoType2[eAmmoType2["AMMO_STUNGUN"] = 2955849184] = "AMMO_STUNGUN";
  eAmmoType2[eAmmoType2["AMMO_SNIPER"] = 1285032059] = "AMMO_SNIPER";
  eAmmoType2[eAmmoType2["AMMO_SNIPER_REMOTE"] = 4275731760] = "AMMO_SNIPER_REMOTE";
  eAmmoType2[eAmmoType2["AMMO_GRENADELAUNCHER"] = 1003267566] = "AMMO_GRENADELAUNCHER";
  eAmmoType2[eAmmoType2["AMMO_GRENADELAUNCHER_SMOKE"] = 826266432] = "AMMO_GRENADELAUNCHER_SMOKE";
  eAmmoType2[eAmmoType2["AMMO_RPG"] = 1742569970] = "AMMO_RPG";
  eAmmoType2[eAmmoType2["AMMO_STINGER"] = 2437710138] = "AMMO_STINGER";
  eAmmoType2[eAmmoType2["AMMO_MINIGUN"] = 2680539266] = "AMMO_MINIGUN";
  eAmmoType2[eAmmoType2["AMMO_GRENADE"] = 1003688881] = "AMMO_GRENADE";
  eAmmoType2[eAmmoType2["AMMO_STICKYBOMB"] = 1411692055] = "AMMO_STICKYBOMB";
  eAmmoType2[eAmmoType2["AMMO_SMOKEGRENADE"] = 3859679398] = "AMMO_SMOKEGRENADE";
  eAmmoType2[eAmmoType2["AMMO_BZGAS"] = 2608103076] = "AMMO_BZGAS";
  eAmmoType2[eAmmoType2["AMMO_MOLOTOV"] = 1446246869] = "AMMO_MOLOTOV";
  eAmmoType2[eAmmoType2["AMMO_FIREEXTINGUISHER"] = 1359393852] = "AMMO_FIREEXTINGUISHER";
  eAmmoType2[eAmmoType2["AMMO_PETROLCAN"] = 3395492001] = "AMMO_PETROLCAN";
  eAmmoType2[eAmmoType2["AMMO_BALL"] = 4287981158] = "AMMO_BALL";
  eAmmoType2[eAmmoType2["AMMO_FLARE"] = 1808594799] = "AMMO_FLARE";
  eAmmoType2[eAmmoType2["AMMO_TANK"] = 2820358688] = "AMMO_TANK";
  eAmmoType2[eAmmoType2["AMMO_SPACE_ROCKET"] = 527765612] = "AMMO_SPACE_ROCKET";
  eAmmoType2[eAmmoType2["AMMO_PLANE_ROCKET"] = 1198741878] = "AMMO_PLANE_ROCKET";
  eAmmoType2[eAmmoType2["AMMO_PLAYER_LASER"] = 4129609738] = "AMMO_PLAYER_LASER";
  eAmmoType2[eAmmoType2["AMMO_ENEMY_LASER"] = 2922292364] = "AMMO_ENEMY_LASER";
  eAmmoType2[eAmmoType2["AMMO_BIRD_CRAP"] = 1117307028] = "AMMO_BIRD_CRAP";
  eAmmoType2[eAmmoType2["AMMO_PIPEBOMB"] = 357983224] = "AMMO_PIPEBOMB";
  eAmmoType2[eAmmoType2["AMMO_HOMINGLAUNCHER"] = 2568293933] = "AMMO_HOMINGLAUNCHER";
  eAmmoType2[eAmmoType2["AMMO_PROXMINE"] = 2938243239] = "AMMO_PROXMINE";
  eAmmoType2[eAmmoType2["AMMO_SNOWBALL"] = 2182627693] = "AMMO_SNOWBALL";
  eAmmoType2[eAmmoType2["AMMO_RIFLE_ARMORPIERCING"] = 423744068] = "AMMO_RIFLE_ARMORPIERCING";
  eAmmoType2[eAmmoType2["AMMO_RIFLE_FMJ"] = 1586900444] = "AMMO_RIFLE_FMJ";
  eAmmoType2[eAmmoType2["AMMO_RIFLE_INCENDIARY"] = 2465278413] = "AMMO_RIFLE_INCENDIARY";
  eAmmoType2[eAmmoType2["AMMO_RIFLE_TRACER"] = 2954464607] = "AMMO_RIFLE_TRACER";
  eAmmoType2[eAmmoType2["AMMO_SNIPER_ARMORPIERCING"] = 2797387177] = "AMMO_SNIPER_ARMORPIERCING";
  eAmmoType2[eAmmoType2["AMMO_SNIPER_FMJ"] = 4126262806] = "AMMO_SNIPER_FMJ";
  eAmmoType2[eAmmoType2["AMMO_SNIPER_INCENDIARY"] = 796697766] = "AMMO_SNIPER_INCENDIARY";
  eAmmoType2[eAmmoType2["AMMO_SNIPER_TRACER"] = 1184011213] = "AMMO_SNIPER_TRACER";
  eAmmoType2[eAmmoType2["AMMO_SHOTGUN_ARMORPIERCING"] = 1923327840] = "AMMO_SHOTGUN_ARMORPIERCING";
  eAmmoType2[eAmmoType2["AMMO_SHOTGUN_EXPLOSIVE"] = 3985664341] = "AMMO_SHOTGUN_EXPLOSIVE";
  eAmmoType2[eAmmoType2["AMMO_SHOTGUN_HOLLOWPOINT"] = 2089185906] = "AMMO_SHOTGUN_HOLLOWPOINT";
  eAmmoType2[eAmmoType2["AMMO_SHOTGUN_INCENDIARY"] = 3685537684] = "AMMO_SHOTGUN_INCENDIARY";
  eAmmoType2[eAmmoType2["AMMO_PISTOL_FMJ"] = 3162174467] = "AMMO_PISTOL_FMJ";
  eAmmoType2[eAmmoType2["AMMO_PISTOL_HOLLOWPOINT"] = 3458447638] = "AMMO_PISTOL_HOLLOWPOINT";
  eAmmoType2[eAmmoType2["AMMO_PISTOL_INCENDIARY"] = 2878251257] = "AMMO_PISTOL_INCENDIARY";
  eAmmoType2[eAmmoType2["AMMO_PISTOL_TRACER"] = 3101486635] = "AMMO_PISTOL_TRACER";
  eAmmoType2[eAmmoType2["AMMO_MG_ARMORPIERCING"] = 784861712] = "AMMO_MG_ARMORPIERCING";
  eAmmoType2[eAmmoType2["AMMO_MG_FMJ"] = 234717365] = "AMMO_MG_FMJ";
  eAmmoType2[eAmmoType2["AMMO_MG_INCENDIARY"] = 1461941360] = "AMMO_MG_INCENDIARY";
  eAmmoType2[eAmmoType2["AMMO_MG_TRACER"] = 1226421483] = "AMMO_MG_TRACER";
  eAmmoType2[eAmmoType2["AMMO_SNIPER_EXPLOSIVE"] = 2916183225] = "AMMO_SNIPER_EXPLOSIVE";
  eAmmoType2[eAmmoType2["AMMO_SMG_FMJ"] = 758230489] = "AMMO_SMG_FMJ";
  eAmmoType2[eAmmoType2["AMMO_SMG_HOLLOWPOINT"] = 670318226] = "AMMO_SMG_HOLLOWPOINT";
  eAmmoType2[eAmmoType2["AMMO_SMG_INCENDIARY"] = 3962074599] = "AMMO_SMG_INCENDIARY";
  eAmmoType2[eAmmoType2["AMMO_SMG_TRACER"] = 1569785553] = "AMMO_SMG_TRACER";
  eAmmoType2[eAmmoType2["AMMO_FLAREGUN"] = 1173416293] = "AMMO_FLAREGUN";
  eAmmoType2[eAmmoType2["AMMO_FIREWORK"] = 2938367503] = "AMMO_FIREWORK";
  eAmmoType2[eAmmoType2["AMMO_RAILGUN"] = 2034517757] = "AMMO_RAILGUN";
  return eAmmoType2;
})(eAmmoType || {});

// ../../ProjectStarboy/src/shared/interfaces/inventory.interface.ts
var import_zod2 = __toESM(require("zod"));
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
var DefaultTransferInventory = {
  T0: null,
  T1: null,
  T2: null,
  T3: null,
  T4: null,
  T5: null,
  T6: null,
  T7: null
};
var ZInventoryType = import_zod2.default.union([import_zod2.default.literal("player"), import_zod2.default.literal("trunk"), import_zod2.default.literal("stash"), import_zod2.default.literal("faction"), import_zod2.default.literal("drop")]);

// ../../ProjectStarboy/src/shared/interfaces/nui.interface.ts
var RarityColor = {
  [0 /* COMMON */]: "",
  [1 /* UNCOMMON */]: "#ffffff",
  [2 /* RARE */]: "#00b4d8",
  [3 /* EPIC */]: "#f72585",
  [4 /* LEGENDARY */]: "#fb8500"
};

// ../../ProjectStarboy/src/shared/interfaces/phone.interface.ts
var import_zod3 = __toESM(require("zod"));
var ZPhoneBankTransferPayload = import_zod3.default.object({
  id: import_zod3.default.number().min(1),
  amount: import_zod3.default.number().min(1)
});

// ../../ProjectStarboy/src/shared/interfaces/safe.interface.ts
var import_zod4 = __toESM(require("zod"));
var ZSafeType = import_zod4.default.union([import_zod4.default.literal("player"), import_zod4.default.literal("faction")]);

// ../../ProjectStarboy/src/shared/interfaces/wanted.interface.ts
var import_zod5 = require("zod");
var ZWantedPayload = import_zod5.z.object({
  reason: import_zod5.z.string(),
  level: import_zod5.z.number().min(1).max(6),
  officer: import_zod5.z.string(),
  time: import_zod5.z.number().min(1).max(1e5)
});

// ../../ProjectStarboy/src/server/controllers/export.controller.ts
var import_starboy_framework37 = require("starboy-framework");

// ../../ProjectStarboy/src/server/services/players.service.ts
var import_starboy_framework9 = require("starboy-framework");

// ../../ProjectStarboy/src/server/class/Player.class.ts
var import_container7 = __toESM(require("starboy-framework/dist/packages/core/container"));
var import_jsondiffpatch2 = require("jsondiffpatch");

// ../../ProjectStarboy/src/server/models/player.model.ts
var import_mongoose = __toESM(require("mongoose"));

// ../../ProjectStarboy/src/server/config/player.config.ts
var PlayerConfig = {
  defaultMoney: 2e4,
  defaultBank: 3e4,
  defaultCoin: 0,
  defaultCoords: [0, 0, 0],
  defaultMaxInventoryWeight: 4e4
};

// ../../ProjectStarboy/src/server/models/player.model.ts
var AutoIncrement = require("mongoose-sequence")(import_mongoose.default);
var pedHeadBlendSchema = new import_mongoose.Schema({
  shapeFirst: { type: Number, required: true },
  shapeSecond: { type: Number, required: true },
  shapeThird: { type: Number, required: true },
  skinFirst: { type: Number, required: true },
  skinSecond: { type: Number, required: true },
  skinThird: { type: Number, required: true },
  shapeMix: { type: Number, required: true },
  skinMix: { type: Number, required: true },
  thirdMix: { type: Number, required: true }
});
var pedHeadOverlayValueSchema = new import_mongoose.Schema({
  style: { type: Number, required: true },
  opacity: { type: Number, required: true },
  color: { type: Number, required: true, default: 0 },
  secondColor: { type: Number, required: true, default: 0 }
});
var pedFaceFeaturesSchema = new import_mongoose.Schema({
  noseWidth: { type: Number, required: true },
  nosePeakHigh: { type: Number, required: true },
  nosePeakSize: { type: Number, required: true },
  noseBoneHigh: { type: Number, required: true },
  nosePeakLowering: { type: Number, required: true },
  noseBoneTwist: { type: Number, required: true },
  eyeBrownHigh: { type: Number, required: true },
  eyeBrownForward: { type: Number, required: true },
  cheeksBoneHigh: { type: Number, required: true },
  cheeksBoneWidth: { type: Number, required: true },
  cheeksWidth: { type: Number, required: true },
  eyesOpening: { type: Number, required: true },
  lipsThickness: { type: Number, required: true },
  jawBoneWidth: { type: Number, required: true },
  jawBoneBackSize: { type: Number, required: true },
  chinBoneLowering: { type: Number, required: true },
  chinBoneLenght: { type: Number, required: true },
  chinBoneSize: { type: Number, required: true },
  chinHole: { type: Number, required: true },
  neckThickness: { type: Number, required: true }
});
var pedHeadOverlaysSchema = new import_mongoose.Schema({
  blemishes: { type: pedHeadOverlayValueSchema, required: true },
  beard: { type: pedHeadOverlayValueSchema, required: true },
  eyebrows: { type: pedHeadOverlayValueSchema, required: true },
  ageing: { type: pedHeadOverlayValueSchema, required: true },
  makeUp: { type: pedHeadOverlayValueSchema, required: true },
  blush: { type: pedHeadOverlayValueSchema, required: true },
  complexion: { type: pedHeadOverlayValueSchema, required: true },
  sunDamage: { type: pedHeadOverlayValueSchema, required: true },
  lipstick: { type: pedHeadOverlayValueSchema, required: true },
  moleAndFreckles: { type: pedHeadOverlayValueSchema, required: true },
  chestHair: { type: pedHeadOverlayValueSchema, required: true },
  bodyBlemishes: { type: pedHeadOverlayValueSchema, required: true },
  addBodyBlemishes: { type: pedHeadOverlayValueSchema, required: true }
});
var pedHairSchema = new import_mongoose.Schema({
  style: { type: Number, required: true },
  color: { type: Number, required: true },
  highlight: { type: Number, required: true }
});
var tattooSchema = new import_mongoose.Schema({
  name: { type: String, required: true },
  label: { type: String, required: true },
  hashMale: { type: String, required: true },
  hashFemale: { type: String, required: true },
  zone: { type: String, required: true },
  collection: { type: String, required: true }
});
var playerSchema = new import_mongoose.Schema(
  {
    id: { type: Number, default: 0 },
    name: { type: String, required: true, unique: true },
    identifiers: { type: [String], required: true, default: [] },
    tokens: { type: [String], required: true, default: [] },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    gender: {
      type: String,
      required: true,
      default: "male",
      enum: ["male", "female"]
    },
    salt: { type: String, required: true },
    organization: {
      type: String,
      enum: ["police", "ambulance", "mechanic", "unemployed"],
      default: "unemployed"
    },
    department: { type: String, default: "unemployed" },
    family: { type: String, default: "unemployed" },
    faction: { type: String },
    health: { type: Number, required: true, default: 100 },
    armour: { type: Number, required: true, default: 100 },
    verifyCode: { type: String, required: true },
    verified: { type: Boolean, default: false },
    money: { type: Number, required: true, default: PlayerConfig.defaultMoney },
    bank: { type: Number, required: true, default: PlayerConfig.defaultBank },
    coin: { type: Number, required: true, default: PlayerConfig.defaultCoin },
    blackMoney: {
      type: Number,
      required: true,
      default: 0
    },
    wanted: { type: Number, required: true, default: 0 },
    hunger: { type: Number, required: true, default: 1e3 },
    thirst: { type: Number, required: true, default: 1e3 },
    exp: { type: Number, required: true, default: 0 },
    appearance: {
      type: {
        components: {
          type: [
            {
              componentId: { type: Number, required: true },
              drawableId: { type: Number, required: true },
              textureId: { type: Number, required: true }
            }
          ],
          default: []
        },
        props: {
          type: [
            {
              componentId: { type: Number, required: true },
              drawableId: { type: Number, required: true },
              textureId: { type: Number, required: true }
            }
          ],
          default: []
        },
        headBlend: { type: pedHeadBlendSchema, required: true },
        faceFeatures: { type: pedFaceFeaturesSchema, required: true },
        headOverlays: { type: pedHeadOverlaysSchema, required: true },
        hair: { type: pedHairSchema, required: true },
        eyeColor: { type: Number, required: true },
        tattoos: {
          type: [
            {
              name: { type: String, required: true },
              collection: { type: String, required: true }
            }
          ],
          default: []
        }
      }
    },
    coords: {
      type: [Number, Number, Number],
      required: true,
      default: PlayerConfig.defaultCoords
    },
    fastSlot: {
      type: { FS_0: { type: String }, FS_1: { type: String }, FS_2: { type: String }, FS_3: { type: String }, FS_4: { type: String } },
      default: {}
    },
    isCuffing: { type: Boolean, default: false },
    isDead: { type: Boolean, default: false },
    avatar: {
      type: String,
      default: "https://media.discordapp.net/attachments/1090971899787489290/1090991594095771669/1.png"
    },
    lastLogin: {
      type: String,
      required: true,
      default: "2023-05-03T17:45:39.275Z"
    },
    group: {
      type: String,
      enum: ["user", "admin", "tester", "moderator"],
      default: "user",
      required: true
    },
    newbieReward: { type: Boolean, default: false },
    job: { type: String, default: "unemployed" },
    onlineTime: { type: Number, default: 0 }
  },
  {
    timestamps: true
  }
);
playerSchema.plugin(AutoIncrement, { inc_field: "id" });
var playerModel = (0, import_mongoose.model)("Player", playerSchema);
var player_model_default = playerModel;

// ../../ProjectStarboy/src/server/services/i18n.service.ts
var import_starboy_framework = require("starboy-framework");
var import_i18next = __toESM(require("i18next"));

// ../../ProjectStarboy/src/server/interfaces/index.ts
var AppController2 = class {
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
var AppService = class {
  constructor(serviceName) {
    this.serviceName = "AppService";
    this.classType = "service";
    this.serviceName = serviceName;
  }
  log(...args) {
    console.log(`^6[${this.serviceName}]`, ...args);
  }
  logInfo(...args) {
    console.log(`[^5INFO^0]`, `[^6${this.serviceName}^0]`, ...args);
  }
  logSuccess(...args) {
    console.log(`[^2SUCCESS^0]`, `[^6${this.serviceName}^0]`, ...args);
  }
  logError(...args) {
    console.log(`[^1ERROR^0]`, `[^6${this.serviceName}^0]`, ...args);
  }
  logWarning(...args) {
    console.log(`[^3WARNING^0]`, `[^6${this.serviceName}^0]`, ...args);
  }
};
var AppClass2 = class {
  constructor(className) {
    this.className = "AppClass";
    this.classType = "class";
    this.LUA = () => {
      const props = Object.getOwnPropertyNames(Object.getPrototypeOf(this));
      const returnObject = {};
      const returnMeta = {};
      props.forEach((prop) => {
        const propType = typeof this[prop];
        returnMeta[prop] = propType;
        const property = this[prop];
        if (typeof property === "function") {
          const _f = property;
          returnObject[prop] = (...args) => _f.apply(this, args);
        } else {
          returnObject[prop] = () => this[prop];
        }
      });
      return { returnObject, returnMeta };
    };
    this.className = className;
  }
  log(...args) {
    console.log(`^6[${this.className}]`, ...args);
  }
  logInfo(...args) {
    console.log(`[^5INFO^0]`, `[^6${this.className}^0]`, ...args);
  }
  logSuccess(...args) {
    console.log(`[^2SUCCESS^0]`, `[^6${this.className}^0]`, ...args);
  }
  logError(...args) {
    console.log(`[^1ERROR^0]`, `[^6${this.className}^0]`, ...args);
  }
  logWarning(...args) {
    console.log(`[^3WARNING^0]`, `[^6${this.className}^0]`, ...args);
  }
};

// ../../ProjectStarboy/src/shared/config/backpack.ts
var BackpackWeight = {
  male_5_42_0: 56e4,
  male_5_0_0: 5e3,
  female_5_0_0: 5e3,
  male_5_139_6: 1e4,
  female_5_205_6: 1e4
};
var backpack_default = BackpackWeight;

// ../../ProjectStarboy/src/shared/items/index.ts
var ITEMS = [
  {
    name: "blackmoney",
    label: "Tiền bẩn",
    weight: 0,
    limit: 9999999999999,
    description: "Tiền thu được từ cướp bóc, bán chất cấm,...",
    canUse: false,
    canTransfer: true,
    canDrop: true,
    type: "standard",
    rarity: 3 /* EPIC */
  },
  {
    name: "bread",
    label: "Bánh mì",
    weight: 100,
    limit: 1e4,
    description: "Dùng để ăn khi đói",
    canUse: true,
    canTransfer: true,
    canDrop: true,
    type: "standard",
    rarity: 0 /* COMMON */
  },
  {
    name: "water",
    label: "Nước",
    weight: 100,
    limit: 1e4,
    description: "Dùng để uống khi khát",
    canUse: true,
    canTransfer: true,
    canDrop: true,
    type: "standard",
    rarity: 0 /* COMMON */
  },
  {
    name: "coca",
    label: "Nước ngọt",
    weight: 100,
    limit: 1e4,
    description: "Dùng để uống khi khát",
    canUse: true,
    canTransfer: true,
    canDrop: true,
    type: "standard",
    rarity: 0 /* COMMON */
  },
  {
    name: "rename_card",
    label: "Thẻ đổi tên",
    weight: 100,
    limit: 1e4,
    description: "Dùng để đổi tên người chơi",
    canUse: true,
    canTransfer: true,
    canDrop: true,
    type: "standard",
    rarity: 2 /* RARE */
  },
  {
    name: "phone_card_50",
    label: "Thẻ điện thoại 50$",
    weight: 100,
    limit: 1e4,
    description: "Dùng để nạp tiền điện thoại",
    canUse: true,
    canTransfer: true,
    canDrop: true,
    type: "standard",
    rarity: 0 /* COMMON */
  },
  {
    name: "phone_card_100",
    label: "Thẻ điện thoại 100$",
    weight: 100,
    limit: 1e4,
    description: "Dùng để nạp tiền điện thoại",
    canUse: true,
    canTransfer: true,
    canDrop: true,
    type: "standard",
    rarity: 0 /* COMMON */
  },
  {
    name: "phone_card_200",
    label: "Thẻ điện thoại 200$",
    weight: 100,
    limit: 1e4,
    description: "Dùng để nạp tiền điện thoại",
    canUse: true,
    canTransfer: true,
    canDrop: true,
    type: "standard",
    rarity: 0 /* COMMON */
  },
  {
    name: "phone_card_500",
    label: "Thẻ điện thoại 500$",
    weight: 100,
    limit: 1e4,
    description: "Dùng để nạp tiền điện thoại",
    canUse: true,
    canTransfer: true,
    canDrop: true,
    type: "standard",
    rarity: 0 /* COMMON */
  },
  {
    name: "phone_card_1000",
    label: "Thẻ điện thoại 1000$",
    weight: 100,
    limit: 1e4,
    description: "Dùng để nạp tiền điện thoại",
    canUse: true,
    canTransfer: true,
    canDrop: true,
    type: "standard",
    rarity: 0 /* COMMON */
  },
  {
    name: "phone_card_2000",
    label: "Thẻ điện thoại 2000$",
    weight: 100,
    limit: 1e4,
    description: "Dùng để nạp tiền điện thoại",
    canUse: true,
    canTransfer: true,
    canDrop: true,
    type: "standard",
    rarity: 0 /* COMMON */
  },
  {
    name: "phone_card_5000",
    label: "Thẻ điện thoại 5000$",
    weight: 100,
    limit: 1e4,
    description: "Dùng để nạp tiền điện thoại",
    canUse: true,
    canTransfer: true,
    canDrop: true,
    type: "standard",
    rarity: 0 /* COMMON */
  },
  {
    name: "phone_card_10000",
    label: "Thẻ điện thoại 10000$",
    weight: 100,
    limit: 1e4,
    description: "Dùng để nạp tiền điện thoại",
    canUse: true,
    canTransfer: true,
    canDrop: true,
    type: "standard",
    rarity: 0 /* COMMON */
  },
  {
    name: "stone",
    label: "Cục đá thần kì",
    weight: 1e3,
    limit: 1e4,
    description: "Vật phẩm chính thu nhập từ nghề đào đá",
    canUse: false,
    canTransfer: true,
    canDrop: true,
    type: "standard",
    rarity: 0 /* COMMON */
  },
  {
    name: "washed_stone",
    label: "Đá đã rửa",
    weight: 1e3,
    limit: 1e4,
    description: "Đá thần kì đã được rửa sạch",
    canUse: false,
    canTransfer: true,
    canDrop: true,
    type: "standard",
    rarity: 0 /* COMMON */
  },
  {
    name: "copper",
    label: "Đồng",
    weight: 300,
    limit: 1e4,
    description: "Quặng đồng có thể bán được",
    canUse: false,
    canTransfer: true,
    canDrop: true,
    type: "standard",
    rarity: 1 /* UNCOMMON */
  },
  {
    name: "refined_copper",
    label: "Đồng tinh luyện",
    weight: 100,
    limit: 1e4,
    description: "Quặng đồng đã được tinh luyện",
    canUse: false,
    canTransfer: true,
    canDrop: true,
    type: "standard",
    rarity: 2 /* RARE */
  },
  {
    name: "iron",
    label: "Sắt",
    weight: 300,
    limit: 1e4,
    description: "Quặng sắt có thể bán được",
    canUse: false,
    canTransfer: true,
    canDrop: true,
    type: "standard",
    rarity: 1 /* UNCOMMON */
  },
  {
    name: "refined_iron",
    label: "Sắt tinh luyện",
    weight: 100,
    limit: 1e4,
    description: "Quặng sắt đã được tinh luyện",
    canUse: false,
    canTransfer: true,
    canDrop: true,
    type: "standard",
    rarity: 2 /* RARE */
  },
  {
    name: "gold",
    label: "Vàng",
    weight: 300,
    limit: 1e4,
    description: "Quặng vàng có thể bán được",
    canUse: false,
    canTransfer: true,
    canDrop: true,
    type: "standard",
    rarity: 1 /* UNCOMMON */
  },
  {
    name: "refined_gold",
    label: "Vàng tinh luyện",
    weight: 100,
    limit: 1e4,
    description: "Quặng vàng đã được tinh luyện",
    canUse: false,
    canTransfer: true,
    canDrop: true,
    type: "standard",
    rarity: 2 /* RARE */
  },
  {
    name: "diamond",
    label: "Kim cương",
    weight: 500,
    limit: 1e4,
    description: "Kim cương quý hiếm được thu mua với giá cao",
    canUse: false,
    canTransfer: true,
    canDrop: true,
    type: "standard",
    rarity: 2 /* RARE */
  },
  {
    name: "oil",
    label: "Dầu thô",
    weight: 1e3,
    limit: 1e4,
    description: "Được tìm thấy nhiều ở các mỏ dầu",
    canUse: false,
    canTransfer: true,
    canDrop: true,
    type: "standard",
    rarity: 0 /* COMMON */
  },
  {
    name: "filtered_oil",
    label: "Dầu đã lọc",
    weight: 1e3,
    limit: 1e4,
    description: "Được tạo ra từ khu chế biến dầu thô",
    canUse: false,
    canTransfer: true,
    canDrop: true,
    type: "standard",
    rarity: 1 /* UNCOMMON */
  },
  {
    name: "diesel_oil",
    label: "Dầu Diesel",
    weight: 500,
    limit: 1e4,
    description: "Được điều chế từ dầu",
    canUse: false,
    canTransfer: true,
    canDrop: true,
    type: "standard",
    rarity: 2 /* RARE */
  },
  {
    name: "oilRefinded",
    label: "Dầu máy (C)",
    weight: 100,
    limit: 1e4,
    description: "Dầu máy (C)",
    canUse: false,
    canTransfer: true,
    canDrop: true,
    type: "standard",
    rarity: 4 /* LEGENDARY */
  },
  {
    name: "chicken",
    label: "Gà",
    weight: 1e3,
    limit: 1e4,
    description: "Gà",
    canUse: false,
    canTransfer: true,
    canDrop: true,
    type: "standard",
    rarity: 0 /* COMMON */
  },
  {
    name: "pre_processed_chicken",
    label: "Gà sơ chế",
    weight: 1e3,
    limit: 1e4,
    description: "Gà sơ chế",
    canUse: false,
    canTransfer: true,
    canDrop: true,
    type: "standard",
    rarity: 1 /* UNCOMMON */
  },
  {
    name: "finished_chicken",
    label: "Gà thành phẩm",
    weight: 500,
    limit: 1e4,
    description: "Gà thành phẩm",
    canUse: false,
    canTransfer: true,
    canDrop: true,
    type: "standard",
    rarity: 2 /* RARE */
  },
  {
    name: "wool",
    label: "Len",
    weight: 1e3,
    limit: 1e4,
    description: "Len",
    canUse: false,
    canTransfer: true,
    canDrop: true,
    type: "standard",
    rarity: 0 /* COMMON */
  },
  {
    name: "silk",
    label: "Tơ",
    weight: 1e3,
    limit: 1e4,
    description: "Tơ",
    canUse: false,
    canTransfer: true,
    canDrop: true,
    type: "standard",
    rarity: 1 /* UNCOMMON */
  },
  {
    name: "cloth",
    label: "Vải",
    weight: 500,
    limit: 1e4,
    description: "Vải",
    canUse: false,
    canTransfer: true,
    canDrop: true,
    type: "standard",
    rarity: 2 /* RARE */
  },
  {
    name: "clean_cloth",
    label: "Vải Sạch (C)",
    weight: 100,
    limit: 1e4,
    description: "Vải Sạch (C)",
    canUse: false,
    canTransfer: true,
    canDrop: true,
    type: "standard",
    rarity: 4 /* LEGENDARY */
  },
  {
    name: "saw",
    label: "Cưa sắt",
    weight: 1e3,
    limit: 1e4,
    description: "Cưa sắt",
    canUse: false,
    canTransfer: true,
    canDrop: true,
    type: "standard",
    rarity: 2 /* RARE */
  },
  {
    name: "wood",
    label: "Gỗ",
    weight: 1e3,
    limit: 1e4,
    description: "Gỗ",
    canUse: false,
    canTransfer: true,
    canDrop: true,
    type: "standard",
    rarity: 0 /* COMMON */
  },
  {
    name: "sawned_wood",
    label: "Gỗ đã xẻ",
    weight: 1e3,
    limit: 1e4,
    description: "Gỗ đã xẻ",
    canUse: false,
    canTransfer: true,
    canDrop: true,
    type: "standard",
    rarity: 1 /* UNCOMMON */
  },
  {
    name: "wood_plank",
    label: "Gỗ ván",
    weight: 500,
    limit: 1e4,
    description: "Gỗ ván",
    canUse: false,
    canTransfer: true,
    canDrop: true,
    type: "standard",
    rarity: 2 /* RARE */
  },
  {
    name: "highquality_wood",
    label: "Gỗ Cao Cấp (C)",
    weight: 100,
    limit: 1e4,
    description: "Gỗ Cao Cấp (C)",
    canUse: false,
    canTransfer: true,
    canDrop: true,
    type: "standard",
    rarity: 4 /* LEGENDARY */
  },
  {
    name: "sand",
    label: "Cát",
    weight: 1e3,
    limit: 1e4,
    description: "Cát thô còn lẫn tạp chất",
    canUse: false,
    canTransfer: true,
    canDrop: true,
    type: "standard",
    rarity: 0 /* COMMON */
  },
  {
    name: "silic",
    label: "Silic",
    weight: 1e3,
    limit: 1e4,
    description: "Silic dùng để nấu thuỷ tinh",
    canUse: false,
    canTransfer: true,
    canDrop: true,
    type: "standard",
    rarity: 1 /* UNCOMMON */
  },
  {
    name: "glass",
    label: "Thủy tinh",
    weight: 500,
    limit: 1e4,
    description: "Thủy tinh",
    canUse: false,
    canTransfer: true,
    canDrop: true,
    type: "standard",
    rarity: 2 /* RARE */
  },
  {
    name: "fiberglass",
    label: "Sợi thuỷ tinh (C)",
    weight: 100,
    limit: 1e4,
    description: "Dùng để chế tạo",
    canUse: false,
    canTransfer: true,
    canDrop: true,
    type: "standard",
    rarity: 4 /* LEGENDARY */
  },
  {
    name: "cannabis_seed",
    label: "Hạt giống cần sa",
    weight: 100,
    limit: 1e4,
    description: "Dùng để trồng cần sa",
    canUse: true,
    canTransfer: true,
    canDrop: true,
    type: "standard",
    rarity: 0 /* COMMON */
  },
  {
    name: "fresh_cannabis",
    label: "Cần sa tươi",
    weight: 1e3,
    limit: 1e4,
    description: "Cần sa tươi",
    canUse: true,
    canTransfer: true,
    canDrop: true,
    type: "standard",
    rarity: 1 /* UNCOMMON */
  },
  {
    name: "cannabis",
    label: "Búp cần sa",
    weight: 100,
    limit: 1e4,
    description: "Chơi phê lắm",
    canUse: true,
    canTransfer: true,
    canDrop: true,
    type: "standard",
    rarity: 1 /* UNCOMMON */
  },
  {
    name: "packaged_cannabis",
    label: "Gói cần sa",
    weight: 1e3,
    limit: 1e4,
    description: "Cần sa đã được đóng gói",
    canUse: true,
    canTransfer: true,
    canDrop: true,
    type: "standard",
    rarity: 2 /* RARE */
  },
  {
    name: "coca_seed",
    label: "Hạt giống coca",
    weight: 100,
    limit: 1e4,
    description: "Hạt giống coca",
    canUse: true,
    canTransfer: true,
    canDrop: true,
    type: "standard",
    rarity: 0 /* COMMON */
  },
  {
    name: "fresh_coca",
    label: "Cây coca tươi",
    weight: 1e3,
    limit: 1e4,
    description: "Cây coca tươi",
    canUse: true,
    canTransfer: true,
    canDrop: true,
    type: "standard",
    rarity: 1 /* UNCOMMON */
  },
  {
    name: "cocaine",
    label: "Cocaine",
    weight: 100,
    limit: 1e4,
    description: "Cocain. Chất gây nghiện",
    canUse: true,
    canTransfer: true,
    canDrop: true,
    type: "standard",
    rarity: 1 /* UNCOMMON */
  },
  {
    name: "packaged_cocaine",
    label: "Gói cocaine",
    weight: 1e3,
    limit: 1e4,
    description: "Cocain đã được đóng gói",
    canUse: true,
    canTransfer: true,
    canDrop: true,
    type: "standard",
    rarity: 2 /* RARE */
  },
  {
    name: "ephedra_seed",
    label: "Hạt giống ma hoàng",
    weight: 100,
    limit: 1e4,
    description: "Dùng để trồng ma hoàng",
    canUse: true,
    canTransfer: true,
    canDrop: true,
    type: "standard",
    rarity: 0 /* COMMON */
  },
  {
    name: "fresh_ephedra",
    label: "Ma hoàng tươi",
    weight: 1e3,
    limit: 1e4,
    description: "Ma hoàng tươi",
    canUse: true,
    canTransfer: true,
    canDrop: true,
    type: "standard",
    rarity: 1 /* UNCOMMON */
  },
  {
    name: "ephedra",
    label: "Ma hoàng",
    weight: 100,
    limit: 1e4,
    description: "Ma hoàng (ephedra). Chất gây nghiện",
    canUse: true,
    canTransfer: true,
    canDrop: true,
    type: "standard",
    rarity: 1 /* UNCOMMON */
  },
  {
    name: "packaged_ephedra",
    label: "Gói ma hoàng",
    weight: 1e3,
    limit: 1e4,
    description: "Ma hoàng đã được đóng gói",
    canUse: true,
    canTransfer: true,
    canDrop: true,
    type: "standard",
    rarity: 2 /* RARE */
  },
  {
    name: "fertilizer",
    label: "Phân bón",
    weight: 100,
    limit: 1e4,
    description: "Dùng để kích thích tăng trưởng cho cây",
    canUse: true,
    canTransfer: true,
    canDrop: true,
    type: "standard",
    rarity: 0 /* COMMON */
  },
  {
    name: "jewel",
    label: "Trang sức cướp",
    weight: 1,
    limit: 1e4,
    description: "Trang sức đã cướp ở tiệm vàng",
    canUse: false,
    canTransfer: false,
    canDrop: true,
    type: "standard",
    rarity: 2 /* RARE */
  },
  {
    name: "weapon_fixkit",
    label: "Bộ sửa súng",
    weight: 100,
    limit: 1e4,
    description: "Dùng để sửa chữa vũ khí",
    canUse: true,
    canTransfer: true,
    canDrop: true,
    type: "standard",
    rarity: 1 /* UNCOMMON */
  },
  {
    name: "lock",
    label: "Ổ khóa",
    weight: 100,
    limit: 1e4,
    description: "Dùng bên cạnh những cánh cửa để khóa chúng",
    canUse: true,
    canTransfer: true,
    canDrop: true,
    type: "standard",
    rarity: 0 /* COMMON */
  },
  {
    name: "passcode_lock",
    label: "Ổ khóa mã số",
    weight: 100,
    limit: 1e4,
    description: "Dùng bên cạnh những cánh cửa để khóa chúng",
    canUse: true,
    canTransfer: true,
    canDrop: true,
    type: "standard",
    rarity: 0 /* COMMON */
  },
  {
    name: "driving_license",
    label: "Giấy phép lái xe",
    weight: 10,
    limit: 1,
    description: "Giấy phép lái xe",
    canUse: false,
    canTransfer: false,
    canDrop: true,
    expiration: 24 * 60 * 60 * 7,
    stability: -1,
    type: "license",
    rarity: 1 /* UNCOMMON */
  },
  {
    name: "weapon_license",
    label: "Giấy phép sử dụng vũ khí",
    weight: 10,
    limit: 1,
    description: "Giấy phép sử dụng vũ khí",
    canUse: false,
    canTransfer: false,
    canDrop: true,
    expiration: 24 * 60 * 60 * 30,
    stability: -1,
    type: "license",
    rarity: 1 /* UNCOMMON */
  },
  {
    name: "armour",
    label: "Giáp",
    weight: 2e3,
    limit: 1e4,
    description: "Áo giáp chống đạn, giảm sát thương bản thân",
    canUse: true,
    canTransfer: true,
    canDrop: true,
    type: "standard",
    rarity: 2 /* RARE */
  },
  {
    name: "armour_police",
    label: "Giáp CA",
    weight: 1e3,
    limit: 1e4,
    description: "Trang bị áo giáp chống đạn để giảm sát thương bản thân",
    canUse: true,
    canTransfer: true,
    canDrop: true,
    type: "standard",
    rarity: 2 /* RARE */
  },
  {
    name: "bandage",
    label: "Băng cứu thương",
    weight: 200,
    limit: 1e4,
    description: "Băng cứu thương",
    canUse: true,
    canTransfer: true,
    canDrop: true,
    type: "standard",
    rarity: 0 /* COMMON */
  },
  {
    name: "medikit",
    label: "Bộ cấp cứu",
    weight: 300,
    limit: 1e4,
    description: "Bộ cấp cứu",
    canUse: true,
    canTransfer: true,
    canDrop: true,
    type: "standard",
    rarity: 1 /* UNCOMMON */
  },
  {
    name: "firstaidkit",
    label: "Bộ cứu thương",
    weight: 2e3,
    limit: 1e4,
    description: "Bộ cứu thương",
    canUse: true,
    canTransfer: true,
    canDrop: true,
    type: "standard",
    rarity: 1 /* UNCOMMON */
  },
  {
    name: "fixkit",
    label: "Bộ sửa chữa",
    weight: 100,
    limit: 1e4,
    description: "Dùng để sửa chữa phương tiện bị hư",
    canUse: true,
    canTransfer: true,
    canDrop: true,
    type: "standard",
    rarity: 0 /* COMMON */
  },
  {
    name: "fixkit2",
    label: "Bộ sửa chữa khẩn cấp",
    weight: 100,
    limit: 1e4,
    description: "Dùng để sửa chữa phương tiện bị hư khi không có cứu hộ online",
    canUse: true,
    canTransfer: true,
    canDrop: true,
    type: "standard",
    rarity: 0 /* COMMON */
  },
  {
    name: "flipkit",
    label: "Bộ lật xe",
    weight: 100,
    limit: 1e4,
    description: "Dùng để lật xe",
    canUse: true,
    canTransfer: true,
    canDrop: true,
    type: "standard",
    rarity: 1 /* UNCOMMON */
  },
  {
    name: "tinhdau",
    label: "Tinh dầu",
    weight: 100,
    limit: 1e4,
    description: "Được điều chế từ các loại chất cấm",
    canUse: false,
    canTransfer: true,
    canDrop: true,
    type: "standard",
    rarity: 3 /* EPIC */
  },
  {
    name: "steel",
    label: "Thép",
    weight: 100,
    limit: 1e4,
    description: "Thép",
    canUse: false,
    canTransfer: true,
    canDrop: true,
    type: "standard",
    rarity: 3 /* EPIC */
  },
  {
    name: "tshirt",
    label: "Áo",
    weight: 100,
    limit: 1e4,
    description: "Áo",
    canUse: false,
    canTransfer: true,
    canDrop: true,
    type: "standard",
    rarity: 3 /* EPIC */
  },
  {
    name: "bangsungak",
    label: "Báng súng AK",
    weight: 100,
    limit: 1e4,
    description: "Dùng để chế tạo súng AK",
    canUse: true,
    canTransfer: true,
    canDrop: true,
    type: "standard",
    rarity: 3 /* EPIC */
  },
  {
    name: "bancheak",
    label: "Bản thiết kế AK",
    weight: 100,
    limit: 1e4,
    description: "Dùng để chế tạo súng AK",
    canUse: true,
    canTransfer: true,
    canDrop: true,
    type: "standard",
    rarity: 3 /* EPIC */
  },
  {
    name: "WEAPON_MACHETE",
    label: "Dao dựa",
    weight: 1e3,
    limit: 1,
    description: "Vũ khí cận chiến",
    canUse: true,
    canTransfer: true,
    canDrop: true,
    expiration: -1,
    stability: 1e4,
    type: "weapon",
    rarity: 1 /* UNCOMMON */
  },
  {
    name: "WEAPON_BAT",
    label: "Gậy bóng chày",
    weight: 1e3,
    limit: 1,
    description: "Vũ khí cận chiến",
    canUse: true,
    canTransfer: true,
    canDrop: true,
    expiration: -1,
    stability: 1e4,
    type: "weapon",
    rarity: 1 /* UNCOMMON */
  },
  {
    name: "WEAPON_PHONGLON",
    label: "Phóng Lợn",
    weight: 1e3,
    limit: 1,
    description: "Vũ khí cận chiến tự chế của trẻ trâu Việt Nam",
    canUse: true,
    canTransfer: true,
    canDrop: true,
    expiration: -1,
    stability: 1e4,
    type: "weapon",
    rarity: 1 /* UNCOMMON */
  },
  {
    name: "WEAPON_NIGHTSTICK",
    label: "Gậy ba trắc",
    weight: 1e3,
    limit: 1,
    description: "Vũ khí quân dụng",
    canUse: true,
    canTransfer: true,
    canDrop: true,
    expiration: -1,
    stability: 1e4,
    type: "weapon",
    rarity: 1 /* UNCOMMON */
  },
  {
    name: "WEAPON_STUNGUN",
    label: "Súng điện",
    weight: 1500,
    limit: 1,
    description: "Vũ khí tầm gần",
    canUse: true,
    canTransfer: true,
    canDrop: true,
    expiration: -1,
    stability: 1e4,
    type: "weapon",
    rarity: 1 /* UNCOMMON */
  },
  {
    name: "WEAPON_PISTOL",
    label: "Súng lục 9mm",
    weight: 1500,
    limit: 1,
    description: "Vũ khí tầm gần, gọn nhẹ",
    canUse: true,
    canTransfer: true,
    canDrop: true,
    expiration: -1,
    stability: 1e4,
    type: "weapon",
    rarity: 1 /* UNCOMMON */
  },
  {
    name: "WEAPON_DOUBLEACTION",
    label: "Súng lục côn xoay",
    weight: 1500,
    limit: 1,
    description: "Vũ khí tầm gần, damage to",
    canUse: true,
    canTransfer: true,
    canDrop: true,
    expiration: -1,
    stability: 1e4,
    type: "weapon",
    rarity: 1 /* UNCOMMON */
  },
  {
    name: "WEAPON_APPISTOL",
    label: "Súng lục tự động",
    weight: 1500,
    limit: 1,
    description: "Vũ khí tầm gần, gọn nhẹ, cơ chế liên thanh",
    canUse: true,
    canTransfer: true,
    canDrop: true,
    expiration: -1,
    stability: 1e4,
    type: "weapon",
    rarity: 1 /* UNCOMMON */
  },
  {
    name: "WEAPON_ASSAULTRIFLE",
    label: "Súng AK",
    weight: 3e3,
    limit: 1,
    description: "Súng AK",
    canUse: true,
    canTransfer: true,
    canDrop: true,
    expiration: -1,
    stability: 1e4,
    type: "weapon",
    rarity: 2 /* RARE */
  },
  {
    name: "WEAPON_TACTICALRIFLE",
    label: "Súng M16",
    weight: 3e3,
    limit: 1,
    description: "Súng M16",
    canUse: true,
    canTransfer: true,
    canDrop: true,
    expiration: -1,
    stability: 1e4,
    type: "weapon",
    rarity: 4 /* LEGENDARY */
  }
];
var MaxAmmo = {
  AMMO_PISTOL: 1e4,
  AMMO_SMG: 1e4,
  AMMO_RIFLE: 1e4,
  AMMO_MG: 1e4,
  AMMO_SHOTGUN: 1e4,
  AMMO_STUNGUN: 250,
  AMMO_SNIPER: 250,
  AMMO_SNIPER_REMOTE: 250,
  AMMO_GRENADELAUNCHER: 20,
  AMMO_GRENADELAUNCHER_SMOKE: 20,
  AMMO_RPG: 20,
  AMMO_STINGER: 20,
  AMMO_MINIGUN: 250,
  AMMO_GRENADE: 25,
  AMMO_STICKYBOMB: 25,
  AMMO_SMOKEGRENADE: 25,
  AMMO_BZGAS: 25,
  AMMO_MOLOTOV: 25,
  AMMO_FIREEXTINGUISHER: 2e3,
  AMMO_PETROLCAN: 4500,
  AMMO_BALL: 1,
  AMMO_FLARE: 25,
  AMMO_TANK: 100,
  AMMO_SPACE_ROCKET: 20,
  AMMO_PLANE_ROCKET: 20,
  AMMO_PLAYER_LASER: 100,
  AMMO_ENEMY_LASER: 100,
  AMMO_BIRD_CRAP: 25,
  AMMO_PIPEBOMB: 10,
  AMMO_HOMINGLAUNCHER: 10,
  AMMO_PROXMINE: 5,
  AMMO_SNOWBALL: 10,
  AMMO_RIFLE_ARMORPIERCING: 240,
  AMMO_RIFLE_FMJ: 240,
  AMMO_RIFLE_INCENDIARY: 240,
  AMMO_RIFLE_TRACER: 360,
  AMMO_SNIPER_ARMORPIERCING: 80,
  AMMO_SNIPER_FMJ: 80,
  AMMO_SNIPER_INCENDIARY: 80,
  AMMO_SNIPER_TRACER: 320,
  AMMO_SHOTGUN_ARMORPIERCING: 160,
  AMMO_SHOTGUN_EXPLOSIVE: 40,
  AMMO_SHOTGUN_HOLLOWPOINT: 160,
  AMMO_SHOTGUN_INCENDIARY: 160,
  AMMO_PISTOL_FMJ: 240,
  AMMO_PISTOL_HOLLOWPOINT: 240,
  AMMO_PISTOL_INCENDIARY: 240,
  AMMO_PISTOL_TRACER: 360,
  AMMO_MG_ARMORPIERCING: 480,
  AMMO_MG_FMJ: 480,
  AMMO_MG_INCENDIARY: 480,
  AMMO_MG_TRACER: 600,
  AMMO_SNIPER_EXPLOSIVE: 40,
  AMMO_SMG_FMJ: 240,
  AMMO_SMG_HOLLOWPOINT: 240,
  AMMO_SMG_INCENDIARY: 240,
  AMMO_SMG_TRACER: 360,
  AMMO_FLAREGUN: 20,
  AMMO_FIREWORK: 20,
  AMMO_RAILGUN: 20
};
var ammoKeys = Object.keys(eAmmoType);
ammoKeys.forEach((ammo) => {
  ITEMS.push({
    name: ammo,
    label: ammo,
    weight: 1,
    limit: MaxAmmo[ammo] || 1,
    description: ammo,
    canUse: true,
    canTransfer: true,
    canDrop: true,
    type: "weapon-ammo",
    rarity: 1 /* UNCOMMON */
  });
});
var getLabelFromComponentId = (componentId) => {
  switch (componentId) {
    case 7 /* ACCESSORY */:
      return "Phụ kiện";
    case 5 /* BAG */:
      return "Balo";
    case 10 /* DECAL */:
      return "Phù hiệu";
    case 9 /* KEVLAR */:
      return "Áo giáp";
    case 4 /* LEG */:
      return "Quần";
    case 1 /* MASK */:
      return "Mặt nạ";
    case 6 /* SHOES */:
      return "Giày";
    case 11 /* TOP */:
      return "Áo ngoài";
    case 3 /* TORSOR */:
      return "Tay";
    case 8 /* UNDERSHIRT */:
      return "Áo trong";
    default:
      return "undershirt";
  }
};
var items_default = ITEMS;

// ../../ProjectStarboy/src/shared/utils/func.ts
var import_msgpack = require("@msgpack/msgpack");
var import_uuid = require("uuid");
var MappedItems = /* @__PURE__ */ new Map();
var Sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms, null));
var isClotheSlot = (slot) => {
  return ClotherSlot.includes(slot);
};
var isClotheType = (type) => {
  return type === "accessory" || type === "bag" || type === "bracelet" || type === "decal" || type === "ear" || type === "extend" || type === "glass" || type === "hat" || type === "kevlar" || type === "leg" || type === "mask" || type === "shoes" || type === "top" || type === "torsor" || type === "undershirt" || type === "watch" || type === "weapon-ammo" || type === "weapon";
};
var getClotheSlotByType = (type) => {
  if (!isClotheType(type))
    return;
  switch (type) {
    case "accessory":
      return "ACCESSORY";
    case "bag":
      return "BAG";
    case "bracelet":
      return "BRACELET";
    case "decal":
      return "DECAL";
    case "ear":
      return "EAR";
    case "glass":
      return "GLASS";
    case "hat":
      return "HAT";
    case "kevlar":
      return "KEVLAR";
    case "leg":
      return "LEG";
    case "mask":
      return "MASK";
    case "shoes":
      return "SHOES";
    case "top":
      return "TOP";
    case "torsor":
      return "TORSOR";
    case "undershirt":
      return "UNDERSHIRT";
    case "watch":
      return "WATCH";
    default:
      return;
  }
};
var getItemDataByName = (itemName) => {
  return MappedItems.get(itemName);
};
var calculateItemPrice = (lastSoldQuantity, soldQuantity, priceRange, currentPrice) => {
  const [minPrice, maxPrice] = priceRange;
  let price = currentPrice;
  if (lastSoldQuantity >= soldQuantity) {
    if (soldQuantity <= 50) {
      const randomPercent = Math.floor(Math.random() * 31);
      price = price * (1 + randomPercent / 100);
    } else if (soldQuantity > 50 && soldQuantity <= 300) {
      const randomPercent = Math.floor(Math.random() * 28);
      price = price * (1 + randomPercent / 100);
    } else if (soldQuantity > 300 && soldQuantity <= 500) {
      const randomPercent = Math.floor(Math.random() * 25);
      price = price * (1 + randomPercent / 100);
    } else if (soldQuantity > 500 && soldQuantity <= 800) {
      const randomPercent = Math.floor(Math.random() * 19);
      price = price * (1 + randomPercent / 100);
    } else if (soldQuantity > 800 && soldQuantity <= 1200) {
      const randomPercent = Math.floor(Math.random() * 11);
      price = price * (1 + randomPercent / 100);
    } else if (soldQuantity > 1200) {
      const randomPercent = Math.floor(Math.random() * 5);
      price = price * (1 + randomPercent / 100);
    }
    if (price >= maxPrice) {
      price = maxPrice;
    }
  } else if (lastSoldQuantity < soldQuantity) {
    if (soldQuantity <= 300) {
      price = price * 0.87;
    } else if (soldQuantity > 300 && soldQuantity <= 500) {
      price = price * 0.75;
    } else if (soldQuantity > 500 && soldQuantity <= 800) {
      price = price * 0.52;
    } else if (soldQuantity > 800 && soldQuantity <= 1200) {
      price = price * 0.26;
    } else if (soldQuantity > 1200) {
      price = minPrice;
    }
    if (price <= minPrice) {
      price = minPrice;
    }
  }
  return price;
};
var getInventoryWeight = (inventory) => {
  let w = 0;
  for (const slot of NormalSlot) {
    const items = inventory[slot];
    if (items) {
      const itemData = getItemDataByName(items.name);
      if (itemData) {
        if (itemData)
          w += items.amount * itemData.weight;
      }
    }
  }
  return w;
};
var json = (object) => {
  return JSON.parse(JSON.stringify(object));
};
function e4() {
  const h = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f"];
  const k = ["x", "x", "x", "x", "x", "x", "x", "x", "-", "x", "x", "x", "x", "-", "4", "x", "x", "x", "-", "y", "x", "x", "x", "-", "x", "x", "x", "x", "x", "x", "x", "x", "x", "x", "x", "x"];
  let u = "", i = 0, rb = Math.random() * 4294967295 | 0;
  while (i++ < 36) {
    const c = k[i - 1], r = rb & 15, v = c === "x" ? r : r & 3 | 8;
    u += c === "-" || c === "4" ? c : h[v];
    rb = i % 8 === 0 ? Math.random() * 4294967295 | 0 : rb >> 4;
  }
  return u;
}
var getTypeFromComponentId = (componentId) => {
  switch (componentId) {
    case 7 /* ACCESSORY */:
      return "accessory";
    case 5 /* BAG */:
      return "bag";
    case 10 /* DECAL */:
      return "decal";
    case 9 /* KEVLAR */:
      return "kevlar";
    case 4 /* LEG */:
      return "leg";
    case 1 /* MASK */:
      return "mask";
    case 6 /* SHOES */:
      return "shoes";
    case 11 /* TOP */:
      return "top";
    case 3 /* TORSOR */:
      return "torsor";
    case 8 /* UNDERSHIRT */:
      return "undershirt";
    default:
      return "undershirt";
  }
};
var isStackableItem = (item) => {
  const itemData = getItemDataByName(item.name);
  if (itemData) {
    return itemData.limit > 1;
  } else {
    return true;
  }
};
var isUnStackableItem = (item) => {
  const itemData = getItemDataByName(item.name);
  if (itemData) {
    return itemData.limit === 1;
  } else {
    return false;
  }
};
var _isUnStackableItem = (item) => {
  return item.limit === 1;
};
var isBackpackItem = (item) => {
  return item.type === "bag";
};
var generateItemData = (itemName, amount) => {
  const itemData = getItemDataByName(itemName);
  if (!itemData)
    return;
  if (itemData.type === "weapon") {
    return {
      uuid: (0, import_uuid.v4)(),
      name: itemName,
      stability: itemData.stability,
      type: "weapon",
      ammo: 0,
      component: {},
      amount: 1
    };
  }
  console.log("_isUnStackableItem", _isUnStackableItem(itemData));
  if (_isUnStackableItem(itemData)) {
    const curTime = new Date().getTime();
    return {
      uuid: (0, import_uuid.v4)(),
      name: itemName,
      stability: itemData.stability,
      expiration: curTime + itemData.expiration,
      type: itemData.type,
      amount: 1
    };
  }
  return {
    name: itemName,
    amount,
    type: itemData.type
  };
};

// ../../ProjectStarboy/src/server/shared/load-resource.ts
var WEAPONDATA = JSON.parse(LoadResourceFile("ProjectStarboy", "data/json/WeaponData.json"));
var MaleClothes = JSON.parse(LoadResourceFile("ProjectStarboy", "data/json/male-clothes.json"));
var FemaleClothes = JSON.parse(LoadResourceFile("ProjectStarboy", "data/json/female-clothes.json"));
var MULTIPLAYER_OVERLAYS = JSON.parse(LoadResourceFile("ProjectStarboy", "data/json/v-tattoos/multiplayer_overlays.json"));
var MPVINEWOOD_OVERLAYS = JSON.parse(LoadResourceFile("ProjectStarboy", "data/json/v-tattoos/mpvinewood_overlays.json"));
var MPSUM2_OVERLAYS = JSON.parse(LoadResourceFile("ProjectStarboy", "data/json/v-tattoos/mpsum2_overlays.json"));
var MPSTUNT_OVERLAYS = JSON.parse(LoadResourceFile("ProjectStarboy", "data/json/v-tattoos/mpstunt_overlays.json"));
var MPSMUGGLER_OVERLAYS = JSON.parse(LoadResourceFile("ProjectStarboy", "data/json/v-tattoos/mpsmuggler_overlays.json"));
var MPSECURITY_OVERLAYS = JSON.parse(LoadResourceFile("ProjectStarboy", "data/json/v-tattoos/mpsecurity_overlays.json"));
var MPLUXE2_OVERLAYS = JSON.parse(LoadResourceFile("ProjectStarboy", "data/json/v-tattoos/mpluxe2_overlays.json"));
var MPLUXE_OVERLAYS = JSON.parse(LoadResourceFile("ProjectStarboy", "data/json/v-tattoos/mpluxe_overlays.json"));
var MPLOWRIDER2_OVERLAYS = JSON.parse(LoadResourceFile("ProjectStarboy", "data/json/v-tattoos/mplowrider2_overlays.json"));
var MPLOWRIDER_OVERLAYS = JSON.parse(LoadResourceFile("ProjectStarboy", "data/json/v-tattoos/mplowrider_overlays.json"));
var MPIMPORTEXPORT_OVERLAYS = JSON.parse(LoadResourceFile("ProjectStarboy", "data/json/v-tattoos/mpimportexport_overlays.json"));
var MPHIPSTER_OVERLAYS = JSON.parse(LoadResourceFile("ProjectStarboy", "data/json/v-tattoos/mphipster_overlays.json"));
var MPHEIST4_OVERLAYS = JSON.parse(LoadResourceFile("ProjectStarboy", "data/json/v-tattoos/mpheist4_overlays.json"));
var MPHEIST3_OVERLAYS = JSON.parse(LoadResourceFile("ProjectStarboy", "data/json/v-tattoos/mpheist3_overlays.json"));
var MPGUNRUNNING_OVERLAYS = JSON.parse(LoadResourceFile("ProjectStarboy", "data/json/v-tattoos/mpgunrunning_overlays.json"));
var MPCHRISTMAS2018_OVERLAYS = JSON.parse(LoadResourceFile("ProjectStarboy", "data/json/v-tattoos/mpchristmas2018_overlays.json"));
var MPCHRISTMAS2017_OVERLAYS = JSON.parse(LoadResourceFile("ProjectStarboy", "data/json/v-tattoos/mpchristmas2017_overlays.json"));
var MPCHRISTMAS3_OVERLAYS = JSON.parse(LoadResourceFile("ProjectStarboy", "data/json/v-tattoos/mpchristmas3_overlays.json"));
var MPCHRISTMAS2_OVERLAYS = JSON.parse(LoadResourceFile("ProjectStarboy", "data/json/v-tattoos/mpchristmas2_overlays.json"));
var MPBUSINESS_OVERLAYS = JSON.parse(LoadResourceFile("ProjectStarboy", "data/json/v-tattoos/mpbusiness_overlays.json"));
var MPBIKER_OVERLAYS = JSON.parse(LoadResourceFile("ProjectStarboy", "data/json/v-tattoos/mpbiker_overlays.json"));
var MPBEACH_OVERLAYS = JSON.parse(LoadResourceFile("ProjectStarboy", "data/json/v-tattoos/mpbeach_overlays.json"));
var MPAIRRACES_OVERLAYS = JSON.parse(LoadResourceFile("ProjectStarboy", "data/json/v-tattoos/mpairraces_overlays.json"));
var common_vi = JSON.parse(LoadResourceFile("ProjectStarboy", "data/json/translations/vi/common.json"));
var VEHICLE_COLOR = JSON.parse(LoadResourceFile("ProjectStarboy", "data/json/vehicleShop/colorVehicle.json"));
var VEHICLE_DATA = JSON.parse(LoadResourceFile("ProjectStarboy", "data/json/vehicleShop/vehicleData.json"));
console.log(items_default.length);
MaleClothes.forEach((clothe) => {
  const clotheType = getTypeFromComponentId(clothe.componentId);
  const typeLabel = getLabelFromComponentId(clothe.componentId);
  if (clotheType !== "bag") {
    const item = {
      name: clothe.name,
      label: typeLabel + " " + clothe.drawableId + " (nam)",
      weight: 10,
      limit: 1,
      description: "Quần áo",
      canUse: true,
      canTransfer: true,
      canDrop: true,
      stability: 1e6,
      expiration: -1,
      type: clotheType,
      rarity: 1 /* UNCOMMON */,
      gender: "male"
    };
    items_default.push(item);
  } else {
    let label = "";
    if (backpack_default[clothe.name]) {
      label = "Balo " + backpack_default[clothe.name] / 1e3 + "kg (nam)";
    }
    items_default.push({
      name: clothe.name,
      label: backpack_default[clothe.name] ? label : typeLabel + "  " + clothe.drawableId + " (nam)",
      weight: 10,
      limit: 1,
      description: "Quần áo",
      canUse: true,
      canTransfer: true,
      canDrop: true,
      expiration: -1,
      stability: 1e6,
      type: clotheType,
      rarity: 1 /* UNCOMMON */,
      additionalWeight: backpack_default[clothe.name] || 0,
      gender: "male"
    });
  }
});
FemaleClothes.forEach((clothe) => {
  const typeLabel = getLabelFromComponentId(clothe.componentId);
  const clotheType = getTypeFromComponentId(clothe.componentId);
  if (clotheType !== "bag") {
    items_default.push({
      name: clothe.name,
      label: typeLabel + " " + clothe.drawableId + " (nữ)",
      weight: 10,
      limit: 1,
      description: "Quần áo",
      canUse: true,
      canTransfer: true,
      canDrop: true,
      expiration: -1,
      stability: 1e6,
      type: clotheType,
      rarity: 1 /* UNCOMMON */,
      gender: "female"
    });
  } else {
    let label = "";
    if (backpack_default[clothe.name]) {
      label = "Balo " + backpack_default[clothe.name] / 1e3 + "kg (nữ)";
    }
    items_default.push({
      name: clothe.name,
      label: backpack_default[clothe.name] ? label : typeLabel + "  " + clothe.drawableId + " (nữ)",
      weight: 10,
      limit: 1,
      description: "Quần áo",
      canUse: true,
      canTransfer: true,
      canDrop: true,
      expiration: -1,
      stability: 1e6,
      type: clotheType,
      rarity: 1 /* UNCOMMON */,
      additionalWeight: backpack_default[clothe.name] || 0,
      gender: "female"
    });
  }
});
console.log(items_default.length);
for (const item of items_default) {
  MappedItems.set(item.name, item);
}

// ../../ProjectStarboy/src/server/shared/constants.ts
var Tattoos = [];
for (const overlay of MULTIPLAYER_OVERLAYS) {
  Tattoos.push({
    Name: overlay.Name,
    LocalizedName: overlay.LocalizedName,
    HashNameMale: overlay.HashNameMale,
    HashNameFemale: overlay.HashNameFemale,
    Zone: overlay.Zone,
    ZoneID: overlay.ZoneID,
    Price: overlay.Price,
    Collection: "multiplayer_overlays"
  });
}
for (const overlay of MPVINEWOOD_OVERLAYS) {
  Tattoos.push({
    Name: overlay.Name,
    LocalizedName: overlay.LocalizedName,
    HashNameMale: overlay.HashNameMale,
    HashNameFemale: overlay.HashNameFemale,
    Zone: overlay.Zone,
    ZoneID: overlay.ZoneID,
    Price: overlay.Price,
    Collection: "mpvinewood_overlays"
  });
}
for (const overlay of MPSUM2_OVERLAYS) {
  Tattoos.push({
    Name: overlay.Name,
    LocalizedName: overlay.LocalizedName,
    HashNameMale: overlay.HashNameMale,
    HashNameFemale: overlay.HashNameFemale,
    Zone: overlay.Zone,
    ZoneID: overlay.ZoneID,
    Price: overlay.Price,
    Collection: "mpsum2_overlays"
  });
}
for (const overlay of MPSTUNT_OVERLAYS) {
  Tattoos.push({
    Name: overlay.Name,
    LocalizedName: overlay.LocalizedName,
    HashNameMale: overlay.HashNameMale,
    HashNameFemale: overlay.HashNameFemale,
    Zone: overlay.Zone,
    ZoneID: overlay.ZoneID,
    Price: overlay.Price,
    Collection: "mpstunt_overlays"
  });
}
for (const overlay of MPSMUGGLER_OVERLAYS) {
  Tattoos.push({
    Name: overlay.Name,
    LocalizedName: overlay.LocalizedName,
    HashNameMale: overlay.HashNameMale,
    HashNameFemale: overlay.HashNameFemale,
    Zone: overlay.Zone,
    ZoneID: overlay.ZoneID,
    Price: overlay.Price,
    Collection: "mpsmuggler_overlays"
  });
}
for (const overlay of MPSECURITY_OVERLAYS) {
  Tattoos.push({
    Name: overlay.Name,
    LocalizedName: overlay.LocalizedName,
    HashNameMale: overlay.HashNameMale,
    HashNameFemale: overlay.HashNameFemale,
    Zone: overlay.Zone,
    ZoneID: overlay.ZoneID,
    Price: overlay.Price,
    Collection: "mpsecurity_overlays"
  });
}
for (const overlay of MPLUXE2_OVERLAYS) {
  Tattoos.push({
    Name: overlay.Name,
    LocalizedName: overlay.LocalizedName,
    HashNameMale: overlay.HashNameMale,
    HashNameFemale: overlay.HashNameFemale,
    Zone: overlay.Zone,
    ZoneID: overlay.ZoneID,
    Price: overlay.Price,
    Collection: "mpluxe2_overlays"
  });
}
for (const overlay of MPLUXE_OVERLAYS) {
  Tattoos.push({
    Name: overlay.Name,
    LocalizedName: overlay.LocalizedName,
    HashNameMale: overlay.HashNameMale,
    HashNameFemale: overlay.HashNameFemale,
    Zone: overlay.Zone,
    ZoneID: overlay.ZoneID,
    Price: overlay.Price,
    Collection: "mpluxe_overlays"
  });
}
for (const overlay of MPLOWRIDER2_OVERLAYS) {
  Tattoos.push({
    Name: overlay.Name,
    LocalizedName: overlay.LocalizedName,
    HashNameMale: overlay.HashNameMale,
    HashNameFemale: overlay.HashNameFemale,
    Zone: overlay.Zone,
    ZoneID: overlay.ZoneID,
    Price: overlay.Price,
    Collection: "mplowrider2_overlays"
  });
}
for (const overlay of MPLOWRIDER_OVERLAYS) {
  Tattoos.push({
    Name: overlay.Name,
    LocalizedName: overlay.LocalizedName,
    HashNameMale: overlay.HashNameMale,
    HashNameFemale: overlay.HashNameFemale,
    Zone: overlay.Zone,
    ZoneID: overlay.ZoneID,
    Price: overlay.Price,
    Collection: "mplowrider_overlays"
  });
}
for (const overlay of MPIMPORTEXPORT_OVERLAYS) {
  Tattoos.push({
    Name: overlay.Name,
    LocalizedName: overlay.LocalizedName,
    HashNameMale: overlay.HashNameMale,
    HashNameFemale: overlay.HashNameFemale,
    Zone: overlay.Zone,
    ZoneID: overlay.ZoneID,
    Price: overlay.Price,
    Collection: "mpimportexport_overlays"
  });
}
for (const overlay of MPHIPSTER_OVERLAYS) {
  Tattoos.push({
    Name: overlay.Name,
    LocalizedName: overlay.LocalizedName,
    HashNameMale: overlay.HashNameMale,
    HashNameFemale: overlay.HashNameFemale,
    Zone: overlay.Zone,
    ZoneID: overlay.ZoneID,
    Price: overlay.Price,
    Collection: "mphipster_overlays"
  });
}
for (const overlay of MPHEIST4_OVERLAYS) {
  Tattoos.push({
    Name: overlay.Name,
    LocalizedName: overlay.LocalizedName,
    HashNameMale: overlay.HashNameMale,
    HashNameFemale: overlay.HashNameFemale,
    Zone: overlay.Zone,
    ZoneID: overlay.ZoneID,
    Price: overlay.Price,
    Collection: "mpheist4_overlays"
  });
}
for (const overlay of MPHEIST3_OVERLAYS) {
  Tattoos.push({
    Name: overlay.Name,
    LocalizedName: overlay.LocalizedName,
    HashNameMale: overlay.HashNameMale,
    HashNameFemale: overlay.HashNameFemale,
    Zone: overlay.Zone,
    ZoneID: overlay.ZoneID,
    Price: overlay.Price,
    Collection: "mpheist3_overlays"
  });
}
for (const overlay of MPGUNRUNNING_OVERLAYS) {
  Tattoos.push({
    Name: overlay.Name,
    LocalizedName: overlay.LocalizedName,
    HashNameMale: overlay.HashNameMale,
    HashNameFemale: overlay.HashNameFemale,
    Zone: overlay.Zone,
    ZoneID: overlay.ZoneID,
    Price: overlay.Price,
    Collection: "mpgunrunning_overlays"
  });
}
for (const overlay of MPCHRISTMAS2018_OVERLAYS) {
  Tattoos.push({
    Name: overlay.Name,
    LocalizedName: overlay.LocalizedName,
    HashNameMale: overlay.HashNameMale,
    HashNameFemale: overlay.HashNameFemale,
    Zone: overlay.Zone,
    ZoneID: overlay.ZoneID,
    Price: overlay.Price,
    Collection: "mpchristmas2018_overlays"
  });
}
for (const overlay of MPCHRISTMAS2017_OVERLAYS) {
  Tattoos.push({
    Name: overlay.Name,
    LocalizedName: overlay.LocalizedName,
    HashNameMale: overlay.HashNameMale,
    HashNameFemale: overlay.HashNameFemale,
    Zone: overlay.Zone,
    ZoneID: overlay.ZoneID,
    Price: overlay.Price,
    Collection: "mpchristmas2017_overlays"
  });
}
for (const overlay of MPCHRISTMAS3_OVERLAYS) {
  Tattoos.push({
    Name: overlay.Name,
    LocalizedName: overlay.LocalizedName,
    HashNameMale: overlay.HashNameMale,
    HashNameFemale: overlay.HashNameFemale,
    Zone: overlay.Zone,
    ZoneID: overlay.ZoneID,
    Price: overlay.Price,
    Collection: "mpchristmas3_overlays"
  });
}
for (const overlay of MPCHRISTMAS2_OVERLAYS) {
  Tattoos.push({
    Name: overlay.Name,
    LocalizedName: overlay.LocalizedName,
    HashNameMale: overlay.HashNameMale,
    HashNameFemale: overlay.HashNameFemale,
    Zone: overlay.Zone,
    ZoneID: overlay.ZoneID,
    Price: overlay.Price,
    Collection: "mpchristmas2_overlays"
  });
}
for (const overlay of MPBUSINESS_OVERLAYS) {
  Tattoos.push({
    Name: overlay.Name,
    LocalizedName: overlay.LocalizedName,
    HashNameMale: overlay.HashNameMale,
    HashNameFemale: overlay.HashNameFemale,
    Zone: overlay.Zone,
    ZoneID: overlay.ZoneID,
    Price: overlay.Price,
    Collection: "mpbusiness_overlays"
  });
}
for (const overlay of MPBIKER_OVERLAYS) {
  Tattoos.push({
    Name: overlay.Name,
    LocalizedName: overlay.LocalizedName,
    HashNameMale: overlay.HashNameMale,
    HashNameFemale: overlay.HashNameFemale,
    Zone: overlay.Zone,
    ZoneID: overlay.ZoneID,
    Price: overlay.Price,
    Collection: "mpbiker_overlays"
  });
}
for (const overlay of MPBEACH_OVERLAYS) {
  Tattoos.push({
    Name: overlay.Name,
    LocalizedName: overlay.LocalizedName,
    HashNameMale: overlay.HashNameMale,
    HashNameFemale: overlay.HashNameFemale,
    Zone: overlay.Zone,
    ZoneID: overlay.ZoneID,
    Price: overlay.Price,
    Collection: "mpbeach_overlays"
  });
}
for (const overlay of MPAIRRACES_OVERLAYS) {
  Tattoos.push({
    Name: overlay.Name,
    LocalizedName: overlay.LocalizedName,
    HashNameMale: overlay.HashNameMale,
    HashNameFemale: overlay.HashNameFemale,
    Zone: overlay.Zone,
    ZoneID: overlay.ZoneID,
    Price: overlay.Price,
    Collection: "mpairraces_overlays"
  });
}

// ../../ProjectStarboy/src/server/shared/clotheshop.ts
var CONFIG_CLOTHES = JSON.parse(LoadResourceFile("ProjectStarboy", "data/json/clotheshop-config.json"));

// ../../ProjectStarboy/src/server/shared/weapon.ts
var ConfigWeaponShop = [
  {
    coords: [23.666833877563477, -1105.4969482421875, 29.797027587890625, 159.21778869628906],
    coordsAmmo: [18.07231330871582, -1111.124267578125, 29.797033309936523, 63.99946212768555],
    pedModel: "s_m_m_ammucountry",
    pedRelationShip: "gunshop",
    voiceName: "S_M_M_AMMUCOUNTRY_WHITE_MINI_01",
    items: [
      {
        type: "weapon",
        price: 3e4,
        damage: 9,
        range: 15,
        firerate: 10,
        accuracy: 17,
        control: 15,
        name: "WEAPON_PISTOL"
      },
      {
        type: "weapon",
        price: 3e5,
        damage: 9,
        range: 15,
        firerate: 20,
        accuracy: 20,
        control: 15,
        name: "WEAPON_APPISTOL"
      }
    ],
    ammos: [
      {
        name: "AMMO_PISTOL",
        label: "Đạn súng lục(5$)",
        price: 5,
        category: 7 /* ammo */
      },
      {
        name: "AMMO_RIFLE",
        label: "Đạn rifle(10$)",
        price: 10,
        category: 7 /* ammo */
      },
      {
        name: "weapon_fixkit",
        label: "Bộ sửa súng(50.000$)",
        price: 5e4,
        category: 7 /* ammo */
      }
    ]
  },
  {
    coords: [-331.9503173828125, 6084.58642578125, 31.454761505126953, 228.2054901123047],
    coordsAmmo: [-328.61871337890625, 6078.63037109375, 31.454753875732422, 132.7339324951172],
    pedModel: "s_m_m_ammucountry",
    pedRelationShip: "gunshop",
    voiceName: "S_M_M_AMMUCOUNTRY_WHITE_MINI_01",
    items: [
      {
        type: "weapon",
        price: 3e4,
        damage: 9,
        range: 15,
        firerate: 10,
        accuracy: 17,
        control: 15,
        name: "WEAPON_PISTOL"
      },
      {
        type: "weapon",
        price: 3e5,
        damage: 9,
        range: 15,
        firerate: 20,
        accuracy: 20,
        control: 15,
        name: "WEAPON_APPISTOL"
      }
    ],
    ammos: [
      {
        name: "AMMO_PISTOL",
        label: "Đạn súng lục(5$)",
        price: 5,
        category: 7 /* ammo */
      },
      {
        name: "AMMO_RIFLE",
        label: "Đạn rifle(10$)",
        price: 10,
        category: 7 /* ammo */
      },
      {
        name: "weapon_fixkit",
        label: "Bộ sửa súng(50.000$)",
        price: 5e4,
        category: 7 /* ammo */
      }
    ]
  },
  {
    coords: [-3174.03515625, 1087.376953125, 20.838722229003906, 251.8140106201172],
    coordsAmmo: [-3168.176025390625, 1083.476318359375, 20.838722229003906, 161.9574737548828],
    pedModel: "s_m_m_ammucountry",
    pedRelationShip: "gunshop",
    voiceName: "S_M_M_AMMUCOUNTRY_WHITE_MINI_01",
    items: [
      {
        type: "weapon",
        price: 3e4,
        damage: 9,
        range: 15,
        firerate: 10,
        accuracy: 17,
        control: 15,
        name: "WEAPON_PISTOL"
      },
      {
        type: "weapon",
        price: 3e5,
        damage: 9,
        range: 15,
        firerate: 20,
        accuracy: 20,
        control: 15,
        name: "WEAPON_APPISTOL"
      }
    ],
    ammos: [
      {
        name: "AMMO_PISTOL",
        label: "Đạn súng lục(5$)",
        price: 5,
        category: 7 /* ammo */
      },
      {
        name: "AMMO_RIFLE",
        label: "Đạn rifle(10$)",
        price: 10,
        category: 7 /* ammo */
      },
      {
        name: "weapon_fixkit",
        label: "Bộ sửa súng(50.000$)",
        price: 5e4,
        category: 7 /* ammo */
      }
    ]
  },
  {
    coords: [1692.5186767578125, 3761.25341796875, 34.705360412597656, 216.5233154296875],
    coordsAmmo: [1695.5611572265625, 3754.720947265625, 34.705352783203125, 134.62782287597656],
    pedModel: "s_m_m_ammucountry",
    pedRelationShip: "gunshop",
    voiceName: "S_M_M_AMMUCOUNTRY_WHITE_MINI_01",
    items: [
      {
        type: "weapon",
        price: 3e4,
        damage: 9,
        range: 15,
        firerate: 10,
        accuracy: 17,
        control: 15,
        name: "WEAPON_PISTOL"
      },
      {
        type: "weapon",
        price: 3e5,
        damage: 9,
        range: 15,
        firerate: 20,
        accuracy: 20,
        control: 15,
        name: "WEAPON_APPISTOL"
      }
    ],
    ammos: [
      {
        name: "AMMO_PISTOL",
        label: "Đạn súng lục(5$)",
        price: 5,
        category: 7 /* ammo */
      },
      {
        name: "AMMO_RIFLE",
        label: "Đạn rifle(10$)",
        price: 10,
        category: 7 /* ammo */
      },
      {
        name: "weapon_fixkit(50.000$)",
        label: "Bộ sửa súng",
        price: 5e4,
        category: 7 /* ammo */
      }
    ]
  }
];

// ../../ProjectStarboy/src/server/services/i18n.service.ts
var I18n = class extends AppService {
  constructor() {
    super("I18n");
    import_i18next.default.init(
      {
        interpolation: { escapeValue: false },
        fallbackLng: "vi",
        defaultNS: "common",
        resources: {
          vi: {
            common: common_vi
          }
        }
      },
      (err, t) => {
        if (err)
          return console.log("something went wrong loading", err);
        this.t = t;
      }
    );
  }
};
I18n = __decorateClass([
  (0, import_starboy_framework.Injectable)()
], I18n);

// ../../ProjectStarboy/src/server/class/item.class.ts
var cItem = class extends AppClass2 {
  constructor(data, slot, controller) {
    super("Item");
    this._data = data;
    this._controller = controller;
    this._slot = slot;
  }
  get name() {
    return this._data.name;
  }
  get data() {
    return this._data;
  }
  get type() {
    return this._data.type;
  }
  get amount() {
    return this._data.amount;
  }
  set amount(amount) {
    this._data.amount = amount;
  }
  get slot() {
    return this._slot;
  }
  set slot(slot) {
    this._slot = slot;
  }
  set controller(controller) {
    this._controller = controller;
  }
  getLogInfo() {
    return {
      name: this.name,
      type: this.type,
      inventoryId: this._controller.id,
      inventoryName: this._controller.name,
      inventoryOwner: this._controller.ownerInfo,
      inventoryType: this._controller.type
    };
  }
};
var cWeaponItem = class extends cItem {
  constructor(data, slot, controller) {
    if (data.stability === -1) {
      data.stability = 1e4;
    }
    super(data, slot, controller);
  }
  get uuid() {
    return this._data.uuid;
  }
  get ammo() {
    return this._data.ammo;
  }
  set ammo(ammo) {
    this._data.ammo = ammo;
  }
  get stability() {
    return this._data.stability;
  }
  set stability(stability) {
    this._data.stability = stability;
  }
  get component() {
    return this._data.component;
  }
  set component(component) {
    this._data.component = component;
  }
  get amount() {
    return this._data.amount;
  }
  set amount(v) {
    this._data.amount;
    return;
  }
  reduceStability(amount) {
    this.stability -= amount;
    if (this.stability < 0) {
      this.stability = 0;
    }
  }
  increaseStability(amount) {
    this.stability += amount;
    if (this.stability > 1e4) {
      this.stability = 1e4;
    }
  }
  setData(data) {
    if (data.stability) {
      this.stability = data.stability;
    }
    if (data.ammo !== void 0) {
      this.ammo = data.ammo;
    }
  }
  getLogInfo() {
    return {
      name: this.name,
      type: this.type,
      inventoryId: this._controller.id,
      inventoryName: this._controller.name,
      inventoryOwner: this._controller.ownerInfo,
      inventoryType: this._controller.type,
      ammo: this.ammo,
      stability: this.stability,
      uuid: this.uuid
    };
  }
};
var cStackableItem = class extends cItem {
  constructor(data, slot, controller) {
    super(data, slot, controller);
  }
  get uuid() {
    return "";
  }
};
var cUnStackableItem = class extends cItem {
  constructor(data, slot, controller) {
    super(data, slot, controller);
  }
  get uuid() {
    return this._data.uuid;
  }
  get stability() {
    return this._data.stability;
  }
  set stability(stability) {
    this._data.stability = stability;
  }
  get expiration() {
    return this._data.expiration;
  }
  set expiration(expiration) {
    this._data.expiration = expiration;
  }
  setData(data) {
    if (data.stability) {
      this.stability = data.stability;
    }
    if (data.expiration) {
      this.expiration = data.expiration;
    }
  }
  getLogInfo() {
    return {
      name: this.name,
      type: this.type,
      inventoryId: this._controller.id,
      inventoryName: this._controller.name,
      inventoryOwner: this._controller.ownerInfo,
      inventoryType: this._controller.type,
      stability: this.stability,
      uuid: this.uuid,
      expiration: this.expiration
    };
  }
};
var initItem = (data, slot, controller) => {
  if (data.type === "weapon") {
    return new cWeaponItem(data, slot, controller);
  }
  if (isUnStackableItem(data)) {
    return new cUnStackableItem(data, slot, controller);
  }
  return new cStackableItem(data, slot, controller);
};

// ../../ProjectStarboy/src/server/services/inventory.service.ts
var import_starboy_framework7 = require("starboy-framework");

// ../../ProjectStarboy/src/server/models/inventory.model.ts
var import_mongoose2 = require("mongoose");
var import_crypto = require("crypto");
var inventoryWeaponItemSchema = new import_mongoose2.Schema({
  uuid: { type: String, default: () => (0, import_crypto.randomUUID)() },
  name: { type: String, required: true },
  stability: { type: Number, required: true, default: -1 },
  type: { type: String, enum: ["weapon"], default: "weapon" },
  ammo: { type: Number, required: true, default: 0 },
  component: {
    skin: { type: String },
    scope: { type: String },
    suppressor: { type: String },
    clip: { type: String },
    grip: { type: String },
    flashlight: { type: String }
  },
  amount: { type: Number, enum: [1], default: 1 }
});
var inventoryStackableItem = new import_mongoose2.Schema({
  name: { type: String, required: true },
  amount: { type: Number, required: true, default: 1 },
  type: { type: String, enum: ["standard", "extend", "weapon-ammo"], default: "standard" }
});
var inventorySchema = new import_mongoose2.Schema({
  id: { type: String, required: true, index: true },
  owner: { type: String, required: true, index: true },
  data: {
    "0": { type: import_mongoose2.SchemaTypes.Mixed, default: null },
    "1": { type: import_mongoose2.SchemaTypes.Mixed, default: null },
    "2": { type: import_mongoose2.SchemaTypes.Mixed, default: null },
    "3": { type: import_mongoose2.SchemaTypes.Mixed, default: null },
    "4": { type: import_mongoose2.SchemaTypes.Mixed, default: null },
    "5": { type: import_mongoose2.SchemaTypes.Mixed, default: null },
    "6": { type: import_mongoose2.SchemaTypes.Mixed, default: null },
    "7": { type: import_mongoose2.SchemaTypes.Mixed, default: null },
    "8": { type: import_mongoose2.SchemaTypes.Mixed, default: null },
    "9": { type: import_mongoose2.SchemaTypes.Mixed, default: null },
    "10": { type: import_mongoose2.SchemaTypes.Mixed, default: null },
    "11": { type: import_mongoose2.SchemaTypes.Mixed, default: null },
    "12": { type: import_mongoose2.SchemaTypes.Mixed, default: null },
    "13": { type: import_mongoose2.SchemaTypes.Mixed, default: null },
    "14": { type: import_mongoose2.SchemaTypes.Mixed, default: null },
    "15": { type: import_mongoose2.SchemaTypes.Mixed, default: null },
    "16": { type: import_mongoose2.SchemaTypes.Mixed, default: null },
    "17": { type: import_mongoose2.SchemaTypes.Mixed, default: null },
    "18": { type: import_mongoose2.SchemaTypes.Mixed, default: null },
    "19": { type: import_mongoose2.SchemaTypes.Mixed, default: null },
    "20": { type: import_mongoose2.SchemaTypes.Mixed, default: null },
    "21": { type: import_mongoose2.SchemaTypes.Mixed, default: null },
    "22": { type: import_mongoose2.SchemaTypes.Mixed, default: null },
    "23": { type: import_mongoose2.SchemaTypes.Mixed, default: null },
    "24": { type: import_mongoose2.SchemaTypes.Mixed, default: null },
    "25": { type: import_mongoose2.SchemaTypes.Mixed, default: null },
    "26": { type: import_mongoose2.SchemaTypes.Mixed, default: null },
    "27": { type: import_mongoose2.SchemaTypes.Mixed, default: null },
    "28": { type: import_mongoose2.SchemaTypes.Mixed, default: null },
    "29": { type: import_mongoose2.SchemaTypes.Mixed, default: null },
    "30": { type: import_mongoose2.SchemaTypes.Mixed, default: null },
    "31": { type: import_mongoose2.SchemaTypes.Mixed, default: null },
    "32": { type: import_mongoose2.SchemaTypes.Mixed, default: null },
    "33": { type: import_mongoose2.SchemaTypes.Mixed, default: null },
    "34": { type: import_mongoose2.SchemaTypes.Mixed, default: null },
    "35": { type: import_mongoose2.SchemaTypes.Mixed, default: null },
    "36": { type: import_mongoose2.SchemaTypes.Mixed, default: null },
    "37": { type: import_mongoose2.SchemaTypes.Mixed, default: null },
    "38": { type: import_mongoose2.SchemaTypes.Mixed, default: null },
    "39": { type: import_mongoose2.SchemaTypes.Mixed, default: null },
    "40": { type: import_mongoose2.SchemaTypes.Mixed, default: null },
    "41": { type: import_mongoose2.SchemaTypes.Mixed, default: null },
    "42": { type: import_mongoose2.SchemaTypes.Mixed, default: null },
    "43": { type: import_mongoose2.SchemaTypes.Mixed, default: null },
    "44": { type: import_mongoose2.SchemaTypes.Mixed, default: null },
    "45": { type: import_mongoose2.SchemaTypes.Mixed, default: null },
    "46": { type: import_mongoose2.SchemaTypes.Mixed, default: null },
    "47": { type: import_mongoose2.SchemaTypes.Mixed, default: null },
    "48": { type: import_mongoose2.SchemaTypes.Mixed, default: null },
    "49": { type: import_mongoose2.SchemaTypes.Mixed, default: null },
    HAT: { type: import_mongoose2.SchemaTypes.Mixed, default: null },
    GLASS: { type: import_mongoose2.SchemaTypes.Mixed, default: null },
    EAR: { type: import_mongoose2.SchemaTypes.Mixed, default: null },
    WATCH: { type: import_mongoose2.SchemaTypes.Mixed, default: null },
    BRACELET: { type: import_mongoose2.SchemaTypes.Mixed, default: null },
    MASK: { type: import_mongoose2.SchemaTypes.Mixed, default: null },
    TORSOR: { type: import_mongoose2.SchemaTypes.Mixed, default: null },
    LEG: { type: import_mongoose2.SchemaTypes.Mixed, default: null },
    BAG: { type: import_mongoose2.SchemaTypes.Mixed, default: null },
    SHOES: { type: import_mongoose2.SchemaTypes.Mixed, default: null },
    ACCESSORY: { type: import_mongoose2.SchemaTypes.Mixed, default: null },
    UNDERSHIRT: { type: import_mongoose2.SchemaTypes.Mixed, default: null },
    KEVLAR: { type: import_mongoose2.SchemaTypes.Mixed, default: null },
    DECAL: { type: import_mongoose2.SchemaTypes.Mixed, default: null },
    TOP: { type: import_mongoose2.SchemaTypes.Mixed, default: null }
  },
  maxWeight: { type: Number, required: true, default: 1e4 },
  type: { type: String, enum: ["player", "trunk", "stash", "faction"], default: "player" }
});
var inventoryModel = (0, import_mongoose2.model)("Inventory", inventorySchema);
var inventory_model_default = inventoryModel;

// ../../ProjectStarboy/src/server/class/inventory.class.ts
var import_container5 = __toESM(require("starboy-framework/dist/packages/core/container"));

// ../../ProjectStarboy/src/server/services/discord.service.ts
var import_starboy_framework2 = require("starboy-framework");
var import_discord = require("discord.js");

// ../../ProjectStarboy/src/server/config/discord.config.ts
var DiscordConfig = {
  AppId: "1090974257997172766",
  publicKey: "5f45bbccdd803562927813b5221e7611f9fec1b3b2193bda058abc1c60122aa3",
  token: "MTA5MDk3NDI1Nzk5NzE3Mjc2Ng.GCoYA4.hrkRpupBwJ2m-SGPKg6BlsnBK-oubzyKRSESv4"
};
var WebhookChannels = [
  "userImage",
  "phone-image",
  "chat",
  "playerJoining",
  "out",
  "login",
  "kill",
  "givecar",
  "givemoney",
  "banking",
  "new-weapon",
  "giveweapon",
  "dropweapon",
  "useitem",
  "giveitem",
  "dropitem",
  "putintotrunk",
  "getfromtrunk",
  "policestash",
  "ambulancestash",
  "mechanicstash",
  "playerDropped",
  "register",
  "transaction",
  "policeconfiscate",
  "familystash",
  "crafting"
];
var WebhookConfig = {
  chat: "https://discord.com/api/webhooks/1135516234792841236/NGo-5rDBtqz5MjTw9pGCz_py_H0qsvw6mS0PDA4PjbqSjoll9oi9GHFk8BGJSU-l_O28",
  "phone-image": "https://discord.com/api/webhooks/1115637194237939842/a_6L5y-2oZzYoQDqp6XnZ_M13JBkfUn9nXnZiFnqNqJ8c8Kvh3wkjL6jtuXtEn9fQ-s1",
  userImage: "https://discord.com/api/webhooks/1090971986529886298/DODfBK9gyd9tOSTq9H2PcB7gLefU2LF08d0Wu7JWNij9MyDFOwxLMqsN6PDXTS0Npsis",
  playerJoining: "https://discord.com/api/webhooks/1135524352809521202/2UkxuO0EoXjfC7LbdOEzT8cwXu_ymqdG23a7lIXXDip4yEdTUUGUc_-ZVW6Wglaq5-qG",
  out: "https://discord.com/api/webhooks/1135524509370290197/j_BIDD97BdJP332o_b1l8-LNAMst988U6NsX6TAhP2qLzr5pdJOOzLOmqPmeKQmjLlE4",
  login: "https://discord.com/api/webhooks/1135524684339871774/ICBoUcJ_NSSQKOmSpC-UNnBmOeIa91oR_HdtSAfBaf1tnBjgE-igJzYrIwjkGyYquhKw",
  kill: "https://discord.com/api/webhooks/1135524773204611112/x_rKQKMPYkANu8AgzOkpO6ITU4PK2DBXtRtP-mYZVpb5lWlWa1Wvj9hsc2UsZ5St1oIb",
  givecar: "https://discord.com/api/webhooks/1135524863247917118/hTRa2o83bVNk4oIRMhyUicaZOB9ZKfeLL4wBLui5Mwut_l9BIHZIvj1ZRL5uDgGm3F-Y",
  givemoney: "https://discord.com/api/webhooks/1135524963315613696/-NNRai41feUjG5PeDPWwO3N5wvibdFpqhZ5J0EqsKmNfXBhJDH3AyyC1ryARfKT_F-Uk",
  banking: "https://discord.com/api/webhooks/1135525049156259911/x0c739gY229P_WTd0uKxak5fn0NAppXMdIWn_j5CJHheZcPS5FqdufK-GARbH7uAKAYR",
  "new-weapon": "https://discord.com/api/webhooks/1135525230132088843/YBGm2p6-7qbpqLaJTkZRhsx9Kv8E8neUu5j03NNd2ZQORXOle6-KNUzbORuaBdNvFORO",
  giveweapon: "https://discord.com/api/webhooks/1135525338194116618/tcQwmJbQmA9F2MyvcnaDEXxhAIHF8oC-AUVSvFTe3SKwayU1iZirZDmF5TT33g83z3mT",
  dropweapon: "https://discord.com/api/webhooks/1135525413699997766/7h6PpuC2z3UdnwdOYDXdzux1pVvpYjHvWdcyXnowb8NDkmLglzd0O0IaillmfuhsjFBN",
  useitem: "https://discord.com/api/webhooks/1135525535666147348/j8tF4e2JtLER6MO-IU53XB-csDMqObWx69uTKoX6ChQHmIHtzej9G9u92wPtKtjLRWi_",
  giveitem: "https://discord.com/api/webhooks/1135525674061414520/lbE_IfBOufhx6ARserHZGqcfLtfXHpuix9dDyIlZdQMSh3X2b6HTmf2IA4FKTH4rOH3j",
  dropitem: "https://discord.com/api/webhooks/1135525751077216387/uSKCYizCC0s4e1h5gOEcbxuFrvThaqwwCBtLaFFZa_JpUHh5_VZYH7vHG3We3jYwRbkc",
  putintotrunk: "https://discord.com/api/webhooks/1135526180980789343/wGsD8VIUoXyvRFcbaEd3fq0DGjHa_tt-bMgNP_i-d7qgsbPEYLjDkurOgGB91aa9CzUl",
  getfromtrunk: "https://discord.com/api/webhooks/1135526246692954155/Ed-qxLh3omc4ew9kB-6cA6ALX7z3fhew5xlPDOKhgejiN__SZFwcAnhsSsnPc9LQST02",
  policestash: "https://discord.com/api/webhooks/1135526337113759804/040ZhhHd5CPAYDnKtlekluGVTZ7Ca0vXl8FsB76gbpzWWer7xqemGux5EYUMyaKCyQjm",
  ambulancestash: "https://discord.com/api/webhooks/1135526394764472320/kdRHv2x4XrYJkz3dsmu4RACMAdTnfsWBzXqIH8eRLNjeYqiTGB96vLW6SG8NiHcrNPJe",
  mechanicstash: "https://discord.com/api/webhooks/1135526441765838911/h_ZSjLv9XCeynM8HT92pw7SpbKmmZrMC1J1hrq_guTg-P3J7b1yiHVDxLVr_b-l7Rg9-",
  playerDropped: "https://discord.com/api/webhooks/1135531336162086963/wteG2xs1QdWa17EGD6SLG_9XToazrxJK-m1gAkQ_UZPOBSySefBZpDILUQyVSt3bFdA3",
  register: "https://discord.com/api/webhooks/1135532506846875770/D26gkLVDZ1MtIdM4_JJvVf2UXe5S-V0VNbMp8gZFSY5Zgwph3auw7oDca2IiqVV7YWkg",
  transaction: "https://discord.com/api/webhooks/1135592215574491196/R_rVnmSC1AyIAYZlZ268ehu2jufr29FkObdRqB1wTk6qCONIQTgU3aKCIM6Re64BmKHK",
  policeconfiscate: "https://discord.com/api/webhooks/1136596198036344904/u7XqU4yTlm9Re6j9PiPtic31nuPNRFngDzWkFwhRdvFrzEFDhIyBJdQflBNF0nuahjUq",
  familystash: "https://discord.com/api/webhooks/1138043771708252160/IsQ22kHltu5fyAgcwYYn7SXZGBz0CJWfDhoQqpgmdKeNT8JmyIjrm2NfkkV0OErPZZbF",
  crafting: "https://discord.com/api/webhooks/1141928119255715891/b25-dTOXxNkZeUhf34CMM_1NA3g36O0S0hyH_qVIMxXaJVP-6tANumRuYpbxusSJzzNE"
};

// ../../ProjectStarboy/src/server/services/discord.service.ts
var DiscordService = class extends AppService {
  constructor() {
    super("DiscordService");
    this.webhooks = /* @__PURE__ */ new Map();
    this.ready = false;
    this.commandHandler = /* @__PURE__ */ new Set();
    this.client = new import_discord.Client({ intents: "GUILDS" });
    this.client.on("ready", () => {
      var _a;
      this.ready = true;
      console.log(`Discord bot logged in as ${(_a = this.client.user) == null ? void 0 : _a.tag}!`);
    });
    this.client.on("error", (err) => console.log(err));
    this.client.login(DiscordConfig.token);
    this.client.on("interactionCreate", async (interaction) => {
      if (!interaction.isCommand())
        return;
      for (const command of this.commandHandler) {
        if (interaction.commandName === command.command) {
          const response = await command.handler();
          await interaction.reply(response);
          break;
        }
      }
    });
    WebhookChannels.forEach((channel) => {
      const webhookClient = new import_discord.WebhookClient({ url: WebhookConfig[channel] });
      this.webhooks.set(channel, webhookClient);
    });
    this.registerCommand("ping", "Replies with Pong!", () => {
      return "Pong!";
    });
  }
  registerCommand(command, description, handler) {
    this.commandHandler.add({ command, handler, description });
  }
  async sendWebhookLocalFile(data) {
    try {
      const webhook = this.webhooks.get(data.channel);
      if (webhook) {
        const response = await webhook.send({
          files: data.files
        });
        return response;
      }
    } catch (error) {
      console.log(error);
    }
  }
};
DiscordService = __decorateClass([
  (0, import_starboy_framework2.Injectable)()
], DiscordService);

// ../../ProjectStarboy/src/server/services/socket.service.ts
var import_starboy_framework3 = require("starboy-framework");
var import_socket = require("socket.io-client");
var SocketService = class extends AppService {
  constructor() {
    super("SocketService");
    this._host = GetConvar("socket", "ws://localhost:1248");
    this._socket = (0, import_socket.io)(`${this._host}/server`, {
      auth: {
        token: "6Srr^Edb@hZcWTAeCqu3hKz3buw4&zVuERCU&gAAyp!67Mj8HIWzHGX8kD$$V8AB"
      },
      reconnection: true,
      reconnectionDelay: 500
    });
    this._socket.on("connect", () => {
      this._socket.emit("REGISTER_SERVER", "");
    });
    this._tunnel = (0, import_socket.io)(`${this._host}/tunnel`, {
      auth: {
        token: "6Srr^Edb@hZcWTAeCqu3hKz3buw4&zVuERCU&gAAyp!67Mj8HIWzHGX8kD$$V8AB"
      },
      reconnection: true,
      reconnectionDelay: 500
    });
  }
  get tunnel() {
    return this._tunnel;
  }
  emit(eventName, target, ...args) {
    this._socket.emit(eventName, target, ...args);
  }
  on(eventName, callback) {
    this._socket.on(eventName, callback);
  }
  of(eventName, callback) {
    this._socket.off(eventName, callback);
  }
  onCallback(eventName, callback) {
    if (typeof eventName !== "string" || eventName.length === 0) {
      throw new Error("eventName is empty");
    }
    this.on(`_server_callback:${eventName}`, async (source2, ...data) => {
      const _source = source2;
      this.emit(`_server_response:${eventName}:${_source}`, _source, await callback(_source, ...data));
    });
  }
};
SocketService = __decorateClass([
  (0, import_starboy_framework3.Injectable)()
], SocketService);

// ../../ProjectStarboy/src/server/services/vehicle.service.ts
var import_starboy_framework4 = require("starboy-framework");

// ../../ProjectStarboy/src/server/class/vehicle.class.ts
var import_container = __toESM(require("starboy-framework/dist/packages/core/container"));

// ../../ProjectStarboy/src/server/models/vehicle.model.ts
var import_mongoose3 = require("mongoose");
var vehicleSchema = new import_mongoose3.Schema(
  {
    owner: { type: String, required: true },
    ownerType: { type: String, enum: ["player", "department", "family"], default: "player" },
    model: { type: Number, required: true },
    name: { type: String, required: true },
    label: { type: String },
    plate: { type: String, unique: true, required: true },
    impound: { type: Boolean, default: false },
    inGarage: { type: Boolean, default: false },
    garageIndex: { type: Number, default: 0 },
    slotIndex: { type: Number, default: 0 },
    properties: {
      health: { type: Number, default: 1e3 },
      engineHealth: { type: Number, default: 1e3 },
      dirtLevel: { type: Number, default: 4 },
      fuelLevel: { type: Number, default: 100 },
      colorPrimary: { type: Number },
      colorSecondary: { type: Number },
      customColorPrimary: {
        r: { type: Number, default: 0 },
        g: { type: Number, default: 0 },
        b: { type: Number, default: 0 }
      },
      customColorSecondary: {
        r: { type: Number, default: 0 },
        g: { type: Number, default: 0 },
        b: { type: Number, default: 0 }
      },
      pearlescentColor: { type: Number },
      wheelColor: { type: Number },
      wheels: { type: Number },
      windowTint: { type: Number },
      neonEnabled: { type: [Boolean], default: [false, false, false, false] },
      doorStatus: { type: [Boolean], default: [] },
      extras: {
        type: [Boolean],
        default: [false, false, false, false, false, false, false, false, false, false, false, false]
      },
      neonColor: { type: [Number], default: [0, 0, 0] },
      tyreSmokeColor: { type: [Number] },
      mods: {
        VMT_BUMPER_F: { type: Number },
        VMT_BUMPER_R: { type: Number },
        VMT_SKIRT: { type: Number },
        VMT_EXHAUST: { type: Number },
        VMT_CHASSIS: { type: Number },
        VMT_GRILL: { type: Number },
        VMT_BONNET: { type: Number },
        VMT_WING_L: { type: Number },
        VMT_WING_R: { type: Number },
        VMT_ROOF: { type: Number },
        VMT_ENGINE: { type: Number },
        VMT_BRAKES: { type: Number },
        VMT_GEARBOX: { type: Number },
        VMT_HORN: { type: Number },
        VMT_SUSPENSION: { type: Number },
        VMT_ARMOUR: { type: Number },
        VMT_NITROUS: { type: Number },
        VMT_TURBO: { type: Boolean },
        VMT_SUBWOOFER: { type: Number },
        VMT_TYRE_SMOKE: { type: Boolean },
        VMT_HYDRAULICS: { type: Number },
        VMT_XENON_LIGHTS: { type: Boolean },
        VMT_WHEELS: { type: Number },
        VMT_WHEELS_REAR_OR_HYDRAULICS: { type: Number },
        VMT_PLTHOLDER: { type: Number },
        VMT_PLTVANITY: { type: Number },
        VMT_INTERIOR1: { type: Number },
        VMT_INTERIOR2: { type: Number },
        VMT_INTERIOR3: { type: Number },
        VMT_INTERIOR4: { type: Number },
        VMT_INTERIOR5: { type: Number },
        VMT_SEATS: { type: Number },
        VMT_STEERING: { type: Number },
        VMT_KNOB: { type: Number },
        VMT_PLAQUE: { type: Number },
        VMT_ICE: { type: Number },
        VMT_TRUNK: { type: Number },
        VMT_HYDRO: { type: Number },
        VMT_ENGINEBAY1: { type: Number },
        VMT_ENGINEBAY2: { type: Number },
        VMT_ENGINEBAY3: { type: Number },
        VMT_CHASSIS2: { type: Number },
        VMT_CHASSIS3: { type: Number },
        VMT_CHASSIS4: { type: Number },
        VMT_CHASSIS5: { type: Number },
        VMT_DOOR_L: { type: Number },
        VMT_DOOR_R: { type: Number },
        VMT_LIVERY_MOD: { type: Number },
        VMT_LIGHTBAR: { type: Number },
        modLivery: { type: Number }
      },
      plateIndex: { type: Number, default: 0 }
    }
  },
  { timestamps: true }
);
var vehicleModel = (0, import_mongoose3.model)("Vehicle", vehicleSchema);
var vehicle_model_default = vehicleModel;

// ../../ProjectStarboy/src/shared/config/trunk.ts
var TrunkConfig = {
  defaultMaxWeight: 1e4,
  withName: {
    dubsta2: 5e4,
    bmw30JahreM32017wb: 5e4,
    bison: 1e5,
    camper: 1e5,
    gburrito: 1e5,
    journey: 1e5,
    minivan: 1e5,
    youga: 1e5,
    rumpo: 1e5,
    vanz450: 3e5,
    ["1500ghoul"]: 3e5,
    titan17: 3e5,
    ["2017bmwm5"]: 3e4,
    ["23rs7"]: 3e4,
    rsetrongt21: 3e4,
    m3bxane: 5e4
  },
  withHash: {},
  withPlate: {}
};
var trunk_default = TrunkConfig;

// ../../ProjectStarboy/src/server/class/vehicle.class.ts
var cVehicle = class extends AppClass2 {
  constructor({ _id, id, owner, model: model18, name, plate, properties, impound, inGarage, garageIndex, slotIndex, label }) {
    super("Vehicle");
    this._accessPermissions = /* @__PURE__ */ new Set();
    this.playersService = import_container.default.get(PlayersService);
    this.inventoryService = import_container.default.get(InventoryService);
    this._id = _id ? _id.toString() : void 0;
    this.id = id;
    this.owner = owner.toString();
    this.model = model18;
    this.name = name;
    this.plate = plate;
    this.properties = properties || {};
    this.impound = impound;
    this.inGarage = inGarage || false;
    this.garageIndex = garageIndex !== void 0 ? garageIndex : -1;
    this.slotIndex = slotIndex !== void 0 ? slotIndex : -1;
    this.label = label;
    this.onInit();
  }
  get isRentVehicle() {
    return this._id === void 0;
  }
  async changeLabel(newLabel) {
    this.label = newLabel;
    await vehicle_model_default.findByIdAndUpdate(this._id, { label: newLabel });
  }
  async getOwner() {
    return await this.playersService.getPlayerByDataId(this.owner);
  }
  async onInit() {
    if (!this.isRentVehicle && this._id) {
      const maxWeight = trunk_default.withName[this.name] || trunk_default.withHash[this.model] || trunk_default.withPlate[this.plate] || trunk_default.defaultMaxWeight;
      this._inventory = await this.inventoryService.getInventory(this._id, maxWeight, "trunk");
    }
    if (!this._id) {
      const player = this.playersService.getPlayer(this.owner);
      if (!player)
        return;
      this.addAccessPermission(player.id);
    } else {
      const player = await this.playersService.getPlayerByDataId(this.owner);
      if (!player)
        return;
      this.addAccessPermission(player.id);
    }
  }
  setProperties() {
    if (!this.vehicle || !DoesEntityExist(this.vehicle))
      return;
    if (this.properties.colorPrimary && this.properties.colorSecondary) {
      SetVehicleColours(this.vehicle, this.properties.colorPrimary, this.properties.colorSecondary);
    }
    if (this.properties.dirtLevel) {
      SetVehicleDirtLevel(this.vehicle, this.properties.dirtLevel);
    }
    if (this.vehicle) {
      this.applyProps();
    }
  }
  async spawn({ coords, heading }) {
    if (this.vehicle && DoesEntityExist(this.vehicle)) {
      this.despawn();
    }
    if (this.coords === void 0 && coords === void 0) {
      return;
    }
    if (coords) {
      this.coords = coords;
    }
    if (heading) {
      this.heading = heading;
    }
    if (this.coords === void 0)
      return;
    this.vehicle = CreateVehicle(this.model, this.coords[0], this.coords[1], this.coords[2], this.heading || 0, true, true);
    while (!DoesEntityExist(this.vehicle)) {
      await Sleep(100);
    }
    if (this._id) {
      Entity(this.vehicle).state._id = this._id;
    }
    if (this._inventory) {
      Entity(this.vehicle).state.inventoryId = this._inventory.id;
    }
    Entity(this.vehicle).state.plate = this.plate;
    Entity(this.vehicle).state.owner = this.owner;
    Entity(this.vehicle).state.keys = Array.from(this._accessPermissions);
    if (this.properties.fuelLevel) {
      Entity(this.vehicle).state.fuelLevel = this.properties.fuelLevel;
    }
    this.applyProps();
    this.addStateBagHandler();
    return this.vehicle;
  }
  get data() {
    return {
      _id: this._id,
      id: this.id,
      owner: this.owner,
      model: this.model,
      name: this.name,
      plate: this.plate,
      properties: this.properties,
      impound: this.impound,
      inGarage: this.inGarage,
      garageIndex: this.garageIndex,
      slotIndex: this.slotIndex,
      label: this.label
    };
  }
  get networkId() {
    if (!this.vehicle)
      return 0;
    return NetworkGetNetworkIdFromEntity(this.vehicle);
  }
  addStateBagHandler() {
    if (!this.vehicle)
      return;
    this.removeStateBagHandler();
    this._stateBagHandler = AddStateBagChangeHandler(null, `entity:${this.networkId}`, async (bagName, key, value, reserved, replicated) => {
      if (!this.vehicle)
        return;
      this.properties[key] = value;
      if (this._saveTimeout) {
        clearTimeout(this._saveTimeout);
        delete this._saveTimeout;
      }
      this._saveTimeout = setTimeout(() => {
        clearTimeout(this._saveTimeout);
        delete this._saveTimeout;
        this.saveField("properties");
      }, 5e3);
    });
  }
  removeStateBagHandler() {
    if (this._stateBagHandler) {
      RemoveStateBagChangeHandler(this._stateBagHandler);
      delete this._stateBagHandler;
    }
  }
  applyProps() {
    if (!this.vehicle)
      return;
    if (this.properties.health)
      SetVehicleBodyHealth(this.vehicle, this.properties.health + 0);
    if (this.properties.colorPrimary !== void 0 && this.properties.colorSecondary !== void 0) {
      SetVehicleColours(this.vehicle, this.properties.colorPrimary, this.properties.colorSecondary);
    }
    if (this.properties.dirtLevel)
      SetVehicleDirtLevel(this.vehicle, this.properties.dirtLevel);
    SetVehicleNumberPlateText(this.vehicle, this.plate);
    if (this.properties.customColorPrimary && this.properties.customColorPrimary.r) {
      const color = this.properties.customColorPrimary;
      SetVehicleCustomPrimaryColour(this.vehicle, color.r, color.g, color.b);
    }
    if (this.properties.customColorSecondary && this.properties.customColorSecondary.r) {
      const color = this.properties.customColorSecondary;
      SetVehicleCustomSecondaryColour(this.vehicle, color.r, color.g, color.b);
    }
  }
  despawn() {
    if (this.vehicle) {
      DeleteEntity(this.vehicle);
      delete this.vehicle;
      this.removeStateBagHandler();
      this.saveField("properties");
    }
  }
  impoundVehicle() {
    this.impound = true;
    this.despawn();
    this.saveField("impound");
  }
  setParked(status) {
    this.inGarage = status;
    this.saveField("inGarage");
  }
  setGarage(garageIndex, slotIndex) {
    this.garageIndex = garageIndex;
    this.slotIndex = slotIndex;
    this.saveField("garageIndex");
    this.saveField("slotIndex");
  }
  updateProps(props) {
    this.properties = props;
    this.saveField("properties");
  }
  async saveField(field) {
    if (!this._id)
      return;
    await vehicle_model_default.findByIdAndUpdate(this._id, {
      [field]: this[field]
    });
  }
  addAccessPermission(playerId) {
    this._accessPermissions.add(playerId);
    if (this.vehicle && DoesEntityExist(this.vehicle)) {
      Entity(this.vehicle).state.keys = Array.from(this._accessPermissions);
    }
  }
  removeAccessPermission(playerId) {
    this._accessPermissions.delete(playerId);
    if (this.vehicle && DoesEntityExist(this.vehicle)) {
      Entity(this.vehicle).state.keys = Array.from(this._accessPermissions);
    }
  }
  isOwnedBy(owner) {
    if (this.owner === owner)
      return true;
    return false;
  }
  canAccess(playerId) {
    for (const _playerId of this._accessPermissions) {
      if (_playerId === playerId)
        return { status: 1 /* SUCCESS */, data: void 0 };
    }
    return { status: 0 /* FAILED */, message: "Bạn không có quyền truy cập" };
  }
};

// ../../ProjectStarboy/src/server/utils/util.ts
function makeid(length) {
  let result = "";
  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  const charactersLength = characters.length;
  let counter = 0;
  while (counter < length) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
    counter += 1;
  }
  return result;
}

// ../../ProjectStarboy/src/server/services/vehicle.service.ts
var VehicleService = class extends AppService {
  constructor(i18n) {
    super("VehicleService");
    this.i18n = i18n;
    this.vehicles = /* @__PURE__ */ new Set();
    this.vehicleModel = vehicle_model_default;
    this._rentingVehicles = /* @__PURE__ */ new Set();
  }
  onPlayerDrop(player) {
    this.removeRentVehicle(player.source);
  }
  removeRentVehicle(playerSrc) {
    for (const rentVehicle of this._rentingVehicles) {
      if (rentVehicle.renter === playerSrc) {
        this.vehicles.delete(rentVehicle.vehicle);
        rentVehicle.vehicle.despawn();
        this._rentingVehicles.delete(rentVehicle);
        return;
      }
    }
  }
  async createRentVehicle(player, vehicleName, position, heading) {
    const vehicle = new cVehicle({
      owner: player.source,
      model: GetHashKey(vehicleName),
      name: vehicleName,
      plate: "THUE",
      properties: {},
      inGarage: false,
      garageIndex: 0,
      slotIndex: 0
    });
    this.vehicles.add(vehicle);
    this._rentingVehicles.add({ renter: player.source, vehicle });
    await vehicle.spawn({ coords: position, heading });
    return vehicle.networkId;
  }
  async createVehicle(ownerPlayer, vehicleName, vehicleProps, options) {
    const generatedPlate = await this.generatePlate();
    const newVehicle = await this.vehicleModel.create({
      owner: ownerPlayer._id,
      model: GetHashKey(vehicleName),
      name: vehicleName,
      plate: generatedPlate,
      properties: vehicleProps
    });
    const vehicle = new cVehicle(newVehicle);
    if (options && options.coords) {
      await vehicle.spawn(options);
    }
    this.vehicles.add(vehicle);
    ownerPlayer.showNotification({
      type: "success",
      message: this.i18n.t("SUCCESSFULLY_PURCHASED_VEHICLE", { plate: generatedPlate })
    });
    return vehicle;
  }
  async generatePlate() {
    let plate = "B" + makeid(7);
    while (await this.isPlateTaked(plate)) {
      await Sleep(0);
      plate = "B" + makeid(7);
    }
    return plate;
  }
  async isPlateTaked(plate) {
    const vehicle = await this.vehicleModel.findOne({ plate });
    return vehicle !== null;
  }
  getVehicles() {
    return this.vehicles;
  }
  async getVehicleByPlate(plate) {
    for (const vehicle of this.vehicles) {
      if (vehicle.plate === plate) {
        return vehicle;
      }
    }
    const vehicleData = await vehicle_model_default.findOne({ plate });
    if (vehicleData) {
      const vehicle = new cVehicle(vehicleData);
      this.vehicles.add(vehicle);
      return vehicle;
    }
    return void 0;
  }
  getVehicleByEntityId(entityId) {
    for (const vehicle of this.vehicles) {
      if (vehicle.vehicle === entityId) {
        return vehicle;
      }
    }
    return void 0;
  }
  async getVehicleById(id) {
    for (const vehicle of this.vehicles) {
      if (vehicle._id === id) {
        return vehicle;
      }
    }
    const vehicleData = await vehicle_model_default.findById(id);
    if (vehicleData) {
      const vehicle = new cVehicle(vehicleData);
      this.vehicles.add(vehicle);
      return vehicle;
    }
    return void 0;
  }
  async getVehiclesByOwner(ownerId) {
    const vehicles = [];
    const vehiclesData = await vehicle_model_default.find({ owner: ownerId });
    for (const data of vehiclesData) {
      const vehicle = await this.getVehicleById(data._id.toString());
      if (vehicle)
        vehicles.push(vehicle.data);
    }
    return vehicles;
  }
  clearVehicle() {
    this.vehicles.forEach((vehicle) => {
      vehicle.despawn();
    });
  }
  async deleteVehicle(vehicle) {
    if (vehicle._id) {
      await vehicle_model_default.findByIdAndDelete(vehicle._id);
    }
    this.vehicles.delete(vehicle);
    vehicle.despawn();
  }
};
VehicleService = __decorateClass([
  (0, import_starboy_framework4.Injectable)(),
  __decorateParam(0, (0, import_starboy_framework4.Inject)(I18n))
], VehicleService);
var vehicle_service_default = VehicleService;

// ../../ProjectStarboy/src/server/services/safe.service.ts
var import_starboy_framework6 = require("starboy-framework");

// ../../ProjectStarboy/src/server/models/safe.model.ts
var import_mongoose4 = require("mongoose");

// ../../ProjectStarboy/src/server/models/plugins/mongooseLeanId.ts
function isObjectId(v) {
  if (v == null) {
    return false;
  }
  const proto = Object.getPrototypeOf(v);
  if (proto == null || proto.constructor == null || proto.constructor.name !== "ObjectId") {
    return false;
  }
  return v._bsontype === "ObjectId";
}
function attachId(res) {
  if (res === null)
    return;
  function replaceId(res2) {
    if (Array.isArray(res2)) {
      res2.forEach((v) => {
        if (isObjectId(v)) {
          return;
        }
        if (v._id) {
          v._id = v._id.toString();
        }
        Object.keys(v).map((k) => {
          if (Array.isArray(v[k])) {
            replaceId(v[k]);
          }
        });
      });
    } else {
      if (isObjectId(res2)) {
        return res2;
      }
      if (res2._id) {
        res2._id = res2._id.toString();
      }
      Object.keys(res2).map((k) => {
        if (Array.isArray(res2[k])) {
          replaceId(res2[k]);
        }
      });
    }
  }
  if (this._mongooseOptions.lean) {
    replaceId(res);
  }
}
var mongooseLeanId = (schema) => {
  schema.post("find", attachId);
  schema.post("findOne", attachId);
  schema.post("findOneAndUpdate", attachId);
  schema.post("findOneAndReplace", attachId);
  schema.post("findOneAndDelete", attachId);
};
var mongooseLeanId_default = mongooseLeanId;

// ../../ProjectStarboy/src/server/models/safe.model.ts
var safeSchema = new import_mongoose4.Schema({
  name: { type: String, required: true },
  coords: { type: [Number], required: true },
  heading: { type: Number, required: true },
  type: { type: String, enum: ["player", "faction"], default: "player" },
  owner: { type: String, required: true },
  maxWeight: { type: Number, required: true }
});
safeSchema.plugin(mongooseLeanId_default);
var safeModel = (0, import_mongoose4.model)("SafeInventory", safeSchema);
var safe_model_default = safeModel;

// ../../ProjectStarboy/src/server/class/safe.class.ts
var import_container4 = __toESM(require("starboy-framework/dist/packages/core/container"));

// ../../ProjectStarboy/src/server/services/faction.service.ts
var import_starboy_framework5 = require("starboy-framework");

// ../../ProjectStarboy/src/server/class/subscriber.class.ts
var Subscribers = class extends AppClass2 {
  constructor() {
    super("Subscribers");
    this.listeners = /* @__PURE__ */ new Map();
  }
  subscribe(event, listener) {
    if (!this.listeners.has(event)) {
      this.listeners.set(event, []);
    }
    const listeners = this.listeners.get(event);
    if (listeners)
      listeners.push(listener);
  }
  unsubscribe(event, listener) {
    const eventListeners = this.listeners.get(event);
    if (eventListeners) {
      this.listeners.set(
        event,
        eventListeners.filter((l2) => l2 !== listener)
      );
    }
  }
  emit(event, data) {
    const eventListeners = this.listeners.get(event);
    if (eventListeners) {
      eventListeners.forEach((listener) => listener(data));
    }
  }
};

// ../../ProjectStarboy/src/server/models/faction.model.ts
var import_mongoose6 = require("mongoose");

// ../../ProjectStarboy/src/server/models/mission-v2.model.ts
var import_mongoose5 = require("mongoose");
var missionV2TaskSchema = new import_mongoose5.Schema({
  name: { type: String, required: true },
  label: { type: String, required: true },
  progress: { type: Number, default: 0 },
  maxProgress: { type: Number, default: 1 },
  donedAt: { type: String }
});
var missionV2Schema = new import_mongoose5.Schema({
  name: { type: String, required: true },
  tasks: { type: [missionV2TaskSchema], default: [] },
  dateStart: { type: Number, required: true },
  dateEnd: { type: Number }
});

// ../../ProjectStarboy/src/server/models/faction.model.ts
var factionHistorySchema = new import_mongoose6.Schema({
  date: { type: Number, required: true },
  content: { type: String, required: true }
});
var pointSchema = new import_mongoose6.Schema({
  name: { type: String, required: true },
  value: { type: Number, default: 0 }
});
var factionMemberSchema = new import_mongoose6.Schema({
  rank: { type: String, required: true },
  player: { type: Number, required: true },
  onDuty: { type: Boolean, default: true, required: true },
  point: { type: [pointSchema], default: [] }
});
var factionRankSchema = new import_mongoose6.Schema({
  name: { type: String, required: true },
  label: { type: String, required: true },
  salary: { type: Number, default: 0, required: true },
  privileges: { type: [String], default: [] }
});
var factionSchema = new import_mongoose6.Schema({
  name: { type: String, required: true, unique: true },
  label: { type: String, required: true },
  money: { type: Number, default: 0 },
  exp: { type: Number, default: 0 },
  slogan: { type: String, default: "" },
  rules: { type: [String], default: [] },
  announcement: { type: String, default: "" },
  ranks: {
    type: [factionRankSchema],
    default: [
      {
        name: "new_member",
        label: "Thành viên mới",
        salary: 0,
        privileges: []
      },
      {
        name: "boss",
        label: "Người lãnh đạo",
        salary: 0,
        privileges: []
      }
    ]
  },
  type: { type: String, enum: ["family", "department"], default: "family" },
  members: { type: [factionMemberSchema], default: [] },
  histories: { type: [factionHistorySchema], default: [] },
  missions: { type: [missionV2Schema], default: [] },
  official: { type: Boolean, default: false },
  blacklist: { type: [Number], default: [] }
});
var factionModel = (0, import_mongoose6.model)("Faction", factionSchema);

// ../../ProjectStarboy/src/server/class/faction-v2.class.ts
var import_jsondiffpatch = require("jsondiffpatch");

// ../../ProjectStarboy/src/server/class/faction-v2-member.class.ts
var import_container2 = __toESM(require("starboy-framework/dist/packages/core/container"));
var _faction, _playerService;
var cFactionV2Member = class extends AppClass2 {
  constructor(data, faction) {
    super("cFactionV2Member");
    this.online = false;
    this.name = "";
    __privateAdd(this, _faction, void 0);
    __privateAdd(this, _playerService, import_container2.default.get(PlayersService));
    this.rank = data.rank;
    this.player = data.player;
    this.onDuty = data.onDuty;
    this.point = data.point;
    __privateSet(this, _faction, faction);
    this.getMemberName();
  }
  async getMemberName() {
    const playerData = await player_model_default.findOne({ id: this.player });
    if (!playerData)
      return;
    this.name = playerData.name;
  }
  get data() {
    return {
      rank: this.rank,
      player: this.player,
      onDuty: this.onDuty,
      point: this.point,
      online: this.online,
      name: this.name
    };
  }
  get rankInstance() {
    return __privateGet(this, _faction).ranks.find((rank) => rank.name === this.rank);
  }
  can(permission) {
    const rank = this.rankInstance;
    if (!rank)
      return false;
    if (rank.name === "boss")
      return true;
    if (rank.privileges.includes("ALL"))
      return true;
    return rank.privileges.includes(permission);
  }
};
_faction = new WeakMap();
_playerService = new WeakMap();

// ../../ProjectStarboy/src/server/class/faction-v2.rank.class.ts
var cFactionV2Rank = class {
  constructor(data) {
    this.name = data.name;
    this.label = data.label;
    this.salary = data.salary;
    this.privileges = data.privileges;
  }
  get data() {
    return {
      name: this.name,
      label: this.label,
      salary: this.salary,
      privileges: this.privileges
    };
  }
};

// ../../ProjectStarboy/src/server/class/faction-v2.class.ts
var diff = (0, import_jsondiffpatch.create)({
  objectHash: function(obj, index) {
    return obj._id || "$$index:" + index;
  },
  arrays: {
    detectMove: false
  }
});
var _ranks, _members, _lastData;
var cFactionV2 = class extends AppClass2 {
  constructor(data) {
    super("cFactionV2");
    __privateAdd(this, _ranks, /* @__PURE__ */ new Set());
    __privateAdd(this, _members, /* @__PURE__ */ new Set());
    __privateAdd(this, _lastData, void 0);
    this.name = data.name;
    this.label = data.label;
    this.money = data.money;
    this.exp = data.exp;
    this.slogan = data.slogan;
    this.rules = data.rules;
    this.announcement = data.announcement;
    this.type = data.type;
    this.histories = data.histories;
    this.missions = data.missions;
    this.official = data.official;
    this.blacklist = data.blacklist;
    __privateSet(this, _lastData, json(this.data));
    for (const member of data.members) {
      __privateGet(this, _members).add(new cFactionV2Member(member, this));
    }
    for (const rank of data.ranks) {
      __privateGet(this, _ranks).add(new cFactionV2Rank(rank));
    }
  }
  get members() {
    return [...__privateGet(this, _members)].map((member) => member.data);
  }
  get ranks() {
    return [...__privateGet(this, _ranks)].map((rank) => rank.data);
  }
  get data() {
    return {
      name: this.name,
      label: this.label,
      money: this.money,
      exp: this.exp,
      slogan: this.slogan,
      rules: this.rules,
      announcement: this.announcement,
      ranks: this.ranks,
      type: this.type,
      members: this.members,
      histories: this.histories,
      missions: this.missions,
      official: this.official,
      blacklist: this.blacklist
    };
  }
  emitNet(event, ...args) {
    for (const member of __privateGet(this, _members)) {
      if (member.online && member.source) {
        emitNet(event, member.source, ...args);
      }
    }
  }
  async addMoney(amount) {
    this.money += amount;
    await factionModel.updateOne({ name: this.name }, { money: this.money });
    this.update("money", this.money);
  }
  async removeMoney(amount) {
    this.money -= amount;
    await factionModel.updateOne({ name: this.name }, { money: this.money });
    this.update("money", this.money);
  }
  async update(field, value) {
    const delta = diff.diff(__privateGet(this, _lastData)[field], this[field]);
    if (delta) {
      __privateGet(this, _lastData)[field] = json(this[field]);
      this.emitNet("faction:update", field, delta);
    }
  }
  getLogInfo() {
    return {
      name: this.name,
      label: this.label,
      type: this.type
    };
  }
  async deleteFaction() {
    await factionModel.deleteOne({ name: this.name });
  }
  async addExp(amount) {
    this.exp += amount;
    await factionModel.updateOne({ name: this.name }, { exp: this.exp });
    this.update("exp", this.exp);
  }
  async removeExp(amount) {
    this.exp -= amount;
    await factionModel.updateOne({ name: this.name }, { exp: this.exp });
    this.update("exp", this.exp);
  }
  getMember(playerId) {
    for (const member of __privateGet(this, _members)) {
      if (member.player === playerId)
        return member;
    }
  }
  setMemberDuty(playerId, state) {
    const member = this.getMember(playerId);
    if (!member) {
      return [false, "Không tìm thấy thành viên", void 0];
    }
    member.onDuty = state;
    return [true, void 0, void 0];
  }
  async addMember(playerId, rank) {
    const member = this.getMember(playerId);
    if (member) {
      return [false, "Người chơi đã ở trong tổ chức", void 0];
    }
    const rankInstance = this.getRank(rank);
    if (!rankInstance) {
      return [false, "Không tìm thấy chức vụ", void 0];
    }
    const faction = await factionModel.findOne({ name: this.name });
    if (!faction) {
      return [false, "Không tìm thấy tổ chức trên database", void 0];
    }
    const newMemberData = { player: playerId, rank, onDuty: false, point: [], name: "" };
    faction.members.push(newMemberData);
    await faction.save();
    const newMemberInstance = new cFactionV2Member(newMemberData, this);
    __privateGet(this, _members).add(newMemberInstance);
    this.update("members", this.members);
    return [true, void 0, newMemberInstance];
  }
  setMemberOnlineState(playerId, state, source2) {
    const member = this.getMember(playerId);
    if (!member)
      return;
    member.online = state;
    member.source = source2;
    this.update("members", this.members);
  }
  isMember(playerId) {
    return !!this.getMember(playerId);
  }
  async editMemberRank(playerId, rank) {
    const member = this.getMember(playerId);
    if (!member) {
      return [false, "Không tìm thấy thành viên", void 0];
    }
    const rankInstance = this.getRank(rank);
    if (!rankInstance) {
      return [false, "Không tìm thấy chức vụ", void 0];
    }
    member.rank = rank;
    await factionModel.updateOne({ name: this.name, "members.player": playerId }, { "members.$.rank": rank });
    return [true, void 0, member.data];
  }
  async kickMember(playerId) {
    const member = this.getMember(playerId);
    if (!member) {
      return [false, "Không tìm thấy thành viên", void 0];
    }
    __privateGet(this, _members).delete(member);
    await factionModel.updateOne({ name: this.name }, { $pull: { members: { player: playerId } } });
    this.update("members", this.members);
    return [true, void 0, playerId];
  }
  getRank(rankName) {
    for (const rank of __privateGet(this, _ranks)) {
      if (rank.name === rankName)
        return [true, void 0, rank];
    }
    return [false, "Không tìm thấy chức vụ", void 0];
  }
  async createNewRank(rankName) {
    const [available] = this.getRank(rankName);
    if (available)
      return [false, "Chức vụ đã tồn tại", void 0];
    const rank = new cFactionV2Rank({ name: rankName, label: rankName, salary: 0, privileges: [] });
    __privateGet(this, _ranks).add(rank);
    await factionModel.updateOne({ name: this.name }, { $push: { ranks: rank.data } });
    return [true, void 0, rank.data];
  }
  async deleteRank(rankName) {
    const [, , rank] = this.getRank(rankName);
    if (!rank)
      return [false, "Không tìm thấy chức vụ", void 0];
    __privateGet(this, _ranks).delete(rank);
    await factionModel.updateOne({ name: this.name }, { $pull: { ranks: { name: rankName } } });
    return [true, void 0, rankName];
  }
  async changeRankLabel(rankName, newLabel) {
    const [success, error, rank] = this.getRank(rankName);
    if (!success)
      return [false, error, void 0];
    rank.label = newLabel;
    await factionModel.updateOne({ name: this.name, "ranks.name": rankName }, { "ranks.$.label": newLabel });
    return [true, void 0, rank.data];
  }
  async addRankPrivilege(rankName, privilege) {
    const [success, error, rank] = this.getRank(rankName);
    if (!success)
      return [false, error, void 0];
    rank.privileges.push(privilege);
    await factionModel.updateOne({ name: this.name, "ranks.name": rankName }, { "ranks.$.privileges": rank.privileges });
    return [true, void 0, rank.data];
  }
  async removeRankPrivilege(rankName, privilege) {
    const [success, error, rank] = this.getRank(rankName);
    if (!success)
      return [false, error, void 0];
    rank.privileges = rank.privileges.filter((p) => p !== privilege);
    await factionModel.updateOne({ name: this.name, "ranks.name": rankName }, { "ranks.$.privileges": rank.privileges });
    return [true, void 0, rank.data];
  }
  editSalary(rankName, newSalary) {
    const [success, error, rank] = this.getRank(rankName);
    if (!success)
      return [false, error, void 0];
    rank.salary = newSalary;
    return [true, void 0, rank];
  }
  async editAnnouncement(announcement) {
    this.announcement = announcement;
    await factionModel.findOneAndUpdate({ name: this.name }, { announcement });
    this.update("announcement", this.announcement);
    return [true, void 0, this.announcement];
  }
};
_ranks = new WeakMap();
_members = new WeakMap();
_lastData = new WeakMap();

// ../../ProjectStarboy/src/server/services/faction.service.ts
var import_container3 = __toESM(require("starboy-framework/dist/packages/core/container"));
var _playersService;
var FactionService = class extends AppService {
  constructor() {
    super("FactionService");
    this.factions = /* @__PURE__ */ new Set();
    this.subscriber = new Subscribers();
    __privateAdd(this, _playersService, void 0);
    this.initFactions();
  }
  async initFactions() {
    const factions = await factionModel.find();
    factions.forEach(async (faction) => {
      this.factions.add(new cFactionV2(faction));
    });
    this.subscriber.emit("onLoaded", this.factions);
    this.playersService.subscribe(
      "playerLoaded",
      async (player) => {
        const [hasFaction, , faction] = this.getPlayerFaction(player.id);
        if (hasFaction) {
          faction.setMemberOnlineState(player.id, true, Number(player.source));
        }
      },
      "FactionService"
    );
    this.playersService.subscribe(
      "playerDropped",
      async (player) => {
        const [hasFaction, , faction] = this.getPlayerFaction(player.id);
        if (hasFaction) {
          faction.setMemberOnlineState(player.id, false);
        }
      },
      "FactionService"
    );
  }
  get playersService() {
    if (!__privateGet(this, _playersService))
      __privateSet(this, _playersService, import_container3.default.get(PlayersService));
    return __privateGet(this, _playersService);
  }
  getFactionFromName(name) {
    if (name === void 0)
      return;
    for (const faction of this.factions) {
      if (faction.name === name)
        return faction;
    }
  }
  getFactionFromLabel(label) {
    if (label === void 0)
      return;
    for (const faction of this.factions) {
      if (faction.label === label)
        return faction;
    }
  }
  isNameExist(name) {
    for (const faction of this.factions) {
      if (faction.name === name)
        return true;
    }
    return false;
  }
  isLabelExist(label) {
    for (const faction of this.factions) {
      if (faction.label === label)
        return true;
    }
    return false;
  }
  getPlayerFaction(playerId) {
    for (const faction of this.factions) {
      if (faction.getMember(playerId))
        return [true, void 0, faction];
    }
    return [false, "Không tìm thấy tổ chức", void 0];
  }
  async createFaction(player, data) {
    if (this.isNameExist(data.name))
      return [false, "Tag này đã được sử dụng", void 0];
    if (this.isLabelExist(data.label))
      return [false, "Tên này đã được sử dụng", void 0];
    const [isInFaction] = this.getPlayerFaction(player.id);
    if (isInFaction)
      return [false, "Bạn đã ở trong tổ chức", void 0];
    const createdFaction = await factionModel.create({
      name: data.name,
      label: data.label,
      type: data.type
    });
    const factionInstance = new cFactionV2(createdFaction);
    this.factions.add(factionInstance);
    const addMemberResponse = await factionInstance.addMember(player.id, "boss");
    if (addMemberResponse[0] === false) {
      await factionInstance.deleteFaction();
    } else {
      this.factions.add(factionInstance);
      this.subscriber.emit("onCreated", factionInstance);
    }
    return [true, void 0, factionInstance.data];
  }
  async deleteFaction(faction) {
    await factionModel.deleteOne({ name: faction.name });
    this.factions.delete(faction);
    this.subscriber.emit("onDeleted", faction);
  }
};
_playersService = new WeakMap();
FactionService = __decorateClass([
  (0, import_starboy_framework5.Injectable)()
], FactionService);

// ../../ProjectStarboy/src/shared/class/doorLock.class.ts
var DoorLock = class extends AppClass {
  constructor(data) {
    super("DoorLock");
    this._doors = /* @__PURE__ */ new Set();
    this._keys = /* @__PURE__ */ new Set();
    this._locked = false;
    this._doors = new Set(data.doors);
    this._keys = new Set(data.keys);
    this._locked = data.locked;
    this._id = data._id;
    this._owner = data.owner;
    this._type = data.type;
    this._passcode = data.passcode;
  }
  get type() {
    return this._type;
  }
  get passcode() {
    return this._passcode;
  }
  set passcode(passcode) {
    this._passcode = passcode;
    this.sync("passcode");
  }
  get owner() {
    return this._owner;
  }
  get id() {
    return this._id;
  }
  get doors() {
    return Array.from(this._doors);
  }
  set doors(doors) {
    this._doors = new Set(doors);
    this.sync("doors");
  }
  get keys() {
    return Array.from(this._keys);
  }
  set keys(keys) {
    this._keys = new Set(keys);
    this.sync("keys");
  }
  get locked() {
    return this._locked;
  }
  set locked(locked) {
    this._locked = locked;
    this.sync("locked");
  }
  addKey(key) {
    this._keys.add(key);
    this.sync("keys");
  }
  removeKey(playerDId) {
    for (const key of this._keys) {
      if (key.playerDId === playerDId)
        this._keys.delete(key);
    }
    this.sync("keys");
  }
  get data() {
    return {
      doors: this.doors,
      keys: this.keys,
      locked: this.locked,
      _id: this._id,
      owner: this._owner,
      type: this._type,
      passcode: this._passcode
    };
  }
  async sync(field) {
  }
};

// ../../ProjectStarboy/src/shared/class/plant.class.ts
var Plant = class extends AppClass {
  constructor(data) {
    super("Plant");
    this._havestAt = 0;
    this._id = data.id;
    this._name = data.name;
    this._coords = data.coords;
    this._heading = data.heading;
    this._growth = data.growth;
    this._water = data.water;
    this._fertilized = data.fertilized;
    this._plantAt = data.plantAt;
  }
  get name() {
    return this._name;
  }
  set name(value) {
    this._name = value;
    this.save();
  }
  get coords() {
    return this._coords;
  }
  get heading() {
    return this._heading;
  }
  set heading(value) {
    this._heading = value;
    this.save();
  }
  get growth() {
    return this._growth;
  }
  set growth(value) {
    this._growth = value;
    this.save();
  }
  get water() {
    return this._water;
  }
  set water(value) {
    this._water = value;
    this.save();
  }
  get fertilized() {
    return this._fertilized;
  }
  set fertilized(value) {
    this._fertilized = value;
    this.save();
  }
  get plantAt() {
    return this._plantAt;
  }
  set plantAt(value) {
    this._plantAt = value;
    this.save();
  }
  get id() {
    return this._id;
  }
  get data() {
    return {
      id: this.id,
      name: this._name,
      coords: this._coords,
      heading: this._heading,
      growth: this._growth,
      water: this._water,
      fertilized: this._fertilized,
      plantAt: this._plantAt,
      havestAt: this._havestAt
    };
  }
  set data(value) {
    this._id = value.id;
    this._name = value.name;
    this._coords = value.coords;
    this._heading = value.heading;
    this._growth = value.growth;
    this._water = value.water;
    this._fertilized = value.fertilized;
    this._plantAt = value.plantAt;
    this._havestAt = value.havestAt;
  }
  async save() {
  }
};

// ../../ProjectStarboy/src/shared/class/safe.class.ts
var Safe = class extends AppClass {
  constructor(name, coords, heading, _id, owner, type, maxWeight) {
    super("Safe");
    this._name = name;
    this._coords = coords;
    this._heading = heading;
    this._type = type;
    this._id = _id;
    this._owner = owner;
    this._maxWeight = maxWeight;
  }
  get data() {
    return {
      _id: this._id,
      name: this._name,
      coords: [this._coords.x, this._coords.y, this._coords.z],
      heading: this._heading,
      type: this._type,
      owner: this._owner,
      maxWeight: this._maxWeight
    };
  }
  get id() {
    return this._id;
  }
  get maxWeight() {
    return this._maxWeight;
  }
  get name() {
    return this._name;
  }
  get coords() {
    return this._coords;
  }
  get heading() {
    return this._heading;
  }
  get type() {
    return this._type;
  }
  get owner() {
    return this._owner;
  }
};

// ../../ProjectStarboy/src/server/class/safe.class.ts
var sSafe = class extends Safe {
  constructor(name, coords, heading, _id, owner, type, maxWeight) {
    super(name, coords, heading, _id, owner, type, maxWeight);
    this.inventoryService = import_container4.default.get(InventoryService);
    this.playersService = import_container4.default.get(PlayersService);
    this.factionService = import_container4.default.get(FactionService);
  }
  static async create(name, maxWeight, coords, heading, owner, type) {
    const createdSafe = await safe_model_default.create({
      name,
      coords: [coords.x, coords.y, coords.z],
      heading,
      owner,
      type,
      maxWeight
    }).catch(console.error);
    if (createdSafe) {
      const newSafeInstance = new sSafe(name, coords, heading, createdSafe._id.toString(), owner, type, maxWeight);
      emitNet("safe:createSafe", -1, newSafeInstance.data);
      return newSafeInstance;
    }
  }
  async getInventory() {
    const inv = await this.inventoryService.getInventory(this.id, this.maxWeight, "stash");
    if (inv.ownerInfo === "unknown") {
      if (this.type === "player") {
        const player = await this.playersService.getPlayerByDataId(this.owner);
        if (player) {
          inv.ownerInfo = `${player.name} (${player.id})`;
        }
      } else {
      }
    }
    return inv;
  }
  async setName(name) {
    this._name = name;
    await safe_model_default.updateOne({ _id: this._id }, { name });
  }
  async setCoords(coords) {
    this._coords = coords;
    await safe_model_default.updateOne({ _id: this._id }, { coords: [coords.x, coords.y, coords.z] });
  }
  async setHeading(heading) {
    this._heading = heading;
    await safe_model_default.updateOne({ _id: this._id }, { heading });
  }
  async setType(type) {
    this._type = type;
    await safe_model_default.updateOne({ _id: this._id }, { type });
  }
  async setOwner(owner) {
    this._owner = owner;
    await safe_model_default.updateOne({ _id: this._id }, { owner });
  }
  async delete() {
    await safe_model_default.deleteOne({ _id: this._id });
    emitNet("safe:deleteSafe", -1, this._id);
  }
  sync(field) {
    emitNet("safe:sync", -1, this.id, this.data[field]);
  }
};

// ../../ProjectStarboy/src/server/services/safe.service.ts
var import_fivem_js_rework = require("fivem-js-rework");
var SafeService = class extends AppService {
  constructor() {
    super("SafeService");
    this._safes = /* @__PURE__ */ new Set();
    this.getData();
  }
  async getData() {
    const safes = await safe_model_default.find().lean();
    for (const safe of safes) {
      const safeInstance = new sSafe(safe.name, new import_fivem_js_rework.Vector3(safe.coords[0], safe.coords[1], safe.coords[2]), safe.heading, String(safe._id), safe.owner, safe.type, safe.maxWeight);
      this._safes.add(safeInstance);
    }
  }
  getSafeById(safeId) {
    for (const safe of this._safes) {
      if (safe.id === safeId) {
        return safe;
      }
    }
  }
  getSafeByName(safeName) {
    const safes = [];
    for (const safe of this._safes) {
      if (safe.name === safeName) {
        safes.push(safe);
      }
    }
    return safes;
  }
  async createSafe(name, maxWeight, coords, heading, owner, type) {
    const createdSafe = await sSafe.create(name, maxWeight, coords, heading, owner, type);
    if (createdSafe) {
      this._safes.add(createdSafe);
      return createdSafe;
    }
  }
  async deleteSafe(safeId) {
    const safe = this.getSafeById(safeId);
    if (safe) {
      await safe.delete();
      this._safes.delete(safe);
    }
  }
  async updateSafeName(safeId, name) {
    const safe = this.getSafeById(safeId);
    if (safe) {
      await safe.setName(name);
    }
  }
  async updateSafeCoords(safeId, coords) {
    const safe = this.getSafeById(safeId);
    if (safe) {
      await safe.setCoords(coords);
    }
  }
  async updateSafeHeading(safeId, heading) {
    const safe = this.getSafeById(safeId);
    if (safe) {
      await safe.setHeading(heading);
    }
  }
  get safes() {
    const safes = [];
    for (const safe of this._safes) {
      safes.push(safe.data);
    }
    return safes;
  }
};
SafeService = __decorateClass([
  (0, import_starboy_framework6.Injectable)()
], SafeService);

// ../../ProjectStarboy/src/server/utils/callback.ts
var import_server = require("@citizenfx/server");

// ../../ProjectStarboy/src/server/utils/logger.ts
var import_node_fetch = __toESM(require("node-fetch"));
var lokiUser = GetConvar("loki:user", "");
var lokiPassword = GetConvar("loki:password", "");
var lokiEndpoint = GetConvar("loki:endpoint", "");
var headers = {
  "Content-Type": "application/json"
};
if (lokiUser !== "") {
  headers["Authorization"] = `Basic ${btoa(`${lokiUser}:${lokiPassword}`)}`;
}
var endpoint = `${lokiEndpoint}/loki/api/v1/push`;
function getTimeStamp() {
  return `${Date.now() * 1e6}`;
}
var Logger = class {
  constructor() {
    this.streams = [];
    this.running = false;
  }
  log(message, event, labels) {
    if (!labels)
      labels = {};
    const newStream = {
      stream: __spreadValues({
        application: "ProjectStarboy",
        event
      }, labels),
      values: [[getTimeStamp(), message]]
    };
    this.streams.push(newStream);
    if (!this.running) {
      this.running = true;
      setTimeout(() => {
        this.running = false;
        const data = {
          streams: this.streams
        };
        (0, import_node_fetch.default)(endpoint, {
          method: "POST",
          headers,
          body: JSON.stringify(data)
        }).then((res) => console.log(JSON.stringify(res)));
        this.streams = [];
      }, 500);
    }
  }
};
var l = new Logger();
var logger = l.log.bind(l);

// ../../ProjectStarboy/src/server/class/inventory.class.ts
var import_crypto2 = require("crypto");
var cInventory = class extends AppClass2 {
  constructor(data) {
    super("Inventory");
    this._data = {
      "0": null,
      "1": null,
      "2": null,
      "3": null,
      "4": null,
      "5": null,
      "6": null,
      "7": null,
      "8": null,
      "9": null,
      "10": null,
      "11": null,
      "12": null,
      "13": null,
      "14": null,
      "15": null,
      "16": null,
      "17": null,
      "18": null,
      "19": null,
      "20": null,
      "21": null,
      "22": null,
      "23": null,
      "24": null,
      "25": null,
      "26": null,
      "27": null,
      "28": null,
      "29": null,
      "30": null,
      "31": null,
      "32": null,
      "33": null,
      "34": null,
      "35": null,
      "36": null,
      "37": null,
      "38": null,
      "39": null,
      "40": null,
      "41": null,
      "42": null,
      "43": null,
      "44": null,
      "45": null,
      "46": null,
      "47": null,
      "48": null,
      "49": null,
      HAT: null,
      GLASS: null,
      EAR: null,
      WATCH: null,
      BRACELET: null,
      MASK: null,
      TORSOR: null,
      LEG: null,
      BAG: null,
      SHOES: null,
      ACCESSORY: null,
      UNDERSHIRT: null,
      KEVLAR: null,
      DECAL: null,
      TOP: null
    };
    this._weight = 0;
    this._listeners = /* @__PURE__ */ new Set();
    this._lastData = this.data;
    this._maxWeight = 4e4;
    this._defaultMaxWeight = 4e4;
    this._type = "player";
    this._name = "";
    this.id = "";
    this.ownerInfo = "unknown";
    this.name = "unknown";
    this.discordService = import_container5.default.get(DiscordService);
    this.socketService = import_container5.default.get(SocketService);
    this.vehiclesService = import_container5.default.get(vehicle_service_default);
    this.playersService = import_container5.default.get(PlayersService);
    this.factionService = import_container5.default.get(FactionService);
    this.safeService = import_container5.default.get(SafeService);
    this._owner = data.owner;
    this._maxWeight = data.maxWeight || 4e4;
    this._defaultMaxWeight = data.maxWeight || 4e4;
    this._type = data.type;
    this.id = data.id;
    this.clearTimeout = data.clearTimeout;
    this.coords = data.coords;
    this.temp = data.temp;
  }
  get type() {
    return this._type;
  }
  static async create(props) {
    console.log("Inventory.create", props);
    const { owner, maxWeight, type, temp = false, clearTimeout: clearTimeout2 } = props;
    const id = (0, import_crypto2.randomUUID)();
    if (!temp) {
      const createdData = await inventory_model_default.create(__spreadProps(__spreadValues({}, props), { id }));
      const newInventoryInstance = await cInventory.init(createdData);
      newInventoryInstance.id = id;
      return newInventoryInstance;
    } else {
      const newInventoryInstance = await cInventory.init(__spreadProps(__spreadValues({}, props), { id }));
      return newInventoryInstance;
    }
  }
  static async init(data) {
    const instance = new cInventory(data);
    if (instance.type === "player") {
      const player = await instance.playersService.getPlayerByDataId(instance.owner);
      if (player) {
        instance.ownerInfo = `[${player.id}]${player.name}`;
        instance.name = player.name;
      }
    } else if (instance.type === "trunk") {
      const vehicle = await instance.vehiclesService.getVehicleById(instance.owner);
      if (vehicle) {
        instance.ownerInfo = `${vehicle.plate}(unknown)`;
        const player = await instance.playersService.getPlayerByDataId(vehicle.owner);
        if (player) {
          instance.ownerInfo = `${vehicle.plate}([${player.id}]${player.name})`;
        }
        instance.name = vehicle.plate;
      }
    } else if (instance.type === "faction") {
    } else if (instance.type === "stash") {
      const safe = await instance.safeService.getSafeById(instance.owner);
      if (safe) {
        instance.ownerInfo = safe.name;
        instance.name = safe.name;
      }
    } else if (instance.type === "drop") {
      instance.name = `Mặt đất ${instance.id}`;
    }
    await instance.initData();
    return instance;
  }
  async initData() {
    if (!this.temp) {
      const inventoryData = await inventory_model_default.findOne({ id: this.id });
      if (inventoryData && inventoryData.data)
        for (const [slot, item] of Object.entries(inventoryData.data)) {
          if (item) {
            this._data[slot] = initItem(item, slot, this);
          }
        }
    }
    this._lastData = json(this.data);
    this.checkBackpack();
    this.onInit();
  }
  checkBackpack() {
    const item = this._data["BAG"];
    if (!item)
      return;
    const itemData = getItemDataByName(item.name);
    if (!itemData)
      return;
    if (!isBackpackItem(itemData))
      return;
    this.maxWeight += itemData.additionalWeight;
  }
  get owner() {
    return this._owner;
  }
  get maxWeight() {
    return this._maxWeight;
  }
  set maxWeight(weight) {
    this._maxWeight = weight;
    inventory_model_default.findOneAndUpdate({ id: this.id }, { maxWeight: weight });
    for (const listener of this._listeners) {
      if (listener.onUpdateMaxWeight)
        listener.onUpdateMaxWeight(weight);
    }
  }
  get data() {
    const returnData = {
      "0": null,
      "1": null,
      "2": null,
      "3": null,
      "4": null,
      "5": null,
      "6": null,
      "7": null,
      "8": null,
      "9": null,
      "10": null,
      "11": null,
      "12": null,
      "13": null,
      "14": null,
      "15": null,
      "16": null,
      "17": null,
      "18": null,
      "19": null,
      "20": null,
      "21": null,
      "22": null,
      "23": null,
      "24": null,
      "25": null,
      "26": null,
      "27": null,
      "28": null,
      "29": null,
      "30": null,
      "31": null,
      "32": null,
      "33": null,
      "34": null,
      "35": null,
      "36": null,
      "37": null,
      "38": null,
      "39": null,
      "40": null,
      "41": null,
      "42": null,
      "43": null,
      "44": null,
      "45": null,
      "46": null,
      "47": null,
      "48": null,
      "49": null,
      HAT: null,
      GLASS: null,
      EAR: null,
      WATCH: null,
      BRACELET: null,
      MASK: null,
      TORSOR: null,
      LEG: null,
      BAG: null,
      SHOES: null,
      ACCESSORY: null,
      UNDERSHIRT: null,
      KEVLAR: null,
      DECAL: null,
      TOP: null
    };
    let key;
    for (key in this._data) {
      if (Object.prototype.hasOwnProperty.call(this._data, key)) {
        const element = this._data[key];
        if (element !== null) {
          returnData[key] = element.data;
        }
      }
    }
    return returnData;
  }
  get weight() {
    let w = 0;
    let slot;
    for (slot in this._data) {
      if (Object.prototype.hasOwnProperty.call(this._data, slot)) {
        const slotItems = this._data[slot];
        if (slotItems) {
          const itemData = getItemDataByName(slotItems.name);
          if (itemData) {
            w += itemData.weight * slotItems.amount;
          }
        }
      }
    }
    return w;
  }
  getSlotItems(slot) {
    return this._data[slot];
  }
  hasItem(itemName, amount) {
    amount = Math.round(amount);
    let remain = amount;
    for (const slot of InventorySlot) {
      if (remain <= 0)
        return true;
      const itemSlot = this._data[slot];
      if (itemSlot && itemSlot.name === itemName) {
        remain -= itemSlot.amount;
      }
    }
    return false;
  }
  isAddableSlot(slot) {
    return NormalSlot.includes(slot);
  }
  getFreeSlots() {
    const slots = [];
    for (const slot of NormalSlot) {
      const itemInSlot = this.getSlotItems(slot);
      if (itemInSlot === null) {
        slots.push(slot);
      }
    }
    return slots;
  }
  getFreeSlot() {
    for (const slot of NormalSlot) {
      const itemInSlot = this.getSlotItems(slot);
      if (itemInSlot === null) {
        return slot;
      }
    }
  }
  getSlotsByItem(itemName) {
    const slots = [];
    for (const slot of InventorySlot) {
      const item = this._data[slot];
      if (item && item.name === itemName) {
        slots.push(slot);
      }
    }
    return slots;
  }
  getFirstItemSlot(itemName) {
    for (const slot of NormalSlot) {
      const item = this._data[slot];
      if (item && item.name === itemName) {
        return slot;
      }
    }
  }
  getItemAmount(itemName) {
    let amount = 0;
    for (const slot of InventorySlot) {
      const item = this._data[slot];
      if (item && item.name === itemName) {
        amount += item.amount;
      }
    }
    return amount;
  }
  canPutItemInSlot(itemName, amount, slot) {
    const isClothe = isClotheSlot(slot);
    if (isClothe) {
      const itemData = getItemDataByName(itemName);
      this.logInfo("itemData", itemData);
      if (!itemData)
        return false;
      const needSlot = getClotheSlotByType(itemData.type);
      this.logInfo("needSlot", needSlot);
      if (!needSlot)
        return false;
      if (needSlot !== slot)
        return false;
    }
    return true;
  }
  addItem(itemName, amount, options = {}) {
    amount = Math.round(amount);
    const itemData = getItemDataByName(itemName);
    if (!itemData)
      return [false, null, "Vật phẩm không tồn tại"];
    const { slot, instance } = options;
    if (slot) {
      const slotItem = this._data[slot];
      if (slotItem) {
        if (slotItem.name === itemName) {
          if (slotItem instanceof cStackableItem) {
            if (slotItem.amount + amount > itemData.limit && itemData.limit !== -1) {
              return [false, null, "Quá số lượng tối đa"];
            }
            slotItem.amount += amount;
            this.save();
            logger(`Đã thêm vật phẩm ${itemName} vào slot ${slot} với số lượng ${amount}`, "add-item", slotItem.getLogInfo());
            return [true, slotItem, ""];
          } else {
            return [false, null, "Không thể thêm vào slot này"];
          }
        }
      } else {
        if (!instance) {
          const rawData = generateItemData(itemName, amount);
          if (!rawData)
            return [false, null, "Vật phẩm không tồn tại 2"];
          const newItem = initItem(rawData, slot, this);
          this._data[slot] = newItem;
          logger(`Đã thêm vật phẩm ${itemName} vào slot ${slot} với số lượng ${amount}`, "add-item", newItem.getLogInfo());
          this.save();
          return [true, this._data[slot], ""];
        } else {
          this._data[slot] = instance;
          instance.slot = slot;
          instance.amount = amount;
          instance.controller = this;
          this.save();
          logger(`Đã thêm vật phẩm ${itemName} vào slot ${slot} với số lượng ${amount}`, "add-item", instance.getLogInfo());
          return [true, instance, ""];
        }
      }
    }
    if (instance) {
      const freeSlot = this.getFreeSlot();
      if (!freeSlot)
        return [false, null, "Không còn slot trống"];
      this._data[freeSlot] = instance;
      instance.slot = freeSlot;
      instance.amount = amount;
      instance.controller = this;
      this.save();
      logger(`Đã thêm vật phẩm ${itemName} vào slot ${slot} với số lượng ${amount}`, "add-item", instance.getLogInfo());
      return [true, instance, ""];
    }
    if (itemData.type === "weapon") {
      const freeSlot = this.getFreeSlot();
      if (!freeSlot)
        return [false, null, "Không còn slot trống"];
      const rawData = generateItemData(itemName, amount);
      if (!rawData)
        return [false, null, "Vật phẩm không tồn tại 3"];
      const newItem = initItem(rawData, freeSlot, this);
      this._data[freeSlot] = newItem;
      this.save();
      logger(`Đã thêm vật phẩm ${itemName} vào slot ${slot} với số lượng ${amount}`, "add-item", newItem.getLogInfo());
      return [true, this._data[freeSlot], ""];
    }
    const slotsHasItem = this.getSlotsByItem(itemName);
    for (const slot2 of slotsHasItem) {
      if (amount <= 0) {
        this.save();
        return [true, null, ""];
      }
      const slotItem = this._data[slot2];
      if (slotItem) {
        const canContain = itemData.limit - slotItem.amount;
        const addAmount = Math.min(amount, canContain);
        slotItem.amount += addAmount;
        amount -= addAmount;
        logger(`Đã thêm vật phẩm ${itemName} vào slot ${slot2} với số lượng ${amount}`, "add-item", slotItem.getLogInfo());
        if (amount <= 0) {
          this.save();
          return [true, null, ""];
        }
      }
    }
    const freeSlots = this.getFreeSlots();
    for (const slot2 of freeSlots) {
      if (amount <= 0) {
        this.save();
        logger(`Đã thêm vật phẩm ${itemName} vào slot ${slot2} với số lượng ${amount}`, "add-item", {
          inventoryId: this.id
        });
        return [true, null, ""];
      }
      const canContain = itemData.limit;
      const addAmount = Math.min(amount, canContain);
      const rawData = generateItemData(itemName, addAmount);
      if (!rawData)
        return [false, null, "Vật phẩm không tồn tại 4"];
      const newItem = initItem(rawData, slot2, this);
      this._data[slot2] = newItem;
      amount -= addAmount;
      logger(`Đã thêm vật phẩm ${itemName} vào slot ${slot2} với số lượng ${amount}`, "add-item", newItem.getLogInfo());
      if (amount <= 0) {
        this.save();
        return [true, null, ""];
      }
    }
    return [false, null, "Không còn slot trống"];
  }
  addItemInstance(item) {
    if (item instanceof cStackableItem) {
      return this.addItem(item.name, item.amount);
    } else {
      const freeSlot = this.getFreeSlot();
      if (!freeSlot)
        return false;
      this._data[freeSlot] = item;
      item.slot = freeSlot;
      this.save();
      return true;
    }
  }
  removeItemInstance(item) {
    this._data[item.slot] = null;
    this.save();
  }
  canCarryItem(itemName, amount) {
    this.logInfo(itemName, amount);
    amount = Math.round(amount);
    if (amount < 0)
      return false;
    if (amount === 0)
      return true;
    const itemData = getItemDataByName(itemName);
    if (!itemData)
      return false;
    this.logInfo(itemName, amount, itemData.weight);
    if (getInventoryWeight(this.data) + itemData.weight * amount > this._maxWeight)
      return false;
    const slotHasItems = this.getSlotsByItem(itemName);
    const freeSlots = this.getFreeSlots();
    if (itemData.limit === -1) {
      if (slotHasItems.length > 0)
        return true;
      if (freeSlots.length > 0)
        return true;
      return false;
    } else {
      let remain = amount;
      for (const slot of slotHasItems) {
        if (remain <= 0)
          return true;
        const slotItem = this._data[slot];
        if (slotItem) {
          const canContain = itemData.limit - slotItem.amount;
          const addAmount = Math.min(canContain, remain);
          remain -= addAmount;
        }
      }
      for (const slot of freeSlots) {
        if (remain <= 0)
          return true;
        const canContain = itemData.limit;
        const addAmount = Math.min(canContain, remain);
        remain -= addAmount;
      }
    }
    return false;
  }
  canSwapItem(itemName, amount, slot) {
    amount = Math.round(amount);
    if (amount < 0)
      return false;
    const itemData = getItemDataByName(itemName);
    if (!itemData)
      return false;
    const slotItem = this._data[slot];
    if (!slotItem)
      return true;
    const slotItemData = getItemDataByName(slotItem.name);
    if (!slotItemData)
      return false;
    const slotItemWeight = slotItemData.weight * slotItem.amount;
    const addItemWeight = itemData.weight * amount;
    if (addItemWeight <= slotItemWeight) {
      return true;
    }
    const curWeight = getInventoryWeight(this.data);
    if (curWeight + addItemWeight - slotItemWeight > this._maxWeight)
      return false;
    return true;
  }
  getInstanceSlot(item) {
    for (const slot of InventorySlot) {
      const slotItem = this._data[slot];
      if (slotItem === item) {
        return slot;
      }
    }
  }
  getLogInfo() {
    return {
      inventoryId: this.id,
      inventoryType: this.type,
      inventoryName: this.name,
      inventoryOwner: this.ownerInfo
    };
  }
  removeItem(itemName, amount, options = {}) {
    this.logInfo("removeItem", itemName, amount, options);
    amount = Math.round(amount);
    if (amount <= 0)
      return [false, null, "Số lượng không hợp lệ"];
    const { slot, instance, uuid } = options;
    const itemData = getItemDataByName(itemName);
    if (!itemData)
      return [false, null, "Vật phẩm không tồn tại"];
    if (itemData.type === "weapon" && amount > 1)
      return [false, null, "Số lượng không hợp lệ"];
    if (slot) {
      const slotItem = this._data[slot];
      if (slotItem) {
        if (slotItem.name === itemName) {
          if (slotItem instanceof cStackableItem) {
            if (slotItem.amount < amount) {
              return [false, null, "Không đủ số lượng"];
            } else {
              slotItem.amount -= amount;
              if (slotItem.amount <= 0) {
                this._data[slot] = null;
              }
              this.save();
              logger(`Đã xóa vật phẩm ${itemName} vào slot ${slot} với số lượng ${amount}`, "remove-item", slotItem.getLogInfo());
              return [true, null, null];
            }
          } else {
            const removeItem = this._data[slot];
            if (!removeItem)
              return [false, null, "Vật phẩm không tồn tại"];
            this._data[slot] = null;
            this.save();
            logger(`Đã xóa vật phẩm ${itemName} vào slot ${slot} với số lượng ${amount}`, "remove-item", removeItem.getLogInfo());
            return [true, removeItem, null];
          }
        }
      }
    }
    if (instance) {
      const slot2 = this.getInstanceSlot(instance);
      if (!slot2)
        return [false, null, "Vật phẩm không tồn tại"];
      this._data[slot2] = null;
      this.save();
      logger(`Đã xóa vật phẩm ${itemName} vào slot ${slot2} với số lượng ${amount}`, "remove-item", instance.getLogInfo());
      return [true, instance, null];
    }
    if (uuid) {
      const item = this.findItemByUUID(uuid);
      if (!item)
        return [false, null, "uuid không hợp lệ"];
      const slot2 = this.getInstanceSlot(item);
      if (!slot2)
        return [false, null, "Vậ t phẩm không tồn tại"];
      this._data[slot2] = null;
      this.save();
      logger(`Đã xóa vật phẩm ${itemName} vào slot ${slot2} với số lượng ${amount}`, "remove-item", item.getLogInfo());
      return [true, item, null];
    }
    if (itemData.type === "weapon") {
      const slot2 = this.getFirstItemSlot(itemName);
      if (!slot2)
        return [false, null, "Không có vật phẩm này"];
      const item = this._data[slot2];
      if (!item)
        return [false, null, "Không có vật phẩm này"];
      this._data[slot2] = null;
      this.save();
      logger(`Đã xóa vật phẩm ${itemName}-${item.uuid} vào slot ${slot2} với số lượng ${amount} `, "remove-item", item.getLogInfo());
      return [true, item, null];
    }
    const slotsHasItem = this.getSlotsByItem(itemName);
    for (const slot2 of slotsHasItem) {
      if (amount <= 0) {
        this.save();
        return [true, null, null];
      }
      const slotItem = this._data[slot2];
      if (slotItem) {
        const canRemove = Math.min(slotItem.amount, amount);
        slotItem.amount -= canRemove;
        if (slotItem.amount <= 0) {
          this._data[slot2] = null;
        }
        amount -= canRemove;
        logger(`Đã xóa vật phẩm ${itemName} vào slot ${slot2} với số lượng ${amount}`, "remove-item", slotItem.getLogInfo());
        if (amount <= 0) {
          this.save();
          return [true, null, null];
        }
      }
    }
    return [false, null, "Không có vật phẩm này"];
  }
  cutItem(slot) {
    this._data[slot] = null;
    this.save();
  }
  removeItemFromSlot(slot, amount) {
    amount = Math.round(amount);
    if (amount <= 0)
      return false;
    const slotItems = this._data[slot];
    if (!slotItems)
      return false;
    if (slotItems.amount < amount)
      return false;
    if (slotItems instanceof cStackableItem) {
      slotItems.amount -= amount;
      if (slotItems.amount <= 0)
        this._data[slot] = null;
    } else {
      this._data[slot] = null;
    }
    this.save();
    return true;
  }
  findItemByUUID(uuid) {
    for (const slot of InventorySlot) {
      const slotItem = this._data[slot];
      if (slotItem) {
        if (!(slotItem instanceof cStackableItem)) {
          if (slotItem.uuid === uuid)
            return slotItem;
        }
      }
    }
    return void 0;
  }
  listen(listener) {
    for (const _listener of this._listeners) {
      if (_listener.playerSource === listener.playerSource) {
        this._listeners.delete(_listener);
      }
    }
    this._listeners.add(listener);
    if (listener.onInit) {
      listener.onInit({
        inventory: this.data,
        name: this._name,
        type: this._type
      });
    }
    if (listener.onUpdateMaxWeight) {
      listener.onUpdateMaxWeight(this._maxWeight);
    }
  }
  removeListener(playerSrc) {
    for (const listener of this._listeners) {
      if (listener.playerSource === playerSrc) {
        this._listeners.delete(listener);
      }
    }
  }
  onInit() {
    for (const listener of this._listeners) {
      if (listener.onInit)
        listener.onInit({
          inventory: this.data,
          name: this._name,
          type: this._type
        });
      if (listener.onUpdateMaxWeight) {
        listener.onUpdateMaxWeight(this._maxWeight);
      }
    }
  }
  async save() {
    if (this.saveTimeout)
      clearTimeout(this.saveTimeout);
    this.saveTimeout = setTimeout(async () => {
      var _a, _b;
      const newData = this.data;
      await inventory_model_default.findOneAndUpdate({ id: this.id }, { data: newData });
      for (const listener of this._listeners) {
        if (listener.onUpdate) {
          listener.onUpdate(newData);
        }
      }
      if (((_a = this._lastData["BAG"]) == null ? void 0 : _a.name) !== ((_b = newData["BAG"]) == null ? void 0 : _b.name)) {
        if (this._lastData["BAG"] !== null) {
          this.onRemoveBackpack();
        } else {
          this.onWearBackpack();
        }
      }
      this._lastData = json(newData);
    }, 150);
  }
  async updateItemData(uuid, data) {
    const item = this.findItemByUUID(uuid);
    if (!item)
      return;
    item.setData(data);
    this.save();
  }
  moveItem(sourceSlot, targetSlot) {
    const sourceItem = this._data[sourceSlot];
    const targetItem = this._data[targetSlot];
    if (sourceItem === null)
      return;
    const itemData = getItemDataByName(sourceItem.name);
    if (!itemData)
      return;
    if (isClotheSlot(targetSlot)) {
      const needSlot = getClotheSlotByType(itemData.type);
      if (!needSlot)
        return;
      if (needSlot !== targetSlot)
        return;
    }
    if (targetItem === null) {
      this._data[targetSlot] = sourceItem;
      sourceItem.slot = targetSlot;
      this._data[sourceSlot] = null;
      this.save();
      return;
    }
    if (sourceItem.name !== targetItem.name) {
      this._data[sourceSlot] = targetItem;
      targetItem.slot = sourceSlot;
      this._data[targetSlot] = sourceItem;
      sourceItem.slot = targetSlot;
      this.save();
      return;
    } else {
      if (itemData.limit === -1) {
        targetItem.amount += sourceItem.amount;
        this._data[sourceSlot] = null;
        this.save();
        return;
      } else {
        const canContain = itemData.limit - targetItem.amount;
        const addAmount = Math.min(sourceItem.amount, canContain);
        targetItem.amount += addAmount;
        sourceItem.amount -= addAmount;
        if (sourceItem.amount <= 0) {
          this._data[sourceSlot] = null;
        }
        this.save();
        return;
      }
    }
  }
  splitItem(slot, amount) {
    amount = Math.round(amount);
    if (amount <= 0)
      return;
    const slotItem = this._data[slot];
    if (!slotItem)
      return;
    const freeSlot = this.getFreeSlot();
    if (!freeSlot)
      return;
    const itemRawData = generateItemData(slotItem.name, amount);
    if (!itemRawData)
      return;
    if (slotItem.amount <= amount)
      return;
    slotItem.amount -= amount;
    this._data[freeSlot] = initItem(itemRawData, freeSlot, this);
    this.save();
  }
  removeItemByUUID(uuid) {
    for (const slot of InventorySlot) {
      const slotItem = this._data[slot];
      if (slotItem) {
        if (!(slotItem instanceof cStackableItem)) {
          if (slotItem.uuid === uuid) {
            this._data[slot] = null;
            this.save();
            return true;
          }
        }
      }
    }
    return false;
  }
  moveItemInto(item) {
    const freeSlot = this.getFreeSlot();
    if (!freeSlot)
      return false;
    this._data[freeSlot] = item;
    item.slot = freeSlot;
    this.save();
    return true;
  }
  canMoveItemInto(slot, item) {
    if (!this.canCarryItem(item.name, item.amount))
      return false;
    const slotItem = this._data[slot];
    if (slotItem === null)
      return true;
    if (slotItem.name !== item.name)
      return false;
    if (item instanceof cStackableItem) {
      const itemData = getItemDataByName(item.name);
      if (!itemData)
        return false;
      if (getInventoryWeight(this.data) + itemData.weight * item.amount > this._maxWeight)
        return false;
      if (itemData.limit === -1)
        return true;
      if (item.amount + slotItem.amount > itemData.limit)
        return false;
      return true;
    } else {
      return false;
    }
  }
  moveItemToSlot(slot, item) {
    const slotItem = this._data[slot];
    if (slotItem === null) {
      this._data[slot] = item;
      item.slot = slot;
      this.save();
      return;
    }
    if (item instanceof cStackableItem) {
      if (slotItem.name === item.name) {
        slotItem.amount += item.amount;
        this.save();
        return;
      }
    }
  }
  clear() {
    for (const slot of NormalSlot) {
      this._data[slot] = null;
    }
    this.save();
    return;
  }
  onWearBackpack() {
    const item = this._data["BAG"];
    if (!item)
      return;
    const itemData = getItemDataByName(item.name);
    if (!itemData)
      return;
    if (!isBackpackItem(itemData))
      return;
    this.maxWeight += itemData.additionalWeight;
  }
  onRemoveBackpack() {
    this.maxWeight = this._defaultMaxWeight;
  }
  async setMaxWeight(weight) {
    this._maxWeight = weight;
    await inventory_model_default.findOneAndUpdate({ id: this.id }, { maxWeight: weight });
    for (const listener of this._listeners) {
      if (listener.onUpdateMaxWeight)
        listener.onUpdateMaxWeight(weight);
    }
  }
  async getPlayerOwner() {
    if (this.type === "trunk") {
      const vehicle = await this.vehiclesService.getVehicleById(this.owner);
      if (vehicle) {
        return await vehicle.getOwner();
      }
    }
  }
  async notification(message) {
    if (this.type === "player") {
      const player = await this.playersService.getPlayerByDataId(this.owner);
      if (player) {
        player.showNotification({
          type: "info",
          message: `Kho đồ của bạn: ${message}`
        });
      }
    } else if (this.type === "trunk") {
      const vehicle = await this.vehiclesService.getVehicleById(this.owner);
      if (vehicle) {
        const owner = await vehicle.getOwner();
        if (owner) {
          owner.showNotification({
            type: "info",
            message: `Cốp xe ${vehicle.plate}: ${message}`
          });
        }
      }
    } else if (this.type === "faction") {
    }
  }
  async getOwner() {
    if (this.type === "player") {
      return this.playersService.getPlayerByDataId(this.owner);
    } else if (this.type === "trunk") {
      return this.vehiclesService.getVehicleById(this.owner);
    } else if (this.type === "faction") {
    } else if (this.type === "stash") {
      return this.safeService.getSafeById(this.owner);
    }
  }
  get freeWeight() {
    return this._maxWeight - this.weight;
  }
};

// ../../ProjectStarboy/src/server/class/transaction.class.ts
var import_container6 = __toESM(require("starboy-framework/dist/packages/core/container"));
var sTransaction = class extends AppClass2 {
  constructor(player1, player2) {
    super("Transaction");
    this.inventoryService = import_container6.default.get(InventoryService);
    this._timeout = 30;
    this._executeTimeout = 5;
    this._shouldDestroy = false;
    this._executing = false;
    this.playersService = import_container6.default.get(PlayersService);
    this.discordService = import_container6.default.get(DiscordService);
    this._player1 = player1;
    this._player2 = player2;
    this._players = [
      {
        name: player1.name,
        _id: player1._id,
        id: player1.id,
        locked: false,
        items: json(DefaultTransferInventory),
        source: player1.source,
        transferMoney: 0
      },
      {
        name: player2.name,
        _id: player2._id,
        id: player2.id,
        locked: false,
        items: json(DefaultTransferInventory),
        source: player2.source,
        transferMoney: 0
      }
    ];
    this._sessionId = e4();
    this._timer = setInterval(() => {
      this._timeout--;
      if (this._timeout <= 0) {
        this.inventoryService.removeTransaction(this._sessionId);
      }
    }, 1e3);
    this.thread();
  }
  async thread() {
    while (!this._shouldDestroy) {
      this.sync();
      await Sleep(1e3);
    }
  }
  get executing() {
    return this._executing;
  }
  get sessionId() {
    return this._sessionId;
  }
  get players() {
    return this._players;
  }
  get data() {
    return {
      sessionId: this.sessionId,
      players: this._players,
      timeout: this._timeout,
      executeTimeout: this._executeTimeout
    };
  }
  destroy() {
    clearInterval(this._timer);
    this._shouldDestroy = true;
    if (this._executeTimer) {
      clearInterval(this._executeTimer);
    }
    for (const player of this._players) {
      emitNet("Player:ShowNotification", player.source, {
        type: "info",
        message: "Giao dịch đã kết thúc"
      });
      emitNet("inventory:transaction:clear", player.source);
    }
  }
  getPlayer(playerId) {
    return this._players.find((player) => player._id === playerId);
  }
  toggleLock(playerId) {
    if (this._executing)
      return;
    const data = this.getPlayer(playerId);
    if (data) {
      if (this._executeTimer) {
        clearInterval(this._executeTimer);
      }
      data.locked = !data.locked;
      if (this.isBothLocked()) {
        this.executeTransaction();
      }
    }
  }
  setTransferMoney(playerId, money) {
    const data = this.getPlayer(playerId);
    if (data) {
      data.transferMoney = money;
    }
  }
  rollbackItems(tempItems1, tempItems2, addedItems1, addedItems2) {
    for (const _item of tempItems1) {
      if (_item instanceof cWeaponItem || _item instanceof cUnStackableItem) {
        this._player1.inventoryInstance.moveItemInto(_item);
      } else {
        this._player1.inventoryInstance.addItem(_item.name, _item.amount);
      }
    }
    for (const _item of tempItems2) {
      if (_item instanceof cWeaponItem || _item instanceof cUnStackableItem) {
        this._player2.inventoryInstance.moveItemInto(_item);
      } else {
        this._player2.inventoryInstance.addItem(_item.name, _item.amount);
      }
    }
    for (const item of addedItems1) {
      if (item instanceof cWeaponItem || item instanceof cUnStackableItem) {
        this._player1.inventoryInstance.removeItemByUUID(item.uuid);
      } else {
        this._player1.inventoryInstance.removeItem(item.name, item.amount);
      }
    }
    for (const item of addedItems2) {
      if (item instanceof cWeaponItem || item instanceof cUnStackableItem) {
        this._player2.inventoryInstance.removeItemByUUID(item.uuid);
      } else {
        this._player2.inventoryInstance.removeItem(item.name, item.amount);
      }
    }
  }
  executeTransaction() {
    this._executing = true;
    this._timeout = 5;
    if (this._timer) {
      clearInterval(this._timer);
    }
    this._executeTimer = setInterval(() => {
      this._timeout--;
      if (this._timeout <= 0) {
        clearInterval(this._executeTimer);
        const player1 = this.playersService.getPlayer(this._players[0].source);
        const player2 = this.playersService.getPlayer(this._players[1].source);
        if (player1 && player2) {
          const player1Items = this.players[0].items;
          const player2Items = this.players[1].items;
          const player1Money = this.players[0].transferMoney;
          const player2Money = this.players[1].transferMoney;
          const tempItems1 = [];
          const tempItems2 = [];
          const addedItem1 = [];
          const addedItem2 = [];
          if (player1.money < player1Money) {
            this.inventoryService.removeTransaction(this._sessionId);
            player2.showNotification({
              type: "error",
              message: "Đối phương không đủ tiền đề giao dịch"
            });
            return;
          }
          if (player2.money < player2Money) {
            this.inventoryService.removeTransaction(this._sessionId);
            player1.showNotification({
              type: "error",
              message: "Đối phương không đủ tiền đề giao dịch"
            });
            return;
          }
          let slot;
          for (slot in player1Items) {
            const items = player1Items[slot];
            if (items !== null) {
              if (isStackableItem(items)) {
                if (player1.inventoryInstance.hasItem(items.name, items.amount)) {
                  tempItems1.push(__spreadValues({}, items));
                  player1.inventoryInstance.removeItem(items.name, items.amount);
                } else {
                  this.rollbackItems(tempItems1, tempItems2, addedItem1, addedItem2);
                  this.inventoryService.removeTransaction(this._sessionId);
                  player1.showNotification({
                    type: "error",
                    message: "Giao dich không hợp lệ"
                  });
                  player2.showNotification({
                    type: "error",
                    message: "Giao dich không hợp lệ"
                  });
                  return;
                }
              } else {
                const itemInstance = player1.inventoryInstance.findItemByUUID(items.uuid);
                if (!itemInstance) {
                  this.rollbackItems(tempItems1, tempItems2, addedItem1, addedItem2);
                  this.inventoryService.removeTransaction(this._sessionId);
                  player1.showNotification({
                    type: "error",
                    message: "Giao dich không hợp lệ"
                  });
                  player2.showNotification({
                    type: "error",
                    message: "Giao dich không hợp lệ"
                  });
                  return;
                }
                player1.inventoryInstance.removeItemByUUID(items.uuid);
                tempItems1.push(itemInstance);
              }
            }
          }
          for (slot in player2Items) {
            const items = player2Items[slot];
            if (items !== null) {
              if (isStackableItem(items)) {
                if (player2.inventoryInstance.hasItem(items.name, items.amount)) {
                  tempItems2.push(__spreadValues({}, items));
                  player2.inventoryInstance.removeItem(items.name, items.amount);
                } else {
                  this.rollbackItems(tempItems1, tempItems2, addedItem1, addedItem2);
                  this.inventoryService.removeTransaction(this._sessionId);
                  player1.showNotification({
                    type: "error",
                    message: "Giao dich không hợp lệ"
                  });
                  player2.showNotification({
                    type: "error",
                    message: "Giao dich không hợp lệ"
                  });
                  return;
                }
              } else {
                const itemInstance = player2.inventoryInstance.findItemByUUID(items.uuid);
                if (!itemInstance) {
                  this.rollbackItems(tempItems1, tempItems2, addedItem1, addedItem2);
                  this.inventoryService.removeTransaction(this._sessionId);
                  player1.showNotification({
                    type: "error",
                    message: "Giao dich không hợp lệ"
                  });
                  player2.showNotification({
                    type: "error",
                    message: "Giao dich không hợp lệ"
                  });
                  return;
                }
                player2.inventoryInstance.removeItemByUUID(items.uuid);
                tempItems2.push(itemInstance);
              }
            }
          }
          for (const item of tempItems1) {
            if (player2.inventoryInstance.canCarryItem(item.name, item.amount)) {
              if (item instanceof cWeaponItem || item instanceof cUnStackableItem) {
                addedItem2.push(item);
                player2.inventoryInstance.moveItemInto(item);
              } else {
                addedItem2.push(item);
                player2.inventoryInstance.addItem(item.name, item.amount);
              }
            } else {
              player1.showNotification({
                type: "error",
                message: "Kho đồ của đối phương đã đầy"
              });
              player2.showNotification({
                type: "error",
                message: "Kho đồ của bạn phương đã đầy"
              });
              this.rollbackItems(tempItems1, tempItems2, addedItem1, addedItem2);
              this.inventoryService.removeTransaction(this._sessionId);
              return;
            }
          }
          for (const item of tempItems2) {
            if (player1.inventoryInstance.canCarryItem(item.name, item.amount)) {
              addedItem1.push(item);
              if (item instanceof cWeaponItem || item instanceof cUnStackableItem) {
                player1.inventoryInstance.moveItemInto(item);
              } else {
                player1.inventoryInstance.addItem(item.name, item.amount);
              }
            } else {
              player2.showNotification({
                type: "error",
                message: "Kho đồ của đối phương đã đầy"
              });
              player1.showNotification({
                type: "error",
                message: "Kho đồ của bạn phương đã đầy"
              });
              this.rollbackItems(tempItems1, tempItems2, addedItem1, addedItem2);
              this.inventoryService.removeTransaction(this._sessionId);
              return;
            }
          }
          player2.addAccountMoney("cash", player1Money);
          player1.removeAccountMoney("cash", player1Money);
          if (player1Money > 0) {
            try {
              logger(`Give ${player1Money}$ cash cho [${player2.id}]${player2.name}`, "givemoney", player1.getLogInfo());
            } catch (error) {
              console.error(error);
            }
          }
          player1.addAccountMoney("cash", player2Money);
          player2.removeAccountMoney("cash", player2Money);
          if (player2Money > 0) {
            logger(`Give ${player2Money}$ cash cho [${player1.id}]${player1.name}`, "givemoney", player2.getLogInfo());
          }
          for (const player of this._players) {
            emitNet("inventory:transaction:clear", player.source);
          }
          this.inventoryService.removeTransaction(this._sessionId);
        } else {
          this.inventoryService.removeTransaction(this._sessionId);
        }
      }
    }, 1e3);
  }
  isBothLocked() {
    for (const value of this._players.values()) {
      if (!value.locked) {
        return false;
      }
    }
    return true;
  }
  showNotification(data) {
    for (const player of this._players) {
      emitNet("Player:ShowNotification", player.source, data);
    }
  }
  sync() {
    for (const player of this._players) {
      emitNet("inventory:transaction:sync", player.source, this.data);
    }
  }
};

// ../../ProjectStarboy/src/server/services/inventory.service.ts
var import_discord5 = require("discord.js");
var InventoryService = class extends AppService {
  constructor(i18n, discordService) {
    super("InventoryService");
    this.i18n = i18n;
    this.discordService = discordService;
    this._inventories = /* @__PURE__ */ new Set();
    this._transactions = /* @__PURE__ */ new Set();
    this.dropInventoriesThread();
  }
  async getInventory(owner, maxWeight, type) {
    for (const inventory of this._inventories) {
      if (inventory.owner === owner) {
        return inventory;
      }
    }
    const foundData = await inventory_model_default.findOne({ owner }).lean();
    if (foundData) {
      const newInventoryInstance2 = await cInventory.init(foundData);
      this._inventories.add(newInventoryInstance2);
      return newInventoryInstance2;
    }
    const newInventoryInstance = await cInventory.create({ owner, maxWeight, type });
    this._inventories.add(newInventoryInstance);
    return newInventoryInstance;
  }
  async getInventoryById(inventoryId) {
    for (const inventory of this._inventories) {
      if (inventory.id === inventoryId) {
        return inventory;
      }
    }
    const findInventory = await inventory_model_default.findById(inventoryId).lean();
    if (!findInventory) {
      return void 0;
    }
    const newInventoryInstance = await cInventory.init(findInventory);
    this._inventories.add(newInventoryInstance);
    return newInventoryInstance;
  }
  async getInventoryByOwner(ownerId) {
    for (const inventory of this._inventories) {
      if (inventory.owner === ownerId) {
        return inventory;
      }
    }
    const findInventory = await inventory_model_default.findOne({ owner: ownerId }).lean();
    if (!findInventory) {
      return void 0;
    }
    const newInventoryInstance = await cInventory.init(findInventory);
    this._inventories.add(newInventoryInstance);
    return newInventoryInstance;
  }
  createTransferSession(player1, player2) {
    if (this.isPlayerInAnotherTransaction(player1) || this.isPlayerInAnotherTransaction(player2)) {
      player1.showNotification({ type: "error", message: "Bạn đang ở trong một giao dịch khác" });
      player2.showNotification({ type: "error", message: "Bạn đang ở trong một giao dịch khác" });
      return;
    }
    const transaction = new sTransaction(player1, player2);
    this._transactions.add(transaction);
    return transaction.data;
  }
  getPlayerTransaction(playerDId) {
    for (const transaction of this._transactions) {
      for (const _player of transaction.players) {
        if (_player._id === playerDId)
          return transaction;
      }
    }
  }
  removeTransaction(sessionId) {
    for (const transaction of this._transactions) {
      if (transaction.sessionId === sessionId) {
        transaction.destroy();
        this._transactions.delete(transaction);
      }
    }
  }
  getTransactionById(sessionId) {
    for (const transaction of this._transactions) {
      if (transaction.sessionId === sessionId) {
        return transaction;
      }
    }
  }
  isPlayerInAnotherTransaction(player) {
    for (const transaction of this._transactions) {
      for (const _player of transaction.players) {
        if (_player._id === player._id)
          return transaction;
      }
    }
    return void 0;
  }
  findTransaction(sessionId) {
    for (const transaction of this._transactions) {
      if (transaction.sessionId === sessionId) {
        return transaction;
      }
    }
  }
  toggleLockStatus(player, sessionId) {
    const transaction = this.findTransaction(sessionId);
    if (!transaction)
      return {
        status: 0 /* FAILED */,
        message: this.i18n.t("INVALID_TRANSACTION_SESSION")
      };
    transaction.toggleLock(player._id);
    return {
      status: 0 /* FAILED */,
      message: this.i18n.t("INVALID_PLAYER_IN_TRANSACTION_SESSION")
    };
  }
  isBothLocked(session) {
    for (const sPlayer of session.players) {
      if (!sPlayer.locked) {
        return false;
      }
    }
    return true;
  }
  async getInventoryOwner(inventory) {
    const isSafe = await safe_model_default.findById(inventory.owner);
    if (isSafe) {
      const safeOwner = await factionModel.findById(isSafe.owner);
      if (safeOwner) {
        return {
          type: "faction",
          name: safeOwner.name
        };
      }
    }
    const isPlayer = await player_model_default.findById(inventory.owner);
    if (isPlayer) {
      return {
        type: "player",
        name: `[${isPlayer.id}] ${isPlayer.name}`
      };
    }
    const isVehicle = await vehicle_model_default.findById(inventory.owner);
    if (isVehicle) {
      return {
        type: "vehicle",
        name: isVehicle.plate
      };
    }
  }
  async onDragEnd(data, caller) {
    var _a, _b;
    const { active, over } = data;
    let { transferamount } = data;
    if (transferamount === null || transferamount === void 0 || transferamount <= 0) {
      transferamount = 1;
    }
    if (!active || !over)
      return;
    if (!active.data || !over.data)
      return;
    if (active.data.current.type === "transfer" || over.data.current.type === "transfer")
      return;
    if (active.data.current.type === "fastslot" || over.data.current.type === "fastslot")
      return;
    const sourceInventoryId = active.data.current.inventoryId;
    const sourceInventorySlot = active.data.current.slot;
    const targetInventoryId = over.data.current.inventoryId;
    const targetInventorySlot = over.data.current.slot;
    const sourceInventory = await this.getInventoryById(sourceInventoryId);
    if (!sourceInventory)
      return;
    if (sourceInventoryId === targetInventoryId) {
      return sourceInventory.moveItem(sourceInventorySlot, targetInventorySlot);
    }
    const targetInventory = await this.getInventoryById(targetInventoryId);
    if (!targetInventory)
      return;
    const sourceSlotItem = sourceInventory.getSlotItems(sourceInventorySlot);
    if (sourceSlotItem === null)
      return;
    const targetSlotItem = targetInventory.getSlotItems(targetInventorySlot);
    const sourceInventoryOwner = await this.getInventoryOwner(sourceInventory);
    const targetInventoryOwner = await this.getInventoryOwner(targetInventory);
    if (!sourceInventoryOwner || !targetInventoryOwner)
      return;
    const embed = new import_discord5.MessageEmbed().setColor("#f19e03").setFooter({
      text: "lr"
    }).setTimestamp();
    if (!targetSlotItem) {
      if (sourceSlotItem instanceof cStackableItem) {
        if (!targetInventory.canCarryItem(sourceSlotItem.name, transferamount || sourceSlotItem.amount))
          return caller.showNotification({ type: "error", message: "Kho đồ đã đầy" });
        if (!sourceInventory.hasItem(sourceSlotItem.name, transferamount || sourceSlotItem.amount))
          return caller.showNotification({
            type: "error",
            message: "Số lượng không hợp lệ"
          });
        sourceInventory.removeItem(sourceSlotItem.name, transferamount || sourceSlotItem.amount);
        targetInventory.addItem(sourceSlotItem.name, transferamount || sourceSlotItem.amount);
      } else {
        if (!targetInventory.canMoveItemInto(targetInventorySlot, sourceSlotItem))
          return;
        sourceInventory.removeItemInstance(sourceSlotItem);
        targetInventory.addItemInstance(sourceSlotItem);
      }
    } else {
      if (sourceSlotItem instanceof cStackableItem) {
        const sourceItemWeight = (((_a = getItemDataByName(sourceSlotItem.name)) == null ? void 0 : _a.weight) || 0) * transferamount;
        const targetItemWeight = (((_b = getItemDataByName(targetSlotItem.name)) == null ? void 0 : _b.weight) || 0) * transferamount;
        this.logInfo(sourceItemWeight, targetItemWeight, targetInventory.freeWeight + targetItemWeight);
        if (targetSlotItem.name !== sourceSlotItem.name) {
          if (sourceItemWeight > targetInventory.freeWeight + targetItemWeight) {
            return caller.showNotification({ type: "error", message: "Kho đồ đã đầy" });
          }
        } else {
          if (!targetInventory.canCarryItem(sourceSlotItem.name, transferamount || sourceSlotItem.amount)) {
            return caller.showNotification({ type: "error", message: "Kho đồ đã đầy" });
          }
        }
        if (!sourceInventory.hasItem(sourceSlotItem.name, transferamount || sourceSlotItem.amount))
          return caller.showNotification({
            type: "error",
            message: "Số lượng không hợp lệ"
          });
        sourceInventory.removeItem(sourceSlotItem.name, transferamount || sourceSlotItem.amount);
        targetInventory.addItem(sourceSlotItem.name, transferamount || sourceSlotItem.amount);
        if (targetSlotItem instanceof cStackableItem) {
          if (targetSlotItem.name !== sourceSlotItem.name) {
            if (targetInventory.hasItem(targetSlotItem.name, transferamount || targetSlotItem.amount)) {
              targetInventory.removeItem(targetSlotItem.name, transferamount || targetSlotItem.amount);
              sourceInventory.addItem(targetSlotItem.name, transferamount || targetSlotItem.amount);
            }
          }
        } else {
          targetInventory.removeItemInstance(targetSlotItem);
          sourceInventory.addItemInstance(targetSlotItem);
        }
      } else {
        if (targetInventory.canSwapItem(sourceSlotItem.name, sourceSlotItem.amount, targetInventorySlot) && sourceInventory.canSwapItem(targetSlotItem.name, targetSlotItem.amount, sourceInventorySlot)) {
          sourceInventory.removeItemInstance(sourceSlotItem);
          targetInventory.removeItemInstance(targetSlotItem);
          sourceInventory.addItemInstance(targetSlotItem);
          targetInventory.addItemInstance(sourceSlotItem);
        } else {
          caller.showNotification({
            type: "error",
            message: "Kho đồ đã đầy"
          });
        }
      }
    }
  }
  async onDragEnd2(player, data) {
    const sourceInventoryId = data.item.inventoryId;
    const targetInventoryId = data.inventoryId;
    const sourceSlot = data.item.slot;
    const targetSlot = data.slot;
    const sourceItem = data.item.item;
    if (!sourceItem)
      return [false, "Vật phẩm không tồn tại"];
    const sourceInventory = await this.getInventoryById(sourceInventoryId);
    if (!sourceInventory)
      return [false, "Kho đồ đi không tồn tại"];
    const targetInventory = await this.getInventoryById(targetInventoryId);
    if (!targetInventory)
      return [false, "Kho đồ đến không tồn tại"];
    const sourceSlotItem = sourceInventory.getSlotItems(sourceSlot);
    if (sourceSlotItem === null)
      return [false, "Vật phẩm không tồn tại trong kho đồ đi"];
    const sourceItemAmount = sourceSlotItem.amount;
    const targetSlotItem = targetInventory.getSlotItems(targetSlot);
    const amount = data.amount !== void 0 && data.amount !== null && data.amount > 0 ? data.amount : sourceSlotItem.amount;
    this.logInfo(amount);
    if (targetSlotItem) {
      const targetItemAmount = targetSlotItem.amount;
      if (sourceSlotItem.name === targetSlotItem.name) {
        if (sourceSlotItem instanceof cStackableItem) {
          if (!targetInventory.canCarryItem(sourceSlotItem.name, amount))
            return [false, "Kho đồ đến đã đầy"];
          const [removeSourceSuccess, removeSourceInstance, removeSourceError] = sourceInventory.removeItem(sourceSlotItem.name, amount, { slot: sourceSlot });
          if (!removeSourceSuccess)
            return [false, removeSourceError || ""];
          const [addTargetSuccess, addTargetInstance, addTargetError] = targetInventory.addItem(sourceSlotItem.name, amount, { slot: targetSlot, instance: removeSourceInstance });
          if (!addTargetSuccess) {
            sourceInventory.addItem(sourceSlotItem.name, amount, { slot: sourceSlot, instance: removeSourceInstance });
            return [false, addTargetError || ""];
          }
          return [true, void 0];
        }
      } else {
        if (sourceSlotItem instanceof cStackableItem && targetSlotItem instanceof cStackableItem) {
          if (data.amount !== void 0 && data.amount !== null && data.amount > 0) {
            if (sourceSlotItem.amount !== targetSlotItem.amount)
              return [false, "Số lượng không hợp lệ"];
          }
        }
        const [removeSourceSuccess, removeSourceInstance, removeSourceError] = sourceInventory.removeItem(sourceSlotItem.name, sourceItemAmount, { slot: sourceSlot });
        if (!removeSourceSuccess)
          return [false, removeSourceError || ""];
        const [removeTargetSuccess, removeTargetInstance, removeTargetError] = targetInventory.removeItem(targetSlotItem.name, targetItemAmount, { slot: targetSlot });
        if (!removeTargetSuccess) {
          sourceInventory.addItem(sourceSlotItem.name, sourceItemAmount, { slot: sourceSlot, instance: removeSourceInstance });
          return [false, removeTargetError || ""];
        }
        const [addTargetSuccess, addTargetInstance, addTargetError] = targetInventory.addItem(sourceSlotItem.name, sourceItemAmount, { slot: targetSlot, instance: removeSourceInstance });
        if (!addTargetSuccess) {
          sourceInventory.addItem(sourceSlotItem.name, sourceItemAmount, { slot: sourceSlot, instance: removeSourceInstance });
          targetInventory.addItem(targetSlotItem.name, targetItemAmount, { slot: targetSlot, instance: removeTargetInstance });
          return [false, addTargetError || ""];
        }
        const [addSourceSuccess, addSourceInstance, addSourceError] = sourceInventory.addItem(targetSlotItem.name, targetItemAmount, { slot: sourceSlot, instance: removeTargetInstance });
        if (!addSourceSuccess) {
          targetInventory.removeItem(sourceSlotItem.name, sourceItemAmount, { slot: targetSlot });
          sourceInventory.addItem(sourceSlotItem.name, sourceItemAmount, { slot: sourceSlot, instance: removeSourceInstance });
          targetInventory.addItem(targetSlotItem.name, targetItemAmount, { slot: targetSlot, instance: removeTargetInstance });
          return [false, addSourceError || ""];
        }
        return [true, void 0];
      }
    }
    if (data.type === "clothes") {
      console.log(targetInventory.canPutItemInSlot(sourceItem.name, sourceItem.amount, targetSlot));
      if (!targetInventory.canPutItemInSlot(sourceItem.name, sourceItem.amount, targetSlot))
        return [false, "Không thể đặt vật phẩm vào vị trí này"];
    }
    if (sourceInventoryId !== targetInventoryId) {
      if (!targetInventory.canCarryItem(sourceSlotItem.name, sourceSlotItem.amount))
        return [false, "Kho đồ đã đầy"];
    }
    const [removeSuccess, removeInstance, error] = sourceInventory.removeItem(sourceSlotItem.name, amount, { slot: sourceSlot });
    this.logInfo(removeSuccess);
    if (!removeSuccess) {
      this.logInfo("removeSuccess is false");
      return [false, error || ""];
    }
    targetInventory.addItem(sourceSlotItem.name, amount, { slot: targetSlot, instance: removeInstance });
    this.logInfo("done");
    return [true, void 0];
  }
  onPlayerDropped(player) {
    for (const inventory of this._inventories) {
      inventory.removeListener(player.source);
    }
    const transaction = this.isPlayerInAnotherTransaction(player);
    if (transaction) {
      transaction.showNotification({
        type: "warning",
        message: "Đối phương đã thoát game"
      });
      this.removeTransaction(transaction.sessionId);
    }
  }
  async createDropInventory(player, coords) {
    const inventory = await cInventory.create({
      owner: player._id,
      maxWeight: 1e5,
      type: "drop",
      temp: true,
      coords
    });
    this._inventories.add(inventory);
    emitNet("inventory:createDropInventory", -1, inventory.id, coords);
    return inventory;
  }
  getAllDropInventory() {
    const inventories = [];
    for (const inventory of this._inventories) {
      if (inventory.type === "drop" && inventory.coords)
        inventories.push({ coords: inventory.coords, inventoryId: inventory.id });
    }
    return inventories;
  }
  async removeTempInventory(inventoryId) {
    for (const inventory of this._inventories) {
      if (inventory.id === inventoryId) {
        if (!inventory.temp)
          return;
        if (inventory._listeners.size > 0)
          return;
        emitNet("inventory:removeDropInventory", -1, inventoryId);
        this._inventories.delete(inventory);
      }
    }
  }
  async dropInventoriesThread() {
    while (true) {
      await Sleep(28e4);
      emitNet("Player:ShowNotification", -1, {
        message: "Tất cả vật phẩm trên mặt đất sẽ bị xóa sau 20 giây nữa",
        type: "warning",
        duration: 2e3
      });
      await Sleep(2e4);
      for (const inventory of this._inventories) {
        if (inventory.type === "drop" && inventory.coords) {
          this.removeTempInventory(inventory.id);
        }
      }
      emitNet("Player:ShowNotification", -1, {
        message: "Tất cả vật phẩm trên mặt đất đã bị xóa",
        type: "success",
        duration: 2e3
      });
    }
  }
};
InventoryService = __decorateClass([
  (0, import_starboy_framework7.Injectable)(),
  __decorateParam(0, (0, import_starboy_framework7.Inject)(I18n)),
  __decorateParam(1, (0, import_starboy_framework7.Inject)(DiscordService))
], InventoryService);

// ../../ProjectStarboy/src/server/services/scoreboard.service.ts
var import_starboy_framework8 = require("starboy-framework");
var ScoreboardService = class extends AppService {
  constructor(factionService) {
    super("ScoreboardService");
    this.factionService = factionService;
    this.players = /* @__PURE__ */ new Set();
    this.totalPolice = 0;
    this.totalMechanic = 0;
    this.totalAmbulance = 0;
    GlobalState.police = 0;
    GlobalState.mechanic = 0;
    GlobalState.ambulance = 0;
  }
  getPlayers() {
    return Array.from(this.players);
  }
  setAvatar(base64, playerSource) {
    for (const player of this.players) {
      if (player.source === playerSource) {
        player.playerAvatar = base64;
        emitNet("scoreboard:client:updatePlayer", -1, player);
        break;
      }
    }
  }
};
ScoreboardService = __decorateClass([
  (0, import_starboy_framework8.Injectable)(),
  __decorateParam(0, (0, import_starboy_framework8.Inject)(FactionService))
], ScoreboardService);

// ../../ProjectStarboy/src/server/class/Player.class.ts
var diff2 = (0, import_jsondiffpatch2.create)({
  objectHash: function(obj, index) {
    return obj.length || "$$index:" + index;
  },
  arrays: {
    detectMove: false
  }
});
var cPlayer = class extends AppClass2 {
  constructor(props, _source) {
    super("Player");
    this.inventoryHandler = /* @__PURE__ */ new Set();
    this.i18n = import_container7.default.get(I18n);
    this.factionService = import_container7.default.get(FactionService);
    this.inventoryService = import_container7.default.get(InventoryService);
    this.scoreboardService = import_container7.default.get(ScoreboardService);
    this._id = "";
    this.__id = 0;
    this._name = "";
    this._email = "";
    this._gender = "female";
    this._health = 200;
    this._armour = 0;
    this._verified = false;
    this._money = 0;
    this._bank = 0;
    this._coin = 0;
    this._blackMoney = 0;
    this._coords = [0, 0, 0];
    this._hunger = 1e3;
    this._thirst = 1e3;
    this._isCuffing = false;
    this._isDead = false;
    this._avatar = "";
    this._exp = 0;
    this._wanted = 0;
    this._lastLogin = new Date().toISOString();
    this._group = "user";
    this._fastSlot = {};
    this._newbieReward = false;
    this._onlineTime = 0;
    this.steam = "unknown";
    this.license = "unknown";
    this.live = "unknown";
    this.discord = "unknown";
    this.fivem = "unknown";
    this.license2 = "unknown";
    this.ip = "unknown";
    this.socketService = import_container7.default.get(SocketService);
    this.isRunningOnlineRewardThread = false;
    this.addInventoryItems = (data) => {
      data.forEach((d) => {
        this.addInventoryItem(d);
      });
    };
    this.canCarryItem = (data) => {
      this.logWarning(this.name);
      return this._inventory.canCarryItem(data.itemName, data.amount);
    };
    this.canCarryItems = (data) => {
      for (let i = 0; i < data.length; i++) {
        const element = data[i];
        if (!this.canCarryItem(element)) {
          return false;
        }
      }
      return true;
    };
    this.hasBackpack = () => {
      return true;
    };
    this.triggerEvent = this.emitNet;
    this._source = _source;
    this._id = props._id.toString();
    this.__id = props.id || 0;
    this._name = props.name;
    this._email = props.email;
    this._gender = props.gender;
    this._health = props.health;
    this._armour = props.armour;
    this._verified = props.verified;
    this._money = props.money;
    this._bank = props.bank;
    this._coin = props.coin;
    this._blackMoney = props.blackMoney || 0;
    this._coords = props.coords;
    this._appearance = props.appearance;
    this._hunger = props.hunger;
    this._thirst = props.thirst;
    this._isCuffing = props.isCuffing;
    this._isDead = props.isDead;
    this._avatar = props.avatar;
    this._exp = props.exp;
    this._wanted = props.wanted;
    this._group = props.group;
    this._fastSlot = props.fastSlot;
    this._newbieReward = props.newbieReward;
    this._job = props.job;
    this._onlineTime = props.onlineTime || 0;
    this.faction = props.faction;
    this.identifiers = props.identifiers;
    this.tokens = props.tokens;
  }
  static async init(props, _source) {
    const instance = new cPlayer(props, _source);
    return instance;
  }
  socketEmit(event, ...args) {
    this.socketService.emit(event, this.source, ...args);
  }
  get onlineTime() {
    return this._onlineTime;
  }
  get job() {
    return this._job;
  }
  set job(job) {
    this._job = job;
    this.saveField("job");
  }
  setJob(job) {
    this.job = job;
  }
  async prepareInventory() {
    this._inventory = await this.inventoryService.getInventory(this._id, 4e4, "player");
    if (this._inventory.ownerInfo === "unknown") {
      this._inventory.ownerInfo = `${this.name}(${this.id})`;
    }
  }
  get source() {
    return this._source;
  }
  set source(src) {
    this._source = src;
  }
  get online() {
    return this._source !== "0";
  }
  get name() {
    return this._name;
  }
  getLogInfo() {
    return {
      name: this.name,
      id: this.id.toString(),
      email: this.email,
      ip: this.ip,
      steam: this.steam,
      license: this.license,
      live: this.live,
      discord: this.discord,
      fivem: this.fivem,
      license2: this.license2,
      source: this.source
    };
  }
  async setName(newName) {
    this._name = newName;
    if (this.stateBag)
      this.stateBag.name = this.name;
    await this.saveField("name");
  }
  get email() {
    return this._email;
  }
  set email(newEmail) {
    this._email = newEmail;
    this.saveField("email");
  }
  get gender() {
    return this._gender;
  }
  get health() {
    return this._health;
  }
  set health(newHealth) {
    this._health = newHealth;
    this.saveField("health");
  }
  get armour() {
    return this._armour;
  }
  set armour(newArmour) {
    this._armour = newArmour;
    this.saveField("armour");
  }
  get verified() {
    return this._verified;
  }
  set verified(state) {
    this._verified = state;
    this.saveField("verified");
  }
  get id() {
    return this.__id;
  }
  get money() {
    return this._money;
  }
  set money(amount) {
    this._money = amount;
    this.saveField("money");
  }
  get bank() {
    return this._bank;
  }
  set bank(amount) {
    this._bank = amount;
    this.saveField("bank");
  }
  get coin() {
    return this._coin;
  }
  set coin(amount) {
    this._coin = amount;
    this.saveField("coin");
  }
  get blackMoney() {
    return this._blackMoney;
  }
  set blackMoney(amount) {
    this._blackMoney = amount;
    this.saveField("blackMoney");
  }
  get coords() {
    return this._coords;
  }
  set coords(coords) {
    this._coords = coords;
    this.saveField("coords");
  }
  get appearance() {
    return this._appearance ? json(this._appearance) : void 0;
  }
  set appearance(data) {
    this._appearance = data;
    this.saveField("appearance");
  }
  get inventory() {
    return this._inventory.data;
  }
  get inventoryWeight() {
    return this._inventory.weight;
  }
  get hunger() {
    return this._hunger;
  }
  set hunger(value) {
    this._hunger = value;
    this.saveField("hunger");
  }
  get thirst() {
    return this._thirst;
  }
  set thirst(value) {
    this._thirst = value;
    this.saveField("thirst");
  }
  get isCuffing() {
    return this._isCuffing;
  }
  set isCuffing(state) {
    this._isCuffing = state;
    if (this.stateBag)
      this.stateBag.isHandCuff = state;
    this.saveField("isCuffing");
  }
  get isDead() {
    return this._isDead;
  }
  set isDead(state) {
    this._isDead = state;
    this.saveField("isDead");
  }
  get avatar() {
    return this._avatar;
  }
  set avatar(url) {
    this._avatar = url;
    this.saveField("avatar");
  }
  get exp() {
    return this._exp;
  }
  set exp(value) {
    this._exp = value;
    this.saveField("exp");
  }
  get wanted() {
    return this._wanted;
  }
  set wanted(value) {
    if (value < 0)
      value = 0;
    if (value > 6)
      value = 6;
    this._wanted = value;
    if (this.stateBag)
      this.stateBag.wanted = value;
    this.saveField("wanted");
  }
  setFaction(faction) {
    this.faction = faction;
    this.saveField("faction");
  }
  get lastLogin() {
    return this._lastLogin;
  }
  set lastLogin(newData) {
    this._lastLogin = newData;
    this.saveField("lastLogin");
  }
  get group() {
    return this._group;
  }
  set group(newGroup) {
    this._group = newGroup;
    this.saveField("group");
  }
  get fastSlot() {
    return json(this._fastSlot);
  }
  get newbieReward() {
    return this._newbieReward;
  }
  set newbieReward(value) {
    this._newbieReward = value;
    this.saveField("newbieReward");
  }
  get data() {
    const data = {
      _id: this._id,
      id: this.id,
      name: this.name,
      email: this.email,
      gender: this.gender,
      health: this.health,
      armour: this.armour,
      verified: this.verified,
      money: this.money,
      bank: this.bank,
      coin: this.coin,
      blackMoney: this.blackMoney,
      coords: this.coords,
      appearance: this.appearance,
      inventory: this.inventory,
      inventoryWeight: this._inventory.weight,
      maxInventoryWeight: this._inventory.maxWeight,
      hunger: this.hunger,
      thirst: this.thirst,
      faction: this.faction,
      isCuffing: this.isCuffing,
      isDead: this.isDead,
      avatar: this.avatar,
      exp: this.exp,
      wanted: this.wanted,
      lastLogin: this.lastLogin,
      group: this.group,
      fastSlot: this.fastSlot,
      inventoryId: this._inventory.id,
      newbieReward: this._newbieReward,
      job: this.job,
      onlineTime: this._onlineTime
    };
    this.log("data", data);
    return data;
  }
  subscribeInventory(name, handler) {
    this.inventoryHandler.add({ name, handler });
  }
  unSubscribleInventory(name) {
    for (const handler of this.inventoryHandler) {
      if (handler.name === name)
        this.inventoryHandler.delete(handler);
    }
  }
  updateLastLogin() {
    this.lastLogin = new Date().toISOString();
    this.saveField("lastLogin");
  }
  claimNewbieReward() {
    this._newbieReward = true;
    this.saveField("newbieReward");
  }
  setAvatar(url) {
    this.avatar = url;
    this.saveField("avatar");
  }
  setDead(status) {
    this.isDead = status;
    this.saveField("isDead");
  }
  setCuffing(status) {
    this.isCuffing = status;
    this.saveField("isCuffing");
  }
  setCoords(coords) {
    if (this.source !== "0")
      SetEntityCoords(GetPlayerPed(this.source), coords[0], coords[1], coords[2], true, false, false, false);
    this.coords = coords;
  }
  addHunger(amount) {
    if (amount <= 0)
      return;
    this.hunger = this.hunger + amount;
    if (this.hunger > 1e3)
      this.hunger = 1e3;
    this.saveField("hunger");
  }
  setHunger(amount) {
    if (amount <= 0 || amount > 1e3)
      return;
    this.hunger = amount;
    this.saveField("hunger");
  }
  removeHunger(amount) {
    if (amount <= 0)
      return;
    this.hunger -= amount;
    if (this.hunger < 0)
      this.hunger = 0;
    this.saveField("hunger");
  }
  addThirst(amount) {
    if (amount <= 0)
      return;
    this.thirst = this.thirst + amount;
    if (this.thirst > 1e3)
      this.thirst = 1e3;
    this.saveField("thirst");
  }
  setThirst(amount) {
    if (amount <= 0)
      return;
    this.thirst = amount;
    this.saveField("thirst");
  }
  removeThirst(amount) {
    if (amount <= 0)
      return;
    this.thirst -= amount;
    if (this.thirst < 0)
      this.thirst = 0;
    this.saveField("thirst");
  }
  save() {
  }
  setFastSlot(slot, itemName) {
    this._fastSlot[slot] = itemName;
    this.saveField("fastSlot");
  }
  removeFastSlot(slot) {
    this._fastSlot[slot] = void 0;
    this.saveField("fastSlot");
  }
  async saveField(field) {
    await player_model_default.findByIdAndUpdate(this._id, { [field]: this[field] }, { new: true });
    if (field === "inventory") {
    } else {
      if (field !== "coords")
        this.syncField(field);
    }
  }
  syncField(field) {
    if (this.source == "0")
      return;
    emitNet("PlayerService:SyncField", this.source, field, this[field]);
  }
  saveAppearance(data) {
    this.appearance = data;
    this.saveField("appearance");
  }
  updateAppearance(data) {
    if (this.appearance) {
      this.appearance = __spreadValues(__spreadValues({}, this.appearance), data);
    }
    this.saveField("appearance");
  }
  saveCoords() {
    if (this.source == "0")
      return;
    const ped = GetPlayerPed(this.source);
    const pedCoords = GetEntityCoords(ped);
    this.coords = pedCoords;
    this.saveField("coords");
  }
  dropped() {
    this.updateLastLogin();
    this.logInfo(`${"^3" /* Yellow */}[${this.id}(${this.name})]${"^1" /* Red */} dropped ${"^0" /* White */}`);
    this._source = "0";
    this.saveField("onlineTime");
  }
  showNotification(data) {
    emitNet("Player:ShowNotification", this.source, data);
  }
  hasItem(data) {
    return this._inventory.hasItem(data.itemName, data.amount);
  }
  hasItems(data) {
    for (let i = 0; i < data.length; i++) {
      const e = data[i];
      const hasItem = this.hasItem(e);
      if (!hasItem)
        return false;
    }
    return true;
  }
  isAddableSlot(slot) {
    return this._inventory.isAddableSlot(slot);
  }
  getFreeSlot() {
    return this._inventory.getFreeSlots();
  }
  getSlotByItemName(itemName) {
    return this._inventory.getSlotsByItem(itemName);
  }
  getItemAmount(itemName) {
    return this._inventory.getItemAmount(itemName);
  }
  addInventoryItem(data) {
    const dataItem = getItemDataByName(data.itemName);
    const message = {
      name: data.itemName,
      amount: data.amount,
      label: (dataItem == null ? void 0 : dataItem.label) || "",
      type: "increase"
    };
    this.emitNet("player:inventory:showNotify", message);
    return this._inventory.addItem(data.itemName, data.amount);
  }
  removeInventoryItem(data) {
    if (data.slot && data.amount) {
      return this._inventory.removeItemFromSlot(data.slot, data.amount);
    }
    if (!data.itemName)
      return;
    if (!data.amount)
      return;
    const dataItem = getItemDataByName(data.itemName);
    const message = {
      name: data.itemName,
      amount: data.amount,
      label: (dataItem == null ? void 0 : dataItem.label) || "",
      type: "decrease"
    };
    this.emitNet("player:inventory:showNotify", message);
    return this._inventory.removeItem(data.itemName, data.amount);
  }
  splitItem(slot, amount) {
  }
  emitNet(eventName, ...args) {
    if (this.source == "0")
      return;
    emitNet(eventName, this.source, ...args);
  }
  addAccountMoney(type, value) {
    if (value <= 0)
      return;
    value = Math.floor(value);
    this.emitNet("cPlayer:addAccountMoney", type, value);
    switch (type) {
      case "bank":
        this.bank = this.bank + value;
        return this.saveField("bank");
      case "cash":
        this.money = this.money + value;
        return this.saveField("money");
      case "money":
        this.money = this.money + value;
        return this.saveField("money");
      case "coin":
        this.coin = this.coin + value;
        return this.saveField("coin");
      default:
        break;
    }
  }
  getAccountMoney(type) {
    switch (type) {
      case "bank":
        return this.bank;
      case "blackMoney":
        return this.blackMoney;
      case "cash":
        return this.money;
      case "money":
        return this.money;
      case "coin":
        return this.coin;
      default:
        return this.money;
    }
  }
  removeAccountMoney(type, value) {
    if (value <= 0)
      return;
    value = Math.floor(value);
    this.emitNet("cPlayer:removeAccountMoney", type, value);
    switch (type) {
      case "bank":
        this.bank -= value;
        return this.saveField("bank");
      case "blackMoney":
        this.blackMoney -= value;
        return this.saveField("blackMoney");
      case "cash":
        this.money -= value;
        return this.saveField("money");
      case "money":
        this.money -= value;
        return this.saveField("money");
      case "coin":
        this.coin -= value;
        return this.saveField("coin");
      default:
        break;
    }
  }
  removeAllAccountMoney(amount) {
    if (amount <= 0)
      return false;
    let remainAmount = Math.round(amount);
    if (this.money + this.bank < remainAmount)
      return false;
    if (this.money >= remainAmount) {
      this.money -= remainAmount;
      this.saveField("money");
      return true;
    } else {
      remainAmount -= this.money;
      this.money = 0;
      this.saveField("money");
    }
    if (remainAmount > 0) {
      this.bank -= remainAmount;
      this.saveField("bank");
    }
    return true;
  }
  addExp(exp) {
    this.exp = this.exp + exp;
    this.saveField("exp");
  }
  removeExp(exp) {
    this.exp -= exp;
    if (this.exp < 0)
      this.exp = 0;
    this.saveField("exp");
  }
  findItemByUUID(uuid) {
    return this._inventory.findItemByUUID(uuid);
  }
  async login(playerSrc) {
    await this.prepareInventory();
    this.ip = GetPlayerIdentifierByType(playerSrc, "ip");
    this.steam = GetPlayerIdentifierByType(playerSrc, "steam");
    this.license = GetPlayerIdentifierByType(playerSrc, "license");
    this.live = GetPlayerIdentifierByType(playerSrc, "live");
    this.discord = GetPlayerIdentifierByType(playerSrc, "discord");
    this.fivem = GetPlayerIdentifierByType(playerSrc, "fivem");
    this.license2 = GetPlayerIdentifierByType(playerSrc, "license2");
    this._source = playerSrc;
    this.stateBag = Player(playerSrc).state;
    this.stateBag.id = this.id;
    this.stateBag._id = this._id;
    this.stateBag.name = this.name;
    this.stateBag.faction = this.faction;
    this.stateBag.wanted = this.wanted;
    this.stateBag.isHandCuff = this.isCuffing;
    this._inventory.listen({
      playerSource: this.source,
      onInit: (data) => {
        this.emitNet("player:init:inventory", data, this._inventory.id);
      },
      onUpdate: (data) => {
        this.socketEmit("player:sync:inventory", data);
      },
      onUpdateMaxWeight: (maxWeight) => {
        this.emitNet("player:sync:maxWeight", maxWeight);
      }
    });
    this.onlineRewardThread();
  }
  async onlineRewardThread() {
    if (this.isRunningOnlineRewardThread)
      return;
    this.isRunningOnlineRewardThread = true;
    const curDate = new Date().toDateString();
    const lastLoginDate = new Date(this.lastLogin).toDateString();
    this.logInfo("onlineRewardThread", curDate, lastLoginDate);
    if (curDate !== lastLoginDate) {
      this._onlineTime = 0;
    }
    while (this._source !== "0") {
      await Sleep(1e3);
      this._onlineTime++;
    }
    this.isRunningOnlineRewardThread = false;
  }
  logout() {
    this._source = "0";
    this.saveField("onlineTime");
  }
  reloadWeaponAmmo(data) {
    const item = this.findItemByUUID(data.weaponId);
    if (!item)
      return { status: 0 /* FAILED */, message: "Vật phẩm không tồn tại" };
    if (!(item instanceof cWeaponItem))
      return { status: 0 /* FAILED */, message: "Vật phẩm không phải vũ khí" };
    if (this.hasItem({ itemName: data.name, amount: data.amount })) {
      item.ammo = data.newAmmo;
      item.reduceStability(data.amount * 4);
      this.removeInventoryItem({ itemName: data.name, amount: data.amount });
      return { status: 1 /* SUCCESS */, data: item };
    } else {
      return { status: 0 /* FAILED */, message: "Không đủ đạn" };
    }
  }
  addMoney(value, reason) {
    this.money = value;
  }
  get inventoryInstance() {
    return this._inventory;
  }
  async isFactionMember(factionNameOrId) {
    if (!this.faction)
      return false;
    const faction = await this.factionService.getFactionFromName(factionNameOrId);
    if (!faction)
      return false;
    return faction.isMember(this.id);
  }
  async addTattoo(tattoo) {
    if (!this._appearance)
      return;
    this._appearance.tattoos.push(tattoo);
    await this.saveField("appearance");
  }
};

// ../../ProjectStarboy/src/server/services/players.service.ts
var import_crypto3 = __toESM(require("crypto"));
var env = GetConvar("env", "production");
var PlayersService = class extends AppService {
  constructor(i18n, scoreboardService, discordService) {
    super("PlayersService");
    this.i18n = i18n;
    this.scoreboardService = scoreboardService;
    this.discordService = discordService;
    this.players = /* @__PURE__ */ new Set();
    this.playersPosition = /* @__PURE__ */ new Map();
    this.playerModel = player_model_default;
    this.subscribeHandler = {
      playerLoaded: /* @__PURE__ */ new Set(),
      playerDropped: /* @__PURE__ */ new Set(),
      playerInventory: /* @__PURE__ */ new Set()
    };
    this.mainThread();
  }
  subscribe(type, handler, invoker) {
    this.subscribeHandler[type].add({ cb: handler, name: invoker });
  }
  async mainThread() {
    setInterval(() => {
      for (const player of this.players) {
        player.saveCoords();
      }
    }, 1e4);
    while (true) {
      for (const player of this.players) {
        if (player.source !== "0") {
          const playerPed = GetPlayerPed(player.source);
          const playerCoords = GetEntityCoords(playerPed);
          this.playersPosition.set(player.source, playerCoords);
        }
      }
      await Sleep(100);
    }
  }
  getPlayerCoords(playerSrc) {
    return this.playersPosition.get(playerSrc);
  }
  addPlayer(player) {
    this.players.add(player);
    this.logInfo(`${"^2" /* Green */}[${player.email}]${"^0" /* White */} connected to server`);
    for (const handler of this.subscribeHandler.playerLoaded) {
      handler.cb(player);
    }
  }
  getPlayer(playerSrc) {
    if (typeof playerSrc === "number")
      playerSrc = String(playerSrc);
    for (const player of this.players) {
      if (player.source === playerSrc)
        return player;
    }
  }
  getPlayers() {
    return this.players;
  }
  getPlayerByIdSync(playerId) {
    if (typeof playerId === "string")
      playerId = parseInt(playerId);
    for (const player of this.players) {
      if (player.id === playerId) {
        return player;
      }
    }
  }
  async getPlayerById(playerId) {
    this.logInfo(playerId, typeof playerId, this.players.size);
    if (typeof playerId === "string")
      playerId = parseInt(playerId);
    for (const player of this.players) {
      this.logInfo(player.id, playerId, typeof player.id, typeof playerId);
      if (player.id === playerId) {
        return player;
      }
    }
    const playerData = await this.playerModel.findOne({ id: playerId }).lean();
    if (playerData) {
      const player = await cPlayer.init(playerData, "0");
      return player;
    }
  }
  async getPlayerByDataId(dataId) {
    for (const player of this.players) {
      if (player._id.toString() === dataId) {
        return player;
      }
    }
    const playerData = await this.playerModel.findById(dataId).lean();
    if (playerData) {
      const player = await cPlayer.init(playerData, "0");
      return player;
    }
  }
  removePlayer(playerSrc) {
    for (const player of this.players) {
      if (player.source === playerSrc) {
        player.save();
        for (const handler of this.subscribeHandler.playerDropped) {
          if (env === "development") {
            this.logInfo(handler.name);
          }
          handler.cb(player);
        }
        player.logout();
        return;
      }
    }
  }
  savePlayerAppearance(source2, data) {
    const _source = String(source2);
    const player = this.getPlayer(_source);
    if (!player)
      return;
    player.saveAppearance(data);
  }
  async register(data) {
    const _source = String(source);
    if (!data.email)
      return {
        status: 0 /* FAILED */,
        message: this.i18n.t("EMAIL_IS_REQUIRED")
      };
    if (!data.password)
      return {
        status: 0 /* FAILED */,
        message: this.i18n.t("PASSWORD_IS_REQUIRED")
      };
    if (!data.name)
      return {
        status: 0 /* FAILED */,
        message: this.i18n.t("NAME_IS_REQUIRED")
      };
    if (!data.gender)
      return {
        status: 0 /* FAILED */,
        message: this.i18n.t("GENDER_IS_REQUIRED")
      };
    try {
      const salt = import_crypto3.default.randomBytes(16).toString("hex");
      const hashedPassword = import_crypto3.default.pbkdf2Sync(data.password, salt, 1e3, 64, "sha512").toString("hex");
      const verifyCode = await import_crypto3.default.randomBytes(3).toString("hex");
      const identifiers = this.getPlayerIdentifiers(_source);
      const tokens = this.getPlayerTokens(_source);
      const createdPlayerData = await this.playerModel.create(__spreadProps(__spreadValues({}, data), {
        password: hashedPassword,
        salt,
        verifyCode,
        identifiers,
        tokens,
        money: PlayerConfig.defaultMoney,
        bank: PlayerConfig.defaultBank
      }));
      const player = await cPlayer.init(createdPlayerData, "0");
      logger(`player register ${player.name} ${player.id} ${player.email}`, "player:register", player.getLogInfo());
      return {
        status: 1 /* SUCCESS */,
        data: player.data
      };
    } catch (error) {
      return {
        status: 0 /* FAILED */,
        message: this.i18n.t("EMAIL_OR_NAME_ALREADY_EXISTS")
      };
    }
  }
  async auth(data) {
    const _source = String(source);
    if (!data.email)
      return {
        status: 0 /* FAILED */,
        message: this.i18n.t("EMAIL_IS_REQUIRED")
      };
    if (!data.password)
      return {
        status: 0 /* FAILED */,
        message: this.i18n.t("PASSWORD_IS_REQUIRED")
      };
    try {
      const findPlayer = await this.playerModel.findOne({
        email: data.email
      }).lean();
      if (!findPlayer)
        throw new Error(this.i18n.t("USER_DOES_NOT_EXIST"));
      const hashedPassword = import_crypto3.default.pbkdf2Sync(data.password, findPlayer.salt || "", 1e3, 64, "sha512").toString("hex");
      if (hashedPassword !== findPlayer.password)
        throw new Error();
      let player = await this.getPlayerByDataId(findPlayer._id.toString());
      if (!player) {
        player = await cPlayer.init(findPlayer, _source);
      }
      this.addPlayer(player);
      this.log(`player login ${player.name} ${player.id}`);
      await player.login(_source);
      this.log(this.players.size);
      for (const handler of this.subscribeHandler.playerLoaded) {
        handler.cb(player);
      }
      logger(`player login ${player.name} ${player.id} ${player.email}`, "player:login", player.getLogInfo());
      return {
        status: 1 /* SUCCESS */,
        data: player.data
      };
    } catch (error) {
      console.error(error);
      return {
        status: 0 /* FAILED */,
        message: this.i18n.t("EMAIL_OR_PASSWORD_IS_INCORRECT")
      };
    }
  }
  playerDropped(source2) {
    const player = this.getPlayer(source2);
    if (!player) {
      logger(`player dropped ${source2}`, "player:dropped", {
        steam: GetPlayerIdentifierByType(source2, "steam"),
        license: GetPlayerIdentifierByType(source2, "license"),
        live: GetPlayerIdentifierByType(source2, "live"),
        discord: GetPlayerIdentifierByType(source2, "discord"),
        fivem: GetPlayerIdentifierByType(source2, "fivem"),
        license2: GetPlayerIdentifierByType(source2, "license2"),
        ip: GetPlayerIdentifierByType(source2, "ip")
      });
      return;
    }
    this.removePlayer(source2);
    logger(`player dropped ${player.name} ${player.id} ${player.email}`, "player:dropped", player.getLogInfo());
    player.dropped();
  }
  gesSteamIdentifier(source2) {
    for (let i = 0; i < GetNumPlayerIdentifiers(source2); i++) {
      const identifier = GetPlayerIdentifier(source2, i);
      if (identifier.includes("steam:")) {
        return identifier;
      }
    }
  }
  getPlayerTokens(source2) {
    const data = [];
    const numToken = GetNumPlayerTokens(source2);
    for (let i = 0; i < numToken; i++) {
      data.push(GetPlayerToken(source2, i));
    }
    return data;
  }
  getPlayerIdentifiers(source2) {
    const data = [];
    const numIden = GetNumPlayerIdentifiers(source2);
    for (let i = 0; i < numIden; i++) {
      data.push(GetPlayerIdentifier(source2, i));
    }
    return data;
  }
};
PlayersService = __decorateClass([
  (0, import_starboy_framework9.Injectable)(),
  __decorateParam(0, (0, import_starboy_framework9.Inject)(I18n)),
  __decorateParam(1, (0, import_starboy_framework9.Inject)(ScoreboardService)),
  __decorateParam(2, (0, import_starboy_framework9.Inject)(DiscordService))
], PlayersService);

// ../../ProjectStarboy/src/server/services/ambulance.service.ts
var import_starboy_framework10 = require("starboy-framework");

// ../../ProjectStarboy/src/shared/config/ambulance.ts
var AmbulanceConfig = [
  {
    name: "Bệnh viện",
    blip: [
      {
        coords: [305.61965942381, -590.4978027345, 43.283969879159, 21.880271911621094],
        sprite: 61,
        display: 4,
        scale: 1.2,
        color: 2,
        title: "Bệnh viện"
      },
      {
        coords: [1830.745849609375, 3681.760986328125, 34.271018981933594],
        sprite: 61,
        display: 4,
        scale: 1.2,
        color: 2,
        title: "Bệnh viện"
      }
    ],
    cloakroom: [299.1554870605469, -598.2024536132, 43.284027099605, 95.647254943846],
    armory: [
      [306.7637939453125, -601.8146362304688, 43.28400802612305, 154.74932861328125],
      [1823.884033203125, 3687.07763671875, 34.271087646484375]
    ],
    vehicleGarage: {
      marker: [
        [295.46392822265625, -600.505126953125, 43.303955078125, 340.7010192871094],
        [1837.1103515625, 3667.493408203125, 33.67992401123047, 213.5368957519531]
      ],
      despawns: [
        [288.09027099609375, -612.0126953125, 43.39649200439453, 245.08045959472656],
        [1804.82421875, 3680.3330078125, 34.22428512573242, 305.5701904296875],
        [1831.62646484375, 3663.066162109375, 33.82933807373047, 32.69284439086914]
      ],
      spawnPoints: [
        [294.69082641606, -606.71612548822, 43.330261230875, 58.653598785039],
        [292.8645019535, -612.12060546875, 43.389503479003, 64.696456909179],
        [289.3530578613, -593.9094238281, 43.1782188415527, 330.60269165039],
        [1829.3101806640625, 3658.96484375, 33.930355072021484, 215.4266357421875],
        [1831.8131103515625, 3662.412353515625, 33.8870964050293, 211.35658264160156]
      ]
    },
    helicopterGarage: {
      marker: [339.043701171875, -584.0838012695, 74.16556549072, 234.06387329101],
      spawnPoints: [[350.5268859863281, -588.0438232421875, 74.16556549072266, 254.07025146484375]]
    },
    items: [
      {
        name: "bandage",
        price: 300,
        category: 4 /* items */
      },
      {
        name: "medikit",
        price: 500,
        category: 4 /* items */
      }
    ],
    teleport: [
      {
        from: [310.23388671875, -603.2254638671875, 43.28398513793945, 237.65902709960938],
        to: [341.41766357421875, -579.89923095703, 74.16553497314453, 60.26471710205078]
      }
    ],
    plasticSurgery: { npc: [309.04974365234375, -566.20458984375, 43.284034729003906, 153.815826416562], coords: [323.141845703125, -584.8153076171875, 43.284034729003906, 65.7168960571289] }
  }
];
var AmbulanceVehicle = [{ name: "Xe cứu thương", model: "rsetrongt21", price: 1e4 }];
var AmbulanceHelicopter = [{ name: "Trực thăng cứu thương", model: "polmav", price: 5e7 }];

// ../../ProjectStarboy/src/shared/config/barbershop.ts
var BarberShopConfig = [
  {
    coords: [134.6927947998047, -1708.097412109375, 29.291601181030273, 126.59355926513672],
    pedModel: "csb_ortega",
    price: 5500,
    cam: ["DEFAULT_SCRIPTED_CAMERA", 138.4435119622, -1711.3209225625, 29.340070727305, 0, 0, 45, 65, false, 0],
    barberPed: [1, "s_f_m_fembarber", 141.48, -1705.59, 29.29 - 0.95, 0, true, true],
    barberPedStandCoords: [137.15, -1710.5, 29.3, 205.75],
    chairCoords: [137.6612823486328, -1710.571508789065, 29.822330474853516 - 0.75, 231.20867919921875]
  },
  {
    coords: [-822.0001831054688, -183.3553009033203, 37.56889343261719, 207.6725311279297],
    pedModel: "csb_ortega",
    price: 9500,
    cam: ["DEFAULT_SCRIPTED_CAMERA", -816.7696533203125, -181.8964385986328, 38.053680419921875, -7.880296230316162, 0, -153.316436767578, 50, false, 0],
    barberPed: [1, "s_f_m_fembarber", -812.6666259765625, -182.788848876953, 37.56889343261719, 0, true, true],
    barberPedStandCoords: [-816.9271240234375, -183.6956329345703, 37.568939208984375, 306.931884765625],
    chairCoords: [-816.450927734375, -182.54315185546875, 37.7870979309082 - 0.55, 29.17188262939453]
  },
  {
    coords: [-1284.1690673828125, -1115.7530517578125, 6.990118026733398, 83.70650482177734],
    pedModel: "csb_ortega",
    price: 6500,
    cam: ["DEFAULT_SCRIPTED_CAMERA", -1282.79541015625, -1120.4185791015625, 7.647355556488037, -10.1990327835083, 13340212490220438e-24, -1.2324674129486084, 50, false, 0],
    barberPed: [1, "s_f_m_fembarber", -1279.91015625, -1117.1776123046875, 6.9901123046875, 0, true, true],
    barberPedStandCoords: [-1282.133544921875, -1118.5821533203125, 7.000124931335449, 136.51119995117188],
    chairCoords: [-1282.8111572265625, -1119.2747802734375, 7.000124931335449 - 0.15, 173.70614624023438]
  }
];

// ../../ProjectStarboy/src/shared/config/crafting.ts
var CraftingConfig = {
  recipes: [
    {
      name: "refined_copper",
      title: "Đồng tinh luyện",
      timeCraft: 5,
      group: "GROUP_MATERIALS",
      type: "items",
      ingredients: {
        copper: 100
      },
      cost: 100
    },
    {
      name: "refined_iron",
      title: "Sắt tinh luyện",
      timeCraft: 5,
      group: "GROUP_MATERIALS",
      type: "items",
      ingredients: {
        iron: 100
      },
      cost: 100
    },
    {
      name: "refined_gold",
      title: "Vàng tinh luyện",
      timeCraft: 5,
      group: "GROUP_MATERIALS",
      type: "items",
      ingredients: {
        gold: 100
      },
      cost: 100
    },
    {
      name: "steel",
      title: "Thép",
      timeCraft: 5,
      group: "GROUP_MATERIALS",
      type: "items",
      ingredients: {
        refined_copper: 1,
        refined_iron: 1,
        refined_gold: 1
      },
      cost: 200
    },
    {
      name: "clean_cloth",
      title: "Vải sạch (C)",
      timeCraft: 5,
      group: "GROUP_ITEMS",
      type: "items",
      ingredients: {
        cloth: 40
      },
      cost: 100
    },
    {
      name: "highquality_wood",
      title: "Gỗ Cao Cấp (C)",
      timeCraft: 5,
      group: "GROUP_ITEMS",
      type: "items",
      ingredients: {
        wood_plank: 40
      },
      cost: 100
    },
    {
      name: "oilRefinded",
      title: "Dầu máy (C)",
      timeCraft: 5,
      group: "GROUP_ITEMS",
      type: "items",
      ingredients: {
        diesel_oil: 40
      },
      cost: 100
    },
    {
      name: "fiberglass",
      title: "Sợi thuỷ tinh (C)",
      timeCraft: 5,
      group: "GROUP_ITEMS",
      type: "items",
      ingredients: {
        glass: 40
      },
      cost: 100
    },
    {
      name: "tinhdau",
      title: "Tinh dầu",
      timeCraft: 5,
      group: "GROUP_ITEMS",
      type: "items",
      ingredients: {
        packaged_cannabis: 10,
        packaged_ephedra: 10,
        packaged_cocaine: 10,
        glass: 20
      },
      cost: 500
    },
    {
      name: "bancheak",
      title: "Bản thiết kế AK",
      timeCraft: 5,
      group: "GROUP_ITEMS",
      type: "items",
      ingredients: {
        highquality_wood: 3,
        fiberglass: 3
      },
      cost: 1e3
    },
    {
      name: "firstaidkit",
      title: "Bộ cứu thương",
      timeCraft: 10,
      group: "GROUP_ITEMS",
      type: "items",
      ingredients: {
        packaged_cannabis: 3,
        packaged_cocaine: 3,
        packaged_ephedra: 3,
        cloth: 2,
        bandage: 10
      },
      cost: 500
    },
    {
      name: "saw",
      title: "Cưa sắt",
      timeCraft: 10,
      group: "GROUP_TOOLS",
      type: "items",
      ingredients: {
        steel: 10,
        diamond: 10
      },
      cost: 200
    },
    {
      name: "WEAPON_ASSAULTRIFLE",
      title: "Súng AK",
      timeCraft: 10,
      group: "GROUP_RIFLE",
      type: "weapons",
      ingredients: {
        tinhdau: 1,
        oilRefinded: 1,
        steel: 2,
        diamond: 5,
        bangsungak: 1,
        bancheak: 1
      },
      cost: 5e3
    },
    {
      name: "WEAPON_MACHETE",
      title: "Dao dựa",
      timeCraft: 10,
      group: "GROUP_PISTOL",
      type: "weapons",
      ingredients: {
        wood_plank: 10,
        copper: 10,
        iron: 10
      },
      cost: 1e3
    }
  ]
};

// ../../ProjectStarboy/src/shared/config/dailyRewards.ts
var DailyRewardConfig = [
  [
    {
      type: "item",
      name: "water",
      amount: 1
    },
    {
      type: "item",
      name: "bread",
      amount: 1
    }
  ],
  [
    {
      type: "item",
      name: "water",
      amount: 1
    },
    {
      type: "item",
      name: "bread",
      amount: 1
    }
  ],
  [
    {
      type: "item",
      name: "water",
      amount: 1
    },
    {
      type: "item",
      name: "bread",
      amount: 1
    }
  ],
  [
    {
      type: "item",
      name: "water",
      amount: 1
    },
    {
      type: "item",
      name: "bread",
      amount: 1
    }
  ],
  [
    {
      type: "item",
      name: "water",
      amount: 1
    },
    {
      type: "item",
      name: "bread",
      amount: 1
    }
  ],
  [
    {
      type: "item",
      name: "water",
      amount: 1
    },
    {
      type: "item",
      name: "bread",
      amount: 1
    }
  ],
  [
    {
      type: "item",
      name: "water",
      amount: 1
    },
    {
      type: "item",
      name: "bread",
      amount: 1
    }
  ]
];
var NewbieRewardConfig = [
  {
    type: "item",
    name: "water",
    amount: 10
  },
  {
    type: "item",
    name: "bread",
    amount: 10
  }
];
var VehicleNewbieReward = {
  name: "dubsta2",
  type: "vehicle",
  amount: 1
};

// ../../ProjectStarboy/src/shared/config/garage.ts
var GarageConfig = [
  {
    coords: [67.66987609863281, 12.617810249328613, 69.21440887451172, 339.6659240722656],
    pedModel: "csb_ortega",
    pedRelationShip: "garage",
    voiceName: "S_M_M_AMMUCOUNTRY_WHITE_MINI_01",
    price: 100,
    returnCoords: [56.801, 30.46196937561035, 70.15733337402344, 116.0272445678711],
    spawnCoords: [
      [74.61, 17.10837173461914, 69.12596130371094, 165.1781768798828],
      [63.808, 20.150724411010742, 69.45060729980469, 158.89210510253906],
      [57.209, 22.078067779541016, 69.68618774414062, 160.22537231445312]
    ],
    slot: [
      [63.749019622802734, 15.98948860168457, 68.73824310302734, 341.3789978027344],
      [60.77646255493164, 17.514022827148438, 68.80671691894531, 339.01507568359375],
      [57.61121368408203, 18.250171661376953, 68.90933990478516, 339.16741943359375],
      [54.446876525878906, 19.37090492248535, 69.1372375488282, 340.8429870605469]
    ]
  },
  {
    coords: [1036.0106201171875, -763.9561767578125, 57.99296951293945, 326.9724426269531],
    pedModel: "csb_ortega",
    pedRelationShip: "garage",
    voiceName: "S_M_M_AMMUCOUNTRY_WHITE_MINI_01",
    price: 100,
    returnCoords: [1041.6038818359375, -775.691223145312, 58.0228271484375, 182.9827880859375],
    spawnCoords: [
      [1022.605, -763.4840087890625, 57.96099853515625, 315.2791748046875],
      [1015.112, -767.4546508789062, 57.880428314208984, 309.7250671386719],
      [1025.414, -776.0676879882812, 58.024417877197266, 42.566650390625],
      [1035.104, -787.1317749023438, 57.9607048034668, 37.48936080932617]
    ],
    slot: [
      [1027.916748046875, -771.3099975585938, 58.03731918334961, 324.57086181640625],
      [1046.46533203125, -774.702941845312, 58.01694107055664, 266.58740234375],
      [1046.5023193359375, -778.327209476562, 58.00895690917969, 270.28350830078125],
      [1046.147705078125, -782.0336303710938, 58.000492095947266, 278.6759033203125],
      [1046.23486328125, -785.8648681640625, 57.992637634277344, 274.2816162109375]
    ]
  },
  {
    coords: [216.5956115722652, -810.1920166015625, 30.711040496826172, 254.61810302734375],
    pedModel: "csb_ortega",
    pedRelationShip: "garage",
    voiceName: "S_M_M_AMMUCOUNTRY_WHITE_MINI_01",
    price: 100,
    returnCoords: [224.177, -762.7684936523438, 30.8201847076416, 90.79508972167969],
    spawnCoords: [
      [231.184, -801.1902465820312, 30.533916473388672, 159.6715850830078],
      [213.789, -793.4869995117188, 30.853647232055664, 161.41049194335938],
      [234.779, -790.585693359375, 30.57482147216797, 159.6020965576172],
      [220.678, -775.8272705078125, 30.795700073242188, 157.9859161376953],
      [238.834, -780.1937255859375, 30.645187377929688, 158.77557373046875]
    ],
    slot: []
  },
  {
    coords: [-3143.965576171875, 1059.4947509765625, 20.49873352050781, 26.665773391723633],
    pedModel: "csb_ortega",
    pedRelationShip: "garage",
    voiceName: "S_M_M_AMMUCOUNTRY_WHITE_MINI_01",
    price: 100,
    returnCoords: [-3159.812, 1067.7982177734375, 20.67706298828125, 74.33187103271484],
    spawnCoords: [
      [-3146.129, 1067.47998046875, 20.587444305419922, 254.6494140625],
      [-3140.087, 1112.225341796875, 20.694408416748047, 270.9482116699219],
      [-3152.192, 1075.770263671875, 20.68111801147461, 270.6130676269531],
      [-3148.116, 1082.948974609375, 20.691207885742188, 267.43267822265625],
      [-3145.378, 1101.940185546875, 20.699893951416016, 265.69378662109375],
      [-3146.369, 1094.2291259765625, 20.696979522705078, 265.55377197265625]
    ],
    slot: [
      [-3140.427490234375, 1074.8013916015625, 20.602846145629883, 72.87625885009766],
      [-3140.250732421875, 1083.14208984375, 20.668031692504883, 84.54179382324219],
      [-3140.53271484375, 1078.616943359375, 20.668031692504883, 84.5380630493164],
      [-3139.550537109375, 1086.96044921875, 20.672714233398438, 79.70713806152344]
    ]
  },
  {
    coords: [-1068.3580322265625, -1402.582275390625, 5.248369216918945, 262.76416015625],
    pedModel: "csb_ortega",
    pedRelationShip: "garage",
    voiceName: "S_M_M_AMMUCOUNTRY_WHITE_MINI_01",
    price: 100,
    returnCoords: [-1045.638, -1399.488037109375, 5.424190521240234, 260.32305908203125],
    spawnCoords: [
      [-1053.347, -1398.490478515625, 5.425440788269043, 70.50361633300781],
      [-1061.178, -1410.6600341796875, 5.425439357757568, 350.87115478515625],
      [-1064.286, -1421.9630126953125, 5.4254374504089355, 340.49481201171875],
      [-1066.67, -1432.59228515625, 5.4254374504089355, 343.2644958496094],
      [-1069.222, -1443.384033203125, 5.4254374504089355, 340.6133117675781]
    ],
    slot: [
      [-1067.6751708984375, -1406.233642578125, 5.307347297668457, 254.4332580566406],
      [-1068.6751708984375, -1410.033642578125, 5.307347297668457, 254.4332580566406],
      [-1069.6751708984375, -1413.733642578125, 5.307347297668457, 254.4332580566406],
      [-1070.6751708984375, -1417.833642578125, 5.307347297668457, 254.4332580566406]
    ]
  },
  {
    coords: [140.68121337890625, 6613.224609375, 32.074764251708984, 180.23020935058594],
    pedModel: "csb_ortega",
    pedRelationShip: "garage",
    voiceName: "S_M_M_AMMUCOUNTRY_WHITE_MINI_01",
    price: 100,
    returnCoords: [130.8272705078125, 6607.13232421875, 31.847026824951172, 14.095632553100586],
    spawnCoords: [
      [146.484, 6613.67431640625, 31.816997528076172, 175.7372589111328],
      [151.091, 6612.0087890625, 31.86248779296875, 175.48599243164062],
      [155.764, 6605.83642578125, 31.873449325561523, 178.18515014648438],
      [120.055, 6590.50244140625, 32.1350212097168, 351.7856140136719],
      [125.285, 6583.49462890625, 32.10138702392578, 0.09967361390590668],
      [129.894, 6578.95654296875, 32.06706237792969, 358.81170654296875],
      [135.28, 6574.61376953125, 32.21466064453125, 353.10040283203125],
      [140.988, 6571.77197265625, 31.988094329833984, 350.22412109375]
    ],
    slot: [
      [150.68331909179688, 6608.560546875, 31.872251510620117, 179.55238342285156],
      [151.15997314453125, 6597.49560546875, 31.84490203857422, 354.1112365722656],
      [145.94447326660156, 6602.12255859375, 31.853975296020508, 354.3385314941406],
      [145.81932067871094, 6611.85595703125, 31.826091766357422, 172.78732299804688]
    ]
  },
  {
    coords: [1707.203125, 3757.5087890625, 34.17167663574219, 287.2339172363281],
    pedModel: "csb_ortega",
    pedRelationShip: "garage",
    voiceName: "S_M_M_AMMUCOUNTRY_WHITE_MINI_01",
    price: 100,
    returnCoords: [1719.2117919921875, 3756.687255859375, 33.98426818847656, 41.03947067260742],
    spawnCoords: [
      [1701.14, 3768.44921875, 34.47500228881836, 307.6873779296875],
      [1706.338, 3764.65869140625, 34.341434478759766, 310.2055358886719],
      [1710.045, 3759.715087890625, 34.18479919433594, 218.73117065429688],
      [1707.927, 3752.3671875, 34.07643508911133, 227.1365203857422]
    ],
    slot: [
      [1707.3978271484375, 3762.762939453125, 34.27215576171875, 126.34699249267578],
      [1704.59228515625, 3765.244873046875, 34.37492752075195, 132.90975952148438],
      [1701.4453125, 3769.0361328125, 34.480674743652344, 136.54417419433594],
      [1708.29541015625, 3752.26416015625, 34.07474899291992, 57.709529876708984]
    ]
  },
  {
    coords: [1207.61901855875, 2703.1305234375, 37.998611419531, 343.829162597656],
    pedModel: "csb_ortega",
    pedRelationShip: "garage",
    voiceName: "S_M_M_AMMUCOUNTRY_WHITE_MINI_01",
    price: 100,
    returnCoords: [1238.02673334375, 2709.1118140625, 38.0057334890234, 195.159271240238],
    spawnCoords: [
      [1210.563, 2707.8427734375, 38.00555419921875, 181.1617431640625],
      [1241.643, 2706.013427734375, 38.005760192871094, 201.80828857421875],
      [1233.083, 2708.6865234375, 38.005760192871094, 181.94546508789062],
      [1226.667, 2708.47607421875, 38.00597381591797, 174.83653259277344]
    ],
    slot: [
      [1854.5284423828125, 2541.80029296875, 45.67207717895508, 269.12457275390625],
      [1854.291259765625, 2545.41259765625, 45.67207717895508, 264.44598388671875],
      [1854.5673828125, 2549.22119140625, 45.67206954956055, 259.32257080078125],
      [1854.691162109375, 2552.920654296875, 45.67206954956055, 263.1739501953125]
    ]
  },
  {
    coords: [-984.3490600585938, -2690.944091796875, 14.057250022888184, 193.27931213378906],
    pedModel: "csb_ortega",
    pedRelationShip: "garage",
    voiceName: "S_M_M_AMMUCOUNTRY_WHITE_MINI_01",
    price: 100,
    returnCoords: [-960.282, -2705.105224609375, 13.83103084564209, 272.7114562988281],
    spawnCoords: [
      [-982.492, -2700.276611328125, 13.844892501831055, 60.55198669433594],
      [-971.946, -2704.982421875, 13.866408348083496, 56.734676361083984],
      [-976.095, -2690.75146484375, 13.830690383911133, 153.8463897705078],
      [-983.634, -2707.744873046875, 13.830934524536133, 337.2295227050781]
    ],
    slot: [
      [-979.2750854492188, -2689.23486328125, 13.830695152282715, 151.37060546875],
      [-975.906555175781, -2690.744873046875, 13.83069133758545, 154.4789581298828],
      [-973.1507568359375, -2692.44970703125, 13.830670356750488, 146.0863342285156],
      [-970.0772705078125, -2694.074951171875, 13.830677032470703, 144.64117431640625]
    ]
  }
];

// ../../ProjectStarboy/src/shared/config/gasStation.ts
var GasStationConfig = [
  {
    coords: [1205.7610399999999, -1400.3138199999999, 34.388038],
    gasPumps: [
      [1204.1953, -1401.0337, 34.38496],
      [1207.0681, -1398.1609, 34.38496],
      [1212.9373, -1404.03, 34.38496],
      [1194.5398, -1391.4414, 34.40035],
      [1210.0647, -1406.9031, 34.38496]
    ],
    fuelPrice: 50,
    jerryPrice: 100
  },
  {
    coords: [2005.121826171875, 3771.204833984375, 32.16816711425781, 106.29737091064453],
    gasPumps: [
      [2007.03857421875, 3773.81591796875, 32.18085479736328 - 0.99, 147.253570556642],
      [2002.200439453125, 3771.13427734375, 32.40351867675781 - 0.99, 78.041748046875]
    ],
    fuelPrice: 50,
    jerryPrice: 100
  },
  {
    coords: [-2553.0068359375, 2329.595703125, 33.05426025390625, 78.041748046875],
    gasPumps: [
      [-2552.554443359375, 2332.60986328125, 33.06005859375 - 0.99, 6.377130508422852],
      [-2557.9033203125, 2332.50927734375, 33.06007385253906 - 0.99, 78.77063751220703],
      [-2558.569580078125, 2340.251220703125, 33.07803726196289 - 0.99, 122.88728332519531],
      [-2551.96044921875, 2340.499267578125, 33.077938079833984 - 0.99, 278.30889892578125]
    ],
    fuelPrice: 50,
    jerryPrice: 100
  },
  {
    coords: [-81.60594940185547, -1766.3837890625, 29.27748680114746, 271.9656677246094],
    gasPumps: [
      [-76.59916687011719, -1755.792236328125, 29.7945556640625 - 0.99, 359.1849670410156],
      [-70.862701416015, -1757.7813720703125, 29.404430389404297 - 0.99, 253.7491455078125]
    ],
    fuelPrice: 50,
    jerryPrice: 100
  },
  {
    coords: [-2093.6398454545456, -315.6091272727272, 12.178832272727272],
    gasPumps: [
      [-2088.0867, -321.03525, 12.160918],
      [-2087.2153, -312.81848, 12.160918],
      [-2096.0964, -311.9069, 12.160918],
      [-2096.8145, -320.1179, 12.160918],
      [-2104.5352, -311.01984, 12.160918],
      [-2105.3967, -319.2159, 12.160918],
      [-2078.153, -298.2357, 12.28628],
      [-2081.4358, -297.89066, 12.232613],
      [-2088.7556, -327.3988, 12.160918],
      [-2097.4834, -326.4815, 12.160918],
      [-2106.0657, -325.57947, 12.160918]
    ],
    fuelPrice: 50,
    jerryPrice: 100
  },
  {
    coords: [621.6814071428572, 265.83407428571434, 102.23975657142856],
    gasPumps: [
      [612.43225, 263.83575, 102.269516],
      [612.421, 273.95715, 102.269516],
      [620.9901, 263.83594, 102.269516],
      [620.9861, 273.9698, 102.269516],
      [629.6345, 263.8357, 102.269516],
      [629.6306, 273.96985, 102.269516],
      [625.6753, 247.43433, 102.0612]
    ],
    fuelPrice: 50,
    jerryPrice: 100
  },
  {
    coords: [2539.7944, 2594.8079, 36.95572],
    gasPumps: [[2539.7944, 2594.8079, 36.95572]],
    fuelPrice: 50,
    jerryPrice: 100
  },
  {
    coords: [176.7314857142857, 6606.255442857143, 31.03799],
    gasPumps: [
      [172.33336, 6603.6357, 31.0625],
      [173.16548, 6598.917, 31.074646],
      [179.67465, 6604.9307, 31.0625],
      [180.43814, 6600.198, 31.074646],
      [186.97092, 6606.218, 31.0625],
      [187.7344, 6601.4854, 31.074646],
      [156.80345, 6628.4033, 30.854492]
    ],
    fuelPrice: 50,
    jerryPrice: 100
  }
];

// ../../ProjectStarboy/src/shared/config/grocerystore.ts
var BlackMoneyItems = [
  {
    name: "bangsungak",
    price: 5e5,
    category: 3 /* tools */
  },
  {
    name: "bread",
    price: 1e3,
    category: 3 /* tools */
  },
  {
    name: "water",
    price: 1e3,
    category: 3 /* tools */
  }
];
var DefaultItems = [
  {
    name: "bread",
    price: 500,
    category: 1 /* food */
  },
  {
    name: "water",
    price: 500,
    category: 2 /* drink */
  },
  {
    name: "coca",
    price: 1e3,
    category: 2 /* drink */
  },
  {
    name: "male_5_0_0",
    price: 2e5,
    category: 3 /* tools */
  },
  {
    name: "female_5_0_0",
    price: 2e5,
    category: 3 /* tools */
  },
  {
    name: "fertilizer",
    price: 500,
    category: 4 /* items */
  },
  {
    name: "rename_card",
    price: 5e4,
    category: 4 /* items */
  },
  {
    name: "armour",
    price: 5e3,
    category: 4 /* items */
  },
  {
    name: "bandage",
    price: 800,
    category: 4 /* items */
  },
  {
    name: "fixkit2",
    price: 1e3,
    category: 3 /* tools */
  },
  {
    name: "phone_card_50",
    price: 50,
    category: 5 /* technology */
  },
  {
    name: "phone_card_100",
    price: 100,
    category: 5 /* technology */
  },
  {
    name: "phone_card_200",
    price: 200,
    category: 5 /* technology */
  },
  {
    name: "phone_card_500",
    price: 500,
    category: 5 /* technology */
  },
  {
    name: "phone_card_1000",
    price: 1e3,
    category: 5 /* technology */
  },
  {
    name: "phone_card_2000",
    price: 2e3,
    category: 5 /* technology */
  },
  {
    name: "phone_card_5000",
    price: 5e3,
    category: 5 /* technology */
  },
  {
    name: "phone_card_10000",
    price: 1e4,
    category: 5 /* technology */
  }
];
var ConfigGroceryStore = [
  {
    coords: [1134.2943115234375, -983.129638671875, 46.415855407714844, 277.8638000488281],
    pedModel: "csb_ortega",
    pedRelationShip: "grocerystore",
    voiceName: "S_M_M_AMMUCOUNTRY_WHITE_MINI_01",
    items: DefaultItems,
    type: "money"
  },
  {
    coords: [372.60333251953125, 326.8382873535156, 103.56632232666016, 249.20550537109375],
    pedModel: "csb_ortega",
    pedRelationShip: "grocerystore",
    voiceName: "S_M_M_AMMUCOUNTRY_WHITE_MINI_01",
    items: DefaultItems,
    type: "money"
  },
  {
    coords: [2556.545166015625, 380.7761535644531, 108.6230697631836, 357.815673828125],
    pedModel: "csb_ortega",
    pedRelationShip: "grocerystore",
    voiceName: "S_M_M_AMMUCOUNTRY_WHITE_MINI_01",
    items: DefaultItems,
    type: "money"
  },
  {
    coords: [-3039.6572265625, 584.3217163085938, 7.908935546875, 16.335758209228516],
    pedModel: "csb_ortega",
    pedRelationShip: "grocerystore",
    voiceName: "S_M_M_AMMUCOUNTRY_WHITE_MINI_01",
    items: DefaultItems,
    type: "money"
  },
  {
    coords: [-3243.230712890625, 999.9953002929688, 12.830720901489258, 357.973388671875],
    pedModel: "csb_ortega",
    pedRelationShip: "grocerystore",
    voiceName: "S_M_M_AMMUCOUNTRY_WHITE_MINI_01",
    items: DefaultItems,
    type: "money"
  },
  {
    coords: [549.172119140625, 2670.45458984375, 42.15646743774414, 95.48764038085938],
    pedModel: "csb_ortega",
    pedRelationShip: "grocerystore",
    voiceName: "S_M_M_AMMUCOUNTRY_WHITE_MINI_01",
    items: DefaultItems,
    type: "money"
  },
  {
    coords: [1959.5806884765625, 3740.908447265625, 32.343719482421875, 304.1307373046875],
    pedModel: "csb_ortega",
    pedRelationShip: "grocerystore",
    voiceName: "S_M_M_AMMUCOUNTRY_WHITE_MINI_01",
    items: DefaultItems,
    type: "money"
  },
  {
    coords: [2677.317138671875, 3279.75439453125, 55.2411003112793, 332.6532287597656],
    pedModel: "csb_ortega",
    pedRelationShip: "grocerystore",
    voiceName: "S_M_M_AMMUCOUNTRY_WHITE_MINI_01",
    items: DefaultItems,
    type: "money"
  },
  {
    coords: [1728.1143798828125, 6415.8896484375, 35.037200927734375, 243.92529296875],
    pedModel: "csb_ortega",
    pedRelationShip: "grocerystore",
    voiceName: "S_M_M_AMMUCOUNTRY_WHITE_MINI_01",
    items: DefaultItems,
    type: "money"
  },
  {
    coords: [1728.1143798828125, 6415.8896484375, 35.037200927734375, 243.92529296875],
    pedModel: "csb_ortega",
    pedRelationShip: "grocerystore",
    voiceName: "S_M_M_AMMUCOUNTRY_WHITE_MINI_01",
    items: DefaultItems,
    type: "money"
  },
  {
    coords: [-1221.5780029296875, -908.1273803710938, 12.326355934143066, 36.894371032714844],
    pedModel: "csb_ortega",
    pedRelationShip: "grocerystore",
    voiceName: "S_M_M_AMMUCOUNTRY_WHITE_MINI_01",
    items: DefaultItems,
    type: "money"
  },
  {
    coords: [-1486.4669189453125, -377.8186340332031, 40.16336441040039, 140.4100341796875],
    pedModel: "csb_ortega",
    pedRelationShip: "grocerystore",
    voiceName: "S_M_M_AMMUCOUNTRY_WHITE_MINI_01",
    items: DefaultItems,
    type: "money"
  },
  {
    coords: [-2966.391357421875, 391.49346923828125, 15.043319702148438, 91.0799789428711],
    pedModel: "csb_ortega",
    pedRelationShip: "grocerystore",
    voiceName: "S_M_M_AMMUCOUNTRY_WHITE_MINI_01",
    items: DefaultItems,
    type: "money"
  },
  {
    coords: [1165.56103515625, 2710.87548828125, 38.15765380859375, 179.07235717773438],
    pedModel: "csb_ortega",
    pedRelationShip: "grocerystore",
    voiceName: "S_M_M_AMMUCOUNTRY_WHITE_MINI_01",
    items: DefaultItems,
    type: "money"
  },
  {
    coords: [1391.78466796875, 3606.06689453125, 34.98088836669922, 193.42803955078125],
    pedModel: "csb_ortega",
    pedRelationShip: "grocerystore",
    voiceName: "S_M_M_AMMUCOUNTRY_WHITE_MINI_01",
    items: DefaultItems,
    type: "money"
  },
  {
    coords: [126.6002197265625, -1282.5247802734375, 29.277103424072266, 143.27569580078125],
    pedModel: "csb_ortega",
    pedRelationShip: "grocerystore",
    voiceName: "S_M_M_AMMUCOUNTRY_WHITE_MINI_01",
    items: DefaultItems,
    type: "money"
  },
  {
    coords: [-1393.1729736328125, -606.475341796875, 30.319580078125, 117.2785873413086],
    pedModel: "csb_ortega",
    pedRelationShip: "grocerystore",
    voiceName: "S_M_M_AMMUCOUNTRY_WHITE_MINI_01",
    items: DefaultItems,
    type: "money"
  },
  {
    coords: [-560.200500488281, 287.0813293457031, 82.17632293701172, 269.4466552734375],
    pedModel: "csb_ortega",
    pedRelationShip: "grocerystore",
    voiceName: "S_M_M_AMMUCOUNTRY_WHITE_MINI_01",
    items: DefaultItems,
    type: "money"
  },
  {
    coords: [-664.660217285152, -1217.64501953125, 11.812886238098145, 30.252941131591797],
    pedModel: "csb_ortega",
    pedRelationShip: "grocerystore",
    voiceName: "S_M_M_AMMUCOUNTRY_WHITE_MINI_01",
    items: BlackMoneyItems,
    type: "blackmoney"
  }
];

// ../../ProjectStarboy/src/shared/config/phone.ts
var PhoneConfig = {
  phoneNumberPrefix: "09",
  phoneNumberLength: 8,
  characters: "0123456789",
  pricePerMessage: 10,
  pricePerSecond: 5
};

// ../../ProjectStarboy/src/shared/config/plant.ts
var PlantConfig = [
  {
    name: "wild_cannabis",
    label: "Cây cần sa tự nhiên",
    model: "prop_weed_02",
    illegal: true,
    growingTime: 54e5,
    wateringTime: 54e5,
    growingModels: ["prop_weed_02", "prop_weed_01"],
    blipColors: [5, 2],
    blipSprite: 496,
    havestDuration: 1e4,
    needPoliceOnline: 1,
    blockDepartments: ["police", "ambulance", "mechanic"],
    havestRewards: [
      {
        name: "fresh_cannabis",
        amount: 1,
        ratio: 100
      },
      {
        name: "cannabis_seed",
        amount: 1,
        ratio: 30
      }
    ]
  },
  {
    name: "cannabis",
    label: "Cây cần sa",
    model: "bkr_prop_weed_01_small_01c",
    illegal: true,
    growingTime: 54e5,
    wateringTime: 54e5,
    growingModels: [
      "bkr_prop_weed_01_small_01c",
      "bkr_prop_weed_01_small_01b",
      "bkr_prop_weed_01_small_01a",
      "bkr_prop_weed_med_01b",
      "bkr_prop_weed_med_01a",
      "bkr_prop_weed_lrg_01a",
      "bkr_prop_weed_lrg_01b"
    ],
    blipColors: [5, 2],
    blipSprite: 496,
    needPoliceOnline: 0,
    blockDepartments: ["police", "ambulance", "mechanic"],
    havestDuration: 1e4,
    havestRewards: [
      {
        name: "fresh_cannabis",
        amount: 5,
        ratio: 100
      },
      {
        name: "cannabis_seed",
        amount: 1,
        ratio: 20
      }
    ]
  },
  {
    name: "wild_coca",
    label: "Cây coca tự nhiên",
    model: "prop_plant_01a",
    illegal: true,
    growingTime: 54e5,
    wateringTime: 54e5,
    growingModels: ["prop_plant_01a"],
    blipColors: [5, 2],
    blipSprite: 497,
    needPoliceOnline: 3,
    blockDepartments: ["police", "ambulance", "mechanic"],
    havestDuration: 15e3,
    havestRewards: [
      {
        name: "fresh_coca",
        amount: 1,
        ratio: 100
      },
      {
        name: "coca_seed",
        amount: 1,
        ratio: 30
      }
    ]
  },
  {
    name: "coca",
    label: "Cây coca",
    model: "prop_plant_01a",
    illegal: true,
    growingTime: 54e5,
    wateringTime: 54e5,
    growingModels: ["prop_plant_01a"],
    blipColors: [5, 2],
    blipSprite: 497,
    needPoliceOnline: 0,
    blockDepartments: ["police", "ambulance", "mechanic"],
    havestDuration: 15e3,
    havestRewards: [
      {
        name: "fresh_coca",
        amount: 5,
        ratio: 100
      },
      {
        name: "coca_seed",
        amount: 1,
        ratio: 20
      }
    ]
  },
  {
    name: "wild_ephedra",
    label: "Cây ma hoàng tự nhiên",
    model: "prop_coral_spikey_01",
    illegal: true,
    growingTime: 54e5,
    wateringTime: 54e5,
    growingModels: ["prop_coral_spikey_01"],
    blipColors: [5, 2],
    blipSprite: 497,
    needPoliceOnline: 2,
    blockDepartments: ["police", "ambulance", "mechanic"],
    havestDuration: 12e3,
    havestRewards: [
      {
        name: "fresh_ephedra",
        amount: 1,
        ratio: 100
      },
      {
        name: "ephedra_seed",
        amount: 1,
        ratio: 30
      }
    ]
  },
  {
    name: "ephedra",
    label: "Cây ma hoàng",
    model: "prop_coral_spikey_01",
    illegal: true,
    growingTime: 54e5,
    wateringTime: 54e5,
    growingModels: ["prop_coral_spikey_01"],
    blipColors: [5, 2],
    blipSprite: 497,
    needPoliceOnline: 0,
    blockDepartments: ["police", "ambulance", "mechanic"],
    havestDuration: 12e3,
    havestRewards: [
      {
        name: "fresh_ephedra",
        amount: 5,
        ratio: 100
      },
      {
        name: "ephedra_seed",
        amount: 1,
        ratio: 20
      }
    ]
  }
];
var PLANT_TIME_INTERVAL = 1e3;
var getPlantConfig = (name) => {
  for (const plant of PlantConfig) {
    if (plant.name === name) {
      return plant;
    }
  }
};

// ../../ProjectStarboy/src/shared/config/police.ts
var PoliceConfig = [
  {
    name: "LSPD",
    blip: [
      {
        coords: [425.1, -979.5, 30.7],
        sprite: 60,
        display: 4,
        scale: 1.2,
        color: 29,
        title: "Sở cảnh sát trung tâm"
      },
      {
        coords: [1853.9775390625, 3686.67724609375, 34.26701354980469, 48.094932556152344],
        sprite: 60,
        display: 4,
        scale: 1.2,
        color: 29,
        title: "Trạm an ninh 1"
      }
    ],
    cloakroom: [452.6, -992.8, 30.6],
    armory: [
      [451.7, -980.1, 30.6],
      [1849.1319580078125, 3687.811767578125, 34.267093658447266]
    ],
    vehicleGarage: {
      marker: [
        [454.6, -1017.4, 28.4],
        [1859.7923583984375, 3681.15283203125, 33.76706314086914, 215.67291259765625]
      ],
      despawns: [
        [430.22052001953125, -1022.7564697265625, 28.299760818481445, 184.33689880371094],
        [1854.2362060546875, 3676.37158203125, 33.76083755493164, 39.39265823364258]
      ],
      spawnPoints: [
        [438.4, -1018.3, 27.7, 90],
        [441, -1024.2, 28.3, 90],
        [453.5, -1022.2, 28, 90],
        [450.9, -1016.5, 28.1, 90],
        [1865.5858154296875, 3682.058837890625, 33.676204681396484, 207.9028625488282],
        [1870.7418212890625, 3685.270263671875, 33.71491622924805, 217.21908569335938]
      ]
    },
    helicopterGarage: {
      marker: [461.1, -981.5, 43.6],
      spawnPoints: [[449.5, -981.2, 43.6, 92.6]]
    },
    items: [
      {
        name: "WEAPON_TACTICALRIFLE",
        price: 1e4,
        category: 6 /* weapon */
      },
      {
        name: "WEAPON_STUNGUN",
        price: 5e3,
        category: 6 /* weapon */
      },
      {
        name: "WEAPON_NIGHTSTICK",
        price: 1e3,
        category: 6 /* weapon */
      },
      {
        name: "AMMO_PISTOL",
        price: 5,
        category: 7 /* ammo */
      },
      {
        name: "AMMO_RIFLE",
        price: 10,
        category: 7 /* ammo */
      }
    ]
  }
];
var PoliceVehicle = [
  { name: "Xe móp", model: "2017bmwm5", price: 1e4 },
  { name: "Xe trung sĩ 2", model: "policeb", price: 35e3 },
  { name: "Xe trung úy 1", model: "riot", price: 7e4 },
  { name: "Xe trung úy 2", model: "policet", price: 7e4 }
];
var PoliceHelicopter = [{ name: "Helicopter", model: "polmav", price: 999999999 }];

// ../../ProjectStarboy/src/shared/config/mechanic.ts
var MechanicConfig = [
  {
    name: "MECHANIC",
    blip: [
      {
        coords: [892.188232421875, -2114.145263671875, 30.4594192504882],
        sprite: 446,
        display: 4,
        scale: 1.2,
        color: 47,
        title: "Trạm cứu hộ"
      },
      {
        coords: [-338.73162841796875, -134.89683532714844, 39.00960922241211],
        sprite: 446,
        display: 4,
        scale: 1.2,
        color: 47,
        title: "Trạm cứu hộ"
      },
      {
        coords: [110.37183380126953, 6625.9794921875, 31.78721809387207],
        sprite: 446,
        display: 4,
        scale: 1.2,
        color: 47,
        title: "Trạm cứu hộ"
      }
    ],
    cloakroom: [883.3141479492188, -2100.749267578125, 30.45941925048828],
    armory: [
      [871.7665405273438, -2123.65576171875, 30.45946502685547, 91.94092559814453],
      [-344.3769836425781, -128.1053924560547, 39.00962448120117, 70.83784484863281],
      [109.20640563964844, 6631.490234375, 31.7872257232666, 46.19908142089844]
    ],
    vehicleGarage: {
      marker: [
        [857.42626953125, -2095.47607421875, 30.541542053222656],
        [-358.6662292480469, -107.52104187011719, 38.690643310546875],
        [107.27718353271484, 6611.29248046875, 31.96865463256836]
      ],
      spawnPoints: [
        [849.603088378906, -2098.363037109375, 30.54096794128418, 262.1674499511719],
        [849.1881103515625, -2101.94189453125, 30.540971755981445, 262.1674499511719],
        [848.7013549804688, -2105.51123046875, 30.54100227355957, 262.1674499511719],
        [848.0829467773438, -2116.211181640625, 30.54097557067871, 262.1674499511719],
        [-364.772705078125, -109.5878677368164, 38.69680404663086, 160.18360900878906],
        [-370.0098876953125, -107.16053771972656, 38.680625915527344, 166.9935302734375],
        [109.31177520751953, 6602.67236328125, 31.901845932006836, 313.76031494140625],
        [111.84664916992188, 6600.26123046875, 31.978736877441406, 322.2039489746094]
      ]
    },
    helicopterGarage: {
      marker: [861.471435546875, -2134.4873046875, 30.533599853515625],
      spawnPoints: [[861.8006591796875, -2124.5419921875, 30.541385650634766]]
    },
    items: [
      {
        name: "fixkit",
        label: "Bộ sửa chữa",
        price: 1e3,
        category: 3 /* tools */
      },
      {
        name: "flipkit",
        label: "Bộ lật xe",
        price: 500,
        category: 3 /* tools */
      }
    ]
  }
];
var MechanicVehicle = [
  { name: "Xe tuần tra", model: "23rs7", price: 1e4, rank: 5 },
  { name: "Xe tuần tra", model: "23rs7", price: 1e4, rank: 4 },
  { name: "Xe tuần tra", model: "23rs7", price: 1e4, rank: 3 },
  { name: "Xe tuần tra", model: "23rs7", price: 1e4, rank: 2 },
  { name: "Xe tuần tra", model: "23rs7", price: 1e4, rank: 1 },
  { name: "Xe tuần tra", model: "23rs7", price: 1e4, rank: 0 }
];
var MechanicHelicopter = [{ name: "Trực thăng", model: "supervolito2", price: 999999999, rank: 5 }];

// ../../ProjectStarboy/src/shared/config/sellItem.ts
var SellItemConfig = {
  blip: [
    {
      coords: [390.1157531738281, -356.0578308105469, 48.02490997314453],
      sprite: 770,
      display: 4,
      scale: 1,
      color: 2,
      title: "Bán vật phẩm"
    },
    {
      coords: [-11.090417861938477, 6499.40966796875, 31.50507164001465],
      sprite: 770,
      display: 4,
      scale: 1,
      color: 2,
      title: "Bán vật phẩm"
    },
    {
      coords: [-3153.802490234375, 1053.7530517578125, 20.86408042907715],
      sprite: 770,
      display: 4,
      scale: 1,
      color: 2,
      title: "Bán vật phẩm"
    }
  ],
  actionText: "Nhấn [E] để truy cập",
  timeReset: 60
};
var SellPriceConfig = [
  {
    name: "diesel_oil",
    price: [500, 1200]
  },
  {
    name: "finished_chicken",
    price: [500, 1200]
  },
  {
    name: "cloth",
    price: [500, 1200]
  },
  {
    name: "glass",
    price: [500, 1200]
  },
  {
    name: "wood_plank",
    price: [500, 1200]
  },
  {
    name: "copper",
    price: [70, 170]
  },
  {
    name: "iron",
    price: [350, 500]
  },
  {
    name: "gold",
    price: [500, 700]
  },
  {
    name: "diamond",
    price: [15e3, 25e3]
  }
];

// ../../ProjectStarboy/src/server/services/ambulance.service.ts
var AmbulanceService = class extends AppService {
  constructor() {
    super("AmbulanceService");
  }
  getVehiclePrice(vehicleName) {
    for (let i = 0; i < AmbulanceVehicle.length; i++) {
      const element = AmbulanceVehicle[i];
      if (element.model === vehicleName) {
        return element.price;
      }
    }
    for (let i = 0; i < AmbulanceHelicopter.length; i++) {
      const element = AmbulanceHelicopter[i];
      if (element.model === vehicleName) {
        return element.price;
      }
    }
  }
};
AmbulanceService = __decorateClass([
  (0, import_starboy_framework10.Injectable)()
], AmbulanceService);

// ../../ProjectStarboy/src/server/services/bank.service.ts
var import_starboy_framework11 = require("starboy-framework");

// ../../ProjectStarboy/src/server/models/bank.model.ts
var import_mongoose7 = require("mongoose");
var bankTransactionSchema = new import_mongoose7.Schema(
  {
    type: { type: String, enum: ["deposit", "withdraw", "transfer", "recieve"], required: true },
    amount: { type: Number, required: true },
    description: { type: String, default: "" },
    recipient: { type: String, default: "" },
    owner: { type: String, required: true }
  },
  { timestamps: true }
);
var bankTransactionModel = (0, import_mongoose7.model)("BankTransaction", bankTransactionSchema);
var bankSavingSchema = new import_mongoose7.Schema(
  {
    amount: { type: Number, required: true },
    duration: { type: Number, required: true },
    interest: { type: Number, required: true },
    dateStart: { type: Date, required: true },
    owner: { type: String, required: true }
  },
  { timestamps: true }
);
var bankSavingModel = (0, import_mongoose7.model)("BankSaving", bankSavingSchema);

// ../../ProjectStarboy/src/server/services/bank.service.ts
var BankService = class extends AppService {
  constructor(playersService) {
    super("BankService");
    this.playersService = playersService;
  }
  async createTransaction(data) {
    const curTime = new Date().getTime();
    const transaction = await bankTransactionModel.create(data);
    const sender = await this.playersService.getPlayerByDataId(data.owner);
    const response = json(transaction);
    if (sender && sender.online) {
      sender.emitNet("bank:addTransaction", response);
    }
    return response;
  }
  async getTransaction(owner) {
    const transactions = await bankTransactionModel.find({ owner });
    return json(transactions);
  }
};
BankService = __decorateClass([
  (0, import_starboy_framework11.Injectable)(),
  __decorateParam(0, (0, import_starboy_framework11.Inject)(PlayersService))
], BankService);

// ../../ProjectStarboy/src/server/services/bill.service.ts
var import_starboy_framework12 = require("starboy-framework");

// ../../ProjectStarboy/src/server/models/bill.model.ts
var import_mongoose8 = require("mongoose");
var billSchema = new import_mongoose8.Schema({
  type: { type: String, enum: ["bill", "fine"], default: "bill", required: true },
  from: { type: String, required: true, enum: ["mechanic", "ambulance", "police"] },
  by: { type: String, required: true },
  reason: { type: String, required: true },
  amount: { type: Number, required: true },
  owner: { type: String, required: true },
  status: { type: Boolean, default: false, required: true }
});
billSchema.plugin(mongooseLeanId_default);
var billModel = (0, import_mongoose8.model)("Bill", billSchema);
var bill_model_default = billModel;

// ../../ProjectStarboy/src/server/services/bill.service.ts
var BillService = class extends AppService {
  constructor(playersService, factionService) {
    super("BillService");
    this.playersService = playersService;
    this.factionService = factionService;
  }
  async getBills(owner) {
    const bills = await bill_model_default.find({ owner }).lean();
    return bills;
  }
  async getBill(id) {
    const bill = await bill_model_default.findById(id).lean();
    return bill;
  }
  async addBill(bill) {
    if (bill.amount < 0)
      return;
    const player = await this.playersService.getPlayerByDataId(bill.owner);
    if (!player)
      return;
    const newBill = await bill_model_default.create(bill);
    const result = __spreadProps(__spreadValues({}, bill), { _id: String(newBill._id) });
    if (player.online) {
      emitNet("bill:addBill", player.source, result);
    }
    return result;
  }
  async deleteBill(id) {
    const deletedBill = await bill_model_default.findByIdAndDelete(id).lean();
    return deletedBill;
  }
};
BillService = __decorateClass([
  (0, import_starboy_framework12.Injectable)(),
  __decorateParam(0, (0, import_starboy_framework12.Inject)(PlayersService)),
  __decorateParam(1, (0, import_starboy_framework12.Inject)(FactionService))
], BillService);

// ../../ProjectStarboy/src/server/services/chat.service.ts
var import_starboy_framework13 = require("starboy-framework");
var ChatService = class extends AppService {
  constructor(playersService, factionService, discordService) {
    super("ChatService");
    this.playersService = playersService;
    this.factionService = factionService;
    this.discordService = discordService;
    this._suggestions = /* @__PURE__ */ new Set();
    this.playersService.subscribe("playerLoaded", this.onPlayerLoaded.bind(this), "ChatService");
    this.playersService.subscribe("playerDropped", this.onPlayerDropped.bind(this), "ChatService");
  }
  get suggestions() {
    return Array.from(this._suggestions);
  }
  onPlayerLoaded(player) {
    this.systemChat("SERVER", `[${player.id}]${player.name} đã đăng nhập vào máy chủ!`);
  }
  onPlayerDropped(player) {
    this.systemChat("SERVER", `[${player.id}]${player.name} đã thoát khỏi máy chủ!`);
  }
  addSuggestion(data) {
    this._suggestions.add(data);
  }
  systemChat(sender, message) {
    emitNet("chat:newMessage", -1, {
      channel: "GENERAL",
      message,
      author: sender,
      type: "message"
    });
  }
};
ChatService = __decorateClass([
  (0, import_starboy_framework13.Injectable)(),
  __decorateParam(0, (0, import_starboy_framework13.Inject)(PlayersService)),
  __decorateParam(1, (0, import_starboy_framework13.Inject)(FactionService)),
  __decorateParam(2, (0, import_starboy_framework13.Inject)(DiscordService))
], ChatService);

// ../../ProjectStarboy/src/server/services/crafting.service.ts
var import_lodash = __toESM(require("lodash"));
var import_starboy_framework14 = require("starboy-framework");
var CraftingService = class extends AppService {
  constructor(discordService) {
    super("CraftingService");
    this.discordService = discordService;
    this._craftings = /* @__PURE__ */ new Set();
  }
  findRecipe(recipe) {
    for (const _recipe of CraftingConfig.recipes) {
      if (import_lodash.default.isEqual(_recipe, recipe))
        return _recipe;
    }
  }
  newCrafting(player, item, amount) {
    if (amount <= 0)
      return { status: 0 /* FAILED */, message: "Số lượng không hợp lệ" };
    const recipe = this.findRecipe(item);
    if (!recipe)
      return { status: 0 /* FAILED */, message: "Không tìm thấy công thức" };
    if (player.money < recipe.cost * amount)
      return { status: 0 /* FAILED */, message: "Không đủ tiền" };
    for (const itemName in recipe.ingredients) {
      if (Object.prototype.hasOwnProperty.call(recipe.ingredients, itemName)) {
        const ingredientAmount = recipe.ingredients[itemName];
        if (!player.hasItem({ itemName, amount: ingredientAmount * amount })) {
          return { status: 0 /* FAILED */, message: "Không đủ nguyên liệu" };
        }
      }
    }
    for (const itemName in recipe.ingredients) {
      if (Object.prototype.hasOwnProperty.call(recipe.ingredients, itemName)) {
        const ingredientAmount = recipe.ingredients[itemName];
        player.removeInventoryItem({
          itemName,
          amount: ingredientAmount * amount
        });
      }
    }
    player.removeAccountMoney("cash", recipe.cost * amount);
    const craftingData = {
      player,
      craftingItem: recipe,
      amount,
      timeout: setTimeout(() => {
        player.addInventoryItem({ itemName: recipe.name, amount });
        logger(`Đã chế tạo ${amount} - ${recipe.name}`, "crafting:success", player.getLogInfo());
        this.removeCrafting(craftingData);
      }, recipe.timeCraft * amount * 1e3)
    };
    this._craftings.add(craftingData);
    return { status: 1 /* SUCCESS */, data: void 0 };
  }
  removeCrafting(crafting) {
    clearTimeout(crafting.timeout);
    this._craftings.delete(crafting);
  }
};
CraftingService = __decorateClass([
  (0, import_starboy_framework14.Injectable)(),
  __decorateParam(0, (0, import_starboy_framework14.Inject)(DiscordService))
], CraftingService);

// ../../ProjectStarboy/src/server/services/daily-reward.service.ts
var import_starboy_framework15 = require("starboy-framework");

// ../../ProjectStarboy/src/server/class/daily-reward.class.ts
var import_lodash2 = __toESM(require("lodash"));
var import_moment = __toESM(require("moment"));
var cDailyReward = class extends AppClass2 {
  constructor(data, player) {
    super("DailyReward");
    this._saving = false;
    this.model = data;
    this.playerInstance = player;
  }
  get player() {
    return this.model.player;
  }
  get data() {
    const curDate = (0, import_moment.default)().format("YYYYMMDD");
    if (this.model.recieveTimes > DailyRewardConfig.length - 1) {
      this.model.recieveTimes = 0;
      this.save();
    }
    const yesterday = (0, import_moment.default)().subtract(1, "days").format("YYYYMMDD");
    if (yesterday !== this.model.lastDateRecieve) {
      this.model.recieveTimes = 0;
      this.save();
    }
    const rewards = DailyRewardConfig[this.model.recieveTimes] ? DailyRewardConfig[this.model.recieveTimes] : DailyRewardConfig[0];
    return {
      rewards,
      recieveTimes: this.model.recieveTimes,
      lastDateRecieve: this.model.lastDateRecieve,
      received: curDate === this.model.lastDateRecieve
    };
  }
  claim() {
    const curDate = (0, import_moment.default)().format("YYYYMMDD");
    if (this.model.lastDateRecieve === curDate)
      return this.playerInstance.showNotification({ type: "error", message: "Bạn đã nhận phần thưởng hôm nay rồi" });
    const rewards = this.data.rewards;
    const items = import_lodash2.default.filter(rewards, (o) => o.type === "item");
    const _items = [];
    items.forEach((e) => {
      _items.push({ itemName: e.name, amount: e.amount });
    });
    if (!this.playerInstance.canCarryItems(_items)) {
      this.playerInstance.showNotification({
        type: "error",
        message: "Kho đồ của bạn đã đầy"
      });
      return;
    }
    rewards.forEach((reward) => {
      if (reward.type === "account") {
        this.playerInstance.addAccountMoney(reward.name, reward.amount);
      }
      if (reward.type === "item") {
        this.playerInstance.addInventoryItem({ itemName: reward.name, amount: reward.amount });
      }
    });
    this.model.recieveTimes++;
    this.model.lastDateRecieve = curDate;
    this.save();
  }
  async save() {
    if (this._saving)
      return;
    this._saving = true;
    await this.model.save();
    this._saving = false;
  }
};

// ../../ProjectStarboy/src/server/models/daily-reward.model.ts
var import_mongoose9 = require("mongoose");
var dailyRewardSchema = new import_mongoose9.Schema({
  player: { type: String, unique: true, required: true },
  recieveTimes: { type: Number, default: 0 },
  lastDateRecieve: { type: String }
});
var dailyRewardModel = (0, import_mongoose9.model)("DAilyReward", dailyRewardSchema);
var daily_reward_model_default = dailyRewardModel;

// ../../ProjectStarboy/src/server/services/daily-reward.service.ts
var DailyRewardService = class extends AppService {
  constructor(playersService, vehicleService) {
    super("DailyRewardService");
    this.playersService = playersService;
    this.vehicleService = vehicleService;
    this._dailyRewards = /* @__PURE__ */ new Set();
  }
  getRewardByPlayer(playerDId) {
    for (const e of this._dailyRewards) {
      if (e.player === playerDId)
        return e;
    }
  }
  async getPlayerDailyRewardInstance(player) {
    const instance = this.getRewardByPlayer(player._id);
    if (!instance) {
      const findDailyReward = await daily_reward_model_default.findOne({ player: player._id });
      if (!findDailyReward) {
        const newDailyReward = await daily_reward_model_default.create({ player: player._id, recieveTimes: 0 });
        const dailyRewardInstance2 = new cDailyReward(newDailyReward, player);
        this._dailyRewards.add(dailyRewardInstance2);
        return dailyRewardInstance2;
      }
      const dailyRewardInstance = new cDailyReward(findDailyReward, player);
      this._dailyRewards.add(dailyRewardInstance);
      return dailyRewardInstance;
    }
    return instance;
  }
  async claim(player) {
    const rewardData = await this.getPlayerDailyRewardInstance(player);
    await rewardData.claim();
  }
  async claimNewbie(source2, vehProps) {
    const player = this.playersService.getPlayer(source2);
    if (!player) {
      return;
    }
    const rewards = NewbieRewardConfig;
    const vehicleData = VehicleNewbieReward;
    rewards.forEach((reward) => {
      if (reward.type === "account") {
        player.addAccountMoney(reward.name, reward.amount);
      }
      if (reward.type === "item") {
        player.addInventoryItem({ itemName: reward.name, amount: reward.amount });
      }
    });
    const vehicle = await this.vehicleService.createVehicle(player, vehicleData.name, {});
    if (vehicle) {
      const pedCoords = GetEntityCoords(GetPlayerPed(player.source));
      vehicle.spawn({ coords: pedCoords });
    }
    player.claimNewbieReward();
  }
};
DailyRewardService = __decorateClass([
  (0, import_starboy_framework15.Injectable)(),
  __decorateParam(0, (0, import_starboy_framework15.Inject)(PlayersService)),
  __decorateParam(1, (0, import_starboy_framework15.Inject)(vehicle_service_default))
], DailyRewardService);
var daily_reward_service_default = DailyRewardService;

// ../../ProjectStarboy/src/server/services/doors.service.ts
var import_starboy_framework16 = require("starboy-framework");

// ../../ProjectStarboy/src/server/class/doorLock.class.ts
var import_container8 = __toESM(require("starboy-framework/dist/packages/core/container"));

// ../../ProjectStarboy/src/server/models/doorlock.model.ts
var import_mongoose10 = require("mongoose");
var doorLockSchema = new import_mongoose10.Schema({
  doors: [
    {
      model: { type: Number, required: true },
      coords: { type: [Number], required: true },
      heading: { type: Number, required: true }
    }
  ],
  keys: [
    {
      label: { type: String, required: true },
      playerDId: { type: String, required: true }
    }
  ],
  locked: { type: Boolean, default: false },
  owner: { type: String, required: true },
  type: { type: String, required: true, enum: ["key", "passcode"], default: "key" },
  passcode: { type: String, required: true, default: "" }
});
var doorLockModel = (0, import_mongoose10.model)("DoorLock", doorLockSchema);
var doorlock_model_default = doorLockModel;

// ../../ProjectStarboy/src/server/class/doorLock.class.ts
var sDoorLock = class extends DoorLock {
  constructor(doc, isNew = false) {
    super({
      doors: doc.doors,
      keys: doc.keys,
      locked: doc.locked,
      _id: doc._id.toString(),
      owner: doc.owner,
      type: doc.type,
      passcode: doc.passcode
    });
    this.socketService = import_container8.default.get(SocketService);
    if (isNew) {
      this.socketService.emit("Door_Create" /* Door_Create */, -1, this.data);
    }
  }
  static async create(data) {
    const newDoorDoc = await doorlock_model_default.create(data);
    return new sDoorLock(newDoorDoc, true);
  }
  async sync(field) {
    await this.save();
    this.socketService.emit("Door_Sync" /* Door_Sync */, -1, this.data);
  }
  async save() {
    await doorlock_model_default.findByIdAndUpdate(this._id, this.data);
  }
  async delete() {
    await doorlock_model_default.findByIdAndDelete(this._id);
    this.socketService.emit("Door_Delete" /* Door_Delete */, -1, this.id);
  }
  canOpen(playerDId, passcode) {
    if (this.type === "key") {
      if (this.owner === playerDId)
        return true;
      for (const key of this._keys) {
        if (key.playerDId === playerDId)
          return true;
      }
    } else {
      if (this.passcode === passcode)
        return true;
    }
    return false;
  }
};

// ../../ProjectStarboy/src/server/services/doors.service.ts
var DoorsService = class extends AppService {
  constructor() {
    super("DoorsService");
    this._registeredDoors = /* @__PURE__ */ new Set();
    this._doors = /* @__PURE__ */ new Set();
    this.initData();
  }
  async initData() {
    const doors = await doorlock_model_default.find();
    for (const door of doors) {
      const doorInstance = new sDoorLock(door);
      this._doors.add(doorInstance);
      doorInstance.doors.forEach((e) => {
        this._registeredDoors.add(e);
      });
    }
  }
  get doors() {
    return Array.from(this._doors);
  }
  get data() {
    const ret = [];
    for (const door of this._doors) {
      ret.push(door.data);
    }
    return ret;
  }
  getDoor(id) {
    for (const door of this._doors) {
      if (door.id === id) {
        return door;
      }
    }
  }
  canCreateDoor(doors) {
    for (const door of this._registeredDoors) {
      for (const _door of doors) {
        if (door.model === _door.model && Math.floor(door.coords[0]) === Math.floor(_door.coords[0]) && Math.floor(door.coords[1]) === Math.floor(_door.coords[1]) && Math.floor(door.coords[2]) === Math.floor(_door.coords[2])) {
          return false;
        }
      }
    }
    return true;
  }
  async createDoor(data) {
    const newDoor = await sDoorLock.create(data);
    this._doors.add(newDoor);
    newDoor.doors.forEach((e) => {
      this._registeredDoors.add(e);
    });
    return newDoor;
  }
  deleteDoor(door) {
    door.delete();
    door.doors.forEach((e) => {
      this._registeredDoors.delete(e);
    });
    this._doors.delete(door);
  }
  addKey(doorId, keyData) {
    const door = this.getDoor(doorId);
    if (!door)
      return false;
    door.addKey(keyData);
    return true;
  }
  removeKey(doorId, playerDId) {
    const door = this.getDoor(doorId);
    if (!door)
      return false;
    door.removeKey(playerDId);
    return true;
  }
  setLock(doorId, locked) {
    const door = this.getDoor(doorId);
    if (!door)
      return false;
    door.locked = locked;
    return true;
  }
};
DoorsService = __decorateClass([
  (0, import_starboy_framework16.Injectable)()
], DoorsService);

// ../../ProjectStarboy/src/server/services/drivingschool.service.ts
var import_starboy_framework17 = require("starboy-framework");
var DrivingSchoolService = class extends AppService {
  constructor(playersService) {
    super("DrivingSchoolService");
    this.playersService = playersService;
    this._theorySlot = /* @__PURE__ */ new Map();
    this._theorySlot.set("1", { source: "0", startAt: 0 });
    this._theorySlot.set("2", { source: "0", startAt: 0 });
    this._theorySlot.set("3", { source: "0", startAt: 0 });
    this._theorySlot.set("4", { source: "0", startAt: 0 });
    this._theorySlot.set("5", { source: "0", startAt: 0 });
    this._theorySlot.set("6", { source: "0", startAt: 0 });
    this._theorySlot.set("7", { source: "0", startAt: 0 });
    this._theorySlot.set("8", { source: "0", startAt: 0 });
    this.updateGlobalState();
  }
  updateGlobalState() {
    this._theorySlot.forEach((value, key) => {
      GlobalState.set(`DRIVING_SCHOOL_THEORY_${key}`, value.source !== "0" ? true : false, true);
    });
  }
  joinSlot(slot, playerSrc) {
    var _a;
    if (((_a = this._theorySlot.get(slot)) == null ? void 0 : _a.source) === "0") {
      this._theorySlot.set(slot, {
        source: playerSrc,
        startAt: new Date().getTime()
      });
      this.updateGlobalState();
      return {
        status: 1 /* SUCCESS */,
        data: void 0
      };
    } else {
      return {
        status: 0 /* FAILED */,
        message: "Chỗ này đã có người ngồi"
      };
    }
  }
  leaveSlot(slot) {
    this._theorySlot.set(slot, { source: "0", startAt: 0 });
    this.updateGlobalState();
  }
  getPlayerSlotFromSource(playerSrc) {
    for (const [key, value] of this._theorySlot.entries()) {
      if (value.source === playerSrc)
        return key;
    }
  }
  onPlayerDropped(player) {
    const slot = this.getPlayerSlotFromSource(player.source);
    if (!slot)
      return;
    this.leaveSlot(slot);
  }
  isSlotAvailabel(slot) {
    var _a;
    return ((_a = this._theorySlot.get(slot)) == null ? void 0 : _a.source) === "0";
  }
};
DrivingSchoolService = __decorateClass([
  (0, import_starboy_framework17.Injectable)(),
  __decorateParam(0, (0, import_starboy_framework17.Inject)(PlayersService))
], DrivingSchoolService);

// ../../ProjectStarboy/src/server/services/dui-screen.service.ts
var import_starboy_framework18 = require("starboy-framework");

// ../../ProjectStarboy/src/server/models/screen.model.ts
var import_mongoose11 = require("mongoose");
var screenSchema = new import_mongoose11.Schema({
  owner: { type: String, required: true },
  accessers: { type: [String], required: true, default: [] },
  coords: { type: [Number], required: true },
  rotation: { type: [Number], required: true },
  scale: { type: Number, required: true }
});
var screenModel = (0, import_mongoose11.model)("Screen", screenSchema);
var screen_model_default = screenModel;

// ../../ProjectStarboy/src/server/class/dui-screen.class.ts
var DuiScreen = class extends AppClass2 {
  constructor(data) {
    super("DuiScreen");
    this.playedAt = 0;
    this.isPlaying = false;
    this.isPaused = false;
    this.isStopped = false;
    this.isLooped = false;
    this.isMuted = false;
    this.playingUrl = "";
    this.owner = data.owner;
    this.accessers = data.accessers;
    this.coords = data.coords;
    this.rotation = data.rotation;
    this.scale = data.scale;
    this._id = data._id;
  }
  get data() {
    return {
      owner: this.owner,
      accessers: this.accessers,
      coords: this.coords,
      rotation: this.rotation,
      scale: this.scale,
      _id: this._id,
      playedAt: this.playedAt,
      isPlaying: this.isPlaying,
      isPaused: this.isPaused,
      isStopped: this.isStopped,
      isLooped: this.isLooped,
      isMuted: this.isMuted,
      playingUrl: this.playingUrl
    };
  }
  async setCoords(coords) {
    this.coords = coords;
    await screen_model_default.updateOne({ _id: this._id }, { coords });
    this.sync("setCoords", { coords });
  }
  async setRotation(rotation) {
    this.rotation = rotation;
    await screen_model_default.updateOne({ _id: this._id }, { rotation });
    this.sync("setRotation", { rotation });
  }
  async setScale(scale) {
    this.scale = scale;
    await screen_model_default.updateOne({ _id: this._id }, { scale });
    this.sync("setScale", { scale });
  }
  setAccessers(accessers) {
    this.accessers = accessers;
    this.sync("setAccessers", { accessers });
  }
  sync(type, data) {
    emitNet("dui-screen:sync", -1, type, __spreadProps(__spreadValues({}, data), { _id: this._id }));
  }
  play(url) {
    this.playingUrl = url;
    this.playedAt = Date.now();
    this.isPlaying = true;
    this.isPaused = false;
    this.isStopped = false;
    this.sync("play", { playingUrl: this.playingUrl, playedAt: this.playedAt });
  }
  pause() {
    this.isPaused = true;
    this.isPlaying = false;
    this.sync("pause", {});
  }
  resume() {
    this.isPaused = false;
    this.isPlaying = true;
    this.sync("resume", {});
  }
  stop() {
    this.isStopped = true;
    this.isPlaying = false;
    this.sync("stop", {});
  }
  loop() {
    this.isLooped = !this.isLooped;
    this.sync("loop", { isLooped: this.isLooped });
  }
  mute() {
    this.isMuted = !this.isMuted;
    this.sync("mute", { isMuted: this.isMuted });
  }
  seekTo(time) {
    this.playedAt = Date.now() - time;
    this.sync("seekTo", { time });
  }
};

// ../../ProjectStarboy/src/server/services/dui-screen.service.ts
var DuiScreenService = class extends AppService {
  constructor() {
    super("DuiScreenService");
    this.screens = /* @__PURE__ */ new Set();
    this.loadScreens();
  }
  get data() {
    const screens = [];
    for (const screen of this.screens) {
      screens.push(screen.data);
    }
    return screens;
  }
  async loadScreens() {
    const allScreens = await screen_model_default.find();
    allScreens.forEach((screen) => {
      const screenInstance = new DuiScreen({
        owner: screen.owner,
        accessers: screen.accessers,
        coords: screen.coords,
        rotation: screen.rotation,
        scale: screen.scale,
        _id: screen._id.toString()
      });
      this.screens.add(screenInstance);
    });
  }
  async create(player, coords, rotation, scale) {
    const allScreens = await screen_model_default.find();
    if (allScreens.length >= 10)
      return player.showNotification({
        type: "error",
        message: "You can't create more than 10 screens."
      });
    const createdDuiScreen = await screen_model_default.create({
      owner: player._id,
      accessers: [],
      coords,
      rotation,
      scale
    });
    if (!createdDuiScreen)
      return player.showNotification({ type: "error", message: "An error occured while creating the screen." });
    const screenInstance = new DuiScreen({
      owner: player._id,
      accessers: [],
      coords,
      rotation,
      scale,
      _id: createdDuiScreen._id.toString()
    });
    this.screens.add(screenInstance);
    emitNet("dui-screen:create", -1, screenInstance.data);
    return player.showNotification({ type: "success", message: "You created a screen." });
  }
  getScreen(screenId) {
    for (const screen of this.screens) {
      if (screen._id === screenId)
        return screen;
    }
  }
  async delete(player, screenId) {
    const screen = this.getScreen(screenId);
    if (!screen)
      return player.showNotification({ type: "error", message: "This screen doesn't exist." });
    if (screen.owner !== player._id)
      return player.showNotification({ type: "error", message: "You don't own this screen." });
    const deletedScreen = await screen_model_default.findByIdAndDelete(screenId);
    if (!deletedScreen)
      return player.showNotification({ type: "error", message: "An error occured while deleting the screen." });
    this.screens.delete(screen);
    return player.showNotification({ type: "success", message: "You deleted the screen." });
  }
};
DuiScreenService = __decorateClass([
  (0, import_starboy_framework18.Injectable)()
], DuiScreenService);

// ../../ProjectStarboy/src/server/services/emergencycalls.service.ts
var import_starboy_framework19 = require("starboy-framework");

// ../../ProjectStarboy/src/server/class/emergencycall.class.ts
var import_container9 = __toESM(require("starboy-framework/dist/packages/core/container"));
var sEmergencyCall = class extends AppClass2 {
  constructor(targetId, targetName, targetPos, type) {
    super("EmergencyCall");
    this._type = "police";
    this._recieverId = 0;
    this._recieverName = "";
    this._recieved = false;
    this.factionService = import_container9.default.get(FactionService);
    this._targetId = targetId;
    this._targetName = targetName;
    this._targetPos = targetPos;
    this._type = type;
    this._createAt = Date.now();
    this._id = e4();
  }
  get targetId() {
    return this._targetId;
  }
  get targetName() {
    return this._targetName;
  }
  get type() {
    return this._type;
  }
  get targetPos() {
    return this._targetPos;
  }
  get recieverId() {
    return this._recieverId;
  }
  get recieverName() {
    return this._recieverName;
  }
  get createAt() {
    return this._createAt;
  }
  get recieved() {
    return this._recieved;
  }
  get id() {
    return this._id;
  }
  get data() {
    return {
      targetId: this.targetId,
      targetName: this.targetName,
      distance: 0,
      targetPos: this.targetPos,
      recieverId: this.recieverId,
      recieverName: this.recieverName,
      createAt: this.createAt,
      recieved: this.recieved,
      id: this.id
    };
  }
  setReciever(recieverId, recieverName) {
    this._recieverId = recieverId;
    this._recieverName = recieverName;
    this._recieved = true;
    this.sync();
  }
  clearReciever() {
    this._recieverId = 0;
    this._recieverName = "";
    this._recieved = false;
    this.sync();
  }
  emitNet(eventName, ...args) {
  }
  sync() {
  }
};

// ../../ProjectStarboy/src/server/services/emergencycalls.service.ts
var EmergencyCallsService = class extends AppService {
  constructor() {
    super("EmergencyCallsService");
    this._calls = /* @__PURE__ */ new Set();
  }
  createCall(player, targetPos, type) {
    for (const call of this._calls) {
      if (call.targetId === player.id && call.type === type)
        return player.showNotification({
          type: "error",
          message: "Vui lòng không spam (Đơn của bạn đã tồn tại trong hệ thống)"
        });
    }
    const newCall = new sEmergencyCall(player.id, player.name, targetPos, type);
    this._calls.add(newCall);
    newCall.emitNet("EmergencyCall_AddCall" /* EmergencyCall_AddCall */, newCall.data);
  }
  getCallByPlayerId(playerId) {
    for (const call of this._calls) {
      if (call.targetId === playerId)
        return call;
    }
  }
  getCall(callId) {
    for (const call of this._calls) {
      if (call.id === callId)
        return call;
    }
  }
  removeCall(callId) {
    const call = this.getCall(callId);
    if (call) {
      this._calls.delete(call);
      call.emitNet("EmergencyCall_DeleteCall" /* EmergencyCall_DeleteCall */, call.id);
    }
  }
  getCalls(type) {
    const calls = [];
    for (const call of this._calls) {
      if (call.type === type)
        calls.push(call.data);
    }
    return calls;
  }
  onPlayerDropped(player) {
    for (const call of this._calls) {
      if (call.targetId === player.id) {
        this.removeCall(call.id);
        return;
      }
    }
  }
};
EmergencyCallsService = __decorateClass([
  (0, import_starboy_framework19.Injectable)()
], EmergencyCallsService);

// ../../ProjectStarboy/src/server/services/garage.service.ts
var import_starboy_framework20 = require("starboy-framework");

// ../../ProjectStarboy/src/server/models/garage.model.ts
var import_mongoose12 = require("mongoose");
var garageSlotSchema = new import_mongoose12.Schema({
  vehicle: { type: import_mongoose12.Schema.Types.ObjectId, ref: "Vehicle" },
  parkedAt: { type: Date },
  expiredAt: { type: Date }
});
var garageSchema = new import_mongoose12.Schema(
  {
    index: { type: Number, required: true },
    slot: [garageSlotSchema]
  },
  {
    timestamps: true
  }
);
var garageModel = (0, import_mongoose12.model)("Garage", garageSchema);
var garage_model_default = garageModel;

// ../../ProjectStarboy/src/server/services/garage.service.ts
var GarageService = class extends AppService {
  constructor() {
    super("GarageService");
    this.garages = [];
    this.ready = false;
    this.initData();
  }
  async initData() {
    for (let i = 0; i < GarageConfig.length; i++) {
      const element = GarageConfig[i];
      await this.findOrCreateData(i, element);
    }
    this.ready = true;
  }
  async getGarages() {
    while (!this.ready) {
      await Sleep(1e3);
    }
    return this.garages;
  }
  getGarageParkingPrice(garageIndex, days = 1) {
    const garageConfig = GarageConfig[garageIndex];
    if (garageConfig) {
      return garageConfig.price * days;
    }
    return;
  }
  async getGarageData(garageIndex) {
    const garageData = this.garages[garageIndex];
    return garageData;
  }
  async updateGarageData(garageIndex, data) {
    const updatedGarageData = await garage_model_default.findOneAndUpdate({
      index: garageIndex,
      data
    });
    this.garages[garageIndex] = data;
    emitNet("garage:syncGarage", -1, garageIndex, data.slot);
    return updatedGarageData;
  }
  async isVehicleSlotFree(garageIndex, slotIndex) {
    const garage = await garage_model_default.findOne({ index: garageIndex });
    if (!garage)
      return false;
    const garageSlot = garage.slot[slotIndex];
    if (!garageSlot)
      return true;
    return garageSlot.vehicle === void 0 || garageSlot.vehicle === null;
  }
  async addVehicleToGarage(garageIndex, slotIndex, vehicle, expiredAt) {
    const garage = this.garages[garageIndex];
    if (!garage)
      return false;
    garage.slot[slotIndex] = {
      vehicle,
      parkedAt: new Date(),
      expiredAt
    };
    await garage_model_default.findOneAndUpdate({ index: garageIndex }, garage);
    emitNet("garage:syncSlot", -1, garageIndex, slotIndex, garage.slot[slotIndex]);
    return true;
  }
  async removeVehicleFromGarage(garageIndex, vehicle) {
    const garage = this.garages[garageIndex];
    if (!garage)
      return false;
    garage.slot.forEach(async (slot, index) => {
      var _a;
      if (((_a = slot.vehicle) == null ? void 0 : _a._id) === vehicle._id) {
        slot.vehicle = null;
        await garage_model_default.findOneAndUpdate({ index: garageIndex }, garage);
        emitNet("garage:syncSlot", -1, garageIndex, index, slot);
      }
    });
  }
  async findOrCreateData(index, data) {
    const garageData = await garage_model_default.findOne({ index }).populate("slot.vehicle");
    if (garageData) {
      this.garages[index] = JSON.parse(JSON.stringify(garageData.toJSON()));
    } else {
      const slot = [];
      data.slot.forEach(() => {
        slot.push({
          vehicle: null,
          expiredAt: null,
          parkedAt: null
        });
      });
      const newGarageData = await garage_model_default.create({
        index,
        slot
      });
      this.garages[index] = JSON.parse(JSON.stringify(newGarageData.toJSON()));
    }
  }
  getVehicleInSlot(garageIndex, slotIndex) {
    const garage = this.garages[garageIndex];
    if (!garage)
      return;
    const slot = garage.slot[slotIndex];
    if (!slot)
      return;
    return slot.vehicle;
  }
  getParkingSlot(garageIndex, slotIndex) {
    const garage = this.garages[garageIndex];
    if (!garage)
      return;
    const slot = garage.slot[slotIndex];
    return slot;
  }
};
GarageService = __decorateClass([
  (0, import_starboy_framework20.Injectable)()
], GarageService);

// ../../ProjectStarboy/src/server/services/grocerystore.service.ts
var import_starboy_framework21 = require("starboy-framework");
var GloceryStoreService = class extends AppService {
  constructor() {
    super("GloceryStoreService");
    this.storeItems = /* @__PURE__ */ new Map();
  }
  findItemInStoreByName(itemName, storeIdx) {
    const store = ConfigGroceryStore[storeIdx];
    if (!store)
      return;
    if (this.storeItems.has(itemName)) {
      return this.storeItems.get(itemName);
    }
    const item = store.items.find((e) => e.name === itemName);
    this.storeItems.set(itemName, item);
    return item;
  }
  calCartPrice(cart, index) {
    let sumPrice = 0;
    for (let i = 0; i < cart.length; i++) {
      const element = cart[i];
      const storeItem = this.findItemInStoreByName(element.name, index);
      if (!storeItem)
        return;
      sumPrice += storeItem.price * element.quantity;
    }
    return sumPrice;
  }
};
GloceryStoreService = __decorateClass([
  (0, import_starboy_framework21.Injectable)()
], GloceryStoreService);

// ../../ProjectStarboy/src/server/services/item.service.ts
var import_starboy_framework22 = require("starboy-framework");

// ../../ProjectStarboy/src/server/models/item.model.ts
var import_mongoose13 = require("mongoose");
var import_crypto4 = require("crypto");
var itemSchema = new import_mongoose13.Schema(
  {
    uuid: { type: String, default: () => (0, import_crypto4.randomUUID)() },
    name: { type: String, required: true },
    owner: { type: String, required: true },
    slot: {
      type: String,
      enum: [
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
        "49",
        "HAT",
        "GLASS",
        "EAR",
        "WATCH",
        "BRACELET",
        "MASK",
        "TORSOR",
        "LEG",
        "BAG",
        "SHOES",
        "ACCESSORY",
        "UNDERSHIRT",
        "KEVLAR",
        "DECAL",
        "TOP"
      ],
      required: true
    },
    expiration: { type: Number },
    stability: { type: Number },
    component: {
      skin: { type: String },
      scope: { type: String },
      suppressor: { type: String },
      clip: { type: String },
      grip: { type: String },
      flashlight: { type: String }
    },
    ammo: { type: Number }
  },
  { timestamps: true }
);
var itemModel = (0, import_mongoose13.model)("Item", itemSchema);
var item_model_default = itemModel;

// ../../ProjectStarboy/src/server/services/item.service.ts
var ItemService = class extends AppService {
  constructor(i18n, discordService) {
    super("ItemService");
    this.i18n = i18n;
    this.discordService = discordService;
    this.items = [];
    this.itemModel = item_model_default;
    this.useItemTimeout = {};
    this.useableItems = /* @__PURE__ */ new Set();
  }
  async createItem(data) {
    return {
      status: 0 /* FAILED */,
      message: "error"
    };
  }
  getItem(name) {
    for (let i = 0; i < items_default.length; i++) {
      const item = items_default[i];
      if (item.name === name) {
        return item;
      }
    }
  }
  registerUseableItem(itemName, timeout, handler) {
    let founded = false;
    for (const useableItem of this.useableItems) {
      if (useableItem.itemName === itemName) {
        useableItem.handler = handler;
        founded = true;
        break;
      }
    }
    if (!founded) {
      this.useableItems.add({ itemName, timeout, handler });
    }
  }
  onCanUseItem(player) {
    delete this.useItemTimeout[player._id];
  }
  async onUseItem(player, itemName, slot) {
    for (const useableItem of this.useableItems) {
      if (useableItem.itemName === itemName) {
        const curTime = new Date().getTime();
        if (this.useItemTimeout[player._id] && this.useItemTimeout[player._id] + useableItem.timeout > curTime) {
          return;
        }
        this.useItemTimeout[player._id] = curTime;
        const isSuccess = await useableItem.handler(player, slot);
        if (isSuccess) {
          player.emitNet("item:client:onUseItem", useableItem.itemName);
          logger(`Sử dụng vật phẩm ${useableItem.itemName}`, "item:useItem", player.getLogInfo());
          return true;
        }
      }
    }
  }
  async onCancel(player) {
    this.useItemTimeout[player._id] = 0;
  }
};
ItemService = __decorateClass([
  (0, import_starboy_framework22.Injectable)(),
  __decorateParam(0, (0, import_starboy_framework22.Inject)(I18n)),
  __decorateParam(1, (0, import_starboy_framework22.Inject)(DiscordService))
], ItemService);

// ../../ProjectStarboy/src/server/services/jail.service.ts
var import_starboy_framework23 = require("starboy-framework");

// ../../ProjectStarboy/src/server/class/jail.class.ts
var import_container10 = __toESM(require("starboy-framework/dist/packages/core/container"));

// ../../ProjectStarboy/src/server/models/jail.model.ts
var import_mongoose14 = require("mongoose");
var jailSchema = new import_mongoose14.Schema({
  playerId: { type: String, required: true },
  reason: { type: String, required: true, default: "No reason" },
  arrestedBy: { type: String, required: true },
  arrestAt: { type: Number, required: true, default: Date.now() },
  detentionTime: { type: Number, required: true }
});
var jailModel = (0, import_mongoose14.model)("jail", jailSchema);
var jail_model_default = jailModel;

// ../../ProjectStarboy/src/server/class/jail.class.ts
var sJail = class extends AppClass2 {
  constructor(doc, shouldGetData = true) {
    super("Jail");
    this._gettedArrestByPlayer = {
      name: "unknown",
      id: 0
    };
    this._source = "0";
    this.playersService = import_container10.default.get(PlayersService);
    this._playerId = doc.playerId;
    this._reason = doc.reason;
    this._arrestedBy = doc.arrestedBy;
    this._arrestAt = doc.arrestAt;
    this._detentionTime = doc.detentionTime;
    this._id = doc._id.toString();
    if (shouldGetData)
      this.getData();
  }
  static async create(player, reason, arrestedBy, detentionTime) {
    const createdData = await jail_model_default.create({
      playerId: player._id,
      reason,
      arrestedBy: typeof arrestedBy === "string" ? arrestedBy : arrestedBy._id,
      detentionTime
    });
    const jailInstace = new sJail(createdData, false);
    await jailInstace.getData();
    player.setCuffing(false);
    player.triggerEvent("Jail_OnJail" /* Jail_OnJail */, jailInstace.data);
    return jailInstace;
  }
  async getData() {
    if (this._arrestedBy === "0")
      return;
    const officer = await this.playersService.getPlayerByDataId(this._arrestedBy);
    if (officer) {
      this._gettedArrestByPlayer = {
        name: officer.name,
        id: officer.id
      };
    }
  }
  get arrestedBy() {
    return this._arrestedBy;
  }
  get playerId() {
    return this._playerId;
  }
  set source(value) {
    this._source = value;
    Player(value).state.set("jailed", true, true);
  }
  get data() {
    return {
      playerId: this._playerId,
      reason: this._reason,
      arrestedBy: this._gettedArrestByPlayer,
      arrestAt: this._arrestAt,
      detentionTime: this._detentionTime
    };
  }
  set detentionTime(value) {
    this._detentionTime = value;
  }
  get detentionTime() {
    return this._detentionTime;
  }
  tick() {
    if (this._source === "0") {
      return;
    }
    this._detentionTime--;
    this.sync("detentionTime");
    if (this._detentionTime > 0) {
      this.save();
    } else {
      this.unjail();
    }
  }
  async unjail() {
    await jail_model_default.findByIdAndDelete(this._id);
    if (this._source !== "0") {
      emitNet("Jail_OnUnJail" /* Jail_OnUnJail */, this._source);
    }
  }
  sync(field) {
    if (this._source !== "0") {
      emitNet("Jail_OnSync" /* Jail_OnSync */, this._source, field, this.data[field]);
    }
  }
  async save() {
    await jail_model_default.findByIdAndUpdate(this._id, { detentionTime: this._detentionTime });
  }
};

// ../../ProjectStarboy/src/server/services/jail.service.ts
var JailService = class extends AppService {
  constructor(chatService) {
    super("JailService");
    this.chatService = chatService;
    this._detainees = /* @__PURE__ */ new Set();
    this.initData();
  }
  async initData() {
    const data = await jail_model_default.find();
    data.forEach((item) => {
      this._detainees.add(new sJail(item));
    });
    this.tickThread();
  }
  async tickThread() {
    while (true) {
      await Sleep(1e3);
      for (const element of this._detainees) {
        element.tick();
        if (element.detentionTime <= 0) {
          element.unjail();
          this._detainees.delete(element);
        }
      }
    }
  }
  get detainees() {
    return Array.from(this._detainees);
  }
  getDetaineeByPlayer(databaseId) {
    for (const element of this._detainees) {
      if (element.playerId === databaseId) {
        return element;
      }
    }
  }
  getDetaineeByOfficer(officerDatabaseId) {
    const detainees = [];
    for (const element of this._detainees) {
      if (element.arrestedBy === officerDatabaseId) {
        detainees.push(element);
      }
    }
    return detainees;
  }
  async jail(player, reason, detentionTime, arrestedBy) {
    const detainee = this.getDetaineeByPlayer(player._id);
    if (detainee) {
      detainee.detentionTime += detentionTime;
      return detainee;
    } else {
      const newJail = await sJail.create(player, reason, arrestedBy || "0", detentionTime);
      this._detainees.add(newJail);
      this.chatService.systemChat("NHÀ TÙ", `[${player.id}]${player.name} đã bi giam trong tù ${detentionTime / 60} phút vì tội: ${reason}`);
      return newJail;
    }
  }
  unJail(playerDatabaseId) {
    const detainee = this.getDetaineeByPlayer(playerDatabaseId);
    if (!detainee)
      return false;
    detainee.detentionTime = 0;
    return true;
  }
  onPlayerLoaded(player) {
    const detainee = this.getDetaineeByPlayer(player._id);
    if (detainee) {
      detainee.source = player.source;
    }
  }
  onPlayerDropped(player) {
    const detainee = this.getDetaineeByPlayer(player._id);
    if (detainee) {
      detainee.source = "0";
    }
  }
};
JailService = __decorateClass([
  (0, import_starboy_framework23.Injectable)(),
  __decorateParam(0, (0, import_starboy_framework23.Inject)(ChatService))
], JailService);

// ../../ProjectStarboy/src/server/services/market.service.ts
var import_starboy_framework24 = require("starboy-framework");

// ../../ProjectStarboy/src/server/models/marketitem.model.ts
var import_mongoose15 = require("mongoose");
var marketItemHistorySchema = new import_mongoose15.Schema({
  data: { type: Number, required: true },
  price: { type: Number, required: true }
});
var marketItemSchema = new import_mongoose15.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  histories: [marketItemHistorySchema]
});
var marketItemModel = (0, import_mongoose15.model)("MarketItem", marketItemSchema);
var marketitem_model_default = marketItemModel;

// ../../ProjectStarboy/src/server/class/marketitem.class.ts
var import_lodash3 = __toESM(require("lodash"));
var cMarketItem = class extends AppClass2 {
  constructor(model18, config) {
    super("MarketItem");
    this._selledAmount = 0;
    this._saving = false;
    this.model = model18;
    this.config = config;
  }
  get name() {
    return this.model.name;
  }
  set name(newName) {
    this.model.name = newName;
    this.save();
  }
  get price() {
    return this.model.price;
  }
  set price(newPrice) {
    const curTime = new Date().getTime();
    this.model.price = newPrice;
    const newHistory = this.model.histories.create({ price: this.price, date: curTime });
    this.model.histories.push(newHistory);
    this.save();
  }
  get histories() {
    return json(this.model.histories);
  }
  get maxPrice() {
    return this.config.maxPrice;
  }
  get minPrice() {
    return this.config.minPrice;
  }
  get selledAmount() {
    return this._selledAmount;
  }
  set selledAmount(value) {
    this._selledAmount = value;
  }
  get data() {
    return {
      name: this.name,
      price: this.price,
      histories: import_lodash3.default.slice(this.histories, this.histories.length >= 10 ? this.histories.length - 10 : 0, this.histories.length),
      maxPrice: this.maxPrice,
      minPrice: this.minPrice
    };
  }
  async save() {
    if (this._saving)
      return;
    this._saving = true;
    await this.model.save();
    this._saving = false;
  }
};

// ../../ProjectStarboy/src/shared/config/market.ts
var MarketConfig = {
  buyItems: [
    { name: "stone", minPrice: 500, maxPrice: 1500 },
    { name: "washed_stone", minPrice: 500, maxPrice: 1500 },
    { name: "diamond", minPrice: 500, maxPrice: 1500 },
    { name: "gold", minPrice: 500, maxPrice: 1500 },
    { name: "iron", minPrice: 500, maxPrice: 1500 },
    { name: "copper", minPrice: 500, maxPrice: 1500 },
    { name: "sand", minPrice: 500, maxPrice: 1500 },
    { name: "silic", minPrice: 500, maxPrice: 1500 },
    { name: "fiberglass", minPrice: 500, maxPrice: 1500 },
    { name: "wood", minPrice: 500, maxPrice: 1500 },
    { name: "sawned_wood", minPrice: 500, maxPrice: 1500 },
    { name: "highquality_wood", minPrice: 500, maxPrice: 1500 },
    { name: "oil", minPrice: 500, maxPrice: 1500 },
    { name: "filtered_oil", minPrice: 500, maxPrice: 1500 },
    { name: "oilRefinded", minPrice: 500, maxPrice: 1500 },
    { name: "wool", minPrice: 500, maxPrice: 1500 },
    { name: "silk", minPrice: 500, maxPrice: 1500 },
    { name: "fabric", minPrice: 500, maxPrice: 1500 }
  ],
  dealers: [{ coords: [463.81329345703125, -736.090087890625, 27.36223602294922, 92.26223754882812], pedModel: "a_m_y_smartcaspat_01" }]
};

// ../../ProjectStarboy/src/server/services/market.service.ts
var MarketService = class extends AppService {
  constructor() {
    super("MarketService");
    this._items = /* @__PURE__ */ new Set();
    this.initItems();
  }
  async initItems() {
    this.logInfo("MarketService: initizating items");
    let count = 0;
    for (const item of MarketConfig.buyItems) {
      const itemPriceData = await marketitem_model_default.findOne({ name: item.name });
      if (itemPriceData) {
        const itemInstance = new cMarketItem(itemPriceData, item);
        this._items.add(itemInstance);
      } else {
        const createdItemData = await marketitem_model_default.create({ name: item.name, price: Math.floor((item.maxPrice - item.minPrice) / 2) });
        const itemInstance = new cMarketItem(createdItemData, item);
        this._items.add(itemInstance);
      }
      count++;
    }
    this.logInfo(`MarketService: initizated ${count} items`);
  }
  get data() {
    const _data = [];
    for (const item of this._items) {
      _data.push(item.data);
    }
    return _data;
  }
  calcPrice() {
    const numItems = this._items.size;
    let allSelledItems = 0;
    for (const item of this._items) {
      allSelledItems += item.selledAmount;
    }
  }
  getItem(itemName) {
    for (const item of this._items) {
      if (item.name === itemName)
        return item;
    }
  }
  isValidItem(itemName) {
    return this.getItem(itemName) !== void 0;
  }
  onSellItem(itemName, amount) {
    const item = this.getItem(itemName);
    if (!item)
      return;
    item.selledAmount += amount;
  }
};
MarketService = __decorateClass([
  (0, import_starboy_framework24.Injectable)()
], MarketService);
var market_service_default = MarketService;

// ../../ProjectStarboy/src/server/services/mechanic.service.ts
var import_starboy_framework25 = require("starboy-framework");
var MechanicService = class extends AppService {
  constructor() {
    super("MechanicService");
  }
  getVehiclePrice(vehicleName) {
    for (let i = 0; i < MechanicVehicle.length; i++) {
      const element = MechanicVehicle[i];
      if (element.model === vehicleName) {
        return element.price;
      }
    }
    for (let i = 0; i < MechanicHelicopter.length; i++) {
      const element = MechanicHelicopter[i];
      if (element.model === vehicleName) {
        return element.price;
      }
    }
  }
};
MechanicService = __decorateClass([
  (0, import_starboy_framework25.Injectable)()
], MechanicService);

// ../../ProjectStarboy/src/server/services/missions.service.ts
var import_starboy_framework26 = require("starboy-framework");
var MissionsService = class extends AppService {
  constructor() {
    super("MissionsService");
    this.registeredMissions = /* @__PURE__ */ new Set();
  }
  registerMission(mission) {
    this.registeredMissions.add(mission);
  }
  getMissions() {
    return Array.from(this.registeredMissions);
  }
  getMissionByName(name) {
    for (const mission of this.registeredMissions) {
      if (mission.name === name) {
        return mission;
      }
    }
  }
};
MissionsService = __decorateClass([
  (0, import_starboy_framework26.Injectable)()
], MissionsService);
var missions_service_default = MissionsService;

// ../../ProjectStarboy/src/server/services/online-reward.service.ts
var import_starboy_framework27 = require("starboy-framework");
var OnlineRewardService = class extends AppService {
  constructor() {
    super("OnlineRewardService");
    this._timePlayersOnline = /* @__PURE__ */ new Map();
  }
};
OnlineRewardService = __decorateClass([
  (0, import_starboy_framework27.Injectable)()
], OnlineRewardService);

// ../../ProjectStarboy/src/server/services/phones.service.ts
var import_starboy_framework28 = require("starboy-framework");

// ../../ProjectStarboy/src/server/class/phone.class.ts
var import_container11 = __toESM(require("starboy-framework/dist/packages/core/container"));
var import_jsondiffpatch3 = require("jsondiffpatch");
var import_lodash4 = __toESM(require("lodash"));
var diff3 = (0, import_jsondiffpatch3.create)({
  objectHash: function(obj, index) {
    return obj._id || "$$index:" + index;
  },
  arrays: {
    detectMove: false
  }
});
var cPhone = class extends AppClass2 {
  constructor(data, player) {
    super("Phone");
    this.playersService = import_container11.default.get(PlayersService);
    this.saving = false;
    this.LUA = () => {
      const props = Object.getOwnPropertyNames(Object.getPrototypeOf(this));
      const returnObject = {};
      const returnMeta = {};
      props.forEach((prop) => {
        const propType = typeof this[prop];
        returnMeta[prop] = propType;
        if (propType === "function") {
          returnObject[prop] = (...args) => this[prop](...args);
        } else {
          returnObject[prop] = () => this[prop];
        }
      });
      return { returnObject, returnMeta };
    };
    this.model = data;
    this._id = data._id.toString();
    this._call = { state: 3 /* PENDING */, targetNumber: "", startedAt: 0 };
    this._player = player;
    this._lastData = this.data;
  }
  set player(player) {
    this._player = player;
  }
  get owner() {
    return this.model.owner.toString();
  }
  get dock() {
    return json(this.model.dock);
  }
  get settings() {
    return json(this.model.settings);
  }
  get contacts() {
    return json(this.model.contacts);
  }
  get callRecents() {
    return json(this.model.callRecents);
  }
  get messages() {
    return json(this.model.messages);
  }
  get photos() {
    return json(this.model.photos);
  }
  get source() {
    return this._player ? this._player.source : "0";
  }
  get call() {
    return this._call;
  }
  get phoneNumber() {
    return this.model.phoneNumber;
  }
  get accountBalance() {
    return this.model.accountBalance;
  }
  set accountBalance(amount) {
    this.model.accountBalance = amount;
    this.sync();
  }
  get data() {
    return {
      _id: this._id,
      settings: this.settings,
      owner: this.owner,
      dock: this.dock,
      contacts: this.contacts,
      call: this.call,
      callRecents: this.callRecents,
      phoneNumber: this.phoneNumber,
      messages: this.messages,
      accountBalance: this.accountBalance,
      photos: this.photos
    };
  }
  addAccountBalance(amount) {
    if (amount <= 0)
      return;
    this.model.accountBalance += amount;
    this.notification(`Tài khoản của bạn được cộng ${amount.toLocaleString()}$`);
    this.sync();
  }
  removeAccountBalance(amount) {
    if (amount <= 0 || amount > this.accountBalance)
      return;
    this.model.accountBalance -= amount;
    this.sync();
  }
  getContact(contactId) {
    this.model.contacts.id(contactId);
  }
  changeSettings(field, data) {
    this.model.settings[field] = data;
    this.sync();
    return this.model.settings[field];
  }
  async addContact(data) {
    const newContact = await this.model.contacts.create(data);
    this.model.contacts.push(newContact);
    this.sync();
    return json(newContact);
  }
  async updateContact(data) {
    const contact = this.model.contacts.id(data._id);
    if (!contact)
      return;
    contact.name = data.name;
    contact.number = data.number;
    contact.favorite = data.favorite;
    contact.avatar = data.avatar;
    await contact.save();
    return json(contact);
  }
  async deleteContact(data) {
    this.model.contacts.pull(data._id);
    this.sync();
    return true;
  }
  setCallState(data) {
    this._call = __spreadProps(__spreadValues({}, data), { startedAt: new Date().getTime() });
    this.sync();
  }
  setIncall(channel, target) {
    this.setCallState({
      targetNumber: target,
      state: 0 /* INCALL */
    });
    exports["pma-voice"].setPlayerCall(parseInt(this.source), channel);
  }
  setIdle() {
    this.setCallState({
      targetNumber: "",
      state: 3 /* PENDING */
    });
    exports["pma-voice"].setPlayerCall(parseInt(this.source), 0);
  }
  async addRecent(data) {
    const newRecent = await this.model.callRecents.create(data);
    this.model.callRecents.push(newRecent);
    const _recent = json(newRecent);
    this.sync();
    return _recent;
  }
  async addMessage(data) {
    const newMessage = await this.model.messages.create(data);
    this.model.messages.push(newMessage);
    this.sync();
  }
  async setMessageReaded(target) {
    let shouldSave = false;
    for (const message of this.model.messages) {
      if (message.target === target) {
        if (message.readed === false) {
          message.readed = true;
          shouldSave = true;
        }
      }
    }
    if (shouldSave) {
      this.model.markModified("messages");
      await this.save();
      this.sync();
    }
  }
  triggerEvent(eventName, ...args) {
    if (!this._player)
      return;
    this._player.triggerEvent(eventName, ...args);
  }
  notification(msg) {
    if (!this._player)
      return;
    this._player.triggerEvent("phone:notification", msg);
  }
  async addPhoto(link) {
    const newPhoto = await this.model.photos.create({ link });
    this.model.photos.push(newPhoto);
    this.sync();
  }
  async deletePhotos(data) {
    for (const photo of data) {
      this.model.photos.pull({ link: photo.link });
      import_lodash4.default.remove(this.model.photos, (o) => o.link === photo.link);
    }
    this.sync();
  }
  async populate(d) {
    await this.model.populate(d);
    this.sync();
  }
  async save() {
    if (this.saving)
      return;
    this.saving = true;
    await this.model.save();
    this.saving = false;
  }
  sync() {
    const delta = diff3.diff(this._lastData, this.data);
    this._lastData = this.data;
    if (!this._player)
      return;
    this._player.triggerEvent("phone:sync", delta);
  }
};

// ../../ProjectStarboy/src/server/models/phone.model.ts
var import_mongoose16 = require("mongoose");
var phoneMessageLocationSchema = new import_mongoose16.Schema({
  x: { type: Number, default: 0 },
  y: { type: Number, default: 0 },
  z: { type: Number, default: 0 }
});
var phoneMessageShema = new import_mongoose16.Schema({
  message: { type: String },
  location: phoneMessageLocationSchema,
  type: {
    type: String,
    enum: ["message", "image", "video"],
    required: true,
    default: "message"
  },
  target: { type: String, required: true },
  readed: { type: Boolean, default: false },
  route: { type: String, enum: ["in", "out"], required: true },
  at: { type: Number, default: 0 }
});
var phoneAppSchema = new import_mongoose16.Schema({
  name: { type: String, required: true },
  label: { type: String, required: true },
  icon: { type: String, required: true }
});
var phoneContactSchema = new import_mongoose16.Schema(
  {
    name: { type: String, required: true },
    avatar: { type: String, default: "" },
    number: { type: String, required: true },
    favorite: { type: Boolean, required: true, default: false }
  },
  { timestamps: true }
);
var phoneCallRecentSchema = new import_mongoose16.Schema({
  type: {
    type: String,
    enum: ["outgoing", "incoming", "missing"],
    required: true
  },
  at: { type: Number, required: true },
  number: { type: String, required: true }
});
var phonePhotoSchema = new import_mongoose16.Schema(
  {
    link: {
      type: String,
      required: true
    }
  },
  { timestamps: true }
);
var phoneSchema = new import_mongoose16.Schema({
  owner: { type: import_mongoose16.Schema.Types.ObjectId, ref: "Player", required: true },
  phoneNumber: { type: String, required: true },
  accountBalance: { type: Number, required: true, default: 0 },
  settings: {
    type: {
      size: { type: Number, default: 4 },
      background: { type: String, default: "./assets/phone/background/1.png" },
      airplaneMode: { type: Boolean, default: false },
      notification: { type: Boolean, default: true },
      sound: { type: Boolean, default: true }
    },
    default: {
      size: 4,
      background: "./assets/phone/background/1.png",
      airplaneMode: false,
      notification: true,
      sound: true
    }
  },
  dock: {
    type: [phoneAppSchema, phoneAppSchema, phoneAppSchema, phoneAppSchema],
    default: [
      {
        name: "phone",
        label: "APP_PHONE",
        icon: "./assets/phone/icons/phone.svg"
      },
      {
        name: "camera",
        label: "APP_CAMERA",
        icon: "./assets/phone/icons/camera.svg"
      },
      {
        name: "photos",
        label: "APP_PHOTOS",
        icon: "./assets/phone/icons/photos.svg"
      },
      {
        name: "messages",
        label: "APP_MESSAGES",
        icon: "./assets/phone/icons/messages.svg"
      }
    ]
  },
  contacts: [phoneContactSchema],
  callRecents: [phoneCallRecentSchema],
  messages: [phoneMessageShema],
  photos: [phonePhotoSchema]
});
var phoneModel = (0, import_mongoose16.model)("Phone", phoneSchema);
var phone_model_default = phoneModel;

// ../../ProjectStarboy/src/server/services/phones.service.ts
var PhonesService = class extends AppService {
  constructor(i18n) {
    super("PhonesService");
    this.i18n = i18n;
    this._phones = /* @__PURE__ */ new Set();
    this._registeredPhoneNumber = /* @__PURE__ */ new Set();
    this._callsActive = /* @__PURE__ */ new Map();
    this._callTimeout = /* @__PURE__ */ new Map();
    this._callInterval = /* @__PURE__ */ new Set();
  }
  async getRegisteredPhoneNumber() {
    const phones = await phone_model_default.find();
    phones.forEach((phone) => {
      this._registeredPhoneNumber.add(phone.phoneNumber);
    });
  }
  async getPlayerPhone(player) {
    const _playerIdStr = player._id.toString();
    for (const phone2 of this._phones) {
      if (phone2.owner === _playerIdStr) {
        phone2.player = player;
        return phone2;
      }
    }
    const phoneData = await phone_model_default.findOne({ owner: _playerIdStr });
    if (phoneData) {
      const phone2 = new cPhone(phoneData, player);
      this._phones.add(phone2);
      return phone2;
    }
    const newPhoneNumber = this.generatePhoneNumber();
    const createdPhoneData = await phone_model_default.create({
      owner: _playerIdStr,
      phoneNumber: newPhoneNumber
    });
    const phone = new cPhone(createdPhoneData, player);
    this._phones.add(phone);
    this._registeredPhoneNumber.add(newPhoneNumber);
    return phone;
  }
  async getPhoneByNumber(phoneNumber) {
    for (const phone of this._phones) {
      if (phone.phoneNumber === phoneNumber)
        return phone;
    }
    const phoneData = await phone_model_default.findOne({ phoneNumber });
    if (phoneData) {
      const phone = new cPhone(phoneData);
      this._phones.add(phone);
      return phone;
    }
  }
  onPlayerDropped(player) {
    for (const phone of this._phones) {
      if (phone.owner === player._id)
        this._phones.delete(phone);
    }
  }
  randomNumber() {
    let number = "";
    const charactersLength = PhoneConfig.characters.length;
    let counter = 0;
    while (counter < charactersLength) {
      number += PhoneConfig.characters.charAt(Math.floor(Math.random() * charactersLength));
      counter += 1;
    }
    return number;
  }
  generatePhoneNumber() {
    let number = this.randomNumber();
    while (this._registeredPhoneNumber.has(number)) {
      number = this.randomNumber();
    }
    return number;
  }
  async changePhoneSettings(player, field, data) {
    const phone = await this.getPlayerPhone(player);
    const newSettings = phone.changeSettings(field, data);
    phone.save();
    return newSettings;
  }
  async addContact(player, data) {
    const phone = await this.getPlayerPhone(player);
    const newContact = await phone.addContact(data);
    await phone.save();
    return newContact;
  }
  async updateContact(player, data) {
    const phone = await this.getPlayerPhone(player);
    const updatedContact = await phone.updateContact(data);
    await phone.save();
    return updatedContact;
  }
  async deleteContact(player, data) {
    const phone = await this.getPlayerPhone(player);
    const deletedContact = await phone.deleteContact(data);
    await phone.save();
    return deletedContact;
  }
  removeCallInterval(caller) {
    for (const element of this._callInterval) {
      if (element.phone === caller) {
        clearInterval(element.interval);
        this._callInterval.delete(element);
        break;
      }
    }
  }
  addCallInterval(caller) {
    this.removeCallInterval(caller);
    this._callInterval.add({
      phone: caller,
      interval: setInterval(async () => {
        if (caller.accountBalance > PhoneConfig.pricePerSecond) {
          caller.removeAccountBalance(PhoneConfig.pricePerSecond);
          await caller.save();
        } else {
          this.forceEndCall(caller);
        }
      }, 1e3)
    });
  }
  async forceEndCall(caller) {
    this.removeCallInterval(caller);
    caller.setIdle();
    const srcActiveCall = this._callsActive.get(caller.phoneNumber);
    if (srcActiveCall) {
      this._callsActive.delete(caller.phoneNumber);
      const withNumber = srcActiveCall.with;
      if (!srcActiveCall.isAccepted) {
        caller.addRecent({
          type: srcActiveCall.isCaller ? "outgoing" : "missing",
          at: new Date().getTime(),
          number: withNumber
        });
      }
      const withActiveCall = this._callsActive.get(withNumber);
      if (withActiveCall) {
        if (withActiveCall.with === caller.phoneNumber) {
          this._callsActive.delete(withNumber);
          const withPhone = await this.getPhoneByNumber(withNumber);
          if (withPhone) {
            withPhone.setIdle();
            if (!srcActiveCall.isAccepted) {
              withPhone.addRecent({
                type: withActiveCall.isCaller ? "outgoing" : "missing",
                at: new Date().getTime(),
                number: caller.phoneNumber
              });
            }
          }
        }
      }
      const timeOut2 = this._callTimeout.get(withNumber);
      if (timeOut2) {
        clearTimeout(timeOut2);
        this._callTimeout.delete(withNumber);
      }
    }
    const timeOut1 = this._callTimeout.get(caller.phoneNumber);
    if (timeOut1) {
      clearTimeout(timeOut1);
      this._callTimeout.delete(caller.phoneNumber);
    }
  }
  async onStartCall(player, targetNumber) {
    const phone = await this.getPlayerPhone(player);
    if (this._callsActive.has(phone.phoneNumber))
      return {
        status: 0 /* FAILED */,
        message: this.i18n.t("ON_ACTIVE_CALL")
      };
    if (this._callsActive.has(targetNumber))
      return {
        status: 0 /* FAILED */,
        message: this.i18n.t("TARGET_ON_ACTIVE_CALL")
      };
    if (phone.accountBalance < PhoneConfig.pricePerSecond * 6) {
      return {
        status: 0 /* FAILED */,
        message: this.i18n.t("Không đủ tiền trong tài khoản")
      };
    }
    const targetPhone = await this.getPhoneByNumber(targetNumber);
    if (!targetPhone || targetPhone.source === "0") {
      return {
        status: 0 /* FAILED */,
        message: this.i18n.t("PLAYER_WAS_OFFLINE")
      };
    }
    this._callsActive.set(phone.phoneNumber, {
      with: targetPhone.phoneNumber,
      channel: parseInt(phone.phoneNumber),
      isCaller: true,
      isAccepted: false
    });
    this._callsActive.set(targetPhone.phoneNumber, {
      with: phone.phoneNumber,
      channel: parseInt(phone.phoneNumber),
      isCaller: false,
      isAccepted: false
    });
    this._callTimeout.set(
      targetPhone.phoneNumber,
      setTimeout(() => {
        phone.setCallState({
          state: 3 /* PENDING */,
          targetNumber: targetPhone.phoneNumber
        });
        targetPhone.setCallState({
          state: 3 /* PENDING */,
          targetNumber: phone.phoneNumber
        });
      }, 1e4)
    );
    phone.setCallState({
      state: 2 /* CALLING */,
      targetNumber: targetPhone.phoneNumber
    });
    phone.addRecent({
      type: "outgoing",
      at: new Date().getTime(),
      number: targetPhone.phoneNumber
    });
    targetPhone.setCallState({
      state: 1 /* RINGING */,
      targetNumber: phone.phoneNumber
    });
    targetPhone.addRecent({
      type: "missing",
      at: new Date().getTime(),
      number: phone.phoneNumber
    });
    return {
      status: 1 /* SUCCESS */,
      data: void 0
    };
  }
  async onAcceptCall(player) {
    const reciverPhone = await this.getPlayerPhone(player);
    const reciverActiveCall = this._callsActive.get(reciverPhone.phoneNumber);
    if (!reciverActiveCall) {
      return {
        status: 0 /* FAILED */,
        message: "Không có cuộc gọi đến"
      };
    }
    const channel = reciverActiveCall.channel;
    const callerActiveCall = this._callsActive.get(reciverActiveCall.with);
    if (!callerActiveCall) {
      return {
        status: 0 /* FAILED */,
        message: "Không có cuộc gọi đi"
      };
    }
    if (callerActiveCall.with !== reciverPhone.phoneNumber || callerActiveCall.channel !== reciverActiveCall.channel)
      return {
        status: 0 /* FAILED */,
        message: "Cuojc gọi không hợp lệ"
      };
    const callerPhone = await this.getPhoneByNumber(reciverActiveCall.with);
    if (!callerPhone || callerPhone.source === "0") {
      return {
        status: 0 /* FAILED */,
        message: "Số điện thoại không tồn tại"
      };
    }
    reciverActiveCall.isAccepted = true;
    reciverPhone.setIncall(channel, reciverActiveCall.with);
    reciverPhone.addRecent({
      type: "incoming",
      at: new Date().getTime(),
      number: callerPhone.phoneNumber
    });
    callerActiveCall.isAccepted = true;
    callerPhone.setIncall(channel, callerActiveCall.with);
    callerPhone.addRecent({
      type: "outgoing",
      at: new Date().getTime(),
      number: reciverPhone.phoneNumber
    });
    const timeOut = this._callTimeout.get(reciverPhone.phoneNumber);
    if (timeOut) {
      clearTimeout(timeOut);
      this._callTimeout.delete(reciverPhone.phoneNumber);
    }
    this.addCallInterval(callerPhone);
    return {
      status: 1 /* SUCCESS */,
      data: void 0
    };
  }
  async onDeclineCall(player) {
    const reciverPhone = await this.getPlayerPhone(player);
    reciverPhone.setIdle();
    const reciverActiveCall = this._callsActive.get(reciverPhone.phoneNumber);
    if (!reciverActiveCall) {
      return {
        status: 0 /* FAILED */,
        message: "Không có cuộc gọi đến"
      };
    }
    this._callsActive.delete(reciverPhone.phoneNumber);
    const callerActiveCall = this._callsActive.get(reciverActiveCall.with);
    if (!callerActiveCall) {
      return {
        status: 0 /* FAILED */,
        message: "Không có cuộc gọi đi"
      };
    }
    if (callerActiveCall.with !== reciverPhone.phoneNumber || callerActiveCall.channel !== reciverActiveCall.channel)
      return {
        status: 0 /* FAILED */,
        message: "Cuộc gọi không hợp lệ"
      };
    this._callsActive.delete(reciverActiveCall.with);
    const callerPhone = await this.getPhoneByNumber(reciverActiveCall.with);
    if (!callerPhone || callerPhone.source === "0") {
      return {
        status: 0 /* FAILED */,
        message: "Số điện thoại không tồn tại"
      };
    }
    callerPhone.setIdle();
    reciverPhone.addRecent({
      type: "incoming",
      at: new Date().getTime(),
      number: callerPhone.phoneNumber
    });
    callerPhone.addRecent({
      type: "outgoing",
      at: new Date().getTime(),
      number: reciverPhone.phoneNumber
    });
    const timeOut = this._callTimeout.get(reciverPhone.phoneNumber);
    if (timeOut) {
      clearTimeout(timeOut);
      this._callTimeout.delete(reciverPhone.phoneNumber);
    }
    return {
      status: 1 /* SUCCESS */,
      data: void 0
    };
  }
  async onEndCall(player) {
    const srcPhone = await this.getPlayerPhone(player);
    srcPhone.setIdle();
    const srcActiveCall = this._callsActive.get(srcPhone.phoneNumber);
    if (srcActiveCall) {
      this._callsActive.delete(srcPhone.phoneNumber);
      const withNumber = srcActiveCall.with;
      if (!srcActiveCall.isAccepted) {
        srcPhone.addRecent({
          type: srcActiveCall.isCaller ? "outgoing" : "missing",
          at: new Date().getTime(),
          number: withNumber
        });
      }
      const withActiveCall = this._callsActive.get(withNumber);
      if (withActiveCall) {
        if (withActiveCall.with === srcPhone.phoneNumber) {
          this._callsActive.delete(withNumber);
          const withPhone = await this.getPhoneByNumber(withNumber);
          if (withPhone && withPhone.source !== "0") {
            withPhone.setIdle();
            if (srcActiveCall.isCaller) {
              this.removeCallInterval(srcPhone);
            } else {
              this.removeCallInterval(withPhone);
            }
            if (!srcActiveCall.isAccepted) {
              withPhone.addRecent({
                type: withActiveCall.isCaller ? "outgoing" : "missing",
                at: new Date().getTime(),
                number: srcPhone.phoneNumber
              });
            }
          }
        }
      }
      const timeOut2 = this._callTimeout.get(withNumber);
      if (timeOut2) {
        clearTimeout(timeOut2);
        this._callTimeout.delete(withNumber);
      }
    }
    const timeOut1 = this._callTimeout.get(srcPhone.phoneNumber);
    if (timeOut1) {
      clearTimeout(timeOut1);
      this._callTimeout.delete(srcPhone.phoneNumber);
    }
    return {
      status: 1 /* SUCCESS */,
      data: void 0
    };
  }
  async savePicture(player, url) {
    const phone = await this.getPlayerPhone(player);
    return phone.addPhoto(url);
  }
  async deletePictures(player, data) {
    const phone = await this.getPlayerPhone(player);
    return phone.deletePhotos(data);
  }
  async onSendMessage(player, data) {
    const senderPhone = await this.getPlayerPhone(player);
    if (senderPhone.accountBalance < PhoneConfig.pricePerMessage) {
      return {
        status: 0 /* FAILED */,
        message: this.i18n.t("Không đủ số dư trong tài khoản để gửi tin nhắn")
      };
    }
    senderPhone.removeAccountBalance(PhoneConfig.pricePerMessage);
    const targetPhone = await this.getPhoneByNumber(data.target);
    if (!targetPhone) {
      return {
        status: 0 /* FAILED */,
        message: this.i18n.t("Không tìm thấy số điện thoại")
      };
    }
    const curTime = new Date().getTime();
    senderPhone.addMessage({
      message: data.message,
      location: data.location,
      type: data.type,
      target: targetPhone.phoneNumber,
      route: "out",
      readed: true,
      at: curTime
    });
    targetPhone.addMessage({
      message: data.message,
      location: data.location,
      type: data.type,
      target: senderPhone.phoneNumber,
      route: "in",
      readed: false,
      at: curTime
    });
    await senderPhone.save();
    await targetPhone.save();
    return {
      status: 1 /* SUCCESS */,
      data: void 0
    };
  }
};
PhonesService = __decorateClass([
  (0, import_starboy_framework28.Injectable)(),
  __decorateParam(0, (0, import_starboy_framework28.Inject)(I18n))
], PhonesService);
var phones_service_default = PhonesService;

// ../../ProjectStarboy/src/server/services/plant.service.ts
var import_starboy_framework29 = require("starboy-framework");

// ../../ProjectStarboy/src/server/class/plant.class.ts
var import_container12 = __toESM(require("starboy-framework/dist/packages/core/container"));
var import_vec2 = __toESM(require("vec2"));

// ../../ProjectStarboy/src/server/models/plant.model.ts
var import_mongoose17 = require("mongoose");
var plantSchema = new import_mongoose17.Schema({
  name: { type: String, required: true },
  coords: { type: [Number], default: [0, 0, 0] },
  heading: { type: Number, default: 0 },
  growth: { type: Number, default: 0 },
  water: { type: Number, default: 0 },
  fertilized: { type: Boolean, default: 0 },
  plantAt: { type: Number, default: 0 },
  havestAt: { type: Number, default: 0 }
});
var plantModel = (0, import_mongoose17.model)("Plant", plantSchema);
var plant_model_default = plantModel;

// ../../ProjectStarboy/src/server/class/plant.class.ts
var sPlant = class extends Plant {
  constructor(data, seedData) {
    const _data = {
      name: data.name,
      coords: data.coords,
      heading: data.heading,
      growth: data.growth,
      water: data.water,
      fertilized: data.fertilized,
      plantAt: data.plantAt,
      havestAt: data.havestAt,
      id: data._id.toString()
    };
    super(_data);
    this.saving = false;
    this.shouldDestroy = false;
    this.socketService = import_container12.default.get(SocketService);
    this.databaseId = data._id;
    this.seedData = seedData;
    this.model = data;
  }
  static async create(name, coords, heading) {
    const seedData = getPlantConfig(name);
    if (!seedData)
      return;
    const curTime = new Date().getTime();
    const rawData = {
      name,
      coords,
      heading,
      growth: 0,
      water: 0,
      fertilized: false,
      plantAt: curTime,
      havestAt: curTime + seedData.growingTime
    };
    const createdData = await plant_model_default.create(rawData);
    const newPlant = new sPlant(createdData, seedData);
    return newPlant;
  }
  static async init(data) {
    const seedData = getPlantConfig(data.name);
    if (!seedData)
      return;
    return new sPlant(data, seedData);
  }
  reduceHavestTime(value) {
    this._havestAt = this._havestAt - value;
    this.save();
  }
  increaseHavestTime(value) {
    this._havestAt += value;
  }
  getRewards() {
    return this.seedData.havestRewards;
  }
  canHavest() {
    return this.growth >= 100;
  }
  watering() {
    this.water = 100;
    this.save();
    this.socketService.emit("plant:sync", -1, this.data);
  }
  canFertilizing() {
    return this.fertilized === false;
  }
  fertilizing() {
    if (this.fertilized)
      return;
    this.fertilized = true;
    this.growth += 25;
    if (this.growth > 100)
      this.growth = 100;
    this.save();
    this.socketService.emit("plant:sync", -1, this.data);
  }
  onTick() {
    let shouldSave = false;
    if (this.water > 0 && this.growth < 100) {
      this.water -= PLANT_TIME_INTERVAL / this.seedData.growingTime / 2 * 100;
      this.growth += PLANT_TIME_INTERVAL / this.seedData.growingTime * 100;
      shouldSave = true;
      this.socketService.emit("plant:sync", -1, this.data);
    }
    return shouldSave;
  }
  async save() {
    if (this.saving)
      return;
    this.saving = false;
    await plant_model_default.findByIdAndUpdate(this.databaseId, this.data);
    this.saving = false;
  }
  async destroy() {
    this.shouldDestroy = true;
    await plant_model_default.findOneAndDelete(this.databaseId);
    this.socketService.emit("plant:delete", -1, this.id);
  }
  get position() {
    return new import_vec2.default(this.coords[0], this.coords[1]);
  }
};

// ../../ProjectStarboy/src/server/services/plant.service.ts
var PlantService = class extends AppService {
  constructor(socketService) {
    super("PlantService");
    this.socketService = socketService;
    this._plants = /* @__PURE__ */ new Set();
    this._onInitDataListener = /* @__PURE__ */ new Set();
    this._onRemovePlantListener = /* @__PURE__ */ new Set();
    this.initData();
    this.tick();
  }
  listenInitializedData(handler) {
    this._onInitDataListener.add(handler);
  }
  listenRemovePlant(handler) {
    this._onRemovePlantListener.add(handler);
  }
  async initData() {
    const plantsData = await plant_model_default.find();
    for (const plantData of plantsData) {
      const plantInstance = await sPlant.init(plantData);
      if (plantInstance) {
        this._plants.add(plantInstance);
      }
    }
    this.logInfo(`Initialized ${this._plants.size} plants`);
    for (const handler of this._onInitDataListener) {
      handler();
    }
    this._onInitDataListener.clear();
  }
  get plants() {
    const rData = [];
    for (const plant of this._plants) {
      rData.push(plant.data);
    }
    return rData;
  }
  getPlantById(id) {
    for (const plant of this._plants) {
      if (plant.id === id)
        return plant;
    }
  }
  getPlantsByName(name) {
    const plants = [];
    for (const plant of this._plants) {
      if (plant.name === name)
        plants.push(plant);
    }
    return plants;
  }
  async createPlant(name, coords, heading) {
    const plantInstance = await sPlant.create(name, coords, heading);
    if (plantInstance) {
      this._plants.add(plantInstance);
      this.socketService.emit("plant:create", -1, plantInstance.data);
    }
    return plantInstance;
  }
  async removePlant(plant) {
    this._plants.delete(plant);
    for (const handler of this._onRemovePlantListener) {
      handler(plant);
    }
  }
  canCreate(pos) {
    for (const plant of this._plants) {
      if (plant.position.distance(pos) < 2)
        return false;
    }
    return true;
  }
  onResourceStop() {
  }
  async tick() {
    while (true) {
      await Sleep(PLANT_TIME_INTERVAL);
      for (const plant of this._plants) {
        const shouldSave = plant.onTick();
        if (shouldSave)
          await plant.save();
      }
    }
  }
};
PlantService = __decorateClass([
  (0, import_starboy_framework29.Injectable)(),
  __decorateParam(0, (0, import_starboy_framework29.Inject)(SocketService))
], PlantService);

// ../../ProjectStarboy/src/server/services/police.service.ts
var import_starboy_framework30 = require("starboy-framework");
var PoliceService = class extends AppService {
  constructor() {
    super("PoliceService");
  }
  getVehiclePrice(vehicleName) {
    for (let i = 0; i < PoliceVehicle.length; i++) {
      const element = PoliceVehicle[i];
      if (element.model === vehicleName) {
        return element.price;
      }
    }
    for (let i = 0; i < PoliceHelicopter.length; i++) {
      const element = PoliceHelicopter[i];
      if (element.model === vehicleName) {
        return element.price;
      }
    }
  }
};
PoliceService = __decorateClass([
  (0, import_starboy_framework30.Injectable)()
], PoliceService);

// ../../ProjectStarboy/src/server/services/privileges.service.ts
var import_starboy_framework31 = require("starboy-framework");
var PrivilegesService = class {
};
PrivilegesService = __decorateClass([
  (0, import_starboy_framework31.Injectable)()
], PrivilegesService);

// ../../ProjectStarboy/src/server/services/sellItem.service.ts
var import_starboy_framework32 = require("starboy-framework");
var SellItemService = class extends AppService {
  constructor(playersService) {
    super("SellItemService");
    this.playersService = playersService;
    this.items = /* @__PURE__ */ new Set();
    this.amountSell = /* @__PURE__ */ new Set();
    this.lastSoldQuantity = 0;
  }
  init() {
    SellPriceConfig.forEach((item) => {
      const itemData = getItemDataByName(item.name);
      const randomPrice = Math.floor(Math.random() * (item.price[1] - item.price[0] + 1)) + item.price[0];
      if (itemData) {
        const data = {
          name: itemData.name,
          label: itemData.label,
          price: {
            old: randomPrice,
            current: randomPrice
          }
        };
        const dataAmount = {
          name: itemData.name,
          amount: 0,
          priceRange: item.price
        };
        this.items.add(data);
        this.amountSell.add(dataAmount);
      }
    });
    this.mainThread();
  }
  getData() {
    return Array.from(this.items);
  }
  sell(source2, itemName) {
    let currentPrice = 0;
    for (const item of this.items) {
      if (item.name === itemName) {
        currentPrice = item.price.current;
        break;
      }
    }
    if (currentPrice) {
      const player = this.playersService.getPlayer(source2);
      if (player) {
        const amount = player.getItemAmount(itemName);
        const itemData = getItemDataByName(itemName);
        if (!itemData)
          return;
        const totalPrice = amount * currentPrice;
        player.removeInventoryItem({ itemName, amount });
        player.addAccountMoney("money", totalPrice);
        for (const item of this.amountSell) {
          if (item.name === itemName) {
            item.amount = item.amount + amount;
            break;
          }
        }
        player.showNotification({
          type: "success",
          message: "Bạn đã bán " + amount + "x " + itemData.label + ". Nhận được: " + totalPrice + "$"
        });
      }
    }
  }
  async mainThread() {
    while (true) {
      await Sleep(SellItemConfig.timeReset * 1e3 * 60);
      this.items.forEach((item) => {
        let foundAmount;
        for (const price of this.amountSell) {
          if (price.name === item.name) {
            foundAmount = price;
            break;
          }
        }
        if (foundAmount) {
          item.price.old = item.price.current;
          const calPrice = calculateItemPrice(this.lastSoldQuantity, foundAmount.amount, foundAmount.priceRange, item.price.current);
          item.price.current = calPrice;
          this.lastSoldQuantity = foundAmount.amount;
          foundAmount.amount = 0;
        }
      });
      emitNet("sellItem:sync", -1, Array.from(this.items));
    }
  }
};
SellItemService = __decorateClass([
  (0, import_starboy_framework32.Injectable)(),
  __decorateParam(0, (0, import_starboy_framework32.Inject)(PlayersService))
], SellItemService);

// ../../ProjectStarboy/src/server/services/time.service.ts
var import_starboy_framework33 = require("starboy-framework");
var TimeService = class extends AppService {
  constructor(socketService) {
    super("TimeService");
    this.socketService = socketService;
    this._time = 0;
    this._weather = "EXTRASUNNY";
    this._blackout = false;
    this._freeze = false;
    this._env = GetConvar("env", "production");
    if (this._env === "production") {
      setInterval(() => {
        if (!this._freeze) {
          this._time++;
        }
        this.socketService.emit("Time_Sync" /* Time_Sync */, -1, this.data);
      }, 1e3);
    }
  }
  get freeze() {
    return this._freeze;
  }
  set freeze(value) {
    this._freeze = value;
  }
  get data() {
    return {
      time: this._time,
      weather: this._weather,
      blackout: this._blackout
    };
  }
  get time() {
    return this._time;
  }
  set time(value) {
    this._time = value;
  }
  get weather() {
    return this._weather;
  }
  set weather(value) {
    this._weather = value;
  }
  get hour() {
    const h = Math.floor(this._time / 60);
    return h % 24;
  }
  get minute() {
    return this._time % 60;
  }
  get blackout() {
    return this._blackout;
  }
  set blackout(value) {
    this._blackout = value;
  }
};
TimeService = __decorateClass([
  (0, import_starboy_framework33.Injectable)(),
  __decorateParam(0, (0, import_starboy_framework33.Inject)(SocketService))
], TimeService);

// ../../ProjectStarboy/src/server/services/utils.service.ts
var import_starboy_framework34 = require("starboy-framework");
var UtilsService = class {
};
UtilsService = __decorateClass([
  (0, import_starboy_framework34.Injectable)()
], UtilsService);

// ../../ProjectStarboy/src/server/services/wanted.service.ts
var import_starboy_framework35 = require("starboy-framework");

// ../../ProjectStarboy/src/server/models/wanted.model.ts
var import_mongoose18 = require("mongoose");
var import_mongoose19 = require("mongoose");
var wantedSchema = new import_mongoose18.Schema({
  player: { type: String, required: true },
  reason: { type: String, required: true },
  level: { type: Number, required: true },
  officer: { type: String, required: true },
  endAt: { type: Number, required: true }
});
wantedSchema.plugin(mongooseLeanId_default);
var wantedModel = (0, import_mongoose19.model)("Wanted", wantedSchema);
var wanted_model_default = wantedModel;

// ../../ProjectStarboy/src/server/class/wanted.class.ts
var import_container13 = __toESM(require("starboy-framework/dist/packages/core/container"));
var Wanted = class extends AppClass2 {
  constructor(player, reason, level, officer, endAt, _id, wantedService) {
    super("Wanted");
    this.shoudStop = false;
    this.playersService = import_container13.default.get(PlayersService);
    this.player = player;
    this.reason = reason;
    this.officer = officer;
    this.endAt = endAt;
    this._id = _id;
    this.level = level;
    this.wantedService = wantedService;
    this.thread();
  }
  get data() {
    return {
      player: this.player,
      reason: this.reason,
      officer: this.officer,
      endAt: this.endAt,
      level: this.level,
      _id: this._id
    };
  }
  async thread() {
    const player = await this.playersService.getPlayerByDataId(this.player);
    if (player) {
      player.wanted = this.level;
    }
    while (!this.shoudStop) {
      if (this.endAt < Date.now()) {
        this.shoudStop = true;
        await wanted_model_default.findByIdAndDelete(this._id);
        this.stop();
        const player2 = await this.playersService.getPlayerByDataId(this.player);
        if (player2) {
          player2.wanted = 0;
        }
        this.wantedService.removeFromSet(this);
      }
      await Sleep(1e3);
    }
  }
  stop() {
    this.shoudStop = true;
  }
  static async create(player, reason, level, officer, miliseconds, parent) {
    const createdData = await wanted_model_default.create({
      player: player._id,
      reason,
      officer,
      endAt: Date.now() + miliseconds,
      level
    });
    const wanted = new Wanted(createdData.player, createdData.reason, createdData.level, createdData.officer, createdData.endAt, createdData._id.toString(), parent);
    return wanted;
  }
};

// ../../ProjectStarboy/src/server/services/wanted.service.ts
var WantedService = class extends AppService {
  constructor(playersService) {
    super("WantedService");
    this.playersService = playersService;
    this._wanted = /* @__PURE__ */ new Set();
    this.playersService.subscribe(
      "playerLoaded",
      async (player) => {
        const wanted = await wanted_model_default.findOne({ player: player._id }).lean();
        if (!wanted)
          return;
        player.wanted = wanted.level;
        this._wanted.add(new Wanted(wanted.player, wanted.reason, wanted.level, wanted.officer, wanted.endAt, String(wanted._id), this));
      },
      "wantedService"
    );
    this.playersService.subscribe(
      "playerDropped",
      (player) => {
        for (const w of this._wanted) {
          if (w.player === player._id) {
            w.stop();
            this._wanted.delete(w);
          }
        }
      },
      "wantedService"
    );
  }
  removeFromSet(wanted) {
    this._wanted.delete(wanted);
  }
  async new(player, reason, level, officer, miliseconds) {
    for (const w of this._wanted) {
      if (w.player === player._id) {
        w.reason = reason;
        w.level = level;
        w.officer = officer;
        w.endAt = Date.now() + miliseconds;
        emitNet("chat:newMessage", -1, {
          channel: "GENERAL",
          message: `🚨 [${player.id}]${player.name} đã bị truy nã cấp độ ${w.level} - lý do: ${w.reason} - thời gian: ${Math.floor(miliseconds / 6e4)} phút`,
          author: "TRUY NÃ",
          type: "message"
        });
        return w;
      }
    }
    const newWanted = await Wanted.create(player, reason, level, officer, miliseconds, this);
    this._wanted.add(newWanted);
    emitNet("chat:newMessage", -1, {
      channel: "GENERAL",
      message: `🚨 [${player.id}]${player.name} đã bị truy nã cấp độ ${newWanted.level} - lý do: ${newWanted.reason} - thời gian: ${Math.floor(miliseconds / 6e4)} phút`,
      author: "TRUY NÃ",
      type: "message"
    });
    return newWanted;
  }
  async remove(player) {
    for (const w of this._wanted) {
      if (w.player === player._id) {
        w.stop();
        this._wanted.delete(w);
        await wanted_model_default.findByIdAndDelete(w._id);
        player.wanted = 0;
        return;
      }
    }
  }
};
WantedService = __decorateClass([
  (0, import_starboy_framework35.Injectable)(),
  __decorateParam(0, (0, import_starboy_framework35.Inject)(PlayersService))
], WantedService);

// ../../ProjectStarboy/src/server/services/zone.service.ts
var import_starboy_framework36 = require("starboy-framework");

// ../../ProjectStarboy/src/server/class/zone.class.ts
var import_polygon = __toESM(require("polygon"));
var import_vec22 = __toESM(require("vec2"));
var Zone = class extends AppClass2 {
  constructor() {
    super("Zone");
  }
};
var ComboZone = class extends Zone {
  constructor(edges, options) {
    super();
    this._shouldDestroy = false;
    this._seeds = [];
    this._options = options;
    if (options.seeds) {
      this._seeds = options.seeds;
    }
    this._edges = edges;
    this._p = new import_polygon.default(this._edges);
  }
  get shapes() {
    const ret = [];
    for (const shape of this._p.points) {
      ret.push([shape.x, shape.y, 0]);
    }
    return ret;
  }
  get seeds() {
    return this._seeds;
  }
  get name() {
    return this._options.name;
  }
  get center() {
    return this._p.center();
  }
  get radius() {
    const bounding = this.getBoundingBox();
    return Math.max(bounding.maxX - bounding.minX, bounding.maxY - bounding.minY);
  }
  divideEdges(edges, size) {
    const dividedPoints = [];
    const numPoints = edges.length;
    for (let i = 0; i < numPoints; i++) {
      const startPoint = edges[i];
      const endPoint = edges[(i + 1) % numPoints];
      const segmentLength = this.distance(startPoint, endPoint);
      const numDivisions = Math.floor(segmentLength / size);
      if (numDivisions === 0) {
        dividedPoints.push(startPoint);
      } else {
        const segmentVector = this.subtract(endPoint, startPoint);
        const divisionVector = this.scale(segmentVector, 1 / (numDivisions + 1));
        for (let j = 0; j < numDivisions; j++) {
          const divisionPoint = this.add(startPoint, this.scale(divisionVector, j + 1));
          dividedPoints.push(divisionPoint);
        }
      }
    }
    return dividedPoints;
  }
  distance(p1, p2) {
    const dx = p2[0] - p1[0];
    const dy = p2[1] - p1[1];
    return Math.sqrt(dx * dx + dy * dy);
  }
  subtract(p1, p2) {
    return [p1[0] - p2[0], p1[1] - p2[1], p1[2] - p2[2]];
  }
  scale(p, scalar) {
    return [p[0] * scalar, p[1] * scalar, p[2] * scalar];
  }
  add(p1, p2) {
    return [p1[0] + p2[0], p1[1] + p2[1], p1[2] + p2[2]];
  }
  getBoundingBox() {
    const result = {
      minX: Infinity,
      maxX: -Infinity,
      minY: Infinity,
      maxY: -Infinity
    };
    for (const edge of this._p.toArray()) {
      result.minX = Math.min(result.minX, edge[0]);
      result.maxX = Math.max(result.maxX, edge[0]);
      result.minY = Math.min(result.minY, edge[1]);
      result.maxY = Math.max(result.maxY, edge[1]);
    }
    return result;
  }
  isEar(prev, curr, next, polygon) {
    const numPoints = polygon.length;
    for (let i = 0; i < numPoints; i++) {
      if (polygon[i] !== prev && polygon[i] !== curr && polygon[i] !== next && this.isPointInsideTriangle(polygon[i], [prev, curr, next])) {
        return false;
      }
    }
    return true;
  }
  isPointInsideTriangle(point, triangle) {
    const [p1, p2, p3] = triangle;
    const cross1 = (p2[0] - p1[0]) * (point[1] - p1[1]) - (point[0] - p1[0]) * (p2[1] - p1[1]);
    const cross2 = (p3[0] - p2[0]) * (point[1] - p2[1]) - (point[0] - p2[0]) * (p3[1] - p2[1]);
    const cross3 = (p1[0] - p3[0]) * (point[1] - p3[1]) - (point[0] - p3[0]) * (p1[1] - p3[1]);
    return cross1 >= 0 && cross2 >= 0 && cross3 >= 0 || cross1 <= 0 && cross2 <= 0 && cross3 <= 0;
  }
  isPointInside(x, y) {
    return this._p.containsPoint(new import_vec22.default(x, y));
  }
  getCloestPointIdx(x, y) {
    const point = new import_vec22.default(x, y);
    let distance = Infinity;
    let retIdx = -1;
    this._p.each((prev, cur, next, idx) => {
      const d = prev.distance(point);
      if (d < distance) {
        distance = d;
        retIdx = idx;
      }
    });
    return retIdx;
  }
  addPoint(x, y) {
    const cloestPointIdx = this._p.length - 1;
    this._p.insert(new import_vec22.default(x, y), cloestPointIdx);
  }
};

// ../../ProjectStarboy/src/server/services/zone.service.ts
var ZoneService = class extends AppService {
  constructor() {
    super("ZoneService");
    this._zones = /* @__PURE__ */ new Set();
  }
  createZone(edges, options) {
    const zone = new ComboZone(edges, options);
    this._zones.add(zone);
    return zone;
  }
  getZoneByName(name) {
    for (const zone of this._zones) {
      if (zone.name === name) {
        return zone;
      }
    }
  }
  getZoneByPosition(x, y) {
    for (const zone of this._zones) {
      if (zone.isPointInside(x, y)) {
        return zone;
      }
    }
  }
};
ZoneService = __decorateClass([
  (0, import_starboy_framework36.Injectable)()
], ZoneService);

// ../../ProjectStarboy/src/server/controllers/export.controller.ts
var cache = {};
var ExportController = class extends AppController2 {
  constructor(playerService, ambulanceService, bankService, billService, chatService, craftingService, dailyRewardService, doorsService, drivingSchoolService, duiScreenService, emergencyCallsService, garageService, gloceryStoreService, inventoryService, itemService, jailService, marketService, mechanicService, missionsService, onlineRewardService, phonesService, plantService, policeService, privilegesService, scoreboardService, sellItemService, safeService, timeService, utilsService, vehicleService, wantedService, zoneService) {
    super("ExportController");
    this.playerService = playerService;
    this.ambulanceService = ambulanceService;
    this.bankService = bankService;
    this.billService = billService;
    this.chatService = chatService;
    this.craftingService = craftingService;
    this.dailyRewardService = dailyRewardService;
    this.doorsService = doorsService;
    this.drivingSchoolService = drivingSchoolService;
    this.duiScreenService = duiScreenService;
    this.emergencyCallsService = emergencyCallsService;
    this.garageService = garageService;
    this.gloceryStoreService = gloceryStoreService;
    this.inventoryService = inventoryService;
    this.itemService = itemService;
    this.jailService = jailService;
    this.marketService = marketService;
    this.mechanicService = mechanicService;
    this.missionsService = missionsService;
    this.onlineRewardService = onlineRewardService;
    this.phonesService = phonesService;
    this.plantService = plantService;
    this.policeService = policeService;
    this.privilegesService = privilegesService;
    this.scoreboardService = scoreboardService;
    this.sellItemService = sellItemService;
    this.safeService = safeService;
    this.timeService = timeService;
    this.utilsService = utilsService;
    this.vehicleService = vehicleService;
    this.wantedService = wantedService;
    this.zoneService = zoneService;
    this.services = {};
    this.services = {
      ["PlayersService"]: this.playerService,
      ["AmbulanceService"]: this.ambulanceService,
      ["BankService"]: this.bankService,
      ["BillService"]: this.billService,
      ["ChatService"]: this.chatService,
      ["CraftingService"]: this.craftingService,
      ["DailyRewardService"]: this.dailyRewardService,
      ["DoorsService"]: this.doorsService,
      ["DrivingSchoolService"]: this.drivingSchoolService,
      ["DuiScreenService"]: this.duiScreenService,
      ["EmergencyCallsService"]: this.emergencyCallsService,
      ["GarageService"]: this.garageService,
      ["GloceryStoreService"]: this.gloceryStoreService,
      ["InventoryService"]: this.inventoryService,
      ["ItemService"]: this.itemService,
      ["JailService"]: this.jailService,
      ["MarketService"]: this.marketService,
      ["MechanicService"]: this.mechanicService,
      ["MissionsService"]: this.missionsService,
      ["OnlineRewardService"]: this.onlineRewardService,
      ["PhonesService"]: this.phonesService,
      ["PlantService"]: this.plantService,
      ["PoliceService"]: this.policeService,
      ["PrivilegesService"]: this.privilegesService,
      ["ScoreboardService"]: this.scoreboardService,
      ["SellItemService"]: this.sellItemService,
      ["SafeService"]: this.safeService,
      ["TimeService"]: this.timeService,
      ["UtilsService"]: this.utilsService,
      ["VehicleService"]: this.vehicleService,
      ["WantedService"]: this.wantedService,
      ["ZoneService"]: this.zoneService
    };
  }
  getPlayerFromSource(source2) {
    var _a;
    return (_a = this.playerService.getPlayer(String(source2))) == null ? void 0 : _a.LUA();
  }
  getPlayerFromSource2(source2) {
    var _a;
    return (_a = this.playerService.getPlayer(String(source2))) == null ? void 0 : _a.LUA();
  }
  async getPlayerFromId(id) {
    const player = await this.playerService.getPlayerByIdSync(id);
    return player == null ? void 0 : player.LUA();
  }
  getPlayerFromId2(id) {
    return this.playerService.getPlayerById(id);
  }
  excuteMethod(serviceName, method, ...args) {
    const service = this.services[serviceName];
    if (!service)
      return;
    if (!service[method])
      return;
    if (typeof service[method] !== "function")
      return {
        type: "dynamic",
        value: service[method]
      };
    const response = service[method](...args);
    if (response.LUA) {
      const { returnObject, returnMeta } = response.LUA();
      return {
        type: "static",
        value: { returnObject, returnMeta }
      };
    }
    return {
      type: "dynamic",
      value: response
    };
  }
  static async callService(serviceName, method, ...args) {
    const hashesName = `${serviceName}_${method}_${args.join("_")}`;
    if (cache[hashesName])
      return cache[hashesName];
    const response = await exports["ProjectStarboy"]["ExportController_excuteMethod"](serviceName, method, ...args);
    if (response.type === "static") {
      const { returnObject, returnMeta } = response.value;
      console.log(returnObject, returnMeta);
      const instance = new Proxy(
        {},
        {
          get(target, p, receiver) {
            if (!returnMeta[p])
              return;
            if (returnMeta[p] === "function") {
              return (...args2) => {
                returnObject[p](...args2);
              };
            }
            return returnObject[p]();
          }
        }
      );
      cache[hashesName] = instance;
      return cache[hashesName];
    }
    return response.value;
  }
};
__decorateClass([
  (0, import_starboy_framework37.Export)()
], ExportController.prototype, "getPlayerFromSource", 1);
__decorateClass([
  (0, import_starboy_framework37.Export)()
], ExportController.prototype, "getPlayerFromSource2", 1);
__decorateClass([
  (0, import_starboy_framework37.Export)()
], ExportController.prototype, "getPlayerFromId", 1);
__decorateClass([
  (0, import_starboy_framework37.Export)()
], ExportController.prototype, "getPlayerFromId2", 1);
__decorateClass([
  (0, import_starboy_framework37.Export)()
], ExportController.prototype, "excuteMethod", 1);
ExportController = __decorateClass([
  (0, import_starboy_framework37.Controller)("ExportController"),
  __decorateParam(0, (0, import_starboy_framework37.Inject)(PlayersService)),
  __decorateParam(1, (0, import_starboy_framework37.Inject)(AmbulanceService)),
  __decorateParam(2, (0, import_starboy_framework37.Inject)(BankService)),
  __decorateParam(3, (0, import_starboy_framework37.Inject)(BillService)),
  __decorateParam(4, (0, import_starboy_framework37.Inject)(ChatService)),
  __decorateParam(5, (0, import_starboy_framework37.Inject)(CraftingService)),
  __decorateParam(6, (0, import_starboy_framework37.Inject)(daily_reward_service_default)),
  __decorateParam(7, (0, import_starboy_framework37.Inject)(DoorsService)),
  __decorateParam(8, (0, import_starboy_framework37.Inject)(DrivingSchoolService)),
  __decorateParam(9, (0, import_starboy_framework37.Inject)(DuiScreenService)),
  __decorateParam(10, (0, import_starboy_framework37.Inject)(EmergencyCallsService)),
  __decorateParam(11, (0, import_starboy_framework37.Inject)(GarageService)),
  __decorateParam(12, (0, import_starboy_framework37.Inject)(GloceryStoreService)),
  __decorateParam(13, (0, import_starboy_framework37.Inject)(InventoryService)),
  __decorateParam(14, (0, import_starboy_framework37.Inject)(ItemService)),
  __decorateParam(15, (0, import_starboy_framework37.Inject)(JailService)),
  __decorateParam(16, (0, import_starboy_framework37.Inject)(market_service_default)),
  __decorateParam(17, (0, import_starboy_framework37.Inject)(MechanicService)),
  __decorateParam(18, (0, import_starboy_framework37.Inject)(missions_service_default)),
  __decorateParam(19, (0, import_starboy_framework37.Inject)(OnlineRewardService)),
  __decorateParam(20, (0, import_starboy_framework37.Inject)(phones_service_default)),
  __decorateParam(21, (0, import_starboy_framework37.Inject)(PlantService)),
  __decorateParam(22, (0, import_starboy_framework37.Inject)(PoliceService)),
  __decorateParam(23, (0, import_starboy_framework37.Inject)(PrivilegesService)),
  __decorateParam(24, (0, import_starboy_framework37.Inject)(ScoreboardService)),
  __decorateParam(25, (0, import_starboy_framework37.Inject)(SellItemService)),
  __decorateParam(26, (0, import_starboy_framework37.Inject)(SafeService)),
  __decorateParam(27, (0, import_starboy_framework37.Inject)(TimeService)),
  __decorateParam(28, (0, import_starboy_framework37.Inject)(UtilsService)),
  __decorateParam(29, (0, import_starboy_framework37.Inject)(vehicle_service_default)),
  __decorateParam(30, (0, import_starboy_framework37.Inject)(WantedService)),
  __decorateParam(31, (0, import_starboy_framework37.Inject)(ZoneService))
], ExportController);

// src/server/controllers/test.controller.ts
var TestController = class extends AppController {
  constructor() {
    super("TestController");
  }
  async test() {
    const player = await ExportController.callService(
      "PlayersService",
      "getPlayer",
      1
    );
    this.logInfo(player.name);
    return {
      status: 1 /* SUCCESS */,
      data: player.name
    };
  }
};
__decorateClass([
  (0, import_starboy_framework38.NetCallback)("test")
], TestController.prototype, "test", 1);
TestController = __decorateClass([
  (0, import_starboy_framework38.Controller)()
], TestController);

// src/server/server.ts
var server = import_starboy_framework39.App.create({
  controllers: [TestController]
});
server.start();
