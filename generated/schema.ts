// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  TypedMap,
  Entity,
  Value,
  ValueKind,
  store,
  Bytes,
  BigInt,
  BigDecimal
} from "@graphprotocol/graph-ts";

export class Pool extends Entity {
  constructor(id: Bytes) {
    super();
    this.set("id", Value.fromBytes(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save Pool entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.BYTES,
        `Entities of type Pool must have an ID of type Bytes but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("Pool", id.toBytes().toHexString(), this);
    }
  }

  static load(id: Bytes): Pool | null {
    return changetype<Pool | null>(store.get("Pool", id.toHexString()));
  }

  get id(): Bytes {
    let value = this.get("id");
    return value!.toBytes();
  }

  set id(value: Bytes) {
    this.set("id", Value.fromBytes(value));
  }

  get token0(): Bytes {
    let value = this.get("token0");
    return value!.toBytes();
  }

  set token0(value: Bytes) {
    this.set("token0", Value.fromBytes(value));
  }

  get token1(): Bytes {
    let value = this.get("token1");
    return value!.toBytes();
  }

  set token1(value: Bytes) {
    this.set("token1", Value.fromBytes(value));
  }

  get fee(): i32 {
    let value = this.get("fee");
    return value!.toI32();
  }

  set fee(value: i32) {
    this.set("fee", Value.fromI32(value));
  }

  get pool(): Bytes {
    let value = this.get("pool");
    return value!.toBytes();
  }

  set pool(value: Bytes) {
    this.set("pool", Value.fromBytes(value));
  }

  get blockNumber(): BigInt {
    let value = this.get("blockNumber");
    return value!.toBigInt();
  }

  set blockNumber(value: BigInt) {
    this.set("blockNumber", Value.fromBigInt(value));
  }

  get blockTimestamp(): BigInt {
    let value = this.get("blockTimestamp");
    return value!.toBigInt();
  }

  set blockTimestamp(value: BigInt) {
    this.set("blockTimestamp", Value.fromBigInt(value));
  }

  get transactionHash(): Bytes {
    let value = this.get("transactionHash");
    return value!.toBytes();
  }

  set transactionHash(value: Bytes) {
    this.set("transactionHash", Value.fromBytes(value));
  }
}

export class Swap extends Entity {
  constructor(id: Bytes) {
    super();
    this.set("id", Value.fromBytes(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save Swap entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.BYTES,
        `Entities of type Swap must have an ID of type Bytes but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("Swap", id.toBytes().toHexString(), this);
    }
  }

  static load(id: Bytes): Swap | null {
    return changetype<Swap | null>(store.get("Swap", id.toHexString()));
  }

  get id(): Bytes {
    let value = this.get("id");
    return value!.toBytes();
  }

  set id(value: Bytes) {
    this.set("id", Value.fromBytes(value));
  }

  get pool(): Bytes {
    let value = this.get("pool");
    return value!.toBytes();
  }

  set pool(value: Bytes) {
    this.set("pool", Value.fromBytes(value));
  }

  get token0(): Bytes {
    let value = this.get("token0");
    return value!.toBytes();
  }

  set token0(value: Bytes) {
    this.set("token0", Value.fromBytes(value));
  }

  get token1(): Bytes {
    let value = this.get("token1");
    return value!.toBytes();
  }

  set token1(value: Bytes) {
    this.set("token1", Value.fromBytes(value));
  }

  get amount0(): BigInt {
    let value = this.get("amount0");
    return value!.toBigInt();
  }

  set amount0(value: BigInt) {
    this.set("amount0", Value.fromBigInt(value));
  }

  get amount1(): BigInt {
    let value = this.get("amount1");
    return value!.toBigInt();
  }

  set amount1(value: BigInt) {
    this.set("amount1", Value.fromBigInt(value));
  }

  get blockNumber(): BigInt {
    let value = this.get("blockNumber");
    return value!.toBigInt();
  }

  set blockNumber(value: BigInt) {
    this.set("blockNumber", Value.fromBigInt(value));
  }

  get blockTimestamp(): BigInt {
    let value = this.get("blockTimestamp");
    return value!.toBigInt();
  }

  set blockTimestamp(value: BigInt) {
    this.set("blockTimestamp", Value.fromBigInt(value));
  }

  get transactionHash(): Bytes {
    let value = this.get("transactionHash");
    return value!.toBytes();
  }

  set transactionHash(value: Bytes) {
    this.set("transactionHash", Value.fromBytes(value));
  }
}
