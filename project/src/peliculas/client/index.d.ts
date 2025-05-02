
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
 * Model Pelicula
 * 
 */
export type Pelicula = $Result.DefaultSelection<Prisma.$PeliculaPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Peliculas
 * const peliculas = await prisma.pelicula.findMany()
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
   * // Fetch zero or more Peliculas
   * const peliculas = await prisma.pelicula.findMany()
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
   * `prisma.pelicula`: Exposes CRUD operations for the **Pelicula** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Peliculas
    * const peliculas = await prisma.pelicula.findMany()
    * ```
    */
  get pelicula(): Prisma.PeliculaDelegate<ExtArgs, ClientOptions>;
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
    Pelicula: 'Pelicula'
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
      modelProps: "pelicula"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Pelicula: {
        payload: Prisma.$PeliculaPayload<ExtArgs>
        fields: Prisma.PeliculaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PeliculaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PeliculaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PeliculaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PeliculaPayload>
          }
          findFirst: {
            args: Prisma.PeliculaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PeliculaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PeliculaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PeliculaPayload>
          }
          findMany: {
            args: Prisma.PeliculaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PeliculaPayload>[]
          }
          create: {
            args: Prisma.PeliculaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PeliculaPayload>
          }
          createMany: {
            args: Prisma.PeliculaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PeliculaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PeliculaPayload>[]
          }
          delete: {
            args: Prisma.PeliculaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PeliculaPayload>
          }
          update: {
            args: Prisma.PeliculaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PeliculaPayload>
          }
          deleteMany: {
            args: Prisma.PeliculaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PeliculaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PeliculaUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PeliculaPayload>[]
          }
          upsert: {
            args: Prisma.PeliculaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PeliculaPayload>
          }
          aggregate: {
            args: Prisma.PeliculaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePelicula>
          }
          groupBy: {
            args: Prisma.PeliculaGroupByArgs<ExtArgs>
            result: $Utils.Optional<PeliculaGroupByOutputType>[]
          }
          count: {
            args: Prisma.PeliculaCountArgs<ExtArgs>
            result: $Utils.Optional<PeliculaCountAggregateOutputType> | number
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
    pelicula?: PeliculaOmit
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
   * Models
   */

  /**
   * Model Pelicula
   */

  export type AggregatePelicula = {
    _count: PeliculaCountAggregateOutputType | null
    _avg: PeliculaAvgAggregateOutputType | null
    _sum: PeliculaSumAggregateOutputType | null
    _min: PeliculaMinAggregateOutputType | null
    _max: PeliculaMaxAggregateOutputType | null
  }

  export type PeliculaAvgAggregateOutputType = {
    id: number | null
    duracion: number | null
  }

  export type PeliculaSumAggregateOutputType = {
    id: number | null
    duracion: number | null
  }

  export type PeliculaMinAggregateOutputType = {
    id: number | null
    titulo: string | null
    director: string | null
    genero: string | null
    duracion: number | null
    actores: string | null
    produccion: string | null
  }

  export type PeliculaMaxAggregateOutputType = {
    id: number | null
    titulo: string | null
    director: string | null
    genero: string | null
    duracion: number | null
    actores: string | null
    produccion: string | null
  }

  export type PeliculaCountAggregateOutputType = {
    id: number
    titulo: number
    director: number
    genero: number
    duracion: number
    actores: number
    produccion: number
    _all: number
  }


  export type PeliculaAvgAggregateInputType = {
    id?: true
    duracion?: true
  }

  export type PeliculaSumAggregateInputType = {
    id?: true
    duracion?: true
  }

  export type PeliculaMinAggregateInputType = {
    id?: true
    titulo?: true
    director?: true
    genero?: true
    duracion?: true
    actores?: true
    produccion?: true
  }

  export type PeliculaMaxAggregateInputType = {
    id?: true
    titulo?: true
    director?: true
    genero?: true
    duracion?: true
    actores?: true
    produccion?: true
  }

  export type PeliculaCountAggregateInputType = {
    id?: true
    titulo?: true
    director?: true
    genero?: true
    duracion?: true
    actores?: true
    produccion?: true
    _all?: true
  }

  export type PeliculaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Pelicula to aggregate.
     */
    where?: PeliculaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Peliculas to fetch.
     */
    orderBy?: PeliculaOrderByWithRelationInput | PeliculaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PeliculaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Peliculas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Peliculas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Peliculas
    **/
    _count?: true | PeliculaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PeliculaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PeliculaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PeliculaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PeliculaMaxAggregateInputType
  }

  export type GetPeliculaAggregateType<T extends PeliculaAggregateArgs> = {
        [P in keyof T & keyof AggregatePelicula]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePelicula[P]>
      : GetScalarType<T[P], AggregatePelicula[P]>
  }




  export type PeliculaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PeliculaWhereInput
    orderBy?: PeliculaOrderByWithAggregationInput | PeliculaOrderByWithAggregationInput[]
    by: PeliculaScalarFieldEnum[] | PeliculaScalarFieldEnum
    having?: PeliculaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PeliculaCountAggregateInputType | true
    _avg?: PeliculaAvgAggregateInputType
    _sum?: PeliculaSumAggregateInputType
    _min?: PeliculaMinAggregateInputType
    _max?: PeliculaMaxAggregateInputType
  }

  export type PeliculaGroupByOutputType = {
    id: number
    titulo: string
    director: string
    genero: string
    duracion: number
    actores: string
    produccion: string
    _count: PeliculaCountAggregateOutputType | null
    _avg: PeliculaAvgAggregateOutputType | null
    _sum: PeliculaSumAggregateOutputType | null
    _min: PeliculaMinAggregateOutputType | null
    _max: PeliculaMaxAggregateOutputType | null
  }

  type GetPeliculaGroupByPayload<T extends PeliculaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PeliculaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PeliculaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PeliculaGroupByOutputType[P]>
            : GetScalarType<T[P], PeliculaGroupByOutputType[P]>
        }
      >
    >


  export type PeliculaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    titulo?: boolean
    director?: boolean
    genero?: boolean
    duracion?: boolean
    actores?: boolean
    produccion?: boolean
  }, ExtArgs["result"]["pelicula"]>

  export type PeliculaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    titulo?: boolean
    director?: boolean
    genero?: boolean
    duracion?: boolean
    actores?: boolean
    produccion?: boolean
  }, ExtArgs["result"]["pelicula"]>

  export type PeliculaSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    titulo?: boolean
    director?: boolean
    genero?: boolean
    duracion?: boolean
    actores?: boolean
    produccion?: boolean
  }, ExtArgs["result"]["pelicula"]>

  export type PeliculaSelectScalar = {
    id?: boolean
    titulo?: boolean
    director?: boolean
    genero?: boolean
    duracion?: boolean
    actores?: boolean
    produccion?: boolean
  }

  export type PeliculaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "titulo" | "director" | "genero" | "duracion" | "actores" | "produccion", ExtArgs["result"]["pelicula"]>

  export type $PeliculaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Pelicula"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      titulo: string
      director: string
      genero: string
      duracion: number
      actores: string
      produccion: string
    }, ExtArgs["result"]["pelicula"]>
    composites: {}
  }

  type PeliculaGetPayload<S extends boolean | null | undefined | PeliculaDefaultArgs> = $Result.GetResult<Prisma.$PeliculaPayload, S>

  type PeliculaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PeliculaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PeliculaCountAggregateInputType | true
    }

  export interface PeliculaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Pelicula'], meta: { name: 'Pelicula' } }
    /**
     * Find zero or one Pelicula that matches the filter.
     * @param {PeliculaFindUniqueArgs} args - Arguments to find a Pelicula
     * @example
     * // Get one Pelicula
     * const pelicula = await prisma.pelicula.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PeliculaFindUniqueArgs>(args: SelectSubset<T, PeliculaFindUniqueArgs<ExtArgs>>): Prisma__PeliculaClient<$Result.GetResult<Prisma.$PeliculaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Pelicula that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PeliculaFindUniqueOrThrowArgs} args - Arguments to find a Pelicula
     * @example
     * // Get one Pelicula
     * const pelicula = await prisma.pelicula.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PeliculaFindUniqueOrThrowArgs>(args: SelectSubset<T, PeliculaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PeliculaClient<$Result.GetResult<Prisma.$PeliculaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Pelicula that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PeliculaFindFirstArgs} args - Arguments to find a Pelicula
     * @example
     * // Get one Pelicula
     * const pelicula = await prisma.pelicula.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PeliculaFindFirstArgs>(args?: SelectSubset<T, PeliculaFindFirstArgs<ExtArgs>>): Prisma__PeliculaClient<$Result.GetResult<Prisma.$PeliculaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Pelicula that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PeliculaFindFirstOrThrowArgs} args - Arguments to find a Pelicula
     * @example
     * // Get one Pelicula
     * const pelicula = await prisma.pelicula.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PeliculaFindFirstOrThrowArgs>(args?: SelectSubset<T, PeliculaFindFirstOrThrowArgs<ExtArgs>>): Prisma__PeliculaClient<$Result.GetResult<Prisma.$PeliculaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Peliculas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PeliculaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Peliculas
     * const peliculas = await prisma.pelicula.findMany()
     * 
     * // Get first 10 Peliculas
     * const peliculas = await prisma.pelicula.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const peliculaWithIdOnly = await prisma.pelicula.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PeliculaFindManyArgs>(args?: SelectSubset<T, PeliculaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PeliculaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Pelicula.
     * @param {PeliculaCreateArgs} args - Arguments to create a Pelicula.
     * @example
     * // Create one Pelicula
     * const Pelicula = await prisma.pelicula.create({
     *   data: {
     *     // ... data to create a Pelicula
     *   }
     * })
     * 
     */
    create<T extends PeliculaCreateArgs>(args: SelectSubset<T, PeliculaCreateArgs<ExtArgs>>): Prisma__PeliculaClient<$Result.GetResult<Prisma.$PeliculaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Peliculas.
     * @param {PeliculaCreateManyArgs} args - Arguments to create many Peliculas.
     * @example
     * // Create many Peliculas
     * const pelicula = await prisma.pelicula.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PeliculaCreateManyArgs>(args?: SelectSubset<T, PeliculaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Peliculas and returns the data saved in the database.
     * @param {PeliculaCreateManyAndReturnArgs} args - Arguments to create many Peliculas.
     * @example
     * // Create many Peliculas
     * const pelicula = await prisma.pelicula.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Peliculas and only return the `id`
     * const peliculaWithIdOnly = await prisma.pelicula.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PeliculaCreateManyAndReturnArgs>(args?: SelectSubset<T, PeliculaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PeliculaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Pelicula.
     * @param {PeliculaDeleteArgs} args - Arguments to delete one Pelicula.
     * @example
     * // Delete one Pelicula
     * const Pelicula = await prisma.pelicula.delete({
     *   where: {
     *     // ... filter to delete one Pelicula
     *   }
     * })
     * 
     */
    delete<T extends PeliculaDeleteArgs>(args: SelectSubset<T, PeliculaDeleteArgs<ExtArgs>>): Prisma__PeliculaClient<$Result.GetResult<Prisma.$PeliculaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Pelicula.
     * @param {PeliculaUpdateArgs} args - Arguments to update one Pelicula.
     * @example
     * // Update one Pelicula
     * const pelicula = await prisma.pelicula.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PeliculaUpdateArgs>(args: SelectSubset<T, PeliculaUpdateArgs<ExtArgs>>): Prisma__PeliculaClient<$Result.GetResult<Prisma.$PeliculaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Peliculas.
     * @param {PeliculaDeleteManyArgs} args - Arguments to filter Peliculas to delete.
     * @example
     * // Delete a few Peliculas
     * const { count } = await prisma.pelicula.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PeliculaDeleteManyArgs>(args?: SelectSubset<T, PeliculaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Peliculas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PeliculaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Peliculas
     * const pelicula = await prisma.pelicula.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PeliculaUpdateManyArgs>(args: SelectSubset<T, PeliculaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Peliculas and returns the data updated in the database.
     * @param {PeliculaUpdateManyAndReturnArgs} args - Arguments to update many Peliculas.
     * @example
     * // Update many Peliculas
     * const pelicula = await prisma.pelicula.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Peliculas and only return the `id`
     * const peliculaWithIdOnly = await prisma.pelicula.updateManyAndReturn({
     *   select: { id: true },
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
    updateManyAndReturn<T extends PeliculaUpdateManyAndReturnArgs>(args: SelectSubset<T, PeliculaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PeliculaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Pelicula.
     * @param {PeliculaUpsertArgs} args - Arguments to update or create a Pelicula.
     * @example
     * // Update or create a Pelicula
     * const pelicula = await prisma.pelicula.upsert({
     *   create: {
     *     // ... data to create a Pelicula
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Pelicula we want to update
     *   }
     * })
     */
    upsert<T extends PeliculaUpsertArgs>(args: SelectSubset<T, PeliculaUpsertArgs<ExtArgs>>): Prisma__PeliculaClient<$Result.GetResult<Prisma.$PeliculaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Peliculas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PeliculaCountArgs} args - Arguments to filter Peliculas to count.
     * @example
     * // Count the number of Peliculas
     * const count = await prisma.pelicula.count({
     *   where: {
     *     // ... the filter for the Peliculas we want to count
     *   }
     * })
    **/
    count<T extends PeliculaCountArgs>(
      args?: Subset<T, PeliculaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PeliculaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Pelicula.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PeliculaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PeliculaAggregateArgs>(args: Subset<T, PeliculaAggregateArgs>): Prisma.PrismaPromise<GetPeliculaAggregateType<T>>

    /**
     * Group by Pelicula.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PeliculaGroupByArgs} args - Group by arguments.
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
      T extends PeliculaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PeliculaGroupByArgs['orderBy'] }
        : { orderBy?: PeliculaGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PeliculaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPeliculaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Pelicula model
   */
  readonly fields: PeliculaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Pelicula.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PeliculaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the Pelicula model
   */
  interface PeliculaFieldRefs {
    readonly id: FieldRef<"Pelicula", 'Int'>
    readonly titulo: FieldRef<"Pelicula", 'String'>
    readonly director: FieldRef<"Pelicula", 'String'>
    readonly genero: FieldRef<"Pelicula", 'String'>
    readonly duracion: FieldRef<"Pelicula", 'Int'>
    readonly actores: FieldRef<"Pelicula", 'String'>
    readonly produccion: FieldRef<"Pelicula", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Pelicula findUnique
   */
  export type PeliculaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pelicula
     */
    select?: PeliculaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pelicula
     */
    omit?: PeliculaOmit<ExtArgs> | null
    /**
     * Filter, which Pelicula to fetch.
     */
    where: PeliculaWhereUniqueInput
  }

  /**
   * Pelicula findUniqueOrThrow
   */
  export type PeliculaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pelicula
     */
    select?: PeliculaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pelicula
     */
    omit?: PeliculaOmit<ExtArgs> | null
    /**
     * Filter, which Pelicula to fetch.
     */
    where: PeliculaWhereUniqueInput
  }

  /**
   * Pelicula findFirst
   */
  export type PeliculaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pelicula
     */
    select?: PeliculaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pelicula
     */
    omit?: PeliculaOmit<ExtArgs> | null
    /**
     * Filter, which Pelicula to fetch.
     */
    where?: PeliculaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Peliculas to fetch.
     */
    orderBy?: PeliculaOrderByWithRelationInput | PeliculaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Peliculas.
     */
    cursor?: PeliculaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Peliculas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Peliculas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Peliculas.
     */
    distinct?: PeliculaScalarFieldEnum | PeliculaScalarFieldEnum[]
  }

  /**
   * Pelicula findFirstOrThrow
   */
  export type PeliculaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pelicula
     */
    select?: PeliculaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pelicula
     */
    omit?: PeliculaOmit<ExtArgs> | null
    /**
     * Filter, which Pelicula to fetch.
     */
    where?: PeliculaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Peliculas to fetch.
     */
    orderBy?: PeliculaOrderByWithRelationInput | PeliculaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Peliculas.
     */
    cursor?: PeliculaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Peliculas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Peliculas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Peliculas.
     */
    distinct?: PeliculaScalarFieldEnum | PeliculaScalarFieldEnum[]
  }

  /**
   * Pelicula findMany
   */
  export type PeliculaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pelicula
     */
    select?: PeliculaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pelicula
     */
    omit?: PeliculaOmit<ExtArgs> | null
    /**
     * Filter, which Peliculas to fetch.
     */
    where?: PeliculaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Peliculas to fetch.
     */
    orderBy?: PeliculaOrderByWithRelationInput | PeliculaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Peliculas.
     */
    cursor?: PeliculaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Peliculas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Peliculas.
     */
    skip?: number
    distinct?: PeliculaScalarFieldEnum | PeliculaScalarFieldEnum[]
  }

  /**
   * Pelicula create
   */
  export type PeliculaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pelicula
     */
    select?: PeliculaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pelicula
     */
    omit?: PeliculaOmit<ExtArgs> | null
    /**
     * The data needed to create a Pelicula.
     */
    data: XOR<PeliculaCreateInput, PeliculaUncheckedCreateInput>
  }

  /**
   * Pelicula createMany
   */
  export type PeliculaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Peliculas.
     */
    data: PeliculaCreateManyInput | PeliculaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Pelicula createManyAndReturn
   */
  export type PeliculaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pelicula
     */
    select?: PeliculaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Pelicula
     */
    omit?: PeliculaOmit<ExtArgs> | null
    /**
     * The data used to create many Peliculas.
     */
    data: PeliculaCreateManyInput | PeliculaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Pelicula update
   */
  export type PeliculaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pelicula
     */
    select?: PeliculaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pelicula
     */
    omit?: PeliculaOmit<ExtArgs> | null
    /**
     * The data needed to update a Pelicula.
     */
    data: XOR<PeliculaUpdateInput, PeliculaUncheckedUpdateInput>
    /**
     * Choose, which Pelicula to update.
     */
    where: PeliculaWhereUniqueInput
  }

  /**
   * Pelicula updateMany
   */
  export type PeliculaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Peliculas.
     */
    data: XOR<PeliculaUpdateManyMutationInput, PeliculaUncheckedUpdateManyInput>
    /**
     * Filter which Peliculas to update
     */
    where?: PeliculaWhereInput
    /**
     * Limit how many Peliculas to update.
     */
    limit?: number
  }

  /**
   * Pelicula updateManyAndReturn
   */
  export type PeliculaUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pelicula
     */
    select?: PeliculaSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Pelicula
     */
    omit?: PeliculaOmit<ExtArgs> | null
    /**
     * The data used to update Peliculas.
     */
    data: XOR<PeliculaUpdateManyMutationInput, PeliculaUncheckedUpdateManyInput>
    /**
     * Filter which Peliculas to update
     */
    where?: PeliculaWhereInput
    /**
     * Limit how many Peliculas to update.
     */
    limit?: number
  }

  /**
   * Pelicula upsert
   */
  export type PeliculaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pelicula
     */
    select?: PeliculaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pelicula
     */
    omit?: PeliculaOmit<ExtArgs> | null
    /**
     * The filter to search for the Pelicula to update in case it exists.
     */
    where: PeliculaWhereUniqueInput
    /**
     * In case the Pelicula found by the `where` argument doesn't exist, create a new Pelicula with this data.
     */
    create: XOR<PeliculaCreateInput, PeliculaUncheckedCreateInput>
    /**
     * In case the Pelicula was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PeliculaUpdateInput, PeliculaUncheckedUpdateInput>
  }

  /**
   * Pelicula delete
   */
  export type PeliculaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pelicula
     */
    select?: PeliculaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pelicula
     */
    omit?: PeliculaOmit<ExtArgs> | null
    /**
     * Filter which Pelicula to delete.
     */
    where: PeliculaWhereUniqueInput
  }

  /**
   * Pelicula deleteMany
   */
  export type PeliculaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Peliculas to delete
     */
    where?: PeliculaWhereInput
    /**
     * Limit how many Peliculas to delete.
     */
    limit?: number
  }

  /**
   * Pelicula without action
   */
  export type PeliculaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pelicula
     */
    select?: PeliculaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pelicula
     */
    omit?: PeliculaOmit<ExtArgs> | null
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


  export const PeliculaScalarFieldEnum: {
    id: 'id',
    titulo: 'titulo',
    director: 'director',
    genero: 'genero',
    duracion: 'duracion',
    actores: 'actores',
    produccion: 'produccion'
  };

  export type PeliculaScalarFieldEnum = (typeof PeliculaScalarFieldEnum)[keyof typeof PeliculaScalarFieldEnum]


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


  export type PeliculaWhereInput = {
    AND?: PeliculaWhereInput | PeliculaWhereInput[]
    OR?: PeliculaWhereInput[]
    NOT?: PeliculaWhereInput | PeliculaWhereInput[]
    id?: IntFilter<"Pelicula"> | number
    titulo?: StringFilter<"Pelicula"> | string
    director?: StringFilter<"Pelicula"> | string
    genero?: StringFilter<"Pelicula"> | string
    duracion?: IntFilter<"Pelicula"> | number
    actores?: StringFilter<"Pelicula"> | string
    produccion?: StringFilter<"Pelicula"> | string
  }

  export type PeliculaOrderByWithRelationInput = {
    id?: SortOrder
    titulo?: SortOrder
    director?: SortOrder
    genero?: SortOrder
    duracion?: SortOrder
    actores?: SortOrder
    produccion?: SortOrder
  }

  export type PeliculaWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: PeliculaWhereInput | PeliculaWhereInput[]
    OR?: PeliculaWhereInput[]
    NOT?: PeliculaWhereInput | PeliculaWhereInput[]
    titulo?: StringFilter<"Pelicula"> | string
    director?: StringFilter<"Pelicula"> | string
    genero?: StringFilter<"Pelicula"> | string
    duracion?: IntFilter<"Pelicula"> | number
    actores?: StringFilter<"Pelicula"> | string
    produccion?: StringFilter<"Pelicula"> | string
  }, "id">

  export type PeliculaOrderByWithAggregationInput = {
    id?: SortOrder
    titulo?: SortOrder
    director?: SortOrder
    genero?: SortOrder
    duracion?: SortOrder
    actores?: SortOrder
    produccion?: SortOrder
    _count?: PeliculaCountOrderByAggregateInput
    _avg?: PeliculaAvgOrderByAggregateInput
    _max?: PeliculaMaxOrderByAggregateInput
    _min?: PeliculaMinOrderByAggregateInput
    _sum?: PeliculaSumOrderByAggregateInput
  }

  export type PeliculaScalarWhereWithAggregatesInput = {
    AND?: PeliculaScalarWhereWithAggregatesInput | PeliculaScalarWhereWithAggregatesInput[]
    OR?: PeliculaScalarWhereWithAggregatesInput[]
    NOT?: PeliculaScalarWhereWithAggregatesInput | PeliculaScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Pelicula"> | number
    titulo?: StringWithAggregatesFilter<"Pelicula"> | string
    director?: StringWithAggregatesFilter<"Pelicula"> | string
    genero?: StringWithAggregatesFilter<"Pelicula"> | string
    duracion?: IntWithAggregatesFilter<"Pelicula"> | number
    actores?: StringWithAggregatesFilter<"Pelicula"> | string
    produccion?: StringWithAggregatesFilter<"Pelicula"> | string
  }

  export type PeliculaCreateInput = {
    titulo: string
    director: string
    genero: string
    duracion: number
    actores: string
    produccion: string
  }

  export type PeliculaUncheckedCreateInput = {
    id?: number
    titulo: string
    director: string
    genero: string
    duracion: number
    actores: string
    produccion: string
  }

  export type PeliculaUpdateInput = {
    titulo?: StringFieldUpdateOperationsInput | string
    director?: StringFieldUpdateOperationsInput | string
    genero?: StringFieldUpdateOperationsInput | string
    duracion?: IntFieldUpdateOperationsInput | number
    actores?: StringFieldUpdateOperationsInput | string
    produccion?: StringFieldUpdateOperationsInput | string
  }

  export type PeliculaUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    titulo?: StringFieldUpdateOperationsInput | string
    director?: StringFieldUpdateOperationsInput | string
    genero?: StringFieldUpdateOperationsInput | string
    duracion?: IntFieldUpdateOperationsInput | number
    actores?: StringFieldUpdateOperationsInput | string
    produccion?: StringFieldUpdateOperationsInput | string
  }

  export type PeliculaCreateManyInput = {
    id?: number
    titulo: string
    director: string
    genero: string
    duracion: number
    actores: string
    produccion: string
  }

  export type PeliculaUpdateManyMutationInput = {
    titulo?: StringFieldUpdateOperationsInput | string
    director?: StringFieldUpdateOperationsInput | string
    genero?: StringFieldUpdateOperationsInput | string
    duracion?: IntFieldUpdateOperationsInput | number
    actores?: StringFieldUpdateOperationsInput | string
    produccion?: StringFieldUpdateOperationsInput | string
  }

  export type PeliculaUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    titulo?: StringFieldUpdateOperationsInput | string
    director?: StringFieldUpdateOperationsInput | string
    genero?: StringFieldUpdateOperationsInput | string
    duracion?: IntFieldUpdateOperationsInput | number
    actores?: StringFieldUpdateOperationsInput | string
    produccion?: StringFieldUpdateOperationsInput | string
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

  export type PeliculaCountOrderByAggregateInput = {
    id?: SortOrder
    titulo?: SortOrder
    director?: SortOrder
    genero?: SortOrder
    duracion?: SortOrder
    actores?: SortOrder
    produccion?: SortOrder
  }

  export type PeliculaAvgOrderByAggregateInput = {
    id?: SortOrder
    duracion?: SortOrder
  }

  export type PeliculaMaxOrderByAggregateInput = {
    id?: SortOrder
    titulo?: SortOrder
    director?: SortOrder
    genero?: SortOrder
    duracion?: SortOrder
    actores?: SortOrder
    produccion?: SortOrder
  }

  export type PeliculaMinOrderByAggregateInput = {
    id?: SortOrder
    titulo?: SortOrder
    director?: SortOrder
    genero?: SortOrder
    duracion?: SortOrder
    actores?: SortOrder
    produccion?: SortOrder
  }

  export type PeliculaSumOrderByAggregateInput = {
    id?: SortOrder
    duracion?: SortOrder
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

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
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