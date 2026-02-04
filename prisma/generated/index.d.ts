
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
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Sample
 * 
 */
export type Sample = $Result.DefaultSelection<Prisma.$SamplePayload>
/**
 * Model Exams
 * 
 */
export type Exams = $Result.DefaultSelection<Prisma.$ExamsPayload>
/**
 * Model InfectiousAgents
 * 
 */
export type InfectiousAgents = $Result.DefaultSelection<Prisma.$InfectiousAgentsPayload>
/**
 * Model Solicitation
 * 
 */
export type Solicitation = $Result.DefaultSelection<Prisma.$SolicitationPayload>
/**
 * Model SolicitationHistory
 * 
 */
export type SolicitationHistory = $Result.DefaultSelection<Prisma.$SolicitationHistoryPayload>
/**
 * Model ExamResultTemplate
 * 
 */
export type ExamResultTemplate = $Result.DefaultSelection<Prisma.$ExamResultTemplatePayload>
/**
 * Model Variables
 * 
 */
export type Variables = $Result.DefaultSelection<Prisma.$VariablesPayload>
/**
 * Model PasswordResetToken
 * 
 */
export type PasswordResetToken = $Result.DefaultSelection<Prisma.$PasswordResetTokenPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const SolicitationResult: {
  POSITIVO: 'POSITIVO',
  NEGATIVO: 'NEGATIVO',
  INDETERMINADO: 'INDETERMINADO'
};

export type SolicitationResult = (typeof SolicitationResult)[keyof typeof SolicitationResult]


export const SolicitationSampleQuality: {
  SATISFATORIA: 'SATISFATORIA',
  INSATISFATORIA: 'INSATISFATORIA'
};

export type SolicitationSampleQuality = (typeof SolicitationSampleQuality)[keyof typeof SolicitationSampleQuality]


export const Role: {
  ADMINISTRADOR: 'ADMINISTRADOR',
  VETERINARIO: 'VETERINARIO',
  PATOLOGISTA: 'PATOLOGISTA'
};

export type Role = (typeof Role)[keyof typeof Role]


export const BloodCollectionTubeColor: {
  TAMPA_ROXA: 'TAMPA_ROXA',
  TAMPA_VERMELHA: 'TAMPA_VERMELHA',
  TAMPA_CINZA: 'TAMPA_CINZA',
  TAMPA_AZUL: 'TAMPA_AZUL'
};

export type BloodCollectionTubeColor = (typeof BloodCollectionTubeColor)[keyof typeof BloodCollectionTubeColor]


export const SolicitationStatus: {
  CRIADO: 'CRIADO',
  FILTRAGEM: 'FILTRAGEM',
  EM_TRANSPORTE: 'EM_TRANSPORTE',
  EM_ANALISE: 'EM_ANALISE',
  BLOQUEADO: 'BLOQUEADO',
  FINALIZADO: 'FINALIZADO',
  CANCELADO: 'CANCELADO'
};

export type SolicitationStatus = (typeof SolicitationStatus)[keyof typeof SolicitationStatus]


export const ExamResultType: {
  PCR_QUALITATIVO: 'PCR_QUALITATIVO',
  PCR_QUANTITATIVO: 'PCR_QUANTITATIVO'
};

export type ExamResultType = (typeof ExamResultType)[keyof typeof ExamResultType]

}

export type SolicitationResult = $Enums.SolicitationResult

export const SolicitationResult: typeof $Enums.SolicitationResult

export type SolicitationSampleQuality = $Enums.SolicitationSampleQuality

export const SolicitationSampleQuality: typeof $Enums.SolicitationSampleQuality

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

export type BloodCollectionTubeColor = $Enums.BloodCollectionTubeColor

export const BloodCollectionTubeColor: typeof $Enums.BloodCollectionTubeColor

export type SolicitationStatus = $Enums.SolicitationStatus

export const SolicitationStatus: typeof $Enums.SolicitationStatus

export type ExamResultType = $Enums.ExamResultType

