import { expect, test } from "vitest";
import { ratePassword } from "../core/passChecker";

test("Empty password are invalid", () => {
  expect(ratePassword("").valueOf()).toBe(0);
});

test("Passwords containing spaces are invalid", () => {
  expect(ratePassword("This is not a password").valueOf()).toBe(0);
});

test("Weak passwords are recognized", () => {
  expect(ratePassword("Pcg6wr").valueOf()).toBe(1);
});

test("Medium passwords are recognized", () => {
  expect(ratePassword("hsXy7op9").valueOf()).toBe(2);
});

test("Good passwords are recognized", () => {
  expect(ratePassword("sweGx8jdWza+").valueOf()).toBe(3);
});

test("Secure passwords are recognized", () => {
  expect(
    ratePassword("01H*n8B#Z0&0mm*1G^cZ6^Psrq2x1Nn@U5Bk5$psm1$*!6j").valueOf(),
  ).toBe(4);
});
