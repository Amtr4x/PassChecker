/**
 * Indicates the security level of a given password
 * */
export enum Rate {
  INVALID = 0,
  WEAK = 1,
  VULNERABLE = 2,
  UPGRADABLE = 3,
  SECURE = 4,
}