export const ExamResultType: typeof $Enums.ExamResultType

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
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
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.sample`: Exposes CRUD operations for the **Sample** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Samples
    * const samples = await prisma.sample.findMany()
    * ```
    */
  get sample(): Prisma.SampleDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.exams`: Exposes CRUD operations for the **Exams** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Exams
    * const exams = await prisma.exams.findMany()
    * ```
    */
  get exams(): Prisma.ExamsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.infectiousAgents`: Exposes CRUD operations for the **InfectiousAgents** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more InfectiousAgents
    * const infectiousAgents = await prisma.infectiousAgents.findMany()
    * ```
    */
  get infectiousAgents(): Prisma.InfectiousAgentsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.solicitation`: Exposes CRUD operations for the **Solicitation** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Solicitations
    * const solicitations = await prisma.solicitation.findMany()
    * ```
    */
  get solicitation(): Prisma.SolicitationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.solicitationHistory`: Exposes CRUD operations for the **SolicitationHistory** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SolicitationHistories
    * const solicitationHistories = await prisma.solicitationHistory.findMany()
    * ```
    */
  get solicitationHistory(): Prisma.SolicitationHistoryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.examResultTemplate`: Exposes CRUD operations for the **ExamResultTemplate** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ExamResultTemplates
    * const examResultTemplates = await prisma.examResultTemplate.findMany()
    * ```
    */
  get examResultTemplate(): Prisma.ExamResultTemplateDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.variables`: Exposes CRUD operations for the **Variables** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Variables
    * const variables = await prisma.variables.findMany()
    * ```
    */
  get variables(): Prisma.VariablesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.passwordResetToken`: Exposes CRUD operations for the **PasswordResetToken** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PasswordResetTokens
    * const passwordResetTokens = await prisma.passwordResetToken.findMany()
    * ```
    */
  get passwordResetToken(): Prisma.PasswordResetTokenDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.19.2
   * Query Engine version: c2990dca591cba766e3b7ef5d9e8a84796e47ab7
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
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
    User: 'User',
    Sample: 'Sample',
    Exams: 'Exams',
    InfectiousAgents: 'InfectiousAgents',
    Solicitation: 'Solicitation',
    SolicitationHistory: 'SolicitationHistory',
    ExamResultTemplate: 'ExamResultTemplate',
    Variables: 'Variables',
    PasswordResetToken: 'PasswordResetToken'
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
      modelProps: "user" | "sample" | "exams" | "infectiousAgents" | "solicitation" | "solicitationHistory" | "examResultTemplate" | "variables" | "passwordResetToken"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Sample: {
        payload: Prisma.$SamplePayload<ExtArgs>
        fields: Prisma.SampleFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SampleFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SamplePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SampleFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SamplePayload>
          }
          findFirst: {
            args: Prisma.SampleFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SamplePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SampleFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SamplePayload>
          }
          findMany: {
            args: Prisma.SampleFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SamplePayload>[]
          }
          create: {
            args: Prisma.SampleCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SamplePayload>
          }
          createMany: {
            args: Prisma.SampleCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SampleCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SamplePayload>[]
          }
          delete: {
            args: Prisma.SampleDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SamplePayload>
          }
          update: {
            args: Prisma.SampleUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SamplePayload>
          }
          deleteMany: {
            args: Prisma.SampleDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SampleUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SampleUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SamplePayload>[]
          }
          upsert: {
            args: Prisma.SampleUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SamplePayload>
          }
          aggregate: {
            args: Prisma.SampleAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSample>
          }
          groupBy: {
            args: Prisma.SampleGroupByArgs<ExtArgs>
            result: $Utils.Optional<SampleGroupByOutputType>[]
          }
          count: {
            args: Prisma.SampleCountArgs<ExtArgs>
            result: $Utils.Optional<SampleCountAggregateOutputType> | number
          }
        }
      }
      Exams: {
        payload: Prisma.$ExamsPayload<ExtArgs>
        fields: Prisma.ExamsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ExamsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExamsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ExamsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExamsPayload>
          }
          findFirst: {
            args: Prisma.ExamsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExamsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ExamsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExamsPayload>
          }
          findMany: {
            args: Prisma.ExamsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExamsPayload>[]
          }
          create: {
            args: Prisma.ExamsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExamsPayload>
          }
          createMany: {
            args: Prisma.ExamsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ExamsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExamsPayload>[]
          }
          delete: {
            args: Prisma.ExamsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExamsPayload>
          }
          update: {
            args: Prisma.ExamsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExamsPayload>
          }
          deleteMany: {
            args: Prisma.ExamsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ExamsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ExamsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExamsPayload>[]
          }
          upsert: {
            args: Prisma.ExamsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExamsPayload>
          }
          aggregate: {
            args: Prisma.ExamsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateExams>
          }
          groupBy: {
            args: Prisma.ExamsGroupByArgs<ExtArgs>
            result: $Utils.Optional<ExamsGroupByOutputType>[]
          }
          count: {
            args: Prisma.ExamsCountArgs<ExtArgs>
            result: $Utils.Optional<ExamsCountAggregateOutputType> | number
          }
        }
      }
      InfectiousAgents: {
        payload: Prisma.$InfectiousAgentsPayload<ExtArgs>
        fields: Prisma.InfectiousAgentsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.InfectiousAgentsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InfectiousAgentsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.InfectiousAgentsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InfectiousAgentsPayload>
          }
          findFirst: {
            args: Prisma.InfectiousAgentsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InfectiousAgentsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.InfectiousAgentsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InfectiousAgentsPayload>
          }
          findMany: {
            args: Prisma.InfectiousAgentsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InfectiousAgentsPayload>[]
          }
          create: {
            args: Prisma.InfectiousAgentsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InfectiousAgentsPayload>
          }
          createMany: {
            args: Prisma.InfectiousAgentsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.InfectiousAgentsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InfectiousAgentsPayload>[]
          }
          delete: {
            args: Prisma.InfectiousAgentsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InfectiousAgentsPayload>
          }
          update: {
            args: Prisma.InfectiousAgentsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InfectiousAgentsPayload>
          }
          deleteMany: {
            args: Prisma.InfectiousAgentsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.InfectiousAgentsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.InfectiousAgentsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InfectiousAgentsPayload>[]
          }
          upsert: {
            args: Prisma.InfectiousAgentsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InfectiousAgentsPayload>
          }
          aggregate: {
            args: Prisma.InfectiousAgentsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateInfectiousAgents>
          }
          groupBy: {
            args: Prisma.InfectiousAgentsGroupByArgs<ExtArgs>
            result: $Utils.Optional<InfectiousAgentsGroupByOutputType>[]
          }
          count: {
            args: Prisma.InfectiousAgentsCountArgs<ExtArgs>
            result: $Utils.Optional<InfectiousAgentsCountAggregateOutputType> | number
          }
        }
      }
      Solicitation: {
        payload: Prisma.$SolicitationPayload<ExtArgs>
        fields: Prisma.SolicitationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SolicitationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SolicitationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SolicitationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SolicitationPayload>
          }
          findFirst: {
            args: Prisma.SolicitationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SolicitationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SolicitationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SolicitationPayload>
          }
          findMany: {
            args: Prisma.SolicitationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SolicitationPayload>[]
          }
          create: {
            args: Prisma.SolicitationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SolicitationPayload>
          }
          createMany: {
            args: Prisma.SolicitationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SolicitationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SolicitationPayload>[]
          }
          delete: {
            args: Prisma.SolicitationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SolicitationPayload>
          }
          update: {
            args: Prisma.SolicitationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SolicitationPayload>
          }
          deleteMany: {
            args: Prisma.SolicitationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SolicitationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SolicitationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SolicitationPayload>[]
          }
          upsert: {
            args: Prisma.SolicitationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SolicitationPayload>
          }
          aggregate: {
            args: Prisma.SolicitationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSolicitation>
          }
          groupBy: {
            args: Prisma.SolicitationGroupByArgs<ExtArgs>
            result: $Utils.Optional<SolicitationGroupByOutputType>[]
          }
          count: {
            args: Prisma.SolicitationCountArgs<ExtArgs>
            result: $Utils.Optional<SolicitationCountAggregateOutputType> | number
          }
        }
      }
      SolicitationHistory: {
        payload: Prisma.$SolicitationHistoryPayload<ExtArgs>
        fields: Prisma.SolicitationHistoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SolicitationHistoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SolicitationHistoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SolicitationHistoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SolicitationHistoryPayload>
          }
          findFirst: {
            args: Prisma.SolicitationHistoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SolicitationHistoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SolicitationHistoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SolicitationHistoryPayload>
          }
          findMany: {
            args: Prisma.SolicitationHistoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SolicitationHistoryPayload>[]
          }
          create: {
            args: Prisma.SolicitationHistoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SolicitationHistoryPayload>
          }
          createMany: {
            args: Prisma.SolicitationHistoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SolicitationHistoryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SolicitationHistoryPayload>[]
          }
          delete: {
            args: Prisma.SolicitationHistoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SolicitationHistoryPayload>
          }
          update: {
            args: Prisma.SolicitationHistoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SolicitationHistoryPayload>
          }
          deleteMany: {
            args: Prisma.SolicitationHistoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SolicitationHistoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SolicitationHistoryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SolicitationHistoryPayload>[]
          }
          upsert: {
            args: Prisma.SolicitationHistoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SolicitationHistoryPayload>
          }
          aggregate: {
            args: Prisma.SolicitationHistoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSolicitationHistory>
          }
          groupBy: {
            args: Prisma.SolicitationHistoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<SolicitationHistoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.SolicitationHistoryCountArgs<ExtArgs>
            result: $Utils.Optional<SolicitationHistoryCountAggregateOutputType> | number
          }
        }
      }
      ExamResultTemplate: {
        payload: Prisma.$ExamResultTemplatePayload<ExtArgs>
        fields: Prisma.ExamResultTemplateFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ExamResultTemplateFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExamResultTemplatePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ExamResultTemplateFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExamResultTemplatePayload>
          }
          findFirst: {
            args: Prisma.ExamResultTemplateFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExamResultTemplatePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ExamResultTemplateFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExamResultTemplatePayload>
          }
          findMany: {
            args: Prisma.ExamResultTemplateFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExamResultTemplatePayload>[]
          }
          create: {
            args: Prisma.ExamResultTemplateCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExamResultTemplatePayload>
          }
          createMany: {
            args: Prisma.ExamResultTemplateCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ExamResultTemplateCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExamResultTemplatePayload>[]
          }
          delete: {
            args: Prisma.ExamResultTemplateDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExamResultTemplatePayload>
          }
          update: {
            args: Prisma.ExamResultTemplateUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExamResultTemplatePayload>
          }
          deleteMany: {
            args: Prisma.ExamResultTemplateDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ExamResultTemplateUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ExamResultTemplateUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExamResultTemplatePayload>[]
          }
          upsert: {
            args: Prisma.ExamResultTemplateUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExamResultTemplatePayload>
          }
          aggregate: {
            args: Prisma.ExamResultTemplateAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateExamResultTemplate>
          }
          groupBy: {
            args: Prisma.ExamResultTemplateGroupByArgs<ExtArgs>
            result: $Utils.Optional<ExamResultTemplateGroupByOutputType>[]
          }
          count: {
            args: Prisma.ExamResultTemplateCountArgs<ExtArgs>
            result: $Utils.Optional<ExamResultTemplateCountAggregateOutputType> | number
          }
        }
      }
      Variables: {
        payload: Prisma.$VariablesPayload<ExtArgs>
        fields: Prisma.VariablesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VariablesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VariablesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VariablesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VariablesPayload>
          }
          findFirst: {
            args: Prisma.VariablesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VariablesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VariablesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VariablesPayload>
          }
          findMany: {
            args: Prisma.VariablesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VariablesPayload>[]
          }
          create: {
            args: Prisma.VariablesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VariablesPayload>
          }
          createMany: {
            args: Prisma.VariablesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.VariablesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VariablesPayload>[]
          }
          delete: {
            args: Prisma.VariablesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VariablesPayload>
          }
          update: {
            args: Prisma.VariablesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VariablesPayload>
          }
          deleteMany: {
            args: Prisma.VariablesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.VariablesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.VariablesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VariablesPayload>[]
          }
          upsert: {
            args: Prisma.VariablesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VariablesPayload>
          }
          aggregate: {
            args: Prisma.VariablesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVariables>
          }
          groupBy: {
            args: Prisma.VariablesGroupByArgs<ExtArgs>
            result: $Utils.Optional<VariablesGroupByOutputType>[]
          }
          count: {
            args: Prisma.VariablesCountArgs<ExtArgs>
            result: $Utils.Optional<VariablesCountAggregateOutputType> | number
          }
        }
      }
      PasswordResetToken: {
        payload: Prisma.$PasswordResetTokenPayload<ExtArgs>
        fields: Prisma.PasswordResetTokenFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PasswordResetTokenFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PasswordResetTokenPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PasswordResetTokenFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PasswordResetTokenPayload>
          }
          findFirst: {
            args: Prisma.PasswordResetTokenFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PasswordResetTokenPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PasswordResetTokenFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PasswordResetTokenPayload>
          }
          findMany: {
            args: Prisma.PasswordResetTokenFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PasswordResetTokenPayload>[]
          }
          create: {
            args: Prisma.PasswordResetTokenCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PasswordResetTokenPayload>
          }
          createMany: {
            args: Prisma.PasswordResetTokenCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PasswordResetTokenCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PasswordResetTokenPayload>[]
          }
          delete: {
            args: Prisma.PasswordResetTokenDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PasswordResetTokenPayload>
          }
          update: {
            args: Prisma.PasswordResetTokenUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PasswordResetTokenPayload>
          }
          deleteMany: {
            args: Prisma.PasswordResetTokenDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PasswordResetTokenUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PasswordResetTokenUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PasswordResetTokenPayload>[]
          }
          upsert: {
            args: Prisma.PasswordResetTokenUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PasswordResetTokenPayload>
          }
          aggregate: {
            args: Prisma.PasswordResetTokenAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePasswordResetToken>
          }
          groupBy: {
            args: Prisma.PasswordResetTokenGroupByArgs<ExtArgs>
            result: $Utils.Optional<PasswordResetTokenGroupByOutputType>[]
          }
          count: {
            args: Prisma.PasswordResetTokenCountArgs<ExtArgs>
            result: $Utils.Optional<PasswordResetTokenCountAggregateOutputType> | number
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
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
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
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
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
    user?: UserOmit
    sample?: SampleOmit
    exams?: ExamsOmit
    infectiousAgents?: InfectiousAgentsOmit
    solicitation?: SolicitationOmit
    solicitationHistory?: SolicitationHistoryOmit
    examResultTemplate?: ExamResultTemplateOmit
    variables?: VariablesOmit
    passwordResetToken?: PasswordResetTokenOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

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
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    solicitations: number
    solicitationHistories: number
    passwordResetToken: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    solicitations?: boolean | UserCountOutputTypeCountSolicitationsArgs
    solicitationHistories?: boolean | UserCountOutputTypeCountSolicitationHistoriesArgs
    passwordResetToken?: boolean | UserCountOutputTypeCountPasswordResetTokenArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSolicitationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SolicitationWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSolicitationHistoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SolicitationHistoryWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountPasswordResetTokenArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PasswordResetTokenWhereInput
  }


  /**
   * Count Type SolicitationCountOutputType
   */

  export type SolicitationCountOutputType = {
    solicitationHistories: number
  }

  export type SolicitationCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    solicitationHistories?: boolean | SolicitationCountOutputTypeCountSolicitationHistoriesArgs
  }

  // Custom InputTypes
  /**
   * SolicitationCountOutputType without action
   */
  export type SolicitationCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SolicitationCountOutputType
     */
    select?: SolicitationCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SolicitationCountOutputType without action
   */
  export type SolicitationCountOutputTypeCountSolicitationHistoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SolicitationHistoryWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    password: string | null
    isActive: boolean | null
    role: $Enums.Role | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    password: string | null
    isActive: boolean | null
    role: $Enums.Role | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    email: number
    password: number
    isActive: number
    role: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    isActive?: true
    role?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    isActive?: true
    role?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    isActive?: true
    role?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    name: string | null
    email: string | null
    password: string | null
    isActive: boolean
    role: $Enums.Role | null
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    isActive?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    solicitations?: boolean | User$solicitationsArgs<ExtArgs>
    solicitationHistories?: boolean | User$solicitationHistoriesArgs<ExtArgs>
    passwordResetToken?: boolean | User$passwordResetTokenArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    isActive?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    isActive?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    isActive?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "password" | "isActive" | "role" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    solicitations?: boolean | User$solicitationsArgs<ExtArgs>
    solicitationHistories?: boolean | User$solicitationHistoriesArgs<ExtArgs>
    passwordResetToken?: boolean | User$passwordResetTokenArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      solicitations: Prisma.$SolicitationPayload<ExtArgs>[]
      solicitationHistories: Prisma.$SolicitationHistoryPayload<ExtArgs>[]
      passwordResetToken: Prisma.$PasswordResetTokenPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string | null
      email: string | null
      password: string | null
      isActive: boolean
      role: $Enums.Role | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
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
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
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
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    solicitations<T extends User$solicitationsArgs<ExtArgs> = {}>(args?: Subset<T, User$solicitationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SolicitationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    solicitationHistories<T extends User$solicitationHistoriesArgs<ExtArgs> = {}>(args?: Subset<T, User$solicitationHistoriesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SolicitationHistoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    passwordResetToken<T extends User$passwordResetTokenArgs<ExtArgs> = {}>(args?: Subset<T, User$passwordResetTokenArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PasswordResetTokenPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly isActive: FieldRef<"User", 'Boolean'>
    readonly role: FieldRef<"User", 'Role'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.solicitations
   */
  export type User$solicitationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Solicitation
     */
    select?: SolicitationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Solicitation
     */
    omit?: SolicitationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SolicitationInclude<ExtArgs> | null
    where?: SolicitationWhereInput
    orderBy?: SolicitationOrderByWithRelationInput | SolicitationOrderByWithRelationInput[]
    cursor?: SolicitationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SolicitationScalarFieldEnum | SolicitationScalarFieldEnum[]
  }

  /**
   * User.solicitationHistories
   */
  export type User$solicitationHistoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SolicitationHistory
     */
    select?: SolicitationHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the SolicitationHistory
     */
    omit?: SolicitationHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SolicitationHistoryInclude<ExtArgs> | null
    where?: SolicitationHistoryWhereInput
    orderBy?: SolicitationHistoryOrderByWithRelationInput | SolicitationHistoryOrderByWithRelationInput[]
    cursor?: SolicitationHistoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SolicitationHistoryScalarFieldEnum | SolicitationHistoryScalarFieldEnum[]
  }

  /**
   * User.passwordResetToken
   */
  export type User$passwordResetTokenArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PasswordResetToken
     */
    select?: PasswordResetTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PasswordResetToken
     */
    omit?: PasswordResetTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PasswordResetTokenInclude<ExtArgs> | null
    where?: PasswordResetTokenWhereInput
    orderBy?: PasswordResetTokenOrderByWithRelationInput | PasswordResetTokenOrderByWithRelationInput[]
    cursor?: PasswordResetTokenWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PasswordResetTokenScalarFieldEnum | PasswordResetTokenScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Sample
   */

  export type AggregateSample = {
    _count: SampleCountAggregateOutputType | null
    _min: SampleMinAggregateOutputType | null
    _max: SampleMaxAggregateOutputType | null
  }

  export type SampleMinAggregateOutputType = {
    id: string | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SampleMaxAggregateOutputType = {
    id: string | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SampleCountAggregateOutputType = {
    id: number
    name: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type SampleMinAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SampleMaxAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SampleCountAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type SampleAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Sample to aggregate.
     */
    where?: SampleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Samples to fetch.
     */
    orderBy?: SampleOrderByWithRelationInput | SampleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SampleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Samples from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Samples.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Samples
    **/
    _count?: true | SampleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SampleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SampleMaxAggregateInputType
  }

  export type GetSampleAggregateType<T extends SampleAggregateArgs> = {
        [P in keyof T & keyof AggregateSample]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSample[P]>
      : GetScalarType<T[P], AggregateSample[P]>
  }




  export type SampleGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SampleWhereInput
    orderBy?: SampleOrderByWithAggregationInput | SampleOrderByWithAggregationInput[]
    by: SampleScalarFieldEnum[] | SampleScalarFieldEnum
    having?: SampleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SampleCountAggregateInputType | true
    _min?: SampleMinAggregateInputType
    _max?: SampleMaxAggregateInputType
  }

  export type SampleGroupByOutputType = {
    id: string
    name: string | null
    createdAt: Date
    updatedAt: Date
    _count: SampleCountAggregateOutputType | null
    _min: SampleMinAggregateOutputType | null
    _max: SampleMaxAggregateOutputType | null
  }

  type GetSampleGroupByPayload<T extends SampleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SampleGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SampleGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SampleGroupByOutputType[P]>
            : GetScalarType<T[P], SampleGroupByOutputType[P]>
        }
      >
    >


  export type SampleSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["sample"]>

  export type SampleSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["sample"]>

  export type SampleSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["sample"]>

  export type SampleSelectScalar = {
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type SampleOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "createdAt" | "updatedAt", ExtArgs["result"]["sample"]>

  export type $SamplePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Sample"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["sample"]>
    composites: {}
  }

  type SampleGetPayload<S extends boolean | null | undefined | SampleDefaultArgs> = $Result.GetResult<Prisma.$SamplePayload, S>

  type SampleCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SampleFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SampleCountAggregateInputType | true
    }

  export interface SampleDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Sample'], meta: { name: 'Sample' } }
    /**
     * Find zero or one Sample that matches the filter.
     * @param {SampleFindUniqueArgs} args - Arguments to find a Sample
     * @example
     * // Get one Sample
     * const sample = await prisma.sample.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SampleFindUniqueArgs>(args: SelectSubset<T, SampleFindUniqueArgs<ExtArgs>>): Prisma__SampleClient<$Result.GetResult<Prisma.$SamplePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Sample that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SampleFindUniqueOrThrowArgs} args - Arguments to find a Sample
     * @example
     * // Get one Sample
     * const sample = await prisma.sample.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SampleFindUniqueOrThrowArgs>(args: SelectSubset<T, SampleFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SampleClient<$Result.GetResult<Prisma.$SamplePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Sample that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SampleFindFirstArgs} args - Arguments to find a Sample
     * @example
     * // Get one Sample
     * const sample = await prisma.sample.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SampleFindFirstArgs>(args?: SelectSubset<T, SampleFindFirstArgs<ExtArgs>>): Prisma__SampleClient<$Result.GetResult<Prisma.$SamplePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Sample that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SampleFindFirstOrThrowArgs} args - Arguments to find a Sample
     * @example
     * // Get one Sample
     * const sample = await prisma.sample.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SampleFindFirstOrThrowArgs>(args?: SelectSubset<T, SampleFindFirstOrThrowArgs<ExtArgs>>): Prisma__SampleClient<$Result.GetResult<Prisma.$SamplePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Samples that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SampleFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Samples
     * const samples = await prisma.sample.findMany()
     * 
     * // Get first 10 Samples
     * const samples = await prisma.sample.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const sampleWithIdOnly = await prisma.sample.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SampleFindManyArgs>(args?: SelectSubset<T, SampleFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SamplePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Sample.
     * @param {SampleCreateArgs} args - Arguments to create a Sample.
     * @example
     * // Create one Sample
     * const Sample = await prisma.sample.create({
     *   data: {
     *     // ... data to create a Sample
     *   }
     * })
     * 
     */
    create<T extends SampleCreateArgs>(args: SelectSubset<T, SampleCreateArgs<ExtArgs>>): Prisma__SampleClient<$Result.GetResult<Prisma.$SamplePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Samples.
     * @param {SampleCreateManyArgs} args - Arguments to create many Samples.
     * @example
     * // Create many Samples
     * const sample = await prisma.sample.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SampleCreateManyArgs>(args?: SelectSubset<T, SampleCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Samples and returns the data saved in the database.
     * @param {SampleCreateManyAndReturnArgs} args - Arguments to create many Samples.
     * @example
     * // Create many Samples
     * const sample = await prisma.sample.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Samples and only return the `id`
     * const sampleWithIdOnly = await prisma.sample.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SampleCreateManyAndReturnArgs>(args?: SelectSubset<T, SampleCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SamplePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Sample.
     * @param {SampleDeleteArgs} args - Arguments to delete one Sample.
     * @example
     * // Delete one Sample
     * const Sample = await prisma.sample.delete({
     *   where: {
     *     // ... filter to delete one Sample
     *   }
     * })
     * 
     */
    delete<T extends SampleDeleteArgs>(args: SelectSubset<T, SampleDeleteArgs<ExtArgs>>): Prisma__SampleClient<$Result.GetResult<Prisma.$SamplePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Sample.
     * @param {SampleUpdateArgs} args - Arguments to update one Sample.
     * @example
     * // Update one Sample
     * const sample = await prisma.sample.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SampleUpdateArgs>(args: SelectSubset<T, SampleUpdateArgs<ExtArgs>>): Prisma__SampleClient<$Result.GetResult<Prisma.$SamplePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Samples.
     * @param {SampleDeleteManyArgs} args - Arguments to filter Samples to delete.
     * @example
     * // Delete a few Samples
     * const { count } = await prisma.sample.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SampleDeleteManyArgs>(args?: SelectSubset<T, SampleDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Samples.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SampleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Samples
     * const sample = await prisma.sample.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SampleUpdateManyArgs>(args: SelectSubset<T, SampleUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Samples and returns the data updated in the database.
     * @param {SampleUpdateManyAndReturnArgs} args - Arguments to update many Samples.
     * @example
     * // Update many Samples
     * const sample = await prisma.sample.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Samples and only return the `id`
     * const sampleWithIdOnly = await prisma.sample.updateManyAndReturn({
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
    updateManyAndReturn<T extends SampleUpdateManyAndReturnArgs>(args: SelectSubset<T, SampleUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SamplePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Sample.
     * @param {SampleUpsertArgs} args - Arguments to update or create a Sample.
     * @example
     * // Update or create a Sample
     * const sample = await prisma.sample.upsert({
     *   create: {
     *     // ... data to create a Sample
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Sample we want to update
     *   }
     * })
     */
    upsert<T extends SampleUpsertArgs>(args: SelectSubset<T, SampleUpsertArgs<ExtArgs>>): Prisma__SampleClient<$Result.GetResult<Prisma.$SamplePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Samples.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SampleCountArgs} args - Arguments to filter Samples to count.
     * @example
     * // Count the number of Samples
     * const count = await prisma.sample.count({
     *   where: {
     *     // ... the filter for the Samples we want to count
     *   }
     * })
    **/
    count<T extends SampleCountArgs>(
      args?: Subset<T, SampleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SampleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Sample.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SampleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SampleAggregateArgs>(args: Subset<T, SampleAggregateArgs>): Prisma.PrismaPromise<GetSampleAggregateType<T>>

    /**
     * Group by Sample.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SampleGroupByArgs} args - Group by arguments.
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
      T extends SampleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SampleGroupByArgs['orderBy'] }
        : { orderBy?: SampleGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SampleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSampleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Sample model
   */
  readonly fields: SampleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Sample.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SampleClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the Sample model
   */
  interface SampleFieldRefs {
    readonly id: FieldRef<"Sample", 'String'>
    readonly name: FieldRef<"Sample", 'String'>
    readonly createdAt: FieldRef<"Sample", 'DateTime'>
    readonly updatedAt: FieldRef<"Sample", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Sample findUnique
   */
  export type SampleFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sample
     */
    select?: SampleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sample
     */
    omit?: SampleOmit<ExtArgs> | null
    /**
     * Filter, which Sample to fetch.
     */
    where: SampleWhereUniqueInput
  }

  /**
   * Sample findUniqueOrThrow
   */
  export type SampleFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sample
     */
    select?: SampleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sample
     */
    omit?: SampleOmit<ExtArgs> | null
    /**
     * Filter, which Sample to fetch.
     */
    where: SampleWhereUniqueInput
  }

  /**
   * Sample findFirst
   */
  export type SampleFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sample
     */
    select?: SampleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sample
     */
    omit?: SampleOmit<ExtArgs> | null
    /**
     * Filter, which Sample to fetch.
     */
    where?: SampleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Samples to fetch.
     */
    orderBy?: SampleOrderByWithRelationInput | SampleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Samples.
     */
    cursor?: SampleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Samples from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Samples.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Samples.
     */
    distinct?: SampleScalarFieldEnum | SampleScalarFieldEnum[]
  }

  /**
   * Sample findFirstOrThrow
   */
  export type SampleFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sample
     */
    select?: SampleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sample
     */
    omit?: SampleOmit<ExtArgs> | null
    /**
     * Filter, which Sample to fetch.
     */
    where?: SampleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Samples to fetch.
     */
    orderBy?: SampleOrderByWithRelationInput | SampleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Samples.
     */
    cursor?: SampleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Samples from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Samples.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Samples.
     */
    distinct?: SampleScalarFieldEnum | SampleScalarFieldEnum[]
  }

  /**
   * Sample findMany
   */
  export type SampleFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sample
     */
    select?: SampleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sample
     */
    omit?: SampleOmit<ExtArgs> | null
    /**
     * Filter, which Samples to fetch.
     */
    where?: SampleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Samples to fetch.
     */
    orderBy?: SampleOrderByWithRelationInput | SampleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Samples.
     */
    cursor?: SampleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Samples from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Samples.
     */
    skip?: number
    distinct?: SampleScalarFieldEnum | SampleScalarFieldEnum[]
  }

  /**
   * Sample create
   */
  export type SampleCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sample
     */
    select?: SampleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sample
     */
    omit?: SampleOmit<ExtArgs> | null
    /**
     * The data needed to create a Sample.
     */
    data: XOR<SampleCreateInput, SampleUncheckedCreateInput>
  }

  /**
   * Sample createMany
   */
  export type SampleCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Samples.
     */
    data: SampleCreateManyInput | SampleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Sample createManyAndReturn
   */
  export type SampleCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sample
     */
    select?: SampleSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Sample
     */
    omit?: SampleOmit<ExtArgs> | null
    /**
     * The data used to create many Samples.
     */
    data: SampleCreateManyInput | SampleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Sample update
   */
  export type SampleUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sample
     */
    select?: SampleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sample
     */
    omit?: SampleOmit<ExtArgs> | null
    /**
     * The data needed to update a Sample.
     */
    data: XOR<SampleUpdateInput, SampleUncheckedUpdateInput>
    /**
     * Choose, which Sample to update.
     */
    where: SampleWhereUniqueInput
  }

  /**
   * Sample updateMany
   */
  export type SampleUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Samples.
     */
    data: XOR<SampleUpdateManyMutationInput, SampleUncheckedUpdateManyInput>
    /**
     * Filter which Samples to update
     */
    where?: SampleWhereInput
    /**
     * Limit how many Samples to update.
     */
    limit?: number
  }

  /**
   * Sample updateManyAndReturn
   */
  export type SampleUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sample
     */
    select?: SampleSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Sample
     */
    omit?: SampleOmit<ExtArgs> | null
    /**
     * The data used to update Samples.
     */
    data: XOR<SampleUpdateManyMutationInput, SampleUncheckedUpdateManyInput>
    /**
     * Filter which Samples to update
     */
    where?: SampleWhereInput
    /**
     * Limit how many Samples to update.
     */
    limit?: number
  }

  /**
   * Sample upsert
   */
  export type SampleUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sample
     */
    select?: SampleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sample
     */
    omit?: SampleOmit<ExtArgs> | null
    /**
     * The filter to search for the Sample to update in case it exists.
     */
    where: SampleWhereUniqueInput
    /**
     * In case the Sample found by the `where` argument doesn't exist, create a new Sample with this data.
     */
    create: XOR<SampleCreateInput, SampleUncheckedCreateInput>
    /**
     * In case the Sample was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SampleUpdateInput, SampleUncheckedUpdateInput>
  }

  /**
   * Sample delete
   */
  export type SampleDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sample
     */
    select?: SampleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sample
     */
    omit?: SampleOmit<ExtArgs> | null
    /**
     * Filter which Sample to delete.
     */
    where: SampleWhereUniqueInput
  }

  /**
   * Sample deleteMany
   */
  export type SampleDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Samples to delete
     */
    where?: SampleWhereInput
    /**
     * Limit how many Samples to delete.
     */
    limit?: number
  }

  /**
   * Sample without action
   */
  export type SampleDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sample
     */
    select?: SampleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sample
     */
    omit?: SampleOmit<ExtArgs> | null
  }


  /**
   * Model Exams
   */

  export type AggregateExams = {
    _count: ExamsCountAggregateOutputType | null
    _min: ExamsMinAggregateOutputType | null
    _max: ExamsMaxAggregateOutputType | null
  }

  export type ExamsMinAggregateOutputType = {
    id: string | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ExamsMaxAggregateOutputType = {
    id: string | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ExamsCountAggregateOutputType = {
    id: number
    name: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ExamsMinAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ExamsMaxAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ExamsCountAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ExamsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Exams to aggregate.
     */
    where?: ExamsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Exams to fetch.
     */
    orderBy?: ExamsOrderByWithRelationInput | ExamsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ExamsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Exams from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Exams.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Exams
    **/
    _count?: true | ExamsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ExamsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ExamsMaxAggregateInputType
  }

  export type GetExamsAggregateType<T extends ExamsAggregateArgs> = {
        [P in keyof T & keyof AggregateExams]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateExams[P]>
      : GetScalarType<T[P], AggregateExams[P]>
  }




  export type ExamsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ExamsWhereInput
    orderBy?: ExamsOrderByWithAggregationInput | ExamsOrderByWithAggregationInput[]
    by: ExamsScalarFieldEnum[] | ExamsScalarFieldEnum
    having?: ExamsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ExamsCountAggregateInputType | true
    _min?: ExamsMinAggregateInputType
    _max?: ExamsMaxAggregateInputType
  }

  export type ExamsGroupByOutputType = {
    id: string
    name: string | null
    createdAt: Date
    updatedAt: Date
    _count: ExamsCountAggregateOutputType | null
    _min: ExamsMinAggregateOutputType | null
    _max: ExamsMaxAggregateOutputType | null
  }

  type GetExamsGroupByPayload<T extends ExamsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ExamsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ExamsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ExamsGroupByOutputType[P]>
            : GetScalarType<T[P], ExamsGroupByOutputType[P]>
        }
      >
    >


  export type ExamsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["exams"]>

  export type ExamsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["exams"]>

  export type ExamsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["exams"]>

  export type ExamsSelectScalar = {
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ExamsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "createdAt" | "updatedAt", ExtArgs["result"]["exams"]>

  export type $ExamsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Exams"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["exams"]>
    composites: {}
  }

  type ExamsGetPayload<S extends boolean | null | undefined | ExamsDefaultArgs> = $Result.GetResult<Prisma.$ExamsPayload, S>

  type ExamsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ExamsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ExamsCountAggregateInputType | true
    }

  export interface ExamsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Exams'], meta: { name: 'Exams' } }
    /**
     * Find zero or one Exams that matches the filter.
     * @param {ExamsFindUniqueArgs} args - Arguments to find a Exams
     * @example
     * // Get one Exams
     * const exams = await prisma.exams.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ExamsFindUniqueArgs>(args: SelectSubset<T, ExamsFindUniqueArgs<ExtArgs>>): Prisma__ExamsClient<$Result.GetResult<Prisma.$ExamsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Exams that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ExamsFindUniqueOrThrowArgs} args - Arguments to find a Exams
     * @example
     * // Get one Exams
     * const exams = await prisma.exams.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ExamsFindUniqueOrThrowArgs>(args: SelectSubset<T, ExamsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ExamsClient<$Result.GetResult<Prisma.$ExamsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Exams that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExamsFindFirstArgs} args - Arguments to find a Exams
     * @example
     * // Get one Exams
     * const exams = await prisma.exams.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ExamsFindFirstArgs>(args?: SelectSubset<T, ExamsFindFirstArgs<ExtArgs>>): Prisma__ExamsClient<$Result.GetResult<Prisma.$ExamsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Exams that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExamsFindFirstOrThrowArgs} args - Arguments to find a Exams
     * @example
     * // Get one Exams
     * const exams = await prisma.exams.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ExamsFindFirstOrThrowArgs>(args?: SelectSubset<T, ExamsFindFirstOrThrowArgs<ExtArgs>>): Prisma__ExamsClient<$Result.GetResult<Prisma.$ExamsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Exams that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExamsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Exams
     * const exams = await prisma.exams.findMany()
     * 
     * // Get first 10 Exams
     * const exams = await prisma.exams.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const examsWithIdOnly = await prisma.exams.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ExamsFindManyArgs>(args?: SelectSubset<T, ExamsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExamsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Exams.
     * @param {ExamsCreateArgs} args - Arguments to create a Exams.
     * @example
     * // Create one Exams
     * const Exams = await prisma.exams.create({
     *   data: {
     *     // ... data to create a Exams
     *   }
     * })
     * 
     */
    create<T extends ExamsCreateArgs>(args: SelectSubset<T, ExamsCreateArgs<ExtArgs>>): Prisma__ExamsClient<$Result.GetResult<Prisma.$ExamsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Exams.
     * @param {ExamsCreateManyArgs} args - Arguments to create many Exams.
     * @example
     * // Create many Exams
     * const exams = await prisma.exams.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ExamsCreateManyArgs>(args?: SelectSubset<T, ExamsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Exams and returns the data saved in the database.
     * @param {ExamsCreateManyAndReturnArgs} args - Arguments to create many Exams.
     * @example
     * // Create many Exams
     * const exams = await prisma.exams.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Exams and only return the `id`
     * const examsWithIdOnly = await prisma.exams.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ExamsCreateManyAndReturnArgs>(args?: SelectSubset<T, ExamsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExamsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Exams.
     * @param {ExamsDeleteArgs} args - Arguments to delete one Exams.
     * @example
     * // Delete one Exams
     * const Exams = await prisma.exams.delete({
     *   where: {
     *     // ... filter to delete one Exams
     *   }
     * })
     * 
     */
    delete<T extends ExamsDeleteArgs>(args: SelectSubset<T, ExamsDeleteArgs<ExtArgs>>): Prisma__ExamsClient<$Result.GetResult<Prisma.$ExamsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Exams.
     * @param {ExamsUpdateArgs} args - Arguments to update one Exams.
     * @example
     * // Update one Exams
     * const exams = await prisma.exams.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ExamsUpdateArgs>(args: SelectSubset<T, ExamsUpdateArgs<ExtArgs>>): Prisma__ExamsClient<$Result.GetResult<Prisma.$ExamsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Exams.
     * @param {ExamsDeleteManyArgs} args - Arguments to filter Exams to delete.
     * @example
     * // Delete a few Exams
     * const { count } = await prisma.exams.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ExamsDeleteManyArgs>(args?: SelectSubset<T, ExamsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Exams.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExamsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Exams
     * const exams = await prisma.exams.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ExamsUpdateManyArgs>(args: SelectSubset<T, ExamsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Exams and returns the data updated in the database.
     * @param {ExamsUpdateManyAndReturnArgs} args - Arguments to update many Exams.
     * @example
     * // Update many Exams
     * const exams = await prisma.exams.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Exams and only return the `id`
     * const examsWithIdOnly = await prisma.exams.updateManyAndReturn({
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
    updateManyAndReturn<T extends ExamsUpdateManyAndReturnArgs>(args: SelectSubset<T, ExamsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExamsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Exams.
     * @param {ExamsUpsertArgs} args - Arguments to update or create a Exams.
     * @example
     * // Update or create a Exams
     * const exams = await prisma.exams.upsert({
     *   create: {
     *     // ... data to create a Exams
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Exams we want to update
     *   }
     * })
     */
    upsert<T extends ExamsUpsertArgs>(args: SelectSubset<T, ExamsUpsertArgs<ExtArgs>>): Prisma__ExamsClient<$Result.GetResult<Prisma.$ExamsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Exams.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExamsCountArgs} args - Arguments to filter Exams to count.
     * @example
     * // Count the number of Exams
     * const count = await prisma.exams.count({
     *   where: {
     *     // ... the filter for the Exams we want to count
     *   }
     * })
    **/
    count<T extends ExamsCountArgs>(
      args?: Subset<T, ExamsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ExamsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Exams.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExamsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ExamsAggregateArgs>(args: Subset<T, ExamsAggregateArgs>): Prisma.PrismaPromise<GetExamsAggregateType<T>>

    /**
     * Group by Exams.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExamsGroupByArgs} args - Group by arguments.
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
      T extends ExamsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ExamsGroupByArgs['orderBy'] }
        : { orderBy?: ExamsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ExamsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetExamsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Exams model
   */
  readonly fields: ExamsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Exams.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ExamsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the Exams model
   */
  interface ExamsFieldRefs {
    readonly id: FieldRef<"Exams", 'String'>
    readonly name: FieldRef<"Exams", 'String'>
    readonly createdAt: FieldRef<"Exams", 'DateTime'>
    readonly updatedAt: FieldRef<"Exams", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Exams findUnique
   */
  export type ExamsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exams
     */
    select?: ExamsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Exams
     */
    omit?: ExamsOmit<ExtArgs> | null
    /**
     * Filter, which Exams to fetch.
     */
    where: ExamsWhereUniqueInput
  }

  /**
   * Exams findUniqueOrThrow
   */
  export type ExamsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exams
     */
    select?: ExamsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Exams
     */
    omit?: ExamsOmit<ExtArgs> | null
    /**
     * Filter, which Exams to fetch.
     */
    where: ExamsWhereUniqueInput
  }

  /**
   * Exams findFirst
   */
  export type ExamsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exams
     */
    select?: ExamsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Exams
     */
    omit?: ExamsOmit<ExtArgs> | null
    /**
     * Filter, which Exams to fetch.
     */
    where?: ExamsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Exams to fetch.
     */
    orderBy?: ExamsOrderByWithRelationInput | ExamsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Exams.
     */
    cursor?: ExamsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Exams from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Exams.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Exams.
     */
    distinct?: ExamsScalarFieldEnum | ExamsScalarFieldEnum[]
  }

  /**
   * Exams findFirstOrThrow
   */
  export type ExamsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exams
     */
    select?: ExamsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Exams
     */
    omit?: ExamsOmit<ExtArgs> | null
    /**
     * Filter, which Exams to fetch.
     */
    where?: ExamsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Exams to fetch.
     */
    orderBy?: ExamsOrderByWithRelationInput | ExamsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Exams.
     */
    cursor?: ExamsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Exams from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Exams.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Exams.
     */
    distinct?: ExamsScalarFieldEnum | ExamsScalarFieldEnum[]
  }

  /**
   * Exams findMany
   */
  export type ExamsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exams
     */
    select?: ExamsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Exams
     */
    omit?: ExamsOmit<ExtArgs> | null
    /**
     * Filter, which Exams to fetch.
     */
    where?: ExamsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Exams to fetch.
     */
    orderBy?: ExamsOrderByWithRelationInput | ExamsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Exams.
     */
    cursor?: ExamsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Exams from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Exams.
     */
    skip?: number
    distinct?: ExamsScalarFieldEnum | ExamsScalarFieldEnum[]
  }

  /**
   * Exams create
   */
  export type ExamsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exams
     */
    select?: ExamsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Exams
     */
    omit?: ExamsOmit<ExtArgs> | null
    /**
     * The data needed to create a Exams.
     */
    data: XOR<ExamsCreateInput, ExamsUncheckedCreateInput>
  }

  /**
   * Exams createMany
   */
  export type ExamsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Exams.
     */
    data: ExamsCreateManyInput | ExamsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Exams createManyAndReturn
   */
  export type ExamsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exams
     */
    select?: ExamsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Exams
     */
    omit?: ExamsOmit<ExtArgs> | null
    /**
     * The data used to create many Exams.
     */
    data: ExamsCreateManyInput | ExamsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Exams update
   */
  export type ExamsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exams
     */
    select?: ExamsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Exams
     */
    omit?: ExamsOmit<ExtArgs> | null
    /**
     * The data needed to update a Exams.
     */
    data: XOR<ExamsUpdateInput, ExamsUncheckedUpdateInput>
    /**
     * Choose, which Exams to update.
     */
    where: ExamsWhereUniqueInput
  }

  /**
   * Exams updateMany
   */
  export type ExamsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Exams.
     */
    data: XOR<ExamsUpdateManyMutationInput, ExamsUncheckedUpdateManyInput>
    /**
     * Filter which Exams to update
     */
    where?: ExamsWhereInput
    /**
     * Limit how many Exams to update.
     */
    limit?: number
  }

  /**
   * Exams updateManyAndReturn
   */
  export type ExamsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exams
     */
    select?: ExamsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Exams
     */
    omit?: ExamsOmit<ExtArgs> | null
    /**
     * The data used to update Exams.
     */
    data: XOR<ExamsUpdateManyMutationInput, ExamsUncheckedUpdateManyInput>
    /**
     * Filter which Exams to update
     */
    where?: ExamsWhereInput
    /**
     * Limit how many Exams to update.
     */
    limit?: number
  }

  /**
   * Exams upsert
   */
  export type ExamsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exams
     */
    select?: ExamsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Exams
     */
    omit?: ExamsOmit<ExtArgs> | null
    /**
     * The filter to search for the Exams to update in case it exists.
     */
    where: ExamsWhereUniqueInput
    /**
     * In case the Exams found by the `where` argument doesn't exist, create a new Exams with this data.
     */
    create: XOR<ExamsCreateInput, ExamsUncheckedCreateInput>
    /**
     * In case the Exams was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ExamsUpdateInput, ExamsUncheckedUpdateInput>
  }

  /**
   * Exams delete
   */
  export type ExamsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exams
     */
    select?: ExamsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Exams
     */
    omit?: ExamsOmit<ExtArgs> | null
    /**
     * Filter which Exams to delete.
     */
    where: ExamsWhereUniqueInput
  }

  /**
   * Exams deleteMany
   */
  export type ExamsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Exams to delete
     */
    where?: ExamsWhereInput
    /**
     * Limit how many Exams to delete.
     */
    limit?: number
  }

  /**
   * Exams without action
   */
  export type ExamsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exams
     */
    select?: ExamsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Exams
     */
    omit?: ExamsOmit<ExtArgs> | null
  }


  /**
   * Model InfectiousAgents
   */

  export type AggregateInfectiousAgents = {
    _count: InfectiousAgentsCountAggregateOutputType | null
    _min: InfectiousAgentsMinAggregateOutputType | null
    _max: InfectiousAgentsMaxAggregateOutputType | null
  }

  export type InfectiousAgentsMinAggregateOutputType = {
    id: string | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type InfectiousAgentsMaxAggregateOutputType = {
    id: string | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type InfectiousAgentsCountAggregateOutputType = {
    id: number
    name: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type InfectiousAgentsMinAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
  }

  export type InfectiousAgentsMaxAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
  }

  export type InfectiousAgentsCountAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type InfectiousAgentsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which InfectiousAgents to aggregate.
     */
    where?: InfectiousAgentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InfectiousAgents to fetch.
     */
    orderBy?: InfectiousAgentsOrderByWithRelationInput | InfectiousAgentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: InfectiousAgentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InfectiousAgents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InfectiousAgents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned InfectiousAgents
    **/
    _count?: true | InfectiousAgentsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: InfectiousAgentsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: InfectiousAgentsMaxAggregateInputType
  }

  export type GetInfectiousAgentsAggregateType<T extends InfectiousAgentsAggregateArgs> = {
        [P in keyof T & keyof AggregateInfectiousAgents]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateInfectiousAgents[P]>
      : GetScalarType<T[P], AggregateInfectiousAgents[P]>
  }




  export type InfectiousAgentsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InfectiousAgentsWhereInput
    orderBy?: InfectiousAgentsOrderByWithAggregationInput | InfectiousAgentsOrderByWithAggregationInput[]
    by: InfectiousAgentsScalarFieldEnum[] | InfectiousAgentsScalarFieldEnum
    having?: InfectiousAgentsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: InfectiousAgentsCountAggregateInputType | true
    _min?: InfectiousAgentsMinAggregateInputType
    _max?: InfectiousAgentsMaxAggregateInputType
  }

  export type InfectiousAgentsGroupByOutputType = {
    id: string
    name: string | null
    createdAt: Date
    updatedAt: Date
    _count: InfectiousAgentsCountAggregateOutputType | null
    _min: InfectiousAgentsMinAggregateOutputType | null
    _max: InfectiousAgentsMaxAggregateOutputType | null
  }

  type GetInfectiousAgentsGroupByPayload<T extends InfectiousAgentsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<InfectiousAgentsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof InfectiousAgentsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], InfectiousAgentsGroupByOutputType[P]>
            : GetScalarType<T[P], InfectiousAgentsGroupByOutputType[P]>
        }
      >
    >


  export type InfectiousAgentsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["infectiousAgents"]>

  export type InfectiousAgentsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["infectiousAgents"]>

  export type InfectiousAgentsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["infectiousAgents"]>

  export type InfectiousAgentsSelectScalar = {
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type InfectiousAgentsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "createdAt" | "updatedAt", ExtArgs["result"]["infectiousAgents"]>

  export type $InfectiousAgentsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "InfectiousAgents"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["infectiousAgents"]>
    composites: {}
  }

  type InfectiousAgentsGetPayload<S extends boolean | null | undefined | InfectiousAgentsDefaultArgs> = $Result.GetResult<Prisma.$InfectiousAgentsPayload, S>

  type InfectiousAgentsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<InfectiousAgentsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: InfectiousAgentsCountAggregateInputType | true
    }

  export interface InfectiousAgentsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['InfectiousAgents'], meta: { name: 'InfectiousAgents' } }
    /**
     * Find zero or one InfectiousAgents that matches the filter.
     * @param {InfectiousAgentsFindUniqueArgs} args - Arguments to find a InfectiousAgents
     * @example
     * // Get one InfectiousAgents
     * const infectiousAgents = await prisma.infectiousAgents.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends InfectiousAgentsFindUniqueArgs>(args: SelectSubset<T, InfectiousAgentsFindUniqueArgs<ExtArgs>>): Prisma__InfectiousAgentsClient<$Result.GetResult<Prisma.$InfectiousAgentsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one InfectiousAgents that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {InfectiousAgentsFindUniqueOrThrowArgs} args - Arguments to find a InfectiousAgents
     * @example
     * // Get one InfectiousAgents
     * const infectiousAgents = await prisma.infectiousAgents.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends InfectiousAgentsFindUniqueOrThrowArgs>(args: SelectSubset<T, InfectiousAgentsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__InfectiousAgentsClient<$Result.GetResult<Prisma.$InfectiousAgentsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first InfectiousAgents that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InfectiousAgentsFindFirstArgs} args - Arguments to find a InfectiousAgents
     * @example
     * // Get one InfectiousAgents
     * const infectiousAgents = await prisma.infectiousAgents.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends InfectiousAgentsFindFirstArgs>(args?: SelectSubset<T, InfectiousAgentsFindFirstArgs<ExtArgs>>): Prisma__InfectiousAgentsClient<$Result.GetResult<Prisma.$InfectiousAgentsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first InfectiousAgents that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InfectiousAgentsFindFirstOrThrowArgs} args - Arguments to find a InfectiousAgents
     * @example
     * // Get one InfectiousAgents
     * const infectiousAgents = await prisma.infectiousAgents.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends InfectiousAgentsFindFirstOrThrowArgs>(args?: SelectSubset<T, InfectiousAgentsFindFirstOrThrowArgs<ExtArgs>>): Prisma__InfectiousAgentsClient<$Result.GetResult<Prisma.$InfectiousAgentsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more InfectiousAgents that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InfectiousAgentsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all InfectiousAgents
     * const infectiousAgents = await prisma.infectiousAgents.findMany()
     * 
     * // Get first 10 InfectiousAgents
     * const infectiousAgents = await prisma.infectiousAgents.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const infectiousAgentsWithIdOnly = await prisma.infectiousAgents.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends InfectiousAgentsFindManyArgs>(args?: SelectSubset<T, InfectiousAgentsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InfectiousAgentsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a InfectiousAgents.
     * @param {InfectiousAgentsCreateArgs} args - Arguments to create a InfectiousAgents.
     * @example
     * // Create one InfectiousAgents
     * const InfectiousAgents = await prisma.infectiousAgents.create({
     *   data: {
     *     // ... data to create a InfectiousAgents
     *   }
     * })
     * 
     */
    create<T extends InfectiousAgentsCreateArgs>(args: SelectSubset<T, InfectiousAgentsCreateArgs<ExtArgs>>): Prisma__InfectiousAgentsClient<$Result.GetResult<Prisma.$InfectiousAgentsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many InfectiousAgents.
     * @param {InfectiousAgentsCreateManyArgs} args - Arguments to create many InfectiousAgents.
     * @example
     * // Create many InfectiousAgents
     * const infectiousAgents = await prisma.infectiousAgents.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends InfectiousAgentsCreateManyArgs>(args?: SelectSubset<T, InfectiousAgentsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many InfectiousAgents and returns the data saved in the database.
     * @param {InfectiousAgentsCreateManyAndReturnArgs} args - Arguments to create many InfectiousAgents.
     * @example
     * // Create many InfectiousAgents
     * const infectiousAgents = await prisma.infectiousAgents.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many InfectiousAgents and only return the `id`
     * const infectiousAgentsWithIdOnly = await prisma.infectiousAgents.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends InfectiousAgentsCreateManyAndReturnArgs>(args?: SelectSubset<T, InfectiousAgentsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InfectiousAgentsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a InfectiousAgents.
     * @param {InfectiousAgentsDeleteArgs} args - Arguments to delete one InfectiousAgents.
     * @example
     * // Delete one InfectiousAgents
     * const InfectiousAgents = await prisma.infectiousAgents.delete({
     *   where: {
     *     // ... filter to delete one InfectiousAgents
     *   }
     * })
     * 
     */
    delete<T extends InfectiousAgentsDeleteArgs>(args: SelectSubset<T, InfectiousAgentsDeleteArgs<ExtArgs>>): Prisma__InfectiousAgentsClient<$Result.GetResult<Prisma.$InfectiousAgentsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one InfectiousAgents.
     * @param {InfectiousAgentsUpdateArgs} args - Arguments to update one InfectiousAgents.
     * @example
     * // Update one InfectiousAgents
     * const infectiousAgents = await prisma.infectiousAgents.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends InfectiousAgentsUpdateArgs>(args: SelectSubset<T, InfectiousAgentsUpdateArgs<ExtArgs>>): Prisma__InfectiousAgentsClient<$Result.GetResult<Prisma.$InfectiousAgentsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more InfectiousAgents.
     * @param {InfectiousAgentsDeleteManyArgs} args - Arguments to filter InfectiousAgents to delete.
     * @example
     * // Delete a few InfectiousAgents
     * const { count } = await prisma.infectiousAgents.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends InfectiousAgentsDeleteManyArgs>(args?: SelectSubset<T, InfectiousAgentsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more InfectiousAgents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InfectiousAgentsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many InfectiousAgents
     * const infectiousAgents = await prisma.infectiousAgents.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends InfectiousAgentsUpdateManyArgs>(args: SelectSubset<T, InfectiousAgentsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more InfectiousAgents and returns the data updated in the database.
     * @param {InfectiousAgentsUpdateManyAndReturnArgs} args - Arguments to update many InfectiousAgents.
     * @example
     * // Update many InfectiousAgents
     * const infectiousAgents = await prisma.infectiousAgents.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more InfectiousAgents and only return the `id`
     * const infectiousAgentsWithIdOnly = await prisma.infectiousAgents.updateManyAndReturn({
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
    updateManyAndReturn<T extends InfectiousAgentsUpdateManyAndReturnArgs>(args: SelectSubset<T, InfectiousAgentsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InfectiousAgentsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one InfectiousAgents.
     * @param {InfectiousAgentsUpsertArgs} args - Arguments to update or create a InfectiousAgents.
     * @example
     * // Update or create a InfectiousAgents
     * const infectiousAgents = await prisma.infectiousAgents.upsert({
     *   create: {
     *     // ... data to create a InfectiousAgents
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the InfectiousAgents we want to update
     *   }
     * })
     */
    upsert<T extends InfectiousAgentsUpsertArgs>(args: SelectSubset<T, InfectiousAgentsUpsertArgs<ExtArgs>>): Prisma__InfectiousAgentsClient<$Result.GetResult<Prisma.$InfectiousAgentsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of InfectiousAgents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InfectiousAgentsCountArgs} args - Arguments to filter InfectiousAgents to count.
     * @example
     * // Count the number of InfectiousAgents
     * const count = await prisma.infectiousAgents.count({
     *   where: {
     *     // ... the filter for the InfectiousAgents we want to count
     *   }
     * })
    **/
    count<T extends InfectiousAgentsCountArgs>(
      args?: Subset<T, InfectiousAgentsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], InfectiousAgentsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a InfectiousAgents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InfectiousAgentsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends InfectiousAgentsAggregateArgs>(args: Subset<T, InfectiousAgentsAggregateArgs>): Prisma.PrismaPromise<GetInfectiousAgentsAggregateType<T>>

    /**
     * Group by InfectiousAgents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InfectiousAgentsGroupByArgs} args - Group by arguments.
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
      T extends InfectiousAgentsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: InfectiousAgentsGroupByArgs['orderBy'] }
        : { orderBy?: InfectiousAgentsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, InfectiousAgentsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetInfectiousAgentsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the InfectiousAgents model
   */
  readonly fields: InfectiousAgentsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for InfectiousAgents.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__InfectiousAgentsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the InfectiousAgents model
   */
  interface InfectiousAgentsFieldRefs {
    readonly id: FieldRef<"InfectiousAgents", 'String'>
    readonly name: FieldRef<"InfectiousAgents", 'String'>
    readonly createdAt: FieldRef<"InfectiousAgents", 'DateTime'>
    readonly updatedAt: FieldRef<"InfectiousAgents", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * InfectiousAgents findUnique
   */
  export type InfectiousAgentsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InfectiousAgents
     */
    select?: InfectiousAgentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InfectiousAgents
     */
    omit?: InfectiousAgentsOmit<ExtArgs> | null
    /**
     * Filter, which InfectiousAgents to fetch.
     */
    where: InfectiousAgentsWhereUniqueInput
  }

  /**
   * InfectiousAgents findUniqueOrThrow
   */
  export type InfectiousAgentsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InfectiousAgents
     */
    select?: InfectiousAgentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InfectiousAgents
     */
    omit?: InfectiousAgentsOmit<ExtArgs> | null
    /**
     * Filter, which InfectiousAgents to fetch.
     */
    where: InfectiousAgentsWhereUniqueInput
  }

  /**
   * InfectiousAgents findFirst
   */
  export type InfectiousAgentsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InfectiousAgents
     */
    select?: InfectiousAgentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InfectiousAgents
     */
    omit?: InfectiousAgentsOmit<ExtArgs> | null
    /**
     * Filter, which InfectiousAgents to fetch.
     */
    where?: InfectiousAgentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InfectiousAgents to fetch.
     */
    orderBy?: InfectiousAgentsOrderByWithRelationInput | InfectiousAgentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for InfectiousAgents.
     */
    cursor?: InfectiousAgentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InfectiousAgents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InfectiousAgents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of InfectiousAgents.
     */
    distinct?: InfectiousAgentsScalarFieldEnum | InfectiousAgentsScalarFieldEnum[]
  }

  /**
   * InfectiousAgents findFirstOrThrow
   */
  export type InfectiousAgentsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InfectiousAgents
     */
    select?: InfectiousAgentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InfectiousAgents
     */
    omit?: InfectiousAgentsOmit<ExtArgs> | null
    /**
     * Filter, which InfectiousAgents to fetch.
     */
    where?: InfectiousAgentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InfectiousAgents to fetch.
     */
    orderBy?: InfectiousAgentsOrderByWithRelationInput | InfectiousAgentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for InfectiousAgents.
     */
    cursor?: InfectiousAgentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InfectiousAgents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InfectiousAgents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of InfectiousAgents.
     */
    distinct?: InfectiousAgentsScalarFieldEnum | InfectiousAgentsScalarFieldEnum[]
  }

  /**
   * InfectiousAgents findMany
   */
  export type InfectiousAgentsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InfectiousAgents
     */
    select?: InfectiousAgentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InfectiousAgents
     */
    omit?: InfectiousAgentsOmit<ExtArgs> | null
    /**
     * Filter, which InfectiousAgents to fetch.
     */
    where?: InfectiousAgentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InfectiousAgents to fetch.
     */
    orderBy?: InfectiousAgentsOrderByWithRelationInput | InfectiousAgentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing InfectiousAgents.
     */
    cursor?: InfectiousAgentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InfectiousAgents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InfectiousAgents.
     */
    skip?: number
    distinct?: InfectiousAgentsScalarFieldEnum | InfectiousAgentsScalarFieldEnum[]
  }

  /**
   * InfectiousAgents create
   */
  export type InfectiousAgentsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InfectiousAgents
     */
    select?: InfectiousAgentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InfectiousAgents
     */
    omit?: InfectiousAgentsOmit<ExtArgs> | null
    /**
     * The data needed to create a InfectiousAgents.
     */
    data: XOR<InfectiousAgentsCreateInput, InfectiousAgentsUncheckedCreateInput>
  }

  /**
   * InfectiousAgents createMany
   */
  export type InfectiousAgentsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many InfectiousAgents.
     */
    data: InfectiousAgentsCreateManyInput | InfectiousAgentsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * InfectiousAgents createManyAndReturn
   */
  export type InfectiousAgentsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InfectiousAgents
     */
    select?: InfectiousAgentsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the InfectiousAgents
     */
    omit?: InfectiousAgentsOmit<ExtArgs> | null
    /**
     * The data used to create many InfectiousAgents.
     */
    data: InfectiousAgentsCreateManyInput | InfectiousAgentsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * InfectiousAgents update
   */
  export type InfectiousAgentsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InfectiousAgents
     */
    select?: InfectiousAgentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InfectiousAgents
     */
    omit?: InfectiousAgentsOmit<ExtArgs> | null
    /**
     * The data needed to update a InfectiousAgents.
     */
    data: XOR<InfectiousAgentsUpdateInput, InfectiousAgentsUncheckedUpdateInput>
    /**
     * Choose, which InfectiousAgents to update.
     */
    where: InfectiousAgentsWhereUniqueInput
  }

  /**
   * InfectiousAgents updateMany
   */
  export type InfectiousAgentsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update InfectiousAgents.
     */
    data: XOR<InfectiousAgentsUpdateManyMutationInput, InfectiousAgentsUncheckedUpdateManyInput>
    /**
     * Filter which InfectiousAgents to update
     */
    where?: InfectiousAgentsWhereInput
    /**
     * Limit how many InfectiousAgents to update.
     */
    limit?: number
  }

  /**
   * InfectiousAgents updateManyAndReturn
   */
  export type InfectiousAgentsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InfectiousAgents
     */
    select?: InfectiousAgentsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the InfectiousAgents
     */
    omit?: InfectiousAgentsOmit<ExtArgs> | null
    /**
     * The data used to update InfectiousAgents.
     */
    data: XOR<InfectiousAgentsUpdateManyMutationInput, InfectiousAgentsUncheckedUpdateManyInput>
    /**
     * Filter which InfectiousAgents to update
     */
    where?: InfectiousAgentsWhereInput
    /**
     * Limit how many InfectiousAgents to update.
     */
    limit?: number
  }

  /**
   * InfectiousAgents upsert
   */
  export type InfectiousAgentsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InfectiousAgents
     */
    select?: InfectiousAgentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InfectiousAgents
     */
    omit?: InfectiousAgentsOmit<ExtArgs> | null
    /**
     * The filter to search for the InfectiousAgents to update in case it exists.
     */
    where: InfectiousAgentsWhereUniqueInput
    /**
     * In case the InfectiousAgents found by the `where` argument doesn't exist, create a new InfectiousAgents with this data.
     */
    create: XOR<InfectiousAgentsCreateInput, InfectiousAgentsUncheckedCreateInput>
    /**
     * In case the InfectiousAgents was found with the provided `where` argument, update it with this data.
     */
    update: XOR<InfectiousAgentsUpdateInput, InfectiousAgentsUncheckedUpdateInput>
  }

  /**
   * InfectiousAgents delete
   */
  export type InfectiousAgentsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InfectiousAgents
     */
    select?: InfectiousAgentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InfectiousAgents
     */
    omit?: InfectiousAgentsOmit<ExtArgs> | null
    /**
     * Filter which InfectiousAgents to delete.
     */
    where: InfectiousAgentsWhereUniqueInput
  }

  /**
   * InfectiousAgents deleteMany
   */
  export type InfectiousAgentsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which InfectiousAgents to delete
     */
    where?: InfectiousAgentsWhereInput
    /**
     * Limit how many InfectiousAgents to delete.
     */
    limit?: number
  }

  /**
   * InfectiousAgents without action
   */
  export type InfectiousAgentsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InfectiousAgents
     */
    select?: InfectiousAgentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InfectiousAgents
     */
    omit?: InfectiousAgentsOmit<ExtArgs> | null
  }


  /**
   * Model Solicitation
   */

  export type AggregateSolicitation = {
    _count: SolicitationCountAggregateOutputType | null
    _min: SolicitationMinAggregateOutputType | null
    _max: SolicitationMaxAggregateOutputType | null
  }

  export type SolicitationMinAggregateOutputType = {
    id: string | null
    tutor: string | null
    patient: string | null
    gender: string | null
    age: string | null
    doctor: string | null
    specie: string | null
    hospitalVet: string | null
    status: $Enums.SolicitationStatus | null
    finishedAt: Date | null
    canceledAt: Date | null
    canceledCause: string | null
    blockedAt: Date | null
    blockedCause: string | null
    examResultType: $Enums.ExamResultType | null
    solicitationResult: $Enums.SolicitationResult | null
    solicitationConclusionText: string | null
    solicitationSampleConclusion: string | null
    solicitationColectTypeConclusion: string | null
    solicitationSampleQuality: $Enums.SolicitationSampleQuality | null
    solicitationClinicAvaliation: string | null
    isDeleted: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
    userId: string | null
  }

  export type SolicitationMaxAggregateOutputType = {
    id: string | null
    tutor: string | null
    patient: string | null
    gender: string | null
    age: string | null
    doctor: string | null
    specie: string | null
    hospitalVet: string | null
    status: $Enums.SolicitationStatus | null
    finishedAt: Date | null
    canceledAt: Date | null
    canceledCause: string | null
    blockedAt: Date | null
    blockedCause: string | null
    examResultType: $Enums.ExamResultType | null
    solicitationResult: $Enums.SolicitationResult | null
    solicitationConclusionText: string | null
    solicitationSampleConclusion: string | null
    solicitationColectTypeConclusion: string | null
    solicitationSampleQuality: $Enums.SolicitationSampleQuality | null
    solicitationClinicAvaliation: string | null
    isDeleted: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
    userId: string | null
  }

  export type SolicitationCountAggregateOutputType = {
    id: number
    tutor: number
    patient: number
    gender: number
    age: number
    doctor: number
    specie: number
    hospitalVet: number
    infectiousAgents: number
    samples: number
    exams: number
    status: number
    finishedAt: number
    canceledAt: number
    canceledCause: number
    blockedAt: number
    blockedCause: number
    examResultType: number
    solicitationResult: number
    solicitationConclusionText: number
    solicitationSampleConclusion: number
    solicitationColectTypeConclusion: number
    solicitationSampleQuality: number
    solicitationClinicAvaliation: number
    isDeleted: number
    createdAt: number
    updatedAt: number
    bloodCollectionTubeColor: number
    userId: number
    _all: number
  }


  export type SolicitationMinAggregateInputType = {
    id?: true
    tutor?: true
    patient?: true
    gender?: true
    age?: true
    doctor?: true
    specie?: true
    hospitalVet?: true
    status?: true
    finishedAt?: true
    canceledAt?: true
    canceledCause?: true
    blockedAt?: true
    blockedCause?: true
    examResultType?: true
    solicitationResult?: true
    solicitationConclusionText?: true
    solicitationSampleConclusion?: true
    solicitationColectTypeConclusion?: true
    solicitationSampleQuality?: true
    solicitationClinicAvaliation?: true
    isDeleted?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
  }

  export type SolicitationMaxAggregateInputType = {
    id?: true
    tutor?: true
    patient?: true
    gender?: true
    age?: true
    doctor?: true
    specie?: true
    hospitalVet?: true
    status?: true
    finishedAt?: true
    canceledAt?: true
    canceledCause?: true
    blockedAt?: true
    blockedCause?: true
    examResultType?: true
    solicitationResult?: true
    solicitationConclusionText?: true
    solicitationSampleConclusion?: true
    solicitationColectTypeConclusion?: true
    solicitationSampleQuality?: true
    solicitationClinicAvaliation?: true
    isDeleted?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
  }

  export type SolicitationCountAggregateInputType = {
    id?: true
    tutor?: true
    patient?: true
    gender?: true
    age?: true
    doctor?: true
    specie?: true
    hospitalVet?: true
    infectiousAgents?: true
    samples?: true
    exams?: true
    status?: true
    finishedAt?: true
    canceledAt?: true
    canceledCause?: true
    blockedAt?: true
    blockedCause?: true
    examResultType?: true
    solicitationResult?: true
    solicitationConclusionText?: true
    solicitationSampleConclusion?: true
    solicitationColectTypeConclusion?: true
    solicitationSampleQuality?: true
    solicitationClinicAvaliation?: true
    isDeleted?: true
    createdAt?: true
    updatedAt?: true
    bloodCollectionTubeColor?: true
    userId?: true
    _all?: true
  }

  export type SolicitationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Solicitation to aggregate.
     */
    where?: SolicitationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Solicitations to fetch.
     */
    orderBy?: SolicitationOrderByWithRelationInput | SolicitationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SolicitationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Solicitations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Solicitations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Solicitations
    **/
    _count?: true | SolicitationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SolicitationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SolicitationMaxAggregateInputType
  }

  export type GetSolicitationAggregateType<T extends SolicitationAggregateArgs> = {
        [P in keyof T & keyof AggregateSolicitation]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSolicitation[P]>
      : GetScalarType<T[P], AggregateSolicitation[P]>
  }




  export type SolicitationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SolicitationWhereInput
    orderBy?: SolicitationOrderByWithAggregationInput | SolicitationOrderByWithAggregationInput[]
    by: SolicitationScalarFieldEnum[] | SolicitationScalarFieldEnum
    having?: SolicitationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SolicitationCountAggregateInputType | true
    _min?: SolicitationMinAggregateInputType
    _max?: SolicitationMaxAggregateInputType
  }

  export type SolicitationGroupByOutputType = {
    id: string
    tutor: string | null
    patient: string | null
    gender: string | null
    age: string | null
    doctor: string | null
    specie: string | null
    hospitalVet: string | null
    infectiousAgents: string[]
    samples: string[]
    exams: string[]
    status: $Enums.SolicitationStatus
    finishedAt: Date | null
    canceledAt: Date | null
    canceledCause: string | null
    blockedAt: Date | null
    blockedCause: string | null
    examResultType: $Enums.ExamResultType | null
    solicitationResult: $Enums.SolicitationResult | null
    solicitationConclusionText: string | null
    solicitationSampleConclusion: string | null
    solicitationColectTypeConclusion: string | null
    solicitationSampleQuality: $Enums.SolicitationSampleQuality | null
    solicitationClinicAvaliation: string | null
    isDeleted: boolean
    createdAt: Date
    updatedAt: Date
    bloodCollectionTubeColor: string[]
    userId: string | null
    _count: SolicitationCountAggregateOutputType | null
    _min: SolicitationMinAggregateOutputType | null
    _max: SolicitationMaxAggregateOutputType | null
  }

  type GetSolicitationGroupByPayload<T extends SolicitationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SolicitationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SolicitationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SolicitationGroupByOutputType[P]>
            : GetScalarType<T[P], SolicitationGroupByOutputType[P]>
        }
      >
    >


  export type SolicitationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tutor?: boolean
    patient?: boolean
    gender?: boolean
    age?: boolean
    doctor?: boolean
    specie?: boolean
    hospitalVet?: boolean
    infectiousAgents?: boolean
    samples?: boolean
    exams?: boolean
    status?: boolean
    finishedAt?: boolean
    canceledAt?: boolean
    canceledCause?: boolean
    blockedAt?: boolean
    blockedCause?: boolean
    examResultType?: boolean
    solicitationResult?: boolean
    solicitationConclusionText?: boolean
    solicitationSampleConclusion?: boolean
    solicitationColectTypeConclusion?: boolean
    solicitationSampleQuality?: boolean
    solicitationClinicAvaliation?: boolean
    isDeleted?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    bloodCollectionTubeColor?: boolean
    userId?: boolean
    user?: boolean | Solicitation$userArgs<ExtArgs>
    solicitationHistories?: boolean | Solicitation$solicitationHistoriesArgs<ExtArgs>
    _count?: boolean | SolicitationCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["solicitation"]>

  export type SolicitationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tutor?: boolean
    patient?: boolean
    gender?: boolean
    age?: boolean
    doctor?: boolean
    specie?: boolean
    hospitalVet?: boolean
    infectiousAgents?: boolean
    samples?: boolean
    exams?: boolean
    status?: boolean
    finishedAt?: boolean
    canceledAt?: boolean
    canceledCause?: boolean
    blockedAt?: boolean
    blockedCause?: boolean
    examResultType?: boolean
    solicitationResult?: boolean
    solicitationConclusionText?: boolean
    solicitationSampleConclusion?: boolean
    solicitationColectTypeConclusion?: boolean
    solicitationSampleQuality?: boolean
    solicitationClinicAvaliation?: boolean
    isDeleted?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    bloodCollectionTubeColor?: boolean
    userId?: boolean
    user?: boolean | Solicitation$userArgs<ExtArgs>
  }, ExtArgs["result"]["solicitation"]>

  export type SolicitationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tutor?: boolean
    patient?: boolean
    gender?: boolean
    age?: boolean
    doctor?: boolean
    specie?: boolean
    hospitalVet?: boolean
    infectiousAgents?: boolean
    samples?: boolean
    exams?: boolean
    status?: boolean
    finishedAt?: boolean
    canceledAt?: boolean
    canceledCause?: boolean
    blockedAt?: boolean
    blockedCause?: boolean
    examResultType?: boolean
    solicitationResult?: boolean
    solicitationConclusionText?: boolean
    solicitationSampleConclusion?: boolean
    solicitationColectTypeConclusion?: boolean
    solicitationSampleQuality?: boolean
    solicitationClinicAvaliation?: boolean
    isDeleted?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    bloodCollectionTubeColor?: boolean
    userId?: boolean
    user?: boolean | Solicitation$userArgs<ExtArgs>
  }, ExtArgs["result"]["solicitation"]>

  export type SolicitationSelectScalar = {
    id?: boolean
    tutor?: boolean
    patient?: boolean
    gender?: boolean
    age?: boolean
    doctor?: boolean
    specie?: boolean
    hospitalVet?: boolean
    infectiousAgents?: boolean
    samples?: boolean
    exams?: boolean
    status?: boolean
    finishedAt?: boolean
    canceledAt?: boolean
    canceledCause?: boolean
    blockedAt?: boolean
    blockedCause?: boolean
    examResultType?: boolean
    solicitationResult?: boolean
    solicitationConclusionText?: boolean
    solicitationSampleConclusion?: boolean
    solicitationColectTypeConclusion?: boolean
    solicitationSampleQuality?: boolean
    solicitationClinicAvaliation?: boolean
    isDeleted?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    bloodCollectionTubeColor?: boolean
    userId?: boolean
  }

  export type SolicitationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "tutor" | "patient" | "gender" | "age" | "doctor" | "specie" | "hospitalVet" | "infectiousAgents" | "samples" | "exams" | "status" | "finishedAt" | "canceledAt" | "canceledCause" | "blockedAt" | "blockedCause" | "examResultType" | "solicitationResult" | "solicitationConclusionText" | "solicitationSampleConclusion" | "solicitationColectTypeConclusion" | "solicitationSampleQuality" | "solicitationClinicAvaliation" | "isDeleted" | "createdAt" | "updatedAt" | "bloodCollectionTubeColor" | "userId", ExtArgs["result"]["solicitation"]>
  export type SolicitationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | Solicitation$userArgs<ExtArgs>
    solicitationHistories?: boolean | Solicitation$solicitationHistoriesArgs<ExtArgs>
    _count?: boolean | SolicitationCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type SolicitationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | Solicitation$userArgs<ExtArgs>
  }
  export type SolicitationIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | Solicitation$userArgs<ExtArgs>
  }

  export type $SolicitationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Solicitation"
    objects: {
      user: Prisma.$UserPayload<ExtArgs> | null
      solicitationHistories: Prisma.$SolicitationHistoryPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      tutor: string | null
      patient: string | null
      gender: string | null
      age: string | null
      doctor: string | null
      specie: string | null
      hospitalVet: string | null
      infectiousAgents: string[]
      samples: string[]
      exams: string[]
      status: $Enums.SolicitationStatus
      finishedAt: Date | null
      canceledAt: Date | null
      canceledCause: string | null
      blockedAt: Date | null
      blockedCause: string | null
      examResultType: $Enums.ExamResultType | null
      solicitationResult: $Enums.SolicitationResult | null
      solicitationConclusionText: string | null
      solicitationSampleConclusion: string | null
      solicitationColectTypeConclusion: string | null
      solicitationSampleQuality: $Enums.SolicitationSampleQuality | null
      solicitationClinicAvaliation: string | null
      isDeleted: boolean
      createdAt: Date
      updatedAt: Date
      bloodCollectionTubeColor: string[]
      userId: string | null
    }, ExtArgs["result"]["solicitation"]>
    composites: {}
  }

  type SolicitationGetPayload<S extends boolean | null | undefined | SolicitationDefaultArgs> = $Result.GetResult<Prisma.$SolicitationPayload, S>

  type SolicitationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SolicitationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SolicitationCountAggregateInputType | true
    }

  export interface SolicitationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Solicitation'], meta: { name: 'Solicitation' } }
    /**
     * Find zero or one Solicitation that matches the filter.
     * @param {SolicitationFindUniqueArgs} args - Arguments to find a Solicitation
     * @example
     * // Get one Solicitation
     * const solicitation = await prisma.solicitation.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SolicitationFindUniqueArgs>(args: SelectSubset<T, SolicitationFindUniqueArgs<ExtArgs>>): Prisma__SolicitationClient<$Result.GetResult<Prisma.$SolicitationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Solicitation that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SolicitationFindUniqueOrThrowArgs} args - Arguments to find a Solicitation
     * @example
     * // Get one Solicitation
     * const solicitation = await prisma.solicitation.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SolicitationFindUniqueOrThrowArgs>(args: SelectSubset<T, SolicitationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SolicitationClient<$Result.GetResult<Prisma.$SolicitationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Solicitation that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SolicitationFindFirstArgs} args - Arguments to find a Solicitation
     * @example
     * // Get one Solicitation
     * const solicitation = await prisma.solicitation.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SolicitationFindFirstArgs>(args?: SelectSubset<T, SolicitationFindFirstArgs<ExtArgs>>): Prisma__SolicitationClient<$Result.GetResult<Prisma.$SolicitationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Solicitation that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SolicitationFindFirstOrThrowArgs} args - Arguments to find a Solicitation
     * @example
     * // Get one Solicitation
     * const solicitation = await prisma.solicitation.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SolicitationFindFirstOrThrowArgs>(args?: SelectSubset<T, SolicitationFindFirstOrThrowArgs<ExtArgs>>): Prisma__SolicitationClient<$Result.GetResult<Prisma.$SolicitationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Solicitations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SolicitationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Solicitations
     * const solicitations = await prisma.solicitation.findMany()
     * 
     * // Get first 10 Solicitations
     * const solicitations = await prisma.solicitation.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const solicitationWithIdOnly = await prisma.solicitation.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SolicitationFindManyArgs>(args?: SelectSubset<T, SolicitationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SolicitationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Solicitation.
     * @param {SolicitationCreateArgs} args - Arguments to create a Solicitation.
     * @example
     * // Create one Solicitation
     * const Solicitation = await prisma.solicitation.create({
     *   data: {
     *     // ... data to create a Solicitation
     *   }
     * })
     * 
     */
    create<T extends SolicitationCreateArgs>(args: SelectSubset<T, SolicitationCreateArgs<ExtArgs>>): Prisma__SolicitationClient<$Result.GetResult<Prisma.$SolicitationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Solicitations.
     * @param {SolicitationCreateManyArgs} args - Arguments to create many Solicitations.
     * @example
     * // Create many Solicitations
     * const solicitation = await prisma.solicitation.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SolicitationCreateManyArgs>(args?: SelectSubset<T, SolicitationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Solicitations and returns the data saved in the database.
     * @param {SolicitationCreateManyAndReturnArgs} args - Arguments to create many Solicitations.
     * @example
     * // Create many Solicitations
     * const solicitation = await prisma.solicitation.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Solicitations and only return the `id`
     * const solicitationWithIdOnly = await prisma.solicitation.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SolicitationCreateManyAndReturnArgs>(args?: SelectSubset<T, SolicitationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SolicitationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Solicitation.
     * @param {SolicitationDeleteArgs} args - Arguments to delete one Solicitation.
     * @example
     * // Delete one Solicitation
     * const Solicitation = await prisma.solicitation.delete({
     *   where: {
     *     // ... filter to delete one Solicitation
     *   }
     * })
     * 
     */
    delete<T extends SolicitationDeleteArgs>(args: SelectSubset<T, SolicitationDeleteArgs<ExtArgs>>): Prisma__SolicitationClient<$Result.GetResult<Prisma.$SolicitationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Solicitation.
     * @param {SolicitationUpdateArgs} args - Arguments to update one Solicitation.
     * @example
     * // Update one Solicitation
     * const solicitation = await prisma.solicitation.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SolicitationUpdateArgs>(args: SelectSubset<T, SolicitationUpdateArgs<ExtArgs>>): Prisma__SolicitationClient<$Result.GetResult<Prisma.$SolicitationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Solicitations.
     * @param {SolicitationDeleteManyArgs} args - Arguments to filter Solicitations to delete.
     * @example
     * // Delete a few Solicitations
     * const { count } = await prisma.solicitation.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SolicitationDeleteManyArgs>(args?: SelectSubset<T, SolicitationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Solicitations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SolicitationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Solicitations
     * const solicitation = await prisma.solicitation.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SolicitationUpdateManyArgs>(args: SelectSubset<T, SolicitationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Solicitations and returns the data updated in the database.
     * @param {SolicitationUpdateManyAndReturnArgs} args - Arguments to update many Solicitations.
     * @example
     * // Update many Solicitations
     * const solicitation = await prisma.solicitation.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Solicitations and only return the `id`
     * const solicitationWithIdOnly = await prisma.solicitation.updateManyAndReturn({
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
    updateManyAndReturn<T extends SolicitationUpdateManyAndReturnArgs>(args: SelectSubset<T, SolicitationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SolicitationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Solicitation.
     * @param {SolicitationUpsertArgs} args - Arguments to update or create a Solicitation.
     * @example
     * // Update or create a Solicitation
     * const solicitation = await prisma.solicitation.upsert({
     *   create: {
     *     // ... data to create a Solicitation
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Solicitation we want to update
     *   }
     * })
     */
    upsert<T extends SolicitationUpsertArgs>(args: SelectSubset<T, SolicitationUpsertArgs<ExtArgs>>): Prisma__SolicitationClient<$Result.GetResult<Prisma.$SolicitationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Solicitations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SolicitationCountArgs} args - Arguments to filter Solicitations to count.
     * @example
     * // Count the number of Solicitations
     * const count = await prisma.solicitation.count({
     *   where: {
     *     // ... the filter for the Solicitations we want to count
     *   }
     * })
    **/
    count<T extends SolicitationCountArgs>(
      args?: Subset<T, SolicitationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SolicitationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Solicitation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SolicitationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SolicitationAggregateArgs>(args: Subset<T, SolicitationAggregateArgs>): Prisma.PrismaPromise<GetSolicitationAggregateType<T>>

    /**
     * Group by Solicitation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SolicitationGroupByArgs} args - Group by arguments.
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
      T extends SolicitationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SolicitationGroupByArgs['orderBy'] }
        : { orderBy?: SolicitationGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SolicitationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSolicitationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Solicitation model
   */
  readonly fields: SolicitationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Solicitation.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SolicitationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends Solicitation$userArgs<ExtArgs> = {}>(args?: Subset<T, Solicitation$userArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    solicitationHistories<T extends Solicitation$solicitationHistoriesArgs<ExtArgs> = {}>(args?: Subset<T, Solicitation$solicitationHistoriesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SolicitationHistoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Solicitation model
   */
  interface SolicitationFieldRefs {
    readonly id: FieldRef<"Solicitation", 'String'>
    readonly tutor: FieldRef<"Solicitation", 'String'>
    readonly patient: FieldRef<"Solicitation", 'String'>
    readonly gender: FieldRef<"Solicitation", 'String'>
    readonly age: FieldRef<"Solicitation", 'String'>
    readonly doctor: FieldRef<"Solicitation", 'String'>
    readonly specie: FieldRef<"Solicitation", 'String'>
    readonly hospitalVet: FieldRef<"Solicitation", 'String'>
    readonly infectiousAgents: FieldRef<"Solicitation", 'String[]'>
    readonly samples: FieldRef<"Solicitation", 'String[]'>
    readonly exams: FieldRef<"Solicitation", 'String[]'>
    readonly status: FieldRef<"Solicitation", 'SolicitationStatus'>
    readonly finishedAt: FieldRef<"Solicitation", 'DateTime'>
    readonly canceledAt: FieldRef<"Solicitation", 'DateTime'>
    readonly canceledCause: FieldRef<"Solicitation", 'String'>
    readonly blockedAt: FieldRef<"Solicitation", 'DateTime'>
    readonly blockedCause: FieldRef<"Solicitation", 'String'>
    readonly examResultType: FieldRef<"Solicitation", 'ExamResultType'>
    readonly solicitationResult: FieldRef<"Solicitation", 'SolicitationResult'>
    readonly solicitationConclusionText: FieldRef<"Solicitation", 'String'>
    readonly solicitationSampleConclusion: FieldRef<"Solicitation", 'String'>
    readonly solicitationColectTypeConclusion: FieldRef<"Solicitation", 'String'>
    readonly solicitationSampleQuality: FieldRef<"Solicitation", 'SolicitationSampleQuality'>
    readonly solicitationClinicAvaliation: FieldRef<"Solicitation", 'String'>
    readonly isDeleted: FieldRef<"Solicitation", 'Boolean'>
    readonly createdAt: FieldRef<"Solicitation", 'DateTime'>
    readonly updatedAt: FieldRef<"Solicitation", 'DateTime'>
    readonly bloodCollectionTubeColor: FieldRef<"Solicitation", 'String[]'>
    readonly userId: FieldRef<"Solicitation", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Solicitation findUnique
   */
  export type SolicitationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Solicitation
     */
    select?: SolicitationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Solicitation
     */
    omit?: SolicitationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SolicitationInclude<ExtArgs> | null
    /**
     * Filter, which Solicitation to fetch.
     */
    where: SolicitationWhereUniqueInput
  }

  /**
   * Solicitation findUniqueOrThrow
   */
  export type SolicitationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Solicitation
     */
    select?: SolicitationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Solicitation
     */
    omit?: SolicitationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SolicitationInclude<ExtArgs> | null
    /**
     * Filter, which Solicitation to fetch.
     */
    where: SolicitationWhereUniqueInput
  }

  /**
   * Solicitation findFirst
   */
  export type SolicitationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Solicitation
     */
    select?: SolicitationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Solicitation
     */
    omit?: SolicitationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SolicitationInclude<ExtArgs> | null
    /**
     * Filter, which Solicitation to fetch.
     */
    where?: SolicitationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Solicitations to fetch.
     */
    orderBy?: SolicitationOrderByWithRelationInput | SolicitationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Solicitations.
     */
    cursor?: SolicitationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Solicitations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Solicitations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Solicitations.
     */
    distinct?: SolicitationScalarFieldEnum | SolicitationScalarFieldEnum[]
  }

  /**
   * Solicitation findFirstOrThrow
   */
  export type SolicitationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Solicitation
     */
    select?: SolicitationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Solicitation
     */
    omit?: SolicitationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SolicitationInclude<ExtArgs> | null
    /**
     * Filter, which Solicitation to fetch.
     */
    where?: SolicitationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Solicitations to fetch.
     */
    orderBy?: SolicitationOrderByWithRelationInput | SolicitationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Solicitations.
     */
    cursor?: SolicitationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Solicitations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Solicitations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Solicitations.
     */
    distinct?: SolicitationScalarFieldEnum | SolicitationScalarFieldEnum[]
  }

  /**
   * Solicitation findMany
   */
  export type SolicitationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Solicitation
     */
    select?: SolicitationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Solicitation
     */
    omit?: SolicitationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SolicitationInclude<ExtArgs> | null
    /**
     * Filter, which Solicitations to fetch.
     */
    where?: SolicitationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Solicitations to fetch.
     */
    orderBy?: SolicitationOrderByWithRelationInput | SolicitationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Solicitations.
     */
    cursor?: SolicitationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Solicitations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Solicitations.
     */
    skip?: number
    distinct?: SolicitationScalarFieldEnum | SolicitationScalarFieldEnum[]
  }

  /**
   * Solicitation create
   */
  export type SolicitationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Solicitation
     */
    select?: SolicitationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Solicitation
     */
    omit?: SolicitationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SolicitationInclude<ExtArgs> | null
    /**
     * The data needed to create a Solicitation.
     */
    data: XOR<SolicitationCreateInput, SolicitationUncheckedCreateInput>
  }

  /**
   * Solicitation createMany
   */
  export type SolicitationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Solicitations.
     */
    data: SolicitationCreateManyInput | SolicitationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Solicitation createManyAndReturn
   */
  export type SolicitationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Solicitation
     */
    select?: SolicitationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Solicitation
     */
    omit?: SolicitationOmit<ExtArgs> | null
    /**
     * The data used to create many Solicitations.
     */
    data: SolicitationCreateManyInput | SolicitationCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SolicitationIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Solicitation update
   */
  export type SolicitationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Solicitation
     */
    select?: SolicitationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Solicitation
     */
    omit?: SolicitationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SolicitationInclude<ExtArgs> | null
    /**
     * The data needed to update a Solicitation.
     */
    data: XOR<SolicitationUpdateInput, SolicitationUncheckedUpdateInput>
    /**
     * Choose, which Solicitation to update.
     */
    where: SolicitationWhereUniqueInput
  }

  /**
   * Solicitation updateMany
   */
  export type SolicitationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Solicitations.
     */
    data: XOR<SolicitationUpdateManyMutationInput, SolicitationUncheckedUpdateManyInput>
    /**
     * Filter which Solicitations to update
     */
    where?: SolicitationWhereInput
    /**
     * Limit how many Solicitations to update.
     */
    limit?: number
  }

  /**
   * Solicitation updateManyAndReturn
   */
  export type SolicitationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Solicitation
     */
    select?: SolicitationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Solicitation
     */
    omit?: SolicitationOmit<ExtArgs> | null
    /**
     * The data used to update Solicitations.
     */
    data: XOR<SolicitationUpdateManyMutationInput, SolicitationUncheckedUpdateManyInput>
    /**
     * Filter which Solicitations to update
     */
    where?: SolicitationWhereInput
    /**
     * Limit how many Solicitations to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SolicitationIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Solicitation upsert
   */
  export type SolicitationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Solicitation
     */
    select?: SolicitationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Solicitation
     */
    omit?: SolicitationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SolicitationInclude<ExtArgs> | null
    /**
     * The filter to search for the Solicitation to update in case it exists.
     */
    where: SolicitationWhereUniqueInput
    /**
     * In case the Solicitation found by the `where` argument doesn't exist, create a new Solicitation with this data.
     */
    create: XOR<SolicitationCreateInput, SolicitationUncheckedCreateInput>
    /**
     * In case the Solicitation was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SolicitationUpdateInput, SolicitationUncheckedUpdateInput>
  }

  /**
   * Solicitation delete
   */
  export type SolicitationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Solicitation
     */
    select?: SolicitationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Solicitation
     */
    omit?: SolicitationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SolicitationInclude<ExtArgs> | null
    /**
     * Filter which Solicitation to delete.
     */
    where: SolicitationWhereUniqueInput
  }

  /**
   * Solicitation deleteMany
   */
  export type SolicitationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Solicitations to delete
     */
    where?: SolicitationWhereInput
    /**
     * Limit how many Solicitations to delete.
     */
    limit?: number
  }

  /**
   * Solicitation.user
   */
  export type Solicitation$userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * Solicitation.solicitationHistories
   */
  export type Solicitation$solicitationHistoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SolicitationHistory
     */
    select?: SolicitationHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the SolicitationHistory
     */
    omit?: SolicitationHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SolicitationHistoryInclude<ExtArgs> | null
    where?: SolicitationHistoryWhereInput
    orderBy?: SolicitationHistoryOrderByWithRelationInput | SolicitationHistoryOrderByWithRelationInput[]
    cursor?: SolicitationHistoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SolicitationHistoryScalarFieldEnum | SolicitationHistoryScalarFieldEnum[]
  }

  /**
   * Solicitation without action
   */
  export type SolicitationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Solicitation
     */
    select?: SolicitationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Solicitation
     */
    omit?: SolicitationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SolicitationInclude<ExtArgs> | null
  }


  /**
   * Model SolicitationHistory
   */

  export type AggregateSolicitationHistory = {
    _count: SolicitationHistoryCountAggregateOutputType | null
    _min: SolicitationHistoryMinAggregateOutputType | null
    _max: SolicitationHistoryMaxAggregateOutputType | null
  }

  export type SolicitationHistoryMinAggregateOutputType = {
    id: string | null
    solicitationId: string | null
    previousStatus: $Enums.SolicitationStatus | null
    newStatus: $Enums.SolicitationStatus | null
    blockedCause: string | null
    changedAt: Date | null
    changedById: string | null
  }

  export type SolicitationHistoryMaxAggregateOutputType = {
    id: string | null
    solicitationId: string | null
    previousStatus: $Enums.SolicitationStatus | null
    newStatus: $Enums.SolicitationStatus | null
    blockedCause: string | null
    changedAt: Date | null
    changedById: string | null
  }

  export type SolicitationHistoryCountAggregateOutputType = {
    id: number
    solicitationId: number
    previousStatus: number
    newStatus: number
    blockedCause: number
    changedAt: number
    changedById: number
    _all: number
  }


  export type SolicitationHistoryMinAggregateInputType = {
    id?: true
    solicitationId?: true
    previousStatus?: true
    newStatus?: true
    blockedCause?: true
    changedAt?: true
    changedById?: true
  }

  export type SolicitationHistoryMaxAggregateInputType = {
    id?: true
    solicitationId?: true
    previousStatus?: true
    newStatus?: true
    blockedCause?: true
    changedAt?: true
    changedById?: true
  }

  export type SolicitationHistoryCountAggregateInputType = {
    id?: true
    solicitationId?: true
    previousStatus?: true
    newStatus?: true
    blockedCause?: true
    changedAt?: true
    changedById?: true
    _all?: true
  }

  export type SolicitationHistoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SolicitationHistory to aggregate.
     */
    where?: SolicitationHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SolicitationHistories to fetch.
     */
    orderBy?: SolicitationHistoryOrderByWithRelationInput | SolicitationHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SolicitationHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SolicitationHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SolicitationHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SolicitationHistories
    **/
    _count?: true | SolicitationHistoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SolicitationHistoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SolicitationHistoryMaxAggregateInputType
  }

  export type GetSolicitationHistoryAggregateType<T extends SolicitationHistoryAggregateArgs> = {
        [P in keyof T & keyof AggregateSolicitationHistory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSolicitationHistory[P]>
      : GetScalarType<T[P], AggregateSolicitationHistory[P]>
  }




  export type SolicitationHistoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SolicitationHistoryWhereInput
    orderBy?: SolicitationHistoryOrderByWithAggregationInput | SolicitationHistoryOrderByWithAggregationInput[]
    by: SolicitationHistoryScalarFieldEnum[] | SolicitationHistoryScalarFieldEnum
    having?: SolicitationHistoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SolicitationHistoryCountAggregateInputType | true
    _min?: SolicitationHistoryMinAggregateInputType
    _max?: SolicitationHistoryMaxAggregateInputType
  }

  export type SolicitationHistoryGroupByOutputType = {
    id: string
    solicitationId: string
    previousStatus: $Enums.SolicitationStatus | null
    newStatus: $Enums.SolicitationStatus
    blockedCause: string | null
    changedAt: Date
    changedById: string
    _count: SolicitationHistoryCountAggregateOutputType | null
    _min: SolicitationHistoryMinAggregateOutputType | null
    _max: SolicitationHistoryMaxAggregateOutputType | null
  }

  type GetSolicitationHistoryGroupByPayload<T extends SolicitationHistoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SolicitationHistoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SolicitationHistoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SolicitationHistoryGroupByOutputType[P]>
            : GetScalarType<T[P], SolicitationHistoryGroupByOutputType[P]>
        }
      >
    >


  export type SolicitationHistorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    solicitationId?: boolean
    previousStatus?: boolean
    newStatus?: boolean
    blockedCause?: boolean
    changedAt?: boolean
    changedById?: boolean
    changedBy?: boolean | UserDefaultArgs<ExtArgs>
    solicitation?: boolean | SolicitationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["solicitationHistory"]>

  export type SolicitationHistorySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    solicitationId?: boolean
    previousStatus?: boolean
    newStatus?: boolean
    blockedCause?: boolean
    changedAt?: boolean
    changedById?: boolean
    changedBy?: boolean | UserDefaultArgs<ExtArgs>
    solicitation?: boolean | SolicitationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["solicitationHistory"]>

  export type SolicitationHistorySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    solicitationId?: boolean
    previousStatus?: boolean
    newStatus?: boolean
    blockedCause?: boolean
    changedAt?: boolean
    changedById?: boolean
    changedBy?: boolean | UserDefaultArgs<ExtArgs>
    solicitation?: boolean | SolicitationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["solicitationHistory"]>

  export type SolicitationHistorySelectScalar = {
    id?: boolean
    solicitationId?: boolean
    previousStatus?: boolean
    newStatus?: boolean
    blockedCause?: boolean
    changedAt?: boolean
    changedById?: boolean
  }

  export type SolicitationHistoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "solicitationId" | "previousStatus" | "newStatus" | "blockedCause" | "changedAt" | "changedById", ExtArgs["result"]["solicitationHistory"]>
  export type SolicitationHistoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    changedBy?: boolean | UserDefaultArgs<ExtArgs>
    solicitation?: boolean | SolicitationDefaultArgs<ExtArgs>
  }
  export type SolicitationHistoryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    changedBy?: boolean | UserDefaultArgs<ExtArgs>
    solicitation?: boolean | SolicitationDefaultArgs<ExtArgs>
  }
  export type SolicitationHistoryIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    changedBy?: boolean | UserDefaultArgs<ExtArgs>
    solicitation?: boolean | SolicitationDefaultArgs<ExtArgs>
  }

  export type $SolicitationHistoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SolicitationHistory"
    objects: {
      changedBy: Prisma.$UserPayload<ExtArgs>
      solicitation: Prisma.$SolicitationPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      solicitationId: string
      previousStatus: $Enums.SolicitationStatus | null
      newStatus: $Enums.SolicitationStatus
      blockedCause: string | null
      changedAt: Date
      changedById: string
    }, ExtArgs["result"]["solicitationHistory"]>
    composites: {}
  }

  type SolicitationHistoryGetPayload<S extends boolean | null | undefined | SolicitationHistoryDefaultArgs> = $Result.GetResult<Prisma.$SolicitationHistoryPayload, S>

  type SolicitationHistoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SolicitationHistoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SolicitationHistoryCountAggregateInputType | true
    }

  export interface SolicitationHistoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SolicitationHistory'], meta: { name: 'SolicitationHistory' } }
    /**
     * Find zero or one SolicitationHistory that matches the filter.
     * @param {SolicitationHistoryFindUniqueArgs} args - Arguments to find a SolicitationHistory
     * @example
     * // Get one SolicitationHistory
     * const solicitationHistory = await prisma.solicitationHistory.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SolicitationHistoryFindUniqueArgs>(args: SelectSubset<T, SolicitationHistoryFindUniqueArgs<ExtArgs>>): Prisma__SolicitationHistoryClient<$Result.GetResult<Prisma.$SolicitationHistoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SolicitationHistory that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SolicitationHistoryFindUniqueOrThrowArgs} args - Arguments to find a SolicitationHistory
     * @example
     * // Get one SolicitationHistory
     * const solicitationHistory = await prisma.solicitationHistory.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SolicitationHistoryFindUniqueOrThrowArgs>(args: SelectSubset<T, SolicitationHistoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SolicitationHistoryClient<$Result.GetResult<Prisma.$SolicitationHistoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SolicitationHistory that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SolicitationHistoryFindFirstArgs} args - Arguments to find a SolicitationHistory
     * @example
     * // Get one SolicitationHistory
     * const solicitationHistory = await prisma.solicitationHistory.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SolicitationHistoryFindFirstArgs>(args?: SelectSubset<T, SolicitationHistoryFindFirstArgs<ExtArgs>>): Prisma__SolicitationHistoryClient<$Result.GetResult<Prisma.$SolicitationHistoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SolicitationHistory that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SolicitationHistoryFindFirstOrThrowArgs} args - Arguments to find a SolicitationHistory
     * @example
     * // Get one SolicitationHistory
     * const solicitationHistory = await prisma.solicitationHistory.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SolicitationHistoryFindFirstOrThrowArgs>(args?: SelectSubset<T, SolicitationHistoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__SolicitationHistoryClient<$Result.GetResult<Prisma.$SolicitationHistoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SolicitationHistories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SolicitationHistoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SolicitationHistories
     * const solicitationHistories = await prisma.solicitationHistory.findMany()
     * 
     * // Get first 10 SolicitationHistories
     * const solicitationHistories = await prisma.solicitationHistory.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const solicitationHistoryWithIdOnly = await prisma.solicitationHistory.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SolicitationHistoryFindManyArgs>(args?: SelectSubset<T, SolicitationHistoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SolicitationHistoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SolicitationHistory.
     * @param {SolicitationHistoryCreateArgs} args - Arguments to create a SolicitationHistory.
     * @example
     * // Create one SolicitationHistory
     * const SolicitationHistory = await prisma.solicitationHistory.create({
     *   data: {
     *     // ... data to create a SolicitationHistory
     *   }
     * })
     * 
     */
    create<T extends SolicitationHistoryCreateArgs>(args: SelectSubset<T, SolicitationHistoryCreateArgs<ExtArgs>>): Prisma__SolicitationHistoryClient<$Result.GetResult<Prisma.$SolicitationHistoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SolicitationHistories.
     * @param {SolicitationHistoryCreateManyArgs} args - Arguments to create many SolicitationHistories.
     * @example
     * // Create many SolicitationHistories
     * const solicitationHistory = await prisma.solicitationHistory.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SolicitationHistoryCreateManyArgs>(args?: SelectSubset<T, SolicitationHistoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SolicitationHistories and returns the data saved in the database.
     * @param {SolicitationHistoryCreateManyAndReturnArgs} args - Arguments to create many SolicitationHistories.
     * @example
     * // Create many SolicitationHistories
     * const solicitationHistory = await prisma.solicitationHistory.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SolicitationHistories and only return the `id`
     * const solicitationHistoryWithIdOnly = await prisma.solicitationHistory.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SolicitationHistoryCreateManyAndReturnArgs>(args?: SelectSubset<T, SolicitationHistoryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SolicitationHistoryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a SolicitationHistory.
     * @param {SolicitationHistoryDeleteArgs} args - Arguments to delete one SolicitationHistory.
     * @example
     * // Delete one SolicitationHistory
     * const SolicitationHistory = await prisma.solicitationHistory.delete({
     *   where: {
     *     // ... filter to delete one SolicitationHistory
     *   }
     * })
     * 
     */
    delete<T extends SolicitationHistoryDeleteArgs>(args: SelectSubset<T, SolicitationHistoryDeleteArgs<ExtArgs>>): Prisma__SolicitationHistoryClient<$Result.GetResult<Prisma.$SolicitationHistoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SolicitationHistory.
     * @param {SolicitationHistoryUpdateArgs} args - Arguments to update one SolicitationHistory.
     * @example
     * // Update one SolicitationHistory
     * const solicitationHistory = await prisma.solicitationHistory.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SolicitationHistoryUpdateArgs>(args: SelectSubset<T, SolicitationHistoryUpdateArgs<ExtArgs>>): Prisma__SolicitationHistoryClient<$Result.GetResult<Prisma.$SolicitationHistoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SolicitationHistories.
     * @param {SolicitationHistoryDeleteManyArgs} args - Arguments to filter SolicitationHistories to delete.
     * @example
     * // Delete a few SolicitationHistories
     * const { count } = await prisma.solicitationHistory.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SolicitationHistoryDeleteManyArgs>(args?: SelectSubset<T, SolicitationHistoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SolicitationHistories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SolicitationHistoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SolicitationHistories
     * const solicitationHistory = await prisma.solicitationHistory.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SolicitationHistoryUpdateManyArgs>(args: SelectSubset<T, SolicitationHistoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SolicitationHistories and returns the data updated in the database.
     * @param {SolicitationHistoryUpdateManyAndReturnArgs} args - Arguments to update many SolicitationHistories.
     * @example
     * // Update many SolicitationHistories
     * const solicitationHistory = await prisma.solicitationHistory.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more SolicitationHistories and only return the `id`
     * const solicitationHistoryWithIdOnly = await prisma.solicitationHistory.updateManyAndReturn({
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
    updateManyAndReturn<T extends SolicitationHistoryUpdateManyAndReturnArgs>(args: SelectSubset<T, SolicitationHistoryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SolicitationHistoryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one SolicitationHistory.
     * @param {SolicitationHistoryUpsertArgs} args - Arguments to update or create a SolicitationHistory.
     * @example
     * // Update or create a SolicitationHistory
     * const solicitationHistory = await prisma.solicitationHistory.upsert({
     *   create: {
     *     // ... data to create a SolicitationHistory
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SolicitationHistory we want to update
     *   }
     * })
     */
    upsert<T extends SolicitationHistoryUpsertArgs>(args: SelectSubset<T, SolicitationHistoryUpsertArgs<ExtArgs>>): Prisma__SolicitationHistoryClient<$Result.GetResult<Prisma.$SolicitationHistoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of SolicitationHistories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SolicitationHistoryCountArgs} args - Arguments to filter SolicitationHistories to count.
     * @example
     * // Count the number of SolicitationHistories
     * const count = await prisma.solicitationHistory.count({
     *   where: {
     *     // ... the filter for the SolicitationHistories we want to count
     *   }
     * })
    **/
    count<T extends SolicitationHistoryCountArgs>(
      args?: Subset<T, SolicitationHistoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SolicitationHistoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SolicitationHistory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SolicitationHistoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SolicitationHistoryAggregateArgs>(args: Subset<T, SolicitationHistoryAggregateArgs>): Prisma.PrismaPromise<GetSolicitationHistoryAggregateType<T>>

    /**
     * Group by SolicitationHistory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SolicitationHistoryGroupByArgs} args - Group by arguments.
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
      T extends SolicitationHistoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SolicitationHistoryGroupByArgs['orderBy'] }
        : { orderBy?: SolicitationHistoryGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SolicitationHistoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSolicitationHistoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SolicitationHistory model
   */
  readonly fields: SolicitationHistoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SolicitationHistory.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SolicitationHistoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    changedBy<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    solicitation<T extends SolicitationDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SolicitationDefaultArgs<ExtArgs>>): Prisma__SolicitationClient<$Result.GetResult<Prisma.$SolicitationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the SolicitationHistory model
   */
  interface SolicitationHistoryFieldRefs {
    readonly id: FieldRef<"SolicitationHistory", 'String'>
    readonly solicitationId: FieldRef<"SolicitationHistory", 'String'>
    readonly previousStatus: FieldRef<"SolicitationHistory", 'SolicitationStatus'>
    readonly newStatus: FieldRef<"SolicitationHistory", 'SolicitationStatus'>
    readonly blockedCause: FieldRef<"SolicitationHistory", 'String'>
    readonly changedAt: FieldRef<"SolicitationHistory", 'DateTime'>
    readonly changedById: FieldRef<"SolicitationHistory", 'String'>
  }
    

  // Custom InputTypes
  /**
   * SolicitationHistory findUnique
   */
  export type SolicitationHistoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SolicitationHistory
     */
    select?: SolicitationHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the SolicitationHistory
     */
    omit?: SolicitationHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SolicitationHistoryInclude<ExtArgs> | null
    /**
     * Filter, which SolicitationHistory to fetch.
     */
    where: SolicitationHistoryWhereUniqueInput
  }

  /**
   * SolicitationHistory findUniqueOrThrow
   */
  export type SolicitationHistoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SolicitationHistory
     */
    select?: SolicitationHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the SolicitationHistory
     */
    omit?: SolicitationHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SolicitationHistoryInclude<ExtArgs> | null
    /**
     * Filter, which SolicitationHistory to fetch.
     */
    where: SolicitationHistoryWhereUniqueInput
  }

  /**
   * SolicitationHistory findFirst
   */
  export type SolicitationHistoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SolicitationHistory
     */
    select?: SolicitationHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the SolicitationHistory
     */
    omit?: SolicitationHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SolicitationHistoryInclude<ExtArgs> | null
    /**
     * Filter, which SolicitationHistory to fetch.
     */
    where?: SolicitationHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SolicitationHistories to fetch.
     */
    orderBy?: SolicitationHistoryOrderByWithRelationInput | SolicitationHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SolicitationHistories.
     */
    cursor?: SolicitationHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SolicitationHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SolicitationHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SolicitationHistories.
     */
    distinct?: SolicitationHistoryScalarFieldEnum | SolicitationHistoryScalarFieldEnum[]
  }

  /**
   * SolicitationHistory findFirstOrThrow
   */
  export type SolicitationHistoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SolicitationHistory
     */
    select?: SolicitationHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the SolicitationHistory
     */
    omit?: SolicitationHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SolicitationHistoryInclude<ExtArgs> | null
    /**
     * Filter, which SolicitationHistory to fetch.
     */
    where?: SolicitationHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SolicitationHistories to fetch.
     */
    orderBy?: SolicitationHistoryOrderByWithRelationInput | SolicitationHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SolicitationHistories.
     */
    cursor?: SolicitationHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SolicitationHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SolicitationHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SolicitationHistories.
     */
    distinct?: SolicitationHistoryScalarFieldEnum | SolicitationHistoryScalarFieldEnum[]
  }

  /**
   * SolicitationHistory findMany
   */
  export type SolicitationHistoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SolicitationHistory
     */
    select?: SolicitationHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the SolicitationHistory
     */
    omit?: SolicitationHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SolicitationHistoryInclude<ExtArgs> | null
    /**
     * Filter, which SolicitationHistories to fetch.
     */
    where?: SolicitationHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SolicitationHistories to fetch.
     */
    orderBy?: SolicitationHistoryOrderByWithRelationInput | SolicitationHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SolicitationHistories.
     */
    cursor?: SolicitationHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SolicitationHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SolicitationHistories.
     */
    skip?: number
    distinct?: SolicitationHistoryScalarFieldEnum | SolicitationHistoryScalarFieldEnum[]
  }

  /**
   * SolicitationHistory create
   */
  export type SolicitationHistoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SolicitationHistory
     */
    select?: SolicitationHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the SolicitationHistory
     */
    omit?: SolicitationHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SolicitationHistoryInclude<ExtArgs> | null
    /**
     * The data needed to create a SolicitationHistory.
     */
    data: XOR<SolicitationHistoryCreateInput, SolicitationHistoryUncheckedCreateInput>
  }

  /**
   * SolicitationHistory createMany
   */
  export type SolicitationHistoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SolicitationHistories.
     */
    data: SolicitationHistoryCreateManyInput | SolicitationHistoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SolicitationHistory createManyAndReturn
   */
  export type SolicitationHistoryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SolicitationHistory
     */
    select?: SolicitationHistorySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SolicitationHistory
     */
    omit?: SolicitationHistoryOmit<ExtArgs> | null
    /**
     * The data used to create many SolicitationHistories.
     */
    data: SolicitationHistoryCreateManyInput | SolicitationHistoryCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SolicitationHistoryIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * SolicitationHistory update
   */
  export type SolicitationHistoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SolicitationHistory
     */
    select?: SolicitationHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the SolicitationHistory
     */
    omit?: SolicitationHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SolicitationHistoryInclude<ExtArgs> | null
    /**
     * The data needed to update a SolicitationHistory.
     */
    data: XOR<SolicitationHistoryUpdateInput, SolicitationHistoryUncheckedUpdateInput>
    /**
     * Choose, which SolicitationHistory to update.
     */
    where: SolicitationHistoryWhereUniqueInput
  }

  /**
   * SolicitationHistory updateMany
   */
  export type SolicitationHistoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SolicitationHistories.
     */
    data: XOR<SolicitationHistoryUpdateManyMutationInput, SolicitationHistoryUncheckedUpdateManyInput>
    /**
     * Filter which SolicitationHistories to update
     */
    where?: SolicitationHistoryWhereInput
    /**
     * Limit how many SolicitationHistories to update.
     */
    limit?: number
  }

  /**
   * SolicitationHistory updateManyAndReturn
   */
  export type SolicitationHistoryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SolicitationHistory
     */
    select?: SolicitationHistorySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SolicitationHistory
     */
    omit?: SolicitationHistoryOmit<ExtArgs> | null
    /**
     * The data used to update SolicitationHistories.
     */
    data: XOR<SolicitationHistoryUpdateManyMutationInput, SolicitationHistoryUncheckedUpdateManyInput>
    /**
     * Filter which SolicitationHistories to update
     */
    where?: SolicitationHistoryWhereInput
    /**
     * Limit how many SolicitationHistories to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SolicitationHistoryIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * SolicitationHistory upsert
   */
  export type SolicitationHistoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SolicitationHistory
     */
    select?: SolicitationHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the SolicitationHistory
     */
    omit?: SolicitationHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SolicitationHistoryInclude<ExtArgs> | null
    /**
     * The filter to search for the SolicitationHistory to update in case it exists.
     */
    where: SolicitationHistoryWhereUniqueInput
    /**
     * In case the SolicitationHistory found by the `where` argument doesn't exist, create a new SolicitationHistory with this data.
     */
    create: XOR<SolicitationHistoryCreateInput, SolicitationHistoryUncheckedCreateInput>
    /**
     * In case the SolicitationHistory was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SolicitationHistoryUpdateInput, SolicitationHistoryUncheckedUpdateInput>
  }

  /**
   * SolicitationHistory delete
   */
  export type SolicitationHistoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SolicitationHistory
     */
    select?: SolicitationHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the SolicitationHistory
     */
    omit?: SolicitationHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SolicitationHistoryInclude<ExtArgs> | null
    /**
     * Filter which SolicitationHistory to delete.
     */
    where: SolicitationHistoryWhereUniqueInput
  }

  /**
   * SolicitationHistory deleteMany
   */
  export type SolicitationHistoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SolicitationHistories to delete
     */
    where?: SolicitationHistoryWhereInput
    /**
     * Limit how many SolicitationHistories to delete.
     */
    limit?: number
  }

  /**
   * SolicitationHistory without action
   */
  export type SolicitationHistoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SolicitationHistory
     */
    select?: SolicitationHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the SolicitationHistory
     */
    omit?: SolicitationHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SolicitationHistoryInclude<ExtArgs> | null
  }


  /**
   * Model ExamResultTemplate
   */

  export type AggregateExamResultTemplate = {
    _count: ExamResultTemplateCountAggregateOutputType | null
    _min: ExamResultTemplateMinAggregateOutputType | null
    _max: ExamResultTemplateMaxAggregateOutputType | null
  }

  export type ExamResultTemplateMinAggregateOutputType = {
    id: string | null
    name: string | null
    fileName: string | null
    mimeType: string | null
    fileData: Bytes | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ExamResultTemplateMaxAggregateOutputType = {
    id: string | null
    name: string | null
    fileName: string | null
    mimeType: string | null
    fileData: Bytes | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ExamResultTemplateCountAggregateOutputType = {
    id: number
    name: number
    fileName: number
    mimeType: number
    fileData: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ExamResultTemplateMinAggregateInputType = {
    id?: true
    name?: true
    fileName?: true
    mimeType?: true
    fileData?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ExamResultTemplateMaxAggregateInputType = {
    id?: true
    name?: true
    fileName?: true
    mimeType?: true
    fileData?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ExamResultTemplateCountAggregateInputType = {
    id?: true
    name?: true
    fileName?: true
    mimeType?: true
    fileData?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ExamResultTemplateAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ExamResultTemplate to aggregate.
     */
    where?: ExamResultTemplateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ExamResultTemplates to fetch.
     */
    orderBy?: ExamResultTemplateOrderByWithRelationInput | ExamResultTemplateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ExamResultTemplateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ExamResultTemplates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ExamResultTemplates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ExamResultTemplates
    **/
    _count?: true | ExamResultTemplateCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ExamResultTemplateMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ExamResultTemplateMaxAggregateInputType
  }

  export type GetExamResultTemplateAggregateType<T extends ExamResultTemplateAggregateArgs> = {
        [P in keyof T & keyof AggregateExamResultTemplate]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateExamResultTemplate[P]>
      : GetScalarType<T[P], AggregateExamResultTemplate[P]>
  }




  export type ExamResultTemplateGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ExamResultTemplateWhereInput
    orderBy?: ExamResultTemplateOrderByWithAggregationInput | ExamResultTemplateOrderByWithAggregationInput[]
    by: ExamResultTemplateScalarFieldEnum[] | ExamResultTemplateScalarFieldEnum
    having?: ExamResultTemplateScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ExamResultTemplateCountAggregateInputType | true
    _min?: ExamResultTemplateMinAggregateInputType
    _max?: ExamResultTemplateMaxAggregateInputType
  }

  export type ExamResultTemplateGroupByOutputType = {
    id: string
    name: string | null
    fileName: string | null
    mimeType: string | null
    fileData: Bytes | null
    createdAt: Date
    updatedAt: Date
    _count: ExamResultTemplateCountAggregateOutputType | null
    _min: ExamResultTemplateMinAggregateOutputType | null
    _max: ExamResultTemplateMaxAggregateOutputType | null
  }

  type GetExamResultTemplateGroupByPayload<T extends ExamResultTemplateGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ExamResultTemplateGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ExamResultTemplateGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ExamResultTemplateGroupByOutputType[P]>
            : GetScalarType<T[P], ExamResultTemplateGroupByOutputType[P]>
        }
      >
    >


  export type ExamResultTemplateSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    fileName?: boolean
    mimeType?: boolean
    fileData?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["examResultTemplate"]>

  export type ExamResultTemplateSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    fileName?: boolean
    mimeType?: boolean
    fileData?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["examResultTemplate"]>

  export type ExamResultTemplateSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    fileName?: boolean
    mimeType?: boolean
    fileData?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["examResultTemplate"]>

  export type ExamResultTemplateSelectScalar = {
    id?: boolean
    name?: boolean
    fileName?: boolean
    mimeType?: boolean
    fileData?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ExamResultTemplateOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "fileName" | "mimeType" | "fileData" | "createdAt" | "updatedAt", ExtArgs["result"]["examResultTemplate"]>

  export type $ExamResultTemplatePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ExamResultTemplate"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string | null
      fileName: string | null
      mimeType: string | null
      fileData: Prisma.Bytes | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["examResultTemplate"]>
    composites: {}
  }

  type ExamResultTemplateGetPayload<S extends boolean | null | undefined | ExamResultTemplateDefaultArgs> = $Result.GetResult<Prisma.$ExamResultTemplatePayload, S>

  type ExamResultTemplateCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ExamResultTemplateFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ExamResultTemplateCountAggregateInputType | true
    }

  export interface ExamResultTemplateDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ExamResultTemplate'], meta: { name: 'ExamResultTemplate' } }
    /**
     * Find zero or one ExamResultTemplate that matches the filter.
     * @param {ExamResultTemplateFindUniqueArgs} args - Arguments to find a ExamResultTemplate
     * @example
     * // Get one ExamResultTemplate
     * const examResultTemplate = await prisma.examResultTemplate.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ExamResultTemplateFindUniqueArgs>(args: SelectSubset<T, ExamResultTemplateFindUniqueArgs<ExtArgs>>): Prisma__ExamResultTemplateClient<$Result.GetResult<Prisma.$ExamResultTemplatePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ExamResultTemplate that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ExamResultTemplateFindUniqueOrThrowArgs} args - Arguments to find a ExamResultTemplate
     * @example
     * // Get one ExamResultTemplate
     * const examResultTemplate = await prisma.examResultTemplate.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ExamResultTemplateFindUniqueOrThrowArgs>(args: SelectSubset<T, ExamResultTemplateFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ExamResultTemplateClient<$Result.GetResult<Prisma.$ExamResultTemplatePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ExamResultTemplate that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExamResultTemplateFindFirstArgs} args - Arguments to find a ExamResultTemplate
     * @example
     * // Get one ExamResultTemplate
     * const examResultTemplate = await prisma.examResultTemplate.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ExamResultTemplateFindFirstArgs>(args?: SelectSubset<T, ExamResultTemplateFindFirstArgs<ExtArgs>>): Prisma__ExamResultTemplateClient<$Result.GetResult<Prisma.$ExamResultTemplatePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ExamResultTemplate that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExamResultTemplateFindFirstOrThrowArgs} args - Arguments to find a ExamResultTemplate
     * @example
     * // Get one ExamResultTemplate
     * const examResultTemplate = await prisma.examResultTemplate.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ExamResultTemplateFindFirstOrThrowArgs>(args?: SelectSubset<T, ExamResultTemplateFindFirstOrThrowArgs<ExtArgs>>): Prisma__ExamResultTemplateClient<$Result.GetResult<Prisma.$ExamResultTemplatePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ExamResultTemplates that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExamResultTemplateFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ExamResultTemplates
     * const examResultTemplates = await prisma.examResultTemplate.findMany()
     * 
     * // Get first 10 ExamResultTemplates
     * const examResultTemplates = await prisma.examResultTemplate.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const examResultTemplateWithIdOnly = await prisma.examResultTemplate.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ExamResultTemplateFindManyArgs>(args?: SelectSubset<T, ExamResultTemplateFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExamResultTemplatePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ExamResultTemplate.
     * @param {ExamResultTemplateCreateArgs} args - Arguments to create a ExamResultTemplate.
     * @example
     * // Create one ExamResultTemplate
     * const ExamResultTemplate = await prisma.examResultTemplate.create({
     *   data: {
     *     // ... data to create a ExamResultTemplate
     *   }
     * })
     * 
     */
    create<T extends ExamResultTemplateCreateArgs>(args: SelectSubset<T, ExamResultTemplateCreateArgs<ExtArgs>>): Prisma__ExamResultTemplateClient<$Result.GetResult<Prisma.$ExamResultTemplatePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ExamResultTemplates.
     * @param {ExamResultTemplateCreateManyArgs} args - Arguments to create many ExamResultTemplates.
     * @example
     * // Create many ExamResultTemplates
     * const examResultTemplate = await prisma.examResultTemplate.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ExamResultTemplateCreateManyArgs>(args?: SelectSubset<T, ExamResultTemplateCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ExamResultTemplates and returns the data saved in the database.
     * @param {ExamResultTemplateCreateManyAndReturnArgs} args - Arguments to create many ExamResultTemplates.
     * @example
     * // Create many ExamResultTemplates
     * const examResultTemplate = await prisma.examResultTemplate.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ExamResultTemplates and only return the `id`
     * const examResultTemplateWithIdOnly = await prisma.examResultTemplate.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ExamResultTemplateCreateManyAndReturnArgs>(args?: SelectSubset<T, ExamResultTemplateCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExamResultTemplatePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ExamResultTemplate.
     * @param {ExamResultTemplateDeleteArgs} args - Arguments to delete one ExamResultTemplate.
     * @example
     * // Delete one ExamResultTemplate
     * const ExamResultTemplate = await prisma.examResultTemplate.delete({
     *   where: {
     *     // ... filter to delete one ExamResultTemplate
     *   }
     * })
     * 
     */
    delete<T extends ExamResultTemplateDeleteArgs>(args: SelectSubset<T, ExamResultTemplateDeleteArgs<ExtArgs>>): Prisma__ExamResultTemplateClient<$Result.GetResult<Prisma.$ExamResultTemplatePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ExamResultTemplate.
     * @param {ExamResultTemplateUpdateArgs} args - Arguments to update one ExamResultTemplate.
     * @example
     * // Update one ExamResultTemplate
     * const examResultTemplate = await prisma.examResultTemplate.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ExamResultTemplateUpdateArgs>(args: SelectSubset<T, ExamResultTemplateUpdateArgs<ExtArgs>>): Prisma__ExamResultTemplateClient<$Result.GetResult<Prisma.$ExamResultTemplatePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ExamResultTemplates.
     * @param {ExamResultTemplateDeleteManyArgs} args - Arguments to filter ExamResultTemplates to delete.
     * @example
     * // Delete a few ExamResultTemplates
     * const { count } = await prisma.examResultTemplate.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ExamResultTemplateDeleteManyArgs>(args?: SelectSubset<T, ExamResultTemplateDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ExamResultTemplates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExamResultTemplateUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ExamResultTemplates
     * const examResultTemplate = await prisma.examResultTemplate.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ExamResultTemplateUpdateManyArgs>(args: SelectSubset<T, ExamResultTemplateUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ExamResultTemplates and returns the data updated in the database.
     * @param {ExamResultTemplateUpdateManyAndReturnArgs} args - Arguments to update many ExamResultTemplates.
     * @example
     * // Update many ExamResultTemplates
     * const examResultTemplate = await prisma.examResultTemplate.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ExamResultTemplates and only return the `id`
     * const examResultTemplateWithIdOnly = await prisma.examResultTemplate.updateManyAndReturn({
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
    updateManyAndReturn<T extends ExamResultTemplateUpdateManyAndReturnArgs>(args: SelectSubset<T, ExamResultTemplateUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExamResultTemplatePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ExamResultTemplate.
     * @param {ExamResultTemplateUpsertArgs} args - Arguments to update or create a ExamResultTemplate.
     * @example
     * // Update or create a ExamResultTemplate
     * const examResultTemplate = await prisma.examResultTemplate.upsert({
     *   create: {
     *     // ... data to create a ExamResultTemplate
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ExamResultTemplate we want to update
     *   }
     * })
     */
    upsert<T extends ExamResultTemplateUpsertArgs>(args: SelectSubset<T, ExamResultTemplateUpsertArgs<ExtArgs>>): Prisma__ExamResultTemplateClient<$Result.GetResult<Prisma.$ExamResultTemplatePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ExamResultTemplates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExamResultTemplateCountArgs} args - Arguments to filter ExamResultTemplates to count.
     * @example
     * // Count the number of ExamResultTemplates
     * const count = await prisma.examResultTemplate.count({
     *   where: {
     *     // ... the filter for the ExamResultTemplates we want to count
     *   }
     * })
    **/
    count<T extends ExamResultTemplateCountArgs>(
      args?: Subset<T, ExamResultTemplateCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ExamResultTemplateCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ExamResultTemplate.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExamResultTemplateAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ExamResultTemplateAggregateArgs>(args: Subset<T, ExamResultTemplateAggregateArgs>): Prisma.PrismaPromise<GetExamResultTemplateAggregateType<T>>

    /**
     * Group by ExamResultTemplate.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExamResultTemplateGroupByArgs} args - Group by arguments.
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
      T extends ExamResultTemplateGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ExamResultTemplateGroupByArgs['orderBy'] }
        : { orderBy?: ExamResultTemplateGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ExamResultTemplateGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetExamResultTemplateGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ExamResultTemplate model
   */
  readonly fields: ExamResultTemplateFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ExamResultTemplate.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ExamResultTemplateClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the ExamResultTemplate model
   */
  interface ExamResultTemplateFieldRefs {
    readonly id: FieldRef<"ExamResultTemplate", 'String'>
    readonly name: FieldRef<"ExamResultTemplate", 'String'>
    readonly fileName: FieldRef<"ExamResultTemplate", 'String'>
    readonly mimeType: FieldRef<"ExamResultTemplate", 'String'>
    readonly fileData: FieldRef<"ExamResultTemplate", 'Bytes'>
    readonly createdAt: FieldRef<"ExamResultTemplate", 'DateTime'>
    readonly updatedAt: FieldRef<"ExamResultTemplate", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ExamResultTemplate findUnique
   */
  export type ExamResultTemplateFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExamResultTemplate
     */
    select?: ExamResultTemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExamResultTemplate
     */
    omit?: ExamResultTemplateOmit<ExtArgs> | null
    /**
     * Filter, which ExamResultTemplate to fetch.
     */
    where: ExamResultTemplateWhereUniqueInput
  }

  /**
   * ExamResultTemplate findUniqueOrThrow
   */
  export type ExamResultTemplateFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExamResultTemplate
     */
    select?: ExamResultTemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExamResultTemplate
     */
    omit?: ExamResultTemplateOmit<ExtArgs> | null
    /**
     * Filter, which ExamResultTemplate to fetch.
     */
    where: ExamResultTemplateWhereUniqueInput
  }

  /**
   * ExamResultTemplate findFirst
   */
  export type ExamResultTemplateFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExamResultTemplate
     */
    select?: ExamResultTemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExamResultTemplate
     */
    omit?: ExamResultTemplateOmit<ExtArgs> | null
    /**
     * Filter, which ExamResultTemplate to fetch.
     */
    where?: ExamResultTemplateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ExamResultTemplates to fetch.
     */
    orderBy?: ExamResultTemplateOrderByWithRelationInput | ExamResultTemplateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ExamResultTemplates.
     */
    cursor?: ExamResultTemplateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ExamResultTemplates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ExamResultTemplates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ExamResultTemplates.
     */
    distinct?: ExamResultTemplateScalarFieldEnum | ExamResultTemplateScalarFieldEnum[]
  }

  /**
   * ExamResultTemplate findFirstOrThrow
   */
  export type ExamResultTemplateFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExamResultTemplate
     */
    select?: ExamResultTemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExamResultTemplate
     */
    omit?: ExamResultTemplateOmit<ExtArgs> | null
    /**
     * Filter, which ExamResultTemplate to fetch.
     */
    where?: ExamResultTemplateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ExamResultTemplates to fetch.
     */
    orderBy?: ExamResultTemplateOrderByWithRelationInput | ExamResultTemplateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ExamResultTemplates.
     */
    cursor?: ExamResultTemplateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ExamResultTemplates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ExamResultTemplates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ExamResultTemplates.
     */
    distinct?: ExamResultTemplateScalarFieldEnum | ExamResultTemplateScalarFieldEnum[]
  }

  /**
   * ExamResultTemplate findMany
   */
  export type ExamResultTemplateFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExamResultTemplate
     */
    select?: ExamResultTemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExamResultTemplate
     */
    omit?: ExamResultTemplateOmit<ExtArgs> | null
    /**
     * Filter, which ExamResultTemplates to fetch.
     */
    where?: ExamResultTemplateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ExamResultTemplates to fetch.
     */
    orderBy?: ExamResultTemplateOrderByWithRelationInput | ExamResultTemplateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ExamResultTemplates.
     */
    cursor?: ExamResultTemplateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ExamResultTemplates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ExamResultTemplates.
     */
    skip?: number
    distinct?: ExamResultTemplateScalarFieldEnum | ExamResultTemplateScalarFieldEnum[]
  }

  /**
   * ExamResultTemplate create
   */
  export type ExamResultTemplateCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExamResultTemplate
     */
    select?: ExamResultTemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExamResultTemplate
     */
    omit?: ExamResultTemplateOmit<ExtArgs> | null
    /**
     * The data needed to create a ExamResultTemplate.
     */
    data: XOR<ExamResultTemplateCreateInput, ExamResultTemplateUncheckedCreateInput>
  }

  /**
   * ExamResultTemplate createMany
   */
  export type ExamResultTemplateCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ExamResultTemplates.
     */
    data: ExamResultTemplateCreateManyInput | ExamResultTemplateCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ExamResultTemplate createManyAndReturn
   */
  export type ExamResultTemplateCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExamResultTemplate
     */
    select?: ExamResultTemplateSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ExamResultTemplate
     */
    omit?: ExamResultTemplateOmit<ExtArgs> | null
    /**
     * The data used to create many ExamResultTemplates.
     */
    data: ExamResultTemplateCreateManyInput | ExamResultTemplateCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ExamResultTemplate update
   */
  export type ExamResultTemplateUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExamResultTemplate
     */
    select?: ExamResultTemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExamResultTemplate
     */
    omit?: ExamResultTemplateOmit<ExtArgs> | null
    /**
     * The data needed to update a ExamResultTemplate.
     */
    data: XOR<ExamResultTemplateUpdateInput, ExamResultTemplateUncheckedUpdateInput>
    /**
     * Choose, which ExamResultTemplate to update.
     */
    where: ExamResultTemplateWhereUniqueInput
  }

  /**
   * ExamResultTemplate updateMany
   */
  export type ExamResultTemplateUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ExamResultTemplates.
     */
    data: XOR<ExamResultTemplateUpdateManyMutationInput, ExamResultTemplateUncheckedUpdateManyInput>
    /**
     * Filter which ExamResultTemplates to update
     */
    where?: ExamResultTemplateWhereInput
    /**
     * Limit how many ExamResultTemplates to update.
     */
    limit?: number
  }

  /**
   * ExamResultTemplate updateManyAndReturn
   */
  export type ExamResultTemplateUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExamResultTemplate
     */
    select?: ExamResultTemplateSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ExamResultTemplate
     */
    omit?: ExamResultTemplateOmit<ExtArgs> | null
    /**
     * The data used to update ExamResultTemplates.
     */
    data: XOR<ExamResultTemplateUpdateManyMutationInput, ExamResultTemplateUncheckedUpdateManyInput>
    /**
     * Filter which ExamResultTemplates to update
     */
    where?: ExamResultTemplateWhereInput
    /**
     * Limit how many ExamResultTemplates to update.
     */
    limit?: number
  }

  /**
   * ExamResultTemplate upsert
   */
  export type ExamResultTemplateUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExamResultTemplate
     */
    select?: ExamResultTemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExamResultTemplate
     */
    omit?: ExamResultTemplateOmit<ExtArgs> | null
    /**
     * The filter to search for the ExamResultTemplate to update in case it exists.
     */
    where: ExamResultTemplateWhereUniqueInput
    /**
     * In case the ExamResultTemplate found by the `where` argument doesn't exist, create a new ExamResultTemplate with this data.
     */
    create: XOR<ExamResultTemplateCreateInput, ExamResultTemplateUncheckedCreateInput>
    /**
     * In case the ExamResultTemplate was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ExamResultTemplateUpdateInput, ExamResultTemplateUncheckedUpdateInput>
  }

  /**
   * ExamResultTemplate delete
   */
  export type ExamResultTemplateDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExamResultTemplate
     */
    select?: ExamResultTemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExamResultTemplate
     */
    omit?: ExamResultTemplateOmit<ExtArgs> | null
    /**
     * Filter which ExamResultTemplate to delete.
     */
    where: ExamResultTemplateWhereUniqueInput
  }

  /**
   * ExamResultTemplate deleteMany
   */
  export type ExamResultTemplateDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ExamResultTemplates to delete
     */
    where?: ExamResultTemplateWhereInput
    /**
     * Limit how many ExamResultTemplates to delete.
     */
    limit?: number
  }

  /**
   * ExamResultTemplate without action
   */
  export type ExamResultTemplateDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExamResultTemplate
     */
    select?: ExamResultTemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExamResultTemplate
     */
    omit?: ExamResultTemplateOmit<ExtArgs> | null
  }


  /**
   * Model Variables
   */

  export type AggregateVariables = {
    _count: VariablesCountAggregateOutputType | null
    _min: VariablesMinAggregateOutputType | null
    _max: VariablesMaxAggregateOutputType | null
  }

  export type VariablesMinAggregateOutputType = {
    id: string | null
    variableName: string | null
    tableRelated: string | null
    fieldRelated: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type VariablesMaxAggregateOutputType = {
    id: string | null
    variableName: string | null
    tableRelated: string | null
    fieldRelated: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type VariablesCountAggregateOutputType = {
    id: number
    variableName: number
    tableRelated: number
    fieldRelated: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type VariablesMinAggregateInputType = {
    id?: true
    variableName?: true
    tableRelated?: true
    fieldRelated?: true
    createdAt?: true
    updatedAt?: true
  }

  export type VariablesMaxAggregateInputType = {
    id?: true
    variableName?: true
    tableRelated?: true
    fieldRelated?: true
    createdAt?: true
    updatedAt?: true
  }

  export type VariablesCountAggregateInputType = {
    id?: true
    variableName?: true
    tableRelated?: true
    fieldRelated?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type VariablesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Variables to aggregate.
     */
    where?: VariablesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Variables to fetch.
     */
    orderBy?: VariablesOrderByWithRelationInput | VariablesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VariablesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Variables from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Variables.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Variables
    **/
    _count?: true | VariablesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VariablesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VariablesMaxAggregateInputType
  }

  export type GetVariablesAggregateType<T extends VariablesAggregateArgs> = {
        [P in keyof T & keyof AggregateVariables]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVariables[P]>
      : GetScalarType<T[P], AggregateVariables[P]>
  }




  export type VariablesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VariablesWhereInput
    orderBy?: VariablesOrderByWithAggregationInput | VariablesOrderByWithAggregationInput[]
    by: VariablesScalarFieldEnum[] | VariablesScalarFieldEnum
    having?: VariablesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VariablesCountAggregateInputType | true
    _min?: VariablesMinAggregateInputType
    _max?: VariablesMaxAggregateInputType
  }

  export type VariablesGroupByOutputType = {
    id: string
    variableName: string
    tableRelated: string | null
    fieldRelated: string | null
    createdAt: Date
    updatedAt: Date
    _count: VariablesCountAggregateOutputType | null
    _min: VariablesMinAggregateOutputType | null
    _max: VariablesMaxAggregateOutputType | null
  }

  type GetVariablesGroupByPayload<T extends VariablesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VariablesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VariablesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VariablesGroupByOutputType[P]>
            : GetScalarType<T[P], VariablesGroupByOutputType[P]>
        }
      >
    >


  export type VariablesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    variableName?: boolean
    tableRelated?: boolean
    fieldRelated?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["variables"]>

  export type VariablesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    variableName?: boolean
    tableRelated?: boolean
    fieldRelated?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["variables"]>

  export type VariablesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    variableName?: boolean
    tableRelated?: boolean
    fieldRelated?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["variables"]>

  export type VariablesSelectScalar = {
    id?: boolean
    variableName?: boolean
    tableRelated?: boolean
    fieldRelated?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type VariablesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "variableName" | "tableRelated" | "fieldRelated" | "createdAt" | "updatedAt", ExtArgs["result"]["variables"]>

  export type $VariablesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Variables"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      variableName: string
      tableRelated: string | null
      fieldRelated: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["variables"]>
    composites: {}
  }

  type VariablesGetPayload<S extends boolean | null | undefined | VariablesDefaultArgs> = $Result.GetResult<Prisma.$VariablesPayload, S>

  type VariablesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<VariablesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: VariablesCountAggregateInputType | true
    }

  export interface VariablesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Variables'], meta: { name: 'Variables' } }
    /**
     * Find zero or one Variables that matches the filter.
     * @param {VariablesFindUniqueArgs} args - Arguments to find a Variables
     * @example
     * // Get one Variables
     * const variables = await prisma.variables.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends VariablesFindUniqueArgs>(args: SelectSubset<T, VariablesFindUniqueArgs<ExtArgs>>): Prisma__VariablesClient<$Result.GetResult<Prisma.$VariablesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Variables that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {VariablesFindUniqueOrThrowArgs} args - Arguments to find a Variables
     * @example
     * // Get one Variables
     * const variables = await prisma.variables.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends VariablesFindUniqueOrThrowArgs>(args: SelectSubset<T, VariablesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__VariablesClient<$Result.GetResult<Prisma.$VariablesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Variables that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VariablesFindFirstArgs} args - Arguments to find a Variables
     * @example
     * // Get one Variables
     * const variables = await prisma.variables.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends VariablesFindFirstArgs>(args?: SelectSubset<T, VariablesFindFirstArgs<ExtArgs>>): Prisma__VariablesClient<$Result.GetResult<Prisma.$VariablesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Variables that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VariablesFindFirstOrThrowArgs} args - Arguments to find a Variables
     * @example
     * // Get one Variables
     * const variables = await prisma.variables.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends VariablesFindFirstOrThrowArgs>(args?: SelectSubset<T, VariablesFindFirstOrThrowArgs<ExtArgs>>): Prisma__VariablesClient<$Result.GetResult<Prisma.$VariablesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Variables that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VariablesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Variables
     * const variables = await prisma.variables.findMany()
     * 
     * // Get first 10 Variables
     * const variables = await prisma.variables.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const variablesWithIdOnly = await prisma.variables.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends VariablesFindManyArgs>(args?: SelectSubset<T, VariablesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VariablesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Variables.
     * @param {VariablesCreateArgs} args - Arguments to create a Variables.
     * @example
     * // Create one Variables
     * const Variables = await prisma.variables.create({
     *   data: {
     *     // ... data to create a Variables
     *   }
     * })
     * 
     */
    create<T extends VariablesCreateArgs>(args: SelectSubset<T, VariablesCreateArgs<ExtArgs>>): Prisma__VariablesClient<$Result.GetResult<Prisma.$VariablesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Variables.
     * @param {VariablesCreateManyArgs} args - Arguments to create many Variables.
     * @example
     * // Create many Variables
     * const variables = await prisma.variables.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends VariablesCreateManyArgs>(args?: SelectSubset<T, VariablesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Variables and returns the data saved in the database.
     * @param {VariablesCreateManyAndReturnArgs} args - Arguments to create many Variables.
     * @example
     * // Create many Variables
     * const variables = await prisma.variables.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Variables and only return the `id`
     * const variablesWithIdOnly = await prisma.variables.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends VariablesCreateManyAndReturnArgs>(args?: SelectSubset<T, VariablesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VariablesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Variables.
     * @param {VariablesDeleteArgs} args - Arguments to delete one Variables.
     * @example
     * // Delete one Variables
     * const Variables = await prisma.variables.delete({
     *   where: {
     *     // ... filter to delete one Variables
     *   }
     * })
     * 
     */
    delete<T extends VariablesDeleteArgs>(args: SelectSubset<T, VariablesDeleteArgs<ExtArgs>>): Prisma__VariablesClient<$Result.GetResult<Prisma.$VariablesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Variables.
     * @param {VariablesUpdateArgs} args - Arguments to update one Variables.
     * @example
     * // Update one Variables
     * const variables = await prisma.variables.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends VariablesUpdateArgs>(args: SelectSubset<T, VariablesUpdateArgs<ExtArgs>>): Prisma__VariablesClient<$Result.GetResult<Prisma.$VariablesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Variables.
     * @param {VariablesDeleteManyArgs} args - Arguments to filter Variables to delete.
     * @example
     * // Delete a few Variables
     * const { count } = await prisma.variables.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends VariablesDeleteManyArgs>(args?: SelectSubset<T, VariablesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Variables.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VariablesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Variables
     * const variables = await prisma.variables.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends VariablesUpdateManyArgs>(args: SelectSubset<T, VariablesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Variables and returns the data updated in the database.
     * @param {VariablesUpdateManyAndReturnArgs} args - Arguments to update many Variables.
     * @example
     * // Update many Variables
     * const variables = await prisma.variables.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Variables and only return the `id`
     * const variablesWithIdOnly = await prisma.variables.updateManyAndReturn({
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
    updateManyAndReturn<T extends VariablesUpdateManyAndReturnArgs>(args: SelectSubset<T, VariablesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VariablesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Variables.
     * @param {VariablesUpsertArgs} args - Arguments to update or create a Variables.
     * @example
     * // Update or create a Variables
     * const variables = await prisma.variables.upsert({
     *   create: {
     *     // ... data to create a Variables
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Variables we want to update
     *   }
     * })
     */
    upsert<T extends VariablesUpsertArgs>(args: SelectSubset<T, VariablesUpsertArgs<ExtArgs>>): Prisma__VariablesClient<$Result.GetResult<Prisma.$VariablesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Variables.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VariablesCountArgs} args - Arguments to filter Variables to count.
     * @example
     * // Count the number of Variables
     * const count = await prisma.variables.count({
     *   where: {
     *     // ... the filter for the Variables we want to count
     *   }
     * })
    **/
    count<T extends VariablesCountArgs>(
      args?: Subset<T, VariablesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VariablesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Variables.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VariablesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends VariablesAggregateArgs>(args: Subset<T, VariablesAggregateArgs>): Prisma.PrismaPromise<GetVariablesAggregateType<T>>

    /**
     * Group by Variables.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VariablesGroupByArgs} args - Group by arguments.
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
      T extends VariablesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VariablesGroupByArgs['orderBy'] }
        : { orderBy?: VariablesGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, VariablesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVariablesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Variables model
   */
  readonly fields: VariablesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Variables.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VariablesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the Variables model
   */
  interface VariablesFieldRefs {
    readonly id: FieldRef<"Variables", 'String'>
    readonly variableName: FieldRef<"Variables", 'String'>
    readonly tableRelated: FieldRef<"Variables", 'String'>
    readonly fieldRelated: FieldRef<"Variables", 'String'>
    readonly createdAt: FieldRef<"Variables", 'DateTime'>
    readonly updatedAt: FieldRef<"Variables", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Variables findUnique
   */
  export type VariablesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Variables
     */
    select?: VariablesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Variables
     */
    omit?: VariablesOmit<ExtArgs> | null
    /**
     * Filter, which Variables to fetch.
     */
    where: VariablesWhereUniqueInput
  }

  /**
   * Variables findUniqueOrThrow
   */
  export type VariablesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Variables
     */
    select?: VariablesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Variables
     */
    omit?: VariablesOmit<ExtArgs> | null
    /**
     * Filter, which Variables to fetch.
     */
    where: VariablesWhereUniqueInput
  }

  /**
   * Variables findFirst
   */
  export type VariablesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Variables
     */
    select?: VariablesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Variables
     */
    omit?: VariablesOmit<ExtArgs> | null
    /**
     * Filter, which Variables to fetch.
     */
    where?: VariablesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Variables to fetch.
     */
    orderBy?: VariablesOrderByWithRelationInput | VariablesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Variables.
     */
    cursor?: VariablesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Variables from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Variables.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Variables.
     */
    distinct?: VariablesScalarFieldEnum | VariablesScalarFieldEnum[]
  }

  /**
   * Variables findFirstOrThrow
   */
  export type VariablesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Variables
     */
    select?: VariablesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Variables
     */
    omit?: VariablesOmit<ExtArgs> | null
    /**
     * Filter, which Variables to fetch.
     */
    where?: VariablesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Variables to fetch.
     */
    orderBy?: VariablesOrderByWithRelationInput | VariablesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Variables.
     */
    cursor?: VariablesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Variables from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Variables.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Variables.
     */
    distinct?: VariablesScalarFieldEnum | VariablesScalarFieldEnum[]
  }

  /**
   * Variables findMany
   */
  export type VariablesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Variables
     */
    select?: VariablesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Variables
     */
    omit?: VariablesOmit<ExtArgs> | null
    /**
     * Filter, which Variables to fetch.
     */
    where?: VariablesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Variables to fetch.
     */
    orderBy?: VariablesOrderByWithRelationInput | VariablesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Variables.
     */
    cursor?: VariablesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Variables from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Variables.
     */
    skip?: number
    distinct?: VariablesScalarFieldEnum | VariablesScalarFieldEnum[]
  }

  /**
   * Variables create
   */
  export type VariablesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Variables
     */
    select?: VariablesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Variables
     */
    omit?: VariablesOmit<ExtArgs> | null
    /**
     * The data needed to create a Variables.
     */
    data: XOR<VariablesCreateInput, VariablesUncheckedCreateInput>
  }

  /**
   * Variables createMany
   */
  export type VariablesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Variables.
     */
    data: VariablesCreateManyInput | VariablesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Variables createManyAndReturn
   */
  export type VariablesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Variables
     */
    select?: VariablesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Variables
     */
    omit?: VariablesOmit<ExtArgs> | null
    /**
     * The data used to create many Variables.
     */
    data: VariablesCreateManyInput | VariablesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Variables update
   */
  export type VariablesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Variables
     */
    select?: VariablesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Variables
     */
    omit?: VariablesOmit<ExtArgs> | null
    /**
     * The data needed to update a Variables.
     */
    data: XOR<VariablesUpdateInput, VariablesUncheckedUpdateInput>
    /**
     * Choose, which Variables to update.
     */
    where: VariablesWhereUniqueInput
  }

  /**
   * Variables updateMany
   */
  export type VariablesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Variables.
     */
    data: XOR<VariablesUpdateManyMutationInput, VariablesUncheckedUpdateManyInput>
    /**
     * Filter which Variables to update
     */
    where?: VariablesWhereInput
    /**
     * Limit how many Variables to update.
     */
    limit?: number
  }

  /**
   * Variables updateManyAndReturn
   */
  export type VariablesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Variables
     */
    select?: VariablesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Variables
     */
    omit?: VariablesOmit<ExtArgs> | null
    /**
     * The data used to update Variables.
     */
    data: XOR<VariablesUpdateManyMutationInput, VariablesUncheckedUpdateManyInput>
    /**
     * Filter which Variables to update
     */
    where?: VariablesWhereInput
    /**
     * Limit how many Variables to update.
     */
    limit?: number
  }

  /**
   * Variables upsert
   */
  export type VariablesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Variables
     */
    select?: VariablesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Variables
     */
    omit?: VariablesOmit<ExtArgs> | null
    /**
     * The filter to search for the Variables to update in case it exists.
     */
    where: VariablesWhereUniqueInput
    /**
     * In case the Variables found by the `where` argument doesn't exist, create a new Variables with this data.
     */
    create: XOR<VariablesCreateInput, VariablesUncheckedCreateInput>
    /**
     * In case the Variables was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VariablesUpdateInput, VariablesUncheckedUpdateInput>
  }

  /**
   * Variables delete
   */
  export type VariablesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Variables
     */
    select?: VariablesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Variables
     */
    omit?: VariablesOmit<ExtArgs> | null
    /**
     * Filter which Variables to delete.
     */
    where: VariablesWhereUniqueInput
  }

  /**
   * Variables deleteMany
   */
  export type VariablesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Variables to delete
     */
    where?: VariablesWhereInput
    /**
     * Limit how many Variables to delete.
     */
    limit?: number
  }

  /**
   * Variables without action
   */
  export type VariablesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Variables
     */
    select?: VariablesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Variables
     */
    omit?: VariablesOmit<ExtArgs> | null
  }


  /**
   * Model PasswordResetToken
   */

  export type AggregatePasswordResetToken = {
    _count: PasswordResetTokenCountAggregateOutputType | null
    _min: PasswordResetTokenMinAggregateOutputType | null
    _max: PasswordResetTokenMaxAggregateOutputType | null
  }

  export type PasswordResetTokenMinAggregateOutputType = {
    id: string | null
    userId: string | null
    tokenHash: string | null
    expiresAt: Date | null
    usedAt: Date | null
    createdAt: Date | null
  }

  export type PasswordResetTokenMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    tokenHash: string | null
    expiresAt: Date | null
    usedAt: Date | null
    createdAt: Date | null
  }

  export type PasswordResetTokenCountAggregateOutputType = {
    id: number
    userId: number
    tokenHash: number
    expiresAt: number
    usedAt: number
    createdAt: number
    _all: number
  }


  export type PasswordResetTokenMinAggregateInputType = {
    id?: true
    userId?: true
    tokenHash?: true
    expiresAt?: true
    usedAt?: true
    createdAt?: true
  }

  export type PasswordResetTokenMaxAggregateInputType = {
    id?: true
    userId?: true
    tokenHash?: true
    expiresAt?: true
    usedAt?: true
    createdAt?: true
  }

  export type PasswordResetTokenCountAggregateInputType = {
    id?: true
    userId?: true
    tokenHash?: true
    expiresAt?: true
    usedAt?: true
    createdAt?: true
    _all?: true
  }

  export type PasswordResetTokenAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PasswordResetToken to aggregate.
     */
    where?: PasswordResetTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PasswordResetTokens to fetch.
     */
    orderBy?: PasswordResetTokenOrderByWithRelationInput | PasswordResetTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PasswordResetTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PasswordResetTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PasswordResetTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PasswordResetTokens
    **/
    _count?: true | PasswordResetTokenCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PasswordResetTokenMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PasswordResetTokenMaxAggregateInputType
  }

  export type GetPasswordResetTokenAggregateType<T extends PasswordResetTokenAggregateArgs> = {
        [P in keyof T & keyof AggregatePasswordResetToken]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePasswordResetToken[P]>
      : GetScalarType<T[P], AggregatePasswordResetToken[P]>
  }




  export type PasswordResetTokenGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PasswordResetTokenWhereInput
    orderBy?: PasswordResetTokenOrderByWithAggregationInput | PasswordResetTokenOrderByWithAggregationInput[]
    by: PasswordResetTokenScalarFieldEnum[] | PasswordResetTokenScalarFieldEnum
    having?: PasswordResetTokenScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PasswordResetTokenCountAggregateInputType | true
    _min?: PasswordResetTokenMinAggregateInputType
    _max?: PasswordResetTokenMaxAggregateInputType
  }

  export type PasswordResetTokenGroupByOutputType = {
    id: string
    userId: string
    tokenHash: string
    expiresAt: Date
    usedAt: Date | null
    createdAt: Date
    _count: PasswordResetTokenCountAggregateOutputType | null
    _min: PasswordResetTokenMinAggregateOutputType | null
    _max: PasswordResetTokenMaxAggregateOutputType | null
  }

  type GetPasswordResetTokenGroupByPayload<T extends PasswordResetTokenGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PasswordResetTokenGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PasswordResetTokenGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PasswordResetTokenGroupByOutputType[P]>
            : GetScalarType<T[P], PasswordResetTokenGroupByOutputType[P]>
        }
      >
    >


  export type PasswordResetTokenSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    tokenHash?: boolean
    expiresAt?: boolean
    usedAt?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["passwordResetToken"]>

  export type PasswordResetTokenSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    tokenHash?: boolean
    expiresAt?: boolean
    usedAt?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["passwordResetToken"]>

  export type PasswordResetTokenSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    tokenHash?: boolean
    expiresAt?: boolean
    usedAt?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["passwordResetToken"]>

  export type PasswordResetTokenSelectScalar = {
    id?: boolean
    userId?: boolean
    tokenHash?: boolean
    expiresAt?: boolean
    usedAt?: boolean
    createdAt?: boolean
  }

  export type PasswordResetTokenOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "tokenHash" | "expiresAt" | "usedAt" | "createdAt", ExtArgs["result"]["passwordResetToken"]>
  export type PasswordResetTokenInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type PasswordResetTokenIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type PasswordResetTokenIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $PasswordResetTokenPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PasswordResetToken"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      tokenHash: string
      expiresAt: Date
      usedAt: Date | null
      createdAt: Date
    }, ExtArgs["result"]["passwordResetToken"]>
    composites: {}
  }

  type PasswordResetTokenGetPayload<S extends boolean | null | undefined | PasswordResetTokenDefaultArgs> = $Result.GetResult<Prisma.$PasswordResetTokenPayload, S>

  type PasswordResetTokenCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PasswordResetTokenFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PasswordResetTokenCountAggregateInputType | true
    }

  export interface PasswordResetTokenDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PasswordResetToken'], meta: { name: 'PasswordResetToken' } }
    /**
     * Find zero or one PasswordResetToken that matches the filter.
     * @param {PasswordResetTokenFindUniqueArgs} args - Arguments to find a PasswordResetToken
     * @example
     * // Get one PasswordResetToken
     * const passwordResetToken = await prisma.passwordResetToken.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PasswordResetTokenFindUniqueArgs>(args: SelectSubset<T, PasswordResetTokenFindUniqueArgs<ExtArgs>>): Prisma__PasswordResetTokenClient<$Result.GetResult<Prisma.$PasswordResetTokenPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PasswordResetToken that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PasswordResetTokenFindUniqueOrThrowArgs} args - Arguments to find a PasswordResetToken
     * @example
     * // Get one PasswordResetToken
     * const passwordResetToken = await prisma.passwordResetToken.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PasswordResetTokenFindUniqueOrThrowArgs>(args: SelectSubset<T, PasswordResetTokenFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PasswordResetTokenClient<$Result.GetResult<Prisma.$PasswordResetTokenPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PasswordResetToken that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PasswordResetTokenFindFirstArgs} args - Arguments to find a PasswordResetToken
     * @example
     * // Get one PasswordResetToken
     * const passwordResetToken = await prisma.passwordResetToken.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PasswordResetTokenFindFirstArgs>(args?: SelectSubset<T, PasswordResetTokenFindFirstArgs<ExtArgs>>): Prisma__PasswordResetTokenClient<$Result.GetResult<Prisma.$PasswordResetTokenPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PasswordResetToken that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PasswordResetTokenFindFirstOrThrowArgs} args - Arguments to find a PasswordResetToken
     * @example
     * // Get one PasswordResetToken
     * const passwordResetToken = await prisma.passwordResetToken.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PasswordResetTokenFindFirstOrThrowArgs>(args?: SelectSubset<T, PasswordResetTokenFindFirstOrThrowArgs<ExtArgs>>): Prisma__PasswordResetTokenClient<$Result.GetResult<Prisma.$PasswordResetTokenPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PasswordResetTokens that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PasswordResetTokenFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PasswordResetTokens
     * const passwordResetTokens = await prisma.passwordResetToken.findMany()
     * 
     * // Get first 10 PasswordResetTokens
     * const passwordResetTokens = await prisma.passwordResetToken.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const passwordResetTokenWithIdOnly = await prisma.passwordResetToken.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PasswordResetTokenFindManyArgs>(args?: SelectSubset<T, PasswordResetTokenFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PasswordResetTokenPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PasswordResetToken.
     * @param {PasswordResetTokenCreateArgs} args - Arguments to create a PasswordResetToken.
     * @example
     * // Create one PasswordResetToken
     * const PasswordResetToken = await prisma.passwordResetToken.create({
     *   data: {
     *     // ... data to create a PasswordResetToken
     *   }
     * })
     * 
     */
    create<T extends PasswordResetTokenCreateArgs>(args: SelectSubset<T, PasswordResetTokenCreateArgs<ExtArgs>>): Prisma__PasswordResetTokenClient<$Result.GetResult<Prisma.$PasswordResetTokenPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PasswordResetTokens.
     * @param {PasswordResetTokenCreateManyArgs} args - Arguments to create many PasswordResetTokens.
     * @example
     * // Create many PasswordResetTokens
     * const passwordResetToken = await prisma.passwordResetToken.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PasswordResetTokenCreateManyArgs>(args?: SelectSubset<T, PasswordResetTokenCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PasswordResetTokens and returns the data saved in the database.
     * @param {PasswordResetTokenCreateManyAndReturnArgs} args - Arguments to create many PasswordResetTokens.
     * @example
     * // Create many PasswordResetTokens
     * const passwordResetToken = await prisma.passwordResetToken.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PasswordResetTokens and only return the `id`
     * const passwordResetTokenWithIdOnly = await prisma.passwordResetToken.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PasswordResetTokenCreateManyAndReturnArgs>(args?: SelectSubset<T, PasswordResetTokenCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PasswordResetTokenPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PasswordResetToken.
     * @param {PasswordResetTokenDeleteArgs} args - Arguments to delete one PasswordResetToken.
     * @example
     * // Delete one PasswordResetToken
     * const PasswordResetToken = await prisma.passwordResetToken.delete({
     *   where: {
     *     // ... filter to delete one PasswordResetToken
     *   }
     * })
     * 
     */
    delete<T extends PasswordResetTokenDeleteArgs>(args: SelectSubset<T, PasswordResetTokenDeleteArgs<ExtArgs>>): Prisma__PasswordResetTokenClient<$Result.GetResult<Prisma.$PasswordResetTokenPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PasswordResetToken.
     * @param {PasswordResetTokenUpdateArgs} args - Arguments to update one PasswordResetToken.
     * @example
     * // Update one PasswordResetToken
     * const passwordResetToken = await prisma.passwordResetToken.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PasswordResetTokenUpdateArgs>(args: SelectSubset<T, PasswordResetTokenUpdateArgs<ExtArgs>>): Prisma__PasswordResetTokenClient<$Result.GetResult<Prisma.$PasswordResetTokenPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PasswordResetTokens.
     * @param {PasswordResetTokenDeleteManyArgs} args - Arguments to filter PasswordResetTokens to delete.
     * @example
     * // Delete a few PasswordResetTokens
     * const { count } = await prisma.passwordResetToken.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PasswordResetTokenDeleteManyArgs>(args?: SelectSubset<T, PasswordResetTokenDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PasswordResetTokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PasswordResetTokenUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PasswordResetTokens
     * const passwordResetToken = await prisma.passwordResetToken.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PasswordResetTokenUpdateManyArgs>(args: SelectSubset<T, PasswordResetTokenUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PasswordResetTokens and returns the data updated in the database.
     * @param {PasswordResetTokenUpdateManyAndReturnArgs} args - Arguments to update many PasswordResetTokens.
     * @example
     * // Update many PasswordResetTokens
     * const passwordResetToken = await prisma.passwordResetToken.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PasswordResetTokens and only return the `id`
     * const passwordResetTokenWithIdOnly = await prisma.passwordResetToken.updateManyAndReturn({
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
    updateManyAndReturn<T extends PasswordResetTokenUpdateManyAndReturnArgs>(args: SelectSubset<T, PasswordResetTokenUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PasswordResetTokenPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PasswordResetToken.
     * @param {PasswordResetTokenUpsertArgs} args - Arguments to update or create a PasswordResetToken.
     * @example
     * // Update or create a PasswordResetToken
     * const passwordResetToken = await prisma.passwordResetToken.upsert({
     *   create: {
     *     // ... data to create a PasswordResetToken
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PasswordResetToken we want to update
     *   }
     * })
     */
    upsert<T extends PasswordResetTokenUpsertArgs>(args: SelectSubset<T, PasswordResetTokenUpsertArgs<ExtArgs>>): Prisma__PasswordResetTokenClient<$Result.GetResult<Prisma.$PasswordResetTokenPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PasswordResetTokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PasswordResetTokenCountArgs} args - Arguments to filter PasswordResetTokens to count.
     * @example
     * // Count the number of PasswordResetTokens
     * const count = await prisma.passwordResetToken.count({
     *   where: {
     *     // ... the filter for the PasswordResetTokens we want to count
     *   }
     * })
    **/
    count<T extends PasswordResetTokenCountArgs>(
      args?: Subset<T, PasswordResetTokenCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PasswordResetTokenCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PasswordResetToken.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PasswordResetTokenAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PasswordResetTokenAggregateArgs>(args: Subset<T, PasswordResetTokenAggregateArgs>): Prisma.PrismaPromise<GetPasswordResetTokenAggregateType<T>>

    /**
     * Group by PasswordResetToken.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PasswordResetTokenGroupByArgs} args - Group by arguments.
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
      T extends PasswordResetTokenGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PasswordResetTokenGroupByArgs['orderBy'] }
        : { orderBy?: PasswordResetTokenGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PasswordResetTokenGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPasswordResetTokenGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PasswordResetToken model
   */
  readonly fields: PasswordResetTokenFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PasswordResetToken.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PasswordResetTokenClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the PasswordResetToken model
   */
  interface PasswordResetTokenFieldRefs {
    readonly id: FieldRef<"PasswordResetToken", 'String'>
    readonly userId: FieldRef<"PasswordResetToken", 'String'>
    readonly tokenHash: FieldRef<"PasswordResetToken", 'String'>
    readonly expiresAt: FieldRef<"PasswordResetToken", 'DateTime'>
    readonly usedAt: FieldRef<"PasswordResetToken", 'DateTime'>
    readonly createdAt: FieldRef<"PasswordResetToken", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * PasswordResetToken findUnique
   */
  export type PasswordResetTokenFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PasswordResetToken
     */
    select?: PasswordResetTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PasswordResetToken
     */
    omit?: PasswordResetTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PasswordResetTokenInclude<ExtArgs> | null
    /**
     * Filter, which PasswordResetToken to fetch.
     */
    where: PasswordResetTokenWhereUniqueInput
  }

  /**
   * PasswordResetToken findUniqueOrThrow
   */
  export type PasswordResetTokenFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PasswordResetToken
     */
    select?: PasswordResetTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PasswordResetToken
     */
    omit?: PasswordResetTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PasswordResetTokenInclude<ExtArgs> | null
    /**
     * Filter, which PasswordResetToken to fetch.
     */
    where: PasswordResetTokenWhereUniqueInput
  }

  /**
   * PasswordResetToken findFirst
   */
  export type PasswordResetTokenFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PasswordResetToken
     */
    select?: PasswordResetTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PasswordResetToken
     */
    omit?: PasswordResetTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PasswordResetTokenInclude<ExtArgs> | null
    /**
     * Filter, which PasswordResetToken to fetch.
     */
    where?: PasswordResetTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PasswordResetTokens to fetch.
     */
    orderBy?: PasswordResetTokenOrderByWithRelationInput | PasswordResetTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PasswordResetTokens.
     */
    cursor?: PasswordResetTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PasswordResetTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PasswordResetTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PasswordResetTokens.
     */
    distinct?: PasswordResetTokenScalarFieldEnum | PasswordResetTokenScalarFieldEnum[]
  }

  /**
   * PasswordResetToken findFirstOrThrow
   */
  export type PasswordResetTokenFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PasswordResetToken
     */
    select?: PasswordResetTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PasswordResetToken
     */
    omit?: PasswordResetTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PasswordResetTokenInclude<ExtArgs> | null
    /**
     * Filter, which PasswordResetToken to fetch.
     */
    where?: PasswordResetTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PasswordResetTokens to fetch.
     */
    orderBy?: PasswordResetTokenOrderByWithRelationInput | PasswordResetTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PasswordResetTokens.
     */
    cursor?: PasswordResetTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PasswordResetTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PasswordResetTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PasswordResetTokens.
     */
    distinct?: PasswordResetTokenScalarFieldEnum | PasswordResetTokenScalarFieldEnum[]
  }

  /**
   * PasswordResetToken findMany
   */
  export type PasswordResetTokenFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PasswordResetToken
     */
    select?: PasswordResetTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PasswordResetToken
     */
    omit?: PasswordResetTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PasswordResetTokenInclude<ExtArgs> | null
    /**
     * Filter, which PasswordResetTokens to fetch.
     */
    where?: PasswordResetTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PasswordResetTokens to fetch.
     */
    orderBy?: PasswordResetTokenOrderByWithRelationInput | PasswordResetTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PasswordResetTokens.
     */
    cursor?: PasswordResetTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PasswordResetTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PasswordResetTokens.
     */
    skip?: number
    distinct?: PasswordResetTokenScalarFieldEnum | PasswordResetTokenScalarFieldEnum[]
  }

  /**
   * PasswordResetToken create
   */
  export type PasswordResetTokenCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PasswordResetToken
     */
    select?: PasswordResetTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PasswordResetToken
     */
    omit?: PasswordResetTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PasswordResetTokenInclude<ExtArgs> | null
    /**
     * The data needed to create a PasswordResetToken.
     */
    data: XOR<PasswordResetTokenCreateInput, PasswordResetTokenUncheckedCreateInput>
  }

  /**
   * PasswordResetToken createMany
   */
  export type PasswordResetTokenCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PasswordResetTokens.
     */
    data: PasswordResetTokenCreateManyInput | PasswordResetTokenCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PasswordResetToken createManyAndReturn
   */
  export type PasswordResetTokenCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PasswordResetToken
     */
    select?: PasswordResetTokenSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PasswordResetToken
     */
    omit?: PasswordResetTokenOmit<ExtArgs> | null
    /**
     * The data used to create many PasswordResetTokens.
     */
    data: PasswordResetTokenCreateManyInput | PasswordResetTokenCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PasswordResetTokenIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * PasswordResetToken update
   */
  export type PasswordResetTokenUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PasswordResetToken
     */
    select?: PasswordResetTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PasswordResetToken
     */
    omit?: PasswordResetTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PasswordResetTokenInclude<ExtArgs> | null
    /**
     * The data needed to update a PasswordResetToken.
     */
    data: XOR<PasswordResetTokenUpdateInput, PasswordResetTokenUncheckedUpdateInput>
    /**
     * Choose, which PasswordResetToken to update.
     */
    where: PasswordResetTokenWhereUniqueInput
  }

  /**
   * PasswordResetToken updateMany
   */
  export type PasswordResetTokenUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PasswordResetTokens.
     */
    data: XOR<PasswordResetTokenUpdateManyMutationInput, PasswordResetTokenUncheckedUpdateManyInput>
    /**
     * Filter which PasswordResetTokens to update
     */
    where?: PasswordResetTokenWhereInput
    /**
     * Limit how many PasswordResetTokens to update.
     */
    limit?: number
  }

  /**
   * PasswordResetToken updateManyAndReturn
   */
  export type PasswordResetTokenUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PasswordResetToken
     */
    select?: PasswordResetTokenSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PasswordResetToken
     */
    omit?: PasswordResetTokenOmit<ExtArgs> | null
    /**
     * The data used to update PasswordResetTokens.
     */
    data: XOR<PasswordResetTokenUpdateManyMutationInput, PasswordResetTokenUncheckedUpdateManyInput>
    /**
     * Filter which PasswordResetTokens to update
     */
    where?: PasswordResetTokenWhereInput
    /**
     * Limit how many PasswordResetTokens to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PasswordResetTokenIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * PasswordResetToken upsert
   */
  export type PasswordResetTokenUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PasswordResetToken
     */
    select?: PasswordResetTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PasswordResetToken
     */
    omit?: PasswordResetTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PasswordResetTokenInclude<ExtArgs> | null
    /**
     * The filter to search for the PasswordResetToken to update in case it exists.
     */
    where: PasswordResetTokenWhereUniqueInput
    /**
     * In case the PasswordResetToken found by the `where` argument doesn't exist, create a new PasswordResetToken with this data.
     */
    create: XOR<PasswordResetTokenCreateInput, PasswordResetTokenUncheckedCreateInput>
    /**
     * In case the PasswordResetToken was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PasswordResetTokenUpdateInput, PasswordResetTokenUncheckedUpdateInput>
  }

  /**
   * PasswordResetToken delete
   */
  export type PasswordResetTokenDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PasswordResetToken
     */
    select?: PasswordResetTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PasswordResetToken
     */
    omit?: PasswordResetTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PasswordResetTokenInclude<ExtArgs> | null
    /**
     * Filter which PasswordResetToken to delete.
     */
    where: PasswordResetTokenWhereUniqueInput
  }

  /**
   * PasswordResetToken deleteMany
   */
  export type PasswordResetTokenDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PasswordResetTokens to delete
     */
    where?: PasswordResetTokenWhereInput
    /**
     * Limit how many PasswordResetTokens to delete.
     */
    limit?: number
  }

  /**
   * PasswordResetToken without action
   */
  export type PasswordResetTokenDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PasswordResetToken
     */
    select?: PasswordResetTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PasswordResetToken
     */
    omit?: PasswordResetTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PasswordResetTokenInclude<ExtArgs> | null
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


  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    password: 'password',
    isActive: 'isActive',
    role: 'role',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const SampleScalarFieldEnum: {
    id: 'id',
    name: 'name',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type SampleScalarFieldEnum = (typeof SampleScalarFieldEnum)[keyof typeof SampleScalarFieldEnum]


  export const ExamsScalarFieldEnum: {
    id: 'id',
    name: 'name',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ExamsScalarFieldEnum = (typeof ExamsScalarFieldEnum)[keyof typeof ExamsScalarFieldEnum]


  export const InfectiousAgentsScalarFieldEnum: {
    id: 'id',
    name: 'name',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type InfectiousAgentsScalarFieldEnum = (typeof InfectiousAgentsScalarFieldEnum)[keyof typeof InfectiousAgentsScalarFieldEnum]


  export const SolicitationScalarFieldEnum: {
    id: 'id',
    tutor: 'tutor',
    patient: 'patient',
    gender: 'gender',
    age: 'age',
    doctor: 'doctor',
    specie: 'specie',
    hospitalVet: 'hospitalVet',
    infectiousAgents: 'infectiousAgents',
    samples: 'samples',
    exams: 'exams',
    status: 'status',
    finishedAt: 'finishedAt',
    canceledAt: 'canceledAt',
    canceledCause: 'canceledCause',
    blockedAt: 'blockedAt',
    blockedCause: 'blockedCause',
    examResultType: 'examResultType',
    solicitationResult: 'solicitationResult',
    solicitationConclusionText: 'solicitationConclusionText',
    solicitationSampleConclusion: 'solicitationSampleConclusion',
    solicitationColectTypeConclusion: 'solicitationColectTypeConclusion',
    solicitationSampleQuality: 'solicitationSampleQuality',
    solicitationClinicAvaliation: 'solicitationClinicAvaliation',
    isDeleted: 'isDeleted',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    bloodCollectionTubeColor: 'bloodCollectionTubeColor',
    userId: 'userId'
  };

  export type SolicitationScalarFieldEnum = (typeof SolicitationScalarFieldEnum)[keyof typeof SolicitationScalarFieldEnum]


  export const SolicitationHistoryScalarFieldEnum: {
    id: 'id',
    solicitationId: 'solicitationId',
    previousStatus: 'previousStatus',
    newStatus: 'newStatus',
    blockedCause: 'blockedCause',
    changedAt: 'changedAt',
    changedById: 'changedById'
  };

  export type SolicitationHistoryScalarFieldEnum = (typeof SolicitationHistoryScalarFieldEnum)[keyof typeof SolicitationHistoryScalarFieldEnum]


  export const ExamResultTemplateScalarFieldEnum: {
    id: 'id',
    name: 'name',
    fileName: 'fileName',
    mimeType: 'mimeType',
    fileData: 'fileData',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ExamResultTemplateScalarFieldEnum = (typeof ExamResultTemplateScalarFieldEnum)[keyof typeof ExamResultTemplateScalarFieldEnum]


  export const VariablesScalarFieldEnum: {
    id: 'id',
    variableName: 'variableName',
    tableRelated: 'tableRelated',
    fieldRelated: 'fieldRelated',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type VariablesScalarFieldEnum = (typeof VariablesScalarFieldEnum)[keyof typeof VariablesScalarFieldEnum]


  export const PasswordResetTokenScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    tokenHash: 'tokenHash',
    expiresAt: 'expiresAt',
    usedAt: 'usedAt',
    createdAt: 'createdAt'
  };

  export type PasswordResetTokenScalarFieldEnum = (typeof PasswordResetTokenScalarFieldEnum)[keyof typeof PasswordResetTokenScalarFieldEnum]


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
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>
    


  /**
   * Reference to a field of type 'Role[]'
   */
  export type ListEnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'SolicitationStatus'
   */
  export type EnumSolicitationStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SolicitationStatus'>
    


  /**
   * Reference to a field of type 'SolicitationStatus[]'
   */
  export type ListEnumSolicitationStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SolicitationStatus[]'>
    


  /**
   * Reference to a field of type 'ExamResultType'
   */
  export type EnumExamResultTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ExamResultType'>
    


  /**
   * Reference to a field of type 'ExamResultType[]'
   */
  export type ListEnumExamResultTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ExamResultType[]'>
    


  /**
   * Reference to a field of type 'SolicitationResult'
   */
  export type EnumSolicitationResultFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SolicitationResult'>
    


  /**
   * Reference to a field of type 'SolicitationResult[]'
   */
  export type ListEnumSolicitationResultFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SolicitationResult[]'>
    


  /**
   * Reference to a field of type 'SolicitationSampleQuality'
   */
  export type EnumSolicitationSampleQualityFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SolicitationSampleQuality'>
    


  /**
   * Reference to a field of type 'SolicitationSampleQuality[]'
   */
  export type ListEnumSolicitationSampleQualityFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SolicitationSampleQuality[]'>
    


  /**
   * Reference to a field of type 'Bytes'
   */
  export type BytesFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Bytes'>
    


  /**
   * Reference to a field of type 'Bytes[]'
   */
  export type ListBytesFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Bytes[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    name?: StringNullableFilter<"User"> | string | null
    email?: StringNullableFilter<"User"> | string | null
    password?: StringNullableFilter<"User"> | string | null
    isActive?: BoolFilter<"User"> | boolean
    role?: EnumRoleNullableFilter<"User"> | $Enums.Role | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    solicitations?: SolicitationListRelationFilter
    solicitationHistories?: SolicitationHistoryListRelationFilter
    passwordResetToken?: PasswordResetTokenListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    password?: SortOrderInput | SortOrder
    isActive?: SortOrder
    role?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    solicitations?: SolicitationOrderByRelationAggregateInput
    solicitationHistories?: SolicitationHistoryOrderByRelationAggregateInput
    passwordResetToken?: PasswordResetTokenOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringNullableFilter<"User"> | string | null
    password?: StringNullableFilter<"User"> | string | null
    isActive?: BoolFilter<"User"> | boolean
    role?: EnumRoleNullableFilter<"User"> | $Enums.Role | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    solicitations?: SolicitationListRelationFilter
    solicitationHistories?: SolicitationHistoryListRelationFilter
    passwordResetToken?: PasswordResetTokenListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    password?: SortOrderInput | SortOrder
    isActive?: SortOrder
    role?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    name?: StringNullableWithAggregatesFilter<"User"> | string | null
    email?: StringNullableWithAggregatesFilter<"User"> | string | null
    password?: StringNullableWithAggregatesFilter<"User"> | string | null
    isActive?: BoolWithAggregatesFilter<"User"> | boolean
    role?: EnumRoleNullableWithAggregatesFilter<"User"> | $Enums.Role | null
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type SampleWhereInput = {
    AND?: SampleWhereInput | SampleWhereInput[]
    OR?: SampleWhereInput[]
    NOT?: SampleWhereInput | SampleWhereInput[]
    id?: StringFilter<"Sample"> | string
    name?: StringNullableFilter<"Sample"> | string | null
    createdAt?: DateTimeFilter<"Sample"> | Date | string
    updatedAt?: DateTimeFilter<"Sample"> | Date | string
  }

  export type SampleOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SampleWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    name?: string
    AND?: SampleWhereInput | SampleWhereInput[]
    OR?: SampleWhereInput[]
    NOT?: SampleWhereInput | SampleWhereInput[]
    createdAt?: DateTimeFilter<"Sample"> | Date | string
    updatedAt?: DateTimeFilter<"Sample"> | Date | string
  }, "id" | "name">

  export type SampleOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: SampleCountOrderByAggregateInput
    _max?: SampleMaxOrderByAggregateInput
    _min?: SampleMinOrderByAggregateInput
  }

  export type SampleScalarWhereWithAggregatesInput = {
    AND?: SampleScalarWhereWithAggregatesInput | SampleScalarWhereWithAggregatesInput[]
    OR?: SampleScalarWhereWithAggregatesInput[]
    NOT?: SampleScalarWhereWithAggregatesInput | SampleScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Sample"> | string
    name?: StringNullableWithAggregatesFilter<"Sample"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Sample"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Sample"> | Date | string
  }

  export type ExamsWhereInput = {
    AND?: ExamsWhereInput | ExamsWhereInput[]
    OR?: ExamsWhereInput[]
    NOT?: ExamsWhereInput | ExamsWhereInput[]
    id?: StringFilter<"Exams"> | string
    name?: StringNullableFilter<"Exams"> | string | null
    createdAt?: DateTimeFilter<"Exams"> | Date | string
    updatedAt?: DateTimeFilter<"Exams"> | Date | string
  }

  export type ExamsOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ExamsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    name?: string
    AND?: ExamsWhereInput | ExamsWhereInput[]
    OR?: ExamsWhereInput[]
    NOT?: ExamsWhereInput | ExamsWhereInput[]
    createdAt?: DateTimeFilter<"Exams"> | Date | string
    updatedAt?: DateTimeFilter<"Exams"> | Date | string
  }, "id" | "name">

  export type ExamsOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ExamsCountOrderByAggregateInput
    _max?: ExamsMaxOrderByAggregateInput
    _min?: ExamsMinOrderByAggregateInput
  }

  export type ExamsScalarWhereWithAggregatesInput = {
    AND?: ExamsScalarWhereWithAggregatesInput | ExamsScalarWhereWithAggregatesInput[]
    OR?: ExamsScalarWhereWithAggregatesInput[]
    NOT?: ExamsScalarWhereWithAggregatesInput | ExamsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Exams"> | string
    name?: StringNullableWithAggregatesFilter<"Exams"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Exams"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Exams"> | Date | string
  }

  export type InfectiousAgentsWhereInput = {
    AND?: InfectiousAgentsWhereInput | InfectiousAgentsWhereInput[]
    OR?: InfectiousAgentsWhereInput[]
    NOT?: InfectiousAgentsWhereInput | InfectiousAgentsWhereInput[]
    id?: StringFilter<"InfectiousAgents"> | string
    name?: StringNullableFilter<"InfectiousAgents"> | string | null
    createdAt?: DateTimeFilter<"InfectiousAgents"> | Date | string
    updatedAt?: DateTimeFilter<"InfectiousAgents"> | Date | string
  }

  export type InfectiousAgentsOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type InfectiousAgentsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    name?: string
    AND?: InfectiousAgentsWhereInput | InfectiousAgentsWhereInput[]
    OR?: InfectiousAgentsWhereInput[]
    NOT?: InfectiousAgentsWhereInput | InfectiousAgentsWhereInput[]
    createdAt?: DateTimeFilter<"InfectiousAgents"> | Date | string
    updatedAt?: DateTimeFilter<"InfectiousAgents"> | Date | string
  }, "id" | "name">

  export type InfectiousAgentsOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: InfectiousAgentsCountOrderByAggregateInput
    _max?: InfectiousAgentsMaxOrderByAggregateInput
    _min?: InfectiousAgentsMinOrderByAggregateInput
  }

  export type InfectiousAgentsScalarWhereWithAggregatesInput = {
    AND?: InfectiousAgentsScalarWhereWithAggregatesInput | InfectiousAgentsScalarWhereWithAggregatesInput[]
    OR?: InfectiousAgentsScalarWhereWithAggregatesInput[]
    NOT?: InfectiousAgentsScalarWhereWithAggregatesInput | InfectiousAgentsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"InfectiousAgents"> | string
    name?: StringNullableWithAggregatesFilter<"InfectiousAgents"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"InfectiousAgents"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"InfectiousAgents"> | Date | string
  }

  export type SolicitationWhereInput = {
    AND?: SolicitationWhereInput | SolicitationWhereInput[]
    OR?: SolicitationWhereInput[]
    NOT?: SolicitationWhereInput | SolicitationWhereInput[]
    id?: StringFilter<"Solicitation"> | string
    tutor?: StringNullableFilter<"Solicitation"> | string | null
    patient?: StringNullableFilter<"Solicitation"> | string | null
    gender?: StringNullableFilter<"Solicitation"> | string | null
    age?: StringNullableFilter<"Solicitation"> | string | null
    doctor?: StringNullableFilter<"Solicitation"> | string | null
    specie?: StringNullableFilter<"Solicitation"> | string | null
    hospitalVet?: StringNullableFilter<"Solicitation"> | string | null
    infectiousAgents?: StringNullableListFilter<"Solicitation">
    samples?: StringNullableListFilter<"Solicitation">
    exams?: StringNullableListFilter<"Solicitation">
    status?: EnumSolicitationStatusFilter<"Solicitation"> | $Enums.SolicitationStatus
    finishedAt?: DateTimeNullableFilter<"Solicitation"> | Date | string | null
    canceledAt?: DateTimeNullableFilter<"Solicitation"> | Date | string | null
    canceledCause?: StringNullableFilter<"Solicitation"> | string | null
    blockedAt?: DateTimeNullableFilter<"Solicitation"> | Date | string | null
    blockedCause?: StringNullableFilter<"Solicitation"> | string | null
    examResultType?: EnumExamResultTypeNullableFilter<"Solicitation"> | $Enums.ExamResultType | null
    solicitationResult?: EnumSolicitationResultNullableFilter<"Solicitation"> | $Enums.SolicitationResult | null
    solicitationConclusionText?: StringNullableFilter<"Solicitation"> | string | null
    solicitationSampleConclusion?: StringNullableFilter<"Solicitation"> | string | null
    solicitationColectTypeConclusion?: StringNullableFilter<"Solicitation"> | string | null
    solicitationSampleQuality?: EnumSolicitationSampleQualityNullableFilter<"Solicitation"> | $Enums.SolicitationSampleQuality | null
    solicitationClinicAvaliation?: StringNullableFilter<"Solicitation"> | string | null
    isDeleted?: BoolFilter<"Solicitation"> | boolean
    createdAt?: DateTimeFilter<"Solicitation"> | Date | string
    updatedAt?: DateTimeFilter<"Solicitation"> | Date | string
    bloodCollectionTubeColor?: StringNullableListFilter<"Solicitation">
    userId?: StringNullableFilter<"Solicitation"> | string | null
    user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    solicitationHistories?: SolicitationHistoryListRelationFilter
  }

  export type SolicitationOrderByWithRelationInput = {
    id?: SortOrder
    tutor?: SortOrderInput | SortOrder
    patient?: SortOrderInput | SortOrder
    gender?: SortOrderInput | SortOrder
    age?: SortOrderInput | SortOrder
    doctor?: SortOrderInput | SortOrder
    specie?: SortOrderInput | SortOrder
    hospitalVet?: SortOrderInput | SortOrder
    infectiousAgents?: SortOrder
    samples?: SortOrder
    exams?: SortOrder
    status?: SortOrder
    finishedAt?: SortOrderInput | SortOrder
    canceledAt?: SortOrderInput | SortOrder
    canceledCause?: SortOrderInput | SortOrder
    blockedAt?: SortOrderInput | SortOrder
    blockedCause?: SortOrderInput | SortOrder
    examResultType?: SortOrderInput | SortOrder
    solicitationResult?: SortOrderInput | SortOrder
    solicitationConclusionText?: SortOrderInput | SortOrder
    solicitationSampleConclusion?: SortOrderInput | SortOrder
    solicitationColectTypeConclusion?: SortOrderInput | SortOrder
    solicitationSampleQuality?: SortOrderInput | SortOrder
    solicitationClinicAvaliation?: SortOrderInput | SortOrder
    isDeleted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    bloodCollectionTubeColor?: SortOrder
    userId?: SortOrderInput | SortOrder
    user?: UserOrderByWithRelationInput
    solicitationHistories?: SolicitationHistoryOrderByRelationAggregateInput
  }

  export type SolicitationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: SolicitationWhereInput | SolicitationWhereInput[]
    OR?: SolicitationWhereInput[]
    NOT?: SolicitationWhereInput | SolicitationWhereInput[]
    tutor?: StringNullableFilter<"Solicitation"> | string | null
    patient?: StringNullableFilter<"Solicitation"> | string | null
    gender?: StringNullableFilter<"Solicitation"> | string | null
    age?: StringNullableFilter<"Solicitation"> | string | null
    doctor?: StringNullableFilter<"Solicitation"> | string | null
    specie?: StringNullableFilter<"Solicitation"> | string | null
    hospitalVet?: StringNullableFilter<"Solicitation"> | string | null
    infectiousAgents?: StringNullableListFilter<"Solicitation">
    samples?: StringNullableListFilter<"Solicitation">
    exams?: StringNullableListFilter<"Solicitation">
    status?: EnumSolicitationStatusFilter<"Solicitation"> | $Enums.SolicitationStatus
    finishedAt?: DateTimeNullableFilter<"Solicitation"> | Date | string | null
    canceledAt?: DateTimeNullableFilter<"Solicitation"> | Date | string | null
    canceledCause?: StringNullableFilter<"Solicitation"> | string | null
    blockedAt?: DateTimeNullableFilter<"Solicitation"> | Date | string | null
    blockedCause?: StringNullableFilter<"Solicitation"> | string | null
    examResultType?: EnumExamResultTypeNullableFilter<"Solicitation"> | $Enums.ExamResultType | null
    solicitationResult?: EnumSolicitationResultNullableFilter<"Solicitation"> | $Enums.SolicitationResult | null
    solicitationConclusionText?: StringNullableFilter<"Solicitation"> | string | null
    solicitationSampleConclusion?: StringNullableFilter<"Solicitation"> | string | null
    solicitationColectTypeConclusion?: StringNullableFilter<"Solicitation"> | string | null
    solicitationSampleQuality?: EnumSolicitationSampleQualityNullableFilter<"Solicitation"> | $Enums.SolicitationSampleQuality | null
    solicitationClinicAvaliation?: StringNullableFilter<"Solicitation"> | string | null
    isDeleted?: BoolFilter<"Solicitation"> | boolean
    createdAt?: DateTimeFilter<"Solicitation"> | Date | string
    updatedAt?: DateTimeFilter<"Solicitation"> | Date | string
    bloodCollectionTubeColor?: StringNullableListFilter<"Solicitation">
    userId?: StringNullableFilter<"Solicitation"> | string | null
    user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    solicitationHistories?: SolicitationHistoryListRelationFilter
  }, "id">

  export type SolicitationOrderByWithAggregationInput = {
    id?: SortOrder
    tutor?: SortOrderInput | SortOrder
    patient?: SortOrderInput | SortOrder
    gender?: SortOrderInput | SortOrder
    age?: SortOrderInput | SortOrder
    doctor?: SortOrderInput | SortOrder
    specie?: SortOrderInput | SortOrder
    hospitalVet?: SortOrderInput | SortOrder
    infectiousAgents?: SortOrder
    samples?: SortOrder
    exams?: SortOrder
    status?: SortOrder
    finishedAt?: SortOrderInput | SortOrder
    canceledAt?: SortOrderInput | SortOrder
    canceledCause?: SortOrderInput | SortOrder
    blockedAt?: SortOrderInput | SortOrder
    blockedCause?: SortOrderInput | SortOrder
    examResultType?: SortOrderInput | SortOrder
    solicitationResult?: SortOrderInput | SortOrder
    solicitationConclusionText?: SortOrderInput | SortOrder
    solicitationSampleConclusion?: SortOrderInput | SortOrder
    solicitationColectTypeConclusion?: SortOrderInput | SortOrder
    solicitationSampleQuality?: SortOrderInput | SortOrder
    solicitationClinicAvaliation?: SortOrderInput | SortOrder
    isDeleted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    bloodCollectionTubeColor?: SortOrder
    userId?: SortOrderInput | SortOrder
    _count?: SolicitationCountOrderByAggregateInput
    _max?: SolicitationMaxOrderByAggregateInput
    _min?: SolicitationMinOrderByAggregateInput
  }

  export type SolicitationScalarWhereWithAggregatesInput = {
    AND?: SolicitationScalarWhereWithAggregatesInput | SolicitationScalarWhereWithAggregatesInput[]
    OR?: SolicitationScalarWhereWithAggregatesInput[]
    NOT?: SolicitationScalarWhereWithAggregatesInput | SolicitationScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Solicitation"> | string
    tutor?: StringNullableWithAggregatesFilter<"Solicitation"> | string | null
    patient?: StringNullableWithAggregatesFilter<"Solicitation"> | string | null
    gender?: StringNullableWithAggregatesFilter<"Solicitation"> | string | null
    age?: StringNullableWithAggregatesFilter<"Solicitation"> | string | null
    doctor?: StringNullableWithAggregatesFilter<"Solicitation"> | string | null
    specie?: StringNullableWithAggregatesFilter<"Solicitation"> | string | null
    hospitalVet?: StringNullableWithAggregatesFilter<"Solicitation"> | string | null
    infectiousAgents?: StringNullableListFilter<"Solicitation">
    samples?: StringNullableListFilter<"Solicitation">
    exams?: StringNullableListFilter<"Solicitation">
    status?: EnumSolicitationStatusWithAggregatesFilter<"Solicitation"> | $Enums.SolicitationStatus
    finishedAt?: DateTimeNullableWithAggregatesFilter<"Solicitation"> | Date | string | null
    canceledAt?: DateTimeNullableWithAggregatesFilter<"Solicitation"> | Date | string | null
    canceledCause?: StringNullableWithAggregatesFilter<"Solicitation"> | string | null
    blockedAt?: DateTimeNullableWithAggregatesFilter<"Solicitation"> | Date | string | null
    blockedCause?: StringNullableWithAggregatesFilter<"Solicitation"> | string | null
    examResultType?: EnumExamResultTypeNullableWithAggregatesFilter<"Solicitation"> | $Enums.ExamResultType | null
    solicitationResult?: EnumSolicitationResultNullableWithAggregatesFilter<"Solicitation"> | $Enums.SolicitationResult | null
    solicitationConclusionText?: StringNullableWithAggregatesFilter<"Solicitation"> | string | null
    solicitationSampleConclusion?: StringNullableWithAggregatesFilter<"Solicitation"> | string | null
    solicitationColectTypeConclusion?: StringNullableWithAggregatesFilter<"Solicitation"> | string | null
    solicitationSampleQuality?: EnumSolicitationSampleQualityNullableWithAggregatesFilter<"Solicitation"> | $Enums.SolicitationSampleQuality | null
    solicitationClinicAvaliation?: StringNullableWithAggregatesFilter<"Solicitation"> | string | null
    isDeleted?: BoolWithAggregatesFilter<"Solicitation"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Solicitation"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Solicitation"> | Date | string
    bloodCollectionTubeColor?: StringNullableListFilter<"Solicitation">
    userId?: StringNullableWithAggregatesFilter<"Solicitation"> | string | null
  }

  export type SolicitationHistoryWhereInput = {
    AND?: SolicitationHistoryWhereInput | SolicitationHistoryWhereInput[]
    OR?: SolicitationHistoryWhereInput[]
    NOT?: SolicitationHistoryWhereInput | SolicitationHistoryWhereInput[]
    id?: StringFilter<"SolicitationHistory"> | string
    solicitationId?: StringFilter<"SolicitationHistory"> | string
    previousStatus?: EnumSolicitationStatusNullableFilter<"SolicitationHistory"> | $Enums.SolicitationStatus | null
    newStatus?: EnumSolicitationStatusFilter<"SolicitationHistory"> | $Enums.SolicitationStatus
    blockedCause?: StringNullableFilter<"SolicitationHistory"> | string | null
    changedAt?: DateTimeFilter<"SolicitationHistory"> | Date | string
    changedById?: StringFilter<"SolicitationHistory"> | string
    changedBy?: XOR<UserScalarRelationFilter, UserWhereInput>
    solicitation?: XOR<SolicitationScalarRelationFilter, SolicitationWhereInput>
  }

  export type SolicitationHistoryOrderByWithRelationInput = {
    id?: SortOrder
    solicitationId?: SortOrder
    previousStatus?: SortOrderInput | SortOrder
    newStatus?: SortOrder
    blockedCause?: SortOrderInput | SortOrder
    changedAt?: SortOrder
    changedById?: SortOrder
    changedBy?: UserOrderByWithRelationInput
    solicitation?: SolicitationOrderByWithRelationInput
  }

  export type SolicitationHistoryWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: SolicitationHistoryWhereInput | SolicitationHistoryWhereInput[]
    OR?: SolicitationHistoryWhereInput[]
    NOT?: SolicitationHistoryWhereInput | SolicitationHistoryWhereInput[]
    solicitationId?: StringFilter<"SolicitationHistory"> | string
    previousStatus?: EnumSolicitationStatusNullableFilter<"SolicitationHistory"> | $Enums.SolicitationStatus | null
    newStatus?: EnumSolicitationStatusFilter<"SolicitationHistory"> | $Enums.SolicitationStatus
    blockedCause?: StringNullableFilter<"SolicitationHistory"> | string | null
    changedAt?: DateTimeFilter<"SolicitationHistory"> | Date | string
    changedById?: StringFilter<"SolicitationHistory"> | string
    changedBy?: XOR<UserScalarRelationFilter, UserWhereInput>
    solicitation?: XOR<SolicitationScalarRelationFilter, SolicitationWhereInput>
  }, "id">

  export type SolicitationHistoryOrderByWithAggregationInput = {
    id?: SortOrder
    solicitationId?: SortOrder
    previousStatus?: SortOrderInput | SortOrder
    newStatus?: SortOrder
    blockedCause?: SortOrderInput | SortOrder
    changedAt?: SortOrder
    changedById?: SortOrder
    _count?: SolicitationHistoryCountOrderByAggregateInput
    _max?: SolicitationHistoryMaxOrderByAggregateInput
    _min?: SolicitationHistoryMinOrderByAggregateInput
  }

  export type SolicitationHistoryScalarWhereWithAggregatesInput = {
    AND?: SolicitationHistoryScalarWhereWithAggregatesInput | SolicitationHistoryScalarWhereWithAggregatesInput[]
    OR?: SolicitationHistoryScalarWhereWithAggregatesInput[]
    NOT?: SolicitationHistoryScalarWhereWithAggregatesInput | SolicitationHistoryScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"SolicitationHistory"> | string
    solicitationId?: StringWithAggregatesFilter<"SolicitationHistory"> | string
    previousStatus?: EnumSolicitationStatusNullableWithAggregatesFilter<"SolicitationHistory"> | $Enums.SolicitationStatus | null
    newStatus?: EnumSolicitationStatusWithAggregatesFilter<"SolicitationHistory"> | $Enums.SolicitationStatus
    blockedCause?: StringNullableWithAggregatesFilter<"SolicitationHistory"> | string | null
    changedAt?: DateTimeWithAggregatesFilter<"SolicitationHistory"> | Date | string
    changedById?: StringWithAggregatesFilter<"SolicitationHistory"> | string
  }

  export type ExamResultTemplateWhereInput = {
    AND?: ExamResultTemplateWhereInput | ExamResultTemplateWhereInput[]
    OR?: ExamResultTemplateWhereInput[]
    NOT?: ExamResultTemplateWhereInput | ExamResultTemplateWhereInput[]
    id?: StringFilter<"ExamResultTemplate"> | string
    name?: StringNullableFilter<"ExamResultTemplate"> | string | null
    fileName?: StringNullableFilter<"ExamResultTemplate"> | string | null
    mimeType?: StringNullableFilter<"ExamResultTemplate"> | string | null
    fileData?: BytesNullableFilter<"ExamResultTemplate"> | Bytes | null
    createdAt?: DateTimeFilter<"ExamResultTemplate"> | Date | string
    updatedAt?: DateTimeFilter<"ExamResultTemplate"> | Date | string
  }

  export type ExamResultTemplateOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    fileName?: SortOrderInput | SortOrder
    mimeType?: SortOrderInput | SortOrder
    fileData?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ExamResultTemplateWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    name?: string
    AND?: ExamResultTemplateWhereInput | ExamResultTemplateWhereInput[]
    OR?: ExamResultTemplateWhereInput[]
    NOT?: ExamResultTemplateWhereInput | ExamResultTemplateWhereInput[]
    fileName?: StringNullableFilter<"ExamResultTemplate"> | string | null
    mimeType?: StringNullableFilter<"ExamResultTemplate"> | string | null
    fileData?: BytesNullableFilter<"ExamResultTemplate"> | Bytes | null
    createdAt?: DateTimeFilter<"ExamResultTemplate"> | Date | string
    updatedAt?: DateTimeFilter<"ExamResultTemplate"> | Date | string
  }, "id" | "name">

  export type ExamResultTemplateOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    fileName?: SortOrderInput | SortOrder
    mimeType?: SortOrderInput | SortOrder
    fileData?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ExamResultTemplateCountOrderByAggregateInput
    _max?: ExamResultTemplateMaxOrderByAggregateInput
    _min?: ExamResultTemplateMinOrderByAggregateInput
  }

  export type ExamResultTemplateScalarWhereWithAggregatesInput = {
    AND?: ExamResultTemplateScalarWhereWithAggregatesInput | ExamResultTemplateScalarWhereWithAggregatesInput[]
    OR?: ExamResultTemplateScalarWhereWithAggregatesInput[]
    NOT?: ExamResultTemplateScalarWhereWithAggregatesInput | ExamResultTemplateScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ExamResultTemplate"> | string
    name?: StringNullableWithAggregatesFilter<"ExamResultTemplate"> | string | null
    fileName?: StringNullableWithAggregatesFilter<"ExamResultTemplate"> | string | null
    mimeType?: StringNullableWithAggregatesFilter<"ExamResultTemplate"> | string | null
    fileData?: BytesNullableWithAggregatesFilter<"ExamResultTemplate"> | Bytes | null
    createdAt?: DateTimeWithAggregatesFilter<"ExamResultTemplate"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"ExamResultTemplate"> | Date | string
  }

  export type VariablesWhereInput = {
    AND?: VariablesWhereInput | VariablesWhereInput[]
    OR?: VariablesWhereInput[]
    NOT?: VariablesWhereInput | VariablesWhereInput[]
    id?: StringFilter<"Variables"> | string
    variableName?: StringFilter<"Variables"> | string
    tableRelated?: StringNullableFilter<"Variables"> | string | null
    fieldRelated?: StringNullableFilter<"Variables"> | string | null
    createdAt?: DateTimeFilter<"Variables"> | Date | string
    updatedAt?: DateTimeFilter<"Variables"> | Date | string
  }

  export type VariablesOrderByWithRelationInput = {
    id?: SortOrder
    variableName?: SortOrder
    tableRelated?: SortOrderInput | SortOrder
    fieldRelated?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type VariablesWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    variableName?: string
    AND?: VariablesWhereInput | VariablesWhereInput[]
    OR?: VariablesWhereInput[]
    NOT?: VariablesWhereInput | VariablesWhereInput[]
    tableRelated?: StringNullableFilter<"Variables"> | string | null
    fieldRelated?: StringNullableFilter<"Variables"> | string | null
    createdAt?: DateTimeFilter<"Variables"> | Date | string
    updatedAt?: DateTimeFilter<"Variables"> | Date | string
  }, "id" | "variableName">

  export type VariablesOrderByWithAggregationInput = {
    id?: SortOrder
    variableName?: SortOrder
    tableRelated?: SortOrderInput | SortOrder
    fieldRelated?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: VariablesCountOrderByAggregateInput
    _max?: VariablesMaxOrderByAggregateInput
    _min?: VariablesMinOrderByAggregateInput
  }

  export type VariablesScalarWhereWithAggregatesInput = {
    AND?: VariablesScalarWhereWithAggregatesInput | VariablesScalarWhereWithAggregatesInput[]
    OR?: VariablesScalarWhereWithAggregatesInput[]
    NOT?: VariablesScalarWhereWithAggregatesInput | VariablesScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Variables"> | string
    variableName?: StringWithAggregatesFilter<"Variables"> | string
    tableRelated?: StringNullableWithAggregatesFilter<"Variables"> | string | null
    fieldRelated?: StringNullableWithAggregatesFilter<"Variables"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Variables"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Variables"> | Date | string
  }

  export type PasswordResetTokenWhereInput = {
    AND?: PasswordResetTokenWhereInput | PasswordResetTokenWhereInput[]
    OR?: PasswordResetTokenWhereInput[]
    NOT?: PasswordResetTokenWhereInput | PasswordResetTokenWhereInput[]
    id?: StringFilter<"PasswordResetToken"> | string
    userId?: StringFilter<"PasswordResetToken"> | string
    tokenHash?: StringFilter<"PasswordResetToken"> | string
    expiresAt?: DateTimeFilter<"PasswordResetToken"> | Date | string
    usedAt?: DateTimeNullableFilter<"PasswordResetToken"> | Date | string | null
    createdAt?: DateTimeFilter<"PasswordResetToken"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type PasswordResetTokenOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    tokenHash?: SortOrder
    expiresAt?: SortOrder
    usedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type PasswordResetTokenWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    tokenHash?: string
    AND?: PasswordResetTokenWhereInput | PasswordResetTokenWhereInput[]
    OR?: PasswordResetTokenWhereInput[]
    NOT?: PasswordResetTokenWhereInput | PasswordResetTokenWhereInput[]
    userId?: StringFilter<"PasswordResetToken"> | string
    expiresAt?: DateTimeFilter<"PasswordResetToken"> | Date | string
    usedAt?: DateTimeNullableFilter<"PasswordResetToken"> | Date | string | null
    createdAt?: DateTimeFilter<"PasswordResetToken"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "tokenHash">

  export type PasswordResetTokenOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    tokenHash?: SortOrder
    expiresAt?: SortOrder
    usedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: PasswordResetTokenCountOrderByAggregateInput
    _max?: PasswordResetTokenMaxOrderByAggregateInput
    _min?: PasswordResetTokenMinOrderByAggregateInput
  }

  export type PasswordResetTokenScalarWhereWithAggregatesInput = {
    AND?: PasswordResetTokenScalarWhereWithAggregatesInput | PasswordResetTokenScalarWhereWithAggregatesInput[]
    OR?: PasswordResetTokenScalarWhereWithAggregatesInput[]
    NOT?: PasswordResetTokenScalarWhereWithAggregatesInput | PasswordResetTokenScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"PasswordResetToken"> | string
    userId?: StringWithAggregatesFilter<"PasswordResetToken"> | string
    tokenHash?: StringWithAggregatesFilter<"PasswordResetToken"> | string
    expiresAt?: DateTimeWithAggregatesFilter<"PasswordResetToken"> | Date | string
    usedAt?: DateTimeNullableWithAggregatesFilter<"PasswordResetToken"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"PasswordResetToken"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    name?: string | null
    email?: string | null
    password?: string | null
    isActive?: boolean
    role?: $Enums.Role | null
    createdAt?: Date | string
    updatedAt?: Date | string
    solicitations?: SolicitationCreateNestedManyWithoutUserInput
    solicitationHistories?: SolicitationHistoryCreateNestedManyWithoutChangedByInput
    passwordResetToken?: PasswordResetTokenCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    name?: string | null
    email?: string | null
    password?: string | null
    isActive?: boolean
    role?: $Enums.Role | null
    createdAt?: Date | string
    updatedAt?: Date | string
    solicitations?: SolicitationUncheckedCreateNestedManyWithoutUserInput
    solicitationHistories?: SolicitationHistoryUncheckedCreateNestedManyWithoutChangedByInput
    passwordResetToken?: PasswordResetTokenUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    role?: NullableEnumRoleFieldUpdateOperationsInput | $Enums.Role | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    solicitations?: SolicitationUpdateManyWithoutUserNestedInput
    solicitationHistories?: SolicitationHistoryUpdateManyWithoutChangedByNestedInput
    passwordResetToken?: PasswordResetTokenUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    role?: NullableEnumRoleFieldUpdateOperationsInput | $Enums.Role | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    solicitations?: SolicitationUncheckedUpdateManyWithoutUserNestedInput
    solicitationHistories?: SolicitationHistoryUncheckedUpdateManyWithoutChangedByNestedInput
    passwordResetToken?: PasswordResetTokenUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    name?: string | null
    email?: string | null
    password?: string | null
    isActive?: boolean
    role?: $Enums.Role | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    role?: NullableEnumRoleFieldUpdateOperationsInput | $Enums.Role | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    role?: NullableEnumRoleFieldUpdateOperationsInput | $Enums.Role | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SampleCreateInput = {
    id?: string
    name?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SampleUncheckedCreateInput = {
    id?: string
    name?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SampleUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SampleUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SampleCreateManyInput = {
    id?: string
    name?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SampleUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SampleUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ExamsCreateInput = {
    id?: string
    name?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ExamsUncheckedCreateInput = {
    id?: string
    name?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ExamsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ExamsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ExamsCreateManyInput = {
    id?: string
    name?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ExamsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ExamsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InfectiousAgentsCreateInput = {
    id?: string
    name?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type InfectiousAgentsUncheckedCreateInput = {
    id?: string
    name?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type InfectiousAgentsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InfectiousAgentsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InfectiousAgentsCreateManyInput = {
    id?: string
    name?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type InfectiousAgentsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InfectiousAgentsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SolicitationCreateInput = {
    id?: string
    tutor?: string | null
    patient?: string | null
    gender?: string | null
    age?: string | null
    doctor?: string | null
    specie?: string | null
    hospitalVet?: string | null
    infectiousAgents?: SolicitationCreateinfectiousAgentsInput | string[]
    samples?: SolicitationCreatesamplesInput | string[]
    exams?: SolicitationCreateexamsInput | string[]
    status?: $Enums.SolicitationStatus
    finishedAt?: Date | string | null
    canceledAt?: Date | string | null
    canceledCause?: string | null
    blockedAt?: Date | string | null
    blockedCause?: string | null
    examResultType?: $Enums.ExamResultType | null
    solicitationResult?: $Enums.SolicitationResult | null
    solicitationConclusionText?: string | null
    solicitationSampleConclusion?: string | null
    solicitationColectTypeConclusion?: string | null
    solicitationSampleQuality?: $Enums.SolicitationSampleQuality | null
    solicitationClinicAvaliation?: string | null
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    bloodCollectionTubeColor?: SolicitationCreatebloodCollectionTubeColorInput | string[]
    user?: UserCreateNestedOneWithoutSolicitationsInput
    solicitationHistories?: SolicitationHistoryCreateNestedManyWithoutSolicitationInput
  }

  export type SolicitationUncheckedCreateInput = {
    id?: string
    tutor?: string | null
    patient?: string | null
    gender?: string | null
    age?: string | null
    doctor?: string | null
    specie?: string | null
    hospitalVet?: string | null
    infectiousAgents?: SolicitationCreateinfectiousAgentsInput | string[]
    samples?: SolicitationCreatesamplesInput | string[]
    exams?: SolicitationCreateexamsInput | string[]
    status?: $Enums.SolicitationStatus
    finishedAt?: Date | string | null
    canceledAt?: Date | string | null
    canceledCause?: string | null
    blockedAt?: Date | string | null
    blockedCause?: string | null
    examResultType?: $Enums.ExamResultType | null
    solicitationResult?: $Enums.SolicitationResult | null
    solicitationConclusionText?: string | null
    solicitationSampleConclusion?: string | null
    solicitationColectTypeConclusion?: string | null
    solicitationSampleQuality?: $Enums.SolicitationSampleQuality | null
    solicitationClinicAvaliation?: string | null
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    bloodCollectionTubeColor?: SolicitationCreatebloodCollectionTubeColorInput | string[]
    userId?: string | null
    solicitationHistories?: SolicitationHistoryUncheckedCreateNestedManyWithoutSolicitationInput
  }

  export type SolicitationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    tutor?: NullableStringFieldUpdateOperationsInput | string | null
    patient?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    age?: NullableStringFieldUpdateOperationsInput | string | null
    doctor?: NullableStringFieldUpdateOperationsInput | string | null
    specie?: NullableStringFieldUpdateOperationsInput | string | null
    hospitalVet?: NullableStringFieldUpdateOperationsInput | string | null
    infectiousAgents?: SolicitationUpdateinfectiousAgentsInput | string[]
    samples?: SolicitationUpdatesamplesInput | string[]
    exams?: SolicitationUpdateexamsInput | string[]
    status?: EnumSolicitationStatusFieldUpdateOperationsInput | $Enums.SolicitationStatus
    finishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    canceledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    canceledCause?: NullableStringFieldUpdateOperationsInput | string | null
    blockedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    blockedCause?: NullableStringFieldUpdateOperationsInput | string | null
    examResultType?: NullableEnumExamResultTypeFieldUpdateOperationsInput | $Enums.ExamResultType | null
    solicitationResult?: NullableEnumSolicitationResultFieldUpdateOperationsInput | $Enums.SolicitationResult | null
    solicitationConclusionText?: NullableStringFieldUpdateOperationsInput | string | null
    solicitationSampleConclusion?: NullableStringFieldUpdateOperationsInput | string | null
    solicitationColectTypeConclusion?: NullableStringFieldUpdateOperationsInput | string | null
    solicitationSampleQuality?: NullableEnumSolicitationSampleQualityFieldUpdateOperationsInput | $Enums.SolicitationSampleQuality | null
    solicitationClinicAvaliation?: NullableStringFieldUpdateOperationsInput | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bloodCollectionTubeColor?: SolicitationUpdatebloodCollectionTubeColorInput | string[]
    user?: UserUpdateOneWithoutSolicitationsNestedInput
    solicitationHistories?: SolicitationHistoryUpdateManyWithoutSolicitationNestedInput
  }

  export type SolicitationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    tutor?: NullableStringFieldUpdateOperationsInput | string | null
    patient?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    age?: NullableStringFieldUpdateOperationsInput | string | null
    doctor?: NullableStringFieldUpdateOperationsInput | string | null
    specie?: NullableStringFieldUpdateOperationsInput | string | null
    hospitalVet?: NullableStringFieldUpdateOperationsInput | string | null
    infectiousAgents?: SolicitationUpdateinfectiousAgentsInput | string[]
    samples?: SolicitationUpdatesamplesInput | string[]
    exams?: SolicitationUpdateexamsInput | string[]
    status?: EnumSolicitationStatusFieldUpdateOperationsInput | $Enums.SolicitationStatus
    finishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    canceledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    canceledCause?: NullableStringFieldUpdateOperationsInput | string | null
    blockedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    blockedCause?: NullableStringFieldUpdateOperationsInput | string | null
    examResultType?: NullableEnumExamResultTypeFieldUpdateOperationsInput | $Enums.ExamResultType | null
    solicitationResult?: NullableEnumSolicitationResultFieldUpdateOperationsInput | $Enums.SolicitationResult | null
    solicitationConclusionText?: NullableStringFieldUpdateOperationsInput | string | null
    solicitationSampleConclusion?: NullableStringFieldUpdateOperationsInput | string | null
    solicitationColectTypeConclusion?: NullableStringFieldUpdateOperationsInput | string | null
    solicitationSampleQuality?: NullableEnumSolicitationSampleQualityFieldUpdateOperationsInput | $Enums.SolicitationSampleQuality | null
    solicitationClinicAvaliation?: NullableStringFieldUpdateOperationsInput | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bloodCollectionTubeColor?: SolicitationUpdatebloodCollectionTubeColorInput | string[]
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    solicitationHistories?: SolicitationHistoryUncheckedUpdateManyWithoutSolicitationNestedInput
  }

  export type SolicitationCreateManyInput = {
    id?: string
    tutor?: string | null
    patient?: string | null
    gender?: string | null
    age?: string | null
    doctor?: string | null
    specie?: string | null
    hospitalVet?: string | null
    infectiousAgents?: SolicitationCreateinfectiousAgentsInput | string[]
    samples?: SolicitationCreatesamplesInput | string[]
    exams?: SolicitationCreateexamsInput | string[]
    status?: $Enums.SolicitationStatus
    finishedAt?: Date | string | null
    canceledAt?: Date | string | null
    canceledCause?: string | null
    blockedAt?: Date | string | null
    blockedCause?: string | null
    examResultType?: $Enums.ExamResultType | null
    solicitationResult?: $Enums.SolicitationResult | null
    solicitationConclusionText?: string | null
    solicitationSampleConclusion?: string | null
    solicitationColectTypeConclusion?: string | null
    solicitationSampleQuality?: $Enums.SolicitationSampleQuality | null
    solicitationClinicAvaliation?: string | null
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    bloodCollectionTubeColor?: SolicitationCreatebloodCollectionTubeColorInput | string[]
    userId?: string | null
  }

  export type SolicitationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    tutor?: NullableStringFieldUpdateOperationsInput | string | null
    patient?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    age?: NullableStringFieldUpdateOperationsInput | string | null
    doctor?: NullableStringFieldUpdateOperationsInput | string | null
    specie?: NullableStringFieldUpdateOperationsInput | string | null
    hospitalVet?: NullableStringFieldUpdateOperationsInput | string | null
    infectiousAgents?: SolicitationUpdateinfectiousAgentsInput | string[]
    samples?: SolicitationUpdatesamplesInput | string[]
    exams?: SolicitationUpdateexamsInput | string[]
    status?: EnumSolicitationStatusFieldUpdateOperationsInput | $Enums.SolicitationStatus
    finishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    canceledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    canceledCause?: NullableStringFieldUpdateOperationsInput | string | null
    blockedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    blockedCause?: NullableStringFieldUpdateOperationsInput | string | null
    examResultType?: NullableEnumExamResultTypeFieldUpdateOperationsInput | $Enums.ExamResultType | null
    solicitationResult?: NullableEnumSolicitationResultFieldUpdateOperationsInput | $Enums.SolicitationResult | null
    solicitationConclusionText?: NullableStringFieldUpdateOperationsInput | string | null
    solicitationSampleConclusion?: NullableStringFieldUpdateOperationsInput | string | null
    solicitationColectTypeConclusion?: NullableStringFieldUpdateOperationsInput | string | null
    solicitationSampleQuality?: NullableEnumSolicitationSampleQualityFieldUpdateOperationsInput | $Enums.SolicitationSampleQuality | null
    solicitationClinicAvaliation?: NullableStringFieldUpdateOperationsInput | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bloodCollectionTubeColor?: SolicitationUpdatebloodCollectionTubeColorInput | string[]
  }

  export type SolicitationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    tutor?: NullableStringFieldUpdateOperationsInput | string | null
    patient?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    age?: NullableStringFieldUpdateOperationsInput | string | null
    doctor?: NullableStringFieldUpdateOperationsInput | string | null
    specie?: NullableStringFieldUpdateOperationsInput | string | null
    hospitalVet?: NullableStringFieldUpdateOperationsInput | string | null
    infectiousAgents?: SolicitationUpdateinfectiousAgentsInput | string[]
    samples?: SolicitationUpdatesamplesInput | string[]
    exams?: SolicitationUpdateexamsInput | string[]
    status?: EnumSolicitationStatusFieldUpdateOperationsInput | $Enums.SolicitationStatus
    finishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    canceledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    canceledCause?: NullableStringFieldUpdateOperationsInput | string | null
    blockedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    blockedCause?: NullableStringFieldUpdateOperationsInput | string | null
    examResultType?: NullableEnumExamResultTypeFieldUpdateOperationsInput | $Enums.ExamResultType | null
    solicitationResult?: NullableEnumSolicitationResultFieldUpdateOperationsInput | $Enums.SolicitationResult | null
    solicitationConclusionText?: NullableStringFieldUpdateOperationsInput | string | null
    solicitationSampleConclusion?: NullableStringFieldUpdateOperationsInput | string | null
    solicitationColectTypeConclusion?: NullableStringFieldUpdateOperationsInput | string | null
    solicitationSampleQuality?: NullableEnumSolicitationSampleQualityFieldUpdateOperationsInput | $Enums.SolicitationSampleQuality | null
    solicitationClinicAvaliation?: NullableStringFieldUpdateOperationsInput | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bloodCollectionTubeColor?: SolicitationUpdatebloodCollectionTubeColorInput | string[]
    userId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SolicitationHistoryCreateInput = {
    id?: string
    previousStatus?: $Enums.SolicitationStatus | null
    newStatus: $Enums.SolicitationStatus
    blockedCause?: string | null
    changedAt?: Date | string
    changedBy: UserCreateNestedOneWithoutSolicitationHistoriesInput
    solicitation: SolicitationCreateNestedOneWithoutSolicitationHistoriesInput
  }

  export type SolicitationHistoryUncheckedCreateInput = {
    id?: string
    solicitationId: string
    previousStatus?: $Enums.SolicitationStatus | null
    newStatus: $Enums.SolicitationStatus
    blockedCause?: string | null
    changedAt?: Date | string
    changedById: string
  }

  export type SolicitationHistoryUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    previousStatus?: NullableEnumSolicitationStatusFieldUpdateOperationsInput | $Enums.SolicitationStatus | null
    newStatus?: EnumSolicitationStatusFieldUpdateOperationsInput | $Enums.SolicitationStatus
    blockedCause?: NullableStringFieldUpdateOperationsInput | string | null
    changedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    changedBy?: UserUpdateOneRequiredWithoutSolicitationHistoriesNestedInput
    solicitation?: SolicitationUpdateOneRequiredWithoutSolicitationHistoriesNestedInput
  }

  export type SolicitationHistoryUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    solicitationId?: StringFieldUpdateOperationsInput | string
    previousStatus?: NullableEnumSolicitationStatusFieldUpdateOperationsInput | $Enums.SolicitationStatus | null
    newStatus?: EnumSolicitationStatusFieldUpdateOperationsInput | $Enums.SolicitationStatus
    blockedCause?: NullableStringFieldUpdateOperationsInput | string | null
    changedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    changedById?: StringFieldUpdateOperationsInput | string
  }

  export type SolicitationHistoryCreateManyInput = {
    id?: string
    solicitationId: string
    previousStatus?: $Enums.SolicitationStatus | null
    newStatus: $Enums.SolicitationStatus
    blockedCause?: string | null
    changedAt?: Date | string
    changedById: string
  }

  export type SolicitationHistoryUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    previousStatus?: NullableEnumSolicitationStatusFieldUpdateOperationsInput | $Enums.SolicitationStatus | null
    newStatus?: EnumSolicitationStatusFieldUpdateOperationsInput | $Enums.SolicitationStatus
    blockedCause?: NullableStringFieldUpdateOperationsInput | string | null
    changedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SolicitationHistoryUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    solicitationId?: StringFieldUpdateOperationsInput | string
    previousStatus?: NullableEnumSolicitationStatusFieldUpdateOperationsInput | $Enums.SolicitationStatus | null
    newStatus?: EnumSolicitationStatusFieldUpdateOperationsInput | $Enums.SolicitationStatus
    blockedCause?: NullableStringFieldUpdateOperationsInput | string | null
    changedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    changedById?: StringFieldUpdateOperationsInput | string
  }

  export type ExamResultTemplateCreateInput = {
    id?: string
    name?: string | null
    fileName?: string | null
    mimeType?: string | null
    fileData?: Bytes | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ExamResultTemplateUncheckedCreateInput = {
    id?: string
    name?: string | null
    fileName?: string | null
    mimeType?: string | null
    fileData?: Bytes | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ExamResultTemplateUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    fileName?: NullableStringFieldUpdateOperationsInput | string | null
    mimeType?: NullableStringFieldUpdateOperationsInput | string | null
    fileData?: NullableBytesFieldUpdateOperationsInput | Bytes | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ExamResultTemplateUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    fileName?: NullableStringFieldUpdateOperationsInput | string | null
    mimeType?: NullableStringFieldUpdateOperationsInput | string | null
    fileData?: NullableBytesFieldUpdateOperationsInput | Bytes | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ExamResultTemplateCreateManyInput = {
    id?: string
    name?: string | null
    fileName?: string | null
    mimeType?: string | null
    fileData?: Bytes | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ExamResultTemplateUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    fileName?: NullableStringFieldUpdateOperationsInput | string | null
    mimeType?: NullableStringFieldUpdateOperationsInput | string | null
    fileData?: NullableBytesFieldUpdateOperationsInput | Bytes | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ExamResultTemplateUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    fileName?: NullableStringFieldUpdateOperationsInput | string | null
    mimeType?: NullableStringFieldUpdateOperationsInput | string | null
    fileData?: NullableBytesFieldUpdateOperationsInput | Bytes | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VariablesCreateInput = {
    id?: string
    variableName: string
    tableRelated?: string | null
    fieldRelated?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type VariablesUncheckedCreateInput = {
    id?: string
    variableName: string
    tableRelated?: string | null
    fieldRelated?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type VariablesUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    variableName?: StringFieldUpdateOperationsInput | string
    tableRelated?: NullableStringFieldUpdateOperationsInput | string | null
    fieldRelated?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VariablesUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    variableName?: StringFieldUpdateOperationsInput | string
    tableRelated?: NullableStringFieldUpdateOperationsInput | string | null
    fieldRelated?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VariablesCreateManyInput = {
    id?: string
    variableName: string
    tableRelated?: string | null
    fieldRelated?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type VariablesUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    variableName?: StringFieldUpdateOperationsInput | string
    tableRelated?: NullableStringFieldUpdateOperationsInput | string | null
    fieldRelated?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VariablesUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    variableName?: StringFieldUpdateOperationsInput | string
    tableRelated?: NullableStringFieldUpdateOperationsInput | string | null
    fieldRelated?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PasswordResetTokenCreateInput = {
    id?: string
    tokenHash: string
    expiresAt: Date | string
    usedAt?: Date | string | null
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutPasswordResetTokenInput
  }

  export type PasswordResetTokenUncheckedCreateInput = {
    id?: string
    userId: string
    tokenHash: string
    expiresAt: Date | string
    usedAt?: Date | string | null
    createdAt?: Date | string
  }

  export type PasswordResetTokenUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    tokenHash?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    usedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutPasswordResetTokenNestedInput
  }

  export type PasswordResetTokenUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    tokenHash?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    usedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PasswordResetTokenCreateManyInput = {
    id?: string
    userId: string
    tokenHash: string
    expiresAt: Date | string
    usedAt?: Date | string | null
    createdAt?: Date | string
  }

  export type PasswordResetTokenUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    tokenHash?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    usedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PasswordResetTokenUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    tokenHash?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    usedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type EnumRoleNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel> | null
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel> | null
    not?: NestedEnumRoleNullableFilter<$PrismaModel> | $Enums.Role | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type SolicitationListRelationFilter = {
    every?: SolicitationWhereInput
    some?: SolicitationWhereInput
    none?: SolicitationWhereInput
  }

  export type SolicitationHistoryListRelationFilter = {
    every?: SolicitationHistoryWhereInput
    some?: SolicitationHistoryWhereInput
    none?: SolicitationHistoryWhereInput
  }

  export type PasswordResetTokenListRelationFilter = {
    every?: PasswordResetTokenWhereInput
    some?: PasswordResetTokenWhereInput
    none?: PasswordResetTokenWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type SolicitationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SolicitationHistoryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PasswordResetTokenOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    isActive?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    isActive?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    isActive?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
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

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type EnumRoleNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel> | null
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel> | null
    not?: NestedEnumRoleNullableWithAggregatesFilter<$PrismaModel> | $Enums.Role | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumRoleNullableFilter<$PrismaModel>
    _max?: NestedEnumRoleNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type SampleCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SampleMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SampleMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ExamsCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ExamsMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ExamsMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type InfectiousAgentsCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type InfectiousAgentsMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type InfectiousAgentsMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type EnumSolicitationStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.SolicitationStatus | EnumSolicitationStatusFieldRefInput<$PrismaModel>
    in?: $Enums.SolicitationStatus[] | ListEnumSolicitationStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.SolicitationStatus[] | ListEnumSolicitationStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumSolicitationStatusFilter<$PrismaModel> | $Enums.SolicitationStatus
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type EnumExamResultTypeNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.ExamResultType | EnumExamResultTypeFieldRefInput<$PrismaModel> | null
    in?: $Enums.ExamResultType[] | ListEnumExamResultTypeFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.ExamResultType[] | ListEnumExamResultTypeFieldRefInput<$PrismaModel> | null
    not?: NestedEnumExamResultTypeNullableFilter<$PrismaModel> | $Enums.ExamResultType | null
  }

  export type EnumSolicitationResultNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.SolicitationResult | EnumSolicitationResultFieldRefInput<$PrismaModel> | null
    in?: $Enums.SolicitationResult[] | ListEnumSolicitationResultFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.SolicitationResult[] | ListEnumSolicitationResultFieldRefInput<$PrismaModel> | null
    not?: NestedEnumSolicitationResultNullableFilter<$PrismaModel> | $Enums.SolicitationResult | null
  }

  export type EnumSolicitationSampleQualityNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.SolicitationSampleQuality | EnumSolicitationSampleQualityFieldRefInput<$PrismaModel> | null
    in?: $Enums.SolicitationSampleQuality[] | ListEnumSolicitationSampleQualityFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.SolicitationSampleQuality[] | ListEnumSolicitationSampleQualityFieldRefInput<$PrismaModel> | null
    not?: NestedEnumSolicitationSampleQualityNullableFilter<$PrismaModel> | $Enums.SolicitationSampleQuality | null
  }

  export type UserNullableScalarRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type SolicitationCountOrderByAggregateInput = {
    id?: SortOrder
    tutor?: SortOrder
    patient?: SortOrder
    gender?: SortOrder
    age?: SortOrder
    doctor?: SortOrder
    specie?: SortOrder
    hospitalVet?: SortOrder
    infectiousAgents?: SortOrder
    samples?: SortOrder
    exams?: SortOrder
    status?: SortOrder
    finishedAt?: SortOrder
    canceledAt?: SortOrder
    canceledCause?: SortOrder
    blockedAt?: SortOrder
    blockedCause?: SortOrder
    examResultType?: SortOrder
    solicitationResult?: SortOrder
    solicitationConclusionText?: SortOrder
    solicitationSampleConclusion?: SortOrder
    solicitationColectTypeConclusion?: SortOrder
    solicitationSampleQuality?: SortOrder
    solicitationClinicAvaliation?: SortOrder
    isDeleted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    bloodCollectionTubeColor?: SortOrder
    userId?: SortOrder
  }

  export type SolicitationMaxOrderByAggregateInput = {
    id?: SortOrder
    tutor?: SortOrder
    patient?: SortOrder
    gender?: SortOrder
    age?: SortOrder
    doctor?: SortOrder
    specie?: SortOrder
    hospitalVet?: SortOrder
    status?: SortOrder
    finishedAt?: SortOrder
    canceledAt?: SortOrder
    canceledCause?: SortOrder
    blockedAt?: SortOrder
    blockedCause?: SortOrder
    examResultType?: SortOrder
    solicitationResult?: SortOrder
    solicitationConclusionText?: SortOrder
    solicitationSampleConclusion?: SortOrder
    solicitationColectTypeConclusion?: SortOrder
    solicitationSampleQuality?: SortOrder
    solicitationClinicAvaliation?: SortOrder
    isDeleted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
  }

  export type SolicitationMinOrderByAggregateInput = {
    id?: SortOrder
    tutor?: SortOrder
    patient?: SortOrder
    gender?: SortOrder
    age?: SortOrder
    doctor?: SortOrder
    specie?: SortOrder
    hospitalVet?: SortOrder
    status?: SortOrder
    finishedAt?: SortOrder
    canceledAt?: SortOrder
    canceledCause?: SortOrder
    blockedAt?: SortOrder
    blockedCause?: SortOrder
    examResultType?: SortOrder
    solicitationResult?: SortOrder
    solicitationConclusionText?: SortOrder
    solicitationSampleConclusion?: SortOrder
    solicitationColectTypeConclusion?: SortOrder
    solicitationSampleQuality?: SortOrder
    solicitationClinicAvaliation?: SortOrder
    isDeleted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
  }

  export type EnumSolicitationStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SolicitationStatus | EnumSolicitationStatusFieldRefInput<$PrismaModel>
    in?: $Enums.SolicitationStatus[] | ListEnumSolicitationStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.SolicitationStatus[] | ListEnumSolicitationStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumSolicitationStatusWithAggregatesFilter<$PrismaModel> | $Enums.SolicitationStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSolicitationStatusFilter<$PrismaModel>
    _max?: NestedEnumSolicitationStatusFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type EnumExamResultTypeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ExamResultType | EnumExamResultTypeFieldRefInput<$PrismaModel> | null
    in?: $Enums.ExamResultType[] | ListEnumExamResultTypeFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.ExamResultType[] | ListEnumExamResultTypeFieldRefInput<$PrismaModel> | null
    not?: NestedEnumExamResultTypeNullableWithAggregatesFilter<$PrismaModel> | $Enums.ExamResultType | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumExamResultTypeNullableFilter<$PrismaModel>
    _max?: NestedEnumExamResultTypeNullableFilter<$PrismaModel>
  }

  export type EnumSolicitationResultNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SolicitationResult | EnumSolicitationResultFieldRefInput<$PrismaModel> | null
    in?: $Enums.SolicitationResult[] | ListEnumSolicitationResultFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.SolicitationResult[] | ListEnumSolicitationResultFieldRefInput<$PrismaModel> | null
    not?: NestedEnumSolicitationResultNullableWithAggregatesFilter<$PrismaModel> | $Enums.SolicitationResult | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumSolicitationResultNullableFilter<$PrismaModel>
    _max?: NestedEnumSolicitationResultNullableFilter<$PrismaModel>
  }

  export type EnumSolicitationSampleQualityNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SolicitationSampleQuality | EnumSolicitationSampleQualityFieldRefInput<$PrismaModel> | null
    in?: $Enums.SolicitationSampleQuality[] | ListEnumSolicitationSampleQualityFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.SolicitationSampleQuality[] | ListEnumSolicitationSampleQualityFieldRefInput<$PrismaModel> | null
    not?: NestedEnumSolicitationSampleQualityNullableWithAggregatesFilter<$PrismaModel> | $Enums.SolicitationSampleQuality | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumSolicitationSampleQualityNullableFilter<$PrismaModel>
    _max?: NestedEnumSolicitationSampleQualityNullableFilter<$PrismaModel>
  }

  export type EnumSolicitationStatusNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.SolicitationStatus | EnumSolicitationStatusFieldRefInput<$PrismaModel> | null
    in?: $Enums.SolicitationStatus[] | ListEnumSolicitationStatusFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.SolicitationStatus[] | ListEnumSolicitationStatusFieldRefInput<$PrismaModel> | null
    not?: NestedEnumSolicitationStatusNullableFilter<$PrismaModel> | $Enums.SolicitationStatus | null
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type SolicitationScalarRelationFilter = {
    is?: SolicitationWhereInput
    isNot?: SolicitationWhereInput
  }

  export type SolicitationHistoryCountOrderByAggregateInput = {
    id?: SortOrder
    solicitationId?: SortOrder
    previousStatus?: SortOrder
    newStatus?: SortOrder
    blockedCause?: SortOrder
    changedAt?: SortOrder
    changedById?: SortOrder
  }

  export type SolicitationHistoryMaxOrderByAggregateInput = {
    id?: SortOrder
    solicitationId?: SortOrder
    previousStatus?: SortOrder
    newStatus?: SortOrder
    blockedCause?: SortOrder
    changedAt?: SortOrder
    changedById?: SortOrder
  }

  export type SolicitationHistoryMinOrderByAggregateInput = {
    id?: SortOrder
    solicitationId?: SortOrder
    previousStatus?: SortOrder
    newStatus?: SortOrder
    blockedCause?: SortOrder
    changedAt?: SortOrder
    changedById?: SortOrder
  }

  export type EnumSolicitationStatusNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SolicitationStatus | EnumSolicitationStatusFieldRefInput<$PrismaModel> | null
    in?: $Enums.SolicitationStatus[] | ListEnumSolicitationStatusFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.SolicitationStatus[] | ListEnumSolicitationStatusFieldRefInput<$PrismaModel> | null
    not?: NestedEnumSolicitationStatusNullableWithAggregatesFilter<$PrismaModel> | $Enums.SolicitationStatus | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumSolicitationStatusNullableFilter<$PrismaModel>
    _max?: NestedEnumSolicitationStatusNullableFilter<$PrismaModel>
  }

  export type BytesNullableFilter<$PrismaModel = never> = {
    equals?: Bytes | BytesFieldRefInput<$PrismaModel> | null
    in?: Bytes[] | ListBytesFieldRefInput<$PrismaModel> | null
    notIn?: Bytes[] | ListBytesFieldRefInput<$PrismaModel> | null
    not?: NestedBytesNullableFilter<$PrismaModel> | Bytes | null
  }

  export type ExamResultTemplateCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    fileName?: SortOrder
    mimeType?: SortOrder
    fileData?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ExamResultTemplateMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    fileName?: SortOrder
    mimeType?: SortOrder
    fileData?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ExamResultTemplateMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    fileName?: SortOrder
    mimeType?: SortOrder
    fileData?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BytesNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Bytes | BytesFieldRefInput<$PrismaModel> | null
    in?: Bytes[] | ListBytesFieldRefInput<$PrismaModel> | null
    notIn?: Bytes[] | ListBytesFieldRefInput<$PrismaModel> | null
    not?: NestedBytesNullableWithAggregatesFilter<$PrismaModel> | Bytes | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBytesNullableFilter<$PrismaModel>
    _max?: NestedBytesNullableFilter<$PrismaModel>
  }

  export type VariablesCountOrderByAggregateInput = {
    id?: SortOrder
    variableName?: SortOrder
    tableRelated?: SortOrder
    fieldRelated?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type VariablesMaxOrderByAggregateInput = {
    id?: SortOrder
    variableName?: SortOrder
    tableRelated?: SortOrder
    fieldRelated?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type VariablesMinOrderByAggregateInput = {
    id?: SortOrder
    variableName?: SortOrder
    tableRelated?: SortOrder
    fieldRelated?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PasswordResetTokenCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    tokenHash?: SortOrder
    expiresAt?: SortOrder
    usedAt?: SortOrder
    createdAt?: SortOrder
  }

  export type PasswordResetTokenMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    tokenHash?: SortOrder
    expiresAt?: SortOrder
    usedAt?: SortOrder
    createdAt?: SortOrder
  }

  export type PasswordResetTokenMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    tokenHash?: SortOrder
    expiresAt?: SortOrder
    usedAt?: SortOrder
    createdAt?: SortOrder
  }

  export type SolicitationCreateNestedManyWithoutUserInput = {
    create?: XOR<SolicitationCreateWithoutUserInput, SolicitationUncheckedCreateWithoutUserInput> | SolicitationCreateWithoutUserInput[] | SolicitationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SolicitationCreateOrConnectWithoutUserInput | SolicitationCreateOrConnectWithoutUserInput[]
    createMany?: SolicitationCreateManyUserInputEnvelope
    connect?: SolicitationWhereUniqueInput | SolicitationWhereUniqueInput[]
  }

  export type SolicitationHistoryCreateNestedManyWithoutChangedByInput = {
    create?: XOR<SolicitationHistoryCreateWithoutChangedByInput, SolicitationHistoryUncheckedCreateWithoutChangedByInput> | SolicitationHistoryCreateWithoutChangedByInput[] | SolicitationHistoryUncheckedCreateWithoutChangedByInput[]
    connectOrCreate?: SolicitationHistoryCreateOrConnectWithoutChangedByInput | SolicitationHistoryCreateOrConnectWithoutChangedByInput[]
    createMany?: SolicitationHistoryCreateManyChangedByInputEnvelope
    connect?: SolicitationHistoryWhereUniqueInput | SolicitationHistoryWhereUniqueInput[]
  }

  export type PasswordResetTokenCreateNestedManyWithoutUserInput = {
    create?: XOR<PasswordResetTokenCreateWithoutUserInput, PasswordResetTokenUncheckedCreateWithoutUserInput> | PasswordResetTokenCreateWithoutUserInput[] | PasswordResetTokenUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PasswordResetTokenCreateOrConnectWithoutUserInput | PasswordResetTokenCreateOrConnectWithoutUserInput[]
    createMany?: PasswordResetTokenCreateManyUserInputEnvelope
    connect?: PasswordResetTokenWhereUniqueInput | PasswordResetTokenWhereUniqueInput[]
  }

  export type SolicitationUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<SolicitationCreateWithoutUserInput, SolicitationUncheckedCreateWithoutUserInput> | SolicitationCreateWithoutUserInput[] | SolicitationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SolicitationCreateOrConnectWithoutUserInput | SolicitationCreateOrConnectWithoutUserInput[]
    createMany?: SolicitationCreateManyUserInputEnvelope
    connect?: SolicitationWhereUniqueInput | SolicitationWhereUniqueInput[]
  }

  export type SolicitationHistoryUncheckedCreateNestedManyWithoutChangedByInput = {
    create?: XOR<SolicitationHistoryCreateWithoutChangedByInput, SolicitationHistoryUncheckedCreateWithoutChangedByInput> | SolicitationHistoryCreateWithoutChangedByInput[] | SolicitationHistoryUncheckedCreateWithoutChangedByInput[]
    connectOrCreate?: SolicitationHistoryCreateOrConnectWithoutChangedByInput | SolicitationHistoryCreateOrConnectWithoutChangedByInput[]
    createMany?: SolicitationHistoryCreateManyChangedByInputEnvelope
    connect?: SolicitationHistoryWhereUniqueInput | SolicitationHistoryWhereUniqueInput[]
  }

  export type PasswordResetTokenUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<PasswordResetTokenCreateWithoutUserInput, PasswordResetTokenUncheckedCreateWithoutUserInput> | PasswordResetTokenCreateWithoutUserInput[] | PasswordResetTokenUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PasswordResetTokenCreateOrConnectWithoutUserInput | PasswordResetTokenCreateOrConnectWithoutUserInput[]
    createMany?: PasswordResetTokenCreateManyUserInputEnvelope
    connect?: PasswordResetTokenWhereUniqueInput | PasswordResetTokenWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type NullableEnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type SolicitationUpdateManyWithoutUserNestedInput = {
    create?: XOR<SolicitationCreateWithoutUserInput, SolicitationUncheckedCreateWithoutUserInput> | SolicitationCreateWithoutUserInput[] | SolicitationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SolicitationCreateOrConnectWithoutUserInput | SolicitationCreateOrConnectWithoutUserInput[]
    upsert?: SolicitationUpsertWithWhereUniqueWithoutUserInput | SolicitationUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SolicitationCreateManyUserInputEnvelope
    set?: SolicitationWhereUniqueInput | SolicitationWhereUniqueInput[]
    disconnect?: SolicitationWhereUniqueInput | SolicitationWhereUniqueInput[]
    delete?: SolicitationWhereUniqueInput | SolicitationWhereUniqueInput[]
    connect?: SolicitationWhereUniqueInput | SolicitationWhereUniqueInput[]
    update?: SolicitationUpdateWithWhereUniqueWithoutUserInput | SolicitationUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SolicitationUpdateManyWithWhereWithoutUserInput | SolicitationUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SolicitationScalarWhereInput | SolicitationScalarWhereInput[]
  }

  export type SolicitationHistoryUpdateManyWithoutChangedByNestedInput = {
    create?: XOR<SolicitationHistoryCreateWithoutChangedByInput, SolicitationHistoryUncheckedCreateWithoutChangedByInput> | SolicitationHistoryCreateWithoutChangedByInput[] | SolicitationHistoryUncheckedCreateWithoutChangedByInput[]
    connectOrCreate?: SolicitationHistoryCreateOrConnectWithoutChangedByInput | SolicitationHistoryCreateOrConnectWithoutChangedByInput[]
    upsert?: SolicitationHistoryUpsertWithWhereUniqueWithoutChangedByInput | SolicitationHistoryUpsertWithWhereUniqueWithoutChangedByInput[]
    createMany?: SolicitationHistoryCreateManyChangedByInputEnvelope
    set?: SolicitationHistoryWhereUniqueInput | SolicitationHistoryWhereUniqueInput[]
    disconnect?: SolicitationHistoryWhereUniqueInput | SolicitationHistoryWhereUniqueInput[]
    delete?: SolicitationHistoryWhereUniqueInput | SolicitationHistoryWhereUniqueInput[]
    connect?: SolicitationHistoryWhereUniqueInput | SolicitationHistoryWhereUniqueInput[]
    update?: SolicitationHistoryUpdateWithWhereUniqueWithoutChangedByInput | SolicitationHistoryUpdateWithWhereUniqueWithoutChangedByInput[]
    updateMany?: SolicitationHistoryUpdateManyWithWhereWithoutChangedByInput | SolicitationHistoryUpdateManyWithWhereWithoutChangedByInput[]
    deleteMany?: SolicitationHistoryScalarWhereInput | SolicitationHistoryScalarWhereInput[]
  }

  export type PasswordResetTokenUpdateManyWithoutUserNestedInput = {
    create?: XOR<PasswordResetTokenCreateWithoutUserInput, PasswordResetTokenUncheckedCreateWithoutUserInput> | PasswordResetTokenCreateWithoutUserInput[] | PasswordResetTokenUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PasswordResetTokenCreateOrConnectWithoutUserInput | PasswordResetTokenCreateOrConnectWithoutUserInput[]
    upsert?: PasswordResetTokenUpsertWithWhereUniqueWithoutUserInput | PasswordResetTokenUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PasswordResetTokenCreateManyUserInputEnvelope
    set?: PasswordResetTokenWhereUniqueInput | PasswordResetTokenWhereUniqueInput[]
    disconnect?: PasswordResetTokenWhereUniqueInput | PasswordResetTokenWhereUniqueInput[]
    delete?: PasswordResetTokenWhereUniqueInput | PasswordResetTokenWhereUniqueInput[]
    connect?: PasswordResetTokenWhereUniqueInput | PasswordResetTokenWhereUniqueInput[]
    update?: PasswordResetTokenUpdateWithWhereUniqueWithoutUserInput | PasswordResetTokenUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PasswordResetTokenUpdateManyWithWhereWithoutUserInput | PasswordResetTokenUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PasswordResetTokenScalarWhereInput | PasswordResetTokenScalarWhereInput[]
  }

  export type SolicitationUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<SolicitationCreateWithoutUserInput, SolicitationUncheckedCreateWithoutUserInput> | SolicitationCreateWithoutUserInput[] | SolicitationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SolicitationCreateOrConnectWithoutUserInput | SolicitationCreateOrConnectWithoutUserInput[]
    upsert?: SolicitationUpsertWithWhereUniqueWithoutUserInput | SolicitationUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SolicitationCreateManyUserInputEnvelope
    set?: SolicitationWhereUniqueInput | SolicitationWhereUniqueInput[]
    disconnect?: SolicitationWhereUniqueInput | SolicitationWhereUniqueInput[]
    delete?: SolicitationWhereUniqueInput | SolicitationWhereUniqueInput[]
    connect?: SolicitationWhereUniqueInput | SolicitationWhereUniqueInput[]
    update?: SolicitationUpdateWithWhereUniqueWithoutUserInput | SolicitationUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SolicitationUpdateManyWithWhereWithoutUserInput | SolicitationUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SolicitationScalarWhereInput | SolicitationScalarWhereInput[]
  }

  export type SolicitationHistoryUncheckedUpdateManyWithoutChangedByNestedInput = {
    create?: XOR<SolicitationHistoryCreateWithoutChangedByInput, SolicitationHistoryUncheckedCreateWithoutChangedByInput> | SolicitationHistoryCreateWithoutChangedByInput[] | SolicitationHistoryUncheckedCreateWithoutChangedByInput[]
    connectOrCreate?: SolicitationHistoryCreateOrConnectWithoutChangedByInput | SolicitationHistoryCreateOrConnectWithoutChangedByInput[]
    upsert?: SolicitationHistoryUpsertWithWhereUniqueWithoutChangedByInput | SolicitationHistoryUpsertWithWhereUniqueWithoutChangedByInput[]
    createMany?: SolicitationHistoryCreateManyChangedByInputEnvelope
    set?: SolicitationHistoryWhereUniqueInput | SolicitationHistoryWhereUniqueInput[]
    disconnect?: SolicitationHistoryWhereUniqueInput | SolicitationHistoryWhereUniqueInput[]
    delete?: SolicitationHistoryWhereUniqueInput | SolicitationHistoryWhereUniqueInput[]
    connect?: SolicitationHistoryWhereUniqueInput | SolicitationHistoryWhereUniqueInput[]
    update?: SolicitationHistoryUpdateWithWhereUniqueWithoutChangedByInput | SolicitationHistoryUpdateWithWhereUniqueWithoutChangedByInput[]
    updateMany?: SolicitationHistoryUpdateManyWithWhereWithoutChangedByInput | SolicitationHistoryUpdateManyWithWhereWithoutChangedByInput[]
    deleteMany?: SolicitationHistoryScalarWhereInput | SolicitationHistoryScalarWhereInput[]
  }

  export type PasswordResetTokenUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<PasswordResetTokenCreateWithoutUserInput, PasswordResetTokenUncheckedCreateWithoutUserInput> | PasswordResetTokenCreateWithoutUserInput[] | PasswordResetTokenUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PasswordResetTokenCreateOrConnectWithoutUserInput | PasswordResetTokenCreateOrConnectWithoutUserInput[]
    upsert?: PasswordResetTokenUpsertWithWhereUniqueWithoutUserInput | PasswordResetTokenUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PasswordResetTokenCreateManyUserInputEnvelope
    set?: PasswordResetTokenWhereUniqueInput | PasswordResetTokenWhereUniqueInput[]
    disconnect?: PasswordResetTokenWhereUniqueInput | PasswordResetTokenWhereUniqueInput[]
    delete?: PasswordResetTokenWhereUniqueInput | PasswordResetTokenWhereUniqueInput[]
    connect?: PasswordResetTokenWhereUniqueInput | PasswordResetTokenWhereUniqueInput[]
    update?: PasswordResetTokenUpdateWithWhereUniqueWithoutUserInput | PasswordResetTokenUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PasswordResetTokenUpdateManyWithWhereWithoutUserInput | PasswordResetTokenUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PasswordResetTokenScalarWhereInput | PasswordResetTokenScalarWhereInput[]
  }

  export type SolicitationCreateinfectiousAgentsInput = {
    set: string[]
  }

  export type SolicitationCreatesamplesInput = {
    set: string[]
  }

  export type SolicitationCreateexamsInput = {
    set: string[]
  }

  export type SolicitationCreatebloodCollectionTubeColorInput = {
    set: string[]
  }

  export type UserCreateNestedOneWithoutSolicitationsInput = {
    create?: XOR<UserCreateWithoutSolicitationsInput, UserUncheckedCreateWithoutSolicitationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSolicitationsInput
    connect?: UserWhereUniqueInput
  }

  export type SolicitationHistoryCreateNestedManyWithoutSolicitationInput = {
    create?: XOR<SolicitationHistoryCreateWithoutSolicitationInput, SolicitationHistoryUncheckedCreateWithoutSolicitationInput> | SolicitationHistoryCreateWithoutSolicitationInput[] | SolicitationHistoryUncheckedCreateWithoutSolicitationInput[]
    connectOrCreate?: SolicitationHistoryCreateOrConnectWithoutSolicitationInput | SolicitationHistoryCreateOrConnectWithoutSolicitationInput[]
    createMany?: SolicitationHistoryCreateManySolicitationInputEnvelope
    connect?: SolicitationHistoryWhereUniqueInput | SolicitationHistoryWhereUniqueInput[]
  }

  export type SolicitationHistoryUncheckedCreateNestedManyWithoutSolicitationInput = {
    create?: XOR<SolicitationHistoryCreateWithoutSolicitationInput, SolicitationHistoryUncheckedCreateWithoutSolicitationInput> | SolicitationHistoryCreateWithoutSolicitationInput[] | SolicitationHistoryUncheckedCreateWithoutSolicitationInput[]
    connectOrCreate?: SolicitationHistoryCreateOrConnectWithoutSolicitationInput | SolicitationHistoryCreateOrConnectWithoutSolicitationInput[]
    createMany?: SolicitationHistoryCreateManySolicitationInputEnvelope
    connect?: SolicitationHistoryWhereUniqueInput | SolicitationHistoryWhereUniqueInput[]
  }

  export type SolicitationUpdateinfectiousAgentsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type SolicitationUpdatesamplesInput = {
    set?: string[]
    push?: string | string[]
  }

  export type SolicitationUpdateexamsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type EnumSolicitationStatusFieldUpdateOperationsInput = {
    set?: $Enums.SolicitationStatus
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type NullableEnumExamResultTypeFieldUpdateOperationsInput = {
    set?: $Enums.ExamResultType | null
  }

  export type NullableEnumSolicitationResultFieldUpdateOperationsInput = {
    set?: $Enums.SolicitationResult | null
  }

  export type NullableEnumSolicitationSampleQualityFieldUpdateOperationsInput = {
    set?: $Enums.SolicitationSampleQuality | null
  }

  export type SolicitationUpdatebloodCollectionTubeColorInput = {
    set?: string[]
    push?: string | string[]
  }

  export type UserUpdateOneWithoutSolicitationsNestedInput = {
    create?: XOR<UserCreateWithoutSolicitationsInput, UserUncheckedCreateWithoutSolicitationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSolicitationsInput
    upsert?: UserUpsertWithoutSolicitationsInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSolicitationsInput, UserUpdateWithoutSolicitationsInput>, UserUncheckedUpdateWithoutSolicitationsInput>
  }

  export type SolicitationHistoryUpdateManyWithoutSolicitationNestedInput = {
    create?: XOR<SolicitationHistoryCreateWithoutSolicitationInput, SolicitationHistoryUncheckedCreateWithoutSolicitationInput> | SolicitationHistoryCreateWithoutSolicitationInput[] | SolicitationHistoryUncheckedCreateWithoutSolicitationInput[]
    connectOrCreate?: SolicitationHistoryCreateOrConnectWithoutSolicitationInput | SolicitationHistoryCreateOrConnectWithoutSolicitationInput[]
    upsert?: SolicitationHistoryUpsertWithWhereUniqueWithoutSolicitationInput | SolicitationHistoryUpsertWithWhereUniqueWithoutSolicitationInput[]
    createMany?: SolicitationHistoryCreateManySolicitationInputEnvelope
    set?: SolicitationHistoryWhereUniqueInput | SolicitationHistoryWhereUniqueInput[]
    disconnect?: SolicitationHistoryWhereUniqueInput | SolicitationHistoryWhereUniqueInput[]
    delete?: SolicitationHistoryWhereUniqueInput | SolicitationHistoryWhereUniqueInput[]
    connect?: SolicitationHistoryWhereUniqueInput | SolicitationHistoryWhereUniqueInput[]
    update?: SolicitationHistoryUpdateWithWhereUniqueWithoutSolicitationInput | SolicitationHistoryUpdateWithWhereUniqueWithoutSolicitationInput[]
    updateMany?: SolicitationHistoryUpdateManyWithWhereWithoutSolicitationInput | SolicitationHistoryUpdateManyWithWhereWithoutSolicitationInput[]
    deleteMany?: SolicitationHistoryScalarWhereInput | SolicitationHistoryScalarWhereInput[]
  }

  export type SolicitationHistoryUncheckedUpdateManyWithoutSolicitationNestedInput = {
    create?: XOR<SolicitationHistoryCreateWithoutSolicitationInput, SolicitationHistoryUncheckedCreateWithoutSolicitationInput> | SolicitationHistoryCreateWithoutSolicitationInput[] | SolicitationHistoryUncheckedCreateWithoutSolicitationInput[]
    connectOrCreate?: SolicitationHistoryCreateOrConnectWithoutSolicitationInput | SolicitationHistoryCreateOrConnectWithoutSolicitationInput[]
    upsert?: SolicitationHistoryUpsertWithWhereUniqueWithoutSolicitationInput | SolicitationHistoryUpsertWithWhereUniqueWithoutSolicitationInput[]
    createMany?: SolicitationHistoryCreateManySolicitationInputEnvelope
    set?: SolicitationHistoryWhereUniqueInput | SolicitationHistoryWhereUniqueInput[]
    disconnect?: SolicitationHistoryWhereUniqueInput | SolicitationHistoryWhereUniqueInput[]
    delete?: SolicitationHistoryWhereUniqueInput | SolicitationHistoryWhereUniqueInput[]
    connect?: SolicitationHistoryWhereUniqueInput | SolicitationHistoryWhereUniqueInput[]
    update?: SolicitationHistoryUpdateWithWhereUniqueWithoutSolicitationInput | SolicitationHistoryUpdateWithWhereUniqueWithoutSolicitationInput[]
    updateMany?: SolicitationHistoryUpdateManyWithWhereWithoutSolicitationInput | SolicitationHistoryUpdateManyWithWhereWithoutSolicitationInput[]
    deleteMany?: SolicitationHistoryScalarWhereInput | SolicitationHistoryScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutSolicitationHistoriesInput = {
    create?: XOR<UserCreateWithoutSolicitationHistoriesInput, UserUncheckedCreateWithoutSolicitationHistoriesInput>
    connectOrCreate?: UserCreateOrConnectWithoutSolicitationHistoriesInput
    connect?: UserWhereUniqueInput
  }

  export type SolicitationCreateNestedOneWithoutSolicitationHistoriesInput = {
    create?: XOR<SolicitationCreateWithoutSolicitationHistoriesInput, SolicitationUncheckedCreateWithoutSolicitationHistoriesInput>
    connectOrCreate?: SolicitationCreateOrConnectWithoutSolicitationHistoriesInput
    connect?: SolicitationWhereUniqueInput
  }

  export type NullableEnumSolicitationStatusFieldUpdateOperationsInput = {
    set?: $Enums.SolicitationStatus | null
  }

  export type UserUpdateOneRequiredWithoutSolicitationHistoriesNestedInput = {
    create?: XOR<UserCreateWithoutSolicitationHistoriesInput, UserUncheckedCreateWithoutSolicitationHistoriesInput>
    connectOrCreate?: UserCreateOrConnectWithoutSolicitationHistoriesInput
    upsert?: UserUpsertWithoutSolicitationHistoriesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSolicitationHistoriesInput, UserUpdateWithoutSolicitationHistoriesInput>, UserUncheckedUpdateWithoutSolicitationHistoriesInput>
  }

  export type SolicitationUpdateOneRequiredWithoutSolicitationHistoriesNestedInput = {
    create?: XOR<SolicitationCreateWithoutSolicitationHistoriesInput, SolicitationUncheckedCreateWithoutSolicitationHistoriesInput>
    connectOrCreate?: SolicitationCreateOrConnectWithoutSolicitationHistoriesInput
    upsert?: SolicitationUpsertWithoutSolicitationHistoriesInput
    connect?: SolicitationWhereUniqueInput
    update?: XOR<XOR<SolicitationUpdateToOneWithWhereWithoutSolicitationHistoriesInput, SolicitationUpdateWithoutSolicitationHistoriesInput>, SolicitationUncheckedUpdateWithoutSolicitationHistoriesInput>
  }

  export type NullableBytesFieldUpdateOperationsInput = {
    set?: Bytes | null
  }

  export type UserCreateNestedOneWithoutPasswordResetTokenInput = {
    create?: XOR<UserCreateWithoutPasswordResetTokenInput, UserUncheckedCreateWithoutPasswordResetTokenInput>
    connectOrCreate?: UserCreateOrConnectWithoutPasswordResetTokenInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutPasswordResetTokenNestedInput = {
    create?: XOR<UserCreateWithoutPasswordResetTokenInput, UserUncheckedCreateWithoutPasswordResetTokenInput>
    connectOrCreate?: UserCreateOrConnectWithoutPasswordResetTokenInput
    upsert?: UserUpsertWithoutPasswordResetTokenInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutPasswordResetTokenInput, UserUpdateWithoutPasswordResetTokenInput>, UserUncheckedUpdateWithoutPasswordResetTokenInput>
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

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedEnumRoleNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel> | null
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel> | null
    not?: NestedEnumRoleNullableFilter<$PrismaModel> | $Enums.Role | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
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

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedEnumRoleNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel> | null
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel> | null
    not?: NestedEnumRoleNullableWithAggregatesFilter<$PrismaModel> | $Enums.Role | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumRoleNullableFilter<$PrismaModel>
    _max?: NestedEnumRoleNullableFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedEnumSolicitationStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.SolicitationStatus | EnumSolicitationStatusFieldRefInput<$PrismaModel>
    in?: $Enums.SolicitationStatus[] | ListEnumSolicitationStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.SolicitationStatus[] | ListEnumSolicitationStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumSolicitationStatusFilter<$PrismaModel> | $Enums.SolicitationStatus
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedEnumExamResultTypeNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.ExamResultType | EnumExamResultTypeFieldRefInput<$PrismaModel> | null
    in?: $Enums.ExamResultType[] | ListEnumExamResultTypeFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.ExamResultType[] | ListEnumExamResultTypeFieldRefInput<$PrismaModel> | null
    not?: NestedEnumExamResultTypeNullableFilter<$PrismaModel> | $Enums.ExamResultType | null
  }

  export type NestedEnumSolicitationResultNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.SolicitationResult | EnumSolicitationResultFieldRefInput<$PrismaModel> | null
    in?: $Enums.SolicitationResult[] | ListEnumSolicitationResultFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.SolicitationResult[] | ListEnumSolicitationResultFieldRefInput<$PrismaModel> | null
    not?: NestedEnumSolicitationResultNullableFilter<$PrismaModel> | $Enums.SolicitationResult | null
  }

  export type NestedEnumSolicitationSampleQualityNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.SolicitationSampleQuality | EnumSolicitationSampleQualityFieldRefInput<$PrismaModel> | null
    in?: $Enums.SolicitationSampleQuality[] | ListEnumSolicitationSampleQualityFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.SolicitationSampleQuality[] | ListEnumSolicitationSampleQualityFieldRefInput<$PrismaModel> | null
    not?: NestedEnumSolicitationSampleQualityNullableFilter<$PrismaModel> | $Enums.SolicitationSampleQuality | null
  }

  export type NestedEnumSolicitationStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SolicitationStatus | EnumSolicitationStatusFieldRefInput<$PrismaModel>
    in?: $Enums.SolicitationStatus[] | ListEnumSolicitationStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.SolicitationStatus[] | ListEnumSolicitationStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumSolicitationStatusWithAggregatesFilter<$PrismaModel> | $Enums.SolicitationStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSolicitationStatusFilter<$PrismaModel>
    _max?: NestedEnumSolicitationStatusFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedEnumExamResultTypeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ExamResultType | EnumExamResultTypeFieldRefInput<$PrismaModel> | null
    in?: $Enums.ExamResultType[] | ListEnumExamResultTypeFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.ExamResultType[] | ListEnumExamResultTypeFieldRefInput<$PrismaModel> | null
    not?: NestedEnumExamResultTypeNullableWithAggregatesFilter<$PrismaModel> | $Enums.ExamResultType | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumExamResultTypeNullableFilter<$PrismaModel>
    _max?: NestedEnumExamResultTypeNullableFilter<$PrismaModel>
  }

  export type NestedEnumSolicitationResultNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SolicitationResult | EnumSolicitationResultFieldRefInput<$PrismaModel> | null
    in?: $Enums.SolicitationResult[] | ListEnumSolicitationResultFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.SolicitationResult[] | ListEnumSolicitationResultFieldRefInput<$PrismaModel> | null
    not?: NestedEnumSolicitationResultNullableWithAggregatesFilter<$PrismaModel> | $Enums.SolicitationResult | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumSolicitationResultNullableFilter<$PrismaModel>
    _max?: NestedEnumSolicitationResultNullableFilter<$PrismaModel>
  }

  export type NestedEnumSolicitationSampleQualityNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SolicitationSampleQuality | EnumSolicitationSampleQualityFieldRefInput<$PrismaModel> | null
    in?: $Enums.SolicitationSampleQuality[] | ListEnumSolicitationSampleQualityFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.SolicitationSampleQuality[] | ListEnumSolicitationSampleQualityFieldRefInput<$PrismaModel> | null
    not?: NestedEnumSolicitationSampleQualityNullableWithAggregatesFilter<$PrismaModel> | $Enums.SolicitationSampleQuality | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumSolicitationSampleQualityNullableFilter<$PrismaModel>
    _max?: NestedEnumSolicitationSampleQualityNullableFilter<$PrismaModel>
  }

  export type NestedEnumSolicitationStatusNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.SolicitationStatus | EnumSolicitationStatusFieldRefInput<$PrismaModel> | null
    in?: $Enums.SolicitationStatus[] | ListEnumSolicitationStatusFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.SolicitationStatus[] | ListEnumSolicitationStatusFieldRefInput<$PrismaModel> | null
    not?: NestedEnumSolicitationStatusNullableFilter<$PrismaModel> | $Enums.SolicitationStatus | null
  }

  export type NestedEnumSolicitationStatusNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SolicitationStatus | EnumSolicitationStatusFieldRefInput<$PrismaModel> | null
    in?: $Enums.SolicitationStatus[] | ListEnumSolicitationStatusFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.SolicitationStatus[] | ListEnumSolicitationStatusFieldRefInput<$PrismaModel> | null
    not?: NestedEnumSolicitationStatusNullableWithAggregatesFilter<$PrismaModel> | $Enums.SolicitationStatus | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumSolicitationStatusNullableFilter<$PrismaModel>
    _max?: NestedEnumSolicitationStatusNullableFilter<$PrismaModel>
  }

  export type NestedBytesNullableFilter<$PrismaModel = never> = {
    equals?: Bytes | BytesFieldRefInput<$PrismaModel> | null
    in?: Bytes[] | ListBytesFieldRefInput<$PrismaModel> | null
    notIn?: Bytes[] | ListBytesFieldRefInput<$PrismaModel> | null
    not?: NestedBytesNullableFilter<$PrismaModel> | Bytes | null
  }

  export type NestedBytesNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Bytes | BytesFieldRefInput<$PrismaModel> | null
    in?: Bytes[] | ListBytesFieldRefInput<$PrismaModel> | null
    notIn?: Bytes[] | ListBytesFieldRefInput<$PrismaModel> | null
    not?: NestedBytesNullableWithAggregatesFilter<$PrismaModel> | Bytes | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBytesNullableFilter<$PrismaModel>
    _max?: NestedBytesNullableFilter<$PrismaModel>
  }

  export type SolicitationCreateWithoutUserInput = {
    id?: string
    tutor?: string | null
    patient?: string | null
    gender?: string | null
    age?: string | null
    doctor?: string | null
    specie?: string | null
    hospitalVet?: string | null
    infectiousAgents?: SolicitationCreateinfectiousAgentsInput | string[]
    samples?: SolicitationCreatesamplesInput | string[]
    exams?: SolicitationCreateexamsInput | string[]
    status?: $Enums.SolicitationStatus
    finishedAt?: Date | string | null
    canceledAt?: Date | string | null
    canceledCause?: string | null
    blockedAt?: Date | string | null
    blockedCause?: string | null
    examResultType?: $Enums.ExamResultType | null
    solicitationResult?: $Enums.SolicitationResult | null
    solicitationConclusionText?: string | null
    solicitationSampleConclusion?: string | null
    solicitationColectTypeConclusion?: string | null
    solicitationSampleQuality?: $Enums.SolicitationSampleQuality | null
    solicitationClinicAvaliation?: string | null
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    bloodCollectionTubeColor?: SolicitationCreatebloodCollectionTubeColorInput | string[]
    solicitationHistories?: SolicitationHistoryCreateNestedManyWithoutSolicitationInput
  }

  export type SolicitationUncheckedCreateWithoutUserInput = {
    id?: string
    tutor?: string | null
    patient?: string | null
    gender?: string | null
    age?: string | null
    doctor?: string | null
    specie?: string | null
    hospitalVet?: string | null
    infectiousAgents?: SolicitationCreateinfectiousAgentsInput | string[]
    samples?: SolicitationCreatesamplesInput | string[]
    exams?: SolicitationCreateexamsInput | string[]
    status?: $Enums.SolicitationStatus
    finishedAt?: Date | string | null
    canceledAt?: Date | string | null
    canceledCause?: string | null
    blockedAt?: Date | string | null
    blockedCause?: string | null
    examResultType?: $Enums.ExamResultType | null
    solicitationResult?: $Enums.SolicitationResult | null
    solicitationConclusionText?: string | null
    solicitationSampleConclusion?: string | null
    solicitationColectTypeConclusion?: string | null
    solicitationSampleQuality?: $Enums.SolicitationSampleQuality | null
    solicitationClinicAvaliation?: string | null
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    bloodCollectionTubeColor?: SolicitationCreatebloodCollectionTubeColorInput | string[]
    solicitationHistories?: SolicitationHistoryUncheckedCreateNestedManyWithoutSolicitationInput
  }

  export type SolicitationCreateOrConnectWithoutUserInput = {
    where: SolicitationWhereUniqueInput
    create: XOR<SolicitationCreateWithoutUserInput, SolicitationUncheckedCreateWithoutUserInput>
  }

  export type SolicitationCreateManyUserInputEnvelope = {
    data: SolicitationCreateManyUserInput | SolicitationCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type SolicitationHistoryCreateWithoutChangedByInput = {
    id?: string
    previousStatus?: $Enums.SolicitationStatus | null
    newStatus: $Enums.SolicitationStatus
    blockedCause?: string | null
    changedAt?: Date | string
    solicitation: SolicitationCreateNestedOneWithoutSolicitationHistoriesInput
  }

  export type SolicitationHistoryUncheckedCreateWithoutChangedByInput = {
    id?: string
    solicitationId: string
    previousStatus?: $Enums.SolicitationStatus | null
    newStatus: $Enums.SolicitationStatus
    blockedCause?: string | null
    changedAt?: Date | string
  }

  export type SolicitationHistoryCreateOrConnectWithoutChangedByInput = {
    where: SolicitationHistoryWhereUniqueInput
    create: XOR<SolicitationHistoryCreateWithoutChangedByInput, SolicitationHistoryUncheckedCreateWithoutChangedByInput>
  }

  export type SolicitationHistoryCreateManyChangedByInputEnvelope = {
    data: SolicitationHistoryCreateManyChangedByInput | SolicitationHistoryCreateManyChangedByInput[]
    skipDuplicates?: boolean
  }

  export type PasswordResetTokenCreateWithoutUserInput = {
    id?: string
    tokenHash: string
    expiresAt: Date | string
    usedAt?: Date | string | null
    createdAt?: Date | string
  }

  export type PasswordResetTokenUncheckedCreateWithoutUserInput = {
    id?: string
    tokenHash: string
    expiresAt: Date | string
    usedAt?: Date | string | null
    createdAt?: Date | string
  }

  export type PasswordResetTokenCreateOrConnectWithoutUserInput = {
    where: PasswordResetTokenWhereUniqueInput
    create: XOR<PasswordResetTokenCreateWithoutUserInput, PasswordResetTokenUncheckedCreateWithoutUserInput>
  }

  export type PasswordResetTokenCreateManyUserInputEnvelope = {
    data: PasswordResetTokenCreateManyUserInput | PasswordResetTokenCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type SolicitationUpsertWithWhereUniqueWithoutUserInput = {
    where: SolicitationWhereUniqueInput
    update: XOR<SolicitationUpdateWithoutUserInput, SolicitationUncheckedUpdateWithoutUserInput>
    create: XOR<SolicitationCreateWithoutUserInput, SolicitationUncheckedCreateWithoutUserInput>
  }

  export type SolicitationUpdateWithWhereUniqueWithoutUserInput = {
    where: SolicitationWhereUniqueInput
    data: XOR<SolicitationUpdateWithoutUserInput, SolicitationUncheckedUpdateWithoutUserInput>
  }

  export type SolicitationUpdateManyWithWhereWithoutUserInput = {
    where: SolicitationScalarWhereInput
    data: XOR<SolicitationUpdateManyMutationInput, SolicitationUncheckedUpdateManyWithoutUserInput>
  }

  export type SolicitationScalarWhereInput = {
    AND?: SolicitationScalarWhereInput | SolicitationScalarWhereInput[]
    OR?: SolicitationScalarWhereInput[]
    NOT?: SolicitationScalarWhereInput | SolicitationScalarWhereInput[]
    id?: StringFilter<"Solicitation"> | string
    tutor?: StringNullableFilter<"Solicitation"> | string | null
    patient?: StringNullableFilter<"Solicitation"> | string | null
    gender?: StringNullableFilter<"Solicitation"> | string | null
    age?: StringNullableFilter<"Solicitation"> | string | null
    doctor?: StringNullableFilter<"Solicitation"> | string | null
    specie?: StringNullableFilter<"Solicitation"> | string | null
    hospitalVet?: StringNullableFilter<"Solicitation"> | string | null
    infectiousAgents?: StringNullableListFilter<"Solicitation">
    samples?: StringNullableListFilter<"Solicitation">
    exams?: StringNullableListFilter<"Solicitation">
    status?: EnumSolicitationStatusFilter<"Solicitation"> | $Enums.SolicitationStatus
    finishedAt?: DateTimeNullableFilter<"Solicitation"> | Date | string | null
    canceledAt?: DateTimeNullableFilter<"Solicitation"> | Date | string | null
    canceledCause?: StringNullableFilter<"Solicitation"> | string | null
    blockedAt?: DateTimeNullableFilter<"Solicitation"> | Date | string | null
    blockedCause?: StringNullableFilter<"Solicitation"> | string | null
    examResultType?: EnumExamResultTypeNullableFilter<"Solicitation"> | $Enums.ExamResultType | null
    solicitationResult?: EnumSolicitationResultNullableFilter<"Solicitation"> | $Enums.SolicitationResult | null
    solicitationConclusionText?: StringNullableFilter<"Solicitation"> | string | null
    solicitationSampleConclusion?: StringNullableFilter<"Solicitation"> | string | null
    solicitationColectTypeConclusion?: StringNullableFilter<"Solicitation"> | string | null
    solicitationSampleQuality?: EnumSolicitationSampleQualityNullableFilter<"Solicitation"> | $Enums.SolicitationSampleQuality | null
    solicitationClinicAvaliation?: StringNullableFilter<"Solicitation"> | string | null
    isDeleted?: BoolFilter<"Solicitation"> | boolean
    createdAt?: DateTimeFilter<"Solicitation"> | Date | string
    updatedAt?: DateTimeFilter<"Solicitation"> | Date | string
    bloodCollectionTubeColor?: StringNullableListFilter<"Solicitation">
    userId?: StringNullableFilter<"Solicitation"> | string | null
  }

  export type SolicitationHistoryUpsertWithWhereUniqueWithoutChangedByInput = {
    where: SolicitationHistoryWhereUniqueInput
    update: XOR<SolicitationHistoryUpdateWithoutChangedByInput, SolicitationHistoryUncheckedUpdateWithoutChangedByInput>
    create: XOR<SolicitationHistoryCreateWithoutChangedByInput, SolicitationHistoryUncheckedCreateWithoutChangedByInput>
  }

  export type SolicitationHistoryUpdateWithWhereUniqueWithoutChangedByInput = {
    where: SolicitationHistoryWhereUniqueInput
    data: XOR<SolicitationHistoryUpdateWithoutChangedByInput, SolicitationHistoryUncheckedUpdateWithoutChangedByInput>
  }

  export type SolicitationHistoryUpdateManyWithWhereWithoutChangedByInput = {
    where: SolicitationHistoryScalarWhereInput
    data: XOR<SolicitationHistoryUpdateManyMutationInput, SolicitationHistoryUncheckedUpdateManyWithoutChangedByInput>
  }

  export type SolicitationHistoryScalarWhereInput = {
    AND?: SolicitationHistoryScalarWhereInput | SolicitationHistoryScalarWhereInput[]
    OR?: SolicitationHistoryScalarWhereInput[]
    NOT?: SolicitationHistoryScalarWhereInput | SolicitationHistoryScalarWhereInput[]
    id?: StringFilter<"SolicitationHistory"> | string
    solicitationId?: StringFilter<"SolicitationHistory"> | string
    previousStatus?: EnumSolicitationStatusNullableFilter<"SolicitationHistory"> | $Enums.SolicitationStatus | null
    newStatus?: EnumSolicitationStatusFilter<"SolicitationHistory"> | $Enums.SolicitationStatus
    blockedCause?: StringNullableFilter<"SolicitationHistory"> | string | null
    changedAt?: DateTimeFilter<"SolicitationHistory"> | Date | string
    changedById?: StringFilter<"SolicitationHistory"> | string
  }

  export type PasswordResetTokenUpsertWithWhereUniqueWithoutUserInput = {
    where: PasswordResetTokenWhereUniqueInput
    update: XOR<PasswordResetTokenUpdateWithoutUserInput, PasswordResetTokenUncheckedUpdateWithoutUserInput>
    create: XOR<PasswordResetTokenCreateWithoutUserInput, PasswordResetTokenUncheckedCreateWithoutUserInput>
  }

  export type PasswordResetTokenUpdateWithWhereUniqueWithoutUserInput = {
    where: PasswordResetTokenWhereUniqueInput
    data: XOR<PasswordResetTokenUpdateWithoutUserInput, PasswordResetTokenUncheckedUpdateWithoutUserInput>
  }

  export type PasswordResetTokenUpdateManyWithWhereWithoutUserInput = {
    where: PasswordResetTokenScalarWhereInput
    data: XOR<PasswordResetTokenUpdateManyMutationInput, PasswordResetTokenUncheckedUpdateManyWithoutUserInput>
  }

  export type PasswordResetTokenScalarWhereInput = {
    AND?: PasswordResetTokenScalarWhereInput | PasswordResetTokenScalarWhereInput[]
    OR?: PasswordResetTokenScalarWhereInput[]
    NOT?: PasswordResetTokenScalarWhereInput | PasswordResetTokenScalarWhereInput[]
    id?: StringFilter<"PasswordResetToken"> | string
    userId?: StringFilter<"PasswordResetToken"> | string
    tokenHash?: StringFilter<"PasswordResetToken"> | string
    expiresAt?: DateTimeFilter<"PasswordResetToken"> | Date | string
    usedAt?: DateTimeNullableFilter<"PasswordResetToken"> | Date | string | null
    createdAt?: DateTimeFilter<"PasswordResetToken"> | Date | string
  }

  export type UserCreateWithoutSolicitationsInput = {
    id?: string
    name?: string | null
    email?: string | null
    password?: string | null
    isActive?: boolean
    role?: $Enums.Role | null
    createdAt?: Date | string
    updatedAt?: Date | string
    solicitationHistories?: SolicitationHistoryCreateNestedManyWithoutChangedByInput
    passwordResetToken?: PasswordResetTokenCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutSolicitationsInput = {
    id?: string
    name?: string | null
    email?: string | null
    password?: string | null
    isActive?: boolean
    role?: $Enums.Role | null
    createdAt?: Date | string
    updatedAt?: Date | string
    solicitationHistories?: SolicitationHistoryUncheckedCreateNestedManyWithoutChangedByInput
    passwordResetToken?: PasswordResetTokenUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutSolicitationsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSolicitationsInput, UserUncheckedCreateWithoutSolicitationsInput>
  }

  export type SolicitationHistoryCreateWithoutSolicitationInput = {
    id?: string
    previousStatus?: $Enums.SolicitationStatus | null
    newStatus: $Enums.SolicitationStatus
    blockedCause?: string | null
    changedAt?: Date | string
    changedBy: UserCreateNestedOneWithoutSolicitationHistoriesInput
  }

  export type SolicitationHistoryUncheckedCreateWithoutSolicitationInput = {
    id?: string
    previousStatus?: $Enums.SolicitationStatus | null
    newStatus: $Enums.SolicitationStatus
    blockedCause?: string | null
    changedAt?: Date | string
    changedById: string
  }

  export type SolicitationHistoryCreateOrConnectWithoutSolicitationInput = {
    where: SolicitationHistoryWhereUniqueInput
    create: XOR<SolicitationHistoryCreateWithoutSolicitationInput, SolicitationHistoryUncheckedCreateWithoutSolicitationInput>
  }

  export type SolicitationHistoryCreateManySolicitationInputEnvelope = {
    data: SolicitationHistoryCreateManySolicitationInput | SolicitationHistoryCreateManySolicitationInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutSolicitationsInput = {
    update: XOR<UserUpdateWithoutSolicitationsInput, UserUncheckedUpdateWithoutSolicitationsInput>
    create: XOR<UserCreateWithoutSolicitationsInput, UserUncheckedCreateWithoutSolicitationsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSolicitationsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSolicitationsInput, UserUncheckedUpdateWithoutSolicitationsInput>
  }

  export type UserUpdateWithoutSolicitationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    role?: NullableEnumRoleFieldUpdateOperationsInput | $Enums.Role | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    solicitationHistories?: SolicitationHistoryUpdateManyWithoutChangedByNestedInput
    passwordResetToken?: PasswordResetTokenUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutSolicitationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    role?: NullableEnumRoleFieldUpdateOperationsInput | $Enums.Role | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    solicitationHistories?: SolicitationHistoryUncheckedUpdateManyWithoutChangedByNestedInput
    passwordResetToken?: PasswordResetTokenUncheckedUpdateManyWithoutUserNestedInput
  }

  export type SolicitationHistoryUpsertWithWhereUniqueWithoutSolicitationInput = {
    where: SolicitationHistoryWhereUniqueInput
    update: XOR<SolicitationHistoryUpdateWithoutSolicitationInput, SolicitationHistoryUncheckedUpdateWithoutSolicitationInput>
    create: XOR<SolicitationHistoryCreateWithoutSolicitationInput, SolicitationHistoryUncheckedCreateWithoutSolicitationInput>
  }

  export type SolicitationHistoryUpdateWithWhereUniqueWithoutSolicitationInput = {
    where: SolicitationHistoryWhereUniqueInput
    data: XOR<SolicitationHistoryUpdateWithoutSolicitationInput, SolicitationHistoryUncheckedUpdateWithoutSolicitationInput>
  }

  export type SolicitationHistoryUpdateManyWithWhereWithoutSolicitationInput = {
    where: SolicitationHistoryScalarWhereInput
    data: XOR<SolicitationHistoryUpdateManyMutationInput, SolicitationHistoryUncheckedUpdateManyWithoutSolicitationInput>
  }

  export type UserCreateWithoutSolicitationHistoriesInput = {
    id?: string
    name?: string | null
    email?: string | null
    password?: string | null
    isActive?: boolean
    role?: $Enums.Role | null
    createdAt?: Date | string
    updatedAt?: Date | string
    solicitations?: SolicitationCreateNestedManyWithoutUserInput
    passwordResetToken?: PasswordResetTokenCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutSolicitationHistoriesInput = {
    id?: string
    name?: string | null
    email?: string | null
    password?: string | null
    isActive?: boolean
    role?: $Enums.Role | null
    createdAt?: Date | string
    updatedAt?: Date | string
    solicitations?: SolicitationUncheckedCreateNestedManyWithoutUserInput
    passwordResetToken?: PasswordResetTokenUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutSolicitationHistoriesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSolicitationHistoriesInput, UserUncheckedCreateWithoutSolicitationHistoriesInput>
  }

  export type SolicitationCreateWithoutSolicitationHistoriesInput = {
    id?: string
    tutor?: string | null
    patient?: string | null
    gender?: string | null
    age?: string | null
    doctor?: string | null
    specie?: string | null
    hospitalVet?: string | null
    infectiousAgents?: SolicitationCreateinfectiousAgentsInput | string[]
    samples?: SolicitationCreatesamplesInput | string[]
    exams?: SolicitationCreateexamsInput | string[]
    status?: $Enums.SolicitationStatus
    finishedAt?: Date | string | null
    canceledAt?: Date | string | null
    canceledCause?: string | null
    blockedAt?: Date | string | null
    blockedCause?: string | null
    examResultType?: $Enums.ExamResultType | null
    solicitationResult?: $Enums.SolicitationResult | null
    solicitationConclusionText?: string | null
    solicitationSampleConclusion?: string | null
    solicitationColectTypeConclusion?: string | null
    solicitationSampleQuality?: $Enums.SolicitationSampleQuality | null
    solicitationClinicAvaliation?: string | null
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    bloodCollectionTubeColor?: SolicitationCreatebloodCollectionTubeColorInput | string[]
    user?: UserCreateNestedOneWithoutSolicitationsInput
  }

  export type SolicitationUncheckedCreateWithoutSolicitationHistoriesInput = {
    id?: string
    tutor?: string | null
    patient?: string | null
    gender?: string | null
    age?: string | null
    doctor?: string | null
    specie?: string | null
    hospitalVet?: string | null
    infectiousAgents?: SolicitationCreateinfectiousAgentsInput | string[]
    samples?: SolicitationCreatesamplesInput | string[]
    exams?: SolicitationCreateexamsInput | string[]
    status?: $Enums.SolicitationStatus
    finishedAt?: Date | string | null
    canceledAt?: Date | string | null
    canceledCause?: string | null
    blockedAt?: Date | string | null
    blockedCause?: string | null
    examResultType?: $Enums.ExamResultType | null
    solicitationResult?: $Enums.SolicitationResult | null
    solicitationConclusionText?: string | null
    solicitationSampleConclusion?: string | null
    solicitationColectTypeConclusion?: string | null
    solicitationSampleQuality?: $Enums.SolicitationSampleQuality | null
    solicitationClinicAvaliation?: string | null
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    bloodCollectionTubeColor?: SolicitationCreatebloodCollectionTubeColorInput | string[]
    userId?: string | null
  }

  export type SolicitationCreateOrConnectWithoutSolicitationHistoriesInput = {
    where: SolicitationWhereUniqueInput
    create: XOR<SolicitationCreateWithoutSolicitationHistoriesInput, SolicitationUncheckedCreateWithoutSolicitationHistoriesInput>
  }

  export type UserUpsertWithoutSolicitationHistoriesInput = {
    update: XOR<UserUpdateWithoutSolicitationHistoriesInput, UserUncheckedUpdateWithoutSolicitationHistoriesInput>
    create: XOR<UserCreateWithoutSolicitationHistoriesInput, UserUncheckedCreateWithoutSolicitationHistoriesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSolicitationHistoriesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSolicitationHistoriesInput, UserUncheckedUpdateWithoutSolicitationHistoriesInput>
  }

  export type UserUpdateWithoutSolicitationHistoriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    role?: NullableEnumRoleFieldUpdateOperationsInput | $Enums.Role | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    solicitations?: SolicitationUpdateManyWithoutUserNestedInput
    passwordResetToken?: PasswordResetTokenUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutSolicitationHistoriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    role?: NullableEnumRoleFieldUpdateOperationsInput | $Enums.Role | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    solicitations?: SolicitationUncheckedUpdateManyWithoutUserNestedInput
    passwordResetToken?: PasswordResetTokenUncheckedUpdateManyWithoutUserNestedInput
  }

  export type SolicitationUpsertWithoutSolicitationHistoriesInput = {
    update: XOR<SolicitationUpdateWithoutSolicitationHistoriesInput, SolicitationUncheckedUpdateWithoutSolicitationHistoriesInput>
    create: XOR<SolicitationCreateWithoutSolicitationHistoriesInput, SolicitationUncheckedCreateWithoutSolicitationHistoriesInput>
    where?: SolicitationWhereInput
  }

  export type SolicitationUpdateToOneWithWhereWithoutSolicitationHistoriesInput = {
    where?: SolicitationWhereInput
    data: XOR<SolicitationUpdateWithoutSolicitationHistoriesInput, SolicitationUncheckedUpdateWithoutSolicitationHistoriesInput>
  }

  export type SolicitationUpdateWithoutSolicitationHistoriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    tutor?: NullableStringFieldUpdateOperationsInput | string | null
    patient?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    age?: NullableStringFieldUpdateOperationsInput | string | null
    doctor?: NullableStringFieldUpdateOperationsInput | string | null
    specie?: NullableStringFieldUpdateOperationsInput | string | null
    hospitalVet?: NullableStringFieldUpdateOperationsInput | string | null
    infectiousAgents?: SolicitationUpdateinfectiousAgentsInput | string[]
    samples?: SolicitationUpdatesamplesInput | string[]
    exams?: SolicitationUpdateexamsInput | string[]
    status?: EnumSolicitationStatusFieldUpdateOperationsInput | $Enums.SolicitationStatus
    finishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    canceledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    canceledCause?: NullableStringFieldUpdateOperationsInput | string | null
    blockedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    blockedCause?: NullableStringFieldUpdateOperationsInput | string | null
    examResultType?: NullableEnumExamResultTypeFieldUpdateOperationsInput | $Enums.ExamResultType | null
    solicitationResult?: NullableEnumSolicitationResultFieldUpdateOperationsInput | $Enums.SolicitationResult | null
    solicitationConclusionText?: NullableStringFieldUpdateOperationsInput | string | null
    solicitationSampleConclusion?: NullableStringFieldUpdateOperationsInput | string | null
    solicitationColectTypeConclusion?: NullableStringFieldUpdateOperationsInput | string | null
    solicitationSampleQuality?: NullableEnumSolicitationSampleQualityFieldUpdateOperationsInput | $Enums.SolicitationSampleQuality | null
    solicitationClinicAvaliation?: NullableStringFieldUpdateOperationsInput | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bloodCollectionTubeColor?: SolicitationUpdatebloodCollectionTubeColorInput | string[]
    user?: UserUpdateOneWithoutSolicitationsNestedInput
  }

  export type SolicitationUncheckedUpdateWithoutSolicitationHistoriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    tutor?: NullableStringFieldUpdateOperationsInput | string | null
    patient?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    age?: NullableStringFieldUpdateOperationsInput | string | null
    doctor?: NullableStringFieldUpdateOperationsInput | string | null
    specie?: NullableStringFieldUpdateOperationsInput | string | null
    hospitalVet?: NullableStringFieldUpdateOperationsInput | string | null
    infectiousAgents?: SolicitationUpdateinfectiousAgentsInput | string[]
    samples?: SolicitationUpdatesamplesInput | string[]
    exams?: SolicitationUpdateexamsInput | string[]
    status?: EnumSolicitationStatusFieldUpdateOperationsInput | $Enums.SolicitationStatus
    finishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    canceledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    canceledCause?: NullableStringFieldUpdateOperationsInput | string | null
    blockedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    blockedCause?: NullableStringFieldUpdateOperationsInput | string | null
    examResultType?: NullableEnumExamResultTypeFieldUpdateOperationsInput | $Enums.ExamResultType | null
    solicitationResult?: NullableEnumSolicitationResultFieldUpdateOperationsInput | $Enums.SolicitationResult | null
    solicitationConclusionText?: NullableStringFieldUpdateOperationsInput | string | null
    solicitationSampleConclusion?: NullableStringFieldUpdateOperationsInput | string | null
    solicitationColectTypeConclusion?: NullableStringFieldUpdateOperationsInput | string | null
    solicitationSampleQuality?: NullableEnumSolicitationSampleQualityFieldUpdateOperationsInput | $Enums.SolicitationSampleQuality | null
    solicitationClinicAvaliation?: NullableStringFieldUpdateOperationsInput | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bloodCollectionTubeColor?: SolicitationUpdatebloodCollectionTubeColorInput | string[]
    userId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserCreateWithoutPasswordResetTokenInput = {
    id?: string
    name?: string | null
    email?: string | null
    password?: string | null
    isActive?: boolean
    role?: $Enums.Role | null
    createdAt?: Date | string
    updatedAt?: Date | string
    solicitations?: SolicitationCreateNestedManyWithoutUserInput
    solicitationHistories?: SolicitationHistoryCreateNestedManyWithoutChangedByInput
  }

  export type UserUncheckedCreateWithoutPasswordResetTokenInput = {
    id?: string
    name?: string | null
    email?: string | null
    password?: string | null
    isActive?: boolean
    role?: $Enums.Role | null
    createdAt?: Date | string
    updatedAt?: Date | string
    solicitations?: SolicitationUncheckedCreateNestedManyWithoutUserInput
    solicitationHistories?: SolicitationHistoryUncheckedCreateNestedManyWithoutChangedByInput
  }

  export type UserCreateOrConnectWithoutPasswordResetTokenInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutPasswordResetTokenInput, UserUncheckedCreateWithoutPasswordResetTokenInput>
  }

  export type UserUpsertWithoutPasswordResetTokenInput = {
    update: XOR<UserUpdateWithoutPasswordResetTokenInput, UserUncheckedUpdateWithoutPasswordResetTokenInput>
    create: XOR<UserCreateWithoutPasswordResetTokenInput, UserUncheckedCreateWithoutPasswordResetTokenInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutPasswordResetTokenInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutPasswordResetTokenInput, UserUncheckedUpdateWithoutPasswordResetTokenInput>
  }

  export type UserUpdateWithoutPasswordResetTokenInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    role?: NullableEnumRoleFieldUpdateOperationsInput | $Enums.Role | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    solicitations?: SolicitationUpdateManyWithoutUserNestedInput
    solicitationHistories?: SolicitationHistoryUpdateManyWithoutChangedByNestedInput
  }

  export type UserUncheckedUpdateWithoutPasswordResetTokenInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    role?: NullableEnumRoleFieldUpdateOperationsInput | $Enums.Role | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    solicitations?: SolicitationUncheckedUpdateManyWithoutUserNestedInput
    solicitationHistories?: SolicitationHistoryUncheckedUpdateManyWithoutChangedByNestedInput
  }

  export type SolicitationCreateManyUserInput = {
    id?: string
    tutor?: string | null
    patient?: string | null
    gender?: string | null
    age?: string | null
    doctor?: string | null
    specie?: string | null
    hospitalVet?: string | null
    infectiousAgents?: SolicitationCreateinfectiousAgentsInput | string[]
    samples?: SolicitationCreatesamplesInput | string[]
    exams?: SolicitationCreateexamsInput | string[]
    status?: $Enums.SolicitationStatus
    finishedAt?: Date | string | null
    canceledAt?: Date | string | null
    canceledCause?: string | null
    blockedAt?: Date | string | null
    blockedCause?: string | null
    examResultType?: $Enums.ExamResultType | null
    solicitationResult?: $Enums.SolicitationResult | null
    solicitationConclusionText?: string | null
    solicitationSampleConclusion?: string | null
    solicitationColectTypeConclusion?: string | null
    solicitationSampleQuality?: $Enums.SolicitationSampleQuality | null
    solicitationClinicAvaliation?: string | null
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    bloodCollectionTubeColor?: SolicitationCreatebloodCollectionTubeColorInput | string[]
  }

  export type SolicitationHistoryCreateManyChangedByInput = {
    id?: string
    solicitationId: string
    previousStatus?: $Enums.SolicitationStatus | null
    newStatus: $Enums.SolicitationStatus
    blockedCause?: string | null
    changedAt?: Date | string
  }

  export type PasswordResetTokenCreateManyUserInput = {
    id?: string
    tokenHash: string
    expiresAt: Date | string
    usedAt?: Date | string | null
    createdAt?: Date | string
  }

  export type SolicitationUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    tutor?: NullableStringFieldUpdateOperationsInput | string | null
    patient?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    age?: NullableStringFieldUpdateOperationsInput | string | null
    doctor?: NullableStringFieldUpdateOperationsInput | string | null
    specie?: NullableStringFieldUpdateOperationsInput | string | null
    hospitalVet?: NullableStringFieldUpdateOperationsInput | string | null
    infectiousAgents?: SolicitationUpdateinfectiousAgentsInput | string[]
    samples?: SolicitationUpdatesamplesInput | string[]
    exams?: SolicitationUpdateexamsInput | string[]
    status?: EnumSolicitationStatusFieldUpdateOperationsInput | $Enums.SolicitationStatus
    finishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    canceledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    canceledCause?: NullableStringFieldUpdateOperationsInput | string | null
    blockedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    blockedCause?: NullableStringFieldUpdateOperationsInput | string | null
    examResultType?: NullableEnumExamResultTypeFieldUpdateOperationsInput | $Enums.ExamResultType | null
    solicitationResult?: NullableEnumSolicitationResultFieldUpdateOperationsInput | $Enums.SolicitationResult | null
    solicitationConclusionText?: NullableStringFieldUpdateOperationsInput | string | null
    solicitationSampleConclusion?: NullableStringFieldUpdateOperationsInput | string | null
    solicitationColectTypeConclusion?: NullableStringFieldUpdateOperationsInput | string | null
    solicitationSampleQuality?: NullableEnumSolicitationSampleQualityFieldUpdateOperationsInput | $Enums.SolicitationSampleQuality | null
    solicitationClinicAvaliation?: NullableStringFieldUpdateOperationsInput | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bloodCollectionTubeColor?: SolicitationUpdatebloodCollectionTubeColorInput | string[]
    solicitationHistories?: SolicitationHistoryUpdateManyWithoutSolicitationNestedInput
  }

  export type SolicitationUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    tutor?: NullableStringFieldUpdateOperationsInput | string | null
    patient?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    age?: NullableStringFieldUpdateOperationsInput | string | null
    doctor?: NullableStringFieldUpdateOperationsInput | string | null
    specie?: NullableStringFieldUpdateOperationsInput | string | null
    hospitalVet?: NullableStringFieldUpdateOperationsInput | string | null
    infectiousAgents?: SolicitationUpdateinfectiousAgentsInput | string[]
    samples?: SolicitationUpdatesamplesInput | string[]
    exams?: SolicitationUpdateexamsInput | string[]
    status?: EnumSolicitationStatusFieldUpdateOperationsInput | $Enums.SolicitationStatus
    finishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    canceledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    canceledCause?: NullableStringFieldUpdateOperationsInput | string | null
    blockedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    blockedCause?: NullableStringFieldUpdateOperationsInput | string | null
    examResultType?: NullableEnumExamResultTypeFieldUpdateOperationsInput | $Enums.ExamResultType | null
    solicitationResult?: NullableEnumSolicitationResultFieldUpdateOperationsInput | $Enums.SolicitationResult | null
    solicitationConclusionText?: NullableStringFieldUpdateOperationsInput | string | null
    solicitationSampleConclusion?: NullableStringFieldUpdateOperationsInput | string | null
    solicitationColectTypeConclusion?: NullableStringFieldUpdateOperationsInput | string | null
    solicitationSampleQuality?: NullableEnumSolicitationSampleQualityFieldUpdateOperationsInput | $Enums.SolicitationSampleQuality | null
    solicitationClinicAvaliation?: NullableStringFieldUpdateOperationsInput | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bloodCollectionTubeColor?: SolicitationUpdatebloodCollectionTubeColorInput | string[]
    solicitationHistories?: SolicitationHistoryUncheckedUpdateManyWithoutSolicitationNestedInput
  }

  export type SolicitationUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    tutor?: NullableStringFieldUpdateOperationsInput | string | null
    patient?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    age?: NullableStringFieldUpdateOperationsInput | string | null
    doctor?: NullableStringFieldUpdateOperationsInput | string | null
    specie?: NullableStringFieldUpdateOperationsInput | string | null
    hospitalVet?: NullableStringFieldUpdateOperationsInput | string | null
    infectiousAgents?: SolicitationUpdateinfectiousAgentsInput | string[]
    samples?: SolicitationUpdatesamplesInput | string[]
    exams?: SolicitationUpdateexamsInput | string[]
    status?: EnumSolicitationStatusFieldUpdateOperationsInput | $Enums.SolicitationStatus
    finishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    canceledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    canceledCause?: NullableStringFieldUpdateOperationsInput | string | null
    blockedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    blockedCause?: NullableStringFieldUpdateOperationsInput | string | null
    examResultType?: NullableEnumExamResultTypeFieldUpdateOperationsInput | $Enums.ExamResultType | null
    solicitationResult?: NullableEnumSolicitationResultFieldUpdateOperationsInput | $Enums.SolicitationResult | null
    solicitationConclusionText?: NullableStringFieldUpdateOperationsInput | string | null
    solicitationSampleConclusion?: NullableStringFieldUpdateOperationsInput | string | null
    solicitationColectTypeConclusion?: NullableStringFieldUpdateOperationsInput | string | null
    solicitationSampleQuality?: NullableEnumSolicitationSampleQualityFieldUpdateOperationsInput | $Enums.SolicitationSampleQuality | null
    solicitationClinicAvaliation?: NullableStringFieldUpdateOperationsInput | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bloodCollectionTubeColor?: SolicitationUpdatebloodCollectionTubeColorInput | string[]
  }

  export type SolicitationHistoryUpdateWithoutChangedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    previousStatus?: NullableEnumSolicitationStatusFieldUpdateOperationsInput | $Enums.SolicitationStatus | null
    newStatus?: EnumSolicitationStatusFieldUpdateOperationsInput | $Enums.SolicitationStatus
    blockedCause?: NullableStringFieldUpdateOperationsInput | string | null
    changedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    solicitation?: SolicitationUpdateOneRequiredWithoutSolicitationHistoriesNestedInput
  }

  export type SolicitationHistoryUncheckedUpdateWithoutChangedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    solicitationId?: StringFieldUpdateOperationsInput | string
    previousStatus?: NullableEnumSolicitationStatusFieldUpdateOperationsInput | $Enums.SolicitationStatus | null
    newStatus?: EnumSolicitationStatusFieldUpdateOperationsInput | $Enums.SolicitationStatus
    blockedCause?: NullableStringFieldUpdateOperationsInput | string | null
    changedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SolicitationHistoryUncheckedUpdateManyWithoutChangedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    solicitationId?: StringFieldUpdateOperationsInput | string
    previousStatus?: NullableEnumSolicitationStatusFieldUpdateOperationsInput | $Enums.SolicitationStatus | null
    newStatus?: EnumSolicitationStatusFieldUpdateOperationsInput | $Enums.SolicitationStatus
    blockedCause?: NullableStringFieldUpdateOperationsInput | string | null
    changedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PasswordResetTokenUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    tokenHash?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    usedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PasswordResetTokenUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    tokenHash?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    usedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PasswordResetTokenUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    tokenHash?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    usedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SolicitationHistoryCreateManySolicitationInput = {
    id?: string
    previousStatus?: $Enums.SolicitationStatus | null
    newStatus: $Enums.SolicitationStatus
    blockedCause?: string | null
    changedAt?: Date | string
    changedById: string
  }

  export type SolicitationHistoryUpdateWithoutSolicitationInput = {
    id?: StringFieldUpdateOperationsInput | string
    previousStatus?: NullableEnumSolicitationStatusFieldUpdateOperationsInput | $Enums.SolicitationStatus | null
    newStatus?: EnumSolicitationStatusFieldUpdateOperationsInput | $Enums.SolicitationStatus
    blockedCause?: NullableStringFieldUpdateOperationsInput | string | null
    changedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    changedBy?: UserUpdateOneRequiredWithoutSolicitationHistoriesNestedInput
  }

  export type SolicitationHistoryUncheckedUpdateWithoutSolicitationInput = {
    id?: StringFieldUpdateOperationsInput | string
    previousStatus?: NullableEnumSolicitationStatusFieldUpdateOperationsInput | $Enums.SolicitationStatus | null
    newStatus?: EnumSolicitationStatusFieldUpdateOperationsInput | $Enums.SolicitationStatus
    blockedCause?: NullableStringFieldUpdateOperationsInput | string | null
    changedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    changedById?: StringFieldUpdateOperationsInput | string
  }

  export type SolicitationHistoryUncheckedUpdateManyWithoutSolicitationInput = {
    id?: StringFieldUpdateOperationsInput | string
    previousStatus?: NullableEnumSolicitationStatusFieldUpdateOperationsInput | $Enums.SolicitationStatus | null
    newStatus?: EnumSolicitationStatusFieldUpdateOperationsInput | $Enums.SolicitationStatus
    blockedCause?: NullableStringFieldUpdateOperationsInput | string | null
    changedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    changedById?: StringFieldUpdateOperationsInput | string
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