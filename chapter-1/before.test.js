import src_statement from "./code/src_statement";
import ref_statement from "./code/ref_statement";
import plays from './input/plays.json';
import invoice from './input/invoice.json';
import beStatement from './output/be-statement';

test('1챕터 - ref_statement', () => {
  expect(ref_statement(invoice, plays)).toBe(beStatement);
});
test('1챕터 - src_statement', () => {
  expect(src_statement(invoice, plays)).toBe(beStatement);
});