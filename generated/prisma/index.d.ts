
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model first_table
 * 
 */
export type first_table = $Result.DefaultSelection<Prisma.$first_tablePayload>
/**
 * Model second_table
 * 
 */
export type second_table = $Result.DefaultSelection<Prisma.$second_tablePayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more First_tables
 * const first_tables = await prisma.first_table.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more First_tables
   * const first_tables = await prisma.first_table.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.first_table`: Exposes CRUD operations for the **first_table** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more First_tables
    * const first_tables = await prisma.first_table.findMany()
    * ```
    */
  get first_table(): Prisma.first_tableDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.second_table`: Exposes CRUD operations for the **second_table** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Second_tables
    * const second_tables = await prisma.second_table.findMany()
    * ```
    */
  get second_table(): Prisma.second_tableDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.6.0
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    first_table: 'first_table',
    second_table: 'second_table'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "first_table" | "second_table"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      first_table: {
        payload: Prisma.$first_tablePayload<ExtArgs>
        fields: Prisma.first_tableFieldRefs
        operations: {
          findUnique: {
            args: Prisma.first_tableFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$first_tablePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.first_tableFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$first_tablePayload>
          }
          findFirst: {
            args: Prisma.first_tableFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$first_tablePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.first_tableFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$first_tablePayload>
          }
          findMany: {
            args: Prisma.first_tableFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$first_tablePayload>[]
          }
          create: {
            args: Prisma.first_tableCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$first_tablePayload>
          }
          createMany: {
            args: Prisma.first_tableCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.first_tableCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$first_tablePayload>[]
          }
          delete: {
            args: Prisma.first_tableDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$first_tablePayload>
          }
          update: {
            args: Prisma.first_tableUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$first_tablePayload>
          }
          deleteMany: {
            args: Prisma.first_tableDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.first_tableUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.first_tableUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$first_tablePayload>[]
          }
          upsert: {
            args: Prisma.first_tableUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$first_tablePayload>
          }
          aggregate: {
            args: Prisma.First_tableAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFirst_table>
          }
          groupBy: {
            args: Prisma.first_tableGroupByArgs<ExtArgs>
            result: $Utils.Optional<First_tableGroupByOutputType>[]
          }
          count: {
            args: Prisma.first_tableCountArgs<ExtArgs>
            result: $Utils.Optional<First_tableCountAggregateOutputType> | number
          }
        }
      }
      second_table: {
        payload: Prisma.$second_tablePayload<ExtArgs>
        fields: Prisma.second_tableFieldRefs
        operations: {
          findUnique: {
            args: Prisma.second_tableFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$second_tablePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.second_tableFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$second_tablePayload>
          }
          findFirst: {
            args: Prisma.second_tableFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$second_tablePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.second_tableFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$second_tablePayload>
          }
          findMany: {
            args: Prisma.second_tableFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$second_tablePayload>[]
          }
          create: {
            args: Prisma.second_tableCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$second_tablePayload>
          }
          createMany: {
            args: Prisma.second_tableCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.second_tableCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$second_tablePayload>[]
          }
          delete: {
            args: Prisma.second_tableDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$second_tablePayload>
          }
          update: {
            args: Prisma.second_tableUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$second_tablePayload>
          }
          deleteMany: {
            args: Prisma.second_tableDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.second_tableUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.second_tableUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$second_tablePayload>[]
          }
          upsert: {
            args: Prisma.second_tableUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$second_tablePayload>
          }
          aggregate: {
            args: Prisma.Second_tableAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSecond_table>
          }
          groupBy: {
            args: Prisma.second_tableGroupByArgs<ExtArgs>
            result: $Utils.Optional<Second_tableGroupByOutputType>[]
          }
          count: {
            args: Prisma.second_tableCountArgs<ExtArgs>
            result: $Utils.Optional<Second_tableCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    first_table?: first_tableOmit
    second_table?: second_tableOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type First_tableCountOutputType
   */

  export type First_tableCountOutputType = {
    second_table: number
  }

  export type First_tableCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    second_table?: boolean | First_tableCountOutputTypeCountSecond_tableArgs
  }

  // Custom InputTypes
  /**
   * First_tableCountOutputType without action
   */
  export type First_tableCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the First_tableCountOutputType
     */
    select?: First_tableCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * First_tableCountOutputType without action
   */
  export type First_tableCountOutputTypeCountSecond_tableArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: second_tableWhereInput
  }


  /**
   * Models
   */

  /**
   * Model first_table
   */

  export type AggregateFirst_table = {
    _count: First_tableCountAggregateOutputType | null
    _avg: First_tableAvgAggregateOutputType | null
    _sum: First_tableSumAggregateOutputType | null
    _min: First_tableMinAggregateOutputType | null
    _max: First_tableMaxAggregateOutputType | null
  }

  export type First_tableAvgAggregateOutputType = {
    id_first_table: number | null
  }

  export type First_tableSumAggregateOutputType = {
    id_first_table: number | null
  }

  export type First_tableMinAggregateOutputType = {
    id_first_table: number | null
    name_char: string | null
  }

  export type First_tableMaxAggregateOutputType = {
    id_first_table: number | null
    name_char: string | null
  }

  export type First_tableCountAggregateOutputType = {
    id_first_table: number
    name_char: number
    _all: number
  }


  export type First_tableAvgAggregateInputType = {
    id_first_table?: true
  }

  export type First_tableSumAggregateInputType = {
    id_first_table?: true
  }

  export type First_tableMinAggregateInputType = {
    id_first_table?: true
    name_char?: true
  }

  export type First_tableMaxAggregateInputType = {
    id_first_table?: true
    name_char?: true
  }

  export type First_tableCountAggregateInputType = {
    id_first_table?: true
    name_char?: true
    _all?: true
  }

  export type First_tableAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which first_table to aggregate.
     */
    where?: first_tableWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of first_tables to fetch.
     */
    orderBy?: first_tableOrderByWithRelationInput | first_tableOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: first_tableWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` first_tables from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` first_tables.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned first_tables
    **/
    _count?: true | First_tableCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: First_tableAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: First_tableSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: First_tableMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: First_tableMaxAggregateInputType
  }

  export type GetFirst_tableAggregateType<T extends First_tableAggregateArgs> = {
        [P in keyof T & keyof AggregateFirst_table]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFirst_table[P]>
      : GetScalarType<T[P], AggregateFirst_table[P]>
  }




  export type first_tableGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: first_tableWhereInput
    orderBy?: first_tableOrderByWithAggregationInput | first_tableOrderByWithAggregationInput[]
    by: First_tableScalarFieldEnum[] | First_tableScalarFieldEnum
    having?: first_tableScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: First_tableCountAggregateInputType | true
    _avg?: First_tableAvgAggregateInputType
    _sum?: First_tableSumAggregateInputType
    _min?: First_tableMinAggregateInputType
    _max?: First_tableMaxAggregateInputType
  }

  export type First_tableGroupByOutputType = {
    id_first_table: number
    name_char: string
    _count: First_tableCountAggregateOutputType | null
    _avg: First_tableAvgAggregateOutputType | null
    _sum: First_tableSumAggregateOutputType | null
    _min: First_tableMinAggregateOutputType | null
    _max: First_tableMaxAggregateOutputType | null
  }

  type GetFirst_tableGroupByPayload<T extends first_tableGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<First_tableGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof First_tableGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], First_tableGroupByOutputType[P]>
            : GetScalarType<T[P], First_tableGroupByOutputType[P]>
        }
      >
    >


  export type first_tableSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_first_table?: boolean
    name_char?: boolean
    second_table?: boolean | first_table$second_tableArgs<ExtArgs>
    _count?: boolean | First_tableCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["first_table"]>

  export type first_tableSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_first_table?: boolean
    name_char?: boolean
  }, ExtArgs["result"]["first_table"]>

  export type first_tableSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_first_table?: boolean
    name_char?: boolean
  }, ExtArgs["result"]["first_table"]>

  export type first_tableSelectScalar = {
    id_first_table?: boolean
    name_char?: boolean
  }

  export type first_tableOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_first_table" | "name_char", ExtArgs["result"]["first_table"]>
  export type first_tableInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    second_table?: boolean | first_table$second_tableArgs<ExtArgs>
    _count?: boolean | First_tableCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type first_tableIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type first_tableIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $first_tablePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "first_table"
    objects: {
      second_table: Prisma.$second_tablePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id_first_table: number
      name_char: string
    }, ExtArgs["result"]["first_table"]>
    composites: {}
  }

  type first_tableGetPayload<S extends boolean | null | undefined | first_tableDefaultArgs> = $Result.GetResult<Prisma.$first_tablePayload, S>

  type first_tableCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<first_tableFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: First_tableCountAggregateInputType | true
    }

  export interface first_tableDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['first_table'], meta: { name: 'first_table' } }
    /**
     * Find zero or one First_table that matches the filter.
     * @param {first_tableFindUniqueArgs} args - Arguments to find a First_table
     * @example
     * // Get one First_table
     * const first_table = await prisma.first_table.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends first_tableFindUniqueArgs>(args: SelectSubset<T, first_tableFindUniqueArgs<ExtArgs>>): Prisma__first_tableClient<$Result.GetResult<Prisma.$first_tablePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one First_table that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {first_tableFindUniqueOrThrowArgs} args - Arguments to find a First_table
     * @example
     * // Get one First_table
     * const first_table = await prisma.first_table.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends first_tableFindUniqueOrThrowArgs>(args: SelectSubset<T, first_tableFindUniqueOrThrowArgs<ExtArgs>>): Prisma__first_tableClient<$Result.GetResult<Prisma.$first_tablePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first First_table that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {first_tableFindFirstArgs} args - Arguments to find a First_table
     * @example
     * // Get one First_table
     * const first_table = await prisma.first_table.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends first_tableFindFirstArgs>(args?: SelectSubset<T, first_tableFindFirstArgs<ExtArgs>>): Prisma__first_tableClient<$Result.GetResult<Prisma.$first_tablePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first First_table that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {first_tableFindFirstOrThrowArgs} args - Arguments to find a First_table
     * @example
     * // Get one First_table
     * const first_table = await prisma.first_table.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends first_tableFindFirstOrThrowArgs>(args?: SelectSubset<T, first_tableFindFirstOrThrowArgs<ExtArgs>>): Prisma__first_tableClient<$Result.GetResult<Prisma.$first_tablePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more First_tables that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {first_tableFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all First_tables
     * const first_tables = await prisma.first_table.findMany()
     * 
     * // Get first 10 First_tables
     * const first_tables = await prisma.first_table.findMany({ take: 10 })
     * 
     * // Only select the `id_first_table`
     * const first_tableWithId_first_tableOnly = await prisma.first_table.findMany({ select: { id_first_table: true } })
     * 
     */
    findMany<T extends first_tableFindManyArgs>(args?: SelectSubset<T, first_tableFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$first_tablePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a First_table.
     * @param {first_tableCreateArgs} args - Arguments to create a First_table.
     * @example
     * // Create one First_table
     * const First_table = await prisma.first_table.create({
     *   data: {
     *     // ... data to create a First_table
     *   }
     * })
     * 
     */
    create<T extends first_tableCreateArgs>(args: SelectSubset<T, first_tableCreateArgs<ExtArgs>>): Prisma__first_tableClient<$Result.GetResult<Prisma.$first_tablePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many First_tables.
     * @param {first_tableCreateManyArgs} args - Arguments to create many First_tables.
     * @example
     * // Create many First_tables
     * const first_table = await prisma.first_table.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends first_tableCreateManyArgs>(args?: SelectSubset<T, first_tableCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many First_tables and returns the data saved in the database.
     * @param {first_tableCreateManyAndReturnArgs} args - Arguments to create many First_tables.
     * @example
     * // Create many First_tables
     * const first_table = await prisma.first_table.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many First_tables and only return the `id_first_table`
     * const first_tableWithId_first_tableOnly = await prisma.first_table.createManyAndReturn({
     *   select: { id_first_table: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends first_tableCreateManyAndReturnArgs>(args?: SelectSubset<T, first_tableCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$first_tablePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a First_table.
     * @param {first_tableDeleteArgs} args - Arguments to delete one First_table.
     * @example
     * // Delete one First_table
     * const First_table = await prisma.first_table.delete({
     *   where: {
     *     // ... filter to delete one First_table
     *   }
     * })
     * 
     */
    delete<T extends first_tableDeleteArgs>(args: SelectSubset<T, first_tableDeleteArgs<ExtArgs>>): Prisma__first_tableClient<$Result.GetResult<Prisma.$first_tablePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one First_table.
     * @param {first_tableUpdateArgs} args - Arguments to update one First_table.
     * @example
     * // Update one First_table
     * const first_table = await prisma.first_table.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends first_tableUpdateArgs>(args: SelectSubset<T, first_tableUpdateArgs<ExtArgs>>): Prisma__first_tableClient<$Result.GetResult<Prisma.$first_tablePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more First_tables.
     * @param {first_tableDeleteManyArgs} args - Arguments to filter First_tables to delete.
     * @example
     * // Delete a few First_tables
     * const { count } = await prisma.first_table.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends first_tableDeleteManyArgs>(args?: SelectSubset<T, first_tableDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more First_tables.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {first_tableUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many First_tables
     * const first_table = await prisma.first_table.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends first_tableUpdateManyArgs>(args: SelectSubset<T, first_tableUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more First_tables and returns the data updated in the database.
     * @param {first_tableUpdateManyAndReturnArgs} args - Arguments to update many First_tables.
     * @example
     * // Update many First_tables
     * const first_table = await prisma.first_table.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more First_tables and only return the `id_first_table`
     * const first_tableWithId_first_tableOnly = await prisma.first_table.updateManyAndReturn({
     *   select: { id_first_table: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends first_tableUpdateManyAndReturnArgs>(args: SelectSubset<T, first_tableUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$first_tablePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one First_table.
     * @param {first_tableUpsertArgs} args - Arguments to update or create a First_table.
     * @example
     * // Update or create a First_table
     * const first_table = await prisma.first_table.upsert({
     *   create: {
     *     // ... data to create a First_table
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the First_table we want to update
     *   }
     * })
     */
    upsert<T extends first_tableUpsertArgs>(args: SelectSubset<T, first_tableUpsertArgs<ExtArgs>>): Prisma__first_tableClient<$Result.GetResult<Prisma.$first_tablePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of First_tables.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {first_tableCountArgs} args - Arguments to filter First_tables to count.
     * @example
     * // Count the number of First_tables
     * const count = await prisma.first_table.count({
     *   where: {
     *     // ... the filter for the First_tables we want to count
     *   }
     * })
    **/
    count<T extends first_tableCountArgs>(
      args?: Subset<T, first_tableCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], First_tableCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a First_table.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {First_tableAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends First_tableAggregateArgs>(args: Subset<T, First_tableAggregateArgs>): Prisma.PrismaPromise<GetFirst_tableAggregateType<T>>

    /**
     * Group by First_table.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {first_tableGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends first_tableGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: first_tableGroupByArgs['orderBy'] }
        : { orderBy?: first_tableGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, first_tableGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFirst_tableGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the first_table model
   */
  readonly fields: first_tableFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for first_table.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__first_tableClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    second_table<T extends first_table$second_tableArgs<ExtArgs> = {}>(args?: Subset<T, first_table$second_tableArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$second_tablePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the first_table model
   */
  interface first_tableFieldRefs {
    readonly id_first_table: FieldRef<"first_table", 'Int'>
    readonly name_char: FieldRef<"first_table", 'String'>
  }
    

  // Custom InputTypes
  /**
   * first_table findUnique
   */
  export type first_tableFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the first_table
     */
    select?: first_tableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the first_table
     */
    omit?: first_tableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: first_tableInclude<ExtArgs> | null
    /**
     * Filter, which first_table to fetch.
     */
    where: first_tableWhereUniqueInput
  }

  /**
   * first_table findUniqueOrThrow
   */
  export type first_tableFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the first_table
     */
    select?: first_tableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the first_table
     */
    omit?: first_tableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: first_tableInclude<ExtArgs> | null
    /**
     * Filter, which first_table to fetch.
     */
    where: first_tableWhereUniqueInput
  }

  /**
   * first_table findFirst
   */
  export type first_tableFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the first_table
     */
    select?: first_tableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the first_table
     */
    omit?: first_tableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: first_tableInclude<ExtArgs> | null
    /**
     * Filter, which first_table to fetch.
     */
    where?: first_tableWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of first_tables to fetch.
     */
    orderBy?: first_tableOrderByWithRelationInput | first_tableOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for first_tables.
     */
    cursor?: first_tableWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` first_tables from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` first_tables.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of first_tables.
     */
    distinct?: First_tableScalarFieldEnum | First_tableScalarFieldEnum[]
  }

  /**
   * first_table findFirstOrThrow
   */
  export type first_tableFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the first_table
     */
    select?: first_tableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the first_table
     */
    omit?: first_tableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: first_tableInclude<ExtArgs> | null
    /**
     * Filter, which first_table to fetch.
     */
    where?: first_tableWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of first_tables to fetch.
     */
    orderBy?: first_tableOrderByWithRelationInput | first_tableOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for first_tables.
     */
    cursor?: first_tableWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` first_tables from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` first_tables.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of first_tables.
     */
    distinct?: First_tableScalarFieldEnum | First_tableScalarFieldEnum[]
  }

  /**
   * first_table findMany
   */
  export type first_tableFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the first_table
     */
    select?: first_tableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the first_table
     */
    omit?: first_tableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: first_tableInclude<ExtArgs> | null
    /**
     * Filter, which first_tables to fetch.
     */
    where?: first_tableWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of first_tables to fetch.
     */
    orderBy?: first_tableOrderByWithRelationInput | first_tableOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing first_tables.
     */
    cursor?: first_tableWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` first_tables from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` first_tables.
     */
    skip?: number
    distinct?: First_tableScalarFieldEnum | First_tableScalarFieldEnum[]
  }

  /**
   * first_table create
   */
  export type first_tableCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the first_table
     */
    select?: first_tableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the first_table
     */
    omit?: first_tableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: first_tableInclude<ExtArgs> | null
    /**
     * The data needed to create a first_table.
     */
    data?: XOR<first_tableCreateInput, first_tableUncheckedCreateInput>
  }

  /**
   * first_table createMany
   */
  export type first_tableCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many first_tables.
     */
    data: first_tableCreateManyInput | first_tableCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * first_table createManyAndReturn
   */
  export type first_tableCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the first_table
     */
    select?: first_tableSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the first_table
     */
    omit?: first_tableOmit<ExtArgs> | null
    /**
     * The data used to create many first_tables.
     */
    data: first_tableCreateManyInput | first_tableCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * first_table update
   */
  export type first_tableUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the first_table
     */
    select?: first_tableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the first_table
     */
    omit?: first_tableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: first_tableInclude<ExtArgs> | null
    /**
     * The data needed to update a first_table.
     */
    data: XOR<first_tableUpdateInput, first_tableUncheckedUpdateInput>
    /**
     * Choose, which first_table to update.
     */
    where: first_tableWhereUniqueInput
  }

  /**
   * first_table updateMany
   */
  export type first_tableUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update first_tables.
     */
    data: XOR<first_tableUpdateManyMutationInput, first_tableUncheckedUpdateManyInput>
    /**
     * Filter which first_tables to update
     */
    where?: first_tableWhereInput
    /**
     * Limit how many first_tables to update.
     */
    limit?: number
  }

  /**
   * first_table updateManyAndReturn
   */
  export type first_tableUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the first_table
     */
    select?: first_tableSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the first_table
     */
    omit?: first_tableOmit<ExtArgs> | null
    /**
     * The data used to update first_tables.
     */
    data: XOR<first_tableUpdateManyMutationInput, first_tableUncheckedUpdateManyInput>
    /**
     * Filter which first_tables to update
     */
    where?: first_tableWhereInput
    /**
     * Limit how many first_tables to update.
     */
    limit?: number
  }

  /**
   * first_table upsert
   */
  export type first_tableUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the first_table
     */
    select?: first_tableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the first_table
     */
    omit?: first_tableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: first_tableInclude<ExtArgs> | null
    /**
     * The filter to search for the first_table to update in case it exists.
     */
    where: first_tableWhereUniqueInput
    /**
     * In case the first_table found by the `where` argument doesn't exist, create a new first_table with this data.
     */
    create: XOR<first_tableCreateInput, first_tableUncheckedCreateInput>
    /**
     * In case the first_table was found with the provided `where` argument, update it with this data.
     */
    update: XOR<first_tableUpdateInput, first_tableUncheckedUpdateInput>
  }

  /**
   * first_table delete
   */
  export type first_tableDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the first_table
     */
    select?: first_tableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the first_table
     */
    omit?: first_tableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: first_tableInclude<ExtArgs> | null
    /**
     * Filter which first_table to delete.
     */
    where: first_tableWhereUniqueInput
  }

  /**
   * first_table deleteMany
   */
  export type first_tableDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which first_tables to delete
     */
    where?: first_tableWhereInput
    /**
     * Limit how many first_tables to delete.
     */
    limit?: number
  }

  /**
   * first_table.second_table
   */
  export type first_table$second_tableArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the second_table
     */
    select?: second_tableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the second_table
     */
    omit?: second_tableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: second_tableInclude<ExtArgs> | null
    where?: second_tableWhereInput
    orderBy?: second_tableOrderByWithRelationInput | second_tableOrderByWithRelationInput[]
    cursor?: second_tableWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Second_tableScalarFieldEnum | Second_tableScalarFieldEnum[]
  }

  /**
   * first_table without action
   */
  export type first_tableDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the first_table
     */
    select?: first_tableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the first_table
     */
    omit?: first_tableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: first_tableInclude<ExtArgs> | null
  }


  /**
   * Model second_table
   */

  export type AggregateSecond_table = {
    _count: Second_tableCountAggregateOutputType | null
    _avg: Second_tableAvgAggregateOutputType | null
    _sum: Second_tableSumAggregateOutputType | null
    _min: Second_tableMinAggregateOutputType | null
    _max: Second_tableMaxAggregateOutputType | null
  }

  export type Second_tableAvgAggregateOutputType = {
    id_second_table: number | null
    colum_creada_para_el_fk_con_first_table_fk: number | null
  }

  export type Second_tableSumAggregateOutputType = {
    id_second_table: number | null
    colum_creada_para_el_fk_con_first_table_fk: number | null
  }

  export type Second_tableMinAggregateOutputType = {
    id_second_table: number | null
    story_char: string | null
    colum_creada_para_el_fk_con_first_table_fk: number | null
  }

  export type Second_tableMaxAggregateOutputType = {
    id_second_table: number | null
    story_char: string | null
    colum_creada_para_el_fk_con_first_table_fk: number | null
  }

  export type Second_tableCountAggregateOutputType = {
    id_second_table: number
    story_char: number
    colum_creada_para_el_fk_con_first_table_fk: number
    _all: number
  }


  export type Second_tableAvgAggregateInputType = {
    id_second_table?: true
    colum_creada_para_el_fk_con_first_table_fk?: true
  }

  export type Second_tableSumAggregateInputType = {
    id_second_table?: true
    colum_creada_para_el_fk_con_first_table_fk?: true
  }

  export type Second_tableMinAggregateInputType = {
    id_second_table?: true
    story_char?: true
    colum_creada_para_el_fk_con_first_table_fk?: true
  }

  export type Second_tableMaxAggregateInputType = {
    id_second_table?: true
    story_char?: true
    colum_creada_para_el_fk_con_first_table_fk?: true
  }

  export type Second_tableCountAggregateInputType = {
    id_second_table?: true
    story_char?: true
    colum_creada_para_el_fk_con_first_table_fk?: true
    _all?: true
  }

  export type Second_tableAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which second_table to aggregate.
     */
    where?: second_tableWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of second_tables to fetch.
     */
    orderBy?: second_tableOrderByWithRelationInput | second_tableOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: second_tableWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` second_tables from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` second_tables.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned second_tables
    **/
    _count?: true | Second_tableCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Second_tableAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Second_tableSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Second_tableMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Second_tableMaxAggregateInputType
  }

  export type GetSecond_tableAggregateType<T extends Second_tableAggregateArgs> = {
        [P in keyof T & keyof AggregateSecond_table]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSecond_table[P]>
      : GetScalarType<T[P], AggregateSecond_table[P]>
  }




  export type second_tableGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: second_tableWhereInput
    orderBy?: second_tableOrderByWithAggregationInput | second_tableOrderByWithAggregationInput[]
    by: Second_tableScalarFieldEnum[] | Second_tableScalarFieldEnum
    having?: second_tableScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Second_tableCountAggregateInputType | true
    _avg?: Second_tableAvgAggregateInputType
    _sum?: Second_tableSumAggregateInputType
    _min?: Second_tableMinAggregateInputType
    _max?: Second_tableMaxAggregateInputType
  }

  export type Second_tableGroupByOutputType = {
    id_second_table: number
    story_char: string | null
    colum_creada_para_el_fk_con_first_table_fk: number | null
    _count: Second_tableCountAggregateOutputType | null
    _avg: Second_tableAvgAggregateOutputType | null
    _sum: Second_tableSumAggregateOutputType | null
    _min: Second_tableMinAggregateOutputType | null
    _max: Second_tableMaxAggregateOutputType | null
  }

  type GetSecond_tableGroupByPayload<T extends second_tableGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Second_tableGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Second_tableGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Second_tableGroupByOutputType[P]>
            : GetScalarType<T[P], Second_tableGroupByOutputType[P]>
        }
      >
    >


  export type second_tableSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_second_table?: boolean
    story_char?: boolean
    colum_creada_para_el_fk_con_first_table_fk?: boolean
    first_table?: boolean | second_table$first_tableArgs<ExtArgs>
  }, ExtArgs["result"]["second_table"]>

  export type second_tableSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_second_table?: boolean
    story_char?: boolean
    colum_creada_para_el_fk_con_first_table_fk?: boolean
    first_table?: boolean | second_table$first_tableArgs<ExtArgs>
  }, ExtArgs["result"]["second_table"]>

  export type second_tableSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_second_table?: boolean
    story_char?: boolean
    colum_creada_para_el_fk_con_first_table_fk?: boolean
    first_table?: boolean | second_table$first_tableArgs<ExtArgs>
  }, ExtArgs["result"]["second_table"]>

  export type second_tableSelectScalar = {
    id_second_table?: boolean
    story_char?: boolean
    colum_creada_para_el_fk_con_first_table_fk?: boolean
  }

  export type second_tableOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_second_table" | "story_char" | "colum_creada_para_el_fk_con_first_table_fk", ExtArgs["result"]["second_table"]>
  export type second_tableInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    first_table?: boolean | second_table$first_tableArgs<ExtArgs>
  }
  export type second_tableIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    first_table?: boolean | second_table$first_tableArgs<ExtArgs>
  }
  export type second_tableIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    first_table?: boolean | second_table$first_tableArgs<ExtArgs>
  }

  export type $second_tablePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "second_table"
    objects: {
      first_table: Prisma.$first_tablePayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id_second_table: number
      story_char: string | null
      colum_creada_para_el_fk_con_first_table_fk: number | null
    }, ExtArgs["result"]["second_table"]>
    composites: {}
  }

  type second_tableGetPayload<S extends boolean | null | undefined | second_tableDefaultArgs> = $Result.GetResult<Prisma.$second_tablePayload, S>

  type second_tableCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<second_tableFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Second_tableCountAggregateInputType | true
    }

  export interface second_tableDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['second_table'], meta: { name: 'second_table' } }
    /**
     * Find zero or one Second_table that matches the filter.
     * @param {second_tableFindUniqueArgs} args - Arguments to find a Second_table
     * @example
     * // Get one Second_table
     * const second_table = await prisma.second_table.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends second_tableFindUniqueArgs>(args: SelectSubset<T, second_tableFindUniqueArgs<ExtArgs>>): Prisma__second_tableClient<$Result.GetResult<Prisma.$second_tablePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Second_table that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {second_tableFindUniqueOrThrowArgs} args - Arguments to find a Second_table
     * @example
     * // Get one Second_table
     * const second_table = await prisma.second_table.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends second_tableFindUniqueOrThrowArgs>(args: SelectSubset<T, second_tableFindUniqueOrThrowArgs<ExtArgs>>): Prisma__second_tableClient<$Result.GetResult<Prisma.$second_tablePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Second_table that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {second_tableFindFirstArgs} args - Arguments to find a Second_table
     * @example
     * // Get one Second_table
     * const second_table = await prisma.second_table.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends second_tableFindFirstArgs>(args?: SelectSubset<T, second_tableFindFirstArgs<ExtArgs>>): Prisma__second_tableClient<$Result.GetResult<Prisma.$second_tablePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Second_table that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {second_tableFindFirstOrThrowArgs} args - Arguments to find a Second_table
     * @example
     * // Get one Second_table
     * const second_table = await prisma.second_table.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends second_tableFindFirstOrThrowArgs>(args?: SelectSubset<T, second_tableFindFirstOrThrowArgs<ExtArgs>>): Prisma__second_tableClient<$Result.GetResult<Prisma.$second_tablePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Second_tables that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {second_tableFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Second_tables
     * const second_tables = await prisma.second_table.findMany()
     * 
     * // Get first 10 Second_tables
     * const second_tables = await prisma.second_table.findMany({ take: 10 })
     * 
     * // Only select the `id_second_table`
     * const second_tableWithId_second_tableOnly = await prisma.second_table.findMany({ select: { id_second_table: true } })
     * 
     */
    findMany<T extends second_tableFindManyArgs>(args?: SelectSubset<T, second_tableFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$second_tablePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Second_table.
     * @param {second_tableCreateArgs} args - Arguments to create a Second_table.
     * @example
     * // Create one Second_table
     * const Second_table = await prisma.second_table.create({
     *   data: {
     *     // ... data to create a Second_table
     *   }
     * })
     * 
     */
    create<T extends second_tableCreateArgs>(args: SelectSubset<T, second_tableCreateArgs<ExtArgs>>): Prisma__second_tableClient<$Result.GetResult<Prisma.$second_tablePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Second_tables.
     * @param {second_tableCreateManyArgs} args - Arguments to create many Second_tables.
     * @example
     * // Create many Second_tables
     * const second_table = await prisma.second_table.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends second_tableCreateManyArgs>(args?: SelectSubset<T, second_tableCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Second_tables and returns the data saved in the database.
     * @param {second_tableCreateManyAndReturnArgs} args - Arguments to create many Second_tables.
     * @example
     * // Create many Second_tables
     * const second_table = await prisma.second_table.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Second_tables and only return the `id_second_table`
     * const second_tableWithId_second_tableOnly = await prisma.second_table.createManyAndReturn({
     *   select: { id_second_table: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends second_tableCreateManyAndReturnArgs>(args?: SelectSubset<T, second_tableCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$second_tablePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Second_table.
     * @param {second_tableDeleteArgs} args - Arguments to delete one Second_table.
     * @example
     * // Delete one Second_table
     * const Second_table = await prisma.second_table.delete({
     *   where: {
     *     // ... filter to delete one Second_table
     *   }
     * })
     * 
     */
    delete<T extends second_tableDeleteArgs>(args: SelectSubset<T, second_tableDeleteArgs<ExtArgs>>): Prisma__second_tableClient<$Result.GetResult<Prisma.$second_tablePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Second_table.
     * @param {second_tableUpdateArgs} args - Arguments to update one Second_table.
     * @example
     * // Update one Second_table
     * const second_table = await prisma.second_table.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends second_tableUpdateArgs>(args: SelectSubset<T, second_tableUpdateArgs<ExtArgs>>): Prisma__second_tableClient<$Result.GetResult<Prisma.$second_tablePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Second_tables.
     * @param {second_tableDeleteManyArgs} args - Arguments to filter Second_tables to delete.
     * @example
     * // Delete a few Second_tables
     * const { count } = await prisma.second_table.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends second_tableDeleteManyArgs>(args?: SelectSubset<T, second_tableDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Second_tables.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {second_tableUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Second_tables
     * const second_table = await prisma.second_table.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends second_tableUpdateManyArgs>(args: SelectSubset<T, second_tableUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Second_tables and returns the data updated in the database.
     * @param {second_tableUpdateManyAndReturnArgs} args - Arguments to update many Second_tables.
     * @example
     * // Update many Second_tables
     * const second_table = await prisma.second_table.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Second_tables and only return the `id_second_table`
     * const second_tableWithId_second_tableOnly = await prisma.second_table.updateManyAndReturn({
     *   select: { id_second_table: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends second_tableUpdateManyAndReturnArgs>(args: SelectSubset<T, second_tableUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$second_tablePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Second_table.
     * @param {second_tableUpsertArgs} args - Arguments to update or create a Second_table.
     * @example
     * // Update or create a Second_table
     * const second_table = await prisma.second_table.upsert({
     *   create: {
     *     // ... data to create a Second_table
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Second_table we want to update
     *   }
     * })
     */
    upsert<T extends second_tableUpsertArgs>(args: SelectSubset<T, second_tableUpsertArgs<ExtArgs>>): Prisma__second_tableClient<$Result.GetResult<Prisma.$second_tablePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Second_tables.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {second_tableCountArgs} args - Arguments to filter Second_tables to count.
     * @example
     * // Count the number of Second_tables
     * const count = await prisma.second_table.count({
     *   where: {
     *     // ... the filter for the Second_tables we want to count
     *   }
     * })
    **/
    count<T extends second_tableCountArgs>(
      args?: Subset<T, second_tableCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Second_tableCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Second_table.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Second_tableAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Second_tableAggregateArgs>(args: Subset<T, Second_tableAggregateArgs>): Prisma.PrismaPromise<GetSecond_tableAggregateType<T>>

    /**
     * Group by Second_table.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {second_tableGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends second_tableGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: second_tableGroupByArgs['orderBy'] }
        : { orderBy?: second_tableGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, second_tableGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSecond_tableGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the second_table model
   */
  readonly fields: second_tableFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for second_table.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__second_tableClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    first_table<T extends second_table$first_tableArgs<ExtArgs> = {}>(args?: Subset<T, second_table$first_tableArgs<ExtArgs>>): Prisma__first_tableClient<$Result.GetResult<Prisma.$first_tablePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the second_table model
   */
  interface second_tableFieldRefs {
    readonly id_second_table: FieldRef<"second_table", 'Int'>
    readonly story_char: FieldRef<"second_table", 'String'>
    readonly colum_creada_para_el_fk_con_first_table_fk: FieldRef<"second_table", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * second_table findUnique
   */
  export type second_tableFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the second_table
     */
    select?: second_tableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the second_table
     */
    omit?: second_tableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: second_tableInclude<ExtArgs> | null
    /**
     * Filter, which second_table to fetch.
     */
    where: second_tableWhereUniqueInput
  }

  /**
   * second_table findUniqueOrThrow
   */
  export type second_tableFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the second_table
     */
    select?: second_tableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the second_table
     */
    omit?: second_tableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: second_tableInclude<ExtArgs> | null
    /**
     * Filter, which second_table to fetch.
     */
    where: second_tableWhereUniqueInput
  }

  /**
   * second_table findFirst
   */
  export type second_tableFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the second_table
     */
    select?: second_tableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the second_table
     */
    omit?: second_tableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: second_tableInclude<ExtArgs> | null
    /**
     * Filter, which second_table to fetch.
     */
    where?: second_tableWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of second_tables to fetch.
     */
    orderBy?: second_tableOrderByWithRelationInput | second_tableOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for second_tables.
     */
    cursor?: second_tableWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` second_tables from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` second_tables.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of second_tables.
     */
    distinct?: Second_tableScalarFieldEnum | Second_tableScalarFieldEnum[]
  }

  /**
   * second_table findFirstOrThrow
   */
  export type second_tableFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the second_table
     */
    select?: second_tableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the second_table
     */
    omit?: second_tableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: second_tableInclude<ExtArgs> | null
    /**
     * Filter, which second_table to fetch.
     */
    where?: second_tableWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of second_tables to fetch.
     */
    orderBy?: second_tableOrderByWithRelationInput | second_tableOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for second_tables.
     */
    cursor?: second_tableWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` second_tables from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` second_tables.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of second_tables.
     */
    distinct?: Second_tableScalarFieldEnum | Second_tableScalarFieldEnum[]
  }

  /**
   * second_table findMany
   */
  export type second_tableFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the second_table
     */
    select?: second_tableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the second_table
     */
    omit?: second_tableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: second_tableInclude<ExtArgs> | null
    /**
     * Filter, which second_tables to fetch.
     */
    where?: second_tableWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of second_tables to fetch.
     */
    orderBy?: second_tableOrderByWithRelationInput | second_tableOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing second_tables.
     */
    cursor?: second_tableWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` second_tables from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` second_tables.
     */
    skip?: number
    distinct?: Second_tableScalarFieldEnum | Second_tableScalarFieldEnum[]
  }

  /**
   * second_table create
   */
  export type second_tableCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the second_table
     */
    select?: second_tableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the second_table
     */
    omit?: second_tableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: second_tableInclude<ExtArgs> | null
    /**
     * The data needed to create a second_table.
     */
    data?: XOR<second_tableCreateInput, second_tableUncheckedCreateInput>
  }

  /**
   * second_table createMany
   */
  export type second_tableCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many second_tables.
     */
    data: second_tableCreateManyInput | second_tableCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * second_table createManyAndReturn
   */
  export type second_tableCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the second_table
     */
    select?: second_tableSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the second_table
     */
    omit?: second_tableOmit<ExtArgs> | null
    /**
     * The data used to create many second_tables.
     */
    data: second_tableCreateManyInput | second_tableCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: second_tableIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * second_table update
   */
  export type second_tableUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the second_table
     */
    select?: second_tableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the second_table
     */
    omit?: second_tableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: second_tableInclude<ExtArgs> | null
    /**
     * The data needed to update a second_table.
     */
    data: XOR<second_tableUpdateInput, second_tableUncheckedUpdateInput>
    /**
     * Choose, which second_table to update.
     */
    where: second_tableWhereUniqueInput
  }

  /**
   * second_table updateMany
   */
  export type second_tableUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update second_tables.
     */
    data: XOR<second_tableUpdateManyMutationInput, second_tableUncheckedUpdateManyInput>
    /**
     * Filter which second_tables to update
     */
    where?: second_tableWhereInput
    /**
     * Limit how many second_tables to update.
     */
    limit?: number
  }

  /**
   * second_table updateManyAndReturn
   */
  export type second_tableUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the second_table
     */
    select?: second_tableSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the second_table
     */
    omit?: second_tableOmit<ExtArgs> | null
    /**
     * The data used to update second_tables.
     */
    data: XOR<second_tableUpdateManyMutationInput, second_tableUncheckedUpdateManyInput>
    /**
     * Filter which second_tables to update
     */
    where?: second_tableWhereInput
    /**
     * Limit how many second_tables to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: second_tableIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * second_table upsert
   */
  export type second_tableUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the second_table
     */
    select?: second_tableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the second_table
     */
    omit?: second_tableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: second_tableInclude<ExtArgs> | null
    /**
     * The filter to search for the second_table to update in case it exists.
     */
    where: second_tableWhereUniqueInput
    /**
     * In case the second_table found by the `where` argument doesn't exist, create a new second_table with this data.
     */
    create: XOR<second_tableCreateInput, second_tableUncheckedCreateInput>
    /**
     * In case the second_table was found with the provided `where` argument, update it with this data.
     */
    update: XOR<second_tableUpdateInput, second_tableUncheckedUpdateInput>
  }

  /**
   * second_table delete
   */
  export type second_tableDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the second_table
     */
    select?: second_tableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the second_table
     */
    omit?: second_tableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: second_tableInclude<ExtArgs> | null
    /**
     * Filter which second_table to delete.
     */
    where: second_tableWhereUniqueInput
  }

  /**
   * second_table deleteMany
   */
  export type second_tableDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which second_tables to delete
     */
    where?: second_tableWhereInput
    /**
     * Limit how many second_tables to delete.
     */
    limit?: number
  }

  /**
   * second_table.first_table
   */
  export type second_table$first_tableArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the first_table
     */
    select?: first_tableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the first_table
     */
    omit?: first_tableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: first_tableInclude<ExtArgs> | null
    where?: first_tableWhereInput
  }

  /**
   * second_table without action
   */
  export type second_tableDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the second_table
     */
    select?: second_tableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the second_table
     */
    omit?: second_tableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: second_tableInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const First_tableScalarFieldEnum: {
    id_first_table: 'id_first_table',
    name_char: 'name_char'
  };

  export type First_tableScalarFieldEnum = (typeof First_tableScalarFieldEnum)[keyof typeof First_tableScalarFieldEnum]


  export const Second_tableScalarFieldEnum: {
    id_second_table: 'id_second_table',
    story_char: 'story_char',
    colum_creada_para_el_fk_con_first_table_fk: 'colum_creada_para_el_fk_con_first_table_fk'
  };

  export type Second_tableScalarFieldEnum = (typeof Second_tableScalarFieldEnum)[keyof typeof Second_tableScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type first_tableWhereInput = {
    AND?: first_tableWhereInput | first_tableWhereInput[]
    OR?: first_tableWhereInput[]
    NOT?: first_tableWhereInput | first_tableWhereInput[]
    id_first_table?: IntFilter<"first_table"> | number
    name_char?: StringFilter<"first_table"> | string
    second_table?: Second_tableListRelationFilter
  }

  export type first_tableOrderByWithRelationInput = {
    id_first_table?: SortOrder
    name_char?: SortOrder
    second_table?: second_tableOrderByRelationAggregateInput
  }

  export type first_tableWhereUniqueInput = Prisma.AtLeast<{
    id_first_table?: number
    AND?: first_tableWhereInput | first_tableWhereInput[]
    OR?: first_tableWhereInput[]
    NOT?: first_tableWhereInput | first_tableWhereInput[]
    name_char?: StringFilter<"first_table"> | string
    second_table?: Second_tableListRelationFilter
  }, "id_first_table">

  export type first_tableOrderByWithAggregationInput = {
    id_first_table?: SortOrder
    name_char?: SortOrder
    _count?: first_tableCountOrderByAggregateInput
    _avg?: first_tableAvgOrderByAggregateInput
    _max?: first_tableMaxOrderByAggregateInput
    _min?: first_tableMinOrderByAggregateInput
    _sum?: first_tableSumOrderByAggregateInput
  }

  export type first_tableScalarWhereWithAggregatesInput = {
    AND?: first_tableScalarWhereWithAggregatesInput | first_tableScalarWhereWithAggregatesInput[]
    OR?: first_tableScalarWhereWithAggregatesInput[]
    NOT?: first_tableScalarWhereWithAggregatesInput | first_tableScalarWhereWithAggregatesInput[]
    id_first_table?: IntWithAggregatesFilter<"first_table"> | number
    name_char?: StringWithAggregatesFilter<"first_table"> | string
  }

  export type second_tableWhereInput = {
    AND?: second_tableWhereInput | second_tableWhereInput[]
    OR?: second_tableWhereInput[]
    NOT?: second_tableWhereInput | second_tableWhereInput[]
    id_second_table?: IntFilter<"second_table"> | number
    story_char?: StringNullableFilter<"second_table"> | string | null
    colum_creada_para_el_fk_con_first_table_fk?: IntNullableFilter<"second_table"> | number | null
    first_table?: XOR<First_tableNullableScalarRelationFilter, first_tableWhereInput> | null
  }

  export type second_tableOrderByWithRelationInput = {
    id_second_table?: SortOrder
    story_char?: SortOrderInput | SortOrder
    colum_creada_para_el_fk_con_first_table_fk?: SortOrderInput | SortOrder
    first_table?: first_tableOrderByWithRelationInput
  }

  export type second_tableWhereUniqueInput = Prisma.AtLeast<{
    id_second_table?: number
    AND?: second_tableWhereInput | second_tableWhereInput[]
    OR?: second_tableWhereInput[]
    NOT?: second_tableWhereInput | second_tableWhereInput[]
    story_char?: StringNullableFilter<"second_table"> | string | null
    colum_creada_para_el_fk_con_first_table_fk?: IntNullableFilter<"second_table"> | number | null
    first_table?: XOR<First_tableNullableScalarRelationFilter, first_tableWhereInput> | null
  }, "id_second_table">

  export type second_tableOrderByWithAggregationInput = {
    id_second_table?: SortOrder
    story_char?: SortOrderInput | SortOrder
    colum_creada_para_el_fk_con_first_table_fk?: SortOrderInput | SortOrder
    _count?: second_tableCountOrderByAggregateInput
    _avg?: second_tableAvgOrderByAggregateInput
    _max?: second_tableMaxOrderByAggregateInput
    _min?: second_tableMinOrderByAggregateInput
    _sum?: second_tableSumOrderByAggregateInput
  }

  export type second_tableScalarWhereWithAggregatesInput = {
    AND?: second_tableScalarWhereWithAggregatesInput | second_tableScalarWhereWithAggregatesInput[]
    OR?: second_tableScalarWhereWithAggregatesInput[]
    NOT?: second_tableScalarWhereWithAggregatesInput | second_tableScalarWhereWithAggregatesInput[]
    id_second_table?: IntWithAggregatesFilter<"second_table"> | number
    story_char?: StringNullableWithAggregatesFilter<"second_table"> | string | null
    colum_creada_para_el_fk_con_first_table_fk?: IntNullableWithAggregatesFilter<"second_table"> | number | null
  }

  export type first_tableCreateInput = {
    name_char?: string
    second_table?: second_tableCreateNestedManyWithoutFirst_tableInput
  }

  export type first_tableUncheckedCreateInput = {
    id_first_table?: number
    name_char?: string
    second_table?: second_tableUncheckedCreateNestedManyWithoutFirst_tableInput
  }

  export type first_tableUpdateInput = {
    name_char?: StringFieldUpdateOperationsInput | string
    second_table?: second_tableUpdateManyWithoutFirst_tableNestedInput
  }

  export type first_tableUncheckedUpdateInput = {
    id_first_table?: IntFieldUpdateOperationsInput | number
    name_char?: StringFieldUpdateOperationsInput | string
    second_table?: second_tableUncheckedUpdateManyWithoutFirst_tableNestedInput
  }

  export type first_tableCreateManyInput = {
    id_first_table?: number
    name_char?: string
  }

  export type first_tableUpdateManyMutationInput = {
    name_char?: StringFieldUpdateOperationsInput | string
  }

  export type first_tableUncheckedUpdateManyInput = {
    id_first_table?: IntFieldUpdateOperationsInput | number
    name_char?: StringFieldUpdateOperationsInput | string
  }

  export type second_tableCreateInput = {
    story_char?: string | null
    first_table?: first_tableCreateNestedOneWithoutSecond_tableInput
  }

  export type second_tableUncheckedCreateInput = {
    id_second_table?: number
    story_char?: string | null
    colum_creada_para_el_fk_con_first_table_fk?: number | null
  }

  export type second_tableUpdateInput = {
    story_char?: NullableStringFieldUpdateOperationsInput | string | null
    first_table?: first_tableUpdateOneWithoutSecond_tableNestedInput
  }

  export type second_tableUncheckedUpdateInput = {
    id_second_table?: IntFieldUpdateOperationsInput | number
    story_char?: NullableStringFieldUpdateOperationsInput | string | null
    colum_creada_para_el_fk_con_first_table_fk?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type second_tableCreateManyInput = {
    id_second_table?: number
    story_char?: string | null
    colum_creada_para_el_fk_con_first_table_fk?: number | null
  }

  export type second_tableUpdateManyMutationInput = {
    story_char?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type second_tableUncheckedUpdateManyInput = {
    id_second_table?: IntFieldUpdateOperationsInput | number
    story_char?: NullableStringFieldUpdateOperationsInput | string | null
    colum_creada_para_el_fk_con_first_table_fk?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type Second_tableListRelationFilter = {
    every?: second_tableWhereInput
    some?: second_tableWhereInput
    none?: second_tableWhereInput
  }

  export type second_tableOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type first_tableCountOrderByAggregateInput = {
    id_first_table?: SortOrder
    name_char?: SortOrder
  }

  export type first_tableAvgOrderByAggregateInput = {
    id_first_table?: SortOrder
  }

  export type first_tableMaxOrderByAggregateInput = {
    id_first_table?: SortOrder
    name_char?: SortOrder
  }

  export type first_tableMinOrderByAggregateInput = {
    id_first_table?: SortOrder
    name_char?: SortOrder
  }

  export type first_tableSumOrderByAggregateInput = {
    id_first_table?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type First_tableNullableScalarRelationFilter = {
    is?: first_tableWhereInput | null
    isNot?: first_tableWhereInput | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type second_tableCountOrderByAggregateInput = {
    id_second_table?: SortOrder
    story_char?: SortOrder
    colum_creada_para_el_fk_con_first_table_fk?: SortOrder
  }

  export type second_tableAvgOrderByAggregateInput = {
    id_second_table?: SortOrder
    colum_creada_para_el_fk_con_first_table_fk?: SortOrder
  }

  export type second_tableMaxOrderByAggregateInput = {
    id_second_table?: SortOrder
    story_char?: SortOrder
    colum_creada_para_el_fk_con_first_table_fk?: SortOrder
  }

  export type second_tableMinOrderByAggregateInput = {
    id_second_table?: SortOrder
    story_char?: SortOrder
    colum_creada_para_el_fk_con_first_table_fk?: SortOrder
  }

  export type second_tableSumOrderByAggregateInput = {
    id_second_table?: SortOrder
    colum_creada_para_el_fk_con_first_table_fk?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type second_tableCreateNestedManyWithoutFirst_tableInput = {
    create?: XOR<second_tableCreateWithoutFirst_tableInput, second_tableUncheckedCreateWithoutFirst_tableInput> | second_tableCreateWithoutFirst_tableInput[] | second_tableUncheckedCreateWithoutFirst_tableInput[]
    connectOrCreate?: second_tableCreateOrConnectWithoutFirst_tableInput | second_tableCreateOrConnectWithoutFirst_tableInput[]
    createMany?: second_tableCreateManyFirst_tableInputEnvelope
    connect?: second_tableWhereUniqueInput | second_tableWhereUniqueInput[]
  }

  export type second_tableUncheckedCreateNestedManyWithoutFirst_tableInput = {
    create?: XOR<second_tableCreateWithoutFirst_tableInput, second_tableUncheckedCreateWithoutFirst_tableInput> | second_tableCreateWithoutFirst_tableInput[] | second_tableUncheckedCreateWithoutFirst_tableInput[]
    connectOrCreate?: second_tableCreateOrConnectWithoutFirst_tableInput | second_tableCreateOrConnectWithoutFirst_tableInput[]
    createMany?: second_tableCreateManyFirst_tableInputEnvelope
    connect?: second_tableWhereUniqueInput | second_tableWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type second_tableUpdateManyWithoutFirst_tableNestedInput = {
    create?: XOR<second_tableCreateWithoutFirst_tableInput, second_tableUncheckedCreateWithoutFirst_tableInput> | second_tableCreateWithoutFirst_tableInput[] | second_tableUncheckedCreateWithoutFirst_tableInput[]
    connectOrCreate?: second_tableCreateOrConnectWithoutFirst_tableInput | second_tableCreateOrConnectWithoutFirst_tableInput[]
    upsert?: second_tableUpsertWithWhereUniqueWithoutFirst_tableInput | second_tableUpsertWithWhereUniqueWithoutFirst_tableInput[]
    createMany?: second_tableCreateManyFirst_tableInputEnvelope
    set?: second_tableWhereUniqueInput | second_tableWhereUniqueInput[]
    disconnect?: second_tableWhereUniqueInput | second_tableWhereUniqueInput[]
    delete?: second_tableWhereUniqueInput | second_tableWhereUniqueInput[]
    connect?: second_tableWhereUniqueInput | second_tableWhereUniqueInput[]
    update?: second_tableUpdateWithWhereUniqueWithoutFirst_tableInput | second_tableUpdateWithWhereUniqueWithoutFirst_tableInput[]
    updateMany?: second_tableUpdateManyWithWhereWithoutFirst_tableInput | second_tableUpdateManyWithWhereWithoutFirst_tableInput[]
    deleteMany?: second_tableScalarWhereInput | second_tableScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type second_tableUncheckedUpdateManyWithoutFirst_tableNestedInput = {
    create?: XOR<second_tableCreateWithoutFirst_tableInput, second_tableUncheckedCreateWithoutFirst_tableInput> | second_tableCreateWithoutFirst_tableInput[] | second_tableUncheckedCreateWithoutFirst_tableInput[]
    connectOrCreate?: second_tableCreateOrConnectWithoutFirst_tableInput | second_tableCreateOrConnectWithoutFirst_tableInput[]
    upsert?: second_tableUpsertWithWhereUniqueWithoutFirst_tableInput | second_tableUpsertWithWhereUniqueWithoutFirst_tableInput[]
    createMany?: second_tableCreateManyFirst_tableInputEnvelope
    set?: second_tableWhereUniqueInput | second_tableWhereUniqueInput[]
    disconnect?: second_tableWhereUniqueInput | second_tableWhereUniqueInput[]
    delete?: second_tableWhereUniqueInput | second_tableWhereUniqueInput[]
    connect?: second_tableWhereUniqueInput | second_tableWhereUniqueInput[]
    update?: second_tableUpdateWithWhereUniqueWithoutFirst_tableInput | second_tableUpdateWithWhereUniqueWithoutFirst_tableInput[]
    updateMany?: second_tableUpdateManyWithWhereWithoutFirst_tableInput | second_tableUpdateManyWithWhereWithoutFirst_tableInput[]
    deleteMany?: second_tableScalarWhereInput | second_tableScalarWhereInput[]
  }

  export type first_tableCreateNestedOneWithoutSecond_tableInput = {
    create?: XOR<first_tableCreateWithoutSecond_tableInput, first_tableUncheckedCreateWithoutSecond_tableInput>
    connectOrCreate?: first_tableCreateOrConnectWithoutSecond_tableInput
    connect?: first_tableWhereUniqueInput
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type first_tableUpdateOneWithoutSecond_tableNestedInput = {
    create?: XOR<first_tableCreateWithoutSecond_tableInput, first_tableUncheckedCreateWithoutSecond_tableInput>
    connectOrCreate?: first_tableCreateOrConnectWithoutSecond_tableInput
    upsert?: first_tableUpsertWithoutSecond_tableInput
    disconnect?: first_tableWhereInput | boolean
    delete?: first_tableWhereInput | boolean
    connect?: first_tableWhereUniqueInput
    update?: XOR<XOR<first_tableUpdateToOneWithWhereWithoutSecond_tableInput, first_tableUpdateWithoutSecond_tableInput>, first_tableUncheckedUpdateWithoutSecond_tableInput>
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type second_tableCreateWithoutFirst_tableInput = {
    story_char?: string | null
  }

  export type second_tableUncheckedCreateWithoutFirst_tableInput = {
    id_second_table?: number
    story_char?: string | null
  }

  export type second_tableCreateOrConnectWithoutFirst_tableInput = {
    where: second_tableWhereUniqueInput
    create: XOR<second_tableCreateWithoutFirst_tableInput, second_tableUncheckedCreateWithoutFirst_tableInput>
  }

  export type second_tableCreateManyFirst_tableInputEnvelope = {
    data: second_tableCreateManyFirst_tableInput | second_tableCreateManyFirst_tableInput[]
    skipDuplicates?: boolean
  }

  export type second_tableUpsertWithWhereUniqueWithoutFirst_tableInput = {
    where: second_tableWhereUniqueInput
    update: XOR<second_tableUpdateWithoutFirst_tableInput, second_tableUncheckedUpdateWithoutFirst_tableInput>
    create: XOR<second_tableCreateWithoutFirst_tableInput, second_tableUncheckedCreateWithoutFirst_tableInput>
  }

  export type second_tableUpdateWithWhereUniqueWithoutFirst_tableInput = {
    where: second_tableWhereUniqueInput
    data: XOR<second_tableUpdateWithoutFirst_tableInput, second_tableUncheckedUpdateWithoutFirst_tableInput>
  }

  export type second_tableUpdateManyWithWhereWithoutFirst_tableInput = {
    where: second_tableScalarWhereInput
    data: XOR<second_tableUpdateManyMutationInput, second_tableUncheckedUpdateManyWithoutFirst_tableInput>
  }

  export type second_tableScalarWhereInput = {
    AND?: second_tableScalarWhereInput | second_tableScalarWhereInput[]
    OR?: second_tableScalarWhereInput[]
    NOT?: second_tableScalarWhereInput | second_tableScalarWhereInput[]
    id_second_table?: IntFilter<"second_table"> | number
    story_char?: StringNullableFilter<"second_table"> | string | null
    colum_creada_para_el_fk_con_first_table_fk?: IntNullableFilter<"second_table"> | number | null
  }

  export type first_tableCreateWithoutSecond_tableInput = {
    name_char?: string
  }

  export type first_tableUncheckedCreateWithoutSecond_tableInput = {
    id_first_table?: number
    name_char?: string
  }

  export type first_tableCreateOrConnectWithoutSecond_tableInput = {
    where: first_tableWhereUniqueInput
    create: XOR<first_tableCreateWithoutSecond_tableInput, first_tableUncheckedCreateWithoutSecond_tableInput>
  }

  export type first_tableUpsertWithoutSecond_tableInput = {
    update: XOR<first_tableUpdateWithoutSecond_tableInput, first_tableUncheckedUpdateWithoutSecond_tableInput>
    create: XOR<first_tableCreateWithoutSecond_tableInput, first_tableUncheckedCreateWithoutSecond_tableInput>
    where?: first_tableWhereInput
  }

  export type first_tableUpdateToOneWithWhereWithoutSecond_tableInput = {
    where?: first_tableWhereInput
    data: XOR<first_tableUpdateWithoutSecond_tableInput, first_tableUncheckedUpdateWithoutSecond_tableInput>
  }

  export type first_tableUpdateWithoutSecond_tableInput = {
    name_char?: StringFieldUpdateOperationsInput | string
  }

  export type first_tableUncheckedUpdateWithoutSecond_tableInput = {
    id_first_table?: IntFieldUpdateOperationsInput | number
    name_char?: StringFieldUpdateOperationsInput | string
  }

  export type second_tableCreateManyFirst_tableInput = {
    id_second_table?: number
    story_char?: string | null
  }

  export type second_tableUpdateWithoutFirst_tableInput = {
    story_char?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type second_tableUncheckedUpdateWithoutFirst_tableInput = {
    id_second_table?: IntFieldUpdateOperationsInput | number
    story_char?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type second_tableUncheckedUpdateManyWithoutFirst_tableInput = {
    id_second_table?: IntFieldUpdateOperationsInput | number
    story_char?: NullableStringFieldUpdateOperationsInput | string | null
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}